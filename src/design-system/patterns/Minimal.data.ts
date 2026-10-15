import { SALES_CHARTS } from './Colorful.data';

// Five pipeline stages share the existing $115,500 sample pipeline total.
export const PIPELINE_STAGES = [
  { label: 'Prospecting', value: 8, display: '$8,000' },
  { label: 'Qualification', value: 18, display: '$18,000' },
  { label: 'Needs analysis', value: 10, display: '$10,000' },
  { label: 'Proposal', value: 24.5, display: '$24,500' },
  { label: 'Negotiation', value: 55, display: '$55,000' },
];

// Fifteen fixed snapshots keep the mini chart stable between renders.
export const PIPELINE_SNAPSHOTS = [24, 32, 28, 40, 36, 48, 44, 58, 52, 65, 60, 72, 68, 82, 90];

// Fixed monthly sample comparisons; independent of the KPI period filter.
export const REVENUE_LINES = [
  { label: 'Closed revenue', color: 'blue', series: SALES_CHARTS[0].series },
  { label: 'Forecast', color: 'pink', series: SALES_CHARTS[0].series.map((item, index) => {
    const value = [60, 125, 62, 1, 78, 102][index];
    return { label: item.label, value, display: `${(value * 1000).toLocaleString('en-US')}` };
  }) },
  { label: 'Target', color: 'amber', series: SALES_CHARTS[0].series.map((item, index) => {
    const value = [65, 58, 85, 70, 105, 80][index];
    return { label: item.label, value, display: `${(value * 1000).toLocaleString('en-US')}` };
  }) },
];

// Fixed local sample data for the industry breakdown.
export const ACCOUNTS_BY_INDUSTRY = [
  { industry: 'Technology', count: 640 },
  { industry: 'Healthcare', count: 230 },
  { industry: 'Finance', count: 420 },
  { industry: 'Manufacturing', count: 165 },
  { industry: 'Retail', count: 510 },
  { industry: 'Education', count: 300 },
  { industry: 'Energy', count: 190 },
  { industry: 'Logistics', count: 350 },
  { industry: 'Real Estate', count: 260 },
  { industry: 'Hospitality', count: 126 },
];
export const COMPANY_TARGET = {
  target: 3000,
  achieved: 3210,
  axisMax: 4000,
};
export const TODAY_TASKS = [
  { id: 'pricing', title: 'Confirm pricing for Atlas Logistics', completed: false },
  { id: 'demo', title: 'Prepare Northstar Analytics demo', completed: false },
  { id: 'contacts', title: 'Update Meridian Health contacts', completed: false },
  { id: 'contract', title: 'Send Evergreen Energy contract', completed: false },
  { id: 'handoff', title: 'Coordinate customer success handoff', completed: false },
  { id: 'forecast', title: 'Update weekly sales forecast', completed: false },
  { id: 'notes', title: 'Log discovery call notes', completed: false },
];

export const BUILDER_SUGGESTIONS = [
  { title: 'Deal Progress Tracker', description: 'Visualise pipeline stages and flag stalled deals at a glance.', icon: 'RtChecklist', tone: 'purple', prompt: 'Create a deal progress tracker with pipeline stages, deal values, owners, and stalled-deal alerts.' },
  { title: 'Commission Calculator', description: 'Calculate earnings based on quota attainment tiers.', icon: 'WmsMotivator', tone: 'green', prompt: 'Create a commission calculator with sales quotas, attainment tiers, and estimated earnings.' },
  { title: 'Support Ticket Dashboard', description: 'Track open tickets, SLA health, and agent workloads.', icon: 'WmsChat', tone: 'orange', prompt: 'Create a support ticket dashboard showing open tickets, SLA health, and agent workloads.' },
  { title: 'Campaign ROI Tracker', description: 'Compare spend and revenue across active campaigns.', icon: 'WmsAnnouncements', tone: 'pink', prompt: 'Create a campaign ROI tracker comparing campaign spend, attributed revenue, and conversion rates.' },
  { title: 'Employee Onboarding', description: 'A step-by-step checklist with progress tracking.', icon: 'GroupAvatar', tone: 'blue', prompt: 'Create an employee onboarding checklist with assigned owners, due dates, and progress tracking.' },
  { title: 'Inventory Tracker', description: 'Monitor stock levels, reorder points, and lead times.', icon: 'CompanyAvatar', tone: 'lime', prompt: 'Create an inventory tracker with stock levels, reorder points, suppliers, and lead times.' },
] as const;

export const TODAYS_APPOINTMENTS = [
  { id: 'discovery', time: '09:30', end: '10:00', title: 'Discovery call', account: 'Atlas Logistics', contact: 'Daniel Kim', avatar: 'user_01.jpg', type: 'Video call' },
  { id: 'proposal-review', time: '11:00', end: '11:45', title: 'Proposal review', account: 'Meridian Health', contact: 'Sofia Martinez', avatar: 'user_02.jpg', type: 'Video call' },
  { id: 'renewal-review', time: '15:00', end: '15:30', title: 'Renewal discussion', account: 'Evergreen Energy', contact: 'Alex Morgan', avatar: 'user_03.jpg', type: 'Phone call' },
];
