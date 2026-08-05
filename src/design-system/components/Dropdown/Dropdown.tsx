import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import styles from './Dropdown.module.css';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  /** Optional group key — options sharing the same group key render under that heading. */
  group?: string;
}

export type DropdownLayout = 'horizontal' | 'vertical';

export interface DropdownFooterAction {
  label: string;
  /** Icon rendered before the label (e.g. a + icon). */
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface DropdownProps {
  label?: string;

  /** Text shown when no value is selected. @default 'Select' */
  placeholder?: string;

  /** Controlled selected value (single-select). */
  value?: string;

  /** Controlled selected values (multi-select). Requires `multiSelect`. */
  selectedValues?: string[];

  options?: DropdownOption[];
  helperText?: string;

  /** Total component width in px. @default 670 */
  width?: number | string;

  /** Form layout. @default 'horizontal' */
  layout?: DropdownLayout;

  required?: boolean;
  disabled?: boolean;
  error?: boolean;

  /** Adds a search input at the top of the panel. @default false */
  searchable?: boolean;

  /**
   * Enables checkbox multi-selection. Use `selectedValues` / `onMultiChange`
   * for controlled state. A Done button appears in the panel footer.
   */
  multiSelect?: boolean;

  /**
   * Action button rendered at the bottom of the panel (e.g. "+ Add option").
   * Figma: "Button" variant in Option Comp.
   */
  footerAction?: DropdownFooterAction;

  onChange?: (value: string) => void;
  onMultiChange?: (values: string[]) => void;
  id?: string;
  style?: React.CSSProperties;

  /**
   * Override grid-template-columns for horizontal layout.
   * @default '3fr 7fr'
   */
  columns?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
import { ChevronDownFilled, Check, Search as SearchIcon } from '../../foundations/icons/Icons';

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

function groupOptions(options: DropdownOption[]) {
  const groups: Map<string | undefined, DropdownOption[]> = new Map();
  for (const opt of options) {
    const key = opt.group;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(opt);
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
}: DropdownProps) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;
  const listId = `${triggerId}-list`;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  // Internal single-select state (uncontrolled mode — when no onChange is provided)
  const [internalSingleValue, setInternalSingleValue] = useState<string | undefined>(value);
  // Internal multi-select state (uncontrolled mode)
  const [internalSelected, setInternalSelected] = useState<string[]>(selectedValues);

  const rootRef    = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const searchRef  = useRef<HTMLInputElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const justOpenedRef = useRef(false); // true only on the render cycle when panel first appears

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

  const selectSingle = (opt: DropdownOption) => {
    if (opt.disabled) return;
    if (onChange) {
      onChange(opt.value);
    } else {
      setInternalSingleValue(opt.value);
    }
    setOpen(false);
    setSearch('');
  };

  const toggleMulti = (opt: DropdownOption) => {
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
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
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
    let el: HTMLElement | null = rootRef.current.parentElement;
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

  // Scroll active option into view
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(`[data-option-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => {
        let next = prev + 1;
        while (next < filtered.length && filtered[next]?.disabled) next++;
        return next < filtered.length ? next : prev;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
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
  const rootStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    ...style,
  };

  const grouped = groupOptions(filtered);
  const hasGroups = filtered.some(o => o.group);

  const renderOption = (opt: DropdownOption, idx: number) => {
    const isSelected = multiSelect
      ? activeValues.includes(opt.value)
      : opt.value === resolvedValue;

    return (
      <div
        key={opt.value}
        className={styles.option}
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
          <span className={styles.optionCheck} aria-hidden="true">
            <span className={isSelected ? styles.multiCheckOn : styles.multiCheckOff} />
          </span>
        ) : (
          <span className={styles.optionCheck}>
            {isSelected && <Check aria-hidden="true" />}
          </span>
        )}
        <span className={styles.optionLabel}>{opt.label}</span>
      </div>
    );
  };

  const optionListEl = (
    <div className={styles.optionList} ref={listRef}>
      {filtered.length === 0 ? (
        <div className={styles.noResults}>No results found</div>
      ) : hasGroups ? (
        Array.from(grouped.entries()).map(([groupKey, groupOpts]) => (
          <div key={groupKey ?? '__ungrouped'} className={styles.optionGroup}>
            {groupKey && (
              <div className={styles.groupHeading}>{groupKey}</div>
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
      className={styles.panel}
      style={{ top: panelPos.top, left: panelPos.left, width: panelPos.width }}
      role="listbox"
      aria-label={label}
      aria-multiselectable={multiSelect}
      onKeyDown={handleKeyDown}
    >
      {isSearchable && (
        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}><SearchIcon /></span>
            <input
              ref={searchRef}
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search options"
            />
            {search && (
              <button
                type="button"
                className={styles.clearBtn}
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
        <div className={styles.panelFooter}>
          {multiSelect && (
            <button type="button" className={styles.doneBtn} onClick={handleDone}>
              Done
            </button>
          )}
          {footerAction && (
            <button
              type="button"
              className={styles.footerActionBtn}
              onClick={() => { footerAction.onClick(); setOpen(false); }}
            >
              <span className={styles.footerActionIcon} aria-hidden="true">
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
    <div ref={rootRef} className={styles.dropdownWrapper} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={styles.trigger}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-required={required}
        data-required={required || undefined}
        data-open={open || undefined}
        onClick={toggle}
      >
        <span className={styles.triggerValue} data-placeholder={isPlaceholder || undefined}>
          {displayValue}
        </span>
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDownFilled aria-hidden="true" />
        </span>
      </button>
      {panelContent}
    </div>
  );

  const helperEl = helperText
    ? <span className={styles.helperText}>{helperText}</span>
    : null;

  const labelEl = label
    ? <span className={styles.label}>{label}</span>
    : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={styles.root} style={rootStyle} data-variant={rootVariant}>
        <div className={styles.formRow} style={formRowStyle}>
          {labelEl}
          <div className={styles.fieldColumn}>
            {dropdownEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${styles.vertical}`} style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {dropdownEl}
      {helperEl}
    </div>
  );
}

export default Dropdown;
