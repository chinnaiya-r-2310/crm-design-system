import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../components/Modal/Modal';
import { ManageColumns } from '../components/ManageColumns/ManageColumns';
import { getModuleFields } from '../data/crm-sample-data';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Button } from '../components/Button/Button';
import { Dragger } from '../components/Dragger/Dragger';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { SetupTable } from '../components/Table/Table';
import { DetailPage, RecordCard } from './CrmScreens.page';
import { SortingHat } from '../components/SortingHat/SortingHat';
import { Info as InfoIcon, Lock as LockIcon } from '../foundations/icons/Icons';
import { crmIconMap } from '../foundations/icons/CrmCatalog';
import { Tooltip } from '../components/Tooltip/Tooltip';
import '../components/Tags/Tags.css';

// Detail-page column management uses the table-and-dropdown icon.
const ColumnAddIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.06787 2.88892V13.4445" stroke="#313949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.3801 6H0.995483" stroke="#313949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8.07692V2.59231C15 2.25385 14.7544 2 14.4269 2H1.5731C1.24561 2 1 2.25385 1 2.59231V13.4923C1 13.8308 1.24561 14 1.49123 14H7.18713" stroke="#313949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.7929 11H9.20711C8.76165 11 8.53857 11.5386 8.85355 11.8536L11.6464 14.6464C11.8417 14.8417 12.1583 14.8417 12.3536 14.6464L15.1464 11.8536C15.4614 11.5386 15.2383 11 14.7929 11Z" fill="#313949" />
  </svg>
);
const ExpandIcon = crmIconMap.CrmExpand;
const FilterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="26.200 598.600 16.500 17.000" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M33.2,615h-.6c-.4-.2-.7-.7-.7-1.2v-3.7c0-1.2-.5-2.4-1.4-3.2l-2.8-2.6c-.6-.6-1-1.4-1-2.2,0-1.7,1.3-3,3-3h9.6c1.6,0,2.9,1.3,2.9,2.9s-.4,1.7-1,2.3l-3,2.6c-1,.8-1.5,2-1.5,3.3v1.5c0,.8-.4,1.5-1,1.9l-1.7,1.2c-.3.2-.6.3-.8.3,0,0,0-.1,0-.1ZM29.7,600.5c-.8,0-1.5.7-1.5,1.5s.2.8.5,1.1l2.8,2.6c1.2,1.1,1.9,2.7,1.9,4.3v3.4l1.4-1c.2-.2.4-.4.4-.7v-1.5c0-1.7.8-3.3,2.1-4.4l3-2.6c.3-.3.5-.7.5-1.1,0-.8-.6-1.4-1.4-1.4h-9.7v-.2h0Z" />
  </svg>
);
const SortIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="110.367 1465.900 12.623 11.100" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M116.3,1468.7c.3.3.3.8,0,1.1,0,0-.3.2-.5.2s-.4,0-.5-.2l-.8-.8v6.7c0,.4-.3.8-.8.8s-.8-.3-.8-.8v-6.7l-.8.8c-.3.3-.8.3-1.1,0s-.3-.8,0-1.1l2-2c.3-.3.8-.3,1.1,0l2.2,2h0ZM122.3,1473.1c-.3-.3-.8-.3-1.1,0l-.8.8v-6.7c0-.4-.3-.8-.8-.8s-.8.3-.8.8v6.7l-.8-.8c-.3-.3-.8-.3-1.1,0s-.3.8,0,1.1l2,2s.3.2.5.2.4,0,.5-.2l2-2c.7-.3.7-.8.4-1.1Z" />
  </svg>
);

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

const DURATION_OPTIONS = [
  { label: 'Calendar Days', value: 'calendar-days' },
  { label: 'Business Days', value: 'business-days' },
];

const ADDITIONAL_COLUMNS = [
  'Contact Owner', 'Categories', 'Other Phone', 'Phone', 'Mobile', 'Duplicate Check',
  'Social Lead ID', 'Assistant', 'Lead Source', 'Countries', 'Department', 'Title',
  'Date of Birth', 'Home Phone', 'Email Opt Out', 'Asst Phone',
];

