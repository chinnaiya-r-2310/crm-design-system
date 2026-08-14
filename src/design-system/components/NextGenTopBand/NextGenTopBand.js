import './NextGenTopBand.css';
import {
  Search, ChevronDownFilled,
  Bell, CalendarIcon, Settings, BentoMenu, ZiaAI, AppMarket,
} from '../../foundations/icons/Icons';

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2V12M12 7H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function NextGenTopBand({
  moduleLabel = 'Leads',
  moduleCount,
  searchPlaceholder = 'Search...',
  territory = 'All Territories',
  notificationCount,
  userInitials = 'C',
  userAvatarSrc,
  onModuleClick,
  onSearch,
  onTerritoryClick,
  onAddNew,
  onNotification,
  onCalendar,
  onSettings,
  onApps,
  onZia,
  onBento,
  onUserClick,
}) {
  return (
    <div className="ngtb-root">
      <div className="ngtb-left">
        <button type="button" className="ngtb-module-btn" onClick={onModuleClick}>
          {moduleLabel}
          {moduleCount != null && (
            <span className="ngtb-count-badge">{moduleCount}</span>
          )}
          <span className="ngtb-module-chevron"><ChevronDownFilled /></span>
        </button>

        <div className="ngtb-divider" />

        <div className="ngtb-search">
          <Search width={13} height={13} />
          <input
            className="ngtb-search-input"
            placeholder={searchPlaceholder}
            onChange={e => onSearch?.(e.target.value)}
          />
        </div>

        <div className="ngtb-divider" />

        <button type="button" className="ngtb-territory-btn" onClick={onTerritoryClick}>
          {territory}
          <span style={{ color: '#A8AEBE', display: 'flex' }}><ChevronDownFilled /></span>
        </button>
      </div>

      <div className="ngtb-right">
        <button type="button" className="ngtb-add-btn" aria-label="Add new" onClick={onAddNew}>
          <PlusIcon />
        </button>

        <button type="button" className="ngtb-icon-btn" aria-label="Zia AI" onClick={onZia}>
          <ZiaAI width={18} height={17} />
        </button>

        <button type="button" className="ngtb-icon-btn" aria-label="Notifications" onClick={onNotification} style={{ position: 'relative' }}>
          <Bell width={16} height={16} />
          {notificationCount != null && (
            <span className="ngtb-badge">{notificationCount}</span>
          )}
        </button>

        <button type="button" className="ngtb-icon-btn" aria-label="Meetings" onClick={onCalendar}>
          <CalendarIcon width={16} height={16} />
        </button>

        <button type="button" className="ngtb-icon-btn" aria-label="Apps" onClick={onApps}>
          <AppMarket width={16} height={15} />
        </button>

        <button type="button" className="ngtb-icon-btn" aria-label="Settings" onClick={onSettings}>
          <Settings width={16} height={16} />
        </button>

        <div className="ngtb-divider" />

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

        <button type="button" className="ngtb-icon-btn" aria-label="All apps" onClick={onBento}>
          <BentoMenu width={16} height={16} />
        </button>
      </div>
    </div>
  );
}

export default NextGenTopBand;
