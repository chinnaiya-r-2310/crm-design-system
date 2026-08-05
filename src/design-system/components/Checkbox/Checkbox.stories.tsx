import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          '15×15 checkbox control. Figma: Chinnaiya Style Sheet node 15:503.',
          'States: Default, Hover, Checked, Indeterminate, Disabled, Checked Disabled, Focus, Checked Focus.',
          'Pass `label` to render text beside the control.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text', table: { category: 'Anatomy' } },
    checked: { control: 'boolean', table: { category: 'State' } },
    indeterminate: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      table: { category: 'Testing', defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Enable feature' },
};

export const Hover: Story = {
  args: { label: 'Enable feature', forceState: 'hover' },
};

export const Checked: Story = {
  args: { label: 'Enable feature', defaultChecked: true },
};

export const Focus: Story = {
  args: { label: 'Enable feature', forceState: 'focus' },
};

export const CheckedFocus: Story = {
  name: 'Checked + Focus',
  args: { label: 'Enable feature', defaultChecked: true, forceState: 'focus' },
};

export const Indeterminate: Story = {
  args: { label: 'Select all', indeterminate: true },
};

export const Disabled: Story = {
  args: { label: 'Enable feature', disabled: true },
};

export const CheckedDisabled: Story = {
  name: 'Checked + Disabled',
  args: { label: 'Enable feature', defaultChecked: true, disabled: true },
};

export const NoLabel: Story = {
  name: 'No Label',
  args: {},
};

/** All states in a grid for quick visual comparison. */
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'center' }}>
      <Checkbox label="Default" />
      <Checkbox label="Hover" forceState="hover" />
      <Checkbox label="Focus" forceState="focus" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Checked Focus" defaultChecked forceState="focus" />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked Disabled" defaultChecked disabled />
    </div>
  ),
};
