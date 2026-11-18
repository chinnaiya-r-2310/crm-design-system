import { DetailPage } from './CrmScreens.page';
import { LayoutEditorPage } from './CrmScreens.layoutEditor';

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
          'record header with actions, a related list, and related-record cards. The Layout Editor ' +
          'variant shows Setup › Modules › Leads › Layouts › Standard with the field palette and ' +
          'Create / Quick Create / Detail View canvases.',
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

export const LayoutEditorVariant = {
  name: 'Layout Editor',
  args: {
    initialView: 'create',
  },
  argTypes: {
    initialView: {
      control: 'inline-radio',
      options: ['create', 'quickCreate', 'detailView'],
      description: 'Canvas tab shown first.',
    },
  },
  render: args => <LayoutEditorPage {...args} />,
};
