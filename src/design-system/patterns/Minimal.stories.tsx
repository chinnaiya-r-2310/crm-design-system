import { useEffect, useId, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Icon } from '../components/Icon/Icon';
import { Textarea } from '../components/Textarea/Textarea';
import { Modal } from '../components/Modal/Modal';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { SetupTable } from '../components/Table/Table';
import { CrmHomepage } from './CrmHomepage.stories';
import { PERFORMANCE } from './CrmHomepage.data';
import type { Period } from './CrmHomepage.data';
import { SALES_CHARTS } from './Colorful.data';
import { ACCOUNTS_BY_INDUSTRY, CARGO_DEALS, CARGO_INITIAL_TASKS, ADDITIONAL_OPEN_DEALS, PIPELINE_SNAPSHOTS, PIPELINE_STAGES, REVENUE_LINES, SALES_HOME_VIEWS, TODAY_TASKS, TODAYS_APPOINTMENTS } from './Minimal.data';
import { getSalesDashboard } from './Minimal.views';
import { MinimalDrilldown } from './MinimalDrilldown';
import { readDrilldownSelection } from './Minimal.drilldown';
import type { DrilldownSelection } from './Minimal.drilldown';
import './Minimal.css';

const meta = {
  title: 'Design System/Patterns/crm-homepage/minimal',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'A minimal CRM homepage inside the existing CRM shell. Preserves the floating page header, with 30px horizontal content padding, four headline metrics, open deals, and tasks. Uses existing components and shared CRM sample data; all interactions are local.' } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const CONVERSION_SNAPSHOTS = [18, 22, 19, 24, 21, 25, 23, 17, 26, 20, 24, 28, 22, 19, 25, 27, 21, 24, 18, 23, 29, 25, 22, 26, 20, 24, 27, 23, 28, 25, 21, 26, 18, 24, 29, 22, 25, 19, 27, 23, 28, 20, 26, 24, 30];
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
  const [height, setHeight] = useState(180);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0) setWidth(entry.contentRect.width);
      if (entry.contentRect.height > 0) setHeight(entry.contentRect.height);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, width, height };
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

// Catmull–Rom-style averaged tangents give the monthly joins gentler bends.
// Limit the tangents to preserve each segment's range within the chart scale.
function revenueCurve(points: { x: number; y: number }[]) {
  const slopes = points.slice(1).map((point, index) =>
    (point.y - points[index].y) / (point.x - points[index].x));
  const tangents = points.map((_, index) => {
    if (index === 0) return slopes[0];
    if (index === points.length - 1) return slopes[index - 1];
    const before = slopes[index - 1];
    const after = slopes[index];
    if (before * after <= 0) return 0;
    const average = (before + after) / 2;
    const limit = 3 * Math.min(Math.abs(before), Math.abs(after));
    return Math.sign(average) * Math.min(Math.abs(average), limit);
  });
  return points.map((point, index) => {
    if (index === 0) return `M ${point.x},${point.y}`;
    const previous = points[index - 1];
    const step = (point.x - previous.x) / 3;
    return `C ${previous.x + step},${previous.y + tangents[index - 1] * step} ${point.x - step},${point.y - tangents[index] * step} ${point.x},${point.y}`;
  }).join(' ');
}

