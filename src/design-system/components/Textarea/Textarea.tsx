import { useId, useState, useRef } from 'react';
import styles from './Textarea.module.css';
import { ResizeHandle, Lock } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type TextareaLayout = 'horizontal' | 'vertical';
export type TextareaForceState = 'hover' | 'focus';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  /** Visible label. */
  label?: string;

  /** Assistive copy rendered below the field. */
  helperText?: string;

  /** Total component width in px or any CSS string. @default 670 */
  width?: number | string;

  /** Form layout. @default 'horizontal' */
  layout?: TextareaLayout;

  /**
   * Minimum height when focused (expanded). The collapsed height is always 34px.
   * @default 70
   */
  minHeight?: number;

  /** Error state — border and helper text turn red. */
  error?: boolean;

  /**
   * Override grid-template-columns for horizontal layout.
   * @default '3fr 7fr'
   */
  columns?: string;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   */
  forceState?: TextareaForceState;

  style?: React.CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Textarea({
  label,
  helperText,
  width = 670,
  layout = 'horizontal',
  minHeight = 70,
  error,
  columns,
  forceState,
  id: idProp,
  style,
  className: _className,
  readOnly,
  ...textareaProps
}: TextareaProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [customHeight, setCustomHeight] = useState<number | null>(null);

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = textareaRef.current?.offsetHeight ?? Math.max(70, minHeight);
    const onMove = (ev: MouseEvent) => {
      setCustomHeight(Math.max(Math.max(70, minHeight), startHeight + (ev.clientY - startY)));
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // Track whether the textarea has content so it stays expanded when unfocused.
  // Controlled: derive from value prop. Uncontrolled: track via onChange.
  const isControlled = textareaProps.value !== undefined;
  const [uncontrolledHasValue, setUncontrolledHasValue] = useState(
    () => !!textareaProps.defaultValue
  );
  const hasValue = isControlled
    ? !!textareaProps.value
    : uncontrolledHasValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) setUncontrolledHasValue(e.target.value.length > 0);
    textareaProps.onChange?.(e);
  };

  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const rootVariant =
    textareaProps.disabled ? 'disabled' :
    readOnly ? 'readonly' :
    error ? 'error' :
    undefined;

  const wrapperStateProps = forceState !== undefined ? { 'data-state': forceState } : {};

  const wrapperVars = {
    '--ta-expanded': `${Math.max(70, minHeight)}px`,
  } as React.CSSProperties;

  const textareaEl = (
    <div
      className={styles.textareaWrapper}
      data-required={textareaProps.required || undefined}
      data-has-value={hasValue || undefined}
      style={wrapperVars}
      {...wrapperStateProps}
    >
      <textarea
        id={inputId}
        ref={textareaRef}
        className={styles.textarea}
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        style={customHeight ? { minHeight: `${customHeight}px`, maxHeight: `${customHeight}px` } : undefined}
        readOnly={readOnly}
        {...textareaProps}
        onChange={handleChange}
      />
      {!readOnly && !textareaProps.disabled && (
        <div className={styles.resizeIcon} aria-hidden="true" onMouseDown={handleResizeStart}>
          <ResizeHandle />
        </div>
      )}
      {readOnly && (
        <div className={styles.lockBadge} aria-hidden="true">
          <Lock />
        </div>
      )}
    </div>
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

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant}>
        <div className={styles.formRow} style={formRowStyle}>
          {labelEl}
          <div className={styles.fieldColumn}>
            {textareaEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${styles.vertical}`} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {textareaEl}
      {helperEl}
    </div>
  );
}

export default Textarea;
