import './ProgressBar.css';

const FILL_COLORS = {
  blue:  '#5464F2',
  red:   '#FF5D5A',
  green: '#12AA67',
};

export function ProgressBar({
  value = 0,
  label,
  leftLabel,
  rightLabel,
  color = 'blue',
}) {
  const pct = Math.min(100, Math.max(0, value));
  const fillColor = FILL_COLORS[color] ?? FILL_COLORS.blue;
  const hasFooter = leftLabel || rightLabel;

  return (
    <div className="pb-root">
      {label && (
        <div className="pb-bar-area">
          <span className="pb-label">{label}</span>
          <div className="pb-track">
            <div className="pb-fill" style={{ width: `${pct}%`, background: fillColor }} />
          </div>
        </div>
      )}
      {!label && (
        <div className="pb-track">
          <div className="pb-fill" style={{ width: `${pct}%`, background: fillColor }} />
        </div>
      )}
      {hasFooter && (
        <div className="pb-footer">
          <span className="pb-footer-left">{leftLabel}</span>
          <span className="pb-footer-right">{rightLabel}</span>
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
