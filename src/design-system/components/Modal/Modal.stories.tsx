import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Textarea } from '../Textarea/Textarea';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Tooltip } from '../Tooltip/Tooltip';
import { DatePicker } from '../DatePicker/DatePicker';
import { FormSection } from '../FormSection/FormSection';
import { Info } from '../../foundations/icons/Icons';

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

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Locale Information form — matches the Figma design exactly.
 * Use the "Open Modal" button to trigger it.
 */
export const LocaleInformation: Story = {
  name: 'Locale Information',
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
          title="Locale Information"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          footerNote={
            <>
              <Checkbox id="recommend" />
              <label htmlFor="recommend" style={{ fontSize: 14, color: '#313949', cursor: 'pointer' }}>
                Use recommended variant
              </label>
              <a href="#" style={{ fontSize: 14, color: '#5464F2', textDecoration: 'none', marginLeft: 8 }}>
                Preview
              </a>
            </>
          }
        >
          <Dropdown label="Country" layout="horizontal" width={509} columns="99px 390px" options={[]} />
          <Dropdown label="Language" layout="horizontal" width={509} columns="99px 390px" options={[]} />
          <Dropdown label="Date Format" layout="horizontal" width={509} columns="99px 390px" options={[]} />
          <Dropdown label="Time Format" layout="horizontal" width={509} columns="99px 390px" options={[]} />
          <Dropdown label="Number Format" layout="horizontal" width={509} columns="99px 390px" options={[]} />
          <Dropdown label="Currency" layout="horizontal" width={509} columns="99px 390px" options={[]} />
        </Modal>
      </>
    );
  },
  args: {
    width: 569,
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
  },
};

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
 * Create New Employee — full HR form with all common employee fields.
 */
export const CreateEmployee: Story = {
  name: 'Create New Employee',
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [sendWelcome, setSendWelcome] = useState(false);

    const COL = '140px 390px';
    const W   = 550;

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create New Employee
        </Button>
        <Modal
          {...args}
          isOpen={open}
          title="Create New Employee"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          footerNote={
            <>
              <Checkbox
                id="send-welcome"
                checked={sendWelcome}
                onChange={(e) => setSendWelcome(e.target.checked)}
              />
              <label
                htmlFor="send-welcome"
                style={{
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize: 'var(--ds-font-size-base)',
                  fontWeight: 'var(--ds-font-weight-regular)',
                  color: 'var(--ds-text-base)',
                  cursor: 'pointer',
                }}
              >
                Send welcome email to new employee
              </label>
              <Tooltip
                content="Employee will receive login credentials and onboarding instructions via email."
                variant="black"
                placement="top"
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--ds-text-muted, #8A94A6)',
                    cursor: 'default',
                    lineHeight: 0,
                  }}
                >
                  <Info />
                </span>
              </Tooltip>
            </>
          }
        >
          <FormSection title="Personal Information" />
          <Input label="First Name"           layout="horizontal" width={W} columns={COL} required />
          <Input label="Last Name"            layout="horizontal" width={W} columns={COL} required />
          <Input label="Employee ID"          layout="horizontal" width={W} columns={COL} />
          <Input label="Email"                layout="horizontal" width={W} columns={COL} type="email" required />
          <Input label="Phone"                layout="horizontal" width={W} columns={COL} type="tel" />

          <FormSection title="Employment Details" />
          <Dropdown label="Department"        layout="horizontal" width={W} columns={COL} options={[
            { label: 'Engineering',         value: 'engineering' },
            { label: 'Product',             value: 'product' },
            { label: 'Design',              value: 'design' },
            { label: 'Marketing',           value: 'marketing' },
            { label: 'Human Resources',     value: 'hr' },
            { label: 'Finance',             value: 'finance' },
            { label: 'Sales',               value: 'sales' },
            { label: 'Operations',          value: 'operations' },
            { label: 'Customer Support',    value: 'support' },
            { label: 'Legal & Compliance',  value: 'legal' },
          ]} />
          <Input label="Job Title"            layout="horizontal" width={W} columns={COL} />
          <DatePicker label="Date of Joining" layout="horizontal" width={W} columns={COL} />
          <Dropdown label="Reporting Manager" layout="horizontal" width={W} columns={COL} options={[
            { label: 'Alice Johnson', value: 'alice' },
            { label: 'Bob Chen',      value: 'bob' },
            { label: 'Carol Smith',   value: 'carol' },
          ]} />
          <Dropdown label="Work Location"     layout="horizontal" width={W} columns={COL} options={[
            { label: 'Head Office',   value: 'hq' },
            { label: 'Remote',        value: 'remote' },
            { label: 'Hybrid',        value: 'hybrid' },
            { label: 'Branch – NYC',  value: 'nyc' },
            { label: 'Branch – London', value: 'london' },
          ]} />

          <FormSection title="Additional" />
          <Textarea label="Notes"             layout="horizontal" width={W} columns={COL} />
        </Modal>
      </>
    );
  },
  args: {
    width: 610,
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
  },
};

