import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';
import { FormTable } from './FormTable';
import { Tooltip } from '../Tooltip/Tooltip';

type Group = { id: number; name: string; fields: string[] };

const FIELD_OPTIONS = ['Lead Source', 'Owner', 'Region', 'Close Date'].map(name => ({ value: name, label: name }));
const REPORT_NAMES = ['Monthly Sales Pipeline', 'Sales Pipeline by Region', 'Won Deals This Quarter'];

const meta: Meta<typeof FormTable> = {
  title: 'Design System/Components/Form Table',
  component: FormTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Editable table of form controls. Each row can hold an input and one dropdown per column, with an optional ' +
          'drag handle (shown when reordering is possible) and minus/plus actions. Column gaps are set per column with ' +
          '`gapAfter`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function GroupsDemo({ initialCount, withActions }: { initialCount: number; withActions: boolean }) {
  const [groups, setGroups] = useState<Group[]>(() =>
    Array.from({ length: initialCount }, (_, index) => ({ id: index + 1, name: '', fields: [] })));

  const setName = (id: number, value: string) =>
    setGroups(current => current.map(group => (group.id === id ? { ...group, name: value } : group)));
  const setField = (id: number, reportIndex: number, value: string) =>
    setGroups(current => current.map(group => {
      if (group.id !== id) return group;
      const fields = [...group.fields];
      fields[reportIndex] = value;
      return { ...group, fields };
    }));
  const addGroup = () => setGroups(current => [...current, { id: Date.now(), name: '', fields: [] }]);
  const removeGroup = (id: number) => setGroups(current => current.filter(group => group.id !== id));
  const moveGroup = (fromId: number, toId: number) => setGroups(current => {
    const from = current.findIndex(group => group.id === fromId);
    const to = current.findIndex(group => group.id === toId);
    if (from < 0 || to < 0 || from === to) return current;
    const next = [...current];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    return next;
  });

  const lastIndex = groups.length - 1;

  return (
    <FormTable
      ariaLabel="Group records by field"
      headers={['Group Name', ...REPORT_NAMES.map(name => (
        <Tooltip key={name} content={`Map Field For "${name}"`} variant="black" placement="top" wrapperStyle={{ display: 'block', minWidth: 0, maxWidth: '100%' }}>
          <span className="ft-col-text">{`Map Field For "${name}"`}</span>
        </Tooltip>
      ))]}
      gapAfter={[20, 20, 20, 20]}
      rows={groups}
      canReorder={groups.length > 1}
      onMove={moveGroup}
      renderCells={(group, groupIndex) => [
        <Input
          key="name"
          width="100%"
          placeholder="Enter name"
          aria-label={`Group ${groupIndex + 1} name`}
          value={group.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setName(group.id, event.target.value)}
        />,
        ...REPORT_NAMES.map((_, reportIndex) => (
          <Dropdown
            key={reportIndex}
            width="100%"
            placeholder="Select field"
            triggerAriaLabel={`Group ${groupIndex + 1} field for report ${reportIndex + 1}`}
            options={FIELD_OPTIONS}
            value={group.fields[reportIndex] ?? ''}
            onChange={(value: string) => setField(group.id, reportIndex, value)}
          />
        )),
      ]}
      renderActions={withActions ? (group, groupIndex) => ({
        onRemove: groups.length > 1 ? () => removeGroup(group.id) : undefined,
        removeLabel: `Remove group ${groupIndex + 1}`,
        onAdd: groupIndex === lastIndex ? addGroup : undefined,
        addLabel: 'Add group',
      }) : undefined}
    />
  );
}

export const Default: Story = {
  render: () => <GroupsDemo initialCount={2} withActions />,
};

export const SingleRow: Story = {
  render: () => <GroupsDemo initialCount={1} withActions />,
};

export const Static: Story = {
  render: () => <GroupsDemo initialCount={2} withActions={false} />,
};
