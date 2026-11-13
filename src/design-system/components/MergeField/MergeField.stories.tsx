import { useState, type ReactNode } from 'react';
import { Dropdown } from '../Dropdown';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MergeField } from './MergeField';
import { expect, within, userEvent, waitFor } from 'storybook/test';

const NOTIFICATION_FIELDS = [
  { value: 'recordname', label: 'Record Name' },
  { value: 'queuename', label: 'Queue Name' },
  { value: 'user', label: 'User' },
  { value: 'dateandtime', label: 'Date & Time' },
];

// Standard Zoho CRM fields, grouped by module — the popup's module filter
// (default "Leads") switches between these groups.
const LEADS_FIELDS = [
  { value: 'FirstName', label: 'First Name' },
  { value: 'LastName', label: 'Last Name' },
  { value: 'Email', label: 'Email' },
  { value: 'SecondaryEmail', label: 'Secondary Email' },
  { value: 'Phone', label: 'Phone' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Fax', label: 'Fax' },
  { value: 'Company', label: 'Company' },
  { value: 'Title', label: 'Title' },
  { value: 'LeadSource', label: 'Lead Source' },
  { value: 'LeadStatus', label: 'Lead Status' },
  { value: 'Industry', label: 'Industry' },
  { value: 'AnnualRevenue', label: 'Annual Revenue' },
  { value: 'NumberOfEmployees', label: 'No. of Employees' },
  { value: 'Rating', label: 'Rating' },
  { value: 'LeadOwner', label: 'Lead Owner' },
  { value: 'Website', label: 'Website' },
  { value: 'City', label: 'City' },
  { value: 'State', label: 'State' },
  { value: 'ZipCode', label: 'Zip Code' },
].map((f) => ({ ...f, module: 'Leads' }));

const ACCOUNTS_FIELDS = [
  { value: 'AccountName', label: 'Account Name' },
  { value: 'AccountOwner', label: 'Account Owner' },
  { value: 'AccountNumber', label: 'Account Number' },
  { value: 'AccountSite', label: 'Account Site' },
  { value: 'ParentAccount', label: 'Parent Account' },
  { value: 'AccountWebsite', label: 'Website' },
  { value: 'AccountIndustry', label: 'Industry' },
  { value: 'Employees', label: 'Employees' },
  { value: 'AccountAnnualRevenue', label: 'Annual Revenue' },
  { value: 'AccountRating', label: 'Rating' },
  { value: 'Ownership', label: 'Ownership' },
  { value: 'AccountPhone', label: 'Phone' },
  { value: 'AccountFax', label: 'Fax' },
  { value: 'BillingStreet', label: 'Billing Street' },
  { value: 'BillingCity', label: 'Billing City' },
  { value: 'BillingState', label: 'Billing State' },
  { value: 'BillingCode', label: 'Billing Code' },
  { value: 'BillingCountry', label: 'Billing Country' },
  { value: 'ShippingCity', label: 'Shipping City' },
  { value: 'AccountDescription', label: 'Description' },
].map((f) => ({ ...f, module: 'Accounts' }));

const CONTACTS_FIELDS = [
  { value: 'ContactFirstName', label: 'First Name' },
  { value: 'ContactLastName', label: 'Last Name' },
  { value: 'ContactEmail', label: 'Email' },
  { value: 'ContactSecondaryEmail', label: 'Secondary Email' },
  { value: 'ContactPhone', label: 'Phone' },
  { value: 'ContactMobile', label: 'Mobile' },
  { value: 'ContactFax', label: 'Fax' },
  { value: 'ContactTitle', label: 'Title' },
  { value: 'ContactDepartment', label: 'Department' },
  { value: 'ContactLeadSource', label: 'Lead Source' },
  { value: 'ContactAccountName', label: 'Account Name' },
  { value: 'ContactVendorName', label: 'Vendor Name' },
  { value: 'ContactEmailOptOut', label: 'Email Opt Out' },
  { value: 'ContactReportingTo', label: 'Reporting To' },
  { value: 'ContactDateOfBirth', label: 'Date of Birth' },
  { value: 'ContactAssistant', label: 'Assistant' },
  { value: 'ContactAsstPhone', label: 'Asst Phone' },
  { value: 'ContactMailingStreet', label: 'Mailing Street' },
  { value: 'ContactMailingCity', label: 'Mailing City' },
  { value: 'ContactMailingState', label: 'Mailing State' },
].map((f) => ({ ...f, module: 'Contacts' }));

const DEALS_FIELDS = [
  { value: 'DealName', label: 'Deal Name' },
  { value: 'DealOwner', label: 'Deal Owner' },
  { value: 'DealAmount', label: 'Amount' },
  { value: 'DealStage', label: 'Stage' },
  { value: 'DealProbability', label: 'Probability' },
  { value: 'DealClosingDate', label: 'Closing Date' },
  { value: 'DealType', label: 'Type' },
  { value: 'DealNextStep', label: 'Next Step' },
  { value: 'DealLeadSource', label: 'Lead Source' },
  { value: 'DealContactName', label: 'Contact Name' },
  { value: 'DealAccountName', label: 'Account Name' },
  { value: 'DealCampaignSource', label: 'Campaign Source' },
  { value: 'DealExpectedRevenue', label: 'Expected Revenue' },
  { value: 'DealReasonForLoss', label: 'Reason for Loss' },
  { value: 'DealOverallSalesDuration', label: 'Overall Sales Duration' },
  { value: 'DealLastActivityTime', label: 'Last Activity Time' },
  { value: 'DealDescription', label: 'Description' },
  { value: 'DealCreatedTime', label: 'Created Time' },
  { value: 'DealModifiedTime', label: 'Modified Time' },
  { value: 'DealTag', label: 'Tag' },
].map((f) => ({ ...f, module: 'Deals' }));

// Field sets for the related entries (sample data). Each entry's `source` picks which set the list shows.
const NOTES_FIELDS = [
  { value: 'NoteTitle', label: 'Note Title' },
  { value: 'NoteContent', label: 'Note Content' },
  { value: 'NoteCreatedBy', label: 'Created By' },
  { value: 'NoteCreatedTime', label: 'Created Time' },
  { value: 'NoteModifiedTime', label: 'Modified Time' },
].map((f) => ({ ...f, module: 'Notes' }));

const VENDORS_FIELDS = [
  { value: 'VendorName', label: 'Vendor Name' },
  { value: 'VendorEmail', label: 'Email' },
  { value: 'VendorPhone', label: 'Phone' },
  { value: 'VendorWebsite', label: 'Website' },
  { value: 'VendorCategory', label: 'Category' },
].map((f) => ({ ...f, module: 'Vendors' }));

const PRODUCT_LINE_ITEM_FIELDS = [
  { value: 'LineItemProduct', label: 'Product Name' },
  { value: 'LineItemQuantity', label: 'Quantity' },
  { value: 'LineItemUnitPrice', label: 'Unit Price' },
  { value: 'LineItemDiscount', label: 'Discount' },
  { value: 'LineItemTotal', label: 'Total' },
].map((f) => ({ ...f, module: 'Product Line Items' }));

const QUOTED_ITEM_FIELDS = [
  { value: 'QuotedItemProduct', label: 'Product Name' },
  { value: 'QuotedItemQuantity', label: 'Quantity' },
  { value: 'QuotedItemAmount', label: 'Amount' },
].map((f) => ({ ...f, module: 'Quoted Items' }));

const CRM_FIELDS = [
  ...LEADS_FIELDS,
  ...ACCOUNTS_FIELDS,
  ...CONTACTS_FIELDS,
  ...DEALS_FIELDS,
  ...NOTES_FIELDS,
  ...VENDORS_FIELDS,
  ...PRODUCT_LINE_ITEM_FIELDS,
  ...QUOTED_ITEM_FIELDS,
];

// Filter dropdown entries. Every entry is a selectable module; `source` is the field set it shows.
// The Related Modules section header is a label only.
const CRM_MODULE_ENTRIES = [
  {
    module: 'Deals',
    items: [
      { value: 'Deals', label: 'Deals', source: 'Deals' },
      { value: 'Lookup1Contacts', label: 'Lookup 1 (Contacts)', source: 'Contacts' },
      { value: 'AccountNameAccounts', label: 'Account Name (Accounts)', source: 'Accounts' },
      { value: 'DealProductLineItems', label: 'Product Line Items (Subform)', source: 'Product Line Items' },
      { value: 'DealQuotedItems', label: 'Quoted Items (Subform)', source: 'Quoted Items' },
    ],
  },
  {
    module: 'Related Modules',
    items: [
      { value: 'Notes', label: 'Notes', source: 'Notes' },
      { value: 'PrimaryAccountName', label: 'Primary Account Name (Accounts)', source: 'Accounts' },
      { value: 'SecondaryAccountName', label: 'Secondary Account Name (Accounts)', source: 'Accounts' },
      { value: 'VendorName', label: 'Vendor Name (Vendors)', source: 'Vendors' },
    ],
  },
];

const meta: Meta<typeof MergeField> = {
  title: 'Design System/Components/MergeField',
  component: MergeField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Text field that inserts a merge token when the user types "#". ' +
          'Multiline renders the selected field as an inline chip inside a contentEditable surface; ' +
          'singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['multiline', 'singleline'],
      table: { category: 'Layout', defaultValue: { summary: 'multiline' } },
    },
    error: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    required: { control: 'boolean', table: { category: 'State' } },
    filter: {
      name: 'Filter',
      control: 'boolean',
      description: 'Show the module filter. When false, search and select fields across all modules.',
      table: { category: 'Behavior', defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MergeField>;

// ── Sample prompts for the Default page ─────────────────────────────────────
// `#token` values match CRM_FIELDS `value`s, so the field turns each one into a chip.
// Singleline: email subjects with merge tags
const SINGLE_PROMPTS = [
  'Welcome to #Company, #FirstName!',
  'Your #DealName - Action Required by #DealClosingDate',
  'Account Update: #AccountName - #AccountOwner',
  'Follow-up: #FirstName #LastName from #LeadSource',
];

// Multiline: AI instructions/prompts with merge tags
const MULTI_PROMPTS = [
  'Generate a personalized email for #FirstName from #Company.\n\nContext: Lead source is #LeadSource.\n\nTone: Professional and friendly.\n\nCall to action: Schedule a demo call.',
  'Create an AI-generated summary for #DealName.\n\nDeal details:\n- Stage: #DealStage\n- Amount: #DealAmount\n- Owner: #DealOwner\n\nHighlight key risks and next steps.',
  'Draft a follow-up message for #ContactFirstName.\n\nAccount: #AccountName (#AccountOwner)\n\nFocus on recent activity and upcoming renewal. Keep it concise and actionable.',
];

const pickRandom = (items: string[]) => items[Math.floor(Math.random() * items.length)];

const generatePrompts = () => ({
  single: pickRandom(SINGLE_PROMPTS),
  multi: pickRandom(MULTI_PROMPTS),
});

// Plain refresh (circular arrow) glyph — drawn here, not added to the icon set.
const RefreshGlyph = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.5 1.8v2.6H9.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Default: Story = {
  name: 'Default',
  parameters: { layout: 'fullscreen' },
  render: () => {
    // Starts empty; the refresh button fills both fields with generated prompts.
    const [prompts, setPrompts] = useState({ single: '', multi: '' });
    const [seed, setSeed] = useState(0);
    const [mode, setMode] = useState('edit');
    const clearAll = () => {
      setPrompts({ single: '', multi: '' });
      setSeed((s) => s + 1); // remounts both fields empty
    };
    const regenerate = () => {
      setPrompts(generatePrompts());
      setSeed((s) => s + 1); // remounts both fields so they pick up the new defaults
    };
    return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'var(--ds-bg-common-card, #fff)',
        fontFamily: 'var(--ds-font-family-base)',
        boxSizing: 'border-box',
        padding: '48px 24px',
        overflow: 'hidden',
        // Fixed, viewport-relative offset — not flex "justify-content: center" —
        // so the block's vertical position never recomputes as the Multiline
        // field grows taller (which would otherwise shift it upward and make
        // the field look like it's growing from its middle instead of its
        // bottom edge).
        paddingTop: '18vh',
      }}
    >
      {/* Decorative background accents — purely visual, never intercept clicks */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -120,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'var(--ds-brand-primary, #5464F2)',
          opacity: 0.35,
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -140,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: '#1FB97A',
          opacity: 0.35,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '12%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: '#E8A23A',
          opacity: 0.3,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
      <button
        type="button"
        onClick={clearAll}
        style={{ background: 'none', border: 'none', padding: 0, color: 'var(--ds-text-label, #616E88)', textDecoration: 'underline', fontFamily: 'var(--ds-font-family-base)', fontSize: 'var(--ds-font-size-base)', cursor: 'pointer' }}
      >
        Clear
      </button>
      <Dropdown
        layout="vertical"
        width={150}
        options={[
          { value: 'edit', label: 'Default' },
          { value: 'readonly', label: 'Read only' },
        ]}
        value={mode}
        onChange={setMode}
        triggerAriaLabel="Field mode"
      />
      <button
        type="button"
        onClick={regenerate}
        aria-label="Generate new AI prompts"
        title="Generate new AI prompts"
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          background: 'var(--ds-bg-common-card, #fff)',
          border: '1px solid var(--ds-components-input-default-outline)',
          borderRadius: 6,
          color: 'var(--ds-text-label, #616E88)',
          cursor: 'pointer',
        }}
      >
        <RefreshGlyph />
      </button>
      </div>

      <h1
        style={{
          position: 'relative',
          fontSize: 28,
          fontWeight: 600,
          color: 'var(--ds-text-base)',
          margin: '0 0 48px',
        }}
      >
        Merge Field
      </h1>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32, width: 440 }}>
        <MergeField
          label="Singleline"
          layout="vertical"
          variant="singleline"
          width={440}
          mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
          key={`single-${seed}`}
          readOnly={mode === 'readonly'}
          defaultValue={prompts.single}
        />
        <MergeField
          label="Multiline"
          layout="vertical"
          width={440}
          mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
          key={`multi-${seed}`}
          readOnly={mode === 'readonly'}
          defaultValue={prompts.multi}
        />
      </div>
    </div>
    );
  },
};

