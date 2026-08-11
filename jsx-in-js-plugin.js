// Vite plugin: transform JSX in plain .js files using esbuild.
// Required because Vite 8's OXC transformer hard-codes lang="js" for .js extensions,
// which disables JSX parsing even when oxc.jsx is configured.
import { transformSync } from 'esbuild';

export function jsxInJsPlugin() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.js') || id.includes('node_modules') || id.startsWith('\0')) {
        return null;
      }
      const result = transformSync(code, {
        loader: 'jsx',
        jsx: 'automatic',
        jsxImportSource: 'react',
        sourcemap: true,
        sourcefile: id,
      });
      return { code: result.code, map: result.map };
    },
  };
}
