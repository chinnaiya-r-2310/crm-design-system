import assert from 'node:assert/strict';
import { test } from 'node:test';
import { chromium } from 'playwright';

// Run against a running Storybook: node --test scripts/usage-limit-list.browser.test.mjs
// Portable story tests skip dynamic docs-source generation, so they cannot catch
// owner-tree serialization failures in the actual Storybook preview.
const baseURL = process.env.STORYBOOK_URL || 'http://localhost:6006';

for (const variant of ['create-notification', 'add-external-apps']) {
  test(`notification list stays responsive in Storybook: ${variant}`, { timeout: 30000 }, async () => {
    const browser = await chromium.launch({ args: ['--no-sandbox'] });
    try {
      const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => {
        if (message.type() === 'error') errors.push(message.text());
      });
      // Keep the list idle, as for a person opening it, rather than running play.
      await page.addInitScript(() => Object.defineProperty(navigator, 'webdriver', { get: () => false }));
      const story = `work-items-usage-limit-notification--${variant}`;
      await page.goto(`${baseURL}/?path=/story/${story}`, { waitUntil: 'domcontentloaded' });
      const canvas = page.frameLocator('#storybook-preview-iframe');
      const userGroup = canvas.getByRole('button', { name: 'User Defined, 16 notifications' });
      const systemCount = variant === 'add-external-apps' ? 47 : 3;
      const systemGroup = canvas.getByRole('button', { name: `System Defined, ${systemCount} notifications` });
      await userGroup.waitFor();
      assert.equal(await canvas.getByRole('button', { name: 'Filter notifications by type' }).count(), 0);
      assert.deepEqual(await canvas.locator('.table-report thead th').allTextContents(),
        ['', 'Notification Name', 'Feature', 'Notify via', 'Last Modified', 'Last Triggered On', 'Status']);
      const avatars = canvas.locator('.usage-page__person img');
      assert.equal(await avatars.count(), 16);
      assert.equal(await avatars.evaluateAll(images => images.every(image => image.complete && image.naturalWidth > 0)), true);
      const firstUserRow = canvas.locator('.table-report-group-body').first().locator('tr').nth(1);
      assert.match(await firstUserRow.locator('td').nth(4).locator('img').getAttribute('src'), /user_04\.jpg$/);
      const initialCountWidth = (await userGroup.locator('.usage-page__group-count').boundingBox()).width;
      assert.match(await firstUserRow.locator('td').nth(4).innerText(), /Jul 3, 2026/);
      assert.equal(await firstUserRow.locator('td').nth(5).innerText(), 'Nov 26, 2026, 10:30 AM');
      const triggeredDate = firstUserRow.locator('.usage-page__triggered-date');
      assert.equal(await triggeredDate.evaluate(element => {
        const content = element.closest('.table-report-group-content');
        const text = element.getBoundingClientRect();
        const bounds = content.getBoundingClientRect();
        const style = getComputedStyle(content);
        return text.left >= bounds.left + parseFloat(style.paddingLeft)
          && text.right <= bounds.right - parseFloat(style.paddingRight);
      }), true, 'Last Triggered On must display the complete timestamp');
      for (const [index, total, ratio] of [[0, 16, 0.7], [1, systemCount, 0.35]]) {
        const values = await canvas.locator('.table-report-group-body').nth(index)
          .locator('.usage-page__triggered-date').allTextContents();
        assert.equal(values.length, total);
        assert.equal(values.filter(value => value !== '-').length, Math.round(total * ratio));
        assert.ok(values.includes('-'), 'Untriggered notifications retain the empty marker');
      }
      await systemGroup.click({ position: { x: 80, y: 20 } });
      const finalGroupCell = systemGroup.locator('xpath=ancestor::td');
      assert.equal(await finalGroupCell.evaluate(e => getComputedStyle(e).borderBottomWidth), '0px');
      assert.equal(await canvas.locator('.usage-page__table-region').evaluate(e => getComputedStyle(e).borderBottomWidth), '1px');
      assert.equal(await userGroup.locator('xpath=ancestor::td').evaluate(e => getComputedStyle(e).borderBottomWidth), '1px');
      await systemGroup.click({ position: { x: 80, y: 20 } });
      assert.equal(await finalGroupCell.evaluate(e => getComputedStyle(e).borderBottomWidth), '1px');
      const groupRow = userGroup.locator('xpath=ancestor::tr');
      const background = await groupRow.evaluate(e => getComputedStyle(e).backgroundColor);
      await userGroup.hover({ position: { x: 80, y: 20 } });
      assert.equal(await groupRow.evaluate(e => getComputedStyle(e).backgroundColor), background);
      assert.equal(await userGroup.locator('.usage-page__group-chevron').evaluate(e =>
        getComputedStyle(e).color === getComputedStyle(e).getPropertyValue('--ds-text-label').trim()
        || (() => {
          const probe = document.createElement('span');
          probe.style.color = 'var(--ds-text-label)';
          e.parentElement.append(probe);
          const matches = getComputedStyle(probe).color === getComputedStyle(e).color;
          probe.remove();
          return matches;
        })()), true);
      const lastUserCell = userGroup.locator('xpath=ancestor::tbody').locator('tr:last-child > td').first();
      const normalCell = userGroup.locator('xpath=ancestor::tbody').locator('tr:nth-child(2) > td').first();
      assert.equal(await lastUserCell.evaluate(e => getComputedStyle(e).borderBottom),
        await normalCell.evaluate(e => getComputedStyle(e).borderBottom));
      assert.equal(await lastUserCell.evaluate(e => getComputedStyle(e).borderBottomWidth), '1px');
      for (let cycle = 0; cycle < 3; cycle++) {
        // Click the heading's visible left edge even in a horizontally scrolled table.
        await userGroup.click({ position: { x: 80, y: 20 } });
        assert.equal(await userGroup.getAttribute('aria-expanded'), 'false');
        await userGroup.click({ position: { x: 80, y: 20 } });
        assert.equal(await userGroup.getAttribute('aria-expanded'), 'true');
      }
      const search = canvas.getByRole('searchbox', { name: 'Search notifications' });
      await search.fill('Slow webhook');
      const filteredGroup = canvas.getByRole('button', { name: 'User Defined, 1 notifications' });
      await filteredGroup.waitFor();
      const filteredCount = filteredGroup.locator('.usage-page__group-count');
      assert.ok((await filteredCount.boundingBox()).width < initialCountWidth, 'Count capsule should shrink to fit shorter text');
      assert.equal(await filteredCount.evaluate(e => getComputedStyle(e).fontSize), '12px');
      assert.equal(await systemGroup.count(), 0);
      await search.fill('');
      await systemGroup.waitFor();
      const systemRow = canvas.locator('.table-report-group-body').nth(1).locator('tr').nth(1);
      await systemRow.locator('.usage-page__name').click();
      assert.equal(await canvas.getByRole('textbox', { name: 'Notification Name' }).count(), 0,
        'System notification names must not bypass the disabled Edit action');
      await systemRow.getByRole('button', { name: /^More options for / }).click();
      const editOption = canvas.getByRole('option', { name: 'Edit', exact: true });
      assert.equal(await editOption.getAttribute('aria-disabled'), 'true');
      assert.notEqual(await canvas.getByRole('option', { name: 'Clone', exact: true }).getAttribute('aria-disabled'), 'true');
      await editOption.click({ force: true });
      assert.equal(await canvas.getByRole('textbox', { name: 'Notification Name' }).count(), 0);
      await canvas.locator('.dropdown-backdrop').click({ position: { x: 100, y: 100 } });
      await firstUserRow.getByRole('button', { name: /^More options for / }).click();
      assert.notEqual(await editOption.getAttribute('aria-disabled'), 'true');
      await editOption.click();
      await canvas.getByRole('textbox', { name: 'Notification Name' }).waitFor();
      await canvas.getByRole('textbox', { name: 'Notification Name' }).waitFor();
      assert.equal(await canvas.locator('.sb-errordisplay').isVisible(), false);
      assert.deepEqual(errors, []);
    } finally {
      await browser.close();
    }
  });
}

