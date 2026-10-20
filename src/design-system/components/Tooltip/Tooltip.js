import { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';
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
  followCursor = false,
  iconLabel,
  disabled = false,
  wrapperStyle,
  wrapperClassName,
  as: Wrapper = 'span',
}) {
  const [visible, setVisible] = useState(false);
  const [rect, setRect] = useState(null);
  const [effectivePlacement, setEffectivePlacement] = useState(placement);
  const wrapperRef = useRef(null);

  const updatePosition = useCallback((event) => {
    if (wrapperRef.current) {
      // Mouse events anchor at the cursor; keyboard focus still uses the trigger.
      const r = followCursor && event?.type.startsWith('mouse')
        ? { top: event.clientY, bottom: event.clientY, left: event.clientX, width: 0, height: 0 }
        : wrapperRef.current.getBoundingClientRect();
      setRect(r);
      setEffectivePlacement(flipPlacement(placement, r));
    }
  }, [followCursor, placement]);

  const show = useCallback((event) => {
    updatePosition(event);
    setVisible(true);
  }, [updatePosition]);

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

  // Measure real content so long chart labels cannot escape the viewport.
  const tooltipRef = useRef(null);
  useLayoutEffect(() => {
    const panel = tooltipRef.current;
    if (!isVisible || !rect || !panel) return;
    const { width, height } = panel.getBoundingClientRect();
    const margin = 8;
    const gap = 6;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const right = rect.left + rect.width;
    const bottom = rect.top + rect.height;
    let nextPlacement = placement;
    let x = rect.left + (rect.width - width) / 2;
    let y;

    // Placement names describe the arrow edge, preserving the existing API.
    if (placement === 'left' || placement === 'right') {
      const roomRight = viewportWidth - right - margin - gap;
      const roomLeft = rect.left - margin - gap;
      if (placement === 'left' && width > roomRight && roomLeft > roomRight) nextPlacement = 'right';
      if (placement === 'right' && width > roomLeft && roomRight > roomLeft) nextPlacement = 'left';
      x = nextPlacement === 'left' ? right + gap : rect.left - width - gap;
      y = rect.top + (rect.height - height) / 2;
    } else {
      const roomAbove = rect.top - margin - gap;
      const roomBelow = viewportHeight - bottom - margin - gap;
      if (placement === 'bottom' && height > roomAbove && roomBelow > roomAbove) nextPlacement = 'top';
      if (placement === 'top' && height > roomBelow && roomAbove > roomBelow) nextPlacement = 'bottom';
      y = nextPlacement === 'bottom' ? rect.top - height - gap : bottom + gap;
    }
    setEffectivePlacement(nextPlacement);
    Object.assign(panel.style, {
      position: 'fixed',
      left: `${Math.max(margin, Math.min(x, viewportWidth - width - margin))}px`,
      top: `${Math.max(margin, Math.min(y, viewportHeight - height - margin))}px`,
      right: 'auto', bottom: 'auto', transform: 'none',
    });
  }, [isVisible, rect, placement, effectivePlacement, content, variant, showIcon]);

  useEffect(() => {
    if (!isVisible) return;
    const reposition = () => updatePosition();
    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, true);
    return () => {
      window.removeEventListener('resize', reposition);
      window.removeEventListener('scroll', reposition, true);
    };
  }, [isVisible, updatePosition]);

  const tooltipEl = (
    <span
      ref={tooltipRef}
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
    <Wrapper
      ref={wrapperRef}
      className={`tooltip-wrapper${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
      style={wrapperStyle}
      onMouseEnter={show}
      onMouseMove={followCursor ? updatePosition : undefined}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={event => { if (event.key === 'Escape') hide(); }}
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
    </Wrapper>
  );
}

export default Tooltip;
