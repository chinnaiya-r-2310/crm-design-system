export type Period = 'month' | 'quarter';
export const PERIODS = [{ value: 'month', label: 'This month' }, { value: 'quarter', label: 'This quarter' }];
export const PERFORMANCE = {
  month: { revenue: '$84,500', target: '$120,000', progress: 70, deals: '12', leads: '48', conversion: '25%', changes: ['↑ 18.2%', '↑ 3 deals', '↑ 12 leads', '↑ 2.4 pts'], remaining: '$35,500', pipeline: '$115,500' },
  quarter: { revenue: '$246,000', target: '$360,000', progress: 68, deals: '34', leads: '142', conversion: '24%', changes: ['↑ 14.6%', '↑ 8 deals', '↑ 32 leads', '↑ 1.8 pts'], remaining: '$114,000', pipeline: '$115,500' },
};
export const DEALS = [
  { id: 'northstar', name: 'Northstar Analytics', stage: 'Negotiation', amount: '$32,000', close: 'Jun 26', attention: 'Follow-up due' },
  { id: 'meridian', name: 'Meridian Health', stage: 'Proposal', amount: '$24,500', close: 'Jun 29', attention: 'Review proposal' },
  { id: 'atlas', name: 'Atlas Logistics', stage: 'Qualification', amount: '$18,000', close: 'Jul 3', attention: 'Discovery booked' },
  { id: 'evergreen', name: 'Evergreen Energy', stage: 'Negotiation', amount: '$41,000', close: 'Jul 8', attention: 'Review terms' },
];
export const INITIAL_TASKS = [
  { id: 'proposal', title: 'Send revised proposal to Meridian Health', detail: '10:00 AM · Proposal', completed: false },
  { id: 'follow-up', title: 'Follow up with Priya Shah at Northstar Analytics', detail: '11:30 AM · Follow-up', completed: false },
  { id: 'renewal', title: 'Review Evergreen Energy renewal terms', detail: '3:00 PM · Renewal', completed: false },
];
export const CHATS = [
  { id: 'priya', initials: 'PS', name: 'Priya Shah', time: '9:42 AM', preview: 'Can you share the updated pricing?', unread: true },
  { id: 'sofia', initials: 'SM', name: 'Sofia Martinez', time: '9:18 AM', preview: 'All set for our proposal review today.', unread: true },
  { id: 'daniel', initials: 'DK', name: 'Daniel Kim', time: 'Yesterday', preview: 'Thanks, the agenda looks good.', unread: false },
];
