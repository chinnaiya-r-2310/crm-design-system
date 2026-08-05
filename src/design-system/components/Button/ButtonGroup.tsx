import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import type { ButtonVariant, ButtonSize } from './Button';
import { Check } from '../../foundations/icons/Icons';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupOption {
  value: string;
  label: string;
  /** Variant shown when unselected (outline buttons in the group). */
  outlineVariant: ButtonVariant;
  /** Variant shown when this option is selected (filled, with arrow). */
  selectedVariant: ButtonVariant;
}

export interface ButtonGroupProps {
  options: ButtonGroupOption[];
  /** Controlled selected value. `undefined` shows the full button group. */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Called when the user picks an option. */
  onChange?: (value: string) => void;
  size?: ButtonSize;
}

export function ButtonGroup({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  size = 'sm',
}: ButtonGroupProps) {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  const selected = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find(o => o.value === selected);

  // Close dropdown on click outside
  useEffect(() => {
    if (!dropdownOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [dropdownOpen]);

  function handleSelect(val: string) {
    if (controlledValue === undefined) setInternalValue(val);
    onChange?.(val);
    setDropdownOpen(false);
  }

  return (
    <div
      ref={rootRef}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10 }}
    >
      {selectedOption ? (
        <>
          {/* More Button (split=false): whole button toggles the dropdown */}
          <Button
            variant={selectedOption.selectedVariant}
            size={size}
            arrow
            split={false}
            isOpen={dropdownOpen}
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            {selectedOption.label}
          </Button>

          {dropdownOpen && (
            <div className={styles.panel}>
              {options.map(opt => (
                <button
                  key={opt.value}
                  className={styles.option}
                  data-selected={opt.value === selected || undefined}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className={styles.optionLabel}>{opt.label}</span>
                  {opt.value === selected && (
                    <span className={styles.optionTick} aria-hidden="true">
                      <Check />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        options.map(opt => (
          <Button
            key={opt.value}
            variant={opt.outlineVariant}
            size={size}
            onClick={() => handleSelect(opt.value)}
          >
            {opt.label}
          </Button>
        ))
      )}
    </div>
  );
}
