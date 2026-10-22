import { useEffect, useId, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Modal } from '../components/Modal/Modal';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Radio } from '../components/Radio/Radio';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Switch } from '../components/Switch/Switch';
import { Button } from '../components/Button/Button';
import './DashboardExport.css';

type FileFormat = 'pdf' | 'html' | 'image';
type PatternArgs = { initialFormat: FileFormat; initiallyOpen: boolean; phase1: boolean };

const formats = [
  { value: 'pdf', label: 'PDF' },
  { value: 'html', label: 'HTML' },
  { value: 'image', label: 'Image' },
];
const paperSizes = ['Letter', 'Legal', 'Tabloid', 'A3', 'A4'].map(value => ({ value, label: value }));

const meta = {
  title: 'Design System/Patterns/Dashboard Export',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dashboard export settings modal based on the PM wireframe. Choose a file name and format, then configure PDF layout, included content, orientation, paper size, and optional password protection. Export validates the settings and closes without an acknowledgement message; generating files and encrypting PDFs require a host application export service.',
      },
    },
  },
  args: { initialFormat: 'pdf', initiallyOpen: true, phase1: false },
  argTypes: {
    initialFormat: { control: 'select', options: formats.map(format => format.value) },
    initiallyOpen: { control: 'boolean' },
    phase1: { control: 'boolean', description: 'Hide orientation, paper settings, and password protection.' },
  },
} satisfies Meta<PatternArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardExport: Story = {
  args: {},

  render: function DashboardExportPattern({ initialFormat, initiallyOpen, phase1 }) {
    const [open, setOpen] = useState(initiallyOpen);
    const [fileName, setFileName] = useState('org_overview');
    const [format, setFormat] = useState<FileFormat>(initialFormat);
    const [eachComponentPerPage, setEachComponentPerPage] = useState(false);
    const [includeTitle, setIncludeTitle] = useState(true);
    const [includeDescription, setIncludeDescription] = useState(true);
    const [orientation, setOrientation] = useState('portrait');
    const [paperSize, setPaperSize] = useState('Letter');
    const [passwordEnabled, setPasswordEnabled] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordSubmitted, setPasswordSubmitted] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const isPdf = format === 'pdf';
    const nameError = submitted && !fileName.trim();
    const passwordError = passwordSubmitted && !phase1 && isPdf && passwordEnabled && !password.trim();

    // Keep keyboard navigation inside this modal without changing the shared Modal.
    useEffect(() => {
      if (!open) return;
      const launchButton = triggerRef.current?.querySelector('button');
      const trapFocus = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;
        const dialog = formRef.current?.closest('[role="dialog"]');
        const elements = Array.from(dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex="0"]',
        ) ?? []).filter(element => element.getClientRects().length > 0);
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && (document.activeElement === first || !dialog?.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialog?.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', trapFocus);
      return () => {
        document.removeEventListener('keydown', trapFocus);
        launchButton?.focus();
      };
    }, [open]);

    const close = () => {
      setOpen(false);
      setPassword('');
      setPasswordEnabled(false);
      setSubmitted(false);
      setPasswordSubmitted(false);
    };
    const save = () => {
      setSubmitted(true);
      setPasswordSubmitted(passwordEnabled);
      if (!fileName.trim() || (!phase1 && isPdf && passwordEnabled && !password.trim())) {
        const fieldId = !fileName.trim() ? `${id}-name` : `${id}-password`;
        document.getElementById(fieldId)?.focus();
        return;
      }
      close();
    };

    return (
      <div className="dashboard-export-launcher">
        <div ref={triggerRef}>
          <Button variant="primary" onClick={() => setOpen(true)}>Export dashboard</Button>
        </div>
        <Modal
          isOpen={open}
          title={'Export Dashboard - "Org Overview"'}
          onClose={close}
          onSave={save}
          cancelLabel="Cancel"
          saveLabel="Export"
          width={phase1 ? 'min(575px, 100vw)' : 'min(760px, 100vw)'}
          className={`dashboard-export-modal${phase1 ? ' dashboard-export-modal--phase1' : ''}`}
        >
          <form ref={formRef} className="dashboard-export-form" noValidate onSubmit={(event: FormEvent) => {
            event.preventDefault();
            save();
          }}>
            <Input
              id={`${id}-name`}
              label="File name"
              width="100%"
              columns="var(--dashboard-export-columns)"
              value={fileName}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setFileName(event.target.value.toLowerCase().replace(/\s+/g, '_'))}
              required
              error={nameError}
              aria-invalid={nameError || undefined}
              helperText={nameError ? 'Enter a file name.' : undefined}
            />
            <div className="dashboard-export-row">
              <span id={`${id}-include`} className="dashboard-export-label">Include</span>
              <fieldset className="dashboard-export-options dashboard-export-includes" aria-labelledby={`${id}-include`}>
                <Checkbox label="Title" checked={includeTitle} onChange={(event: ChangeEvent<HTMLInputElement>) => setIncludeTitle(event.target.checked)} />
                <Checkbox label="Description" checked={includeDescription} onChange={(event: ChangeEvent<HTMLInputElement>) => setIncludeDescription(event.target.checked)} />
              </fieldset>
            </div>
            <Dropdown
              label="File format"
              triggerAriaLabel="File format"
              width="100%"
              columns="var(--dashboard-export-columns)"
              value={format}
              options={formats}
              onChange={(value: FileFormat) => {
                setFormat(value);
                setPassword('');
                setPasswordEnabled(false);
                setPasswordSubmitted(false);
              }}
            />
            {isPdf && <>
              <div className="dashboard-export-row">
                <fieldset className="dashboard-export-options dashboard-export-field" aria-label="PDF layout">
                  <Checkbox label="One component per page" checked={eachComponentPerPage} onChange={(event: ChangeEvent<HTMLInputElement>) => setEachComponentPerPage(event.target.checked)} />
                </fieldset>
              </div>
              {!phase1 && <>
              <div className="dashboard-export-row">
                <span id={`${id}-orientation`} className="dashboard-export-label">Orientation</span>
                <fieldset className="dashboard-export-options" aria-labelledby={`${id}-orientation`}>
                  <Radio name={`${id}-orientation`} label="Portrait" value="portrait" checked={orientation === 'portrait'} onChange={() => setOrientation('portrait')} />
                  <Radio name={`${id}-orientation`} label="Landscape" value="landscape" checked={orientation === 'landscape'} onChange={() => setOrientation('landscape')} />
                </fieldset>
              </div>
              <Dropdown label="PDF paper settings" triggerAriaLabel="PDF paper settings" width="100%" columns="var(--dashboard-export-columns)" value={paperSize} options={paperSizes} onChange={(value: string) => setPaperSize(value)} />
              <div className="dashboard-export-row">
                <label htmlFor={`${id}-protect`} className="dashboard-export-label">Set password</label>
                <Switch id={`${id}-protect`} aria-label="Set password" checked={passwordEnabled} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setPasswordEnabled(event.target.checked);
                  setPassword('');
                  setPasswordSubmitted(false);
                }} />
              </div>
              {passwordEnabled && <Input
                id={`${id}-password`}
                label="Enter password"
                type="password"
                width="100%"
                columns="var(--dashboard-export-columns)"
                autoComplete="new-password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                aria-required="true"
                error={passwordError}
                aria-invalid={passwordError || undefined}
                helperText={passwordError ? 'Enter a password or turn off password protection.' : undefined}
              />}
              </>}
            </>}
          </form>
        </Modal>
      </div>
    );
  },

  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog', { name: 'Export Dashboard - "Org Overview"' }));
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    const layoutCheckbox = dialog.getByRole('checkbox', { name: 'One component per page' });
    await expect(layoutCheckbox).not.toBeChecked();
    await userEvent.click(layoutCheckbox);
    await expect(layoutCheckbox).toBeChecked();
    await userEvent.click(layoutCheckbox);
    await expect(layoutCheckbox).not.toBeChecked();
    const includes = within(dialog.getByRole('group', { name: 'Include' }));
    await expect(includes.getByLabelText('Title')).toBeChecked();
    await expect(includes.getByLabelText('Description')).toBeChecked();
    await userEvent.click(dialog.getByRole('switch', { name: 'Set password' }));
    await expect(dialog.getByLabelText('Enter password')).not.toHaveAttribute('aria-invalid');
    await expect(dialog.getByLabelText('Enter password').closest('.input-root')).not.toHaveAttribute('data-variant', 'error');
    await userEvent.click(dialog.getByRole('button', { name: 'Export', exact: true }));
    await expect(dialog.getByLabelText('Enter password')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('Enter password'), 'Demo-passphrase');
    await userEvent.clear(dialog.getByLabelText('File name'));
    await userEvent.click(dialog.getByRole('button', { name: 'Export', exact: true }));
    await expect(dialog.getByLabelText('File name')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('File name'), 'Org Overview');
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    await userEvent.click(dialog.getByRole('button', { name: 'Export', exact: true }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(page.queryByRole('status')).not.toBeInTheDocument();
    // Leave the modal open for visual review after exercising the save flow.
    await userEvent.click(page.getByRole('button', { name: 'Export dashboard' }));
    await expect(dialog.getByRole('switch', { name: 'Set password' })).not.toBeChecked();
  }
};

