import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { WMSBar } from '../components/WMSBar/WMSBar';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { FormSection } from '../components/FormSection/FormSection';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { SetupTable } from '../components/Table/Table';
import './CrmHomepage.css';

const meta = {
  title: 'Design System/Patterns/crm-homepage',
  includeStories: ['Default', 'EmptyState'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A sales command center with CRM navigation, KPIs, performance breakdown, actionable insights, deals, daily tasks, meetings, and recent conversations. Composed from existing components; all data and interactions are local examples.' } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
import { CHATS, DEALS, INITIAL_TASKS, PERFORMANCE, PERIODS } from './CrmHomepage.data';
import type { Period } from './CrmHomepage.data';
const DEAL_COLUMNS = [
  { key: 'name', label: 'Account', width: 190 },
  { key: 'stage', label: 'Stage', width: 130 },
  { key: 'amount', label: 'Amount', width: 100 },
  { key: 'close', label: 'Close date', width: 90 },
  { key: 'attention', label: 'Next step', width: 140 },
];
const PIPELINE = [
  { label: 'Qualification', amount: '$18,000', count: 1, share: 16 },
  { label: 'Proposal', amount: '$24,500', count: 1, share: 21 },
  { label: 'Negotiation', amount: '$73,000', count: 2, share: 63 },
];
const MEETINGS = [
  { id: 'discovery', time: '10:30', title: 'Discovery call', account: 'Atlas Logistics · Daniel Kim', duration: 'AM · 30 min' },
  { id: 'review', time: '14:00', title: 'Proposal review', account: 'Meridian Health · Sofia Martinez', duration: '45 min' },
];

// Story-local composition, not a new design-system component.
export function CrmHomepage({ empty = false, children, showTerritory = true }: { empty?: boolean; children?: ReactNode; showTerritory?: boolean }) {
  const headingId = useId();
  const [period, setPeriod] = useState<Period>('month');
  const [tasks, setTasks] = useState(empty ? [] : INITIAL_TASKS);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [notice, setNotice] = useState('');
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [readChats, setReadChats] = useState<string[]>([]);
  const [attentionOnly, setAttentionOnly] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const performance = PERFORMANCE[period];
  const pendingTasks = tasks.filter(task => !task.completed);
  const visibleTasks = showCompleted ? tasks : pendingTasks;
  const visibleDeals = empty ? [] : attentionOnly ? DEALS.filter(deal => deal.id === 'northstar') : DEALS;
  const selectedChat = CHATS.find(chat => chat.id === activeChat);
  const unreadCount = empty ? 0 : CHATS.filter(chat => chat.unread && !readChats.includes(chat.id)).length;
  const metrics = [
    { label: 'Closed revenue', value: empty ? '$0' : performance.revenue, detail: 'Revenue booked', change: performance.changes[0] },
    { label: 'Deals won', value: empty ? '0' : performance.deals, detail: 'Closed opportunities', change: performance.changes[1] },
    { label: 'New leads', value: empty ? '0' : performance.leads, detail: 'Added to your pipeline', change: performance.changes[2] },
    { label: 'Lead conversion', value: empty ? '0%' : performance.conversion, detail: 'Leads converted to deals', change: performance.changes[3] },
  ];
  const openChat = (id: string) => {
    setActiveChat(id);
    setReadChats(current => current.includes(id) ? current : [...current, id]);
  };

  return (
    <div className="crm-homepage">
      <div className="crm-homepage__shell">
        <aside className="crm-homepage__sidebar" data-open={menuOpen || undefined} aria-label="CRM navigation">
          <NextGenLeftMenu activeId="home" teamspaceName="Sales workspace" onItemClick={(id: string) => {
            setMenuOpen(false);
            if (id !== 'home') setNotice(`${id.charAt(0).toUpperCase() + id.slice(1)} selected. Navigation is a local preview; no CRM records are changed.`);
          }} />
        </aside>
        <div className="crm-homepage__workspace">
          <header>
            <NextGenTopBand moduleLabel="Home" userInitials="AS" notificationCount={2} showTerritory={showTerritory}
              onAddNew={() => setNotice('Quick create selected. In a connected CRM, this opens record creation.')}
              onCalendar={() => document.getElementById(`${headingId}-meetings`)?.scrollIntoView({ block: 'nearest' })} />
          </header>
          <main className="crm-homepage__main" aria-labelledby={children ? undefined : headingId} aria-label={children ? 'CRM homepage' : undefined}>
            <div className="crm-homepage__mobile-menu">
              <Button variant="default" aria-expanded={menuOpen} onClick={() => setMenuOpen(current => !current)}>{menuOpen ? 'Close navigation' : 'Open navigation'}</Button>
            </div>
            {children && notice && <div role="status"><MessageInfo variant="info" message={notice} /></div>}
            {children ?? <>
            <div className="crm-homepage__heading">
              <div>
                <p className="crm-homepage__eyebrow">YOUR SALES WORKSPACE · FRIDAY, JUNE 19</p>
                <h1 id={headingId}>Welcome back, Ananya</h1>
                <p>{empty ? 'Your next chapter starts here. Build your pipeline and plan your day.' : 'A strong month so far. Let’s keep your next opportunities moving.'}</p>
              </div>
              <Dropdown label="Reporting period" layout="vertical" width="fit-content" options={PERIODS} value={period} onChange={(value: string) => setPeriod(value as Period)} />
            </div>
            {notice && <div role="status"><MessageInfo variant="info" message={notice} /></div>}
            <section aria-label="Sales overview">
              <dl className="crm-homepage__metrics">
                {metrics.map((metric, index) => (
                  <div key={metric.label} className="crm-homepage__metric" data-tone={index}>
                    <dt>{metric.label}</dt><dd>{metric.value}</dd>
                    <div className="crm-homepage__metric-change"><span>{empty ? '—' : metric.change}</span> <span>vs. previous {period}</span></div>
                    <p>{metric.detail}</p>
                  </div>
                ))}
              </dl>
            </section>
            <div className="crm-homepage__dashboard">
              <div className="crm-homepage__primary">
                <section className="crm-homepage__panel" aria-label="Sales performance">
                  <FormSection title="Sales performance">
                    <div className="crm-homepage__section-heading"><p>Progress toward your {period === 'month' ? 'monthly' : 'quarterly'} revenue goal</p><span className="crm-homepage__badge">{period === 'month' ? 'June 2026' : 'Q2 2026'}</span></div>
                    <div className="crm-homepage__performance">
                      <section className="crm-homepage__target" aria-label="Revenue target">
                        <p>Revenue target</p>
                        <div className="crm-homepage__target-value">{empty ? '0' : performance.progress}<span>%</span></div>
                        <p>{empty ? 'Start closing deals to build momentum.' : `${performance.remaining} to reach your goal`}</p>
                        <div role="progressbar" aria-label="Revenue target progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={empty ? 0 : performance.progress} aria-valuetext={`${empty ? '$0' : performance.revenue} of ${performance.target}`}>
                          <ProgressBar value={empty ? 0 : performance.progress} leftLabel={empty ? '$0' : performance.revenue} rightLabel={performance.target} />
                        </div>
                      </section>
                      <section className="crm-homepage__pipeline" aria-label="Pipeline by stage">
                        <div className="crm-homepage__section-heading"><h2>Pipeline by stage</h2><strong>{empty ? '$0' : performance.pipeline}</strong></div>
                        {PIPELINE.map(stage => <div key={stage.label} className="crm-homepage__stage">
                          <div className="crm-homepage__section-heading"><p>{stage.label} <span>· {empty ? 0 : stage.count} {stage.count === 1 ? 'deal' : 'deals'}</span></p><strong>{empty ? '$0' : stage.amount}</strong></div>
                          <div role="meter" aria-label={`${stage.label} share of pipeline`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={empty ? 0 : stage.share}>
                            <ProgressBar value={empty ? 0 : stage.share} />
                          </div>
                        </div>)}
                        <p className="crm-homepage__caption">Share of open pipeline value · all closing dates</p>
                      </section>
                    </div>
                  </FormSection>
                </section>
                <section className="crm-homepage__panel" aria-label="Open deals">
                  <FormSection title="Open deals">
                    <div className="crm-homepage__section-heading"><p>{attentionOnly ? 'Opportunities with a follow-up due.' : 'Your next opportunities, ordered by closing date.'}</p><span role="status">{selectedIds.length} selected</span></div>
                    {attentionOnly && <Button variant="link-primary" onClick={() => { setAttentionOnly(false); setSelectedIds([]); }}>Show all deals</Button>}
                    <SetupTable columns={DEAL_COLUMNS} rows={visibleDeals} selectable selectedIds={selectedIds} onSelectionChange={setSelectedIds} width="100%" emptyMessage="No open deals yet. New opportunities will appear here." />
                  </FormSection>
                </section>
                <div className="crm-homepage__columns">
                  <section className="crm-homepage__panel" aria-label="Today's tasks">
                    <FormSection title="Today's tasks">
                      <div className="crm-homepage__section-heading"><span role="status">{pendingTasks.length} tasks remaining</span><Button variant="link-primary" onClick={() => setShowCompleted(current => !current)} aria-pressed={showCompleted}>{showCompleted ? 'Hide completed' : 'Show completed'}</Button></div>
                      {visibleTasks.length ? <ul className="crm-homepage__list">{visibleTasks.map(task => <li key={task.id} className="crm-homepage__task" data-completed={task.completed || undefined}>
                        <Checkbox label={task.title} checked={task.completed} onChange={() => setTasks(current => current.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item))} /><p>{task.detail}</p>
                      </li>)}</ul> : <p className="crm-homepage__empty">{tasks.length ? 'All caught up! No pending tasks.' : 'No tasks scheduled for today.'}</p>}
                    </FormSection>
                  </section>
                  <section id={`${headingId}-meetings`} className="crm-homepage__panel" aria-label="Upcoming meetings">
                    <FormSection title="Upcoming meetings">
                      <p>Today · Friday, June 19, 2026</p>
                      {empty ? <p className="crm-homepage__empty">No meetings scheduled for today.</p> : <ul className="crm-homepage__list">{MEETINGS.map(meeting => <li key={meeting.id} className="crm-homepage__meeting">
                        <div className="crm-homepage__time"><strong>{meeting.time}</strong><span>{meeting.duration}</span></div><div><h2>{meeting.title}</h2><p>{meeting.account}</p></div>
                      </li>)}</ul>}
                    </FormSection>
                  </section>
                </div>
              </div>
              <div className="crm-homepage__context">
                <section className="crm-homepage__panel crm-homepage__insights" aria-label="Sales insights">
                  <FormSection title="Insights for you">
                    <p>Small actions. Meaningful momentum.</p>
                    {empty ? <p className="crm-homepage__empty">Insights will appear as your pipeline grows.</p> : <ul className="crm-homepage__list">
                      <li><span className="crm-homepage__badge crm-homepage__badge--warning">FOLLOW-UP DUE</span><h2>Keep Northstar moving</h2><p>Your $32,000 opportunity is closing in 7 days. Check in with Priya before the weekend.</p><Button variant="link-primary" onClick={() => { setAttentionOnly(true); setSelectedIds([]); }}>Review follow-up</Button></li>
                      <li><span className="crm-homepage__badge">CLOSING SOON</span><h2>Two deals, $56,500 in play</h2><p>Northstar and Meridian are due to close this month. Prioritize their next steps.</p><Button variant="link-primary" onClick={() => { setAttentionOnly(false); setSelectedIds(['northstar', 'meridian']); }}>Select closing deals</Button></li>
                    </ul>}
                  </FormSection>
                </section>
                <section className="crm-homepage__panel" aria-label="Recent chats">
                  <FormSection title="Recent chats">
                    <div className="crm-homepage__section-heading"><p>Stay close to your customers</p><span className="crm-homepage__badge" role="status">{unreadCount} unread</span></div>
                    {empty ? <p className="crm-homepage__empty">No recent conversations. Your chats will appear here.</p> : <ul className="crm-homepage__list">{CHATS.map(chat => <li key={chat.id} className="crm-homepage__chat" data-active={activeChat === chat.id || undefined}>
                      <span className="crm-homepage__initials" aria-hidden="true">{chat.initials}</span>
                      <div className="crm-homepage__chat-content"><div className="crm-homepage__section-heading"><Button variant="link-default" aria-pressed={activeChat === chat.id} onClick={() => openChat(chat.id)}>{chat.name}</Button><span className="crm-homepage__caption">{chat.time}</span></div><p>{chat.preview}</p>{chat.unread && !readChats.includes(chat.id) && <span className="crm-homepage__chat-unread">Unread</span>}</div>
                    </li>)}</ul>}
                    {selectedChat && <div className="crm-homepage__conversation" role="status"><h2>Conversation with {selectedChat.name}</h2><p>{selectedChat.preview}</p><p className="crm-homepage__caption">Local preview · replying requires a connected CRM.</p><Button variant="link-primary" onClick={() => setActiveChat(null)}>Close conversation</Button></div>}
                  </FormSection>
                </section>
              </div>
            </div>
            </>}
          </main>
        </div>
      </div>
      <WMSBar onChatClick={() => { if (!empty) openChat('priya'); document.querySelector('.crm-homepage__chat')?.scrollIntoView({ block: 'nearest' }); }} onTabChange={(tab: string) => setNotice(`${tab.charAt(0).toUpperCase() + tab.slice(1)} selected in the communication bar. This is a local preview.`)} />
    </div>
  );
}
export const Default: Story = {
  render: () => <CrmHomepage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Welcome back, Ananya' })).toBeVisible();
    await expect(canvas.getByRole('region', { name: 'Sales overview' })).toHaveTextContent('$84,500');
    const tasks = within(canvas.getByRole('region', { name: "Today's tasks" }));
    await userEvent.click(tasks.getByRole('checkbox', { name: 'Send revised proposal to Meridian Health' }));
    await expect(tasks.getByText('2 tasks remaining')).toBeVisible();
    await userEvent.click(tasks.getByRole('button', { name: 'Show completed' }));
    await expect(tasks.getByRole('checkbox', { name: 'Send revised proposal to Meridian Health' })).toBeChecked();
    await userEvent.click(tasks.getByRole('checkbox', { name: 'Send revised proposal to Meridian Health' }));
    await userEvent.click(tasks.getByRole('button', { name: 'Hide completed' }));
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select row 1', exact: true }));
    await expect(canvas.getByText('1 selected', { exact: true })).toBeVisible();
    await userEvent.click(canvas.getByRole('checkbox', { name: 'Select row 1', exact: true }));
    await userEvent.click(canvas.getByRole('button', { name: 'Review follow-up' }));
    await expect(canvas.getByRole('region', { name: 'Open deals' })).not.toHaveTextContent('Atlas Logistics');
    await userEvent.click(canvas.getByRole('button', { name: 'Show all deals' }));
    await expect(canvas.getByRole('region', { name: 'Open deals' })).toHaveTextContent('Atlas Logistics');
    await userEvent.click(canvas.getByRole('button', { name: 'Priya Shah', exact: true }));
    await expect(canvas.getByRole('heading', { name: 'Conversation with Priya Shah' })).toBeVisible();
    await expect(canvas.getByText('1 unread', { exact: true })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Close conversation' }));
  },
};
export const EmptyState: Story = {
  render: () => <CrmHomepage empty />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No open deals yet. New opportunities will appear here.')).toBeVisible();
    await expect(canvas.getByText('No tasks scheduled for today.')).toBeVisible();
    await expect(canvas.getByText('No meetings scheduled for today.')).toBeVisible();
    await expect(canvas.getByText('No recent conversations. Your chats will appear here.')).toBeVisible();
    await expect(canvas.getByRole('progressbar', { name: 'Revenue target progress' })).toHaveAttribute('aria-valuenow', '0');
  },
};
