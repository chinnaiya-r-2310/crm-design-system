import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dropdown select with a floating option panel. ' +
          'Matches the Option Comp (node 208-28857) and Dropdown Value (node 239-37380) from the Chinnaiya Style Sheet. ' +
          'Supports hover, selected, disabled option states, and optional search.',
      },
    },
  },
  argTypes: {
    label:       { control: 'text',    table: { category: 'Content' } },
    placeholder: { control: 'text',    table: { category: 'Content' } },
    helperText:  { control: 'text',    table: { category: 'Content' } },
    searchable:  { control: 'boolean', table: { category: 'Modifiers' } },
    required:    { control: 'boolean', table: { category: 'State' } },
    disabled:    { control: 'boolean', table: { category: 'State' } },
    error:       { control: 'boolean', table: { category: 'State' } },
    layout:      { control: 'radio', options: ['horizontal', 'vertical'], table: { category: 'Layout' } },
    options:     { control: false },
    onChange:    { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// ─────────────────────────────────────────────────────────────────────────────
// Sample data
// ─────────────────────────────────────────────────────────────────────────────

const LEAD_STATUS = [
  { value: 'new',         label: 'New' },
  { value: 'contacted',   label: 'Contacted' },
  { value: 'qualified',   label: 'Qualified' },
  { value: 'proposal',    label: 'Proposal Sent' },
  { value: 'negotiation', label: 'Negotiation' },
  { value: 'won',         label: 'Won' },
  { value: 'lost',        label: 'Lost' },
];

const LEAD_SOURCE = [
  { value: 'web',      label: 'Web Site' },
  { value: 'call',     label: 'Cold Call' },
  { value: 'referral', label: 'Referral' },
  { value: 'email',    label: 'Email Campaign' },
  { value: 'social',   label: 'Social Media' },
  { value: 'event',    label: 'Trade Show' },
];

const COUNTRIES = [
  { value: 'us',  label: 'United States' },
  { value: 'uk',  label: 'United Kingdom' },
  { value: 'ca',  label: 'Canada' },
  { value: 'au',  label: 'Australia' },
  { value: 'in',  label: 'India' },
  { value: 'de',  label: 'Germany' },
  { value: 'fr',  label: 'France' },
  { value: 'jp',  label: 'Japan' },
  { value: 'br',  label: 'Brazil' },
  { value: 'mx',  label: 'Mexico' },
  { value: 'sg',  label: 'Singapore' },
  { value: 'ae',  label: 'UAE' },
  { value: 'za',  label: 'South Africa' },
];

const WITH_DISABLED = [
  { value: 'active',    label: 'Active' },
  { value: 'inactive',  label: 'Inactive', disabled: true },
  { value: 'pending',   label: 'Pending' },
  { value: 'suspended', label: 'Suspended', disabled: true },
  { value: 'closed',    label: 'Closed' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Interactive playground — use Controls to adjust all props. */
export const Playground: Story = {
  render: (args) => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    label: 'Lead Status',
    options: LEAD_STATUS,
    width: 622,
  },
};

/** Default state — no value selected. */
export const Default: Story = {
  args: {
    searchable: true
  },

  name: 'Default',

  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Lead Status"
        options={LEAD_STATUS}
        value={val}
        onChange={setVal}
        width={622}
      />
    );
  }
};

/** Pre-selected value. */
export const WithValue: Story = {
  name: 'With Selected Value',
  render: () => {
    const [val, setVal] = useState('qualified');
    return (
      <Dropdown
        label="Lead Status"
        options={LEAD_STATUS}
        value={val}
        onChange={setVal}
        width={622}
      />
    );
  },
};

/** Required field — red left-edge indicator. */
export const Required: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Lead Status"
        options={LEAD_STATUS}
        value={val}
        onChange={setVal}
        required
        width={622}
      />
    );
  },
};

/** Error state with helper text. */
export const ErrorState: Story = {
  name: 'Error State',
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Lead Status"
        options={LEAD_STATUS}
        value={val}
        onChange={setVal}
        required
        error
        helperText="Please select a lead status."
        width={622}
      />
    );
  },
};

/** Disabled — no interaction possible. */
export const Disabled: Story = {
  render: () => (
    <Dropdown
      label="Lead Status"
      options={LEAD_STATUS}
      value="qualified"
      disabled
      width={622}
    />
  ),
};

/** Options with some disabled entries. */
export const WithDisabledOptions: Story = {
  name: 'With Disabled Options',
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Account Status"
        options={WITH_DISABLED}
        value={val}
        onChange={setVal}
        width={622}
      />
    );
  },
};

