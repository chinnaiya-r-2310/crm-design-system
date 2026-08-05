import { useId } from 'react';
import styles from './Switch.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label shown beside the switch. */
  label?: React.ReactNode;
  /** Label position. @default 'right' */
  labelPosition?: 'left' | 'right';
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Switch({
  label,
  labelPosition = 'right',
  id: idProp,
  className: _className,
  ...inputProps
}: SwitchProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  return (
    <label
      className={styles.root}
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-label-position={labelPosition}
    >
      {label && labelPosition === 'left' && (
        <span className={styles.label}>{label}</span>
      )}
      <span className={styles.control}>
        <input
          type="checkbox"
          id={inputId}
          role="switch"
          className={styles.nativeInput}
          {...inputProps}
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb} />
        </span>
      </span>
      {label && labelPosition === 'right' && (
        <span className={styles.label}>{label}</span>
      )}
    </label>
  );
}

export default Switch;
