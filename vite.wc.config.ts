import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/wc/index.ts'),
      name: 'CrmDesignSystemWC',
      formats: ['es'],
      fileName: () => 'index.wc.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'style.wc.css' : (assetInfo.name ?? 'asset'),
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    cssCodeSplit: false,
  },
});
