import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { GroupButton } from './GroupButton';

const meta: Meta<typeof GroupButton> = {
  title: 'Design System/Components/GroupButton',
  component: GroupButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A row of labelled toggle buttons. Supports single-select and multi-select modes. ' +
          'Commonly used for day-of-week pickers and similar compact option groups.',
      },
    },
  },
  argTypes: {
    multiSelect: { control: 'boolean', table: { category: 'Behaviour' } },
    showBadge:   { control: 'boolean', table: { category: 'Appearance' } },
    disabled:    { control: 'boolean', table: { category: 'State' } },
    itemWidth:   { control: 'number',  table: { category: 'Layout' } },
    itemHeight:  { control: 'number',  table: { category: 'Layout' } },
    gap:         { control: 'number',  table: { category: 'Layout' } },
  },
};

export default meta;
type Story = StoryObj<typeof GroupButton>;

const DAYS = [
  { value: 'Mon', label: 'Mon' },
  { value: 'Tue', label: 'Tue' },
  { value: 'Wed', label: 'Wed' },
  { value: 'Thu', label: 'Thu' },
  { value: 'Fri', label: 'Fri' },
  { value: 'Sat', label: 'Sat' },
  { value: 'Sun', label: 'Sun' },
];

// ── Multi-select (day picker) ─────────────────────────────────────────────

export const DayPicker: Story = {
  name: 'Multi-select (Day Picker)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['Mon', 'Wed']);
    return (
      <GroupButton
        options={DAYS}
        value={selected}
        onChange={(v) => setSelected(v as string[])}
        multiSelect
        showBadge
      />
    );
  },
};

// ── Single-select ─────────────────────────────────────────────────────────

export const SingleSelect: Story = {
  name: 'Single-select',
  render: () => {
    const [selected, setSelected] = useState('Tue');
    return (
      <GroupButton
        options={DAYS}
        value={selected}
        onChange={(v) => setSelected(v as string)}
        multiSelect={false}
        showBadge={false}
      />
    );
  },
};

// ── No badge ──────────────────────────────────────────────────────────────

export const NoBadge: Story = {
  name: 'Multi-select, no badge',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['Fri', 'Sat', 'Sun']);
    return (
      <GroupButton
        options={DAYS}
        value={selected}
        onChange={(v) => setSelected(v as string[])}
        multiSelect
        showBadge={false}
      />
    );
  },
};

// ── Disabled ─────────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <GroupButton
      options={DAYS}
      value={['Mon', 'Fri']}
      multiSelect
      disabled
    />
  ),
};

// ── Custom options ────────────────────────────────────────────────────────

export const CustomOptions: Story = {
  name: 'Custom options',
  render: () => {
    const opts = [
      { value: 'q1', label: 'Q1' },
      { value: 'q2', label: 'Q2' },
      { value: 'q3', label: 'Q3' },
      { value: 'q4', label: 'Q4' },
    ];
    const [selected, setSelected] = useState<string[]>(['q1']);
    return (
      <GroupButton
        options={opts}
        value={selected}
        onChange={(v) => setSelected(v as string[])}
        multiSelect
        itemWidth={60}
      />
    );
  },
};
