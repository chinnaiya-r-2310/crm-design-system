import { useState } from 'react';
import './Calendar.css';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_FULL  = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function buildGrid(year, month) {
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const cells = [];

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear  = month === 0 ? year - 1 : year;
  for (let i = firstDow - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    cells.push({ date: new Date(prevYear, prevMonth, d), day: d, isCurrentMonth: false });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), day: d, isCurrentMonth: true });
  }

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear  = month === 11 ? year + 1 : year;
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(nextYear, nextMonth, d), day: d, isCurrentMonth: false });
  }

  return cells;
}

function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate();
}

function isBetween(d, start, end) {
  const t = d.getTime();
  const [s, e] = start <= end ? [start.getTime(), end.getTime()] : [end.getTime(), start.getTime()];
  return t > s && t < e;
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal icons
// ─────────────────────────────────────────────────────────────────────────────

const ChevLeft = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
    <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevRight = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Calendar component
// ─────────────────────────────────────────────────────────────────────────────

export function Calendar({
  mode = 'single',
  value,
  onChange,
  rangeStart: ctrlStart,
  rangeEnd: ctrlEnd,
  onRangeChange,
  selectedDates: ctrlMulti,
  onMultiChange,
  defaultMonth,
  highlightWeekends = false,
  showViewTabs = false,
  width = 284,
}) {
  const today = new Date();
  const initial = defaultMonth ?? (mode === 'single' ? (value ?? today) : today);

  const [viewYear,  setViewYear]  = useState(initial.getFullYear());
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const [showPicker, setShowPicker] = useState(false);
  const [hoverDate,  setHoverDate]  = useState(null);
  const [viewTab,    setViewTab]    = useState('day');

  // Uncontrolled internal state
  const [intValue,  setIntValue]  = useState(value ?? null);
  const [intStart,  setIntStart]  = useState(ctrlStart ?? null);
  const [intEnd,    setIntEnd]    = useState(ctrlEnd ?? null);
  const [intMulti,  setIntMulti]  = useState(ctrlMulti ?? []);

  const resolvedValue = onChange      ? value     : intValue;
  const resolvedStart = onRangeChange ? ctrlStart : intStart;
  const resolvedEnd   = onRangeChange ? ctrlEnd   : intEnd;
  const resolvedMulti = onMultiChange ? (ctrlMulti ?? []) : intMulti;

  // ── Navigation ─────────────────────────────────────────────────────────────

  const navPrev = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const navNext = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  // ── Day click ──────────────────────────────────────────────────────────────

  const handleDayClick = (cell) => {
    const date = cell.date;
    if (!cell.isCurrentMonth) {
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }
    if (mode === 'single') {
      if (onChange) onChange(date);
      else setIntValue(date);
    } else if (mode === 'range') {
      const hasStart = intStart && !intEnd;
      if (hasStart) {
        const [s, e] = date < intStart ? [date, intStart] : [intStart, date];
        setIntStart(s); setIntEnd(e);
        onRangeChange?.(s, e);
      } else {
        setIntStart(date); setIntEnd(null);
        onRangeChange?.(date, null);
      }
    } else {
      const exists = intMulti.some(d => sameDay(d, date));
      const next = exists ? intMulti.filter(d => !sameDay(d, date)) : [...intMulti, date];
      setIntMulti(next);
      onMultiChange?.(next);
    }
  };

  // ── Cell class ─────────────────────────────────────────────────────────────

  const getCellClass = (cell) => {
    const cls = ['calendar-cell'];
    if (!cell.isCurrentMonth) { cls.push('calendar-other-month'); return cls.join(' '); }
    if (sameDay(cell.date, today)) cls.push('calendar-today');
    if (highlightWeekends) {
      const dow = cell.date.getDay();
      if (dow === 0 || dow === 6) cls.push('calendar-weekend');
    }
    if (mode === 'single' && resolvedValue && sameDay(cell.date, resolvedValue)) {
      cls.push('calendar-selected');
    }
    if (mode === 'multi' && resolvedMulti.some(d => sameDay(d, cell.date))) {
      cls.push('calendar-selected');
    }
    if (mode === 'range') {
      const previewEnd = resolvedEnd ?? (resolvedStart && !resolvedEnd ? hoverDate : null);
      if (resolvedStart && sameDay(cell.date, resolvedStart)) {
        cls.push('calendar-range-start');
        if (!previewEnd) cls.push('calendar-range-alone');
      } else if (previewEnd && resolvedStart && sameDay(cell.date, previewEnd)) {
        cls.push('calendar-range-end');
      } else if (resolvedStart && previewEnd && isBetween(cell.date, resolvedStart, previewEnd)) {
        cls.push('calendar-in-range');
      }
    }
    return cls.join(' ');
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  const grid = buildGrid(viewYear, viewMonth);
  const yearRange = Array.from({ length: 7 }, (_, i) => viewYear - 3 + i);

  return (
    <div className="calendar-calendar" style={{ width }}>
      {/* ── Header ── */}
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={navPrev} aria-label="Previous month">
          <ChevLeft />
        </button>
        <button className="calendar-month-year-btn" onClick={() => setShowPicker(s => !s)} aria-expanded={showPicker}>
          {MONTHS_FULL[viewMonth]} {viewYear}
        </button>
        <button className="calendar-nav-btn" onClick={navNext} aria-label="Next month">
          <ChevRight />
        </button>
      </div>

      {showPicker ? (
        /* ── Month / Year picker ── */
        <div className="calendar-picker" role="listbox" aria-label="Select month and year">
          {yearRange.map(year => (
            <div key={year} className="calendar-picker-row">
              <span className={`calendar-picker-year ${year === viewYear ? 'calendar-picker-year-active' : ''}`}>
                {year}
              </span>
              <div className="calendar-picker-months">
                {MONTHS_SHORT.map((m, i) => (
                  <button
                    key={m}
                    type="button"
                    className={`calendar-picker-month ${year === viewYear && i === viewMonth ? 'calendar-picker-month-active' : ''}`}
                    onClick={() => { setViewYear(year); setViewMonth(i); setShowPicker(false); }}
                    aria-selected={year === viewYear && i === viewMonth}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* ── Week day headers ── */}
          <div className="calendar-week-row">
            {WEEK_DAYS.map((d, i) => (
              <span
                key={d}
                className={`calendar-week-day ${highlightWeekends && (i === 0 || i === 6) ? 'calendar-weekend-header' : ''}`}
              >
                {d}
              </span>
            ))}
          </div>

          {/* ── Day grid ── */}
          <div className="calendar-grid" role="grid" aria-label={`${MONTHS_FULL[viewMonth]} ${viewYear}`}>
            {grid.map((cell, idx) => (
              <button
                key={idx}
                type="button"
                role="gridcell"
                className={getCellClass(cell)}
                onClick={() => handleDayClick(cell)}
                onMouseEnter={() => setHoverDate(cell.date)}
                onMouseLeave={() => setHoverDate(null)}
                tabIndex={cell.isCurrentMonth ? 0 : -1}
                aria-label={cell.date.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}
              >
                <span className="calendar-day-num">{cell.day}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── View tabs ── */}
      {showViewTabs && !showPicker && (
        <div className="calendar-view-tabs" role="tablist">
          {['day', 'week', 'month'].map(tab => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={viewTab === tab}
              className={`calendar-view-tab ${viewTab === tab ? 'calendar-view-tab-active' : ''}`}
              onClick={() => setViewTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calendar;
