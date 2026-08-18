import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip } from '../Tooltip/Tooltip.js';
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
// Avatar helpers (mirrors UserPicker)
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

function OptionAvatar({ label, imageUrl, size = 28 }) {
  const bg = getAvatarColor(label);
  return (
    <span
      aria-hidden="true"
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
        width:           size,
        height:          size,
        borderRadius:    '50%',
        background:      bg,
        color:           '#fff',
        fontSize:        size * 0.42,
        fontFamily:      'var(--ds-font-family-base)',
        fontWeight:      500,
        lineHeight:      1,
        overflow:        'hidden',
        boxSizing:       'border-box',
        userSelect:      'none',
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      ) : (
        getInitials(label)
      )}
    </span>
  );
}

function TruncatedLabel({ text, style, className, children }) {
  const ref = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  // Measure after every render so disabled is already correct before the user hovers
  useLayoutEffect(() => {
    if (ref.current) {
      setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth);
    }
  });

  return (
    <Tooltip content={text} variant="black" placement="top" disabled={!isTruncated}>
      <span ref={ref} style={style} className={className}>{children ?? text}</span>
    </Tooltip>
  );
}

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
  noBorder,
}) {
  const [search,        setSearch]        = useState('');
  const [open,          setOpen]          = useState(false);
  const [panelPos,      setPanelPos]      = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1); // tag pending removal via Backspace
  const [activeIndex,   setActiveIndex]   = useState(0);  // highlighted option in dropdown

  const containerRef = useRef(null);
  const inputRef     = useRef(null);
  const panelRef     = useRef(null);

  const selectedValues = new Set(value.map(t => t.value));

  const filtered = options.filter(
    o => !selectedValues.has(o.value) &&
         o.label.toLowerCase().includes(search.toLowerCase())
  );

  // Reset pending-removal selection whenever the tag list changes
  useEffect(() => { setSelectedIndex(-1); }, [value.length]);

  // Keep first option highlighted when search changes or dropdown opens
  useEffect(() => { setActiveIndex(0); }, [search, open]);

  // Keep panel anchored to input bottom when container height changes (tags added/removed)
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const ro = new ResizeObserver(updatePos);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [open]);


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
    setSelectedIndex(-1);
    setOpen(true);
    inputRef.current?.focus();
    requestAnimationFrame(updatePos);
  };

  const remove = (tagValue) => {
    onChange?.(value.filter(t => t.value !== tagValue));
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && !search) {
      if (selectedIndex >= 0) {
        // Second Backspace: remove the selected tag
        remove(value[selectedIndex].value);
      } else if (value.length > 0) {
        // First Backspace: select (highlight) the last tag
        setSelectedIndex(value.length - 1);
      }
      return;
    }
    // Any key other than Backspace clears the pending selection
    if (selectedIndex >= 0) setSelectedIndex(-1);
    if (e.key === 'Escape') setOpen(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (selectedIndex >= 0) setSelectedIndex(-1);
    if (!open) openDropdown();
  };

  // Close panel on outside click; also clear pending selection
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const t = e.target;
      if (!containerRef.current?.contains(t) && !panelRef.current?.contains(t)) {
        setOpen(false);
        setSearch('');
        setSelectedIndex(-1);
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
        data-no-border={noBorder || undefined}
        onClick={() => {
          if (!disabled) {
            setSelectedIndex(-1);
            inputRef.current?.focus();
            openDropdown();
          }
        }}
      >
        {value.map((tag, i) => (
          <span
            key={tag.value}
            className={'tags-tag'}
            data-selected={i === selectedIndex || undefined}
          >
            {tag.imageUrl && (
              <img
                src={tag.imageUrl}
                className={'tags-tag-avatar'}
                alt=""
                aria-hidden="true"
              />
            )}
            <TruncatedLabel text={tag.tagLabel || tag.label} className={'tags-tag-label'}>
              {(tag.tagLabel || tag.label).replace(/(\s*\([^)]*\))$/, '')}
              {/(\s*\([^)]*\))$/.test(tag.tagLabel || tag.label) && (
                <span style={{ color: 'var(--ds-text-label, #616E88)' }}>
                  {(tag.tagLabel || tag.label).match(/(\s*\([^)]*\))$/)[1]}
                </span>
              )}
            </TruncatedLabel>
            {tag.count !== undefined && (
              <span className={'tags-tag-count'}>{tag.count}</span>
            )}
            {!disabled && tag.count === undefined && (
              <>
                <span className={'tags-remove-bg'} aria-hidden="true" />
                <button
                  type="button"
                  className={'tags-remove-btn'}
                  onClick={(e) => { e.stopPropagation(); remove(tag.value); }}
                  aria-label={`Remove ${tag.label}`}
                >
                  <CloseXIcon />
                </button>
              </>
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
            onChange={handleChange}
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
            boxSizing:    'border-box',
            display:      'flex',
            flexDirection:'column',
            padding:      '6px 0',
            maxHeight:    260,
            overflow:     'hidden',
          }}
        >
          <div style={{ overflowY: 'auto', padding: '6px 0', flex: 1 }}>
          {(() => {
            if (filtered.length === 0) {
              return (
                <div style={{
                  height:     50,
                  display:    'flex',
                  alignItems: 'center',
                  padding:    '0 25px',
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize:   'var(--ds-font-size-base)',
                  color:      'var(--ds-text-muted, #8C9BAB)',
                }}>
                  No options found
                </div>
              );
            }

            // Build ordered group list preserving insertion order
            const groupMap = new Map();
            filtered.forEach(opt => {
              const g = opt.group || '';
              if (!groupMap.has(g)) groupMap.set(g, []);
              groupMap.get(g).push(opt);
            });
            const hasGroups = [...groupMap.keys()].some(g => g !== '');

            let flatIdx = 0;
            const renderOption = (opt) => {
              const idx = flatIdx++;
              const isActive = idx === activeIndex;
              const hasAvatar = Boolean(opt.imageUrl);
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={false}
                  style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '8px',
                    height:       hasAvatar ? 50 : 32,
                    margin:       '0 6px',
                    borderRadius: 5,
                    padding:      hasAvatar ? '0 10px 0 16px' : '0 10px',
                    cursor:       'pointer',
                    fontFamily:   'var(--ds-font-family-base)',
                    fontSize:     'var(--ds-font-size-base)',
                    color:        'var(--ds-text-base)',
                    userSelect:   'none',
                    boxSizing:    'border-box',
                    background:   isActive ? 'var(--ds-components-dropdown-hover-bg, #F2F5FE)' : 'transparent',
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  onClick={(e) => { e.stopPropagation(); select(opt); }}
                >
                  {hasAvatar && <OptionAvatar label={opt.label} imageUrl={opt.imageUrl} size={28} />}
                  <div style={{
                    flex:      1,
                    minWidth:  0,
                    display:   'flex',
                    flexDirection: 'column',
                    gap:       1,
                  }}>
                    <TruncatedLabel text={opt.label} style={{
                      fontFamily:   'var(--ds-font-family-base)',
                      fontSize:     'var(--ds-font-size-base)',
                      fontWeight:   'var(--ds-font-weight-regular)',
                      lineHeight:   'var(--ds-line-height-base)',
                      color:        'var(--ds-text-base)',
                      overflow:     'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace:   'nowrap',
                      display:      'block',
                    }} />
                    {opt.email && (
                      <span style={{
                        fontFamily:   'var(--ds-font-family-base)',
                        fontSize:     'var(--ds-font-size-xs, 11px)',
                        fontWeight:   'var(--ds-font-weight-regular)',
                        lineHeight:   'var(--ds-line-height-xs, 15px)',
                        color:        'var(--ds-text-label, #616E88)',
                        overflow:     'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace:   'nowrap',
                      }}>
                        {opt.email}
                      </span>
                    )}
                  </div>
                </div>
              );
            };

            if (!hasGroups) { flatIdx = 0; return filtered.map(renderOption); }

            return [...groupMap.entries()].map(([group, opts]) => (
              <div key={group || '__ungrouped__'}>
                {group && (
                  <div style={{
                    position:   'sticky',
                    top:        0,
                    zIndex:     1,
                    background: 'var(--ds-components-dropdown-option-bg, #fff)',
                    height:     32,
                    display:    'flex',
                    alignItems: 'center',
                    padding:    '0 10px',
                    fontFamily: 'var(--ds-font-family-base)',
                    fontSize:   'var(--ds-font-size-base)',
                    fontWeight: 'var(--ds-font-weight-semibold)',
                    color:      'var(--ds-text-base, #313949)',
                    userSelect: 'none',
                  }}>
                    {group}
                  </div>
                )}
                {opts.map(renderOption)}
              </div>
            ));
          })()}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Tags;
