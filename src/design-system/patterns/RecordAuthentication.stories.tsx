import { useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Input } from '../components/Input/Input';
import { Icon } from '../components/Icon/Icon';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { Modal } from '../components/Modal/Modal';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { RichTextEditor } from '../components/RichTextEditor/RichTextEditor';
import { Radio } from '../components/Radio/Radio';
import { Tabs } from '../components/Tabs/Tabs';
import { Tags } from '../components/Tags/Tags';
import { Textarea } from '../components/Textarea/Textarea';
import { VerticalTabs } from '../components/VerticalTabs/VerticalTabs';
import { WMSBar } from '../components/WMSBar/WMSBar';
import {
  defaultConfig, EMAIL_FIELDS, EMAIL_TEMPLATES, MODULE_TABS, PHONE_FIELDS,
  SETUP_ITEMS, smsPreview, VERIFICATION_PAGES,
} from './RecordAuthentication.data';
import type { Channel, Field, VerificationConfig } from './RecordAuthentication.data';
import './RecordAuthentication.css';

const FEATURE_TABS = [
  { id: 'verification', label: 'Data Verification' },
  { id: 'configuration', label: 'Record Configuration' },
];
const VERIFICATION_CHANNELS = [
  { value: 'phone', label: 'Phone Number', icon: <Icon name="Mobile" size={16} /> },
  { value: 'email', label: 'Email Address', icon: <Icon name="Email" size={16} /> },
];
const CARRIERS = [
  { value: 'twilio', label: 'Twilio' },
  { value: 'messagebird', label: 'MessageBird' },
  { value: 'vonage', label: 'Vonage' },
  { value: 'plivo', label: 'Plivo' },
  { value: 'sinch', label: 'Sinch' },
  { value: 'telnyx', label: 'Telnyx' },
  { value: 'textlocal', label: 'Textlocal' },
  { value: 'clicksend', label: 'ClickSend' },
];
const RESEND_MODES = [{ value: 'same', label: 'Same OTP' }, { value: 'new', label: 'New OTP' }];
type SavedSettings = Partial<Record<Channel, VerificationConfig>>;
type PageProps = { initial?: 'empty' | 'phone' | 'both'; dialog?: Channel; expanded?: boolean; configuration?: boolean };
type Preview = { title: string; content: string; kind?: 'email' | 'page' };
type TemplateSettings = { subject: string; sender: string; body: string };
const DEFAULT_SUBJECT = 'Verify your email address with ${Organization.OrganizationName}';
function templateDefaults(kind: 'email' | 'page', validity = '7'): TemplateSettings {
  return {
    sender: 'owner', subject: DEFAULT_SUBJECT,
    body: kind === 'email'
      ? `Hello \${Contacts.FullName},\n\nPlease verify your email address with \${Organization.OrganizationName}. To confirm your email address, please click on the button below. This link expires in ${validity} day(s).\n\n[Verify email address]\n\nIf you did not request this verification, please ignore this email.\n\nRegards,\n\${Organization.OrganizationName}`
      : 'Email address verified\n\nThank you for confirming your email address. You can now close this page.\n\n${Organization.OrganizationName}',
  };
}

