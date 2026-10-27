import { useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Input } from '../components/Input/Input';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Icon } from '../components/Icon/Icon';
import { Modal } from '../components/Modal/Modal';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Switch } from '../components/Switch/Switch';
import { SetupTable } from '../components/Table/Table';
import { Tags } from '../components/Tags/Tags';
import { defaultConfig, EMAIL_FIELDS, PHONE_FIELDS } from './RecordAuthentication.data';
import type { Field, VerificationConfig } from './RecordAuthentication.data';

export type ConfirmationMethod = 'otp' | 'code' | 'link';
type Action = 'record' | 'criteria' | 'buttons';
type Rule = {
  id: string; action: Action; method: ConfirmationMethod; field: string;
  criteriaField: string; criteriaValue: string; buttonName: string;
  layouts: Field[]; profiles: Field[]; portal: boolean; active: boolean;
  modified: string; settings: VerificationConfig;
};
export type ConfirmationSettingsProps = {
  method: ConfirmationMethod; initial: VerificationConfig; lead: ReactNode;
  onChange: (settings: VerificationConfig) => void; onClose: () => void; onSave: (settings: VerificationConfig) => void;
};
const ACTION_LABELS = { record: 'Record creation', criteria: 'Picklist value', buttons: 'Button actions' };
const METHOD_LABELS = { otp: 'OTP on Phone', code: 'Code on Email', link: 'Confirmation Link' };
const PICKLISTS = {
  Status: ['Open', 'In progress', 'Completed'],
  'Lead Source': ['Trade Show', 'Web Form', 'Referral'],
  Rating: ['Hot', 'Warm', 'Cold'],
};
const LAYOUTS = ['Standard', 'Enterprise'].map(label => ({ label, value: label }));
const PROFILES = ['Administrator', 'Standard', 'Sales Manager'].map(label => ({ label, value: label }));
const fieldsFor = (method: ConfirmationMethod) => method === 'otp' ? PHONE_FIELDS : EMAIL_FIELDS;
function newRule(recordTaken: boolean): Rule {
  return { id: '', action: recordTaken ? 'criteria' : 'record', method: 'otp', field: '',
    criteriaField: 'Status', criteriaValue: 'Open', buttonName: '', layouts: LAYOUTS.slice(0, 1),
    profiles: PROFILES.slice(0, 2), portal: false, active: true, modified: '', settings: defaultConfig('phone') };
}
function actionDescription(rule: Rule) {
  return rule.action === 'criteria' ? `${rule.criteriaField} is ${rule.criteriaValue}`
    : rule.action === 'buttons' ? rule.buttonName : 'Record creation';
}

