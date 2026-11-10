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
await page.waitForTimeout(600);
await page.click('text=General').catch(() => {});
await page.waitForTimeout(1200);

// Get icon names at the approximate positions of the solid squares (~y=654, x ~933-1067)
const icons = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button[title]'));
  // Find icons in the row around y=654
  return btns
    .filter(btn => {
      const r = btn.getBoundingClientRect();
      return r.top >= 620 && r.top <= 690;
    })
    .map(btn => ({
      name: btn.getAttribute('title'),
      x: Math.round(btn.getBoundingClientRect().x + btn.getBoundingClientRect().width/2),
      y: Math.round(btn.getBoundingClientRect().y + btn.getBoundingClientRect().height/2),
    }));
});

console.log('Icons in row 9:');
icons.forEach(i => console.log(`  [${i.x},${i.y}] "${i.name}"`));

await browser.close();