export const OtherFormats: Story = {
  ...DashboardExport,
  name: 'Other formats',
  args: { initialFormat: 'html' },
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog'));
    await expect(dialog.queryByRole('group', { name: 'PDF layout' })).not.toBeInTheDocument();
    for (const format of ['Image', 'PDF']) {
      await userEvent.click(dialog.getByRole('button', { name: 'File format' }));
      await expect(page.getAllByRole('option')).toHaveLength(3);
      await expect(page.queryByRole('option', { name: 'Excel', exact: true })).not.toBeInTheDocument();
      await expect(page.queryByRole('option', { name: 'CSV', exact: true })).not.toBeInTheDocument();
      await userEvent.click(await page.findByRole('option', { name: format, exact: true }));
    }
    await expect(dialog.getByRole('group', { name: 'PDF layout' })).toBeVisible();
    await userEvent.click(dialog.getByLabelText('Landscape'));
    await expect(dialog.getByLabelText('Landscape')).toBeChecked();
    await userEvent.click(dialog.getByRole('button', { name: 'PDF paper settings' }));
    await userEvent.click(await page.findByRole('option', { name: 'A4', exact: true }));
    await expect(dialog.getByRole('button', { name: 'PDF paper settings' })).toHaveTextContent('A4');
  },
};

export const Phase1: Story = {
  ...DashboardExport,
  args: { phase1: true },
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog'));
    const includes = within(dialog.getByRole('group', { name: 'Include' }));
    await expect(includes.getByRole('checkbox', { name: 'Title', exact: true })).toBeChecked();
    await expect(includes.getByRole('checkbox', { name: 'Description', exact: true })).toBeChecked();
    await userEvent.click(includes.getByRole('checkbox', { name: 'Description', exact: true }));
    await expect(includes.getByRole('checkbox', { name: 'Description', exact: true })).not.toBeChecked();
    for (const format of ['HTML', 'Image', 'PDF']) {
      await userEvent.click(dialog.getByRole('button', { name: 'File format' }));
      await expect(page.getAllByRole('option')).toHaveLength(3);
      await expect(page.queryByRole('option', { name: 'Excel', exact: true })).not.toBeInTheDocument();
      await expect(page.queryByRole('option', { name: 'CSV', exact: true })).not.toBeInTheDocument();
      await userEvent.click(await page.findByRole('option', { name: format, exact: true }));
      await expect(includes.getByText('Title', { exact: true })).toBeVisible();
      await expect(includes.getByRole('checkbox', { name: 'Title', exact: true })).toBeChecked();
      await expect(includes.getByText('Description', { exact: true })).toBeVisible();
      await expect(includes.getByRole('checkbox', { name: 'Description', exact: true })).not.toBeChecked();
      if (format !== 'PDF') {
        await expect(dialog.queryByRole('group', { name: 'PDF layout' })).not.toBeInTheDocument();
      }
    }
    const layout = dialog.getByRole('checkbox', { name: 'One component per page' });
    await expect(layout).not.toBeChecked();
    await userEvent.click(layout);
    await expect(layout).toBeChecked();
    await expect(dialog.queryByRole('group', { name: 'Orientation' })).not.toBeInTheDocument();
    await expect(dialog.queryByRole('button', { name: 'PDF paper settings' })).not.toBeInTheDocument();
    await expect(dialog.queryByRole('switch', { name: 'Set password' })).not.toBeInTheDocument();
    await expect(dialog.queryByLabelText('Enter password')).not.toBeInTheDocument();
    await userEvent.clear(dialog.getByLabelText('File name'));
    await userEvent.click(dialog.getByRole('button', { name: 'Export', exact: true }));
    await expect(dialog.getByLabelText('File name')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('File name'), 'Org Overview');
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    await userEvent.click(dialog.getByRole('button', { name: 'Export', exact: true }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(page.queryByRole('status')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', { name: 'Export dashboard' }));
  },
};
