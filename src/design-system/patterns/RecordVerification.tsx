import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Input } from '../components/Input/Input';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { Modal } from '../components/Modal/Modal';
import { Radio } from '../components/Radio/Radio';
import { Stepper } from '../components/Stepper/Stepper';
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
  onBack: (settings: VerificationConfig) => void; onClose: () => void; onSave: (settings: VerificationConfig) => void;
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
  const id = useId();
  const [rules, setRules] = useState<Rule[]>([]);
  const [draft, setDraft] = useState<Rule>();
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState<Rule>();
  const recordTaken = rules.some(rule => rule.action === 'record' && rule.id !== draft?.id);
  const patch = (update: Partial<Rule>) => { setDraft(current => current ? { ...current, ...update } : current); setError(''); };
  const close = () => { setDraft(undefined); setStep(0); setError(''); };
  const start = (rule?: Rule) => { setDraft(rule ?? newRule(rules.some(item => item.action === 'record'))); setStep(0); setError(''); };
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
    patch({ method, field: '', settings });
  };
  const next = () => {
    if (!draft) return;
    if (draft.action === 'record' && recordTaken) { setError('Record creation already has a configuration. Edit the existing rule.'); return; }
    if (draft.action === 'buttons' && (!draft.buttonName.trim() || !draft.layouts.length || !draft.profiles.length)) {
      setError('Enter a button name and select at least one layout and profile.'); return;
    }
    setStep(current => current + 1);
  };
  const save = (settings: VerificationConfig) => {
    if (!draft) return;
    if (!draft.field) { setError('Select a verification field.'); return; }
    if (rules.some(rule => rule.id !== draft.id && rule.action === draft.action && rule.method === draft.method && rule.field === draft.field)) {
      setError('This action, method, and field already have a configuration. Edit the existing rule.'); return;
    }
    const rule = { ...draft, settings, id: draft.id || crypto.randomUUID(),
      modified: new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date()) };
    setRules(current => draft.id ? current.map(item => item.id === draft.id ? rule : item) : [...current, rule]);
    close(); onNotice('Record verification configured successfully');
  };
  const progress = <Stepper variant="single" steps={['Action', 'Method', 'Configuration']} currentStep={step} />;
  const lead = draft && <>
    {progress}
    <MessageInfo variant="info" message={`Verifying: ${actionDescription(draft)} via ${METHOD_LABELS[draft.method]}. Confirmation captures consent; it does not verify ownership of the field.`} />
    <Dropdown label="Verification Field" width="100%" value={draft.field} placeholder="Select a field"
      options={fieldsFor(draft.method)} onChange={(field: string) => patch({ field })} error={!!error} />
    {draft.action === 'record' && <MessageInfo variant="info" message="Confirmation is required before saving a new record. Only one record-creation configuration is allowed." />}
    {error && <p className="record-auth-form__error" role="alert">{error}</p>}
  </>;
  return <div className="record-confirmation">
    <div className="record-auth__intro"><div>
      <h2>Record Verification Settings</h2>
      <p>Configure the channel used to obtain consent for a process in this module.</p>
    </div><Button variant="primary" onClick={() => start()}>New</Button></div>
    {rules.length === 0 ? <div className="record-confirmation__empty">
      <h2>No record verification configured</h2>
      <p>Request consent when a record is created, a picklist value changes, or a custom button is used.</p>
      <Button variant="link-primary" onClick={() => start()}>Configure Record Verification</Button>
    </div> : <SetupTable rows={rules} columns={[
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
    {draft && step < 2 && <Modal isOpen title="Record Verification" width={680} className="record-auth-config-modal"
      onClose={close} onSave={next} saveLabel="Next"
      footerStart={step > 0 ? <Button onClick={() => setStep(current => current - 1)}>Back</Button> : undefined}>
      <div className="record-auth-form">{progress}
        <p className="record-confirmation__description">{step === 0 ? 'Choose when this module should ask for consent. You will pick how to send the request on the next step.' : 'How should the contact give consent?'}</p>
        {step === 0 ? <>
          <div className="record-confirmation__choices" role="radiogroup" aria-label="Verification action">
            {(['record', 'criteria', 'buttons'] as const).map(action => <div className="record-confirmation__choice" key={action} data-selected={draft.action === action}>
              <Radio name={`${id}-action`} label={ACTION_LABELS[action]} checked={draft.action === action} disabled={action === 'record' && recordTaken}
                onChange={() => patch({ action, ...(action !== 'buttons' && draft.method === 'link' ? { method: 'otp', field: '', settings: defaultConfig('phone') } : {}) })} />
              <p>{action === 'record' ? (recordTaken ? 'Already configured. Edit the existing record-creation rule.' : 'Ask for consent before a new record is saved.') : action === 'criteria' ? 'Ask for consent when a picklist is set to a value.' : 'Ask for consent via a custom button on the record’s Detail page.'}</p>
            </div>)}
          </div>
          {draft.action === 'criteria' && <div className="record-confirmation__criteria">
            <Dropdown label="Picklist" layout="vertical" width="100%" options={Object.keys(PICKLISTS).map(label => ({ value: label, label }))}
              value={draft.criteriaField} onChange={(criteriaField: keyof typeof PICKLISTS) => patch({ criteriaField, criteriaValue: PICKLISTS[criteriaField][0] })} />
            <span>is</span>
            <Dropdown label="Value" layout="vertical" width="100%" options={PICKLISTS[draft.criteriaField as keyof typeof PICKLISTS].map(label => ({ value: label, label }))}
              value={draft.criteriaValue} onChange={(criteriaValue: string) => patch({ criteriaValue })} />
          </div>}
          {draft.action === 'buttons' && <>
            <Input label="Button Name" width="100%" value={draft.buttonName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => patch({ buttonName: event.target.value })} />
            <Tags label="Select Layout(s)" width="100%" value={draft.layouts} options={LAYOUTS} onChange={(layouts: Field[]) => patch({ layouts })} />
            <Tags label="Profiles" width="100%" value={draft.profiles} options={PROFILES} onChange={(profiles: Field[]) => patch({ profiles })} />
            <Switch label="For Portal Users" checked={draft.portal} onChange={(event: React.ChangeEvent<HTMLInputElement>) => patch({ portal: event.target.checked })} />
          </>}
        </> : <>
          <MessageInfo variant="info" message={`Verifying: ${actionDescription(draft)}`} />
          <div className="record-confirmation__choices" role="radiogroup" aria-label="Confirmation method">
            {(['otp', 'code', 'link'] as const).map(method => <div className="record-confirmation__choice" key={method} data-selected={draft.method === method}>
              <Radio name={`${id}-method`} label={`Via ${METHOD_LABELS[method]}`} checked={draft.method === method}
                disabled={method === 'link' && draft.action !== 'buttons'} onChange={() => changeMethod(method)} />
              <p>{method === 'link' ? (draft.action === 'buttons' ? 'The recipient confirms the action by clicking the email link.' : 'Available only for button actions.') : 'The contact shares the code with the CRM user to confirm this action.'}</p>
            </div>)}
          </div>
        </>}
        {error && <p className="record-auth-form__error" role="alert">{error}</p>}
      </div>
    </Modal>}
    {draft && step === 2 && renderSettings({ method: draft.method, initial: draft.settings, lead,
      onBack: settings => { patch({ settings }); setStep(1); setError(''); }, onClose: close, onSave: save })}
    {deleting && <Modal isOpen type="alert" variant="warning" title="Delete record verification?"
      description={`Remove the configuration for ${actionDescription(deleting)}? Existing confirmation statuses are preserved.`}
      saveLabel="Delete" onClose={() => setDeleting(undefined)} onSave={() => {
        setRules(current => current.filter(rule => rule.id !== deleting.id)); setDeleting(undefined); onNotice('Record verification configuration deleted');
      }} />}
  </div>;
}
