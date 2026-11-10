import { chromium } from 'playwright';
import { mkdirSync, readdirSync } from 'fs';

const BASE  = 'https://crm4mail.localzoho.com';
const EMAIL = 'crm-uiteam@zohocorp.com';
const PASS  = 'Crmui@123';
const OUT   = '/Users/chinna-2310/pw_portal_screenshots';
mkdirSync(OUT, { recursive: true });

// The real create user-type flow URL (step=name is first step)
// step progression: name → experience → (templates|widgets|ai) → ...
const CREATE_URL = `${BASE}/crm/crmuiteammembers/settings/client-portal/user-types/create?step=name`;

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false, slowMo: 80 });
  const ctx  = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true });
  const page = await ctx.newPage();

  // ── 1. Navigate to CRM (will redirect to Zoho Accounts login) ─────────────
  await page.goto(`${BASE}/crm/crmuiteammembers/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${OUT}/01_initial.png` });
  console.log('01 url:', page.url());

  // ── 2. Email step ──────────────────────────────────────────────────────────
  if (await page.locator('#login_id').count()) {
    await page.fill('#login_id', EMAIL);
    await page.locator('#nextbtn').click();
    await page.waitForTimeout(2500);
    console.log('02 after email:', page.url());
  }

  // ── 3. Password step ───────────────────────────────────────────────────────
  if (await page.locator('#password').count()) {
    await page.fill('#password', PASS);
    await page.locator('#nextbtn').click();
    await page.waitForTimeout(4000);
    console.log('03 after pass:', page.url());
  }

  // ── 4. Handle post-login interstitials (block-sessions, trust-device, etc.) ─
  for (let i = 0; i < 20; i++) {
    if (page.url().includes('crm4mail')) break;
    console.log(`04[${i}] interstitial:`, page.url());

    if (await page.locator('#terminate_session_skip').isVisible().catch(() => false)) {
      await page.locator('#terminate_session_skip').click(); await page.waitForTimeout(3000); continue;
    }
    if (await page.locator('#terminate_session_submit').isVisible().catch(() => false)) {
      await page.locator('#terminate_session_submit').click(); await page.waitForTimeout(3000); continue;
    }
    if (await page.locator('#openRedirectNowBtn').isVisible().catch(() => false)) {
      await page.locator('#openRedirectNowBtn').click(); await page.waitForTimeout(3000); continue;
    }
    if (await page.locator('#continuebtn').isVisible().catch(() => false)) {
      await page.locator('#continuebtn').click(); await page.waitForTimeout(3000); continue;
    }
    await page.waitForTimeout(2000);
  }

  await page.screenshot({ path: `${OUT}/05_crm_home.png` });
  console.log('05 after login:', page.url());

  if (!page.url().includes('crm4mail')) {
    console.error('ERROR: CRM not reached. URL:', page.url());
    await browser.close(); process.exit(1);
  }

  // ── 5. Navigate to the Create User-Type wizard (step=name) ────────────────
  await page.goto(CREATE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: `${OUT}/06_create_step_name.png`, fullPage: true });
  console.log('06 create step=name url:', page.url());

  // ── 6. The wizard already shows experience radio buttons on step=name ──────
  // Radio buttons with name="portalExperience" and #nextTab button are visible.
  // We DON'T need to fill a name text input — the wizard is already on experience step.

  // Dump page text to understand what's shown
  const pageText = await page.locator('body').innerText().catch(() => '');
  console.log('Page text on create page:', pageText.slice(0, 500));

  // Screenshot the wizard as-is (experience choices should be visible)
  await page.screenshot({ path: `${OUT}/06b_wizard_state.png`, fullPage: true });

  // ── 7. Look for experience cards ──────────────────────────────────────────
  async function tryExperienceCards() {
    const expCards = page.locator('.cpT_expCard');
    const cnt = await expCards.count();
    console.log('Experience cards (.cpT_expCard):', cnt);
    return cnt;
  }

  let expCount = await tryExperienceCards();

  // If no .cpT_expCard, check for the radio-button based cards via their labels
  if (!expCount) {
    // Try alternate selectors
    const altCards = page.locator('[for="portalExperience"], label[class*="expCard"], label[class*="experience"], .lyteRadioItem, lyte-radio label');
    const altCount = await altCards.count();
    console.log('Alt experience card count:', altCount);
    if (altCount > 0) expCount = altCount;
  }

  if (expCount > 0) {
    const expCards = page.locator('.cpT_expCard');
    await page.screenshot({ path: `${OUT}/07_experience_cards.png` });

    // ── 7a. Choose from Templates ──────────────────────────────────────────
    await expCards.first().click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${OUT}/08_choose_templates.png` });

    const thumbs = page.locator('.cpT_templateThumb');
    console.log('Template thumbs:', await thumbs.count());

    if (await thumbs.count()) {
      // Helper: trigger openTemplatePreview via lyte component registry or force click
      async function clickPreviewOf(thumbIdx) {
        await thumbs.nth(thumbIdx).scrollIntoViewIfNeeded();
        await thumbs.nth(thumbIdx).hover();
        await page.waitForTimeout(600);

        const clicked = await page.evaluate((idx) => {
          const btns = Array.from(document.querySelectorAll('.cpT_thumbBtn--preview'));
          const btn = btns[idx];
          if (!btn) return `no btn at idx ${idx}`;

          // Method 1: call the lyte component action directly
          const compEl = document.querySelector('crm-client-portal-user-type');
          if (compEl) {
            // lyte components expose methods via $lyte or $L
            const inst = compEl.$lyte || compEl.$L;
            if (inst && typeof inst.openTemplatePreview === 'function') {
              const keys = ['template0','template1','template2','template3'];
              const names = ['Default','Classic','Modern','Minimal'];
              inst.openTemplatePreview(keys[idx], names[idx]);
              return `lyte inst openTemplatePreview(${keys[idx]})`;
            }
            // Try via $Lyte global registry
            if (window.$Lyte && window.$Lyte.Component) {
              const instances = window.$Lyte.Component.instances || {};
              for (const key in instances) {
                const i = instances[key];
                if (i && i.element === compEl && typeof i.openTemplatePreview === 'function') {
                  const keys2 = ['template0','template1','template2','template3'];
                  const names2 = ['Default','Classic','Modern','Minimal'];
                  i.openTemplatePreview(keys2[idx], names2[idx]);
                  return `$Lyte registry openTemplatePreview(${keys2[idx]})`;
                }
              }
            }
          }

          // Method 2: Dispatch a synthetic click directly on lyte-button's shadow/inner button
          const lyteBtn = btn.shadowRoot ? btn.shadowRoot.querySelector('button') : null;
          if (lyteBtn) {
            // Disable all overlays temporarily
            const overlays = document.querySelectorAll('.cpT_thumbOverlay, .cpT_templatePreview, .cpT_tp0DataRow, .cpT_tp1DataRow, .cpT_tp2Cards, .cpT_tp3Table');
            const saved = [];
            for (const ov of overlays) { saved.push({ el: ov, pe: ov.style.pointerEvents }); ov.style.pointerEvents = 'none'; }
            lyteBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
            for (const s of saved) { s.el.style.pointerEvents = s.pe; }
            return `shadow inner button click`;
          }

          // Method 3: Force-remove all overlapping pointer-event barriers and fire the lyte-button click
          const allEls = document.elementsFromPoint(
            btn.getBoundingClientRect().left + btn.getBoundingClientRect().width / 2,
            btn.getBoundingClientRect().top + btn.getBoundingClientRect().height / 2
          );
          const saved2 = [];
          for (const el of allEls) {
            if (el !== btn && !btn.contains(el)) {
              saved2.push({ el, pe: el.style.pointerEvents });
              el.style.pointerEvents = 'none';
            }
          }
          btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, composed: true }));
          for (const s of saved2) { s.el.style.pointerEvents = s.pe; }
          return `elementsFromPoint force-click, bypassed ${saved2.length} elements`;
        }, thumbIdx);

        console.log(`Preview action for thumb[${thumbIdx}]:`, clicked);
        return true;
      }

      // Helper: screenshot the preview modal using bounding rect clip (avoids element visibility issues)
      async function screenshotPreviewModal(outPath) {
        const rect = await page.evaluate(() => {
          const el = document.querySelector('.cpT_previewModalWrap');
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left, y: r.top, width: r.width, height: r.height };
        });
        if (rect && rect.width > 0 && rect.height > 0) {
          await page.screenshot({ path: outPath, clip: rect });
          console.log('  Captured modal via clip rect:', outPath, JSON.stringify(rect));
          return true;
        }
        // Fallback: full page screenshot
        console.log('  Modal rect not found, taking full page screenshot:', outPath);
        await page.screenshot({ path: outPath });
        return false;
      }

      const totalThumbs = await thumbs.count();
      console.log('Total template thumbs:', totalThumbs);

      for (let tIdx = 0; tIdx < totalThumbs; tIdx++) {
        console.log(`\n--- Previewing template ${tIdx + 1} ---`);
        // Move mouse away first, then hover on target thumb
        await page.mouse.move(0, 0);
        await page.waitForTimeout(300);
        await thumbs.nth(tIdx).scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await thumbs.nth(tIdx).hover();
        await page.waitForTimeout(700);
        await page.screenshot({ path: `${OUT}/0${9+tIdx}_thumb${tIdx+1}_hover.png` });

        await clickPreviewOf(tIdx);
        // Wait for lyte-modal to open
        await page.waitForTimeout(1500);

        // Dump the modal structure on first preview to understand hierarchy
        if (tIdx === 0) {
          const modalHTML = await page.evaluate(() => {
            const wrapper = document.querySelector('.cpT_previewModalWrap');
            if (!wrapper) return 'NO WRAPPER';
            // Dump: tag, class, id, computed top/transform for each ancestor level
            const info = [];
            let el = wrapper;
            while (el && el !== document.body) {
              const cs = window.getComputedStyle(el);
              info.push({
                tag: el.tagName,
                id: el.id,
                cls: (el.className || '').slice(0, 80),
                top: cs.top,
                transform: cs.transform,
                position: cs.position,
                alignItems: cs.alignItems,
                justifyContent: cs.justifyContent,
                marginTop: cs.marginTop,
              });
              el = el.parentElement;
            }
            return JSON.stringify(info, null, 2);
          });
          console.log('=== MODAL STRUCTURE ===\n', modalHTML.slice(0, 3000));
        }

        // Fix: pin modal wrapper and all positioned ancestors to top of viewport
        await page.evaluate(() => {
          const wrapper = document.querySelector('.cpT_previewModalWrap');
          if (!wrapper) return;

          // Walk up from wrapper and override any element that positions it away from top
          let el = wrapper;
          while (el && el !== document.body) {
            const cs = window.getComputedStyle(el);
            // Override flex alignment that centers vertically
            if (cs.alignItems === 'center' || cs.justifyContent === 'center') {
              el.style.alignItems = 'flex-start';
            }
            // Override translate/transform centering
            if (cs.transform && cs.transform !== 'none') {
              el.style.transform = 'none';
            }
            // Override top offset
            if (cs.position === 'fixed' || cs.position === 'absolute') {
              el.style.top = '0px';
              el.style.marginTop = '0px';
              el.style.bottom = 'auto';
            }
            el = el.parentElement;
          }

          // Also patch any inner dialog element
          for (const child of wrapper.querySelectorAll('[role="dialog"], [class*="Modal"], [class*="modal"], [class*="Popup"], [class*="popup"]')) {
            child.style.top = '0px';
            child.style.marginTop = '0px';
            child.style.transform = 'none';
          }
        });
        await page.waitForTimeout(600);

        const modalRect = await page.evaluate(() => {
          // DOM: lyte-wormhole > .modalWrapper.cpT_previewModalWrap > .lyteModal (the visible dialog)
          // .cpT_previewModalWrap is full viewport (fixed, top:0), so clip to .lyteModal inside it
          const lyteModal = document.querySelector('.cpT_previewModalWrap .lyteModal');
          if (lyteModal) {
            const r = lyteModal.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) return { x: r.left, y: r.top, width: r.width, height: r.height };
          }
          // Fallback: try the wrapper itself
          const wrapper = document.querySelector('.cpT_previewModalWrap');
          if (wrapper) {
            const r = wrapper.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) return { x: r.left, y: r.top, width: r.width, height: r.height };
          }
          return null;
        });

        if (modalRect) {
          await page.screenshot({ path: `${OUT}/1${tIdx}_preview${tIdx+1}_modal.png`, clip: modalRect });
          const txt = await page.evaluate(() => {
            const w = document.querySelector('.cpT_previewModalWrap .lyteModal') || document.querySelector('.cpT_previewModalWrap');
            return w ? w.innerText.slice(0, 120) : '';
          });
          console.log(`  Preview ${tIdx+1} modal rect: top=${modalRect.y}, text:`, txt);
        } else {
          await page.screenshot({ path: `${OUT}/1${tIdx}_preview${tIdx+1}_modal.png` });
          console.log(`  Preview ${tIdx+1}: modal rect not found, full screenshot taken`);
        }

        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);
        // Move mouse away to reset hover state
        await page.mouse.move(100, 100);
        await page.waitForTimeout(400);
      }
    }

    // ── 7b. Use Widgets ────────────────────────────────────────────────────
    if (expCount >= 2) {
      await expCards.nth(1).click();
      await page.waitForTimeout(700);
      await page.screenshot({ path: `${OUT}/12_use_widgets.png` });
    }

    // ── 7c. Build with AI ──────────────────────────────────────────────────
    if (expCount >= 3) {
      await expCards.nth(2).click();
      await page.waitForTimeout(700);
      await page.screenshot({ path: `${OUT}/13_build_ai.png` });
    }

  } else {
    // Dump page for debugging
    const pg = await page.locator('body').innerText().catch(() => '');
    console.log('NO EXPERIENCE CARDS. Page text:', pg.slice(0, 800));
    await page.screenshot({ path: `${OUT}/07_debug_no_cards.png`, fullPage: true });

    // Dump full DOM of visible content
    const dom = await page.evaluate(() => document.body.innerHTML.slice(0, 3000));
    console.log('BODY HTML snippet:', dom);
  }

  // ── Final ──────────────────────────────────────────────────────────────────
  await page.screenshot({ path: `${OUT}/99_final.png`, fullPage: true });
  console.log(`\n✅  Screenshots saved to: ${OUT}\n`);
  readdirSync(OUT).sort().forEach(f => console.log(' ', f));

  await browser.close();
})();
