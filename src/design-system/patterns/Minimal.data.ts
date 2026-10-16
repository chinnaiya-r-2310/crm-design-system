import { SALES_CHARTS } from './Colorful.data';
import type { Period } from './CrmHomepage.data';

// Named views reuse the dashboard widgets with distinct chart samples and arrangements.
export const SALES_HOME_VIEWS: { value: string; label: string; period: Period }[] = [
  { value: 'classic', label: 'Classic Sales View', period: 'month' },
  { value: 'daily', label: 'Daily Freight Snapshot', period: 'month' },
  { value: 'pipeline', label: 'Freight Pipeline Center', period: 'month' },
  { value: 'revenue', label: 'Freight Revenue Performance', period: 'month' },
  { value: 'deals', label: 'Freight Contract Desk', period: 'month' },
  { value: 'forecast', label: 'Shipping Forecast Hub', period: 'month' },
  { value: 'accounts', label: 'Key Shipper Accounts', period: 'month' },
  { value: 'leads', label: 'Shipper Conversion Tracker', period: 'month' },
  { value: 'team', label: 'Freight Sales Team', period: 'month' },
  { value: 'territory', label: 'Trade Lane Sales Overview', period: 'month' },
  { value: 'renewals', label: 'Contracts & Lane Expansion', period: 'month' },
  { value: 'executive', label: 'Logistics Executive Summary', period: 'month' },
];

// Five pipeline stages share the existing $115,500 sample pipeline total.
export const PIPELINE_STAGES = [
  { label: 'Prospecting', value: 8, display: '$8,000' },
  { label: 'Qualification', value: 18, display: '$18,000' },
  { label: 'Needs analysis', value: 10, display: '$10,000' },
  { label: 'Proposal', value: 24.5, display: '$24,500' },
  { label: 'Negotiation', value: 55, display: '$55,000' },
];

// Additional records keep the minimal homepage's taller deals list scrollable.
export const ADDITIONAL_OPEN_DEALS = [
  { id: 'summit', name: 'Summit Manufacturing', stage: 'Proposal', amount: '$28,000', close: 'Jul 10' },
  { id: 'harbor', name: 'Harbor Retail Group', stage: 'Qualification', amount: '$16,500', close: 'Jul 12' },
  { id: 'cedar', name: 'Cedar Agriculture', stage: 'Needs analysis', amount: '$12,000', close: 'Jul 15' },
  { id: 'solstice', name: 'Solstice Automotive', stage: 'Negotiation', amount: '$36,000', close: 'Jul 17' },
  { id: 'pacific', name: 'Pacific Consumer Goods', stage: 'Proposal', amount: '$21,000', close: 'Jul 20' },
  { id: 'aster', name: 'Aster Technologies', stage: 'Prospecting', amount: '$9,500', close: 'Jul 22' },
  { id: 'brookfield', name: 'Brookfield Chemicals', stage: 'Qualification', amount: '$19,000', close: 'Jul 24' },
  { id: 'clearwater', name: 'Clearwater Pharma', stage: 'Proposal', amount: '$26,000', close: 'Jul 28' },
  { id: 'redwood', name: 'Redwood Electronics', stage: 'Negotiation', amount: '$34,000', close: 'Jul 29' },
  { id: 'stonebridge', name: 'Stonebridge Imports', stage: 'Qualification', amount: '$17,500', close: 'Jul 30' },
  { id: 'horizon', name: 'Horizon Solar', stage: 'Needs analysis', amount: '$23,000', close: 'Aug 3' },
  { id: 'silverline', name: 'Silverline Distribution', stage: 'Proposal', amount: '$29,500', close: 'Aug 5' },
  { id: 'oakridge', name: 'Oakridge Foods', stage: 'Prospecting', amount: '$11,000', close: 'Aug 7' },
  { id: 'vertex', name: 'Vertex Electronics', stage: 'Negotiation', amount: '$42,000', close: 'Aug 10' },
  { id: 'lakeside', name: 'Lakeside Medical', stage: 'Proposal', amount: '$25,000', close: 'Aug 12' },
  { id: 'brightpath', name: 'Brightpath Agri Exports', stage: 'Qualification', amount: '$14,500', close: 'Aug 14' },
  { id: 'cobalt', name: 'Cobalt Engineering', stage: 'Needs analysis', amount: '$31,000', close: 'Aug 17' },
  { id: 'westhaven', name: 'Westhaven Cargo', stage: 'Prospecting', amount: '$13,000', close: 'Aug 19' },
];

// Fifteen fixed snapshots keep the mini chart stable between renders.
export const PIPELINE_SNAPSHOTS = [24, 32, 28, 40, 36, 48, 44, 58, 52, 65, 60, 72, 68, 82, 90];

// Broad, offset waves follow the sketch rather than alternating every month.
// These illustrative monthly series are independent of the KPI period filter.
export const REVENUE_LINES = [
  { label: 'Closed revenue', color: 'blue', values: [20, 105, 125, 92, 35, 8] },
  { label: 'Forecast', color: 'pink', values: [85, 18, 1, 48, 90, 78] },
].map(({ label, color, values }) => ({
  label,
  color,
  series: SALES_CHARTS[0].series.map((item, index) => ({
    label: item.label,
    value: values[index],
    display: (values[index] * 1000).toLocaleString('en-US', {
      style: 'currency', currency: 'USD', maximumFractionDigits: 0,
    }),
  })),
}));

