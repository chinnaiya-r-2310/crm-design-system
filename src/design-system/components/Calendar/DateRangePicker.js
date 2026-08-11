import { useState, useRef, useEffect } from 'react';
import { Calendar } from './Calendar.js';
import './DateRangePicker.css';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const PRESETS = [
  { id: 'none',      label: 'None' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: 'last7',     label: 'Last 7 Days' },
  { id: 'last30',    label: 'Last 30 Days' },
  { id: 'last90',    label: 'Last 90 Days' },
  { id: 'specific',  label: 'Specific Date' },
  { id: 'range',     label: 'Date Range' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function today() { return new Date(); }

function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function formatDate(d) {
  return d.toLocaleDateString('en-GB'); // dd/mm/yyyy
}

function formatRange(start, end) {
  if (!start) return null;
  if (!end) return formatDate(start);
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function calcPreset(id) {
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
}) {
  const [open, setOpen] = useState(false);
  const [activePreset, setActivePreset] = useState('none');

  const [intStart, setIntStart] = useState(ctrlStart ?? null);
  const [intEnd,   setIntEnd]   = useState(ctrlEnd ?? null);

  const resolvedStart = onChange ? ctrlStart : intStart;
  const resolvedEnd   = onChange ? ctrlEnd   : intEnd;

  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const applyDates = (start, end) => {
    if (onChange) { onChange(start, end); }
    else { setIntStart(start); setIntEnd(end); }
  };

  const handlePreset = (preset) => {
    setActivePreset(preset.id);
    if (preset.id === 'specific' || preset.id === 'range') return; // calendar handles it
    const { start, end } = calcPreset(preset.id);
    applyDates(start, end);
  };

  const handleSingleChange = (date) => {
    applyDates(date, null);
  };

  const handleRangeChange = (start, end) => {
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
    <div ref={rootRef} className="calendar-root" style={{ width }}>
      {/* ── Trigger ── */}
      <button
        type="button"
        className="calendar-trigger"
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={open}
        data-open={open || undefined}
        onClick={() => !disabled && setOpen(o => !o)}
      >
        <span className="calendar-trigger-icon"><CalIcon /></span>
        <span className="calendar-trigger-text" data-placeholder={!displayText || undefined}>
          {displayText ?? placeholder}
        </span>
        <span className="calendar-trigger-chev"><ChevDown /></span>
      </button>

      {/* ── Dropdown panel ── */}
      {open && (
        <div className={`calendar-panel ${showCalendar && isDualCalendar ? 'calendar-panel-wide' : ''}`}>
          {/* Preset list */}
          <div className="calendar-preset-list">
            {PRESETS.map(preset => {
              const preview = (['yesterday','last7','last30','last90']).includes(preset.id)
                ? formatRange(...Object.values(calcPreset(preset.id)))
                : null;
              return (
                <button
                  key={preset.id}
                  type="button"
                  className={`calendar-preset-item ${activePreset === preset.id ? 'calendar-preset-item-active' : ''}`}
                  onClick={() => handlePreset(preset)}
                >
                  <span className="calendar-preset-label">{preset.label}</span>
                  {preview && (
                    <span className="calendar-preset-preview">{preview}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar pane (Specific Date or Date Range) */}
          {showCalendar && (
            <div className="calendar-calendar-pane">
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
