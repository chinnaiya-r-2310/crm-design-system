import type { StorybookConfig } from '@storybook/react-vite';
import { jsxInJsPlugin } from '../jsx-in-js-plugin.js';

const config: StorybookConfig = {
  // The installable gallery explicitly includes only components and foundations.
  stories: process.env.STORYBOOK_PUBLIC === 'true'
    ? [
        '../src/design-system/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../src/design-system/foundations/**/*.stories.@(js|jsx|mjs|ts|tsx)',
      ]
    : [
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
  viteFinal: async (config, { configType }) => {
    // Storybook's development middleware serves preview modules from the root.
    // Only the deployed GitHub Pages build needs the repository path prefix.
    config.base = process.env.STORYBOOK_PUBLIC === 'true'
      ? './'
      : configType === 'PRODUCTION' ? '/crm-design-system/' : '/';
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