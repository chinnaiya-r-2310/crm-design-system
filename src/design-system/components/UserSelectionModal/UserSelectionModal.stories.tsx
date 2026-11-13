import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { UserSelectionModal, type UserSelection, type UserSelectionModalProps } from './UserSelectionModal';
import { RECIPIENT_OPTIONS } from './UserSelectionModal.data';

const meta: Meta<typeof UserSelectionModal> = {
  title: 'Design System/Components/User Selection Modal',
  component: UserSelectionModal,
  parameters: { layout: 'centered' },
  args: { options: RECIPIENT_OPTIONS, value: [] },
};
export default meta;
type Story = StoryObj<typeof UserSelectionModal>;

function Example(args: UserSelectionModalProps) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState<UserSelection[]>(args.value);
  return <>
    <Button onClick={() => setOpen(true)}>Select Users</Button>
    <p role="status">{value.length ? `Selected: ${value.map(item => item.label).join(', ')}` : 'No recipients selected'}</p>
    {open && <UserSelectionModal {...args} value={value} onClose={() => setOpen(false)}
      onSave={next => { setValue(next); setOpen(false); }} />}
  </>;
}

export const Default: Story = { render: args => <Example {...args} /> };
export const WithSelections: Story = {
  args: { value: RECIPIENT_OPTIONS.filter(item => ['user:esther', 'group:visual', 'role:administrator', 'hierarchy:sales-manager'].includes(item.value)) },
  render: args => <Example {...args} />,
};
export const AdditionalRecipients: Story = {
  args: { allowAdditionalEmails: true, value: [{ value: 'email:operations@example.com', label: 'operations@example.com', kind: 'email' }] },
  render: args => <Example {...args} />,
};
export const SelectionLimit: Story = {
  args: { maxSelections: 2 },
  render: args => <Example {...args} />,
};
