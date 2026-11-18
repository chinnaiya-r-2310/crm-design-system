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
  { id: 'single-line', label: 'Single Line', icon: 'CrmVerticalSingleLine', disabled: true },
  { id: 'multi-line', label: 'Multi-Line', icon: 'CrmVerticalMultiLine', disabled: true },
  { id: 'email', label: 'Email', icon: 'CrmVerticalMail', disabled: true },
  { id: 'phone', label: 'Phone', icon: 'CrmVerticalCall', disabled: true },
  { id: 'pick-list', label: 'Pick List', icon: 'CrmVerticalPicklist', disabled: true },
  { id: 'multi-select', label: 'Multi-Select', icon: 'CrmMaskMultiSelect', disabled: true },
  { id: 'date', label: 'Date', icon: 'CrmVerticalDate' },
  { id: 'date-time', label: 'Date/Time', icon: 'CrmMaskUiCompDateTime' },
  { id: 'number', label: 'Number', icon: 'CrmVerticalNumbers', disabled: true },
  { id: 'auto-number', label: 'Auto-Number', icon: 'CrmMaskAutoNumber', disabled: true },
  { id: 'currency', label: 'Currency', icon: 'CrmVerticalCurrency', disabled: true },
  { id: 'decimal', label: 'Decimal', icon: 'CrmMaskUiCompDecimal', disabled: true },
  { id: 'percent', label: 'Percent', icon: 'CrmMaskUiCompPercentage', disabled: true },
  { id: 'long-integer', label: 'Long Integer', icon: 'CrmMaskUiCompLongInteger' },
  { id: 'checkbox', label: 'Checkbox', icon: 'CrmVerticalCheckbox' },
  { id: 'url', label: 'URL', icon: 'CrmVerticalLink', disabled: true },
  { id: 'lookup', label: 'Lookup', icon: 'CrmMaskUiCompLookup', disabled: true },
  { id: 'formula', label: 'Formula', icon: 'CrmMaskUiCompFormula' },
  { id: 'user', label: 'User', icon: 'CrmVerticalUser', disabled: true },
  { id: 'file-upload', label: 'File Upload', icon: 'CrmMaskUiCompFileUpload' },
  { id: 'image-upload', label: 'Image Upload', icon: 'CrmMaskUiCompImageUpload' },
  { id: 'rollup-summary', label: 'Rollup Summary', icon: 'CrmMaskUiCompList' },
  { id: 'radio-button', label: 'Radio Button', icon: 'CrmMaskUiCompRadioButton', disabled: true },
  { id: 'address', label: 'Address', icon: 'CrmVerticalLocation', disabled: true, isNew: true },
  { id: 'multi-select-lookup', label: 'Multi-Select Lookup', icon: 'CrmVerticalMultiSelectLookup', wide: true, warning: true },
  { id: 'subform', label: 'Subform', icon: 'CrmMaskUiCompTable', disabled: true, wide: true },
  { id: 'new-section', label: 'NEW SECTION', icon: 'CrmShowsections', wide: true },
];

export const COMPONENTS = [
  { id: 'mirror', label: 'Mirror', icon: 'CrmMirror', isNew: true },
  { id: 'button', label: 'Button', icon: 'CrmButton', isNew: true, wide: true },
];

// ── Canvas ───────────────────────────────────────────────────────────────────
// `hint` = grey text after the label; `mandatory` = red left edge;
// `hidden` = hidden during creation/editing.

