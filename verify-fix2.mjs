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

// Search for sprite-icon-1057 specifically
const searchBox = await page.$('input[placeholder*="Search"], input[type="search"]');
await searchBox.click();
await searchBox.type('sprite-icon-1057');
await page.waitForTimeout(1500);

// Get the icon data (SVG content)
const result = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button[title]'));
  return btns.map(btn => {
    const spans = Array.from(btn.querySelectorAll('span'));
    const maskSpan = spans.find(s => s.style.maskImage || s.style.webkitMaskImage);
    const maskUrl = maskSpan?.style.maskImage || maskSpan?.style.webkitMaskImage || '';
    return {
      title: btn.getAttribute('title'),
      hasMask: !!maskSpan,
      maskUrlSlice: maskUrl.slice(0, 100),
      bgColor: maskSpan?.style.backgroundColor,
      // Also check for SVG child
      hasSvg: !!btn.querySelector('svg'),
    };
  });
});

console.log('Icons found:', result.length);
result.forEach(r => console.log(JSON.stringify(r)));

// Click the first result to open detail panel
const btn = await page.$('button[title="sprite-icon-1057"]');
if (btn) {
  await btn.click();
  await page.waitForTimeout(500);
}

const shot = join(__dir, 'verify-fix2.png');
await page.screenshot({ path: shot });
console.log('Screenshot:', shot);

await browser.close();
