// Run manually while connected to the internal CRM icon documentation server.
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const base = 'http://zcrm-ui-imac:8888/Ui-team/Muneeshwaran/2021/crm-icon-helpdoc/';
const output = fileURLToPath(new URL('../src/design-system/foundations/icons/catalog/', import.meta.url));
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  const entries = new Map();
  const capture = async () => {
    const items = await page.evaluate(() => {
      const results = [];
      const painted = ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'opacity', 'fill-opacity', 'stroke-opacity'];
      function expand(original, seen = new Set()) {
        if (original.tagName.toLowerCase() === 'use') {
          const href = original.getAttribute('href') || original.getAttribute('xlink:href');
          if (!href?.startsWith('#') || seen.has(href)) return '';
          const target = document.getElementById(href.slice(1));
          if (!target) throw new Error(`Missing icon reference ${href}`);
          const next = new Set(seen); next.add(href);
          return `<g transform="translate(${Number(original.getAttribute('x') || 0)} ${Number(original.getAttribute('y') || 0)})">${expand(target, next)}</g>`;
        }
        const tag = original.tagName.toLowerCase();
        if (['script', 'style', 'foreignobject'].includes(tag)) return '';
        const clone = document.createElementNS('http://www.w3.org/2000/svg', ['symbol', 'svg'].includes(tag) ? 'g' : tag);
        for (const a of original.attributes) if (!['id', 'class', 'style', 'viewBox', 'xmlns'].includes(a.name) && !a.name.startsWith('on')) clone.setAttribute(a.name, a.value);
        const style = getComputedStyle(original);
        for (const attr of painted) {
          let value = style.getPropertyValue(attr);
          if ((attr === 'fill' || attr === 'stroke') && /^(rgb\(0, 0, 0\)|rgb\(49, 57, 73\))$/.test(value)) value = 'currentColor';
          if (value) clone.setAttribute(attr, value);
        }
        clone.innerHTML = [...original.children].map(child => expand(child, seen)).join('');
        return clone.outerHTML;
      }
      for (const li of document.querySelectorAll('li:not(.iconDivider)')) {
        const svg = li.querySelector('svg');
        if (svg) {
          const use = svg.querySelector('use');
          const href = use?.getAttribute('href');
          const target = href?.startsWith('#') ? document.getElementById(href.slice(1)) : null;
          if (!target) continue;
          const source = li.querySelector('crmutil-icon')?.getAttribute('icon-class') || svg.getAttribute('class');
          results.push({ source, keywords: li.textContent.trim(), viewBox: target.getAttribute('viewBox') || '0 0 24 24', markup: expand(svg), kind: 'vector' });
          continue;
        }
        const candidates = [...li.querySelectorAll('span')].filter(el => { const s = getComputedStyle(el); return s.maskImage !== 'none' || s.backgroundImage !== 'none'; });
        const el = candidates.at(-1);
        if (!el) continue;
        const style = getComputedStyle(el);
        const masked = style.maskImage !== 'none';
        const url = (masked ? style.maskImage : style.backgroundImage).match(/url\(["']?(.*?)["']?\)/)?.[1];
        if (!url) continue;
        const [x,y] = (masked ? style.maskPosition : style.backgroundPosition).split(' ').map(parseFloat);
        results.push({ source: el.className, keywords: li.textContent.trim(), kind: masked ? 'mask' : 'background', url, x: -x, y: -y, width: parseFloat(style.width), height: parseFloat(style.height) });
      }
      return results;
    });
    for (const item of items) entries.set(`${item.kind}:${item.source}`, item);
  };
  await capture();
  await page.locator('lyte-tab-title[lt-prop-id="tabs2"]').evaluate(el => el.click());
  await capture();
  await page.locator('lyte-accordion-item.logos lyte-accordion-header').evaluate(el => el.click());
  await page.waitForTimeout(300); await capture();
  await page.locator('lyte-accordion-item.Feature-Specific lyte-accordion-header').evaluate(el => el.click());
  await page.waitForTimeout(300); await capture();
  await page.locator('lyte-tab-title[lt-prop-id="featureSpecificMaskTab"]').evaluate(el => el.click());
  await page.waitForTimeout(300); await capture();
  const assets = new Map();
  const names = new Set();
  const catalog = [];
  for (const item of entries.values()) {
    const words = item.source.split(/\s+/).filter(word => !['zcicn_black','zcicn_embedSvg','zcicn-cssIcons'].includes(word));
    const primary = words.find(word => /^zcicncss-/.test(word)) || words.find(word => /^zcicn-/.test(word) && !/sprite/.test(word)) || words[0];
    const stem = primary.replace(/^(zcicncss|zcicn|zcicincss)-/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
    let name = `Crm${item.kind === 'mask' ? 'Mask' : ''}${stem.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(s => s[0].toUpperCase()+s.slice(1)).join('')}`;
    if (names.has(name)) name += words.slice(1).map(s=>s.replace(/[^a-zA-Z0-9]/g,'')).join('') || 'Variant';
    const unique = name; let suffix = 2; while(names.has(name)) name = unique + suffix++;
    names.add(name);
    if (item.kind !== 'vector') {
      if (!assets.has(item.url)) {
        const text = await page.evaluate(async url => {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Cannot download ${url}`);
          return response.text();
        }, item.url);
        if (!text.includes('<svg')) throw new Error('Expected a text SVG sprite');
        // URL-encoded names (for example %20) are decoded by Vite's dev server.
        // Store URL-safe filenames so raw SVG imports work in development too.
        const basename = decodeURIComponent(path.basename(new URL(item.url).pathname))
          .replace(/[^a-zA-Z0-9._-]+/g, '-');
        const file = `sprite-${assets.size}-${basename}`;
        await writeFile(path.join(output, file), text);
        const size = await page.evaluate(async url => { const img = new Image(); img.src = url; await img.decode(); return [img.naturalWidth, img.naturalHeight]; }, item.url);
        assets.set(item.url, { file, size });
      }
      const {file,size} = assets.get(item.url);
      item.asset = file; item.spriteWidth = size[0]; item.spriteHeight = size[1]; delete item.url;
    }
    catalog.push({ name, ...item, keywords: [...new Set(`${stem} ${item.keywords} ${item.source}`.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean))].join(' ') });
  }
  await writeFile(path.join(output, 'catalog.json'), JSON.stringify(catalog, null, 2)+'\n');
  const files = [...assets.values()].map(item => item.file);
  await writeFile(path.join(output, 'sprites.ts'), files.map((file, index) => `import sprite${index} from ${JSON.stringify('./'+file+'?raw')};`).join('\n') + '\nexport const sprites: Record<string, string> = {\n' + files.map((file,index) => `  ${JSON.stringify(file)}: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(sprite${index}),`).join('\n') + '\n};\n');
  console.log(`Imported ${catalog.length} icons (${catalog.filter(x=>x.kind==='vector').length} vectors, ${catalog.filter(x=>x.kind==='mask').length} masks), ${assets.size} local sprites.`);
} finally { await browser.close(); }
