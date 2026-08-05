import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toggle switch built on a native checkbox. ' +
          'Figma: Chinnaiya Style Sheet node 31:9146. ' +
          'Four states: Default, Checked, Disable, Checked Disable.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      table: { category: 'Layout', defaultValue: { summary: 'right' } },
    },
    checked: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: 'Enable notifications' },
};

export const Checked: Story = {
  args: { label: 'Enable notifications', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Locked setting', disabled: true },
};

export const CheckedDisabled: Story = {
  name: 'Checked + Disabled',
  args: { label: 'Locked on', defaultChecked: true, disabled: true },
};

export const NoLabel: Story = {
  name: 'No label',
  args: {},
};

export const LabelLeft: Story = {
  name: 'Label on left',
  args: { label: 'Dark mode', labelPosition: 'left' },
};

export const Interactive: Story = {
  name: 'Interactive (controlled)',
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--ds-font-family-base)' }}>
        <Switch
          label={on ? 'Notifications: On' : 'Notifications: Off'}
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Switch label="Default (off)" />
      <Switch label="Checked (on)" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Checked + Disabled" defaultChecked disabled />
    </div>
  ),
};
