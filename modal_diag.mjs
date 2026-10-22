import { chromium } from 'playwright';

const BASE  = 'https://crm4mail.localzoho.com';
const EMAIL = 'crm-uiteam@zohocorp.com';
const PASS  = 'Crmui@123';
const CREATE_URL = `${BASE}/crm/crmuiteammembers/settings/client-portal/user-types/create?step=name`;

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false, slowMo: 60 });
  const ctx  = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true });
  const page = await ctx.newPage();

  await page.goto(`${BASE}/crm/crmuiteammembers/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  if (await page.locator('#login_id').count()) {
    await page.fill('#login_id', EMAIL);
    await page.locator('#nextbtn').click();
    await page.waitForTimeout(2500);
  }
  if (await page.locator('#password').count()) {
    await page.fill('#password', PASS);
    await page.locator('#nextbtn').click();
    await page.waitForTimeout(4000);
  }
  for (let i = 0; i < 20; i++) {
    if (page.url().includes('crm4mail')) break;
    if (await page.locator('#terminate_session_skip').isVisible().catch(() => false)) { await page.locator('#terminate_session_skip').click(); await page.waitForTimeout(3000); continue; }
    if (await page.locator('#terminate_session_submit').isVisible().catch(() => false)) { await page.locator('#terminate_session_submit').click(); await page.waitForTimeout(3000); continue; }
    if (await page.locator('#openRedirectNowBtn').isVisible().catch(() => false)) { await page.locator('#openRedirectNowBtn').click(); await page.waitForTimeout(3000); continue; }
    if (await page.locator('#continuebtn').isVisible().catch(() => false)) { await page.locator('#continuebtn').click(); await page.waitForTimeout(3000); continue; }
    await page.waitForTimeout(2000);
  }

  await page.goto(CREATE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);

  // Click first exp card
  const expCards = page.locator('.cpT_expCard');
  if (await expCards.count()) await expCards.first().click();
  await page.waitForTimeout(1000);

  // Hover thumb and trigger preview via lyte component
  const thumbs = page.locator('.cpT_templateThumb');
  await thumbs.first().hover();
  await page.waitForTimeout(700);

  // Trigger preview
  await page.evaluate(() => {
    const compEl = document.querySelector('crm-client-portal-user-type');
    if (compEl) {
      const inst = compEl.$lyte || compEl.$L;
      if (inst && typeof inst.openTemplatePreview === 'function') {
        inst.openTemplatePreview('template0', 'Default');
        return;
      }
    }
    // fallback: force click
    const btn = document.querySelector('.cpT_thumbBtn--preview');
    if (btn) {
      const overlays = document.querySelectorAll('.cpT_thumbOverlay, .cpT_templatePreview');
      for (const o of overlays) o.style.pointerEvents = 'none';
      btn.click();
      for (const o of overlays) o.style.pointerEvents = '';
    }
  });
  await page.waitForTimeout(2000);

  // Dump full computed style tree of .lyteModal and its parents
  const dump = await page.evaluate(() => {
    const modal = document.querySelector('.cpT_previewModalWrap .lyteModal');
    const wrapper = document.querySelector('.cpT_previewModalWrap');
    const results = [];

    function dumpEl(el, label) {
      if (!el) return;
      const cs = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      results.push({
        label,
        tag: el.tagName,
        cls: (el.className||'').slice(0,100),
        rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
        style: {
          position: cs.position,
          top: cs.top,
          bottom: cs.bottom,
          left: cs.left,
          right: cs.right,
          marginTop: cs.marginTop,
          transform: cs.transform,
          alignItems: cs.alignItems,
          justifyContent: cs.justifyContent,
          display: cs.display,
          flexDirection: cs.flexDirection,
          height: cs.height,
          maxHeight: cs.maxHeight,
        },
        inlineStyle: el.getAttribute('style') || ''
      });
    }

    dumpEl(wrapper, 'wrapper(.cpT_previewModalWrap)');
    dumpEl(modal, '.lyteModal');

    // Walk ALL ancestors from modal up to body
    let el = modal ? modal.parentElement : (wrapper ? wrapper.parentElement : null);
    let depth = 0;
    while (el && el !== document.body && depth < 10) {
      dumpEl(el, `parent[${depth}]`);
      el = el.parentElement;
      depth++;
    }

    // Also dump all children of wrapper
    if (wrapper) {
      for (const child of wrapper.children) {
        dumpEl(child, `wrapper-child: ${child.tagName}.${(child.className||'').split(' ')[0]}`);
      }
    }

    return JSON.stringify(results, null, 2);
  });

  console.log('=== FULL MODAL DUMP ===');
  console.log(dump);

  await page.screenshot({ path: '/tmp/modal_diag.png' });
  console.log('Screenshot: /tmp/modal_diag.png');
  await browser.close();
})();
