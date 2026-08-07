import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'primary = flat bar with underline, secondary = pill container',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: ['md', 'sm'],
      description: 'md = 35px, sm = 26px (primary) / 30px (secondary)',
      table: { defaultValue: { summary: 'md' } },
    },
    showCount: {
      control: 'boolean',
      description: 'Show count badges. Tabs without a count value are unaffected.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const TABS_BASIC: TabItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'activity', label: 'Activity' },
  { id: 'emails', label: 'Emails' },
  { id: 'calls', label: 'Calls' },
  { id: 'meetings', label: 'Meetings' },
];

const TABS_WITH_COUNT: TabItem[] = [
  { id: 'open', label: 'Open', count: 12 },
  { id: 'in-progress', label: 'In Progress', count: 5 },
  { id: 'closed', label: 'Closed', count: 128 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function InteractiveTabs(props: Omit<React.ComponentProps<typeof Tabs>, 'activeTab' | 'onChange'>) {
  const [active, setActive] = useState(props.tabs[0].id);
  return <Tabs {...props} activeTab={active} onChange={setActive} />;
}

const L = (text: string) => (
  <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 13, color: 'var(--ds-text-label)', marginBottom: 12, marginTop: 0 }}>{text}</p>
);

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Primary Tab — flat bar with sliding underline. Click to switch. */
export const PrimaryTab: Story = {
  name: 'Primary Tab',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div>
        {L('md — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="primary" />
      </div>
      <div>
        {L('md — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="md" variant="primary" showCount />
      </div>
      <div>
        {L('sm — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="primary" />
      </div>
      <div>
        {L('sm — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="sm" variant="primary" showCount />
      </div>
    </div>
  ),
};

/** Secondary Tab — pill container with sliding filled-pill indicator. Click to switch. */
export const SecondaryTab: Story = {
  name: 'Secondary Tab',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div>
        {L('md — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="secondary" />
      </div>
      <div>
        {L('md — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="md" variant="secondary" showCount />
      </div>
      <div>
        {L('sm — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="secondary" />
      </div>
      <div>
        {L('sm — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="sm" variant="secondary" showCount />
      </div>
    </div>
  ),
};

/** Both variants side by side for comparison. */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        {L('Primary — md')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="primary" />
      </div>
      <div>
        {L('Primary — sm')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="primary" />
      </div>
      <div>
        {L('Secondary — md')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="secondary" />
      </div>
      <div>
        {L('Secondary — sm')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="secondary" />
      </div>
    </div>
  ),
};
