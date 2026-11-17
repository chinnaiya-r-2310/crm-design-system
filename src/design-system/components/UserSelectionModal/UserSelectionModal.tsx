import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Modal } from '../Modal/Modal';
import { Dropdown } from '../Dropdown/Dropdown';
import { Tags } from '../Tags/Tags';
import { Tooltip } from '../Tooltip/Tooltip';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';
import { SetupTable } from '../Table/Table';
import { Check, Edit, More, Search } from '../../foundations/icons/Icons';
import './UserSelectionModal.css';

export type UserSelectionKind = 'user' | 'group' | 'role' | 'role-and-subordinates' | 'territory' | 'territory-and-subterritories' | 'email';
export type UserSelectionSource = {
  value: string;
  label: string;
  kind: Exclude<UserSelectionKind, 'user' | 'email'>;
};
export type UserSelection = {
  value: string;
  label: string;
  kind: UserSelectionKind;
  avatarUrl?: string;
  /** Display provenance only: permissions always target this user's ID, not the source. */
  source?: UserSelectionSource;
  removalDisabledReason?: string;
};
export type UserSelectionOption = UserSelection & { detail?: string; members?: UserSelection[] };
export type AdditionalRecipientOption = {
  value: string;
  label: string;
  email: string;
  verified: boolean;
};
export interface UserSelectionModalProps {
  value: UserSelection[];
  options: UserSelectionOption[];
  onSave: (value: UserSelection[]) => void;
  onClose: () => void;
  title?: string;
  variant?: 'default' | 'individual-users';
  allowAdditionalEmails?: boolean;
  maxSelections?: number;
  additionalRecipientOptions?: AdditionalRecipientOption[];
  /** Optional feature-owned content displayed beneath the footer action. */
  footerNote?: ReactNode;
}

const CATEGORIES = [
  { value: 'user', label: 'Users' },
  { value: 'group', label: 'Groups' },
  { value: 'role', label: 'Roles' },
  { value: 'role-and-subordinates', label: 'Roles and Subordinates' },
  { value: 'territory', label: 'Territories' },
  { value: 'territory-and-subterritories', label: 'Territories and Sub-territories' },
] as const;
const initials = (name: string) => name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('');
const RemoveIcon = () => <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
  <path d="M1 1L6 6M6 1L1 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
</svg>;