// Fixed local sample data for the industry breakdown.
export const ACCOUNTS_BY_INDUSTRY = [
  { industry: 'Electronics', count: 640 },
  { industry: 'Pharma', count: 230 },
  { industry: 'Automotive', count: 420 },
  { industry: 'Manufacturing', count: 165 },
  { industry: 'Retail', count: 510 },
  { industry: 'Agriculture', count: 300 },
  { industry: 'Energy', count: 190 },
  { industry: 'Freight', count: 350 },
  { industry: 'Chemicals', count: 260 },
  { industry: 'Consumer Goods', count: 126 },
];
export const COMPANY_TARGET = {
  target: 3000,
  achieved: 3210,
  axisMax: 4000,
};
export const TODAY_TASKS = [
  { id: 'pricing', title: 'Confirm ocean freight rates for Atlas Freight', completed: false },
  { id: 'demo', title: 'Prepare Northstar Electronics shipping quote', completed: false },
  { id: 'contacts', title: 'Update Meridian Health consignee contacts', completed: false },
  { id: 'contract', title: 'Send Evergreen Energy freight agreement', completed: false },
  { id: 'handoff', title: 'Coordinate booking handoff with operations', completed: false },
  { id: 'forecast', title: 'Update weekly freight revenue forecast', completed: false },
  { id: 'notes', title: 'Log shipper requirements from discovery call', completed: false },
  { id: 'redwood-pricing', title: 'Review Redwood Electronics freight rates', completed: false },
  { id: 'stonebridge-discovery', title: 'Schedule Stonebridge Imports lane review', completed: false },
  { id: 'horizon-requirements', title: 'Confirm Horizon Solar cargo dimensions', completed: false },
  { id: 'silverline-proposal', title: 'Send Silverline Distribution freight proposal', completed: false },
  { id: 'oakridge-outreach', title: 'Follow up with Oakridge Foods on reefer capacity', completed: false },
  { id: 'vertex-terms', title: 'Review Vertex Electronics shipping terms', completed: false },
  { id: 'lakeside-demo', title: 'Prepare Lakeside Medical cold-chain plan', completed: false },
  { id: 'brightpath-stakeholders', title: 'Confirm Brightpath Agri Exports loading schedule', completed: false },
  { id: 'cobalt-estimate', title: 'Share Cobalt Engineering project cargo estimate', completed: false },
  { id: 'westhaven-intro', title: 'Book Westhaven Cargo capacity review', completed: false },
];

export const TODAYS_APPOINTMENTS = [
  { id: 'discovery', time: '09:30', end: '10:00', title: 'Ocean freight discovery', account: 'Atlas Freight', contact: 'Daniel Kim', avatar: 'user_01.jpg', type: 'Video call' },
  { id: 'proposal-review', time: '11:00', end: '11:45', title: 'Cold-chain proposal review', account: 'Meridian Health', contact: 'Sofia Martinez', avatar: 'user_02.jpg', type: 'Video call' },
  { id: 'solution-demo', time: '13:00', end: '13:45', title: 'Shipment visibility walkthrough', account: 'Northstar Electronics', contact: 'Daniel Kim', avatar: 'user_01.jpg', type: 'Video call' },
  { id: 'renewal-review', time: '15:00', end: '15:30', title: 'Freight contract renewal', account: 'Evergreen Energy', contact: 'Alex Morgan', avatar: 'user_03.jpg', type: 'Phone call' },
  { id: 'pricing-review', time: '16:00', end: '16:30', title: 'Container rate alignment', account: 'Summit Manufacturing', contact: 'Sofia Martinez', avatar: 'user_02.jpg', type: 'Video call' },
  { id: 'contract-review', time: '17:00', end: '17:30', title: 'Freight agreement review', account: 'Harbor Retail Group', contact: 'Alex Morgan', avatar: 'user_03.jpg', type: 'Phone call' },
];

// Local logistics records; shared CRM examples remain unchanged.
export const CARGO_DEALS = [
  { id: 'northstar', name: 'Northstar Electronics', stage: 'Negotiation', amount: '$32,000', close: 'Jun 26' },
  { id: 'meridian', name: 'Meridian Health', stage: 'Proposal', amount: '$24,500', close: 'Jun 29' },
  { id: 'atlas', name: 'Atlas Freight', stage: 'Qualification', amount: '$18,000', close: 'Jul 3' },
  { id: 'evergreen', name: 'Evergreen Energy', stage: 'Negotiation', amount: '$41,000', close: 'Jul 8' },
];
export const CARGO_INITIAL_TASKS = [
  { id: 'proposal', title: 'Send Meridian Health cold-chain freight proposal', completed: true },
  { id: 'follow-up', title: 'Follow up on Northstar Electronics ocean freight quote', completed: false },
  { id: 'renewal', title: 'Review Evergreen Energy shipping contract renewal', completed: true },
];
