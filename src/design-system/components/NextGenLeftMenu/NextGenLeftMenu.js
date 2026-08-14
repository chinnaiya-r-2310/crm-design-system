import { useState } from 'react';
import './NextGenLeftMenu.css';
import {
  Search, More, ChevronDownFilled, ChevronUp, Folder, SidebarCollapse,
  ModuleHome, ModuleAnalytics, ModuleReports, ModuleMyJobs,
  ModuleContacts, ModuleLeads, ModuleDeals, ModuleAccounts,
  ModuleForecasts, ModuleSolutions, ModuleProducts, ModuleCases,
  ModuleActivities, ModuleMeeting, ModuleDocs, ModuleSocial, ModuleCustom,
} from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Default data
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_TOP_NAV = [
  { id: 'home',        label: 'Home',        icon: ModuleHome },
  { id: 'analytics',  label: 'Analytics',   icon: ModuleAnalytics },
  { id: 'reports',    label: 'Reports',     icon: ModuleReports },
  { id: 'my-requests',label: 'My Requests', icon: ModuleMyJobs },
];

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
  topNavItems = DEFAULT_TOP_NAV,
  modules = DEFAULT_MODULES,
  activeId,
  onItemClick,
  defaultOpenFolders = ['activity'],
}) {
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
      <button
        key={item.id}
        type="button"
        className={`nglm-item${isActive ? ' nglm-active' : ''}`}
        onClick={() => onItemClick?.(item.id)}
      >
        {IconComp && <span className="nglm-item-icon"><IconComp /></span>}
        <span className="nglm-item-label">{item.label}</span>
      </button>
    );
  };

  const renderFolder = (item) => {
    const isOpen = openFolders.has(item.id) || (q && (item.children || []).length > 0);
    const hasChildren = (item.children || []).length > 0;
    return (
      <div key={item.id} className="nglm-folder">
        <button
          type="button"
          className="nglm-item nglm-folder-trigger"
          onClick={() => toggleFolder(item.id)}
        >
          <span className="nglm-item-icon nglm-folder-icon"><Folder /></span>
          <span className="nglm-item-label">{item.label}</span>
          <span className="nglm-folder-chevron">
            {isOpen ? <ChevronUp /> : <ChevronDownFilled />}
          </span>
        </button>
        {isOpen && hasChildren && (
          <div className="nglm-folder-children">
            {(item.children || []).map(child => renderItem(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="nglm-root">
      {/* App header */}
      <div className="nglm-header">
        <div className="nglm-app-badge">Z</div>
        <span className="nglm-app-name">{appName}</span>
        <ChevronDownFilled className="nglm-header-chevron" />
        <button type="button" className="nglm-icon-btn" aria-label="Collapse sidebar">
          <SidebarCollapse />
        </button>
      </div>

      {/* Top navigation */}
      <div className="nglm-top-nav">
        {topNavItems.map(item => {
          const IconComp = item.icon;
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`nglm-item${isActive ? ' nglm-active' : ''}`}
              onClick={() => onItemClick?.(item.id)}
            >
              {IconComp && <span className="nglm-item-icon"><IconComp /></span>}
              <span className="nglm-item-label">{item.label}</span>
            </button>
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
