import type { Meta, StoryObj } from '@storybook/react';
import { MessageInfo } from './MessageInfo';

const SAMPLE = 'The next renewal date and recurring status is in lieu with your CRM subscription. Please visit our store to know more.';

const SAMPLE_POINTS = [
  'The next renewal date is aligned with your CRM subscription.',
  'Recurring status will be updated automatically after each billing cycle.',
  'Visit our store to review or modify your current plan.',
];

const meta: Meta<typeof MessageInfo> = {
  title: 'Design System/Components/MessageInfo',
  component: MessageInfo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Compact inline notification strip with a bold variant label. ' +
          'Five variants: Note · Warning · Success · Error · Info. ' +
          'Single-point: pass `message` string. ' +
          'Multi-point: pass `points` string array. ' +
          'Figma: Chinnaiya-Style-Sheet node 93673-150972.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['note', 'warning', 'success', 'error', 'info'],
      table: { defaultValue: { summary: 'info' } },
    },
    message: { control: 'text' },
    points: { control: 'object' },
  },
  args: {
    variant: 'info',
    message: SAMPLE,
  },
};

export default meta;
type Story = StoryObj<typeof MessageInfo>;

export const Playground: Story = {};

/* ── Single-point variants ── */
export const Note: Story    = { args: { variant: 'note',    message: SAMPLE } };
export const Warning: Story = { args: { variant: 'warning', message: SAMPLE } };
export const Success: Story = { args: { variant: 'success', message: SAMPLE } };
export const Error: Story   = { args: { variant: 'error',   message: SAMPLE } };
export const Info: Story    = { args: { variant: 'info',    message: SAMPLE } };

/* ── Multi-point variants ── */
export const NoteMulti: Story = {
  name: 'Note (Multi-point)',
  args: { variant: 'note', points: SAMPLE_POINTS },
};
export const WarningMulti: Story = {
  name: 'Warning (Multi-point)',
  args: { variant: 'warning', points: SAMPLE_POINTS },
};
export const SuccessMulti: Story = {
  name: 'Success (Multi-point)',
  args: { variant: 'success', points: SAMPLE_POINTS },
};
export const ErrorMulti: Story = {
  name: 'Error (Multi-point)',
  args: { variant: 'error', points: SAMPLE_POINTS },
};
export const InfoMulti: Story = {
  name: 'Info (Multi-point)',
  args: { variant: 'info', points: SAMPLE_POINTS },
};

/* ── All variants overview ── */
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 780, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Single-point</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(['note', 'warning', 'success', 'error', 'info'] as const).map(v => (
            <MessageInfo key={v} variant={v} message={SAMPLE} />
          ))}
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Multi-point</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(['note', 'warning', 'success', 'error', 'info'] as const).map(v => (
            <MessageInfo key={v} variant={v} points={SAMPLE_POINTS} />
          ))}
        </div>
      </div>
    </div>
  ),
};
