import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { FormTable } from '../components/FormTable/FormTable';
import { Icon } from '../components/Icon/Icon';
import { Input } from '../components/Input/Input';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Modal } from '../components/Modal/Modal';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Stepper } from '../components/Stepper/Stepper';
import { ChevronDownFilled } from '../foundations/icons/Icons';
import './JoinedReportsRevamp.css';

// ─────────────────────────────────────────────────────────────────────────────
// Sample data (no network; 25 field names for the grouping dropdowns)
// ─────────────────────────────────────────────────────────────────────────────

const PRIMARY_ID = 'primary';
const MAX_REPORTS = 3;
const EMPTY_REPORT_MESSAGE = 'A Report has to be selected';
const LIMIT_MESSAGE = `You cannot add more than ${MAX_REPORTS} reports`;

const REPORT_OPTIONS = [
  'Sales Pipeline by Region', 'Won Deals This Quarter', 'Lead Source Performance',
  'Activity Summary by Owner', 'Campaign ROI Overview', 'Quote Conversion Rate',
  'Renewals Due Next 90 Days', 'Support Case Backlog', 'Revenue by Product Line',
  'Account Health Scores', 'Forecast vs Actuals', 'Territory Coverage Map',
].map(name => ({ value: name, label: name }));

const FIELD_OPTIONS = [
  'Account Name', 'Amount', 'Annual Revenue', 'Assigned To', 'Campaign Source',
  'City', 'Close Date', 'Company', 'Country', 'Created Time', 'Currency',
  'Deal Stage', 'Description', 'Email', 'Industry', 'Lead Source', 'Modified Time',
  'Owner', 'Phone', 'Probability', 'Rating', 'Region', 'Sales Channel', 'State', 'Website',
].map(name => ({ value: name, label: name }));

const STEP_LABELS = ['Select Reports', 'Grouping'];

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type JoinStep = 'select' | 'group';
type ReportRow = { id: number; reportId: string; error?: string };
type GroupRow = { id: number; name: string; fields: string[] };
type Banner = { id: number; variant: 'info' | 'success'; message: string };
type Args = { primaryReportName: string; initialStep: JoinStep; initialReportCount: number };

function reportNameOf(row: ReportRow, primaryReportName: string) {
  if (row.reportId === PRIMARY_ID) return primaryReportName;
  return REPORT_OPTIONS.find(option => option.value === row.reportId)?.label ?? '';
}

