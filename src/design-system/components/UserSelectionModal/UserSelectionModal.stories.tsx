import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { UserSelectionModal, type UserSelection, type UserSelectionModalProps } from './UserSelectionModal';
import { ADDITIONAL_RECIPIENT_OPTIONS, INDIVIDUAL_USER_OPTIONS, RECIPIENT_OPTIONS } from './UserSelectionModal.data';
import { expect, userEvent, waitFor, within } from 'storybook/test';

const meta: Meta<typeof UserSelectionModal> = {
  title: 'Design System/Components/User Selection Modal',
  component: UserSelectionModal,
  parameters: { layout: 'centered' },
  args: { options: RECIPIENT_OPTIONS, value: [] },
};
export default meta;
type Story = StoryObj<typeof UserSelectionModal>;

function Example(args: UserSelectionModalProps) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState<UserSelection[]>(args.value);
  return <>
    <Button onClick={() => setOpen(true)}>Select Users</Button>
    <p role="status">{value.length ? `Selected: ${value.map(item => item.label).join(', ')}` : 'No recipients selected'}</p>
    {open && <UserSelectionModal {...args} value={value} onClose={() => setOpen(false)}
      onSave={next => { setValue(next); setOpen(false); }} />}
  </>;
}

export const Default: Story = {
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    await waitFor(() => expect(page.getByRole('heading', { name: 'Available' })).toBeVisible());
    await expect(page.getByRole('heading', { name: 'Selected' })).toBeVisible();
    await expect(selected.getByText('No results found')).toBeVisible();
    const filter = page.getByRole('button', { name: 'Recipient type' });
    const search = directory.getByRole('searchbox').closest('label')!;
    await waitFor(() => {
      const filterWidth = filter.getBoundingClientRect().width;
      const searchWidth = search.getBoundingClientRect().width;
      expect(filterWidth / (filterWidth + searchWidth)).toBeCloseTo(0.4, 2);
    });
    const filterBorder = getComputedStyle(filter).borderRightColor;
    const searchBorder = getComputedStyle(search).borderBottomColor;
    filter.focus();
    await waitFor(() => {
      expect(getComputedStyle(filter).boxShadow).toBe('none');
      expect(getComputedStyle(filter).outlineStyle).toBe('none');
      expect(getComputedStyle(filter).borderBottomColor).not.toBe(searchBorder);
      expect(getComputedStyle(filter).borderRightColor).toBe(filterBorder);
    });
    const dialog = page.getByRole('dialog');
    const dialogHeight = dialog.getBoundingClientRect().height;
    await expect(dialogHeight).toBeCloseTo(Math.min(600, window.innerHeight * 0.9), 0);
    const rowHeight = search.parentElement!.getBoundingClientRect().height;
    directory.getByRole('searchbox').focus();
    await waitFor(() => {
      expect(getComputedStyle(search).borderBottomColor).not.toBe(searchBorder);
      expect(getComputedStyle(search).boxShadow).toBe('none');
      expect(getComputedStyle(filter).borderRightColor).toBe(filterBorder);
      expect(getComputedStyle(filter).borderBottomColor).toBe(searchBorder);
      expect(getComputedStyle(filter).boxShadow).toBe('none');
      expect(search.parentElement!.getBoundingClientRect().height).toBe(rowHeight);
    });
    filter.focus();
    await waitFor(() => expect(getComputedStyle(search).borderBottomColor).toBe(searchBorder));
    filter.blur();
    await expect(selected.queryByRole('button', { name: /^Users -/ })).not.toBeInTheDocument();
    const esther = directory.getByRole('button', { name: /Esther Howard/ });
    esther.focus();
    await waitFor(() => expect(within(esther).getByText('Add')).toBeVisible());
    await userEvent.click(esther);
    await expect(directory.queryByRole('button', { name: /Esther Howard/ })).not.toBeInTheDocument();
    const usersHeading = selected.getByRole('button', { name: 'Users - 1' });
    await expect(usersHeading).toBeVisible();
    await expect(usersHeading).toHaveTextContent('Users - 1');
    const availablePanel = page.getByRole('region', { name: 'Available recipients' });
    const selectedPanel = page.getByRole('region', { name: 'Selected recipients' });
    await expect(selectedPanel.getBoundingClientRect().height).toBe(availablePanel.getBoundingClientRect().height);
    await expect(getComputedStyle(usersHeading.parentElement!).borderTopColor).toBe('rgb(220, 219, 238)');
    await expect(getComputedStyle(selectedPanel.parentElement!).borderTopColor).toBe('rgb(220, 219, 238)');
    const panelHeight = selectedPanel.getBoundingClientRect().height;
    const removeButton = selected.getByRole('button', { name: 'Remove Esther Howard' });
    await expect(removeButton.querySelector('svg')).toBeInTheDocument();
    await expect(getComputedStyle(removeButton.closest('.tags-tag')!).height).toBe('27px');
    await userEvent.click(removeButton);
    await expect(selectedPanel.getBoundingClientRect().height).toBe(panelHeight);
    await expect(availablePanel.getBoundingClientRect().height).toBe(panelHeight);
    await expect(dialog.getBoundingClientRect().height).toBe(dialogHeight);
    await expect(directory.getByRole('button', { name: /Esther Howard/ })).toBeVisible();
    await expect(selected.queryByRole('button', { name: /^Users -/ })).not.toBeInTheDocument();
    await userEvent.type(directory.getByRole('searchbox'), 'Jacob');
    await expect(directory.getByRole('button', { name: /Jacob Jones/ })).toBeVisible();
    await expect(directory.queryByRole('button', { name: /Esther Howard/ })).not.toBeInTheDocument();
    const clear = directory.getByRole('button', { name: 'Clear search' });
    await expect(clear).toHaveClass('dropdown-clear-btn');
    await expect(getComputedStyle(clear).width).toBe('16px');
    await expect(getComputedStyle(clear).height).toBe('16px');
    await userEvent.click(clear);
    await expect(directory.getByRole('searchbox')).toHaveValue('');
    await expect(directory.getByRole('searchbox')).toHaveFocus();
    await expect(directory.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    await expect(directory.getByRole('button', { name: /Esther Howard/ })).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Cancel' }));
    await expect(page.getByRole('status')).toHaveTextContent('No recipients selected');
  },
};
export const WithSelections: Story = {
  args: { value: RECIPIENT_OPTIONS.filter(item => ['user:louisa', 'user:divakar', 'user:cisco', 'user:darlene', 'group:visual', 'group:product'].includes(item.value)) },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    await waitFor(() => expect(selected.getByRole('button', { name: 'Users - 4' })).toBeVisible());
    await expect(selected.getByRole('button', { name: 'Groups - 2' })).toBeVisible();
    await expect(selected.queryByRole('button', { name: /^Roles/ })).not.toBeInTheDocument();
    const groupChip = selected.getByText('Visual Design').closest('.tags-tag')!;
    await expect(groupChip).toBeVisible();
    await expect(groupChip.querySelector('.user-selection-avatar')).toBeNull();
    await expect(selected.queryByText('Marvin McKinney')).not.toBeInTheDocument();
    await expect(selected.getByRole('button', { name: 'Remove Visual Design' })).toBeInTheDocument();
    await expect(groupChip.getBoundingClientRect().height).toBe(27);
    await expect(selected.getByText('Louisa Grand').closest('.tags-tag')!.getBoundingClientRect().height).toBe(27);
    const heading = selected.getByRole('button', { name: 'Groups - 2' });
    const headingStyle = getComputedStyle(heading);
    const originalStyle = { color: headingStyle.color, fontSize: headingStyle.fontSize, fontWeight: headingStyle.fontWeight };
    const body = groupChip.closest('.user-selection-section-body')!;
    const arrow = heading.querySelector('.user-selection-section-chevron svg path')!;
    const relativeArrowBounds = () => {
      const bounds = arrow.getBoundingClientRect();
      const header = heading.getBoundingClientRect();
      return { x: bounds.x - header.x, y: bounds.y - header.y, width: bounds.width, height: bounds.height };
    };
    const arrowBounds = relativeArrowBounds();
    const expectArrowPosition = () => {
      const bounds = relativeArrowBounds();
      expect(bounds.x).toBeCloseTo(arrowBounds.x, 1);
      expect(bounds.y).toBeCloseTo(arrowBounds.y, 1);
      expect(bounds.width).toBeCloseTo(arrowBounds.width, 1);
      expect(bounds.height).toBeCloseTo(arrowBounds.height, 1);
    };
    await userEvent.click(heading);
    await expect(heading).toHaveAttribute('aria-expanded', 'false');
    await expect(heading).toHaveTextContent('Groups - 2');
    await expect(body).toHaveAttribute('inert');
    await waitFor(() => expect(body.getBoundingClientRect().height).toBe(0));
    await waitFor(expectArrowPosition);
    for (const [property, value] of Object.entries(originalStyle)) {
      await expect(getComputedStyle(heading)[property as 'color' | 'fontSize' | 'fontWeight']).toBe(value);
    }
    await userEvent.click(heading);
    await expect(heading).toHaveAttribute('aria-expanded', 'true');
    await expect(heading).toHaveTextContent('Groups - 2');
    await expect(body).not.toHaveAttribute('inert');
    await waitFor(() => expect(body.getBoundingClientRect().height).toBeGreaterThan(0));
    await waitFor(expectArrowPosition);
    await expect(selected.getByText('Visual Design')).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(page.getByRole('status')).toHaveTextContent('Visual Design');
  },
};
export const SelectedGroups: Story = {
  args: { value: ['Pre-Sale', 'Visual CRM Lab', 'Approval Group', 'Marketing', 'test56789', 'Design Team 45']
    .flatMap(label => RECIPIENT_OPTIONS.filter(item => item.kind === 'group' && item.label === label)) },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    await waitFor(() => expect(selected.getByRole('button', { name: 'Groups - 6' })).toBeVisible());
    await expect(selected.getAllByRole('button', { name: /^Remove / })).toHaveLength(6);
    await expect(selected.getByText('Design Team 45')).toBeVisible();
    await expect(selected.getByText('Pre-Sale').closest('.user-selection-section')!
      .querySelector('.user-selection-avatar')).toBeNull();
    await userEvent.hover(selected.getByText('Pre-Sale'));
    await userEvent.click(selected.getByRole('button', { name: 'Remove Pre-Sale' }));
    await expect(selected.getByRole('button', { name: 'Groups - 5' })).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(page.getByRole('status')).toHaveTextContent('Design Team 45');
    await expect(page.getByRole('status')).not.toHaveTextContent('Pre-Sale');
  },
};
export const RolesAndSubordinates: Story = {
  args: { value: RECIPIENT_OPTIONS.filter(item => ['role:administrator', 'hierarchy:sales-manager'].includes(item.value)) },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const trigger = page.getByRole('button', { name: 'Recipient type' });
    await userEvent.click(trigger);
    const option = page.getByRole('option', { name: 'Roles and Subordinates' });
    await expect(option).toBeVisible();
    const label = within(option).getByText('Roles and Subordinates');
    await waitFor(() => {
      expect(label.scrollWidth).toBeLessThanOrEqual(label.clientWidth);
      expect(option.getBoundingClientRect().width).toBeGreaterThan(trigger.getBoundingClientRect().width);
      expect(page.getByRole('listbox').getBoundingClientRect().left).toBeCloseTo(trigger.getBoundingClientRect().left - 1, 0);
    });
    await userEvent.click(option);
    await expect(trigger).toHaveTextContent('Roles and Subordinates');
  },
};
export const AdditionalRecipients: Story = {
  args: { allowAdditionalEmails: true, value: [{ value: 'email:operations@example.com', label: 'operations@example.com', kind: 'email' }] },
  render: args => <Example {...args} />,
};
export const LongNamesAndEmails: Story = {
  args: { options: [{ value: 'user:long', kind: 'user',
    label: 'Alexandra Catherine Montgomery-Wellington with a very long display name from the International Customer Operations Department',
    detail: 'alexandra.catherine.montgomery.wellington@international-operations.example.com' }] },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    const row = directory.getByRole('button', { name: /Alexandra Catherine/ });
    for (const text of [within(row).getByText(/Alexandra Catherine/), within(row).getByText(/alexandra\.catherine/)]) {
      await expect(getComputedStyle(text).whiteSpace).toBe('nowrap');
      await expect(getComputedStyle(text).textOverflow).toBe('ellipsis');
      await expect(text.scrollWidth).toBeGreaterThan(text.clientWidth);
    }
    await userEvent.click(row);
    const chip = selected.getByText(/Alexandra Catherine/);
    await expect(getComputedStyle(chip).whiteSpace).toBe('nowrap');
    await expect(getComputedStyle(chip).textOverflow).toBe('ellipsis');
    await expect(chip.scrollWidth).toBeGreaterThan(chip.clientWidth);
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(page.getByRole('status')).toHaveTextContent('Alexandra Catherine');
  },
};
export const EmptyDirectory: Story = {
  args: { options: [] },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    const empty = directory.getByText('No users available');
    await waitFor(() => expect(empty).toBeVisible());
    const results = empty.parentElement!.getBoundingClientRect();
    const bounds = empty.getBoundingClientRect();
    await expect(bounds.height).toBeCloseTo(results.height, 0);
    await userEvent.type(directory.getByRole('searchbox'), 'missing');
    await expect(directory.getByText('No results found')).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Recipient type' }));
    await userEvent.click(page.getByRole('option', { name: 'Groups' }));
    await expect(directory.getByText('No groups available')).toBeVisible();
  },
};
export const RecipientCategories: Story = {
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    for (const [category, label] of [
      ['Groups', 'Visual CRM Lab'], ['Roles', 'Administrator'],
      ['Roles and Subordinates', 'Sales Manager'], ['Territories', 'North Zone'],
      ['Territories and Sub-territories', 'West Zone'],
    ]) {
      await userEvent.click(page.getByRole('button', { name: 'Recipient type' }));
      await userEvent.click(page.getByRole('option', { name: category }));
      const row = directory.getByRole('button', { name: label });
      await expect(row.querySelector('.user-selection-avatar')).toBeNull();
      await expect(row.getBoundingClientRect().height).toBe(47);
      await userEvent.click(row);
      await expect(directory.queryByRole('button', { name: label })).not.toBeInTheDocument();
      await expect(selected.getByRole('button', { name: `${category} - 1` })).toBeVisible();
      const chip = selected.getByText(label, { exact: true }).closest('.tags-tag')!;
      await expect(chip.querySelector('.user-selection-avatar')).toBeNull();
      await expect(getComputedStyle(chip.parentElement!.parentElement!).flexWrap).toBe('wrap');
      await userEvent.click(selected.getByRole('button', { name: `Remove ${label}` }));
      await expect(selected.queryByRole('button', { name: `${category} - 1` })).not.toBeInTheDocument();
      await userEvent.click(directory.getByRole('button', { name: label }));
    }
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(page.getByRole('status')).toHaveTextContent('North Zone');
    await expect(page.getByRole('status')).toHaveTextContent('West Zone');
  },
};
export const IndividualUsers: Story = {
  args: { variant: 'individual-users', options: INDIVIDUAL_USER_OPTIONS, allowAdditionalEmails: true,
    additionalRecipientOptions: ADDITIONAL_RECIPIENT_OPTIONS,
  },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    const chooseCategory = async (name: string) => {
      await userEvent.click(page.getByRole('button', { name: 'Recipient type' }));
      await userEvent.click(page.getByRole('option', { name }));
    };
    await userEvent.click(directory.getByRole('button', { name: /Esther Howard/ }));
    await expect(directory.queryByRole('button', { name: /Esther Howard/ })).not.toBeInTheDocument();
    await chooseCategory('Groups');
    await expect(page.getByRole('button', { name: 'Recipient collection' })).toHaveTextContent('Sales Group');
    const collectionFilter = page.getByRole('button', { name: 'Recipient collection' });
    await waitFor(() => {
      const filterWidth = collectionFilter.getBoundingClientRect().width;
      const searchWidth = directory.getByRole('searchbox').closest('label')!.getBoundingClientRect().width;
      expect(filterWidth / (filterWidth + searchWidth)).toBeCloseTo(0.4, 2);
    });
    expect(getComputedStyle(page.getByRole('heading', { name: 'Available' })).paddingRight).toBe('10px');
    await userEvent.click(collectionFilter);
    const collectionMenu = page.getByRole('listbox');
    await waitFor(() => {
      expect(collectionMenu.getBoundingClientRect().width).toBeGreaterThanOrEqual(collectionFilter.getBoundingClientRect().width);
      expect(collectionMenu.style.width).toBe('max-content');
      expect(collectionMenu.getBoundingClientRect().right).toBeLessThanOrEqual(canvasElement.ownerDocument.defaultView!.innerWidth);
    });
    await userEvent.keyboard('{Escape}');
    const esther = directory.getByRole('button', { name: /Esther Howard/ });
    await expect(within(esther).getByText('Added')).toBeVisible();
    await expect(esther).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(esther);
    await expect(selected.getAllByRole('button', { name: /^Remove / })).toHaveLength(1);
    await userEvent.click(directory.getByRole('button', { name: /Jacob Jones/ }));
    await expect(selected.getByRole('heading', { name: 'Sales Group - 1' })).toBeVisible();
    await expect(selected.getByRole('button', { name: 'Groups - 1' })).toBeVisible();
    await expect(getComputedStyle(selected.getByRole('button', { name: 'Groups - 1' })).fontSize).toBe('13px');
    const sourceHeading = selected.getByRole('heading', { name: 'Sales Group - 1' });
    await expect(getComputedStyle(sourceHeading).fontSize).toBe('12px');
    await expect(getComputedStyle(sourceHeading.querySelector('.user-selection-section-count')!).fontSize).toBe('12px');
    await expect(esther.querySelector('.user-selection-added svg')).not.toBeNull();
    await chooseCategory('Roles');
    await expect(page.getByRole('button', { name: 'Recipient collection' })).toHaveTextContent('CEO');
    await expect(within(directory.getByRole('button', { name: /Jacob Jones/ })).getByText('Added')).toBeVisible();
    await userEvent.click(directory.getByRole('button', { name: /Albert Flores/ }));
    await expect(selected.getByRole('heading', { name: 'CEO - 1' })).toBeVisible();
    await userEvent.click(selected.getByRole('button', { name: 'Remove Jacob Jones' }));
    await expect(selected.queryByRole('button', { name: 'Groups - 1' })).not.toBeInTheDocument();
    await expect(within(directory.getByRole('button', { name: /Jacob Jones/ })).queryByText('Added')).not.toBeInTheDocument();
    await userEvent.click(directory.getByRole('button', { name: /Jacob Jones/ }));
    await expect(selected.getByRole('heading', { name: 'CEO - 2' })).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(page.getByRole('status')).toHaveTextContent('Selected: Esther Howard, Albert Flores, Jacob Jones');
    await expect(page.getByRole('status')).not.toHaveTextContent('CEO');
    await userEvent.click(page.getByRole('button', { name: 'Select Users' }));
    await waitFor(() => expect(within(page.getByRole('region', { name: 'Selected recipients' })).getByRole('heading', { name: 'CEO - 2' })).toBeVisible());
    await userEvent.click(page.getByRole('button', { name: 'Cancel' }));
  },
};
export const IndividualUsersWithSelections: Story = {
  args: {
    variant: 'individual-users', options: INDIVIDUAL_USER_OPTIONS, maxSelections: 5, allowAdditionalEmails: true,
    value: INDIVIDUAL_USER_OPTIONS.filter(item => ['user:esther', 'user:jacob', 'user:albert', 'user:divakar', 'user:marvin'].includes(item.value))
      .map((item, index) => ({ ...item, ...(index === 2 ? { source: { value: 'group:sales-group', label: 'Sales Group', kind: 'group' as const } }
        : index > 2 ? { source: { value: 'role:ceo', label: 'CEO', kind: 'role' as const } } : {}) })),
  },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', { name: 'Available recipients' }));
    await userEvent.click(directory.getByRole('button', { name: /Louisa Grand/ }));
    await expect(page.getByRole('alert')).toHaveTextContent('Select up to 5 recipients.');
    await userEvent.click(page.getByRole('button', { name: 'Recipient type' }));
    await userEvent.click(page.getByRole('option', { name: 'Territories' }));
    await expect(page.getByRole('button', { name: 'Recipient collection' })).toHaveTextContent('North Zone');
    await expect(directory.getByRole('button', { name: /Esther Howard/ })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(page.getByRole('button', { name: 'Remove Albert Flores' }));
    await userEvent.click(directory.getByRole('button', { name: /Prakash Sekar/ }));
    const selected = within(page.getByRole('region', { name: 'Selected recipients' }));
    await expect(selected.getByRole('heading', { name: 'North Zone - 1' })).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Cancel' }));
    await expect(page.getByRole('status')).toHaveTextContent('Albert Flores');
    await expect(page.getByRole('status')).not.toHaveTextContent('Prakash Sekar');
  },
};
export const IndividualUsersEmpty: Story = {
  args: { variant: 'individual-users', options: [{ value: 'group:empty', kind: 'group', label: 'New Group', members: [] }] },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', { name: 'Recipient type' }));
    await userEvent.click(page.getByRole('option', { name: 'Groups' }));
    await expect(page.getByRole('button', { name: 'Recipient collection' })).toHaveTextContent('New Group');
    await expect(page.getByText('No users available')).toBeVisible();
    await expect(page.getByRole('region', { name: 'Available recipients' }).querySelector('.user-selection-result')).toBeNull();
  },
};

