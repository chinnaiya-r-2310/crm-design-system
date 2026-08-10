#!/usr/bin/env node
/**
 * Verifies that npm run build produced the expected distributable files.
 * Run with: node scripts/verify-package.mjs
 */
import { existsSync, statSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

console.log(`\nVerifying ${pkg.name}@${pkg.version}\n`);

const required = [
  { path: 'dist/index.js',   desc: 'ESM bundle' },
  { path: 'dist/index.cjs',  desc: 'CJS bundle' },
  { path: 'dist/index.d.ts', desc: 'TypeScript declarations' },
  { path: 'dist/style.css',  desc: 'CSS (design tokens + component styles)' },
];

let pass = true;

for (const { path, desc } of required) {
  const full = join(root, path);
  if (existsSync(full)) {
    const size = (statSync(full).size / 1024).toFixed(1);
    console.log(`  ✓  ${path.padEnd(28)} ${size} kB  — ${desc}`);
  } else {
    console.error(`  ✗  ${path.padEnd(28)} MISSING  — ${desc}`);
    pass = false;
  }
}

if (!pass) {
  console.error('\n  Build verification FAILED. Run "npm run build" first.\n');
  process.exit(1);
}

console.log('\n  Verification PASSED — package is ready to publish.\n');
