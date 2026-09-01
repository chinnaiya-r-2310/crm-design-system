import { useState } from 'react';
import './WMSBar.css';
import {
  Motivator, AlarmClock, Zia, WmsNotes, Comment, Announcement,
  WmsChat, WmsChannel, WmsUsers,
} from '../../foundations/icons/Icons';

const TABS = [
  { id: 'chats',    label: 'Chats',    Icon: WmsChat },
  { id: 'channels', label: 'Channels', Icon: WmsChannel },
  { id: 'contacts', label: 'Contacts', Icon: WmsUsers },
];

export function WMSBar({
  chatPlaceholder = 'Here is your Smart chat',
  shortcut = 'Ctrl+Space',
  defaultTab = 'chats',
  activeTab: controlledTab,
  chatBadge = false,
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
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className={`wmsb-tab${activeTab === id ? ' wmsb-tab-active' : ''}`}
            onClick={() => handleTab(id)}
          >
            <span className="wmsb-tab-icon-wrap">
              <Icon width={14} height={14} />
              {id === 'chats' && chatBadge && <span className="wmsb-badge" />}
            </span>
            <span className="wmsb-tab-label">{label}</span>
          </button>
        ))}
      </div>

      {/* ── Separator ── */}
      <div className="wmsb-sep" />

      {/* ── Center: smart chat input ── */}
      <button type="button" className="wmsb-chat" onClick={onChatClick}>
        <span className="wmsb-chat-text">{chatPlaceholder}</span>
        {shortcut && <kbd className="wmsb-kbd">({shortcut})</kbd>}
      </button>

      {/* ── Right: quick-access icons ── */}
      <div className="wmsb-icons">
        <button type="button" className="wmsb-icon-btn" aria-label="Motivator" onClick={onMotivator}>
          <Motivator width={14} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Reminder" onClick={onAlarmClock}>
          <AlarmClock width={15} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Zia" onClick={onZia}>
          <Zia width={15} height={12} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Notes" onClick={onNotes}>
          <WmsNotes width={12} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Comments" onClick={onComment}>
          <Comment width={14} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Announcements" onClick={onAnnouncement}>
          <Announcement width={12} height={15} />
        </button>
      </div>

    </div>
  );
}

export default WMSBar;
