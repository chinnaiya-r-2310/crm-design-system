import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  parameters: { layout: 'padded' },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    minHeight: { control: { type: 'number', min: 40, max: 400 } },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    label: 'Description',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Notes',
    required: true,
    placeholder: 'Enter your notes here',
  },
};

export const WithAjaxEdit: Story = {
  args: {
    label: 'Description',
    placeholder: 'Click to edit',
    onSave: () => alert('Saved'),
    onCancel: () => alert('Cancelled'),
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    helperText: 'Max 500 characters',
  },
};

export const Error: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter text',
    error: true,
    helperText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const Tall: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter detailed description',
    minHeight: 200,
  },
};
