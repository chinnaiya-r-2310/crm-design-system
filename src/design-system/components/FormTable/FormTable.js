import { useLayoutEffect, useRef, useState } from 'react';
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
  const [slot, setSlot] = useState(null);
  const bodyRef = useRef(null);
  const positions = useRef(new Map());
  const dragRef = useRef(null);
  const latest = useRef({});
  const slotRef = useRef(null);

  // FLIP: rows that changed position glide from their old spot to the new one.
  useLayoutEffect(() => {
    const next = new Map();
    bodyRef.current?.querySelectorAll('tr[data-row-id]').forEach(tr => {
      const id = tr.dataset.rowId;
      const top = tr.getBoundingClientRect().top;
      next.set(id, top);
      const previous = positions.current.get(id);
      if (previous !== undefined && Math.abs(previous - top) > 0.5) {
        tr.style.transition = 'none';
        tr.style.transform = `translateY(${previous - top}px)`;
        void tr.offsetHeight;
        tr.style.transition = 'transform 220ms ease';
        tr.style.transform = '';
      }
    });
    positions.current = next;
  });

  // While dragging, the picked row's slot stays in the list as an empty grey
  // placeholder and the other rows move around it. `slot` is the placeholder's
  // index among the rows that are not being dragged.
  const dragIndex = dragId === null ? -1 : rows.findIndex(row => row.id === dragId);
  const remaining = dragIndex === -1 ? rows : rows.filter(row => row.id !== dragId);
  const displayRows = dragIndex === -1
    ? rows
    : [...remaining.slice(0, slot), rows[dragIndex], ...remaining.slice(slot)];

  latest.current = { rows, dragIndex, remaining, onMove };

  const makeGhost = (tr, rect) => {
    const ghost = document.createElement('table');
    ghost.className = 'ft-table ft-drag-ghost';
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    const colgroup = document.createElement('colgroup');
    Array.from(tr.children).forEach(cell => {
      const col = document.createElement('col');
      col.style.width = `${cell.getBoundingClientRect().width}px`;
      colgroup.appendChild(col);
    });
    const body = document.createElement('tbody');
    const clone = tr.cloneNode(true);
    clone.removeAttribute('data-placeholder');
    clone.removeAttribute('data-row-id');
    body.appendChild(clone);
    ghost.appendChild(colgroup);
    ghost.appendChild(body);
    document.body.appendChild(ghost);
    return ghost;
  };

  const finishDrag = (commit) => {
    const drag = dragRef.current;
    if (!drag) return;
    window.removeEventListener('pointermove', drag.move);
    window.removeEventListener('pointerup', drag.up);
    drag.ghost.remove();
    dragRef.current = null;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    const { dragIndex: from, remaining: others, onMove: notify } = latest.current;
    const target = slotRef.current;
    if (commit && from !== -1 && target !== from) {
      const neighbourId = target > from ? others[target - 1]?.id : others[target]?.id;
      if (neighbourId !== undefined) notify?.(drag.id, neighbourId);
    }
    slotRef.current = null;
    setDragId(null);
    setSlot(null);
  };


  const handlePointerDown = (event, row, index) => {
    if (!canReorder || event.button !== 0) return;
    event.preventDefault();
    const tr = event.currentTarget.closest('tr');
    const rect = tr.getBoundingClientRect();
    const drag = {
      id: row.id,
      startY: event.clientY,
      ghost: makeGhost(tr, rect),
      move: null,
      up: null,
    };
    drag.move = (moveEvent) => {
      const current = dragRef.current;
      if (!current) return;
      current.ghost.style.transform = `translateY(${moveEvent.clientY - current.startY}px)`;
      const { remaining: others } = latest.current;
      const trs = Array.from(bodyRef.current?.querySelectorAll('tr[data-row-id]') ?? [])
        .filter(item => item.dataset.rowId !== String(current.id));
      let next = others.length;
      for (let i = 0; i < trs.length; i += 1) {
        const box = trs[i].getBoundingClientRect();
        if (moveEvent.clientY < box.top) {
          next = i;
          break;
        }
        if (moveEvent.clientY <= box.bottom) {
          next = i + (moveEvent.clientY > box.top + box.height / 2 ? 1 : 0);
          break;
        }
      }
      if (next !== slotRef.current) {
        slotRef.current = next;
        setSlot(next);
      }
    };
    drag.up = () => finishDrag(true);
    dragRef.current = drag;
    slotRef.current = index;
    setSlot(index);
    setDragId(row.id);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    window.addEventListener('pointermove', drag.move);
    window.addEventListener('pointerup', drag.up);
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
      <tbody ref={bodyRef}>
        {displayRows.map(row => {
          const rowIndex = rows.findIndex(item => item.id === row.id);
          const actions = renderActions ? renderActions(row, rowIndex) : {};
          const cells = renderCells(row, rowIndex);
          const isPlaceholder = row.id === dragId;
          return (
            <tr
              key={row.id}
              data-row-id={row.id}
              data-placeholder={isPlaceholder || undefined}
            >
              <td
                className="ft-cell--grip"
                onPointerDown={event => handlePointerDown(event, row, rowIndex)}
              >
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
