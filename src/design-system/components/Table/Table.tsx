import styles from './Table.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { More } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type SortDir = 'asc' | 'desc';

/** Each data row must have a unique string id. */
export interface SetupTableRow {
  id: string;
  [key: string]: unknown;
}

export interface TableColumn {
  /** Maps to a key on the row object. */
  key: string;
  /** Column header label. */
  label: string;
  /** Explicit column width (px number or CSS string). */
  width?: number | string;
  /** Whether this column participates in sort. */
  sortable?: boolean;
  /** Horizontal alignment of header and cell content. @default 'left' */
  align?: 'left' | 'center' | 'right';
  /**
   * Custom cell renderer. When omitted the value is coerced to string.
   * Return null to render an empty cell.
   */
  render?: (value: unknown, row: SetupTableRow, rowIndex: number) => React.ReactNode;
}

export interface SetupTableProps {
  columns: TableColumn[];
  rows: SetupTableRow[];
  /** Adds a checkbox column for bulk selection. */
  selectable?: boolean;
  /** Controlled selected row IDs. */
  selectedIds?: string[];
  onSelectionChange?: (ids: string[]) => void;
  /** When provided, renders a 3-dot action button on every row. */
  onRowAction?: (row: SetupTableRow, e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Controlled sort column key. */
  sortKey?: string;
  /** Controlled sort direction. */
  sortDir?: SortDir;
  /** Called when a sortable column header is clicked. Toggle direction externally. */
  onSort?: (key: string) => void;
  /** Alternating row tint (zebra stripes). @default false */
  striped?: boolean;
  /** Total component width in px or CSS string. */
  width?: number | string;
  /** Message shown when rows is empty. @default 'No data' */
  emptyMessage?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sort icon
// ─────────────────────────────────────────────────────────────────────────────

function SortIcon({ active, dir }: { active: boolean; dir?: SortDir }) {
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
}: SetupTableProps) {
  const allSelected = rows.length > 0 && rows.every(r => selectedIds.includes(r.id));
  const someSelected = !allSelected && rows.some(r => selectedIds.includes(r.id));

  const colSpan =
    (selectable ? 1 : 0) + columns.length + (onRowAction ? 1 : 0);

  const rootStyle: React.CSSProperties = width
    ? { width: typeof width === 'number' ? `${width}px` : width }
    : {};

  const toggleAll = () => {
    if (!onSelectionChange) return;
    onSelectionChange(allSelected ? [] : rows.map(r => r.id));
  };

  const toggleRow = (id: string) => {
    if (!onSelectionChange) return;
    onSelectionChange(
      selectedIds.includes(id)
        ? selectedIds.filter(x => x !== id)
        : [...selectedIds, id]
    );
  };

  return (
    <div className={styles.root} style={rootStyle}>
      <table className={styles.table}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <thead>
          <tr className={styles.headerRow}>

            {selectable && (
              <th className={`${styles.th} ${styles.checkboxCell} ${styles.thWithSep}`}>
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
              const thClass = [styles.th, !isLast ? styles.thWithSep : ''].filter(Boolean).join(' ');
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
                      className={styles.sortBtn}
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
              <th className={`${styles.th} ${styles.actionsCell}`} />
            )}

          </tr>
        </thead>

        {/* ── Body ───────────────────────────────────────────────────────── */}
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className={styles.emptyCell} colSpan={colSpan}>
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
                  className={styles.bodyRow}
                  data-selected={isSelected || undefined}
                  data-alt={(isAlt && !isSelected) || undefined}
                >
                  {selectable && (
                    <td className={`${styles.td} ${styles.checkboxCell}`}>
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
                      className={styles.td}
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
                    <td className={`${styles.td} ${styles.actionsCell}`}>
                      <button
                        type="button"
                        className={styles.actionBtn}
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
