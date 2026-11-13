import type { UserSelectionOption } from './UserSelectionModal';

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
  ...USERS.map(user => ({ value: `user:${user.id}`, label: user.name, detail: user.email, kind: 'user' as const })),
  ...GROUPS.map(group => ({ value: `group:${group.id}`, label: group.name, kind: 'group' as const,
    members: group.members.flatMap(id => {
      const user = USERS.find(item => item.id === id);
      return user ? [{ value: `user:${id}`, label: user.name, kind: 'user' as const }] : [];
    }) })),
  { value: 'role:administrator', label: 'Administrator', kind: 'role' },
  { value: 'role:manager', label: 'Sales Manager', kind: 'role' },
  { value: 'role:sales-representative', label: 'Sales Representative', kind: 'role' },
  { value: 'hierarchy:sales-manager', label: 'Sales Manager', kind: 'role-and-subordinates', detail: 'Includes subordinate roles' },
  { value: 'hierarchy:regional-manager', label: 'Regional Manager', kind: 'role-and-subordinates', detail: 'Includes subordinate roles' },
];
