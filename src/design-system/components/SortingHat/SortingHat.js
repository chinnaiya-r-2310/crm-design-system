import { useCallback, useEffect, useRef, useState } from 'react';
import hatImage from './sorting-hat.webp';
import './SortingHat.css';

// ─────────────────────────────────────────────────────────────────────────────
// Sorting Hat
// Floating, draggable shortcut for reviewers to jump between design screens.
//   - Drag it anywhere on screen (clamped to the viewport).
//   - Click it to open the design screens menu.
//   - Fades to 50% opacity after `idleMs` without hover, click or drag.
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_SIZE = 48;
const EDGE_GAP = 24;
const DRAG_THRESHOLD = 4;

// Opens another Storybook story in the top-level window (the manager UI).
function navigateToStory(storyId) {
  try {
    const top = window.top;
    top.location.href = `${top.location.origin}${top.location.pathname}?path=/story/${storyId}`;
  } catch {
    window.location.href = `${window.location.origin}/?path=/story/${storyId}`;
  }
}

export function SortingHat({
  variations = [],
  size = DEFAULT_SIZE,
  idleMs = 10000,
  title = 'Sorting Hat',
  initialPosition,
}) {
  const [pos, setPos] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [faded, setFaded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [lastActivity, setLastActivity] = useState(() => Date.now());

  const rootRef = useRef(null);
  const drag = useRef(null);

  const clamp = useCallback(
    (x, y) => ({
      x: Math.min(Math.max(0, x), window.innerWidth - size),
      y: Math.min(Math.max(0, y), window.innerHeight - size),
    }),
    [size],
  );

  const bump = useCallback(() => setLastActivity(Date.now()), []);

  // Start at the bottom-right corner unless a position is given.
  useEffect(() => {
    const start = initialPosition ?? {
      x: window.innerWidth - size - EDGE_GAP,
      y: window.innerHeight - size - EDGE_GAP,
    };
    setPos(clamp(start.x, start.y));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the hat inside the viewport when the window is resized.
  useEffect(() => {
    const onResize = () => setPos(prev => (prev ? clamp(prev.x, prev.y) : prev));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [clamp]);

  // Idle fade: full opacity while hovered or the menu is open; otherwise fade after idleMs.
  useEffect(() => {
    setFaded(false);
    if (hovered || menuOpen) return undefined;
    const timer = window.setTimeout(() => setFaded(true), idleMs);
    return () => window.clearTimeout(timer);
  }, [lastActivity, hovered, menuOpen, idleMs]);

  // Close the menu on outside click or Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onPointerDown = event => {
      if (!rootRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const onKeyDown = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handlePointerDown = event => {
    if (event.button !== 0 || !pos) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: pos.x,
      originY: pos.y,
      moved: false,
    };
    bump();
  };

  const handlePointerMove = event => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (!state.moved) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      state.moved = true;
      setDragging(true);
      setMenuOpen(false);
    }
    setPos(clamp(state.originX + dx, state.originY + dy));
    bump();
  };

  const handlePointerUp = event => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    // A press without movement is a click: toggle the menu.
    if (!state.moved) setMenuOpen(open => !open);
    bump();
  };

  // Keyboard activation (Enter / Space) arrives as a click with detail 0.
  const handleClick = event => {
    if (event.detail === 0) setMenuOpen(open => !open);
  };

  if (!pos) return null;

  const openLeft = pos.x > window.innerWidth / 2;
  const openUp = pos.y > window.innerHeight / 2;

  return (
    <div
      ref={rootRef}
      className="sorting-hat"
      style={{ left: pos.x, top: pos.y, width: size, height: size, opacity: faded ? 0.5 : 1 }}
      data-faded={faded || undefined}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <button
        type="button"
        className="sorting-hat-button"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label={`${title}: design screens`}
        data-dragging={dragging || undefined}
        style={{ width: size, height: size }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
      >
        <img src={hatImage} alt="" width={size} height={size} draggable={false} />
      </button>

      {menuOpen && (
        <div
          role="menu"
          aria-label="Design screens"
          className="sorting-hat-menu"
          data-open-left={openLeft || undefined}
          data-open-up={openUp || undefined}
        >
          {variations.length === 0 && (
            <div className="sorting-hat-menu-empty">No screens</div>
          )}
          {variations.map(variation => (
            <button
              key={variation.label}
              type="button"
              role="menuitem"
              className="sorting-hat-menu-item"
              onClick={() => {
                setMenuOpen(false);
                if (variation.onSelect) variation.onSelect();
                else if (variation.storyId) navigateToStory(variation.storyId);
              }}
            >
              {variation.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortingHat;
