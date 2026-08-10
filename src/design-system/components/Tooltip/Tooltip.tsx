import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Tooltip.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** Visual style of the tooltip. Figma: Chinnaiya Style Sheet node 14243:110337. */
export type TooltipVariant = 'black' | 'white' | 'red';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactElement;
  content: React.ReactNode;
  variant?: TooltipVariant;
  placement?: TooltipPlacement;
  showIcon?: boolean;
  alwaysVisible?: boolean;
  iconLabel?: string;
  /** When true, tooltip never shows. Useful for conditionally disabling without changing tree structure. */
  disabled?: boolean;
  /** Style forwarded to the outer wrapper span (e.g. flex layout). */
  wrapperStyle?: React.CSSProperties;
  /** Class name forwarded to the outer wrapper span. */
  wrapperClassName?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Icon
// ─────────────────────────────────────────────────────────────────────────────

const WarningIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="5.5" fill="#FF5D5A" />
    <path d="M6 3.5v3M6 8.5v.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Tooltip({
  children,
  content,
  variant = 'black',
  placement = 'top',
  showIcon = false,
  alwaysVisible = false,
  iconLabel,
  disabled = false,
  wrapperStyle,
  wrapperClassName,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const show = useCallback(() => {
    if (wrapperRef.current) setRect(wrapperRef.current.getBoundingClientRect());
    setVisible(true);
  }, []);

  const hide = useCallback(() => setVisible(false), []);

  // For alwaysVisible (Storybook stories), compute rect after mount
  useEffect(() => {
    if (alwaysVisible && wrapperRef.current) {
      setRect(wrapperRef.current.getBoundingClientRect());
    }
  }, [alwaysVisible]);

  const isVisible = !disabled && (alwaysVisible || visible);

  const tooltipEl = (
    <span
      role="tooltip"
      className={`${styles.tooltip} ${styles[variant]} ${styles[`placement-${placement}`]}`}
    >
      <span className={styles.arrow} aria-hidden="true" />
      <span className={styles.inner}>
        {showIcon && variant !== 'black' && (
          <span className={styles.icon} aria-label={iconLabel}>
            <WarningIcon />
          </span>
        )}
        {content}
      </span>
    </span>
  );

  return (
    <span
      ref={wrapperRef}
      className={`${styles.wrapper}${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
      style={wrapperStyle}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {isVisible && rect && createPortal(
        // Ghost span at position:fixed mirroring the trigger's viewport coords.
        // The .tooltip (position:absolute) positions itself relative to this
        // ghost span exactly as it would relative to the real wrapper — but now
        // the ghost is at document.body level so no overflow container clips it.
        <span
          style={{
            position: 'fixed',
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            pointerEvents: 'none',
            zIndex: 1600,
          }}
        >
          {tooltipEl}
        </span>,
        document.body
      )}
    </span>
  );
}

export default Tooltip;
