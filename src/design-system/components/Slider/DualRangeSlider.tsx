import React, { useRef, useCallback } from 'react';

export function DualRangeSlider({
  min = 0,
  max = 10,
  maxA = max,
  valueA,
  valueB,
  onChangeA,
  onChangeB,
  showThumbB = true,
}: {
  min?: number;
  max?: number;
  maxA?: number;
  valueA: number;
  valueB: number;
  onChangeA: (v: number) => void;
  onChangeB: (v: number) => void;
  showThumbB?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const steps    = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const count    = steps.length;

  const pctA = ((valueA - min) / (max - min)) * 100;
  const pctB = ((valueB - min) / (max - min)) * 100;

  const pickValue = useCallback((clientX: number) => {
    const rect  = trackRef.current!.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(min + ratio * (max - min));
  }, [min, max]);

  const onKeyDown = (thumb: 'a' | 'b') => (e: React.KeyboardEvent) => {
    const current = thumb === 'a' ? valueA : valueB;
    const lower = thumb === 'a' ? Math.max(min, 1) : Math.max(valueA + 1, 2);
    const upper = thumb === 'a' ? Math.min(valueB - 1, maxA) : max;
    const delta = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 1
      : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -1 : 0;
    if (!delta && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    const next = e.key === 'Home' ? lower : e.key === 'End' ? upper : current + delta;
    (thumb === 'a' ? onChangeA : onChangeB)(Math.min(upper, Math.max(lower, next)));
  };

  const startDrag = (thumb: 'a' | 'b') => (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.currentTarget instanceof HTMLElement) e.currentTarget.focus();
    const move = (ev: MouseEvent) => {
      const v = pickValue(ev.clientX);
      if (thumb === 'a') onChangeA(Math.min(Math.max(v, min, 1), Math.min(valueB - 1, maxA)));
      else               onChangeB(Math.min(max, Math.max(v, valueA + 1, 2)));
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const thumbStyle: React.CSSProperties = {
    position: 'absolute',
    width: 19, height: 19,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    background: '#fff',
    border: '2px solid #9C9CA6',
    boxShadow: '0 3px 12px rgba(49,57,73,0.15)',
    boxSizing: 'border-box',
    cursor: 'grab',
    outline: 'none',
    transition: 'left 80ms ease, border-color 120ms, box-shadow 120ms',
    zIndex: 1,
  };

  return (
    <div style={{ userSelect: 'none', width: '100%', fontFamily: 'var(--ds-font-family-base)' }}>
      <style>{`
        .ds-thumb-dot:hover {
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
        .ds-thumb-dot:focus-visible {
          outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
          outline-offset: 2px;
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
      `}</style>

      {/* ── Track + 2 thumbs ──────────────────────────────────────────────── */}
      <div ref={trackRef} style={{ position: 'relative', height: 16 }}>

        {/* Grey base track */}
        <div style={{
          position: 'absolute', left: 0, right: 0,
          top: '50%', transform: 'translateY(-50%)',
          height: 9, borderRadius: 4.5,
          background: 'var(--ds-components-slider-slider-bg-grey, #E5EAF2)',
          pointerEvents: 'none',
        }} />

        {/* Blue fill — visible range (left → thumb A) */}
        <div style={{
          position: 'absolute', left: 0, width: `${pctA}%`,
          top: '50%', transform: 'translateY(-50%)',
          height: 9, borderRadius: 4.5,
          background: 'var(--ds-components-slider-active-bg-fill-color, #5464F2)',
          pointerEvents: 'none',
        }} />

        {/* Orange fill — archive range (thumb A → thumb B) */}
        {showThumbB && pctB > pctA && (
          <div style={{
            position: 'absolute', left: `${pctA}%`, width: `${pctB - pctA}%`,
            top: '50%', transform: 'translateY(-50%)',
            height: 9, borderRadius: 4.5,
            background: 'var(--ds-icon-primary-orange, #F18E0A)',
            pointerEvents: 'none',
          }} />
        )}

        {/* Thumb A — visible end */}
        <div
          className="ds-thumb-dot"
          onMouseDown={startDrag('a')}
          style={{ ...thumbStyle, left: `${pctA}%` }}
          role="slider"
          tabIndex={0}
          onKeyDown={onKeyDown('a')}
          aria-valuemin={Math.max(min, 1)} aria-valuemax={Math.min(valueB - 1, maxA)} aria-valuenow={valueA}
          aria-label="Visible log history end"
        />

        {/* Thumb B — archive end */}
        {showThumbB && (
          <div
            className="ds-thumb-dot"
            onMouseDown={startDrag('b')}
            style={{ ...thumbStyle, left: `${pctB}%`, zIndex: 2 }}
            role="slider"
            tabIndex={0}
            onKeyDown={onKeyDown('b')}
            aria-valuemin={Math.max(valueA + 1, 2)} aria-valuemax={max} aria-valuenow={valueB}
            aria-label="Archive log end"
          />
        )}
      </div>

      {/* ── Numbers below — centered on each thumb's percentage position ──── */}
      <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
        {steps.map((s, i) => {
          const pct = count > 1 ? (i / (count - 1)) * 100 : 50;
          return (
            <span key={s} style={{
              position: 'absolute',
              left: `${pct}%`,
              transform: 'translateX(-50%)',
              fontSize: 11,
              color: 'var(--ds-text-muted, #8B9BB8)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}>
              {s}
            </span>
          );
        })}
      </div>

    </div>
  );
}
