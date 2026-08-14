import type { Meta, StoryObj } from '@storybook/react';
import { NextGenTopBand } from './NextGenTopBand';

const meta: Meta<typeof NextGenTopBand> = {
  title: 'Design System/Components/NextGenTopBand',
  component: NextGenTopBand,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Next-generation top navigation band for Zoho CRM. ' +
          'White bar with module selector, search, territory filter on the left; ' +
          'action icons and user avatar on the right. ' +
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
      moduleCount={1}
      searchPlaceholder="Search Leads..."
      territory="All Territories"
      notificationCount={3}
      userInitials="C"
    />
  ),
};

export const NoCount: Story = {
  name: 'No Badge',
  render: () => (
    <NextGenTopBand
      moduleLabel="Contacts"
      searchPlaceholder="Search Contacts..."
      territory="All Territories"
    />
  ),
};

export const LongModule: Story = {
  name: 'Long Module Name',
  render: () => (
    <NextGenTopBand
      moduleLabel="Social Media Strategy"
      moduleCount={12}
      searchPlaceholder="Search..."
      territory="North America"
      notificationCount={99}
      userInitials="CR"
    />
  ),
};
