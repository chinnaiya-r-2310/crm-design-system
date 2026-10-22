import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:3004', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(800);

// Click General category
const sidebarItems = await page.$$('nav li, aside li, [class*="sidebar"] button, [class*="Sidebar"] button');
for (const item of sidebarItems) {
  const text = await item.textContent();
  if (text?.trim() === 'General') {
    await item.click();
    break;
  }
}
// Also try clicking a link with General text
await page.click('text=General').catch(() => {});
await page.waitForTimeout(1200);

// Get all visible buttons and check which have empty/tiny content
const icons = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button[title]'));
  return btns.map(btn => {
    const rect = btn.getBoundingClientRect();
    const spans = Array.from(btn.querySelectorAll('span'));
    const hasMask = spans.some(s => s.style.maskImage || s.style.webkitMaskImage);
    const svgEl = btn.querySelector('svg');
    const svgPaths = btn.querySelectorAll('path, polyline, line, circle, ellipse, rect').length;
    const maskSpan = spans.find(s => s.style.maskImage || s.style.webkitMaskImage);
    const bgColor = maskSpan ? window.getComputedStyle(maskSpan).backgroundColor : '';
    return {
      name: btn.getAttribute('title'),
      x: Math.round(rect.x + rect.width/2),
      y: Math.round(rect.y + rect.height/2),
      hasMask,
      hasSvg: !!svgEl,
      svgPaths,
      bgColor,
      // For mask icons: check if bg is non-transparent
      maskBgIsSet: bgColor !== '' && bgColor !== 'rgba(0, 0, 0, 0)',
    };
  }).filter(b => b.name);
});

console.log(`Total icons visible: ${icons.length}`);

// Icons that look blank: mask with no bg color, OR no mask AND no svg content
const suspect = icons.filter(i => 
  (i.hasMask && !i.maskBgIsSet) ||
  (!i.hasMask && !i.hasSvg) ||
  (!i.hasMask && i.hasSvg && i.svgPaths === 0)
);

console.log(`\nSuspect blank icons: ${suspect.length}`);
suspect.forEach(s => console.log(`  [${s.x},${s.y}] "${s.name}" hasMask=${s.hasMask} hasSvg=${s.hasSvg} paths=${s.svgPaths} bg="${s.bgColor}"`));

// Take screenshot
await page.screenshot({ path: join(__dir, 'general-category.png'), fullPage: false });
console.log('\nScreenshot saved.');
await browser.close();
