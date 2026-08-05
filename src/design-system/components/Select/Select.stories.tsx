import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const LEAD_STATUS_OPTIONS = [
  { value: 'new',         label: 'New' },
  { value: 'contacted',   label: 'Contacted' },
  { value: 'qualified',   label: 'Qualified' },
  { value: 'proposal',    label: 'Proposal Sent' },
  { value: 'negotiation', label: 'Negotiation' },
  { value: 'won',         label: 'Won' },
  { value: 'lost',        label: 'Lost' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Select> = {
  title: 'Design System/Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Dropdown select with the same two-column form layout as Input.',
          'The trigger always shows a ChevronDown icon in a 32px right slot.',
          'Displays placeholder text when no value is selected.',
          'Shares all visual states with Input: hover, focus, required, disabled, error.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label in the left column',
      table: { category: 'Anatomy' },
    },
    placeholder: {
      control: 'text',
      description: 'Text shown when no option is selected',
      table: { category: 'Anatomy', defaultValue: { summary: 'None' } },
    },
    helperText: {
      control: 'text',
      description: 'Assistive copy below the trigger',
      table: { category: 'Anatomy' },
    },
    value: {
      control: 'text',
      description: 'Currently selected option value',
      table: { category: 'Anatomy' },
    },
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '`horizontal` = 40% label / 60% trigger. `vertical` = stacked.',
      table: { category: 'Layout', defaultValue: { summary: 'horizontal' } },
    },
    width: {
      control: { type: 'number', min: 200, max: 1200, step: 8 },
      description: 'Total component width in px',
      table: { category: 'Layout', defaultValue: { summary: '670' } },
    },
    required: {
      control: 'boolean',
      description: 'Shows the red mandatory indicator on the left edge',
      table: { category: 'Behaviour' },
    },
    disabled: {
      control: 'boolean',
      description: 'Gray background, no interaction',
      table: { category: 'Behaviour' },
    },
    error: {
      control: 'boolean',
      description: 'Error state — border and helper text turn #FF5D5A',
      table: { category: 'Behaviour' },
    },
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      description: 'Force a visual state — for Storybook and visual tests only',
      table: { category: 'Testing', defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Default — no value selected, shows placeholder "None". */
export const Default: Story = {
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** A value is currently selected — trigger shows the option label. */
export const WithValue: Story = {
  name: 'With Value',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Hover state — border turns #797883. */
export const Hover: Story = {
  name: 'Hover',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'hover',
  },
};

/** Focus state — border turns #5464F2 with blue glow. */
export const Focus: Story = {
  name: 'Focus',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'focus',
  },
};

/** Required — red mandatory indicator on the left edge of the trigger. */
export const Required: Story = {
  name: 'Required',
  args: {
    label: 'Lead Status',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Disabled — gray background, not interactive. */
export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Lead Status',
    value: 'new',
    disabled: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Read-only — muted background, lock badge replaces chevron, value is not changeable. */
export const ReadOnly: Story = {
  name: 'Read Only',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    readOnly: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Error — border and helper text turn #FF5D5A. */
export const Error: Story = {
  name: 'Error',
  args: {
    label: 'Lead Status',
    helperText: 'Please select a lead status.',
    error: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Full anatomy — label, placeholder, helper text, and required indicator. */
export const FullAnatomy: Story = {
  name: 'Full Anatomy',
  args: {
    label: 'Lead Status',
    placeholder: 'None',
    helperText: 'Select the current stage of this lead.',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
  },
};

/** Vertical layout — label stacked above the trigger. */
export const Vertical: Story = {
  name: 'Vertical Layout',
  args: {
    label: 'Lead Status',
    width: 390,
    layout: 'vertical',
    options: LEAD_STATUS_OPTIONS,
  },
};
