import { useId } from 'react';
import styles from './Radio.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type RadioForceState = 'hover' | 'focus';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text rendered beside the radio button. */
  label?: React.ReactNode;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   * @internal not for production use
   */
  forceState?: RadioForceState;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Radio({
  label,
  forceState,
  id: idProp,
  className: _className,
  ...inputProps
}: RadioProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;

  return (
    <label
      className={styles.root}
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-force-state={forceState}
    >
      <span className={styles.control}>
        <input
          type="radio"
          id={inputId}
          className={styles.nativeInput}
          {...inputProps}
        />
        <span className={styles.circle} aria-hidden="true" />
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export default Radio;
