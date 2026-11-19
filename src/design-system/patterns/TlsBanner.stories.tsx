import { useId, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { WMSBar } from '../components/WMSBar/WMSBar';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { CrmAlertWarning } from '../foundations/icons/Icons';
import { crmIconMap } from '../foundations/icons/CrmCatalog';
import { Button } from '../components/Button/Button';
import { SetupTable } from '../components/Table/Table';
import './TlsBanner.css';

const meta = {
  title: 'Work Items/TLS Banner',
  includeStories: ['Default', 'BannerExcludesLeftPanel'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TLS Banner work item. Page shell composed from the existing NextGenLeftMenu (left panel), ' +
          'NextGenTopBand (top band) and WMSBar (bottom communication bar). The right workspace shows the ' +
          'CRM homepage content (welcome, open activities, next 7 days tasks, meetings and appointments) ' +
          'with the TLS banner message above it. Data is local mock data.',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const ColumnArrangeIcon = crmIconMap.CrmColumnArrange;
const CloseIcon = crmIconMap.CrmClose9;

// End-of-header column with the manage-columns icon, as in the Field History workitem.
const MANAGE_COLUMN = {
  key: 'manageColumns',
  label: (
    <button type="button" className="tls-banner-page__manage-cols" aria-label="Manage Column">
      <ColumnArrangeIcon width={16} height={16} aria-hidden="true" />
    </button>
  ),
  width: 36,
  render: () => null,
};
const RefreshIcon = crmIconMap.CrmReload;
const MoreOptionsIcon = crmIconMap.CrmMoreHr;

const BANNER_MESSAGE_BEFORE_DATE = 'Zoho CRM is ending support for weak security protocols. Update older browsers and API clients by ';
const BANNER_DATE = 'December 31, 2026';
const BANNER_MESSAGE_AFTER_DATE = ', to keep access.';

const ACTIVITY_VIEWS = [
  { value: 'week', label: 'My open activities for this week' },
  { value: 'today', label: 'My open activities for today' },
];
const TASK_VIEWS = [
  { value: 'next7', label: 'My Next 7 Days + Overdue Tasks' },
  { value: 'overdue', label: 'My Overdue Tasks' },
];

const ACTIVITY_COLUMNS = [
  { key: 'date', label: 'Date/Time', width: 110 },
  { key: 'info', label: 'Activity Info', width: 260 },
  { key: 'related', label: 'Related To', width: 260 },
  MANAGE_COLUMN,
];
const ACTIVITY_ROWS = [
  { id: 'a1', date: 'Jun 10', info: 'CA Lead Follow up · Status: Not Started · Priority: High', related: 'Carolyn & Co.- Insuran...' },
  { id: 'a2', date: 'Jun 19', info: 'Call back · Status: Not Started · Priority: Normal', related: 'Milton- First Month' },
  { id: 'a3', date: 'Jun 19', info: 'Call Back · Status: Not Started · Priority: Normal', related: 'BPL Company- New D...' },
];

const TASK_COLUMNS = [
  { key: 'due', label: 'Due Date', width: 110 },
  { key: 'num', label: 'ID', width: 60 },
  { key: 'subject', label: 'Subject', width: 200 },
  { key: 'status', label: 'Status', width: 140 },
  { key: 'priority', label: 'Priority', width: 100 },
  MANAGE_COLUMN,
];
const TASK_ROWS = [
  { id: 't1', due: 'MAR 20', num: '244', subject: 'Product Demo', status: 'In Progress', priority: 'High' },
  { id: 't2', due: 'JAN 22', num: '301', subject: 'Meeting', status: 'Not Started', priority: 'Normal' },
  { id: 't3', due: 'DEC 07', num: '347', subject: 'Check status', status: 'Not Started', priority: 'High' },
  { id: 't4', due: 'DEC 04', num: '350', subject: 'Meeting', status: 'Not Started', priority: 'Normal' },
  { id: 't5', due: 'DEC 01', num: '353', subject: 'sdfsdfsdf', status: 'Not Started', priority: 'High' },
  { id: 't6', due: 'DEC 07', num: '347', subject: 'Check status', status: 'Not Started', priority: 'High' },
  { id: 't7', due: 'DEC 04', num: '350', subject: 'Meeting', status: 'Not Started', priority: 'Normal' },
  { id: 't8', due: 'DEC 07', num: '347', subject: 'Check status', status: 'Not Started', priority: 'High' },
];

const MEETING_COLUMNS = [
  { key: 'meeting', label: 'Meeting', width: 200 },
  { key: 'from', label: 'From', width: 200 },
  MANAGE_COLUMN,
];
const APPOINTMENT_COLUMNS = [
  { key: 'name', label: 'Appointment Name', width: 180 },
  { key: 'for', label: 'Appointment For', width: 180 },
  { key: 'service', label: 'Service Name', width: 180 },
  MANAGE_COLUMN,
];

export function TlsBanner({ bannerInWorkspace = false }: { bannerInWorkspace?: boolean } = {}) {
  const headingId = useId();
  const [activeId, setActiveId] = useState<string | undefined>('home');
  const [notice, setNotice] = useState('');
  const [activityView, setActivityView] = useState('week');
  const [taskView, setTaskView] = useState('next7');
  const [bannerOpen, setBannerOpen] = useState(true);
  const [bannerClosing, setBannerClosing] = useState(false);

  return (
    <div className="tls-banner-page">
      {!bannerInWorkspace && bannerOpen && (
          <div
            className={`tls-banner-page__banner${bannerClosing ? ' is-closing' : ''}`}
            role="status"
            onAnimationEnd={(e) => { if (e.target === e.currentTarget && bannerClosing) setBannerOpen(false); }}
          >
            <div className="tls-banner-page__banner-content">
              <CrmAlertWarning className="tls-banner-page__banner-icon" width={18} height={18} aria-hidden="true" focusable="false" />
              <p className="tls-banner-page__banner-text">
                {BANNER_MESSAGE_BEFORE_DATE}
                <strong className="tls-banner-page__banner-date">{BANNER_DATE}</strong>
                {BANNER_MESSAGE_AFTER_DATE}
              </p>
            </div>
            <button type="button" className="tls-banner-page__banner-close" aria-label="Close banner" onClick={() => setBannerClosing(true)}>
              <CloseIcon width={10} height={10} aria-hidden="true" focusable="false" />
            </button>
          </div>
        )}
      <div className="tls-banner-page__shell">
        <aside className="tls-banner-page__sidebar" aria-label="CRM navigation">
          <NextGenLeftMenu
            activeId={activeId}
            onItemClick={(id: string) => {
              setActiveId(id);
              if (id !== 'home') {
                setNotice(`${id.charAt(0).toUpperCase() + id.slice(1)} selected. Navigation is a local preview.`);
              }
            }}
          />
        </aside>
        <div className="tls-banner-page__workspace">
          {bannerInWorkspace && (
            <>
        {bannerOpen && (
                  <div
                    className={`tls-banner-page__banner${bannerClosing ? ' is-closing' : ''}`}
                    role="status"
                    onAnimationEnd={(e) => { if (e.target === e.currentTarget && bannerClosing) setBannerOpen(false); }}
                  >
                    <div className="tls-banner-page__banner-content">
                      <CrmAlertWarning className="tls-banner-page__banner-icon" width={18} height={18} aria-hidden="true" focusable="false" />
                      <p className="tls-banner-page__banner-text">
                        {BANNER_MESSAGE_BEFORE_DATE}
                        <strong className="tls-banner-page__banner-date">{BANNER_DATE}</strong>
                        {BANNER_MESSAGE_AFTER_DATE}
                      </p>
                    </div>
                    <button type="button" className="tls-banner-page__banner-close" aria-label="Close banner" onClick={() => setBannerClosing(true)}>
                      <CloseIcon width={10} height={10} aria-hidden="true" focusable="false" />
                    </button>
                  </div>
                )}
            </>
          )}
          <header>
            <NextGenTopBand moduleLabel="Home" userInitials="CV" showTerritory={false} />
          </header>
          <main className="tls-banner-page__main" aria-labelledby={headingId}>
            {notice && <div role="status"><MessageInfo variant="info" message={notice} /></div>}

            <div className="tls-banner-page__heading">
              <div className="tls-banner-page__welcome">
                <img className="tls-banner-page__logo" src={`${import.meta.env.BASE_URL}images/company-logo.png`} alt="Company logo" />
                <h1 id={headingId}>Welcome Particia Boyle</h1>
              </div>
              <div className="tls-banner-page__heading-actions">
                <button type="button" className="tls-banner-page__icon-btn" aria-label="Refresh">
                  <RefreshIcon width={16} height={16} aria-hidden="true" focusable="false" />
                </button>
                <Dropdown
                  triggerAriaLabel="Home view"
                  options={[{ value: 'classic', label: 'Classic View' }]}
                  value="classic"
                  width={180}
                  onChange={() => {}}
                />
                <Button
                  variant="default"
                  size="md"
                  className="tls-banner-page__more-btn"
                  frontIcon={<MoreOptionsIcon width={16} height={16} aria-hidden="true" focusable="false" />}
                  aria-label="More options"
                />
              </div>
            </div>

            <div className="tls-banner-page__grid">
              <section className="tls-banner-page__panel tls-banner-page__panel--select" aria-label="My open activities">
                <div className="tls-banner-page__card-head tls-banner-page__card-head--select">
                  <Dropdown
                    triggerAriaLabel="Activity view"
                    options={ACTIVITY_VIEWS}
                    value={activityView}
                    width="fit-content"
                    onChange={(value: string) => setActivityView(value)}
                  />
                </div>
                <SetupTable
                  columns={ACTIVITY_COLUMNS}
                  rows={ACTIVITY_ROWS}
                  width="100%"
                  emptyMessage="No open activities."
                />
              </section>

              <section className="tls-banner-page__panel tls-banner-page__panel--select" aria-label="My next 7 days and overdue tasks">
                <div className="tls-banner-page__card-head tls-banner-page__card-head--select">
                  <Dropdown
                    triggerAriaLabel="Task view"
                    options={TASK_VIEWS}
                    value={taskView}
                    width="fit-content"
                    onChange={(value: string) => setTaskView(value)}
                  />
                </div>
                <SetupTable
                  columns={TASK_COLUMNS}
                  rows={TASK_ROWS}
                  width="100%"
                  emptyMessage="No tasks due in the next 7 days."
                />
              </section>

              <section className="tls-banner-page__panel" aria-label="My meetings today">
                <div className="tls-banner-page__card-head">
                  <h2>My Meetings Today</h2>
                </div>
                <SetupTable
                  columns={MEETING_COLUMNS}
                  rows={[]}
                  width="100%"
                  emptyMessage="No Meetings found."
                />
              </section>

              <section className="tls-banner-page__panel" aria-label="My today's appointments">
                <div className="tls-banner-page__card-head">
                  <h2>My Today&apos;s Appointments</h2>
                </div>
                <SetupTable
                  columns={APPOINTMENT_COLUMNS}
                  rows={[]}
                  width="100%"
                  emptyMessage="No Appointments found."
                />
              </section>
            </div>
          </main>
        </div>
      </div>
      <WMSBar />
    </div>
  );
}

export const Default: Story = {
  render: () => <TlsBanner />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Welcome Particia Boyle' })).toBeVisible();
    await expect(canvas.getByText(BANNER_DATE)).toBeVisible();
    await expect(canvas.getByRole('region', { name: 'My open activities' })).toHaveTextContent('CA Lead Follow up');
    await expect(canvas.getByRole('region', { name: 'My meetings today' })).toHaveTextContent('No Meetings found.');
  },
};

// Left panel stays; the banner sits in the workspace, so its width excludes the left panel.
export const BannerExcludesLeftPanel: Story = {
  render: () => <TlsBanner bannerInWorkspace />,
  play: Default.play,
};
