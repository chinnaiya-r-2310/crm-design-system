import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserPicker } from './UserPicker';
import type { UserOption } from './UserPicker';

const meta: Meta<typeof UserPicker> = {
  title: 'Design System/Components/UserPicker',
  component: UserPicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'User selection dropdown. Shows a searchable list of users with avatar, ' +
          'name, and email. Selected user is indicated by a checkmark and previewed ' +
          'in the trigger with an avatar circle. ' +
          'Figma: Chinnaiya-Style-Sheet node 93656-149883.',
      },
    },
  },
  argTypes: {
    users:    { control: false },
    onChange: { control: false },
    value:    { control: 'text' },
    width:    { control: 'number' },
    layout:   { control: 'radio', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
    error:    { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof UserPicker>;

// ─────────────────────────────────────────────────────────────────────────────
// Sample users — first 8 use real avatar photos, rest use initials
// ─────────────────────────────────────────────────────────────────────────────

const USERS: UserOption[] = [
  { id: 'u1',  name: 'Saravanan Selvaraj',  email: 'saravanan.s@zohocorp.com',  avatarUrl: '/images/avatars/user_01.jpg' },
  { id: 'u2',  name: 'Chinnaiya R',         email: 'chinnaiya.r@zohocorp.com',  avatarUrl: '/images/avatars/user_02.jpg' },
  { id: 'u3',  name: 'Priya Nair',          email: 'priya.nair@zohocorp.com',   avatarUrl: '/images/avatars/user_03.jpg' },
  { id: 'u4',  name: 'Arjun Sharma',        email: 'arjun.sharma@zohocorp.com', avatarUrl: '/images/avatars/user_04.jpg' },
  { id: 'u5',  name: 'Divya Krishnan',      email: 'divya.k@zohocorp.com',      avatarUrl: '/images/avatars/user_05.jpg' },
  { id: 'u6',  name: 'Ranjith Kumar',       email: 'ranjith.k@zohocorp.com',    avatarUrl: '/images/avatars/user_06.jpg' },
  { id: 'u7',  name: 'Meena Sundaram',      email: 'meena.s@zohocorp.com',      avatarUrl: '/images/avatars/user_07.jpg' },
  { id: 'u8',  name: 'Vikram Anand',        email: 'vikram.a@zohocorp.com',     avatarUrl: '/images/avatars/user_08.jpg' },
  { id: 'u9',  name: 'Lakshmi Venkat',      email: 'lakshmi.v@zohocorp.com'    },
  { id: 'u10', name: 'Suresh Babu',         email: 'suresh.b@zohocorp.com'     },
  { id: 'u11', name: 'Kavitha Ramesh',      email: 'kavitha.r@zohocorp.com'    },
  { id: 'u12', name: 'Murugan Selvam',      email: 'murugan.s@zohocorp.com'    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Interactive wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Interactive({
  initialValue,
  label,
  layout,
  width,
  disabled,
  error,
  required,
  helperText,
}: {
  initialValue?: string;
  label?: string;
  layout?: 'horizontal' | 'vertical';
  width?: number;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  helperText?: string;
}) {
  const [value, setValue] = useState<string | undefined>(initialValue);
  return (
    <div style={{ padding: 24, background: '#fff', minWidth: 500 }}>
      <UserPicker
        label={label}
        placeholder="Select user"
        value={value}
        users={USERS}
        onChange={setValue}
        layout={layout}
        width={width ?? 390}
        disabled={disabled}
        error={error}
        required={required}
        helperText={helperText}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Default — no user pre-selected; search filters by name or email. */
export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} />,
};

/** Pre-selected user shown in the trigger with their photo. */
export const WithSelection: Story = {
  name: 'With Selection',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      label="Lead Owner"
      layout="horizontal"
      width={390}
      initialValue="u2"
    />
  ),
};

/** Vertical layout — label stacked above trigger. */
export const Vertical: Story = {
  name: 'Vertical',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24, background: '#fff' }}>
      <UserPicker
        placeholder="Select user"
        users={USERS}
        layout="vertical"
        width={390}
      />
    </div>
  ),
};

/** Error state — validation message below the trigger. */
export const ErrorState: Story = {
  name: 'Error State',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      label="Lead Owner"
      layout="horizontal"
      width={390}
      error
      helperText="Please select a user."
      required
    />
  ),
};

/** Disabled — trigger is non-interactive. */
export const Disabled: Story = {
  name: 'Disabled',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      label="Lead Owner"
      layout="horizontal"
      width={390}
      initialValue="u1"
      disabled
    />
  ),
};
