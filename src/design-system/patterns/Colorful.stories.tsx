import { useId, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Icon } from '../components/Icon/Icon';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { SetupTable } from '../components/Table/Table';
import { CrmHomepage } from './CrmHomepage.stories';
import { DEALS, INITIAL_TASKS, PERFORMANCE, PERIODS } from './CrmHomepage.data';
import type { Period } from './CrmHomepage.data';
import { KPI_TRENDS, LEADERBOARD, SALES_CHARTS } from './Colorful.data';
import './Colorful.css';

const meta = {
  title: 'Design System/Patterns/crm-homepage/colorful',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A colorful sales workspace with exactly 20 widgets: six KPI cards with mini charts, eight accessible charts, and six daily-work sections. Reuses the CRM shell and existing controls. SVG data illustrations are local to this story, not new design-system components. Chart detail tables expose every plotted value. All data is illustrative and actions are local.' } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const COLUMNS = [
  { key: 'name', label: 'Account', width: 190 }, { key: 'stage', label: 'Stage', width: 130 },
  { key: 'amount', label: 'Value', width: 100 }, { key: 'close', label: 'Closing', width: 90 },
];

// Story-local composition; existing CRM navigation and header remain unchanged.
function ColorfulPage() {
  const id = useId();
  const [period, setPeriod] = useState<Period>('month');
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [followUpOnly, setFollowUpOnly] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [goalDetails, setGoalDetails] = useState(false);
  const performance = PERFORMANCE[period];
  const metrics = [
    { title: 'Closed revenue', value: performance.revenue, detail: `${performance.changes[0]} vs. previous ${period}` },
    { title: 'Open pipeline', value: performance.pipeline, detail: '4 opportunities · all closing dates' },
    { title: 'Deals won', value: performance.deals, detail: `${performance.changes[1]} vs. previous ${period}` },
    { title: 'New leads', value: performance.leads, detail: `${performance.changes[2]} vs. previous ${period}` },
    { title: 'Lead conversion', value: performance.conversion, detail: `${performance.changes[3]} vs. previous ${period}` },
    { title: 'Average won deal', value: period === 'month' ? '$7,042' : '$7,235', detail: 'Closed revenue ÷ deals won' },
  ];
  const rows = followUpOnly ? DEALS.filter(deal => deal.id === 'northstar') : DEALS;
  return <CrmHomepage><div className="crm-colorful" aria-labelledby={`${id}-title`}>
    <div className="crm-colorful__heading">
      <div><p className="crm-colorful__eyebrow">A LITTLE MOMENTUM GOES A LONG WAY</p><h1 id={`${id}-title`}>Good morning, Ananya.</h1><p>Your sales world, in full color.</p></div>
      <Dropdown options={PERIODS} value={period} width="fit-content" onChange={(value: string) => setPeriod(value as Period)} />
    </div>
    <p className="crm-colorful__scope">KPIs follow the selected period. Charts show the fixed periods in their captions. All figures are sample data.</p>
    <div className="crm-colorful__grid" role="region" aria-label="20 sales widgets">
      {metrics.map((metric, index) => <section className="crm-colorful__card crm-colorful__kpi" data-tone={index} data-sales-widget key={metric.title} aria-label={metric.title}>
        <div className="crm-colorful__section-heading"><h2>{metric.title}</h2><span className="crm-colorful__metric-icon"><Icon name={['WmsMotivator', 'CompanyAvatar', 'Check', 'GroupAvatar', 'WmsChannel', 'WmsNotes'][index]} /></span></div>
        <div className="crm-colorful__metric-value"><strong className="crm-colorful__value">{metric.value}</strong>{[0, 2, 3, 4].includes(index) && <span className="crm-colorful__change">{performance.changes[index === 0 ? 0 : index - 1]}</span>}</div>
        <p>{metric.detail}</p>
        <svg className="crm-colorful__mini" viewBox="0 0 160 48" aria-hidden="true" focusable="false">
          <polyline points={KPI_TRENDS[index].map((value, point) => `${point * 26},${46 - value / 2}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg><span className="crm-colorful__caption">Illustrative trend</span>
      </section>)}
      {SALES_CHARTS.map((chart, index) => {
        const max = Math.max(...chart.series.map(item => item.value));
        const total = chart.series.reduce((sum, item) => sum + item.value, 0);
        let offset = 0;
        const points = chart.series.map((item, point) => `${20 + point * 280 / (chart.series.length - 1)},${140 - item.value / max * 110}`).join(' ');
        const summary = chart.series.map(item => `${item.label}: ${item.display}`).join('; ');
        return <section className={`crm-colorful__card crm-colorful__chart ${chart.title === 'Revenue trend' ? 'crm-colorful__card--wide' : ''}`} data-tone={index % 6} data-sales-widget key={chart.title} aria-labelledby={`${id}-chart-${index}`}>
          <div className="crm-colorful__section-heading"><h2 id={`${id}-chart-${index}`}>{chart.title}</h2><span className="crm-colorful__dot" aria-hidden="true" /></div>
          <p className="crm-colorful__caption">{chart.subtitle}</p>
          {chart.title === 'Revenue trend' && <div className="crm-colorful__chart-stat"><strong className="crm-colorful__value">$429K</strong><span className="crm-colorful__caption">Total booked · January–June</span></div>}
          {chart.title === 'Weekly activity' && <div className="crm-colorful__activity" role="img" aria-label={`${chart.title}. ${summary}`}>
            {chart.series.map(item => <div className="crm-colorful__activity-day" key={item.label} data-peak={item.value === max || undefined}><strong>{item.value}</strong><div className="crm-colorful__activity-track"><span style={{ height: `${item.value / max * 100}%` }} /></div><span>{item.label.slice(0, 3)}</span></div>)}
          </div>}
          {chart.kind === 'line' && chart.title !== 'Weekly activity' && <>
            <svg className="crm-colorful__line" viewBox="0 0 320 160" role="img" aria-label={`${chart.title}. ${summary}`}>
              {[30, 85, 140].map(y => <line key={y} x1="20" x2="300" y1={y} y2={y} className="crm-colorful__gridline" />)}
              <polygon points={`20,140 ${points} 300,140`} className="crm-colorful__area" />
              <polyline points={points} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              {chart.series.map((item, point) => <circle key={item.label} cx={20 + point * 280 / (chart.series.length - 1)} cy={140 - item.value / max * 110} r="4" fill="currentColor"><title>{item.label}: {item.display}</title></circle>)}
            </svg><div className="crm-colorful__axis" aria-hidden="true">{chart.series.map(item => <span key={item.label}>{item.label.slice(0, 3)}</span>)}</div>
          </>}
          {chart.title === 'Revenue goal' && <div className="crm-colorful__goal">
            <svg viewBox="0 0 240 150" className="crm-colorful__gauge" role="img" aria-label="June revenue goal: $84,500 of $120,000 booked, 70.4 percent achieved">
              <path d="M 25 125 A 95 95 0 0 1 215 125" fill="none" className="crm-colorful__gauge-track" strokeWidth="24" />
              <path d="M 25 125 A 95 95 0 0 1 215 125" fill="none" className="crm-colorful__gauge-fill" pathLength="100" strokeDasharray="70.4 100" strokeWidth="24" />
              <path d="M 25 125 A 95 95 0 0 1 215 125" fill="none" className="crm-colorful__gauge-dividers" pathLength="100" strokeDasharray="0.8 1.7" strokeWidth="26" />
            </svg>
            <div className="crm-colorful__goal-label"><strong className="crm-colorful__value">70.4%</strong><p className="crm-colorful__caption">$35,500 to reach your target</p></div>
            <Button variant="default" onClick={() => setGoalDetails(current => !current)} aria-expanded={goalDetails}>{goalDetails ? 'Hide goal details' : 'Show goal details'}</Button>
            {goalDetails && <p role="status" className="crm-colorful__caption">June target: $120,000. Booked: $84,500. Remaining: $35,500.</p>}
          </div>}
          {chart.kind === 'donut' && chart.title !== 'Revenue goal' && <div className="crm-colorful__donut-layout">
            <svg className="crm-colorful__donut" viewBox="0 0 120 120" role="img" aria-label={`${chart.title}. ${summary}`}>
              {chart.series.map((item, segment) => {
                const start = offset; const share = item.value / total * 100; offset += share;
                return <circle key={item.label} cx="60" cy="60" r="44" fill="none" pathLength="100" strokeWidth="14" strokeDasharray={`${share} ${100 - share}`} strokeDashoffset={-start} transform="rotate(-90 60 60)" className={`crm-colorful__segment crm-colorful__segment--${segment}`} />;
              })}
            </svg><ul className="crm-colorful__legend">{chart.series.map((item, segment) => <li key={item.label}><span className={`crm-colorful__segment--${segment}`} aria-hidden="true">●</span><div>{item.label}<strong>{item.display}</strong></div></li>)}</ul>
          </div>}
          {chart.kind === 'bars' && <div className="crm-colorful__bars">{chart.series.map((item, bar) => <div key={item.label} className="crm-colorful__bar-row">
            <div className="crm-colorful__section-heading"><span>{item.label}</span><strong>{item.display}</strong></div>
            <div role="meter" aria-label={item.label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={item.value} aria-valuetext={item.display}><ProgressBar value={item.value / max * 100} color={bar % 2 ? 'green' : 'blue'} /></div>
          </div>)}</div>}
          {chart.title === 'Revenue trend' && <div className="crm-colorful__customer-breakdown" aria-label="Revenue by customer segment">
            <h3>Customer segments</h3><div>{[{ name: 'Enterprise', value: '$214,500', share: 50 }, { name: 'Mid-market', value: '$150,150', share: 35 }, { name: 'Small business', value: '$64,350', share: 15 }].map((segment, tone) => <div className="crm-colorful__customer-segment" data-tone={tone} key={segment.name}><strong>{segment.value}</strong><span className="crm-colorful__caption">{segment.name} · {segment.share}%</span><ProgressBar value={segment.share} color={tone === 1 ? 'green' : 'blue'} /></div>)}</div>
          </div>}
          <details className="crm-colorful__details"><summary>View chart data</summary><table><caption>{chart.title}</caption><thead><tr><th scope="col">Category</th><th scope="col">Value</th></tr></thead><tbody>{chart.series.map(item => <tr key={item.label}><th scope="row">{item.label}</th><td>{item.display}</td></tr>)}</tbody></table></details>
        </section>;
      })}
      <section id={`${id}-deals-anchor`} className="crm-colorful__card crm-colorful__card--wide" data-tone="0" data-sales-widget aria-label="Open deals">
        <div className="crm-colorful__section-heading"><h2>Open deals</h2><span role="status">{rows.length} opportunities</span></div>
        <div className="crm-colorful__table"><SetupTable columns={COLUMNS} rows={rows} selectable={false} width="100%" /></div>
        <Button variant="link-primary" onClick={() => setFollowUpOnly(current => !current)} aria-pressed={followUpOnly}>{followUpOnly ? 'Show all deals' : 'Review follow-up'}</Button>
      </section>
      <section className="crm-colorful__card" data-tone="1" data-sales-widget aria-label="Priority tasks">
        <div className="crm-colorful__section-heading"><h2>Priority tasks</h2><span role="status">{tasks.filter(task => !task.completed).length} remaining</span></div>
        <ul className="crm-colorful__list">{tasks.map(task => <li key={task.id}><Checkbox label={task.title} checked={task.completed} onChange={() => setTasks(current => current.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item))} /><p className="crm-colorful__caption">{task.detail}</p></li>)}</ul>
      </section>
      <section className="crm-colorful__card" data-tone="2" data-sales-widget aria-label="Team leaderboard">
        <h2>Team leaderboard</h2><p className="crm-colorful__caption">June · $120,000 individual goals</p>
        <ol className="crm-colorful__list">{LEADERBOARD.map(person => <li key={person.name}><div className="crm-colorful__section-heading"><strong>{person.name}</strong><span>{person.revenue}</span></div><p className="crm-colorful__caption">{person.deals} · {person.progress}% of goal</p><div role="progressbar" aria-label={`${person.name} goal`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={person.progress}><ProgressBar value={person.progress} color="green" /></div></li>)}</ol>
      </section>
      <section className="crm-colorful__card" data-tone="3" data-sales-widget aria-label="Upcoming meetings">
        <h2>Upcoming meetings</h2><p className="crm-colorful__caption">Today · demo agenda</p><ul className="crm-colorful__list"><li><span className="crm-colorful__pill">10:30 AM · 30 min</span><h3>Discovery call</h3><p>Atlas Logistics · Daniel Kim</p></li><li><span className="crm-colorful__pill">2:00 PM · 45 min</span><h3>Proposal review</h3><p>Meridian Health · Sofia Martinez</p></li></ul>
      </section>
      <section className="crm-colorful__card" data-tone="4" data-sales-widget aria-label="Sales insights">
        <h2>Sales insights</h2><ul className="crm-colorful__list"><li><span className="crm-colorful__pill">FOLLOW-UP DUE</span><h3>Keep Northstar moving</h3><p>$32,000 closes June 26. Confirm the next step with Priya.</p></li><li><h3>Protect your largest opportunity</h3><p>Evergreen represents 35% of the open pipeline. Review renewal terms before July 8.</p></li></ul>
        <Button variant="link-primary" onClick={() => { setFollowUpOnly(true); document.getElementById(`${id}-deals-anchor`)?.scrollIntoView({ block: 'center' }); }}>Review Northstar</Button>
      </section>
      <section className="crm-colorful__card crm-colorful__assistant" data-tone="0" data-sales-widget aria-label="Sales assistant">
        <div className="crm-colorful__section-heading"><h2>Sales assistant</h2><Icon name="WmsZia" /></div>
        <div className="crm-colorful__assistant-visual" aria-hidden="true"><span className="crm-colorful__assistant-orb" /></div>
        <p className="crm-colorful__caption">A little help with your next move. Local demo, not a connected AI service.</p>
        <form className="crm-colorful__assistant-form" onSubmit={event => { event.preventDefault(); if (question.trim()) setAnswer('Based on this sample workspace: follow up on Northstar ($32,000), send the Meridian proposal ($24,500), and review Evergreen renewal terms ($41,000).'); }}>
          <Input width="100%" layout="vertical" aria-label="Ask the sales assistant" placeholder="What should I focus on?" value={question} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuestion(event.target.value)} />
          <Button type="submit" variant="primary" disabled={!question.trim()} aria-label="Ask assistant">Ask</Button>
        </form>
        {answer && <p role="status" className="crm-colorful__notice">{answer}</p>}
      </section>
    </div>
    <footer className="crm-colorful__caption">20 sales widgets · Sample workspace · No live CRM records are changed</footer>
  </div></CrmHomepage>;
}
export const Default: Story = {
  render: () => <ColorfulPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Good morning, Ananya.' })).toBeVisible();
    await expect(canvasElement.querySelectorAll('[data-sales-widget]')).toHaveLength(20);
    await expect(within(canvas.getByRole('region', { name: '20 sales widgets' })).getAllByRole('img')).toHaveLength(5);
    await expect(canvas.getByRole('img', { name: /June revenue goal/ })).toBeVisible();
    await expect(canvas.getByLabelText('Revenue by customer segment')).toBeVisible();
    const revenue = within(canvas.getByRole('region', { name: 'Closed revenue' }));
    await expect(revenue.getByText('$84,500')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'This month' }));
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', { name: 'This quarter' }));
    await expect(revenue.getByText('$246,000')).toBeVisible();
    const tasks = within(canvas.getByRole('region', { name: 'Priority tasks' }));
    await userEvent.click(tasks.getAllByRole('checkbox')[0]);
    await expect(tasks.getByText('2 remaining')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Review follow-up' }));
    await expect(canvas.getByText('1 opportunities')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Show all deals' }));
    await expect(canvas.getByText('4 opportunities', { exact: true })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Show goal details' }));
    await expect(canvas.getByText(/June target: \$120,000/)).toBeVisible();
    const assistant = within(canvas.getByRole('region', { name: 'Sales assistant' }));
    await expect(assistant.getByRole('button', { name: 'Ask assistant' })).toBeDisabled();
    await userEvent.type(assistant.getByRole('textbox', { name: 'Ask the sales assistant' }), 'What should I prioritize?');
    await userEvent.click(assistant.getByRole('button', { name: 'Ask assistant' }));
    await expect(assistant.getByRole('status')).toHaveTextContent('Based on this sample workspace');
    const trend = within(canvas.getByRole('region', { name: 'Revenue trend' }));
    await userEvent.click(trend.getByText('View chart data'));
    await expect(trend.getByRole('cell', { name: '$54,000' })).toBeVisible();
  },
};
