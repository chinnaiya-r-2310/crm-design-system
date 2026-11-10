import { useId, useRef, useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip } from '../Tooltip/Tooltip';
import { ResizeHandle, ChevronDownFilled, Search, Check, Lock } from '../../foundations/icons/Icons';
import './MergeField.css';

// ─────────────────────────────────────────────────────────────────────────────
// Field-list helpers — shared by the popup and by both field variants so
// keyboard navigation and the rendered list never disagree on what matches.
// ─────────────────────────────────────────────────────────────────────────────

function getModules(mergeFields) {
  return [...new Set(mergeFields.map((o) => o.module).filter(Boolean))];
}

function filterFields(mergeFields, query, selectedModule) {
  const q = query.toLowerCase();
  return mergeFields.filter(
    (o) =>
      (!selectedModule || o.module === selectedModule) &&
      (o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q))
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Caret / selection helpers (multiline, contentEditable)
// ─────────────────────────────────────────────────────────────────────────────

// Looks backward from the caret for a `#word` sequence that hasn't been closed
// by whitespace yet — the live "trigger" the popup should be filtering on.
function getCaretTriggerMatch(root) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  if (!range.collapsed || !root.contains(range.startContainer)) return null;
  const node = range.startContainer;
  if (node.nodeType !== Node.TEXT_NODE) return null;
  const textBefore = node.textContent.slice(0, range.startOffset);
  const match = textBefore.match(/#(\w*)$/);
  if (!match) return null;
  return { node, start: range.startOffset - match[0].length, end: range.startOffset, query: match[1] };
}

function getCaretRect(root) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return root.getBoundingClientRect();
  const range = sel.getRangeAt(0).cloneRange();
  range.collapse(true);
  const rect = range.getClientRects()[0];
  return rect ?? root.getBoundingClientRect();
}

// True when the caret sits immediately after a chip, with nothing but the
// chip's own trailing spacer (or nothing at all) in between.
function getAdjacentChip(root) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  if (!range.collapsed || !root.contains(range.startContainer)) return null;

  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.textContent.slice(0, range.startOffset).trim() !== '') return null;
    node = node.previousSibling;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node = node.childNodes[range.startOffset - 1] ?? null;
  } else {
    return null;
  }

  if (node?.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') node = node.previousSibling;
  return node?.nodeType === Node.ELEMENT_NODE && node.classList.contains('mergefield-token') ? node : null;
}

// Inline so a chip can be built with plain DOM calls (chips live inside a
// contentEditable tree, not React's render output).
const CHEVRON_SVG =
  '<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true">' +
  '<path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/>' +
  '</svg>';
const CLOSE_SVG =
  '<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">' +
  '<path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
  '</svg>';

// Builds one chip — label, a chevron affordance (click to change the field)
// and a remove button (visible on hover via CSS, see .mergefield-token:hover).
function createChipElement(opt) {
  const chip = document.createElement('span');
  chip.className = 'mergefield-token';
  chip.contentEditable = 'false';
  chip.dataset.value = opt.value;

  const label = document.createElement('span');
  label.className = 'mergefield-token-label';
  const name = opt.label ?? opt.value;
  // Module goes in brackets so same-named fields (e.g. "Email") stay distinct.
  label.textContent = opt.module ? `${name} (${opt.module})` : name;
  // Full name as a tooltip, set only while the label is actually truncated.
  chip.addEventListener('mouseenter', () => {
    chip.title = label.scrollWidth > label.clientWidth ? label.textContent : '';
  });
  chip.appendChild(label);

  // Overlay, not inline siblings — so the chip's own width never changes;
  // on hover this covers the label instead of pushing the chip wider.
  const actions = document.createElement('span');
  actions.className = 'mergefield-token-actions';

  const chevron = document.createElement('span');
  chevron.className = 'mergefield-token-chevron';
  chevron.innerHTML = CHEVRON_SVG;
  actions.appendChild(chevron);

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'mergefield-token-remove';
  removeBtn.setAttribute('aria-label', `Remove ${opt.value}`);
  removeBtn.innerHTML = CLOSE_SVG;
  actions.appendChild(removeBtn);

  chip.appendChild(actions);

  return chip;
}

