import { useId } from 'react';
import styles from './Input.module.css';
import { Info, Lock } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** HTML input types supported by this component. */
export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'number'
  | 'date'     // renders as text with DD/MM/YYYY placeholder; no browser calendar icon
  | 'datetime' // split date + time field: left half DD/MM/YYYY | right half HH:MM
  | 'lookup';  // read-only lookup field — auto-renders Info icon suffix, pointer cursor

/**
 * Form layout.
 * - 'horizontal' — two-column grid: 40% label | 20px gap | 60% input (default)
 * - 'vertical'   — label stacked above input (compact / mobile)
 */
export type InputLayout = 'horizontal' | 'vertical';

/**
 * Visual size of the input field.
 * Only 'md' is implemented; 'sm' and 'lg' are reserved.
 */
export type InputSize = 'md'; // future: | 'sm' | 'lg'

/**
 * Visual variant / validation state.
 * 'default', 'disabled', 'readonly', 'error', and 'auto-update' are implemented; others are reserved.
 */
export type InputVariant = 'default' | 'disabled' | 'readonly' | 'error' | 'auto-update'; // future: | 'warning' | 'success'

/**
 * Forced visual state for Storybook stories and visual testing.
 * Does NOT affect the real interactive behaviour of the input.
 */
export type InputForceState = 'hover' | 'focus';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visible label. Required for accessibility — provide at minimum an aria-label if omitted. */
  label?: string;

  /** Assistive copy rendered below the field. Linked via aria-describedby. */
  helperText?: string;

  /**
   * Total component width in px or any CSS string.
   * In horizontal layout this spans both the label column and the input column.
   * Defaults to 640px (horizontal) which gives ≈384px of input space.
   */
  width?: number | string;

  /** HTML input type. Defaults to "text". */
  type?: InputType;

  /**
   * Form layout.
   * - 'horizontal' — 40% label / 20px gap / 60% input (default)
   * - 'vertical'   — label stacked above input
   */
  layout?: InputLayout;

  /**
   * Icon or element rendered on the right side of the input.
   * The slot is 32px wide; the wrapper gains 1px padding (top/right/bottom)
   * to give the icon breathing room from the border.
   */
  suffix?: React.ReactNode;

  /**
   * Override the CSS grid-template-columns for horizontal layout.
   * Useful when a parent container needs exact column widths (e.g. "99px 390px" inside a modal).
   * @default '3fr 7fr' (30% label / 70% input)
   */
  columns?: string;

  /**
   * Puts the field in the error visual state.
   * Border turns #FF5D5A and helper text (if provided) renders in the same color.
   * Does not conflict with disabled — disabled takes precedence.
   */
  error?: boolean;

  /**
   * Auto-update / auto-fill visual state.
   * Background turns light yellow (#FFFFEA) with a warm border (#E5DEC5)
   * to indicate the value was populated automatically (e.g. from a workflow or import).
   * Disabled and error take precedence over autoUpdate.
   */
  autoUpdate?: boolean;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   * 'hover' | 'focus' — sets data-state on the input wrapper so CSS applies
   * the same rules used for real browser pseudo-classes.
   *
   * @internal not intended for production use
   */
  forceState?: InputForceState;

  // ── Future props ──────────────────────────────────────────────────────────
  // size?: InputSize;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Base Input component.
 *
 * Layout
 * ──────
 *   Horizontal (default): CSS Grid — label (40%) | 20px gap | field column (1fr).
 *     The label's first text line aligns with the input's vertical centre via
 *     padding-top: 7px = (34px − 20px) / 2 (input height − line height).
 *     When the label wraps, the input stays fixed at the top of its grid cell.
 *
 *   Vertical: label stacked above inputWrapper, inline-flex column.
 *
 * State architecture
 * ──────────────────
 *   CSS handles all visual states via pseudo-classes and data-state attribute:
 *     :hover / [data-state="hover"]      → border change
 *     :focus-within / [data-state="focus"] → border + shadow
 *
 *   Future variants (error, disabled, …) plug in via data-variant on .root —
 *   see scaffolded comments in Input.module.css.
 *
 * Extending
 * ─────────
 *   Sizes    → add `size` prop → set data-size on .root → CSS height rules.
 *   Variants → add `variant` prop → set data-variant on .root → CSS rules.
 *   Icons    → accept `prefix`/`suffix` ReactNode → render inside .inputWrapper.
 */
