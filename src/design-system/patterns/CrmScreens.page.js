import { useState } from 'react';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { Button } from '../components/Button/Button';
import { Tabs } from '../components/Tabs/Tabs';
import { SetupTable } from '../components/Table/Table';
import './CrmScreens.css';

// Shared CRM record screen shell (Detail Page). Used by the CRM Screens and
// Field History Tracking patterns. The history card is passed in as `historySection`.

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const DEAL = {
  name: 'HM Watches',
  amount: '$ 2,43,556.00',
  initial: 'H',
  lastUpdate: '26 day(s) ago',
};

const STAGE_HISTORY = [
  {
    id: 'sh-1',
    stage: 'PVK - Stage',
    movedTo: '',
    duration: '',
    modifiedBy: 'Chinnaiya Raja Velayutham',
    modifiedTime: '14 Oct, 2026 04:53 PM',
    amount: '$ 2,43,556.00',
    probability: '12',
    expectedRevenue: '$ 29,226.72',
    closingDate: '',
  },
];

const RELATED_LISTS = [
  { id: 'notes', label: 'Notes' },
  { id: 'attachments', label: 'Attachments' },
  { id: 'open-activities', label: 'Open Activities' },
  { id: 'pandadoc-documents', label: 'PandaDoc Documents' },
  { id: 'closed-activities', label: 'Closed Activities' },
  { id: 'stage-history', label: 'Stage History', count: 1 },
  { id: 'products', label: 'Products' },
  { id: 'emails', label: 'Emails' },
  { id: 'connected-records', label: 'Connected Records' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'cases', label: 'Cases' },
  { id: 'invoices', label: 'Invoices' },
];

