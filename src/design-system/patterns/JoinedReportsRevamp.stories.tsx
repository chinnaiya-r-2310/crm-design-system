import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { FormTable } from '../components/FormTable/FormTable';
import { Icon } from '../components/Icon/Icon';
import { Input } from '../components/Input/Input';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Modal } from '../components/Modal/Modal';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Tabs } from '../components/Tabs/Tabs';
import { Dragger } from '../components/Dragger/Dragger';
import { Stepper } from '../components/Stepper/Stepper';
import { ChevronDownFilled, Info } from '../foundations/icons/Icons';
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
type Args = { primaryReportName: string; initialStep: JoinStep; initialReportCount: number; startOpen?: boolean; saved?: boolean };

function reportNameOf(row: ReportRow, primaryReportName: string) {
  if (row.reportId === PRIMARY_ID) return primaryReportName;
  return REPORT_OPTIONS.find(option => option.value === row.reportId)?.label ?? '';
}

function initialRows(count: number, step: JoinStep, filled: boolean): ReportRow[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    // Grouping and edit start with every row filled so the step can be shown directly.
    reportId: index === 0 ? PRIMARY_ID : filled || step === 'group' ? REPORT_OPTIONS[index - 1].value : '',
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Joined Report flow: the modal, both steps and all row/group state
// ─────────────────────────────────────────────────────────────────────────────

// Step 2 width follows the table: grip + actions + modal padding, plus one 270px column per input.
const GROUP_MODAL_BASE_WIDTH = 151;
const GROUP_COLUMN_WIDTH = 270;

function JoinedReportFlow({ primaryReportName, initialStep, initialReportCount, open, mode = 'create', onClose, onNotify, onSaved }: Args & {
  open: boolean; mode?: 'create' | 'edit'; onClose: () => void;
  onNotify: (variant: Banner['variant'], message: string) => void;
  onSaved: (name: string) => void;
}) {
  const [step, setStep] = useState<JoinStep>(initialStep);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [errorKeys, setErrorKeys] = useState<Set<string>>(() => new Set());
  const isEdit = mode === 'edit';
  const prefilledFields = (offset: number) =>
    Array.from({ length: initialReportCount }, (_, index) => FIELD_OPTIONS[(index + offset) % FIELD_OPTIONS.length].value);
  const [name, setName] = useState(isEdit ? 'Leads by Source' : 'Untitled Joined Report');
  const [rows, setRows] = useState<ReportRow[]>(() => initialRows(initialReportCount, initialStep, isEdit));
  const [groups, setGroups] = useState<GroupRow[]>(() => {
    if (isEdit) {
      return [
        { id: 1, name: 'Lead Source', fields: prefilledFields(0) },
        { id: 2, name: 'Lead Owner', fields: prefilledFields(3) },
      ];
    }
    return initialStep === 'group' ? [{ id: 1, name: '', fields: [] }] : [];
  });
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

  const save = () => {
    const keys = new Set<string>();
    groups.forEach(group => {
      if (!group.name.trim()) keys.add(`${group.id}:name`);
      rows.forEach((_, reportIndex) => {
        if (!group.fields[reportIndex]) keys.add(`${group.id}:${reportIndex}`);
      });
    });
    if (keys.size > 0) {
      setErrorKeys(keys);
      return;
    }
    setErrorKeys(new Set());
    onSaved(name.trim() || 'Untitled Joined Report');
  };

  const reportCount = rows.length;
  const lastRowIndex = rows.length - 1;
  const lastGroupIndex = groups.length - 1;

  return (
    <>
    <Modal
      isOpen={open}
      title={isEdit ? 'Edit Joined Report' : 'Create Joined Report'}
      width={step === 'group' ? GROUP_MODAL_BASE_WIDTH + GROUP_COLUMN_WIDTH * (rows.length + 1) : 600}
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
            <FormTable
              ariaLabel="Reports"
              headers={['Report']}
              rows={rows}
              canReorder={rows.length === 3}
              onMove={moveRow}
              actionGap={13}
              renderCells={(row, index) => [
                index === 0 ? (
                  <Input
                    key="primary"
                    width="100%"
                    disabled
                    aria-label="Primary report"
                    value={primaryReportName}
                    suffix={<ChevronDownFilled aria-hidden="true" />}
                  />
                ) : (
                  <Dropdown
                    key="report"
                    width="100%"
                    placeholder="Select Report"
                    triggerAriaLabel={`Report ${index + 1}`}
                    options={REPORT_OPTIONS}
                    value={row.reportId}
                    error={Boolean(row.error)}
                    helperText={row.error}
                    onChange={(value: string) => selectReport(row.id, value)}
                  />
                ),
              ]}
              renderActions={(row, index) => ({
                onRemove: index > 0 ? () => removeReport(row.id) : undefined,
                removeLabel: `Remove report ${index + 1}`,
                onAdd: index === rows.length - 1 ? addReport : undefined,
                addLabel: 'Add report',
              })}
            />
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
                  error={errorKeys.has(`${group.id}:name`) && !group.name.trim()}
                  helperText={errorKeys.has(`${group.id}:name`) && !group.name.trim() ? 'Enter a group name' : undefined}
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
                    error={errorKeys.has(`${group.id}:${reportIndex}`) && !group.fields[reportIndex]}
                    helperText={errorKeys.has(`${group.id}:${reportIndex}`) && !group.fields[reportIndex] ? 'Select a field' : undefined}
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
      width={1180}
      showClose
      showFooter={false}
      onClose={() => setPreviewOpen(false)}
    >
      <table className="jr-preview-table" aria-label="Joined report preview">
        <thead>
          <tr>
            <th>Month &amp; Year</th>
            <th>Parent Module</th>
            <th>Owner</th>
            <th>Lookup Field</th>
            <th>{`Report 1 (${primaryReportName})`}</th>
            <th>{`Report 2 (${rows[1] ? reportNameOf(rows[1], primaryReportName) : 'Report 2'})`}</th>
            <th>{`Report 3 (${rows[2] ? reportNameOf(rows[2], primaryReportName) : 'Report 3'})`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>Jan 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Selvam</td>
            <td>Deal 1</td>
            <td>Acme Corp renewal</td>
            <td>Globex upsell</td>
            <td>Initech expansion</td>
          </tr>
          <tr>
            <td />
            <td>2</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Feb 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Maya</td>
            <td>Deal 2</td>
            <td>-</td>
            <td>Umbrella renewal</td>
            <td>Hooli deal</td>
          </tr>
          <tr>
            <td />
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Mar 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Priya</td>
            <td>Deal 3</td>
            <td>Nova Labs demo</td>
            <td>-</td>
            <td>Vertex pilot</td>
          </tr>
          <tr>
            <td />
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Apr 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Selvam</td>
            <td>Deal 4</td>
            <td>Orbit Media expansion</td>
            <td>Pinnacle renewal</td>
            <td>-</td>
          </tr>
          <tr>
            <td />
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td rowSpan={2}>May 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Maya</td>
            <td>Deal 5</td>
            <td>Stark Industries pilot</td>
            <td>Wayne Corp upsell</td>
            <td>Acme Corp renewal</td>
          </tr>
          <tr>
            <td />
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Jun 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Priya</td>
            <td>Deal 6</td>
            <td>Contoso renewal</td>
            <td>Fabrikam demo</td>
            <td>-</td>
          </tr>
          <tr>
            <td />
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Jul 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Selvam</td>
            <td>Deal 7</td>
            <td>Litware expansion</td>
            <td>-</td>
            <td>Northwind pilot</td>
          </tr>
          <tr>
            <td />
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowSpan={2}>Aug 2026</td>
            <td rowSpan={2}>Deal</td>
            <td rowSpan={2}>Maya</td>
            <td>Deal 8</td>
            <td>Adventure Works upsell</td>
            <td>Tailspin renewal</td>
            <td>Proseware deal</td>
          </tr>
          <tr>
            <td />
            <td>1</td>
            <td>1</td>
            <td>0</td>
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


// ─────────────────────────────────────────────────────────────────────────────
// Background page: the report builder the Joined Report modal opens over
// ─────────────────────────────────────────────────────────────────────────────

const BUILDER_NAV = [
  { label: 'Home', icon: 'CrmNewhome', color: 'var(--ds-icon-primary-link-blue)' },
  { label: 'Workqueue', icon: 'CrmNewworkqueue', color: 'var(--ds-icon-primary-orange)' },
  { label: 'Reports', icon: 'CrmNewReport', color: 'var(--ds-icon-primary-pink)', active: true },
  { label: 'Dashboards', icon: 'CrmNewDashboard', color: 'var(--ds-icon-primary-purple)' },
  { label: 'My Requests', icon: 'CrmNewworkqueue', color: 'var(--ds-icon-primary-green)' },
  { label: 'Agents', icon: 'CrmZiaNewAgent', color: 'var(--ds-icon-primary-orange-yellow)' },
  { label: 'MCP', icon: 'CrmCpq', color: 'var(--ds-icon-primary-greenish-cyan)' },
];

const BUILDER_LEADS = [
  'Karpaska', 'Kipsta', 'Kiosha', 'Kingdom of Calm', 'Killer', 'Kid Cudi', 'Khabardaar.com', 'Keewi',
  'KeepSake', 'Keepsake', 'Kalenji', 'Karnik Couture', 'Karma T Shirts', 'Karlsburg', 'Kappa', 'Kaplor', 'Kapdaclick.Com',
];

const BUILDER_COLUMNS = ['Lead Name', 'Email', 'Company', 'Created Time', 'Lead Owner'];

function BuilderBackground({ onEdit, onCreate, saved }: { onEdit: () => void; onCreate: () => void; saved: boolean }) {
  const [builderTab, setBuilderTab] = useState('columns');
  const [columns, setColumns] = useState(['Lead Name', 'Email', 'Company', 'Created Time', 'Lead Owner', 'First Name', 'Last Name']);
  const [aggregates, setAggregates] = useState(['Avg of Annual Revenue', 'Sum of Annual Revenue', 'Count of Unique Leads']);
  return (
    <div className="jr-builder">
      <aside className="jr-builder-nav" aria-label="Main navigation">
        {BUILDER_NAV.map(item => (
          <div key={item.label} className={`jr-builder-nav-item${item.active ? ' jr-builder-nav-item--active' : ''}`}>
            <span className="jr-builder-nav-icon" style={{ color: item.color }}>
              <Icon name={item.icon} size={20} />
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </aside>

      <div className="jr-builder-main">
        <NextGenTopBand moduleLabel="Reports" searchPlaceholder="Search records" showTerritory={false} />

        <div className="jr-builder-subbar">
          <div className="jr-builder-subtitle">
            <Icon name="CrmArrowBack" size={18} />
            <div className="jr-builder-title-stack">
              <span className="jr-builder-name">Leads by Source</span>
              <span className="jr-builder-module">Leads</span>
            </div>
          </div>
          <div className="jr-builder-actions">
            {!saved && (
            <p className="jr-builder-cta">
              Do you want to join another report?{' '}
              <button type="button" className="jr-builder-edit" onClick={onCreate}>Create Joined Report</button>
            </p>
            )}
            <Button variant="default">Cancel</Button>
            <Button variant="default">Run</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <div className="jr-builder-body">
          <section className="jr-builder-panel" aria-label="Joined report structure">
            {saved && (<>
            <div className="jr-builder-row jr-builder-panel-head">
              <span className="jr-builder-panel-title">Joined Report</span>
              <button type="button" className="jr-builder-edit-btn" aria-label="Edit joined report" onClick={onEdit}>
                <Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" />
              </button>
            </div>

            <div className="jr-builder-block">
              <div className="jr-builder-row">
                <span className="jr-builder-block-title">Report 1</span>
              </div>
              <div className="jr-builder-row">
                <span>Leads by Source</span>
                <button type="button" className="jr-builder-edit-btn" aria-label="Edit Leads by Source"><Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" /></button>
              </div>
            </div>

</>)}
            <div className="jr-builder-block">
              <div className="jr-builder-tabs">
                <Tabs
                  tabs={[{ id: 'columns', label: 'Columns' }, { id: 'filters', label: 'Filters' }]}
                  activeTab={builderTab}
                  onChange={setBuilderTab}
                  variant="secondary"
                  size="md"
                />
              </div>
              <div className="jr-builder-row">
                <span className="jr-builder-block-title">Columns</span>
                <button type="button" className="jr-builder-edit-btn" aria-label="Edit columns"><Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" /></button>
              </div>
              <Dragger items={columns} onChange={setColumns} />
              <div className="jr-builder-row jr-builder-row--section">
                <span className="jr-builder-block-title">Aggregate Columns</span>
                <button type="button" className="jr-builder-edit-btn" aria-label="Edit aggregate columns"><Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" /></button>
              </div>
              <Dragger items={aggregates} onChange={setAggregates} />
            </div>

            {saved && (<>
            <div className="jr-builder-block">
              <div className="jr-builder-row">
                <span className="jr-builder-block-title">Report 2</span>
              </div>
              <div className="jr-builder-row">
                <span>Recent Six Month Leads</span>
                <button type="button" className="jr-builder-edit-btn" aria-label="Edit Recent Six Month Leads"><Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" /></button>
              </div>
            </div>

            <div className="jr-builder-block">
              <div className="jr-builder-row">
                <span className="jr-builder-block-title">Report 3</span>
              </div>
              <div className="jr-builder-row">
                <span>Untitled Report 0</span>
                <button type="button" className="jr-builder-edit-btn" aria-label="Edit Untitled Report 0"><Icon name="CrmEditFilledMd" size={14} className="jr-builder-edit-icon" /></button>
              </div>
            </div>
</>)}
          </section>

          <section className="jr-builder-preview" aria-label="Report preview">
            <p className="jr-builder-notice">
              <Info aria-hidden="true" />
              Preview shown with limited number of rows. Run the report to see actual aggregate values.
              <span className="jr-builder-link">Show Details</span>
            </p>
            <table className="jr-builder-table" aria-label="Report 1 leads by source">
              <thead>
                <tr>
                  <th />
                  <th colSpan={BUILDER_COLUMNS.length} className="jr-builder-group-head">REPORT 1 - LEADS BY SOURCE</th>
                </tr>
                <tr>
                  <th className="jr-builder-source-head">LEAD SOURCE ▲</th>
                  {BUILDER_COLUMNS.map(column => (
                    <th key={column}>{column.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUILDER_LEADS.map((lead, index) => (
                  <tr key={lead}>
                    {index === 0 && (
                      <td className="jr-builder-source" rowSpan={BUILDER_LEADS.length}>Advertisement</td>
                    )}
                    <td className="jr-builder-link">{lead}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>21 Oct, 2015 03:06 PM</td>
                    <td>Maheshva</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="jr-builder-source">Grand Total</td>
                  <td colSpan={BUILDER_COLUMNS.length} />
                </tr>
              </tfoot>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

function JoinedReportsRevampPage({ primaryReportName, initialStep, initialReportCount, startOpen = true, saved = true }: Args) {
  const [open, setOpen] = useState(startOpen);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
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
    <>
      <BuilderBackground
        saved={saved}
        onEdit={() => { setMode('edit'); setSession(current => current + 1); setOpen(true); }}
        onCreate={() => { setMode('create'); setSession(current => current + 1); setOpen(true); }}
      />
      {banner && createPortal(
        <div className="jr-note-banner" key={banner.id}>
          <MessageBox variant={banner.variant} message={banner.message} onClose={() => setBanner(null)} />
        </div>,
        document.body,
      )}
      <JoinedReportFlow
        key={session}
        open={open}
        mode={mode}
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
    </>
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

export const Default: Story = {
  args: { startOpen: false, saved: false },
};

export const SavedJoinedReport: Story = {
  args: { startOpen: false, saved: true },
};

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
