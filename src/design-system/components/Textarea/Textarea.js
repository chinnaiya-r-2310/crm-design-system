import { useId, useState, useRef } from 'react';
import './Textarea.css';
import { ResizeHandle, Lock } from '../../foundations/icons/Icons';

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
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  const textareaRef = useRef(null);
  const [customHeight, setCustomHeight] = useState(null);

  const handleResizeStart = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = textareaRef.current?.offsetHeight ?? Math.max(70, minHeight);
    const onMove = (ev) => {
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

  const handleChange = (e) => {
    if (!isControlled) setUncontrolledHasValue(e.target.value.length > 0);
    textareaProps.onChange?.(e);
  };

  const rootStyle = {
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
  };

  const textareaEl = (
    <div
      className='textarea-textarea-wrapper'
      data-required={textareaProps.required || undefined}
      data-has-value={hasValue || undefined}
      style={wrapperVars}
      {...wrapperStateProps}
    >
      <textarea
        id={inputId}
        ref={textareaRef}
        className='textarea-textarea'
        aria-describedby={helperText ? `${inputId}-helper` : undefined}
        style={customHeight ? { minHeight: `${customHeight}px`, maxHeight: `${customHeight}px` } : undefined}
        readOnly={readOnly}
        {...textareaProps}
        onChange={handleChange}
      />
      {!readOnly && !textareaProps.disabled && (
        <div className='textarea-resize-icon' aria-hidden="true" onMouseDown={handleResizeStart}>
          <ResizeHandle />
        </div>
      )}
      {readOnly && (
        <div className='textarea-lock-badge' aria-hidden="true">
          <Lock />
        </div>
      )}
    </div>
  );

  const helperEl = helperText ? (
    <span id={`${inputId}-helper`} className='textarea-helper-text'>
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className='textarea-label' htmlFor={inputId} onClick={e => e.preventDefault()}>
      {label}
    </label>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className='textarea-root' style={rootStyle} data-variant={rootVariant}>
        <div className='textarea-form-row' style={formRowStyle}>
          {labelEl}
          <div className='textarea-field-column'>
            {textareaEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="textarea-root textarea-vertical" style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {textareaEl}
      {helperEl}
    </div>
  );
}

export default Textarea;
