import type { StorybookConfig } from '@storybook/react-vite';
import { jsxInJsPlugin } from '../jsx-in-js-plugin.js';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    config.base = '/crm-design-system/';
    config.plugins = [...(config.plugins ?? []), jsxInJsPlugin()];
    // Tell Rolldown's dep scanner that .js files contain JSX
    const existingRolldown = (config.optimizeDeps as any)?.rolldownOptions ?? {};
    (config.optimizeDeps as any) = {
      ...config.optimizeDeps,
      rolldownOptions: {
        ...existingRolldown,
        moduleTypes: { ...existingRolldown.moduleTypes, '.js': 'jsx' },
      },
    };
    return config;
  },
};
export default config;