const STAGE_HISTORY_COLUMNS = [
  {
    key: 'stage',
    label: 'Stage',
    width: 160,
    render: value => <span className="crm-screens__stage-pill">{value}</span>,
  },
  { key: 'movedTo', label: 'Moved To', width: 140 },
  { key: 'duration', label: 'Stage Duration (Calendar Days)', width: 220 },
  { key: 'modifiedBy', label: 'Modified By', width: 200 },
  { key: 'modifiedTime', label: 'Modified Time', width: 190 },
  { key: 'amount', label: 'Amount', width: 150 },
  { key: 'probability', label: 'Probability (%)', width: 140 },
  { key: 'expectedRevenue', label: 'Expected Revenue', width: 170 },
  { key: 'closingDate', label: 'Closing Date', width: 140 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Small pieces
// ─────────────────────────────────────────────────────────────────────────────

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SidebarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="2.5" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6 2.5v11" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const ColumnsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6.5 3v10M10 3v10" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export function RecordCard({ title, actions, children }) {
  return (
    <section className="crm-screens__card" aria-label={title}>
      <header className="crm-screens__card-header">
        <h3 className="crm-screens__card-title">{title}</h3>
        {actions && <div className="crm-screens__card-actions">{actions}</div>}
      </header>
      {children}
    </section>
  );
}

function EmptyState({ message = 'No records found' }) {
  return <div className="crm-screens__empty">{message}</div>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Detail Page
// ─────────────────────────────────────────────────────────────────────────────

function StageHistoryCard() {
  return (
    <RecordCard title="Stage History" actions={
      <button type="button" className="crm-screens__icon-button" aria-label="Manage columns">
        <ColumnsIcon />
      </button>
    }>
      <div className="crm-screens__card-body" style={{ padding: 0 }}>
        <SetupTable
          columns={STAGE_HISTORY_COLUMNS}
          rows={STAGE_HISTORY}
          emptyMessage="No records found"
        />
      </div>
    </RecordCard>
  );
}

export function DetailPage({ historySection, variant = 'default' }) {
  const [activeView, setActiveView] = useState('overview');
  const [emailTab, setEmailTab] = useState('mails');
  const [relatedOpen, setRelatedOpen] = useState(true);
  const [selectedList, setSelectedList] = useState('stage-history');

  const isFieldHistory = variant === 'fieldHistory';
  const lastUpdate = isFieldHistory ? '1 day(s) ago' : DEAL.lastUpdate;
  const buttonSize = isFieldHistory ? 'sm' : 'md'; // section buttons are small on the Field History page

  return (
    <div className={isFieldHistory ? 'crm-screens crm-screens--field-history' : 'crm-screens'}>
      <aside className="crm-screens__nav">
        <NextGenLeftMenu activeId="deals" teamspaceName="CRM Teamspace" />
      </aside>

      <div className="crm-screens__workspace">
        <header>
          <NextGenTopBand moduleLabel="Deals" userInitials="C" showTerritory={!isFieldHistory} />
        </header>

        <div className="crm-screens__record-header">
          <button type="button" className="crm-screens__back" aria-label="Back to Deals">
            <BackIcon />
          </button>
          <div className="crm-screens__avatar" aria-hidden="true">{DEAL.initial}</div>
          <div className="crm-screens__title-block">
            <h1 className="crm-screens__title">
              {DEAL.name} <span className="crm-screens__title-amount">- {DEAL.amount}</span>
            </h1>
            <Button variant="link-default">Add Tags</Button>
          </div>

          <div className="crm-screens__actions">
            {!isFieldHistory && <Button variant="outline-blue">Try New UI</Button>}
            {!isFieldHistory && (
              <button type="button" className="crm-screens__icon-button" aria-label="Translate">
                <span aria-hidden="true">文A</span>
              </button>
            )}
            <Button variant="primary">Send Email</Button>
            <Button variant="default">Edit</Button>
            <Button variant="default" arrow>Send with PandaDoc</Button>
            <Button variant="default" aria-label="More actions">···</Button>
          </div>
        </div>

        <div className="crm-screens__body">
          <aside className="crm-screens__related" aria-label="Related lists">
            <h2 className="crm-screens__related-title">Related List</h2>
            <ul className="crm-screens__related-list">
              {RELATED_LISTS.map(item => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="crm-screens__related-item"
                    aria-current={selectedList === item.id ? 'true' : undefined}
                    onClick={() => setSelectedList(item.id)}
                  >
                    <span>{item.label}</span>
                    {item.count !== undefined && <span className="crm-screens__count">{item.count}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="crm-screens__content">
            <div className="crm-screens__toolbar">
              {!isFieldHistory && (
                <button
                  type="button"
                  className="crm-screens__icon-button"
                  aria-label={relatedOpen ? 'Hide related list' : 'Show related list'}
                  aria-expanded={relatedOpen}
                  onClick={() => setRelatedOpen(open => !open)}
                >
                  <SidebarIcon />
                </button>
              )}
              <Tabs
                tabs={[
                  { id: 'overview', label: 'Overview' },
                  { id: 'timeline', label: 'Timeline' },
                ]}
                activeTab={activeView}
                onChange={setActiveView}
                variant={isFieldHistory ? 'secondary' : 'primary'}
              />
              <span className="crm-screens__toolbar-spacer" />
              <span className="crm-screens__updated">
                <ClockIcon /> Last Update : {lastUpdate}
              </span>
            </div>

            <div className="crm-screens__cards">
              {historySection ?? <StageHistoryCard />}

              <RecordCard title="Products" actions={<Button variant="outline-blue" size={buttonSize}>Add Products</Button>}>
                <EmptyState />
              </RecordCard>

              <RecordCard title="Emails" actions={<Button variant="outline-blue" size={buttonSize}>Compose Email</Button>}>
                <div className="crm-screens__card-body">
                  <Tabs
                    tabs={[
                      { id: 'mails', label: 'Mails' },
                      { id: 'drafts', label: 'Drafts' },
                      { id: 'scheduled', label: 'Scheduled' },
                    ]}
                    activeTab={emailTab}
                    onChange={setEmailTab}
                  />
                </div>
                <EmptyState />
              </RecordCard>

              <RecordCard title="Connected Records" actions={<Button variant="outline-blue" size={buttonSize} arrow>Add New</Button>}>
                <EmptyState />
              </RecordCard>

              <RecordCard title="Quotes" actions={
                <>
                  <Button variant="outline-blue" size={buttonSize}>Assign</Button>
                  <Button variant="outline-blue" size={buttonSize}>New</Button>
                </>
              }>
                <EmptyState />
              </RecordCard>

              <RecordCard title="Cases" actions={
                <>
                  <Button variant="outline-blue" size={buttonSize}>Assign</Button>
                  <Button variant="outline-blue" size={buttonSize}>New</Button>
                </>
              }>
                <EmptyState />
              </RecordCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
