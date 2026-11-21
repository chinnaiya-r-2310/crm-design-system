import { useEffect, useRef, useState } from 'react';
import homeSvg from './animated/home.svg?raw';
import animateHome from './animated/home.js';
import workqueueSvg from './animated/workqueue.svg?raw';
import animateWorkqueue from './animated/workqueue.js';
import reportsSvg from './animated/reports.svg?raw';
import animateReports from './animated/reports.js';
import agentsSvg from './animated/agents.svg?raw';
import animateAgents from './animated/agents.js';
import mcpSvg from './animated/mcp.svg?raw';
import animateMCP from './animated/mcp.js';
import './NextGenLeftMenu.css';
import {
  Search, More, ChevronDownFilled, ChevronUp, Folder, SidebarCollapse,
  ModuleMyJobs,
  ModuleContacts, ModuleLeads, ModuleDeals, ModuleAccounts,
  ModuleForecasts, ModuleSolutions, ModuleProducts, ModuleCases,
  ModuleActivities, ModuleMeeting, ModuleDocs, ModuleSocial, ModuleCustom,
} from '../../foundations/icons/Icons';
import { Icon } from '../Icon/Icon';

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Default data
// ─────────────────────────────────────────────────────────────────────────────

// Both panel states share the same navigation so collapsing preserves every item.
const DEFAULT_TOP_NAV = [
  { id: 'home', label: 'Home', iconName: 'CrmNewhome', color: 'var(--ds-icon-primary-link-blue)' },
  { id: 'workqueue', label: 'Workqueue', iconName: 'CrmNewworkqueue', color: 'var(--ds-icon-primary-orange)' },
  { id: 'analytics', label: 'Analytics', iconName: 'CrmNewDashboard', color: 'var(--ds-icon-primary-purple)' },
  { id: 'reports', label: 'Reports', iconName: 'CrmNewReport', color: 'var(--ds-icon-primary-pink)' },
  { id: 'my-requests', label: 'My Requests', iconName: 'CrmNewworkqueue', color: 'var(--ds-icon-primary-green)' },
  { id: 'agents', label: 'Agents', iconName: 'CrmZiaNewAgent', color: 'var(--ds-icon-primary-orange-yellow)' },
  { id: 'mcp', label: 'MCP', iconName: 'CrmCpq', color: 'var(--ds-icon-primary-greenish-cyan)' },
];

// Only these supplied assets animate; all other navigation icons stay static.
const ANIMATED_ICONS = {
  home: { iconName: 'CrmNewhome', svg: homeSvg, bind: animateHome },
  workqueue: { iconName: 'CrmNewworkqueue', svg: workqueueSvg, bind: animateWorkqueue },
  reports: { iconName: 'CrmNewReport', svg: reportsSvg, bind: animateReports },
  agents: { iconName: 'CrmZiaNewAgent', svg: agentsSvg, bind: animateAgents },
  mcp: { iconName: 'CrmCpq', svg: mcpSvg, bind: animateMCP },
};

function animatedIconFor(item) {
  const asset = ANIMATED_ICONS[item.id];
  return asset?.iconName === item.iconName ? asset : undefined;
}

