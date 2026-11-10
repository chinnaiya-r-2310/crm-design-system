import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dragger } from './Dragger';

const DEFAULT_ITEMS = ['Lead Name', 'Email', 'Company', 'Created Time', 'Lead Owner', 'First Name', 'Last Name'];

const meta: Meta<typeof Dragger> = {
  title: 'Design System/Components/Dragger',
  component: Dragger,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Reorderable list. Drag an entity by its handle: a copy follows the pointer vertically, the empty slot ' +
          'stays grey and moves with the pick, and the other entities glide to their new positions. The dropped ' +
          'entity flashes yellow briefly. The drag handle is shown only when there is more than one entity.',
      },
    },
  },
  argTypes: {
    gripperOnHover: {
      control: 'boolean',
      description: 'Show the drag handle only while the entity is hovered.',
    },
  },
  args: {
    gripperOnHover: false,
  },
  render: args => <DraggerDemo initial={DEFAULT_ITEMS} gripperOnHover={args.gripperOnHover} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

function DraggerDemo({ initial, gripperOnHover }: { initial: string[]; gripperOnHover: boolean }) {
  const [items, setItems] = useState(initial);
  return (
    <div style={{ width: 260, padding: 16, background: 'var(--ds-bg-common-white)', border: '1px solid var(--ds-border-lighter)', borderRadius: 8 }}>
      <Dragger items={items} onChange={setItems} gripperOnHover={gripperOnHover} />
    </div>
  );
}

export const Default: Story = {
  args: { gripperOnHover: true },
};

export const GripperOnHover: Story = {
  args: { gripperOnHover: true },
};

export const SingleEntity: Story = {
  args: { gripperOnHover: false },
  render: args => <DraggerDemo initial={['Lead Source']} gripperOnHover={args.gripperOnHover} />,
};
