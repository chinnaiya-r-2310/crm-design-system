import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Icon } from '../Icon/Icon';
import './Dragger.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Dragger — a vertical list of entities that can be reordered by dragging.

   Props:
     items    — string[] of unique labels; the order is the display order
     onChange — (nextItems) => void, called live as the picked entity moves

   Behaviour:
     - Drag starts on pointer down; a copy of the picked entity follows the
       pointer vertically only and keeps its horizontal position.
     - The picked entity's slot stays in the list as a grey placeholder and
       moves with the pick.
     - Other entities glide to their new positions.
     - The drag icon is shown only when there is more than one entity.

   Props (continued):
     gripperOnHover — when true, the drag icon is shown only while the entity is hovered
   ─────────────────────────────────────────────────────────────────────────────── */

export function Dragger({ items, onChange, gripperOnHover = false, renderItem }) {
  const [dragging, setDragging] = useState(null);
  const [highlighted, setHighlighted] = useState(null);
  const containerRef = useRef(null);
  const positions = useRef(new Map());
  const dragRef = useRef(null);
  const latest = useRef({ items, onChange });
  latest.current = { items, onChange };

  // The dropped entity flashes yellow for a moment after its order changed.
  useEffect(() => {
    if (highlighted === null) return undefined;
    const timer = window.setTimeout(() => setHighlighted(null), 2000);
    return () => window.clearTimeout(timer);
  }, [highlighted]);

  // FLIP: entities that changed position glide from their old spot to the new one.
  // Layout offsets (not bounding rects) are used so an entity mid-glide is measured where it belongs.
  useLayoutEffect(() => {
    const next = new Map();
    containerRef.current?.querySelectorAll('[data-item]').forEach(el => {
      const id = el.dataset.item ?? '';
      const top = el.offsetTop;
      next.set(id, top);
      const previous = positions.current.get(id);
      if (previous !== undefined && previous !== top) {
        el.style.transition = 'none';
        el.style.transform = `translateY(${previous - top}px)`;
        void el.offsetHeight;
        el.style.transition = 'transform 220ms ease';
        el.style.transform = '';
      }
    });
    positions.current = next;
  });

  const finishDrag = () => {
    const drag = dragRef.current;
    if (!drag) return;
    window.removeEventListener('pointermove', drag.move);
    window.removeEventListener('pointerup', drag.up);
    drag.ghost.remove();
    dragRef.current = null;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    setDragging(null);
    if (latest.current.items.join('|') !== drag.startOrder) setHighlighted(drag.id);
  };

  // A press becomes a drag only after the pointer moves a few pixels, so a plain click
  // inside the entity (for example a checkbox) still reaches its control.
  const DRAG_THRESHOLD = 4;

  const startDrag = (event, item) => {
    if (latest.current.items.length < 2 || event.button !== 0) return;
    const source = event.currentTarget;
    const startY = event.clientY;
    const disarm = () => {
      window.removeEventListener('pointermove', arm);
      window.removeEventListener('pointerup', disarm);
    };
    const arm = moveEvent => {
      if (Math.abs(moveEvent.clientY - startY) < DRAG_THRESHOLD) return;
      disarm();
      beginDrag(source, item, startY);
    };
    window.addEventListener('pointermove', arm);
    window.addEventListener('pointerup', disarm);
  };

  const beginDrag = (source, item, startY) => {
    const rect = source.getBoundingClientRect();

    const ghost = document.createElement('div');
    ghost.className = 'dragger-ghost';
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    const clone = source.cloneNode(true);
    clone.removeAttribute('data-item');
    clone.classList.remove('dragger-item--placeholder');
    // The copy sits outside the list's scoped styles, so it takes the row's own box
    // (height, padding, gap) to match the slot it was picked from.
    const sourceStyle = getComputedStyle(source);
    clone.style.height = `${rect.height}px`;
    clone.style.padding = sourceStyle.padding;
    clone.style.gap = sourceStyle.gap;
    Array.from(clone.children).forEach(child => { child.style.alignSelf = 'center'; });
    // Icon masks are referenced by id. Give the copy its own ids so it does not
    // pick up the hidden masks of the placeholder in the list.
    let html = clone.outerHTML;
    Array.from(clone.querySelectorAll('[id]')).map(el => el.id).forEach(id => {
      html = html
        .split(`id="${id}"`).join(`id="${id}-ghost"`)
        .split(`url(#${id})`).join(`url(#${id}-ghost)`)
        .split(`href="#${id}"`).join(`href="#${id}-ghost"`);
    });
    ghost.innerHTML = html;
    document.body.appendChild(ghost);

    const move = (moveEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      drag.ghost.style.transform = `translateY(${moveEvent.clientY - drag.startY}px)`;
      const { items: current, onChange: notify } = latest.current;
      const container = containerRef.current;
      if (!container) return;
      const pointer = moveEvent.clientY - container.getBoundingClientRect().top;
      const others = current.filter(id => id !== drag.id);
      const midpoints = others.map(id => {
        const el = container.querySelector(`[data-item="${CSS.escape(id)}"]`);
        return el ? el.offsetTop + el.offsetHeight / 2 : Infinity;
      });
      const slotIndex = midpoints.filter(middle => pointer > middle).length;
      const next = [...others.slice(0, slotIndex), drag.id, ...others.slice(slotIndex)];
      if (next.some((id, index) => id !== current[index])) notify(next);
    };

    dragRef.current = {
      id: item,
      startY,
      startOrder: latest.current.items.join('|'),
      ghost,
      move,
      up: finishDrag,
    };
    setDragging(item);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', finishDrag);
  };

  return (
    <div ref={containerRef} className="dragger">
      {items.map(item => (
        <div
          key={item}
          data-item={item}
          className={`dragger-item${dragging === item ? ' dragger-item--placeholder' : ''}${highlighted === item ? ' dragger-item--highlight' : ''}`}
          onPointerDown={event => startDrag(event, item)}
        >
          {items.length > 1 && (
            <span className={`dragger-grip${gripperOnHover ? ' dragger-grip--on-hover' : ''}`}>
              <Icon name="CrmMaskDrag" size={12} />
            </span>
          )}
          {renderItem ? renderItem(item) : <span>{item}</span>}
        </div>
      ))}
    </div>
  );
}

export default Dragger;
