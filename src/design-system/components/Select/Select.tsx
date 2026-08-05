import { useId } from 'react';
import styles from './Select.module.css';
import { ChevronDownFilled, Lock } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string;
  label: string;
}

export type SelectLayout = 'horizontal' | 'vertical';
export type SelectVariant = 'default' | 'disabled' | 'readonly' | 'error';
export type SelectForceState = 'hover' | 'focus';

export interface SelectProps {
  /** Label text in the left column (horizontal) or above (vertical). */
  label?: string;

  /** Text shown when no value is selected. @default 'Select' */
  placeholder?: string;

  /** Currently selected option value. */
  value?: string;

  /** Available options to display in the trigger. */
  options?: SelectOption[];

  /** Assistive copy rendered below the trigger. */
  helperText?: string;

  /** Total component width in px. @default 670 */
  width?: number | string;

  /** Form layout. @default 'horizontal' */
  layout?: SelectLayout;

  /** Shows the red mandatory indicator on the left edge of the trigger. */
  required?: boolean;

  /** Disabled — gray background, no interaction. */
  disabled?: boolean;

  /** Read-only — displays the value with a lock badge; not interactive. */
  readOnly?: boolean;

  /** Error state — border and helper text turn #FF5D5A. */
  error?: boolean;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   * @internal not intended for production use
   */
  forceState?: SelectForceState;

  /** Called when the user selects an option. Placeholder for future dropdown. */
  onChange?: (value: string) => void;

  id?: string;
  style?: React.CSSProperties;

  /**
   * Override grid-template-columns for horizontal layout.
   * @default '3fr 7fr'
   */
  columns?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Select({
  label,
  placeholder = 'Select',
  value,
  options = [],
  helperText,
  width = 670,
  layout = 'horizontal',
  required,
  disabled,
  readOnly,
  error,
  forceState,
  onChange: _onChange,
  id: idProp,
  style,
  columns,
}: SelectProps) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;

  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const rootVariant: SelectVariant | undefined =
    disabled ? 'disabled' :
    readOnly ? 'readonly' :
    error    ? 'error'    :
    undefined;

  const displayValue = value
    ? (options.find(o => o.value === value)?.label ?? value)
    : placeholder;

  const isPlaceholder = !value;

  const wrapperStateProps = forceState !== undefined ? { 'data-state': forceState } : {};

  const triggerEl = (
    <button
      id={triggerId}
      type="button"
      className={styles.selectWrapper}
      disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={false}
      aria-required={required}
      data-required={required || undefined}
      {...wrapperStateProps}
    >
      <span
        className={styles.selectValue}
        data-placeholder={isPlaceholder || undefined}
      >
        {displayValue}
      </span>
      {readOnly ? (
        <span className={styles.lockSlot} aria-hidden="true">
          <Lock aria-hidden="true" />
        </span>
      ) : (
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDownFilled aria-hidden="true" />
        </span>
      )}
    </button>
  );

  const helperEl = helperText ? (
    <span id={`${triggerId}-helper`} className={styles.helperText}>
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className={styles.label} htmlFor={triggerId}>
      {label}
    </label>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant}>
        <div className={styles.formRow} style={formRowStyle}>
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

export default Select;
