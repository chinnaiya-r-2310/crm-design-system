import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Design System/Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Calendar widget with single-select, range, and multi-select modes.',
          'Figma: Chinnaiya Style Sheet node 88-19100.',
          'Includes month/year picker overlay, weekend highlight, and Day/Week/Month view tabs.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['single', 'range', 'multi', 'date-of-month'],
      table: { category: 'Behaviour', defaultValue: { summary: 'single' } },
    },
    highlightWeekends: { control: 'boolean', table: { category: 'Appearance' } },
    showViewTabs:      { control: 'boolean', table: { category: 'Appearance' } },
    width:             { control: { type: 'number', min: 240, max: 400, step: 8 }, table: { category: 'Layout' } },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Default calendar — single date selection. Click any date to select it. */
export const Default: Story = {
  args: { mode: 'single', defaultMonth: new Date(2019, 5, 1) },
};

/** Single date selected — June 24, 2019. */
export const SelectedDate: Story = {
  name: 'Selected Date',
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date(2019, 5, 24));
    return (
      <Calendar
        mode="single"
        value={value}
        onChange={setValue}
        defaultMonth={new Date(2019, 5, 1)}
      />
    );
  },
};

/** Hover to preview; click to start a range, click again to end it. */
export const DateRange: Story = {
  name: 'Date Range',
  render: () => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 10));
    const [end,   setEnd]   = useState<Date | null>(new Date(2019, 5, 20));
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Calendar
          mode="range"
          rangeStart={start}
          rangeEnd={end}
          onRangeChange={(s, e) => { setStart(s); setEnd(e); }}
          defaultMonth={new Date(2019, 5, 1)}
        />
        <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 12, color: '#616E88', margin: 0 }}>
          {start ? `${start.toDateString()} → ${end ? end.toDateString() : '...'}` : 'Click a date to start'}
        </p>
      </div>
    );
  },
};

/** Multi date selection — toggle individual dates. */
export const MultiDateSelect: Story = {
  name: 'Multi Date Select',
  render: () => {
    const [dates, setDates] = useState<Date[]>([
      new Date(2019, 5, 3),
      new Date(2019, 5, 7),
      new Date(2019, 5, 14),
      new Date(2019, 5, 21),
    ]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Calendar
          mode="multi"
          selectedDates={dates}
          onMultiChange={setDates}
          defaultMonth={new Date(2019, 5, 1)}
        />
        <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 12, color: '#616E88', margin: 0 }}>
          {dates.length} date{dates.length !== 1 ? 's' : ''} selected
        </p>
      </div>
    );
  },
};

/** Weekends (Sa and Su) are highlighted in orange. */
export const WeekendIdentifier: Story = {
  name: 'Weekend Identifier',
  args: {
    mode: 'single',
    highlightWeekends: true,
    defaultMonth: new Date(2019, 5, 1),
  },
};

/** Day / Week / Month view tabs shown at the bottom. */
export const WithViewTabs: Story = {
  name: 'Day, Week & Month Tabs',
  args: {
    mode: 'single',
    showViewTabs: true,
    defaultMonth: new Date(2019, 5, 1),
  },
};

/** Click the "June 2019" header to open the month/year picker, then select a month. */
export const MonthYearPicker: Story = {
  name: 'Month / Year Picker',
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Calendar
        mode="single"
        value={value ?? undefined}
        onChange={setValue}
        defaultMonth={new Date(2019, 5, 1)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the month/year label in the header to toggle the year + month picker overlay.',
      },
    },
  },
};

/** Two calendars side-by-side sharing the same range state — used for the Date Range preset. */
export const DualCalendarRange: Story = {
  name: 'Dual Calendar Range',
  render: () => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 24));
    const [end,   setEnd]   = useState<Date | null>(new Date(2019, 6, 15));
    const handleRange = (s: Date | null, e: Date | null) => { setStart(s); setEnd(e); };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 1, background: '#D6D6E2', borderRadius: 8, overflow: 'hidden' }}>
          <Calendar
            mode="range"
            rangeStart={start}
            rangeEnd={end}
            onRangeChange={handleRange}
            defaultMonth={new Date(2019, 5, 1)}
            width={270}
          />
          <Calendar
            mode="range"
            rangeStart={start}
            rangeEnd={end}
            onRangeChange={handleRange}
            defaultMonth={new Date(2019, 6, 1)}
            width={270}
          />
        </div>
        <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 12, color: '#616E88', margin: 0 }}>
          {start?.toDateString()} → {end?.toDateString() ?? '…'}
        </p>
      </div>
    );
  },
};

/**
 * Date of Month picker — a 1–31 number grid for recurring monthly schedules.
 * No month/year header or navigation. Toggle individual day numbers.
 */
export const DateOfMonthPicker: Story = {
  name: 'Date of Month (1–31)',
  render: () => {
    const [selected, setSelected] = useState<number[]>([2, 5, 16, 23]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Calendar
          mode="date-of-month"
          selectedDayNumbers={selected}
          onDayNumbersChange={setSelected}
          width={284}
        />
        <p style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 12, color: '#616E88', margin: 0 }}>
          {selected.slice().sort((a, b) => a - b).join(', ') || '—'}
        </p>
      </div>
    );
  },
};

/** All standalone variants side by side. */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => {
    const [single,  setSingle]  = useState<Date | null>(new Date(2019, 5, 24));
    const [rStart,  setRStart]  = useState<Date | null>(new Date(2019, 5, 10));
    const [rEnd,    setREnd]    = useState<Date | null>(new Date(2019, 5, 20));
    const [multi,   setMulti]   = useState<Date[]>([new Date(2019,5,3),new Date(2019,5,7),new Date(2019,5,14)]);
    const base = new Date(2019, 5, 1);

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Single Select</p>
          <Calendar mode="single" value={single} onChange={setSingle} defaultMonth={base} />
        </div>
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date Range</p>
          <Calendar mode="range" rangeStart={rStart} rangeEnd={rEnd} onRangeChange={(s,e)=>{ setRStart(s); setREnd(e); }} defaultMonth={base} />
        </div>
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Multi Select</p>
          <Calendar mode="multi" selectedDates={multi} onMultiChange={setMulti} defaultMonth={base} />
        </div>
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Weekend Highlight</p>
          <Calendar mode="single" highlightWeekends defaultMonth={base} />
        </div>
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', fontFamily: 'var(--ds-font-family-base)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>With View Tabs</p>
          <Calendar mode="single" showViewTabs defaultMonth={base} />
        </div>
      </div>
    );
  },
};
