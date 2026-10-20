import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../packages/storybook/package.json', import.meta.url), 'utf8'));
assert.equal(manifest.name, '@chinnaiya-2310/design-system-storybook', 'Gallery must use the npm owner scope');
assert.equal(manifest.publishConfig?.registry, 'https://registry.npmjs.org/', 'Gallery must publish to npmjs.com');
assert.equal(manifest.publishConfig?.access, 'public', 'Gallery must be publicly installable');

const site = new URL('../packages/storybook/site/', import.meta.url);
for (const file of ['index.html', 'iframe.html', 'index.json']) {
  assert.ok(existsSync(new URL(file, site)), `Missing ${file}. Run npm run build:storybook-package first.`);
}
const index = JSON.parse(readFileSync(new URL('index.json', site), 'utf8'));
const entries = Object.values(index.entries ?? {});
assert.ok(entries.length > 0, 'Gallery has no entries');
for (const entry of entries) {
  assert.ok(!/patterns/i.test(`${entry.title} ${entry.importPath}`), `Pattern leaked: ${entry.title}`);
  assert.match(entry.importPath, /design-system\/(components|foundations)\//, `Unexpected story: ${entry.importPath}`);
}
console.log(`Verified installable Storybook: ${entries.length} entries, zero patterns.`);