// Presentation slide used by the Default and Read only pages: title centred near
// the top, subtle colour accents behind, and the content in the middle.
const SlideFrame = ({ title, children, controls }: { title: string; children: ReactNode; controls?: ReactNode }) => (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'var(--ds-bg-common-card, #fff)',
      fontFamily: 'var(--ds-font-family-base)',
      boxSizing: 'border-box',
      padding: '48px 24px',
      paddingTop: '18vh',
      overflow: 'hidden',
    }}
  >
    <div aria-hidden="true" style={{ position: 'absolute', top: -120, left: -100, width: 360, height: 360, borderRadius: '50%', background: 'var(--ds-brand-primary, #5464F2)', opacity: 0.35, filter: 'blur(70px)', pointerEvents: 'none' }} />
    <div aria-hidden="true" style={{ position: 'absolute', bottom: -140, right: -120, width: 420, height: 420, borderRadius: '50%', background: '#1FB97A', opacity: 0.35, filter: 'blur(80px)', pointerEvents: 'none' }} />
    <div aria-hidden="true" style={{ position: 'absolute', top: '30%', right: '12%', width: 220, height: 220, borderRadius: '50%', background: '#E8A23A', opacity: 0.3, filter: 'blur(60px)', pointerEvents: 'none' }} />
    {controls && <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>{controls}</div>}
    <h1 style={{ position: 'relative', fontSize: 28, fontWeight: 600, color: 'var(--ds-text-base)', margin: '0 0 48px' }}>{title}</h1>
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32, width: 440 }}>{children}</div>
  </div>
);

