import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3004', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(800);

const searchBox = await page.$('input[placeholder*="Search"], input[type="search"]');
await searchBox.click();
await searchBox.type('sprite-icon');
await page.waitForTimeout(1500);

// Get all visible icon buttons with their SVG path data
const icons = await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button[title]'));
  return buttons.map(btn => {
    const svg = btn.querySelector('svg');
    const paths = Array.from(svg?.querySelectorAll('path, rect, circle, ellipse, polygon') || []);
    const rect = btn.getBoundingClientRect();

    // Compute "fill ratio" — if path data is just a simple rectangle command sequence
    const d = paths.map(p => p.getAttribute('d') || '').join(' ').trim();
    const cmds = (d.match(/[MLHVCQAZmlhvcqaz]/g) || []).join('');
    const hasRect = paths.some(p => p.tagName.toLowerCase() === 'rect');
    const hasCircle = paths.some(p => ['circle','ellipse'].includes(p.tagName.toLowerCase()));
    const pathCount = paths.length;

    // Simple solid shapes: few path commands, uses H/V = rectangle
    const isSolidRect = cmds.length <= 6 && /[hHvV]/.test(cmds) && pathCount <= 1;
    const isSolidCircle = hasCircle && pathCount <= 1 && d.length < 10;

    return {
      name: btn.getAttribute('title') || '',
      x: Math.round(rect.x + rect.width/2),
      y: Math.round(rect.y + rect.height/2),
      pathCount,
      d: d.slice(0, 80),
      cmds,
      hasRect,
      hasCircle,
      isSolidRect,
      isSolidCircle,
      isEmpty: pathCount === 0 && !svg,
    };
  }).filter(b => b.name);
});

console.log(`Visible icon buttons: ${icons.length}`);

const empty = icons.filter(i => i.isEmpty || (i.pathCount === 0 && !i.hasRect && !i.hasCircle && !i.d));
console.log(`\nEMPTY icons (no SVG content): ${empty.length}`);
empty.forEach(s => console.log(`  [${s.x},${s.y}] "${s.name}"`));

const solidRect = icons.filter(i => i.isSolidRect || (i.hasRect && i.pathCount <= 1));
console.log(`\nSOLID RECTANGLE icons: ${solidRect.length}`);
solidRect.forEach(s => console.log(`  [${s.x},${s.y}] "${s.name}" d="${s.d.slice(0,60)}"`));

// Also look for icons with very short d= (dot/circle-like)
const veryShort = icons.filter(i => i.d.length > 0 && i.d.length < 20 && !i.isSolidRect);
console.log(`\nVERY SHORT paths (dots/tiny shapes): ${veryShort.length}`);
veryShort.forEach(s => console.log(`  [${s.x},${s.y}] "${s.name}" d="${s.d}"`));

// Click a few to verify names from detail panel
const toCheck = [...empty.slice(0,3), ...solidRect.slice(0,3)];
for (const icon of toCheck) {
  await page.mouse.click(icon.x, icon.y);
  await page.waitForTimeout(400);
  const panelTitle = await page.evaluate(() => {
    // Look for the detail panel header (icon name displayed prominently)
    const h = document.querySelector('h2, h3, [class*="title"], [class*="name"]');
    return h?.textContent?.trim() || '';
  });
  if (panelTitle) console.log(`  → Panel title for "${icon.name}": "${panelTitle}"`);
}

await browser.close();