// Story-local page composition; no new design-system primitives.
function MinimalPage({ empty = false }: { empty?: boolean }) {
  const id = useId();
  const { ref: revenueRef, width: revenueWidth, height: revenueHeight } = useChartWidth(320);
  const revenueBottom = Math.max(140, revenueHeight - 40);
  const revenueY = (value: number) => revenueBottom - value / 150 * (revenueBottom - 30);
  const { ref: industryRef, width: industryWidth } = useChartWidth(1000);
  const [builderPrompt, setBuilderPrompt] = useState('');
  const [builderPreview, setBuilderPreview] = useState<string | null>(null);
  const [builderDiscuss, setBuilderDiscuss] = useState(false);
  const builderInput = useRef<HTMLDivElement>(null);
  const [period, setPeriod] = useState<Period>('month');
  const [homeView, setHomeView] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('home-view');
    return SALES_HOME_VIEWS.some(view => view.value === requested) ? requested! : 'classic';
  });
  const [drilldown, setDrilldown] = useState<DrilldownSelection | null>(() => empty ? null : readDrilldownSelection());
  const drilldownProps = (selection: DrilldownSelection) => ({
    role: 'button' as const, tabIndex: 0, 'aria-haspopup': 'dialog' as const,
    onClick: (event: React.MouseEvent<SVGElement>) => { event.stopPropagation(); setDrilldown(selection); },
    onKeyDown: (event: React.KeyboardEvent<SVGElement>) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); setDrilldown(selection); }
    },
  });
  const [hiddenRevenueSeries, setHiddenRevenueSeries] = useState<string[]>([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [actionNotice, setActionNotice] = useState('');
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const page = pageRef.current;
    if (!page || empty) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animations: Animation[] = [];
    const stop = () => {
      animations.forEach(animation => animation.cancel());
      animations = [];
    };
    const formCharts = () => {
      stop();
      if (motion.matches) return;
      const animate = (element: Element, keyframes: Keyframe[], delay = 0) => {
        const animation = element.animate(keyframes, {
          duration: 800, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards',
        });
        animation.id = 'crm-minimal-formation';
        animations.push(animation);
      };
      // Reveal areas, curves and dots together without altering their coordinates or hit targets.
      page.querySelectorAll('[data-revenue-series], .crm-minimal__kpi-area').forEach(element => {
        animate(element, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }]);
      });
      page.querySelectorAll('.crm-minimal__column, .crm-minimal__kpi-columns rect').forEach((element, index) => {
        animate(element, [
          { transform: 'scaleY(0)', transformBox: 'fill-box', transformOrigin: 'center bottom' },
          { transform: 'scaleY(1)', transformBox: 'fill-box', transformOrigin: 'center bottom' },
        ], Math.min(index * 15, 180));
      });
      page.querySelectorAll('.crm-minimal__donut circle').forEach((element, index) => {
        animate(element, [{ strokeDasharray: '0 100' }, { strokeDasharray: element.getAttribute('stroke-dasharray')! }], index * 50);
      });
      page.querySelectorAll('.crm-minimal__target-fill').forEach(element => {
        animate(element, [
          { transform: 'scaleX(0)', transformBox: 'fill-box', transformOrigin: 'left center' },
          { transform: 'scaleX(1)', transformBox: 'fill-box', transformOrigin: 'left center' },
        ]);
      });
      page.querySelectorAll('.crm-minimal dd, .crm-minimal__chart-summary, .crm-minimal__target-summary, .crm-minimal__donut-total, .crm-minimal__svg-value').forEach(element => {
        animate(element, [{ opacity: 0 }, { opacity: 1 }], 100);
      });
    };
    formCharts();
    motion.addEventListener('change', formCharts);
    return () => {
      stop();
      motion.removeEventListener('change', formCharts);
    };
  }, [empty, homeView, period]);
  useEffect(() => {
    const sync = () => setFullscreen(document.fullscreenElement === document.documentElement);
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);
  const menuPosition = (position: { left: number; width: number }) => {
    const width = Math.min(window.innerWidth - 16, Math.max(position.width, 340));
    return { width, left: Math.max(8, Math.min(position.left, window.innerWidth - width - 8)) };
  };
  const { REVENUE_LINES, PIPELINE_STAGES, ACCOUNTS_BY_INDUSTRY, COMPANY_TARGET, sections: defaultSections, chartOrder } = getSalesDashboard(homeView);
  const sections = defaultSections;
  const industryStep = (industryWidth - 70) / ACCOUNTS_BY_INDUSTRY.length;
  const industryMax = Math.max(800, Math.ceil(Math.max(...ACCOUNTS_BY_INDUSTRY.map(item => item.count)) / 200) * 200);
  const [tasks, setTasks] = useState(() => empty ? [] : [...CARGO_INITIAL_TASKS, ...TODAY_TASKS].map(task => ({
    ...task,
    completed: ['proposal', 'renewal', 'pricing'].includes(task.id),
  })));
  const [activeSnapshot, setActiveSnapshot] = useState<number | null>(null);
  const [activeConversionSnapshot, setActiveConversionSnapshot] = useState(0);
  const [selectedAppointment, setSelectedAppointment] = useState<typeof TODAYS_APPOINTMENTS[number] | null>(null);
  const [completedAppointments, setCompletedAppointments] = useState<string[]>([]);
  const snapshotPoints = PIPELINE_SNAPSHOTS.map((value, index) => ({ x: 2 + index * 156 / (PIPELINE_SNAPSHOTS.length - 1), y: 25 - value / 100 * 24 }));
  const visibleSnapshotStart = activeSnapshot === null ? -1 : Math.max(0, Math.min(activeSnapshot - 1, snapshotPoints.length - 3));
  const performance = PERFORMANCE[period];
  const rows = empty ? [] : [...CARGO_DEALS, ...ADDITIONAL_OPEN_DEALS];

  return <CrmHomepage empty={empty} showTerritory={false} workspaceName="Cargo Shipping Logistics"><div ref={pageRef} className="crm-minimal">
    <div className="crm-minimal__main" role="region" aria-labelledby={`${id}-title`}>
      <div className="crm-minimal__heading">
        <div className="crm-minimal__welcome">
          <span className="crm-minimal__welcome-logo" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}images/sailboat-logo.png`} width="46" height="46" alt="" />
          </span>
          <h1 id={`${id}-title`}>Welcome Patricia Boyle</h1>
        </div>
        <div className="crm-minimal__home-controls">
        <Dropdown layout="vertical" width="max-content" panelStyle={menuPosition} style={{ maxWidth: '100%' }} options={SALES_HOME_VIEWS} value={homeView} onChange={(value: string) => {
          const view = SALES_HOME_VIEWS.find(option => option.value === value);
          if (!view) return;
          setHomeView(view.value);
          setPeriod(view.period);
        }} />
        <Dropdown value="" placeholder="More options" triggerAriaLabel="More options" triggerButtonVariant="default" triggerIcon={<Icon name="More" size={16} />} width="max-content" layout="vertical" id={`${id}-homepage-actions`} panelStyle={(position: { left: number; width: number }) => ({ width: 'max-content', maxWidth: 'calc(100vw - 16px)', left: 'auto', right: Math.max(8, window.innerWidth - position.left - position.width) })} options={[
          { value: 'edit', label: 'Edit Homepage' },
          { value: 'reorder', label: 'Reorder' },
          { value: 'fullscreen', label: 'View Fullscreen' },
        ]} onChange={async (action: string) => {
          if (action !== 'fullscreen') return;
          try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else await document.documentElement.requestFullscreen();
          } catch { setActionNotice('Fullscreen is unavailable in this preview. Open the story in a new tab to try again.'); }
        }} />
        </div>
      </div>
      {actionNotice && <p role="status">{actionNotice}</p>}
      {fullscreen && <Button variant="default" onClick={() => document.exitFullscreen()}>Exit fullscreen</Button>}
      <section id={`${id}-overview`} aria-label="Sales overview" className="crm-minimal__overview">
        <dl className="crm-minimal__metrics">
          <div><dt>Closed revenue</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '$0' : performance.revenue}</dd><p>{empty ? 'No revenue yet' : <><span className="crm-minimal__trend crm-minimal__trend--up"><span aria-hidden="true">↗</span> {performance.changes[0].replace('↑ ', '')}</span> vs. previous {period}</>}</p></div>
          <div className="crm-minimal__pipeline-kpi"><dt>Open pipeline</dt><dd>{empty ? '$0' : performance.pipeline}</dd>{empty ? <p>No open opportunities</p> : <svg className="crm-minimal__kpi-area" viewBox="0 0 160 28" preserveAspectRatio="none" role="img" aria-label="Open pipeline sample trend across 15 snapshots" onMouseLeave={() => setActiveSnapshot(null)}>
            <defs><linearGradient id={`${id}-pipeline-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity="0.25" /><stop offset="100%" stopColor="currentColor" stopOpacity="0.02" /></linearGradient></defs>
            <path d={`${curvedLine(snapshotPoints)} L 158,28 L 2,28 Z`} fill={`url(#${id}-pipeline-fill)`} />
            <path d={curvedLine(snapshotPoints)} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            {snapshotPoints.map((point, index) => {
              const start = index === 0 ? 0 : (snapshotPoints[index - 1].x + point.x) / 2;
              const end = index === snapshotPoints.length - 1 ? 160 : (point.x + snapshotPoints[index + 1].x) / 2;
              const visible = activeSnapshot !== null && index >= visibleSnapshotStart && index < visibleSnapshotStart + 3;
              return <g key={index} onMouseEnter={() => setActiveSnapshot(index)}>
                <circle data-snapshot-dot={index} data-visible={visible} cx={point.x} cy={point.y} r="2" fill="currentColor" opacity={visible ? 1 : 0} pointerEvents="none" />
                <Tooltip as="g" content={`Open pipeline: ${performance.pipeline} · Snapshot ${index + 1} of 15 · Trend index: ${PIPELINE_SNAPSHOTS[index]}`} placement="bottom" followCursor><rect {...drilldownProps({ kind: 'pipeline', label: `Snapshot ${index + 1}`, value: Number(performance.pipeline.replace(/[^\d.]/g, '')) / 1000 })} className="crm-minimal__chart-hit" data-snapshot={index} x={start} y="0" width={end - start} height="28" fill="transparent" focusable="true" aria-label={`Pipeline snapshot ${index + 1} of 15, trend index ${PIPELINE_SNAPSHOTS[index]}`} /></Tooltip>
              </g>;
            })}
          </svg>}</div>
          <div><dt>Deals won</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '0' : performance.deals}</dd><p>{empty ? 'Your first win starts here' : <><span className="crm-minimal__trend crm-minimal__trend--up"><span aria-hidden="true">↗</span> {performance.changes[1].replace('↑ ', '')}</span> vs. previous {period}</>}</p></div>
          <div className="crm-minimal__conversion-kpi"><dt>Conversion rate</dt><dd className={empty ? undefined : 'crm-minimal__trend--up'}>{empty ? '0%' : performance.conversion}</dd>{!empty && <>
            <svg className="crm-minimal__kpi-columns" viewBox="0 0 300 30" preserveAspectRatio="none" role="img" aria-label="Conversion rate sample trend across 45 snapshots" onMouseMove={event => {
              const bounds = event.currentTarget.getBoundingClientRect();
              if (bounds.width > 0) setActiveConversionSnapshot(Math.max(0, Math.min(CONVERSION_SNAPSHOTS.length - 1, Math.floor((event.clientX - bounds.left) / bounds.width * CONVERSION_SNAPSHOTS.length))));
            }}>
              <defs><linearGradient id={`${id}-conversion-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--ds-icon-primary-cyan-blue)" /><stop offset="100%" stopColor="var(--ds-text-link)" /></linearGradient></defs>
              <Tooltip as="g" content={`Snapshot ${activeConversionSnapshot + 1}: ${CONVERSION_SNAPSHOTS[activeConversionSnapshot]}% conversion · Sample data`} placement="bottom" followCursor>
                {/* One continuous hover surface keeps the tooltip mounted between bars. */}
                <path d="M 0,0 H 300 V 30 H 0 Z" fill="transparent" pointerEvents="all" />
                {CONVERSION_SNAPSHOTS.map((value, index) => (
                  <rect key={index} className="crm-minimal__chart-hit" {...drilldownProps({ kind: 'conversion', label: `Snapshot ${index + 1}`, value })} aria-label={`Snapshot ${index + 1}: ${value}% conversion`} x={index * 300 / CONVERSION_SNAPSHOTS.length + 1} y={30 - value} width={300 / CONVERSION_SNAPSHOTS.length - 2} height={value} fill={`url(#${id}-conversion-fill)`} />
                ))}
              </Tooltip>
            </svg>
          </>}</div>
        </dl>
      </section>
      <div className={`crm-minimal__charts${chartOrder[0] === 1 ? ' crm-minimal__charts--donut-first' : ''}`} style={{ order: sections.indexOf('charts') + 1 }} data-dashboard-section="charts">
        {chartOrder.map(index => {
          const sourceChart = SALES_CHARTS[index];
          const chart = index === 1 ? { ...sourceChart, series: PIPELINE_STAGES } : sourceChart;
          const monthX = (point: number) => 52 + point * (revenueWidth - 72) / (chart.series.length - 1);
          const total = chart.series.reduce((sum, item) => sum + item.value, 0);
          const summarySeries = index === 0 ? REVENUE_LINES[0].series : chart.series;
          const latest = summarySeries[summarySeries.length - 1];
          const previous = summarySeries[summarySeries.length - 2];
          const change = latest.value - previous.value;
          const direction = change >= 0 ? 'up' : 'down';
          let offset = 0;
          return <section className="crm-minimal__chart" key={chart.title} aria-labelledby={`${id}-chart-${index}`}>
            <div className="crm-minimal__section-heading"><h2 id={`${id}-chart-${index}`}>{chart.title}</h2></div>
            {empty ? <p className="crm-minimal__empty">{index === 0 ? 'Close your first deal to see revenue trends.' : 'Add opportunities to see your pipeline by stage.'}</p> : <>
              {chart.kind === 'line' ? <>
                <div className="crm-minimal__chart-summary"><strong className={`crm-minimal__trend--${direction}`}>{latest.display}</strong><p><span className={`crm-minimal__trend crm-minimal__trend--${direction}`}><span aria-hidden="true">{change >= 0 ? '↗' : '↘'}</span> {Math.abs(change / previous.value * 100).toFixed(1)}% · {Math.abs(change * 1000).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</span> vs. {previous.label}</p></div>
                <svg ref={revenueRef} className="crm-minimal__line" viewBox={`0 20 ${revenueWidth} ${Math.max(180, revenueHeight) - 20}`} preserveAspectRatio="xMidYMin meet" role="img" aria-label={`${chart.title}. ${REVENUE_LINES.filter(line => !hiddenRevenueSeries.includes(line.label)).map(line => `${line.label}: ${line.series.map(item => `${item.label}: ${item.display}`).join('; ')}`).join('. ')}`}>
                  {[0, 50, 100, 150].map(value => {
                    const y = revenueY(value);
                    return <g key={value}>
                      <line x1="52" x2={revenueWidth - 20} y1={y} y2={y} className="crm-minimal__gridline" />
                      <text className="crm-minimal__svg-label" x="44" y={y + 4} textAnchor="end">{value}k</text>
                    </g>;
                  })}
                  <line x1="52" x2="52" y1="30" y2={revenueBottom} className="crm-minimal__y-axis" />
                  {REVENUE_LINES.filter(line => !hiddenRevenueSeries.includes(line.label)).map(line => <g key={line.label} className={`crm-minimal__revenue--${line.color}`} data-revenue-series={line.label}>
                    <defs><linearGradient id={`${id}-revenue-fill-${line.color}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity="0.25" /><stop offset="100%" stopColor="currentColor" stopOpacity="0.02" /></linearGradient></defs>
                    <path d={`${revenueCurve(line.series.map((item, point) => ({ x: monthX(point), y: revenueY(item.value) })))} L ${monthX(line.series.length - 1)},${revenueBottom} L ${monthX(0)},${revenueBottom} Z`} fill={`url(#${id}-revenue-fill-${line.color})`} pointerEvents="none" />
                    <path d={revenueCurve(line.series.map((item, point) => ({ x: monthX(point), y: revenueY(item.value) })))} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    {line.series.map((item, point) => <Tooltip as="g" key={item.label} content={`${line.label} · ${item.label}: ${item.display}`} placement="bottom"><circle className="crm-minimal__chart-hit" {...drilldownProps({ kind: 'revenue', label: item.label, value: item.value, series: line.label })} aria-label={`${line.label} · ${item.label}: ${item.display}`} data-month={item.label} cx={monthX(point)} cy={revenueY(item.value)} r="3" fill="currentColor" stroke="transparent" strokeWidth="8" /></Tooltip>)}
                  </g>)}
                  {chart.series.map((item, point) => <text className="crm-minimal__line-month" key={item.label} x={monthX(point)} y={revenueBottom + 26} textAnchor="middle">{item.label.slice(0, 3)}</text>)}
                </svg>
                <ul className="crm-minimal__line-legend" aria-label="Revenue series">{REVENUE_LINES.map(line => <li key={line.label}><button type="button" aria-pressed={!hiddenRevenueSeries.includes(line.label)} onClick={() => setHiddenRevenueSeries(hidden => hidden.includes(line.label) ? hidden.filter(label => label !== line.label) : [...hidden, line.label])}><span className={`crm-minimal__revenue--${line.color}`} aria-hidden="true" />{line.label}</button></li>)}</ul>
              </> : <div className="crm-minimal__donut-layout">
                <svg className="crm-minimal__donut" viewBox="8 8 104 104" role="img" aria-label={`${chart.title}. ${chart.series.map(item => `${item.label}: ${item.display}`).join('; ')}`}>
                  {chart.series.map((item, segment) => {
                    const start = offset;
                    const share = item.value / total * 100;
                    offset += share;
                    return <Tooltip as="g" key={item.label} content={`${item.label}: ${item.display} (${share.toFixed(1)}%)`} placement="bottom" followCursor><circle {...drilldownProps({ kind: 'pipeline', label: item.label, value: item.value })} aria-label={`${item.label}: ${item.display}, ${share.toFixed(1)}%`} cx="60" cy="60" r="44" fill="none" pathLength="100" strokeWidth="14" strokeDasharray={`${share} ${100 - share}`} strokeDashoffset={-start} transform="rotate(-90 60 60)" className={`crm-minimal__chart-hit crm-minimal__segment--${segment}`} /></Tooltip>;
                  })}
                  {chart.series.map((item, segment) => {
                    const start = chart.series.slice(0, segment).reduce((sum, stage) => sum + stage.value, 0);
                    const angle = start / total * Math.PI * 2 - Math.PI / 2;
                    return <line key={item.label} className="crm-minimal__donut-separator" x1={60 + 37 * Math.cos(angle)} y1={60 + 37 * Math.sin(angle)} x2={60 + 51 * Math.cos(angle)} y2={60 + 51 * Math.sin(angle)} />;
                  })}
                  <text x="60" y="60" textAnchor="middle" dominantBaseline="central" className="crm-minimal__donut-total">${total.toFixed(1)}K</text>
                </svg>
                <ul className="crm-minimal__legend">{chart.series.map((item, segment) => <li key={item.label}><span className={`crm-minimal__segment--${segment}`} aria-hidden="true">●</span><div>{item.label}<strong>{item.display} <span className="crm-minimal__caption">· {(item.value / total * 100).toFixed(1)}%</span></strong></div></li>)}</ul>
              </div>}
            </>}
          </section>;
        })}
      </div>
      <div className="crm-minimal__charts crm-minimal__charts--company" style={{ order: sections.indexOf('company') + 1 }} data-dashboard-section="company">
        <section className="crm-minimal__chart crm-minimal__company-target" aria-labelledby={`${id}-company-title`}>
          <div className="crm-minimal__section-heading"><h2 id={`${id}-company-title`}>Company Target</h2></div>
          {empty ? <p className="crm-minimal__empty">Set a company target to track achievement.</p> : <>
            <div className="crm-minimal__target-summary">
              <span>Actual: <strong>{COMPANY_TARGET.achieved}</strong></span>
              <span className="crm-minimal__target-divider" aria-hidden="true">|</span>
              <span>Target: <strong>{COMPANY_TARGET.target}</strong></span>
            </div>
            <svg className="crm-minimal__target" viewBox="0 0 640 180" role="img" aria-label={`Company Target. All branches: ${COMPANY_TARGET.achieved} shipments achieved. Target: ${COMPANY_TARGET.target}.`}>
              {Array.from({ length: 5 }, (_, tick) => tick * COMPANY_TARGET.axisMax / 4).map(value => <g key={value}><line className="crm-minimal__gridline" x1={100 + value / COMPANY_TARGET.axisMax * 500} x2={100 + value / COMPANY_TARGET.axisMax * 500} y1="30" y2="120" /><text className="crm-minimal__svg-label" x={100 + value / COMPANY_TARGET.axisMax * 500} y="140" textAnchor="middle">{value}</text></g>)}
              <text className="crm-minimal__svg-label" x="88" y="79" textAnchor="end">All branches</text>
              <rect className="crm-minimal__target-track" x="100" y="40" width="500" height="70" />
              <Tooltip as="g" content={`All branches: ${COMPANY_TARGET.achieved.toLocaleString('en-US')} shipments · Target: ${COMPANY_TARGET.target}`} placement="bottom"><rect {...drilldownProps({ kind: 'shipments', label: 'All branches', value: COMPANY_TARGET.achieved })} aria-label={`Achieved: ${COMPANY_TARGET.achieved} shipments. Target: ${COMPANY_TARGET.target}`} className="crm-minimal__target-fill crm-minimal__chart-hit" x="100" y="49" width={COMPANY_TARGET.achieved / COMPANY_TARGET.axisMax * 500} height="52" /></Tooltip>
              <line className="crm-minimal__target-marker" x1={100 + COMPANY_TARGET.target / COMPANY_TARGET.axisMax * 500} x2={100 + COMPANY_TARGET.target / COMPANY_TARGET.axisMax * 500} y1="40" y2="110" />
              <text className="crm-minimal__svg-value" x={100 + COMPANY_TARGET.achieved / COMPANY_TARGET.axisMax * 250} y="80" textAnchor="middle">{COMPANY_TARGET.achieved}</text>
              <text className="crm-minimal__svg-label" x="350" y="170" textAnchor="middle">Shipment Count</text>
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
      <div className="crm-minimal__industry-builder" style={{ order: sections.indexOf('industry') + 1 }} data-dashboard-section="industry">
      <section className="crm-minimal__chart crm-minimal__industries" aria-labelledby={`${id}-industries-title`}>
        <div className="crm-minimal__section-heading"><h2 id={`${id}-industries-title`}>Accounts by Industry</h2></div>
        {empty ? <p className="crm-minimal__empty">Add accounts to see your industry breakdown.</p> : <div className="crm-minimal__industry-scroll" tabIndex={0} role="group" aria-label="Industry chart, scroll horizontally on small screens">
          <svg ref={industryRef} className="crm-minimal__columns" viewBox={`0 0 ${industryWidth} 300`} role="img" aria-label={`Accounts by Industry. ${ACCOUNTS_BY_INDUSTRY.map(item => `${item.industry}: ${item.count}`).join('; ')}. Total: ${ACCOUNTS_BY_INDUSTRY.reduce((total, item) => total + item.count, 0)} accounts.`}>
            {Array.from({ length: 5 }, (_, tick) => tick * industryMax / 4).map(value => <g key={value}><line className="crm-minimal__gridline" x1="50" x2={industryWidth - 10} y1={240 - value / industryMax * 208} y2={240 - value / industryMax * 208} /><text className="crm-minimal__svg-label" x="38" y={245 - value / industryMax * 208} textAnchor="end">{value}</text></g>)}
            {ACCOUNTS_BY_INDUSTRY.map((item, index) => <g key={item.industry}>
              <Tooltip as="g" content={`${item.industry}: ${item.count} accounts`} placement="bottom"><rect {...drilldownProps({ kind: 'industry', label: item.industry, value: item.count })} aria-label={`${item.industry}: ${item.count} accounts`} data-industry={item.industry} className="crm-minimal__column crm-minimal__chart-hit" x={50 + index * industryStep + industryStep * 0.23} y={240 - item.count / industryMax * 208} width={industryStep * 0.54} height={item.count / industryMax * 208} /></Tooltip>
              <text className="crm-minimal__svg-value" x={50 + (index + 0.5) * industryStep} y={230 - item.count / industryMax * 208} textAnchor="middle">{item.count}</text>
              <foreignObject x={50 + index * industryStep + 2.5} y="250" width={industryStep - 5} height="50">
                <div className="crm-minimal__industry-label">{item.industry}</div>
              </foreignObject>
            </g>)}
          </svg>
        </div>}
      </section>
      <section className="crm-minimal__builder" aria-labelledby={`${id}-builder-title`}>
        <div className="crm-minimal__builder-intro">
          <span className="crm-minimal__builder-mark"><Icon name="WmsZia" size={24} /></span>
          <h2 id={`${id}-builder-title`}>Plan <span>Your Next Shipment.</span></h2>
          <p>How can we help your cargo move today?</p>
        </div>
        <form className="crm-minimal__builder-form" onSubmit={event => { event.preventDefault(); if (builderPrompt.trim()) { setBuilderDiscuss(false); setBuilderPreview(builderPrompt.trim()); } }}>
          <span className="crm-minimal__builder-sparkle" aria-hidden="true" />
          <div ref={builderInput}><Textarea aria-label="Describe your shipment plan" placeholder="Ask about freight quotes, trade lanes, or shipment plans…" width="100%" layout="vertical" minHeight={48} value={builderPrompt} maxLength={2000} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBuilderPrompt(event.target.value)} /></div>
          <div className="crm-minimal__builder-toolbar">
            <div className="crm-minimal__builder-tools" role="group" aria-label="Shipment planning tools">
              <Button type="button" variant="link-default" disabled aria-label="Attach file (unavailable in local demo)" title="Attachments are unavailable in this local demo"><Icon name="RtUnlink" size={18} /></Button>
              <Button type="button" variant="link-default" aria-label="Edit shipment plan" title="Edit shipment plan" onClick={() => builderInput.current?.querySelector('textarea')?.focus()}><Icon name="Edit" size={18} /></Button>
            </div>
            <div className="crm-minimal__builder-tools" role="group" aria-label="Preview controls">
              <Button type="button" variant="link-default" disabled aria-label="Voice input (unavailable in local demo)" title="Voice input is unavailable in this local demo"><Icon name="WmsAnnouncements" size={20} /></Button>
              <div className="crm-minimal__builder-send-group">
                <div className="crm-minimal__builder-send-extras">
                  <Button type="button" variant="link-default" aria-label="Discuss shipment plan first" title="Let's discuss first · Local demo" disabled={!builderPrompt.trim()} onClick={() => { setBuilderDiscuss(true); setBuilderPreview(builderPrompt.trim()); }}><Icon name="WmsChat" size={16} /></Button>
                </div>
                <span className="crm-minimal__builder-send"><Button type="submit" size="sm" aria-label="Preview shipment plan" title="Preview shipment plan · Local demo" disabled={!builderPrompt.trim()}>
                  <svg viewBox="0 0 26 26" width="26" height="26" fill="none" aria-hidden="true">
                    <rect width="26" height="26" rx="13" fill="var(--crm-minimal-accent)" />
                    <path d="M9.5 11.69L13 8.19L16.5 11.69M13 8.19V17.81" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button></span>
              </div>
            </div>
          </div>
        </form>
        {builderPreview !== null && <Modal isOpen type="alert" variant="info" title={builderDiscuss ? 'Discuss shipment plan · Local demo' : 'Shipment plan preview · Local demo'} description={`${builderPreview}\n\n${builderDiscuss ? 'Consider the intended users, required data, and desired outcome before building. ' : ''}This preview only captures your shipment plan. No bookings are created and no data is sent.`} confirmLabel="Back to shipment plan" onSave={() => { setBuilderPreview(null); builderInput.current?.querySelector('textarea')?.focus(); }} onClose={() => { setBuilderPreview(null); builderInput.current?.querySelector('textarea')?.focus(); }} />}
      </section>
      </div>
      <div className="crm-minimal__grid" style={{ order: sections.indexOf('work') + 1 }} data-dashboard-section="work">
        <section id={`${id}-deals`} aria-labelledby={`${id}-deals-title`} className="crm-minimal__deals">
          <div className="crm-minimal__section-heading"><h2 id={`${id}-deals-title`}>Open deals</h2></div>
          <div className="crm-minimal__table"><SetupTable columns={COLUMNS} rows={rows} selectable={false} width="100%" maxHeight="var(--crm-minimal-list-height)" emptyMessage="No open deals yet. Your opportunities will appear here." /></div>
        </section>
        <aside className="crm-minimal__daily" aria-label="Daily workspace">
          <section id={`${id}-today`} aria-labelledby={`${id}-tasks-title`}>
            <div className="crm-minimal__section-heading"><h2 id={`${id}-tasks-title`}>Today and OverDue Tasks</h2></div>
            <ul className="crm-minimal__list crm-minimal__today-list" tabIndex={tasks.length ? 0 : undefined} aria-label="Today's tasks">{tasks.map(task => <li key={task.id} data-completed={task.completed || undefined}><Checkbox label={task.title} checked={task.completed} onChange={() => setTasks(current => current.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item))} /></li>)}</ul>
            {empty && <p className="crm-minimal__empty" role="status">Nothing scheduled. Enjoy a fresh start.</p>}
          </section>
        </aside>
      </div>
    </div>
    {drilldown && <MinimalDrilldown selection={drilldown} view={homeView} onClose={() => setDrilldown(null)} />}
  </div></CrmHomepage>;
}

export const Default: Story = { render: () => <MinimalPage /> };

export const FormationChecks: Story = {
  tags: ['!dev', '!autodocs'],
  render: () => <MinimalPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const page = canvasElement.querySelector<HTMLElement>('.crm-minimal')!;
    const animations = () => page.getAnimations({ subtree: true }).filter(animation => animation.id === 'crm-minimal-formation');
    await userEvent.click(canvas.getByRole('button', { name: 'Classic Sales View' }));
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', { name: 'Freight Pipeline Center' }));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await expect(animations()).toHaveLength(0);
      return;
    }
    await waitFor(() => expect(animations().length).toBeGreaterThan(10));
    const revenue = page.querySelector<SVGSVGElement>('.crm-minimal__line')!;
    const height = revenue.getBoundingClientRect().height;
    animations().forEach(animation => animation.finish());
    await expect(revenue.getBoundingClientRect().height).toBe(height);
    await expect(page.querySelectorAll('[data-revenue-series]')).toHaveLength(2);
    const industry = page.querySelector<SVGRectElement>('[data-industry]')!;
    await expect(industry.getBoundingClientRect().height).toBeGreaterThan(0);
    const legend = within(canvas.getByRole('list', { name: 'Revenue series' }));
    await userEvent.click(legend.getByRole('button', { name: 'Forecast' }));
    await expect(page.querySelector('[data-revenue-series="Forecast"]')).toBeNull();
    await expect(animations()).toHaveLength(0);
    await userEvent.click(legend.getByRole('button', { name: 'Forecast' }));
    await expect(page.querySelectorAll('[data-revenue-series]')).toHaveLength(2);
    await expect(animations()).toHaveLength(0);
  },
};