// Figma 54195:187585: shared template-modal composition of existing primitives.
function TemplateDialog({ kind, initial, validity, onClose, onSave }: {
  kind: 'email' | 'page'; initial?: TemplateSettings; validity?: string;
  onClose: () => void; onSave: (settings: TemplateSettings) => void;
}) {
  const [settings, setSettings] = useState(() => initial ?? templateDefaults(kind, validity));
  const [language, setLanguage] = useState('en-US');
  const [editorContent, setEditorContent] = useState(settings.body);
  const [editorKey, setEditorKey] = useState(0);
  const reset = () => {
    const defaults = templateDefaults(kind, validity);
    setSettings(defaults); setEditorContent(defaults.body); setEditorKey(key => key + 1);
  };
  return <Modal isOpen title={kind === 'email' ? 'Edit Email Content' : 'Edit Verification Page'} width={865}
    className="record-auth-template-modal" disableAutoFocus
    headerActions={<Dropdown aria-label="Template language" width="fit-content" value={language} onChange={setLanguage}
      options={[
        { value: 'en-US', label: 'English (United States)' },
        { value: 'en-GB', label: 'English (United Kingdom)' },
        { value: 'fr', label: 'French' }, { value: 'de', label: 'German' },
        { value: 'es', label: 'Spanish' }, { value: 'it', label: 'Italian' },
        { value: 'pt', label: 'Portuguese' }, { value: 'nl', label: 'Dutch' },
        { value: 'ja', label: 'Japanese' }, { value: 'zh', label: 'Chinese (Simplified)' },
        { value: 'hi', label: 'Hindi' }, { value: 'ta', label: 'Tamil' },
      ]} />}
    footerStart={<Button variant="ghost-blue" onClick={reset}>Reset to default</Button>}
    onClose={onClose} onSave={() => onSave(settings)}>
    <div className="record-auth-template">
      {kind === 'email' && <div className="record-auth-template__fields">
        <Dropdown label="From" aria-label="From" width="100%" value={settings.sender}
          options={[{ value: 'owner', label: 'Record Owner’s Email' }, { value: 'organization', label: 'Organization Email' }]}
          onChange={(sender: string) => setSettings(current => ({ ...current, sender }))} />
        <Input label="Subject" width="100%" value={settings.subject}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSettings(current => ({ ...current, subject: event.target.value }))} />
      </div>}
      <RichTextEditor key={editorKey} width="100%" minHeight={380} alwaysShowToolbar toolbarPosition="top" showExpand={false}
        aria-label={kind === 'email' ? 'Email template body' : 'Verification page body'} initialContent={kind === 'email' ? editorContent.split('[Verify email address]').map((part, index) => (
          <span key={index}>{index > 0 && <span contentEditable={false}>
            <Button variant="primary" className="record-auth-template__verify">Verify email address</Button>
          </span>}{part}</span>
        )) : editorContent}
        onChange={(body: string) => setSettings(current => ({ ...current,
          body: kind === 'email' ? body.replace(/(?<!\[)Verify email address(?!\])/g, '[Verify email address]') : body,
        }))} />
    </div>
  </Modal>;
}

// Story-local layout compositions, using the existing design-system primitives.
function FormRow({ label, children }: { label: string; children: ReactNode }) {
  return <div className="record-auth-form__row"><span className="record-auth-form__label">{label}</span><div>{children}</div></div>;
}

