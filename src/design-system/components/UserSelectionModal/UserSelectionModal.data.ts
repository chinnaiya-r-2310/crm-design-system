import type { AdditionalRecipientOption, UserSelectionOption } from './UserSelectionModal';

export const ADDITIONAL_RECIPIENT_OPTIONS: AdditionalRecipientOption[] = [
  { value: 'email:operations@example.com', label: 'Operations', email: 'operations@example.com', verified: true },
  { value: 'email:alerts@example.com', label: 'Alerts', email: 'alerts@example.com', verified: true },
  { value: 'email:support@example.com', label: 'Support', email: 'support@example.com', verified: false },
  ...['Billing', 'Security', 'Engineering', 'Sales', 'Marketing', 'Customer Success', 'Administration'].map(label => {
    const email = `${label.toLowerCase().replaceAll(' ', '.')}@example.com`;
    return { value: `email:${email}`, label, email, verified: true };
  }),
];

// Preview directory; callers supply CRM directory records in production.
export const USERS = [
  { id: 'esther', name: 'Esther Howard', email: 'nevaeh.simmons@example.com' },
  { id: 'jacob', name: 'Jacob Jones', email: 'tim.jennings@example.com' },
  { id: 'albert', name: 'Albert Flores', email: 'nathan.roberts@example.com' },
  { id: 'divakar', name: 'Divakar Ganapathy', email: 'divakar.ganapathy@example.com' },
  { id: 'marvin', name: 'Marvin McKinney', email: 'michael.mitc@example.com' },
  { id: 'louisa', name: 'Louisa Grand', email: 'louisa.grand@example.com' },
  { id: 'darlene', name: 'Darlene Robertson', email: 'darlene.robertson@example.com' },
  { id: 'prakash', name: 'Prakash Sekar', email: 'prakash.sekar@example.com' },
  { id: 'cisco', name: 'Cisco Webex Teams', email: 'cisco.webex@example.com' },
  { id: 'wade', name: 'Wade Warren', email: 'wade.warren@example.com' },
  { id: 'devon', name: 'Devon Lane', email: 'devon.lane@example.com' },
  { id: 'arlene', name: 'Arlene McCoy', email: 'arlene.mccoy@example.com' },
  { id: 'floyd', name: 'Floyd Miles', email: 'floyd.miles@example.com' },
  { id: 'guy', name: 'Guy Hawkins', email: 'guy.hawkins@example.com' },
  { id: 'theresa', name: 'Theresa Webb', email: 'theresa.webb@example.com' },
];
export const GROUPS = [
  { id: 'visual', name: 'Visual Design', members: ['prakash', 'divakar', 'cisco', 'wade', 'devon', 'arlene', 'floyd'] },
  { id: 'product', name: 'Product Management', members: ['marvin', 'floyd', 'guy', 'theresa'] },
];

export const RECIPIENT_OPTIONS: UserSelectionOption[] = [
  ...USERS.map((user, index) => ({ value: `user:${user.id}`, label: user.name, detail: user.email, kind: 'user' as const,
    avatarUrl: `/images/avatars/user_${String(index % 8 + 1).padStart(2, '0')}.jpg` })),
  ...GROUPS.map(group => ({ value: `group:${group.id}`, label: group.name, kind: 'group' as const,
    members: group.members.flatMap(id => {
      const user = USERS.find(item => item.id === id);
      return user ? [{ value: `user:${id}`, label: user.name, kind: 'user' as const,
        avatarUrl: `/images/avatars/user_${String(USERS.indexOf(user) % 8 + 1).padStart(2, '0')}.jpg`,
        ...(id === 'marvin' ? { removalDisabledReason: 'This profile cannot be removed as the selected page is its default view.' } : {}),
      }] : [];
    }) })),
  { value: 'role:administrator', label: 'Administrator', kind: 'role' },
  { value: 'role:manager', label: 'Sales Manager', kind: 'role' },
  { value: 'role:sales-representative', label: 'Sales Representative', kind: 'role' },
  { value: 'hierarchy:sales-manager', label: 'Sales Manager', kind: 'role-and-subordinates', detail: 'Includes subordinate roles' },
  { value: 'hierarchy:regional-manager', label: 'Regional Manager', kind: 'role-and-subordinates', detail: 'Includes subordinate roles' },
  ...['Sales Group', 'Visual CRM Lab', 'Payments', 'Pre-Sale', 'Marketing', 'Approval Group', 'Creative', 'New Group', 'test56789', 'Design Team 45'].map(label => ({
    value: `group:${label.toLowerCase().replaceAll(' ', '-')}`, label, kind: 'group' as const,
  })),
  ...['North Zone', 'South Zone', 'East Zone', 'West Zone'].flatMap(label => {
    const id = label.toLowerCase().replaceAll(' ', '-');
    return [
      { value: `territory:${id}`, label, kind: 'territory' as const },
      { value: `territory-hierarchy:${id}`, label, kind: 'territory-and-subterritories' as const },
    ];
  }),
];

// Membership is explicit: selecting a member never grants access to the collection itself.
const INDIVIDUAL_MEMBERS: Record<string, string[]> = {
  'group:sales-group': ['esther', 'jacob', 'albert', 'divakar', 'marvin', 'louisa'],
  'role:ceo': ['esther', 'jacob', 'albert', 'divakar', 'marvin', 'louisa', 'darlene', 'prakash'],
  'role:administrator': ['esther', 'jacob', 'albert'],
  'role:manager': ['jacob', 'divakar', 'marvin'],
  'role:sales-representative': ['louisa', 'darlene', 'prakash'],
  'hierarchy:sales-manager': ['jacob', 'divakar', 'marvin', 'louisa', 'darlene', 'prakash'],
  'hierarchy:regional-manager': ['esther', 'jacob', 'albert', 'divakar', 'marvin', 'louisa'],
  'territory:north-zone': ['esther', 'albert', 'prakash'],
  'territory:south-zone': ['jacob', 'divakar', 'marvin'],
  'territory:east-zone': ['louisa', 'darlene', 'cisco'],
  'territory:west-zone': ['wade', 'devon', 'arlene'],
  'territory-hierarchy:north-zone': ['esther', 'albert', 'prakash', 'floyd'],
  'territory-hierarchy:south-zone': ['jacob', 'divakar', 'marvin', 'guy'],
  'territory-hierarchy:east-zone': ['louisa', 'darlene', 'cisco', 'theresa'],
  'territory-hierarchy:west-zone': ['wade', 'devon', 'arlene', 'floyd'],
};
export const INDIVIDUAL_USER_OPTIONS: UserSelectionOption[] = [
  ...RECIPIENT_OPTIONS.filter(item => item.kind === 'user'),
  { value: 'group:sales-group', label: 'Sales Group', kind: 'group' as const },
  { value: 'role:ceo', label: 'CEO', kind: 'role' as const },
  ...RECIPIENT_OPTIONS.filter(item => item.kind !== 'user' && item.value !== 'group:sales-group'),
].map(item => {
  const ids = INDIVIDUAL_MEMBERS[item.value];
  return ids ? { ...item, members: ids.flatMap(id => RECIPIENT_OPTIONS.filter(user => user.kind === 'user' && user.value === `user:${id}`)) } : item;
});
