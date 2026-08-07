import { useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import styles from './UserPicker.module.css';
import { ChevronDownFilled, Search as SearchIcon, Check } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface UserOption {
  id: string;
  name: string;
  email: string;
  /** Override avatar background color. Defaults to a hash-based color. */
  avatarColor?: string;
  /** If provided, renders an <img> instead of initials. */
  avatarUrl?: string;
}

export type UserPickerLayout = 'horizontal' | 'vertical';

export interface UserPickerProps {
  label?: string;
  /** Text shown when no user is selected. @default 'Select user' */
  placeholder?: string;
  /** Controlled selected user id. */
  value?: string;
  users?: UserOption[];
  helperText?: string;
  /** Total component width in px or CSS string. @default 390 */
  width?: number | string;
  /** Form layout. @default 'horizontal' */
  layout?: UserPickerLayout;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (userId: string) => void;
  id?: string;
  style?: React.CSSProperties;
  columns?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  '#5464F2', '#12AA67', '#F5A623', '#E85D4A', '#9B51E0',
  '#2D9CDB', '#27AE60', '#EB5757', '#F2994A', '#6FCF97',
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function Avatar({ user, size = 24 }: { user: UserOption; size?: number }) {
  const bg = user.avatarColor ?? getAvatarColor(user.name);
  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, background: bg, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt="" className={styles.avatarImg} />
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
}: UserPickerProps) {
  const autoId = useId();
  const triggerId = idProp ?? autoId;
  const listId = `${triggerId}-list`;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number; width: number } | null>(null);

  const rootRef     = useRef<HTMLDivElement>(null);
  const triggerRef  = useRef<HTMLButtonElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const searchRef   = useRef<HTMLInputElement>(null);
  const listRef     = useRef<HTMLDivElement>(null);
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

  const select = (user: UserOption) => {
    if (onChange) onChange(user.id);
    else setInternalValue(user.id);
    setOpen(false);
    setSearch('');
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
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
    const el = listRef.current.querySelector<HTMLElement>(`[data-user-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
  const wrapStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const panelContent = open && panelPos ? createPortal(
    <div
      ref={panelRef}
      id={listId}
      className={styles.panel}
      style={{ top: panelPos.top, left: panelPos.left, width: panelPos.width }}
      role="listbox"
      aria-label={label ?? 'Select user'}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}><SearchIcon /></span>
          <input
            ref={searchRef}
            className={styles.searchInput}
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search users"
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

      <div className={styles.userList} ref={listRef}>
        {filtered.length === 0 ? (
          <div className={styles.noResults}>No users found</div>
        ) : (
          filtered.map((user, idx) => {
            const isSelected = user.id === resolvedValue;
            return (
              <div
                key={user.id}
                className={styles.userOption}
                role="option"
                aria-selected={isSelected}
                data-selected={isSelected || undefined}
                data-active={activeIndex === idx || undefined}
                data-user-index={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => select(user)}
              >
                <span className={styles.checkSlot}>
                  {isSelected && <Check aria-hidden="true" />}
                </span>
                <Avatar user={user} size={28} />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{user.name}</span>
                  <span className={styles.userEmail}>{user.email}</span>
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
    <div ref={rootRef} className={styles.dropdownWrapper} style={wrapStyle} onKeyDown={handleKeyDown}>
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
        {selectedUser ? (
          <span className={styles.triggerUser}>
            <span className={styles.triggerName}>{selectedUser.name}</span>
          </span>
        ) : (
          <span className={styles.triggerValue} data-placeholder>
            {placeholder}
          </span>
        )}
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDownFilled />
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
      <div className={styles.root} style={style} data-variant={rootVariant}>
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
    <div className={`${styles.root} ${styles.vertical}`} style={style} data-variant={rootVariant}>
      {labelEl}
      {dropdownEl}
      {helperEl}
    </div>
  );
}

export default UserPicker;
