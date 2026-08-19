import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Design System/Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Chevron-style progress stepper. ' +
          '`variant="multi"` — green/orange/gray per state. ' +
          '`variant="single"` — blue monochrome. ' +
          'Pass `steps` as strings + `currentStep`, or as `{ label, state }` objects. ' +
          'Figma: Chinnaiya-Style-Sheet node 93672-150667.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

/* ─── Multi-color ─── */
export const MultiColor: Story = {
  name: 'Multi Color (step 2 active)',
  render: () => (
    <Stepper
      variant="multi"
      steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']}
      currentStep={1}
    />
  ),
};

export const MultiColorStep3: Story = {
  name: 'Multi Color (step 3 active)',
  render: () => (
    <Stepper
      variant="multi"
      steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']}
      currentStep={2}
    />
  ),
};

export const MultiColorAllCompleted: Story = {
  name: 'Multi Color (all completed)',
  render: () => (
    <Stepper
      variant="multi"
      steps={[
        { label: 'Upload',              state: 'completed' },
        { label: 'Module - File Mapping', state: 'completed' },
        { label: 'Field Mapping',        state: 'completed' },
        { label: 'Review',               state: 'completed' },
        { label: 'Finish',               state: 'completed' },
      ]}
    />
  ),
};

/* ─── Single-color ─── */
export const SingleColor: Story = {
  name: 'Single Color (step 1 active)',
  render: () => (
    <Stepper
      variant="single"
      steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']}
      currentStep={0}
    />
  ),
};

export const SingleColorStep2: Story = {
  name: 'Single Color (step 2 active)',
  render: () => (
    <Stepper
      variant="single"
      steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']}
      currentStep={1}
    />
  ),
};

/* ─── All Variants ─── */
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => {
    const label = (text: string) => (
      <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
        {text}
      </p>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
        <div>
          {label('Multi Color — step 2 active')}
          <Stepper
            variant="multi"
            steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']}
            currentStep={1}
          />
        </div>
        <div>
          {label('Multi Color — step 4 active')}
          <Stepper
            variant="multi"
            steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']}
            currentStep={3}
          />
        </div>
        <div>
          {label('Single Color — step 1 active')}
          <Stepper
            variant="single"
            steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']}
            currentStep={0}
          />
        </div>
        <div>
          {label('Single Color — step 2 active')}
          <Stepper
            variant="single"
            steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']}
            currentStep={1}
          />
        </div>
        <div>
          {label('Single Color — all pending')}
          <Stepper
            variant="single"
            steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']}
          />
        </div>
      </div>
    );
  },
};