// Removes a capsule together with the spacer it was inserted with, so removing
// capsules one by one doesn't leave a trail of blank spaces behind.
function removeChip(chip) {
  const next = chip.nextSibling;
  if (next?.nodeType === Node.TEXT_NODE && next.textContent.trim() === '') next.remove();
  chip.remove();
}

function insertTokenAtMatch(match, opt) {
  const sel = window.getSelection();
  const range = document.createRange();
  range.setStart(match.node, match.start);
  range.setEnd(match.node, match.end);
  range.deleteContents();

  const chip = createChipElement(opt);
  const spacer = document.createTextNode(' ');
  const frag = document.createDocumentFragment();
  frag.appendChild(chip);
  frag.appendChild(spacer);
  range.insertNode(frag);

  const caret = document.createRange();
  caret.setStart(spacer, spacer.length);
  caret.collapse(true);
  sel.removeAllRanges();
  sel.addRange(caret);
}

// Puts the caret in a text node right after `node`, so it draws at text height.
// (A caret parked on the contentEditable element itself is drawn at the full
// line-box height, which looks oversized.)
function placeCaretAfter(node) {
  const sel = window.getSelection();
  let next = node.nextSibling;
  if (!next || next.nodeType !== Node.TEXT_NODE) {
    next = document.createTextNode('');
    node.after(next);
  }
  const r = document.createRange();
  r.setStart(next, 0);
  r.collapse(true);
  sel.removeAllRanges();
  sel.addRange(r);
}

function insertLineBreak() {
  const sel = window.getSelection();
  const range = sel.getRangeAt(0);
  range.deleteContents();
  const br = document.createElement('br');
  range.insertNode(br);
  range.setStartAfter(br);
  range.setEndAfter(br);
  sel.removeAllRanges();
  sel.addRange(range);
}

function serializeEditable(root) {
  let out = '';
  root.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      out += node.textContent.replace(/ /g, ' ');
    } else if (node.nodeName === 'BR') {
      out += '\n';
    } else if (node.classList?.contains('mergefield-token')) {
      out += `#${node.dataset.value}`;
    } else {
      out += node.textContent;
    }
  });
  return out;
}