test('initial state has 47 system notifications, smooth groups, and screen shortcuts', { timeout: 30000 }, async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => Object.defineProperty(navigator, 'webdriver', { get: () => false }));
    await page.goto(`${baseURL}/?path=/story/work-items-usage-limit-notification--initial-state`);
    const canvas = page.frameLocator('#storybook-preview-iframe');
    const group = canvas.getByRole('button', { name: 'System Defined, 47 notifications' });
    await group.waitFor();
    assert.equal(await canvas.locator('.usage-page__group').count(), 1);
    assert.equal(await group.getAttribute('aria-expanded'), 'false');
    assert.equal(await group.locator('xpath=ancestor::td').evaluate(e => getComputedStyle(e).borderBottomWidth), '0px');
    assert.equal(await canvas.getByRole('button', { name: 'API usage reached 60%', exact: true }).count(), 0);
    const badge = await group.locator('.usage-page__group-count').boundingBox();
    assert.ok(badge.width > badge.height, 'Count badge should be capsule-shaped');
    await group.click({ position: { x: 80, y: 20 } });
    await canvas.getByRole('button', { name: 'API usage reached 60%', exact: true }).waitFor();
    assert.equal(await canvas.locator('.usage-page__name').count(), 47);
    assert.equal(await group.locator('.usage-page__group-count').evaluate(e => getComputedStyle(e).fontSize), '12px');
    assert.equal(await group.locator('xpath=ancestor::td').evaluate(e => getComputedStyle(e).borderBottomStyle), 'solid');
    const body = group.locator('xpath=ancestor::tbody');
    await body.evaluate(async e => {
      await Promise.all(e.getAnimations({ subtree: true }).map(animation => animation.finished));
    });
    const expandedHeight = await body.evaluate(e => e.getBoundingClientRect().height);
    // Start sampling in the same task as the click, before browser automation
    // can wait out the short animation on slower machines.
    const heights = await body.evaluate(async e => {
      e.querySelector('.usage-page__group').click();
      const values = [];
      for (let frame = 0; frame < 20; frame++) {
        await new Promise(requestAnimationFrame);
        values.push(e.getBoundingClientRect().height);
      }
      return values;
    });
    assert.ok(heights.some(height => height > 50 && height < expandedHeight - 1));
    await body.evaluate(async e => {
      await Promise.all(e.getAnimations({ subtree: true }).map(animation => animation.finished));
    });
    assert.ok(await body.evaluate(e => e.getBoundingClientRect().height) < 50);
    assert.equal(await canvas.getByRole('button', { name: 'API usage reached 60%', exact: true }).count(), 0);
    await group.click({ position: { x: 80, y: 20 } });
    await canvas.getByRole('button', { name: 'API usage reached 60%', exact: true }).waitFor();
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await canvas.locator('.table-report-group-reveal').first().evaluate(e => getComputedStyle(e).transitionDuration), '0s');
    await canvas.locator('.sorting-hat-button').click();
    await canvas.getByRole('menuitem', { name: 'Default', exact: true }).click();
    await canvas.getByRole('button', { name: 'User Defined, 16 notifications' }).waitFor();
    await canvas.locator('.sorting-hat-button').click();
    await canvas.getByRole('menuitem', { name: 'Initial State', exact: true }).click();
    await group.waitFor();
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
