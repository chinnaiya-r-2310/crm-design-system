import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './NextGenTopBand.css';
import {
  Search, Bell, CalendarIcon, AppMarket, Settings, ZiaAI, BentoMenu,
} from '../../foundations/icons/Icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { Tooltip } from '../Tooltip/Tooltip';

const RECENT_ITEMS = [
  { label: 'E A I Electronic Assocs Inc', module: 'Accounts' },
  { label: '345678 nm,', module: 'Contact' },
  { label: 'J Walling', module: 'Contact' },
  { label: 'Mr. hhh prakash', module: 'Leads' },
  { label: 'Dinesh Chinnasamy', module: 'Leads' },
];

const DEFAULT_TERRITORIES = [
  'All Territories',
  'North America',
  'Europe',
  'Asia Pacific',
  'Latin America',
  'Middle East & Africa',
];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2V12M12 7H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function NextGenTopBand({
  moduleLabel = 'Leads',
  searchPlaceholder = 'Search',
  territories = DEFAULT_TERRITORIES,
  defaultTerritory = 'All Territories',
  showTerritory = true,
  notificationCount,
  userInitials = 'C',
  userAvatarSrc,
  onModuleClick,
  onSearch,
  onTerritoryChange,
  onAddNew,
  onNotification,
  onCalendar,
  onEmoji,
  onSettings,
  onZia,
  onBento,
  onUserClick,
}) {
  const [selectedTerritory, setSelectedTerritory] = useState(defaultTerritory);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchAnim, setSearchAnim] = useState(null);
  const searchRef = useRef(null);
  const modalInputRef = useRef(null);

  const territoryOptions = territories.map(t => ({ value: t, label: t }));

  const handleTerritoryChange = (val) => {
    setSelectedTerritory(val);
    onTerritoryChange?.(val);
  };

  const openSearch = useCallback(() => {
    if (searchRef.current) {
      const r = searchRef.current.getBoundingClientRect();
      // input wrap sits at: modal top (3px) + modal padding (10px) = 13px from viewport top
      // input wrap width: 950 - 10*2 = 930px, centered
      const inputWrapTop = 13;
      const inputWrapWidth = 930;
      const inputWrapCenterX = window.innerWidth / 2;
      const searchCenterX = r.left + r.width / 2;
      setSearchAnim({
        dx: searchCenterX - inputWrapCenterX,
        dy: r.top - inputWrapTop,
        sx: r.width / inputWrapWidth,
      });
    }
    setSearchOpen(true);
    setSearchQuery('');
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery('');
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => modalInputRef.current?.focus(), 0);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => { if (e.key === 'Escape') closeSearch(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [searchOpen, closeSearch]);

  return (
    <div className="ngtb-root">
      <div className="ngtb-left">
        <button type="button" className="ngtb-module-btn" onClick={onModuleClick}>
          {moduleLabel}
        </button>

        {showTerritory && <div className="ngtb-territory-wrap">
          <Dropdown
            options={territoryOptions}
            value={selectedTerritory}
            onChange={handleTerritoryChange}
            width="fit-content"
            panelStyle={(pos) => ({ width: 'auto', minWidth: `${pos.width}px`, maxWidth: '390px' })}
          />
        </div>}
      </div>

      <div className="ngtb-right">
        <button
          ref={searchRef}
          type="button"
          className="ngtb-search"
          onClick={openSearch}
          aria-label="Open search"
        >
          <Search width={12} height={12} />
          <span className="ngtb-search-placeholder">Search</span>
        </button>

        {searchOpen && createPortal(
          <div className="ngtb-search-overlay" onMouseDown={closeSearch}>
            <div
                className="ngtb-search-modal"
                onMouseDown={e => e.stopPropagation()}
              >
              <div
                className="ngtb-search-modal-input-wrap"
                style={searchAnim ? {
                  '--ngtb-dx': `${searchAnim.dx}px`,
                  '--ngtb-dy': `${searchAnim.dy}px`,
                  '--ngtb-sx': searchAnim.sx,
                } : undefined}
              >
                <div className="ngtb-search-modal-input-row">
                  <Search width={14} height={14} />
                  <input
                    ref={modalInputRef}
                    className="ngtb-search-modal-input"
                    placeholder="Press # for specific search"
                    value={searchQuery}
                    onChange={e => { setSearchQuery(e.target.value); onSearch?.(e.target.value); }}
                  />
                </div>
              </div>
              <div className="ngtb-search-modal-body">
                <div className="ngtb-search-section-title">Search History</div>
                {RECENT_ITEMS.map((item, i) => (
                  <div key={i} className="ngtb-search-item">
                    <span className="ngtb-search-item-label">{item.label}</span>
                    <span className="ngtb-search-item-module">{item.module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}

        <Tooltip content="Create New" placement="bottom">
          <button type="button" className="ngtb-add-btn" aria-label="Add new" onClick={onAddNew}>
            <PlusIcon />
          </button>
        </Tooltip>

        <Tooltip content="Notifications" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="Notifications" onClick={onNotification}>
            <Bell width={18} height={18} />
            {notificationCount != null && (
              <span className="ngtb-badge">{notificationCount}</span>
            )}
          </button>
        </Tooltip>

        <Tooltip content="Calendar" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="Calendar" onClick={onCalendar}>
            <CalendarIcon width={18} height={18} />
          </button>
        </Tooltip>

        <Tooltip content="Marketplace" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="Marketplace" onClick={onEmoji}>
            <AppMarket width={18} height={18} />
          </button>
        </Tooltip>

        <Tooltip content="Setup" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="Settings" onClick={onSettings}>
            <Settings width={18} height={18} />
          </button>
        </Tooltip>

        <Tooltip content="Ask Zia" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="Zia AI" onClick={onZia}>
            <ZiaAI width={20} height={19} />
          </button>
        </Tooltip>

        <Tooltip content="Profile" placement="bottom">
          <button
            type="button"
            className="ngtb-avatar"
            aria-label="User profile"
            onClick={onUserClick}
          >
            {userAvatarSrc
              ? <img src={userAvatarSrc} alt="User" />
              : userInitials}
          </button>
        </Tooltip>

        <Tooltip content="All Apps" placement="bottom">
          <button type="button" className="ngtb-icon-btn" aria-label="All apps" onClick={onBento}>
            <BentoMenu width={16} height={16} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default NextGenTopBand;
