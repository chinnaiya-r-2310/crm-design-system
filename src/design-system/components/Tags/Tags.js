import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Tags.css';

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

const CloseXIcon = () => (
  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
    <path d="M1 1L6 6M6 1L1 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Tags({
  value = [],
  options = [],
  placeholder = 'Select',
  onChange,
  width = '100%',
  required,
  disabled,
  error,
}) {
  const [search,  setSearch]  = useState('');
  const [open,    setOpen]    = useState(false);
  const [panelPos, setPanelPos] = useState(null);

  const containerRef = useRef(null);
  const inputRef     = useRef(null);
  const panelRef     = useRef(null);

  const selectedValues = new Set(value.map(t => t.value));

  const filtered = options.filter(
    o => !selectedValues.has(o.value) &&
         o.label.toLowerCase().includes(search.toLowerCase())
  );

  const updatePos = () => {
    if (containerRef.current) {
      const r = containerRef.current.getBoundingClientRect();
      setPanelPos({ top: r.bottom - 1, left: r.left, width: r.width });
    }
  };

  const openDropdown = () => {
    if (disabled || options.length === 0) return;
    updatePos();
    setOpen(true);
  };

  const select = (item) => {
    onChange?.([...value, item]);
    setSearch('');
    setOpen(true); // keep panel open for multi-select
    inputRef.current?.focus();
    requestAnimationFrame(updatePos);
  };

  const remove = (tagValue) => {
    onChange?.(value.filter(t => t.value !== tagValue));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && !search && value.length > 0) {
      remove(value[value.length - 1].value);
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const t = e.target;
      if (!containerRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <>
      <div
        ref={containerRef}
        className={'tags-container'}
        style={containerStyle}
        data-required={required || undefined}
        data-error={error || undefined}
        data-disabled={disabled || undefined}
        data-open={open || undefined}
        onClick={() => { if (!disabled) { inputRef.current?.focus(); openDropdown(); } }}
      >
        {value.map(tag => (
          <span key={tag.value} className={'tags-tag'}>
            <span className={'tags-tag-label'}>{tag.label}</span>
            {tag.count !== undefined && (
              <span className={'tags-tag-count'}>{tag.count}</span>
            )}
            {!disabled && tag.count === undefined && (
              <button
                type="button"
                className={'tags-remove-btn'}
                onClick={(e) => { e.stopPropagation(); remove(tag.value); }}
                aria-label={`Remove ${tag.label}`}
              >
                <CloseXIcon />
              </button>
            )}
          </span>
        ))}

        {!disabled && (
          <input
            ref={inputRef}
            type="text"
            className={'tags-input'}
            value={search}
            placeholder={value.length === 0 ? placeholder : ''}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!open) openDropdown();
            }}
            onFocus={openDropdown}
            onKeyDown={handleKeyDown}
            aria-label={placeholder}
            aria-expanded={open}
            aria-haspopup="listbox"
            autoComplete="off"
          />
        )}
      </div>

      {open && panelPos && createPortal(
        <div
          ref={panelRef}
          role="listbox"
          style={{
            position:     'fixed',
            top:          panelPos.top,
            left:         panelPos.left,
            width:        panelPos.width,
            zIndex:       1500,
            background:   'var(--ds-components-dropdown-option-bg, #fff)',
            border:       '1px solid var(--ds-components-dropdown-outline, #CED0E1)',
            borderRadius: 6,
            boxShadow:    '0 2px 8px 0 rgba(0,0,0,0.15)',
            padding:      '6px 0',
            boxSizing:    'border-box',
            maxHeight:    220,
            overflowY:    'auto',
          }}
        >
          {filtered.length === 0 ? (
            <div style={{
              height:     32,
              display:    'flex',
              alignItems: 'center',
              padding:    '0 16px',
              fontFamily: 'var(--ds-font-family-base)',
              fontSize:   'var(--ds-font-size-base)',
              color:      'var(--ds-text-muted, #8C9BAB)',
            }}>
              No options found
            </div>
          ) : filtered.map(opt => (
            <div
              key={opt.value}
              role="option"
              aria-selected={false}
              style={{
                display:      'flex',
                alignItems:   'center',
                height:       32,
                margin:       '0 6px',
                borderRadius: 5,
                padding:      '0 10px',
                cursor:       'pointer',
                fontFamily:   'var(--ds-font-family-base)',
                fontSize:     'var(--ds-font-size-base)',
                color:        'var(--ds-text-base)',
                userSelect:   'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ds-components-dropdown-hover-bg, #F2F5FE)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              onClick={(e) => { e.stopPropagation(); select(opt); }}
            >
              {opt.label}
            </div>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}

export default Tags;
