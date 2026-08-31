import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal/Modal';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { FormSection } from '../components/FormSection/FormSection';
import { DateTimeInput } from '../components/Input/DateTimeInput';
import { Input } from '../components/Input/Input';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { Tags } from '../components/Tags/Tags';
import { Radio } from '../components/Radio/Radio';
import { Calendar } from '../components/Calendar/Calendar';
import { GroupButton } from '../components/GroupButton/GroupButton';
import { Info } from '../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Patterns/Send Dashboard Scheduler',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal pattern for scheduling a dashboard email report — ' +
          'configure send options, frequency, start date/time, and delivery preferences.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function todayDDMMYYYY(): string {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

function formatEnds(ends: string, endsAfterN: number, endsOnDate: string): string {
  if (ends === 'after_n') return `, ends after ${endsAfterN} ${endsAfterN === 1 ? 'time' : 'times'}`;
  if (ends === 'on_date' && endsOnDate) return `, ends on ${endsOnDate}`;
  return '';
}

function formatScheduleSummary(
  dateStr: string, timeStr: string,
  frequency: string, everyN: number,
  ends: string, endsAfterN: number, endsOnDate: string,
  selectedDays: string[],
  monthlyMode: string, selectedMonthDays: number[],
  monthlyPos: string, monthlyWeekDay: string,
  quarterMonthPos: string, quarterDay: string,
  yearlyMonths: string[], yearlyOn: string,
): string {
  if (!dateStr || !timeStr) return '';
  const tail = formatEnds(ends, endsAfterN, endsOnDate);

  if (frequency === 'daily') {
    const unit = everyN === 1 ? 'day' : 'days';
    return `Email will be sent every ${everyN} ${unit} from ${dateStr}, at ${timeStr} IST${tail}`;
  }
  if (frequency === 'weekly') {
    const unit = everyN === 1 ? 'week' : 'weeks';
    const dayList = selectedDays.length > 0 ? ` on ${selectedDays.join(', ')}` : '';
    return `Email will be sent every ${everyN} ${unit}${dayList} from ${dateStr}, at ${timeStr} IST${tail}`;
  }
  if (frequency === 'monthly') {
    const unit = everyN === 1 ? 'month' : 'months';
    if (monthlyMode === 'days_of_month') {
      const dayList = selectedMonthDays.length > 0
        ? selectedMonthDays.slice().sort((a, b) => a - b).join(', ')
        : 'no days selected';
      return `Email will be sent every ${everyN} ${unit} on the ${dayList} from ${dateStr}, at ${timeStr} IST${tail}`;
    }
    const pos = monthlyPos.charAt(0).toUpperCase() + monthlyPos.slice(1);
    const wd  = monthlyWeekDay.charAt(0).toUpperCase() + monthlyWeekDay.slice(1);
    return `Email will be sent every ${everyN} ${unit} on the ${pos} ${wd} from ${dateStr}, at ${timeStr} IST${tail}`;
  }
  if (frequency === 'quarterly') {
    const unit = everyN === 1 ? 'quarter' : 'quarters';
    const mp  = quarterMonthPos.charAt(0).toUpperCase() + quarterMonthPos.slice(1);
    const qd  = quarterDay === '15th' ? '15th' : quarterDay.charAt(0).toUpperCase() + quarterDay.slice(1);
    return `Email will be sent every ${everyN} ${unit}, in the ${mp} month on the ${qd} day, from ${dateStr}, at ${timeStr} IST${tail}`;
  }
  if (frequency === 'yearly') {
    const unit   = everyN === 1 ? 'year' : 'years';
    const months = yearlyMonths.length > 0 ? yearlyMonths.join(', ') : 'no months selected';
    const on     = yearlyOn === '15th' ? '15th' : yearlyOn.charAt(0).toUpperCase() + yearlyOn.slice(1);
    return `Email will be sent every ${everyN} ${unit} in ${months}, on the ${on} day, from ${dateStr}, at ${timeStr} IST${tail}`;
  }
  return `Scheduler will run on ${dateStr}, at ${timeStr} IST`;
}

const FREQ_UNIT: Record<string, string> = {
  daily: 'Days', weekly: 'Weeks', monthly: 'Months', quarterly: 'Quarter', yearly: 'Years',
};

const ALL_MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

const ORDINAL_OPTS = [
  { value: 'first',  label: 'First' },
  { value: 'second', label: 'Second' },
  { value: 'third',  label: 'Third' },
  { value: 'fourth', label: 'Fourth' },
  { value: 'last',   label: 'Last' },
];


