import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tags as MultiSelect, type TagItem } from '../Tags/Tags';

const meta: Meta<typeof MultiSelect> = {
  title: 'Design System/Components/Multi-Select',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-select input with removable tags. Type to search options and press Enter to select. ' +
          'First Backspace (empty input) highlights the last tag; second Backspace removes it.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const OPTIONS: TagItem[] = [
  { value: 'design', label: 'Design' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'qa', label: 'QA' },
  { value: 'devops', label: 'DevOps' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

export const Default: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return (
      <MultiSelect
        value={tags}
        options={OPTIONS}
        onChange={setTags}
        placeholder="Select tags"
        width={390}
      />
    );
  },
};

export const WithValues: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([
      { value: 'design', label: 'Design' },
      { value: 'frontend', label: 'Frontend' },
    ]);
    return (
      <MultiSelect
        value={tags}
        options={OPTIONS}
        onChange={setTags}
        placeholder="Select tags"
        width={390}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const tags: TagItem[] = [
      { value: 'design', label: 'Design' },
      { value: 'backend', label: 'Backend' },
    ];
    return <MultiSelect value={tags} options={OPTIONS} disabled width={390} />;
  },
};

export const ErrorState: Story = {
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return (
      <MultiSelect
        value={tags}
        options={OPTIONS}
        onChange={setTags}
        error
        width={390}
        placeholder="Required"
      />
    );
  },
};
