export type Channel = 'phone' | 'email';
export type Field = { value: string; label: string };

export interface VerificationConfig {
  fields: Field[];
  restrict: boolean;
  validity: string;
  digits: '6' | '4';
  carrier: string;
  template: string;
  resendMode: string;
  resendAttempts: string;
  resetAfter: string;
  validationAttempts: string;
  validationReset: string;
  emailTemplate: string;
  verificationPage: string;
  emailContent?: { subject: string; sender: string; body: string };
  pageContent?: { subject: string; sender: string; body: string };
}

export const PHONE_FIELDS: Field[] = [
  { value: 'mobile', label: 'Mobile' },
  { value: 'secondary-phone', label: 'Secondary Phone' },
  { value: 'phone', label: 'Phone' },
];
export const EMAIL_FIELDS: Field[] = [
  { value: 'email', label: 'Email ID' },
  { value: 'secondary-email', label: 'Secondary Email' },
];
export const SMS_TEMPLATE = 'Your verification OTP is ${OTP}. Valid for ${Valid For}.\nShare with <CRM User> only.\n${Organization.Organization Name}';
export const EMAIL_TEMPLATES = [
  { value: 'verification', label: 'Verification Link Email' },
  { value: 'contact', label: 'Contact Verification Email' },
];
export const VERIFICATION_PAGES = [
  { value: 'standard', label: 'Verification Page' },
  { value: 'branded', label: 'Branded Verification Page' },
];
export function defaultConfig(channel: Channel): VerificationConfig {
  return {
    fields: (channel === 'phone' ? PHONE_FIELDS : EMAIL_FIELDS).slice(0, 2),
    restrict: false,
    validity: channel === 'phone' ? '4' : '7',
    digits: '6',
    carrier: '',
    template: SMS_TEMPLATE,
    resendMode: 'same',
    resendAttempts: channel === 'phone' ? '5' : '3',
    resetAfter: channel === 'phone' ? '30' : '24',
    validationAttempts: '5',
    validationReset: '1',
    emailTemplate: 'verification',
    verificationPage: 'standard',
  };
}
export function smsPreview(config: VerificationConfig): string {
  return config.template
    .replaceAll('${OTP}', config.digits === '6' ? '482913' : '4829')
    .replaceAll('${Valid For}', `${config.validity} minutes`)
    .replaceAll('<CRM User>', 'CRM User')
    .replaceAll('${Organization.Organization Name}', 'Zoho');
}
// Setup left menu (icons + groups) comes from the VerticalTabs "setup" variant,
// shared with the SB Connections pattern.
export { SETUP_MENU_ITEMS as SETUP_ITEMS } from '../components/VerticalTabs/setupMenuItems';
export const MODULE_TABS = ['Layouts', 'Layout Rules', 'Validation Rules', 'Fields', 'Record Locking Configuration', 'Record Authentication', 'Links', 'Buttons', 'Summary'];
