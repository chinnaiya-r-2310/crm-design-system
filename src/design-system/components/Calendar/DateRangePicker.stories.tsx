import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Design System/Components/Calendar/Date Range Picker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Dropdown picker with preset ranges (Yesterday, Last 7 Days, etc.) plus single or dual-calendar selection.',
          'Figma: Chinnaiya Style Sheet node 88-19100 — "Date Range Picker" section.',
          'Supports controlled and uncontrolled modes.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean', table: { category: 'State' } },
    width:    { control: { type: 'number', min: 200, max: 500, step: 8 }, table: { category: 'Layout' } },
    placeholder: { control: 'text', table: { category: 'Content' } },
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

/** Default — no date selected, click to open preset list. */
export const Default: Story = {
  args: { width: 320, placeholder: 'Select date range' },
};

/** Controlled — start and end dates already set. */
export const WithValue: Story = {
  name: 'With Date Range',
  render: (args) => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 24));
    const [end,   setEnd]   = useState<Date | null>(new Date(2019, 6, 15));
    return (
      <DateRangePicker
        {...args}
        startDate={start}
        endDate={end}
        onChange={(s, e) => { setStart(s); setEnd(e); }}
      />
    );
  },
  args: { width: 320 },
};

/** Disabled state — trigger is not interactive. */
export const Disabled: Story = {
  args: { width: 320, disabled: true, placeholder: 'Not available' },
};

/** Full interactive demo — shows selection updating in real time. */
export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => {
    const [start, setStart] = useState<Date | null>(null);
    const [end,   setEnd]   = useState<Date | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        <DateRangePicker
          startDate={start}
          endDate={end}
          onChange={(s, e) => { setStart(s); setEnd(e); }}
          width={340}
        />
        {(start || end) && (
          <p style={{
            margin: 0,
            fontFamily: 'var(--ds-font-family-base)',
            fontSize: 12,
            color: '#616E88',
            background: '#F5F6FA',
            padding: '6px 12px',
            borderRadius: 6,
          }}>
            {start ? start.toDateString() : '–'} → {end ? end.toDateString() : '–'}
          </p>
        )}
      </div>
    );
  },
};
