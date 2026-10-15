import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Input } from '../components/Input/Input';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { Modal } from '../components/Modal/Modal';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { Radio } from '../components/Radio/Radio';
import { Tabs } from '../components/Tabs/Tabs';
import { Tags } from '../components/Tags/Tags';
import { Textarea } from '../components/Textarea/Textarea';
import { VerticalTabs } from '../components/VerticalTabs/VerticalTabs';
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
const CARRIERS = [{ value: 'twilio', label: 'Twilio' }, { value: 'messagebird', label: 'MessageBird' }];
const RESEND_MODES = [{ value: 'same', label: 'Same OTP' }, { value: 'new', label: 'New OTP' }];
type SavedSettings = Partial<Record<Channel, VerificationConfig>>;
type PageProps = { initial?: 'empty' | 'phone' | 'both'; dialog?: Channel; expanded?: boolean; configuration?: boolean };
type Preview = { title: string; content: string };

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
  const [error, setError] = useState('');
  const [testPreview, setTestPreview] = useState(false);
  const phone = channel === 'phone';
  const update = <K extends keyof VerificationConfig>(key: K, value: VerificationConfig[K]) => {
    setDraft(current => ({ ...current, [key]: value }));
    setTestPreview(false);
  };
  const save = () => {
    const numbers = [draft.validity, draft.resendAttempts, draft.resetAfter,
      ...(phone ? [draft.validationAttempts, draft.validationReset] : [])];
    if (!draft.fields.length) return setError('Select at least one field to verify.');
    if (numbers.some(value => !/^\d+$/.test(value) || !Number.isSafeInteger(Number(value)) || Number(value) < 1)) {
      return setError('Enter positive whole numbers for validity, attempts, and reset intervals.');
    }
    if (phone && !draft.carrier) return setError('Select an SMS carrier.');
    if (phone && (!draft.template.trim() || draft.template.length > 160 || !draft.template.includes('${OTP}'))) {
      return setError('Enter an SMS template of up to 160 characters containing ${OTP}.');
    }
    onSave(draft);
  };
  const numberInput = (key: 'validity' | 'resendAttempts' | 'resetAfter' | 'validationAttempts' | 'validationReset', label: string, suffix?: string) => (
    <Input type="number" aria-label={label} min={1} step={1} width="100%" value={draft[key]}
      suffix={suffix} onChange={(event: React.ChangeEvent<HTMLInputElement>) => update(key, event.target.value)} />
  );
  return <Modal isOpen title={`Data Verification via ${phone ? 'Phone Number' : 'Email Address'}`}
    width={670} onClose={onClose} onSave={save}>
    <div className="record-auth-form">
      <FormRow label="Fields"><div role="group" aria-label="Fields to verify">
        <Tags value={draft.fields} options={phone ? PHONE_FIELDS : EMAIL_FIELDS} placeholder="Add"
          onChange={(fields: Field[]) => update('fields', fields)} width="100%" />
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
          {numberInput('validity', phone ? 'OTP validity' : 'Verification link validity', phone ? 'Minutes' : 'Days')}
        </FormRow>
        {phone ? <>
          <Dropdown label="SMS Carrier" width="100%" columns="1.1fr 2fr" value={draft.carrier}
            options={CARRIERS} onChange={(value: string) => update('carrier', value)} />
          <FormRow label="SMS Template">
            <Textarea aria-label="SMS Template" width="100%" minHeight={90} maxLength={160} value={draft.template}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => update('template', event.target.value)} />
            <div className="record-auth-form__count"><span>Use {'${OTP}'} and {'${Valid For}'} to insert verification details</span><span>{draft.template.length}/160</span></div>
            <div className="record-auth-form__preview" role="region" aria-label="SMS Preview"><strong>SMS Preview</strong><p>{smsPreview(draft)}</p></div>
            <Button variant="default" size="sm" onClick={() => setTestPreview(true)}>Send Test SMS</Button>
            {testPreview && <MessageInfo variant="info" message="Demo preview only. No SMS was sent." />}
          </FormRow>
        </> : <>
          <Dropdown label="Email Content" width="100%" columns="1.1fr 2fr" value={draft.emailTemplate}
            options={EMAIL_TEMPLATES} onChange={(value: string) => update('emailTemplate', value)} />
          <Dropdown label="Verification Page" width="100%" columns="1.1fr 2fr" value={draft.verificationPage}
            options={VERIFICATION_PAGES} onChange={(value: string) => update('verificationPage', value)} />
        </>}
      </section>
      {phone && <div><Button variant="link-primary" aria-expanded={more} aria-controls={`${id}-more`}
        onClick={() => setMore(current => !current)}>{more ? 'Fewer Options' : 'More Options'}</Button></div>}
      {(!phone || more) && <div id={`${id}-more`} className="record-auth-form__section">
        <section className="record-auth-form__section" aria-labelledby={`${id}-resend`}>
          <h2 id={`${id}-resend`}>Resend Options</h2>
          {phone && <Dropdown label="OTP Resend" width="100%" columns="1.1fr 2fr" options={RESEND_MODES}
            value={draft.resendMode} onChange={(value: string) => update('resendMode', value)} />}
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
      {error && <p className="record-auth-form__error" role="alert">{error}</p>}
    </div>
  </Modal>;
}

