import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../components/Modal/Modal';
import { ManageColumns } from '../components/ManageColumns/ManageColumns';
import { getModuleFields } from '../data/crm-sample-data';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { Dragger } from '../components/Dragger/Dragger';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { UserPicker } from '../components/UserPicker/UserPicker';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { DateRangePicker } from '../components/Calendar/DateRangePicker';
import { SetupTable } from '../components/Table/Table';
import { DetailPage, RecordCard } from './CrmScreens.page';
import { SortingHat } from '../components/SortingHat/SortingHat';
import { Info as InfoIcon, Lock as LockIcon } from '../foundations/icons/Icons';
import { crmIconMap } from '../foundations/icons/CrmCatalog';
import { Tooltip } from '../components/Tooltip/Tooltip';
import '../components/Tags/Tags.css';

// Column settings icon from the icon gallery (CrmColumnArrange).
const ColumnArrangeIcon = crmIconMap.CrmColumnArrange;

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Work Items/Field History Tracking',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal pattern for enabling field history tracking on a field. ' +
          'Required history columns are locked. Up to 10 additional (snapshot) ' +
          'columns can be selected. Opened from the field properties dialog.',
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const MAX_ADDITIONAL = 10;

const ADDITIONAL_COLUMNS = [
  'Contact Owner', 'Categories', 'Other Phone', 'Phone', 'Mobile', 'Duplicate Check',
  'Social Lead ID', 'Assistant', 'Lead Source', 'Countries', 'Department', 'Title',
  'Date of Birth', 'Home Phone', 'Email Opt Out', 'Asst Phone',
];

// Required history columns, in default display order. They cannot be unchecked, but can be reordered.
const REQUIRED_COLUMNS = ['Email', 'Changed To', 'Modified By', 'Modified Time', 'Duration'];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles (tokens only)
// ─────────────────────────────────────────────────────────────────────────────

const label = {
  fontFamily: 'var(--ds-font-family-base)',
  fontSize: 'var(--ds-font-size-base)',
  color: 'var(--ds-text-label)',
  lineHeight: 'var(--ds-line-height-base)',
};

const sectionHeading = {
  ...label,
  fontWeight: 'var(--ds-font-weight-semibold)',
  color: 'var(--ds-text-base)',
  marginBottom: 12,
};

const grid2 = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 24,
  rowGap: 16,
};

const requiredBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  marginLeft: 'auto',
  padding: '2px 6px',
  borderRadius: 4,
  fontFamily: 'var(--ds-font-family-base)',
  fontSize: 12,
  color: 'var(--ds-text-muted)',
  background: 'var(--ds-components-input-disable-bg, #F3F5F8)',
  whiteSpace: 'nowrap',
};

// ─────────────────────────────────────────────────────────────────────────────
// Building blocks used only by this pattern
// ─────────────────────────────────────────────────────────────────────────────