export function Input({
  label,
  helperText,
  width = 670,
  type = 'text',
  layout = 'horizontal',
  suffix,
  columns,
  error,
  autoUpdate,
  forceState,
  id: idProp,
  style,
  className: _className,  // consumed; not forwarded to root (use portal pattern later)
  readOnly,
  ...inputProps
}: InputProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const isLookup = type === 'lookup';
  const isDate = type === 'date';
  const isDatetime = type === 'datetime';

  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  // data-variant → drives CSS cascade; disabled > readonly > error > autoUpdate
  const rootVariant: InputVariant | undefined =
    inputProps.disabled ? 'disabled' :
    readOnly ? 'readonly' :
    error ? 'error' :
    autoUpdate ? 'auto-update' :
    undefined;

  // data-state  → CSS hover/focus overrides (Storybook + visual tests)
  const wrapperStateProps = forceState !== undefined ? { 'data-state': forceState } : {};

  // lookup: render as text, read-only, auto-inject Info icon + "Select" placeholder
  // date / datetime: render as text with date placeholder; no browser calendar picker
  const resolvedType = (isLookup || isDate || isDatetime) ? 'text' : type;
  const lockIcon = <Lock aria-hidden="true" />;
  const resolvedSuffix =
    readOnly ? lockIcon :
    (isLookup && inputProps.disabled) ? lockIcon :
    isLookup ? <Info aria-hidden="true" /> :
    suffix;
  const resolvedPlaceholder =
    isLookup && !inputProps.placeholder ? 'Select' :
    (isDate || isDatetime) && !inputProps.placeholder ? 'DD/MM/YYYY' :
    inputProps.placeholder;

  // Datetime: render two adjacent text inputs separated by a vertical divider
  const inputEl = isDatetime ? (
    <div className={styles.datetimeParts} aria-label="Date and time">
      <input
        id={inputId}
        type="text"
        className={styles.input}
        placeholder="DD/MM/YYYY"
        aria-label="Date"
        readOnly={readOnly}
        disabled={inputProps.disabled}
      />
      <span className={styles.datetimeDivider} aria-hidden="true" />
      <input
        type="text"
        className={styles.input}
        placeholder="HH:MM"
        aria-label="Time"
        readOnly={readOnly}
        disabled={inputProps.disabled}
      />
    </div>
  ) : (
    <input
      id={inputId}
      type={resolvedType}
      className={styles.input}
      aria-describedby={helperText ? `${inputId}-helper` : undefined}
      readOnly={isLookup || readOnly}
      {...inputProps}
      placeholder={resolvedPlaceholder}
      onWheel={resolvedType === 'number' ? (e) => (e.currentTarget as HTMLInputElement).blur() : inputProps.onWheel}
    />
  );

  const helperEl = helperText ? (
    <span id={`${inputId}-helper`} className={styles.helperText}>
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className={styles.label} htmlFor={inputId} onClick={e => e.preventDefault()}>
      {label}
    </label>
  ) : null;

  const inputWrapper = (
    <div
      className={styles.inputWrapper}
      data-required={inputProps.required || undefined}
      data-has-suffix={resolvedSuffix ? true : undefined}
      data-type={isLookup ? 'lookup' : undefined}
      {...wrapperStateProps}
    >
      {inputEl}
      {resolvedSuffix && (
        <span className={styles.suffixSlot} aria-hidden="true">
          {resolvedSuffix}
        </span>
      )}
    </div>
  );

  // ── Horizontal layout — two-column grid with label alignment ────────────
  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant} data-type={isLookup ? 'lookup' : undefined}>
        <div className={styles.formRow} style={formRowStyle}>
          {labelEl}
          <div className={styles.fieldColumn}>
            {inputWrapper}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  // ── Vertical layout (or horizontal without a label) ─────────────────────
  return (
    <div className={`${styles.root} ${styles.vertical}`} style={rootStyle} data-variant={rootVariant} data-type={isLookup ? 'lookup' : undefined}>
      {labelEl}
      {inputWrapper}
      {helperEl}
    </div>
  );
}

export default Input;
