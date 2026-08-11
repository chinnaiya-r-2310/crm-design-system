import { useId } from 'react';
import './Switch.css';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Switch({
  label,
  labelPosition = 'right',
  id: idProp,
  className: _className,
  ...inputProps
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  return (
    <label
      className="switch-root"
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-label-position={labelPosition}
    >
      {label && labelPosition === 'left' && (
        <span className="switch-label">{label}</span>
      )}
      <span className="switch-control">
        <input
          type="checkbox"
          id={inputId}
          role="switch"
          className="switch-native-input"
          {...inputProps}
        />
        <span className="switch-track" aria-hidden="true">
          <span className="switch-thumb" />
        </span>
      </span>
      {label && labelPosition === 'right' && (
        <span className="switch-label">{label}</span>
      )}
    </label>
  );
}

export default Switch;
