import './MessageInfo.css';

const LABELS = {
  note:    'Note',
  warning: 'Warning',
  success: 'Success',
  error:   'Error',
  info:    'Info',
};

export function MessageInfo({ variant = 'info', message, points }) {
  const label = LABELS[variant] ?? LABELS.info;

  if (points && points.length > 0) {
    return (
      <div className={`msg-info-root msg-info-${variant} msg-info-multi`} role="status">
        <span className="msg-info-label">{label}:</span>
        <ul className="msg-info-list">
          {points.map((point, i) => (
            <li key={i} className="msg-info-point">{point}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`msg-info-root msg-info-${variant}`} role="status">
      <span className="msg-info-label">{label}:&nbsp;</span>
      <span className="msg-info-text">{message}</span>
    </div>
  );
}

export default MessageInfo;
