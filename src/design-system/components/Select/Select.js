import { useId } from 'react';
import './Select.css';
import { ChevronDownFilled, Lock } from '../../foundations/icons/Icons';

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
}) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;

  const rootStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const rootVariant =
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
      className={'select-select-wrapper'}
      disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={false}
      aria-required={required}
      data-required={required || undefined}
      {...wrapperStateProps}
    >
      <span
        className={'select-select-value'}
        data-placeholder={isPlaceholder || undefined}
      >
        {displayValue}
      </span>
      {readOnly ? (
        <span className={'select-lock-slot'} aria-hidden="true">
          <Lock aria-hidden="true" />
        </span>
      ) : (
        <span className={'select-chevron'} aria-hidden="true">
          <ChevronDownFilled aria-hidden="true" />
        </span>
      )}
    </button>
  );

  const helperEl = helperText ? (
    <span id={`${triggerId}-helper`} className={'select-helper-text'}>
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className={'select-label'} htmlFor={triggerId}>
      {label}
    </label>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={'select-root'} style={rootStyle} data-variant={rootVariant}>
        <div className={'select-form-row'} style={formRowStyle}>
          {labelEl}
          <div className={'select-field-column'}>
            {triggerEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={'select-root select-vertical'} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {triggerEl}
      {helperEl}
    </div>
  );
}

export default Select;
