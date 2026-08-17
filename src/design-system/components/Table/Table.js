import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Table.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { More, ChevronDownFilled, Check } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Filter panel — single-select radio style (portal)
// ─────────────────────────────────────────────────────────────────────────────

function FilterPanel({ options, selected, onSelect, top, left }) {
  return createPortal(
    <div
      className="table-filter-panel"
      style={{ top, left }}
      onMouseDown={e => e.stopPropagation()}
    >
      {options.map(opt => (
        <div
          key={opt}
          className="table-filter-option"
          data-selected={selected === opt || undefined}
          onClick={() => onSelect(opt)}
        >
          <span className="table-filter-option-label">{opt}</span>
          <span className="table-filter-check"><Check /></span>
        </div>
      ))}
    </div>,
    document.body
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function SetupTable({
  columns: columnDefs,
  rows,
  selectable = false,
  selectedIds = [],
  onSelectionChange,
  onRowAction,
  striped = false,
  width,
  maxHeight,
  emptyMessage = 'No data',
}) {
  // ── Resizable column widths ───────────────────────────────────────────────
  const [colWidths, setColWidths] = useState(() =>
    Object.fromEntries(columnDefs.map(c => [c.key, c.width ?? 120]))
  );
  const resizingRef = useRef(null);

  const startResize = (e, colKey) => {
    e.preventDefault();
    e.stopPropagation();
    resizingRef.current = { colKey, startX: e.clientX, startWidth: colWidths[colKey] };
    const onMove = (mv) => {
      if (!resizingRef.current) return;
      const dx = mv.clientX - resizingRef.current.startX;
      const w = Math.max(60, resizingRef.current.startWidth + dx);
      setColWidths(prev => ({ ...prev, [resizingRef.current.colKey]: w }));
    };
    const onUp = () => {
      resizingRef.current = null;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // ── Filter dropdown — single-select ──────────────────────────────────────
  const [openFilter, setOpenFilter] = useState(null); // { colKey, top, left }
  const [activeFilters, setActiveFilters] = useState({}); // { colKey: string | null }

  const openFilterFor = (e, col) => {
    e.stopPropagation();
    if (openFilter?.colKey === col.key) { setOpenFilter(null); return; }
    const rect = e.currentTarget.closest('th').getBoundingClientRect();
    setOpenFilter({ colKey: col.key, top: rect.bottom + 2, left: rect.left });
  };

  const selectFilterOpt = (colKey, opt) => {
    setActiveFilters(prev => ({
      ...prev,
      [colKey]: prev[colKey] === opt ? null : opt,
    }));
    setOpenFilter(null);
  };

  useEffect(() => {
    if (!openFilter) return;
    const close = () => setOpenFilter(null);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [openFilter]);

  // ── Row filtering ─────────────────────────────────────────────────────────
  const visibleRows = rows.filter(row =>
    columnDefs.every(col => {
      const sel = activeFilters[col.key];
      if (!sel) return true;
      return sel === String(row[col.key] ?? '');
    })
  );

  // ── Selection ─────────────────────────────────────────────────────────────
  const allSelected = visibleRows.length > 0 && visibleRows.every(r => selectedIds.includes(r.id));
  const someSelected = !allSelected && visibleRows.some(r => selectedIds.includes(r.id));
  const colSpan = (onRowAction ? 1 : 0) + (selectable ? 1 : 0) + columnDefs.length;
  const rootStyle = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

  // Exact table width so each column keeps its own width during resize
  const totalColWidth =
    (onRowAction ? 36 : 0) +
    (selectable ? 46 : 0) +
    columnDefs.reduce((sum, c) => sum + (colWidths[c.key] ?? 120), 0);

  const maxHeightStyle = maxHeight
    ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }
    : undefined;

  const toggleAll = () => onSelectionChange?.(allSelected ? [] : visibleRows.map(r => r.id));
  const toggleRow = (id) => onSelectionChange?.(
    selectedIds.includes(id) ? selectedIds.filter(x => x !== id) : [...selectedIds, id]
  );

  // Shared colgroup — rendered in both header and body tables for column alignment
  const colgroup = (
    <colgroup>
      {onRowAction && <col style={{ width: 36 }} />}
      {selectable && <col style={{ width: 46 }} />}
      {columnDefs.map(col => (
        <col key={col.key} style={{ width: colWidths[col.key] }} />
      ))}
    </colgroup>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="table-root" style={rootStyle}>
      {/* Horizontal scroll container — wraps both header and body */}
      <div className="table-h-scroll">

        {/* Header table — outside the body scroll, so it never bounces */}
        <table className="table-table" style={{ tableLayout: 'fixed', width: totalColWidth }}>
          {colgroup}
          <thead>
            <tr className="table-header-row">
              {onRowAction && <th className="table-th table-actions-cell" />}
              {selectable && (
                <th className="table-th table-checkbox-cell">
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                    aria-label="Select all rows"
                  />
                </th>
              )}

              {columnDefs.map((col) => {
                const hasActiveFilter = Boolean(activeFilters[col.key]);
                return (
                  <th
                    key={col.key}
                    className="table-th"
                    style={{ textAlign: col.align ?? 'left' }}
                  >
                    <div className="table-th-inner">
                      {col.filterable ? (
                        <button
                          type="button"
                          className="table-filter-btn"
                          data-active={hasActiveFilter || undefined}
                          onClick={e => openFilterFor(e, col)}
                        >
                          <span className="table-filter-btn-label">
                            {activeFilters[col.key] ?? col.label}
                          </span>
                          <ChevronDownFilled
                            className="table-filter-chevron"
                            data-open={openFilter?.colKey === col.key || undefined}
                          />
                        </button>
                      ) : (
                        <span className="table-th-label">{col.label}</span>
                      )}
                    </div>
                    <div
                      className="table-resize-handle"
                      onMouseDown={e => startResize(e, col.key)}
                    />
                  </th>
                );
              })}
            </tr>
          </thead>
        </table>

        {/* Body scroll wrapper — vertical scroll only; header stays fixed above */}
        <div className="table-body-wrap" style={maxHeightStyle}>
          <table className="table-table" style={{ tableLayout: 'fixed', width: totalColWidth }}>
            {colgroup}
            <tbody>
              {visibleRows.length === 0 ? (
                <tr>
                  <td className="table-empty-cell" colSpan={colSpan}>{emptyMessage}</td>
                </tr>
              ) : visibleRows.map((row, i) => {
                const isSelected = selectedIds.includes(row.id);
                const isAlt = striped && i % 2 === 1;
                return (
                  <tr
                    key={row.id}
                    className="table-body-row"
                    data-selected={isSelected || undefined}
                    data-alt={(isAlt && !isSelected) || undefined}
                  >
                    {onRowAction && (
                      <td className="table-td table-actions-cell">
                        <button
                          type="button"
                          className="table-action-btn"
                          onClick={e => onRowAction(row, e)}
                          aria-label="Row actions"
                        >
                          <More />
                        </button>
                      </td>
                    )}
                    {selectable && (
                      <td className="table-td table-checkbox-cell">
                        <Checkbox
                          checked={isSelected}
                          onChange={() => toggleRow(row.id)}
                          aria-label={`Select row ${i + 1}`}
                        />
                      </td>
                    )}
                    {columnDefs.map(col => (
                      <td
                        key={col.key}
                        className="table-td"
                        style={{ textAlign: col.align ?? 'left' }}
                      >
                        {col.render
                          ? col.render(row[col.key], row, i)
                          : String(row[col.key] ?? '')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {openFilter && (() => {
        const col = columnDefs.find(c => c.key === openFilter.colKey);
        if (!col?.filterOptions) return null;
        return (
          <FilterPanel
            options={col.filterOptions}
            selected={activeFilters[col.key] ?? null}
            onSelect={opt => selectFilterOpt(col.key, opt)}
            top={openFilter.top}
            left={openFilter.left}
          />
        );
      })()}
    </div>
  );
}

export default SetupTable;
