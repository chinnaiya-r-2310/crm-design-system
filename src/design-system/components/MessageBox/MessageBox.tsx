import styles from './MessageBox.module.css';
import { AlertSuccess, AlertError, AlertWarning, AlertInfo, CloseSmall } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type MessageBoxVariant = 'success' | 'error' | 'warning' | 'info';

export interface MessageBoxProps {
  /** Visual type — drives color, icon, and border. */
  variant?: MessageBoxVariant;

  /**
   * Main message text.
   * Figma: "You have successfully created the account." (example copy)
   */
  message: React.ReactNode;

  /**
   * Optional title shown above the message (uses the "with title" layout).
   * When omitted the compact single-line layout is used.
   */
  title?: React.ReactNode;

  /**
   * When provided a close (×) button is shown and called on click.
   * Figma: "Close Icon" boolean property.
   */
  onClose?: () => void;

  className?: string;
  style?: React.CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const ICONS: Record<MessageBoxVariant, React.FC<React.SVGProps<SVGSVGElement>>> = {
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
  onClose,
  className,
  style,
}: MessageBoxProps) {
  const Icon = ICONS[variant];

  return (
    <div
      role="status"
      className={`${styles.root} ${styles[variant]} ${title ? styles.withTitle : ''} ${className ?? ''}`}
      style={style}
    >
      <div className={styles.body}>
        <span className={styles.iconSlot} aria-hidden="true">
          <Icon />
        </span>
        <div className={styles.content}>
          {title && <span className={styles.title}>{title}</span>}
          <span className={styles.message}>{message}</span>
        </div>
      </div>

      {onClose && (
        <button
          type="button"
          className={styles.closeBtn}
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
