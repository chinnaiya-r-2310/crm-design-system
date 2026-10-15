import { useEffect, useId, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Icon } from '../components/Icon/Icon';
import { Textarea } from '../components/Textarea/Textarea';
import { Modal } from '../components/Modal/Modal';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { SetupTable } from '../components/Table/Table';
import { CrmHomepage } from './CrmHomepage.stories';
import { DEALS, INITIAL_TASKS, PERFORMANCE, PERIODS } from './CrmHomepage.data';
import type { Period } from './CrmHomepage.data';
import { SALES_CHARTS } from './Colorful.data';
import { ACCOUNTS_BY_INDUSTRY, COMPANY_TARGET, PIPELINE_SNAPSHOTS, PIPELINE_STAGES, REVENUE_LINES, TODAY_TASKS, TODAYS_APPOINTMENTS } from './Minimal.data';
import './Minimal.css';

const meta = {
  title: 'Design System/Patterns/crm-homepage/minimal',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A minimal CRM homepage inside the existing CRM shell. Preserves the floating page header, with 30px horizontal content padding, four headline metrics, revenue progress, open deals, and tasks. Uses existing components and shared CRM sample data; all interactions are local.' } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const CONVERSION_SNAPSHOTS = [18, 22, 19, 24, 21, 25, 23, 17, 26, 20, 24, 28, 22, 19, 25, 27, 21, 24, 18, 23, 29, 25, 22, 26, 20, 24, 27, 23, 28, 25];
const COLUMNS = [
  { key: 'name', label: 'Account' },
  { key: 'stage', label: 'Stage' },
  { key: 'amount', label: 'Value' },
  { key: 'close', label: 'Closing' },
];

// Measure the SVG viewport so charts fill their panels without scaling text or dots.
function useChartWidth(initialWidth: number) {
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(initialWidth);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0) setWidth(entry.contentRect.width);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, width };
}

// Smooth cubic segments interpolate the same coordinates used by the tooltip dots.
function curvedLine(points: { x: number; y: number }[]) {
  return points.map((point, index) => {
    if (index === 0) return `M ${point.x},${point.y}`;
    const previous = points[index - 1];
    const middleX = (previous.x + point.x) / 2;
    return `C ${middleX},${previous.y} ${middleX},${point.y} ${point.x},${point.y}`;
  }).join(' ');
}

