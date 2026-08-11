import { useId } from 'react';
import './Radio.css';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Radio({
  label,
  forceState,
  id: idProp,
  className: _className,
  ...inputProps
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  return (
    <label
      className='radio-root'
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-force-state={forceState}
    >
      <span className='radio-control'>
        <input
          type="radio"
          id={inputId}
          className='radio-native-input'
          {...inputProps}
        />
        <span className='radio-circle' aria-hidden="true" />
      </span>
      {label && <span className='radio-label-text'>{label}</span>}
    </label>
  );
}

export default Radio;
