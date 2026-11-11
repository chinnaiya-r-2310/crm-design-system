import { useLayoutEffect, useRef, useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';
import { Dragger } from '../Dragger/Dragger';
import { Icon } from '../Icon/Icon';
import { OpenInNewTab, Search as SearchIcon } from '../../foundations/icons/Icons';
import './ManageColumns.css';

/* ─────────────────────────────────────────────────────────────────────────────
   ManageColumns — pick and order the columns shown in a list or report.

   Props:
     variant   — 'modal' (search, Cancel/Save footer) | 'reorder' (drag handles,
                 Cancel/Save) | 'withTitle' (scope dropdown, selected count,
                 module groups, Cancel/Save) | 'page' (no footer, open-in-page icon)
     title     — heading text
     fields    — [{ key, label, module? }]
     selected  — keys of the checked fields
     onChange  — (nextSelectedKeys) => void
     onSave / onCancel — footer actions (modal, reorder and withTitle variants)
     onOpenPage — page variant: opens the full page
   ─────────────────────────────────────────────────────────────────────────────── */

const SCOPE_OPTIONS = [
  { value: 'all', label: 'All Fields' },
  { value: 'lead', label: 'Lead Fields' },
  { value: 'quote', label: 'Quote Fields' },
];

export function ManageColumns({
  variant = 'modal',
  title = 'Manage Columns',
  fields = [],
  selected = [],
  onChange,
  onSave,
  onCancel,
  saveLabel = 'Save',
  gripperOnHover = true,
  onOpenPage,
  embedded = false,
}) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState('all');
  const listRef = useRef(null);
  const positions = useRef(new Map());

  // FLIP: a row that changes position (for example when it is checked and moves
  // to the top) glides from its old spot. Layout offsets keep the measure stable.
  useLayoutEffect(() => {
    const next = new Map();
    listRef.current?.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      const top = el.offsetTop;
      next.set(key, top);
      const previous = positions.current.get(key);
      if (previous !== undefined && Math.abs(previous - top) > 0.5) {
        el.style.transition = 'none';
        el.style.transform = `translateY(${previous - top}px)`;
        void el.offsetHeight;
        el.style.transition = 'transform 220ms ease';
        el.style.transform = '';
      }
    });
    positions.current = next;
  });

  const isChecked = key => selected.includes(key);
  // Keys unchecked during this session, most recent first. An unchecked field goes
  // to the top of the unselected block, directly below the last selected field.
  const [unchecked, setUnchecked] = useState([]);
  const toggle = key => {
    // Required fields stay selected.
    if (fields.find(field => field.key === key)?.required) return;
    if (isChecked(key)) {
      setUnchecked(prev => [key, ...prev.filter(k => k !== key)]);
      onChange?.(selected.filter(k => k !== key));
    } else {
      setUnchecked(prev => prev.filter(k => k !== key));
      onChange?.([...selected, key]);
    }
  };
  const rank = key => {
    const index = unchecked.indexOf(key);
    return index === -1 ? Infinity : index;
  };

  const visible = fields
    .filter(field => field.label.toLowerCase().includes(query.toLowerCase()))
    .filter(field => variant !== 'withTitle' || scope === 'all' || field.scope === scope);

  const selectedFields = fields.filter(field => isChecked(field.key));
  // Reorder lists the selected fields in column order (the order of `selected`).
  const orderedFields = selected
    .map(key => fields.find(field => field.key === key))
    .filter(Boolean);
  const reorderItems = orderedFields.map(field => field.label);
  const handleReorder = labels => onChange?.(
    labels.map(label => orderedFields.find(field => field.label === label).key),
  );

  // Selected fields always sit at the top, in column order. In withTitle they form
  // their own block above the module groups, which hold only the unselected fields.
  const selectedVisible = visible
    .filter(field => isChecked(field.key))
    .sort((a, b) => selected.indexOf(a.key) - selected.indexOf(b.key));
  const unselectedVisible = visible
    .filter(field => !isChecked(field.key))
    .sort((a, b) => (rank(a.key) === rank(b.key) ? 0 : rank(a.key) < rank(b.key) ? -1 : 1));
  const groups = variant === 'withTitle'
    ? unselectedVisible.reduce((acc, field) => {
        const key = field.module ?? 'Fields';
        (acc[key] = acc[key] ?? []).push(field);
        return acc;
      }, {})
    : { Fields: unselectedVisible };

  // Checked fields form a draggable block at the top. Dragging reorders only these;
  // the new order is written back into `selected` in place.
  const byLabel = new Map(selectedVisible.map(field => [field.label, field]));
  const handleSelectedReorder = labels => {
    const visibleKeys = new Set(selectedVisible.map(field => field.key));
    const nextVisible = labels.map(label => byLabel.get(label).key);
    let index = 0;
    onChange?.(selected.map(key => (visibleKeys.has(key) ? nextVisible[index++] : key)));
  };

  const rowContent = field => (
    <>
      <Checkbox
        label={field.required
          ? <>{field.label}<span className="mc-required" aria-hidden="true"> *</span></>
          : field.label}
        checked={isChecked(field.key)}
        aria-disabled={field.required || undefined}
        onChange={() => toggle(field.key)}
      />
      {field.module && variant === 'withTitle' && <span className="mc-module">({field.module})</span>}
    </>
  );

  const row = field => (
    <div key={field.key} className="mc-row" data-key={field.key} data-checked={isChecked(field.key) || undefined}>
      {rowContent(field)}
    </div>
  );

  const searchBox = (
    <div className="mc-search" data-has-query={query || undefined}>
      <span className="mc-search-icon" aria-hidden="true">
        <SearchIcon width={16} height={16} />
      </span>
      <Input type="search" width="100%" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />
      {query && (
        <button
          type="button"
          className="mc-clear-btn"
          onClick={() => setQuery('')}
          aria-label="Clear search"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );

  return (
    <section className={`mc mc--${variant}${embedded ? ' mc--embedded' : ''}`} aria-label={title}>
      {!embedded && (
        <header className="mc-header">
          <h3 className="mc-title">{title}</h3>
          {variant === 'page' && (
            <button type="button" className="mc-icon-btn" aria-label="Open in page" onClick={onOpenPage}>
              <OpenInNewTab aria-hidden="true" width={16} height={16} />
            </button>
          )}
        </header>
      )}

      {variant === 'withTitle' && (
        <div className="mc-toolbar">
          <Dropdown width={130} options={SCOPE_OPTIONS} value={scope} onChange={setScope} />
          {searchBox}
        </div>
      )}
      {variant === 'modal' || variant === 'page' ? searchBox : null}

      {variant === 'withTitle' && (
        <p className="mc-count">{selectedFields.length} Selected {selectedFields.length === 1 ? 'Field' : 'Fields'}</p>
      )}

      {variant === 'reorder' ? (
        <div className="mc-list">
          <Dragger items={reorderItems} onChange={handleReorder} />
        </div>
      ) : (
        <div className="mc-list" ref={listRef}>
          {selectedVisible.length > 0 && (
            <div className="mc-selected">
              <Dragger
                items={selectedVisible.map(field => field.label)}
                onChange={handleSelectedReorder}
                gripperOnHover={gripperOnHover}
                renderItem={label => rowContent(byLabel.get(label))}
              />
            </div>
          )}
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="mc-group">
              {variant === 'withTitle' && group !== 'Fields' && <h4 className="mc-group-title">{group}</h4>}
              {items.map(row)}
            </div>
          ))}
        </div>
      )}

      {variant !== 'page' && !embedded && (
        <footer className="mc-footer">
          <Button variant="default" onClick={onCancel}>Cancel</Button>
          <Button variant="primary" onClick={onSave}>{saveLabel}</Button>
        </footer>
      )}
    </section>
  );
}

export default ManageColumns;
