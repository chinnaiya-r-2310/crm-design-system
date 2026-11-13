import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { Dropdown } from '../components/Dropdown/Dropdown';
import './UsageRecipientDialog.css';

// Local preview directory; replace with CRM directory records when an API is available.
const USERS = [
  { id: 'esther', name: 'Esther Howard', email: 'nevaeh.simmons@example.com' },
  { id: 'jacob', name: 'Jacob Jones', email: 'tim.jennings@example.com' },
  { id: 'albert', name: 'Albert Flores', email: 'nathan.roberts@example.com' },
  { id: 'divakar', name: 'Divakar Ganapathy', email: 'divakar.ganapathy@example.com' },
  { id: 'marvin', name: 'Marvin McKinney', email: 'michael.mitc@example.com' },
  { id: 'louisa', name: 'Louisa Grand', email: 'louisa.grand@example.com' },
  { id: 'darlene', name: 'Darlene Robertson', email: 'darlene.robertson@example.com' },
  { id: 'prakash', name: 'Prakash Sekar', email: 'prakash.sekar@example.com' },
  { id: 'cisco', name: 'Cisco Webex Teams', email: 'cisco.webex@example.com' },
  { id: 'wade', name: 'Wade Warren', email: 'wade.warren@example.com' },
  { id: 'devon', name: 'Devon Lane', email: 'devon.lane@example.com' },
  { id: 'arlene', name: 'Arlene McCoy', email: 'arlene.mccoy@example.com' },
  { id: 'floyd', name: 'Floyd Miles', email: 'floyd.miles@example.com' },
  { id: 'guy', name: 'Guy Hawkins', email: 'guy.hawkins@example.com' },
  { id: 'theresa', name: 'Theresa Webb', email: 'theresa.webb@example.com' },
];
const GROUPS = [
  { id: 'visual', name: 'Visual Design', members: ['prakash', 'divakar', 'cisco', 'wade', 'devon', 'arlene', 'floyd'] },
  { id: 'product', name: 'Product Management', members: ['marvin', 'floyd', 'guy', 'theresa'] },
];
export type UsageRecipient = { value: string; label: string; kind: 'user' | 'group' };
const initials = (name: string) => name.split(' ').slice(0, 2).map(part => part[0]).join('');

export function UsageRecipientDialog({ value, onSave, onClose }: {
  value: UsageRecipient[];
  onSave: (value: UsageRecipient[]) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState(value);
  const [category, setCategory] = useState('users');
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState({ users: false, groups: false });
  const selectedUsers = draft.filter(item => item.kind === 'user');
  const selectedGroups = draft.filter(item => item.kind === 'group');
  const toggle = (item: UsageRecipient) => setDraft(current => current.some(selected => selected.value === item.value)
    ? current.filter(selected => selected.value !== item.value) : [...current, item]);
  const remove = (id: string) => setDraft(current => current.filter(item => item.value !== id));
  const options = category === 'users'
    ? USERS.map(user => ({ value: `user:${user.id}`, label: user.name, detail: user.email, kind: 'user' as const }))
    : GROUPS.map(group => ({ value: `group:${group.id}`, label: group.name, detail: `${group.members.length} users`, kind: 'group' as const }));
  const filtered = options.filter(item => `${item.label} ${item.detail}`.toLowerCase().includes(query.trim().toLowerCase()));
  const chip = (id: string, label: string, removable = false) => <span className="usage-recipient-chip" key={id}>
    <span className="usage-recipient-avatar" aria-hidden="true">{initials(label)}</span>{label}
    {removable && <button type="button" aria-label={`Remove ${label}`} onClick={() => remove(id)}>×</button>}
  </span>;

  return <Modal isOpen title="Select Users" width={1088} className="usage-recipient-modal"
    onClose={onClose} onCancel={onClose} onSave={() => onSave(draft)} cancelLabel="Cancel" saveLabel="Save">
    <div className="usage-recipient-picker">
      <section className="usage-recipient-directory" aria-label="Recipient directory">
        <div className="usage-recipient-search-row">
          <Dropdown layout="vertical" width={100} triggerAriaLabel="Recipient type" value={category}
            options={[{ value: 'users', label: 'Users' }, { value: 'groups', label: 'Groups' }]}
            onChange={(next: string) => { setCategory(next); setQuery(''); }} />
          <label className="usage-recipient-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" /><path d="m10 10 4 4" stroke="currentColor" /></svg>
            <input type="search" aria-label="Search recipients" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />
          </label>
        </div>
        <div className="usage-recipient-results">
          {filtered.map(item => <button type="button" className="usage-recipient-result" key={item.value}
            aria-pressed={draft.some(selected => selected.value === item.value)} onClick={() => toggle(item)}>
            <span className="usage-recipient-avatar" aria-hidden="true">{initials(item.label)}</span>
            <span className="usage-recipient-person"><span>{item.label}</span><span>{item.detail}</span></span>
            {draft.some(selected => selected.value === item.value) && <span aria-hidden="true">✓</span>}
          </button>)}
          {!filtered.length && <p className="usage-recipient-empty">No recipients found</p>}
        </div>
      </section>
      <section className="usage-recipient-selections" aria-label="Selected recipients" aria-live="polite">
        <div className="usage-recipient-section">
          <button type="button" className="usage-recipient-section-heading" aria-expanded={!collapsed.users}
            onClick={() => setCollapsed(current => ({ ...current, users: !current.users }))}>
            Users - {selectedUsers.length}<span aria-hidden="true">{collapsed.users ? '⌄' : '⌃'}</span>
          </button>
          {!collapsed.users && <div className="usage-recipient-chips">
            {selectedUsers.map(user => chip(user.value, user.label, true))}
            {!selectedUsers.length && <span className="usage-recipient-empty">Select users from the list</span>}
          </div>}
        </div>
        <div className="usage-recipient-section">
          <button type="button" className="usage-recipient-section-heading" aria-expanded={!collapsed.groups}
            onClick={() => setCollapsed(current => ({ ...current, groups: !current.groups }))}>
            Groups{selectedGroups.length ? ` - ${selectedGroups.length}` : ''}<span aria-hidden="true">{collapsed.groups ? '⌄' : '⌃'}</span>
          </button>
          {!collapsed.groups && <div className="usage-recipient-groups">
            {selectedGroups.map(selection => {
              const group = GROUPS.find(item => `group:${item.id}` === selection.value)!;
              return <div key={group.id} className="usage-recipient-group">
                <div className="usage-recipient-group-heading">{group.name} - {group.members.length}
                  <button type="button" aria-label={`Remove ${group.name}`} onClick={() => remove(selection.value)}>×</button>
                </div>
                <div className="usage-recipient-chips">{group.members.map(id => {
                  const user = USERS.find(item => item.id === id)!;
                  return chip(id, user.name);
                })}</div>
              </div>;
            })}
            {!selectedGroups.length && <span className="usage-recipient-empty">Select groups from the list</span>}
          </div>}
        </div>
      </section>
    </div>
  </Modal>;
}
