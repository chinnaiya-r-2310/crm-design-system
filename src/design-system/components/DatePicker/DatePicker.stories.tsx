import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Design System/Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text input that opens a Calendar popup on click. Formats the selected date as DD/MM/YYYY.',
      },
    },
  },
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    required:    { control: 'boolean' },
    disabled:    { control: 'boolean' },
    error:       { control: 'boolean' },
    layout:      { control: 'radio', options: ['horizontal', 'vertical'] },
    width:       { control: { type: 'number', min: 200, max: 900, step: 8 } },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Date of Joining',
    layout: 'horizontal',
    width: 550,
    columns: '140px 390px',
  },
};

export const Vertical: Story = {
  args: {
    label: 'Date of Birth',
    layout: 'vertical',
    width: 280,
  },
};

export const Required: Story = {
  args: {
    label: 'Date of Joining',
    layout: 'horizontal',
    width: 550,
    columns: '140px 390px',
    required: true,
  },
};

export const WithValue: Story = {
  name: 'With Pre-selected Date',
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date(2025, 0, 15));
    return <DatePicker {...args} value={date} onChange={setDate} />;
  },
  args: {
    label: 'Date of Joining',
    layout: 'horizontal',
    width: 550,
    columns: '140px 390px',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DatePicker {...args} value={date} onChange={setDate} />
        <p style={{ margin: 0, fontSize: 13, color: '#616E88' }}>
          Selected: {date ? `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()}` : 'none'}
        </p>
      </div>
    );
  },
  args: {
    label: 'Pick a date',
    layout: 'horizontal',
    width: 550,
    columns: '140px 390px',
  },
};
