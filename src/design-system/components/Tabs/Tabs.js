import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import './Tabs.css';

export function Tabs({
  tabs,
  activeTab,
  onChange,
  size = 'md',
  variant = 'primary',
  showCount = false,
}) {
  const containerRef = useRef(null);
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  // Suppress transition on first render so indicator snaps to position without animating from 0.
  const [animated, setAnimated] = useState(false);

  useLayoutEffect(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    const el = tabRefs.current[idx];
    const container = containerRef.current;
    if (!el || !container) return;

    // getBoundingClientRect gives positions relative to the viewport.
    // Subtracting the container's left border gives position from the padding edge,
    // which is what CSS `left` expects for position:absolute children.
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const borderLeft = parseFloat(getComputedStyle(container).borderLeftWidth) || 0;

    setIndicator({
      left: elRect.left - containerRect.left - borderLeft,
      width: elRect.width,
    });
  }, [activeTab, tabs]);

  useEffect(() => { setAnimated(true); }, []);

  return (
    <div
      ref={containerRef}
      className={'tabs-tab-bar'}
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
            className={'tabs-tab'}
            data-active={isActive || undefined}
            onClick={() => onChange(tab.id)}
          >
            <span className={'tabs-content'}>
              <span className={'tabs-label'} data-label={tab.label}>{tab.label}</span>
              {showCount && tab.count !== undefined && (
                <span className={'tabs-count'} aria-label={`${tab.count} items`}>
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}

      {/* Shared sliding indicator */}
      <span
        className={'tabs-indicator'}
        data-animated={animated || undefined}
        style={indicator}
        aria-hidden="true"
      />
    </div>
  );
}

export default Tabs;
