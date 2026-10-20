#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createGalleryServer } from './server.mjs';

const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log('Usage: design-system-storybook [--port 6006]\nServes the pattern-free gallery at http://127.0.0.1:6006');
  process.exit(0);
}
let port = 6006;
for (let i = 0; i < args.length; i++) {
  if (args[i] !== '--port' || !/^\d+$/.test(args[i + 1] ?? '')) {
    console.error('Invalid arguments. Use --help for usage.');
    process.exit(1);
  }
  port = Number(args[++i]);
}
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('Port must be between 1 and 65535.');
  process.exit(1);
}
const site = fileURLToPath(new URL('./site/', import.meta.url));
if (!existsSync(new URL('./site/index.html', import.meta.url))) {
  console.error('Gallery build is missing. Reinstall the published package or build it from the repository.');
  process.exit(1);
}
const server = createGalleryServer(site);
server.on('error', (error) => {
  console.error(`Unable to start gallery: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => console.log(`Design System Storybook: http://127.0.0.1:${port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
