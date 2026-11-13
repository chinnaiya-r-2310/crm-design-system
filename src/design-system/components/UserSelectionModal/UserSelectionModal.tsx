import { useId, useRef, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Dropdown } from '../Dropdown/Dropdown';
import { Tags } from '../Tags/Tags';
import './UserSelectionModal.css';

export type UserSelectionKind = 'user' | 'group' | 'role' | 'role-and-subordinates' | 'email';
export type UserSelection = { value: string; label: string; kind: UserSelectionKind };
export type UserSelectionOption = UserSelection & { detail?: string; members?: UserSelection[] };
export interface UserSelectionModalProps {
  value: UserSelection[];
  options: UserSelectionOption[];
  onSave: (value: UserSelection[]) => void;
  onClose: () => void;
  title?: string;
  allowAdditionalEmails?: boolean;
  maxSelections?: number;
}

const CATEGORIES = [
  { value: 'user', label: 'Users' },
  { value: 'group', label: 'Groups' },
  { value: 'role', label: 'Roles' },
  { value: 'role-and-subordinates', label: 'Roles and Subordinates' },
] as const;
const initials = (name: string) => name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('');

/** Mount on open so Cancel discards the draft and reopening starts from the saved value. */
export function UserSelectionModal({ value, options, onSave, onClose, title = 'Select Users',
  allowAdditionalEmails = false, maxSelections }: UserSelectionModalProps) {
  const [draft, setDraft] = useState(() => [...value]);
  const [category, setCategory] = useState('user');
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [limitError, setLimitError] = useState('');
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const emailId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const atLimit = maxSelections !== undefined && draft.length >= maxSelections;
  const remove = (id: string) => {
    setDraft(current => current.filter(item => item.value !== id));
    setLimitError('');
  };
  const toggle = (item: UserSelection) => {
    if (draft.some(selected => selected.value === item.value)) { remove(item.value); return; }
    if (atLimit) { setLimitError(`Select up to ${maxSelections} recipients.`); return; }
    setDraft(current => [...current, { value: item.value, label: item.label, kind: item.kind }]);
    setLimitError('');
  };
  const addEmail = () => {
    const address = email.trim();
    if (!/^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(address)) {
      setEmailError('Enter a valid email address.'); return;
    }
    if (!draft.some(item => item.kind === 'email' && item.label.toLowerCase() === address.toLowerCase())) {
      if (atLimit) { setLimitError(`Select up to ${maxSelections} recipients.`); return; }
      setDraft(current => [...current, { value: `email:${address.toLowerCase()}`, label: address, kind: 'email' }]);
    }
    setEmail(''); setEmailError(''); setLimitError('');
  };
  const filtered = options.filter(item => item.kind === category &&
    `${item.label} ${item.detail ?? ''}`.toLowerCase().includes(query.trim().toLowerCase()));
  const chip = (item: UserSelection, removable = false) => <span className="user-selection-chip" key={item.value}>
    <span className="user-selection-avatar" aria-hidden="true">{initials(item.label)}</span>{item.label}
    {removable && <button type="button" aria-label={`Remove ${item.label}`} onClick={() => remove(item.value)}>×</button>}
  </span>;

  return <Modal isOpen title={title} width={1090} className="user-selection-modal"
    onClose={onClose} onCancel={onClose} onSave={() => {
      if (allowAdditionalEmails && email.trim()) {
        setEmailError('Press Enter or comma to add the email before saving.'); emailRef.current?.focus(); return;
      }
      if (maxSelections !== undefined && draft.length > maxSelections) {
        setLimitError(`Select up to ${maxSelections} recipients.`); return;
      }
      onSave(draft);
    }} cancelLabel="Cancel" saveLabel="Save">
    <div className="user-selection-picker">
      <section className="user-selection-directory" aria-label="Available recipients">
        <h3 className="user-selection-panel-heading">Available</h3>
        <div className="user-selection-search-row">
          <Dropdown layout="vertical" width={category === 'role-and-subordinates' ? 205 : 100}
            triggerAriaLabel="Recipient type" value={category} options={CATEGORIES.map(item => ({ ...item }))}
            onChange={(next: string) => { setCategory(next); setQuery(''); searchRef.current?.focus(); }} />
          <label className="user-selection-search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" /><path d="m10 10 4 4" stroke="currentColor" /></svg>
            <input ref={searchRef} type="search" aria-label="Search recipients" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />
          </label>
        </div>
        <div className="user-selection-results">
          {filtered.map(item => <button type="button" className="user-selection-result" key={item.value}
            aria-pressed={draft.some(selected => selected.value === item.value)} onClick={() => toggle(item)}>
            <span className="user-selection-avatar" aria-hidden="true">{initials(item.label)}</span>
            <span className="user-selection-person"><span>{item.label}</span>
              {(item.detail || item.members) && <span>{item.detail ?? `${item.members?.length} users`}</span>}
            </span>
            {draft.some(selected => selected.value === item.value) && <span aria-hidden="true">✓</span>}
          </button>)}
          {!filtered.length && <p className="user-selection-empty">No recipients found</p>}
        </div>
      </section>
      <section className="user-selection-selections" aria-label="Selected recipients">
        <h3 className="user-selection-panel-heading">Selected</h3>
        <div className="user-selection-selected-content" aria-live="polite">
          {CATEGORIES.map(({ value: kind, label }) => {
            const selected = draft.filter(item => item.kind === kind);
            const isCollapsed = collapsed.includes(kind);
            return <div className="user-selection-section" key={kind}>
              <button type="button" className="user-selection-section-heading" aria-expanded={!isCollapsed}
                onClick={() => setCollapsed(current => isCollapsed ? current.filter(item => item !== kind) : [...current, kind])}>
                {label} - {selected.length}<span aria-hidden="true">{isCollapsed ? '⌄' : '⌃'}</span>
              </button>
              {!isCollapsed && <div className="user-selection-chips">
                {selected.map(item => {
                  const members = options.find(option => option.value === item.value)?.members;
                  return members?.length ? <div className="user-selection-group" key={item.value}>
                    <div className="user-selection-group-heading">{item.label} - {members.length}
                      <button type="button" aria-label={`Remove ${item.label}`} onClick={() => remove(item.value)}>×</button>
                    </div>
                    <div className="user-selection-chips">{members.map(member => chip(member))}</div>
                  </div> : chip(item, true);
                })}
                {!selected.length && <span className="user-selection-empty">Select {label.toLowerCase()} from the list</span>}
              </div>}
            </div>;
          })}
        </div>
      </section>
    </div>
    {limitError && <p role="alert">{limitError}</p>}
    {allowAdditionalEmails && <div className="user-selection-additional-recipients">
      <label htmlFor={emailId}>Additional recipients</label>
      <Tags value={draft.filter(item => item.kind === 'email')}
        onChange={(emails: { value: string; label: string }[]) => {
          setDraft(current => [...current.filter(item => item.kind !== 'email'),
            ...emails.map(item => ({ ...item, kind: 'email' as const }))]);
          setLimitError('');
        }}
        placeholder="Enter an email address and press comma" error={!!emailError}
        inputRef={emailRef} inputProps={{
          id: emailId, inputMode: 'email', value: email,
          'aria-label': 'Additional recipients', 'aria-invalid': !!emailError,
          'aria-describedby': `${emailId}-hint${emailError ? ` ${emailId}-error` : ''}`,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value); setEmailError(''); },
          onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!event.nativeEvent.isComposing && (event.key === ',' || event.key === 'Enter')) {
              event.preventDefault(); addEmail();
            }
          },
        }} />
      <span id={`${emailId}-hint`}>External recipients receive email notifications only.</span>
      {emailError && <span id={`${emailId}-error`} role="alert">{emailError}</span>}
    </div>}
  </Modal>;
}