// Fixed sample content (the first prompt of each set), so the read-only view is stable.
const READ_ONLY_SAMPLE = { single: SINGLE_PROMPTS[0], multi: MULTI_PROMPTS[0] };

/** Read-only: the same sample content in both variants, shown as plain, non-editable text. */
export const ReadOnly: Story = {
  name: 'Read only',
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [mode, setMode] = useState('readonly');
    return (
    <SlideFrame
      title="Merge Field - Read Only"
      controls={
        <Dropdown
          layout="vertical"
          width={150}
          options={[
            { value: 'edit', label: 'Default' },
            { value: 'readonly', label: 'Read only' },
          ]}
          value={mode}
          onChange={setMode}
          triggerAriaLabel="Field mode"
        />
      }
    >
      <MergeField
        label="Singleline"
        layout="vertical"
        variant="singleline"
        width={440}
        mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
        defaultValue={READ_ONLY_SAMPLE.single}
        readOnly={mode === 'readonly'}
      />
      <MergeField
        label="Multiline"
        layout="vertical"
        width={440}
        mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
        defaultValue={READ_ONLY_SAMPLE.multi}
        readOnly={mode === 'readonly'}
      />
    </SlideFrame>
    );
  },
};

export const MultilineAddingTag: Story = {
  name: 'Multiline / Adding tag',
  args: {
    layout: 'vertical',
    width: 440,
    mergeFields: NOTIFICATION_FIELDS,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#recordname', { skipClick: true });
    await waitFor(() => document.querySelector('.mergefield-popup-option[data-active]'));
    await userEvent.keyboard('{Enter}');
    await userEvent.type(field, ' added to #queu', { skipClick: true });
  },
};

