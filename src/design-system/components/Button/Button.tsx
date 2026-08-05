import styles from './Button.module.css';
import { ChevronDownFilled } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** Filled buttons: solid background with gradient depth. */
export type ButtonFilledVariant = 'primary' | 'default' | 'negative' | 'success' | 'warning';

/** Outline buttons: tinted background with a colored border. */
export type ButtonOutlineVariant =
  | 'outline-blue'
  | 'outline-green'
  | 'outline-red'
  | 'outline-orange';

/** Ghost buttons: light tinted background, no border. */
export type ButtonGhostVariant = 'ghost-blue' | 'ghost-red';

/** Link buttons: text-only, no background or border. */
export type ButtonLinkVariant =
  | 'link-primary'
  | 'link-secondary'
  | 'link-default'
  | 'link-red';

export type ButtonVariant =
  | ButtonFilledVariant
  | ButtonOutlineVariant
  | ButtonGhostVariant
  | ButtonLinkVariant;

/** Visual size. Matches Figma: md = large (32px), sm = small (27px), xs = extreme small (19px). */
export type ButtonSize = 'md' | 'sm' | 'xs';

/**
 * Forces a visual state for Storybook stories and visual regression tests.
 * Does NOT affect real browser interaction behaviour.
 */
export type ButtonForceState = 'hover' | 'active';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button label text. */
  children: React.ReactNode;

  /**
   * Visual style variant.
   * - Filled: primary | default | negative | success | warning
   * - Outline: outline-blue | outline-green | outline-red | outline-orange
   * - Ghost:   ghost-blue | ghost-red
   * - Link:    link-primary | link-secondary | link-default | link-red
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Visual size.
   * - md: 32px height (standard)
   * - sm: 27px height (compact)
   * @default 'md'
   */
  size?: ButtonSize;

  /** Shows a spinning loader and disables interaction. */
  loading?: boolean;

  /** Appends a down-chevron arrow icon to the right of the label. */
  arrow?: boolean;

  /**
   * Show a separator line between label and arrow.
   * - `true` (default): Menu Button — arrow sits in a distinct split zone.
   * - `false`: More Button — arrow is inline with the label, no separator.
   * Ghost variants always hide the separator via CSS regardless of this prop.
   */
  split?: boolean;

  /** Icon rendered in the left slot before the label. */
  frontIcon?: React.ReactNode;

  /**
   * Marks the button as the trigger for an open dropdown/popover.
   * Applies the active visual state and rotates the arrow 180°.
   */
  isOpen?: boolean;

  /**
   * Click handler for the arrow/dropdown zone of a Menu Button (split=true).
   * The main label zone uses the standard `onClick` prop.
   * Has no effect when split=false (More Button).
   */
  onArrowClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Forces a visual state for Storybook stories and visual regression tests.
   * @internal not intended for production use
   */
  forceState?: ButtonForceState;
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

const ArrowIcon = () => <ChevronDownFilled aria-hidden="true" />;

const Spinner = () => (
  <svg
    className={styles.spinner}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <path
      d="M7 1.5A5.5 5.5 0 0 1 12.5 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const LINK_VARIANTS: Set<ButtonVariant> = new Set([
  'link-primary',
  'link-secondary',
  'link-default',
  'link-red',
]);

// Ghost buttons never have a visible separator — always render as single button.
const GHOST_VARIANTS: Set<ButtonVariant> = new Set(['ghost-blue', 'ghost-red']);

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  arrow = false,
  split = true,
  isOpen = false,
  frontIcon,
  forceState,
  disabled,
  children,
  onArrowClick,
  onClick,
  id,
  style,
  ...rest
}: ButtonProps) {
  const isLink = LINK_VARIANTS.has(variant);
  const isGhost = GHOST_VARIANTS.has(variant);
  const isDisabled = disabled || loading;
  const showArrowSection = arrow;
  // Ghost variants never show a separator — always treated as more-button style.
  const showSeparator = arrow && split && !isGhost;
  // No-separator arrow: data-more drives the 5px text-to-arrow gap in CSS.
  const isMore = showArrowSection && !showSeparator;

  const forceStateProps = forceState !== undefined ? { 'data-force-state': forceState } : {};

  // ── Menu Button — two separate interactive zones ──────────────────────────
  // Split into a div wrapper + mainZone button + arrowZone button so each zone
  // can have independent hover/active states and click handlers.
  if (showSeparator) {
    return (
      <div
        className={styles.splitBtn}
        data-variant={variant}
        data-size={size}
        data-open={isOpen || undefined}
        aria-disabled={isDisabled || undefined}
        id={id}
        style={style}
        {...forceStateProps}
      >
        <button
          className={styles.mainZone}
          disabled={isDisabled}
          aria-busy={loading || undefined}
          onClick={onClick}
          {...rest}
        >
          <span className={styles.contentWrapper}>
            <span
              aria-hidden={loading || undefined}
              style={loading ? { visibility: 'hidden' } : undefined}
              className={styles.contentInner}
            >
              {frontIcon && <span aria-hidden="true">{frontIcon}</span>}
              <span className={styles.label}>{children}</span>
            </span>
            {loading && (
              <span className={styles.spinnerOverlay} aria-hidden="true">
                <Spinner />
              </span>
            )}
          </span>
        </button>
        <span className={styles.separator} aria-hidden="true" />
        <button
          className={styles.arrowZone}
          disabled={isDisabled}
          data-loading={loading || undefined}
          onClick={onArrowClick}
          aria-expanded={isOpen || undefined}
          aria-haspopup="true"
          aria-label="Open dropdown"
          tabIndex={isDisabled ? -1 : 0}
        >
          <ArrowIcon />
        </button>
      </div>
    );
  }

  // ── Single button (plain, More Button, ghost, link) ───────────────────────
  const className = [styles.btn, isLink ? styles.linkBtn : ''].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      data-variant={variant}
      data-size={isLink ? undefined : size}
      data-split={showArrowSection || undefined}
      data-more={isMore || undefined}
      data-open={isOpen || undefined}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      id={id}
      style={style}
      onClick={onClick}
      {...forceStateProps}
      {...rest}
    >
      <span className={styles.contentWrapper}>
        <span
          aria-hidden={loading || undefined}
          style={loading ? { visibility: 'hidden' } : undefined}
          className={styles.contentInner}
        >
          {frontIcon && <span aria-hidden="true">{frontIcon}</span>}
          <span className={styles.label}>{children}</span>
        </span>
        {loading && (
          <span className={styles.spinnerOverlay} aria-hidden="true">
            <Spinner />
          </span>
        )}
      </span>
      {showArrowSection && (
        <span className={styles.arrowSection} data-loading={loading || undefined} aria-hidden="true">
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}

export default Button;
