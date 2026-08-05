import { useState } from 'react';
import styles from './Breadcrumb.module.css';
import { ChevronDownFilled } from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Index of the selected (current) item. Controls externally when provided. */
  selectedIndex?: number;
  /** Default selected index for uncontrolled usage. Defaults to last item. */
  defaultSelectedIndex?: number;
  /** Called when the user clicks an ancestor item. */
  onSelect?: (index: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Separator — ChevronDownFilled rotated to point right
// ─────────────────────────────────────────────────────────────────────────────

const Separator = () => (
  <ChevronDownFilled
    className={styles.separator}
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
}: BreadcrumbProps) {
  const [internalIndex, setInternalIndex] = useState<number>(
    defaultSelectedIndex ?? items.length - 1
  );

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  function handleClick(index: number, item: BreadcrumbItem, e: React.MouseEvent) {
    if (controlledIndex === undefined) setInternalIndex(index);
    onSelect?.(index);
    item.onClick?.(e);
  }

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === currentIndex;
          return (
            <li key={index} className={styles.item}>
              {isCurrent ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className={styles.link}
                  onClick={e => { e.preventDefault(); handleClick(index, item, e); }}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={styles.button}
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
