import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dir = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const ctx = await browser.newContext({ viewport: { width: 1800, height: 900 } });
const page = await ctx.newPage();

await page.goto('file://' + join(__dir, 'sprite-grid.html'), { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

// Take full-page screenshot split into chunks (it's very tall)
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
console.log(`Total page height: ${totalHeight}px`);

// Take shots in 900px chunks
const chunkH = 880;
const numChunks = Math.ceil(totalHeight / chunkH);
console.log(`Taking ${numChunks} screenshots...`);

for (let i = 0; i < numChunks; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * chunkH);
  await page.waitForTimeout(100);
  await page.screenshot({ 
    path: join(__dir, `sprite-grid-${String(i+1).padStart(2,'0')}.png`),
    clip: { x: 0, y: 0, width: 1800, height: 900 }
  });
}
console.log('Done.');
await browser.close();
