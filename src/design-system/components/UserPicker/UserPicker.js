import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import './UserPicker.css';
import { ChevronDownFilled, Search as SearchIcon, Check } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  '#5464F2', '#12AA67', '#F5A623', '#E85D4A', '#9B51E0',
  '#2D9CDB', '#27AE60', '#EB5757', '#F2994A', '#6FCF97',
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function Avatar({ user, size = 24 }) {
  const bg = user.avatarColor ?? getAvatarColor(user.name);
  return (
    <span
      className={'user-picker-avatar'}
      style={{ width: size, height: size, background: bg, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt="" className={'user-picker-avatar-img'} />
      ) : (
        getInitials(user.name)
      )}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function UserPicker({
  label,
  placeholder = 'Select user',
  value,
  users = [],
  helperText,
  width = 390,
  layout = 'horizontal',
  required,
  disabled,
  error,
  onChange,
  id: idProp,
  style,
  columns,
}) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;
  const listId = `${triggerId}-list`;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [internalValue, setInternalValue] = useState(value);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [panelPos, setPanelPos] = useState(null);

  const rootRef     = useRef(null);
  const triggerRef  = useRef(null);
  const panelRef    = useRef(null);
  const searchRef   = useRef(null);
  const listRef     = useRef(null);
  const justOpenedRef = useRef(false);
  const isKeyNavRef   = useRef(false);

  const resolvedValue = onChange ? value : internalValue;
  const selectedUser  = users.find(u => u.id === resolvedValue);

  const filtered = search
    ? users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
      )
    : users;

  const updatePanelPos = () => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setPanelPos({ top: r.bottom - 1, left: r.left, width: r.width });
  };

  const toggle = () => {
    if (disabled) return;
    setOpen(prev => {
      if (!prev) setSearch('');
      return !prev;
    });
  };

  const select = (user) => {
    if (onChange) onChange(user.id);
    else setInternalValue(user.id);
    setOpen(false);
    setSearch('');
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const t = e.target;
      if (!rootRef.current?.contains(t) && !panelRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Position panel on open
  useEffect(() => {
    if (open) {
      justOpenedRef.current = true;
      updatePanelPos();
    } else {
      setPanelPos(null);
      justOpenedRef.current = false;
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return;
    window.addEventListener('resize', updatePanelPos);
    return () => window.removeEventListener('resize', updatePanelPos);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus search after panel appears
  useEffect(() => {
    if (panelPos && justOpenedRef.current) {
      justOpenedRef.current = false;
      searchRef.current?.focus();
    }
  }, [panelPos]);

  // Initialize activeIndex on open
  useEffect(() => {
    if (open) {
      const selIdx = filtered.findIndex(u => u.id === resolvedValue);
      setActiveIndex(selIdx >= 0 ? selIdx : -1);
    } else {
      setActiveIndex(-1);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset active on search change
  useEffect(() => {
    if (!open) return;
    setActiveIndex(filtered.length > 0 ? 0 : -1);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll active item into view — keyboard nav only
  useEffect(() => {
    if (!isKeyNavRef.current || activeIndex < 0 || !listRef.current) return;
    isKeyNavRef.current = false;
    const el = listRef.current.querySelector(`[data-user-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      isKeyNavRef.current = true;
      setActiveIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      isKeyNavRef.current = true;
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const user = filtered[activeIndex];
      if (user) select(user);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  const rootVariant = disabled ? 'disabled' : error ? 'error' : undefined;
  const wrapStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const panelContent = open && panelPos ? createPortal(
    <div
      ref={panelRef}
      id={listId}
      className={'user-picker-panel'}
      style={{ top: panelPos.top, left: panelPos.left, width: panelPos.width }}
      role="listbox"
      aria-label={label ?? 'Select user'}
      onKeyDown={handleKeyDown}
    >
      <div className={'user-picker-search-row'}>
        <div className={'user-picker-search-box'}>
          <span className={'user-picker-search-icon'}><SearchIcon /></span>
          <input
            ref={searchRef}
            className={'user-picker-search-input'}
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search users"
          />
          {search && (
            <button
              type="button"
              className={'user-picker-clear-btn'}
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      <div className={'user-picker-user-list'} ref={listRef}>
        {filtered.length === 0 ? (
          <div className={'user-picker-no-results'}>No users found</div>
        ) : (
          filtered.map((user, idx) => {
            const isSelected = user.id === resolvedValue;
            return (
              <div
                key={user.id}
                className={'user-picker-user-option'}
                role="option"
                aria-selected={isSelected}
                data-selected={isSelected || undefined}
                data-active={activeIndex === idx || undefined}
                data-user-index={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => select(user)}
              >
                <span className={'user-picker-check-slot'}>
                  {isSelected && <Check aria-hidden="true" />}
                </span>
                <Avatar user={user} size={28} />
                <div className={'user-picker-user-info'}>
                  <span className={'user-picker-user-name'}>{user.name}</span>
                  <span className={'user-picker-user-email'}>{user.email}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>,
    document.body
  ) : null;

  const dropdownEl = (
    <div ref={rootRef} className={'user-picker-dropdown-wrapper'} style={wrapStyle} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={'user-picker-trigger'}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-required={required}
        data-required={required || undefined}
        data-open={open || undefined}
        onClick={toggle}
      >
        {selectedUser ? (
          <span className={'user-picker-trigger-user'}>
            <span className={'user-picker-trigger-name'}>{selectedUser.name}</span>
          </span>
        ) : (
          <span className={'user-picker-trigger-value'} data-placeholder>
            {placeholder}
          </span>
        )}
        <span className={'user-picker-chevron'} aria-hidden="true">
          <ChevronDownFilled />
        </span>
      </button>
      {panelContent}
    </div>
  );

  const helperEl = helperText
    ? <span className={'user-picker-helper-text'}>{helperText}</span>
    : null;

  const labelEl = label
    ? <span className={'user-picker-label'}>{label}</span>
    : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className={'user-picker-root'} style={style} data-variant={rootVariant}>
        <div className={'user-picker-form-row'} style={formRowStyle}>
          {labelEl}
          <div className={'user-picker-field-column'}>
            {dropdownEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={'user-picker-root user-picker-vertical'} style={style} data-variant={rootVariant}>
      {labelEl}
      {dropdownEl}
      {helperEl}
    </div>
  );
}

export default UserPicker;
