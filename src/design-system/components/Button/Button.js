import './Button.css';
import { ChevronDownFilled, Check } from '../../foundations/icons/Icons';
import { useState, useRef, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

const ArrowIcon = () => <ChevronDownFilled aria-hidden="true" />;

const Spinner = () => (
  <svg
    className={'button-spinner'}
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

const LINK_VARIANTS = new Set([
  'link-primary',
  'link-secondary',
  'link-default',
  'link-red',
]);

// Ghost buttons never have a visible separator — always render as single button.
const GHOST_VARIANTS = new Set(['ghost-blue', 'ghost-red']);

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
}) {
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
        className={'button-split-btn'}
        data-variant={variant}
        data-size={size}
        data-open={isOpen || undefined}
        aria-disabled={isDisabled || undefined}
        id={id}
        style={style}
        {...forceStateProps}
      >
        <button
          className={'button-main-zone'}
          disabled={isDisabled}
          aria-busy={loading || undefined}
          onClick={onClick}
          {...rest}
        >
          <span className={'button-content-wrapper'}>
            <span
              aria-hidden={loading || undefined}
              style={loading ? { visibility: 'hidden' } : undefined}
              className={'button-content-inner'}
            >
              {frontIcon && <span aria-hidden="true">{frontIcon}</span>}
              <span className={'button-label'}>{children}</span>
            </span>
            {loading && (
              <span className={'button-spinner-overlay'} aria-hidden="true">
                <Spinner />
              </span>
            )}
          </span>
        </button>
        <span className={'button-separator'} aria-hidden="true" />
        <button
          className={'button-arrow-zone'}
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
  const className = ['button-btn', isLink ? 'button-link-btn' : ''].filter(Boolean).join(' ');

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
      <span className={'button-content-wrapper'}>
        <span
          aria-hidden={loading || undefined}
          style={loading ? { visibility: 'hidden' } : undefined}
          className={'button-content-inner'}
        >
          {frontIcon && <span aria-hidden="true">{frontIcon}</span>}
          <span className={'button-label'}>{children}</span>
        </span>
        {loading && (
          <span className={'button-spinner-overlay'} aria-hidden="true">
            <Spinner />
          </span>
        )}
      </span>
      {showArrowSection && (
        <span className={'button-arrow-section'} data-loading={loading || undefined} aria-hidden="true">
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}

export default Button;

// ─────────────────────────────────────────────────────────────────────────────
// ButtonGroup
// ─────────────────────────────────────────────────────────────────────────────

export function ButtonGroup({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  size = 'sm',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const rootRef = useRef(null);

  const selected = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find(o => o.value === selected);

  // Close dropdown on click outside
  useEffect(() => {
    if (!dropdownOpen) return;
    function onPointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [dropdownOpen]);

  function handleSelect(val) {
    if (controlledValue === undefined) setInternalValue(val);
    onChange?.(val);
    setDropdownOpen(false);
  }

  return (
    <div
      ref={rootRef}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10 }}
    >
      {selectedOption ? (
        <>
          {/* More Button (split=false): whole button toggles the dropdown */}
          <Button
            variant={selectedOption.selectedVariant}
            size={size}
            arrow
            split={false}
            isOpen={dropdownOpen}
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            {selectedOption.label}
          </Button>

          {dropdownOpen && (
            <div className={'button-panel'}>
              {options.map(opt => (
                <button
                  key={opt.value}
                  className={'button-option'}
                  data-selected={opt.value === selected || undefined}
                  onClick={() => handleSelect(opt.value)}
                >
                  <span className={'button-option-tick'} aria-hidden="true">
                    {opt.value === selected && <Check />}
                  </span>
                  <span className={'button-option-label'}>{opt.label}</span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        options.map(opt => (
          <Button
            key={opt.value}
            variant={opt.outlineVariant}
            size={size}
            onClick={() => handleSelect(opt.value)}
          >
            {opt.label}
          </Button>
        ))
      )}
    </div>
  );
}
