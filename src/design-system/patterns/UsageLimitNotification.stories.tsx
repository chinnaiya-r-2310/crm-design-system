import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal/Modal';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Tags, type TagItem } from '../components/Tags/Tags';
import { Switch } from '../components/Switch/Switch';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { Textarea } from '../components/Textarea/Textarea';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Patterns/Usage Limit Notification',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal pattern for creating usage limit notifications — ' +
          'configure thresholds, notification channels, recipients, and message content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// Option lists
// ─────────────────────────────────────────────────────────────────────────────

const METRIC_OPTIONS = [
  { value: 'api_limits',               label: 'API Limits' },
  { value: 'email_limits',             label: 'Email Limits' },
  { value: 'function_execution_limits', label: 'Function Execution Limits' },
  { value: 'webhook_limits',           label: 'Webhook Limits' },
  { value: 'storage_limit',            label: 'Storage Limit' },
];

const OPERATOR_OPTIONS = [
  { value: 'exceeds',           label: 'Exceeds' },
  { value: 'reached',           label: 'Reached' },
  { value: 'below',             label: 'Below' },
  { value: 'anomaly_detected',  label: 'Anomaly Detected' },
];

const THRESHOLD_OPTIONS = [
  { value: 'default_limit', label: 'Default Limit' },
  { value: 'addon_limit',   label: 'Add-on Limit' },
  { value: 'total_limit',   label: 'Total Limit' },
];


const NOTIFY_TO_OPTIONS: TagItem[] = [
  { value: 'users',   label: 'Users',   count: 12 },
  { value: 'roles',   label: 'Roles',   count: 4  },
  { value: 'groups',  label: 'Groups',  count: 7  },
  { value: 'admins',  label: 'Admins',  count: 3  },
];

const ZOHO_USER_OPTIONS = [
  { value: 'alice',  label: 'Alice Johnson' },
  { value: 'bob',    label: 'Bob Smith' },
  { value: 'carol',  label: 'Carol Williams' },
  { value: 'david',  label: 'David Brown' },
  { value: 'eve',    label: 'Eve Davis' },
];

const ZOHO_CHANNEL_OPTIONS = [
  { value: 'general',     label: '#general' },
  { value: 'engineering', label: '#engineering' },
  { value: 'alerts',      label: '#alerts' },
  { value: 'support',     label: '#support' },
  { value: 'marketing',   label: '#marketing' },
];

// Metrics that require an extra number+unit field after the threshold dropdown
const METRIC_UNIT_OPTIONS: Record<string, Array<{ value: string; label: string }>> = {
  api_limits:    [{ value: 'percentage', label: 'Percentage' }, { value: 'credit', label: 'Credit' }],
  storage_limit: [{ value: 'percentage', label: 'Percentage' }, { value: 'gb',     label: 'GB'     }],
};

const FREQUENCY_OPTIONS = [
  { value: 'only_once',     label: 'Only Once' },
  { value: 'every_2_hours', label: 'Every 2 hours' },
  { value: 'every_1_hour',  label: 'Every 1 hour' },
  { value: 'every_45_min',  label: 'Every 45 min' },
  { value: 'every_30_min',  label: 'Every 30 min' },
  { value: 'every_15_min',  label: 'Every 15 min' },
  { value: 'every_10_min',  label: 'Every 10 min' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared style constants (all values from design tokens)
// ─────────────────────────────────────────────────────────────────────────────

const LABEL_COL = '155px';

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--ds-font-family-base)',
  fontSize:   'var(--ds-font-size-base)',
  fontWeight: 'var(--ds-font-weight-regular)',
  color:      'var(--ds-text-label)',
  whiteSpace: 'nowrap',
  textAlign:  'right',
};

const sectionHeadingStyle: React.CSSProperties = {
  margin:     0,
  fontFamily: 'var(--ds-font-family-base)',
  fontSize:   'var(--ds-font-size-h2)',
  fontWeight: 'var(--ds-font-weight-semibold)',
  lineHeight: 'var(--ds-line-height-h2)',
  color:      'var(--ds-text-heading)',
};

const subHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--ds-font-family-base)',
  fontSize:   'var(--ds-font-size-base)',
  fontWeight: 'var(--ds-font-weight-semibold)',
  color:      'var(--ds-text-base)',
};

// ─────────────────────────────────────────────────────────────────────────────
// Reusable layout helpers (not exported components — story-local only)
// ─────────────────────────────────────────────────────────────────────────────

