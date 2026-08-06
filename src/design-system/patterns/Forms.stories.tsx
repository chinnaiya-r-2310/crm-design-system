import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal/Modal';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Textarea } from '../components/Textarea/Textarea';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { FormSection } from '../components/FormSection/FormSection';
import { Info } from '../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Shared option lists (10+ items auto-enable the dropdown search box)
// ─────────────────────────────────────────────────────────────────────────────

const COUNTRIES = [
  { value: 'in',  label: 'India' },
  { value: 'us',  label: 'United States' },
  { value: 'gb',  label: 'United Kingdom' },
  { value: 'au',  label: 'Australia' },
  { value: 'ca',  label: 'Canada' },
  { value: 'de',  label: 'Germany' },
  { value: 'fr',  label: 'France' },
  { value: 'jp',  label: 'Japan' },
  { value: 'sg',  label: 'Singapore' },
  { value: 'cn',  label: 'China' },
  { value: 'br',  label: 'Brazil' },
  { value: 'mx',  label: 'Mexico' },
  { value: 'kr',  label: 'South Korea' },
  { value: 'it',  label: 'Italy' },
  { value: 'es',  label: 'Spain' },
  { value: 'nl',  label: 'Netherlands' },
  { value: 'se',  label: 'Sweden' },
  { value: 'ch',  label: 'Switzerland' },
  { value: 'ae',  label: 'United Arab Emirates' },
  { value: 'sa',  label: 'Saudi Arabia' },
  { value: 'za',  label: 'South Africa' },
  { value: 'nz',  label: 'New Zealand' },
  { value: 'hk',  label: 'Hong Kong' },
  { value: 'my',  label: 'Malaysia' },
  { value: 'id',  label: 'Indonesia' },
];

