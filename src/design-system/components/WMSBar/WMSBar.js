import './WMSBar.css';
import { Motivator, AlarmClock, Zia, File, Comment, Announcement } from '../../foundations/icons/Icons';

function ChatDotsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 3H3.5C2.39543 3 1.5 3.89543 1.5 5V8C1.5 8.99 2.17 9.82 3.09 10.01C3.26 10.05 3.38 10.21 3.38 10.39V12L5.57 10.09C5.77 9.91 6.02 9.82 6.28 9.82H10.5C11.6046 9.82 12.5 8.92457 12.5 7.82V5C12.5 3.89543 11.6046 3 10.5 3ZM4.5 6.67C4.5 6.97 4.25 7.22 3.95 7.22C3.65 7.22 3.4 6.97 3.4 6.67C3.4 6.37 3.65 6.12 3.95 6.12C4.25 6.12 4.5 6.37 4.5 6.67ZM7.05 6.67C7.05 6.97 6.8 7.22 6.5 7.22C6.2 7.22 5.95 6.97 5.95 6.67C5.95 6.37 6.2 6.12 6.5 6.12C6.8 6.12 7.05 6.37 7.05 6.67ZM9.6 6.67C9.6 6.97 9.35 7.22 9.05 7.22C8.75 7.22 8.5 6.97 8.5 6.67C8.5 6.37 8.75 6.12 9.05 6.12C9.35 6.12 9.6 6.37 9.6 6.67Z" fill="currentColor"/>
    </svg>
  );
}

export function WMSBar({
  chatPlaceholder = 'Here is your Smart chat',
  shortcut = 'Ctrl+Space',
  onChatClick,
  onMotivator,
  onAlarmClock,
  onZia,
  onFile,
  onComment,
  onAnnouncement,
}) {
  return (
    <div className="wmsb-root">
      <button type="button" className="wmsb-chat" onClick={onChatClick}>
        <span className="wmsb-chat-icon"><ChatDotsIcon /></span>
        <span className="wmsb-chat-text">{chatPlaceholder}</span>
        {shortcut && <kbd className="wmsb-kbd">{shortcut}</kbd>}
      </button>

      <div className="wmsb-icons">
        <button type="button" className="wmsb-icon-btn" aria-label="Motivator" onClick={onMotivator}>
          <Motivator width={14} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Alarm clock" onClick={onAlarmClock}>
          <AlarmClock width={14} height={14} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Zia AI" onClick={onZia}>
          <Zia width={15} height={12} />
        </button>
        <button type="button" className="wmsb-icon-btn" aria-label="Files" onClick={onFile}>
          <File width={12} height={14} />
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