/** Mount on open so Cancel discards the draft and reopening starts from the saved value. */
export function UserSelectionModal({ value, options, onSave, onClose, title = 'Select Users',
  allowAdditionalEmails = false, maxSelections, variant = 'default', additionalRecipientOptions = [], footerNote }: UserSelectionModalProps) {
  const individualUsers = variant === 'individual-users';
  const [draft, setDraft] = useState(() => value.filter(item => !individualUsers || item.kind === 'user' || (allowAdditionalEmails && item.kind === 'email')));
  const [category, setCategory] = useState('user');
  const [collectionId, setCollectionId] = useState('');
  const collections = options.filter(item => item.kind === category);
  const collection = collections.find(item => item.value === collectionId) ?? collections[0];
  const activeSource: UserSelectionSource | undefined = individualUsers && category !== 'user' && collection
    ? { value: collection.value, label: collection.label, kind: collection.kind as UserSelectionSource['kind'] } : undefined;
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [limitError, setLimitError] = useState('');
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const emailId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [recipientPickerOpen, setRecipientPickerOpen] = useState(false);
  const [recipientDraft, setRecipientDraft] = useState<UserSelection[]>([]);
  const [recipientError, setRecipientError] = useState('');
  const [createdRecipients, setCreatedRecipients] = useState<AdditionalRecipientOption[]>([]);
  const [newRecipientId, setNewRecipientId] = useState<string | null>(null);
  const newRecipientRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!newRecipientId) return;
    const scrollContainer = newRecipientRef.current?.closest('.table-body-wrap');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    const timeout = window.setTimeout(() => setNewRecipientId(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [newRecipientId]);
  const [creatingRecipient, setCreatingRecipient] = useState(false);
  const [editingRecipient, setEditingRecipient] = useState<AdditionalRecipientOption | null>(null);
  const [recipientOverrides, setRecipientOverrides] = useState<AdditionalRecipientOption[]>([]);
  const [deletedRecipientIds, setDeletedRecipientIds] = useState<string[]>([]);
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [creationErrors, setCreationErrors] = useState<{ name?: string; email?: string }>({});
  const selectedEmails = draft.filter(item => item.kind === 'email');
  const totalLimit = individualUsers ? Math.min(maxSelections ?? 100, 100) : maxSelections;
  const atLimit = totalLimit !== undefined && draft.length >= totalLimit;
  const userLimit = allowAdditionalEmails ? 90 : 100;
  const userLimitReached = individualUsers && draft.filter(item => item.kind === 'user').length >= userLimit;
  const recipientOptions = [...createdRecipients, ...additionalRecipientOptions]
    .map(item => recipientOverrides.find(override => override.value === item.value) ?? item);
  const recipientRows = [...recipientOptions, ...selectedEmails.filter(item => !recipientOptions.some(option => option.value === item.value))
    .map(item => recipientOverrides.find(override => override.value === item.value)
      ?? { value: item.value, label: item.label, email: item.label, verified: true })]
    .filter(item => !deletedRecipientIds.includes(item.value));
  const openRecipientPicker = () => {
    setRecipientDraft(selectedEmails.filter(item => !deletedRecipientIds.includes(item.value)).flatMap(item => {
      const recipient = recipientRows.find(option => option.value === item.value);
      return recipient?.verified ? [{ ...item, label: recipient.email }] : [];
    }));
    setRecipientError('');
    setRecipientPickerOpen(true);
  };
  const remove = (id: string) => {
    if (draft.find(item => item.value === id)?.removalDisabledReason || options.find(item => item.value === id)?.removalDisabledReason) return;
    setDraft(current => current.filter(item => item.value !== id));
    setLimitError('');
  };
  const toggle = (item: UserSelection) => {
    if (individualUsers && item.kind !== 'user') return;
    if (draft.some(selected => selected.value === item.value)) {
      if (!individualUsers) remove(item.value);
      return;
    }
    if (userLimitReached) { setLimitError(`Select up to ${userLimit} users.`); return; }
    if (atLimit) { setLimitError(`Select up to ${totalLimit} recipients.`); return; }
    setDraft(current => [...current, { value: item.value, label: item.label, kind: item.kind,
      ...(activeSource ? { source: activeSource } : {}),
      avatarUrl: item.avatarUrl, removalDisabledReason: item.removalDisabledReason }]);
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
  const directory = individualUsers && category !== 'user'
    ? (collection?.members ?? []).filter(member => member.kind === 'user').map(member => ({
      ...options.find(option => option.kind === 'user' && option.value === member.value), ...member,
    }))
    : options.filter(item => item.kind === category);
  const filtered = directory.filter(item => {
    const selected = draft.find(selected => selected.value === item.value);
    const addedElsewhere = individualUsers && selected && selected.source?.value !== activeSource?.value;
    return (!selected || addedElsewhere) &&
      `${item.label} ${'detail' in item ? item.detail ?? '' : ''}`.toLowerCase().includes(query.trim().toLowerCase());
  });
  const avatar = (item: UserSelection) => {
    const avatarUrl = item.avatarUrl ?? options.find(option => option.value === item.value)?.avatarUrl;
    return <span className="user-selection-avatar" aria-hidden="true">
      {avatarUrl ? <img src={avatarUrl} alt="" /> : initials(item.label)}
    </span>;
  };
  const chip = (item: UserSelection, removable = false) => {
    const reason = item.removalDisabledReason ?? options.find(option => option.value === item.value)?.removalDisabledReason;
    const content = <span className="tags-tag user-selection-chip" data-locked={reason ? '' : undefined}
      tabIndex={reason ? 0 : undefined}>
      {item.kind === 'user' && avatar(item)}<span className="user-selection-chip-label">{item.label}</span>
      {removable && !reason && <>
        <span className="tags-remove-bg" aria-hidden="true" />
        <button type="button" className="tags-remove-btn" aria-label={`Remove ${item.label}`} onClick={() => remove(item.value)}><RemoveIcon /></button>
      </>}
    </span>;
    return reason ? <Tooltip key={item.value} content={reason} variant="white" placement="top">{content}</Tooltip>
      : <span className="user-selection-chip-wrapper" key={item.value}>{content}</span>;
  };

  const categoryFilter = <Dropdown layout="vertical" width={individualUsers ? 'auto' : '100%'}
    panelStyle={({ left, width }: { left: number; width: number }) => ({
      left: left - 1, width: 'max-content', minWidth: width, maxWidth: `calc(100vw - ${left + 15}px)`,
    })}
    triggerAriaLabel="Recipient type" value={category} options={CATEGORIES.map(item => ({ ...item }))}
    onChange={(next: string) => { setCategory(next); setCollectionId(''); setQuery(''); searchRef.current?.focus(); }} />;

  return <>
    <Modal isOpen title={title} width={1088} className={`user-selection-modal${individualUsers ? ' user-selection-modal--individual' : ''}`}
    footerStart={(individualUsers && allowAdditionalEmails && !selectedEmails.length) || footerNote ? <div className="user-selection-footer-notes">
      {individualUsers && allowAdditionalEmails && !selectedEmails.length && <Button variant="ghost-blue" onClick={openRecipientPicker}>Add Additional Recipient</Button>}
      {footerNote}
    </div> : undefined}
    onClose={onClose} onCancel={onClose} onSave={() => {
      if (allowAdditionalEmails && !individualUsers && email.trim()) {
        setEmailError('Press Enter or comma to add the email before finishing.'); emailRef.current?.focus(); return;
      }
      if (individualUsers && (draft.filter(item => item.kind === 'user').length > userLimit || selectedEmails.length > 10)) {
        setLimitError(allowAdditionalEmails ? 'Select up to 90 users and 10 additional recipients.' : 'Select up to 100 users.'); return;
      }
      if (totalLimit !== undefined && draft.length > totalLimit) {
        setLimitError(`Select up to ${totalLimit} recipients.`); return;
      }
      onSave(draft);
    }} cancelLabel="Cancel" saveLabel="Done">
    <div className="user-selection-panels">
    <div className="user-selection-panel-headings">
      <div className="user-selection-available-heading"><h3>Available</h3>{individualUsers && categoryFilter}</div>
      <h3>Selected</h3>
    </div>
    <div className="user-selection-picker">
      <section className="user-selection-directory" aria-label="Available recipients">
        <div className="user-selection-search-row">
          {!individualUsers ? categoryFilter : category !== 'user' && <div className="user-selection-collection-filter">
            <Dropdown layout="vertical" width="100%"
              panelStyle={({ left, width }: { left: number; width: number }) => ({
                left: left - 1, width: 'max-content', minWidth: width, maxWidth: `calc(100vw - ${left + 15}px)`,
              })}
              triggerAriaLabel="Recipient collection" value={collection?.value ?? ''} placeholder="Select"
              options={collections.map(item => ({ value: item.value, label: item.label }))}
              onChange={(next: string) => { setCollectionId(next); setQuery(''); searchRef.current?.focus(); }} />
          </div>}
          <label className="user-selection-search dropdown-search-box dropdown-search-box--joined">
            <span className="dropdown-search-icon"><Search aria-hidden="true" /></span>
            <input ref={searchRef} type="search" aria-label="Search recipients" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />
          </label>
        </div>
        <div className="user-selection-results">
          {filtered.map(item => <button type="button" className="user-selection-result" data-kind={item.kind} key={item.value}
            aria-pressed={draft.some(selected => selected.value === item.value)}
            aria-disabled={individualUsers && draft.some(selected => selected.value === item.value) || undefined}
            onClick={() => toggle(item)}>
            {item.kind === 'user' && avatar(item)}
            <span className="user-selection-person"><span>{item.label}</span>
              {item.kind === 'user' && 'detail' in item && item.detail && <span>{item.detail}</span>}
            </span>
            {draft.some(selected => selected.value === item.value)
              ? <span className="user-selection-added" aria-hidden="true"><Check />Added</span>
              : <span className="user-selection-add" aria-hidden="true">Add</span>}
          </button>)}
          {!filtered.length && <p className="user-selection-empty user-selection-empty--available">
            {query.trim() ? 'No results found' : `No ${individualUsers ? 'users' : CATEGORIES.find(item => item.value === category)?.label.toLowerCase()} available`}
          </p>}
        </div>
      </section>
      <section className="user-selection-selections" aria-label="Selected recipients">
        <div className="user-selection-selected-content" aria-live="polite">
          {!draft.some(item => item.kind !== 'email') && <p className="user-selection-empty user-selection-empty--selected">No results found</p>}
          {CATEGORIES.map(({ value: kind, label }) => {
            const selected = draft.filter(item => individualUsers ? item.kind === 'user' && (item.source?.kind ?? 'user') === kind : item.kind === kind);
            if (!selected.length) return null;
            const sources = [...new Map(selected.flatMap(item => item.source ? [[item.source.value, item.source] as const] : [])).values()];
            const count = individualUsers && kind !== 'user' ? sources.length : selected.length;
            const isCollapsed = collapsed.includes(kind);
            return <div className="user-selection-section" key={kind}>
              <button type="button" className="user-selection-section-heading" aria-expanded={!isCollapsed}
                aria-label={`${label} - ${count}`}
                onClick={() => setCollapsed(current => isCollapsed ? current.filter(item => item !== kind) : [...current, kind])}>
                <span className="user-selection-section-label">{label}<span className="user-selection-section-count"> - {count}</span></span>
                <span className="user-selection-section-chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 7.75 6 4.25 9.5 7.75" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="user-selection-section-body" inert={isCollapsed} aria-hidden={isCollapsed}>
                <div className="user-selection-section-overflow">
                  {individualUsers && kind !== 'user' ? sources.map(source => {
                    const members = selected.filter(item => item.source?.value === source.value);
                    return <div className="user-selection-section-content" key={source.value}>
                      <h4 className="user-selection-source-heading" aria-label={`${source.label} - ${members.length}`}>{source.label}<span className="user-selection-section-count"> - {members.length}</span></h4>
                      <div className="user-selection-chips">{members.map(item => chip(item, true))}</div>
                    </div>;
                  }) : <div className="user-selection-section-content user-selection-chips">
                    {selected.map(item => chip(item, true))}
                  </div>}
                </div>
              </div>
            </div>;
          })}
        </div>
      </section>
    </div>
    </div>
    {limitError && <div className="input-root" data-variant="error"><span className="input-helper-text" role="alert">{limitError}</span></div>}
    {individualUsers && allowAdditionalEmails && selectedEmails.length > 0 && <div className="user-selection-additional-recipients">
      <>
        <span id={`${emailId}-label`}>Additional recipients</span>
        <div className="user-selection-recipient-field">
          <div inert aria-hidden="true">
            <Tags noBorder removable={false} value={selectedEmails} placeholder="" />
          </div>
          <Button variant="link-default" className="user-selection-edit-recipients" aria-label="Edit additional recipients"
            aria-describedby={`${emailId}-label`} onClick={openRecipientPicker}><Edit aria-hidden="true" /></Button>
        </div>
      </>
    </div>}
    {allowAdditionalEmails && !individualUsers && <div className="user-selection-additional-recipients">
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
      {emailError && <div className="input-root" data-variant="error"><span className="input-helper-text" id={`${emailId}-error`} role="alert">{emailError}</span></div>}
    </div>}
  </Modal>
  {recipientPickerOpen && <Modal isOpen title="Select Recipient" width={900} className="user-selection-recipient-modal"
    headerActions={<Button variant="outline-blue" onClick={() => {
      setEditingRecipient(null); setRecipientName(''); setRecipientAddress(''); setCreationErrors({}); setCreatingRecipient(true);
    }}>Create Recipient</Button>}
    onClose={() => setRecipientPickerOpen(false)} onCancel={() => setRecipientPickerOpen(false)}
    saveLabel="Done" onSave={() => {
      const users = draft.filter(item => item.kind !== 'email');
      if (recipientDraft.length > 10 || (totalLimit !== undefined && users.length + recipientDraft.length > totalLimit)) {
        setRecipientError(`Select up to ${Math.min(10, (totalLimit ?? 100) - users.length)} additional recipients.`); return;
      }
      setDraft([...users, ...recipientDraft]); setLimitError(''); setRecipientPickerOpen(false);
    }}>
    <SetupTable width="100%" resizable={false} maxHeight={360} rows={recipientRows.map(item => ({ ...item, id: item.value }))}
      columns={[
        { key: 'actions', label: '', width: 42, render: (_: unknown, item: AdditionalRecipientOption) => <div className="user-selection-recipient-actions"
          ref={item.value === newRecipientId ? newRecipientRef : undefined} data-new-recipient={item.value === newRecipientId || undefined}>
          <Dropdown width="auto" showSelectionIndicator={false} triggerIcon={<More />} triggerAriaLabel={`More options for ${item.label}`}
            panelStyle={{ width: 'max-content', minWidth: 120, maxWidth: 'calc(100vw - 32px)', '--dropdown-option-padding-left': 'var(--ds-space-12, 12px)' }}
            options={[{ value: 'edit', label: 'Edit' }, { value: 'delete', label: 'Delete' }]}
            onChange={(action: string) => {
              if (action === 'edit') {
                setEditingRecipient(item); setRecipientName(item.label); setRecipientAddress(item.email);
                setCreationErrors({}); setCreatingRecipient(true);
              } else {
                setDeletedRecipientIds(current => [...current, item.value]);
                setRecipientDraft(current => current.filter(selected => selected.value !== item.value));
                setRecipientError('');
              }
            }} />
        </div> },
        { key: 'label', label: <span className="user-selection-recipient-name-heading">Display Name</span>, width: 250, render: (_: string, item: AdditionalRecipientOption) => <Checkbox
          label={item.label} aria-label={`Select ${item.label}`} checked={recipientDraft.some(selected => selected.value === item.value)}
          disabled={!item.verified && !recipientDraft.some(selected => selected.value === item.value)}
          onChange={() => {
            if (recipientDraft.some(selected => selected.value === item.value)) {
              setRecipientDraft(current => current.filter(selected => selected.value !== item.value)); setRecipientError(''); return;
            }
            const remaining = Math.max(0, Math.min(10, (totalLimit ?? 100) - draft.filter(selected => selected.kind !== 'email').length));
            if (recipientDraft.length >= remaining) { setRecipientError(`Select up to ${remaining} additional recipients.`); return; }
            setRecipientDraft(current => [...current, { value: item.value, label: item.email, kind: 'email' }]); setRecipientError('');
          }} /> },
        { key: 'email', label: 'Email Address', width: 300 },
        { key: 'verified', label: 'Verification Status', width: 190, render: (verified: boolean) => verified ? 'Verified' : 'Not Verified' },
      ]} emptyMessage="No recipients available" />
    {recipientError && <div className="input-root" data-variant="error"><span className="input-helper-text" role="alert">{recipientError}</span></div>}
  </Modal>}
  {creatingRecipient && <Modal isOpen title={editingRecipient ? 'Edit Recipient' : 'Create Recipient'} width={730} className="user-selection-recipient-modal user-selection-recipient-editor"
    onClose={() => setCreatingRecipient(false)} onCancel={() => setCreatingRecipient(false)} saveLabel="Save" onSave={() => {
      const address = recipientAddress.trim();
      const errors: { name?: string; email?: string } = {};
      if (!recipientName.trim()) errors.name = 'Display Name cannot be empty.';
      if (!address) errors.email = 'Email cannot be empty.';
      else if (!/^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(address)) errors.email = 'Enter a valid email address.';
      else if (recipientRows.some(item => item.value !== editingRecipient?.value && item.email.toLowerCase() === address.toLowerCase())) {
        errors.email = 'A recipient with this email address already exists.';
      }
      setCreationErrors(errors);
      if (Object.keys(errors).length) return;
      if (editingRecipient) {
        const addressChanged = address.toLowerCase() !== editingRecipient.email.toLowerCase();
        const updated = { ...editingRecipient, label: recipientName.trim(), email: address,
          verified: editingRecipient.verified && !addressChanged };
        setRecipientOverrides(current => [...current.filter(item => item.value !== updated.value), updated]);
        setRecipientDraft(current => addressChanged ? current.filter(item => item.value !== updated.value)
          : current.map(item => item.value === updated.value ? { ...item, label: address } : item));
        setRecipientError('');
      } else {
        // New recipients must be verified by the host before they can receive notifications.
        const recipientId = `email:${address.toLowerCase()}`;
        setCreatedRecipients(current => [{ value: recipientId, label: recipientName.trim(), email: address, verified: false }, ...current]);
        setNewRecipientId(recipientId);
      }
      setCreatingRecipient(false);
    }}>
    <Input label="Display Name" required value={recipientName}
      error={!!creationErrors.name} aria-invalid={!!creationErrors.name}
      helperText={creationErrors.name ? <span role="alert">{creationErrors.name}</span> : undefined}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipientName(event.target.value);
        setCreationErrors(current => ({ ...current, name: undefined }));
      }} />
    <Input label="Email" type="email" required value={recipientAddress}
      error={!!creationErrors.email} aria-invalid={!!creationErrors.email}
      helperText={creationErrors.email ? <span role="alert">{creationErrors.email}</span> : undefined}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipientAddress(event.target.value);
        setCreationErrors(current => ({ ...current, email: undefined }));
      }} />
  </Modal>}
  </>;
}
