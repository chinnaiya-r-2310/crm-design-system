import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Multi-line text area. Same visual design as Input (border, states, label layout). ' +
          'Figma: Chinnaiya Style Sheet node 466:47702 ("Description"). ' +
          'Starts at 34px (same as Input), expands to 70px on focus. ' +
          'Custom resize icon from crm-icon-library node 91-19.',
      },
    },
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      table: { category: 'Layout', defaultValue: { summary: 'horizontal' } },
    },
    error: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    required: { control: 'boolean', table: { category: 'State' } },
    minHeight: { control: { type: 'number', min: 34, step: 8 }, table: { category: 'Layout', defaultValue: { summary: '70' } } },
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      table: { category: 'Testing' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670,
  },
};

export const Horizontal: Story = {
  name: 'Horizontal layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670,
  },
};

export const Vertical: Story = {
  name: 'Vertical layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'vertical',
    width: 390,
  },
};

export const Required: Story = {
  args: {
    label: 'Description',
    placeholder: 'Required field',
    required: true,
    layout: 'horizontal',
    width: 670,
  },
};

export const ErrorState: Story = {
  name: 'Error',
  args: {
    label: 'Description',
    value: 'Invalid text',
    error: true,
    helperText: 'Description must be at least 20 characters.',
    layout: 'horizontal',
    width: 670,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    value: 'This field is locked.',
    disabled: true,
    layout: 'horizontal',
    width: 670,
  },
};

export const ReadOnly: Story = {
  name: 'Read Only',
  args: {
    label: 'Description',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    readOnly: true,
    layout: 'horizontal',
    width: 670,
  },
};

export const WithHelperText: Story = {
  name: 'With helper text',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    helperText: 'Max 500 characters. Markdown is not supported.',
    layout: 'horizontal',
    width: 670,
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 670 }}>
      <Textarea label="Default" placeholder="Enter text…" width={670} />
      <Textarea label="Hover" placeholder="Enter text…" width={670} forceState="hover" />
      <Textarea label="Focus" placeholder="Enter text…" width={670} forceState="focus" />
      <Textarea label="Required" placeholder="Required field" required width={670} />
      <Textarea label="Disabled" value="This field is disabled." disabled width={670} />
      <Textarea label="Read Only" value="This field is read-only." readOnly width={670} />
      <Textarea
        label="Error"
        value="Bad input"
        error
        helperText="This field has an error."
        width={670}
      />
    </div>
  ),
};
