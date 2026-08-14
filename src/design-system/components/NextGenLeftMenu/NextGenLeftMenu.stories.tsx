import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NextGenLeftMenu } from './NextGenLeftMenu';

const meta: Meta<typeof NextGenLeftMenu> = {
  title: 'Design System/Components/NextGenLeftMenu',
  component: NextGenLeftMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Next-generation left navigation menu for Zoho CRM. ' +
          'Dark navy sidebar with app header, top nav, teamspace section, and searchable module list. ' +
          'Supports expandable folder groups. ' +
          'Figma: Chinnaiya-Style-Sheet node 93673-150972.',
      },
    },
  },
  argTypes: {
    appName:             { control: 'text' },
    teamspaceName:       { control: 'text' },
    topNavItems:         { control: false },
    modules:             { control: false },
    activeId:            { control: 'text' },
    onItemClick:         { control: false },
    defaultOpenFolders:  { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof NextGenLeftMenu>;

// ─────────────────────────────────────────────────────────────────────────────
// Wrapper — tracks active item
// ─────────────────────────────────────────────────────────────────────────────

function Shell({ initialActiveId }: { initialActiveId?: string }) {
  const [activeId, setActiveId] = useState<string | undefined>(initialActiveId);
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <NextGenLeftMenu
        activeId={activeId}
        onItemClick={setActiveId}
      />
      <div style={{
        flex: 1,
        background: '#f0f2f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--ds-font-family-base, sans-serif)',
        fontSize: 14,
        color: '#616E88',
      }}>
        {activeId ? `Active: ${activeId}` : 'Click a menu item'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => <Shell />,
};

export const WithActiveItem: Story = {
  name: 'Active Item — Contacts',
  parameters: { controls: { disable: true } },
  render: () => <Shell initialActiveId="contacts" />,
};

export const ActiveTopNav: Story = {
  name: 'Active Item — Analytics (top nav)',
  parameters: { controls: { disable: true } },
  render: () => <Shell initialActiveId="analytics" />,
};
