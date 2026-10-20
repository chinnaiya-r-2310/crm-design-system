import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { buildRecordsExport } from './Minimal.export';
import type { ExportFormat } from './Minimal.export';
import { formatDrilldownMoney, getDrilldownData } from './Minimal.drilldown';
import type { DrilldownSelection } from './Minimal.drilldown';
import { OpenInNewTab, SourceClose } from '../foundations/icons/Icons';
import './MinimalDrilldown.css';

export function MinimalDrilldown({ selection, view, onClose }: { selection: DrilldownSelection; view: string; onClose: () => void }) {
  const { records, title, criteria, monetary } = useMemo(() => getDrilldownData(selection), [selection]);
  const [page, setPage] = useState(0);
  const [notice, setNotice] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef(document.activeElement);
  useEffect(() => {
    const trigger = triggerRef.current;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 50);
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const dialog = closeRef.current?.closest('[role="dialog"]');
      const controls = Array.from(dialog?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex="0"]') ?? []).filter(el => el.getClientRects().length);
      const first = controls[0]; const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => { window.clearTimeout(timer); document.removeEventListener('keydown', trapFocus); if (trigger instanceof HTMLElement || trigger instanceof SVGElement) trigger.focus(); };
  }, []);
  const pageSize = 25;
  const shown = records.slice(page * pageSize, (page + 1) * pageSize);
  const shareUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('chart-records', JSON.stringify(selection));
    url.searchParams.set('home-view', view);
    return url.toString();
  };
  const exportRecords = (format: ExportFormat) => {
    const rows = [['Record', 'Account', 'Created Time', 'Owner', 'Category', ...(monetary ? ['Amount (USD)'] : [])],
      ...records.map(record => [record.name, record.account, record.date, record.owner, record.category, ...(monetary ? [record.amount] : [])])];
    const { content, mime, extension } = buildRecordsExport(rows, format);
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const link = document.createElement('a');
    link.href = url; link.download = `cargo-${selection.kind}-records.${extension}`; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(`Exported ${records.length} records as ${format === 'excel' ? 'Excel' : 'CSV'}.`);
  };
  return <Modal isOpen className="crm-drilldown" width="calc(100vw - clamp(48px, 13vw, 185px))" title={title} headerStart={<button ref={closeRef} type="button" className="crm-drilldown__close" aria-label="Close chart records" onClick={onClose}><SourceClose width={14} height={14} aria-hidden="true" /></button>} disableAutoFocus onClose={onClose} onSave={onClose} headerActions={<div className="crm-drilldown__actions">
    <Dropdown placeholder="Export As" triggerAriaLabel="Export As" triggerButtonVariant="default" width="auto" value="" options={[{ value: 'excel', label: 'Excel' }, { value: 'csv', label: 'CSV' }]} panelStyle={{ minWidth: 120, width: 'max-content' }} onChange={(value: ExportFormat) => exportRecords(value)} />
    <Button variant="default" onClick={async () => { try { await navigator.clipboard.writeText(shareUrl()); setNotice('Link copied.'); } catch { setNotice('Clipboard is unavailable. Use Open in new tab to access this view.'); } }}>Copy URL</Button>
    <a className="crm-drilldown__open" href={shareUrl()} target="_blank" rel="noopener noreferrer" aria-label="Open records in new tab"><OpenInNewTab aria-hidden="true" /></a>
  </div>}>
    <div className="crm-drilldown__content">
      <section className="crm-drilldown__criteria" aria-label="Drilled Down By"><h3>Drilled Down By</h3><ol>{criteria.map(([label, value]) => <li key={label}>{label} <span>IS</span> {value}</li>)}</ol></section>
      <div className="crm-drilldown__table-heading"><span>Record Count <strong>{records.length.toLocaleString('en-US')}</strong>{monetary && <> · Total <strong>{formatDrilldownMoney(selection.value * 1000)}</strong></>}</span><div className="crm-drilldown__pagination"><span>{records.length ? page * pageSize + 1 : 0}–{Math.min((page + 1) * pageSize, records.length)} of {records.length.toLocaleString('en-US')}</span><Button variant="link-default" aria-label="Previous records" disabled={page === 0} onClick={() => setPage(value => value - 1)}>‹</Button><Button variant="link-default" aria-label="Next records" disabled={(page + 1) * pageSize >= records.length} onClick={() => setPage(value => value + 1)}>›</Button></div></div>
      <div className="crm-drilldown__table-scroll" tabIndex={0} role="region" aria-label="Chart records"><table><caption className="crm-drilldown__sr-only">{title} · {selection.label} records</caption><thead><tr><th scope="col">{selection.kind === 'industry' ? 'Account Name' : selection.kind === 'shipments' ? 'Shipment' : 'Deal Name'}</th>{selection.kind !== 'industry' && <th scope="col">Account Name</th>}<th scope="col">Created Time</th><th scope="col">{selection.kind === 'industry' ? 'Account Owner' : 'Deal Owner'}</th><th scope="col">{selection.kind === 'industry' ? 'Industry' : 'Status'}</th>{monetary && <th scope="col">Amount</th>}</tr></thead><tbody>{shown.map(record => <tr key={record.id}><td><span className="crm-drilldown__record">{record.name}</span></td>{selection.kind !== 'industry' && <td>{record.account}</td>}<td><time dateTime={record.date}>{new Date(`${record.date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time></td><td>{record.owner}</td><td>{record.category}</td>{monetary && <td>{formatDrilldownMoney(record.amount)}</td>}</tr>)}</tbody></table>{!records.length && <p>No records match this chart selection.</p>}</div>
      <p role="status" className="crm-drilldown__status">{notice}</p>
    </div>
  </Modal>;
}
