import type { Meta, StoryObj } from '@storybook/react';
import { WMSBar } from './WMSBar';
import { NextGenTopBand } from '../NextGenTopBand/NextGenTopBand';

const meta: Meta<typeof WMSBar> = {
  title: 'Design System/Components/WMSBar',
  component: WMSBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'WMS (Workplace Management System) bar for Zoho CRM. ' +
          'Thin 28px bar with AI chat prompt on the left and quick-access icon buttons on the right. ' +
          'Figma: Chinnaiya-Style-Sheet node 70415:192244.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WMSBar>;

export const Default: Story = {
  name: 'Default',
  render: () => <WMSBar />,
};

export const CustomPrompt: Story = {
  name: 'Custom Prompt',
  render: () => (
    <WMSBar
      chatPlaceholder="Ask Zia anything..."
      shortcut="Ctrl+K"
    />
  ),
};

export const FullPage: Story = {
  name: 'With TopBand',
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NextGenTopBand moduleLabel="Leads" moduleCount={1} notificationCount={3} />
        <WMSBar />
        <div style={{
          flex: 1,
          background: '#F0F2F7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base, sans-serif)',
        }}>
          Content area
        </div>
      </div>
    );
  },
};