/**
 * Create Contact — CRM form with all sections.
 * Demonstrates sticky header/footer: header and Cancel/Save buttons stay pinned
 * while the form body scrolls. Info icon inside the Account Name lookup field;
 * Email Opt-Out checkbox lives in the body so it scrolls with the content.
 */
export const CreateContact: Story = {
  name: 'Create Contact',
  render: (args) => {
    const [open, setOpen]           = useState(false);
    const [emailOptOut, setEmailOptOut] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Contact
        </Button>
        <Modal
          {...args}
          isOpen={open}
          title="Create Contact"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
        >
          <FormSection title="Contact Information">
            <Input label="First Name" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Last Name"  layout="horizontal" width={W} columns={COLS} />
            <Input
              label="Account Name"
              layout="horizontal"
              width={W}
              columns={COLS}
              readOnly
              placeholder="Search account…"
              suffix={
                <Tooltip content="Link this contact to an existing account" variant="black" placement="top">
                  <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--ds-text-label)', cursor: 'default', lineHeight: 0 }}>
                    <Info />
                  </span>
                </Tooltip>
              }
            />
          </FormSection>

          <FormSection title="Contact Details">
            <Input label="Email"      type="email" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Phone"      type="tel"            layout="horizontal" width={W} columns={COLS} />
            <Input label="Mobile"     type="tel"            layout="horizontal" width={W} columns={COLS} />
            <Input label="Department"                       layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Lead & Assignment">
            <Dropdown label="Lead Source"   placeholder="Select" layout="horizontal" width={W} columns={COLS} options={[
              { value: 'web',       label: 'Web Site' },
              { value: 'cold_call', label: 'Cold Call' },
              { value: 'referral',  label: 'Referral' },
              { value: 'email',     label: 'Email Campaign' },
              { value: 'social',    label: 'Social Media' },
              { value: 'other',     label: 'Other' },
            ]} />
            <Dropdown label="Contact Owner" placeholder="Select" layout="horizontal" width={W} columns={COLS} options={[
              { value: 'chinnaiya', label: 'Chinnaiya R' },
              { value: 'priya',     label: 'Priya S' },
              { value: 'arjun',     label: 'Arjun M' },
            ]} />
          </FormSection>

          <FormSection title="Additional Information">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add Description" minHeight={90} />
            <Checkbox
              label="Email Opt-Out"
              checked={emailOptOut}
              onChange={e => setEmailOptOut(e.target.checked)}
            />
          </FormSection>
        </Modal>
      </>
    );
  },
  args: {
    width: 610,
    cancelLabel: 'Cancel',
    saveLabel: 'Save Contact',
  },
};

/**
 * Create Vendor — CRM vendor record form with all standard sections.
 * Demonstrates sticky header/footer with scrollable body.
 */
export const CreateVendor: Story = {
  name: 'Create Vendor',
  render: (args) => {
    const [open, setOpen] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Vendor
        </Button>
        <Modal
          {...args}
          isOpen={open}
          title="Create Vendor"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
        >
          <FormSection title="Basic Information">
            <Input label="Vendor Name"  required layout="horizontal" width={W} columns={COLS} />
            <Dropdown
              label="Vendor Owner"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'chinnaiya', label: 'Chinnaiya R' },
                { value: 'priya',     label: 'Priya S' },
                { value: 'arjun',     label: 'Arjun M' },
              ]}
            />
            <Dropdown
              label="Vendor Type"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'supplier',     label: 'Supplier' },
                { value: 'manufacturer', label: 'Manufacturer' },
                { value: 'distributor',  label: 'Distributor' },
                { value: 'reseller',     label: 'Reseller' },
                { value: 'consultant',   label: 'Consultant' },
              ]}
            />
          </FormSection>

          <FormSection title="Contact Details">
            <Input label="Phone"   type="tel"   layout="horizontal" width={W} columns={COLS} />
            <Input label="Email"   type="email" layout="horizontal" width={W} columns={COLS} />
            <Input label="Website" type="url"   layout="horizontal" width={W} columns={COLS} placeholder="https://" />
          </FormSection>

          <FormSection title="Address">
            <Input label="Street"   layout="horizontal" width={W} columns={COLS} />
            <Input label="City"     layout="horizontal" width={W} columns={COLS} />
            <Input label="State"    layout="horizontal" width={W} columns={COLS} />
            <Dropdown
              label="Country"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'in',  label: 'India' },
                { value: 'us',  label: 'United States' },
                { value: 'gb',  label: 'United Kingdom' },
                { value: 'au',  label: 'Australia' },
                { value: 'sg',  label: 'Singapore' },
                { value: 'de',  label: 'Germany' },
              ]}
            />
            <Input label="Zip Code" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Financial">
            <Dropdown
              label="Payment Terms"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'net15',   label: 'Net 15' },
                { value: 'net30',   label: 'Net 30' },
                { value: 'net45',   label: 'Net 45' },
                { value: 'net60',   label: 'Net 60' },
                { value: 'cod',     label: 'Cash on Delivery' },
                { value: 'prepaid', label: 'Prepaid' },
              ]}
            />
            <Dropdown
              label="Currency"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'inr', label: 'INR – Indian Rupee' },
                { value: 'usd', label: 'USD – US Dollar' },
                { value: 'eur', label: 'EUR – Euro' },
                { value: 'gbp', label: 'GBP – British Pound' },
                { value: 'sgd', label: 'SGD – Singapore Dollar' },
              ]}
            />
            <Input label="Tax ID / GST" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Additional">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add a description…" minHeight={90} />
          </FormSection>
        </Modal>
      </>
    );
  },
  args: {
    width: 610,
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
  },
};

