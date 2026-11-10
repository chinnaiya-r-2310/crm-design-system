import type { Meta, StoryObj } from '@storybook/react-vite';
import { NextGenTopBand } from './NextGenTopBand';

const userAvatar = '/images/avatars/user_01.jpg';

const meta: Meta<typeof NextGenTopBand> = {
  title: 'Design System/Components/NextGenTopBand',
  component: NextGenTopBand,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Next-generation top navigation band for Zoho CRM. ' +
          'Figma: Chinnaiya-Style-Sheet node 70396:190911.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NextGenTopBand>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <NextGenTopBand
      moduleLabel="Leads"
      searchPlaceholder="Search Leads..."
      territory="All Territories"

    />
  ),
};

export const NoNotification: Story = {
  name: 'No Notification',
  render: () => (
    <NextGenTopBand
      moduleLabel="Contacts"
      searchPlaceholder="Search Contacts..."
      territory="All Territories"
      userAvatarSrc={userAvatar}
    />
  ),
};

export const LongModule: Story = {
  name: 'Long Module Name',
  render: () => (
    <NextGenTopBand
      moduleLabel="Social Media Strategy"
      searchPlaceholder="Search..."
      territory="North America"
      notificationCount={99}
      userAvatarSrc={userAvatar}
    />
  ),
};
