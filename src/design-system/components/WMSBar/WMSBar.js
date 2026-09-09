import { useState } from 'react';
import './WMSBar.css';
import { Icon } from '../Icon/Icon';

const TABS = [
  { id: 'chats',    label: 'Chats',    icon: 'WmsChat' },
  { id: 'channels', label: 'Channels', icon: 'WmsChannel' },
  { id: 'contacts', label: 'Contacts', icon: 'WmsUsers' },
];

export function WMSBar({
  chatPlaceholder = 'Here is your Smart chat',
  shortcut = 'Ctrl+Space',
  defaultTab = 'chats',
  activeTab: controlledTab,
  onTabChange,
  onChatClick,
  onMotivator,
  onAlarmClock,
  onZia,
  onNotes,
  onComment,
  onAnnouncement,
}) {
  const [internalTab, setInternalTab] = useState(defaultTab);
  const activeTab = controlledTab ?? internalTab;

  const handleTab = (id) => {
    setInternalTab(id);
    onTabChange?.(id);
  };

  return (
    <div className="wmsb-root">

      {/* ── Left: Chats / Channels / Contacts tabs ── */}
      <div className="wmsb-tabs">
        {TABS.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            className={`wmsb-tab${activeTab === id ? ' wmsb-tab-active' : ''}`}
            onClick={() => handleTab(id)}
          >
            <span className="wmsb-tab-icon-wrap">
              <Icon name={icon} size={14} />
              {id === 'chats' && <span className="wmsb-badge" />}
            </span>
            <span className="wmsb-tab-label" data-label={label}>{label}</span>
          </button>
        ))}
      </div>

      {/* ── Center: smart chat input ── */}
      <button type="button" className="wmsb-chat" onClick={onChatClick}>
        <span className="wmsb-chat-text">{chatPlaceholder}</span>
        {shortcut && <kbd className="wmsb-kbd">({shortcut})</kbd>}
      </button>

      {/* ── Right: quick-access icons ── */}
      <div className="wmsb-icons">
        <button type="button" className="wmsb-icon-btn" aria-label="Motivator" onClick={onMotivator}>
          <Icon name="WmsMotivator" size={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Reminder" onClick={onAlarmClock}>
          <Icon name="WmsReminder" size={15} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Zia" onClick={onZia}>
          <Icon name="WmsZia" size={15} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Notes" onClick={onNotes}>
          <Icon name="WmsNotes" size={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Comments" onClick={onComment}>
          <Icon name="WmsComment" size={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Announcements" onClick={onAnnouncement}>
          <Icon name="WmsAnnouncements" size={14} />
        </button>
      </div>

    </div>
  );
}

export default WMSBar;
