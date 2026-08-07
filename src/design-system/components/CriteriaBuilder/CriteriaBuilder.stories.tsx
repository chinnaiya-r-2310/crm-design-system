import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CriteriaBuilder } from './CriteriaBuilder';
import type { CriteriaRow } from './CriteriaBuilder';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof CriteriaBuilder> = {
  title: 'Design System/Components/CriteriaBuilder',
  component: CriteriaBuilder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Criteria Builder for constructing filter conditions. ' +
          'Supports text, date, and date-range (between) row types. ' +
          'Rows are connected by toggleable AND / OR operators. ' +
          'Maximum 25 criteria rows. ' +
          'Figma: Chinnaiya-Style-Sheet node 93656-149883.',
      },
    },
  },
  argTypes: {
    rows:                { control: false },
    pattern:             { control: 'text' },
    fieldOptions:        { control: false },
    operatorOptions:     { control: false },
    getOperatorOptions:  { control: false },
    getDefaultOperator:  { control: false },
    onChange:            { control: false },
    onPatternChange:     { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CriteriaBuilder>;

// ─────────────────────────────────────────────────────────────────────────────
// Sample data — 30 Lead module fields
// ─────────────────────────────────────────────────────────────────────────────

const FIELD_OPTIONS = [
  // ── Personal info ──────────────────────────────────────────────────────────
  { value: 'first_name',       label: 'First Name',         fieldType: 'text'       },
  { value: 'last_name',        label: 'Last Name',          fieldType: 'text'       },
  { value: 'company',          label: 'Company',            fieldType: 'text'       },
  { value: 'job_title',        label: 'Job Title',          fieldType: 'text'       },
  { value: 'email',            label: 'Email',              fieldType: 'email'      },
  { value: 'phone',            label: 'Phone',              fieldType: 'phone'      },
  { value: 'mobile',           label: 'Mobile',             fieldType: 'phone'      },
  { value: 'fax',              label: 'Fax',                fieldType: 'phone'      },
  { value: 'website',          label: 'Website',            fieldType: 'url'        },
  // ── Categorisation ─────────────────────────────────────────────────────────
  { value: 'lead_source',      label: 'Lead Source',        fieldType: 'picklist'   },
  { value: 'lead_status',      label: 'Lead Status',        fieldType: 'picklist'   },
  { value: 'industry',         label: 'Industry',           fieldType: 'picklist'   },
  { value: 'rating',           label: 'Rating',             fieldType: 'picklist'   },
  { value: 'country',          label: 'Country',            fieldType: 'picklist'   },
  // ── Numeric ────────────────────────────────────────────────────────────────
  { value: 'annual_revenue',   label: 'Annual Revenue',     fieldType: 'currency'   },
  { value: 'no_of_employees',  label: 'No. of Employees',   fieldType: 'number'     },
  { value: 'score',            label: 'Score',              fieldType: 'number'     },
  { value: 'commission_rate',  label: 'Commission Rate',    fieldType: 'percentage' },
  { value: 'expected_revenue', label: 'Expected Revenue',   fieldType: 'currency'   },
  { value: 'deal_value',       label: 'Deal Value',         fieldType: 'currency'   },
  // ── Dates ──────────────────────────────────────────────────────────────────
  { value: 'created_date',     label: 'Created Date',       fieldType: 'date'       },
  { value: 'modified_date',    label: 'Modified Date',      fieldType: 'date'       },
  { value: 'converted_date',   label: 'Converted Date',     fieldType: 'date'       },
  // ── Ownership ──────────────────────────────────────────────────────────────
  { value: 'lead_owner',       label: 'Lead Owner',         fieldType: 'lookup'     },
  { value: 'campaign_source',  label: 'Campaign Source',    fieldType: 'lookup'     },
  // ── Address ────────────────────────────────────────────────────────────────
  { value: 'street',           label: 'Street',             fieldType: 'text'       },
  { value: 'city',             label: 'City',               fieldType: 'text'       },
  { value: 'state',            label: 'State',              fieldType: 'text'       },
  { value: 'zip_code',         label: 'Zip Code',           fieldType: 'text'       },
  { value: 'description',      label: 'Description',        fieldType: 'text'       },
];

/** Operators for text-like fields: single line, multi-line, phone, email, lookup, picklist, url. */
const TEXT_OPERATORS = [
  { value: 'is',             label: 'is'              },
  { value: 'isnt',           label: "isn't"           },
  { value: 'contains',       label: 'contains'        },
  { value: 'doesnt_contain', label: "doesn't contain" },
  { value: 'starts_with',    label: 'starts with'     },
  { value: 'ends_with',      label: 'ends with'       },
  { value: 'is_empty',       label: 'is empty'        },
  { value: 'is_not_empty',   label: 'is not empty'    },
];

/** Operators for numeric fields (number, currency, percentage) and date fields. */
const NUMERIC_OPERATORS = [
  { value: 'eq',           label: '='           },
  { value: 'neq',          label: '!='          },
  { value: 'lt',           label: '<'           },
  { value: 'lte',          label: '<='          },
  { value: 'gt',           label: '>'           },
  { value: 'gte',          label: '>='          },
  { value: 'between',      label: 'between'     },
  { value: 'not_between',  label: 'not between' },
  { value: 'is_empty',     label: 'is empty'    },
  { value: 'is_not_empty', label: 'is not empty'},
];

function getOperatorOptions(fieldType: string) {
  switch (fieldType) {
    case 'number':
    case 'currency':
    case 'percentage':
    case 'date':
      return NUMERIC_OPERATORS;
    default:
      return TEXT_OPERATORS;
  }
}

function getDefaultOperator(fieldType: string): string {
  switch (fieldType) {
    case 'number':
    case 'currency':
    case 'percentage':
    case 'date':
      return 'eq';
    case 'email':
    case 'phone':
    case 'lookup':
    case 'picklist':
      return 'is';
    default: // text, multiline, url, etc.
      return 'contains';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Preset row data
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_ROWS: CriteriaRow[] = [
  {
    id: 'r1',
    field: 'first_name',
    operator: 'contains',
    value: 'Saravanan Selvaraj',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'r2',
    field: 'created_date',
    operator: 'between',
    value: '22/04/2022',
    valueTime: '09:00 AM',
    valueTo: '23/04/2022',
    valueToTime: '06:00 PM',
    type: 'date-range',
    connector: 'OR',
  },
  {
    id: 'r3',
    field: 'lead_status',
    operator: 'is_not_empty',
    value: '${NOTEMPTY}',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'r4',
    field: 'deal_value',
    operator: 'eq',
    value: '',
    type: 'text',
    connector: 'AND',
  },
];

const ERROR_ROWS: CriteriaRow[] = [
  {
    id: 'e1',
    field: '',
    operator: 'eq',
    value: 'Saravanan Selvaraj',
    type: 'text',
    connector: 'AND',
    errors: { field: 'Please select a field.' },
  },
  {
    id: 'e2',
    field: 'created_date',
    operator: 'between',
    value: '',
    valueTime: '',
    valueTo: '23/04/2022',
    valueToTime: '',
    type: 'date-range',
    connector: 'OR',
    errors: {
      value: 'Please enter a valid Date/Time.',
      valueTo: 'From Date should be less than or equal to To Date.',
    },
  },
  {
    id: 'e3',
    field: 'lead_status',
    operator: 'is_empty',
    value: '${EMPTY}',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'e4',
    field: 'deal_value',
    operator: '',
    value: '',
    type: 'text',
    connector: 'AND',
    errors: { operator: 'Please specify a condition.' },
  },
];

// 25 rows to demonstrate the limit
const LIMIT_ROWS: CriteriaRow[] = Array.from({ length: 25 }, (_, i) => ({
  id: `limit-${i}`,
  field: 'first_name',
  operator: 'eq',
  value: `Value ${i + 1}`,
  type: 'text' as const,
  connector: 'AND' as const,
}));

// ─────────────────────────────────────────────────────────────────────────────
// Interactive wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Interactive({
  initialRows,
  initialPattern,
}: {
  initialRows: CriteriaRow[];
  initialPattern: string;
}) {
  const [rows, setRows] = useState<CriteriaRow[]>(initialRows);
  const [pattern, setPattern] = useState(initialPattern);

  return (
    <div style={{ width: 760, padding: 24, background: '#fff' }}>
      <CriteriaBuilder
        rows={rows}
        pattern={pattern}
        fieldOptions={FIELD_OPTIONS}
        getOperatorOptions={getOperatorOptions}
        getDefaultOperator={getDefaultOperator}
        onChange={setRows}
        onPatternChange={setPattern}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Default state — four criteria rows including a date-range row.
 *  Selecting a number / currency / percentage field auto-sets the operator to "=".
 *  Toggling AND / OR regenerates the Criteria Pattern. */
export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={DEFAULT_ROWS}
      initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )"
    />
  ),
};

/** Error state — field-level validation messages visible on multiple rows. */
export const WithErrors: Story = {
  name: 'With Errors',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={ERROR_ROWS}
      initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )"
    />
  ),
};

/** Single row — remove button hidden; Criteria Pattern not yet shown. */
export const SingleRow: Story = {
  name: 'Single Row',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={[{
        id: 's1',
        field: 'first_name',
        operator: 'eq',
        value: '',
        type: 'text',
        connector: 'AND',
      }]}
      initialPattern="1"
    />
  ),
};

/** Date row — single date + time field using the DateTimeInput component. */
export const DateRow: Story = {
  name: 'Date Row',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={[{
        id: 'd1',
        field: 'created_date',
        operator: 'eq',
        value: '22/04/2022',
        valueTime: '12:00 PM',
        type: 'date',
        connector: 'AND',
      }]}
      initialPattern="1"
    />
  ),
};

/** Limit reached — 25 rows filled; clicking + shows the info toast. */
export const LimitReached: Story = {
  name: 'Limit Reached',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={LIMIT_ROWS}
      initialPattern="1 and 2 and 3 and 4 and 5"
    />
  ),
};
