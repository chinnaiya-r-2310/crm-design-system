import './MessageBox.css';
import { AlertSuccess, AlertError, AlertWarning, AlertInfo, CloseSmall } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const ICONS = {
  success: AlertSuccess,
  error:   AlertError,
  warning: AlertWarning,
  info:    AlertInfo,
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function MessageBox({
  variant = 'info',
  message,
  title,
  closable = true,
  onClose,
  className,
  style,
}) {
  const Icon = ICONS[variant];

  return (
    <div
      role="status"
      className={`message-box-root message-box-${variant} ${title ? 'message-box-with-title' : ''} ${className ?? ''}`}
      style={style}
    >
      <div className="message-box-body">
        <span className="message-box-icon-slot" aria-hidden="true">
          <Icon />
        </span>
        <div className="message-box-content">
          {title && <span className="message-box-title">{title}</span>}
          <span className="message-box-message">{message}</span>
        </div>
      </div>

      {closable && (
        <button
          type="button"
          className="message-box-close-btn"
          onClick={onClose}
          aria-label="Dismiss"
        >
          <CloseSmall />
        </button>
      )}
    </div>
  );
}

export default MessageBox;