function VerificationDialog({ channel, initial, expanded, onClose, onSave }: {
  channel: Channel; initial: VerificationConfig; expanded: boolean;
  onClose: () => void; onSave: (config: VerificationConfig) => void;
}) {
  const id = useId();
  const [draft, setDraft] = useState<VerificationConfig>(() => ({ ...initial, fields: [...initial.fields] }));
  const [more, setMore] = useState(expanded);
  const [preview, setPreview] = useState<Preview>();
  const [errors, setErrors] = useState<Partial<Record<keyof VerificationConfig, string>>>({});
  const phone = channel === 'phone';
  const update = <K extends keyof VerificationConfig>(key: K, value: VerificationConfig[K]) => {
    setDraft(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: undefined }));
  };
  const fieldError = (key: keyof VerificationConfig) => errors[key] ? (
    <p id={`${id}-${key}-error`} className="record-auth-form__error" role="alert">{errors[key]}</p>
  ) : null;
  const save = () => {
    const next: Partial<Record<keyof VerificationConfig, string>> = {};
    const numberKeys = ['validity', 'resendAttempts', 'resetAfter',
      ...(phone ? ['validationAttempts', 'validationReset'] as const : [])] as const;
    if (!draft.fields.length) next.fields = 'Select at least one field to verify.';
    const numberLabels = {
      validity: phone ? 'OTP Validity' : 'Verification Link Validity',
      resendAttempts: 'Max Resend Attempts',
      resetAfter: 'Reset Resend Attempt After',
      validationAttempts: 'Max Validation Attempts',
      validationReset: 'Reset Validation Attempt After',
    };
    for (const key of numberKeys) {
      const value = draft[key];
      if (!value.trim()) {
        next[key] = `${numberLabels[key]} cannot be empty`;
      } else if (!/^\d+$/.test(value) || !Number.isSafeInteger(Number(value)) || Number(value) < 1) {
        next[key] = `${numberLabels[key]} must be a positive whole number`;
      }
    }
    if (phone && !draft.carrier) next.carrier = 'Select an SMS carrier.';
    if (phone && (!draft.template.trim() || draft.template.length > 160 || !draft.template.includes('${OTP}'))) {
      next.template = 'Enter an SMS template of up to 160 characters containing ${OTP}.';
    }
    setErrors(next);
    if (Object.keys(next).length) {
      if (phone && (next.resendAttempts || next.resetAfter || next.validationAttempts || next.validationReset)) setMore(true);
      return;
    }
    onSave(draft);
  };
  const numberInput = (key: 'validity' | 'resendAttempts' | 'resetAfter' | 'validationAttempts' | 'validationReset', label: string, suffix?: string) => (
    <div>
      <div className="record-auth-form__number">
        <Input type="number" aria-label={label} error={!!errors[key]} aria-invalid={!!errors[key]}
          aria-describedby={[suffix && `${id}-${key}-unit`, errors[key] && `${id}-${key}-error`].filter(Boolean).join(' ') || undefined}
          min={1} step={1} width="100%" value={draft[key]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => update(key, event.target.value)} />
        {suffix && <span id={`${id}-${key}-unit`}>{suffix === 'Minutes' ? 'Minute(s)' : suffix}</span>}
      </div>
      {fieldError(key)}
    </div>
  );
  return <><Modal isOpen title={`Data Verification via ${phone ? 'Phone Number' : 'Email Address'}`}
    className="record-auth-config-modal" width={670} onClose={onClose} onSave={save}>
    <div className="record-auth-form">
      <FormRow label="Fields"><div role="group" aria-label="Fields to verify" aria-invalid={!!errors.fields} aria-describedby={errors.fields ? `${id}-fields-error` : undefined}>
        <Tags value={draft.fields} options={phone ? PHONE_FIELDS : EMAIL_FIELDS} placeholder="Add"
          onChange={(fields: Field[]) => update('fields', fields)} width="100%" />
        {fieldError('fields')}
      </div></FormRow>
      <Checkbox label={`Restrict outgoing ${phone ? 'calls' : 'emails'} until verified`} checked={draft.restrict}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => update('restrict', event.target.checked)} />
      <section className="record-auth-form__section" aria-labelledby={`${id}-settings`}>
        <h2 id={`${id}-settings`}>{phone ? 'OTP Configuration' : 'Verification Link Configuration'}</h2>
        {phone && <FormRow label="OTP Length"><div className="record-auth-form__inline" role="radiogroup" aria-label="OTP Length">
          {(['6', '4'] as const).map(digits => <Radio key={digits} label={`${digits} Digits`} name={`${id}-digits`}
            checked={draft.digits === digits} onChange={() => update('digits', digits)} />)}
        </div></FormRow>}
        <FormRow label={phone ? 'Valid for' : 'Verification Link Validity'}>
          {numberInput('validity', phone ? 'OTP validity' : 'Verification link validity', phone ? 'Minutes' : 'Day(s)')}
        </FormRow>
        {phone ? <>
          <FormRow label="SMS Carrier">
            <div role="group" aria-label="SMS carrier selection" aria-invalid={!!errors.carrier}
              aria-describedby={errors.carrier ? `${id}-carrier-error` : undefined}>
              <Dropdown aria-label="SMS Carrier" width="100%" value={draft.carrier}
                options={CARRIERS} onChange={(value: string) => update('carrier', value)} />
              {fieldError('carrier')}
            </div>
          </FormRow>
          <div className="record-auth-form__row record-auth-form__template-row">
            <label className="record-auth-form__label" htmlFor={`${id}-sms-template`}>SMS Template</label>
            <div>
              <Textarea id={`${id}-sms-template`} error={!!errors.template} aria-invalid={!!errors.template}
                aria-describedby={`${id}-sms-hint${errors.template ? ` ${id}-template-error` : ''}`} width="100%" minHeight={90} maxLength={160} value={draft.template}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => update('template', event.target.value)} />
              {fieldError('template')}
              <div className="record-auth-form__count">
                <span id={`${id}-sms-hint`}>Type # to insert merge field</span><span>{draft.template.length}/160</span>
              </div>
              <div className="record-auth-form__preview" role="region" aria-label="SMS Preview"><strong>SMS Preview</strong><p>{smsPreview(draft)}</p></div>
              <Button variant="link-primary" size="sm">Send Text SMS</Button>
            </div>
          </div>
        </> : <>
          <FormRow label="Email Content">
            <Button variant="default" className="record-auth-form__template-input" aria-haspopup="dialog"
              onClick={() => setPreview({ title: 'Email Content', content: '', kind: 'email' })}>
              <span>{EMAIL_TEMPLATES.find(template => template.value === draft.emailTemplate)?.label}</span>
              <Icon name="Edit" size={16} />
            </Button>
          </FormRow>
          <FormRow label="Verification Page">
            <Button variant="default" className="record-auth-form__template-input" aria-haspopup="dialog"
              onClick={() => setPreview({ title: 'Verification Page', content: '', kind: 'page' })}>
              <span>{VERIFICATION_PAGES.find(page => page.value === draft.verificationPage)?.label}</span>
              <Icon name="Edit" size={16} />
            </Button>
          </FormRow>
        </>}
      </section>
      {phone && !more && <div><Button variant="link-primary" aria-expanded={more} aria-controls={`${id}-more`}
        onClick={() => setMore(true)}>More Options</Button></div>}
      {(!phone || more) && <div id={`${id}-more`} className="record-auth-form__options">
        <section className="record-auth-form__section" aria-labelledby={`${id}-resend`}>
          <h2 id={`${id}-resend`}>Resend Options</h2>
          {phone && <FormRow label="OTP Resend">
            <Dropdown aria-label="OTP Resend" width="100%" options={RESEND_MODES}
              value={draft.resendMode} onChange={(value: string) => update('resendMode', value)} />
          </FormRow>}
          <FormRow label="Max Resend Attempts">{numberInput('resendAttempts', 'Max Resend Attempts')}</FormRow>
          <FormRow label="Reset Attempt After">{numberInput('resetAfter', 'Reset resend attempt after', phone ? 'Minutes' : 'Hour(s)')}</FormRow>
        </section>
        {phone && <section className="record-auth-form__section" aria-labelledby={`${id}-validation`}>
          <h2 id={`${id}-validation`}>Validation Options</h2>
          <FormRow label="Max Validation Attempts">{numberInput('validationAttempts', 'Max Validation Attempts')}</FormRow>
          <FormRow label="Reset Attempt After">{numberInput('validationReset', 'Reset validation attempt after', 'Hour(s)')}</FormRow>
        </section>}
      </div>}
      {!phone && <MessageInfo variant="info" message="A new send invalidates the previous link. Latest request wins." />}
    </div>
  </Modal>
    {preview?.kind && <TemplateDialog kind={preview.kind} validity={draft.validity}
      initial={preview.kind === 'email' ? draft.emailContent : draft.pageContent}
      onClose={() => setPreview(undefined)} onSave={settings => {
        update(preview.kind === 'email' ? 'emailContent' : 'pageContent', settings);
        setPreview(undefined);
      }} />}
  </>;
}