/** PM mock: independent record-consent rules; no live delivery or enforcement. */
export function RecordVerification({ renderSettings, onNotice }: {
  renderSettings: (props: ConfirmationSettingsProps) => ReactNode;
  onNotice: (message: string) => void;
}) {
  const [rules, setRules] = useState<Rule[]>([]);
  const [draft, setDraft] = useState<Rule>();
  const [error, setError] = useState('');
  const [whenSelected, setWhenSelected] = useState(false);
  const [consentSelected, setConsentSelected] = useState(false);
  const [deleting, setDeleting] = useState<Rule>();
  const recordTaken = rules.some(rule => rule.action === 'record' && rule.id !== draft?.id);
  const patch = (update: Partial<Rule>) => { setDraft(current => current ? { ...current, ...update } : current); setError(''); };
  const close = () => { setDraft(undefined); setError(''); };
  const start = (rule?: Rule) => { setDraft(rule ?? newRule(rules.some(item => item.action === 'record'))); setWhenSelected(!!rule); setConsentSelected(!!rule); setError(''); };
  const changeMethod = (method: ConfirmationMethod) => {
    if (!draft) return;
    const settings = defaultConfig(method === 'otp' ? 'phone' : 'email');
    if (method === 'code') {
      settings.validity = '4'; settings.resetAfter = '30';
      settings.emailContent = { sender: 'owner', subject: 'Confirm your action with ${Organization.OrganizationName}',
        body: 'Hello ${Contacts.FullName},\n\nYour confirmation code is ${OTP}. Valid for ${Valid For} minutes.\nShare with <CRM User> only.\n\n${Organization.OrganizationName}' };
    } else if (method === 'link') {
      settings.emailContent = { sender: 'owner', subject: 'Confirm your action with ${Organization.OrganizationName}',
        body: 'Hello ${Contacts.FullName},\n\nPlease confirm the requested action with ${Organization.OrganizationName}.\n\n[Verify email address]\n\nIf you did not request this action, ignore this email.' };
    }
    setConsentSelected(true);
    patch({ method, field: '', settings });
  };
  const save = (settings: VerificationConfig) => {
    if (!draft) return;
    if (!whenSelected || !consentSelected) { setError('Select When and Consent Type.'); return; }
    if (draft.action === 'record' && recordTaken) { setError('Record creation already has a configuration. Edit the existing rule.'); return; }
    if (draft.action === 'buttons' && (!draft.buttonName.trim() || !draft.layouts.length || !draft.profiles.length)) {
      setError('Enter a button name and select at least one layout and profile.'); return;
    }
    if (!draft.field) { setError('Select a verification field.'); return; }
    if (rules.some(rule => rule.id !== draft.id && rule.action === draft.action && rule.method === draft.method && rule.field === draft.field)) {
      setError('This action, method, and field already have a configuration. Edit the existing rule.'); return;
    }
    const rule = { ...draft, settings, id: draft.id || crypto.randomUUID(),
      modified: new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date()) };
    setRules(current => draft.id ? current.map(item => item.id === draft.id ? rule : item) : [...current, rule]);
    close(); onNotice('Record verification configured successfully');
  };
  const lead = draft && <>
    <div className="record-auth-form__row">
      <span className="record-auth-form__label record-confirmation__when-label">When
        <Tooltip variant="white" content="Choose the event that requires the contact’s consent. Confirmation captures consent for an action; it does not verify ownership of a phone number or email address.">
          <button type="button" className="record-confirmation__info" aria-label="About When"><Icon name="CrmInfoSolid" size={13} /></button>
        </Tooltip>
      </span>
      <Dropdown id="record-consent-when" triggerAriaLabel="When" placeholder="Select" width="100%" value={whenSelected ? draft.action : ''}
        options={([
          { value: 'record', label: ACTION_LABELS.record, description: recordTaken ? 'Already configured. Edit the existing record-creation rule.' : 'Ask for consent before a new record is saved.', disabled: recordTaken },
          { value: 'criteria', label: ACTION_LABELS.criteria, description: 'Ask for consent when a picklist is set to a value.' },
          { value: 'buttons', label: ACTION_LABELS.buttons, description: 'Ask for consent via a custom button on the record’s Detail page.' },
        ])} onChange={(action: Action) => {
          setWhenSelected(true);
          if (action !== 'buttons' && draft.method === 'link') changeMethod('otp');
          patch({ action });
        }} />
    </div>
    <div className="record-auth-form__row">
      <span className="record-auth-form__label">Consent Type</span>
      <Dropdown id="record-consent-type" triggerAriaLabel="Consent Type" placeholder="Select" width="100%" value={consentSelected ? draft.method : ''}
        options={[
          { value: 'otp', label: METHOD_LABELS.otp, description: 'Send an SMS OTP to confirm the action.' },
          { value: 'code', label: METHOD_LABELS.code, description: 'Send an email code to confirm the action.' },
          { value: 'link', label: METHOD_LABELS.link, description: draft.action === 'buttons' ? 'Confirm the action by clicking an email link.' : 'Available only for button actions.', disabled: draft.action !== 'buttons' },
        ]} onChange={changeMethod} />
    </div>
    {draft.action === 'criteria' && <div className="record-auth-form__row">
      <span className="record-auth-form__label">Picklist condition</span>
      <div className="record-confirmation__criteria">
        <Dropdown triggerAriaLabel="Picklist" width="100%" options={Object.keys(PICKLISTS).map(label => ({ value: label, label }))}
          value={draft.criteriaField} onChange={(criteriaField: keyof typeof PICKLISTS) => patch({ criteriaField, criteriaValue: PICKLISTS[criteriaField][0] })} />
        <span>is</span>
        <Dropdown triggerAriaLabel="Value" width="100%" options={PICKLISTS[draft.criteriaField as keyof typeof PICKLISTS].map(label => ({ value: label, label }))}
          value={draft.criteriaValue} onChange={(criteriaValue: string) => patch({ criteriaValue })} />
      </div>
    </div>}
    {draft.action === 'buttons' && <>
      <div className="record-auth-form__row"><span className="record-auth-form__label">Button Name</span>
        <Input aria-label="Button Name" width="100%" value={draft.buttonName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => patch({ buttonName: event.target.value })} /></div>
      <div className="record-auth-form__row"><span className="record-auth-form__label">Layout</span>
        <Tags width="100%" value={draft.layouts} options={LAYOUTS} onChange={(layouts: Field[]) => patch({ layouts })} /></div>
      <div className="record-auth-form__row"><span className="record-auth-form__label">Profile</span>
        <Tags width="100%" value={draft.profiles} options={PROFILES} onChange={(profiles: Field[]) => patch({ profiles })} /></div>
      <div className="record-auth-form__row"><span /><Checkbox label="For Portal Users" checked={draft.portal} onChange={(event: React.ChangeEvent<HTMLInputElement>) => patch({ portal: event.target.checked })} /></div>
    </>}
    <div className="record-auth-form__row"><span className="record-auth-form__label">Verification Field</span>
      <Dropdown triggerAriaLabel="Verification Field" width="100%" value={draft.field} placeholder="Select a field"
        options={fieldsFor(draft.method)} onChange={(field: string) => patch({ field })} error={!!error} /></div>
    {error && <p className="record-auth-form__error" role="alert">{error}</p>}
  </>;
  return <div className="record-confirmation">
    <div className="record-auth__intro"><p>Configure the channel used to obtain consent for a process in this module.</p>
      {rules.length > 0 && <Button variant="primary" onClick={() => start()}>Configure</Button>}</div>
    {rules.length === 0 && <Button variant="primary" onClick={() => start()}>Configure</Button>}
    {rules.length > 0 && <SetupTable rows={rules} columns={[
      { key: 'action', label: 'Use verification at', width: 200, render: (_: Action, rule: Rule) => actionDescription(rule) },
      { key: 'field', label: 'Field', width: 150, render: (field: string, rule: Rule) => fieldsFor(rule.method).find(item => item.value === field)?.label },
      { key: 'method', label: 'Type / Channel', width: 180, render: (method: ConfirmationMethod) => METHOD_LABELS[method] },
      { key: 'modified', label: 'Last modified', width: 150 },
      { key: 'active', label: 'Status', width: 100, render: (active: boolean, rule: Rule) => <Switch aria-label={`Enable ${actionDescription(rule)}`} checked={active}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRules(current => current.map(item => item.id === rule.id ? { ...item, active: event.target.checked } : item))} /> },
      { key: 'id', label: 'Actions', width: 150, render: (_: string, rule: Rule) => <div className="record-auth-form__inline">
        <Button variant="link-primary" aria-label={`Edit ${actionDescription(rule)}`} onClick={() => start(rule)}>Edit</Button>
        <Button variant="link-primary" aria-label={`Delete ${actionDescription(rule)}`} onClick={() => setDeleting(rule)}>Delete</Button>
      </div> },
    ]} />}
    {draft && renderSettings({ method: draft.method, initial: draft.settings, lead,
      onChange: settings => patch({ settings }), onClose: close, onSave: save })}
    {deleting && <Modal isOpen type="alert" variant="warning" title="Delete record verification?"
      description={`Remove the configuration for ${actionDescription(deleting)}? Existing confirmation statuses are preserved.`}
      saveLabel="Delete" onClose={() => setDeleting(undefined)} onSave={() => {
        setRules(current => current.filter(rule => rule.id !== deleting.id)); setDeleting(undefined); onNotice('Record verification configuration deleted');
      }} />}
  </div>;
}
