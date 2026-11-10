import { DetailPage } from './CrmScreens.page';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Design System/Patterns/CRM Screens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'CRM record screens built from existing components. The Detail Page variant shows a ' +
          'record header with actions, a related list, and related-record cards.',
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const DetailPageVariant = {
  name: 'Detail Page',
  render: () => <DetailPage />,
};
