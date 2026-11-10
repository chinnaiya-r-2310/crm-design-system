import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ManageColumns } from './ManageColumns';
import { getModuleFields } from '../../data/crm-sample-data';

// Field lists come from the shared CRM sample data, not hand-typed copies.
const toColumns = (moduleKey: string, module: string, scope: string) =>
  getModuleFields(moduleKey).map(field => ({ key: field.key, label: field.label, scope, module }));

const LEAD_FIELDS = toColumns('Leads', 'Leads', 'lead');
const QUOTE_FIELDS = [
  ...toColumns('Quotes', 'Quotes', 'quote'),
  ...toColumns('Products', 'Products', 'quote'),
];

const ALL_FIELDS = [...LEAD_FIELDS, ...QUOTE_FIELDS];
const SELECTED = ['Last_Name', 'First_Name', 'Annual_Revenue', 'Lead_Status', 'Lead_Source', 'Discount', 'Unit_Price'];

const meta: Meta<typeof ManageColumns> = {
  title: 'Design System/Components/Manage Columns',
  component: ManageColumns,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Choose and order the columns shown in a list or report. Variants: modal (search, Cancel/Save), ' +
          'reorder (drag handles), withTitle (scope dropdown, selected count, module groups) and page ' +
          '(no footer, open-in-page icon).',
      },
    },
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['modal', 'reorder', 'withTitle', 'page'] },
    title: { control: 'text' },
  },
  args: {
    variant: 'modal',
    title: 'Manage Columns',
  },
  render: args => <ManageColumnsDemo {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

function ManageColumnsDemo({ variant, title }: { variant: 'modal' | 'reorder' | 'withTitle' | 'page'; title: string }) {
  const [selected, setSelected] = useState(SELECTED);
  const fields = variant === 'withTitle' ? ALL_FIELDS : LEAD_FIELDS;
  return (
    <ManageColumns
      variant={variant}
      title={title}
      fields={fields}
      selected={selected}
      onChange={setSelected}
      onSave={() => {}}
      onCancel={() => {}}
      onOpenPage={() => {}}
    />
  );
}

export const Modal: Story = { args: { variant: 'modal' } };
export const FieldReorder: Story = { args: { variant: 'reorder' } };
export const WithTitle: Story = { args: { variant: 'withTitle' } };
export const Page: Story = { args: { variant: 'page' } };
