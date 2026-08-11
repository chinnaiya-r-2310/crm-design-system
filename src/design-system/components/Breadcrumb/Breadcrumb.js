import { useState } from 'react';
import './Breadcrumb.css';
import { ChevronDownFilled } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Separator — ChevronDownFilled rotated to point right
// ─────────────────────────────────────────────────────────────────────────────

const Separator = () => (
  <ChevronDownFilled
    className={'breadcrumb-separator'}
    aria-hidden="true"
    style={{ transform: 'rotate(-90deg)' }}
  />
);

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Breadcrumb({
  items,
  selectedIndex: controlledIndex,
  defaultSelectedIndex,
  onSelect,
}) {
  const [internalIndex, setInternalIndex] = useState(
    defaultSelectedIndex ?? items.length - 1
  );

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  function handleClick(index, item, e) {
    if (controlledIndex === undefined) setInternalIndex(index);
    onSelect?.(index);
    item.onClick?.(e);
  }

  return (
    <nav aria-label="Breadcrumb" className={'breadcrumb-nav'}>
      <ol className={'breadcrumb-list'}>
        {items.map((item, index) => {
          const isCurrent = index === currentIndex;
          return (
            <li key={index} className={'breadcrumb-item'}>
              {isCurrent ? (
                <span className={'breadcrumb-current'} aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className={'breadcrumb-link'}
                  onClick={e => { e.preventDefault(); handleClick(index, item, e); }}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={'breadcrumb-button'}
                  onClick={e => handleClick(index, item, e)}
                >
                  {item.label}
                </button>
              )}
              {index < items.length - 1 && <Separator />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