const DEFAULT_MODULES = [
  { id: 'contacts',   label: 'Contacts',   icon: ModuleContacts },
  { id: 'leads',      label: 'Leads',      icon: ModuleLeads },
  { id: 'deals',      label: 'Deals',      icon: ModuleDeals },
  { id: 'accounts',   label: 'Accounts',   icon: ModuleAccounts },
  { id: 'forecasts',  label: 'Forecasts',  icon: ModuleForecasts },
  { id: 'solutions',  label: 'Solutions',  icon: ModuleSolutions },
  { id: 'products',   label: 'Products',   icon: ModuleProducts },
  { id: 'case-study', label: 'Case Study', icon: ModuleCases },
  {
    id: 'activity', label: 'Activity', type: 'folder',
    children: [
      { id: 'calls',    label: 'Calls',    icon: ModuleActivities },
      { id: 'meetings', label: 'Meetings', icon: ModuleMeeting },
      { id: 'tasks',    label: 'Tasks',    icon: ModuleMyJobs },
    ],
  },
  { id: 'inventory', label: 'Inventory', type: 'folder', children: [] },
  { id: 'demo-request',           label: 'Demo Request',           icon: ModuleCustom },
  { id: 'expanse-tracking',       label: 'Expanse Tracking',       icon: ModuleCustom },
  { id: 'social-media-strategy',  label: 'Social Media Strategy',  icon: ModuleSocial },
  { id: 'influencer-outreach',    label: 'Influencer Outreach',    icon: ModuleCustom },
  { id: 'budget-allocation',      label: 'Budget Allocation S...',  icon: ModuleCustom },
  { id: 'brand-voice',            label: 'Brand Voice and Gui...', icon: ModuleDocs },
  { id: 'projects',               label: 'Projects',               type: 'folder', children: [] },
  { id: 'cliq-channels',          label: 'Cliq Channels',          type: 'folder', children: [] },
  { id: 'bugs-ideas',             label: 'Bugs and Ideas',         icon: ModuleCustom },
  { id: 'strategy-presentation',  label: 'Strategy Presentation',  icon: ModuleDocs },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function NextGenLeftMenu({
  appName = 'Zoho CRM',
  teamspaceName = 'CRM Teamspace',
  topNavItems,
  modules = DEFAULT_MODULES,
  activeId,
  onItemClick,
  defaultOpenFolders = ['activity'],
  width = 240,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
}) {
  const navigationRef = useRef(null);
  useEffect(() => {
    const disposers = [...navigationRef.current.querySelectorAll('[data-nglm-animation]')].map(host => {
      const svg = host.querySelector('svg');
      const trigger = host.closest('button');
      return ANIMATED_ICONS[host.dataset.nglmAnimation].bind(trigger, svg);
    });
    return () => disposers.forEach(dispose => dispose());
  });

  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const collapsed = controlledCollapsed ?? internalCollapsed;
  const navigationItems = topNavItems ?? DEFAULT_TOP_NAV;
  const toggleCollapsed = () => {
    if (controlledCollapsed === undefined) setInternalCollapsed(!collapsed);
    onCollapsedChange?.(!collapsed);
  };
  const [openFolders, setOpenFolders] = useState(() => new Set(defaultOpenFolders));
  const [search, setSearch] = useState('');

  const toggleFolder = (id) => {
    setOpenFolders(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const q = search.toLowerCase();
  const filterModules = (items) => {
    if (!q) return items;
    return items.reduce((acc, item) => {
      if (item.type === 'folder') {
        const kids = (item.children || []).filter(c => c.label.toLowerCase().includes(q));
        if (kids.length || item.label.toLowerCase().includes(q)) {
          acc.push({ ...item, children: kids });
        }
      } else if (item.label.toLowerCase().includes(q)) {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  const visibleModules = filterModules(modules);

  const renderItem = (item) => {
    const IconComp = item.icon;
    const isActive = activeId === item.id;
    return (
      <div key={item.id} style={{ display: 'block', width: '100%' }}>
        <button
          type="button"
          className={`nglm-item nglm-module-item${isActive ? ' nglm-active' : ''}`}
          onClick={() => onItemClick?.(item.id)}
        >
          {IconComp && <span className="nglm-item-icon"><IconComp /></span>}
          <span className="nglm-item-label">{item.label}</span>
          <button
            type="button"
            className="nglm-item-action"
            aria-label={`More options for ${item.label}`}
            onClick={e => { e.stopPropagation(); }}
          >
            <More />
          </button>
        </button>
      </div>
    );
  };

  const renderFolder = (item) => {
    const isOpen = openFolders.has(item.id) || (q && (item.children || []).length > 0);
    const hasChildren = (item.children || []).length > 0;
    return (
      <div key={item.id} className="nglm-folder">
        <div style={{ display: 'block', width: '100%' }}>
          <button
            type="button"
            className="nglm-item nglm-module-item nglm-folder-trigger"
            onClick={() => toggleFolder(item.id)}
          >
            <span className="nglm-item-icon nglm-folder-icon"><Folder /></span>
            <span className="nglm-item-label">{item.label}</span>
            <button
              type="button"
              className="nglm-item-action"
              aria-label={`More options for ${item.label}`}
              onClick={e => { e.stopPropagation(); }}
            >
              <More />
            </button>
            <span className="nglm-folder-chevron">
              {isOpen ? <ChevronUp /> : <ChevronDownFilled />}
            </span>
          </button>
        </div>
        {isOpen && hasChildren && (
          <div className="nglm-folder-children">
            {(item.children || []).map(child => renderItem(child))}
          </div>
        )}
      </div>
    );
  };

  if (collapsed) {
    return (
      <nav ref={navigationRef} className="nglm-root nglm-root--collapsed" aria-label={`${appName} navigation`}>
        <div className="nglm-compact-items">
          {navigationItems.map(item => {
            const IconComp = item.icon;
            return (
              <div key={item.id} style={{ display: 'block', width: '100%' }}>
                <button
                  type="button"
                  className={`nglm-compact-item${activeId === item.id ? ' nglm-active' : ''}`}
                  aria-current={activeId === item.id ? 'page' : undefined}
                  onClick={() => onItemClick?.(item.id)}
                >
                  <span className="nglm-item-icon" style={{ color: item.color }}>
                    {animatedIconFor(item) ? (
                      <span className="nglm-animated-icon" data-nglm-animation={item.id} aria-hidden="true" dangerouslySetInnerHTML={{ __html: animatedIconFor(item).svg }} />
                    ) : item.iconName ? <Icon name={item.iconName} size={16} /> : IconComp && <IconComp />}
                  </span>
                  <span>{item.label}</span>
                </button>
              </div>
            );
          })}
        </div>
        <button type="button" className="nglm-icon-btn nglm-expand-btn" aria-label="Expand sidebar" aria-expanded={false} onClick={toggleCollapsed}>
          <SidebarCollapse />
        </button>
      </nav>
    );
  }

  return (
    <nav ref={navigationRef} className="nglm-root" aria-label={`${appName} navigation`} style={{ width: typeof width === 'number' ? `${width}px` : width }}>
      {/* App header */}
      <div className="nglm-header">
        <div className="nglm-app-badge">Z</div>
        <span className="nglm-app-name">{appName}</span>
        <ChevronDownFilled className="nglm-header-chevron" />
        <button type="button" className="nglm-icon-btn" aria-label="Collapse sidebar" aria-expanded={true} onClick={toggleCollapsed}>
          <SidebarCollapse />
        </button>
      </div>

      {/* Top navigation */}
      <div className="nglm-top-nav">
        {navigationItems.map(item => {
          const IconComp = item.icon;
          const isActive = activeId === item.id;
          return (
            <div key={item.id} style={{ display: 'block', width: '100%' }}>
              <button
                type="button"
                className={`nglm-item${isActive ? ' nglm-active' : ''}`}
                onClick={() => onItemClick?.(item.id)}
              >
                <span className="nglm-item-icon" style={{ color: item.color }}>
                  {animatedIconFor(item) ? (
                    <span className="nglm-animated-icon" data-nglm-animation={item.id} aria-hidden="true" dangerouslySetInnerHTML={{ __html: animatedIconFor(item).svg }} />
                  ) : item.iconName ? <Icon name={item.iconName} size={16} /> : IconComp && <IconComp />}
                </span>
                <span className="nglm-item-label">{item.label}</span>
                <button
                  type="button"
                  className="nglm-item-action"
                  aria-label={`Add to ${item.label}`}
                  onClick={e => { e.stopPropagation(); }}
                >
                  <PlusIcon />
                </button>
              </button>
            </div>
          );
        })}
      </div>

      {/* Teamspace row */}
      <div className="nglm-teamspace">
        <div className="nglm-ts-badge">C</div>
        <span className="nglm-ts-name">{teamspaceName}</span>
        <ChevronDownFilled className="nglm-ts-chevron" />
        <button type="button" className="nglm-icon-btn nglm-ts-more" aria-label="More options">
          <More />
        </button>
      </div>

      {/* Module section */}
      <div className="nglm-modules">
        <div className="nglm-search-wrap">
          <span className="nglm-search-icon"><Search /></span>
          <input
            className="nglm-search-input"
            placeholder="Search Modules"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="nglm-module-list">
          {visibleModules.map(item =>
            item.type === 'folder' ? renderFolder(item) : renderItem(item)
          )}
        </div>
      </div>
    </nav>
  );
}

export default NextGenLeftMenu;
