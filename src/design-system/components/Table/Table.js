import './Table.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { More } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Sort icon
// ─────────────────────────────────────────────────────────────────────────────

function SortIcon({ active, dir }) {
  const activeColor = 'currentColor';
  const inactiveColor = 'var(--ds-border-subtle, #D0D5E8)';
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M5 1L9 5H1L5 1Z" fill={active && dir === 'asc' ? activeColor : inactiveColor} />
      <path d="M5 11L1 7H9L5 11Z" fill={active && dir === 'desc' ? activeColor : inactiveColor} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function SetupTable({
  columns,
  rows,
  selectable = false,
  selectedIds = [],
  onSelectionChange,
  onRowAction,
  sortKey,
  sortDir,
  onSort,
  striped = false,
  width,
  emptyMessage = 'No data',
}) {
  const allSelected = rows.length > 0 && rows.every(r => selectedIds.includes(r.id));
  const someSelected = !allSelected && rows.some(r => selectedIds.includes(r.id));

  const colSpan =
    (selectable ? 1 : 0) + columns.length + (onRowAction ? 1 : 0);

  const rootStyle = width
    ? { width: typeof width === 'number' ? `${width}px` : width }
    : {};

  const toggleAll = () => {
    if (!onSelectionChange) return;
    onSelectionChange(allSelected ? [] : rows.map(r => r.id));
  };

  const toggleRow = (id) => {
    if (!onSelectionChange) return;
    onSelectionChange(
      selectedIds.includes(id)
        ? selectedIds.filter(x => x !== id)
        : [...selectedIds, id]
    );
  };

  return (
    <div className={'table-root'} style={rootStyle}>
      <table className={'table-table'}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <thead>
          <tr className={'table-header-row'}>

            {selectable && (
              <th className={`table-th table-checkbox-cell table-th-with-sep`}>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  aria-label="Select all rows"
                />
              </th>
            )}

            {columns.map((col, i) => {
              const isLast = i === columns.length - 1 && !onRowAction;
              const thClass = ['table-th', !isLast ? 'table-th-with-sep' : ''].filter(Boolean).join(' ');
              const colWidth = typeof col.width === 'number' ? `${col.width}px` : col.width;
              return (
                <th
                  key={col.key}
                  className={thClass}
                  style={{ width: colWidth, textAlign: col.align ?? 'left' }}
                  aria-sort={
                    col.sortable && sortKey === col.key
                      ? sortDir === 'asc' ? 'ascending' : 'descending'
                      : undefined
                  }
                >
                  {col.sortable ? (
                    <button
                      type="button"
                      className={'table-sort-btn'}
                      onClick={() => onSort?.(col.key)}
                    >
                      {col.label}
                      <SortIcon active={sortKey === col.key} dir={sortDir} />
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              );
            })}

            {onRowAction && (
              <th className={`table-th table-actions-cell`} />
            )}

          </tr>
        </thead>

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className={'table-empty-cell'} colSpan={colSpan}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => {
              const isSelected = selectedIds.includes(row.id);
              const isAlt = striped && i % 2 === 1;
              return (
                <tr
                  key={row.id}
                  className={'table-body-row'}
                  data-selected={isSelected || undefined}
                  data-alt={(isAlt && !isSelected) || undefined}
                >
                  {selectable && (
                    <td className={`table-td table-checkbox-cell`}>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleRow(row.id)}
                        aria-label={`Select row ${i + 1}`}
                      />
                    </td>
                  )}

                  {columns.map(col => (
                    <td
                      key={col.key}
                      className={'table-td'}
                      style={{ textAlign: col.align ?? 'left' }}
                      title={
                        col.render ? undefined :
                        String(row[col.key] ?? '')
                      }
                    >
                      {col.render
                        ? col.render(row[col.key], row, i)
                        : String(row[col.key] ?? '')}
                    </td>
                  ))}

                  {onRowAction && (
                    <td className={`table-td table-actions-cell`}>
                      <button
                        type="button"
                        className={'table-action-btn'}
                        onClick={e => onRowAction(row, e)}
                        aria-label="Row actions"
                      >
                        <More />
                      </button>
                    </td>
                  )}
                </tr>
              );
            })
          )}
        </tbody>

      </table>
    </div>
  );
}

export default SetupTable;
