import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FormulaBuilder } from './FormulaBuilder';

const FUNCTIONS = [
  {
    name: 'Date Time function',
    items: [
      { id: 'today', label: 'TODAY()', insert: 'TODAY()', description: 'Returns the current date.' },
      { id: 'now', label: 'NOW()', insert: 'NOW()', description: 'Returns the current date and time.' },
      { id: 'datediff', label: 'DATEDIFF()', insert: 'DATEDIFF(start, end)', description: 'Days between two dates.' },
      { id: 'year', label: 'YEAR()', insert: 'YEAR(date)', description: 'Year part of a date.' },
    ],
  },
  {
    name: 'Math function',
    items: [
      { id: 'round', label: 'ROUND()', insert: 'ROUND(value, places)', description: 'Rounds to the given decimal places.' },
      { id: 'abs', label: 'ABS()', insert: 'ABS(value)', description: 'Absolute value.' },
      { id: 'max', label: 'MAX()', insert: 'MAX(a, b)', description: 'Larger of two values.' },
      { id: 'min', label: 'MIN()', insert: 'MIN(a, b)', description: 'Smaller of two values.' },
    ],
  },
];

const FIELDS = [
  {
    name: 'Report Group Fields',
    items: [{ id: 'year', label: 'Year' }],
  },
  {
    name: 'Leads',
    items: [
      { id: 'lead-owner', label: 'Lead Owner' },
      { id: 'company', label: 'Company' },
      { id: 'first-name', label: 'First Name' },
      { id: 'last-name', label: 'Last Name' },
      { id: 'title', label: 'Title' },
      { id: 'email', label: 'Email', icon: 'Email' },
      { id: 'phone', label: 'Phone', icon: 'Mobile' },
      { id: 'mobile', label: 'Mobile', icon: 'Mobile' },
      { id: 'lead-source', label: 'Lead Source' },
      { id: 'lead-status', label: 'Lead Status' },
      { id: 'industry', label: 'Industry' },
      { id: 'no-of-employees', label: 'No of Employees' },
      { id: 'annual-revenue', label: 'Annual Revenue' },
      { id: 'rating', label: 'Rating' },
      { id: 'created-by', label: 'Created By' },
      { id: 'modified-by', label: 'Modified By' },
      { id: 'city', label: 'City' },
      { id: 'country', label: 'Country' },
    ],
  },
];

const meta: Meta<typeof FormulaBuilder> = {
  title: 'Design System/Components/FormulaBuilder',
  component: FormulaBuilder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Formula editor for summary fields in Zoho CRM reports. Left panel lists functions and fields ' +
          '(search, collapsible groups, Insert per item). Right panel has an operator bar, a formula editor, ' +
          'return type and decimal place options, and an errors area. Done runs the syntax check and only ' +
          'calls onDone when the formula is valid. ' +
          'Figma: Pascal Stone node 78865-73145 ("New Summary Formula").',
      },
    },
  },
  argTypes: {
    defaultReturnType: {
      control: 'select',
      options: ['Decimal', 'Number', 'Currency', 'Percent'],
    },
    defaultDecimalPlaces: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5', '6'],
    },
  },
  args: {
    title: 'New Summary Formula',
    functions: FUNCTIONS,
    fields: FIELDS,
    onCancel: fn(),
    onDone: fn(),
    onCheckSyntax: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof FormulaBuilder>;

export const Default: Story = {};

export const FunctionsTab: Story = {
  args: {
    defaultTab: 'functions',
  },
};

export const WithFormula: Story = {
  args: {
    defaultFormula: 'ROUND(Annual Revenue / No of Employees, 2)',
    defaultReturnType: 'Currency',
    defaultDecimalPlaces: '2',
  },
};

export const ValidationErrors: Story = {
  args: {
    defaultFormula: 'ROUND((Annual Revenue / No of Employees, 2)',
  },
};
