import './ProgressBar.css';

const FILL_COLORS = {
  blue:  '#5464F2',
  red:   '#FF5D5A',
  green: '#12AA67',
};

function Track({ pct, fillColor, indeterminate }) {
  return (
    <div className="pb-track">
      <div
        className={`pb-fill${indeterminate ? ' pb-fill-indeterminate' : ''}`}
        style={indeterminate ? {} : { width: `${pct}%`, background: fillColor }}
      />
    </div>
  );
}

export function ProgressBar({
  value = 0,
  label,
  leftLabel,
  rightLabel,
  color = 'blue',
  indeterminate = false,
}) {
  const pct = Math.min(100, Math.max(0, value));
  const fillColor = FILL_COLORS[color] ?? FILL_COLORS.blue;
  const hasFooter = leftLabel || rightLabel;

  return (
    <div className="pb-root">
      {label && (
        <div className="pb-bar-area">
          <span className="pb-label">{label}</span>
          <Track pct={pct} fillColor={fillColor} indeterminate={indeterminate} />
        </div>
      )}
      {!label && (
        <Track pct={pct} fillColor={fillColor} indeterminate={indeterminate} />
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
