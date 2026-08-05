import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  /**
   * md = Primary Tab 35px / Secondary Tab 35px outer
   * sm = Small Primary Tab 26px / Small Secondary Tab 30px outer
   */
  size?: 'md' | 'sm';
  /**
   * primary: flat bar with sliding underline indicator
   * secondary: pill container with sliding filled-pill indicator
   */
  variant?: 'primary' | 'secondary';
  /** Show count badges. When false (default) no badge is rendered even if a tab has a count value. */
  showCount?: boolean;
}

interface IndicatorRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function Tabs({
  tabs,
  activeTab,
  onChange,
  size = 'md',
  variant = 'primary',
  showCount = false,
}: TabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState<IndicatorRect>({ left: 0, top: 0, width: 0, height: 0 });
  // Suppress transition on first render so indicator snaps to position without animating from 0.
  const [animated, setAnimated] = useState(false);

  useLayoutEffect(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    }
  }, [activeTab, tabs]);

  useEffect(() => { setAnimated(true); }, []);

  const isPrimary = variant === 'primary';

  // Primary indicator uses only left+width (bottom-anchored via CSS).
  // Secondary indicator uses all four dimensions (full pill).
  const indicatorStyle = isPrimary
    ? { left: indicator.left, width: indicator.width }
    : { left: indicator.left, top: indicator.top, width: indicator.width, height: indicator.height };

  return (
    <div
      className={styles.tabBar}
      data-variant={variant}
      data-size={size}
      role="tablist"
    >
      {tabs.map((tab, i) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            ref={el => { tabRefs.current[i] = el; }}
            role="tab"
            aria-selected={isActive}
            className={styles.tab}
            data-active={isActive || undefined}
            onClick={() => onChange(tab.id)}
          >
            <span className={styles.content}>
              <span className={styles.label} data-label={tab.label}>{tab.label}</span>
              {showCount && tab.count !== undefined && (
                <span className={styles.count} aria-label={`${tab.count} items`}>
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}

      {/* Shared sliding indicator */}
      <span
        className={styles.indicator}
        data-animated={animated || undefined}
        style={indicatorStyle}
        aria-hidden="true"
      />
    </div>
  );
}

export default Tabs;
