import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/wc/index.ts'),
      name: 'CrmDesignSystemWC',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'wc.css' : (assetInfo.name ?? 'asset'),
      },
    },
    outDir: 'dist/wc',
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: false,
    minify: false,
  },
});
