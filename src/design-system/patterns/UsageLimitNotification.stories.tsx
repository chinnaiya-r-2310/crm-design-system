import { useEffect, useId, useRef, useState } from 'react';
import { Input } from '../components/Input/Input';
import { Icon } from '../components/Icon/Icon';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '../components/Modal/Modal';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Tags, type TagItem } from '../components/Tags/Tags';
import { Switch } from '../components/Switch/Switch';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { MergeField } from '../components/MergeField/MergeField';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { CrmAlertInfo } from '../foundations/icons/Icons';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { VerticalTabs } from '../components/VerticalTabs/VerticalTabs';
import { SETUP_MENU_ITEMS } from '../components/VerticalTabs/setupMenuItems';
import { Tabs } from '../components/Tabs/Tabs';
import { SetupTable } from '../components/Table/Table';
import './UsageLimitNotification.page.css';
import { USAGE_FEATURES } from './UsageLimitNotification.data';
import { TemplateDialog } from './TemplateDialog';
import { UsageRecipientDialog } from './UsageRecipientDialog';
import type { UsageRecipient } from './UsageRecipientDialog';
import type { TemplateSettings } from './TemplateDialog';
import {
  AGGREGATION_LABELS, COMPARISON_OPTIONS, INTERVAL_OPTIONS, WINDOW_OPTIONS, WINDOW_MAX,
  USAGE_MESSAGE_FIELDS, usageNotificationMessage,
  changeUsageMeasure, createUsageTrigger, prettyUsageName, selectedUsageMeasure,
  usageMeasures, usageTriggerSummary, usageValueUnit, usageWindowApplies, validateUsageTrigger,
} from './UsageLimitNotification.logic';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Work Items/Usage Limit Notification',
  parameters: {
    layout: 'fullscreen',
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

const FEATURE_OPTIONS = Object.entries(USAGE_FEATURES).map(([value, feature]) => ({ value, label: feature.label }));


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
      <div data-usage-field={label ? '' : undefined} style={{ minWidth: 0, width: label ? 'max-content' : undefined }}>{children}</div>
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

// ─────────────────────────────────────────────────────────────────────────────
// Story
// ─────────────────────────────────────────────────────────────────────────────

type UsageListRow = {
  id: string; feature: string; name: string; creator?: string; date?: string; time?: string;
  channels?: string[]; status?: 'Active' | 'Paused' | 'Completed'; system?: boolean; group?: boolean; count?: number;
};

const USAGE_LIST_ROWS: UsageListRow[] = [
  ...['60%', '5000', '4000', '3000', '2500'].map((value, index) => ({
    id: `api-${index}`, feature: 'API', name: `Reached add-on limit ${value}`,
    creator: index > 2 ? 'System' : index === 2 ? 'Arjun Kumar' : 'Priya Nair',
    date: index > 2 ? 'Jan 12, 2026' : 'Jul 3, 2026', system: index > 2,
    channels: ['Push Notification', 'Emails', 'Zoho Cliq', 'Slack'], status: 'Active' as const,
  })),
  { id: 'functions', feature: 'Functions', name: 'Reached daily limit 5000 calls', creator: 'Meera Iyer', date: 'Jul 3, 2026', channels: ['Push Notification', 'Emails', 'Zoho Cliq', 'Slack'], status: 'Active' },
  { id: 'webhooks', feature: 'Webhooks', name: 'Slow webhook responses', creator: 'Sam Carter', date: 'Jul 3, 2026', channels: ['Push Notification', 'Emails'], status: 'Active' },
  { id: 'data-storage', feature: 'Data storage', name: 'Storage above 85%', creator: 'System', date: 'Jan 12, 2026', system: true, channels: ['Push Notification', 'Emails', 'Zoho Cliq', 'Slack'], status: 'Active' },
  { id: 'file-storage', feature: 'File storage', name: 'File storage nearly full', creator: 'Priya Nair', date: 'Jul 3, 2026', channels: ['Push Notification', 'Emails'], status: 'Completed' },
];

const personCell = (_value: unknown, row: UsageListRow) => row.group ? null : (
  <Tooltip variant="white" placement="top" followCursor content={
    <span className="usage-page__hover-list"><span>{row.creator}</span><span>{row.date}</span><span>{row.time}</span></span>
  }>
    <span className="usage-page__person" tabIndex={0}>
      <img src={`${import.meta.env.BASE_URL}images/avatars/user_06.jpg`} alt="" />
      <span>{row.date}</span>
    </span>
  </Tooltip>
);
const usageListColumns = (onStatusChange: (id: string, enabled: boolean) => void) => [
  { key: 'name', label: 'Notification Name', width: '35%', render: (_value: unknown, row: UsageListRow) => row.group
    ? <div className="usage-page__group">{row.name}<span className="usage-page__group-count">{row.count}</span></div>
    : <div className="usage-page__name">{row.name}</div> },
  { key: 'channels', label: 'Notify via', width: '25%', render: (_value: unknown, row: UsageListRow) => row.group ? null : <>
    {row.channels?.slice(0, 2).join(', ')}{(row.channels?.length ?? 0) > 2 && <span className="usage-page__more"> and <Tooltip
      content={<span className="usage-page__hover-list">{row.channels!.slice(2).map(channel => <span key={channel}>{channel}</span>)}</span>}
      variant="white" placement="top" followCursor>
      <button type="button" className="usage-page__more-trigger">{row.channels!.length - 2} more</button>
    </Tooltip></span>}
  </> },
  { key: 'creator', label: 'Created by', width: '14%', render: personCell },
  { key: 'modifier', label: 'Modified by', width: '14%', render: personCell },
  { key: 'status', label: 'Status', width: '12%', render: (_value: unknown, row: UsageListRow) => row.group ? null : (
    <Switch aria-label={`Enable ${row.name}`} checked={row.status === 'Active'}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onStatusChange(row.id, event.target.checked)} />
  ) },
];

