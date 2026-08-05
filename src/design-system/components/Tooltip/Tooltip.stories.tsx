import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Hover tooltip with three variants (Black, White, Red) and four arrow placements.',
          'Figma: Chinnaiya Style Sheet node 14243:110337.',
          'Wraps any trigger element — shows on hover/focus, hides on leave/blur.',
          'Pass `alwaysVisible` to pin it open in stories and visual tests.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['black', 'white', 'red'],
      table: { category: 'Appearance', defaultValue: { summary: 'black' } },
    },
    placement: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      table: { category: 'Appearance', defaultValue: { summary: 'top' } },
    },
    content: { control: 'text', table: { category: 'Content' } },
    showIcon: { control: 'boolean', table: { category: 'Content' } },
    alwaysVisible: { control: 'boolean', table: { category: 'Testing', defaultValue: { summary: 'false' } } },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Black: Story = {
  args: {
    content: 'Rename',
    variant: 'black',
    placement: 'top',
    alwaysVisible: false,
  },
  render: (args) => (
    <div style={{ padding: '40px' }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const White: Story = {
  args: {
    content: 'Saravanan S on Oct 29 2018 at 06:04 PM',
    variant: 'white',
    placement: 'top',
    alwaysVisible: false,
  },
  render: (args) => (
    <div style={{ padding: '40px' }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const Red: Story = {
  args: {
    content: 'Please enter a valid Email',
    variant: 'red',
    placement: 'top',
    alwaysVisible: true,
  },
  render: (args) => (
    <div style={{ padding: '40px' }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'With Warning Icon',
  args: {
    content: 'Please enter a valid Email',
    variant: 'red',
    placement: 'top',
    showIcon: true,
    alwaysVisible: true,
  },
  render: (args) => (
    <div style={{ padding: '40px' }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

/** All variants and placements in one view. */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '80px', padding: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {(['black', 'white', 'red'] as const).map(variant => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
          <span style={{ fontSize: 11, textTransform: 'uppercase', color: '#616E88', fontWeight: 500 }}>{variant}</span>
          {(['top', 'bottom', 'left', 'right'] as const).map(placement => (
            <div key={placement} style={{ padding: '20px 40px' }}>
              <Tooltip content="Tooltip text" variant={variant} placement={placement} alwaysVisible>
                <Button variant="default" size="sm">{placement}</Button>
              </Tooltip>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Interactive — hover any button to see the tooltip. */
export const Interactive: Story = {
  name: 'Interactive (Hover)',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', padding: '60px' }}>
      <Tooltip content="Default action" variant="black">
        <Button variant="default">Black tip</Button>
      </Tooltip>
      <Tooltip content="Last modified by Saravanan" variant="white">
        <Button variant="default">White tip</Button>
      </Tooltip>
      <Tooltip content="Please enter a valid email" variant="red" showIcon>
        <Button variant="default">Error tip</Button>
      </Tooltip>
    </div>
  ),
};
