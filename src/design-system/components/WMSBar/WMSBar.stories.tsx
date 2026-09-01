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
          'WMS bar for Zoho CRM — thin 34px bar with Chats/Channels/Contacts tabs on the left, ' +
          'a smart chat input in the center, and quick-access icon buttons on the right. ' +
          'Figma: Chinnaiya-Style-Sheet node 93756-151835.',
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

export const WithBadge: Story = {
  name: 'With Chat Badge',
  render: () => <WMSBar chatBadge />,
};

export const ChannelsActive: Story = {
  name: 'Channels Active',
  render: () => <WMSBar defaultTab="channels" />,
};

export const ContactsActive: Story = {
  name: 'Contacts Active',
  render: () => <WMSBar defaultTab="contacts" />,
};

export const FullPage: Story = {
  name: 'With TopBand',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NextGenTopBand moduleLabel="Leads" moduleCount={1} notificationCount={3} />
      <div style={{
        flex: 1,
        background: '#F0F2F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#616E88',
        fontFamily: 'var(--ds-font-family-base, sans-serif)',
        paddingBottom: 34,
      }}>
        Content area
      </div>
      <WMSBar chatBadge />
    </div>
  ),
};
