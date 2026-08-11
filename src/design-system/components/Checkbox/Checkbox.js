import { useId, useRef, useEffect } from 'react';
import './Checkbox.css';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Checkbox({
  label,
  indeterminate = false,
  forceState,
  id: idProp,
  className: _className,
  ...inputProps
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={'checkbox-root'}
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-force-state={forceState}
    >
      <span className={'checkbox-control'}>
        <input
          type="checkbox"
          id={inputId}
          ref={inputRef}
          className={'checkbox-native-input'}
          {...inputProps}
        />
        <span
          className={'checkbox-box'}
          aria-hidden="true"
          data-indeterminate={indeterminate || undefined}
        />
      </span>
      {label && <span className={'checkbox-label-text'}>{label}</span>}
    </label>
  );
}

export default Checkbox;
