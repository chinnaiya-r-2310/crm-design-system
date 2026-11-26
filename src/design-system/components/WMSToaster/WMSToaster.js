import { useState, useId } from 'react';
import './WMSToaster.css';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

const STATUS_ICON = {
  success: 'AlertSuccess',
  error: 'AlertError',
  info: 'AlertInfo',
  warning: 'AlertWarning',
};

export function WMSToaster({
  variant = 'success',
  title,
  children,
  actions,
  defaultMinimized = false,
  minimized: controlledMinimized,
  onMinimizedChange,
  onClose,
}) {
  const [internalMinimized, setInternalMinimized] = useState(defaultMinimized);
  const [isOpen, setIsOpen] = useState(true);
  const titleId = useId();

  const isMinimized = controlledMinimized ?? internalMinimized;
  const statusIcon = STATUS_ICON[variant] ?? STATUS_ICON.info;

  if (!isOpen) return null;

  const handleMinimize = () => {
    const next = !isMinimized;
    setInternalMinimized(next);
    onMinimizedChange?.(next);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <section
      className={`wmst-root wmst-${variant}${isMinimized ? ' wmst-minimized' : ''}`}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-labelledby={titleId}
    >
      <header className="wmst-header">
        <div className="wmst-title-group">
          <span className="wmst-status-badge" aria-hidden="true">
            <Icon name={statusIcon} size={16} />
          </span>
          <h3 id={titleId} className="wmst-title">{title}</h3>
        </div>
        <div className="wmst-controls">
          <button
            type="button"
            className="wmst-icon-btn"
            aria-label={isMinimized ? 'Expand notification' : 'Minimize notification'}
            aria-expanded={!isMinimized}
            onClick={handleMinimize}
          >
            <Icon name={isMinimized ? 'RtExpand' : 'CriteriaMinus'} size={8} />
          </button>
          <button
            type="button"
            className="wmst-icon-btn"
            aria-label="Close notification"
            onClick={handleClose}
          >
            <Icon name="CloseSmall" size={8} />
          </button>
        </div>
      </header>

      {!isMinimized && (children || actions?.length > 0) && (
        <div className="wmst-body">
          {children && <div className="wmst-message">{children}</div>}
          {actions?.length > 0 && (
            <div className="wmst-actions">
              {actions.map(({ label, onClick, variant: btnVariant = 'default' }) => (
                <Button key={label} variant={btnVariant} size="sm" onClick={onClick}>
                  {label}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default WMSToaster;
