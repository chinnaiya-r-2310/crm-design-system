import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tags, type TagItem } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Design System/Components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multiselect tag input — click or type to search from available options. ' +
          'Selected items appear as chips. Backspace removes the last chip.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

const USER_OPTIONS: TagItem[] = [
  { value: 'alice',   label: 'Alice Johnson' },
  { value: 'bob',     label: 'Bob Smith' },
  { value: 'carol',   label: 'Carol Williams' },
  { value: 'david',   label: 'David Brown' },
  { value: 'eve',     label: 'Eve Davis' },
  { value: 'frank',   label: 'Frank Miller' },
  { value: 'grace',   label: 'Grace Lee' },
];

const ROLE_OPTIONS: TagItem[] = [
  { value: 'admin',   label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'viewer',  label: 'Viewer' },
  { value: 'editor',  label: 'Editor' },
];

// ── Default (empty) ───────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return (
      <Tags
        value={tags}
        options={USER_OPTIONS}
        onChange={setTags}
        placeholder="Select users"
        width={390}
      />
    );
  },
};

// ── With preselected values ───────────────────────────────────────────────────

export const WithValues: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([
      { value: 'alice', label: 'Alice Johnson' },
      { value: 'bob',   label: 'Bob Smith' },
    ]);
    return (
      <Tags
        value={tags}
        options={USER_OPTIONS}
        onChange={setTags}
        placeholder="Select users"
        width={390}
      />
    );
  },
};

// ── With count badges ─────────────────────────────────────────────────────────

export const WithCount: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([
      { value: 'users', label: 'Users', count: 12 },
      { value: 'roles', label: 'Roles', count: 4 },
    ]);
    const countOptions: TagItem[] = [
      { value: 'users',  label: 'Users',  count: 12 },
      { value: 'roles',  label: 'Roles',  count: 4 },
      { value: 'groups', label: 'Groups', count: 7 },
    ];
    return (
      <Tags
        value={tags}
        options={countOptions}
        onChange={setTags}
        placeholder="Select"
        width={390}
      />
    );
  },
};

// ── Roles ─────────────────────────────────────────────────────────────────────

export const Roles: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return (
      <Tags
        value={tags}
        options={ROLE_OPTIONS}
        onChange={setTags}
        placeholder="Select roles"
        width={390}
        required
      />
    );
  },
};

// ── Error state ───────────────────────────────────────────────────────────────

export const ErrorState: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return (
      <Tags
        value={tags}
        options={USER_OPTIONS}
        onChange={setTags}
        error
        width={390}
        placeholder="Required"
      />
    );
  },
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => {
    const tags: TagItem[] = [
      { value: 'alice', label: 'Alice Johnson' },
      { value: 'carol', label: 'Carol Williams' },
    ];
    return <Tags value={tags} options={USER_OPTIONS} disabled width={390} />;
  },
};
