import { useId, useMemo, useRef, useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { Check, Search as SearchIcon, SourceClose } from '../../foundations/icons/Icons';
import { crmIconMetadata } from '../../foundations/icons/CrmCatalog';
import { industryIconCatalog, industryIconMetadata } from '../../foundations/icons/industryIcons';
import './IconPicker.css';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

/** Value emitted when the text (initials) option is selected. */
export const ICON_PICKER_TEXT = 'text';

const COLUMNS = 7;

/** Default icon set — 300 industry icons (healthcare, finance, retail, …). */
export const INDUSTRY_ICONS = industryIconCatalog.map(icon => icon.name);

/** The CRM custom-button icon family. */
export const CUSTOM_BUTTON_ICONS = Object.keys(crmIconMetadata).filter(name => name.endsWith('CustomBtn'));

const industryLabels = Object.fromEntries(industryIconCatalog.map(icon => [icon.name, icon.label]));

// "CrmVideoDisableCustomBtn" → "Video Disable"; industry icons use their catalog label.
export function iconLabel(name) {
  return industryLabels[name] ?? name
    .replace(/^Crm/, '')
    .replace(/CustomBtn$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim();
}

function toItem(icon) {
  return typeof icon === 'string' ? { name: icon, label: iconLabel(icon) } : { label: iconLabel(icon.name), ...icon };
}

function matches(item, query) {
  const keywords = (industryIconMetadata[item.name] ?? crmIconMetadata[item.name])?.keywords ?? '';
  const haystack = `${item.label} ${keywords}`.toLowerCase();
  return query.split(/\s+/).every(word => haystack.includes(word));
}

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Cell
// ─────────────────────────────────────────────────────────────────────────────

function IconCell({ item, selected, focusable, onSelect, onKeyDown, cellRef, tooltipDelay }) {
  return (
    <Tooltip content={item.label} placement="top" followCursor delay={tooltipDelay} wrapperClassName="icon-picker-cell-wrap">
      <button
        ref={cellRef}
        type="button"
        role="option"
        aria-selected={selected}
        aria-label={item.label}
        tabIndex={focusable ? 0 : -1}
        className={selected ? 'icon-picker-cell icon-picker-cell--selected' : 'icon-picker-cell'}
        onClick={() => onSelect(item.name)}
        onKeyDown={onKeyDown}
      >
        {item.name === ICON_PICKER_TEXT
          ? <span className="icon-picker-initials" aria-hidden="true">{item.initials}</span>
          : <Icon name={item.name} size={16} />}
        {selected && (
          <span className="icon-picker-badge" aria-hidden="true">
            <Check width={7} height={5} />
          </span>
        )}
      </button>
    </Tooltip>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section — a listbox grid with roving tabindex and arrow-key navigation
// ─────────────────────────────────────────────────────────────────────────────

function IconGrid({ label, labelId, items, value, onSelect, tooltipDelay }) {
  const refs = useRef([]);
  const selectedIndex = items.findIndex(i => i.name === value);
  const [activeIndex, setActiveIndex] = useState(null);
  const focusIndex = Math.min(activeIndex ?? (selectedIndex >= 0 ? selectedIndex : 0), items.length - 1);

  function move(to) {
    const next = Math.max(0, Math.min(items.length - 1, to));
    setActiveIndex(next);
    refs.current[next]?.focus();
  }

  function handleKeyDown(e, index) {
    const keys = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      ArrowDown: index + COLUMNS,
      ArrowUp: index - COLUMNS,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      move(keys[e.key]);
    }
  }

  return (
    <div
      role="listbox"
      aria-labelledby={labelId}
      aria-label={labelId ? undefined : label}
      className="icon-picker-grid"
    >
      {items.map((item, index) => (
        <IconCell
          key={item.name}
          item={item}
          selected={item.name === value}
          focusable={index === focusIndex}
          onSelect={name => { setActiveIndex(index); onSelect(name); }}
          onKeyDown={e => handleKeyDown(e, index)}
          cellRef={el => { refs.current[index] = el; }}
          tooltipDelay={tooltipDelay}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Icon picker panel — search, an optional "Recommended" row and a 7-column icon grid.
 *
 * Value is an icon name from the CRM catalog, or ICON_PICKER_TEXT when the
 * text (initials) option is chosen. Controlled via value + onChange, or
 * uncontrolled via defaultValue.
 */
export function IconPicker({
  icons = INDUSTRY_ICONS,
  recommended = [],
  /** Initials shown as the first grid option (e.g. "ST"). Omit to hide the text option. */
  initials,
  value: controlledValue,
  defaultValue = null,
  onChange,
  searchPlaceholder = 'Search',
  recommendedLabel = 'Recommended',
  noResultsText = 'No Result Found',
  /** Visible grid rows before the grid scrolls. */
  rows = 5,
  /** Milliseconds before an icon's name tooltip appears. */
  tooltipDelay = 500,
  autoFocus = false,
  /** 'popover' adds a left-side hook, title and close button without changing the grid. */
  variant = 'default',
  title = 'Change Module Icon',
  onClose,
  closeAriaLabel = 'Close icon picker',
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const recommendedId = useId();
  const titleId = useId();
  const isPopover = variant === 'popover';

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const trimmed = query.trim().toLowerCase();

  const allItems = useMemo(() => {
    const list = icons.map(toItem);
    return initials
      ? [{ name: ICON_PICKER_TEXT, label: `Text (${initials})`, initials }, ...list]
      : list;
  }, [icons, initials]);

  const recommendedItems = useMemo(() => recommended.map(toItem), [recommended]);
  const showRecommended = !trimmed && recommendedItems.length > 0;
  // Recommended icons live only in their own row; while searching that row hides, so they rejoin the results.
  const recommendedNames = useMemo(() => new Set(recommended.map(icon => (typeof icon === 'string' ? icon : icon.name))), [recommended]);
  const visibleItems = trimmed
    ? allItems.filter(item => matches(item, trimmed))
    : showRecommended ? allItems.filter(item => !recommendedNames.has(item.name)) : allItems;

  function select(name) {
    if (controlledValue === undefined) setInternalValue(name);
    onChange?.(name);
  }

  function clearSearch() {
    setQuery('');
    searchRef.current?.focus();
  }

  return (
    <div
      className={isPopover ? 'icon-picker icon-picker--popover' : 'icon-picker'}
      role={isPopover ? 'dialog' : undefined}
      aria-labelledby={isPopover ? titleId : undefined}
      onKeyDown={isPopover ? e => {
        if (e.key === 'Escape' && !e.defaultPrevented) {
          e.stopPropagation();
          onClose?.();
        }
      } : undefined}
    >
      {isPopover && (
        <>
          <span className="icon-picker-hook" aria-hidden="true" />
          <div className="icon-picker-header">
            <h2 id={titleId} className="icon-picker-title">{title}</h2>
            <button type="button" className="icon-picker-close" onClick={onClose} aria-label={closeAriaLabel}>
              <SourceClose width={12} height={12} aria-hidden="true" />
            </button>
          </div>
        </>
      )}
      <div className="icon-picker-search">
        <span className="icon-picker-search-icon"><SearchIcon aria-hidden="true" /></span>
        <input
          ref={searchRef}
          type="text"
          className="icon-picker-search-input"
          placeholder={searchPlaceholder}
          aria-label="Search icons"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === 'Escape' && query) { e.stopPropagation(); clearSearch(); } }}
          autoFocus={autoFocus}
        />
        {query && (
          <button type="button" className="icon-picker-clear" onClick={clearSearch} aria-label="Clear search">
            <CloseIcon />
          </button>
        )}
      </div>

      <div
        className={showRecommended ? 'icon-picker-content icon-picker-content--recommended' : 'icon-picker-content'}
        style={{ '--icon-picker-rows': rows, '--icon-picker-recommended-rows': Math.ceil(recommendedItems.length / COLUMNS) }}
      >
        {showRecommended && (
          <>
            <div className="icon-picker-section">
              <span id={recommendedId} className="icon-picker-label">{recommendedLabel}</span>
              <IconGrid labelId={recommendedId} items={recommendedItems} value={value} onSelect={select} tooltipDelay={tooltipDelay} />
            </div>
            <hr className="icon-picker-divider" />
          </>
        )}

        {visibleItems.length > 0 ? (
          <IconGrid label="All icons" items={visibleItems} value={value} onSelect={select} tooltipDelay={tooltipDelay} />
        ) : (
          <p className="icon-picker-empty" role="status">{noResultsText}</p>
        )}
      </div>
    </div>
  );
}

export default IconPicker;
