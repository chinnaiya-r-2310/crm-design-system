import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import './FormTable.css';

/* ─────────────────────────────────────────────────────────────────────────────
   FormTable — editable rows of form controls with an optional drag handle and
   per-row add/remove actions. Built for 34px inputs and dropdowns.

   Props:
     ariaLabel   — accessible name of the table
     headers     — ReactNode[] for the data columns (drag and action columns are unlabelled)
     rows        — objects with a unique `id`
     renderCells — (row, index) => ReactNode[], one node per data column
     renderActions — (row, index) => { onRemove?, removeLabel?, onAdd?, addLabel? }
     canReorder  — shows the drag handle and makes rows draggable
     onMove      — (fromId, toId) => void, called when a row is dropped on another
     gapAfter    — padding-right in px after each data column, index-aligned with headers
   ─────────────────────────────────────────────────────────────────────────────── */

export function FormTable({
  ariaLabel,
  headers = [],
  rows = [],
  renderCells,
  renderActions,
  canReorder = false,
  onMove,
  gapAfter = [],
}) {
  const [dragId, setDragId] = useState(null);

  const handleDrop = (targetId) => {
    if (dragId !== null && dragId !== targetId) onMove?.(dragId, targetId);
    setDragId(null);
  };

  return (
    <table className="ft-table" aria-label={ariaLabel}>
      <thead>
        <tr>
          <th aria-hidden="true" />
          {headers.map((header, index) => (
            <th key={index} scope="col" style={{ paddingRight: gapAfter[index] ?? 0 }}>
              {header}
            </th>
          ))}
          <th aria-hidden="true" />
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const actions = renderActions ? renderActions(row, rowIndex) : {};
          const cells = renderCells(row, rowIndex);
          return (
            <tr
              key={row.id}
              draggable={canReorder}
              onDragStart={() => setDragId(row.id)}
              onDragOver={event => {
                if (canReorder && dragId !== null) event.preventDefault();
              }}
              onDrop={event => {
                event.preventDefault();
                handleDrop(row.id);
              }}
              onDragEnd={() => setDragId(null)}
            >
              <td className="ft-cell--grip">
                <span className={`ft-grip${canReorder ? '' : ' ft-grip--hidden'}`} aria-hidden="true">
                  <Icon name="CrmMaskDrag" size={12} />
                </span>
              </td>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="ft-cell--input" style={{ paddingRight: gapAfter[cellIndex] ?? 0 }}>
                  {cell}
                </td>
              ))}
              <td className="ft-cell--actions">
                <div className="ft-actions">
                  {actions.onRemove && (
                    <span className="ft-slot">
                      <button
                        type="button"
                        className="ft-icon-btn ft-icon-btn--minus"
                        aria-label={actions.removeLabel}
                        onClick={actions.onRemove}
                      >
                        <Icon name="CriteriaMinus" size={16} />
                      </button>
                    </span>
                  )}
                  {actions.onAdd && (
                    <span className="ft-slot">
                      <button
                        type="button"
                        className="ft-icon-btn ft-icon-btn--plus"
                        aria-label={actions.addLabel}
                        onClick={actions.onAdd}
                      >
                        <Icon name="CriteriaPlus" size={16} />
                      </button>
                    </span>
                  )}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FormTable;
