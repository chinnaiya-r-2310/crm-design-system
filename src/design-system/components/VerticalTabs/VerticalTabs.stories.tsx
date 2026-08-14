import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VerticalTabs } from './VerticalTabs';

const meta: Meta<typeof VerticalTabs> = {
  title: 'Design System/Components/VerticalTabs',
  component: VerticalTabs,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof VerticalTabs>;

// ─── Demo data (mirrors Figma "Setup" panel) ──────────────────────────────

const SETUP_ITEMS = [
  {
    id: 'general',
    label: 'General',
    children: [
      { id: 'personal-settings', label: 'Personal Settings' },
      { id: 'company-details',   label: 'Company Details' },
      { id: 'motivator',         label: 'Motivator' },
      { id: 'calendar-booking',  label: 'Calendar Booking' },
    ],
  },
  {
    id: 'users-control',
    label: 'Users and Control',
    children: [
      { id: 'users',       label: 'Users' },
      { id: 'roles',       label: 'Roles' },
      { id: 'permissions', label: 'Permissions' },
    ],
  },
  {
    id: 'channels',
    label: 'Channels',
    children: [
      { id: 'email-ch', label: 'Email' },
      { id: 'phone-ch', label: 'Phone' },
      { id: 'chat-ch',  label: 'Chat' },
    ],
  },
  {
    id: 'customization',
    label: 'Customization',
    children: [
      { id: 'fields',    label: 'Fields' },
      { id: 'layouts',   label: 'Layouts' },
      { id: 'templates', label: 'Templates' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    children: [
      { id: 'workflows', label: 'Workflows' },
      { id: 'macros',    label: 'Macros' },
    ],
  },
  {
    id: 'process-mgmt',
    label: 'Process Management',
    children: [
      { id: 'approvals', label: 'Approvals' },
      { id: 'reviews',   label: 'Reviews' },
    ],
  },
  {
    id: 'data-admin',
    label: 'Data Administration',
    children: [
      { id: 'import', label: 'Import' },
      { id: 'export', label: 'Export' },
      { id: 'backup', label: 'Backup' },
    ],
  },
  {
    id: 'developer',
    label: 'Developer Space',
    children: [
      { id: 'api-keys',     label: 'API Keys' },
      { id: 'webhooks',     label: 'Webhooks' },
      { id: 'sdks',         label: 'SDKs' },
    ],
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    children: [
      { id: 'extensions',   label: 'Extensions' },
      { id: 'integrations', label: 'Integrations' },
    ],
  },
];

// ─── Stories ─────────────────────────────────────────────────────────────────

/** Style 1 — active item: indigo background + blue text, no left border */
export const Style1: Story = {
  name: 'Style 1',
  render: () => {
    const [active, setActive] = useState('company-details');
    return (
      <VerticalTabs
        title="Setup"
        searchable
        variant="1"
        items={SETUP_ITEMS}
        activeId={active}
        onSelect={setActive}
        width={275}
      />
    );
  },
};

/** Style 2 — active item: indigo background + blue text + blue left border bar */
export const Style2: Story = {
  name: 'Style 2',
  render: () => {
    const [active, setActive] = useState('company-details');
    return (
      <VerticalTabs
        title="Setup"
        searchable
        variant="2"
        items={SETUP_ITEMS}
        activeId={active}
        onSelect={setActive}
        width={275}
      />
    );
  },
};

/** Both styles side by side */
export const AllStyles: Story = {
  name: 'All Styles',
  render: () => {
    const [active1, setActive1] = useState('company-details');
    const [active2, setActive2] = useState('company-details');
    return (
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 13, color: 'var(--ds-text-label)', marginBottom: 8, marginTop: 0 }}>Style 1</p>
          <VerticalTabs
            title="Setup"
            searchable
            variant="1"
            items={SETUP_ITEMS}
            activeId={active1}
            onSelect={setActive1}
            width={275}
          />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 13, color: 'var(--ds-text-label)', marginBottom: 8, marginTop: 0 }}>Style 2</p>
          <VerticalTabs
            title="Setup"
            searchable
            variant="2"
            items={SETUP_ITEMS}
            activeId={active2}
            onSelect={setActive2}
            width={275}
          />
        </div>
      </div>
    );
  },
};
