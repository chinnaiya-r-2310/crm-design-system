import { useState } from 'react';
import { IconPicker, ICON_PICKER_TEXT, CUSTOM_BUTTON_ICONS } from './IconPicker';
import { Icon } from '../Icon/Icon';

const RECOMMENDED = [
  'IndustryAppointment',
  'IndustryInvoice',
  'IndustryContract',
  'IndustryShipping',
];

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: 'Design System/Components/Icon Picker',
  component: IconPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon picker panel. Defaults to the 300 industry icons (12 industries × 25); search matches icon names and industry (try "finance" or "legal"). The Recommended row hides while searching. ' +
          'Arrow keys move through the grid, Enter/Space selects. Pass `initials` to offer a text option, which emits `ICON_PICKER_TEXT` as its value.',
      },
    },
  },
  args: {
    recommended: RECOMMENDED,
    initials: 'ST',
    defaultValue: 'IndustryInvoice',
    rows: 5,
    tooltipDelay: 500,
  },
};

export default meta;

export const Default = {
  name: 'Default',
};

export const WithoutRecommended = {
  name: 'Without recommended',
  args: { recommended: [] },
};

export const IconsOnly = {
  name: 'Icons only (no text option)',
  args: { initials: undefined, defaultValue: null },
};

export const CustomButtonIcons = {
  name: 'Custom button icons',
  args: {
    icons: CUSTOM_BUTTON_ICONS,
    recommended: ['CrmBoardCustomBtn', 'CrmVideoDisableCustomBtn', 'CrmCalendarDateCustomBtn', 'CrmCameraCustomBtn'],
    defaultValue: 'CrmFormCustomBtn',
  },
};

export const CustomIconSet = {
  name: 'Custom icon set',
  args: {
    icons: ['CrmLeads', 'CrmContacts', 'CrmAccounts', 'CrmPotentials', 'CrmInvoices', 'CrmQuotes', 'CrmCampaigns', 'CrmCases', 'CrmSolutions', 'CrmVendors'],
    recommended: [],
    initials: undefined,
    defaultValue: 'CrmInvoices',
  },
};

export const Controlled = {
  name: 'Controlled — selection readout',
  render: args => {
    const [value, setValue] = useState('IndustryInvoice');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        <IconPicker {...args} value={value} onChange={setValue} />
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-md)', color: 'var(--ds-text-label)' }}>
          Selected:
          {value === ICON_PICKER_TEXT ? <strong>ST</strong> : <Icon name={value} size={16} />}
          <code>{value}</code>
        </span>
      </div>
    );
  },
};