/**
 * Create Deal — CRM deal record form with all standard sections.
 * Covers deal info, sales details, lead & assignment, and additional notes.
 */
export const CreateDeal: Story = {
  name: 'Create Deal',
  render: (args) => {
    const [open, setOpen] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Deal
        </Button>
        <Modal
          {...args}
          isOpen={open}
          title="Create Deal"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
        >
          <FormSection title="Deal Information">
            <Input label="Deal Name"    required layout="horizontal" width={W} columns={COLS} />
            <Input
              label="Account Name"
              required
              layout="horizontal"
              width={W}
              columns={COLS}
              placeholder="Search account…"
            />
            <Input
              label="Contact Name"
              layout="horizontal"
              width={W}
              columns={COLS}
              placeholder="Search contact…"
            />
          </FormSection>

          <FormSection title="Sales Details">
            <Dropdown
              label="Stage"
              required
              layout="horizontal"
              width={W}
              columns={COLS}
              options={[
                { value: 'qualification',    label: 'Qualification' },
                { value: 'needs_analysis',   label: 'Needs Analysis' },
                { value: 'value_proposition',label: 'Value Proposition' },
                { value: 'decision_makers',  label: 'Id. Decision Makers' },
                { value: 'perception',       label: 'Perception Analysis' },
                { value: 'proposal',         label: 'Proposal / Price Quote' },
                { value: 'negotiation',      label: 'Negotiation / Review' },
                { value: 'closed_won',       label: 'Closed Won' },
                { value: 'closed_lost',      label: 'Closed Lost' },
              ]}
            />
            <Input
              label="Amount"
              type="number"
              layout="horizontal"
              width={W}
              columns={COLS}
              placeholder="0.00"
            />
            <DatePicker label="Closing Date" required layout="horizontal" width={W} columns={COLS} />
            <Input
              label="Probability (%)"
              type="number"
              layout="horizontal"
              width={W}
              columns={COLS}
              placeholder="0"
            />
          </FormSection>

          <FormSection title="Lead & Assignment">
            <Dropdown
              label="Lead Source"
              layout="horizontal"
              width={W}
              columns={COLS}
              options={[
                { value: 'web',        label: 'Web Site' },
                { value: 'cold_call',  label: 'Cold Call' },
                { value: 'referral',   label: 'Referral' },
                { value: 'email',      label: 'Email Campaign' },
                { value: 'social',     label: 'Social Media' },
                { value: 'partner',    label: 'Partner' },
                { value: 'event',      label: 'Internal Event' },
                { value: 'other',      label: 'Other' },
              ]}
            />
            <Dropdown
              label="Deal Owner"
              layout="horizontal"
              width={W}
              columns={COLS}
              options={[
                { value: 'chinnaiya', label: 'Chinnaiya R' },
                { value: 'priya',     label: 'Priya S' },
                { value: 'arjun',     label: 'Arjun M' },
                { value: 'divya',     label: 'Divya K' },
              ]}
            />
            <Dropdown
              label="Deal Type"
              layout="horizontal"
              width={W}
              columns={COLS}
              options={[
                { value: 'new_business',      label: 'New Business' },
                { value: 'existing_business', label: 'Existing Business' },
              ]}
            />
          </FormSection>

          <FormSection title="Additional">
            <Textarea
              label="Description"
              layout="horizontal"
              width={W}
              columns={COLS}
              placeholder="Add a description…"
              minHeight={90}
            />
          </FormSection>
        </Modal>
      </>
    );
  },
  args: {
    width: 610,
    cancelLabel: 'Cancel',
    saveLabel: 'Save Deal',
  },
};

/**
 * Wide modal — 720px, more form fields.
 */
export const Wide: Story = {
  name: 'Wide (720px)',
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Wide Modal
        </Button>
        <Modal
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
        >
          <Input label="First Name" layout="horizontal" width={660} columns="120px 520px" />
          <Input label="Last Name" layout="horizontal" width={660} columns="120px 520px" />
          <Input label="Email" layout="horizontal" width={660} columns="120px 520px" type="email" />
          <Input label="Phone" layout="horizontal" width={660} columns="120px 520px" type="tel" required />
          <Dropdown label="Account" layout="horizontal" width={660} columns="120px 520px" options={[]} />
        </Modal>
      </>
    );
  },
  args: {
    title: 'Add Contact',
    width: 720,
    cancelLabel: 'Cancel',
    saveLabel: 'Create',
  },
};