function FormRow({
  label,
  children,
  align = 'center',
  labelOffset,
}: {
  label: string;
  children: React.ReactNode;
  align?: 'center' | 'start';
  labelOffset?: number;
}) {
  const pt = labelOffset !== undefined ? labelOffset : (align === 'start' ? 2 : 0);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `${LABEL_COL} auto`,
      columnGap: 20,
      alignItems: align,
    }}>
      <span style={{ ...labelStyle, paddingTop: pt }}>{label}</span>
      <div>{children}</div>
    </div>
  );
}

// TODO: Missing component — TagInput (multi-value token field for Users / Roles)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TagPlaceholder({ tags }: { tags: Array<{ label: string; count: number }> }) {
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      flexWrap:   'wrap',
      gap:        6,
      padding:    '4px 10px',
      minHeight:  34,
      width:      390,
      border:     '1px solid var(--ds-border-default)',
      borderLeft: '3px solid var(--ds-status-negative)',
      borderRadius: 4,
      background: 'var(--ds-bg-common-card)',
      boxSizing:  'border-box',
    }}>
      {tags.map((tag) => (
        <span
          key={tag.label}
          style={{
            display:    'inline-flex',
            alignItems: 'center',
            gap:        6,
            background: 'var(--ds-bg-common-bg)',
            border:     '1px solid var(--ds-border-subtle)',
            borderRadius: 12,
            padding:    '2px 10px',
            fontFamily: 'var(--ds-font-family-base)',
            fontSize:   'var(--ds-font-size-md)',
            color:      'var(--ds-text-base)',
          }}
        >
          {tag.label}
          <span style={{
            display:      'inline-flex',
            alignItems:   'center',
            justifyContent: 'center',
            minWidth:     18,
            padding:      '0 5px',
            background:   'var(--ds-border-default)',
            borderRadius: 10,
            fontSize:     'var(--ds-font-size-sm)',
            fontWeight:   'var(--ds-font-weight-medium)',
            color:        'var(--ds-text-base)',
          }}>
            {tag.count}
          </span>
        </span>
      ))}
    </div>
  );
}

// TODO: Missing component — RichTextToolbar
function RichTextToolbar() {
  const toolbarBtnStyle: React.CSSProperties = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    width:          28,
    height:         28,
    padding:        0,
    background:     'none',
    border:         '1px solid transparent',
    borderRadius:   4,
    cursor:         'pointer',
    fontFamily:     'var(--ds-font-family-base)',
    fontSize:       'var(--ds-font-size-base)',
    fontWeight:     'var(--ds-font-weight-semibold)',
    color:          'var(--ds-text-base)',
  };

  const activeBtnStyle: React.CSSProperties = {
    ...toolbarBtnStyle,
    background: 'var(--ds-bg-common-card)',
    border:     '1px solid var(--ds-border-default)',
    color:      'var(--ds-text-link)',
  };

  const dividerStyle: React.CSSProperties = {
    width:      1,
    height:     18,
    background: 'var(--ds-border-subtle)',
    margin:     '0 2px',
    flexShrink: 0,
  };

  return (
    <div style={{
      display:     'flex',
      alignItems:  'center',
      gap:         2,
      padding:     '6px 10px',
      borderTop:   '1px solid var(--ds-border-subtle)',
      background:  'var(--ds-bg-scale-bg3)',
      borderRadius: '0 0 4px 4px',
    }}>
      <button type="button" style={activeBtnStyle} aria-label="Normal text" title="Normal text">T</button>
      <div style={dividerStyle} />
      <button type="button" style={toolbarBtnStyle} aria-label="Bold" title="Bold"><strong>B</strong></button>
      <button type="button" style={{ ...toolbarBtnStyle, fontStyle: 'italic' }} aria-label="Italic" title="Italic"><em>I</em></button>
      <button type="button" style={{ ...toolbarBtnStyle, textDecoration: 'underline' }} aria-label="Underline" title="Underline">U</button>
      <button type="button" style={{ ...toolbarBtnStyle, textDecoration: 'line-through' }} aria-label="Strikethrough" title="Strikethrough">S</button>
      <div style={dividerStyle} />
      <button type="button" style={toolbarBtnStyle} aria-label="Text color" title="Text color">
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <span style={{ fontWeight: 700, fontSize: 12 }}>A</span>
          <span style={{ width: 14, height: 3, background: 'var(--ds-status-negative)', borderRadius: 1 }} />
        </span>
      </button>
      <button type="button" style={toolbarBtnStyle} aria-label="Highlight color" title="Highlight color">
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <span style={{ fontWeight: 700, fontSize: 12, color: 'var(--ds-icon-primary-label-grey)' }}>A</span>
          <span style={{ width: 14, height: 3, background: 'var(--ds-icon-primary-label-grey)', borderRadius: 1 }} />
        </span>
      </button>
      <div style={dividerStyle} />
      <button type="button" style={toolbarBtnStyle} aria-label="Bullet list" title="Bullet list">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="2" cy="4" r="1.2" fill="currentColor" />
          <circle cx="2" cy="7" r="1.2" fill="currentColor" />
          <circle cx="2" cy="10" r="1.2" fill="currentColor" />
          <line x1="5" y1="4" x2="13" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <button type="button" style={toolbarBtnStyle} aria-label="Numbered list" title="Numbered list">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <text x="0" y="5" style={{ fontSize: 5, fill: 'currentColor' }}>1.</text>
          <text x="0" y="8.5" style={{ fontSize: 5, fill: 'currentColor' }}>2.</text>
          <text x="0" y="12" style={{ fontSize: 5, fill: 'currentColor' }}>3.</text>
          <line x1="5" y1="4" x2="13" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div style={dividerStyle} />
      <button type="button" style={toolbarBtnStyle} aria-label="More options" title="More options">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="4"  cy="8" r="1.2" fill="currentColor" />
          <circle cx="8"  cy="8" r="1.2" fill="currentColor" />
          <circle cx="12" cy="8" r="1.2" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}


