import { useState, type FormEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';
import { Button } from '../components/Button/Button';

// ─────────────────────────────────────────────────────────────────────────────
// Reference data
// ─────────────────────────────────────────────────────────────────────────────

const LEAD_STATUS = [
  { value: 'new',         label: 'New' },
  { value: 'contacted',   label: 'Contacted' },
  { value: 'qualified',   label: 'Qualified' },
  { value: 'proposal',    label: 'Proposal Sent' },
  { value: 'negotiation', label: 'Negotiation' },
  { value: 'won',         label: 'Won' },
  { value: 'lost',        label: 'Lost' },
];

const LEAD_SOURCE = [
  { value: 'web',      label: 'Web Site' },
  { value: 'call',     label: 'Cold Call' },
  { value: 'referral', label: 'Referral' },
  { value: 'email',    label: 'Email Campaign' },
  { value: 'social',   label: 'Social Media' },
  { value: 'event',    label: 'Trade Show' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  width: 670,
  background: 'var(--ds-bg-common-card)',
  borderRadius: 8,
  border: '1px solid var(--ds-components-input-default-outline)',
  overflow: 'hidden',
  fontFamily: 'var(--ds-font-family-base)',
};

const cardHeader: React.CSSProperties = {
  padding: '16px 24px',
  borderBottom: '1px solid var(--ds-components-input-default-outline)',
};

const cardTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 'var(--ds-font-size-h2)',
  fontWeight: 'var(--ds-font-weight-semibold)' as React.CSSProperties['fontWeight'],
  color: 'var(--ds-text-base)',
  lineHeight: 'var(--ds-line-height-h2)',
};

const cardBody: React.CSSProperties = {
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--ds-components-input-default-outline)',
  margin: '4px 0',
};

const cardFooter: React.CSSProperties = {
  padding: '12px 24px',
  borderTop: '1px solid var(--ds-components-input-default-outline)',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
};


// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Patterns/Forms',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Composed form patterns built with the Input and Select components. ' +
          'Demonstrates field layout, validation states, and helper text.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// New Lead form — interactive with validation
// ─────────────────────────────────────────────────────────────────────────────

