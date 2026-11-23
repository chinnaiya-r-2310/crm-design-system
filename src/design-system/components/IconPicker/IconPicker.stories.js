import { useState } from 'react';
import { IconPicker, ICON_PICKER_TEXT, CUSTOM_BUTTON_ICONS } from './IconPicker';
import { Icon } from '../Icon/Icon';
import { expect, userEvent, within } from 'storybook/test';

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

export const WithHookTitleAndClose = {
  name: 'With hook, title and close',
  args: {
    variant: 'popover',
    title: 'Change Module Icon',
    initials: 'IN',
    defaultValue: ICON_PICKER_TEXT,
  },
  parameters: {
    docs: { description: { story: 'Optional popover chrome. Handle `onClose` to dismiss the picker; Escape clears an active search before dismissing.' } },
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return open
      ? <IconPicker {...args} onClose={() => { args.onClose?.(); setOpen(false); }} />
      : <button type="button" onClick={() => setOpen(true)}>Change Module Icon</button>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog', { name: 'Change Module Icon' });
    await expect(within(dialog).getByRole('option', { name: 'Text (IN)' })).toHaveAttribute('aria-selected', 'true');
    const search = within(dialog).getByRole('textbox', { name: 'Search icons' });
    await userEvent.type(search, 'invoice');
    await expect(within(dialog).queryByText('Recommended')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(search).toHaveValue('');
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close icon picker' }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', { name: 'Change Module Icon' }));
    await userEvent.click(canvas.getByRole('textbox', { name: 'Search icons' }));
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    // Leave the reference variant visible after the interaction checks.
    await userEvent.click(canvas.getByRole('button', { name: 'Change Module Icon' }));
  },
};

export const AllVariant = {
  name: 'All Variant',
  render: args => {
    const [popoverOpen, setPopoverOpen] = useState(true);
    const sectionStyle = { display: 'flex', flexDirection: 'column', gap: 'var(--ds-spacing-4, 16px)' };
    const headingStyle = { margin: 0, fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-md)', color: 'var(--ds-text-label)' };

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '64px', padding: 'var(--ds-spacing-4, 16px)' }}>
        <section aria-label="Dropdown UI" style={sectionStyle}>
          <h2 style={headingStyle}>Dropdown UI</h2>
          <IconPicker {...args} variant="default" />
        </section>
        <section aria-label="Popover UI" style={sectionStyle}>
          <h2 style={headingStyle}>Popover UI</h2>
          {popoverOpen
            ? <IconPicker {...args} {...WithHookTitleAndClose.args} onClose={() => { args.onClose?.(); setPopoverOpen(false); }} />
            : <button type="button" onClick={() => setPopoverOpen(true)}>Change Module Icon</button>}
        </section>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = within(canvas.getByRole('region', { name: 'Dropdown UI' }));
    const popover = within(canvas.getByRole('region', { name: 'Popover UI' }));
    await expect(dropdown.getByRole('heading', { name: 'Dropdown UI' })).toBeVisible();
    await expect(popover.getByRole('heading', { name: 'Popover UI' })).toBeVisible();
    await expect(popover.getByRole('dialog', { name: 'Change Module Icon' })).toBeVisible();
    // The next tile must not paint over the selected badge's overflowing edge.
    for (const picker of [dropdown, popover]) {
      const selected = picker.getByRole('option', { selected: true });
      const badge = selected.querySelector('.icon-picker-badge');
      const neighbor = selected.closest('.icon-picker-cell-wrap').nextElementSibling;
      await userEvent.hover(neighbor);
      const bounds = badge.getBoundingClientRect();
      const topmost = badge.ownerDocument.elementFromPoint(bounds.right - 0.5, bounds.top + bounds.height / 2);
      await expect(selected.contains(topmost)).toBe(true);
      await userEvent.unhover(neighbor);
    }
    const search = dropdown.getByRole('textbox', { name: 'Search icons' });
    await userEvent.type(search, 'invoice');
    await expect(popover.getByRole('textbox', { name: 'Search icons' })).toHaveValue('');
    await userEvent.clear(search);
    await userEvent.click(popover.getByRole('button', { name: 'Close icon picker' }));
    await expect(popover.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(dropdown.getByRole('textbox', { name: 'Search icons' })).toBeVisible();
    await userEvent.click(popover.getByRole('button', { name: 'Change Module Icon' }));
    await expect(popover.getByRole('dialog', { name: 'Change Module Icon' })).toBeVisible();
  },
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