// Parses a plain-text initial value, turning `#token` runs that match a known
// merge field into atomic chips. Unknown `#word` runs are left as plain text.
function buildInitialContent(root, text, mergeFields) {
  const byValue = new Map(mergeFields.map((o) => [o.value, o]));
  const re = /#(\w+)/g;
  let lastIndex = 0;
  let m;
  const frag = document.createDocumentFragment();
  while ((m = re.exec(text))) {
    if (!byValue.has(m[1])) continue;
    if (m.index > lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
    frag.appendChild(createChipElement(byValue.get(m[1])));
    lastIndex = re.lastIndex;
  }
  frag.appendChild(document.createTextNode(text.slice(lastIndex)));
  root.appendChild(frag);
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared "#" trigger popup
// ─────────────────────────────────────────────────────────────────────────────

function MergeFieldPopup({
  panelRef, pos, modules, selectedModule, onModuleChange, options, query, onQueryChange,
  searchRef, onSearchKeyDown, showSearch, currentValue, activeIndex, onHover, onSelect, onDismiss,
  moduleEntries, selectedEntry, entryLabel, onEntrySelect,
}) {
  const [moduleOpen, setModuleOpen] = useState(false);
  // Full filter name goes in a tooltip only while the trigger label is cut off.
  const labelRef = useRef(null);
  const [labelTruncated, setLabelTruncated] = useState(false);
  useLayoutEffect(() => {
    const el = labelRef.current;
    setLabelTruncated(!!el && el.scrollWidth > el.clientWidth);
  });
  const filtered = filterFields(options, query, selectedModule);
  // A new filter shows a different field list; start it at the top, not at the old scroll position.
  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [selectedModule]);

  return createPortal(
    <>
    {/* Transparent layer under the popup: swallows clicks and hover on the page behind it. */}
    <div
      className="mergefield-backdrop"
      aria-hidden="true"
      onMouseDown={(e) => { e.preventDefault(); onDismiss(); }}
    />
    <div
      ref={panelRef}
      className="mergefield-popup"
      style={{ top: pos.top, left: pos.left }}
      role="listbox"
      // Keep focus/selection inside the field — a mousedown on the popup
      // must not blur the editable before the click handler can read it.
      // The search input is the exception: it needs focus to take typing.
      onMouseDown={(e) => { if (e.target.tagName !== 'INPUT') e.preventDefault(); }}
    >
      {(modules.length > 0 || showSearch) && (
        <div className="mergefield-popup-head">
          {modules.length > 0 && (
            <div className="mergefield-popup-module" data-has-search={showSearch || undefined}>
              <button
                type="button"
                className="mergefield-popup-module-trigger"
                aria-haspopup="listbox"
                aria-expanded={moduleOpen}
                onClick={() => setModuleOpen((o) => !o)}
              >
                <Tooltip content={entryLabel ?? selectedModule} disabled={!labelTruncated} variant="black" wrapperStyle={{ display: 'block', minWidth: 0, maxWidth: '100%' }}>
                  <span ref={labelRef} className="mergefield-popup-module-label">{entryLabel ?? selectedModule}</span>
                </Tooltip>
                <ChevronDownFilled aria-hidden="true" />
              </button>
              {moduleOpen && (
                <div className="mergefield-popup-module-list" role="listbox" aria-label="Module">
                  {/* Every entry is a module and is selectable (tick on the chosen one).
                      The first group has no heading; later groups (Accounts, Vendors) are
                      non-selectable section headers over their entries. */}
                  {moduleEntries ? moduleEntries.map((group, gi) => (
                    <div key={group.module} className="mergefield-popup-module-group">
                      {gi > 0 && <div className="mergefield-popup-group-title">{group.module}</div>}
                      {group.items.map((item) => (
                        <div
                          key={item.value}
                          role="option"
                          aria-selected={item.value === selectedEntry}
                          className="mergefield-popup-option mergefield-popup-module-option"
                          onClick={() => { setModuleOpen(false); onEntrySelect(item, group.module); }}
                        >
                          <span className="mergefield-popup-module-check" aria-hidden="true">
                            {item.value === selectedEntry && <Check />}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )) : modules.map((m) => {
                    const isSelected = m === selectedModule;
                    return (
                      <div key={m} className="mergefield-popup-module-group">
                        {isSelected ? (
                          <div
                            role="option"
                            aria-selected="true"
                            className="mergefield-popup-option mergefield-popup-module-option"
                            onClick={() => setModuleOpen(false)}
                          >
                            <span className="mergefield-popup-module-check" aria-hidden="true"><Check /></span>
                            {m}
                          </div>
                        ) : (
                          <div className="mergefield-popup-group-title">{m}</div>
                        )}
                        {filterFields(options, query, m).map((opt) => (
                          <div
                            key={`${m}:${opt.value}`}
                            role="option"
                            aria-selected={isSelected && opt.value === currentValue}
                            className="mergefield-popup-option mergefield-popup-group-option"
                            onClick={() => { setModuleOpen(false); onModuleChange(m); }}
                          >
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {showSearch && (
            <label className="mergefield-popup-search">
              <Search aria-hidden="true" />
              <input
                ref={searchRef}
                type="text"
                value={query}
                placeholder="Search"
                aria-label="Search fields"
                onChange={(e) => onQueryChange(e.target.value)}
                onKeyDown={onSearchKeyDown}
              />
            </label>
          )}
        </div>
      )}
      <div className="mergefield-popup-list" ref={listRef}>
        {filtered.length === 0 ? (
          <div className="mergefield-popup-empty">No results found</div>
        ) : (
          filtered.map((opt, idx) => (
            <div
              key={opt.value}
              role="option"
              aria-selected={idx === activeIndex}
              data-active={idx === activeIndex || undefined}
              className="mergefield-popup-option"
              // While the module list is open, field rows don't react to hover.
              onMouseEnter={moduleOpen ? undefined : () => onHover(idx)}
              onClick={() => onSelect(opt)}
            >
              {showSearch && (
                <span className="mergefield-popup-check" aria-hidden="true">
                  {opt.value === currentValue && <Check />}
                </span>
              )}
              {opt.label}
            </div>
          ))
        )}
      </div>
    </div>
    </>,
    document.body
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// contentEditable surface with inline token chips — shared by both variants.
// `singleLine` swaps wrapping/height/resize for a one-line, input-like surface
// and swallows Enter instead of inserting a line break.
// ─────────────────────────────────────────────────────────────────────────────

function EditableField({ inputId, helperId, placeholder, minHeight, mergeFields, moduleEntries, defaultValue, onChange, disabled, readOnly, required, singleLine }) {
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const matchRef = useRef(null);
  const selectedChipRef = useRef(null); // chip pending removal on a second Backspace
  const searchRef = useRef(null);

  // With moduleEntries, the filter dropdown lists those entries; otherwise it lists the field modules.
  const modules = moduleEntries ? moduleEntries.map((g) => g.module) : getModules(mergeFields);
  const [selectedModule, setSelectedModule] = useState(() => (modules.includes('Leads') ? 'Leads' : modules[0]));
  // With moduleEntries, the chosen entry (its value and label) is what the dropdown shows as selected.
  const firstEntry = moduleEntries?.[0]?.items?.[0];
  const [selectedEntry, setSelectedEntry] = useState(() => firstEntry?.value);
  const entryLabel = moduleEntries
    ? moduleEntries.flatMap((g) => g.items).find((item) => item.value === selectedEntry)?.label
    : undefined;
  // Choosing an entry shows the field list of its source module (e.g. Primary Account Name -> Accounts fields).
  const onEntrySelect = (item, groupModule) => {
    setSelectedEntry(item.value);
    setSelectedModule(item.source ?? groupModule);
  };

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  // 'insert' = triggered by typing "#" (no search box); 'replace' = changing an
  // existing chip, which shows the search box and takes focus.
  const [mode, setMode] = useState('insert');
  const [currentValue, setCurrentValue] = useState(undefined); // field of the chip being changed
  const [activeIndex, setActiveIndex] = useState(0);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [customHeight, setCustomHeight] = useState(null);
  // Multiline starts at 100px once it has any content (the drag handle can still resize it).
  const [filled, setFilled] = useState(!!defaultValue);
  const hasContent = () => {
    const el = rootRef.current;
    return !!el && (el.textContent.trim() !== '' || !!el.querySelector('.mergefield-token'));
  };
  const effectiveMin = !singleLine && filled ? Math.max(minHeight, 100) : minHeight;
  const syncContent = () => {
    setFilled(hasContent());
    onChange?.(serializeEditable(rootRef.current));
  };

  const deselectChip = () => {
    if (selectedChipRef.current) delete selectedChipRef.current.dataset.selected;
    selectedChipRef.current = null;
  };

  useEffect(() => {
    if (rootRef.current && defaultValue) buildInitialContent(rootRef.current, defaultValue, mergeFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mirrors Textarea's drag-to-resize handle — same icon, same pointer-follow behavior.
  const handleResizeStart = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = rootRef.current?.offsetHeight ?? minHeight;
    const onMove = (ev) => {
      setCustomHeight(Math.max(effectiveMin, startHeight + (ev.clientY - startY)));
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  const closePopup = () => {
    setOpen(false);
    matchRef.current = null;
    // Clear the "being changed" marker from whichever capsule had it.
    rootRef.current?.querySelectorAll('[data-changing]').forEach((c) => delete c.dataset.changing);
  };

  const refreshTrigger = () => {
    const match = getCaretTriggerMatch(rootRef.current);
    if (!match) { closePopup(); return; }
    const prev = matchRef.current;
    matchRef.current = { type: 'insert', ...match };
    const rect = getCaretRect(rootRef.current);
    setPos({ top: rect.bottom, left: rect.left });
    setMode('insert');
    setQuery(match.query);
    // Only restart the highlight when the typed query changes. This runs on every
    // key-up, so resetting unconditionally would undo an arrow-key selection.
    if (!open || prev?.query !== match.query) setActiveIndex(0);
    setOpen(true);
  };

  // Clicking a chip reopens the popup to swap which field it represents.
  const openChangePopup = (chip) => {
    matchRef.current = { type: 'replace', chip };
    chip.dataset.changing = 'true';
    const rect = chip.getBoundingClientRect();
    setPos({ top: rect.bottom, left: rect.left });
    setMode('replace');
    setCurrentValue(chip.dataset.value);
    // Apply the filter that matches the tag's own field, so its list and tick are shown.
    const chipField = mergeFields.find((f) => f.value === chip.dataset.value);
    if (chipField?.module) {
      setSelectedModule(chipField.module);
      const entry = moduleEntries?.flatMap((g) => g.items).find((item) => item.source === chipField.module);
      if (entry) setSelectedEntry(entry.value);
    }
    setQuery('');
    setActiveIndex(0);
    setOpen(true);
  };

  // Move focus into the search box when changing a chip, so typing filters it.
  useEffect(() => {
    if (open && mode === 'replace') searchRef.current?.focus();
  }, [open, mode]);

  const handleInput = () => {
    deselectChip();
    refreshTrigger();
    syncContent();
  };

  const filteredCount = () => filterFields(mergeFields, query, selectedModule).length;

  const selectOption = (opt) => {
    const m = matchRef.current;
    if (!m) return;
    let newChip = null;
    if (m.type === 'replace') {
      newChip = createChipElement(opt);
      m.chip.replaceWith(newChip);
    } else {
      insertTokenAtMatch(m, opt);
    }
    closePopup();
    // The search box may have held focus — hand it back to the field, caret after the chip.
    if (newChip) { rootRef.current?.focus(); placeCaretAfter(newChip); }
    syncContent();
  };

  // Arrow/Enter/Tab/Escape behave the same whether focus is in the field or in
  // the popup's search box. Returns true when the key was handled.
  const handlePopupKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filteredCount() - 1)); return true; }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); return true; }
    if (e.key === 'Enter' || e.key === 'Tab') {
      const opt = filterFields(mergeFields, query, selectedModule)[activeIndex];
      if (opt) { e.preventDefault(); selectOption(opt); }
      return true;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      const chip = matchRef.current?.chip;
      closePopup();
      if (mode === 'replace') {
        rootRef.current?.focus();
        if (chip?.isConnected) placeCaretAfter(chip);
      }
      return true;
    }
    return false;
  };

  const handleEditableClick = (e) => {
    if (readOnly) return; // capsules are display-only in read-only mode
    deselectChip();
    const removeBtn = e.target.closest('.mergefield-token-remove');
    if (removeBtn) {
      e.preventDefault();
      e.stopPropagation();
      const chip = removeBtn.closest('.mergefield-token');
      if (chip) removeChip(chip);
      closePopup();
      syncContent();
      return;
    }
    const chip = e.target.closest('.mergefield-token');
    if (chip) {
      e.preventDefault();
      e.stopPropagation();
      openChangePopup(chip);
      return;
    }
    refreshTrigger();
  };

  const handleKeyDown = (e) => {
    if (open && handlePopupKey(e)) return;

    // First Backspace next to a chip selects it; a second Backspace removes it
    // (mirrors the Tags component's remove-last-chip behavior).
    if (e.key === 'Backspace' && !open) {
      if (selectedChipRef.current) {
        e.preventDefault();
        removeChip(selectedChipRef.current);
        selectedChipRef.current = null;
        syncContent();
        return;
      }
      const chip = getAdjacentChip(rootRef.current);
      if (chip) {
        e.preventDefault();
        chip.dataset.selected = 'true';
        selectedChipRef.current = chip;
        return;
      }
    }
    if (e.key !== 'Backspace') deselectChip();

    if (e.key === 'Enter') {
      e.preventDefault();
      if (!singleLine) { insertLineBreak(); handleInput(); }
    }
  };

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e) => {
      if (!rootRef.current?.contains(e.target) && !panelRef.current?.contains(e.target)) closePopup();
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [open]);

  return (
    <div
      className="mergefield-wrapper"
      data-required={required || undefined}
      data-readonly={readOnly || undefined}
      data-singleline={singleLine || undefined}
      style={singleLine ? undefined : { '--mf-min-height': `${effectiveMin}px` }}
    >
      <div
        id={inputId}
        ref={rootRef}
        className="mergefield-editable"
        data-singleline={singleLine || undefined}
        contentEditable={!disabled && !readOnly}
        suppressContentEditableWarning
        data-placeholder={placeholder}
        aria-describedby={helperId}
        aria-multiline={!singleLine}
        aria-readonly={readOnly || undefined}
        role="textbox"
        // Multiline is a fixed 100px box that scrolls when content overflows; the drag handle sets a custom height.
        style={!singleLine ? { height: `${customHeight ?? 100}px`, minHeight: `${customHeight ?? 100}px`, maxHeight: `${customHeight ?? 100}px`, transition: 'none' } : undefined}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onClick={handleEditableClick}
        onKeyUp={refreshTrigger}
      />
      {!disabled && !singleLine && (
        <div className="mergefield-resize-icon" aria-hidden="true" onMouseDown={handleResizeStart}>
          <ResizeHandle />
        </div>
      )}
      {readOnly && (
        <div className="mergefield-lock-badge" aria-hidden="true">
          <Lock />
        </div>
      )}
      {open && (
        <MergeFieldPopup
          panelRef={panelRef}
          pos={pos}
          modules={modules}
          moduleEntries={moduleEntries}
          selectedEntry={selectedEntry}
          entryLabel={entryLabel}
          onEntrySelect={onEntrySelect}
          selectedModule={selectedModule}
          onModuleChange={setSelectedModule}
          options={mergeFields}
          query={query}
          onQueryChange={(v) => { setQuery(v); setActiveIndex(0); }}
          searchRef={searchRef}
          onSearchKeyDown={handlePopupKey}
          showSearch={mode === 'replace'}
          currentValue={currentValue}
          onDismiss={closePopup}
          activeIndex={activeIndex}
          onHover={setActiveIndex}
          onSelect={selectOption}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Text field that lets the user drop in a merge field by typing `#`.
 *
 * Both variants render the same contentEditable chip surface — `singleline`
 * just constrains it to one line (no wrapping, no resize, input-sized).
 * A selected field becomes an atomic, non-editable chip inline with the text.
 *
 * Note: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving
 * a contentEditable from a controlled `value` on every render fights the
 * caret, so this mirrors how rich-text editors are typically exposed rather
 * than following the plain Input/Textarea controlled pattern. `value` is only
 * read once, as a fallback initial value.
 */
export function MergeField({
  label,
  helperText,
  width = 670,
  layout = 'horizontal',
  columns,
  variant = 'multiline',
  minHeight = 70,
  mergeFields = [],
  moduleEntries,
  hint = 'Type # to insert merge field',
  placeholder,
  defaultValue,
  value,
  onChange,
  error,
  disabled,
  readOnly,
  required,
  id: idProp,
  style,
}) {
  const autoId = useId();
  const inputId = idProp ?? autoId;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  const rootStyle = { width: typeof width === 'number' ? `${width}px` : width, ...style };
  const rootVariant = disabled ? 'disabled' : readOnly ? 'readonly' : error ? 'error' : undefined;

  const fieldEl = (
    <EditableField
      inputId={inputId}
      helperId={helperId}
      placeholder={placeholder}
      minHeight={minHeight}
      mergeFields={mergeFields}
      moduleEntries={moduleEntries}
      defaultValue={defaultValue ?? value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      singleLine={variant === 'singleline'}
    />
  );

  // The "Type # to insert" hint is an editing aid, so it's hidden in read-only mode.
  const hintEl = hint && !error && !readOnly ? <span className="mergefield-hint">{hint}</span> : null;

  const helperEl = helperText ? (
    <span id={helperId} className="mergefield-helper-text">
      {helperText}
    </span>
  ) : null;

  const labelEl = label ? (
    <label className="mergefield-label" htmlFor={inputId} onClick={(e) => e.preventDefault()}>
      {label}
    </label>
  ) : null;

  if (layout === 'horizontal' && label) {
    const formRowStyle = columns ? { gridTemplateColumns: columns } : undefined;
    return (
      <div className="mergefield-root" style={rootStyle} data-variant={rootVariant}>
        <div className="mergefield-form-row" style={formRowStyle}>
          {labelEl}
          <div className="mergefield-field-column">
            {fieldEl}
            {hintEl}
            {helperEl}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mergefield-root mergefield-vertical" style={rootStyle} data-variant={rootVariant}>
      {labelEl}
      {fieldEl}
      {hintEl}
      {helperEl}
    </div>
  );
}

export default MergeField;