function RequiredItem({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Checkbox checked disabled readOnly label={text} aria-label={`${text} (required)`} />
      <span style={requiredBadge}>
        <LockIcon width={10} height={10} aria-hidden="true" />
        required
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Pattern
// ─────────────────────────────────────────────────────────────────────────────

// Controlled modal: opened from the Email Properties dialog ("Manage Column" link)
// and from the story button. Keeps its own column state while mounted.
function FieldHistoryTrackingModal({
  isOpen,
  onClose,
  onDone,
  fieldName = 'Email',
  initialSelected = [],
}) {
  const [requiredOrder, setRequiredOrder] = useState(REQUIRED_COLUMNS);
  const [selected, setSelected] = useState(initialSelected);

  const limitReached = selected.length >= MAX_ADDITIONAL;

  const toggleColumn = (name) => {
    setSelected((prev) => {
      if (prev.includes(name)) return prev.filter((c) => c !== name);
      if (prev.length >= MAX_ADDITIONAL) return prev;
      return [...prev, name];
    });
  };

  return (
    <Modal
        isOpen={isOpen}
        title={`${fieldName} History Tracking`}
        description="Select columns to display."
        onClose={onClose}
        onCancel={onClose}
        onSave={() => onDone?.({ requiredOrder, selected })}
        cancelLabel="Cancel"
        saveLabel="Done"
        width={640}
        className="fht-manage-columns"
      >
        <style>{`
          .fht-manage-columns .modal-body { padding-right: 3px; }
        `}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingRight: 0 }}>

          {/* ── Required columns (locked, reorderable) ──────────────── */}
          <section aria-labelledby="fht-required-heading">
            <h3 id="fht-required-heading" style={sectionHeading}>Required columns</h3>
            <Dragger
              items={requiredOrder}
              onChange={setRequiredOrder}
              renderItem={(item) => <RequiredItem text={item} />}
            />
          </section>

          {/* ── Additional (snapshot) columns ───────────────────────── */}
          <section aria-labelledby="fht-additional-heading">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <h3 id="fht-additional-heading" style={{ ...sectionHeading, marginBottom: 0 }}>
                Additional columns
              </h3>
              <span
                aria-live="polite"
                style={{ ...label, color: limitReached ? 'var(--ds-text-base)' : 'var(--ds-text-label)' }}
              >
                {selected.length} of {MAX_ADDITIONAL} selected
              </span>
            </div>

            <div style={grid2}>
              {ADDITIONAL_COLUMNS.map((name) => {
                const checked = selected.includes(name);
                const disabled = !checked && limitReached;
                return (
                  <Checkbox
                    key={name}
                    label={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={() => toggleColumn(name)}
                  />
                );
              })}
            </div>
          </section>

          <MessageInfo
            variant="info"
            message={`You can add up to ${MAX_ADDITIONAL} additional columns. Required columns are always included and do not count toward this limit.`}
          />
        </div>
    </Modal>
  );
}

// Story wrapper: opens the modal from a button.
function FieldHistoryTrackingDemo({ fieldName = 'Email', initialSelected = [] }) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(null);

  return (
    <>
      <Button variant="outline-blue" onClick={() => { setSaved(null); setOpen(true); }}>
        Open {fieldName} History Tracking
      </Button>

      {saved && (
        <p style={{ ...label, marginTop: 16 }}>
          Saved {fieldName} history columns: {saved.requiredOrder.join(', ')}
          {saved.selected.length > 0 && `, plus ${saved.selected.length} additional`}.
        </p>
      )}

      <FieldHistoryTrackingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onDone={(result) => { setOpen(false); setSaved(result); }}
        fieldName={fieldName}
        initialSelected={initialSelected}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Field properties modal (entry point: "Enable field history tracking")
// ─────────────────────────────────────────────────────────────────────────────

const PROPERTY_OPTIONS = [
  { key: 'public', label: 'Mark as Public', info: true },
  { key: 'required', label: 'Required' },
  { key: 'history', label: 'Enable field history tracking' },
  { key: 'duplicates', label: 'Do not allow duplicate values', info: true },
  { key: 'personal', label: 'Contains Personal Data', info: true },
  { key: 'health', label: 'Contains Personal Health Data', info: true },
  { key: 'tooltip', label: 'Show Tooltip' },
];

// Default columns: always selected, cannot be unchecked, can be reordered.
// Shown with a red asterisk in the list.
const REQUIRED_TRACKED_KEYS = ['Email', 'Changed_To', 'Modified_By', 'Modified_Time', 'Duration'];
const isRequiredKey = key => REQUIRED_TRACKED_KEYS.includes(key);

// Keeps the required columns selected. Required and user-selected columns can be
// reordered together; an uncheck of a required column is ignored and it returns to its place.
function keepRequiredColumns(next, prev) {
  const result = [...next];
  prev.forEach((key, index) => {
    if (isRequiredKey(key) && !result.includes(key)) {
      result.splice(Math.min(index, result.length), 0, key);
    }
  });
  return result;
}

// Leads fields from the shared CRM sample data (the Manage Columns list for a Lead),
// plus the history columns that are always included.
const HISTORY_COLUMN_OPTIONS = [
  { key: 'Changed_To', label: 'Changed To' },
  { key: 'Modified_By', label: 'Modified By' },
  { key: 'Modified_Time', label: 'Modified Time' },
  { key: 'Duration', label: 'Duration' },
];

const TRACKED_FIELD_OPTIONS = [
  ...getModuleFields('Leads')
    .filter(field => !HISTORY_COLUMN_OPTIONS.some(history => history.label === field.label))
    .map(field => ({
      key: field.key,
      label: field.label,
      scope: 'lead',
      module: 'Leads',
    })),
  ...HISTORY_COLUMN_OPTIONS.map(field => ({ ...field, scope: 'history', module: 'History' })),
].map(field => ({ ...field, required: isRequiredKey(field.key) }));


function FieldPropertiesDemo({ fieldName = 'Email' }) {
  const [open, setOpen] = useState(true);
  const [labelValue, setLabelValue] = useState(fieldName);
  const [checked, setChecked] = useState({});
  const [saved, setSaved] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [trackedColumns, setTrackedColumns] = useState([...REQUIRED_TRACKED_KEYS, 'Phone', 'Owner']);
  const [limitExceeded, setLimitExceeded] = useState(false);

  // Blocks a selection that would exceed the 10 additional columns and shows the alert.
  const handleTrackedChange = next => {
    const additionalCount = next.filter(key => !isRequiredKey(key)).length;
    if (additionalCount > MAX_ADDITIONAL) {
      setLimitExceeded(true);
      return;
    }
    setLimitExceeded(false);
    setTrackedColumns(prev => keepRequiredColumns(next, prev));
  };

  const closeManageColumns = () => {
    setManageOpen(false);
    setLimitExceeded(false);
  };

  const setOption = (key, value) => setChecked((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      {saved && (
        <p style={{ ...label, marginTop: 16 }}>
          Saved properties for {labelValue}.
        </p>
      )}

      <Modal
        isOpen={open}
        title={`${fieldName} Properties`}
        width="fit-content"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onSave={() => { setOpen(false); setSaved(true); }}
        cancelLabel="Cancel"
        saveLabel="Done"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingRight: 20 }}>
          <Input
            label="Field Label"
            required
            layout="vertical"
            width={400}
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            onFocus={(e) => e.target.select()}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PROPERTY_OPTIONS.map((opt) => (
              <div key={opt.key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Checkbox
                  label={opt.label}
                  checked={!!checked[opt.key]}
                  onChange={(e) => setOption(opt.key, e.target.checked)}
                />
                {opt.info && (
                  <span style={{ display: 'inline-flex', color: 'var(--ds-text-label)' }} aria-hidden="true">
                    <InfoIcon width={14} height={14} />
                  </span>
                )}
                {opt.key === 'history' && checked[opt.key] && (
                  <button
                    type="button"
                    className="ds-link"
                    onClick={() => setManageOpen(true)}
                    style={{ padding: 0, border: 0, background: 'transparent', fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-base)', fontWeight: 'var(--ds-font-weight-regular)' }}
                  >
                    Manage Column
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Nested over the Email Properties modal, which stays open behind it. */}
      <Modal
        isOpen={manageOpen}
        className="mc-modal-dialog"
        title="Email History Tracking"
        description="Select columns to display."
        width={400}
        onClose={closeManageColumns}
        onCancel={closeManageColumns}
        onSave={closeManageColumns}
        cancelLabel="Cancel"
        saveLabel="Done"
        footerNote={
          <>
            <style>{`
              .fht-mc-info .msg-info-root { display: block; width: 100%; height: auto; min-height: 0; }
            `}</style>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            {limitExceeded && (
              <div style={{ width: '100%' }}>
                <MessageBox
                  variant="info"
                  title="Limit reached"
                  message={`You can add up to ${MAX_ADDITIONAL} additional columns. Remove a column to add another.`}
                  closable
                  onClose={() => setLimitExceeded(false)}
                  style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
                />
              </div>
            )}
            <div className="fht-mc-info">
              <MessageInfo
                variant="info"
                message={`You can add up to ${MAX_ADDITIONAL} additional columns. Required columns are always included and do not count toward this limit.`}
              />
            </div>
            </div>
          </>
        }
      >
        <style>{`
          .mc-modal-dialog .modal-body { gap: 0; margin-top: -12px; }
        `}</style>
        <ManageColumns
          variant="modal"
          embedded
          title="Email History Tracking"
          fields={TRACKED_FIELD_OPTIONS}
          selected={trackedColumns}
          onChange={handleTrackedChange}
        />
      </Modal>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Detail Page: Field History section (revamped Stage History)
// ─────────────────────────────────────────────────────────────────────────────

// Deal Stage rows from the PRD screenshot.
const FIELD_HISTORY_ROWS = [
  {
    id: 'fh-1',
    from: 'Value Prop',
    to: 'Negotiation',
    modifiedBy: 'Elijah Morgan',
    modifiedTime: 'May 20, 2026 3:41 PM',
    duration: '5 days',
    amount: '$ 1,48,000',
    probability: '70%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Manual (UI)',
  },
  {
    id: 'fh-2',
    from: 'In Progress',
    to: 'Value Prop',
    modifiedBy: 'Klaus Weber',
    modifiedTime: 'May 12, 2026 11:05 AM',
    duration: '14 days',
    amount: '$ 1,42,000',
    probability: '60%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Manual (UI)',
  },
  {
    id: 'fh-3',
    from: 'Negotiation',
    to: 'In Progress',
    modifiedBy: 'Mikasa Chen',
    modifiedTime: 'Apr 28, 2026 9:22 AM',
    duration: '6 days',
    amount: '$ 1,38,000',
    probability: '50%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Workflow',
  },
  {
    id: 'fh-4',
    from: 'Value Prop',
    to: 'Negotiation',
    modifiedBy: 'Yren Okafor',
    modifiedTime: 'Apr 22, 2026 2:17 PM',
    duration: '6 days',
    amount: '$ 1,30,000',
    probability: '40%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Import',
  },
  {
    id: 'fh-5',
    from: 'Negotiation',
    to: 'Closed Won',
    modifiedBy: 'Elijah Morgan',
    modifiedTime: 'Jun 2, 2026 10:12 AM',
    duration: '9 days',
    amount: '$ 1,50,000',
    probability: '90%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Manual (UI)',
  },
  {
    id: 'fh-6',
    from: 'Proposal',
    to: 'Value Prop',
    modifiedBy: 'Klaus Weber',
    modifiedTime: 'Apr 18, 2026 4:30 PM',
    duration: '4 days',
    amount: '$ 1,25,000',
    probability: '35%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Workflow',
  },
  {
    id: 'fh-7',
    from: 'Qualification',
    to: 'Proposal',
    modifiedBy: 'Mikasa Chen',
    modifiedTime: 'Apr 12, 2026 12:05 PM',
    duration: '6 days',
    amount: '$ 1,20,000',
    probability: '30%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'API',
  },
  {
    id: 'fh-8',
    from: 'Needs Analysis',
    to: 'Qualification',
    modifiedBy: 'Yren Okafor',
    modifiedTime: 'Apr 4, 2026 9:48 AM',
    duration: '3 days',
    amount: '$ 1,10,000',
    probability: '25%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Import',
  },
  {
    id: 'fh-9',
    from: 'Record Created',
    to: 'Needs Analysis',
    modifiedBy: 'Elijah Morgan',
    modifiedTime: 'Mar 30, 2026 3:20 PM',
    duration: '5 days',
    amount: '$ 1,05,000',
    probability: '20%',
    closingDate: 'Jun 30, 2026',
    dealOwner: 'Elijah Morgan',
    dealType: 'New Business',
    source: 'Manual (UI)',
  },
];

const FIELD_HISTORY_TIME_OPTIONS = [
  { value: 'all', label: 'All time' },
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '6m', label: 'Last 6 months' },
  { value: '1y', label: 'Last 1 year' },
  { value: 'date', label: 'Specific Date' },
  { value: 'range', label: 'Custom Range' },
];

// Users for the user filter (UserPicker). The first entry clears the filter.
const FIELD_HISTORY_USERS = [
  { id: 'all', name: 'All users', subLabel: 'Every user and system' },
  { id: 'elijah', name: 'Elijah Morgan', subLabel: 'elijah.morgan@zohocorp.com' },
  { id: 'klaus', name: 'Klaus Weber', subLabel: 'klaus.weber@zohocorp.com' },
  { id: 'mikasa', name: 'Mikasa Chen', subLabel: 'mikasa.chen@zohocorp.com' },
  { id: 'yren', name: 'Yren Okafor', subLabel: 'yren.okafor@zohocorp.com' },
  { id: 'system', name: 'System / Automation', subLabel: 'Workflows, API and imports' },
];

// "Today" for the sample data, so Last 7 days / 30 days / 6 months show different rows.
const FIELD_HISTORY_TODAY = new Date(2026, 5, 3, 12, 0);

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const endOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
const sameDay = (a, b) => startOfDay(a).getTime() === startOfDay(b).getTime();

function matchesTime(row, filter, date, range) {
  const when = new Date(row.modifiedTime);
  const since = (days, months = 0) => {
    const d = new Date(FIELD_HISTORY_TODAY);
    d.setDate(d.getDate() - days);
    d.setMonth(d.getMonth() - months);
    return d;
  };
  switch (filter) {
    case '7d': return when >= since(7);
    case '30d': return when >= since(30);
    case '6m': return when >= since(0, 6);
    case '1y': return when >= since(0, 12);
    case 'date': return !date || sameDay(when, date);
    case 'range': return !range.start || !range.end || (when >= startOfDay(range.start) && when <= endOfDay(range.end));
    default: return true;
  }
}

const SOURCE_FILTER_LABELS = { manual: 'Manual (UI)', workflow: 'Workflow', api: 'API', import: 'Import' };

const FIELD_HISTORY_SOURCE_OPTIONS = [
  { value: 'all', label: 'All sources' },
  { value: 'manual', label: 'Manual (UI)' },
  { value: 'workflow', label: 'Workflow' },
  { value: 'api', label: 'API' },
  { value: 'import', label: 'Import' },
];

// Subdued pastel tokens distinguish stages without vibrant fills.
const STAGE_COLORS = {
  'Value Prop': ['--ds-neutral-pastel6', '--ds-text-heading'],
  'Negotiation': ['--ds-neutral-pastel2', '--ds-text-heading'],
  'In Progress': ['--ds-neutral-pastel5', '--ds-text-heading'],
  'Closed Won': ['--ds-neutral-pastel3', '--ds-text-heading'],
  'Proposal': ['--ds-neutral-pastel7', '--ds-text-heading'],
  'Qualification': ['--ds-neutral-pastel1', '--ds-text-heading'],
  'Needs Analysis': ['--ds-neutral-pastel8', '--ds-text-heading'],
  'Record Created': ['--ds-bg-scale-bg5', '--ds-text-heading'],
};

function stageStyle(stage) {
  const [background, foreground] = STAGE_COLORS[stage] ?? STAGE_COLORS['Record Created'];
  return {
    '--fht-stage-color': `oklch(from var(${background}) calc(l * 0.98) calc(c * 1.15) h)`,
    color: `var(${foreground})`,
  };
}

const FIELD_HISTORY_COLUMNS = [
  {
    key: 'from',
    label: (
      <>
        Deal Stage<span className="crm-screens__arrow" aria-hidden="true">→</span>Moved To
      </>
    ),
    width: 340,
    render: (value, row) => (
      <span className="crm-screens__transition">
        <span className="tags-tag crm-screens__stage-pill" style={stageStyle(value)}>{value}</span>
        <span className="crm-screens__arrow" aria-hidden="true">→</span>
        <span className="tags-tag crm-screens__stage-pill" style={stageStyle(row.to)}>{row.to}</span>
      </span>
    ),
  },
  {
    key: 'modifiedBy',
    label: 'Moved By',
    width: 200,
  },
  { key: 'modifiedTime', label: 'Moved Time', width: 190 },
  { key: 'duration', label: 'Duration', width: 110 },
  { key: 'amount', label: 'Amount', width: 130 },
  { key: 'probability', label: 'Probability', width: 110 },
  { key: 'closingDate', label: 'Closing Date', width: 150 },
  { key: 'dealOwner', label: 'Deal Owner', width: 180 },
  { key: 'dealType', label: 'Deal Type', width: 150 },
  {
    key: 'source',
    label: 'Source',
    width: 130,
    render: value => <span>{value}</span>,
  },
  {
    // End-of-header column: column settings icon, no body content.
    key: 'columnSettings',
    label: (
      <button type="button" className="crm-screens__header-icon" aria-label="Manage Column">
        <ColumnArrangeIcon width={16} height={16} aria-hidden="true" />
      </button>
    ),
    width: 36,
    render: () => null,
  },
];

// Column settings panel: the same Manage Columns list, opened from the header icon.
// The first five columns are mandatory.
const SETTINGS_REQUIRED_KEYS = ['from', 'modifiedBy', 'modifiedTime', 'duration', 'source'];
// Column order: Deal Stage -> Moved To, Modified By, Modified Time, Duration, Source, then the rest.
const DEFAULT_COLUMN_KEYS = ['from', 'modifiedBy', 'modifiedTime', 'duration', 'source', 'amount', 'probability'];
const SETTINGS_FIELDS = [
  // En spaces keep a visible gap on both sides of the arrow (the label is plain text in the list).
  { key: 'from', label: 'Deal Stage\u2002→\u2002Moved To' },
  { key: 'modifiedBy', label: 'Moved By' },
  { key: 'modifiedTime', label: 'Moved Time' },
  { key: 'duration', label: 'Duration' },
  { key: 'source', label: 'Source' },
  { key: 'amount', label: 'Amount' },
  { key: 'probability', label: 'Probability (%)' },
  { key: 'closingDate', label: 'Closing Date' },
  { key: 'dealOwner', label: 'Deal Owner' },
  { key: 'dealType', label: 'Deal Type' },
].map((f) => ({ ...f, required: SETTINGS_REQUIRED_KEYS.includes(f.key) }));
// Additional snapshot fields are available without crowding the default table.

// plainFirstColumn: the first column shows the stage transition as plain text, without capsules.
function FieldHistorySection({ plainFirstColumn = false }) {
  const [timeFilter, setTimeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [specificDate, setSpecificDate] = useState(null);
  const [customRange, setCustomRange] = useState({ start: null, end: null });
  const [applied, setApplied] = useState(DEFAULT_COLUMN_KEYS); // columns shown in the table
  const [draft, setDraft] = useState(DEFAULT_COLUMN_KEYS); // selection while the panel is open
  const [panel, setPanel] = useState(null); // { top, right } when the settings panel is open
  const settingsRef = useRef(null);
  const panelRef = useRef(null);

  const openPanel = () => {
    const r = settingsRef.current.getBoundingClientRect();
    setDraft(applied);
    setPanel({ top: r.bottom + 8, right: Math.max(8, window.innerWidth - r.right) });
  };

  // Close on outside click or Escape.
  useEffect(() => {
    if (!panel) return undefined;
    const onDown = (e) => {
      if (!panelRef.current?.contains(e.target) && !settingsRef.current?.contains(e.target)) setPanel(null);
    };
    const onKey = (e) => { if (e.key === 'Escape') setPanel(null); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [panel]);

  // While the panel is open the page behind it does not scroll (the backdrop also blocks clicks).
  useEffect(() => {
    if (!panel) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [panel]);

  // Table columns follow the order chosen in the Manage Columns panel; the icon column stays last.
  const columns = [...applied.map((k) => FIELD_HISTORY_COLUMNS.find((c) => c.key === k)), FIELD_HISTORY_COLUMNS.find((c) => c.key === 'columnSettings')]
    .map((c) => {
      if (c.key === 'columnSettings') {
        return {
          ...c,
          label: (
            <Tooltip content="Manage Column" placement="top" followCursor variant="black" disabled={!!panel}>
              <button
                ref={settingsRef}
                type="button"
                className="crm-screens__header-icon"
                aria-label="Manage Column"
                aria-haspopup="dialog"
                aria-expanded={!!panel}
                onClick={openPanel}
              >
                <ColumnArrangeIcon width={16} height={16} aria-hidden="true" />
              </button>
            </Tooltip>
          ),
        };
      }
      if (plainFirstColumn && c.key === 'from') {
        return {
          ...c,
          render: (value, row) => (
            <span>
              {value === 'Record Created' ? <span className="crm-screens__stage-pill--muted">{value}</span> : value}
              <span className="crm-screens__arrow" aria-hidden="true">→</span>
              {row.to}
            </span>
          ),
        };
      }
      return c;
    });

  // The filters narrow the rows shown in the table.
  const userName = FIELD_HISTORY_USERS.find((u) => u.id === userFilter)?.name;
  const visibleRows = FIELD_HISTORY_ROWS.filter((row) => (
    matchesTime(row, timeFilter, specificDate, customRange)
    && (userFilter === 'all' || row.modifiedBy === userName)
    && (sourceFilter === 'all' || row.source === SOURCE_FILTER_LABELS[sourceFilter])
  )).sort((a, b) => new Date(b.modifiedTime) - new Date(a.modifiedTime));

  return (
    <RecordCard
      title="Field History - Stage"
      actions={
        <>
          <Dropdown size="sm" value={timeFilter} options={FIELD_HISTORY_TIME_OPTIONS} onChange={setTimeFilter} width={140} />
          {timeFilter === 'date' && (
            <DatePicker size="sm" layout="vertical" width={130} placeholder="Select date" value={specificDate} onChange={setSpecificDate} />
          )}
          {timeFilter === 'range' && (
            <DateRangePicker size="sm" width={210} startDate={customRange.start} endDate={customRange.end} onChange={(start, end) => setCustomRange({ start, end })} />
          )}
          <UserPicker size="sm" layout="vertical" width={220} placeholder="All users" users={FIELD_HISTORY_USERS} value={userFilter} onChange={setUserFilter} />
          <Dropdown size="sm" value={sourceFilter} options={FIELD_HISTORY_SOURCE_OPTIONS} onChange={setSourceFilter} width={140} />
        </>
      }
    >
      <div className="crm-screens__fh-table">
        <SetupTable
          columns={columns}
          rows={visibleRows}
          emptyMessage="No records found"
        />
      </div>
      {panel && createPortal(
        <>
          {/* Transparent layer: blocks clicks and hover on the page behind the panel. */}
          <div className="fht-settings-backdrop" aria-hidden="true" />
          <div
            ref={panelRef}
            className="fht-settings-panel"
            role="dialog"
            aria-label="Manage columns"
            style={{ top: panel.top, right: panel.right }}
          >
            <ManageColumns
              variant="modal"
              fields={SETTINGS_FIELDS}
              selected={draft}
              onChange={setDraft}
              saveLabel="Done"
              onSave={() => { setApplied(draft); setPanel(null); }}
              onCancel={() => setPanel(null)}
            />
          </div>
        </>,
        document.body,
      )}
    </RecordCard>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

// Sorting Hat shortcuts between the Field History screens.
const FIELD_HISTORY_VARIATIONS = [
  {
    label: 'Email Properties',
    storyId: 'work-items-field-history-tracking--default',
  },
  {
    label: 'Detail Page - Field History',
    storyId: 'work-items-field-history-tracking--detail-page-field-history',
  },
  {
    label: 'Detail Page - Field History (plain first column)',
    storyId: 'work-items-field-history-tracking--detail-page-field-history-plain',
  },
];

export const DetailPageFieldHistory = {
  name: 'Detail Page - Field History',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <DetailPage variant="fieldHistory" historySection={<FieldHistorySection />} />
      <SortingHat variations={FIELD_HISTORY_VARIATIONS} />
    </>
  ),
};

export const DetailPageFieldHistoryPlain = {
  name: 'Detail Page - Field History (plain first column)',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <DetailPage variant="fieldHistory" historySection={<FieldHistorySection plainFirstColumn />} />
      <SortingHat variations={FIELD_HISTORY_VARIATIONS} />
    </>
  ),
};

export const Default = {
  render: () => (
    <>
      <FieldPropertiesDemo fieldName="Email" />
      <SortingHat variations={FIELD_HISTORY_VARIATIONS} />
    </>
  ),
};

export const LimitReached = {
  name: 'Limit reached (10 of 10)',
  render: () => (
    <FieldHistoryTrackingDemo
      fieldName="Amount"
      initialSelected={ADDITIONAL_COLUMNS.slice(0, MAX_ADDITIONAL)}
    />
  ),
};
