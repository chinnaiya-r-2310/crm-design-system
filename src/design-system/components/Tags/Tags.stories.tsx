import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tags, type TagItem } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Design System/Components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multiselect tag input. First Backspace (empty input) highlights the last tag; second Backspace removes it. ' +
          'Tags accept an optional imageUrl for a user avatar.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

const avatar = (n: number) => `/images/avatars/user_0${n}.jpg`;

const ROLE_OPTIONS: TagItem[] = [
  { value: 'admin',   label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'viewer',  label: 'Viewer' },
  { value: 'editor',  label: 'Editor' },
];

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

// ── With user avatars ─────────────────────────────────────────────────────────

export const WithUserImage: Story = {
  name: 'With user image',
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([
      { value: 'alice', label: 'Alice Johnson', imageUrl: avatar(1), email: 'alice.johnson@example.com' },
      { value: 'bob',   label: 'Bob Smith',     imageUrl: avatar(2), email: 'bob.smith@example.com' },
    ]);
    const avatarOptions: TagItem[] = [
      { value: 'alice', label: 'Alice Johnson',  imageUrl: avatar(1), email: 'alice.johnson@example.com' },
      { value: 'bob',   label: 'Bob Smith',      imageUrl: avatar(2), email: 'bob.smith@example.com' },
      { value: 'carol', label: 'Carol Williams', imageUrl: avatar(3), email: 'carol.williams@example.com' },
      { value: 'david', label: 'David Brown',    imageUrl: avatar(4), email: 'david.brown@example.com' },
      { value: 'eve',   label: 'Eve Davis',      imageUrl: avatar(5), email: 'eve.davis@example.com' },
      { value: 'frank', label: 'Frank Miller',   imageUrl: avatar(6), email: 'frank.miller@example.com' },
      { value: 'grace', label: 'Grace Lee',      imageUrl: avatar(7), email: 'grace.lee@example.com' },
      { value: 'henry', label: 'Henry Wilson',   imageUrl: avatar(8), email: 'henry.wilson@example.com' },
    ];
    return (
      <Tags
        value={tags}
        options={avatarOptions}
        onChange={setTags}
        placeholder="Select users"
        width={390}
      />
    );
  },
};

// ── Color tags ────────────────────────────────────────────────────────────────

const COLOR_TAG_OPTIONS = [
  { value: 'tag1', label: 'tag1', color: '#658BA8' },
  { value: 'tag2', label: 'tag2', color: '#12AA67' },
  { value: 'tag3', label: 'tag3', color: '#F18E0A' },
  { value: 'tag4', label: 'tag4', color: '#F564BB' },
];

export const ColorTags: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([
      { value: 'tag1', label: 'tag1', color: '#658BA8' },
      { value: 'tag2', label: 'tag2', color: '#12AA67' },
    ]);
    return (
      <Tags
        value={tags}
        options={COLOR_TAG_OPTIONS}
        onChange={setTags}
        placeholder="Enter Tags"
        width={390}
        colorTags
      />
    );
  },
};

