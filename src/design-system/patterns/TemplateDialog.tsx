import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Input } from '../components/Input/Input';
import { Modal } from '../components/Modal/Modal';
import { RichTextEditor } from '../components/RichTextEditor/RichTextEditor';
import './RecordAuthentication.css';

export type TemplateSettings = { subject: string; sender: string; body: string };
const DEFAULT_SUBJECT = 'Verify your email address with ${Organization.OrganizationName}';
function templateDefaults(kind: 'email' | 'page', validity = '7'): TemplateSettings {
  return {
    sender: 'owner', subject: DEFAULT_SUBJECT,
    body: kind === 'email'
      ? `Hello \${Contacts.FullName},\n\nPlease verify your email address with \${Organization.OrganizationName}. To confirm your email address, please click on the button below. This link expires in ${validity} day(s).\n\n[Verify email address]\n\nIf you did not request this verification, please ignore this email.\n\nRegards,\n\${Organization.OrganizationName}`
      : 'Email address verified\n\nThank you for confirming your email address. You can now close this page.',
  };
}

// Figma 54195:187585: shared template-modal composition of existing primitives.
export function TemplateDialog({ kind, initial, validity, onClose, onSave, readOnly = false, defaults, title }: {
  kind: 'email' | 'page'; initial?: TemplateSettings; validity?: string; readOnly?: boolean;
  defaults?: TemplateSettings; title?: string;
  onClose: () => void; onSave?: (settings: TemplateSettings) => void;
}) {
  const [settings, setSettings] = useState(() => initial ?? defaults ?? templateDefaults(kind, validity));
  const [language, setLanguage] = useState('en-US');
  const [editorContent, setEditorContent] = useState(settings.body);
  const [editorKey, setEditorKey] = useState(0);
  const reset = () => {
    const next = defaults ?? templateDefaults(kind, validity);
    setSettings(next); setEditorContent(next.body); setEditorKey(key => key + 1);
  };
  return <Modal isOpen title={title ?? (readOnly ? (kind === 'email' ? 'Verification Link Email Preview' : 'Verification Page Preview') : (kind === 'email' ? 'Edit Email Content' : 'Edit Verification Page'))} width={865}
    className={`record-auth-template-modal${readOnly ? ' record-auth-preview-modal' : ''}`} disableAutoFocus
    showFooter={!readOnly} showClose={readOnly} closeLabel="Close preview"
    headerActions={!readOnly && kind === 'email' ? <Dropdown aria-label="Template language" width="fit-content" value={language} onChange={setLanguage}
      panelStyle={{ width: 'max-content', maxWidth: 'calc(100vw - 24px)' }}
      options={[
        { value: 'en-US', label: 'English (United States)' },
        { value: 'en-GB', label: 'English (United Kingdom)' },
        { value: 'fr', label: 'French' }, { value: 'de', label: 'German' },
        { value: 'es', label: 'Spanish' }, { value: 'it', label: 'Italian' },
        { value: 'pt', label: 'Portuguese' }, { value: 'nl', label: 'Dutch' },
        { value: 'ja', label: 'Japanese' }, { value: 'zh', label: 'Chinese (Simplified)' },
        { value: 'hi', label: 'Hindi' }, { value: 'ta', label: 'Tamil' },
      ]} /> : undefined}
    footerStart={<Button variant="ghost-blue" onClick={reset}>Reset to default</Button>}
    onClose={onClose} onSave={() => onSave?.(settings)}>
    <div className={`record-auth-template${kind === 'page' ? ' record-auth-template--page' : ''}`}>
      {readOnly && kind === 'email' && <dl className="record-auth-preview__fields">
        <dt>From</dt><dd>{settings.sender === 'organization' ? 'Organization Email' : 'Record Owner’s Email'}</dd>
        <dt>Subject</dt><dd>{settings.subject}</dd>
      </dl>}
      {!readOnly && kind === 'email' && <div className="record-auth-template__fields">
        <Dropdown label="From" aria-label="From" width="100%" value={settings.sender}
          options={[{ value: 'owner', label: 'Record Owner’s Email' }, { value: 'organization', label: 'Organization Email' }]}
          onChange={(sender: string) => setSettings(current => ({ ...current, sender }))} />
        <Input label="Subject" width="100%" value={settings.subject}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSettings(current => ({ ...current, subject: event.target.value }))} />
      </div>}
      {readOnly ? <div className="rte-field"><div className="rte-editor-wrap">
        <div className="rte-editor" role="region" aria-label={kind === 'email' ? 'Email template preview' : 'Verification page preview'}>
          {kind === 'email' ? settings.body.split('[Verify email address]').map((part, index) => <span key={index}>
            {index > 0 && <span className="record-auth-preview__verify">Verify email address</span>}{part}
          </span>) : <>
            <h2>{settings.body.split('\n\n')[0]}</h2>
            {settings.body.split('\n\n').slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </>}
        </div>
      </div></div> : <RichTextEditor key={editorKey} width="100%" minHeight={kind === 'page' ? 0 : 380} alwaysShowToolbar toolbarPosition="top" showExpand={false}
        aria-label={kind === 'email' ? 'Email template body' : 'Verification page body'} initialContent={kind === 'email' ? editorContent.split('[Verify email address]').map((part, index) => (
          <span key={index}>{index > 0 && <span contentEditable={false}>
            <Button variant="primary" className="record-auth-template__verify">Verify email address</Button>
          </span>}{part}</span>
        )) : <>
          <h2>{editorContent.split('\n\n')[0]}</h2>
          {editorContent.split('\n\n').slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </>}
        onChange={(body: string) => setSettings(current => ({ ...current,
          body: kind === 'email' ? body.replace(/(?<!\[)Verify email address(?!\])/g, '[Verify email address]') : body,
        }))} />}
    </div>
  </Modal>;
}
