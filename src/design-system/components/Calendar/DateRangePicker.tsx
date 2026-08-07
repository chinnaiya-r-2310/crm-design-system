import { useState, useRef, useEffect } from 'react';
import { Calendar } from './Calendar';
import styles from './DateRangePicker.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type RangePreset = 'none' | 'yesterday' | 'last7' | 'last30' | 'last90' | 'specific' | 'range';

interface PresetOption {
  id: RangePreset;
  label: string;
}

const PRESETS: PresetOption[] = [
  { id: 'none',      label: 'None' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: 'last7',     label: 'Last 7 Days' },
  { id: 'last30',    label: 'Last 30 Days' },
  { id: 'last90',    label: 'Last 90 Days' },
  { id: 'specific',  label: 'Specific Date' },
  { id: 'range',     label: 'Date Range' },
];

export interface DateRangePickerProps {
  /** Controlled start date */
  startDate?: Date | null;
  /** Controlled end date */
  endDate?: Date | null;
  onChange?: (start: Date | null, end: Date | null) => void;

  placeholder?: string;
  disabled?: boolean;

  /** Total trigger width in px. @default 320 */
  width?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function today() { return new Date(); }

function addDays(d: Date, n: number) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB'); // dd/mm/yyyy
}

function formatRange(start: Date | null, end: Date | null) {
  if (!start) return null;
  if (!end) return formatDate(start);
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function calcPreset(id: RangePreset): { start: Date | null; end: Date | null } {
  const now = startOfDay(today());
  switch (id) {
    case 'none':      return { start: null, end: null };
    case 'yesterday': { const y = addDays(now, -1); return { start: y, end: y }; }
    case 'last7':     return { start: addDays(now, -6), end: now };
    case 'last30':    return { start: addDays(now, -29), end: now };
    case 'last90':    return { start: addDays(now, -89), end: now };
    default:          return { start: null, end: null };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal chevron icon
// ─────────────────────────────────────────────────────────────────────────────

const ChevDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="2.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1 6H13" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M4.5 1V4M9.5 1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function DateRangePicker({
  startDate: ctrlStart,
  endDate: ctrlEnd,
  onChange,
  placeholder = 'Select date range',
  disabled = false,
  width = 320,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<RangePreset>('none');

  const [intStart, setIntStart] = useState<Date | null>(ctrlStart ?? null);
  const [intEnd,   setIntEnd]   = useState<Date | null>(ctrlEnd ?? null);

  const resolvedStart = onChange ? ctrlStart : intStart;
  const resolvedEnd   = onChange ? ctrlEnd   : intEnd;

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const applyDates = (start: Date | null, end: Date | null) => {
    if (onChange) { onChange(start, end); }
    else { setIntStart(start); setIntEnd(end); }
  };

  const handlePreset = (preset: PresetOption) => {
    setActivePreset(preset.id);
    if (preset.id === 'specific' || preset.id === 'range') return; // calendar handles it
    const { start, end } = calcPreset(preset.id);
    applyDates(start, end);
  };

  const handleSingleChange = (date: Date) => {
    applyDates(date, null);
  };

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    applyDates(start, end);
  };

  const displayText = resolvedStart ? formatRange(resolvedStart, resolvedEnd ?? null) : null;
  const showCalendar = activePreset === 'specific' || activePreset === 'range';
  const isDualCalendar = activePreset === 'range';

  // Second calendar month (one month ahead)
  const secondMonth = resolvedStart
    ? (resolvedStart.getMonth() === 11
        ? new Date(resolvedStart.getFullYear() + 1, 0, 1)
        : new Date(resolvedStart.getFullYear(), resolvedStart.getMonth() + 1, 1))
    : new Date(today().getFullYear(), today().getMonth() + 1, 1);

  return (
    <div ref={rootRef} className={styles.root} style={{ width }}>
      {/* ── Trigger ── */}
      <button
        type="button"
        className={styles.trigger}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={open}
        data-open={open || undefined}
        onClick={() => !disabled && setOpen(o => !o)}
      >
        <span className={styles.triggerIcon}><CalIcon /></span>
        <span className={styles.triggerText} data-placeholder={!displayText || undefined}>
          {displayText ?? placeholder}
        </span>
        <span className={styles.triggerChev}><ChevDown /></span>
      </button>

      {/* ── Dropdown panel ── */}
      {open && (
        <div className={`${styles.panel} ${showCalendar && isDualCalendar ? styles.panelWide : ''}`}>
          {/* Preset list */}
          <div className={styles.presetList}>
            {PRESETS.map(preset => {
              const preview = (['yesterday','last7','last30','last90'] as RangePreset[]).includes(preset.id)
                ? formatRange(...Object.values(calcPreset(preset.id)) as [Date | null, Date | null])
                : null;
              return (
                <button
                  key={preset.id}
                  type="button"
                  className={`${styles.presetItem} ${activePreset === preset.id ? styles.presetItemActive : ''}`}
                  onClick={() => handlePreset(preset)}
                >
                  <span className={styles.presetLabel}>{preset.label}</span>
                  {preview && (
                    <span className={styles.presetPreview}>{preview}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar pane (Specific Date or Date Range) */}
          {showCalendar && (
            <div className={styles.calendarPane}>
              <Calendar
                mode={isDualCalendar ? 'range' : 'single'}
                value={isDualCalendar ? undefined : (resolvedStart ?? undefined)}
                rangeStart={isDualCalendar ? resolvedStart : undefined}
                rangeEnd={isDualCalendar ? resolvedEnd : undefined}
                onChange={isDualCalendar ? undefined : handleSingleChange}
                onRangeChange={isDualCalendar ? handleRangeChange : undefined}
                width={256}
              />
              {isDualCalendar && (
                <Calendar
                  mode="range"
                  rangeStart={resolvedStart}
                  rangeEnd={resolvedEnd}
                  defaultMonth={secondMonth}
                  onRangeChange={handleRangeChange}
                  width={256}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DateRangePicker;
