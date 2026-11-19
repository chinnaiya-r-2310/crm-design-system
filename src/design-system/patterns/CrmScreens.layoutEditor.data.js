// Mock data for the Layout Editor screen
// (Zoho CRM › Setup › Modules › Leads › Layouts › Standard).

export const MODULE_NAME = 'Leads';
export const LAYOUT_NAME = 'Standard';
export const UNUSED_ITEMS_COUNT = 307;

export const VIEW_TABS = [
  { id: 'create', label: 'Create' },
  { id: 'quickCreate', label: 'Quick Create' },
  { id: 'detailView', label: 'Detail View' },
];

// ── Left palette ─────────────────────────────────────────────────────────────
// `disabled` = field limit reached; `wide` = spans both grid columns.

export const NEW_FIELDS = [
  { id: 'single-line', label: 'Single Line', icon: 'LibBuilderSingleLine', disabled: true },
  { id: 'multi-line', label: 'Multi-Line', icon: 'LibBuilderMultiline', disabled: true },
  { id: 'email', label: 'Email', icon: 'LibBuilderEmail', disabled: true },
  { id: 'phone', label: 'Phone', icon: 'LibBuilderPhone', disabled: true },
  { id: 'pick-list', label: 'Pick List', icon: 'LibBuilderPickList', disabled: true },
  { id: 'multi-select', label: 'Multi-Select', icon: 'LibBuilderMultiselect', disabled: true },
  { id: 'date', label: 'Date', icon: 'LibBuilderDate' },
  { id: 'date-time', label: 'Date/Time', icon: 'LibBuilderDateTime' },
  { id: 'number', label: 'Number', icon: 'LibBuilderNumber', disabled: true },
  { id: 'auto-number', label: 'Auto-Number', icon: 'LibBuilderAutonumbers', disabled: true },
  { id: 'currency', label: 'Currency', icon: 'LibBuilderCurrency', disabled: true },
  { id: 'decimal', label: 'Decimal', icon: 'LibBuilderDecimal', disabled: true },
  { id: 'percent', label: 'Percent', icon: 'LibBuilderPercent', disabled: true },
  { id: 'long-integer', label: 'Long Integer', icon: 'LibBuilderLongInteger' },
  { id: 'checkbox', label: 'Checkbox', icon: 'LibBuilderCheckbox' },
  { id: 'url', label: 'URL', icon: 'LibBuilderUrl', disabled: true },
  { id: 'lookup', label: 'Lookup', icon: 'LibBuilderLookup', disabled: true },
  { id: 'formula', label: 'Formula', icon: 'LibBuilderFormula' },
  { id: 'user', label: 'User', icon: 'LibBuilderUser', disabled: true },
  { id: 'file-upload', label: 'File Upload', icon: 'LibBuilderFieldUpload' },
  { id: 'image-upload', label: 'Image Upload', icon: 'LibBuilderImageUpload' },
  { id: 'rollup-summary', label: 'Rollup Summary', icon: 'LibBuilderRollupFields' },
  { id: 'radio-button', label: 'Radio Button', icon: 'LibBuilderRadioButton', disabled: true },
  { id: 'address', label: 'Address', icon: 'LibBuilderAddressField', disabled: true, isNew: true },
  { id: 'multi-select-lookup', label: 'Multi-Select Lookup', icon: 'LibBuilderMultiSelectLookup', wide: true, warning: true },
  { id: 'subform', label: 'Subform', icon: 'LibBuilderSubform', disabled: true, wide: true },
  { id: 'new-section', label: 'NEW SECTION', icon: 'LibSections', wide: true },
];

export const COMPONENTS = [
  { id: 'mirror', label: 'Mirror', icon: 'CrmMirror', isNew: true },
  { id: 'button', label: 'Button', icon: 'LibButtons', isNew: true, wide: true },
];

// ── Canvas ───────────────────────────────────────────────────────────────────
// `hint` = grey text after the label; `mandatory` = red left edge;
// `hidden` = hidden during creation/editing.

