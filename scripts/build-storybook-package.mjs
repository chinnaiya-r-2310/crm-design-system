import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(readFileSync(new URL('../node_modules/storybook/package.json', import.meta.url), 'utf8'));
const bin = typeof manifest.bin === 'string' ? manifest.bin : manifest.bin.storybook;
const result = spawnSync(process.execPath, [
  resolve(root, 'node_modules/storybook', bin), 'build',
  '--output-dir', 'packages/storybook/site', '--disable-telemetry',
], { cwd: root, stdio: 'inherit', env: { ...process.env, STORYBOOK_PUBLIC: 'true' } });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await import('./verify-storybook-package.mjs');
