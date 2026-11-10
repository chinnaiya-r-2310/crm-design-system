import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { request } from 'node:http';
import { createGalleryServer } from './server.mjs';

function get(port, path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port, path, method }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('gallery serves assets and rejects invalid requests', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'storybook-server-'));
  await writeFile(join(root, 'index.html'), '<h1>Gallery</h1>');
  await writeFile(join(root, 'index.json'), '{"entries":{}}');
  const server = createGalleryServer(root);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    await rm(root, { recursive: true, force: true });
  });
  const port = server.address().port;
  const home = await get(port, '/');
  assert.equal(home.status, 200);
  assert.equal(home.body, '<h1>Gallery</h1>');
  assert.equal(home.headers['content-type'], 'text/html');
  assert.equal((await get(port, '/index.json')).headers['content-type'], 'application/json');
  assert.equal((await get(port, '/', 'HEAD')).body, '');
  assert.equal((await get(port, '/missing.js')).status, 404);
  assert.equal((await get(port, '/%E0%A4%A')).status, 400);
  assert.equal((await get(port, '/%2e%2e%2fsecret')).status, 403);
  assert.equal((await get(port, '/', 'POST')).status, 405);
});
