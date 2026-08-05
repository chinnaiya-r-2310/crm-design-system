import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import styles from './DatePicker.module.css';
import { Calendar } from '../Calendar/Calendar';
import { Lock } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

/** Apply DD/MM/YYYY mask to raw digit string (max 8 digits). */
function maskDigits(digits: string): string {
  const d = digits.slice(0, 8);
  let out = d.slice(0, 2);
  if (d.length > 2) out += '/' + d.slice(2, 4);
  if (d.length > 4) out += '/' + d.slice(4, 8);
  return out;
}

/** Parse a masked DD/MM/YYYY string to a Date, or null if invalid. */
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

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface DatePickerProps {
  label?: string;
  helperText?: string;

  /** Total component width in px or any CSS string. @default 670 */
  width?: number | string;

  /** Form layout. @default 'horizontal' */
  layout?: 'horizontal' | 'vertical';

  /** Override grid-template-columns for horizontal layout. */
  columns?: string;

  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;

  /** Placeholder shown when no date is selected. @default 'DD/MM/YYYY' */
  placeholder?: string;

  /** Controlled selected date. */
  value?: Date | null;

  /** Called when a complete valid date is entered (typed or picked). */
  onChange?: (date: Date) => void;

  id?: string;
  style?: React.CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function DatePicker({
  label,
  helperText,
  width = 670,
  layout = 'horizontal',
  columns,
  required,
  disabled,
  readOnly,
  error,
  placeholder = 'DD/MM/YYYY',
  value,
  onChange,
  id: idProp,
  style,
}: DatePickerProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | null>(value ?? null);
  // Displayed text in the input — follows DD/MM/YYYY mask
  const [inputText, setInputText] = useState(() =>
    (value ?? null) ? formatDate(value as Date) : ''
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number; width: number } | null>(null);

  const isControlled = onChange !== undefined;
  const resolvedDate = isControlled ? (value ?? null) : internalDate;

  // Sync input text when resolvedDate changes (e.g. calendar pick or external value change)
  useEffect(() => {
    setInputText(resolvedDate ? formatDate(resolvedDate) : '');
  }, [resolvedDate]);

  const updatePanelPos = () => {
    if (!wrapperRef.current) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setPanelPos({ top: r.bottom - 1, left: r.left, width: r.width });
  };

  const handleDateSelect = (date: Date) => {
    if (isControlled) onChange!(date);
    else setInternalDate(date);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Strip non-digits, preserve up to 8, re-apply mask
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    const masked = maskDigits(digits);
    setInputText(masked);

    // Parse and commit when we have a full valid date
    const parsed = parseDate(masked);
    if (parsed) {
      if (isControlled) onChange!(parsed);
      else setInternalDate(parsed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' || e.key === 'Tab') setOpen(false);
  };

  // Close on outside click — check both wrapper and portal panel
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!wrapperRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Compute panel position on open; track scroll/resize while open
  useEffect(() => {
    if (open) updatePanelPos();
    else setPanelPos(null);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return;
    window.addEventListener('scroll', updatePanelPos, true);
    window.addEventListener('resize', updatePanelPos);
    return () => {
      window.removeEventListener('scroll', updatePanelPos, true);
      window.removeEventListener('resize', updatePanelPos);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const rootVariant = disabled ? 'disabled' : readOnly ? 'readonly' : error ? 'error' : undefined;
  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const calendarPanel = open && panelPos ? createPortal(
    <div
      ref={panelRef}
      className={styles.panel}
      style={{ top: panelPos.top, left: panelPos.left }}
    >
      <Calendar
        mode="single"
        value={resolvedDate ?? undefined}
        onChange={handleDateSelect}
      />
    </div>,
    document.body
  ) : null;

  const pickerEl = (
    <div
      ref={wrapperRef}
      className={styles.trigger}
      data-required={required || undefined}
      data-open={(!readOnly && open) || undefined}
      data-has-lock={readOnly || undefined}
    >
      <input
        id={inputId}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={inputText}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={10}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onClick={() => { if (!readOnly) setOpen(true); }}
        aria-haspopup="dialog"
        aria-expanded={open}
      />
      {readOnly && (
        <span className={styles.lockBadge} aria-hidden="true">
          <Lock aria-hidden="true" />
        </span>
      )}
      {!readOnly && calendarPanel}
    </div>
  );

  const helperEl = helperText ? (
    <span className={styles.helperText}>{helperText}</span>
  ) : null;

  const labelEl = label ? (
    <span className={styles.label}>{label}</span>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant}>
        <div className={styles.formRow} style={formRowStyle}>
          {labelEl}
          <div className={styles.fieldColumn}>
            {pickerEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${styles.vertical}`} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {pickerEl}
      {helperEl}
    </div>
  );
}

export default DatePicker;
