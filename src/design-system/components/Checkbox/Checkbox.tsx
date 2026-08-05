import { useId, useRef, useEffect } from 'react';
import styles from './Checkbox.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type CheckboxForceState = 'hover' | 'focus';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text rendered beside the checkbox. */
  label?: React.ReactNode;

  /**
   * Sets the indeterminate visual state (–) on the checkbox.
   * Also sets the native element's .indeterminate property.
   */
  indeterminate?: boolean;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   * @internal not for production use
   */
  forceState?: CheckboxForceState;
}

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
}: CheckboxProps) {
  const autoId = useId();
  const inputId = idProp ?? autoId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={styles.root}
      htmlFor={inputId}
      data-disabled={inputProps.disabled || undefined}
      data-force-state={forceState}
    >
      <span className={styles.control}>
        <input
          type="checkbox"
          id={inputId}
          ref={inputRef}
          className={styles.nativeInput}
          {...inputProps}
        />
        <span
          className={styles.box}
          aria-hidden="true"
          data-indeterminate={indeterminate || undefined}
        />
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}

export default Checkbox;