export const InteractionChecks: Story = {
  tags: ['!dev', '!autodocs'],
  render: () => <MinimalPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Welcome Patricia Boyle' })).toBeVisible();
    const builder = within(canvas.getByRole('region', { name: 'Plan Your Next Shipment.' }));
    await expect(builder.queryByRole('heading', { name: 'Suggestions' })).not.toBeInTheDocument();
    await expect(builder.queryByRole('list')).not.toBeInTheDocument();
    const prompt = builder.getByRole('textbox', { name: 'Describe your shipment plan' });
    await expect(builder.getByRole('button', { name: 'Attach file (unavailable in local demo)' })).toBeDisabled();
    await expect(builder.getByRole('button', { name: 'Voice input (unavailable in local demo)' })).toBeDisabled();
    await userEvent.click(builder.getByRole('button', { name: 'Edit shipment plan' }));
    await expect(prompt).toHaveFocus();
    await expect(builder.getByRole('button', { name: 'Preview shipment plan' })).toBeDisabled();
    await userEvent.type(prompt, 'Plan weekly ocean freight capacity for Singapore to Rotterdam.');
    await userEvent.click(builder.getByRole('button', { name: 'Preview shipment plan' }));
    const preview = within(canvasElement.ownerDocument.body).getByRole('alertdialog', { name: 'Shipment plan preview · Local demo' });
    await expect(preview).toHaveTextContent('No bookings are created');
    await userEvent.click(within(preview).getByRole('button', { name: 'Back to shipment plan' }));
    await expect(prompt).toHaveValue('Plan weekly ocean freight capacity for Singapore to Rotterdam.');
    builder.getByRole('button', { name: 'Preview shipment plan' }).focus();
    await userEvent.click(await builder.findByRole('button', { name: 'Discuss shipment plan first' }));
    const discussion = within(canvasElement.ownerDocument.body).getByRole('alertdialog', { name: 'Discuss shipment plan · Local demo' });
    await expect(discussion).toHaveTextContent('Consider the intended users');
    await userEvent.click(within(discussion).getByRole('button', { name: 'Back to shipment plan' }));
    await expect(prompt).toHaveFocus();
    await userEvent.clear(prompt);
    await expect(builder.getByRole('button', { name: 'Preview shipment plan' })).toBeDisabled();
    (prompt as HTMLTextAreaElement).blur();
    await expect(canvas.queryByText('Friday, June 19, 2026')).not.toBeInTheDocument();
    await expect(canvas.queryByText('A little clarity for your next move.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Reporting period')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: 'All Territories' })).not.toBeInTheDocument();
    const overview = within(canvas.getByRole('region', { name: 'Sales overview' }));
    await expect(overview.getAllByRole('term')).toHaveLength(4);
    await expect(canvas.queryByText('Revenue goal')).not.toBeInTheDocument();
    const miniArea = overview.getByRole('img', { name: 'Open pipeline sample trend across 15 snapshots' });
    await expect(miniArea).toBeVisible();
    await expect(miniArea.querySelectorAll('path')).toHaveLength(2);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniArea).position).toBe('absolute');
    await expect(overview.getByText('Conversion rate')).toBeVisible();
    const miniColumns = overview.getByRole('img', { name: 'Conversion rate sample trend across 45 snapshots' });
    await expect(miniColumns).toBeVisible();
    await expect(miniColumns.querySelectorAll('rect')).toHaveLength(45);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniColumns).position).toBe('absolute');
    const conversionBar = miniColumns.querySelector<SVGRectElement>('rect')!;
    const conversionBounds = miniColumns.getBoundingClientRect();
    await userEvent.pointer({ target: conversionBar, coords: { clientX: conversionBounds.left + conversionBounds.width / (CONVERSION_SNAPSHOTS.length * 2), clientY: conversionBounds.bottom - 2 } });
    const conversionTooltip = within(canvasElement.ownerDocument.body).getByRole('tooltip');
    await expect(conversionTooltip).toHaveTextContent('Snapshot 1: 18% conversion');
    const conversionSurface = miniColumns.querySelector<SVGPathElement>('path')!;
    for (const position of [0.03, 0.05, 0.5, 0.99]) {
      await userEvent.pointer({ target: conversionSurface, coords: { clientX: conversionBounds.left + conversionBounds.width * position, clientY: conversionBounds.top + 1 } });
      await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toBe(conversionTooltip);
      const snapshot = Math.floor(position * CONVERSION_SNAPSHOTS.length);
      await expect(conversionTooltip).toHaveTextContent(`Snapshot ${snapshot + 1}: ${CONVERSION_SNAPSHOTS[snapshot]}% conversion`);
    }
    await userEvent.unhover(conversionSurface);
    await expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).not.toBeInTheDocument();
    await expect(overview.getByText('25%', { exact: true })).toBeVisible();
    await expect(overview.getByText('$84,500')).toBeVisible();
    const trend = within(canvas.getByRole('region', { name: 'Revenue trend' }));
    const revenueChart = trend.getByRole('img', { name: /Revenue trend/ });
    await expect(revenueChart).toBeVisible();
    await expect(revenueChart.querySelectorAll('path')).toHaveLength(4);
    const styles = canvasElement.ownerDocument.defaultView!;
    const blueSeries = revenueChart.querySelector<SVGGElement>('.crm-minimal__revenue--blue')!;
    const forecastSeries = revenueChart.querySelector<SVGGElement>('.crm-minimal__revenue--pink')!;
    await expect(styles.getComputedStyle(miniColumns).color).not.toBe(styles.getComputedStyle(blueSeries).color);
    await expect(styles.getComputedStyle(forecastSeries).color).not.toBe(styles.getComputedStyle(blueSeries).color);
    await expect(miniColumns.querySelector('rect')?.getAttribute('fill')).toMatch(/^url\(#.+-conversion-fill\)$/);
    await expect(styles.getComputedStyle(canvas.getByRole('region', { name: 'Plan Your Next Shipment.' })).backgroundImage).toContain('radial-gradient');
    await expect(styles.getComputedStyle(prompt.closest('form')!).backgroundImage).toContain('linear-gradient');
    await expect(styles.getComputedStyle(trend.getByRole('heading', { name: 'Revenue trend' })).fontSize).toBe('16px');
    await expect(styles.getComputedStyle(trend.getByRole('heading', { name: 'Revenue trend' })).fontWeight).toBe('500');
    await expect(revenueChart.querySelector('[data-revenue-series="Target"]')).toBeNull();
    await expect(trend.queryByText('Target', { exact: true })).not.toBeInTheDocument();
    await expect(revenueChart.querySelector('.crm-minimal__y-axis')).toBeInTheDocument();
    for (const label of ['0k', '50k', '100k', '150k']) {
      await expect(within(revenueChart).getByText(label, { exact: true })).toBeVisible();
    }
    await expect(revenueChart.querySelectorAll('.crm-minimal__svg-label')).toHaveLength(4);
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
      await expect(revenueChart.querySelector(`[data-revenue-area="${line.label}"]`)).toBeNull();
      const curve = series.querySelector('path[fill="none"]')!;
      await expect(curve).toHaveAttribute('fill', 'none');
      await expect(curve.getAttribute('d')?.match(/C /g)).toHaveLength(5);
      const dots = series.querySelectorAll('circle');
      await expect(dots).toHaveLength(6);
      dots.forEach((dot, index) => expect(dot.getAttribute('cx')).toBe(monthLabels[index].getAttribute('x')));
    }
    // KPI mini charts are hover-only and prevent click activation and bubbling.
    const conversionChart = overview.getByRole('img', { name: 'Conversion rate sample trend across 45 snapshots' });
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
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Forecast · January: $85,000');
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
    await expect(await within(canvasElement.ownerDocument.body).findByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    await userEvent.keyboard('{Escape}');
    pipelineSegment.blur();
    await expect(pipeline.getByText('$115.5K')).toBeVisible();
    await expect(trend.getByText(/77.1% · \$27,000/)).toHaveClass('crm-minimal__trend--down');
    await expect(trend.getByText('$8,000', { exact: true })).toBeVisible();
    const revenueValues = REVENUE_LINES.flatMap(line => line.series.map(item => item.value));
    await expect(Math.max(...revenueValues)).toBe(125);
    await expect(Math.min(...revenueValues)).toBe(1);
    await expect(overview.getByText('18.2%')).toHaveClass('crm-minimal__trend--up');
    await expect(overview.getByText('3 deals')).toHaveClass('crm-minimal__trend--up');
    const company = within(canvas.getByRole('region', { name: 'Company Target' }));
    await expect(company.getByRole('img', { name: /3210 shipments achieved.*Target: 3000/ })).toBeVisible();
    await expect(company.getByText('3210', { selector: 'strong' })).toBeVisible();
    await expect(company.getByText('3000', { selector: 'strong' })).toBeVisible();
    await expect(company.queryByText(/% of target achieved/)).not.toBeInTheDocument();
    const achievedBar = canvas.getByRole('region', { name: 'Company Target' }).querySelector<SVGRectElement>('.crm-minimal__target-fill')!;
    await expect(Number(achievedBar.getAttribute('width'))).toBe(3210 / 4000 * 500);
    await userEvent.hover(achievedBar);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('3,210 shipments · Target: 3000');
    await userEvent.unhover(achievedBar);
    const appointments = within(canvas.getByRole('region', { name: "My Today's Appointments" }));
    await expect(appointments.getAllByRole('listitem')).toHaveLength(TODAYS_APPOINTMENTS.length);
    await expect(canvas.getAllByRole('region', { name: "My Today's Appointments" })).toHaveLength(1);
    const appointmentList = appointments.getByRole('list');
    await expect(appointmentList.scrollHeight).toBeGreaterThan(appointmentList.clientHeight);
    for (const appointment of TODAYS_APPOINTMENTS) {
      const row = appointments.getByText(appointment.title).closest('li')!;
      row.scrollIntoView({ block: 'nearest' });
      await expect(appointments.getByText(appointment.title)).toBeVisible();
      const photo = within(row).getByRole('img', { name: appointment.contact });
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
    await waitFor(() => expect(within(appointmentDialog).getByText('Ocean freight discovery')).toBeVisible());
    await expect(within(appointmentDialog).getByText(/Atlas Freight · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible();
    await userEvent.click(within(appointmentDialog).getByRole('button', { name: 'Close', exact: true }));
    const industries = canvas.getByRole('region', { name: 'Accounts by Industry' });
    await expect(industries.querySelectorAll('rect[data-industry]')).toHaveLength(10);
    const industryColumn = industries.querySelector<SVGRectElement>('rect[data-industry="Electronics"]')!;
    const documentBody = within(canvasElement.ownerDocument.body);
    await userEvent.hover(industryColumn);
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Electronics: 640 accounts');
    await userEvent.unhover(industryColumn);
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.focus();
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Electronics: 640 accounts');
    await userEvent.keyboard('{Escape}');
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.blur();
    await expect(within(industries).getByRole('img', { name: /Electronics: 640.*Consumer Goods: 126.*3191 accounts/ })).toBeVisible();
    const period = canvas.getByRole('button', { name: 'Classic Sales View' });
    await userEvent.click(period);
    const viewMenu = within(canvasElement.ownerDocument.body);
    await expect(viewMenu.getAllByRole('option')).toHaveLength(SALES_HOME_VIEWS.length);
    const menuBounds = viewMenu.getByRole('listbox').getBoundingClientRect();
    await expect(menuBounds.right).toBeLessThanOrEqual(window.innerWidth);
    await expect(menuBounds.left).toBeGreaterThanOrEqual(0);
    await expect(viewMenu.queryByText('Reporting period')).not.toBeInTheDocument();
    await expect(viewMenu.queryByRole('option', { name: 'This quarter' })).not.toBeInTheDocument();
    await expect(SALES_HOME_VIEWS.filter(view => view.group === 'Sales homepages').length).toBeGreaterThan(10);
    await userEvent.click(viewMenu.getByRole('option', { name: 'Freight Pipeline Center' }));
    await expect(canvas.getByRole('button', { name: 'Freight Pipeline Center' })).toBeVisible();
    await expect(overview.getByText('$84,500')).toBeVisible();
    for (const view of SALES_HOME_VIEWS.filter(view => view.value !== 'classic')) {
      if (view.value !== 'pipeline') {
        await userEvent.click(canvas.getByRole('button', { name: 'Freight Pipeline Center' }));
        await userEvent.click(viewMenu.getByRole('option', { name: view.label }));
      }
      const dashboard = getSalesDashboard(view.value);
      const revenue = canvas.getByRole('region', { name: 'Revenue trend' });
      await expect(within(revenue).getByText(dashboard.REVENUE_LINES[0].series[5].display, { exact: true })).toBeVisible();
      await expect(canvasElement.querySelector('[data-dashboard-section="industry"]')).toHaveStyle({ order: String(dashboard.sections.indexOf('industry') + 1) });
      const chartPanels = canvasElement.querySelectorAll('[data-dashboard-section="charts"] > section');
      await expect(within(chartPanels[0] as HTMLElement).getByRole('heading', { name: dashboard.chartOrder[0] === 1 ? 'Pipeline by stage' : 'Revenue trend' })).toBeVisible();
      const industryChart = within(canvas.getByRole('region', { name: 'Accounts by Industry' })).getByRole('img');
      await expect(industryChart).toHaveAccessibleName(expect.stringContaining(`Electronics: ${dashboard.ACCOUNTS_BY_INDUSTRY[0].count}`));
      if (view.value !== 'pipeline') {
        await userEvent.click(canvas.getByRole('button', { name: view.label }));
        await userEvent.click(viewMenu.getByRole('option', { name: 'Freight Pipeline Center' }));
      }
    }
    await userEvent.click(canvas.getByRole('button', { name: 'Freight Pipeline Center' }));
    await expect(viewMenu.queryByText('Reporting period')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    const dealsPanel = canvas.getByRole('region', { name: 'Open deals' });
    const dealsBody = dealsPanel.querySelector<HTMLElement>('.table-body-wrap')!;
    await expect(within(dealsBody).getAllByRole('row')).toHaveLength(CARGO_DEALS.length + ADDITIONAL_OPEN_DEALS.length);
    await expect(dealsBody.scrollHeight).toBeGreaterThan(dealsBody.clientHeight);
    dealsBody.scrollTop = dealsBody.scrollHeight;
    await expect(dealsBody.scrollTop).toBeGreaterThan(0);
    dealsBody.scrollTop = 0;
    const today = within(canvas.getByRole('region', { name: 'Today and OverDue Tasks' }));
    const todayList = today.getByRole('list', { name: "Today's tasks" });
    const taskCheckboxes = today.getAllByRole('checkbox');
    await expect(taskCheckboxes).toHaveLength(CARGO_INITIAL_TASKS.length + TODAY_TASKS.length);
    for (const [index, checkbox] of taskCheckboxes.entries()) {
      if ([0, 2, 3].includes(index)) await expect(checkbox).toBeChecked();
      else await expect(checkbox).not.toBeChecked();
    }
    await expect(todayList).toHaveAttribute('tabindex', '0');
    await expect(todayList.scrollHeight).toBeGreaterThan(todayList.clientHeight);
    const lastTask = today.getAllByRole('checkbox').at(-1)!;
    lastTask.scrollIntoView({ block: 'nearest' });
    await expect(todayList.scrollTop).toBeGreaterThan(0);
    for (const checkbox of today.getAllByRole('checkbox', { checked: false })) await userEvent.click(checkbox);
    for (const checkbox of today.getAllByRole('checkbox')) await expect(checkbox).toBeChecked();
    await expect(today.queryByRole('status')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', { name: 'Review follow-up' })).not.toBeInTheDocument();
    await expect(canvas.queryByText(/\d+ opportunities/)).not.toBeInTheDocument();
    await expect(canvas.getByText('Meridian Health', { exact: true })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Conversations' })).not.toBeInTheDocument();
    await userEvent.click(within(canvasElement.querySelector<HTMLElement>('.crm-minimal__home-controls')!).getByRole('button', { name: 'More options' }));
    for (const name of ['Edit Homepage', 'Reorder', 'View Fullscreen']) await expect(viewMenu.getByRole('option', { name })).toBeVisible();
    const originalSections = Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-dashboard-section]'), section => section.style.order);
    for (const action of ['Edit Homepage', 'Reorder']) {
      if (action === 'Reorder') await userEvent.click(within(canvasElement.querySelector<HTMLElement>('.crm-minimal__home-controls')!).getByRole('button', { name: 'More options' }));
      const option = viewMenu.getByRole('option', { name: action });
      const labelStyle = canvasElement.ownerDocument.defaultView!.getComputedStyle(option.querySelector('.dropdown-option-label')!);
      await expect(labelStyle.paddingLeft).toBe(labelStyle.paddingRight);
      await userEvent.click(option);
      await expect(viewMenu.queryByRole('dialog')).not.toBeInTheDocument();
      await expect(viewMenu.queryByRole('listbox')).not.toBeInTheDocument();
      await expect(Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-dashboard-section]'), section => section.style.order)).toEqual(originalSections);
    }
  },
};
export const EmptyState: Story = {
  render: () => <MinimalPage empty />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No open deals yet. Your opportunities will appear here.')).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Conversations' })).not.toBeInTheDocument();
    await expect(canvas.queryByText('Revenue goal')).not.toBeInTheDocument();
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

export const RevenueLegend: Story = {
  render: () => <MinimalPage />,
  play: async ({ canvasElement }) => {
    const legend = within(within(canvasElement).getByRole('list', { name: 'Revenue series' }));
    const closed = legend.getByRole('button', { name: 'Closed revenue' });
    const forecast = legend.getByRole('button', { name: 'Forecast' });
    const series = () => canvasElement.querySelectorAll('[data-revenue-series]');
    await expect(series()).toHaveLength(2);
    await userEvent.click(closed);
    await expect(closed).toHaveAttribute('aria-pressed', 'false');
    await expect(closed).toHaveStyle({ opacity: '0.4' });
    await expect(series()).toHaveLength(1);
    await expect(series()[0]).toHaveAttribute('data-revenue-series', 'Forecast');
    await userEvent.click(forecast);
    await expect(series()).toHaveLength(0);
    closed.focus();
    await userEvent.keyboard('{Enter}');
    await expect(closed).toHaveAttribute('aria-pressed', 'true');
    await expect(series()).toHaveLength(1);
    forecast.focus();
    await userEvent.keyboard(' ');
    await expect(forecast).toHaveAttribute('aria-pressed', 'true');
    await expect(series()).toHaveLength(2);
  },
};

export const ChartDrilldown: Story = {
  tags: ['test-only'],
  render: () => <MinimalPage />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const page = canvasElement.querySelector('.crm-minimal')!;
    const marks = [
      ['[data-revenue-series="Closed revenue"] circle', 'Revenue trend'],
      ['[data-revenue-series="Forecast"] circle', 'Revenue trend'],
      ['.crm-minimal__donut .crm-minimal__chart-hit', 'Pipeline by stage'],
      ['[data-industry="Electronics"]', 'Accounts by Industry'],
      ['.crm-minimal__target-fill', 'Company Target'],
      ['[data-snapshot="0"]', 'Pipeline by stage'],
      ['.crm-minimal__kpi-columns rect', 'Conversion rate'],
    ];
    for (const [selector, title] of marks) {
      const mark = page.querySelector<SVGElement>(selector)!;
      mark.focus();
      await userEvent.keyboard('{Enter}');
      const dialog = await body.findByRole('dialog', { name: title });
      await waitFor(() => expect(within(dialog).getByRole('heading', { name: 'Drilled Down By' })).toBeVisible());
      await expect(within(dialog).getByRole('region', { name: 'Chart records' })).toBeVisible();
      await userEvent.click(within(dialog).getByRole('button', { name: 'Close chart records' }));
      await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
      await expect(mark).toHaveFocus();
    }
  },
};
