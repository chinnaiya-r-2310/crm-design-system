export type DrilldownSelection = {
  kind: 'revenue' | 'pipeline' | 'industry' | 'shipments' | 'conversion';
  label: string;
  value: number;
  series?: string;
};
export type DrilldownRecord = {
  id: string; name: string; account: string; date: string; owner: string;
  category: string; amount: number;
};
const ACCOUNTS = ['Northstar Electronics', 'Harbor Retail Group', 'Cedar Agriculture', 'Solstice Automotive', 'Pacific Consumer Goods', 'Clearwater Pharma', 'Brookfield Chemicals', 'Horizon Energy'];
const OWNERS = ['Patricia Boyle', 'Marcus Chen', 'Leila Hassan', 'Ananya Sharma'];
const LANES = ['Chennai → Singapore', 'Shanghai → Rotterdam', 'Dubai → Mumbai', 'Hamburg → New York'];
const STAGES = ['Prospecting', 'Qualification', 'Needs analysis', 'Proposal', 'Negotiation'];
export const formatDrilldownMoney = (amount: number) => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

// Illustrative records are deterministic, scoped to a mark and reconcile to its aggregate.
// They are not a claim that the homepage's independent sample widgets share backend data.
export function getDrilldownData(selection: DrilldownSelection) {
  const monetary = selection.kind === 'revenue' || selection.kind === 'pipeline';
  const totalCents = Math.round(selection.value * 100_000);
  const count = monetary ? (totalCents > 0 ? Math.min(8, Math.max(1, Math.ceil(selection.value / 15))) : 0)
    : selection.kind === 'conversion' ? 100 : Math.max(0, Math.round(selection.value));
  const month = ['January', 'February', 'March', 'April', 'May', 'June'].indexOf(selection.label);
  const category = selection.kind === 'revenue' ? (selection.series === 'Forecast' ? 'Forecast' : 'Closed won')
    : selection.kind === 'pipeline' ? selection.label : selection.kind === 'industry' ? selection.label : 'Delivered';
  const records: DrilldownRecord[] = Array.from({ length: count }, (_, index) => {
    const won = index < Math.round(selection.value);
    const status = selection.kind === 'conversion' ? (won ? 'Converted' : 'Not converted') : category;
    return {
      id: `${selection.kind}-${selection.series ?? ''}-${selection.label}-${index + 1}`,
      name: selection.kind === 'industry' ? `${selection.label} Shipper ${String(index + 1).padStart(3, '0')}`
        : `${selection.kind === 'shipments' ? 'Shipment' : selection.kind === 'conversion' ? 'Shipper enquiry' : 'Freight contract'} ${String(index + 1).padStart(3, '0')} · ${LANES[index % LANES.length]}`,
      account: selection.kind === 'industry' ? `${selection.label} Shipper ${index + 1}` : ACCOUNTS[index % ACCOUNTS.length],
      date: `2026-${String(month < 0 ? 6 : month + 1).padStart(2, '0')}-${String(3 + index % 24).padStart(2, '0')}`,
      owner: OWNERS[index % OWNERS.length],
      category: selection.kind === 'pipeline' && selection.label.startsWith('Snapshot') ? STAGES[index % STAGES.length] : status,
      amount: monetary ? (Math.floor(totalCents / count) + (index < totalCents % count ? 1 : 0)) / 100 : 0,
    };
  });
  const title = selection.kind === 'revenue' ? 'Revenue trend' : selection.kind === 'pipeline' ? 'Pipeline by stage'
    : selection.kind === 'industry' ? 'Accounts by Industry' : selection.kind === 'shipments' ? 'Company Target' : 'Conversion rate';
  const criteria: [string, string][] = selection.kind === 'revenue' ? [['Month', `${selection.label} 2026`], ['Revenue series', selection.series ?? 'Closed revenue']]
    : selection.kind === 'pipeline' ? [[selection.label.startsWith('Snapshot') ? 'Pipeline snapshot' : 'Stage', selection.label]]
    : selection.kind === 'industry' ? [['Industry', selection.label]]
    : selection.kind === 'shipments' ? [['Branch', 'All branches'], ['Shipment status', 'Delivered']]
    : [['Snapshot', selection.label], ['Conversion rate', `${selection.value}%`]];
  return { records, title, criteria, monetary };
}

export function readDrilldownSelection(): DrilldownSelection | null {
  try {
    const value = JSON.parse(new URLSearchParams(window.location.search).get('chart-records') ?? 'null');
    if (!value || !['revenue', 'pipeline', 'industry', 'shipments', 'conversion'].includes(value.kind)
      || typeof value.label !== 'string' || value.label.length > 100
      || typeof value.value !== 'number' || !Number.isFinite(value.value) || value.value < 0 || value.value > 100_000
      || (value.series !== undefined && (typeof value.series !== 'string' || value.series.length > 100))) return null;
    return value;
  } catch { return null; }
}
