import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

// ── Alert variant config ───────────────────────────────────────────────────

const ALERT_VARIANTS: {
  key: string;
  label: string;
  triggerVariant: string;
  title: string;
  description: string;
  confirmLabel?: string;
}[] = [
  {
    key: 'success',
    label: 'Success',
    triggerVariant: 'outline-green',
    title: 'Changes saved successfully!',
    description:
      'Your preferences have been updated and will take effect immediately across all your active sessions.',
  },
  {
    key: 'info',
    label: 'Info',
    triggerVariant: 'outline-blue',
    title: 'Sorting order will affect all users',
    description:
      'This order will be reflected for all users in List views, reports and dashboards when sorting is applied. Also, this property will be enabled in all picklists that are non-alphabetical.',
  },
  {
    key: 'warning',
    label: 'Warning',
    triggerVariant: 'outline-orange',
    title: 'Changes will affect all users',
    description:
      'Updating this setting will immediately apply to all active users in your organization. This cannot be undone. Do you want to continue?',
    confirmLabel: 'Continue',
  },
  {
    key: 'error',
    label: 'Error',
    triggerVariant: 'outline-red',
    title: 'Delete "ABC Record"',
    description:
      'Please note that when you delete a workflow rule, all the instant and scheduled actions will be disassociated from this rule. Are you sure you want to delete the rule?',
    confirmLabel: 'Delete',
  },
  {
    key: 'denial',
    label: 'Denial',
    triggerVariant: 'default',
    title: 'Permission Denied',
    description:
      'You do not have sufficient permissions to perform this action. Please contact your administrator to request access.',
  },
];

const meta: Meta<typeof Modal> = {
  title: 'Design System/Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Dialog modal with header, form body, optional footer note, and Cancel/Save actions.',
          'Figma: Chinnaiya Style Sheet node 150:25791.',
          'Renders into `document.body` via React portal. Closes on backdrop click or Escape key.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    isOpen: { control: 'boolean', table: { category: 'State' } },
    title: { control: 'text', table: { category: 'Anatomy' } },
    cancelLabel: { control: 'text', table: { category: 'Anatomy' } },
    saveLabel: { control: 'text', table: { category: 'Anatomy' } },
    width: { control: { type: 'number', min: 300, max: 900, step: 8 }, table: { category: 'Layout' } },
    onClose: { action: 'onClose', table: { category: 'Events' } },
    onCancel: { action: 'onCancel', table: { category: 'Events' } },
    onSave: { action: 'onSave', table: { category: 'Events' } },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * Generic modal — minimal content to show the shell structure.
 */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
        >
          <Input label="Full Name" layout="horizontal" width={509} columns="99px 390px" />
          <Input label="Email" layout="horizontal" width={509} columns="99px 390px" type="email" />
        </Modal>
      </>
    );
  },
  args: {
    title: 'Edit Record',
    width: 569,
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
  },
};

/**
 * Alert Modal — compact dialog with icon, title, optional description, and
 * right-aligned action buttons. Variants: success, info (single "Ok, Got it"),
 * warning, error (Cancel + action), denial (single "Ok, Got it").
 * Figma: Chinnaiya Style Sheet node 93672:150667.
 */
export const AlertModal: Story = {
  name: 'Alert Modal',
  render: () => {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const active = ALERT_VARIANTS.find((v) => v.key === activeKey);

    return (
      <>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {ALERT_VARIANTS.map((v) => (
            <Button key={v.key} variant={v.triggerVariant as any} onClick={() => setActiveKey(v.key)}>
              {v.label}
            </Button>
          ))}
        </div>

        {active && (
          <Modal
            type="alert"
            variant={activeKey as any}
            isOpen
            title={active.title}
            description={active.description}
            onClose={() => setActiveKey(null)}
            onCancel={() => setActiveKey(null)}
            onSave={() => setActiveKey(null)}
            confirmLabel={active.confirmLabel}
            cancelLabel="Cancel"
            width={480}
          />
        )}
      </>
    );
  },
};

/**
 * Alert only heading — same alert modal but with title only, no description paragraph.
 * Used when the message is short and self-explanatory.
 */
export const AlertOnlyHeading: Story = {
  name: 'Alert Only Heading',
  render: () => {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const headingVariants = [
      { key: 'success', label: 'Success', triggerVariant: 'outline-green', title: 'Record saved successfully.' },
      { key: 'info',    label: 'Info',    triggerVariant: 'outline-blue',  title: 'This action will apply to all users.' },
      { key: 'warning', label: 'Warning', triggerVariant: 'outline-orange', title: 'Are you sure you want to continue?', confirmLabel: 'Continue' },
      { key: 'error',   label: 'Error',   triggerVariant: 'outline-red',   title: 'Delete "Sales Pipeline Q3"', confirmLabel: 'Delete' },
      { key: 'denial',  label: 'Denial',  triggerVariant: 'default',       title: 'Permission Denied' },
    ];

    const active = headingVariants.find((v) => v.key === activeKey);

    return (
      <>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {headingVariants.map((v) => (
            <Button key={v.key} variant={v.triggerVariant as any} onClick={() => setActiveKey(v.key)}>
              {v.label}
            </Button>
          ))}
        </div>

        {active && (
          <Modal
            type="alert"
            variant={activeKey as any}
            isOpen
            title={active.title}
            onClose={() => setActiveKey(null)}
            onCancel={() => setActiveKey(null)}
            onSave={() => setActiveKey(null)}
            confirmLabel={(active as any).confirmLabel}
            cancelLabel="Cancel"
            width={480}
          />
        )}
      </>
    );
  },
};