// Number input + Dropdown merged into a single bordered container — same visual pattern as DateTimeInput
function StorageLimitField({
  value,
  unit,
  unitOptions,
  onValueChange,
  onUnitChange,
}: {
  value:         string;
  unit:          string;
  unitOptions:   Array<{ value: string; label: string }>;
  onValueChange: (v: string) => void;
  onUnitChange:  (v: string) => void;
}) {
  return (
    <>
      <style>{`
        .ds-unit-merged:hover { border-color: var(--ds-components-input-hover-outline); }
        .ds-unit-merged:focus-within {
          border-color: var(--ds-components-input-focus-outline) !important;
          box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow) !important;
          outline: none;
        }
        .ds-unit-dropdown button {
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          height: 100% !important;
          border-radius: 0 !important;
        }
        .ds-unit-dropdown button:hover,
        .ds-unit-dropdown button:focus,
        .ds-unit-dropdown button[data-open] {
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>
      <div
        className="ds-unit-merged"
        style={{
          display:    'inline-flex',
          alignItems: 'stretch',
          height:     34,
          border:     '1px solid var(--ds-components-input-default-outline)',
          borderRadius: 6,
          background: 'var(--ds-bg-common-card)',
          boxSizing:  'border-box',
          overflow:   'hidden',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
      >
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          style={{
            width:      65,
            height:     '100%',
            border:     'none',
            outline:    'none',
            padding:    '0 8px',
            background: 'transparent',
            fontFamily: 'var(--ds-font-family-base)',
            fontSize:   'var(--ds-font-size-base)',
            color:      'var(--ds-text-base)',
            boxSizing:  'border-box',
            MozAppearance: 'textfield',
          } as React.CSSProperties}
          aria-label="Threshold value"
        />
        <span
          style={{
            width:      1,
            flexShrink: 0,
            background: 'var(--ds-components-input-default-outline)',
            alignSelf:  'stretch',
          }}
          aria-hidden="true"
        />
        <div className="ds-unit-dropdown" style={{ display: 'flex', alignItems: 'stretch' }}>
          <Dropdown
            layout="vertical"
            options={unitOptions}
            value={unit}
            onChange={onUnitChange}
            width={110}
          />
        </div>
      </div>
    </>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// Story
// ─────────────────────────────────────────────────────────────────────────────

export const CreateNotification: Story = {
  name: 'Create Notification',
  render: () => {
    const [open, setOpen] = useState(false);

    // Notify when
    const [metric,           setMetric]          = useState('');
    const [operator,         setOperator]         = useState('');
    const [threshold,        setThreshold]        = useState('');
    const [percentageValue,  setPercentageValue]  = useState('');
    const [percentageUnit,   setPercentageUnit]   = useState('percentage');
    const [rollingHours,     setRollingHours]     = useState('');

    // Notification frequency
    const [frequency, setFrequency] = useState('');

    // Send notification to
    const [notifyToTags, setNotifyToTags] = useState<TagItem[]>([
      { value: 'users', label: 'Users', count: 12 },
      { value: 'roles', label: 'Roles', count: 4  },
    ]);

    // Notify via toggles
    const [pushEmailEnabled,    setPushEmailEnabled]    = useState(true);
    const [externalAppsEnabled, setExternalAppsEnabled] = useState(false);

    // Channel checkboxes
    const [notifyPush,     setNotifyPush]     = useState(true);
    const [notifyEmail,    setNotifyEmail]    = useState(true);
    const [notifyZohoCliq, setNotifyZohoCliq] = useState(true);
    const [notifySlack,    setNotifySlack]    = useState(false);

    // Message
    const [message, setMessage] = useState(
      'Hi ${user.firstname}, API usage exceeds the purchased limit, please check the usage.'
    );

    // Zoho Cliq Notification sub-modal — draft/committed pattern
    const [zohoOpen,           setZohoOpen]           = useState(false);
    const [zohoNotifyUsers,    setZohoNotifyUsers]    = useState(true);
    const [zohoNotifyChannels, setZohoNotifyChannels] = useState(false);
    const [zohoDraftUsers,     setZohoDraftUsers]     = useState<TagItem[]>([]);
    const [zohoDraftChannels,  setZohoDraftChannels]  = useState<TagItem[]>([]);
    const [zohoCommittedUsers,    setZohoCommittedUsers]    = useState<TagItem[]>([]);
    const [zohoCommittedChannels, setZohoCommittedChannels] = useState<TagItem[]>([]);

    const openZohoModal = () => {
      setZohoDraftUsers(zohoCommittedUsers);
      setZohoDraftChannels(zohoCommittedChannels);
      setZohoOpen(true);
    };
    const handleZohoDone = () => {
      setZohoCommittedUsers(zohoDraftUsers);
      setZohoCommittedChannels(zohoDraftChannels);
      setZohoOpen(false);
    };
    const handleZohoCancel = () => setZohoOpen(false);

    // Whether the Message section should be shown.
    // Hidden only when the ONLY active channel that carries a message is Email
    // (which has its own template), and no push channels are enabled.
    const onlyEmailNotify =
      pushEmailEnabled && notifyEmail && !notifyPush &&
      (!externalAppsEnabled || (!notifyZohoCliq && !notifySlack));
    const showMessage = !onlyEmailNotify;

    // Anomaly Detected has no further inputs after the operator
    const showFurtherInputs  = !!operator && operator !== 'anomaly_detected';
    // Metrics that need an extra number+unit field after the three cascading dropdowns
    const showThresholdField = showFurtherInputs && (metric in METRIC_UNIT_OPTIONS);
    const showRollingHours   = showFurtherInputs && metric === 'api_limits';
    const currentUnitOptions = METRIC_UNIT_OPTIONS[metric] ?? [];
    const dropGap    = 10;
    const metricW    = 200; // always 200px
    const operatorW  = 200; // always 200px
    const thresholdW = metric === 'api_limits' ? 110 : showFurtherInputs ? 130 : 200;

    // Modal grows only when the extra inputs are actually visible
    const modalWidth = showRollingHours ? 1160 : showThresholdField ? 980 : 860;

    return (
      <>
        {/* Hide number input spinners globally for this pattern */}
        <style>{`
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        `}</style>

        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Notification
        </Button>

        {/* ── Zoho Cliq Notification sub-modal ─────────────────────────── */}
        <Modal
          isOpen={zohoOpen}
          title="Zoho Cliq Notification"
          onClose={handleZohoCancel}
          onCancel={handleZohoCancel}
          onSave={handleZohoDone}
          cancelLabel="Cancel"
          saveLabel="Done"
          width={520}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Checkbox
                label="Notify to users"
                checked={zohoNotifyUsers}
                onChange={(e) => setZohoNotifyUsers(e.target.checked)}
              />
              {zohoNotifyUsers && (
                <Tags
                  value={zohoDraftUsers}
                  options={ZOHO_USER_OPTIONS}
                  onChange={setZohoDraftUsers}
                  placeholder="Select users"
                  width="100%"
                />
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Checkbox
                label="Notify in Channels"
                checked={zohoNotifyChannels}
                onChange={(e) => setZohoNotifyChannels(e.target.checked)}
              />
              {zohoNotifyChannels && (
                <Tags
                  value={zohoDraftChannels}
                  options={ZOHO_CHANNEL_OPTIONS}
                  onChange={setZohoDraftChannels}
                  placeholder="Select channels"
                  width="100%"
                />
              )}
            </div>
          </div>
        </Modal>

        {/* ── Main modal ───────────────────────────────────────────────── */}
        <Modal
          isOpen={open}
          title="Configure Usage Limit Notification"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={modalWidth}
        >
          {/*
           * The Modal body has margin-right: -28px / padding-right: 8px which
           * extends the scroll area 20px past the dialog's intended 30px right
           * padding. This wrapper restores the full 30px gap on the right.
           */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30, paddingRight: 20 }}>

          {/* ── Notify when + Notification frequency (20px apart) ──────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `${LABEL_COL} 1fr`,
            columnGap: 20,
            alignItems: 'center',
          }}>
            <span style={labelStyle}>Notify when</span>
            <div style={{ display: 'flex', gap: dropGap, alignItems: 'flex-end' }}>
              <Dropdown
                layout="vertical"
                placeholder="Select Feature"
                options={METRIC_OPTIONS}
                width={metricW}
                value={metric}
                onChange={(v) => {
                  setMetric(v);
                  setOperator('');
                  setThreshold('');
                  setRollingHours('');
                  if (v in METRIC_UNIT_OPTIONS) {
                    setPercentageValue('80');
                    setPercentageUnit('percentage');
                  } else {
                    setPercentageValue('');
                  }
                }}
              />
              <Dropdown
                layout="vertical"
                placeholder="Select Condition"
                options={OPERATOR_OPTIONS}
                width={operatorW}
                value={operator}
                onChange={(v) => {
                  setOperator(v);
                  setThreshold('');
                  if (v === 'anomaly_detected') {
                    setPercentageValue('');
                    setRollingHours('');
                  }
                }}
                disabled={!metric}
              />
              {showFurtherInputs && (
                <Dropdown
                  layout="vertical"
                  placeholder="Select Limit"
                  options={THRESHOLD_OPTIONS}
                  width={thresholdW}
                  value={threshold}
                  onChange={setThreshold}
                  disabled={!operator}
                />
              )}
              {showThresholdField && (
                <StorageLimitField
                  value={percentageValue}
                  unit={percentageUnit}
                  unitOptions={currentUnitOptions}
                  onValueChange={setPercentageValue}
                  onUnitChange={setPercentageUnit}
                />
              )}
              {showRollingHours && (
                <>
                  <input
                    type="number"
                    value={rollingHours}
                    onChange={(e) => setRollingHours(e.target.value)}
                    placeholder="0"
                    style={{
                      width: 65, height: 34, flexShrink: 0,
                      border: '1px solid var(--ds-components-input-default-outline)',
                      borderRadius: 6, outline: 'none', padding: '0 8px',
                      background: 'var(--ds-bg-common-card)',
                      fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-base)',
                      color: 'var(--ds-text-base)', boxSizing: 'border-box' as const,
                      MozAppearance: 'textfield',
                    } as React.CSSProperties}
                    aria-label="Rolling hours value"
                  />
                  <span style={{
                    alignSelf: 'center',
                    fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-base)',
                    color: 'var(--ds-text-base)', whiteSpace: 'nowrap',
                  }}>
                    Rolling Hours
                  </span>
                </>
              )}
            </div>
          </div>

          {/* ── Notification frequency ───────────────────────────────────── */}
          <FormRow label="Notification frequency">
            <Dropdown
              layout="vertical"
              placeholder="Select"
              options={FREQUENCY_OPTIONS}
              width={390}
              value={frequency}
              onChange={setFrequency}
              required
            />
          </FormRow>
          </div>{/* end first-group */}

          {/* ── Notify via ──────────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 style={sectionHeadingStyle}>Notify via</h2>

            {/* Push Notification / Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={subHeadingStyle}>Push Notification / Email</span>
                <Switch
                  checked={pushEmailEnabled}
                  onChange={(e) => setPushEmailEnabled(e.target.checked)}
                  aria-label="Toggle push notification and email"
                />
              </div>

              {pushEmailEnabled && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <FormRow label="Send notification to">
                    <Tags
                      value={notifyToTags}
                      options={NOTIFY_TO_OPTIONS}
                      onChange={setNotifyToTags}
                      placeholder="Select users or roles"
                      width={390}
                      required
                    />
                  </FormRow>

                  <FormRow label="Notify Via" align="start">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <Checkbox
                        label="Push Notification"
                        checked={notifyPush}
                        onChange={(e) => setNotifyPush(e.target.checked)}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Checkbox
                          label="Email"
                          checked={notifyEmail}
                          onChange={(e) => setNotifyEmail(e.target.checked)}
                        />
                        {/* Preview · Edit Template — only visible when Email is checked */}
                        {notifyEmail && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <button
                            type="button"
                            style={{
                              background: 'none',
                              border:     'none',
                              padding:    0,
                              cursor:     'pointer',
                              fontFamily: 'var(--ds-font-family-base)',
                              fontSize:   'var(--ds-font-size-base)',
                              color:      'var(--ds-text-link)',
                            }}
                            aria-label="Preview email template"
                          >
                            Preview
                          </button>
                          <span style={{
                            color:      'var(--ds-text-muted)',
                            fontSize:   'var(--ds-font-size-base)',
                            lineHeight: 1,
                          }}>·</span>
                          <button
                            type="button"
                            style={{
                              background: 'none',
                              border:     'none',
                              padding:    0,
                              cursor:     'pointer',
                              fontFamily: 'var(--ds-font-family-base)',
                              fontSize:   'var(--ds-font-size-base)',
                              color:      'var(--ds-text-link)',
                            }}
                            aria-label="Edit email template"
                          >
                            Edit Template
                          </button>
                        </span>}
                      </div>
                    </div>
                  </FormRow>
                </div>
              )}
            </div>

            {/* External apps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={subHeadingStyle}>External apps</span>
                <Switch
                  checked={externalAppsEnabled}
                  onChange={(e) => setExternalAppsEnabled(e.target.checked)}
                  aria-label="Toggle external app notifications"
                />
              </div>

              {externalAppsEnabled && (
                /*
                 * labelOffset=7: centers the "Notify Via" label text (lineHeight 20px)
                 * with the Zoho Cliq checkbox which is centered in a 34px-tall row.
                 * Center of Zoho Cliq row = 17px → paddingTop = 17 − 10 = 7px.
                 */
                <FormRow label="Notify Via" align="start" labelOffset={7}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Checkbox
                        label="Zoho Cliq"
                        checked={notifyZohoCliq}
                        onChange={(e) => setNotifyZohoCliq(e.target.checked)}
                      />
                      <div style={{
                        opacity:       notifyZohoCliq ? 1 : 0,
                        pointerEvents: notifyZohoCliq ? 'auto' : 'none',
                      }}>
                        {/* Show committed values as Tags chips; overlay intercepts clicks to open sub-modal */}
                        <div style={{ position: 'relative', width: 390 }}>
                          <Tags
                            value={[...zohoCommittedUsers, ...zohoCommittedChannels]}
                            options={[]}
                            onChange={() => {}}
                            placeholder="Select users or channels"
                            width={390}
                            required
                          />
                          <div
                            style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
                            onClick={openZohoModal}
                          />
                        </div>
                      </div>
                    </div>
                    <Checkbox
                      label="Slack"
                      checked={notifySlack}
                      onChange={(e) => setNotifySlack(e.target.checked)}
                    />
                  </div>
                </FormRow>
              )}
            </div>
          </div>

          {/* ── Message ─────────────────────────────────────────────────── */}
          {showMessage && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 style={sectionHeadingStyle}>Message</h2>
                <span style={{
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize:   'var(--ds-font-size-md)',
                  color:      'var(--ds-text-muted)',
                }}>
                  <strong style={{
                    fontWeight: 'var(--ds-font-weight-semibold)',
                    color:      'var(--ds-text-label)',
                  }}>Hint:</strong>
                  {' '}Type "#" to insert merge field
                </span>
              </div>

              {/* TODO: Missing component — RichTextEditor (textarea + formatting toolbar) */}
              <div style={{
                border:     '1px solid var(--ds-border-default)',
                borderRadius: 4,
                overflow:   'hidden',
              }}>
                <Textarea
                  layout="vertical"
                  width="100%"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minHeight={100}
                  style={{ border: 'none', borderRadius: 0 }}
                />
                <RichTextToolbar />
              </div>
            </div>
          )}

          </div>
        </Modal>
      </>
    );
  },
};