const FIELD_LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--ds-font-family-base)',
  fontSize: 'var(--ds-font-size-base)',
  fontWeight: 'var(--ds-font-weight-regular)',
  color: 'var(--ds-text-label)',
  lineHeight: 'var(--ds-line-height-base)',
  textAlign: 'right',
  paddingTop: 7,
};

const INLINE_TEXT_STYLE: React.CSSProperties = {
  fontFamily: 'var(--ds-font-family-base)',
  fontSize: 'var(--ds-font-size-base)',
  color: 'var(--ds-text-base)',
  whiteSpace: 'nowrap',
};

// ─────────────────────────────────────────────────────────────────────────────
// Send Dashboard Scheduler
// ─────────────────────────────────────────────────────────────────────────────

// label col 130px + 20px gap + field col 390px = 540px total
const W    = 540;
const COLS = '130px 390px';
// field starts at label col + gap = 150px from left edge
const FIELD_OFFSET = 150;

export const SendDashboardScheduler: Story = {
  name: 'Send Dashboard Scheduler',
  render: () => {
    const [open, setOpen] = useState(false);

    const [sendOption, setSendOption]   = useState('send_later');
    const [frequency, setFrequency]     = useState('once');
    const [date, setDate]               = useState(todayDDMMYYYY);
    const [time, setTime]               = useState('12:20 PM');
    const [skipNoData, setSkipNoData]   = useState(true);
    const [workingOnly, setWorkingOnly] = useState(false);
    const [startOnError, setStartOnError] = useState(false);
    const [everyN, setEveryN]             = useState(2);
    const [ends, setEnds]                 = useState('never');
    const [endsAfterN, setEndsAfterN]     = useState(1);
    const [endsOnDate, setEndsOnDate]     = useState('');
    const [tzOpen, setTzOpen] = useState(false);
    const [timezone, setTimezone] = useState('(GMT 5:30) India Standard Time (Asia/Kolkata)');
    const [tzDraft, setTzDraft] = useState(timezone);

    const [selectedDays, setSelectedDays]           = useState<string[]>([]);
    const [monthlyMode, setMonthlyMode]             = useState<'days_of_month' | 'specific_days'>('days_of_month');
    const [selectedMonthDays, setSelectedMonthDays] = useState<number[]>([]);
    const [monthlyPos, setMonthlyPos]               = useState('first');
    const [monthlyWeekDay, setMonthlyWeekDay]       = useState('monday');
    const [quarterMonthPos, setQuarterMonthPos]     = useState('first');
    const [quarterDay, setQuarterDay]               = useState('first');
    const [yearlyMonths, setYearlyMonths]           = useState<string[]>(['January']);
    const [yearlyOn, setYearlyOn]                   = useState('first');

    const showSchedule = sendOption === 'send_later';
    const summary = showSchedule
      ? formatScheduleSummary(
          date, time, frequency, everyN, ends, endsAfterN, endsOnDate, selectedDays,
          monthlyMode, selectedMonthDays, monthlyPos, monthlyWeekDay,
          quarterMonthPos, quarterDay, yearlyMonths, yearlyOn,
        )
      : '';

    const handleSave = () => {
      if (showSchedule && !date.trim()) {
        setStartOnError(true);
        return;
      }
      setOpen(false);
    };

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Send Email
        </Button>

        <Modal
          isOpen={open}
          title="Send Email"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={handleSave}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={600}
          disableAutoFocus
        >
          <FormSection title="Scheduling Details" />

          {/* Send Options */}
          <Dropdown
            label="Send Options"
            layout="horizontal"
            width={W}
            columns={COLS}
            value={sendOption}
            onChange={(val: string) => setSendOption(val)}
            options={[
              { value: 'send_immediately', label: 'Send Immediately' },
              { value: 'send_later',       label: 'Send Later' },
            ]}
          />

          {/* Frequency + Every N [Unit] (same row for repeating frequencies) */}
          {showSchedule && (
            <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, alignItems: 'start', width: W }}>
              <span style={FIELD_LABEL_STYLE}>Frequency</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Dropdown
                    layout="vertical"
                    width="100%"
                    value={frequency}
                    onChange={(val: string) => { setFrequency(val); setEnds('never'); }}
                    options={[
                      { value: 'once',      label: 'Once' },
                      { value: 'daily',     label: 'Daily' },
                      { value: 'weekly',    label: 'Weekly' },
                      { value: 'monthly',   label: 'Monthly' },
                      { value: 'quarterly', label: 'Quarterly' },
                      { value: 'yearly',    label: 'Yearly' },
                    ]}
                  />
                </div>
                {frequency !== 'once' && (
                  <>
                    <span style={INLINE_TEXT_STYLE}>Every</span>
                    <Input layout="vertical" type="number" width={70} value={String(everyN)} min={1}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEveryN(Math.max(1, Number(e.target.value)))}
                    />
                    <span style={INLINE_TEXT_STYLE}>{FREQ_UNIT[frequency]}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Weekly — day-of-week picker */}
          {showSchedule && frequency === 'weekly' && (
            <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W }}>
              <span />
              <GroupButton
                options={[
                  { value: 'Mon', label: 'Mon' },
                  { value: 'Tue', label: 'Tue' },
                  { value: 'Wed', label: 'Wed' },
                  { value: 'Thu', label: 'Thu' },
                  { value: 'Fri', label: 'Fri' },
                  { value: 'Sat', label: 'Sat' },
                  { value: 'Sun', label: 'Sun' },
                ]}
                value={selectedDays}
                onChange={(v) => setSelectedDays(v as string[])}
                multiSelect
                showBadge
              />
            </div>
          )}

          {/* Monthly — mode radio + date grid or specific-day dropdowns */}
          {showSchedule && frequency === 'monthly' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W }}>
                <span />
                <div style={{ display: 'flex', gap: 20 }}>
                  <Radio
                    label="Days of the month"
                    name="monthly-mode"
                    value="days_of_month"
                    checked={monthlyMode === 'days_of_month'}
                    onChange={() => setMonthlyMode('days_of_month')}
                  />
                  <Radio
                    label="On Specific Days"
                    name="monthly-mode"
                    value="specific_days"
                    checked={monthlyMode === 'specific_days'}
                    onChange={() => setMonthlyMode('specific_days')}
                  />
                </div>
              </div>

              {monthlyMode === 'days_of_month' && (
                <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W }}>
                  <span />
                  <Calendar
                    mode="date-of-month"
                    selectedDayNumbers={selectedMonthDays}
                    onDayNumbersChange={(nums: number[]) => setSelectedMonthDays(nums)}
                    width={282}
                  />
                </div>
              )}

              {monthlyMode === 'specific_days' && (
                <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W, alignItems: 'start' }}>
                  <span />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={INLINE_TEXT_STYLE}>Every</span>
                    <Dropdown layout="vertical" width={120}
                      value={monthlyPos} onChange={(val: string) => setMonthlyPos(val)}
                      options={[
                        { value: 'first', label: 'First' },
                        { value: '15th',  label: '15th' },
                        { value: 'last',  label: 'Last' },
                      ]}
                    />
                    <Dropdown layout="vertical" width={152}
                      value={monthlyWeekDay} onChange={(val: string) => setMonthlyWeekDay(val)}
                      options={[
                        { value: 'monday',    label: 'Monday' },
                        { value: 'tuesday',   label: 'Tuesday' },
                        { value: 'wednesday', label: 'Wednesday' },
                        { value: 'thursday',  label: 'Thursday' },
                        { value: 'friday',    label: 'Friday' },
                        { value: 'saturday',  label: 'Saturday' },
                        { value: 'sunday',    label: 'Sunday' },
                      ]}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quarterly — month of quarter + day */}
          {showSchedule && frequency === 'quarterly' && (
            <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W }}>
              <span />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={INLINE_TEXT_STYLE}>In the</span>
                <Dropdown layout="vertical" width={100}
                  value={quarterMonthPos} onChange={(val: string) => setQuarterMonthPos(val)}
                  options={[
                    { value: 'first',  label: 'First' },
                    { value: 'second', label: 'Second' },
                    { value: 'third',  label: 'Third' },
                    { value: 'last',   label: 'Last' },
                  ]}
                />
                <span style={INLINE_TEXT_STYLE}>Month of Quarter on</span>
                <Dropdown layout="vertical" width={90}
                  value={quarterDay} onChange={(val: string) => setQuarterDay(val)}
                  options={[
                    { value: 'first', label: 'First' },
                    { value: '15th',  label: '15th' },
                    { value: 'last',  label: 'Last' },
                  ]}
                />
                <span style={INLINE_TEXT_STYLE}>day</span>
              </div>
            </div>
          )}

          {/* Yearly — month tags + ordinal day */}
          {showSchedule && frequency === 'yearly' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W, alignItems: 'start' }}>
                <span />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ ...INLINE_TEXT_STYLE, paddingTop: 7 }}>In</span>
                  <div style={{ flex: 1 }}>
                    <Tags
                      value={yearlyMonths.map(m => ({ value: m, label: m }))}
                      options={ALL_MONTHS.map(m => ({ value: m, label: m }))}
                      onChange={(tags: { value: string; label: string }[]) => setYearlyMonths(tags.map(t => t.value))}
                      width="100%"
                      placeholder="Add month"
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, width: W }}>
                <span />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={INLINE_TEXT_STYLE}>On</span>
                  <Dropdown layout="vertical" width={120}
                    value={yearlyOn} onChange={(val: string) => setYearlyOn(val)}
                    options={ORDINAL_OPTS}
                  />
                  <span style={INLINE_TEXT_STYLE}>day</span>
                </div>
              </div>
            </>
          )}

          {/* Start On — date + time picker */}
          {showSchedule && (
            <DateTimeInput
              label="Start On"
              layout="horizontal"
              width={W}
              columns={COLS}
              dateValue={date}
              timeValue={time}
              error={startOnError}
              helperText={startOnError ? 'Please enter a start date.' : undefined}
              onDateChange={(val: string) => { setDate(val); setStartOnError(false); }}
              onTimeChange={(val: string) => setTime(val)}
            />
          )}

          {/* Timezone note — always below Start On */}
          {showSchedule && (
            <p
              style={{
                margin: 0,
                marginTop: -15,
                paddingLeft: FIELD_OFFSET,
                fontFamily: 'var(--ds-font-family-base)',
                fontSize: 'var(--ds-font-size-sm)',
                color: 'var(--ds-text-muted)',
                lineHeight: 'var(--ds-line-height-base)',
              }}
            >
              <span style={{ color: 'var(--ds-text-label)' }}>Time Zone: </span>
              {timezone}
              <button type="button" className="input-link-btn" style={{ marginLeft: 4 }} onClick={() => { setTzDraft(timezone); setTzOpen(true); }}>
                Change
              </button>
            </p>
          )}

          {/* Ends — shown for all repeating frequencies */}
          {showSchedule && frequency !== 'once' && (
            <div style={{ display: 'grid', gridTemplateColumns: COLS, columnGap: 20, alignItems: 'start', width: W }}>
              <span style={FIELD_LABEL_STYLE}>Ends</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Dropdown
                    layout="vertical"
                    width="100%"
                    value={ends}
                    onChange={(val: string) => setEnds(val)}
                    options={[
                      { value: 'never',   label: 'Never' },
                      { value: 'after_n', label: 'After N times', triggerLabel: 'After' },
                      { value: 'on_date', label: 'On Specific Date' },
                    ]}
                  />
                </div>
                {ends === 'after_n' && (
                  <>
                    <Input layout="vertical" type="number" width={70} value={String(endsAfterN)} min={1}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndsAfterN(Math.max(1, Number(e.target.value)))}
                    />
                    <span style={INLINE_TEXT_STYLE}>times</span>
                  </>
                )}
                {ends === 'on_date' && (
                  <DateTimeInput
                    layout="vertical"
                    width={160}
                    dateOnly
                    dateValue={endsOnDate}
                    onDateChange={(val: string) => setEndsOnDate(val)}
                  />
                )}
              </div>
            </div>
          )}

          {/* Scheduler run summary */}
          {showSchedule && summary && (
            <div className="sds-summary-note" style={{ paddingLeft: FIELD_OFFSET }}>
              <style>{`.sds-summary-note .msg-info-label { display: none; }`}</style>
              <MessageInfo variant="info" message={summary} />
            </div>
          )}

          {/* Delivery preferences */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <Checkbox
              id="skip-no-data"
              label="Do not send Email when there is no data in the chart."
              checked={skipNoData}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSkipNoData(e.target.checked)
              }
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Checkbox
                id="working-days-only"
                label="Send Email only on working days"
                checked={workingOnly}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setWorkingOnly(e.target.checked)
                }
              />
              <Tooltip
                content="Email will only be dispatched on business days, skipping weekends and public holidays."
                variant="white"
                placement="top"
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--ds-text-label)',
                    cursor: 'pointer',
                    lineHeight: 0,
                  }}
                >
                  <Info />
                </span>
              </Tooltip>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={tzOpen}
          title="Change Timezone"
          onClose={() => setTzOpen(false)}
          onCancel={() => setTzOpen(false)}
          onSave={() => { setTimezone(tzDraft); setTzOpen(false); }}
          cancelLabel="Cancel"
          saveLabel="Done"
          width={574}
        >
          <Dropdown
            label="Timezone"
            layout="horizontal"
            width="fit-content"
            columns="100px 390px"
            value={tzDraft}
            onChange={(val: string) => setTzDraft(val)}
            options={[
              { value: '(GMT -12:00) International Date Line West',           label: '(GMT -12:00) International Date Line West' },
              { value: '(GMT -11:00) Coordinated Universal Time-11',          label: '(GMT -11:00) Coordinated Universal Time-11' },
              { value: '(GMT -10:00) Hawaii',                                 label: '(GMT -10:00) Hawaii' },
              { value: '(GMT -09:00) Alaska',                                 label: '(GMT -09:00) Alaska' },
              { value: '(GMT -08:00) Pacific Time (US & Canada)',             label: '(GMT -08:00) Pacific Time (US & Canada)' },
              { value: '(GMT -07:00) Mountain Time (US & Canada)',            label: '(GMT -07:00) Mountain Time (US & Canada)' },
              { value: '(GMT -06:00) Central Time (US & Canada)',             label: '(GMT -06:00) Central Time (US & Canada)' },
              { value: '(GMT -05:00) Eastern Time (US & Canada)',             label: '(GMT -05:00) Eastern Time (US & Canada)' },
              { value: '(GMT -04:00) Atlantic Time (Canada)',                 label: '(GMT -04:00) Atlantic Time (Canada)' },
              { value: '(GMT -03:30) Newfoundland',                           label: '(GMT -03:30) Newfoundland' },
              { value: '(GMT -03:00) Brasilia',                               label: '(GMT -03:00) Brasilia' },
              { value: '(GMT -02:00) Coordinated Universal Time-02',          label: '(GMT -02:00) Coordinated Universal Time-02' },
              { value: '(GMT -01:00) Azores',                                 label: '(GMT -01:00) Azores' },
              { value: '(GMT +00:00) Dublin / Edinburgh / Lisbon / London',   label: '(GMT +00:00) Dublin / Edinburgh / Lisbon / London' },
              { value: '(GMT +01:00) Amsterdam / Berlin / Rome / Paris',      label: '(GMT +01:00) Amsterdam / Berlin / Rome / Paris' },
              { value: '(GMT +02:00) Athens / Bucharest',                     label: '(GMT +02:00) Athens / Bucharest' },
              { value: '(GMT +03:00) Moscow / St. Petersburg',                label: '(GMT +03:00) Moscow / St. Petersburg' },
              { value: '(GMT +03:30) Tehran',                                 label: '(GMT +03:30) Tehran' },
              { value: '(GMT +04:00) Abu Dhabi / Muscat',                     label: '(GMT +04:00) Abu Dhabi / Muscat' },
              { value: '(GMT +04:30) Kabul',                                  label: '(GMT +04:30) Kabul' },
              { value: '(GMT +05:00) Islamabad / Karachi',                    label: '(GMT +05:00) Islamabad / Karachi' },
              { value: '(GMT 5:30) India Standard Time (Asia/Kolkata)',        label: '(GMT 5:30) India Standard Time (Asia/Kolkata)' },
              { value: '(GMT +05:45) Kathmandu',                              label: '(GMT +05:45) Kathmandu' },
              { value: '(GMT +06:00) Dhaka',                                  label: '(GMT +06:00) Dhaka' },
              { value: '(GMT +06:30) Yangon (Rangoon)',                       label: '(GMT +06:30) Yangon (Rangoon)' },
              { value: '(GMT +07:00) Bangkok / Hanoi / Jakarta',              label: '(GMT +07:00) Bangkok / Hanoi / Jakarta' },
              { value: '(GMT +08:00) Beijing / Chongqing / Hong Kong',        label: '(GMT +08:00) Beijing / Chongqing / Hong Kong' },
              { value: '(GMT +09:00) Osaka / Sapporo / Tokyo',                label: '(GMT +09:00) Osaka / Sapporo / Tokyo' },
              { value: '(GMT +09:30) Adelaide',                               label: '(GMT +09:30) Adelaide' },
              { value: '(GMT +10:00) Canberra / Melbourne / Sydney',          label: '(GMT +10:00) Canberra / Melbourne / Sydney' },
              { value: '(GMT +11:00) Solomon Islands / New Caledonia',        label: '(GMT +11:00) Solomon Islands / New Caledonia' },
              { value: '(GMT +12:00) Auckland / Wellington',                  label: '(GMT +12:00) Auckland / Wellington' },
            ]}
          />
        </Modal>
      </>
    );
  },
};