export const IndividualUsersAdditionalRecipients: Story = {
  args: {
    variant: 'individual-users', options: INDIVIDUAL_USER_OPTIONS, allowAdditionalEmails: true,
    additionalRecipientOptions: ADDITIONAL_RECIPIENT_OPTIONS,
  },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    await expect(page.queryByText(/^Email: You can select up to/)).toBeNull();
    await expect(page.queryByText(/^Push Notifications: You can select up to/)).toBeNull();
    const addButton = page.getByRole('button', { name: 'Add Additional Recipient' });
    await waitFor(() => expect(addButton).toBeVisible());
    await expect(addButton.closest('.modal-footer')).not.toBeNull();
    const modal = addButton.closest<HTMLElement>('.modal-dialog')!;
    const available = within(modal).getByRole('region', { name: 'Available recipients' });
    const selected = within(modal).getByRole('region', { name: 'Selected recipients' });
    const panelHeight = available.getBoundingClientRect().height;
    const modalHeight = modal.getBoundingClientRect().height;
    await userEvent.click(page.getByRole('button', { name: 'Add Additional Recipient' }));
    let picker = within(page.getByRole('dialog', { name: 'Select Recipient' }));
    await expect(picker.getAllByRole('checkbox')).toHaveLength(10);
    const recipientSearch = picker.getByRole('searchbox', { name: 'Search additional recipients' });
    await expect(recipientSearch.closest('.modal-header-title-row')).not.toBeNull();
    const recipientHeading = picker.getByRole('heading', { name: 'Select Recipient' });
    const searchBounds = recipientSearch.closest('.input-root')!.getBoundingClientRect();
    const headingBounds = recipientHeading.getBoundingClientRect();
    await expect(Math.abs(searchBounds.left - headingBounds.right - 10)).toBeLessThan(1);
    await expect(getComputedStyle(recipientSearch).fontFamily).toContain('Puvi');
    await expect(getComputedStyle(recipientSearch, '::placeholder').fontFamily).toContain('Puvi');
    const baseSize = getComputedStyle(recipientSearch).getPropertyValue('--ds-font-size-base').trim();
    await expect(getComputedStyle(recipientSearch).fontSize).toBe(baseSize);
    await expect(getComputedStyle(recipientSearch, '::placeholder').fontSize).toBe(baseSize);
    await userEvent.type(recipientSearch, '  OPERATIONS  ');
    await expect(picker.getAllByRole('checkbox')).toHaveLength(1);
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Operations' }));
    await userEvent.clear(recipientSearch);
    await userEvent.type(recipientSearch, 'alerts@example.com');
    await expect(picker.getAllByRole('checkbox')).toHaveLength(1);
    await expect(picker.getByRole('checkbox', { name: 'Select Alerts' })).not.toBeChecked();
    await userEvent.clear(recipientSearch);
    await userEvent.type(recipientSearch, 'no-matching-recipient');
    await expect(picker.getByText('No recipients found')).toBeVisible();
    await userEvent.click(picker.getByRole('button', { name: 'Clear recipient search' }));
    await expect(recipientSearch).toHaveFocus();
    await expect(picker.getAllByRole('checkbox')).toHaveLength(10);
    await expect(picker.getByRole('checkbox', { name: 'Select Operations' })).toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Operations' }));
    await waitFor(() => {
      const heading = picker.getByText('Display Name').getBoundingClientRect();
      const label = picker.getAllByRole('checkbox')[0].closest('.checkbox-root')!.querySelector('.checkbox-label-text')!.getBoundingClientRect();
      expect(Math.abs(heading.left - label.left)).toBeLessThanOrEqual(1);
    });
    await expect(page.getByRole('dialog', { name: 'Select Recipient' }).querySelector('.table-resize-handle')).toBeNull();
    await expect(picker.getByRole('checkbox', { name: 'Select Support' })).toBeDisabled();
    await expect(page.getByRole('dialog', { name: 'Select Recipient' }).querySelector('.table-report')).toBeNull();
    const createButton = picker.getByRole('button', { name: 'Create Recipient' });
    await expect(createButton).toHaveAttribute('data-variant', 'outline-blue');
    await userEvent.click(createButton);
    let creator = within(page.getByRole('dialog', { name: 'Create Recipient' }));
    await userEvent.type(creator.getByRole('textbox', { name: /Display Name/ }), 'Finance Team');
    await userEvent.type(creator.getByRole('textbox', { name: /^Email/ }), 'finance-team@example.com');
    await userEvent.click(creator.getByRole('button', { name: 'Cancel' }));
    await expect(picker.queryByRole('checkbox', { name: 'Select Finance Team' })).not.toBeInTheDocument();
    await userEvent.click(createButton);
    creator = within(page.getByRole('dialog', { name: 'Create Recipient' }));
    const displayName = creator.getByRole('textbox', { name: /Display Name/ });
    const emailAddress = creator.getByRole('textbox', { name: /^Email/ });
    await waitFor(() => expect(creator.getByRole('heading', { name: 'Create Recipient' })).toBeVisible());
    await waitFor(() => expect(displayName).toHaveFocus());
    await userEvent.click(creator.getByRole('button', { name: 'Save' }));
    await expect(displayName).toBeRequired();
    await expect(emailAddress).toBeRequired();
    await expect(displayName).toHaveAttribute('aria-invalid', 'true');
    await expect(emailAddress).toHaveAttribute('aria-invalid', 'true');
    await expect(displayName).toHaveAccessibleDescription('Display Name cannot be empty.');
    await expect(emailAddress).toHaveAccessibleDescription('Email cannot be empty.');
    await expect(creator.getAllByRole('alert')).toHaveLength(2);
    await expect(displayName.closest('.input-root')).toHaveAttribute('data-variant', 'error');
    await userEvent.type(emailAddress, 'invalid-email');
    await userEvent.click(creator.getByRole('button', { name: 'Save' }));
    await expect(emailAddress).toHaveAccessibleDescription('Enter a valid email address.');
    await userEvent.clear(emailAddress);
    await userEvent.type(emailAddress, 'operations@example.com');
    await userEvent.click(creator.getByRole('button', { name: 'Save' }));
    await expect(emailAddress).toHaveAccessibleDescription('A recipient with this email address already exists.');
    await userEvent.clear(emailAddress);
    await userEvent.type(displayName, 'Finance Team');
    await expect(displayName).toHaveAttribute('aria-invalid', 'false');
    await userEvent.type(creator.getByRole('textbox', { name: /^Email/ }), 'finance-team@example.com');
    await userEvent.click(creator.getByRole('button', { name: 'Save' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Finance Team' })).toBeDisabled();
    const newRow = picker.getByRole('checkbox', { name: 'Select Finance Team' }).closest('tr')!;
    await expect(newRow).toBe(picker.getAllByRole('checkbox')[0].closest('tr'));
    await expect(newRow.querySelector('[data-new-recipient]')).not.toBeNull();
    await waitFor(() => expect(getComputedStyle(newRow).backgroundColor).toBe('rgb(253, 250, 222)'));
    await waitFor(() => expect(newRow.querySelector('[data-new-recipient]')).toBeNull(), { timeout: 6000 });
    await waitFor(() => expect(getComputedStyle(newRow).backgroundColor).not.toBe('rgb(253, 250, 222)'));
    const disabledLabel = picker.getByRole('checkbox', { name: 'Select Finance Team' }).closest('label')!.querySelector('.checkbox-label-text')!;
    await expect(getComputedStyle(disabledLabel).opacity).toBe('1');
    const operationsRow = picker.getByRole('checkbox', { name: 'Select Operations' }).closest('tr')!;
    const actions = within(operationsRow).getByRole('button', { name: 'More options for Operations' });
    const actionContainer = actions.closest('.user-selection-recipient-actions')!;
    await userEvent.hover(picker.getByRole('heading', { name: 'Select Recipient' }));
    await expect(getComputedStyle(actionContainer).opacity).toBe('0');
    picker.getByRole('checkbox', { name: 'Select Operations' }).focus();
    await expect(getComputedStyle(actionContainer).opacity).toBe('0');
    await waitFor(() => {
      actions.focus();
      expect(actions).toHaveFocus();
      expect(actions).toBeVisible();
    });
    await expect(actions.getBoundingClientRect().left).toBeLessThan(picker.getByRole('checkbox', { name: 'Select Operations' }).getBoundingClientRect().left);
    await expect(getComputedStyle(actions).backgroundColor).toBe('rgb(255, 255, 255)');
    await expect(getComputedStyle(actions).borderTopStyle).toBe('solid');
    await waitFor(() => expect(getComputedStyle(actions).borderTopColor).toBe('rgb(197, 196, 211)'));
    await waitFor(() => expect(getComputedStyle(operationsRow).backgroundColor).toBe('rgb(247, 248, 251)'));
    const focusedRowBackground = getComputedStyle(operationsRow).backgroundColor;
    await userEvent.click(actions);
    const actionMenu = page.getByRole('option', { name: 'Edit', exact: true }).closest<HTMLElement>('.dropdown-panel')!;
    await expect(actionMenu.getBoundingClientRect().width).toBeGreaterThanOrEqual(120);
    const editOption = within(actionMenu).getByRole('option', { name: 'Edit', exact: true });
    await expect(actionMenu.querySelector('.dropdown-option-check')).toBeNull();
    const optionBounds = editOption.getBoundingClientRect();
    await expect(canvasElement.ownerDocument.elementFromPoint(optionBounds.x + optionBounds.width / 2, optionBounds.y + optionBounds.height / 2)?.closest('[role="option"]')).toBe(editOption);
    await userEvent.hover(editOption);
    await expect(getComputedStyle(operationsRow).backgroundColor).toBe(focusedRowBackground);
    await expect(getComputedStyle(actions).backgroundColor).toBe('rgb(255, 255, 255)');
    await userEvent.click(editOption);
    const editorDialog = page.getByRole('dialog', { name: 'Edit Recipient' });
    const editor = within(editorDialog);
    await waitFor(() => expect(editor.getByDisplayValue('Operations')).toBeVisible());
    const verificationNote = editor.getByText(/A confirmation email will be sent/);
    await expect(verificationNote).toBeVisible();
    await expect(verificationNote.closest('.msg-info-root')).not.toHaveClass('msg-info-multi');
    await expect(verificationNote.closest('.msg-info-root')!.querySelector('ul')).toBeNull();
    await expect(editorDialog.getBoundingClientRect().width).toBeLessThanOrEqual(625);
    const editorBody = editorDialog.querySelector<HTMLElement>('.modal-body')!;
    await expect(editorBody.scrollWidth).toBeLessThanOrEqual(editorBody.clientWidth);
    for (const input of editor.getAllByRole('textbox')) {
      const field = input.closest('.input-input-wrapper')!.getBoundingClientRect();
      await expect(editorDialog.getBoundingClientRect().right - field.right).toBeGreaterThanOrEqual(29);
      await expect(field.width).toBeGreaterThan(0);
      if (window.innerWidth >= 762) await expect(field.width).toBe(390);
      await expect(getComputedStyle(input.closest('.input-input-wrapper')!, '::before').display).toBe('none');
    }
    await userEvent.clear(editor.getByDisplayValue('Operations'));
    await userEvent.type(editor.getByRole('textbox', { name: /Display Name/ }), 'Operations Team');
    await userEvent.click(editor.getByRole('button', { name: 'Save' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Operations Team' })).toBeInTheDocument();
    await userEvent.hover(picker.getByRole('checkbox', { name: 'Select Support' }).closest('tr')!);
    await userEvent.click(picker.getByRole('button', { name: 'More options for Support' }));
    await userEvent.click(page.getByRole('option', { name: 'Delete', exact: true }));
    let confirmation = within(await page.findByRole('alertdialog', { name: 'Delete "Support"' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Support' })).toBeInTheDocument();
    await userEvent.click(confirmation.getByRole('button', { name: 'Cancel', exact: true }));
    await waitFor(() => expect(page.queryByRole('alertdialog')).toBeNull());
    await expect(picker.getByRole('checkbox', { name: 'Select Support' })).toBeInTheDocument();
    await userEvent.hover(picker.getByRole('checkbox', { name: 'Select Support' }).closest('tr')!);
    await userEvent.click(picker.getByRole('button', { name: 'More options for Support' }));
    await userEvent.click(page.getByRole('option', { name: 'Delete', exact: true }));
    confirmation = within(await page.findByRole('alertdialog', { name: 'Delete "Support"' }));
    await expect(confirmation.getByRole('button', { name: 'Delete', exact: true })).toHaveAttribute('data-variant', 'negative');
    await userEvent.click(confirmation.getByRole('button', { name: 'Delete', exact: true }));
    await waitFor(() => expect(page.queryByRole('alertdialog')).toBeNull());
    await expect(picker.queryByRole('checkbox', { name: 'Select Support' })).not.toBeInTheDocument();
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Operations Team' }));
    await userEvent.click(picker.getByRole('button', { name: 'Cancel' }));
    await expect(page.queryByText('operations@example.com')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', { name: 'Add Additional Recipient' }));
    picker = within(page.getByRole('dialog', { name: 'Select Recipient' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Operations Team' })).not.toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Operations Team' }));
    await userEvent.click(picker.getByRole('button', { name: 'Done' }));
    const field = page.getByRole('button', { name: 'Edit additional recipients' }).closest<HTMLElement>('.user-selection-recipient-field')!;
    await expect(within(field).getByText('operations@example.com')).toBeVisible();
    await expect(within(field).queryByRole('textbox')).not.toBeInTheDocument();
    await expect(within(field).queryByRole('button', { name: /^Remove / })).not.toBeInTheDocument();
    const editRecipients = within(field).getByRole('button', { name: 'Edit additional recipients' });
    await expect(editRecipients.getBoundingClientRect().width).toBeGreaterThanOrEqual(field.clientWidth - 1);
    const assertEditIconAlignment = () => {
      const icon = editRecipients.querySelector('svg')!.getBoundingClientRect();
      expect(icon.width).toBe(13);
      expect(icon.height).toBe(13);
      const tag = field.querySelector('.tags-tag')!.getBoundingClientRect();
      expect(Math.abs(icon.top + icon.height / 2 - tag.top - tag.height / 2)).toBeLessThanOrEqual(1);
    };
    assertEditIconAlignment();
    const originalMinHeight = field.style.minHeight;
    field.style.minHeight = `${field.clientHeight + 40}px`;
    assertEditIconAlignment();
    field.style.minHeight = originalMinHeight;
    await userEvent.click(editRecipients, { offsetX: 8, offsetY: 8 });
    picker = within(page.getByRole('dialog', { name: 'Select Recipient' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Operations Team' })).toBeChecked();
    await userEvent.click(picker.getByRole('button', { name: 'Cancel' }));
    await expect(within(field).getByText('operations@example.com')).toBeVisible();
    await expect(available.getBoundingClientRect().height).toBeCloseTo(panelHeight, 0);
    await expect(selected.getBoundingClientRect().height).toBeCloseTo(panelHeight, 0);
    if (modalHeight < window.innerHeight * 0.9 - 1) {
      await expect(modal.getBoundingClientRect().height).toBeGreaterThan(modalHeight);
    }
    await expect(modal.getBoundingClientRect().height).toBeLessThanOrEqual(window.innerHeight * 0.9 + 1);
    page.getByRole('button', { name: 'Edit additional recipients' }).focus();
    await expect(page.getByRole('button', { name: 'Edit additional recipients' })).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Edit additional recipients' }));
    picker = within(page.getByRole('dialog', { name: 'Select Recipient' }));
    await expect(picker.getByRole('checkbox', { name: 'Select Operations Team' })).toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Operations Team' }));
    await userEvent.click(picker.getByRole('checkbox', { name: 'Select Alerts' }));
    await userEvent.click(picker.getByRole('button', { name: 'Done' }));
    await expect(within(field).queryByText('operations@example.com')).not.toBeInTheDocument();
    await expect(within(field).getByText('alerts@example.com')).toBeVisible();
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(within(canvasElement).getByRole('status')).toHaveTextContent('alerts@example.com');
    await expect(within(canvasElement).getByRole('status')).not.toHaveTextContent('operations@example.com');
  },
};
export const IndividualUsersRecipientLimits: Story = {
  args: {
    variant: 'individual-users', allowAdditionalEmails: true,
    options: Array.from({ length: 91 }, (_, index) => ({ value: `user:operations-${index}`, label: `Operations User ${index + 1}`, kind: 'user' as const })),
    value: Array.from({ length: 90 }, (_, index) => ({ value: `user:operations-${index}`, label: `Operations User ${index + 1}`, kind: 'user' as const })),
    additionalRecipientOptions: Array.from({ length: 11 }, (_, index) => ({ value: `email:alerts-${index}@example.com`, label: `Alert Recipient ${index + 1}`, email: `alerts-${index}@example.com`, verified: true })),
  },
  render: args => <Example {...args} />,
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', { name: /Operations User 91/ }));
    await expect(page.getByRole('alert')).toHaveTextContent('Select up to 90 users.');
    await userEvent.click(page.getByRole('button', { name: 'Add Additional Recipient' }));
    const picker = within(page.getByRole('dialog', { name: 'Select Recipient' }));
    for (let index = 1; index <= 10; index++) {
      await userEvent.click(picker.getByRole('checkbox', { name: new RegExp('^Select Alert Recipient ' + index + '$') }));
    }
    await userEvent.click(picker.getByRole('checkbox', { name: /^Select Alert Recipient 11$/ }));
    await expect(picker.getByRole('alert')).toHaveTextContent('Select up to 10 additional recipients.');
    await expect(picker.getByRole('checkbox', { name: /^Select Alert Recipient 11$/ })).not.toBeChecked();
    await userEvent.click(picker.getByRole('button', { name: 'Done' }));
    await userEvent.click(page.getByRole('button', { name: 'Done' }));
    await expect(within(canvasElement).getByRole('status')).toHaveTextContent('alerts-9@example.com');
    await expect(within(canvasElement).getByRole('status')).not.toHaveTextContent('alerts-10@example.com');
  },
};

export const SelectionLimit: Story = {
  args: { maxSelections: 2 },
  render: args => <Example {...args} />,
};
