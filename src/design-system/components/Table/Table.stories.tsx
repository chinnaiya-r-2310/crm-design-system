import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SetupTable } from './Table';
import type { SetupTableRow, TableColumn, SortDir } from './Table';
import { Switch } from '../Switch/Switch';

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
          'Setup table for CRM module field lists. ' +
          'Supports single and bulk selection, sortable columns, ' +
          'alternating row tint, and 3-dot row actions. ' +
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
    onSort:            { control: false },
    selectable:        { control: 'boolean' },
    striped:           { control: 'boolean' },
    emptyMessage:      { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SetupTable>;

// ─────────────────────────────────────────────────────────────────────────────
// Sample data — CRM Lead module fields
// ─────────────────────────────────────────────────────────────────────────────

interface FieldRow extends SetupTableRow {
  fieldLabel:   string;
  fieldName:    string;
  module:       string;
  dataType:     string;
  mandatory:    boolean;
  createdBy:    string;
  modifiedBy:   string;
  createdDate:  string;
  modifiedDate: string;
  status:       'Active' | 'Inactive';
  active:       boolean;
}

const SAMPLE_ROWS: FieldRow[] = [
  { id: '1',  fieldLabel: 'First Name',        fieldName: 'First_Name',       module: 'Leads', dataType: 'Single Line', mandatory: true,  createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Active',   active: true  },
  { id: '2',  fieldLabel: 'Last Name',          fieldName: 'Last_Name',        module: 'Leads', dataType: 'Single Line', mandatory: true,  createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Active',   active: true  },
  { id: '3',  fieldLabel: 'Company',            fieldName: 'Company',          module: 'Leads', dataType: 'Single Line', mandatory: false, createdBy: 'Admin',         modifiedBy: 'Chinnaiya R',   createdDate: '22 Apr 2022', modifiedDate: '08 Mar 2025', status: 'Active',   active: true  },
  { id: '4',  fieldLabel: 'Email',              fieldName: 'Email',            module: 'Leads', dataType: 'Email',       mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Active',   active: true  },
  { id: '5',  fieldLabel: 'Phone',              fieldName: 'Phone',            module: 'Leads', dataType: 'Phone',       mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Active',   active: true  },
  { id: '6',  fieldLabel: 'Lead Source',        fieldName: 'Lead_Source',      module: 'Leads', dataType: 'Picklist',    mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '22 Apr 2022', status: 'Active',   active: true  },
  { id: '7',  fieldLabel: 'Annual Revenue',     fieldName: 'Annual_Revenue',   module: 'Leads', dataType: 'Currency',    mandatory: false, createdBy: 'Admin',         modifiedBy: 'Saravanan S',   createdDate: '22 Apr 2022', modifiedDate: '11 Feb 2025', status: 'Active',   active: true  },
  { id: '8',  fieldLabel: 'No. of Employees',   fieldName: 'No_of_Employees',  module: 'Leads', dataType: 'Number',      mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Inactive', active: false },
  { id: '9',  fieldLabel: 'Lead Status',        fieldName: 'Lead_Status',      module: 'Leads', dataType: 'Picklist',    mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '22 Apr 2022', status: 'Active',   active: true  },
  { id: '10', fieldLabel: 'Description',        fieldName: 'Description',      module: 'Leads', dataType: 'Multi Line',  mandatory: false, createdBy: 'Admin',         modifiedBy: 'Chinnaiya R',   createdDate: '22 Apr 2022', modifiedDate: '19 Jun 2025', status: 'Active',   active: true  },
  { id: '11', fieldLabel: 'Rating',             fieldName: 'Rating',           module: 'Leads', dataType: 'Picklist',    mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '22 Apr 2022', status: 'Inactive', active: false },
  { id: '12', fieldLabel: 'Commission Rate',    fieldName: 'Commission_Rate',  module: 'Leads', dataType: 'Percentage',  mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '15 Jun 2023', modifiedDate: '15 Jun 2023', status: 'Active',   active: true  },
  { id: '13', fieldLabel: 'Lead Owner',         fieldName: 'Lead_Owner',       module: 'Leads', dataType: 'Lookup',      mandatory: true,  createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '14 Jan 2025', status: 'Active',   active: true  },
  { id: '14', fieldLabel: 'Created Date',       fieldName: 'Created_Date',     module: 'Leads', dataType: 'Date/Time',   mandatory: false, createdBy: 'System',        modifiedBy: 'System',        createdDate: '22 Apr 2022', modifiedDate: '22 Apr 2022', status: 'Active',   active: true  },
  { id: '15', fieldLabel: 'Campaign Source',    fieldName: 'Campaign_Source',  module: 'Leads', dataType: 'Lookup',      mandatory: false, createdBy: 'Admin',         modifiedBy: 'Admin',         createdDate: '22 Apr 2022', modifiedDate: '22 Apr 2022', status: 'Inactive', active: false },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared column definitions
// ─────────────────────────────────────────────────────────────────────────────

function StatusTag({ value }: { value: 'Active' | 'Inactive' }) {
  const isActive = value === 'Active';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 500,
      lineHeight: '16px',
      background: isActive ? '#E6F8F1' : '#F5F5F5',
      color: isActive ? '#12AA67' : '#8C9BAB',
      whiteSpace: 'nowrap',
    }}>
      {value}
    </span>
  );
}

function makeColumns(
  onActiveChange: (id: string, active: boolean) => void
): TableColumn[] {
  return [
    { key: 'fieldLabel',   label: 'Field Label',    width: 180, sortable: true  },
    { key: 'fieldName',    label: 'Field Name',      width: 180, sortable: true  },
    { key: 'dataType',     label: 'Data Type',       width: 120, sortable: true  },
    { key: 'mandatory',    label: 'Mandatory',       width: 100, align: 'center',
      render: v => v ? 'Yes' : 'No' },
    { key: 'createdBy',    label: 'Created By',      width: 140                  },
    { key: 'modifiedBy',   label: 'Modified By',     width: 140                  },
    { key: 'createdDate',  label: 'Created Date',    width: 130, sortable: true  },
    { key: 'modifiedDate', label: 'Modified Date',   width: 130, sortable: true  },
    { key: 'status',       label: 'Status',          width: 100, align: 'center',
      render: v => <StatusTag value={v as 'Active' | 'Inactive'} /> },
    { key: 'active',       label: 'Active',          width: 80,  align: 'center',
      render: (v, row) => (
        <Switch
          checked={v as boolean}
          onChange={e => onActiveChange(row.id, e.target.checked)}
        />
      )},
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// Interactive wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Interactive({
  initialRows,
  selectable,
  striped,
}: {
  initialRows: FieldRow[];
  selectable?: boolean;
  striped?: boolean;
}) {
  const [rows, setRows] = useState<FieldRow[]>(initialRows);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<string | undefined>();
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const handleActiveChange = (id: string, active: boolean) => {
    setRows(prev => prev.map(r =>
      r.id === id
        ? { ...r, active, status: active ? 'Active' : 'Inactive' }
        : r
    ));
  };

  const sorted = [...rows].sort((a, b) => {
    if (!sortKey) return 0;
    const av = String(a[sortKey] ?? '');
    const bv = String(b[sortKey] ?? '');
    return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  return (
    <div style={{ padding: 24, background: '#f0f2f7', minHeight: '100vh' }}>
      <SetupTable
        columns={makeColumns(handleActiveChange)}
        rows={sorted}
        selectable={selectable}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onRowAction={(row) => alert(`Actions for: ${row.fieldLabel}`)}
        sortKey={sortKey}
        sortDir={sortDir}
        onSort={handleSort}
        striped={striped}
        width={1200}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Full setup table — sortable columns, status tags, active switches, 3-dot actions. */
export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} selectable />,
};

/** Alternating row tints for denser tables. */
export const Striped: Story = {
  name: 'Striped',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} selectable striped />,
};

/** No checkbox column — display-only mode. */
export const NonSelectable: Story = {
  name: 'Non-selectable',
  parameters: { controls: { disable: true } },
  render: () => <Interactive initialRows={SAMPLE_ROWS} />,
};

/** Empty state — no rows. */
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