const CURRENCIES = [
  { value: 'usd', label: 'USD – US Dollar' },
  { value: 'eur', label: 'EUR – Euro' },
  { value: 'gbp', label: 'GBP – British Pound' },
  { value: 'inr', label: 'INR – Indian Rupee' },
  { value: 'jpy', label: 'JPY – Japanese Yen' },
  { value: 'cny', label: 'CNY – Chinese Yuan' },
  { value: 'aud', label: 'AUD – Australian Dollar' },
  { value: 'cad', label: 'CAD – Canadian Dollar' },
  { value: 'sgd', label: 'SGD – Singapore Dollar' },
  { value: 'chf', label: 'CHF – Swiss Franc' },
  { value: 'sek', label: 'SEK – Swedish Krona' },
  { value: 'brl', label: 'BRL – Brazilian Real' },
  { value: 'mxn', label: 'MXN – Mexican Peso' },
  { value: 'krw', label: 'KRW – South Korean Won' },
  { value: 'aed', label: 'AED – UAE Dirham' },
  { value: 'sar', label: 'SAR – Saudi Riyal' },
  { value: 'hkd', label: 'HKD – Hong Kong Dollar' },
  { value: 'myr', label: 'MYR – Malaysian Ringgit' },
  { value: 'idr', label: 'IDR – Indonesian Rupiah' },
  { value: 'nzd', label: 'NZD – New Zealand Dollar' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Patterns/Forms',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// Create New Employee
// ─────────────────────────────────────────────────────────────────────────────

export const CreateEmployee: Story = {
  name: 'Create New Employee',
  render: () => {
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
          isOpen={open}
          title="Create New Employee"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={610}
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
            { label: 'Head Office',     value: 'hq' },
            { label: 'Remote',          value: 'remote' },
            { label: 'Hybrid',          value: 'hybrid' },
            { label: 'Branch – NYC',    value: 'nyc' },
            { label: 'Branch – London', value: 'london' },
          ]} />

          <FormSection title="Additional" />
          <Textarea label="Notes"             layout="horizontal" width={W} columns={COL} />
        </Modal>
      </>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Create Contact
// ─────────────────────────────────────────────────────────────────────────────

export const CreateContact: Story = {
  name: 'Create Contact',
  render: () => {
    const [open, setOpen]               = useState(false);
    const [emailOptOut, setEmailOptOut] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Contact
        </Button>
        <Modal
          isOpen={open}
          title="Create Contact"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          cancelLabel="Cancel"
          saveLabel="Save Contact"
          width={610}
        >
          <FormSection title="Contact Information">
            <Input label="First Name" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Last Name"           layout="horizontal" width={W} columns={COLS} />
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
};

// ─────────────────────────────────────────────────────────────────────────────
// Create Vendor
// ─────────────────────────────────────────────────────────────────────────────

export const CreateVendor: Story = {
  name: 'Create Vendor',
  render: () => {
    const [open, setOpen] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Vendor
        </Button>
        <Modal
          isOpen={open}
          title="Create Vendor"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={610}
        >
          <FormSection title="Basic Information">
            <Input label="Vendor Name" required layout="horizontal" width={W} columns={COLS} />
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
            <Dropdown label="Country" layout="horizontal" width={W} columns={COLS} options={COUNTRIES} />
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
            <Dropdown label="Currency" layout="horizontal" width={W} columns={COLS} options={CURRENCIES} />
            <Input label="Tax ID / GST" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Additional">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add a description…" minHeight={90} />
          </FormSection>
        </Modal>
      </>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Create Deal
// ─────────────────────────────────────────────────────────────────────────────

export const CreateDeal: Story = {
  name: 'Create Deal',
  render: () => {
    const [open, setOpen] = useState(false);

    const W    = 550;
    const COLS = '140px 390px';

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Deal
        </Button>
        <Modal
          isOpen={open}
          title="Create Deal"
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setOpen(false)}
          cancelLabel="Cancel"
          saveLabel="Save Deal"
          width={610}
        >
          <FormSection title="Deal Information">
            <Input label="Deal Name"    required layout="horizontal" width={W} columns={COLS} />
            <Input label="Account Name" required layout="horizontal" width={W} columns={COLS} placeholder="Search account…" />
            <Input label="Contact Name"          layout="horizontal" width={W} columns={COLS} placeholder="Search contact…" />
          </FormSection>

          <FormSection title="Sales Details">
            <Dropdown
              label="Stage"
              required
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'qualification',     label: 'Qualification' },
                { value: 'needs_analysis',    label: 'Needs Analysis' },
                { value: 'value_proposition', label: 'Value Proposition' },
                { value: 'decision_makers',   label: 'Id. Decision Makers' },
                { value: 'perception',        label: 'Perception Analysis' },
                { value: 'proposal',          label: 'Proposal / Price Quote' },
                { value: 'negotiation',       label: 'Negotiation / Review' },
                { value: 'closed_won',        label: 'Closed Won' },
                { value: 'closed_lost',       label: 'Closed Lost' },
              ]}
            />
            <Input label="Amount"          type="number" layout="horizontal" width={W} columns={COLS} placeholder="0.00" />
            <DatePicker label="Closing Date" required    layout="horizontal" width={W} columns={COLS} />
            <Input label="Probability (%)" type="number" layout="horizontal" width={W} columns={COLS} placeholder="0" />
          </FormSection>

          <FormSection title="Lead & Assignment">
            <Dropdown
              label="Lead Source"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'web',       label: 'Web Site' },
                { value: 'cold_call', label: 'Cold Call' },
                { value: 'referral',  label: 'Referral' },
                { value: 'email',     label: 'Email Campaign' },
                { value: 'social',    label: 'Social Media' },
                { value: 'partner',   label: 'Partner' },
                { value: 'event',     label: 'Internal Event' },
                { value: 'other',     label: 'Other' },
              ]}
            />
            <Dropdown
              label="Deal Owner"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'chinnaiya', label: 'Chinnaiya R' },
                { value: 'priya',     label: 'Priya S' },
                { value: 'arjun',     label: 'Arjun M' },
                { value: 'divya',     label: 'Divya K' },
              ]}
            />
            <Dropdown
              label="Deal Type"
              layout="horizontal" width={W} columns={COLS}
              options={[
                { value: 'new_business',      label: 'New Business' },
                { value: 'existing_business', label: 'Existing Business' },
              ]}
            />
          </FormSection>

          <FormSection title="Additional">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add a description…" minHeight={90} />
          </FormSection>
        </Modal>
      </>
    );
  },
};
