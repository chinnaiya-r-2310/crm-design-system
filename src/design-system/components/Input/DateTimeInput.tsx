import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import styles from './DateTimeInput.module.css';
import { Calendar } from '../Calendar/Calendar';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

function maskDigits(digits: string): string {
  const d = digits.slice(0, 8);
  let out = d.slice(0, 2);
  if (d.length > 2) out += '/' + d.slice(2, 4);
  if (d.length > 4) out += '/' + d.slice(4, 8);
  return out;
}

function parseDate(text: string): Date | null {
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
function nextRoundedHour(): string {
  const now = new Date();
  const h = (now.getHours() + 1) % 24;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, '0')}:00 ${ampm}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface DateTimeInputProps {
  /** Date string in DD/MM/YYYY format. */
  dateValue?: string;
  /** Time string in "HH:MM AM/PM" format.
   *  When empty, the field auto-initialises to the next rounded hour on mount. */
  timeValue?: string;

  onDateChange?: (value: string) => void;
  onTimeChange?: (value: string) => void;

  /** Total component width. @default 390 */
  width?: number | string;
  /** @default 'vertical' */
  layout?: 'horizontal' | 'vertical';
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function DateTimeInput({
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  width = 390,
  layout = 'vertical',
  label,
  helperText,
  error,
  required,
  disabled,
  readOnly,
  id: idProp,
  style,
}: DateTimeInputProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const [calOpen, setCalOpen] = useState(false);
  // Local display text for the date half — keeps mask independent of parent re-renders
  const [inputText, setInputText] = useState(dateValue ?? '');
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number } | null>(null);

  // Keep display text in sync when parent changes the date externally
  useEffect(() => { setInputText(dateValue ?? ''); }, [dateValue]);

  // Auto-initialise time to next rounded hour on first render when empty
  useEffect(() => {
    if (!timeValue && onTimeChange) onTimeChange(nextRoundedHour());
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
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!triggerRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setCalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [calOpen]);

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleDateSelect = (date: Date) => {
    const formatted = formatDate(date);
    setInputText(formatted);
    onDateChange?.(formatted);
    setCalOpen(false);
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 8);
    const masked = maskDigits(digits);
    setInputText(masked);
    const parsed = parseDate(masked);
    if (parsed) onDateChange?.(masked);
  };

  // ── Render ───────────────────────────────────────────────────────────────

  const rootVariant = disabled ? 'disabled' : readOnly ? 'readonly' : error ? 'error' : undefined;
  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const resolvedDate = parseDate(inputText) ?? undefined;

  const calendarPortal = calOpen && panelPos ? createPortal(
    <div
      ref={panelRef}
      className={styles.panel}
      style={{ top: panelPos.top, left: panelPos.left }}
    >
      <Calendar mode="single" value={resolvedDate} onChange={handleDateSelect} />
    </div>,
    document.body
  ) : null;

  const triggerEl = (
    <div
      ref={triggerRef}
      className={styles.trigger}
      data-required={required || undefined}
      data-open={(!readOnly && !disabled && calOpen) || undefined}
    >
      {/* Date half — opens calendar on click */}
      <input
        id={inputId}
        type="text"
        className={styles.input}
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

      {/* Vertical divider */}
      <span className={styles.divider} aria-hidden="true" />

      {/* Time half */}
      <input
        type="text"
        className={styles.input}
        placeholder="12:00 AM"
        aria-label="Time"
        value={timeValue ?? ''}
        disabled={disabled}
        readOnly={readOnly}
        onChange={e => onTimeChange?.(e.target.value)}
      />

      {calendarPortal}
    </div>
  );

  const helperEl = helperText ? (
    <span id={`${inputId}-helper`} className={styles.helperText}>{helperText}</span>
  ) : null;

  const labelEl = label ? (
    <label className={styles.label} htmlFor={inputId}>{label}</label>
  ) : null;

  if (layout === 'horizontal' && label) {
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant}>
        <div className={styles.formRow}>
          {labelEl}
          <div className={styles.fieldColumn}>
            {triggerEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${styles.vertical}`} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {triggerEl}
      {helperEl}
    </div>
  );
}

export default DateTimeInput;
