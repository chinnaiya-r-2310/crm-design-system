export type ChartSeries = { label: string; value: number; display: string };
export const SALES_CHARTS: { title: string; subtitle: string; kind: 'line' | 'bars' | 'donut'; series: ChartSeries[] }[] = [
  { title: 'Revenue trend', subtitle: 'Closed revenue · monthly total', kind: 'line', series: [
    { label: 'January', value: 54, display: '$54,000' }, { label: 'February', value: 61, display: '$61,000' }, { label: 'March', value: 68, display: '$68,000' }, { label: 'April', value: 72, display: '$72,000' }, { label: 'May', value: 89.5, display: '$89,500' }, { label: 'June', value: 84.5, display: '$84,500' },
  ] },
  { title: 'Pipeline by stage', subtitle: '$115,500 across 4 opportunities', kind: 'bars', series: [
    { label: 'Qualification', value: 18, display: '$18,000' }, { label: 'Proposal', value: 24.5, display: '$24,500' }, { label: 'Negotiation', value: 73, display: '$73,000' },
  ] },
  { title: 'Lead sources', subtitle: '48 new leads · this month', kind: 'donut', series: [
    { label: 'Website', value: 20, display: '20 leads' }, { label: 'Referral', value: 14, display: '14 leads' }, { label: 'Events', value: 8, display: '8 leads' }, { label: 'Outbound', value: 6, display: '6 leads' },
  ] },
  { title: 'Revenue goal', subtitle: 'June target · $120,000', kind: 'donut', series: [
    { label: 'Booked', value: 84.5, display: '$84,500' }, { label: 'Remaining', value: 35.5, display: '$35,500' },
  ] },
  { title: 'Quarterly forecast', subtitle: 'Q2 scenario estimates · not booked revenue', kind: 'bars', series: [
    { label: 'Committed', value: 278, display: '$278,000' }, { label: 'Likely', value: 302.5, display: '$302,500' }, { label: 'Best case', value: 361.5, display: '$361,500' },
  ] },
  { title: 'Weekly activity', subtitle: 'Customer touchpoints · current week', kind: 'line', series: [
    { label: 'Monday', value: 18, display: '18 activities' }, { label: 'Tuesday', value: 27, display: '27 activities' }, { label: 'Wednesday', value: 22, display: '22 activities' }, { label: 'Thursday', value: 34, display: '34 activities' }, { label: 'Friday', value: 26, display: '26 activities' },
  ] },
  { title: 'Win / loss mix', subtitle: '16 closed opportunities · June', kind: 'donut', series: [
    { label: 'Won', value: 12, display: '12 deals' }, { label: 'Lost', value: 4, display: '4 deals' },
  ] },
  { title: 'Deal age', subtitle: 'Days since opportunity creation', kind: 'bars', series: [
    { label: 'Northstar', value: 24, display: '24 days' }, { label: 'Meridian', value: 18, display: '18 days' }, { label: 'Atlas', value: 7, display: '7 days' }, { label: 'Evergreen', value: 32, display: '32 days' },
  ] },
];
export const KPI_TRENDS = [
  [18, 32, 27, 48, 44, 62, 78], [28, 40, 36, 52, 64, 60, 80], [12, 24, 18, 36, 30, 48, 66],
  [20, 38, 30, 54, 48, 65, 84], [22, 18, 32, 30, 46, 42, 58], [30, 24, 38, 32, 48, 54, 62],
];
export const LEADERBOARD = [
  { name: 'Ananya Sharma', revenue: '$84,500', progress: 70, deals: '12 wins' },
  { name: 'Marcus Chen', revenue: '$78,200', progress: 65, deals: '10 wins' },
  { name: 'Leila Hassan', revenue: '$69,800', progress: 58, deals: '9 wins' },
];
