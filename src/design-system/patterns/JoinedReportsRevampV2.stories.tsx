import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { FormTable } from '../components/FormTable/FormTable';
import { Icon } from '../components/Icon/Icon';
import { Input } from '../components/Input/Input';
import { Radio } from '../components/Radio/Radio';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Modal } from '../components/Modal/Modal';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Tabs } from '../components/Tabs/Tabs';
import { Dragger } from '../components/Dragger/Dragger';
import { ChevronDownFilled, Info } from '../foundations/icons/Icons';
import './JoinedReportsRevampV2.css';
import './CrossModuleReports.css';

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

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type JoinStep = 'select' | 'group';
type ReportRow = { id: number; reportId: string; error?: string };
type GroupRow = { id: number; name: string; fields: string[] };
type Banner = { id: number; variant: 'info' | 'success'; message: string };
type Args = { primaryReportName: string; initialStep: JoinStep; initialReportCount: number; initialGroupCount?: number; startOpen?: boolean; saved?: boolean };

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
  onSaved: (name: string, reports: string[]) => void;
}) {
  const [step, setStep] = useState<JoinStep>(initialStep);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [errorKeys, setErrorKeys] = useState<Set<string>>(() => new Set());
  const isEdit = mode === 'edit';
  const prefilledFields = (offset: number) =>
    Array.from({ length: initialReportCount }, (_, index) => FIELD_OPTIONS[(index + offset) % FIELD_OPTIONS.length].value);
  const name = 'Untitled Joined Report';
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
    const timer = window.setTimeout(() => {
      if (step === 'group') document.getElementById('jrv2-group-name-first')?.focus();
      else document.querySelector<HTMLButtonElement>('.jrv2-modal [aria-label="Report 2"]')?.focus();
    }, 0);
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
    const checked = rows.map(row => (row.reportId ? { ...row, error: undefined } : { ...row, error: EMPTY_REPORT_MESSAGE }));
    setRows(checked);
    if (checked.some(row => row.error)) return;

    const keys = new Set<string>();
    (step === 'group' ? groups : []).forEach(group => {
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
    onSaved(name.trim() || 'Untitled Joined Report', rows.map(row => reportNameOf(row, primaryReportName)));
  };

  const lastGroupIndex = groups.length - 1;

  return (
    <>
    <Modal
      isOpen={open}
      title={isEdit ? 'Edit Joined Report' : 'Create Joined Report'}
      width={step === 'group' ? GROUP_MODAL_BASE_WIDTH + GROUP_COLUMN_WIDTH * (rows.length + 1) : 600}
      className="jrv2-modal"
      disableAutoFocus
      closeOnEscape={false}
      onClose={onClose}
      saveLabel="Save"
      onSave={save}
      footerStart={step === 'group' ? (
        <Button variant="default" onClick={() => setStep('select')}>Back</Button>
      ) : undefined}
    >
      <div className="jrv2-body">
        {step === 'select' && (
          <>
            <p className="jrv2-intro">View multiple reports at once by creating a Joined Report.</p>
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
            <div className="jrv2-group-head">
              <p className="jrv2-section-heading">Group records by field to combine each report's fields under a common name.</p>
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
                    <span className="jrv2-col-text">{`Map Field For "${reportNameOf(row, primaryReportName)}"`}</span>
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
                  id={groupIndex === 0 ? 'jrv2-group-name-first' : undefined}
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
      <table className="jrv2-preview-table" aria-label="Joined report preview">
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

const BUILDER_LEADS = [
  'Karpaska', 'Kipsta', 'Kiosha', 'Kingdom of Calm', 'Killer', 'Kid Cudi', 'Khabardaar.com', 'Keewi',
  'KeepSake', 'Keepsake', 'Kalenji', 'Karnik Couture', 'Karma T Shirts', 'Karlsburg', 'Kappa', 'Kaplor', 'Kapdaclick.Com',
];

const BUILDER_COLUMNS = ['Lead Name', 'Email', 'Company', 'Created Time', 'Lead Owner'];

// Stable preview values; running a report is required for actual aggregates.
const JOINED_PREVIEW_METRICS = [
  ['Count of contacts', 'Avg time spent'],
  ['Count of tasks'],
  ['Count of site visits', 'Sum of duration'],
];
const JOINED_PREVIEW_MONTHS = [
  { label: 'Jul 2026', rows: [[80, 80, 58, 74, 120], [61, 179, 58, 102, 90], [79, 52, 93, 110, 180], [48, 101, 68, 5, 45]] },
  { label: 'Aug 2026', rows: [[174, 6, 93, 37, 60], [178, 109, 150, 21, 75], [55, 86, 56, 79, 150], [109, 117, 153, 33, 105]] },
  { label: 'Sep 2026', rows: [[180, 102, 109, 96, 165], [83, 136, 84, 96, 120], [35, 93, 116, 84, 90], [18, 148, 126, 101, 135]] },
];

// Filters tab, laid out like the cross module reports Filters panel (heading, edit/delete, empty state).
function BuilderFilters({ hasFilters, onAdd, onDelete }: { hasFilters: boolean; onAdd: () => void; onDelete: () => void }) {
  return (
    <section className="cmr__panel-body jrv2-builder-filters" aria-label="Filters">
      <div className="cmr__panel-heading">
        <h2>Filters</h2>
        {hasFilters && (
          <div className="cmr__heading-actions">
            <Tooltip content="Edit filters" variant="black" placement="top" followCursor>
              <button type="button" className="criteria-summary__action" aria-label="Edit filters">
                <Icon name="Edit" size={13} />
              </button>
            </Tooltip>
            <Tooltip content="Delete filters" variant="black" placement="top" followCursor>
              <button type="button" className="criteria-summary__action criteria-summary__action--delete" aria-label="Delete filters" onClick={onDelete}>
                <Icon name="Delete" size={12} />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
      {hasFilters ? (
        <section className="cmr__saved" aria-label="Saved Lead Source filter">
          <h3>Lead Source</h3>
          <p className="cmr__saved-sentence">Lead Source is Advertisement or Partner</p>
        </section>
      ) : (
        <div className="cmr__empty">
          <p>No filters applied</p>
          <Button variant="outline-blue" size="sm" className="cmr__add-filter" onClick={onAdd}>Add Filter</Button>
        </div>
      )}
    </section>
  );
}

function BuilderBackground({ onEdit, onCreate, saved, reports, initialGroupCount }: { onEdit: () => void; onCreate: () => void; saved: boolean; reports: string[]; initialGroupCount: number }) {
  const [reportTitle, setReportTitle] = useState('Untitled Joined Report');
  const [previewScrolled, setPreviewScrolled] = useState(false);
  const [rowGroups, setRowGroups] = useState(() => [
    { id: 1, field: 'Created Date', interval: 'Month and Year', order: 'Asc' },
    { id: 2, field: 'Assigned user', interval: '', order: 'Asc' },
    { id: 3, field: 'Account', interval: '', order: 'Asc' },
  ].slice(0, initialGroupCount));
  const [groupDraft, setGroupDraft] = useState<(typeof rowGroups)[number] | null>(null);
  const [mappingMode, setMappingMode] = useState<'recommended' | 'manual'>('recommended');
  const [recommendedField, setRecommendedField] = useState('');
  const [mappedFields, setMappedFields] = useState<string[]>([]);
  const [mappingOrder, setMappingOrder] = useState(() => reports.map((_, index) => index));
  const reorderMapping = (source: number, target: number) => {
    setMappingOrder(current => {
      const next = current.filter(index => index !== source);
      next.splice(current.indexOf(target), 0, source);
      return next;
    });
  };
  const [groupError, setGroupError] = useState(false);
  const isAddingGroup = Boolean(groupDraft && !rowGroups.some(group => group.id === groupDraft.id));
  const recommendedOptions = [
    { value: 'Account', label: 'Account', group: 'By lookup' },
    { value: 'Created Date', label: 'Created Date', group: 'By date-time' },
    { value: 'Modified Date', label: 'Modified Date', group: 'By date-time' },
    { value: 'Assigned user', label: 'Assigned user', group: 'By user' },
  ];
  const mappingOptions = [...new Set([...recommendedOptions.map(option => option.value), ...FIELD_OPTIONS.map(option => option.value)])]
    .map(value => ({ value, label: value }));
  const fieldDataTypes: Record<string, string> = {
    Account: 'Lookup · Accounts', 'Account Name': 'Lookup · Accounts',
    'Campaign Source': 'Lookup · Campaigns',
    'Created Date': 'Date', 'Modified Date': 'Date', 'Close Date': 'Date',
    'Created Time': 'Date', 'Modified Time': 'Date',
    'Assigned user': 'User', 'Assigned To': 'User', Owner: 'User',
    Amount: 'Currency', 'Annual Revenue': 'Currency', Probability: 'Number',
    Currency: 'Picklist', 'Deal Stage': 'Picklist', Industry: 'Picklist',
    'Lead Source': 'Picklist', Rating: 'Picklist', 'Sales Channel': 'Picklist',
    Email: 'Email', Phone: 'Phone', Website: 'URL',
  };
  const selectedDataTypes = [...new Set(reports.flatMap((_, index) => {
    const field = mappedFields[index];
    return field ? [fieldDataTypes[field] || 'Text'] : [];
  }))];
  const hasMixedDataTypes = selectedDataTypes.length > 1;
  const allMappedFieldsAreDates = reports.length > 0 && reports.every((_, index) => fieldDataTypes[mappedFields[index]] === 'Date');
  const dateGranularityOptions = [
    { value: 'Date', label: 'By Date' },
    { value: 'Week', label: 'By Week' },
    { value: 'Month and Year', label: 'By Month and Year' },
    { value: 'Quarter and Year', label: 'By Quarter and Year' },
    { value: 'Year', label: 'By Year' },
  ];
  const saveGroup = () => {
    if (!groupDraft) return;
    if (isAddingGroup && (hasMixedDataTypes || !groupDraft.field.trim() || reports.some((_, index) => !mappedFields[index]))) {
      setGroupError(true);
      return;
    }
    const nextGroup = isAddingGroup
      ? { ...groupDraft, interval: allMappedFieldsAreDates ? groupDraft.interval || 'Month and Year' : '' }
      : groupDraft;
    setRowGroups(current => current.some(group => group.id === nextGroup.id)
      ? current.map(group => group.id === nextGroup.id ? nextGroup : group)
      : [...current, nextGroup]);
    setGroupDraft(null);
  };
  const [reportSettings, setReportSettings] = useState<Record<string, {
    tab: string; columns: string[]; aggregates: string[]; hasFilters: boolean;
  }>>({});
  const getReportSettings = (report: string) => reportSettings[report] ?? {
    tab: 'columns',
    columns: ['Account Name', 'Assistant', 'Asst Phone', 'Average Time Spent (Minutes)', 'Contact Name', 'Contact Owner'],
    aggregates: ['Count of Contacts', 'Avg Time Spent'],
    hasFilters: false,
  };
  const updateReportSettings = (report: string, patch: Partial<ReturnType<typeof getReportSettings>>) => {
    setReportSettings(current => ({ ...current, [report]: { ...getReportSettings(report), ...patch } }));
  };
  const [builderTab, setBuilderTab] = useState('columns');
  const [hasFilters, setHasFilters] = useState(saved);
  const [columns, setColumns] = useState(['Lead Name', 'Email', 'Company', 'Created Time', 'Lead Owner', 'First Name', 'Last Name']);
  const [aggregates, setAggregates] = useState(['Avg of Annual Revenue', 'Sum of Annual Revenue', 'Count of Unique Leads']);
  return (
    <div className="jrv2-builder">
      <NextGenLeftMenu activeId="reports" defaultCollapsed />

      <div className="jrv2-builder-main">
        <NextGenTopBand moduleLabel="Reports" searchPlaceholder="Search records" showTerritory={false} />

        <div className="jrv2-builder-subbar">
          <div className="jrv2-builder-subtitle">
            <Icon name="CrmArrowBack" size={18} />
            <div className="jrv2-builder-title-stack">
              {saved ? (
                <div className="jrv2-builder-title-input">
                  <Input
                    variant="header"
                    aria-label="Report title"
                    value={reportTitle}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setReportTitle(event.target.value)}
                    onBlur={() => setReportTitle(current => current.trim() || 'Untitled Joined Report')}
                    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === 'Enter') event.currentTarget.blur();
                    }}
                  />
                </div>
              ) : <span className="jrv2-builder-name">Leads By Source</span>}
              {!saved && <span className="jrv2-builder-module">Leads</span>}
            </div>
          </div>
          <div className="jrv2-builder-actions">
            {!saved && (
            <p className="jrv2-builder-cta">
              Do you want to join another report?{' '}
              <button type="button" className="jrv2-builder-edit" onClick={onCreate}>Create Joined Report</button>
            </p>
            )}
            {saved && (
              <Button variant="link-primary" onClick={onEdit}>Edit Joined Report</Button>
            )}
            <Button variant="default">Cancel</Button>
            <Button variant="default">Run</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <div className="jrv2-builder-body">
          <section className={`jrv2-builder-panel${saved ? ' jrv2-builder-panel--joined' : ''}${isAddingGroup ? ' jrv2-builder-panel--group-editor' : ''}`} aria-label="Joined report structure">
            {saved && isAddingGroup && groupDraft ? (
              <section className="jrv2-row-group-editor" aria-label="Add row group">
                <h2 className="jrv2-builder-panel-title">Add Row Group</h2>
                <div className="jrv2-joined-group-form">
          <h3 className="jrv2-row-group-heading">Choose a field from each report</h3>
          <>
            <div className="jrv2-row-group-choices">
              <Radio name="jrv2-mapping-mode" label="Recommended Fields" checked={mappingMode === 'recommended'} onChange={() => {
                setMappingMode('recommended');
                setMappedFields(reports.map(() => recommendedField));
              }} />
              <Radio name="jrv2-mapping-mode" label="Choose Manually" checked={mappingMode === 'manual'} onChange={() => setMappingMode('manual')} />
            </div>
              {mappingMode === 'recommended' && <div className="jrv2-row-group-recommended">
                <Dropdown width="100%" placeholder="Choose recommended fields" triggerAriaLabel="Choose recommended fields" disabled={mappingMode !== 'recommended'} options={recommendedOptions} value={recommendedField} onChange={(field: string) => {
                  setRecommendedField(field);
                  setMappedFields(reports.map(() => field));
                  setGroupDraft({ ...groupDraft, field, interval: field.includes('Date') ? 'Month and Year' : '' });
                  setGroupError(false);
                }} />
              </div>}
            {(mappingMode === 'manual' || recommendedField) && <div className="jrv2-row-group-mapping">
              <div className="jrv2-mapping-table" role="table" aria-label="Report field mapping">
                <div className="jrv2-mapping-row jrv2-mapping-header" role="row">
                  <div role="columnheader">Report</div><div role="columnheader">Group by field</div>
                </div>
                <Dragger items={mappingOrder.map(String)} onChange={(order: string[]) => setMappingOrder(order.map(Number))} gripperOnHover renderItem={(id: string) => {
                  const index = Number(id);
                  const position = mappingOrder.indexOf(index);
                  return <div className="jrv2-mapping-row" role="row">
                    <div role="cell">
                      {reports.length > 1 && <button type="button" className="jrv2-mapping-grip"
                        aria-label={`Reorder ${reports[index]}`}
                        aria-description="Drag to reorder, or use the Up and Down arrow keys."
                        onKeyDown={event => {
                          const target = event.key === 'ArrowUp' ? position - 1 : event.key === 'ArrowDown' ? position + 1 : -1;
                          if (event.key === 'ArrowUp' || event.key === 'ArrowDown') event.preventDefault();
                          if (target >= 0 && target < mappingOrder.length) reorderMapping(index, mappingOrder[target]);
                        }}
                      ><Icon name="CrmMaskDrag" size={12} /></button>}
                      {reports[index]}
                    </div>
                    <div role="cell"><Dropdown width="100%" placeholder="Select field" triggerAriaLabel={`Group by field for ${reports[index]}`} options={mappingOptions} disabled={mappingMode !== 'manual'} value={mappedFields[index] || ''} error={groupError && !mappedFields[index] ? 'Select a field' : undefined} onChange={(field: string) => setMappedFields(current => reports.map((_, fieldIndex) => fieldIndex === index ? field : current[fieldIndex] || ''))} /></div>
                  </div>;
                }} />
              </div>
            </div>}
          </>
          {hasMixedDataTypes && <MessageBox
            variant="warning"
            className="jrv2-mixed-types-warning"
            closable={false}
            message={<><strong>Warning:</strong> Selected fields have different data types. Choose fields of the same type to create this group.</>}
          />}
          {allMappedFieldsAreDates && <div className="jrv2-row-group-detail"><Dropdown style={{ '--jrv2-date-granularity': 1 }} label="Date granularity" width="100%" triggerAriaLabel="Date granularity" options={dateGranularityOptions} value={groupDraft.interval || 'Month and Year'} onChange={(interval: string) => setGroupDraft({ ...groupDraft, interval })} /></div>}
          <div className="jrv2-row-group-detail"><Input label={<span className="jrv2-group-name-label">Enter Group Name <Tooltip content="This name appears as the row heading." variant="white" placement="top" followCursor><button type="button" className="jrv2-group-name-info" aria-label="Group name information"><Info aria-hidden="true" /></button></Tooltip></span>} layout="vertical" width="100%" placeholder={`Common group ${rowGroups.length + 1}`} value={groupDraft.field} error={groupError && !groupDraft.field.trim() ? 'Enter a group name' : undefined} onChange={(event: ChangeEvent<HTMLInputElement>) => setGroupDraft({ ...groupDraft, field: event.target.value })} /></div>
        </div>
                <div className="jrv2-row-group-footer">
                  <Button variant="primary" disabled={hasMixedDataTypes} onClick={saveGroup}>Done</Button>
                  <Button variant="default" onClick={() => setGroupDraft(null)}>Cancel</Button>
                </div>
              </section>
            ) : saved ? (<>
              <header className="jrv2-joined-summary">
                <h2>Joined Report</h2>
              </header>
              <section className="jrv2-joined-groups" aria-label="Row groups">
                <h3 className="jrv2-joined-label">Row Groups</h3>
                {rowGroups.map(group => (
                  <div className="jrv2-joined-group" key={group.id}>
                    <div className="jrv2-joined-group-name">
                      <span>{group.field}</span>
                      {group.interval && <span className="jrv2-joined-muted">By {group.interval}</span>}
                    </div>
                    <button
                      type="button"
                      className="jrv2-joined-sort"
                      aria-label={`${group.field} sort order: ${group.order}. Switch to ${group.order === 'Asc' ? 'Desc' : 'Asc'}`}
                      onClick={() => setRowGroups(groups => groups.map(item => item.id === group.id ? { ...item, order: item.order === 'Asc' ? 'Desc' : 'Asc' } : item))}
                    >
                      {group.order}
                    </button>
                    <button type="button" className="jrv2-builder-edit-btn" aria-label={`Edit ${group.field} group`} onClick={() => setGroupDraft({ ...group })}>
                      <Icon name="CrmEditFilledMd" size={13} />
                    </button>
                  </div>
                ))}
                <Button variant="link-primary" className="jrv2-joined-add" onClick={() => {
                  setMappingMode('recommended');
                  setRecommendedField('');
                  setMappedFields(reports.map(() => ''));
                  setMappingOrder(reports.map((_, index) => index));
                  setGroupError(false);
                  setGroupDraft({ id: Date.now(), field: '', interval: '', order: 'Asc' });
                }}>+ Add New Group</Button>
              </section>
              {reports.map((report, index) => {
                const settings = getReportSettings(report);
                return (
                  <details className="jrv2-joined-report" key={`${index}-${report}`} open={index === 0}>
                    <summary className="jrv2-report-toggle" aria-label={`Report ${index + 1}: ${report}`}>
                      <div>
                        <h3 className="jrv2-joined-label">Report {index + 1}</h3>
                        <p>{report}</p>
                      </div>
                      <ChevronDownFilled size={12} className="jrv2-report-chevron" />
                    </summary>
                    <div className="jrv2-report-content" role="region" aria-label={`${report} settings`}>
                      <div className="jrv2-builder-tabs">
                        <Tabs tabs={[{ id: 'columns', label: 'Columns' }, { id: 'filters', label: 'Filters' }]}
                          activeTab={settings.tab} onChange={(tab: string) => updateReportSettings(report, { tab })}
                          variant="secondary" size="md" />
                      </div>
                      {settings.tab === 'filters' ? (
                        <BuilderFilters hasFilters={settings.hasFilters}
                          onAdd={() => updateReportSettings(report, { hasFilters: true })}
                          onDelete={() => updateReportSettings(report, { hasFilters: false })} />
                      ) : (<>
                        <div className="jrv2-builder-row"><h4 className="jrv2-joined-label">Columns</h4></div>
                        <Dragger items={settings.columns} onChange={(columns: string[]) => updateReportSettings(report, { columns })} />
                        <div className="jrv2-builder-row jrv2-builder-row--section"><h4 className="jrv2-joined-label">Aggregate columns</h4></div>
                        <Dragger items={settings.aggregates} onChange={(aggregates: string[]) => updateReportSettings(report, { aggregates })} />
                      </>)}
                    </div>
                  </details>
                );
              })}
            </>) : (
            <div className="jrv2-builder-block">
              <div className="jrv2-builder-tabs">
                <Tabs
                  tabs={[{ id: 'columns', label: 'Columns' }, { id: 'filters', label: 'Filters' }]}
                  activeTab={builderTab}
                  onChange={setBuilderTab}
                  variant="secondary"
                  size="md"
                />
              </div>
              {builderTab === 'filters' ? (
                <BuilderFilters hasFilters={hasFilters} onAdd={() => setHasFilters(true)} onDelete={() => setHasFilters(false)} />
              ) : (<>
              <div className="jrv2-builder-row">
                <span className="jrv2-builder-block-title">Columns</span>
                <button type="button" className="jrv2-builder-edit-btn" aria-label="Edit columns"><Icon name="CrmEditFilledMd" size={13} className="jrv2-builder-edit-icon" /></button>
              </div>
              <Dragger items={columns} onChange={setColumns} />
              <div className="jrv2-builder-row jrv2-builder-row--section">
                <span className="jrv2-builder-block-title">Aggregate Columns</span>
                <button type="button" className="jrv2-builder-edit-btn" aria-label="Edit aggregate columns"><Icon name="CrmEditFilledMd" size={13} className="jrv2-builder-edit-icon" /></button>
              </div>
              <Dragger items={aggregates} onChange={setAggregates} />
              </>)}
            </div>

            )}
          </section>

          <section className="jrv2-builder-preview" aria-label="Report preview">
            <p className="jrv2-builder-notice">
              <Info aria-hidden="true" />
              Preview shown with limited number of rows. Run the report to see actual aggregate values.
              <span className="jrv2-builder-link">Show Details</span>
            </p>
            {saved ? (
              <div
                className={`jrv2-joined-preview-scroll${previewScrolled ? ' jrv2-joined-preview-scroll--scrolled' : ''}`}
                onScroll={event => setPreviewScrolled(event.currentTarget.scrollLeft > 0)}
              >
                <table className="jrv2-builder-table jrv2-joined-preview-table" aria-label="Joined report preview">
                  <thead>
                    <tr>
                      <th aria-label="Grouping field" />
                      <th colSpan={2} aria-label="Additional grouping fields" />
                      {reports.map((report, index) => (
                        <th key={`${index}-${report}`} colSpan={JOINED_PREVIEW_METRICS[index].length} scope="colgroup" className="jrv2-builder-group-head">Report {index + 1} — {report}</th>
                      ))}
                    </tr>
                    <tr>
                      <th scope="col">Created Date - By Month and Year</th>
                      <th scope="col">Assigned user</th>
                      <th scope="col">Account</th>
                      {reports.flatMap((_, index) => JOINED_PREVIEW_METRICS[index].map(metric => <th key={metric} scope="col">{metric}</th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {JOINED_PREVIEW_MONTHS.flatMap(month => [
                      ...month.rows.map((values, index) => (
                        <tr key={`${month.label}-${index}`}>
                          <td>{index === 0 ? month.label : ''}</td>
                          <td>{index % 2 === 0 ? index === 0 ? 'Selvam' : 'Priya' : ''}</td>
                          <td>{index % 2 === 0 ? 'Fabrikam Inc' : 'Northwind Traders'}</td>
                          {values.slice(0, reports.reduce((count, _, reportIndex) => count + JOINED_PREVIEW_METRICS[reportIndex].length, 0)).map((value, metricIndex) => <td className="jrv2-preview-number" key={metricIndex}>{value}</td>)}
                        </tr>
                      )),
                      <tr key={`${month.label}-total`} className="jrv2-preview-total">
                        <th scope="row">{month.label} Total</th><td /><td />
                        {month.rows[0].slice(0, reports.reduce((count, _, reportIndex) => count + JOINED_PREVIEW_METRICS[reportIndex].length, 0)).map((_, metricIndex) => (
                          <td className="jrv2-preview-number" key={metricIndex}>{month.rows.reduce((total, values) => total + values[metricIndex], 0)}</td>
                        ))}
                      </tr>,
                    ])}
                  </tbody>
                  <tfoot>
                    <tr className="jrv2-preview-grand-total">
                      <th scope="row">Grand Total</th>
                      <td colSpan={2} />
                      {reports.flatMap((_, reportIndex) => JOINED_PREVIEW_METRICS[reportIndex].map((metric, metricIndex) => {
                        const columnIndex = JOINED_PREVIEW_METRICS.slice(0, reportIndex).reduce((count, metrics) => count + metrics.length, 0) + metricIndex;
                        return <td className="jrv2-preview-number" key={`${reportIndex}-${metric}`}>{JOINED_PREVIEW_MONTHS.reduce((total, month) => total + month.rows.reduce((sum, values) => sum + values[columnIndex], 0), 0)}</td>;
                      }))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            ) : (
            <table className="jrv2-builder-table" aria-label="Report 1 Leads By Source">
              <thead>
                <tr>
                  <th />
                  <th colSpan={BUILDER_COLUMNS.length} className="jrv2-builder-group-head">Report 1 - Leads by Source</th>
                </tr>
                <tr>
                  <th className="jrv2-builder-source-head">Lead Source</th>
                  {BUILDER_COLUMNS.map(column => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BUILDER_LEADS.map((lead, index) => (
                  <tr key={lead}>
                    {index === 0 && (
                      <td className="jrv2-builder-source" rowSpan={BUILDER_LEADS.length}>Advertisement</td>
                    )}
                    <td className="jrv2-builder-link">{lead}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>21 Oct, 2015 03:06 PM</td>
                    <td>Maheshva</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="jrv2-builder-source">Grand Total</td>
                  <td colSpan={BUILDER_COLUMNS.length} />
                </tr>
              </tfoot>
            </table>
            )}
          </section>
        </div>
      </div>
      <Modal isOpen={Boolean(groupDraft) && !isAddingGroup} title="Joined Row Group" width={560} onClose={() => setGroupDraft(null)} saveLabel="Save" onSave={saveGroup}>
        {groupDraft && (<div className="jrv2-joined-group-form">
          <Dropdown label="Group field" width="100%" options={mappingOptions} value={groupDraft.field} onChange={(field: string) => setGroupDraft({ ...groupDraft, field })} />
          <Dropdown label="Group by" width="100%" options={['Month and Year', 'Quarter and Year', 'Year', 'Day'].map(value => ({ value, label: value }))} value={groupDraft.interval} onChange={(interval: string) => setGroupDraft({ ...groupDraft, interval })} />
          <Dropdown label="Sort order" width="100%" options={['Asc', 'Desc'].map(value => ({ value, label: value }))} value={groupDraft.order} onChange={(order: string) => setGroupDraft({ ...groupDraft, order })} />
        </div>)}
      </Modal>
    </div>
  );
}

function JoinedReportsRevampV2Page({ primaryReportName, initialStep, initialReportCount, initialGroupCount = 1, startOpen = true, saved = true }: Args) {
  const [open, setOpen] = useState(startOpen);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [isSaved, setIsSaved] = useState(saved);
  const [savedReports, setSavedReports] = useState(() => initialRows(initialReportCount, initialStep, true).map(row => reportNameOf(row, primaryReportName)));
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
        saved={isSaved}
        reports={savedReports}
        initialGroupCount={initialGroupCount}
        onEdit={() => { setMode('edit'); setSession(current => current + 1); setOpen(true); }}
        onCreate={() => { setMode('create'); setSession(current => current + 1); setOpen(true); }}
      />
      {banner && createPortal(
        <div className="jrv2-note-banner" key={banner.id}>
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
        onSaved={(name, reports) => {
          setSavedReports(reports);
          setIsSaved(true);
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
  title: 'Work Items/Joined Reports - Revamp',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Isolated V2 flow without a report-name field or stepper. Step 1 selects up to three reports; step 2 groups records by field ' +
          '(vertically centred). Built from existing Modal, Input, Dropdown, Button, Icon and MessageBox components. ' +
          'Controls: the primary report name, the starting step (step 2 shows the centred layout) and how many reports ' +
          'are already selected. Save validates report selections, closes the modal and shows Untitled Joined Report with an edit link. ' +
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
  render: args => <JoinedReportsRevampV2Page {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

// V2 is intentionally isolated from the original flow and styles so future changes
// can be made here without altering the existing Joined Reports variants.
export const V2: Story = {
  name: 'V2',
  args: { startOpen: false, saved: false },
};

export const V2Summary: Story = {
  name: 'V2 - Summary',
  args: { startOpen: false, saved: true, initialReportCount: 3, initialGroupCount: 3 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Report 3', exact: true })).toBeVisible();
    const title = canvas.getByRole('textbox', { name: 'Report title' });
    await expect(title).toHaveValue('Untitled Joined Report');
    const titleField = title.closest('.jrv2-builder-title-input')!;
    await userEvent.hover(title);
    const initialWidth = titleField.getBoundingClientRect().width;
    await expect(initialWidth).toBeGreaterThanOrEqual(100);
    await userEvent.click(title);
    await expect(titleField.getBoundingClientRect().width).toBe(390);
    await userEvent.clear(title);
    await userEvent.type(title, 'Sales{Enter}');
    await expect(titleField.getBoundingClientRect().width).toBe(100);
    await userEvent.clear(title);
    await userEvent.type(title, 'Regional Sales Summary{Enter}');
    await expect(title).toHaveValue('Regional Sales Summary');
    await expect(title).not.toHaveFocus();
    await userEvent.clear(title);
    await userEvent.tab();
    await expect(title).toHaveValue('Untitled Joined Report');
    await expect(canvas.getAllByRole('button', { name: /sort order: Asc/ })).toHaveLength(3);
    const table = canvas.getByRole('table', { name: 'Joined report preview' });
    const total = within(table).getByRole('rowheader', { name: 'Grand Total', exact: true });
    await expect(total.closest('tfoot')).not.toBeNull();
    await expect(total).toBeVisible();
    const scroller = table.parentElement!;
    await expect(table.querySelector('thead')?.textContent).not.toContain('▲');
    await expect(getComputedStyle(total).boxShadow).toBe('none');
    await expect(getComputedStyle(total, '::after').content).toBe('none');
    scroller.scrollLeft = scroller.scrollWidth;
    scroller.scrollTop = scroller.scrollHeight;
    scroller.dispatchEvent(new Event('scroll', { bubbles: true }));
    await waitFor(() => expect(scroller).toHaveClass('jrv2-joined-preview-scroll--scrolled'));
    await expect(total).toBeVisible();
    await expect(getComputedStyle(total).position).toBe('sticky');
    await expect(getComputedStyle(total).borderRightColor).toBe('rgba(0, 0, 0, 0)');
    scroller.scrollTo(0, 0);
    scroller.dispatchEvent(new Event('scroll', { bubbles: true }));
    await waitFor(() => expect(scroller).not.toHaveClass('jrv2-joined-preview-scroll--scrolled'));
  },
};

export const V2AddGroup: Story = {
  name: 'V2-Add Group',
  args: { startOpen: false, saved: true, initialReportCount: 3 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Report 3', exact: true })).toBeVisible();
    const firstReport = within(canvas.getByRole('region', { name: 'Monthly Sales Pipeline settings' }));
    await expect(firstReport.queryByRole('button', { name: 'Add column to Monthly Sales Pipeline' })).not.toBeInTheDocument();
    await userEvent.click(firstReport.getByRole('tab', { name: 'Filters' }));
    await userEvent.click(firstReport.getByRole('button', { name: 'Add Filter' }));
    await expect(firstReport.getByText('Lead Source is Advertisement or Partner')).toBeVisible();
    await userEvent.click(canvas.getByText('Sales Pipeline by Region', { selector: 'summary p', exact: true }));
    const secondReport = within(canvas.getByRole('region', { name: 'Sales Pipeline by Region settings' }));
    await expect(secondReport.queryByText('Email', { exact: true })).not.toBeInTheDocument();
    await userEvent.click(secondReport.getByRole('tab', { name: 'Filters' }));
    await expect(secondReport.getByText('No filters applied')).toBeVisible();
    await expect(firstReport.getByText('Lead Source is Advertisement or Partner')).toBeVisible();
    await userEvent.click(firstReport.getByRole('tab', { name: 'Columns' }));
    await userEvent.click(canvas.getByRole('button', { name: '+ Add New Group' }));
    const panel = canvas.getByRole('region', { name: 'Add row group' });
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    const editor = within(panel);
    await expect(editor.queryByRole('button', { name: 'Back to joined report structure' })).not.toBeInTheDocument();
    await expect(editor.queryByRole('table', { name: 'Report field mapping' })).not.toBeInTheDocument();
    await userEvent.click(editor.getByRole('button', { name: 'Choose recommended fields' }));
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Account', exact: true }));
    const mapping = await editor.findByRole('table', { name: 'Report field mapping' });
    await expect(within(mapping).getAllByRole('row')).toHaveLength(4);
    await expect(editor.queryByRole('button', { name: 'Date granularity' })).not.toBeInTheDocument();
    await userEvent.click(editor.getByRole('button', { name: 'Choose recommended fields' }));
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Created Date', exact: true }));
    await expect(editor.getByRole('button', { name: 'Date granularity' })).toBeVisible();
    await userEvent.click(editor.getByRole('button', { name: 'Date granularity' }));
    for (const name of ['By Date', 'By Week', 'By Month and Year', 'By Quarter and Year', 'By Year']) {
      await expect(within(document.body).getByRole('option', { name, exact: true })).toBeVisible();
    }
    await userEvent.click(within(document.body).getByRole('option', { name: 'By Week', exact: true }));
    await userEvent.click(editor.getByRole('radio', { name: 'Choose Manually' }));
    await expect(editor.queryByRole('button', { name: 'Choose recommended fields' })).not.toBeInTheDocument();
    await expect(within(mapping).getAllByRole('row')).toHaveLength(4);
    const fieldSelectors = editor.getAllByRole('button', { name: /^Group by field for / });
    await userEvent.click(fieldSelectors[2]);
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Account Name', exact: true }));
    await expect(within(editor.getByRole('status')).getByText('Warning:')).toBeVisible();
    await expect(within(editor.getByRole('status')).getByText('Selected fields have different data types. Choose fields of the same type to create this group.')).toBeVisible();
    await expect(editor.getByRole('button', { name: 'Done', exact: true })).toBeDisabled();
    await expect(editor.queryByRole('button', { name: 'Date granularity' })).not.toBeInTheDocument();
    await userEvent.click(fieldSelectors[2]);
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Modified Time', exact: true }));
    await expect(editor.queryByRole('status')).not.toBeInTheDocument();
    await expect(editor.getByRole('button', { name: 'Done', exact: true })).toBeEnabled();
    await expect(editor.getByRole('button', { name: 'Date granularity' })).toBeVisible();
  },
};
