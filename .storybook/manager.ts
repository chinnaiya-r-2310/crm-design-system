import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'CRM Design System',
    brandUrl: '/',
    brandImage: '/crm-design-logo.png',
  }),
});