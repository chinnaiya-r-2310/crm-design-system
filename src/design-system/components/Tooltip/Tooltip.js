import { useState, useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

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

// Approx tooltip height (inner padding 12px + line 18px + border 2px) + gap 6px
const TOOLTIP_CLEARANCE = 44;

function flipPlacement(preferred, r) {
  if (preferred === 'bottom') {
    // 'bottom' places tooltip above — flip to 'top' (below) if clipped
    return r.top < TOOLTIP_CLEARANCE ? 'top' : 'bottom';
  }
  if (preferred === 'top') {
    // 'top' places tooltip below — flip to 'bottom' (above) if clipped
    return window.innerHeight - r.bottom < TOOLTIP_CLEARANCE ? 'bottom' : 'top';
  }
  return preferred;
}

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
}) {
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState(null);
  const [effectivePlacement, setEffectivePlacement] = useState(placement);
  const wrapperRef = useRef(null);

  const show = useCallback(() => {
    if (wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setRect(r);
      setEffectivePlacement(flipPlacement(placement, r));
    }
    setVisible(true);
  }, [placement]);

  const hide = useCallback(() => setVisible(false), []);

  // For alwaysVisible (Storybook stories), compute rect after mount
  useEffect(() => {
    if (alwaysVisible && wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setRect(r);
      setEffectivePlacement(flipPlacement(placement, r));
    }
  }, [alwaysVisible, placement]);

  const isVisible = !disabled && (alwaysVisible || visible);

  const tooltipEl = (
    <span
      role="tooltip"
      className={`tooltip-tooltip tooltip-${variant} tooltip-placement-${effectivePlacement}`}
    >
      <span className="tooltip-arrow" aria-hidden="true" />
      <span className="tooltip-inner">
        {showIcon && variant !== 'black' && (
          <span className="tooltip-icon" aria-label={iconLabel}>
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
      className={`tooltip-wrapper${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
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