export const CreateNotification: Story = {
  name: 'Create Notification',
  render: () => {
    const [open, setOpen] = useState(false);
    const [sidebarId, setSidebarId] = useState('admin-tools');
    const [featureFilter, setFeatureFilter] = useState('all');
    const [pageTab, setPageTab] = useState('usage');
    const [sectionTab, setSectionTab] = useState('notifications');
    const [savedRows, setSavedRows] = useState<UsageListRow[]>(() => USAGE_LIST_ROWS.map(row => ({ ...row, time: '10:30 AM' })));
    const columns = usageListColumns((id, enabled) => {
      setSavedRows(current => current.map(row => row.id === id ? { ...row, status: enabled ? 'Active' : 'Paused' } : row));
    });
    const visibleRows = savedRows.filter(row => featureFilter === 'all' || row.feature === featureFilter);
    const tableRows = Array.from(new Set(visibleRows.map(row => row.feature))).flatMap(feature => {
      const rows = visibleRows.filter(row => row.feature === feature);
      return [{ id: `group-${feature}`, feature, name: feature, group: true, count: rows.length }, ...rows];
    });
    const notificationNameId = useId();
    const [notificationName, setNotificationName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [trigger, setTrigger] = useState(() => createUsageTrigger());
    const [triggerError, setTriggerError] = useState<string>();
    const measure = selectedUsageMeasure(trigger);
    const feature = USAGE_FEATURES[trigger.feature];
    const updateTrigger = (patch: Partial<typeof trigger>) => {
      setTrigger(current => ({ ...current, ...patch }));
      setTriggerError(undefined);
    };

    // Send notification to
    const [notifyToTags, setNotifyToTags] = useState<UsageRecipient[]>([]);
    const [recipientDialogOpen, setRecipientDialogOpen] = useState(false);

    // Notify via toggles
    const [pushEmailEnabled,    setPushEmailEnabled]    = useState(true);
    const [externalAppsEnabled, setExternalAppsEnabled] = useState(false);

    // Channel checkboxes
    const [notifyPush,     setNotifyPush]     = useState(true);
    const [notifyEmail,    setNotifyEmail]    = useState(true);
    const [notifyZohoCliq, setNotifyZohoCliq] = useState(true);
    const [notifySlack,    setNotifySlack]    = useState(false);

    // Message
    const criteriaKey = JSON.stringify(trigger);
    const [messageDraft, setMessageDraft] = useState({ criteriaKey: '', value: '' });
    const message = messageDraft.criteriaKey === criteriaKey
      ? messageDraft.value : usageNotificationMessage(trigger);

    const [emailDialog, setEmailDialog] = useState<'preview' | 'edit'>();
    const [emailTemplate, setEmailTemplate] = useState<TemplateSettings>();
    const emailDefaults: TemplateSettings = {
      sender: 'owner',
      subject: notificationName.trim() || 'Usage limit notification',
      body: `Hello,\n\n${usageTriggerSummary(trigger) || message}\n\nRegards,\n\${Organization.OrganizationName}`,
    };

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

    const showCriteria = !!measure && !feature?.blank;
    const showWindow = usageWindowApplies(trigger);
    const isRange = ['bt', 'nb'].includes(trigger.comparator);
    const summary = usageTriggerSummary(trigger);
    const whenRowRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [modalWidth, setModalWidth] = useState(625);

    useEffect(() => {
      const content = contentRef.current;
      const dialog = content?.closest('.modal-dialog');
      if (!open || !content || !dialog) return;

      // Hug the widest field, not just When: recipient controls can be wider.
      // Exclude the summary, whose wrapping should follow the modal width.
      const fields = Array.from(content.querySelectorAll<HTMLElement>(
        '[data-usage-field], input[type="text"], [aria-label="Feature"]',
      ));
      const updateWidth = () => {
        const dialogLeft = dialog.getBoundingClientRect().left;
        const right = Math.max(...fields.map(field => field.getBoundingClientRect().right));
        setModalWidth(Math.ceil(right - dialogLeft + 30));
      };
      const observer = new ResizeObserver(updateWidth);
      fields.forEach(field => observer.observe(field));
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', updateWidth);
      };
    }, [open, showCriteria, externalAppsEnabled, pushEmailEnabled, showMessage]);

    return (
      <>
        {/* Hide number input spinners globally for this pattern */}
        <style>{`
          .usage-notification-modal {
            max-width: calc(100vw - 32px);
            transition: width 280ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .usage-notification-modal .modal-body {
            padding-right: 0;
            overflow-x: auto;
          }
          @media (prefers-reduced-motion: reduce) {
            .usage-notification-modal { transition: none; }
          }
          .usage-notification-when > * { flex-shrink: 0; }
          .usage-notification-measure-info {
            visibility: hidden;
            color: var(--ds-text-label);
            transform: none;
            scale: none;
          }
          .usage-notification-measure-info > circle:first-child {
            fill: currentColor;
          }
          .dropdown-option:hover .usage-notification-measure-info {
            visibility: visible;
          }
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        `}</style>

        <div className="usage-page">
          <aside className="usage-page__sidebar" aria-label="Setup navigation">
            <VerticalTabs variant="setup" searchable width="100%" items={SETUP_MENU_ITEMS}
              activeId={sidebarId} onSelect={setSidebarId} />
          </aside>
          <header className="usage-page__topband"><NextGenTopBand moduleLabel={null} showTerritory={false} /></header>
          <main className="usage-page__workspace" aria-label="Usage limit notifications">
            <Tabs tabs={[{ id: 'usage', label: 'Usage Limits' }, { id: 'admin', label: 'Admin tool' }]}
              activeTab={pageTab} onChange={setPageTab} />
            {pageTab === 'usage' ? <>
              <div className="usage-page__sections">
                <Tabs variant="secondary" tabs={[{ id: 'limits', label: 'Usage Limits' }, { id: 'notifications', label: 'Notification Configurator' }]}
                  activeTab={sectionTab} onChange={setSectionTab} />
              </div>
              {sectionTab === 'notifications' ? <section className="usage-page__content" aria-label="Notification Configurator">
                <div className="usage-page__toolbar">
                  <p>Manage CRM usage limits and events by enabling admins to be notified when required</p>
                  <div className="usage-page__actions">
                    <Dropdown aria-label="Filter notifications by feature" width={130} value={featureFilter}
                      options={[{ value: 'all', label: 'All' }, ...Array.from(new Set(savedRows.map(row => row.feature))).map(feature => ({ value: feature, label: feature }))]}
                      onChange={setFeatureFilter} />
                    <Button variant="primary" onClick={() => setOpen(true)}>Create Notification</Button>
                  </div>
                </div>
                <div className="usage-page__table-region" role="region" aria-label="Notifications table" tabIndex={0}>
                  <SetupTable variant="report" width="100%" columns={columns} rows={tableRows} emptyMessage="No notifications found" />
                </div>
              </section> : <section className="usage-page__content"><h1>Usage Limits</h1><p>Configure usage alerts in the Notification Configurator tab.</p></section>}
            </> : <section className="usage-page__content"><h1>Admin tool</h1><p>Select Usage Limits to manage usage notifications.</p></section>}
          </main>
        </div>

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
          className="usage-notification-modal"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => {
            if (!notificationName.trim()) {
              setNameError(true);
              document.getElementById(notificationNameId)?.focus();
              return;
            }
            const error = validateUsageTrigger(trigger);
            setTriggerError(error);
            if (error) return;
            setNotificationName(notificationName.trim());
            const channels = [
              ...(pushEmailEnabled && notifyPush ? ['Push Notification'] : []),
              ...(pushEmailEnabled && notifyEmail ? ['Emails'] : []),
              ...(externalAppsEnabled && notifyZohoCliq ? ['Zoho Cliq'] : []),
              ...(externalAppsEnabled && notifySlack ? ['Slack'] : []),
            ];
            setSavedRows(current => [...current, {
              id: `notification-${Date.now()}`, feature: feature.label, name: notificationName.trim(),
              creator: 'Priya Nair', date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date()),
              time: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(new Date()),
              channels, status: 'Active',
            }]);
            setNameError(false);
            setOpen(false);
          }}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={modalWidth}
        >
          <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>

          {/* ── Notification name, feature, condition, and frequency ───── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `${LABEL_COL} 1fr`,
            columnGap: 20,
            alignItems: 'center',
          }}>
            <label htmlFor={notificationNameId} style={labelStyle}>
              Notification Name
            </label>
            <Input
              id={notificationNameId}
              type="text"
              layout="vertical"
              width={390}
              value={notificationName}
              aria-required="true"
              aria-invalid={nameError || undefined}
              error={nameError}
              helperText={nameError ? 'Enter a notification name.' : undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNotificationName(event.target.value);
                if (event.target.value.trim()) setNameError(false);
              }}
            />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `${LABEL_COL} 1fr`,
            columnGap: 20,
            alignItems: 'center',
          }}>
            <span style={labelStyle}>Feature</span>
            <Dropdown layout="vertical" triggerAriaLabel="Feature" placeholder="Select"
              options={FEATURE_OPTIONS} width={390} value={trigger.feature}
              onChange={(value: string) => { setTrigger(createUsageTrigger(value)); setTriggerError(undefined); }} />
          </div>
          {showCriteria && measure && (
            <>
              <FormRow label="Based on">
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'calc(var(--ds-font-size-base) * 0.6)' }}>
                  <Dropdown layout="vertical" triggerAriaLabel="Based on" width={390} tooltipVariant="white" tooltipMaxWidth={600}
                    options={usageMeasures(trigger.feature).map(field => ({
                      value: field.name,
                      label: prettyUsageName(field.name),
                      trailingIcon: <Tooltip content={field.description} variant="white" maxWidth={600} placement="top" followCursor>
                        <CrmAlertInfo className="usage-notification-measure-info" width={12} height={12} tabIndex={0} role="img" aria-label={`About ${prettyUsageName(field.name)}`} />
                      </Tooltip>,
                    }))}
                    value={trigger.measure} onChange={(value: string) => {
                      setTrigger(current => changeUsageMeasure(current, value)); setTriggerError(undefined);
                    }} />
                  {measure.aggs.length > 1 && <>
                    <span style={labelStyle}>by</span>
                    <Dropdown layout="vertical" triggerAriaLabel="Calculation" width={150}
                      options={measure.aggs.map(value => ({ value, label: AGGREGATION_LABELS[value] }))}
                      value={trigger.calculation} onChange={(calculation: string) => updateTrigger({ calculation })} />
                  </>}
                </div>
              </FormRow>
              <FormRow label="When">
                <div ref={whenRowRef} className="usage-notification-when" style={{ display: 'flex', width: 'max-content', alignItems: 'center', flexWrap: 'nowrap', gap: 'calc(var(--ds-font-size-base) * 0.6)' }}>
                  {!!measure.limits?.length && <Dropdown layout="vertical" triggerAriaLabel="Threshold type" width={150}
                    options={[{ value: 'pct', label: 'Percent' }, { value: 'val', label: 'Value' }]}
                    value={trigger.mode} onChange={(mode: string) => updateTrigger({ mode,
                      value: mode === 'pct' ? '80' : '90000', valueTo: mode === 'pct' ? '100' : '100000' })} />}
                  <Dropdown layout="vertical" triggerAriaLabel="Comparator" width={150}
                    options={COMPARISON_OPTIONS} value={trigger.comparator}
                    onChange={(comparator: string) => updateTrigger({ comparator })} />
                  <Input layout="vertical" type="number" width={150} aria-label={isRange ? 'Threshold from' : 'Threshold value'}
                    min={trigger.mode === 'pct' ? 0.01 : 0} max={trigger.mode === 'pct' ? 500 : undefined}
                    step="any" value={trigger.value} placeholder={isRange ? 'From' : ''}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({ value: event.target.value })} />
                  {isRange && <Input layout="vertical" type="number" width={150} aria-label="Threshold to"
                    min={trigger.mode === 'pct' ? 0.01 : 0} max={trigger.mode === 'pct' ? 500 : undefined}
                    step="any" value={trigger.valueTo} placeholder="To"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({ valueTo: event.target.value })} />}
                  {trigger.mode === 'pct' && (measure.limits?.length ?? 0) > 1 && <Dropdown
                    layout="vertical" triggerAriaLabel="Limit" width={150}
                    options={measure.limits!.map(value => ({ value, label: prettyUsageName(value) }))}
                    value={trigger.constant} onChange={(constant: string) => updateTrigger({ constant })} />}
                  {trigger.mode === 'val' && <span style={labelStyle}>{usageValueUnit(trigger)}</span>}
                  {showWindow && <>
                    <span style={labelStyle}>over the last</span>
                    <Input layout="vertical" type="number" width={150} aria-label="Window length"
                      min={1} max={WINDOW_MAX[trigger.windowUnit]} step={1} value={trigger.windowValue}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTrigger({ windowValue: event.target.value })} />
                    <Dropdown layout="vertical" triggerAriaLabel="Window unit" width={150} options={WINDOW_OPTIONS}
                      value={trigger.windowUnit} onChange={(windowUnit: string) => updateTrigger({ windowUnit })} />
                  </>}
                </div>
              </FormRow>
            </>
          )}
          <FormRow label="Notify once every">
            <Dropdown layout="vertical" triggerAriaLabel="Notify once every" options={INTERVAL_OPTIONS}
              width={390} value={trigger.interval} onChange={(interval: string) => updateTrigger({ interval })} />
          </FormRow>
          {summary && <FormRow label="" align="start">
            <div style={{ width: 'fit-content', maxWidth: 'calc(100% - 30px)', marginRight: 30,
              overflowWrap: 'anywhere', boxSizing: 'border-box',
              padding: 'var(--ds-font-size-base)', border: '1px solid var(--ds-border-subtle)',
              borderRadius: 'calc(var(--ds-font-size-base) * 0.4)', background: 'var(--ds-bg-common-bg)',
              lineHeight: 'var(--ds-line-height-base)',
              color: 'var(--ds-text-base)', fontSize: 'var(--ds-font-size-base)',
              fontFamily: 'var(--ds-font-family-base)' }} aria-live="polite">
              {summary}
            </div>
          </FormRow>}
          {triggerError && <FormRow label=""><span role="alert" style={{ color: 'var(--ds-status-negative)' }}>{triggerError}</span></FormRow>}
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
                    <div className={`usage-recipient-field${notifyToTags.length > 0 ? ' usage-recipient-editable' : ''}`} role="group" aria-label="Send notification to"
                      onClick={(event) => {
                        if (!(event.target instanceof Element) || !event.target.closest('button')) {
                          setRecipientDialogOpen(true);
                        }
                      }}>
                      {notifyToTags.length === 0 ? (
                        <Button variant="default" size="sm" aria-haspopup="dialog" onClick={() => setRecipientDialogOpen(true)}>
                          Select User
                        </Button>
                      ) : (['user', 'group'] as const).map(kind => {
                        const recipients = notifyToTags.filter(recipient => recipient.kind === kind);
                        const label = kind === 'user' ? 'Users' : 'Groups';
                        return recipients.length > 0 && (
                          <Tooltip key={kind} variant="white" placement="top" maxWidth={320}
                            content={<span className="usage-recipient-preview">
                              <strong>{label} ({recipients.length})</strong>
                              {recipients.map(recipient => <span key={recipient.value}>{recipient.label}</span>)}
                            </span>}>
                            <button type="button" className="tags-tag usage-recipient-count" aria-haspopup="dialog"
                              aria-label={`${label}: ${recipients.length}. Edit selected recipients`}
                              onClick={() => setRecipientDialogOpen(true)}>
                              <span className="tags-tag-label">{label}</span>
                              <span className="tags-tag-count">{recipients.length}</span>
                            </button>
                          </Tooltip>
                        );
                      })}
                      {notifyToTags.length > 0 && <button type="button" className="usage-cliq-edit" aria-label="Edit notification recipients"
                        aria-haspopup="dialog" onClick={() => setRecipientDialogOpen(true)}>
                        <Icon name="CrmEditFilledMd" size={14} />
                      </button>}
                    </div>
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
                            aria-haspopup="dialog"
                            onClick={() => setEmailDialog('preview')}
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
                            aria-haspopup="dialog"
                            onClick={() => setEmailDialog('edit')}
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <FormRow label="Notify Via" align="center">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      {/* Isolate Checkbox's align-self: flex-start so the row can center it. */}
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                          label="Zoho Cliq"
                          checked={notifyZohoCliq}
                          onChange={(e) => setNotifyZohoCliq(e.target.checked)}
                        />
                      </div>
                      <div style={{
                        opacity:       notifyZohoCliq ? 1 : 0,
                        pointerEvents: notifyZohoCliq ? 'auto' : 'none',
                      }}>
                        <div className={`usage-recipient-field usage-cliq-field${zohoCommittedUsers.length > 0 || zohoCommittedChannels.length > 0 ? ' usage-recipient-editable' : ''}`} role="group" aria-label="Zoho Cliq recipients"
                          onClick={(event) => {
                            if (!(event.target instanceof Element) || !event.target.closest('button')) {
                              openZohoModal();
                            }
                          }}>
                          {zohoCommittedUsers.length === 0 && zohoCommittedChannels.length === 0 && (
                            <Button variant="default" size="sm" aria-haspopup="dialog" onClick={openZohoModal}>
                              Select User
                            </Button>
                          )}
                          {[
                            { label: 'Users', recipients: zohoCommittedUsers },
                            { label: 'Channels', recipients: zohoCommittedChannels },
                          ].map(({ label, recipients }) => recipients.length > 0 && (
                            <Tooltip key={label} variant="white" placement="top" maxWidth={320}
                              content={<span className="usage-recipient-preview">
                                <strong>{label} ({recipients.length})</strong>
                                {recipients.map(recipient => <span key={recipient.value}>{recipient.label}</span>)}
                              </span>}>
                              <button type="button" className="tags-tag usage-recipient-count" aria-haspopup="dialog"
                                aria-label={`${label}: ${recipients.length}. Edit Zoho Cliq recipients`}
                                onClick={openZohoModal}>
                                <span className="tags-tag-label">{label}</span>
                                <span className="tags-tag-count">{recipients.length}</span>
                              </button>
                            </Tooltip>
                          ))}
                          {(zohoCommittedUsers.length > 0 || zohoCommittedChannels.length > 0) && <button type="button" className="usage-cliq-edit" aria-label="Edit Zoho Cliq recipients"
                            aria-haspopup="dialog" onClick={openZohoModal}>
                            <Icon name="CrmEditFilledMd" size={14} />
                          </button>}
                        </div>
                      </div>
                    </div>
                  </FormRow>
                  <div style={{ paddingLeft: `calc(${LABEL_COL} + 20px)` }}>
                    <Checkbox
                      label="Slack"
                      checked={notifySlack}
                      onChange={(e) => setNotifySlack(e.target.checked)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Message ─────────────────────────────────────────────────── */}
          {showMessage && (
            <FormRow label="Notification message" align="start" labelOffset={7}>
              <MergeField
                key={criteriaKey}
                aria-label="Notification message"
                layout="vertical"
                variant="multiline"
                width={390}
                defaultValue={message}
                mergeFields={USAGE_MESSAGE_FIELDS}
                hint={'Type "#" to insert merge field'}
                onChange={(value: string) => setMessageDraft({ criteriaKey, value })}
              />
            </FormRow>
          )}

          </div>
        </Modal>
        {recipientDialogOpen && <UsageRecipientDialog
          value={notifyToTags}
          onClose={() => setRecipientDialogOpen(false)}
          onSave={recipients => { setNotifyToTags(recipients); setRecipientDialogOpen(false); }}
        />}
        {emailDialog && <TemplateDialog
          kind="email"
          title={emailDialog === 'preview' ? 'Usage Notification Email Preview' : 'Edit Email Content'}
          readOnly={emailDialog === 'preview'}
          initial={emailTemplate}
          defaults={emailDefaults}
          onClose={() => setEmailDialog(undefined)}
          onSave={settings => {
            setEmailTemplate(settings);
            setEmailDialog(undefined);
          }}
        />}
      </>
    );
  },
};
