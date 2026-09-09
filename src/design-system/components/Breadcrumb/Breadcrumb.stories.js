import { Breadcrumb } from './Breadcrumb';

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Design System/Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Navigation breadcrumb trail. Clicking an ancestor item makes it the selected (current) item. Last item is selected by default. Fully uncontrolled out of the box; pass selectedIndex + onSelect for controlled usage.',
      },
    },
  },
};

export default meta;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function Section({ title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontSize: 11, color: '#8C9BAB', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </span>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default',
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home' },
        { label: 'Deals' },
        { label: 'Deal Details' },
      ]}
    />
  ),
};

export const TwoLevels = {
  name: 'Two levels',
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Contacts' },
        { label: 'John Smith' },
      ]}
    />
  ),
};

export const SingleItem = {
  name: 'Single item (current only)',
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Dashboard' },
      ]}
    />
  ),
};

export const DeepTrail = {
  name: 'Deep trail — 4 levels',
  render: () => (
    <Breadcrumb
      items={[
        { label: 'CRM' },
        { label: 'Accounts' },
        { label: 'Zoho Corp' },
        { label: 'New Deal' },
      ]}
    />
  ),
};

export const AllVariations = {
  name: 'All variations',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Section title="Two levels">
        <Breadcrumb items={[{ label: 'Contacts' }, { label: 'John Smith' }]} />
      </Section>
      <Section title="Three levels">
        <Breadcrumb items={[{ label: 'Home' }, { label: 'Deals' }, { label: 'Deal Details' }]} />
      </Section>
      <Section title="Four levels">
        <Breadcrumb items={[{ label: 'CRM' }, { label: 'Accounts' }, { label: 'Zoho Corp' }, { label: 'New Deal' }]} />
      </Section>
      <Section title="Current only">
        <Breadcrumb items={[{ label: 'Dashboard' }]} />
      </Section>
    </div>
  ),
};