/** Searchable — filter options by typing. */
export const Searchable: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Country"
        options={COUNTRIES}
        value={val}
        onChange={setVal}
        searchable
        width={622}
      />
    );
  },
};

/** Searchable with a long list — shows scrollable panel. */
export const SearchableScrollable: Story = {
  name: 'Searchable — Long List',
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Country"
        options={COUNTRIES}
        value={val}
        onChange={setVal}
        searchable
        helperText="Scroll or search to find your country."
        width={622}
      />
    );
  },
};

/** Vertical layout — label stacked above the trigger. */
export const VerticalLayout: Story = {
  name: 'Vertical Layout',
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Dropdown
        label="Lead Source"
        options={LEAD_SOURCE}
        value={val}
        onChange={setVal}
        layout="vertical"
        width={300}
      />
    );
  },
};

/** All visual states side-by-side. */
export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const [vals, setVals] = useState<Record<string, string>>({
      default: '',
      value: 'qualified',
      required: '',
      error: '',
      disabled: 'qualified',
    });
    const set = (k: string) => (v: string) => setVals(prev => ({ ...prev, [k]: v }));

    const row: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16, width: 622 };
    return (
      <div style={row}>
        <Dropdown label="Default" options={LEAD_STATUS} value={vals.default} onChange={set('default')} width={622} />
        <Dropdown label="With Value" options={LEAD_STATUS} value={vals.value} onChange={set('value')} width={622} />
        <Dropdown label="Required" options={LEAD_STATUS} value={vals.required} onChange={set('required')} required width={622} />
        <Dropdown label="Error" options={LEAD_STATUS} value={vals.error} onChange={set('error')} error helperText="This field is required." width={622} />
        <Dropdown label="Disabled" options={LEAD_STATUS} value={vals.disabled} disabled width={622} />
      </div>
    );
  },
};

/** Multi-select — checkbox per option, Done button in footer. */
export const MultiSelect: Story = {
  name: 'Multi-Select',
  render: () => {
    const [vals, setVals] = useState<string[]>([]);
    return (
      <Dropdown
        label="Lead Status"
        options={LEAD_STATUS}
        selectedValues={vals}
        onMultiChange={setVals}
        multiSelect
        searchable
        placeholder="Select statuses"
        width={622}
      />
    );
  },
};

/** Footer action — "+ Add new" button pinned at the bottom of the panel. */
export const WithFooterAction: Story = {
  name: 'Footer Action',
  render: () => {
    const [val, setVal] = useState('');
    const [opts, setOpts] = useState(LEAD_STATUS);
    return (
      <Dropdown
        label="Lead Status"
        options={opts}
        value={val}
        onChange={setVal}
        searchable
        footerAction={{
          label: 'Add new status',
          onClick: () => {
            const label = prompt('Enter new status label');
            if (label) setOpts(prev => [...prev, { value: label.toLowerCase().replace(/\s+/g, '-'), label }]);
          },
        }}
        width={622}
      />
    );
  },
};

/** Grouped options — options with a group key render under named headings. */
export const WithGroups: Story = {
  name: 'With Groups',
  render: () => {
    const [val, setVal] = useState('');
    const grouped = [
      { value: 'new',       label: 'New',       group: 'Open' },
      { value: 'contacted', label: 'Contacted',  group: 'Open' },
      { value: 'qualified', label: 'Qualified',  group: 'Open' },
      { value: 'proposal',  label: 'Proposal Sent', group: 'In Progress' },
      { value: 'negotiation', label: 'Negotiation', group: 'In Progress' },
      { value: 'won',       label: 'Won',        group: 'Closed' },
      { value: 'lost',      label: 'Lost',       group: 'Closed' },
    ];
    return (
      <Dropdown
        label="Pipeline Stage"
        options={grouped}
        value={val}
        onChange={setVal}
        width={622}
      />
    );
  },
};

/** Two dropdowns in a form context. */
export const InForm: Story = {
  name: 'In Form Context',
  render: () => {
    const [status, setStatus] = useState('');
    const [source, setSource] = useState('');
    const card: React.CSSProperties = {
      width: 670,
      background: 'var(--ds-bg-common-card)',
      borderRadius: 8,
      border: '1px solid var(--ds-components-input-default-outline)',
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--ds-font-family-base)',
    };
    return (
      <div style={card}>
        <Dropdown label="Lead Status" options={LEAD_STATUS} value={status} onChange={setStatus} required width={622} />
        <Dropdown label="Lead Source" options={LEAD_SOURCE} value={source} onChange={setSource} width={622} />
      </div>
    );
  },
};