// Story-local page composition; no new design-system primitives.
function MinimalPage({ empty = false }: { empty?: boolean }) {
  const id = useId();
  const { ref: revenueRef, width: revenueWidth } = useChartWidth(320);
  const { ref: industryRef, width: industryWidth } = useChartWidth(1000);
  const industryStep = (industryWidth - 70) / ACCOUNTS_BY_INDUSTRY.length;
  const [builderPrompt, setBuilderPrompt] = useState('');
  const [builderPreview, setBuilderPreview] = useState<string | null>(null);
  const builderInput = useRef<HTMLDivElement>(null);
  const [period, setPeriod] = useState<Period>('month');
  const [tasks, setTasks] = useState(empty ? [] : [...INITIAL_TASKS, ...TODAY_TASKS]);
  const [activeSnapshot, setActiveSnapshot] = useState<number | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<typeof TODAYS_APPOINTMENTS[number] | null>(null);
  const [completedAppointments, setCompletedAppointments] = useState<string[]>([]);
  const snapshotPoints = PIPELINE_SNAPSHOTS.map((value, index) => ({ x: 2 + index * 156 / (PIPELINE_SNAPSHOTS.length - 1), y: 25 - value / 100 * 24 }));
  const visibleSnapshotStart = activeSnapshot === null ? -1 : Math.max(0, Math.min(activeSnapshot - 1, snapshotPoints.length - 3));
  const performance = PERFORMANCE[period];
  const rows = empty ? [] : DEALS;

  return <CrmHomepage empty={empty} showTerritory={false}><div className="crm-minimal">
    <div className="crm-minimal__main" role="region" aria-labelledby={`${id}-title`}>
      <div className="crm-minimal__heading">
        <h1 id={`${id}-title`}>Welcome Patricia Boyle</h1>
        <Dropdown layout="vertical" width="fit-content" options={PERIODS} value={period} onChange={(value: string) => setPeriod(value as Period)} />
      </div>
      <section id={`${id}-overview`} aria-label="Sales overview" className="crm-minimal__overview">
        <dl className="crm-minimal__metrics">
          <div><dt>Closed revenue</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '$0' : performance.revenue}</dd><p>{empty ? 'No revenue yet' : <><span className="crm-minimal__trend crm-minimal__trend--up"><span aria-hidden="true">↗</span> Increased {performance.changes[0].replace('↑ ', '')}</span> vs. previous {period}</>}</p></div>
          <div className="crm-minimal__pipeline-kpi"><dt>Open pipeline</dt><dd>{empty ? '$0' : performance.pipeline}</dd>{empty ? <p>No open opportunities</p> : <svg className="crm-minimal__kpi-area" viewBox="0 0 160 28" preserveAspectRatio="none" role="img" aria-label="Open pipeline sample trend across 15 snapshots" onClickCapture={event => { event.preventDefault(); event.stopPropagation(); }} onMouseLeave={() => setActiveSnapshot(null)}>
            <defs><linearGradient id={`${id}-pipeline-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity="0.25" /><stop offset="100%" stopColor="currentColor" stopOpacity="0.02" /></linearGradient></defs>
            <path d={`${curvedLine(snapshotPoints)} L 158,28 L 2,28 Z`} fill={`url(#${id}-pipeline-fill)`} />
            <path d={curvedLine(snapshotPoints)} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            {snapshotPoints.map((point, index) => {
              const start = index === 0 ? 0 : (snapshotPoints[index - 1].x + point.x) / 2;
              const end = index === snapshotPoints.length - 1 ? 160 : (point.x + snapshotPoints[index + 1].x) / 2;
              const visible = activeSnapshot !== null && index >= visibleSnapshotStart && index < visibleSnapshotStart + 3;
              return <g key={index} onMouseEnter={() => setActiveSnapshot(index)}>
                <circle data-snapshot-dot={index} data-visible={visible} cx={point.x} cy={point.y} r="2" fill="currentColor" opacity={visible ? 1 : 0} pointerEvents="none" />
                <Tooltip as="g" content={`Open pipeline: ${performance.pipeline} · Snapshot ${index + 1} of 15 · Trend index: ${PIPELINE_SNAPSHOTS[index]}`} placement="bottom"><rect className="crm-minimal__chart-hit" data-snapshot={index} x={start} y="0" width={end - start} height="28" fill="transparent" focusable="false" aria-label={`Pipeline snapshot ${index + 1} of 15, trend index ${PIPELINE_SNAPSHOTS[index]}`} /></Tooltip>
              </g>;
            })}
          </svg>}</div>
          <div><dt>Deals won</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '0' : performance.deals}</dd><p>{empty ? 'Your first win starts here' : <><span className="crm-minimal__trend crm-minimal__trend--up"><span aria-hidden="true">↗</span> Increased {performance.changes[1].replace('↑ ', '')}</span> vs. previous {period}</>}</p></div>
          <div className="crm-minimal__conversion-kpi"><dt>Conversion rate</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '0%' : performance.conversion}</dd>{!empty && <>
            <svg className="crm-minimal__kpi-columns" viewBox="0 0 300 30" preserveAspectRatio="none" role="img" aria-label="Conversion rate sample trend across 30 snapshots" onClickCapture={event => { event.preventDefault(); event.stopPropagation(); }}>
              {CONVERSION_SNAPSHOTS.map((value, index) => (
                <Tooltip as="g" key={index} content={`Snapshot ${index + 1}: ${value}% conversion · Sample data`} placement="bottom"><rect className="crm-minimal__chart-hit" focusable="false" aria-label={`Snapshot ${index + 1}: ${value}% conversion`} x={index * 10 + 1} y={30 - value} width="8" height={value} fill="currentColor" /></Tooltip>
              ))}
            </svg>
          </>}</div>
        </dl>
        <div className="crm-minimal__goal">
          <div className="crm-minimal__section-heading"><h2>Revenue goal</h2><p>{empty ? '0' : performance.progress}% of {performance.target}</p></div>
          <div role="progressbar" aria-label="Revenue goal" aria-valuemin={0} aria-valuemax={100} aria-valuenow={empty ? 0 : performance.progress} aria-valuetext={`${empty ? '$0' : performance.revenue} of ${performance.target}`}><ProgressBar value={empty ? 0 : performance.progress} /></div>
        </div>
      </section>
      <div className="crm-minimal__charts">
        {SALES_CHARTS.slice(0, 2).map((sourceChart, index) => {
          const chart = index === 1 ? { ...sourceChart, series: PIPELINE_STAGES } : sourceChart;
          const max = 125;
          const monthX = (point: number) => 52 + point * (revenueWidth - 72) / (chart.series.length - 1);
          const total = chart.series.reduce((sum, item) => sum + item.value, 0);
          const latest = chart.series[chart.series.length - 1];
          const previous = chart.series[chart.series.length - 2];
          const change = latest.value - previous.value;
          const direction = change >= 0 ? 'up' : 'down';
          let offset = 0;
          return <section className="crm-minimal__chart" key={chart.title} aria-labelledby={`${id}-chart-${index}`}>
            <div className="crm-minimal__section-heading"><h2 id={`${id}-chart-${index}`}>{chart.title}</h2></div>
            {empty ? <p className="crm-minimal__empty">{index === 0 ? 'Close your first deal to see revenue trends.' : 'Add opportunities to see your pipeline by stage.'}</p> : <>
              {chart.kind === 'line' ? <>
                <div className="crm-minimal__chart-summary"><strong className={`crm-minimal__trend--${direction}`}>{latest.display}</strong><p><span className={`crm-minimal__trend crm-minimal__trend--${direction}`}><span aria-hidden="true">{change >= 0 ? '↗' : '↘'}</span> {change >= 0 ? 'Increased' : 'Decreased'} {Math.abs(change / previous.value * 100).toFixed(1)}% · {Math.abs(change * 1000).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</span> vs. {previous.label}</p></div>
                <svg ref={revenueRef} className="crm-minimal__line" viewBox={`0 0 ${revenueWidth} 180`} role="img" aria-label={`${chart.title}. ${REVENUE_LINES.map(line => `${line.label}: ${line.series.map(item => `${item.label}: ${item.display}`).join('; ')}`).join('. ')}`}>
                  {Array.from({ length: max / 25 + 1 }, (_, tick) => tick * 25).map(value => {
                    const y = 140 - value / max * 110;
                    return <g key={value}>
                      <line x1="52" x2={revenueWidth - 20} y1={y} y2={y} className="crm-minimal__gridline" />
                      <text className="crm-minimal__svg-label" x="44" y={y + 4} textAnchor="end">${value}K</text>
                    </g>;
                  })}
                  <line x1="52" x2="52" y1="30" y2="140" className="crm-minimal__y-axis" />
                  {REVENUE_LINES.map(line => <g key={line.label} className={`crm-minimal__revenue--${line.color}`} data-revenue-series={line.label}>
                    <path d={curvedLine(line.series.map((item, point) => ({ x: monthX(point), y: 140 - item.value / max * 110 })))} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    {line.series.map((item, point) => <Tooltip as="g" key={item.label} content={`${line.label} · ${item.label}: ${item.display}`} placement="bottom"><circle className="crm-minimal__chart-hit" tabIndex={0} aria-label={`${line.label} · ${item.label}: ${item.display}`} data-month={item.label} cx={monthX(point)} cy={140 - item.value / max * 110} r="3" fill="currentColor" stroke="transparent" strokeWidth="8" /></Tooltip>)}
                  </g>)}
                  {chart.series.map((item, point) => <text className="crm-minimal__line-month" key={item.label} x={monthX(point)} y="166" textAnchor="middle">{item.label.slice(0, 3)}</text>)}
                </svg>
                <ul className="crm-minimal__line-legend" aria-label="Revenue series">{REVENUE_LINES.map(line => <li key={line.label}><span className={`crm-minimal__revenue--${line.color}`} aria-hidden="true" />{line.label}</li>)}</ul>
              </> : <div className="crm-minimal__donut-layout">
                <svg className="crm-minimal__donut" viewBox="0 0 120 120" role="img" aria-label={`${chart.title}. ${chart.series.map(item => `${item.label}: ${item.display}`).join('; ')}`}>
                  {chart.series.map((item, segment) => {
                    const start = offset;
                    const share = item.value / total * 100;
                    offset += share;
                    return <Tooltip as="g" key={item.label} content={`${item.label}: ${item.display} (${share.toFixed(1)}%)`} placement="bottom" followCursor><circle tabIndex={0} aria-label={`${item.label}: ${item.display}, ${share.toFixed(1)}%`} cx="60" cy="60" r="44" fill="none" pathLength="100" strokeWidth="14" strokeDasharray={`${share} ${100 - share}`} strokeDashoffset={-start} transform="rotate(-90 60 60)" className={`crm-minimal__chart-hit crm-minimal__segment--${segment}`} /></Tooltip>;
                  })}
                  {chart.series.map((item, segment) => {
                    const start = chart.series.slice(0, segment).reduce((sum, stage) => sum + stage.value, 0);
                    const angle = start / total * Math.PI * 2 - Math.PI / 2;
                    return <line key={item.label} className="crm-minimal__donut-separator" x1={60 + 37 * Math.cos(angle)} y1={60 + 37 * Math.sin(angle)} x2={60 + 51 * Math.cos(angle)} y2={60 + 51 * Math.sin(angle)} />;
                  })}
                  <text x="60" y="58" textAnchor="middle" className="crm-minimal__donut-total">${total.toFixed(1)}K</text>
                  <text x="60" y="72" textAnchor="middle" className="crm-minimal__donut-caption">Pipeline</text>
                </svg>
                <ul className="crm-minimal__legend">{chart.series.map((item, segment) => <li key={item.label}><span className={`crm-minimal__segment--${segment}`} aria-hidden="true">●</span><div>{item.label}<strong>{item.display} <span className="crm-minimal__caption">· {(item.value / total * 100).toFixed(1)}%</span></strong></div></li>)}</ul>
              </div>}
            </>}
          </section>;
        })}
      </div>
      <div className="crm-minimal__charts crm-minimal__charts--company">
        <section className="crm-minimal__chart crm-minimal__company-target" aria-labelledby={`${id}-company-title`}>
          <div className="crm-minimal__section-heading"><h2 id={`${id}-company-title`}>Company Target</h2></div>
          {empty ? <p className="crm-minimal__empty">Set a company target to track achievement.</p> : <>
            <div className="crm-minimal__target-summary">
              <span>Actual: <strong>{COMPANY_TARGET.achieved}</strong></span>
              <span className="crm-minimal__target-divider" aria-hidden="true">|</span>
              <span>Target: <strong>{COMPANY_TARGET.target}</strong></span>
            </div>
            <svg className="crm-minimal__target" viewBox="0 0 640 180" role="img" aria-label={`Company Target. Entire Org: ${COMPANY_TARGET.achieved} records achieved. Target: ${COMPANY_TARGET.target}.`}>
              {[0, 1000, 2000, 3000, 4000].map(value => <g key={value}><line className="crm-minimal__gridline" x1={100 + value / COMPANY_TARGET.axisMax * 500} x2={100 + value / COMPANY_TARGET.axisMax * 500} y1="30" y2="120" /><text className="crm-minimal__svg-label" x={100 + value / COMPANY_TARGET.axisMax * 500} y="140" textAnchor="middle">{value}</text></g>)}
              <text className="crm-minimal__svg-label" x="88" y="79" textAnchor="end">Entire Org</text>
              <rect className="crm-minimal__target-track" x="100" y="40" width="500" height="70" />
              <Tooltip as="g" content={`Entire Org: ${COMPANY_TARGET.achieved.toLocaleString('en-US')} records · Target: ${COMPANY_TARGET.target}`} placement="bottom"><rect tabIndex={0} aria-label={`Achieved: ${COMPANY_TARGET.achieved} records. Target: ${COMPANY_TARGET.target}`} className="crm-minimal__target-fill crm-minimal__chart-hit" x="100" y="49" width={COMPANY_TARGET.achieved / COMPANY_TARGET.axisMax * 500} height="52" /></Tooltip>
              <line className="crm-minimal__target-marker" x1={100 + COMPANY_TARGET.target / COMPANY_TARGET.axisMax * 500} x2={100 + COMPANY_TARGET.target / COMPANY_TARGET.axisMax * 500} y1="40" y2="110" />
              <text className="crm-minimal__svg-label" x="120" y="24">Target: {COMPANY_TARGET.target}</text>
              <text className="crm-minimal__svg-value" x={100 + COMPANY_TARGET.achieved / COMPANY_TARGET.axisMax * 250} y="80" textAnchor="middle">{COMPANY_TARGET.achieved}</text>
              <text className="crm-minimal__svg-label" x="350" y="170" textAnchor="middle">Record Count</text>
            </svg>
            <div className="crm-minimal__target-legend"><span aria-hidden="true" />Achieved</div>
          </>}
        </section>
        <section className="crm-minimal__chart" aria-labelledby={`${id}-appointments-title`}>
          <div className="crm-minimal__section-heading"><h2 id={`${id}-appointments-title`}>My Today's Appointments</h2></div>
          {empty ? <p className="crm-minimal__empty">No appointments scheduled today.</p> : <ul className="crm-minimal__list crm-minimal__appointment-agenda">{TODAYS_APPOINTMENTS.map(appointment => <li key={appointment.id}>
            <img className="crm-minimal__appointment-avatar" src={`${import.meta.env.BASE_URL}images/avatars/${appointment.avatar}`} alt={appointment.contact} width="40" height="40" />
            <div className="crm-minimal__appointment-agenda-details">
              <h3>{appointment.title}</h3>
              <p className="crm-minimal__appointment-time"><span>{appointment.account} · {appointment.contact}</span><span><time dateTime={appointment.time}>{appointment.time}</time> · {appointment.type}</span></p>
            </div>
            <div className="crm-minimal__appointment-actions" role="group" aria-label={`Actions for ${appointment.title}`}>
              <Button variant="link-primary" onClick={() => setSelectedAppointment(appointment)}>View details</Button>
              <Button variant="default" size="sm" aria-pressed={completedAppointments.includes(appointment.id)} onClick={() => setCompletedAppointments(current => current.includes(appointment.id) ? current.filter(item => item !== appointment.id) : [...current, appointment.id])}>{completedAppointments.includes(appointment.id) ? 'Completed' : 'Mark done'}</Button>
            </div>
          </li>)}</ul>}
          <Modal isOpen={selectedAppointment !== null} type="alert" variant="info" title={selectedAppointment?.title ?? 'Appointment details'} description={selectedAppointment ? `${selectedAppointment.account} · ${selectedAppointment.contact} · ${selectedAppointment.time}–${selectedAppointment.end} · ${selectedAppointment.type}` : ''} confirmLabel="Close" onClose={() => setSelectedAppointment(null)} />
        </section>
      </div>
      <div className="crm-minimal__industry-builder">
      <section className="crm-minimal__chart crm-minimal__industries" aria-labelledby={`${id}-industries-title`}>
        <div className="crm-minimal__section-heading"><h2 id={`${id}-industries-title`}>Accounts by Industry</h2></div>
        {empty ? <p className="crm-minimal__empty">Add accounts to see your industry breakdown.</p> : <div className="crm-minimal__industry-scroll" tabIndex={0} role="group" aria-label="Industry chart, scroll horizontally on small screens">
          <svg ref={industryRef} className="crm-minimal__columns" viewBox={`0 0 ${industryWidth} 300`} role="img" aria-label={`Accounts by Industry. ${ACCOUNTS_BY_INDUSTRY.map(item => `${item.industry}: ${item.count}`).join('; ')}. Total: ${ACCOUNTS_BY_INDUSTRY.reduce((total, item) => total + item.count, 0)} accounts.`}>
            {[0, 200, 400, 600, 800].map(value => <g key={value}><line className="crm-minimal__gridline" x1="50" x2={industryWidth - 10} y1={240 - value / 800 * 208} y2={240 - value / 800 * 208} /><text className="crm-minimal__svg-label" x="38" y={245 - value / 800 * 208} textAnchor="end">{value}</text></g>)}
            {ACCOUNTS_BY_INDUSTRY.map((item, index) => <g key={item.industry}>
              <Tooltip as="g" content={`${item.industry}: ${item.count} accounts`} placement="bottom"><rect tabIndex={0} aria-label={`${item.industry}: ${item.count} accounts`} data-industry={item.industry} className="crm-minimal__column crm-minimal__chart-hit" x={50 + index * industryStep + industryStep * 0.23} y={240 - item.count / 800 * 208} width={industryStep * 0.54} height={item.count / 800 * 208} /></Tooltip>
              <text className="crm-minimal__svg-value" x={50 + (index + 0.5) * industryStep} y={230 - item.count / 800 * 208} textAnchor="middle">{item.count}</text>
              <text className="crm-minimal__svg-label" x={50 + (index + 0.5) * industryStep} y="266" textAnchor="middle">{item.industry}</text>
            </g>)}
          </svg>
        </div>}
      </section>
      <section className="crm-minimal__builder" aria-labelledby={`${id}-builder-title`}>
        <div className="crm-minimal__builder-intro">
          <span className="crm-minimal__builder-mark"><Icon name="WmsZia" size={24} /></span>
          <h2 id={`${id}-builder-title`}>Build something <span>for your next move.</span></h2>
          <p>What would you like to build today?</p>
        </div>
        <form className="crm-minimal__builder-form" onSubmit={event => { event.preventDefault(); if (builderPrompt.trim()) setBuilderPreview(builderPrompt.trim()); }}>
          <span className="crm-minimal__builder-sparkle" aria-hidden="true" />
          <div ref={builderInput}><Textarea aria-label="Describe your idea" placeholder="Describe your idea…" width="100%" layout="vertical" minHeight={48} value={builderPrompt} maxLength={2000} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBuilderPrompt(event.target.value)} /></div>
          <div className="crm-minimal__builder-toolbar">
            <div className="crm-minimal__builder-tools" role="group" aria-label="Idea tools">
              <Button type="button" variant="link-default" disabled aria-label="Attach file (unavailable in local demo)" title="Attachments are unavailable in this local demo"><Icon name="RtUnlink" size={18} /></Button>
              <Button type="button" variant="link-default" aria-label="Edit idea" title="Edit idea" onClick={() => builderInput.current?.querySelector('textarea')?.focus()}><Icon name="Edit" size={18} /></Button>
            </div>
            <div className="crm-minimal__builder-tools" role="group" aria-label="Preview controls">
              <Button type="button" variant="link-default" disabled aria-label="Voice input (unavailable in local demo)" title="Voice input is unavailable in this local demo"><Icon name="WmsAnnouncements" size={20} /></Button>
              <span className="crm-minimal__builder-send"><Button type="submit" size="sm" aria-label="Preview idea" title="Preview idea · Local demo" disabled={!builderPrompt.trim()}><span aria-hidden="true">↑</span></Button></span>
            </div>
          </div>
        </form>
        {builderPreview !== null && <Modal isOpen type="alert" variant="info" title="Idea preview · Local demo" description={`${builderPreview}\n\nThis preview only captures your idea. No application is generated and no data is sent.`} confirmLabel="Back to idea" onSave={() => { setBuilderPreview(null); builderInput.current?.querySelector('textarea')?.focus(); }} onClose={() => { setBuilderPreview(null); builderInput.current?.querySelector('textarea')?.focus(); }} />}
      </section>
      </div>
      <div className="crm-minimal__grid">
        <section id={`${id}-deals`} aria-labelledby={`${id}-deals-title`} className="crm-minimal__deals">
          <div className="crm-minimal__section-heading"><h2 id={`${id}-deals-title`}>Open deals</h2></div>
          <div className="crm-minimal__table"><SetupTable columns={COLUMNS} rows={rows} selectable={false} width="100%" emptyMessage="No open deals yet. Your opportunities will appear here." /></div>
        </section>
        <aside className="crm-minimal__daily" aria-label="Daily workspace">
          <section id={`${id}-today`} aria-labelledby={`${id}-tasks-title`}>
            <div className="crm-minimal__section-heading"><h2 id={`${id}-tasks-title`}>Today</h2></div>
            <ul className="crm-minimal__list crm-minimal__today-list" tabIndex={tasks.length ? 0 : undefined} aria-label="Today's tasks">{tasks.map(task => <li key={task.id} data-completed={task.completed || undefined}><Checkbox label={task.title} checked={task.completed} onChange={() => setTasks(current => current.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item))} /></li>)}</ul>
            {empty && <p className="crm-minimal__empty" role="status">Nothing scheduled. Enjoy a fresh start.</p>}
          </section>
        </aside>
      </div>
    </div>
  </div></CrmHomepage>;
}

