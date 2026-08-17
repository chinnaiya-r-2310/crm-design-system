import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Design System/Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Horizontal progress bar with optional label and footer stats. ' +
          'Three color variants: blue, red, green. ' +
          'Figma: Chinnaiya-Style-Sheet, Progress Bar page 91534-167968.',
      },
    },
  },
  argTypes: {
    color: { control: 'radio', options: ['blue', 'red', 'green'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    label: { control: 'text' },
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
  },
  args: {
    value: 80,
    color: 'blue',
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)',
  },
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {};

export const Blue: Story = {
  args: { color: 'blue', value: 80, label: 'File Storage', leftLabel: '10000 (80%)', rightLabel: '2500 (20%)' },
};

export const Red: Story = {
  args: { color: 'red', value: 80, label: 'File Storage', leftLabel: '10000 (80%)', rightLabel: '2500 (20%)' },
};

export const Green: Story = {
  args: { color: 'green', value: 80, label: 'File Storage', leftLabel: '10000 (80%)', rightLabel: '2500 (20%)' },
};

export const TitleOnly: Story = {
  name: 'Title Only',
  args: { value: 65, label: 'CRM Progress', color: 'blue' },
};

export const BarOnly: Story = {
  name: 'Bar Only',
  args: { value: 45, color: 'blue' },
};

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 480, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
      {[
        { label: 'Blue — Full', color: 'blue' as const, value: 80, leftLabel: '10000 (80%)', rightLabel: '2500 (20%)', title: 'File Storage' },
        { label: 'Red — Full',  color: 'red'  as const, value: 80, leftLabel: '10000 (80%)', rightLabel: '2500 (20%)', title: 'File Storage' },
        { label: 'Green — Full',color: 'green'as const, value: 80, leftLabel: '10000 (80%)', rightLabel: '2500 (20%)', title: 'File Storage' },
        { label: 'Title Only',  color: 'blue' as const, value: 65, title: 'CRM Progress' },
        { label: 'Bar Only',    color: 'blue' as const, value: 45 },
      ].map(({ label, color, value, leftLabel, rightLabel, title }) => (
        <div key={label}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{label}</p>
          <ProgressBar value={value} color={color} label={title} leftLabel={leftLabel} rightLabel={rightLabel} />
        </div>
      ))}
    </div>
  ),
};
