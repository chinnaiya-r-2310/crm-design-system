import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import './DateTimeInput.css';
import { Calendar } from '../Calendar/Calendar';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(d) {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

function maskDigits(digits) {
  const d = digits.slice(0, 8);
  let out = d.slice(0, 2);
  if (d.length > 2) out += '/' + d.slice(2, 4);
  if (d.length > 4) out += '/' + d.slice(4, 8);
  return out;
}

function parseDate(text) {
  const digits = text.replace(/\D/g, '');
  if (digits.length < 8) return null;
  const day   = parseInt(digits.slice(0, 2), 10);
  const month = parseInt(digits.slice(2, 4), 10);
  const year  = parseInt(digits.slice(4, 8), 10);
  const d = new Date(year, month - 1, day);
  if (d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day) return d;
  return null;
}

/** Returns the next whole hour from current OS time in "HH:MM AM/PM" format.
 *  e.g. current 12:16 AM → "01:00 AM"; current 11:45 PM → "12:00 AM". */
function nextRoundedHour() {
  const now = new Date();
  const h = (now.getHours() + 1) % 24;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, '0')}:00 ${ampm}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function DateTimeInput({
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  dateOnly = false,
  width = 390,
  columns,
  layout = 'vertical',
  label,
  helperText,
  error,
  required,
  disabled,
  readOnly,
  id: idProp,
  style,
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const [calOpen, setCalOpen] = useState(false);
  // Local display text for the date half — keeps mask independent of parent re-renders
  const [inputText, setInputText] = useState(dateValue ?? '');
  const triggerRef = useRef(null);
  const panelRef   = useRef(null);
  const [panelPos, setPanelPos] = useState(null);

  // Keep display text in sync when parent changes the date externally
  useEffect(() => { setInputText(dateValue ?? ''); }, [dateValue]);

  // Auto-initialise time to next rounded hour on first render when empty
  useEffect(() => {
    if (!dateOnly && !timeValue && onTimeChange) onTimeChange(nextRoundedHour());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Calendar positioning ─────────────────────────────────────────────────

  const updatePanelPos = () => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setPanelPos({ top: r.bottom - 1, left: r.left });
  };

  useEffect(() => {
    if (calOpen) updatePanelPos(); else setPanelPos(null);
  }, [calOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!calOpen) return;
    window.addEventListener('scroll', updatePanelPos, true);
    window.addEventListener('resize', updatePanelPos);
    return () => {
      window.removeEventListener('scroll', updatePanelPos, true);
      window.removeEventListener('resize', updatePanelPos);
    };
  }, [calOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close calendar on outside click
  useEffect(() => {
    if (!calOpen) return;
    const handler = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setCalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [calOpen]);

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleDateSelect = (date) => {
    const formatted = formatDate(date);
    setInputText(formatted);
    onDateChange?.(formatted);
    setCalOpen(false);
  };

  const handleDateInputChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8);
    const masked = maskDigits(digits);
    setInputText(masked);
    const parsed = parseDate(masked);
    if (parsed) onDateChange?.(masked);
  };

  // ── Render ───────────────────────────────────────────────────────────────

  const rootVariant = disabled ? 'disabled' : readOnly ? 'readonly' : error ? 'error' : undefined;
  const rootStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const resolvedDate = parseDate(inputText) ?? undefined;

  const calendarPortal = calOpen && panelPos ? createPortal(
    <div
      ref={panelRef}
      className="input-panel"
      style={{ top: panelPos.top, left: panelPos.left }}
    >
      <Calendar mode="single" value={resolvedDate} onChange={handleDateSelect} />
    </div>,
    document.body
  ) : null;

  const triggerEl = (
    <div
      ref={triggerRef}
      className="input-trigger"
      data-required={required || undefined}
      data-open={(!readOnly && !disabled && calOpen) || undefined}
    >
      {/* Date half — opens calendar on click */}
      <input
        id={inputId}
        type="text"
        className="input-input"
        placeholder="DD/MM/YYYY"
        aria-label="Date"
        aria-haspopup="dialog"
        aria-expanded={calOpen}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        value={inputText}
        maxLength={10}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleDateInputChange}
        onKeyDown={e => { if (e.key === 'Escape' || e.key === 'Tab') setCalOpen(false); }}
        onClick={() => { if (!readOnly && !disabled) setCalOpen(true); }}
      />

      {!dateOnly && (
        <>
          {/* Vertical divider */}
          <span className="input-divider" aria-hidden="true" />

          {/* Time half */}
          <input
            type="text"
            className="input-input"
            placeholder="12:00 AM"
            aria-label="Time"
            value={timeValue ?? ''}
            disabled={disabled}
            readOnly={readOnly}
            onChange={e => onTimeChange?.(e.target.value)}
          />
        </>
      )}

      {calendarPortal}
    </div>
  );

  const helperEl = helperText ? (
    <span id={`${inputId}-helper`} className="input-helper-text">{helperText}</span>
  ) : null;

  const labelEl = label ? (
    <label className="input-label" htmlFor={inputId}>{label}</label>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className="input-root" style={rootStyle} data-variant={rootVariant}>
        <div className="input-form-row" style={formRowStyle}>
          {labelEl}
          <div className="input-field-column">
            {triggerEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="input-root input-vertical" style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {triggerEl}
      {helperEl}
    </div>
  );
}

export default DateTimeInput;