export const Default: Story = {
  render: () => <MinimalPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Welcome Patricia Boyle' })).toBeVisible();
    const builder = within(canvas.getByRole('region', { name: 'Build something for your next move.' }));
    await expect(builder.queryByRole('heading', { name: 'Suggestions' })).not.toBeInTheDocument();
    await expect(builder.queryByRole('list')).not.toBeInTheDocument();
    const prompt = builder.getByRole('textbox', { name: 'Describe your idea' });
    await expect(builder.getByRole('button', { name: 'Attach file (unavailable in local demo)' })).toBeDisabled();
    await expect(builder.getByRole('button', { name: 'Voice input (unavailable in local demo)' })).toBeDisabled();
    await userEvent.click(builder.getByRole('button', { name: 'Edit idea' }));
    await expect(prompt).toHaveFocus();
    await expect(builder.getByRole('button', { name: 'Preview idea' })).toBeDisabled();
    await userEvent.type(prompt, 'Create a sales forecast dashboard.');
    await userEvent.click(builder.getByRole('button', { name: 'Preview idea' }));
    const preview = within(canvasElement.ownerDocument.body).getByRole('alertdialog', { name: 'Idea preview · Local demo' });
    await expect(preview).toHaveTextContent('No application is generated');
    await userEvent.click(within(preview).getByRole('button', { name: 'Back to idea' }));
    await expect(prompt).toHaveValue('Create a sales forecast dashboard.');
    await userEvent.clear(prompt);
    await expect(canvas.queryByText('Friday, June 19, 2026')).not.toBeInTheDocument();
    await expect(canvas.queryByText('A little clarity for your next move.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Reporting period')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: 'All Territories' })).not.toBeInTheDocument();
    const overview = within(canvas.getByRole('region', { name: 'Sales overview' }));
    await expect(overview.getAllByRole('term')).toHaveLength(4);
    const miniArea = overview.getByRole('img', { name: 'Open pipeline sample trend across 15 snapshots' });
    await expect(miniArea).toBeVisible();
    await expect(miniArea.querySelectorAll('path')).toHaveLength(2);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniArea).position).toBe('absolute');
    await expect(overview.getByText('Conversion rate')).toBeVisible();
    const miniColumns = overview.getByRole('img', { name: 'Conversion rate sample trend across 30 snapshots' });
    await expect(miniColumns).toBeVisible();
    await expect(miniColumns.querySelectorAll('rect')).toHaveLength(30);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniColumns).position).toBe('absolute');
    const conversionBar = miniColumns.querySelector<SVGRectElement>('rect')!;
    await userEvent.hover(conversionBar);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Snapshot 1: 18% conversion');
    await userEvent.unhover(conversionBar);
    await expect(overview.getByText('25%', { exact: true })).toBeVisible();
    await expect(overview.getByText('$84,500')).toBeVisible();
    const trend = within(canvas.getByRole('region', { name: 'Revenue trend' }));
    const revenueChart = trend.getByRole('img', { name: /Revenue trend/ });
    await expect(revenueChart).toBeVisible();
    await expect(revenueChart.querySelectorAll('path')).toHaveLength(3);
    await expect(revenueChart.querySelector('.crm-minimal__y-axis')).toBeInTheDocument();
    await expect(within(revenueChart).getByText('$0K')).toBeVisible();
    await expect(within(revenueChart).getByText('$125K')).toBeVisible();
    for (let first = 0; first < REVENUE_LINES.length; first++) {
      for (let second = first + 1; second < REVENUE_LINES.length; second++) {
        const differences = REVENUE_LINES[first].series.map((item, index) => item.value - REVENUE_LINES[second].series[index].value);
        await expect(differences.some(value => value > 0) && differences.some(value => value < 0)).toBe(true);
      }
    }
    revenueChart.querySelectorAll('path').forEach(path => expect(path.getAttribute('d')).toContain('C '));
    const counts = ACCOUNTS_BY_INDUSTRY.map(item => item.count);
    await expect(counts.some((count, index) => index > 0 && count > counts[index - 1])).toBe(true);
    await expect(counts.some((count, index) => index > 0 && count < counts[index - 1])).toBe(true);
    const monthLabels = revenueChart.querySelectorAll('text.crm-minimal__line-month');
    await expect(monthLabels).toHaveLength(6);
    for (const line of REVENUE_LINES) {
      const series = revenueChart.querySelector(`[data-revenue-series="${line.label}"]`)!;
      await expect(series).toHaveClass(`crm-minimal__revenue--${line.color}`);
      const dots = series.querySelectorAll('circle');
      await expect(dots).toHaveLength(6);
      dots.forEach((dot, index) => expect(dot.getAttribute('cx')).toBe(monthLabels[index].getAttribute('x')));
    }
    // KPI mini charts are hover-only and prevent click activation and bubbling.
    const conversionChart = overview.getByRole('img', { name: 'Conversion rate sample trend across 30 snapshots' });
    for (const chart of [miniArea, conversionChart]) {
      let bubbled = false;
      const onClick = () => { bubbled = true; };
      canvasElement.addEventListener('click', onClick);
      try {
        const click = new MouseEvent('click', { bubbles: true, cancelable: true });
        chart.querySelector('rect')!.dispatchEvent(click);
        await expect(click.defaultPrevented).toBe(true);
        await expect(bubbled).toBe(false);
      } finally {
        canvasElement.removeEventListener('click', onClick);
      }
    }
    const miniAreaHits = miniArea.querySelectorAll<SVGRectElement>('rect[data-snapshot]');
    const miniAreaTooltip = within(canvasElement.ownerDocument.body);
    await expect(miniAreaHits).toHaveLength(15);
    await expect(miniArea.querySelectorAll('[data-snapshot-dot]')).toHaveLength(15);
    await expect(miniArea.querySelectorAll('[data-visible="true"]')).toHaveLength(0);
    for (const index of [0, 7, 14]) {
      await userEvent.hover(miniAreaHits[index]);
      await expect(miniAreaTooltip.getByRole('tooltip')).toHaveTextContent(`Snapshot ${index + 1} of 15`);
      const start = Math.max(0, Math.min(index - 1, 12));
      await expect(Array.from(miniArea.querySelectorAll('[data-visible="true"]'), dot => Number(dot.getAttribute('data-snapshot-dot')))).toEqual([start, start + 1, start + 2]);
      await userEvent.unhover(miniAreaHits[index]);
      await expect(miniArea.querySelectorAll('[data-visible="true"]')).toHaveLength(0);
      await expect(miniAreaTooltip.queryByRole('tooltip')).not.toBeInTheDocument();
    }
    for (const chart of [miniArea, miniColumns]) {
      await expect(chart.querySelectorAll('[tabindex]')).toHaveLength(0);
      for (const hit of chart.querySelectorAll<SVGRectElement>('rect')) {
        await expect(hit).toHaveAttribute('focusable', 'false');
        hit.focus();
        await expect(hit).not.toHaveFocus();
      }
    }
    await expect(miniAreaTooltip.queryByRole('tooltip')).not.toBeInTheDocument();
    const forecastPoint = revenueChart.querySelector<SVGCircleElement>('[data-revenue-series="Forecast"] circle[data-month="January"]')!;
    await userEvent.hover(forecastPoint);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Forecast · January: $60,000');
    await userEvent.unhover(forecastPoint);
    await expect(canvas.queryByText('View chart data')).not.toBeInTheDocument();
    const pipeline = within(canvas.getByRole('region', { name: 'Pipeline by stage' }));
    const pipelineChart = pipeline.getByRole('img', { name: /Pipeline by stage.*Negotiation: \$55,000/ });
    await expect(pipelineChart).toBeVisible();
    await expect(pipelineChart.querySelectorAll('circle')).toHaveLength(5);
    await expect(pipelineChart.querySelectorAll('.crm-minimal__donut-separator')).toHaveLength(5);
    await expect(pipeline.getAllByRole('listitem')).toHaveLength(5);
    for (const stage of PIPELINE_STAGES) await expect(pipeline.getByText(stage.label, { exact: true })).toBeVisible();
    for (const separator of pipelineChart.querySelectorAll('line')) {
      const style = canvasElement.ownerDocument.defaultView!.getComputedStyle(separator);
      await expect(style.strokeWidth).toBe('2px');
      await expect(style.vectorEffect).toBe('non-scaling-stroke');
    }
    await userEvent.hover(pipelineChart.querySelector('circle')!);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    const pipelineSegment = pipelineChart.querySelector('circle')!;
    for (const coords of [{ clientX: 240, clientY: 200 }, { clientX: 260, clientY: 220 }]) {
      await userEvent.pointer({ target: pipelineSegment, coords });
      const anchor = within(canvasElement.ownerDocument.body).getByRole('tooltip').parentElement!;
      await expect(anchor.style.left).toBe(`${coords.clientX}px`);
      await expect(anchor.style.top).toBe(`${coords.clientY}px`);
    }
    await userEvent.unhover(pipelineSegment);
    await expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).not.toBeInTheDocument();
    pipelineSegment.focus();
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    await userEvent.keyboard('{Escape}');
    pipelineSegment.blur();
    await expect(pipeline.getByText('$115.5K')).toBeVisible();
    await expect(trend.getByText(/Decreased 5.6% · \$5,000/)).toHaveClass('crm-minimal__trend--down');
    await expect(overview.getByText('Increased 18.2%')).toHaveClass('crm-minimal__trend--up');
    await expect(overview.getByText('Increased 3 deals')).toHaveClass('crm-minimal__trend--up');
    const company = within(canvas.getByRole('region', { name: 'Company Target' }));
    await expect(company.getByRole('img', { name: /3210 records achieved.*Target: 3000/ })).toBeVisible();
    await expect(company.getByText('3210', { selector: 'strong' })).toBeVisible();
    await expect(company.getByText('3000', { selector: 'strong' })).toBeVisible();
    await expect(company.queryByText(/% of target achieved/)).not.toBeInTheDocument();
    const achievedBar = canvas.getByRole('region', { name: 'Company Target' }).querySelector<SVGRectElement>('.crm-minimal__target-fill')!;
    await expect(Number(achievedBar.getAttribute('width'))).toBe(3210 / 4000 * 500);
    await userEvent.hover(achievedBar);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('3,210 records · Target: 3000');
    await userEvent.unhover(achievedBar);
    const appointments = within(canvas.getByRole('region', { name: "My Today's Appointments" }));
    await expect(appointments.getAllByRole('listitem')).toHaveLength(TODAYS_APPOINTMENTS.length);
    await expect(canvas.getAllByRole('region', { name: "My Today's Appointments" })).toHaveLength(1);
    for (const appointment of TODAYS_APPOINTMENTS) {
      await expect(appointments.getByText(appointment.title)).toBeVisible();
      const photo = appointments.getByRole('img', { name: appointment.contact });
      await expect(photo).toBeVisible();
      await expect((photo as HTMLImageElement).naturalWidth).toBeGreaterThan(0);
    }
    for (const appointment of TODAYS_APPOINTMENTS) {
      const actions = within(appointments.getByRole('group', { name: `Actions for ${appointment.title}` }));
      await userEvent.click(actions.getByRole('button', { name: 'Mark done' }));
      await expect(actions.getByRole('button', { name: 'Completed' })).toHaveAttribute('aria-pressed', 'true');
      await userEvent.click(actions.getByRole('button', { name: 'Completed' }));
      await expect(actions.getByRole('button', { name: 'Mark done' })).toHaveAttribute('aria-pressed', 'false');
    }
    await userEvent.click(appointments.getAllByRole('button', { name: 'View details' })[0]);
    const appointmentDialog = within(canvasElement.ownerDocument.body).getByRole('alertdialog');
    await expect(within(appointmentDialog).getByText('Discovery call')).toBeVisible();
    await expect(within(appointmentDialog).getByText(/Atlas Logistics · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible();
    await userEvent.click(within(appointmentDialog).getByRole('button', { name: 'Close', exact: true }));
    const industries = canvas.getByRole('region', { name: 'Accounts by Industry' });
    await expect(industries.querySelectorAll('rect[data-industry]')).toHaveLength(10);
    const industryColumn = industries.querySelector<SVGRectElement>('rect[data-industry="Technology"]')!;
    const documentBody = within(canvasElement.ownerDocument.body);
    await userEvent.hover(industryColumn);
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Technology: 640 accounts');
    await userEvent.unhover(industryColumn);
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.focus();
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Technology: 640 accounts');
    await userEvent.keyboard('{Escape}');
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.blur();
    await expect(within(industries).getByRole('img', { name: /Technology: 640.*Hospitality: 126.*3191 accounts/ })).toBeVisible();
    const period = canvas.getByRole('button', { name: 'This month' });
    await userEvent.click(period);
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', { name: 'This quarter' }));
    await expect(overview.getByText('$246,000')).toBeVisible();
    await expect(overview.getByText('24%', { exact: true })).toBeVisible();
    const today = within(canvas.getByRole('region', { name: 'Today' }));
    const todayList = today.getByRole('list', { name: "Today's tasks" });
    await expect(today.getAllByRole('checkbox')).toHaveLength(INITIAL_TASKS.length + TODAY_TASKS.length);
    await expect(todayList).toHaveAttribute('tabindex', '0');
    await expect(todayList.scrollHeight).toBeGreaterThan(todayList.clientHeight);
    const lastTask = today.getAllByRole('checkbox').at(-1)!;
    lastTask.scrollIntoView({ block: 'nearest' });
    await expect(todayList.scrollTop).toBeGreaterThan(0);
    for (const checkbox of today.getAllByRole('checkbox')) await userEvent.click(checkbox);
    for (const checkbox of today.getAllByRole('checkbox')) await expect(checkbox).toBeChecked();
    await expect(today.queryByRole('status')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: 'Review follow-up' })).not.toBeInTheDocument();
    await expect(canvas.queryByText(/\d+ opportunities/)).not.toBeInTheDocument();
    await expect(canvas.getByText('Meridian Health', { exact: true })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Conversations' })).not.toBeInTheDocument();
  },
};
export const EmptyState: Story = {
  render: () => <MinimalPage empty />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No open deals yet. Your opportunities will appear here.')).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Conversations' })).not.toBeInTheDocument();
    await expect(canvas.getByRole('progressbar', { name: 'Revenue goal' })).toHaveAttribute('aria-valuenow', '0');
    const trend = within(canvas.getByRole('region', { name: 'Revenue trend' }));
    await expect(trend.getByText('Close your first deal to see revenue trends.')).toBeVisible();
    await expect(trend.queryByRole('img')).not.toBeInTheDocument();
    const pipeline = within(canvas.getByRole('region', { name: 'Pipeline by stage' }));
    await expect(pipeline.getByText('Add opportunities to see your pipeline by stage.')).toBeVisible();
    await expect(pipeline.queryByRole('img')).not.toBeInTheDocument();
    await expect(canvasElement.querySelector('.crm-minimal__trend')).not.toBeInTheDocument();
    await expect(canvas.getAllByText('No appointments scheduled today.')).toHaveLength(1);
    await expect(canvas.queryByRole('group', { name: 'Select appointment' })).not.toBeInTheDocument();
    await expect(canvas.getByText('Set a company target to track achievement.')).toBeVisible();
    const industries = within(canvas.getByRole('region', { name: 'Accounts by Industry' }));
    await expect(industries.getByText('Add accounts to see your industry breakdown.')).toBeVisible();
    await expect(industries.queryByRole('img')).not.toBeInTheDocument();
  },
};
