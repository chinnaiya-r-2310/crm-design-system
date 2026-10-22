import { chromium } from 'playwright';
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const GALLERY = 'http://localhost:3004';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
const page = await ctx.newPage();

// Fetch all general icons via API
async function fetchAll() {
  const all = [];
  let cursor = 0;
  while (true) {
    const url = `${GALLERY}/api/local-icons?category=general&limit=300&cursor=${cursor}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle' });
    const data = JSON.parse(await page.content().then(html => {
      const m = html.match(/<pre[^>]*>([\s\S]*?)<\/pre>/);
      return m ? m[1] : html.replace(/<[^>]+>/g, '');
    }));
    const icons = data.icons || [];
    all.push(...icons);
    console.log(`  Fetched cursor=${cursor}: +${icons.length} icons (total ${all.length})`);
    if (!data.nextCursor) break;
    cursor = data.nextCursor;
  }
  return all;
}

console.log('Fetching all general icons...');
const allIcons = await fetchAll();
console.log(`Total: ${allIcons.length} icons`);

// For each icon, measure fill ratio using canvas
// We render SVG as image onto canvas and count dark pixels
async function measureFillRatios(icons) {
  const results = [];
  const BATCH = 50;
  
  for (let i = 0; i < icons.length; i += BATCH) {
    const batch = icons.slice(i, i + BATCH);
    
    const batchResults = await page.evaluate(async (batchIcons) => {
      const out = [];
      for (const icon of batchIcons) {
        try {
          const svg = icon.svgContent || '';
          if (!svg) { out.push({ name: icon.name, ratio: 0, pathCount: 0, error: 'no-svg' }); continue; }
          
          // Count SVG elements for complexity
          const pathCount = (svg.match(/<path\b/g) || []).length;
          const circleCount = (svg.match(/<circle\b/g) || []).length;
          const rectCount = (svg.match(/<rect\b/g) || []).length;
          const lineCount = (svg.match(/<(line|polyline)\b/g) || []).length;
          const totalElements = pathCount + circleCount + rectCount + lineCount;
          
          // Check for hardcoded colors (not currentColor or none)
          const colorVals = [...svg.matchAll(/(?:fill|stroke)="([^"]+)"/gi)]
            .map(m => m[1].toLowerCase())
            .filter(v => v !== 'none' && v !== 'currentcolor' && !v.startsWith('url('));
          const hasHardcodedColor = colorVals.length > 0;
          
          // Render to canvas
          const canvas = document.createElement('canvas');
          canvas.width = 32; canvas.height = 32;
          const ctx = canvas.getContext('2d');
          
          await new Promise((resolve, reject) => {
            const img = new Image();
            const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
            img.onload = () => {
              ctx.fillStyle = 'white';
              ctx.fillRect(0, 0, 32, 32);
              ctx.drawImage(img, 0, 0, 32, 32);
              resolve();
            };
            img.onerror = () => reject(new Error('img-error'));
            img.src = dataUrl;
            setTimeout(resolve, 300); // fallback
          }).catch(() => {});
          
          const data = ctx.getImageData(0, 0, 32, 32).data;
          let darkPixels = 0;
          for (let p = 0; p < data.length; p += 4) {
            const r = data[p], g = data[p+1], b = data[p+2];
            const lum = 0.299*r + 0.587*g + 0.114*b;
            if (lum < 180) darkPixels++;
          }
          const ratio = darkPixels / (32 * 32);
          
          out.push({ name: icon.name, ratio, pathCount, totalElements, hasHardcodedColor, colorVals });
        } catch(e) {
          out.push({ name: icon.name, ratio: -1, error: String(e) });
        }
      }
      return out;
    }, batch);
    
    results.push(...batchResults);
    if ((i / BATCH) % 5 === 0) process.stdout.write(`  Measured ${i + batch.length}/${icons.length}\r`);
  }
  return results;
}

await page.goto('about:blank');
console.log('\nMeasuring fill ratios...');
const measured = await measureFillRatios(allIcons);

// Write results
writeFileSync(join(__dir, 'icon-audit.json'), JSON.stringify(measured, null, 2));
console.log(`\nResults written. Analyzing...`);

// Classify
const solid   = measured.filter(m => m.ratio > 0.82);
const blank   = measured.filter(m => m.ratio >= 0 && m.ratio < 0.02 && !m.error);
const proper  = measured.filter(m => m.ratio >= 0.02 && m.ratio <= 0.82);

console.log(`\nSolid-fill (>82% dark): ${solid.length}`);
solid.slice(0, 30).forEach(m => console.log(`  ${m.name.padEnd(35)} fill=${(m.ratio*100).toFixed(1)}% paths=${m.pathCount} elems=${m.totalElements}`));
if (solid.length > 30) console.log(`  ... and ${solid.length - 30} more`);

console.log(`\nNearly blank (<2% dark): ${blank.length}`);
blank.forEach(m => console.log(`  ${m.name} ratio=${(m.ratio*100).toFixed(1)}%`));

console.log(`\nProper icons: ${proper.length}`);

await browser.close();
