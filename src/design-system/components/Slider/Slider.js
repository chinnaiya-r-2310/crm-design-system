import { useRef, useCallback, useState } from 'react';
import './Slider.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Slider — single thumb
   Props:
     value, min, max, step, disabled
     showValue       — show top-right value label (default true)
     suffix          — appended to displayed value e.g. "%"
     showTooltip     — show bubble tooltip while dragging (default false)
     tooltipPosition — 'above' | 'below' (default 'above')
     marks           — [{ value, label }] tick marks with labels below track
     onChange
   ───────────────────────────────────────────────────────────────────────────── */
export function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = true,
  suffix = '',
  showTooltip = false,
  tooltipPosition = 'above',
  marks,
  onChange,
}) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const clamped = Math.min(max, Math.max(min, value));
  const pct = ((clamped - min) / (max - min)) * 100;

  const pickValue = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    return Math.round(raw / step) * step;
  }, [min, max, step]);

  const startDrag = useCallback((e) => {
    if (disabled) return;
    e.preventDefault();
    setDragging(true);
    const cx = (ev) => ev.touches ? ev.touches[0].clientX : ev.clientX;
    const move = (ev) => onChange?.(pickValue(cx(ev)));
    const up = () => {
      setDragging(false);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', up);
    };
    move(e.nativeEvent ?? e);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('touchend', up);
  }, [disabled, pickValue, onChange]);

  const onKeyDown = (e) => {
    if (disabled) return;
    const delta = (e.key === 'ArrowRight' || e.key === 'ArrowUp') ? step
                : (e.key === 'ArrowLeft'  || e.key === 'ArrowDown') ? -step : 0;
    if (!delta) return;
    e.preventDefault();
    onChange?.(Math.min(max, Math.max(min, clamped + delta)));
  };

  const ttClass = `sld-tooltip sld-tt-${tooltipPosition}${dragging ? ' sld-tt-visible' : ''}`;

  return (
    <div className={`sld-root${disabled ? ' sld-disabled' : ''}`}>
      {showValue && (
        <div className="sld-value-row">
          <span className="sld-value">{clamped}{suffix}</span>
        </div>
      )}
      <div className="sld-track-wrap" ref={trackRef} onMouseDown={startDrag} onTouchStart={startDrag}>
        <div className="sld-track-bg" />
        <div className="sld-track-fill" style={{ width: `${pct}%` }} />
        <div
          className="sld-thumb"
          style={{ left: `${pct}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={clamped}
          aria-disabled={disabled || undefined}
          onKeyDown={onKeyDown}
        >
          {showTooltip && (
            <div className={ttClass}>{clamped}{suffix}</div>
          )}
        </div>
      </div>
      {marks && marks.length > 0 && (
        <div className="sld-marks-row">
          {marks.map((m, i) => {
            const mPct = ((m.value - min) / (max - min)) * 100;
            return (
              <div key={i} className="sld-mark" style={{ left: `${mPct}%` }}>
                <div className="sld-mark-tick" />
                <span className="sld-mark-label">{m.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MultiSlider — 3-segment distribution (2 triangle thumbs)
   Props: values=[v1,v2], min, max, step, disabled, colors, onChange
   ───────────────────────────────────────────────────────────────────────────── */
const DEFAULT_COLORS = ['#FF6D6D', '#FAC268', '#39C995'];

export function MultiSlider({
  values = [33, 66],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  colors = DEFAULT_COLORS,
  onChange,
}) {
  const trackRef = useRef(null);
  const [v1, v2] = values;
  const pct1 = ((v1 - min) / (max - min)) * 100;
  const pct2 = ((v2 - min) / (max - min)) * 100;
  const seg1 = v1 - min;
  const seg2 = v2 - v1;
  const seg3 = max - v2;
  const isPercent = min === 0 && max === 100;

  const pickValue = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    return Math.round(raw / step) * step;
  }, [min, max, step]);

  const startDrag = useCallback((thumbIdx) => (e) => {
    if (disabled) return;
    e.preventDefault();
    e.stopPropagation();
    const move = (ev) => {
      const v = pickValue(ev.touches ? ev.touches[0].clientX : ev.clientX);
      if (thumbIdx === 0) onChange?.([Math.min(v, v2 - step), v2]);
      else onChange?.([v1, Math.max(v, v1 + step)]);
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    move(e.nativeEvent ?? e);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }, [disabled, pickValue, onChange, v1, v2, step]);

  return (
    <div className={`sld-multi-root${disabled ? ' sld-disabled' : ''}`}>
      <div className="sld-multi-labels">
        <span className="sld-multi-label" style={{ width: `${pct1}%` }}>{seg1}{isPercent ? '%' : ''}</span>
        <span className="sld-multi-label" style={{ width: `${pct2 - pct1}%` }}>{seg2}{isPercent ? '%' : ''}</span>
        <span className="sld-multi-label" style={{ flex: 1 }}>{seg3}{isPercent ? '%' : ''}</span>
      </div>
      <div className="sld-multi-track-wrap">
        <div className="sld-multi-track" ref={trackRef}>
          <div className="sld-multi-seg" style={{ width: `${pct1}%`, background: colors[0] }} />
          <div className="sld-multi-sep" />
          <div className="sld-multi-seg" style={{ width: `${pct2 - pct1}%`, background: colors[1] }} />
          <div className="sld-multi-sep" />
          <div className="sld-multi-seg sld-multi-seg-last" style={{ background: colors[2] }} />
        </div>
        <div
          className="sld-multi-thumb"
          style={{ left: `${pct1}%` }}
          onMouseDown={startDrag(0)}
          role="slider" tabIndex={disabled ? -1 : 0}
          aria-valuemin={min} aria-valuemax={v2 - step} aria-valuenow={v1}
        />
        <div
          className="sld-multi-thumb"
          style={{ left: `${pct2}%` }}
          onMouseDown={startDrag(1)}
          role="slider" tabIndex={disabled ? -1 : 0}
          aria-valuemin={v1 + step} aria-valuemax={max} aria-valuenow={v2}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PercentSlider — 10 heat-map segments, threshold thumb
   Figma: Chinnaiya Style Sheet node 93720:230555
   Props:
     value    — threshold 0–100 (snaps to multiples of 10)
     disabled
     onChange(value)
   Segments left of the thumb are grayed out; at/right are colored.
   ───────────────────────────────────────────────────────────────────────────── */
const PCT_SEGMENT_COLORS = [
  '#EDECD1', '#E1E0A6', '#CECC84', '#DAC072', '#EBB05F',
  '#F7A553', '#FB934E', '#FB734C', '#FA624C', '#F9504C',
];

export function PercentSlider({
  value = 0,
  disabled = false,
  onChange,
}) {
  const trackRef = useRef(null);
  const clamped = Math.min(100, Math.max(0, Math.round(value / 10) * 10));

  const pickValue = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(ratio * 10) * 10;
  }, []);

  const startDrag = useCallback((e) => {
    if (disabled) return;
    e.preventDefault();
    const cx = (ev) => ev.touches ? ev.touches[0].clientX : ev.clientX;
    const move = (ev) => onChange?.(pickValue(cx(ev)));
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', up);
    };
    move(e.nativeEvent ?? e);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('touchend', up);
  }, [disabled, pickValue, onChange]);

  const onKeyDown = (e) => {
    if (disabled) return;
    const delta = (e.key === 'ArrowRight' || e.key === 'ArrowUp') ? 10
                : (e.key === 'ArrowLeft'  || e.key === 'ArrowDown') ? -10 : 0;
    if (!delta) return;
    e.preventDefault();
    onChange?.(Math.min(100, Math.max(0, clamped + delta)));
  };

  return (
    <div className={`sld-pct-root${disabled ? ' sld-disabled' : ''}`}>
      <div className="sld-pct-header">
        <span className="sld-pct-label">{clamped}-100%</span>
      </div>
      <div className="sld-pct-wrap" ref={trackRef} onMouseDown={startDrag} onTouchStart={startDrag}>
        <div className="sld-pct-segs">
          {PCT_SEGMENT_COLORS.map((color, i) => (
            <div
              key={i}
              className="sld-pct-seg"
              style={{ background: i >= clamped / 10 ? color : '#E5EAF2' }}
            />
          ))}
        </div>
        <div
          className="sld-pct-thumb"
          style={{ left: `${clamped}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={clamped}
          aria-disabled={disabled || undefined}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   StepSlider — discrete step dots + labels
   Figma: font-size slider variant
   Props:
     value   — current step index (0-based)
     steps   — string[] or { label, value }[]
     disabled
     onChange(index)
   ───────────────────────────────────────────────────────────────────────────── */
export function StepSlider({
  value = 0,
  steps = [],
  disabled = false,
  onChange,
}) {
  if (!steps.length) return null;
  const count = steps.length;
  const fillPct = count > 1 ? (value / (count - 1)) * 100 : 0;

  const label = (s) => (typeof s === 'string' ? s : s.label);

  return (
    <div className={`sld-step-root${disabled ? ' sld-disabled' : ''}`}>
      {/* Labels centered above each dot */}
      <div className="sld-step-label-row">
        {steps.map((s, i) => {
          const pct = count > 1 ? (i / (count - 1)) * 100 : 50;
          return (
            <span
              key={i}
              className={`sld-step-label${i === value ? ' sld-step-label-active' : ''}`}
              style={{ left: `${pct}%` }}
            >
              {label(s)}
            </span>
          );
        })}
      </div>

      {/* Track + dots */}
      <div className="sld-step-track-wrap">
        <div className="sld-step-fill" style={{ width: `${fillPct}%` }} />
        {steps.map((_, i) => {
          const dotClass = i < value  ? 'sld-step-dot sld-step-dot-passed'
                         : i === value ? 'sld-step-dot sld-step-dot-active'
                         : 'sld-step-dot sld-step-dot-future';
          return (
            <div
              key={i}
              className={dotClass}
              role="radio"
              aria-checked={i === value}
              tabIndex={disabled ? -1 : 0}
              onClick={() => !disabled && onChange?.(i)}
              onKeyDown={(e) => {
                if (disabled) return;
                if (e.key === 'ArrowRight' && i < count - 1) { e.preventDefault(); onChange?.(i + 1); }
                if (e.key === 'ArrowLeft'  && i > 0)         { e.preventDefault(); onChange?.(i - 1); }
                if (e.key === 'Enter' || e.key === ' ')       { e.preventDefault(); onChange?.(i); }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