export const MultilineAddingTagComplete: Story = {
  name: 'Multiline / Adding tag (completed)',
  render: () => (
    <MergeField
      layout="vertical"
      width={440}
      defaultValue="#recordname added to #queuename Please handle with high priority #user at #dateandtime"
      mergeFields={NOTIFICATION_FIELDS}
    />
  ),
};

export const MultilineError: Story = {
  name: 'Multiline / Error',
  args: {
    layout: 'vertical',
    width: 320,
    error: true,
    helperText: 'Cannot be Empty',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES,
  },
};

export const FilterDisabled: Story = {
  args: {
    layout: 'vertical',
    width: 390,
    filter: false,
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#', { skipClick: true });
    const page = within(canvasElement.ownerDocument.body);
    await expect(page.queryByRole('button', { name: 'Leads', exact: true })).not.toBeInTheDocument();
    await expect(page.getAllByRole('option', { name: 'First Name', exact: true })[0]).toBeVisible();
    await expect(page.getByRole('option', { name: 'Deal Name', exact: true })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await userEvent.type(field, '#DealName', { skipClick: true });
    await userEvent.keyboard('{Enter}');
    await expect(canvasElement.querySelector('.mergefield-token')).toHaveAttribute('data-value', 'DealName');
  },
};

export const SinglelineDefault: Story = {
  name: 'Singleline / Default',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '${FirstName}',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES,
  },
};

