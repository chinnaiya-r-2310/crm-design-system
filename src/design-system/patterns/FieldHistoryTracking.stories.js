import { useState } from 'react';
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
import { SetupTable } from '../components/Table/Table';
import { DetailPage, RecordCard } from './CrmScreens.page';
import { SortingHat } from '../components/SortingHat/SortingHat';
import { Info as InfoIcon, Lock as LockIcon } from '../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

export default {
  title: 'Design System/Patterns/Field History Tracking',
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
    fieldType: 'Pick List',
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
    fieldType: 'Pick List',
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
    fieldType: 'Pick List',
    source: 'Workflow',
  },
  {
    id: 'fh-4',
    from: '(Record Created)',
    to: 'Negotiation',
    modifiedBy: 'Yren Okafor',
    modifiedTime: 'Apr 22, 2026 2:17 PM',
    duration: '6 days',
    amount: '$ 1,30,000',
    probability: '40%',
    fieldType: 'Pick List',
    source: 'Import',
  },
];

const FIELD_HISTORY_TIME_OPTIONS = [
  { value: 'all', label: 'All time' },
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '6m', label: 'Last 6 months' },
  { value: '1y', label: 'Last 1 year' },
];

const FIELD_HISTORY_USER_OPTIONS = [
  { value: 'all', label: 'All users' },
  { value: 'elijah', label: 'Elijah Morgan' },
  { value: 'klaus', label: 'Klaus Weber' },
  { value: 'mikasa', label: 'Mikasa Chen' },
  { value: 'yren', label: 'Yren Okafor' },
  { value: 'system', label: 'System / Automation' },
];

const FIELD_HISTORY_SOURCE_OPTIONS = [
  { value: 'all', label: 'All sources' },
  { value: 'manual', label: 'Manual (UI)' },
  { value: 'workflow', label: 'Workflow' },
  { value: 'api', label: 'API' },
  { value: 'import', label: 'Import' },
];

const FIELD_HISTORY_COLUMNS = [
  {
    key: 'from',
    label: 'Previous Deal Stage ↔ Moved To',
    width: 340,
    render: (value, row) => (
      <span className="crm-screens__transition">
        <span className="crm-screens__stage-pill">{value}</span>
        <span aria-hidden="true">→</span>
        <span className="crm-screens__stage-pill">{row.to}</span>
      </span>
    ),
  },
  {
    key: 'modifiedBy',
    label: 'Modified By',
    width: 200,
    render: value => (
      <span className="crm-screens__person">
        <span className="crm-screens__mini-avatar" aria-hidden="true">{value.charAt(0)}</span>
        {value}
      </span>
    ),
  },
  { key: 'modifiedTime', label: 'Modified Time', width: 190 },
  { key: 'duration', label: 'Duration', width: 110 },
  { key: 'amount', label: 'Amount', width: 130 },
  { key: 'probability', label: 'Probability', width: 110 },
  { key: 'fieldType', label: 'Field Type', width: 120 },
  {
    key: 'source',
    label: 'Source',
    width: 130,
    render: value => <span className="crm-screens__source-pill">{value}</span>,
  },
];

function FieldHistorySection() {
  const [timeFilter, setTimeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');

  return (
    <RecordCard
      title="Field History"
      actions={<Button variant="outline-blue">Manage Columns</Button>}
    >
      <div className="crm-screens__filters">
        <span className="crm-screens__filter-label">Filter by</span>
        <Dropdown value={timeFilter} options={FIELD_HISTORY_TIME_OPTIONS} onChange={setTimeFilter} width={160} />
        <Dropdown value={userFilter} options={FIELD_HISTORY_USER_OPTIONS} onChange={setUserFilter} width={180} />
        <Dropdown value={sourceFilter} options={FIELD_HISTORY_SOURCE_OPTIONS} onChange={setSourceFilter} width={160} />
      </div>
      <SetupTable
        columns={FIELD_HISTORY_COLUMNS}
        rows={FIELD_HISTORY_ROWS}
        emptyMessage="No records found"
      />
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
    storyId: 'design-system-patterns-field-history-tracking--default',
  },
  {
    label: 'Detail Page - Field History',
    storyId: 'design-system-patterns-field-history-tracking--detail-page-field-history',
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