function VerificationSummary({ channel, config, onEdit, onPreview }: {
  channel: Channel; config: VerificationConfig; onEdit: () => void; onPreview: (preview: Preview) => void;
}) {
  const phone = channel === 'phone';
  const title = phone ? 'OTP Configuration for Phone Number Verification' : 'Verification Link for Email Address Verification';
  const emailName = EMAIL_TEMPLATES.find(template => template.value === config.emailTemplate)?.label;
  const pageName = VERIFICATION_PAGES.find(page => page.value === config.verificationPage)?.label;
  return <section className="record-auth__summary" aria-label={title}>
    <div className="record-auth__summary-title"><h2><Icon name={phone ? 'Mobile' : 'Email'} size={20} />{title}</h2><Button variant="link-primary" size="sm"
      aria-label={`Edit ${phone ? 'phone' : 'email'} verification`} onClick={onEdit}>Edit</Button></div>
    <div className="record-auth__summary-card">
      <p>{phone ? `${config.digits} Digit OTP - Valid for ${config.validity} minutes` : `Link valid for ${config.validity} days`}</p>
      <dl>
        <dt>Resend:</dt><dd>{config.resendAttempts} attempts, Reset after {config.resetAfter} {phone ? 'minutes' : 'hours'}</dd>
        {phone && <><dt>Validation:</dt><dd>{config.validationAttempts} attempts, Reset after {config.validationReset} {config.validationReset === '1' ? 'hour' : 'hours'}</dd></>}
      </dl>
      <div className="record-auth__links">{phone ? <Button variant="link-primary" onClick={() => onPreview({ title: 'SMS Template', content: config.template })}>View SMS Template</Button> : <>
        <Button variant="link-primary" onClick={() => onPreview({ title: emailName ?? 'Email Content', content: '', kind: 'email' })}>Verification Link Email Template</Button>
        <Button variant="link-primary" onClick={() => onPreview({ title: pageName ?? 'Verification Page', content: '', kind: 'page' })}>Verification Page</Button>
      </>}</div>
    </div>
  </section>;
}

