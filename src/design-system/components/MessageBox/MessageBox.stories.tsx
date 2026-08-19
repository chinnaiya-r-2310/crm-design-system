import { useState } from 'react';
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MessageBox } from './MessageBox';

const STAGE: React.CSSProperties = {
  position: 'fixed',
  top: 70,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'max-content',
};

const meta: Meta<typeof MessageBox> = {
  title: 'Design System/Components/MessageBox',
  component: MessageBox,
  decorators: [
    (Story) => (
      <div style={STAGE}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Inline status message with icon, text, and optional close button. ' +
          'Figma: Chinnaiya Style Sheet node 31:9759. ' +
          'Four variants: Success, Error, Warning, Info. ' +
          'Supports compact (message only) and expanded (title + message) layouts.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['success', 'error', 'warning', 'info'],
      table: { category: 'Appearance', defaultValue: { summary: 'info' } },
    },
    message: { control: 'text', table: { category: 'Content' } },
    title: { control: 'text', table: { category: 'Content' } },
  },
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'You have successfully created the account.',
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Something went wrong. Please try again.',
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Your session will expire in 5 minutes.',
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This record was last modified 3 days ago.',
    onClose: () => {},
  },
};

export const WithCloseButton: Story = {
  name: 'With close button',
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <MessageBox
        variant="success"
        message="Lead saved successfully."
        onClose={() => setVisible(false)}
        style={{ width: 420 }}
      />
    ) : (
      <span style={{ fontFamily: 'var(--ds-font-family-base)', fontSize: 14, color: '#616E88' }}>
        Message dismissed.
      </span>
    );
  },
};

export const WithTitle: Story = {
  name: 'With title',
  args: {
    variant: 'error',
    title: 'Submission failed',
    message: 'Please fix the errors below and try again.',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 440 }}>
      <MessageBox variant="success" message="You have successfully created the account." onClose={() => {}} />
      <MessageBox variant="error" message="Something went wrong. Please try again." onClose={() => {}} />
      <MessageBox variant="warning" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <MessageBox variant="info" message="This record was last modified 3 days ago." onClose={() => {}} />
    </div>
  ),
};

export const AllWithTitle: Story = {
  name: 'All with title',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 440 }}>
      <MessageBox variant="success" title="Account created" message="You have successfully created the account." onClose={() => {}} />
      <MessageBox variant="error"   title="Submission failed" message="Please fix the errors and try again." onClose={() => {}} />
      <MessageBox variant="warning" title="Session expiring" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <MessageBox variant="info"    title="Note" message="This record was last modified 3 days ago." onClose={() => {}} />
    </div>
  ),
};