export const LEAD_INFO_LEFT = [
  { id: 'l1', label: 'Multi-Select Lookup 1', icon: 'CrmVerticalMultiSelectLookup' },
  { id: 'l2', label: 'File Upload 4 xyz', icon: 'CrmMaskUiCompFileUpload' },
  { id: 'l3', label: 'Image Upload 3 xyz', icon: 'CrmMaskUiCompImageUpload' },
  { id: 'l4', label: 'Users xyz', icon: 'CrmVerticalUser' },
  { id: 'l5', label: 'Multi-Line 14 xyz', icon: 'CrmVerticalMultiLine' },
  { id: 'l6', label: 'Last Name', icon: 'CrmVerticalSingleLine', mandatory: true },
  { id: 'l7', label: 'Lead Status_1', icon: 'CrmVerticalPicklist' },
  { id: 'l8', label: 'Date/Time 5000', icon: 'CrmMaskUiCompDateTime', mandatory: true },
  { id: 'l9', label: 'Date/Time 46', icon: 'CrmMaskUiCompDateTime' },
  { id: 'l10', label: 'Country', icon: 'CrmVerticalPicklist' },
  { id: 'l11', label: 'new file', icon: 'CrmMaskUiCompFileUpload' },
  { id: 'l12', label: 'ttttte', icon: 'CrmVerticalSingleLine', hidden: true },
  { id: 'l13', label: 'Formula 8', icon: 'CrmMaskUiCompFormula', hint: '[Decimal]', hidden: true },
  { id: 'l14', label: '$ Empty', icon: 'CrmVerticalCurrency', hint: '(Personal)' },
  { id: 'l15', label: 'Date 37', icon: 'CrmVerticalDate' },
  { id: 'l16', label: 'Lead Source', icon: 'CrmVerticalPicklist' },
  { id: 'l17', label: 'Annual Revenue', icon: 'CrmVerticalCurrency', hint: '(Personal)' },
  { id: 'l18', label: 'Last Email Sent Time', icon: 'CrmMaskUiCompDateTime' },
];

export const LEAD_INFO_RIGHT = [
  { id: 'r1', label: 'Lead Field', icon: 'CrmVerticalSingleLine' },
  { id: 'r2', label: 'Lead Fielddsds', icon: 'CrmVerticalSingleLine', hidden: true },
  { id: 'r3', label: 'Lead Status', icon: 'CrmVerticalPicklist' },
  { id: 'r4', label: 'Date', icon: 'CrmVerticalDate' },
  { id: 'r5', label: 'Test Field', icon: 'CrmVerticalSingleLine' },
  { id: 'r6', label: '902323222', icon: 'CrmVerticalCall', hint: '(Personal)' },
  { id: 'r7', label: 'Mutual Fund', icon: 'CrmVerticalNumbers' },
  { id: 'r8', label: 'Email', icon: 'CrmVerticalMail' },
  { id: 'r9', label: 'new@gmail.com', icon: 'CrmVerticalMail', hint: '(Encrypted)' },
  { id: 'r10', label: 'Company Name', icon: 'CrmVerticalSingleLine' },
  { id: 'r11', label: 'Date/Time 30', icon: 'CrmMaskUiCompDateTime' },
  { id: 'r12', label: 'aass', icon: 'CrmVerticalSingleLine' },
  { id: 'r13', label: 'It is a long established fact', icon: 'CrmVerticalMultiLine' },
  { id: 'r14', label: 'First Name', icon: 'CrmVerticalSingleLine', hint: '[Mr.]' },
  { id: 'r15', label: 'Multi-Select 10', icon: 'CrmMaskMultiSelect' },
  { id: 'r16', label: 'Email Opt Out', icon: 'CrmVerticalCheckbox' },
  { id: 'r17', label: 'PAN Number', icon: 'CrmVerticalSingleLine' },
  { id: 'r18', label: 'User 2', icon: 'CrmVerticalUser' },
];

export const ADDRESS_LEFT = [
  { id: 'a1', label: 'Street', icon: 'CrmVerticalSingleLine' },
  { id: 'a2', label: 'State', icon: 'CrmVerticalSingleLine' },
  { id: 'a3', label: 'Country', icon: 'CrmVerticalSingleLine' },
];

export const ADDRESS_RIGHT = [
  { id: 'a4', label: 'City', icon: 'CrmVerticalSingleLine' },
  { id: 'a5', label: 'Zip Code', icon: 'CrmVerticalSingleLine' },
];

export const DESCRIPTION_FIELDS = [
  { id: 'd1', label: 'Description', icon: 'CrmVerticalMultiLine' },
];

// Quick Create: mandatory fields plus the key contact fields, one column.
export const QUICK_CREATE_FIELDS = [
  ...[...LEAD_INFO_LEFT, ...LEAD_INFO_RIGHT].filter(field => field.mandatory),
  { id: 'q1', label: 'Lead Status', icon: 'CrmVerticalPicklist' },
  { id: 'q2', label: 'Phone', icon: 'CrmVerticalCall' },
  { id: 'q3', label: 'Email', icon: 'CrmVerticalMail' },
  { id: 'q4', label: 'Company Name', icon: 'CrmVerticalSingleLine' },
];
