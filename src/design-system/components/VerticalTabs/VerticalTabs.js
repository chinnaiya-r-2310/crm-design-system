import { useState, useMemo } from 'react';
import {
  ChevronDownFilled, Search as SearchIcon, CloseSmall,
  SetupBack, SetupCustomise, SetupChevron,
} from '../../foundations/icons/Icons';
import { crmIconMap } from '../../foundations/icons/CrmCatalog';
import './VerticalTabs.css';

// "New" sparkle from the CRM icon gallery (zcicn-sparkle).
const CrmSparkle = crmIconMap.CrmSparkle;

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function VerticalTabs({
  title,
  searchable = false,
  items = [],
  activeId,
  onSelect,
  variant = '1',
  width = 275,
  // Setup variant only — "← Setup Home" header with a customise action
  homeLabel = 'Setup Home',
  onHomeClick,
  onCustomise,
  defaultExpanded = [],
}) {
  const isSetup = variant === 'setup';
  const [search, setSearch] = useState('');

  const [expanded, setExpanded] = useState(() => {
    const set = new Set(defaultExpanded);
    items.forEach(item => {
      if (item.children?.some(c => c.id === activeId)) set.add(item.id);
    });
    return set;
  });

  const toggleGroup = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const q = search.toLowerCase().trim();

  const filteredItems = useMemo(() => {
    if (!q) return items;
    return items.reduce((acc, item) => {
      if (item.children) {
        const matched = item.children.filter(c => c.label.toLowerCase().includes(q));
        const groupMatches = item.label.toLowerCase().includes(q);
        if (matched.length > 0 || groupMatches) {
          acc.push({ ...item, children: matched.length > 0 ? matched : item.children });
        }
      } else if (item.label.toLowerCase().includes(q)) {
        acc.push(item);
      }
      return acc;
    }, []);
  }, [items, q]);

  const hasResults = filteredItems.length > 0;

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div className="vtabs-panel" data-variant={variant} style={containerStyle}>
      {isSetup ? (
        <div className="vtabs-setup-header">
          <button type="button" className="vtabs-setup-home" onClick={onHomeClick}>
            <SetupBack className="vtabs-setup-back" />
            <span>{homeLabel}</span>
          </button>
          <button
            type="button"
            className="vtabs-setup-customise"
            onClick={onCustomise}
            aria-label="Customise Setup"
            title="Customise Setup"
          >
            <SetupCustomise />
          </button>
        </div>
      ) : (
        title && <div className="vtabs-title">{title}</div>
      )}

      {searchable && (
        <div className="vtabs-search-box">
          <span className="vtabs-search-icon"><SearchIcon /></span>
          <input
            type="text"
            className="vtabs-search-input"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search"
          />
          {search && (
            <button
              type="button"
              className="vtabs-search-clear"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <CloseSmall />
            </button>
          )}
        </div>
      )}

      {q && !hasResults ? (
        <div className="vtabs-no-results">
          <SearchIcon className="vtabs-no-results-icon" />
          <span>No Results Found</span>
        </div>
      ) : (
        <nav className="vtabs-list" aria-label={title ?? (isSetup ? 'Setup' : 'Navigation')}>
          {filteredItems.map(item => {
            if (item.children) {
              const isOpen = q ? true : expanded.has(item.id);
              return (
                <div key={item.id} className="vtabs-group">
                  <button
                    type="button"
                    className="vtabs-group-header"
                    aria-expanded={isOpen}
                    onClick={() => { if (!q) toggleGroup(item.id); }}
                  >
                    {isSetup ? (
                      <>
                        {item.icon && <span className="vtabs-group-icon">{item.icon}</span>}
                        <span className="vtabs-group-label">{item.label}</span>
                        <span className="vtabs-group-chevron" data-open={isOpen || undefined}>
                          <SetupChevron />
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="vtabs-group-arrow" data-open={isOpen || undefined}>
                          <ChevronDownFilled />
                        </span>
                        {item.label}
                      </>
                    )}
                  </button>

                  <div className="vtabs-children-wrap" data-open={isOpen || undefined}>
                    <div className="vtabs-children">
                      {item.children.map(child => (
                        <button
                          key={child.id}
                          type="button"
                          className="vtabs-item"
                          data-active={child.id === activeId || undefined}
                          onClick={() => onSelect?.(child.id)}
                        >
                          {child.label}
                          {isSetup && child.isNew && (
                            <span className="vtabs-item-new" title="New">
                              <CrmSparkle width={14} height={14} aria-hidden="true" />
                              <span className="vtabs-sr-only">(new)</span>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                className="vtabs-item vtabs-item--top"
                data-active={item.id === activeId || undefined}
                onClick={() => onSelect?.(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export default VerticalTabs;