export const LEAD_INFO_LEFT = [
  { id: 'l1', label: 'Multi-Select Lookup 1', icon: 'LibBuilderMultiSelectLookup' },
  { id: 'l2', label: 'File Upload 4 xyz', icon: 'LibBuilderFieldUpload' },
  { id: 'l3', label: 'Image Upload 3 xyz', icon: 'LibBuilderImageUpload' },
  { id: 'l4', label: 'Users xyz', icon: 'LibBuilderUser' },
  { id: 'l5', label: 'Multi-Line 14 xyz', icon: 'LibBuilderMultiline' },
  { id: 'l6', label: 'Last Name', icon: 'LibBuilderSingleLine', mandatory: true },
  { id: 'l7', label: 'Lead Status_1', icon: 'LibBuilderPickList' },
  { id: 'l8', label: 'Date/Time 5000', icon: 'LibBuilderDateTime', mandatory: true },
  { id: 'l9', label: 'Date/Time 46', icon: 'LibBuilderDateTime' },
  { id: 'l10', label: 'Country', icon: 'LibBuilderPickList' },
  { id: 'l11', label: 'new file', icon: 'LibBuilderFieldUpload' },
  { id: 'l12', label: 'ttttte', icon: 'LibBuilderSingleLine', hidden: true },
  { id: 'l13', label: 'Formula 8', icon: 'LibBuilderFormula', hint: '[Decimal]', hidden: true },
  { id: 'l14', label: '$ Empty', icon: 'LibBuilderCurrency', hint: '(Personal)' },
  { id: 'l15', label: 'Date 37', icon: 'LibBuilderDate' },
  { id: 'l16', label: 'Lead Source', icon: 'LibBuilderPickList' },
  { id: 'l17', label: 'Annual Revenue', icon: 'LibBuilderCurrency', hint: '(Personal)' },
  { id: 'l18', label: 'Last Email Sent Time', icon: 'LibBuilderDateTime' },
];

export const LEAD_INFO_RIGHT = [
  { id: 'r1', label: 'Lead Field', icon: 'LibBuilderSingleLine' },
  { id: 'r2', label: 'Lead Fielddsds', icon: 'LibBuilderSingleLine', hidden: true },
  { id: 'r3', label: 'Lead Status', icon: 'LibBuilderPickList' },
  { id: 'r4', label: 'Date', icon: 'LibBuilderDate' },
  { id: 'r5', label: 'Test Field', icon: 'LibBuilderSingleLine' },
  { id: 'r6', label: '902323222', icon: 'LibBuilderPhone', hint: '(Personal)' },
  { id: 'r7', label: 'Mutual Fund', icon: 'LibBuilderNumber' },
  { id: 'r8', label: 'Email', icon: 'LibBuilderEmail' },
  { id: 'r9', label: 'new@gmail.com', icon: 'LibBuilderEmail', hint: '(Encrypted)' },
  { id: 'r10', label: 'Company Name', icon: 'LibBuilderSingleLine' },
  { id: 'r11', label: 'Date/Time 30', icon: 'LibBuilderDateTime' },
  { id: 'r12', label: 'aass', icon: 'LibBuilderSingleLine' },
  { id: 'r13', label: 'It is a long established fact', icon: 'LibBuilderMultiline' },
  { id: 'r14', label: 'First Name', icon: 'LibBuilderSingleLine', hint: '[Mr.]' },
  { id: 'r15', label: 'Multi-Select 10', icon: 'LibBuilderMultiselect' },
  { id: 'r16', label: 'Email Opt Out', icon: 'LibBuilderCheckbox' },
  { id: 'r17', label: 'PAN Number', icon: 'LibBuilderSingleLine' },
  { id: 'r18', label: 'User 2', icon: 'LibBuilderUser' },
];

export const ADDRESS_LEFT = [
  { id: 'a1', label: 'Street', icon: 'LibBuilderSingleLine' },
  { id: 'a2', label: 'State', icon: 'LibBuilderSingleLine' },
  { id: 'a3', label: 'Country', icon: 'LibBuilderSingleLine' },
];

export const ADDRESS_RIGHT = [
  { id: 'a4', label: 'City', icon: 'LibBuilderSingleLine' },
  { id: 'a5', label: 'Zip Code', icon: 'LibBuilderSingleLine' },
];

export const DESCRIPTION_FIELDS = [
  { id: 'd1', label: 'Description', icon: 'LibBuilderMultiline' },
];

// Quick Create: mandatory fields plus the key contact fields, one column.
export const QUICK_CREATE_FIELDS = [
  ...[...LEAD_INFO_LEFT, ...LEAD_INFO_RIGHT].filter(field => field.mandatory),
  { id: 'q1', label: 'Lead Status', icon: 'LibBuilderPickList' },
  { id: 'q2', label: 'Phone', icon: 'LibBuilderPhone' },
  { id: 'q3', label: 'Email', icon: 'LibBuilderEmail' },
  { id: 'q4', label: 'Company Name', icon: 'LibBuilderSingleLine' },
];
