import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';
import { Tags } from '../components/Tags';
import { MessageBox } from '../components/MessageBox';
import { FormSection } from '../components/FormSection';
import { Select } from '../components/Select';

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────

const DURATION_OPTIONS = [
  { value: '3m', label: '3 Months' },
  { value: '6m', label: '6 Months' },
  { value: '1y', label: '1 Year' },
  { value: '2y', label: '2 Years' },
  { value: '3y', label: '3 Years' },
  { value: '5y', label: '5 Years' },
  { value: '7y', label: '7 Years' },
];

const AFTER_OPTIONS = [
  { value: 'archive', label: 'Archive' },
  { value: 'delete',  label: 'Delete'  },
];

const MODULE_OPTIONS = [
  { value: 'leads',          label: 'Leads' },
  { value: 'contacts',       label: 'Contacts' },
  { value: 'accounts',       label: 'Accounts' },
  { value: 'deals',          label: 'Deals' },
  { value: 'activities',     label: 'Activities' },
  { value: 'cases',          label: 'Cases' },
  { value: 'solutions',      label: 'Solutions' },
  { value: 'products',       label: 'Products' },
  { value: 'forecasts',      label: 'Forecasts' },
  { value: 'reports',        label: 'Reports' },
  { value: 'campaigns',      label: 'Campaigns' },
  { value: 'quotes',         label: 'Quotes' },
  { value: 'sales-orders',   label: 'Sales Orders' },
  { value: 'purchase-orders',label: 'Purchase Orders' },
  { value: 'invoices',       label: 'Invoices' },
];

const SUBFORM_OPTIONS = [
  { value: 'contact-roles',    label: 'Contact Roles' },
  { value: 'product-details',  label: 'Product Details' },
  { value: 'invited-guests',   label: 'Invited Guests' },
  { value: 'expense-details',  label: 'Expense Details' },
  { value: 'participants',     label: 'Participants' },
  { value: 'stage-history',    label: 'Stage History' },
];

type TagItem = { value: string; label: string };

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Patterns/Audit Log Duration',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Manage Audit Log Duration modal. ' +
          'Composed from Modal + FormSection + Select + Tags + MessageBox. ' +
          'Reference: https://auditlog-basic.onslate.in/',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// Pattern
// ─────────────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Audit Log Duration',
  parameters: { controls: { disable: true } },
  render: () => {
    const [open, setOpen]           = useState(false);
    const [confirm, setConfirm]     = useState(false);
    const [visibleDur, setVisibleDur]   = useState('1y');
    const [afterVisible, setAfterVisible] = useState('archive');
    const [archiveDur, setArchiveDur]   = useState('1y');
    const [modules, setModules]     = useState<TagItem[]>([]);
    const [subforms, setSubforms]   = useState<TagItem[]>([]);

    const hasExemptions = modules.length > 0 || subforms.length > 0;

    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F0F2F7',
        fontFamily: 'var(--ds-font-family-base, sans-serif)',
      }}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: '8px 20px',
            background: '#5464F2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Manage Audit Log Duration
        </button>

        {/* ── Main modal ── */}
        <Modal
          isOpen={open}
          title="Manage Audit Log Duration"
          onClose={() => setOpen(false)}
          onSave={() => setConfirm(true)}
          cancelLabel="Cancel"
          saveLabel="Save"
          footerNote="Choose how long the logs should stay visible and archived in the Audit Log."
          width={600}
        >
          {/* Info panel */}
          <MessageBox
            variant="info"
            closable={false}
            message={
              <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <li>You can choose how long logs stay visible on the Audit Log page.</li>
                <li>Remaining logs can be archived or deleted to free up space.</li>
                <li>Audit Logs (including Timeline and Interaction data) count toward your Data Storage.</li>
                <li>Archived logs use significantly less storage than visible logs.</li>
              </ul>
            }
          />

          {/* Duration settings */}
          <FormSection title="Duration Settings">
            <Select
              label="Visible Logs Duration"
              value={visibleDur}
              options={DURATION_OPTIONS}
              layout="horizontal"
              width="100%"
            />
            <Select
              label="After Visible Period"
              value={afterVisible}
              options={AFTER_OPTIONS}
              layout="horizontal"
              width="100%"
            />
            {afterVisible === 'archive' && (
              <Select
                label="Archive Duration"
                value={archiveDur}
                options={DURATION_OPTIONS}
                layout="horizontal"
                width="100%"
              />
            )}
          </FormSection>

          {/* Modules exempt */}
          <FormSection title="Modules Exempt from Standard Duration">
            <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--ds-text-secondary, #616E88)', lineHeight: 1.55 }}>
              Apply a restricted retention period — 6 months for visible logs and 6 months
              for archived logs — to selected modules and subforms.
            </p>
            <Tags
              value={modules}
              options={MODULE_OPTIONS}
              placeholder="Select modules..."
              onChange={setModules}
              width="100%"
            />
            <div style={{ marginTop: 10 }}>
              <Tags
                value={subforms}
                options={SUBFORM_OPTIONS}
                placeholder="Select subforms..."
                onChange={setSubforms}
                width="100%"
              />
            </div>
            {hasExemptions && (
              <div style={{ marginTop: 10 }}>
                <MessageBox
                  variant="warning"
                  closable={false}
                  message="Selected logs are retained for 6 months only, after which they are deleted."
                />
              </div>
            )}
          </FormSection>
        </Modal>

        {/* ── Confirmation modal ── */}
        <Modal
          isOpen={confirm}
          title="Save audit log duration changes?"
          onClose={() => setConfirm(false)}
          onSave={() => { setConfirm(false); setOpen(false); }}
          cancelLabel="Cancel"
          saveLabel="Okay, Proceed"
          width={440}
        >
          <MessageBox
            variant="warning"
            closable={false}
            message={
              <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <li>Logs beyond the retention period will be permanently deleted.</li>
                <li>Exempted modules will be retained for 6 months only, then permanently deleted.</li>
                <li>Deleted logs cannot be recovered.</li>
              </ul>
            }
          />
        </Modal>
      </div>
    );
  },
};
