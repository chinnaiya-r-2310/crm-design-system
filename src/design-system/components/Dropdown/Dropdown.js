import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDownFilled, Check, Search as SearchIcon } from '../../foundations/icons/Icons';
import { Tooltip } from '../Tooltip/Tooltip.js';
import './Dropdown.css';

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

// Shows a black tooltip only when the text is actually truncated (scrollWidth > clientWidth).
// Checks on mouseEnter so the first hover already shows the tooltip when truncated.
function TruncatedLabel({
  text,
  className,
  wrapperStyle,
  spanProps,
}) {
  const ref = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const handleMouseEnter = (e) => {
    if (ref.current) setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth);
    spanProps?.onMouseEnter?.(e);
  };

  return (
    <Tooltip
      content={text}
      variant="black"
      placement="top"
      disabled={!isTruncated}
      wrapperStyle={wrapperStyle}
    >
      <span ref={ref} {...spanProps} className={className} onMouseEnter={handleMouseEnter}>
        {text}
      </span>
    </Tooltip>
  );
}

function groupOptions(options) {
  const groups = new Map();
  for (const opt of options) {
    const key = opt.group;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(opt);
  }
  return groups;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Dropdown({
  label,
  placeholder = 'Select',
  value,
  selectedValues = [],
  options = [],
  helperText,
  width = 670,
  layout = 'horizontal',
  required,
  disabled,
  error,
  searchable = false,
  multiSelect = false,
  footerAction,
  onChange,
  onMultiChange,
  id: idProp,
  style,
  columns,
}) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;
  const listId = `${triggerId}-list`;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  // Internal single-select state (uncontrolled mode — when no onChange is provided)
  const [internalSingleValue, setInternalSingleValue] = useState(value);
  // Internal multi-select state (uncontrolled mode)
  const [internalSelected, setInternalSelected] = useState(selectedValues);

  const rootRef    = useRef(null);
  const triggerRef = useRef(null);
  const panelRef   = useRef(null);
  const searchRef  = useRef(null);
  const listRef    = useRef(null);

  const [activeIndex, setActiveIndex] = useState(-1);
  const PANEL_MAX_WIDTH = 390;
  const [panelPos, setPanelPos] = useState(null);
  const justOpenedRef = useRef(false); // true only on the render cycle when panel first appears
  const isKeyNavRef   = useRef(false); // true when activeIndex changed via keyboard — gates scrollIntoView

  const updatePanelPos = () => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setPanelPos({ top: r.bottom - 1, left: r.left, width: r.width });
  };

  const activeValues = onMultiChange ? selectedValues : internalSelected;

  // Resolved single value: controlled when onChange provided, otherwise internal
  const resolvedValue = onChange ? value : internalSingleValue;
  const selectedOption = options.find(o => o.value === resolvedValue);
  const displayValue = multiSelect
    ? (activeValues.length === 0 ? placeholder : `${activeValues.length} selected`)
    : (selectedOption?.label ?? placeholder);
  const isPlaceholder = multiSelect ? activeValues.length === 0 : !selectedOption;

  // Auto-enable search when there are 10 or more options
  const isSearchable = searchable || options.length >= 10;

  const filtered = isSearchable && search
    ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  // O(1) index lookup for grouped rendering
  const filteredIndexMap = new Map(filtered.map((o, i) => [o.value, i]));

  const toggle = () => {
    if (disabled) return;
    setOpen(prev => {
      if (!prev) setSearch('');
      return !prev;
    });
  };

  const selectSingle = (opt) => {
    if (opt.disabled) return;
    if (onChange) {
      onChange(opt.value);
    } else {
      setInternalSingleValue(opt.value);
    }
    setOpen(false);
    setSearch('');
  };

  const toggleMulti = (opt) => {
    if (opt.disabled) return;
    const next = activeValues.includes(opt.value)
      ? activeValues.filter(v => v !== opt.value)
      : [...activeValues, opt.value];
    if (onMultiChange) {
      onMultiChange(next);
    } else {
      setInternalSelected(next);
    }
  };

  const handleDone = () => {
    onMultiChange?.(activeValues);
    setOpen(false);
    setSearch('');
  };

  // Close on outside click — check both trigger wrapper and portal panel
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const t = e.target;
      if (!rootRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Compute panel position on open; track scroll/resize while open
  useEffect(() => {
    if (open) {
      justOpenedRef.current = isSearchable; // signal: focus search on next panelPos render
      updatePanelPos();
    } else {
      setPanelPos(null);
      justOpenedRef.current = false;
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return;
    window.addEventListener('resize', updatePanelPos);
    return () => {
      window.removeEventListener('resize', updatePanelPos);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock scroll on the nearest scrollable ancestor while panel is open
  useEffect(() => {
    if (!open || !rootRef.current) return;
    let el = rootRef.current.parentElement;
    while (el && el !== document.body) {
      const { overflowY } = window.getComputedStyle(el);
      if (overflowY === 'auto' || overflowY === 'scroll') break;
      el = el.parentElement;
    }
    const target = (el && el !== document.body) ? el : document.body;
    const prev = target.style.overflowY;
    target.style.overflowY = 'hidden';
    return () => { target.style.overflowY = prev; };
  }, [open]);

  // Focus search input after the portal panel first renders (panelPos is set)
  useEffect(() => {
    if (panelPos && justOpenedRef.current) {
      justOpenedRef.current = false;
      searchRef.current?.focus();
    }
  }, [panelPos]);

  // Initialize activeIndex when panel opens: selected option index, or -1 if nothing selected
  useEffect(() => {
    if (open) {
      const selIdx = filtered.findIndex(o => o.value === resolvedValue && !o.disabled);
      setActiveIndex(selIdx >= 0 ? selIdx : -1);
    } else {
      setActiveIndex(-1);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset to first enabled option when search filter changes
  useEffect(() => {
    if (!open) return;
    const first = filtered.findIndex(o => !o.disabled);
    setActiveIndex(first >= 0 ? first : 0);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll active option into view — only for keyboard navigation, not mouse hover
  useEffect(() => {
    if (!isKeyNavRef.current || activeIndex < 0 || !listRef.current) return;
    isKeyNavRef.current = false;
    const el = listRef.current.querySelector(`[data-option-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      isKeyNavRef.current = true;
      setActiveIndex(prev => {
        let next = prev + 1;
        while (next < filtered.length && filtered[next]?.disabled) next++;
        return next < filtered.length ? next : prev;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      isKeyNavRef.current = true;
      setActiveIndex(prev => {
        let next = prev - 1;
        while (next >= 0 && filtered[next]?.disabled) next--;
        return next >= 0 ? next : prev;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const opt = filtered[activeIndex];
      if (opt && !opt.disabled) {
        multiSelect ? toggleMulti(opt) : selectSingle(opt);
      }
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  const rootVariant = disabled ? 'disabled' : error ? 'error' : undefined;
  const rootStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const grouped = groupOptions(filtered);
  const hasGroups = filtered.some(o => o.group);

  const renderOption = (opt, idx) => {
    const isSelected = multiSelect
      ? activeValues.includes(opt.value)
      : opt.value === resolvedValue;

    return (
      <div
        key={opt.value}
        className='dropdown-option'
        role="option"
        aria-selected={isSelected}
        aria-disabled={opt.disabled}
        data-selected={isSelected || undefined}
        data-disabled={opt.disabled || undefined}
        data-active={activeIndex === idx || undefined}
        data-option-index={idx}
        onMouseEnter={() => setActiveIndex(idx)}
        onClick={() => multiSelect ? toggleMulti(opt) : selectSingle(opt)}
      >
        {multiSelect ? (
          <span className='dropdown-option-check' aria-hidden="true">
            <span className={isSelected ? 'dropdown-multi-check-on' : 'dropdown-multi-check-off'} />
          </span>
        ) : (
          <span className='dropdown-option-check'>
            {isSelected && <Check aria-hidden="true" />}
          </span>
        )}
        <TruncatedLabel text={opt.label} className='dropdown-option-label' wrapperStyle={{ flex: 1, minWidth: 0 }} />
      </div>
    );
  };

  const optionListEl = (
    <div className='dropdown-option-list' ref={listRef}>
      {filtered.length === 0 ? (
        <div className='dropdown-no-results'>No results found</div>
      ) : hasGroups ? (
        Array.from(grouped.entries()).map(([groupKey, groupOpts]) => (
          <div key={groupKey ?? '__ungrouped'} className='dropdown-option-group'>
            {groupKey && (
              <div className='dropdown-group-heading'>{groupKey}</div>
            )}
            {groupOpts.map(opt => renderOption(opt, filteredIndexMap.get(opt.value) ?? 0))}
          </div>
        ))
      ) : (
        filtered.map((opt, idx) => renderOption(opt, idx))
      )}
    </div>
  );

  const panelContent = open && panelPos ? createPortal(
    <div
      ref={panelRef}
      id={listId}
      className='dropdown-panel'
      style={{
          top: panelPos.top,
          left: panelPos.left,
          ...(panelPos.width >= PANEL_MAX_WIDTH
            ? { width: PANEL_MAX_WIDTH }
            : { width: 'max-content', maxWidth: PANEL_MAX_WIDTH }),
        }}
      role="listbox"
      aria-label={label}
      aria-multiselectable={multiSelect}
      onKeyDown={handleKeyDown}
    >
      {isSearchable && (
        <div className='dropdown-search-row'>
          <div className='dropdown-search-box'>
            <span className='dropdown-search-icon'><SearchIcon /></span>
            <input
              ref={searchRef}
              className='dropdown-search-input'
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search options"
            />
            {search && (
              <button
                type="button"
                className='dropdown-clear-btn'
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
      )}

      {optionListEl}

      {(multiSelect || footerAction) && (
        <div className='dropdown-panel-footer'>
          {multiSelect && (
            <button type="button" className='dropdown-done-btn' onClick={handleDone}>
              Done
            </button>
          )}
          {footerAction && (
            <button
              type="button"
              className='dropdown-footer-action-btn'
              onClick={() => { footerAction.onClick(); setOpen(false); }}
            >
              <span className='dropdown-footer-action-icon' aria-hidden="true">
                {footerAction.icon ?? <PlusIcon />}
              </span>
              {footerAction.label}
            </button>
          )}
        </div>
      )}
    </div>,
    document.body
  ) : null;

  const dropdownEl = (
    <div ref={rootRef} className='dropdown-dropdown-wrapper' onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className='dropdown-trigger'
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-required={required}
        data-required={required || undefined}
        data-open={open || undefined}
        onClick={toggle}
      >
        <TruncatedLabel
          text={displayValue}
          className='dropdown-trigger-value'
          wrapperStyle={{ flex: 1, minWidth: 0 }}
          spanProps={{ 'data-placeholder': isPlaceholder || undefined }}
        />
        <span className='dropdown-chevron' aria-hidden="true">
          <ChevronDownFilled aria-hidden="true" />
        </span>
      </button>
      {panelContent}
    </div>
  );

  const helperEl = helperText
    ? <span className='dropdown-helper-text'>{helperText}</span>
    : null;

  const labelEl = label
    ? <span className='dropdown-label'>{label}</span>
    : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className='dropdown-root' style={rootStyle} data-variant={rootVariant}>
        <div className='dropdown-form-row' style={formRowStyle}>
          {labelEl}
          <div className='dropdown-field-column'>
            {dropdownEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`dropdown-root dropdown-vertical`} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {dropdownEl}
      {helperEl}
    </div>
  );
}

export default Dropdown;
