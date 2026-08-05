import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Design System/Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '15×15 radio button control. Figma: Chinnaiya Style Sheet node 31:9080.',
          'States: Default, Hover, Checked, Disabled, Checked Disabled, Focus, Checked Focus.',
          'Group radio buttons by sharing the same `name` prop.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text', table: { category: 'Anatomy' } },
    checked: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      table: { category: 'Testing', defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: 'Option A' },
};

export const Hover: Story = {
  args: { label: 'Option A', forceState: 'hover' },
};

export const Checked: Story = {
  args: { label: 'Option A', defaultChecked: true },
};

export const Focus: Story = {
  args: { label: 'Option A', forceState: 'focus' },
};

export const CheckedFocus: Story = {
  name: 'Checked + Focus',
  args: { label: 'Option A', defaultChecked: true, forceState: 'focus' },
};

export const Disabled: Story = {
  args: { label: 'Option A', disabled: true },
};

export const CheckedDisabled: Story = {
  name: 'Checked + Disabled',
  args: { label: 'Option A', defaultChecked: true, disabled: true },
};

/** Radio group — mutually exclusive selection via shared name. */
export const Group: Story = {
  name: 'Radio Group',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio name="locale" label="English (US)" defaultChecked />
      <Radio name="locale" label="English (UK)" />
      <Radio name="locale" label="French" />
      <Radio name="locale" label="German" disabled />
    </div>
  ),
};

/** All states in a grid for quick visual comparison. */
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'center' }}>
      <Radio label="Default" />
      <Radio label="Hover" forceState="hover" />
      <Radio label="Focus" forceState="focus" />
      <Radio label="Checked" defaultChecked />
      <Radio label="Checked Focus" defaultChecked forceState="focus" />
      <Radio label="Disabled" disabled />
      <Radio label="Checked Disabled" defaultChecked disabled />
    </div>
  ),
};
