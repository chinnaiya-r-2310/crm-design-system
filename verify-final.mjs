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

const searchBox = await page.$('input[placeholder*="Search"], input[type="search"]');
await searchBox.click();
await searchBox.type('sprite-icon-105');
await page.waitForTimeout(1500);

await page.screenshot({ path: join(__dir, 'verify-final.png') });
console.log('Done');
await browser.close();