function RecordAuthenticationPage({ initial = 'empty', dialog, expanded = false, configuration = false }: PageProps) {
  const id = useId();
  const [activeTab, setActiveTab] = useState(configuration ? 'configuration' : 'verification');
  const [saved, setSaved] = useState<SavedSettings>(() => initial === 'empty' ? {} : {
    phone: { ...defaultConfig('phone'), carrier: 'twilio' },
    ...(initial === 'both' ? { email: defaultConfig('email') } : {}),
  });
  const [editing, setEditing] = useState<Channel | undefined>(dialog);
  const [preview, setPreview] = useState<Preview | undefined>();
  const [notice, setNotice] = useState<{ message: string }>();
  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(undefined), 5000);
    return () => window.clearTimeout(timeout);
  }, [notice]);
  const [sidebarId, setSidebarId] = useState('modules');
  const configured = !!saved.phone || !!saved.email;
  const availableChannels = VERIFICATION_CHANNELS.filter(option => !saved[option.value as Channel]);
  return <div className="record-auth">
    <header><NextGenTopBand moduleLabel={null} showTerritory={false} /></header>
    <div className="record-auth__shell">
      <aside className="record-auth__sidebar" aria-label="Setup navigation"><VerticalTabs title="Setup" searchable
        width="100%" items={SETUP_ITEMS} activeId={sidebarId} onSelect={setSidebarId} variant="1" /></aside>
      <main className="record-auth__workspace" aria-label="Record Authentication">
        <div className="record-auth__module-title"><h1>Contacts</h1></div>
        <nav className="record-auth__module-tabs" aria-label="Contacts settings">{MODULE_TABS.map(tab =>
          <span key={tab} aria-current={tab === 'Record Authentication' ? 'page' : undefined}>{tab}</span>)}</nav>
        <div className="record-auth__content">
          <Tabs tabs={FEATURE_TABS} activeTab={activeTab} onChange={setActiveTab} variant="secondary" />
          <div className="record-auth__panel" role="tabpanel" aria-label={activeTab === 'verification' ? 'Data Verification' : 'Record Configuration'}>
            {activeTab === 'verification' && <>
              <div className="record-auth__intro"><p>Verify that phone numbers and email addresses belong to the contact.</p>
                {configured && availableChannels.length > 0 && <Dropdown id={`${id}-verify`} width="fit-content" placeholder="Verify via" value="" triggerButtonVariant="primary"
                  panelStyle={{ width: 'max-content', maxWidth: 'calc(100vw - 24px)' }}
                  options={availableChannels}
                  onChange={(value: string) => setEditing(value as Channel)} />}
              </div>
              {!configured && <Dropdown id={`${id}-verify`} width={180} placeholder="Verify via" value="" triggerButtonVariant="primary"
                panelStyle={{ width: 'max-content', maxWidth: 'calc(100vw - 24px)' }}
                  options={availableChannels}
                onChange={(value: string) => setEditing(value as Channel)} />}
              {(['phone', 'email'] as const).map(channel => saved[channel] && <VerificationSummary key={channel}
                channel={channel} config={saved[channel]} onEdit={() => setEditing(channel)} onPreview={setPreview} />)}
            </>}
          </div>
        </div>
      </main>
    </div>
    <footer className="record-auth__wms" aria-label="Communication bar"><WMSBar /></footer>
    {notice && <MessageBox className="record-auth__notice" variant="success" message={notice.message}
      onClose={() => setNotice(undefined)} />}
    {editing && <VerificationDialog key={editing} channel={editing} initial={saved[editing] ?? defaultConfig(editing)} expanded={expanded}
      onClose={() => setEditing(undefined)} onSave={config => {
        setSaved(current => ({ ...current, [editing]: config }));
        setNotice({ message: `${editing === 'phone' ? 'Phone Number' : 'Email Address'} verification configured successfully` });
        setEditing(undefined);
      }} />}
    {preview?.kind && <TemplateDialog kind={preview.kind} validity={saved.email?.validity}
      initial={preview.kind === 'email' ? saved.email?.emailContent : saved.email?.pageContent}
      onClose={() => setPreview(undefined)} onSave={settings => {
        const key = preview.kind === 'email' ? 'emailContent' : 'pageContent';
        setSaved(current => current.email ? ({ ...current, email: { ...current.email, [key]: settings } }) : current);
        setPreview(undefined);
      }} />}
    {preview && !preview.kind && <Modal isOpen title={preview.title} width={620} onClose={() => setPreview(undefined)} onSave={() => setPreview(undefined)} saveLabel="Done">
      <div className="record-auth-form"><p className="record-auth-form__template">{preview.content}</p></div>
    </Modal>}
  </div>;
}