export const SinglelineAddingTag: Story = {
  name: 'Singleline / Adding tag',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '${FirstName} ',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#', { skipClick: true });

    const page = within(canvasElement.ownerDocument.body);
    for (const [label, expectedField] of [
      ['Primary Account Name (Accounts)', 'Account Owner'],
      ['Notes', 'Note Title'],
      ['Secondary Account Name (Accounts)', 'Account Owner'],
      ['Vendor Name (Vendors)', 'Email'],
    ]) {
      await userEvent.click(page.getByRole('button', { name: /Deals|Notes|Primary Account Name|Secondary Account Name/ }));
      const moduleList = page.getByRole('listbox', { name: 'Module' });
      const modules = within(moduleList);
      // The filter menu fits the longest label, rather than wrapping at 260px.
      const longestOption = modules.getByRole('option', { name: 'Secondary Account Name (Accounts)', exact: true });
      const labelRange = canvasElement.ownerDocument.createRange();
      labelRange.selectNodeContents(longestOption.lastChild!);
      await expect(labelRange.getClientRects()).toHaveLength(1);
      await expect(moduleList.scrollWidth).toBeLessThanOrEqual(moduleList.clientWidth);
      const relatedHeader = modules.getByText('Related Modules', { exact: true });
      await expect(relatedHeader).toBeVisible();
      const notesOption = modules.getByRole('option', { name: 'Notes', exact: true });
      const primaryAccountOption = modules.getByRole('option', { name: 'Primary Account Name (Accounts)', exact: true });
      await expect(modules.getAllByRole('option')[5]).toBe(notesOption);
      await expect(relatedHeader.compareDocumentPosition(notesOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(notesOption.compareDocumentPosition(primaryAccountOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(modules.queryByText('Accounts', { exact: true })).not.toBeInTheDocument();
      await expect(modules.queryByText('Vendors', { exact: true })).not.toBeInTheDocument();
      await userEvent.click(modules.getByRole('option', { name: label, exact: true }));
      await expect(page.getByRole('button', { name: label, exact: true })).toBeVisible();
      await expect(page.getByRole('option', { name: expectedField, exact: true })).toBeVisible();
    }
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 440 }}>
      <MergeField layout="vertical" label="Multiline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField
        layout="vertical"
        label="Multiline — error"
        width={440}
        error
        helperText="Cannot be Empty"
        mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
      />
      <MergeField
        layout="vertical"
        label="Singleline"
        variant="singleline"
        width={440}
        defaultValue="${FirstName}"
        mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
      />
      <MergeField
        layout="vertical"
        label="Singleline — disabled"
        variant="singleline"
        width={440}
        defaultValue="${FirstName}"
        mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES}
        disabled
      />
    </div>
  ),
};
