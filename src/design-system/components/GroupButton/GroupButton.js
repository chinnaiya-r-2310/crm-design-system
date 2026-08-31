import { useState } from 'react';
import './GroupButton.css';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="7" height="5" viewBox="0 0 7 5" fill="none" aria-hidden="true">
    <path d="M1 2.5L2.8 4L6 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GroupButton — a row of labelled toggle buttons.
 *
 * Single-select: pass `value: string` + `onChange: (value) => void`.
 * Multi-select:  pass `value: string[]` + `onChange: (values) => void`.
 */
export function GroupButton({
  options = [],
  value,
  onChange,
  multiSelect = true,
  showBadge = true,
  itemWidth = 52,
  itemHeight = 34,
  gap = 6,
  disabled = false,
}) {
  // Uncontrolled fallback
  const [internal, setInternal] = useState(multiSelect ? [] : '');

  const controlled = value !== undefined;
  const current = controlled ? value : internal;

  const isSelected = (opt) => {
    if (multiSelect) return Array.isArray(current) && current.includes(opt.value);
    return current === opt.value;
  };

  const handleClick = (opt) => {
    if (disabled || opt.disabled) return;

    let next;
    if (multiSelect) {
      const arr = Array.isArray(current) ? current : [];
      next = arr.includes(opt.value)
        ? arr.filter(v => v !== opt.value)
        : [...arr, opt.value];
    } else {
      next = opt.value;
    }

    if (!controlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <div className="group-button-root" style={{ gap }} role="group">
      {options.map(opt => {
        const sel = isSelected(opt);
        return (
          <button
            key={opt.value}
            type="button"
            className="group-button-item"
            data-selected={sel || undefined}
            disabled={disabled || opt.disabled || undefined}
            aria-pressed={sel}
            onClick={() => handleClick(opt)}
            style={{ width: itemWidth, height: itemHeight }}
          >
            {opt.label}
            {sel && showBadge && (
              <span className="group-button-badge">
                <CheckIcon />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default GroupButton;