function initialRows(count: number, step: JoinStep): ReportRow[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    // In the grouping case every row is already filled so the step can be shown directly.
    reportId: index === 0 ? PRIMARY_ID : step === 'group' ? REPORT_OPTIONS[index - 1].value : '',
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Joined Report flow: the modal, both steps and all row/group state
// ─────────────────────────────────────────────────────────────────────────────

function JoinedReportFlow({ primaryReportName, initialStep, initialReportCount, open, onClose, onNotify, onSaved }: Args & {
  open: boolean; onClose: () => void;
  onNotify: (variant: Banner['variant'], message: string) => void;
  onSaved: (name: string) => void;
}) {
  const [step, setStep] = useState<JoinStep>(initialStep);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [name, setName] = useState('Untitled Joined Report');
  const [rows, setRows] = useState<ReportRow[]>(() => initialRows(initialReportCount, initialStep));
  const [groups, setGroups] = useState<GroupRow[]>(() =>
    initialStep === 'group' ? [{ id: 1, name: '', fields: [] }] : []);
  const nextId = useRef(100);
  const newId = () => {
    nextId.current += 1;
    return nextId.current;
  };

  // ── Step 1 handlers ───────────────────────────────────────────────────────
  const selectReport = (id: number, reportId: string) =>
    setRows(current => current.map(row => (row.id === id ? { ...row, reportId, error: undefined } : row)));

  const addReport = () => {
    if (rows.length >= MAX_REPORTS) {
      onNotify('info', LIMIT_MESSAGE);
      return;
    }
    setRows(current => [...current, { id: newId(), reportId: '' }]);
  };

  const removeReport = (id: number) => setRows(current => current.filter(row => row.id !== id));

  const [dragId, setDragId] = useState<number | null>(null);
  const moveRow = (fromId: number, toId: number) => setRows(current => {
    const from = current.findIndex(row => row.id === fromId);
    const to = current.findIndex(row => row.id === toId);
    if (from <= 0 || to <= 0 || from === to) return current;
    const next = [...current];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    return next;
  });

  const goNext = () => {
    const checked = rows.map(row => (row.reportId ? { ...row, error: undefined } : { ...row, error: EMPTY_REPORT_MESSAGE }));
    setRows(checked);
    if (checked.some(row => row.error)) return;
    if (groups.length === 0) setGroups([{ id: newId(), name: '', fields: [] }]);
    setStep('group');
  };

  // ── Step 2 handlers (group names and field choices are keyed by id, so they survive add/remove) ──
  const addGroup = () => setGroups(current => [...current, { id: newId(), name: '', fields: [] }]);
  const moveGroup = (fromId: number, toId: number) => setGroups(current => {
    const from = current.findIndex(group => group.id === fromId);
    const to = current.findIndex(group => group.id === toId);
    if (from < 0 || to < 0 || from === to) return current;
    const next = [...current];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    return next;
  });
  useEffect(() => {
    if (!open) return;
    const targetId = step === 'group' ? 'jr-group-name-first' : 'jr-name-input';
    const timer = window.setTimeout(() => document.getElementById(targetId)?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [open, step]);
  const removeGroup = (id: number) => setGroups(current => current.filter(group => group.id !== id));
  const setGroupName = (id: number, value: string) =>
    setGroups(current => current.map(group => (group.id === id ? { ...group, name: value } : group)));
  const setField = (id: number, reportIndex: number, value: string) =>
    setGroups(current => current.map(group => {
      if (group.id !== id) return group;
      const fields = [...group.fields];
      fields[reportIndex] = value;
      return { ...group, fields };
    }));

  const save = () => onSaved(name.trim() || 'Untitled Joined Report');

  const reportCount = rows.length;
  const lastRowIndex = rows.length - 1;
  const lastGroupIndex = groups.length - 1;

  return (
    <>
    <Modal
      isOpen={open}
      title="Create Joined Report"
      width={step === 'group' ? 1240 : 600}
      className="jr-modal"
      disableAutoFocus
      closeOnEscape={false}
      onClose={onClose}
      saveLabel={step === 'select' ? 'Next' : 'Save'}
      onSave={step === 'select' ? goNext : save}
      footerStart={step === 'group' ? (
        <Button variant="default" onClick={() => setStep('select')}>Back</Button>
      ) : undefined}
    >
      <div className="jr-body">
        <div className="jr-stepper-wrap">
          <Stepper steps={STEP_LABELS} currentStep={step === 'select' ? 0 : 1} />
        </div>

        {step === 'select' && (
          <>
            <p className="jr-intro">View multiple reports at once by creating a Joined Report.</p>
            <div className="jr-name-row">
              <span className="jr-name-label">Joined Report Name</span>
              <Input
                width={390}
                placeholder="Untitled Joined Report"
                aria-label="Joined Report Name"
                id="jr-name-input"
                autoFocus
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              />
            </div>
            <table className="jr-table" aria-label="Reports">
              <thead>
                <tr>
                  <th aria-hidden="true" />
                  <th scope="col">Report</th>
                  <th aria-hidden="true" />
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={row.error ? 'jr-row--error' : undefined}
                    draggable={rows.length === 3 && index > 0}
                    onDragStart={() => setDragId(row.id)}
                    onDragOver={event => {
                      if (dragId !== null && index > 0) event.preventDefault();
                    }}
                    onDrop={event => {
                      event.preventDefault();
                      if (dragId !== null) moveRow(dragId, row.id);
                      setDragId(null);
                    }}
                    onDragEnd={() => setDragId(null)}
                  >
                    <td className="jr-cell--grip">
                      <span className={`jr-grip${rows.length === 3 && index > 0 ? '' : ' jr-grip--hidden'}`} aria-hidden="true">
                        <Icon name="CrmMaskDrag" size={12} />
                      </span>
                    </td>
                    <td className="jr-cell--input">
                      {index === 0 ? (
                        <Input
                          width="100%"
                          disabled
                          aria-label="Primary report"
                          value={primaryReportName}
                          suffix={<ChevronDownFilled aria-hidden="true" />}
                        />
                      ) : (
                        <Dropdown
                          width="100%"
                          placeholder="Select Report"
                          triggerAriaLabel={`Report ${index + 1}`}
                          options={REPORT_OPTIONS}
                          value={row.reportId}
                          error={Boolean(row.error)}
                          helperText={row.error}
                          onChange={(value: string) => selectReport(row.id, value)}
                        />
                      )}
                    </td>
                    <td className="jr-cell--actions">
                      <div className="jr-actions">
                        {index > 0 && (
                          <span className="jr-slot">
                            <button type="button" className="jr-icon-btn jr-icon-btn--minus" aria-label={`Remove report ${index + 1}`}
                              onClick={() => removeReport(row.id)}>
                              <Icon name="CriteriaMinus" size={16} />
                            </button>
                          </span>
                        )}
                        <span className="jr-slot">
                          {index === lastRowIndex && (
                            <button type="button" className="jr-icon-btn jr-icon-btn--plus" aria-label="Add report"
                              onClick={addReport}>
                              <Icon name="CriteriaPlus" size={16} />
                            </button>
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {step === 'group' && (
          <>
            <div className="jr-group-head">
              <p className="jr-section-heading">Group records by field to combine each report's fields under a common name.</p>
              <Button variant="outline-blue" onClick={() => setPreviewOpen(true)}>
                Preview
              </Button>
            </div>
            <FormTable
              ariaLabel="Group records by field"
              headers={[
                'Group Name',
                ...rows.map(row => (
                  <Tooltip
                    key={row.id}
                    content={`Map Field For "${reportNameOf(row, primaryReportName)}"`}
                    variant="black"
                    placement="top"
                    wrapperStyle={{ display: 'block', maxWidth: '100%' }}
                  >
                    <span className="jr-col-text">{`Map Field For "${reportNameOf(row, primaryReportName)}"`}</span>
                  </Tooltip>
                )),
              ]}
              gapAfter={Array.from({ length: rows.length + 1 }, () => 20)}
              rows={groups}
              canReorder={groups.length > 1}
              onMove={moveGroup}
              renderCells={(group, groupIndex) => [
                <Input
                  key="name"
                  width={250}
                  placeholder="Enter name"
                  id={groupIndex === 0 ? 'jr-group-name-first' : undefined}
                  aria-label={`Group ${groupIndex + 1} name`}
                  value={group.name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setGroupName(group.id, event.target.value)}
                />,
                ...rows.map((row, reportIndex) => (
                  <Dropdown
                    key={row.id}
                    width={250}
                    placeholder="Select field"
                    triggerAriaLabel={`Group ${groupIndex + 1} field for report ${reportIndex + 1}`}
                    options={FIELD_OPTIONS}
                    value={group.fields[reportIndex] ?? ''}
                    onChange={(value: string) => setField(group.id, reportIndex, value)}
                  />
                )),
              ]}
              renderActions={(group, groupIndex) => ({
                onRemove: groups.length > 1 ? () => removeGroup(group.id) : undefined,
                removeLabel: `Remove group ${groupIndex + 1}`,
                onAdd: groupIndex === lastGroupIndex ? addGroup : undefined,
                addLabel: 'Add group',
              })}
            />
          </>
        )}
      </div>
    </Modal>
    <Modal
      isOpen={previewOpen}
      title="Preview"
      width={920}
      onClose={() => setPreviewOpen(false)}
      onCancel={() => setPreviewOpen(false)}
      cancelLabel="Close"
      saveLabel="Done"
      onSave={() => setPreviewOpen(false)}
    >
      <table className="jr-preview-table" aria-label="Joined report preview">
        <thead>
          <tr>
            <th>Month &amp; Year</th>
            <th>Parent Module</th>
            <th>Owner</th>
            <th>Lookup Field</th>
            <th>{`Report 1 (${primaryReportName})`}</th>
            <th>{`Report 2 (${reportNameOf(rows[1] ?? rows[0], primaryReportName)})`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3}>Jan 2026</td>
            <td rowSpan={3}>Deal</td>
            <td rowSpan={3}>Selvam</td>
            <td>Deal 1</td>
            <td>Acme Corp renewal</td>
            <td>Globex upsell</td>
          </tr>
          <tr>
            <td />
            <td>Initech expansion</td>
            <td />
          </tr>
          <tr>
            <td />
            <td>Count 2</td>
            <td>Count 1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Feb 2026</td>
            <td rowSpan={2} />
            <td rowSpan={2} />
            <td>Deal 2</td>
            <td>-</td>
            <td>Umbrella renewal</td>
          </tr>
          <tr>
            <td />
            <td>Count 0</td>
            <td>Count 1</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page: opener button, notification banner (auto-dismiss) and the flow
// ─────────────────────────────────────────────────────────────────────────────

function JoinedReportsRevampPage({ primaryReportName, initialStep, initialReportCount }: Args) {
  const [open, setOpen] = useState(true);
  const [session, setSession] = useState(0);
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    if (!banner) return;
    const timer = window.setTimeout(() => setBanner(null), 5000);
    return () => window.clearTimeout(timer);
  }, [banner]);

  const notify = (variant: Banner['variant'], message: string) =>
    setBanner({ id: Date.now(), variant, message });

  return (
    <div className="jr-page">
      <Button variant="primary" onClick={() => { setSession(current => current + 1); setOpen(true); }}>
        Create Joined Report
      </Button>
      {banner && createPortal(
        <div className="jr-note-banner" key={banner.id}>
          <MessageBox variant={banner.variant} message={banner.message} onClose={() => setBanner(null)} />
        </div>,
        document.body,
      )}
      <JoinedReportFlow
        key={session}
        open={open}
        primaryReportName={primaryReportName}
        initialStep={initialStep}
        initialReportCount={initialReportCount}
        onClose={() => setOpen(false)}
        onNotify={notify}
        onSaved={name => {
          setOpen(false);
          notify('success', `Joined Report "${name}" saved.`);
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Meta and stories
// ─────────────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Design System/Patterns/Joined Reports - Revamp',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Create Joined Report modal: step 1 selects up to three reports (top aligned), step 2 groups records by field ' +
          '(vertically centred). Built from existing Modal, Stepper, Input, Dropdown, Button, Icon and MessageBox components. ' +
          'Controls: the primary report name, the starting step (step 2 shows the centred layout) and how many reports ' +
          'are already selected. Next with an empty report row shows an inline error; Save shows a success message. ' +
          'No network calls are made.',
      },
    },
  },
  args: {
    primaryReportName: 'Monthly Sales Pipeline',
    initialStep: 'select',
    initialReportCount: 2,
  },
  argTypes: {
    initialStep: { control: 'inline-radio', options: ['select', 'group'] },
    initialReportCount: { control: { type: 'range', min: 1, max: MAX_REPORTS, step: 1 } },
  },
  render: args => <JoinedReportsRevampPage {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const GroupingStep: Story = {
  args: { initialStep: 'group', initialReportCount: 3 },
};

export const ReportLimit: Story = {
  args: { initialStep: 'select', initialReportCount: 3 },
  // Three reports selected: plus on the last row shows the limit message.
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await body.findByRole('button', { name: 'Add report' }));
    expect(await body.findByText(LIMIT_MESSAGE)).toBeInTheDocument();
  },
};