export const NewLeadForm: Story = {
  name: 'New Lead',
  render: () => {
    const [values, setValues] = useState({
      firstName: '',
      lastName:  '',
      email:     '',
      phone:     '',
      leadStatus: '',
      leadSource: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [saved,  setSaved]  = useState(false);

    const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues(v => ({ ...v, [field]: e.target.value }));

    const setSelect = (field: string) => (value: string) =>
      setValues(v => ({ ...v, [field]: value }));

    const validate = (): Record<string, string> => {
      const e: Record<string, string> = {};
      if (!values.firstName.trim()) e.firstName = 'First name is required.';
      if (!values.email.trim()) {
        e.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        e.email = 'Enter a valid email address.';
      }
      if (!values.leadStatus) e.leadStatus = 'Please select a lead status.';
      return e;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const errs = validate();
      setErrors(errs);
      if (Object.keys(errs).length === 0) setSaved(true);
    };

    const handleReset = () => {
      setValues({ firstName: '', lastName: '', email: '', phone: '', leadStatus: '', leadSource: '' });
      setErrors({});
      setSaved(false);
    };

    if (saved) {
      return (
        <div style={card}>
          <div style={{ ...cardBody, alignItems: 'center', padding: '48px 24px', gap: 12 }}>
            <span style={{ fontSize: 32 }}>✓</span>
            <p style={{ margin: 0, fontSize: 'var(--ds-font-size-base)', color: 'var(--ds-text-base)', fontFamily: 'var(--ds-font-family-base)' }}>
              Lead <strong>{values.firstName} {values.lastName}</strong> saved successfully.
            </p>
            <Button variant="default" onClick={handleReset}>
              Add another lead
            </Button>
          </div>
        </div>
      );
    }

    return (
      <form style={card} onSubmit={handleSubmit} noValidate>
        <div style={cardHeader}>
          <h2 style={cardTitle}>New Lead</h2>
        </div>

        <div style={cardBody}>
          <Input
            label="First Name"
            required
            value={values.firstName}
            onChange={set('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
            width={622}
          />
          <Input
            label="Last Name"
            value={values.lastName}
            onChange={set('lastName')}
            width={622}
          />
          <Input
            label="Work Email"
            type="email"
            required
            value={values.email}
            onChange={set('email')}
            error={!!errors.email}
            helperText={errors.email}
            width={622}
          />
          <Input
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            width={622}
          />

          <hr style={divider} />

          <Select
            label="Lead Status"
            required
            value={values.leadStatus}
            options={LEAD_STATUS}
            onChange={setSelect('leadStatus')}
            error={!!errors.leadStatus}
            helperText={errors.leadStatus}
            width={622}
          />
          <Select
            label="Lead Source"
            value={values.leadSource}
            options={LEAD_SOURCE}
            onChange={setSelect('leadSource')}
            width={622}
          />
        </div>

        <div style={cardFooter}>
          <Button variant="default" type="button" onClick={handleReset}>Cancel</Button>
          <Button variant="primary" type="submit">Save Lead</Button>
        </div>
      </form>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Pre-filled — editing an existing record
// ─────────────────────────────────────────────────────────────────────────────

export const EditLeadForm: Story = {
  name: 'Edit Lead',
  render: () => {
    const [values, setValues] = useState({
      firstName:  'Chinnaiya',
      lastName:   'Raja',
      email:      'chinna@zoho.com',
      phone:      '+91 98400 00000',
      leadStatus: 'qualified',
      leadSource: 'referral',
    });

    const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues(v => ({ ...v, [field]: e.target.value }));

    const setSelect = (field: string) => (value: string) =>
      setValues(v => ({ ...v, [field]: value }));

    return (
      <div style={card}>
        <div style={cardHeader}>
          <h2 style={cardTitle}>Edit Lead</h2>
        </div>
        <div style={cardBody}>
          <Input label="First Name" required value={values.firstName} onChange={set('firstName')} width={622} />
          <Input label="Last Name"           value={values.lastName}  onChange={set('lastName')}  width={622} />
          <Input label="Work Email" type="email" required value={values.email} onChange={set('email')} width={622} />
          <Input label="Phone"      type="tel"            value={values.phone} onChange={set('phone')} width={622} />
          <hr style={divider} />
          <Select label="Lead Status" required value={values.leadStatus} options={LEAD_STATUS} onChange={setSelect('leadStatus')} width={622} />
          <Select label="Lead Source"          value={values.leadSource} options={LEAD_SOURCE} onChange={setSelect('leadSource')} width={622} />
        </div>
        <div style={cardFooter}>
          <Button variant="default" type="button">Cancel</Button>
          <Button variant="primary" type="button">Save Changes</Button>
        </div>
      </div>
    );
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Validation — all required fields in error state
// ─────────────────────────────────────────────────────────────────────────────

export const ValidationErrors: Story = {
  name: 'Validation Errors',
  render: () => (
    <div style={card}>
      <div style={cardHeader}>
        <h2 style={cardTitle}>New Lead</h2>
      </div>
      <div style={cardBody}>
        <Input
          label="First Name"
          required
          error
          helperText="First name is required."
          width={622}
        />
        <Input
          label="Last Name"
          width={622}
        />
        <Input
          label="Work Email"
          type="email"
          required
          value="not-an-email"
          error
          helperText="Enter a valid email address."
          width={622}
        />
        <Input label="Phone" type="tel" width={622} />
        <hr style={divider} />
        <Select
          label="Lead Status"
          required
          error
          helperText="Please select a lead status."
          options={LEAD_STATUS}
          width={622}
        />
        <Select label="Lead Source" options={LEAD_SOURCE} width={622} />
      </div>
      <div style={cardFooter}>
        <Button variant="default" type="button">Cancel</Button>
        <Button variant="primary" type="button">Save Lead</Button>
      </div>
    </div>
  ),
};
