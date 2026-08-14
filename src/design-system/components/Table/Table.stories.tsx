import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SetupTable } from './Table';
import type { SetupTableRow, TableColumn } from './Table';
import { Switch } from '../Switch/Switch';
import { Tooltip } from '../Tooltip/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof SetupTable> = {
  title: 'Design System/Components/Table',
  component: SetupTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Setup table with resizable columns, filter dropdowns on selected columns, ' +
          'avatar cells for user columns, and row selection. ' +
          'Figma: Chinnaiya-Style-Sheet node 93640-149179.',
      },
    },
  },
  argTypes: {
    columns:           { control: false },
    rows:              { control: false },
    selectedIds:       { control: false },
    onSelectionChange: { control: false },
    onRowAction:       { control: false },
    selectable:        { control: 'boolean' },
    striped:           { control: 'boolean' },
    emptyMessage:      { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SetupTable>;

// ─────────────────────────────────────────────────────────────────────────────
// Avatar helpers
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_MAP: Record<string, string> = {
  'Admin':       '/images/avatars/user_01.jpg',
  'Chinnaiya R': '/images/avatars/user_02.jpg',
  'Saravanan S': '/images/avatars/user_03.jpg',
  'System':      '/images/avatars/user_04.jpg',
};

// Avatar + date cell — shows only avatar + date; tooltip shows name and date+time
function AvatarDateCell({ name, date, time }: { name: string; date: string; time: string }) {
  const src = AVATAR_MAP[name] ?? '/images/avatars/user_01.jpg';
  return (
    <Tooltip content={`${name}  ${date} ${time}`} variant="white" placement="top">
      <div className="table-avatar-date-cell">
        <img src={src} alt="" aria-hidden="true" />
        <span>{date}</span>
      </div>
    </Tooltip>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sample data
// ─────────────────────────────────────────────────────────────────────────────

interface UserInfo { name: string; date: string; time: string }

interface FieldRow extends SetupTableRow {
  fieldLabel:   string;
  fieldName:    string;
  dataType:     string;
  mandatory:    boolean;
  createdInfo:  UserInfo;
  modifiedInfo: UserInfo;
  active:       boolean;
}

const SAMPLE_ROWS: FieldRow[] = [
  { id: '1',  fieldLabel: 'First Name',       fieldName: 'First_Name',       dataType: 'Single Line', mandatory: true,  createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:14 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:30 AM' }, active: true  },
  { id: '2',  fieldLabel: 'Last Name',         fieldName: 'Last_Name',        dataType: 'Single Line', mandatory: true,  createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:15 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:31 AM' }, active: true  },
  { id: '3',  fieldLabel: 'Company',           fieldName: 'Company',          dataType: 'Single Line', mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:16 AM' }, modifiedInfo: { name: 'Chinnaiya R', date: '8 Mar 2025', time: '02:45 PM' }, active: true  },
  { id: '4',  fieldLabel: 'Email',             fieldName: 'Email',            dataType: 'Email',       mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:18 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:32 AM' }, active: true  },
  { id: '5',  fieldLabel: 'Phone',             fieldName: 'Phone',            dataType: 'Phone',       mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:20 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:33 AM' }, active: true  },
  { id: '6',  fieldLabel: 'Lead Source',       fieldName: 'Lead_Source',      dataType: 'Picklist',    mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:22 AM' }, modifiedInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:22 AM' }, active: true  },
  { id: '7',  fieldLabel: 'Annual Revenue',    fieldName: 'Annual_Revenue',   dataType: 'Currency',    mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:25 AM' }, modifiedInfo: { name: 'Saravanan S', date: '11 Feb 2025', time: '10:05 AM' }, active: true  },
  { id: '8',  fieldLabel: 'No. of Employees',  fieldName: 'No_of_Employees',  dataType: 'Number',      mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:27 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:34 AM' }, active: false },
  { id: '9',  fieldLabel: 'Lead Status',       fieldName: 'Lead_Status',      dataType: 'Picklist',    mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:30 AM' }, modifiedInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:30 AM' }, active: true  },
  { id: '10', fieldLabel: 'Description',       fieldName: 'Description',      dataType: 'Multi Line',  mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:32 AM' }, modifiedInfo: { name: 'Chinnaiya R', date: '19 Jun 2025', time: '04:15 PM' }, active: true  },
  { id: '11', fieldLabel: 'Rating',            fieldName: 'Rating',           dataType: 'Picklist',    mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:35 AM' }, modifiedInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:35 AM' }, active: false },
  { id: '12', fieldLabel: 'Commission Rate',   fieldName: 'Commission_Rate',  dataType: 'Percentage',  mandatory: false, createdInfo: { name: 'Admin',       date: '15 Jun 2023', time: '10:00 AM' }, modifiedInfo: { name: 'Admin',       date: '15 Jun 2023', time: '10:00 AM' }, active: true  },
  { id: '13', fieldLabel: 'Lead Owner',        fieldName: 'Lead_Owner',       dataType: 'Lookup',      mandatory: true,  createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:40 AM' }, modifiedInfo: { name: 'Admin',       date: '14 Jan 2025', time: '11:35 AM' }, active: true  },
  { id: '14', fieldLabel: 'Created Date',      fieldName: 'Created_Date',     dataType: 'Date/Time',   mandatory: false, createdInfo: { name: 'System',      date: '22 Apr 2022', time: '09:00 AM' }, modifiedInfo: { name: 'System',      date: '22 Apr 2022', time: '09:00 AM' }, active: true  },
  { id: '15', fieldLabel: 'Campaign Source',   fieldName: 'Campaign_Source',  dataType: 'Lookup',      mandatory: false, createdInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:45 AM' }, modifiedInfo: { name: 'Admin',       date: '22 Apr 2022', time: '09:45 AM' }, active: false },
];

// ─────────────────────────────────────────────────────────────────────────────
// Column definitions
// Left-aligned by default. Numeric/currency columns use align:'right'.
// ─────────────────────────────────────────────────────────────────────────────

function makeColumns(onActiveChange: (id: string, active: boolean) => void): TableColumn[] {
  return [
    { key: 'fieldLabel',   label: 'Field Label',   width: 160 },
    { key: 'fieldName',    label: 'Field Name',    width: 160 },
    {
      key: 'dataType', label: 'Data Type', width: 130,
      filterable: true,
      filterOptions: ['Single Line', 'Email', 'Phone', 'Picklist', 'Currency', 'Number', 'Multi Line', 'Date/Time', 'Lookup', 'Percentage'],
    },
    { key: 'mandatory', label: 'Mandatory', width: 100, render: (v: boolean) => (v ? 'Yes' : 'No') },
    {
      key: 'createdInfo', label: 'Created By', width: 170,
      render: (v: UserInfo) => <AvatarDateCell name={v.name} date={v.date} time={v.time} />,
    },
    {
      key: 'modifiedInfo', label: 'Modified By', width: 170,
      render: (v: UserInfo) => <AvatarDateCell name={v.name} date={v.date} time={v.time} />,
    },
    {
      key: 'active', label: 'Status', width: 90,
      render: (v: boolean, row: FieldRow) => (
        <Switch checked={v} onChange={e => onActiveChange(row.id, e.target.checked)} />
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// Interactive wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Interactive({ initialRows, selectable, striped }: {
  initialRows: FieldRow[];
  selectable?: boolean;
  striped?: boolean;
}) {
  const [rows, setRows] = useState<FieldRow[]>(initialRows);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleActiveChange = (id: string, active: boolean) => {
    setRows(prev => prev.map(r => r.id === id ? { ...r, active } : r));
  };

  return (
    <div style={{ padding: 24, background: '#f0f2f7', minHeight: '100vh' }}>
      <SetupTable
        columns={makeColumns(handleActiveChange)}
        rows={rows}
        selectable={selectable}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onRowAction={(row) => alert(`Actions for: ${(row as FieldRow).fieldLabel}`)}
        striped={striped}
        width={1200}
        maxHeight={480}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} selectable />,
};

export const Striped: Story = {
  name: 'Striped',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} selectable striped />,
};

export const NonSelectable: Story = {
  name: 'Non-selectable',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} />,
};

export const Empty: Story = {
  name: 'Empty State',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ padding: 24, background: '#f0f2f7' }}>
      <SetupTable
        columns={makeColumns(() => {})}
        rows={[]}
        selectable
        onRowAction={() => {}}
        emptyMessage="No fields found. Add a field to get started."
        width={1200}
      />
    </div>
  ),
};