// Required history columns, in default display order. They cannot be unchecked, but can be reordered.
const REQUIRED_COLUMNS = ['Email\u2002→\u2002Moved To', 'Moved By', 'Moved Time', 'Duration'];

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
  const [trackDurationIn, setTrackDurationIn] = useState('calendar-days');

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
        description="Select columns to display"
        onClose={onClose}
        onCancel={onClose}
        onSave={() => onDone?.({ requiredOrder, selected, trackDurationIn })}
        cancelLabel="Cancel"
        saveLabel="Done"
        width={640}
        className="fht-manage-columns"
      >
        <style>{`
          .fht-manage-columns .modal-body { padding-right: 3px; }
        `}</style>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingRight: 0 }}>

          <Dropdown
            label="Track Duration in"
            layout="vertical"
            width="100%"
            options={DURATION_OPTIONS}
            value={trackDurationIn}
            onChange={setTrackDurationIn}
          />

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
const REQUIRED_TRACKED_KEYS = ['Email', 'Modified_By', 'Modified_Time', 'Duration'];
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
  { key: 'Modified_By', label: 'Moved By' },
  { key: 'Modified_Time', label: 'Moved Time' },
  { key: 'Duration', label: 'Duration' },
];

const TRACKED_FIELD_OPTIONS = [
  ...getModuleFields('Leads')
    .filter(field => !HISTORY_COLUMN_OPTIONS.some(history => history.key === field.key))
    .map(field => ({
      key: field.key,
      label: field.key === 'Email' ? 'Email\u2002→\u2002Moved To' : field.label,
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
  const [trackDurationIn, setTrackDurationIn] = useState('calendar-days');

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
          .mc-modal-dialog .modal-body { gap: 0; margin-top: -12px; overflow-y: auto; }
          .mc-modal-dialog .dropdown-root { flex-shrink: 0; }
          .mc-modal-dialog .fht-columns-label {
            position: sticky;
            /* Cover the modal body's 4px focus clearance while stuck. */
            top: -4px;
            padding-top: 4px;
            z-index: 3;
            background: var(--ds-bg-common-white);
            flex-shrink: 0;
            margin: 0;
            padding-bottom: 6px;
            font-weight: var(--ds-font-weight-regular);
          }
          .mc-modal-dialog .mc--embedded { flex: none; min-height: 0; display: contents; }
          .mc-modal-dialog .mc--embedded .mc-search {
            position: sticky;
            top: calc(var(--ds-line-height-base) + 6px);
            /* Keep the focus shadow above the sticky label while scrolling. */
            z-index: 4;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .mc-modal-dialog .mc--embedded .mc-list {
            min-height: 0;
            flex-shrink: 0;
            overflow: visible;
            padding-left: var(--ds-line-height-sm);
            margin-left: calc(-1 * var(--ds-line-height-sm));
          }
          .fht-limit-alert {
            position: fixed;
            top: calc(var(--ds-line-height-base) * 3.5);
            left: 50%;
            transform: translateX(-50%);
            z-index: 1100;
            width: max-content;
            max-width: calc(100vw - var(--ds-line-height-sm) * 2);
          }
        `}</style>
        <Dropdown
          label="Track Duration in"
          layout="vertical"
          width="100%"
          options={DURATION_OPTIONS}
          value={trackDurationIn}
          onChange={setTrackDurationIn}
          style={{ marginBottom: 'var(--ds-font-size-base)' }}
        />
        <p className="fht-columns-label" style={label}>
          Select columns to display
        </p>
        <ManageColumns
          variant="modal"
          embedded
          title="Email History Tracking"
          fields={TRACKED_FIELD_OPTIONS}
          selected={trackedColumns}
          onChange={handleTrackedChange}
        />
      </Modal>
      {manageOpen && limitExceeded && createPortal(
        <MessageBox
          variant="info"
          className="fht-limit-alert"
          title="Limit reached"
          message={`You can add up to ${MAX_ADDITIONAL} additional columns. Remove a column to add another.`}
          closable
          onClose={() => setLimitExceeded(false)}
        />,
        document.body,
      )}
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
  const [applied, setApplied] = useState(DEFAULT_COLUMN_KEYS); // columns shown in the table
  const [draft, setDraft] = useState(DEFAULT_COLUMN_KEYS); // selection while the panel is open
  const [panel, setPanel] = useState(null); // { top, right } when the settings panel is open
  const [expanded, setExpanded] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterSearch, setFilterSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState({ key: '', direction: 'ascending' });
  const [sortDraft, setSortDraft] = useState(sort);
  const settingsRef = useRef(null);
  const panelRef = useRef(null);
  const filtersRef = useRef(null);

  useEffect(() => {
    if (expanded && filtersOpen) {
      filtersRef.current?.querySelector('input[type="search"]')?.focus({ preventScroll: true });
    }
  }, [expanded, filtersOpen]);

  const openPanel = () => {
    const r = settingsRef.current.getBoundingClientRect();
    setDraft(applied);
    setPanel({ top: r.bottom + 8, right: Math.max(8, window.innerWidth - r.right) });
  };

  // Focus the search on every opening, including in the expanded view.
  useEffect(() => {
    if (panel) panelRef.current?.querySelector('input[type="search"]')?.focus({ preventScroll: true });
  }, [panel]);

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

  useEffect(() => {
    if (!sortOpen) return undefined;
    const dismiss = event => {
      if (event.target instanceof Element
        && event.target.matches('.modal-backdrop:has(> .fht-sort-popover)')) setSortOpen(false);
    };
    document.addEventListener('click', dismiss);
    return () => document.removeEventListener('click', dismiss);
  }, [sortOpen]);

  // Table columns follow the order chosen in the Manage Columns panel.
  const columns = applied.map((k) => FIELD_HISTORY_COLUMNS.find((c) => c.key === k))
    .map((c) => {
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

  const visibleRows = [...FIELD_HISTORY_ROWS].sort((a, b) => new Date(b.modifiedTime) - new Date(a.modifiedTime));
  const sliderRows = visibleRows.filter(row => Object.entries(filters).every(
    ([key, values]) => !values.length || values.includes(row[key]),
  )).sort((a, b) => {
    if (!sort.key) return 0;
    const key = sort.key;
    const numeric = value => Number(String(value).replace(/[^\d.-]/g, ''));
    const compare = ['modifiedTime', 'closingDate'].includes(key)
      ? new Date(a[key]) - new Date(b[key])
      : ['duration', 'amount', 'probability'].includes(key)
        ? numeric(a[key]) - numeric(b[key])
        : String(a[key]).localeCompare(String(b[key]));
    return sort.direction === 'ascending' ? compare : -compare;
  });
  const hasFilters = Object.values(filters).some(values => values.length > 0);
  const hasSort = Boolean(sort.key);
  const sortOptions = [{ label: 'None', value: '' }, ...SETTINGS_FIELDS.map(field => ({
    label: field.label, value: field.key,
  }))];

  return (
    <RecordCard title="Field History - Stage" actions={
      <>
        <Tooltip content="Manage Column" placement="top" followCursor variant="black" disabled={!!panel}>
          <button
            ref={expanded ? undefined : settingsRef}
            type="button"
            className="crm-screens__header-icon"
            aria-label="Manage Column"
            aria-haspopup="dialog"
            aria-expanded={!!panel}
            onClick={openPanel}
          >
            <ColumnAddIcon width={16} height={16} aria-hidden="true" />
          </button>
        </Tooltip>
        <Tooltip content="Expand" placement="top" followCursor variant="black" disabled={expanded}>
          <button
            type="button"
            className="crm-screens__header-icon crm-screens__header-icon--expand"
            aria-label="Expand Field History"
            aria-haspopup="dialog"
            aria-expanded={expanded}
            onClick={() => setExpanded(true)}
          >
            <ExpandIcon width={14} height={14} aria-hidden="true" />
          </button>
        </Tooltip>
      </>
    }>
      <Modal
        isOpen={expanded}
        className="fht-expanded-slider"
        title="Field History - Stage"
        onClose={() => { setPanel(null); setSortOpen(false); setExpanded(false); }}
        closeOnEscape={!panel && !sortOpen}
        width="min(90vw, calc(100vw - 48px))"
        showFooter={false}
        showClose
      >
        <div className="fht-expanded-slider__toolbar">
          <div className="fht-expanded-slider__tool-group" data-applied={hasFilters}>
            <Button variant="ghost-blue" className="fht-expanded-slider__tool" aria-expanded={filtersOpen}
              aria-label={hasFilters ? 'Filter (applied)' : 'Filter'}
              aria-controls="fht-history-filters" frontIcon={<span className="fht-expanded-slider__tool-icon"><FilterIcon width={16} height={16} /></span>}
              onClick={() => setFiltersOpen(open => !open)}>Filter</Button>
            {hasFilters && <button type="button" className="fht-expanded-slider__clear-tool"
              aria-label="Clear filters" onClick={() => setFilters({})}>×</button>}
          </div>
          <div className="fht-expanded-slider__tool-group" data-applied={hasSort}>
            <Button variant="ghost-blue" className="fht-expanded-slider__tool" aria-expanded={sortOpen}
              aria-label={hasSort ? 'Sort (applied)' : 'Sort'}
              aria-haspopup="dialog" frontIcon={<span className="fht-expanded-slider__tool-icon"><SortIcon width={12} height={12} /></span>}
              onClick={() => { setSortDraft(sort); setSortOpen(true); }}>Sort</Button>
            {hasSort && <button type="button" className="fht-expanded-slider__clear-tool"
              aria-label="Clear sort" onClick={() => {
                const cleared = { key: '', direction: 'ascending' };
                setSort(cleared);
                setSortDraft(cleared);
              }}>×</button>}
          </div>
        </div>
        <div className="fht-expanded-slider__layout">
          <div className="fht-expanded-slider__filter-shell" data-open={filtersOpen}
            inert={!filtersOpen} aria-hidden={!filtersOpen}>
          <aside ref={filtersRef} id="fht-history-filters" className="fht-expanded-slider__filters" aria-label="Filter Field History by">
            <h3>Filter Field History by</h3>
            <Input variant="search" width="100%" placeholder="Search" aria-label="Search history filters"
              value={filterSearch} onChange={event => setFilterSearch(event.target.value)} onClear={() => setFilterSearch('')} />
            <div className="fht-expanded-slider__filter-list">
              {SETTINGS_FIELDS.filter(field => field.label.toLowerCase().includes(filterSearch.toLowerCase())).map(field => (
                <div key={field.key} className="fht-expanded-slider__filter-field">
                  <Checkbox label={field.label} checked={Object.hasOwn(filters, field.key)} onChange={event => {
                    setFilters(current => {
                      const next = { ...current };
                      if (event.target.checked) next[field.key] = [];
                      else delete next[field.key];
                      return next;
                    });
                  }} />
                  {Object.hasOwn(filters, field.key) && <Dropdown multiSelect width="100%" searchable
                    triggerAriaLabel={`Filter ${field.label}`} placeholder="All" selectedValues={filters[field.key]}
                    options={[...new Set(FIELD_HISTORY_ROWS.map(row => row[field.key]))].map(value => ({ label: value, value }))}
                    onMultiChange={values => setFilters(current => ({ ...current, [field.key]: values }))} />}
                </div>
              ))}
              {!SETTINGS_FIELDS.some(field => field.label.toLowerCase().includes(filterSearch.toLowerCase()))
                && <p role="status">No filters found</p>}
            </div>
          </aside>
          </div>
          <div className="fht-expanded-slider__content">
            <div className="crm-screens__fh-table">
              <SetupTable columns={columns.map((column, index) => index === columns.length - 1 ? {
                ...column,
                label: <span className="fht-expanded-slider__column-header">
                  {column.label}
                  <Tooltip content="Manage Column" placement="top" followCursor variant="black" disabled={!!panel}>
                    <button
                      ref={expanded ? settingsRef : undefined}
                      type="button"
                      className="crm-screens__header-icon"
                      aria-label="Manage Column"
                      aria-haspopup="dialog"
                      aria-expanded={!!panel}
                      onClick={openPanel}
                    >
                      <ColumnAddIcon width={16} height={16} aria-hidden="true" />
                    </button>
                  </Tooltip>
                </span>,
              } : column)} rows={sliderRows} />
            </div>
            <div className="fht-expanded-slider__summary">
              <span>Total Records <strong>{sliderRows.length}</strong></span>
              <span>{sliderRows.length ? `1 to ${sliderRows.length}` : '0'}</span>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={expanded && sortOpen} className="fht-sort-popover" title="Sort By"
        width="min(460px, calc(100vw - 64px))" showFooter={false} showClose
        closeLabel="Close sort" onClose={() => setSortOpen(false)}>
        <div className="fht-sort-popover__fields">
          <Dropdown size="sm" width="100%" triggerAriaLabel="Sort by field" value={sortDraft.key} options={sortOptions}
            onChange={key => setSortDraft(current => ({ ...current, key }))} />
          <Dropdown size="sm" width="100%" triggerAriaLabel="Sort direction" value={sortDraft.direction} disabled={!sortDraft.key}
            options={[{ label: 'Ascending', value: 'ascending' }, { label: 'Descending', value: 'descending' }]}
            onChange={direction => setSortDraft(current => ({ ...current, direction }))} />
        </div>
        <div className="fht-sort-popover__actions">
          <Button size="sm" variant="default" onClick={() => setSortOpen(false)}>Cancel</Button>
          <Button size="sm" disabled={!sortDraft.key && !sort.key} onClick={() => { setSort(sortDraft); setSortOpen(false); }}>Apply</Button>
        </div>
      </Modal>
      {visibleRows.length > 0 ? (
        <div className="crm-screens__fh-table">
          <SetupTable columns={columns} rows={visibleRows} />
        </div>
      ) : (
        <div className="crm-screens__empty" role="status">No records found</div>
      )}
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
    label: 'Detail Page - Colored',
    storyId: 'work-items-field-history-tracking--detail-page-field-history',
  },
  {
    label: 'Detail Page',
    storyId: 'work-items-field-history-tracking--detail-page-field-history-plain',
  },
];

export const DetailPageFieldHistory = {
  name: 'Detail Page - Colored',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <>
      <DetailPage variant="fieldHistory" lastUpdateText="1 day ago" historySection={<FieldHistorySection />} />
      <SortingHat variations={FIELD_HISTORY_VARIATIONS} />
    </>
  ),
};

export const DetailPageFieldHistoryPlain = {
  name: 'Detail Page',
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
