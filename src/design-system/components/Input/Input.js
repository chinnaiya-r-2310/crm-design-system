import { Icon } from '../Icon/Icon';
import { useId, useRef, useState } from 'react';
import './Input.css';
import { Info, Lock, Search } from '../../foundations/icons/Icons';

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
  width = 390,
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
  timeValue,
  onTimeChange,
  variant,
  inputRef,
  onClear,
  clearLabel = 'Clear search',
  /** 'md' (default) or 'sm': small is 27px tall with 13px text. */
  size = 'md',
  currencyCode = 'INR',
  displayCurrency = true,
  showPasswordToggle = true,
  ...inputProps
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const isLookup = type === 'lookup';
  const isDate = type === 'date';
  const isDatetime = type === 'datetime';
  const isCurrency = variant === 'currency';
  const isPassword = variant === 'password';
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [headerValue, setHeaderValue] = useState(inputProps.defaultValue ?? '');
  const isHeader = variant === 'header';
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState(inputProps.defaultValue ?? '');
  const currentSearchValue = inputProps.value ?? searchValue;

  const rootStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  // data-variant → drives CSS cascade; disabled > readonly > error > autoUpdate
  const rootVariant =
    inputProps.disabled ? 'disabled' :
    readOnly ? 'readonly' :
    error ? 'error' :
    autoUpdate ? 'auto-update' :
    undefined;

  // data-state  → CSS hover/focus overrides (Storybook + visual tests)
  const wrapperStateProps = forceState !== undefined ? { 'data-state': forceState } : {};

  // lookup: render as text, read-only, auto-inject Info icon + "Select" placeholder
  // date / datetime: render as text with date placeholder; no browser calendar picker
  const resolvedType = isPassword
    ? (passwordVisible ? 'text' : 'password')
    : (isLookup || isDate || isDatetime) ? 'text' : type;
  const lockIcon = <Lock aria-hidden="true" />;
  const passwordToggle = isPassword && readOnly ? lockIcon : isPassword && showPasswordToggle && !inputProps.disabled ? (
    <button
      type="button"
      className="input-password-toggle"
      aria-label={passwordVisible ? 'Hide password' : 'Show password'}
      aria-pressed={passwordVisible}
      onClick={() => setPasswordVisible(current => !current)}
    >
      <Icon name={passwordVisible ? 'CrmEyeClosed' : 'CrmEyeOpen'} size={16} />
    </button>
  ) : null;
  const resolvedSuffix = passwordToggle || (
    readOnly ? lockIcon :
    (isLookup && inputProps.disabled) ? lockIcon :
    isLookup ? <Icon name="CrmLookupsearch" size={16} /> :
    suffix
  );
  const resolvedPlaceholder =
    isLookup && !inputProps.placeholder ? 'Select' :
    (isDate || isDatetime) && !inputProps.placeholder ? 'DD/MM/YYYY' :
    inputProps.placeholder;

  // Datetime: render two adjacent text inputs separated by a vertical divider
  const inputEl = isDatetime ? (
    <div className="input-datetime-parts" aria-label="Date and time">
      <input
        id={inputId}
        type="text"
        className="input-input"
        placeholder="DD/MM/YYYY"
        aria-label="Date"
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        value={inputProps.value}
        onChange={inputProps.onChange}
        readOnly={readOnly}
        disabled={inputProps.disabled}
        required={inputProps.required}
      />
      <span className="input-datetime-divider" aria-hidden="true" />
      <input
        type="text"
        className="input-input"
        placeholder="HH:MM"
        aria-label="Time"
        value={timeValue}
        onChange={onTimeChange}
        readOnly={readOnly}
        disabled={inputProps.disabled}
      />
    </div>
  ) : (
    <input
      id={inputId}
      type={resolvedType}
      className="input-input"
      aria-describedby={helperText ? `${inputId}-helper` : undefined}
      readOnly={isLookup || readOnly}
      {...inputProps}
      onChange={isHeader ? (event) => {
        setHeaderValue(event.target.value);
        inputProps.onChange?.(event);
      } : inputProps.onChange}
      placeholder={resolvedPlaceholder}
      onWheel={resolvedType === 'number' ? (e) => e.currentTarget.blur() : inputProps.onWheel}
    />
  );

  const helperEl = helperText ? (
    <span id={`${inputId}-helper`} className="input-helper-text">
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className="input-label" htmlFor={inputId} onClick={e => e.preventDefault()}>
      {label}
    </label>
  ) : null;

  const inputWrapper = (
    <div
      className="input-input-wrapper"
      data-required={inputProps.required || undefined}
      data-has-suffix={resolvedSuffix ? true : undefined}
      data-type={isLookup ? 'lookup' : isPassword ? 'password' : undefined}
      {...wrapperStateProps}
    >
      {isCurrency ? (
        <div className="input-currency-parts">
          {displayCurrency && (
            <>
              <span className="input-currency-code">{currencyCode}</span>
              <span className="input-currency-divider" aria-hidden="true" />
            </>
          )}
          {inputEl}
        </div>
      ) : inputEl}
      {resolvedSuffix && (
        <span className="input-suffix-slot" aria-hidden={isPassword ? undefined : 'true'}>
          {resolvedSuffix}
        </span>
      )}
    </div>
  );

  if (isHeader) {
    return (
      <div className="input-root input-header" style={style} data-variant={rootVariant}>
        <span className="input-header-measure" aria-hidden="true">
          {(inputProps.value ?? headerValue) || resolvedPlaceholder || '\u00a0'}
        </span>
        {inputWrapper}
      </div>
    );
  }

  // Compact search used in modal headers and toolbars. Controlled consumers
  // provide onClear to reset their value; uncontrolled fields reset internally.
  if (variant === 'search') {
    return (
      <div className={`input-root input-search ${_className ?? ''}`} style={rootStyle} data-variant={rootVariant}>
        {labelEl}
        <div className="input-input-wrapper" {...wrapperStateProps}>
          <span className="input-search-icon"><Search aria-hidden="true" /></span>
          <input {...inputProps} defaultValue={undefined} value={currentSearchValue}
            id={inputId} type="search" className="input-input"
            ref={element => {
              searchRef.current = element;
              if (typeof inputRef === 'function') inputRef(element);
              else if (inputRef) inputRef.current = element;
            }}
            readOnly={readOnly} placeholder={resolvedPlaceholder ?? 'Search'}
            aria-describedby={helperText ? `${inputId}-helper` : undefined}
            onChange={event => { setSearchValue(event.target.value); inputProps.onChange?.(event); }} />
          {currentSearchValue && !inputProps.disabled && !readOnly && (inputProps.value === undefined || onClear) && (
            <button type="button" className="input-search-clear" aria-label={clearLabel}
              onClick={() => { setSearchValue(''); onClear?.(); searchRef.current?.focus(); }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        {helperEl}
      </div>
    );
  }

  // ── Horizontal layout — two-column grid with label alignment ────────────
  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className="input-root" style={style} data-variant={rootVariant} data-size={size === 'md' ? undefined : size} data-type={isLookup ? 'lookup' : undefined}>
        <div className="input-form-row" style={formRowStyle}>
          {labelEl}
          <div className="input-field-column">
            {inputWrapper}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  // ── Vertical layout (or horizontal without a label) ─────────────────────
  return (
    <div className="input-root input-vertical" style={rootStyle} data-variant={rootVariant} data-size={size === 'md' ? undefined : size} data-type={isLookup ? 'lookup' : undefined}>
      {labelEl}
      {inputWrapper}
      {helperEl}
    </div>
  );
}

export default Input;