function VerificationSummary({ channel, config, onEdit, onPreview }: {
  channel: Channel; config: VerificationConfig; onEdit: () => void; onPreview: (preview: Preview) => void;
}) {
  const phone = channel === 'phone';
  const title = phone ? 'OTP Configuration for Phone Number Verification' : 'Verification Link for Email Address Verification';
  const emailName = EMAIL_TEMPLATES.find(template => template.value === config.emailTemplate)?.label;
  const pageName = VERIFICATION_PAGES.find(page => page.value === config.verificationPage)?.label;
  return <section className="record-auth__summary" aria-label={title}>
    <div className="record-auth__summary-title"><h2>{title}</h2><Button variant="link-primary" size="sm"
      aria-label={`Edit ${phone ? 'phone' : 'email'} verification`} onClick={onEdit}>Edit</Button></div>
    <div className="record-auth__summary-card">
      <p>{phone ? `${config.digits} Digit OTP - Valid for ${config.validity} minutes` : `Link valid for ${config.validity} days`}</p>
      <dl>
        <dt>Resend:</dt><dd>{config.resendAttempts} attempts, Reset after {config.resetAfter} {phone ? 'minutes' : 'hours'}</dd>
        {phone && <><dt>Validation:</dt><dd>{config.validationAttempts} attempts, Reset after {config.validationReset} {config.validationReset === '1' ? 'hour' : 'hours'}</dd></>}
      </dl>
      <div className="record-auth__links">{phone ? <Button variant="link-primary" onClick={() => onPreview({ title: 'SMS Template', content: config.template })}>View SMS Template</Button> : <>
        <Button variant="link-primary" onClick={() => onPreview({ title: `${emailName} Template`, content: `Hi Ananya,\n\nPlease verify your email address using the verification link provided in your CRM email.\n\nThis link is valid for ${config.validity} days. If you did not request this verification, ignore this email.\n\nZoho CRM\n\nSample template preview — no live verification link.` })}>Verification Link Email Template</Button>
        <Button variant="link-primary" onClick={() => onPreview({ title: pageName ?? 'Verification Page', content: 'Email address verified\n\nThank you for confirming your email address.\n\nSample success page — no verification has been performed.' })}>Verification Page</Button>
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
  const [notice, setNotice] = useState('');
  const [sidebarId, setSidebarId] = useState('modules');
  const configured = !!saved.phone || !!saved.email;
  return <div className="record-auth">
    <header><NextGenTopBand moduleLabel="Setup Home" notificationCount={3} userInitials="AK" /></header>
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
                {configured && <Dropdown id={`${id}-verify`} width="fit-content" placeholder="Verify via" value=""
                  options={[{ value: 'phone', label: 'Phone Number' }, { value: 'email', label: 'Email Address' }]}
                  onChange={(value: string) => setEditing(value as Channel)} />}
              </div>
              {!configured && <Dropdown id={`${id}-verify`} width={180} placeholder="Verify via" value=""
                options={[{ value: 'phone', label: 'Phone Number' }, { value: 'email', label: 'Email Address' }]}
                onChange={(value: string) => setEditing(value as Channel)} />}
              {(['phone', 'email'] as const).map(channel => saved[channel] && <VerificationSummary key={channel}
                channel={channel} config={saved[channel]} onEdit={() => setEditing(channel)} onPreview={setPreview} />)}
              {notice && <MessageInfo variant="success" message={notice} />}
            </>}
          </div>
        </div>
      </main>
    </div>
    {editing && <VerificationDialog key={editing} channel={editing} initial={saved[editing] ?? defaultConfig(editing)} expanded={expanded}
      onClose={() => setEditing(undefined)} onSave={config => {
        setSaved(current => ({ ...current, [editing]: config }));
        setNotice(`${editing === 'phone' ? 'Phone' : 'Email'} verification configuration saved for this demo.`);
        setEditing(undefined);
      }} />}
    {preview && <Modal isOpen title={preview.title} width={620} onClose={() => setPreview(undefined)} onSave={() => setPreview(undefined)} saveLabel="Done">
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
    await userEvent.click(canvas.getByRole('button', { name: 'Verify via' }));
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
export const PhoneMoreOptions: Story = { render: () => <RecordAuthenticationPage dialog="phone" expanded /> };
export const EmailVerification: Story = {
  render: () => <RecordAuthenticationPage dialog="email" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const form = within(await body.findByRole('dialog'));
    const validity = form.getByRole('spinbutton', { name: 'Verification link validity' });
    await userEvent.clear(validity);
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await expect(form.getByRole('alert')).toHaveTextContent('Enter positive whole numbers');
    await userEvent.type(validity, '10');
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Link valid for 10 days')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Edit email verification' }));
    const edit = within(await body.findByRole('dialog'));
    await expect(edit.getByRole('spinbutton', { name: 'Verification link validity' })).toHaveValue(10);
    await userEvent.click(edit.getByRole('button', { name: 'Cancel' }));
  },
};
export const PhoneConfigured: Story = { render: () => <RecordAuthenticationPage initial="phone" /> };
export const Configured: Story = {
  render: () => <RecordAuthenticationPage initial="both" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByText('6 Digit OTP - Valid for 4 minutes')).toBeVisible();
    await expect(canvas.getByText('Link valid for 7 days')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'View SMS Template' }));
    const preview = within(await body.findByRole('dialog'));
    await expect(preview.getByText(/Your verification OTP is/)).toBeVisible();
    await userEvent.click(preview.getByRole('button', { name: 'Done' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', { name: 'Edit phone verification' }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('radio', { name: '4 Digits' }));
    await expect(form.getByRole('region', { name: 'SMS Preview' })).toHaveTextContent('4829');
    await userEvent.click(form.getByRole('button', { name: 'More Options' }));
    await expect(form.getByRole('spinbutton', { name: 'Max Resend Attempts' })).toHaveValue(5);
    await userEvent.click(form.getByRole('button', { name: 'Send Test SMS' }));
    await expect(form.getByText('Demo preview only. No SMS was sent.')).toBeVisible();
    await userEvent.click(form.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('4 Digit OTP - Valid for 4 minutes')).toBeVisible();
  },
};
export const RecordConfiguration: Story = { render: () => <RecordAuthenticationPage configuration /> };