const meta = {
  title: 'Design System/Patterns/Record Authentication',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Data Verification configuration based on the six provided PDF frames. Phone OTP, email verification links, template previews, and in-memory saved summaries. Record Configuration is intentionally empty. No real SMS, email, or authentication requests are made.' } } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RecordAuthenticationPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvasElement.querySelector('.ngtb-badge')).not.toBeInTheDocument();
    await expect(within(canvas.getByRole('button', { name: 'User profile' })).getByRole('img', { name: 'User' })).toHaveAttribute('src', `${import.meta.env.BASE_URL}images/avatars/user_06.jpg`);
    const verifyButton = canvas.getByRole('button', { name: 'Verify via' });
    await expect(verifyButton).toHaveAttribute('data-variant', 'primary');
    await userEvent.click(verifyButton);
    for (const name of ['Phone Number', 'Email Address']) {
      await expect(body.getByRole('option', { name }).querySelector('.dropdown-option-icon svg')).toBeInTheDocument();
    }
    await userEvent.click(body.getByRole('option', { name: 'Phone Number' }));
    const dialog = await body.findByRole('dialog');
    await expect(within(dialog).getByText('Data Verification via Phone Number')).toBeVisible();
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('region', { name: 'OTP Configuration for Phone Number Verification' })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', { name: 'Record Configuration' }));
    await expect(canvas.getByRole('tabpanel', { name: 'Record Configuration' })).toBeEmptyDOMElement();
    await userEvent.click(canvas.getByRole('tab', { name: 'Data Verification' }));
  },
};
export const PhoneVerification: Story = { render: () => <RecordAuthenticationPage dialog="phone" /> };
export const PhoneMoreOptions: Story = {
  render: () => <RecordAuthenticationPage dialog="phone" expanded />,
  play: async ({ canvasElement }) => {
    const form = within(await within(canvasElement.ownerDocument.body).findByRole('dialog'));
    const attempts = form.getByRole('spinbutton', { name: 'Max Resend Attempts' });
    await userEvent.clear(attempts);
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await expect(attempts).toHaveAccessibleDescription('Max Resend Attempts cannot be empty');
    await userEvent.type(attempts, '0');
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await expect(attempts).toHaveAccessibleDescription('Max Resend Attempts must be a positive whole number');
    await userEvent.clear(attempts);
    await userEvent.type(attempts, '5');
    await expect(attempts).not.toHaveAttribute('aria-invalid', 'true');
  },
};
export const EmailVerification: Story = {
  render: () => <RecordAuthenticationPage dialog="email" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const form = within(await body.findByRole('dialog'));
    const validity = form.getByRole('spinbutton', { name: 'Verification link validity' });
    await userEvent.clear(validity);
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await expect(form.getByRole('alert')).toHaveTextContent('Verification Link Validity cannot be empty');
    await expect(validity).toHaveAttribute('aria-invalid', 'true');
    await expect(validity).toHaveAccessibleDescription('Day(s) Verification Link Validity cannot be empty');
    await expect(form.getByRole('alert').parentElement).toContainElement(validity);
    await userEvent.type(validity, '10');
    for (const [link, title, sample] of [
      ['Verification Link Email', 'Edit Email Content', 'Email template body'],
      ['Verification Page', 'Edit Verification Page', 'Verification page body'],
    ]) {
      const settings = within(await body.findByRole('dialog'));
      const trigger = settings.getByRole('button', { name: link });
      await expect(trigger).toHaveClass('record-auth-form__template-input');
      await expect(trigger.querySelector('svg')).toHaveAttribute('width', '16');
      await userEvent.click(trigger);
      await expect(body.getByRole('dialog', { name: 'Data Verification via Email Address' })).toBeVisible();
      await expect(body.getAllByRole('dialog')).toHaveLength(2);
      const preview = within(await body.findByRole('dialog', { name: title }));
      const editor = preview.getByRole('textbox', { name: sample });
      await waitFor(() => expect(editor).toBeVisible());
      await expect(preview.getByRole('button', { name: 'English (United States)' })).toBeVisible();
      await expect(preview.queryByTitle('Expand')).not.toBeInTheDocument();
      await userEvent.click(preview.getByRole('button', { name: 'English (United States)' }));
      await userEvent.click(body.getByRole('option', { name: 'French', exact: true }));
      await expect(preview.getByRole('button', { name: 'French', exact: true })).toBeVisible();
      if (title === 'Edit Email Content') {
        const verify = preview.getByRole('button', { name: 'Verify email address' });
        await expect(verify).toBeVisible();
        await expect(getComputedStyle(verify).backgroundImage).toBe('none');
        await expect(getComputedStyle(verify).fontSize).toBe('14px');
        const from = preview.getByRole('button', { name: 'Record Owner’s Email' });
        await expect(getComputedStyle(from).fontSize).toBe('14px');
        if (window.innerWidth >= 900) await expect(Math.round(from.getBoundingClientRect().width)).toBe(390);
        for (const label of ['From', 'Subject']) {
          await expect(getComputedStyle(preview.getByText(label, { exact: true })).textAlign).toBe('right');
        }
      }
      await userEvent.click(editor);
      await userEvent.keyboard('{ControlOrMeta>}a{/ControlOrMeta}');
      await userEvent.type(editor, 'Custom verification content');
      await userEvent.click(preview.getByRole('button', { name: 'Reset to default' }));
      await expect(preview.getByRole('textbox', { name: sample })).not.toHaveTextContent('Custom verification content');
      if (title === 'Edit Email Content') {
        await userEvent.clear(preview.getByRole('textbox', { name: 'Subject' }));
        await userEvent.type(preview.getByRole('textbox', { name: 'Subject' }), 'Confirm your email');
      }
      if (title === 'Edit Verification Page') await userEvent.keyboard('{Escape}');
      else await userEvent.click(preview.getByRole('button', { name: 'Save' }));
      await waitFor(() => expect(body.getAllByRole('dialog')).toHaveLength(1));
      const restored = within(await body.findByRole('dialog', { name: 'Data Verification via Email Address' }));
      await expect(restored.getByRole('spinbutton', { name: 'Verification link validity' })).toHaveValue(10);
    }
    await userEvent.click(within(await body.findByRole('dialog')).getByRole('button', { name: 'Verification Link Email' }));
    const savedTemplate = within(await body.findByRole('dialog', { name: 'Edit Email Content' }));
    await expect(savedTemplate.getByRole('textbox', { name: 'Subject' })).toHaveValue('Confirm your email');
    await userEvent.click(savedTemplate.getByRole('button', { name: 'Cancel' }));
    await userEvent.click(within(await body.findByRole('dialog')).getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Link valid for 10 days')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Verify via' }));
    await expect(body.queryByRole('option', { name: 'Email Address' })).not.toBeInTheDocument();
    await expect(body.getByRole('option', { name: 'Phone Number' })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await userEvent.click(canvas.getByRole('button', { name: 'Edit email verification' }));
    const edit = within(await body.findByRole('dialog'));
    await expect(edit.getByRole('spinbutton', { name: 'Verification link validity' })).toHaveValue(10);
    await userEvent.click(edit.getByRole('button', { name: 'Cancel' }));
  },
};
export const PhoneConfigured: Story = {
  render: () => <RecordAuthenticationPage initial="phone" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: 'Verify via' }));
    await expect(body.queryByRole('option', { name: 'Phone Number' })).not.toBeInTheDocument();
    await userEvent.click(body.getByRole('option', { name: 'Email Address' }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('button', { name: 'Verify via' })).not.toBeInTheDocument();
    const notice = canvas.getByRole('status');
    await expect(notice).toHaveClass('record-auth__notice');
    await expect(getComputedStyle(notice).position).toBe('fixed');
    await expect(notice).toHaveTextContent('Email Address verification configured successfully');
    await waitFor(() => expect(canvas.queryByRole('status')).not.toBeInTheDocument(), { timeout: 6500 });
  },
};
export const Configured: Story = {
  render: () => <RecordAuthenticationPage initial="both" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByText('6 Digit OTP - Valid for 4 minutes')).toBeVisible();
    await expect(canvas.getByText('Link valid for 7 days')).toBeVisible();
    await expect(canvas.queryByRole('button', { name: 'Verify via' })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: 'View SMS Template' }));
    const preview = within(await body.findByRole('dialog'));
    await waitFor(() => expect(preview.getByText(/Your verification OTP is/)).toBeVisible());
    await userEvent.click(preview.getByRole('button', { name: 'Done' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', { name: 'Edit phone verification' }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('radio', { name: '4 Digits' }));
    await expect(form.getByRole('region', { name: 'SMS Preview' })).toHaveTextContent('4829');
    await userEvent.click(form.getByRole('button', { name: 'More Options' }));
    await expect(form.queryByRole('button', { name: 'Fewer Options' })).not.toBeInTheDocument();
    for (const name of ['OTP validity', 'Reset resend attempt after']) {
      const input = form.getByRole('spinbutton', { name });
      await expect(input).toHaveAccessibleDescription('Minute(s)');
      await expect(input.closest('.input-input-wrapper')?.querySelector('.input-suffix')).toBeFalsy();
    }
    await expect(form.getByRole('spinbutton', { name: 'Max Resend Attempts' })).toHaveValue(5);
    await expect(form.getByRole('textbox', { name: 'SMS Template' })).toHaveAccessibleDescription('Type # to insert merge field');
    await expect(form.getByText('SMS Preview')).toBeVisible();
    const testSms = form.getByRole('button', { name: 'Send Text SMS' });
    await expect(testSms).toHaveAttribute('data-variant', 'link-primary');
    await userEvent.click(testSms);
    await expect(form.queryByText('Demo preview only. No SMS was sent.')).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('4 Digit OTP - Valid for 4 minutes')).toBeVisible();
    for (const title of ['OTP Configuration for Phone Number Verification', 'Verification Link for Email Address Verification']) {
      const heading = canvas.getByRole('heading', { name: title });
      await expect(heading.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    }
    const success = canvas.getByRole('status');
    await expect(success).toHaveClass('message-box-success');
    await expect(success).toHaveTextContent('Phone Number verification configured successfully');
    await userEvent.click(within(success).getByRole('button', { name: 'Dismiss' }));
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
  },
};
export const RecordConfiguration: Story = { render: () => <RecordAuthenticationPage configuration /> };
