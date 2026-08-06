import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';

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

const LANGUAGES = [
  { value: 'en',    label: 'English' },
  { value: 'hi',    label: 'Hindi' },
  { value: 'es',    label: 'Spanish' },
  { value: 'fr',    label: 'French' },
  { value: 'de',    label: 'German' },
  { value: 'ja',    label: 'Japanese' },
  { value: 'zh_cn', label: 'Chinese (Simplified)' },
  { value: 'zh_tw', label: 'Chinese (Traditional)' },
  { value: 'ar',    label: 'Arabic' },
  { value: 'pt',    label: 'Portuguese' },
  { value: 'ko',    label: 'Korean' },
  { value: 'it',    label: 'Italian' },
  { value: 'nl',    label: 'Dutch' },
  { value: 'sv',    label: 'Swedish' },
  { value: 'ta',    label: 'Tamil' },
  { value: 'te',    label: 'Telugu' },
  { value: 'ms',    label: 'Malay' },
  { value: 'id',    label: 'Indonesian' },
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

const DATE_FORMATS = [
  { value: 'dd_mm_yyyy_sl', label: 'DD/MM/YYYY' },
  { value: 'mm_dd_yyyy_sl', label: 'MM/DD/YYYY' },
  { value: 'yyyy_mm_dd',    label: 'YYYY-MM-DD' },
  { value: 'dd_mm_yyyy_hy', label: 'DD-MM-YYYY' },
  { value: 'dd_mm_yyyy_dt', label: 'DD.MM.YYYY' },
  { value: 'mmm_dd_yyyy',   label: 'MMM DD, YYYY' },
  { value: 'dd_mmm_yyyy',   label: 'DD MMM YYYY' },
];

const TIME_FORMATS = [
  { value: '12h',   label: '12-hour (1:30 PM)' },
  { value: '24h',   label: '24-hour (13:30)' },
  { value: '12h_s', label: '12-hour with seconds (1:30:00 PM)' },
  { value: '24h_s', label: '24-hour with seconds (13:30:00)' },
];

const NUMBER_FORMATS = [
  { value: 'comma_dot',  label: '1,234,567.89' },
  { value: 'dot_comma',  label: '1.234.567,89' },
  { value: 'space_comma',label: '1 234 567,89' },
  { value: 'none_dot',   label: '1234567.89' },
];

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
          <Dropdown label="Country"       layout="horizontal" width={509} columns="99px 390px" options={COUNTRIES} />
          <Dropdown label="Language"      layout="horizontal" width={509} columns="99px 390px" options={LANGUAGES} />
          <Dropdown label="Date Format"   layout="horizontal" width={509} columns="99px 390px" options={DATE_FORMATS} />
          <Dropdown label="Time Format"   layout="horizontal" width={509} columns="99px 390px" options={TIME_FORMATS} />
          <Dropdown label="Number Format" layout="horizontal" width={509} columns="99px 390px" options={NUMBER_FORMATS} />
          <Dropdown label="Currency"      layout="horizontal" width={509} columns="99px 390px" options={CURRENCIES} />
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
 * Wide modal — 590px, 120px label + 390px input.
 */
export const Wide: Story = {
  name: 'Wide (590px)',
  render: (args) => {
    const [open, setOpen] = useState(false);

    const W    = 530;
    const COLS = '120px 390px';

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
          <Input label="First Name" layout="horizontal" width={W} columns={COLS} />
          <Input label="Last Name"  layout="horizontal" width={W} columns={COLS} />
          <Input label="Email"      layout="horizontal" width={W} columns={COLS} type="email" />
          <Input label="Phone"      layout="horizontal" width={W} columns={COLS} type="tel" required />
          <Dropdown label="Account" layout="horizontal" width={W} columns={COLS} options={[]} />
        </Modal>
      </>
    );
  },
  args: {
    title: 'Add Contact',
    width: 590,
    cancelLabel: 'Cancel',
    saveLabel: 'Create',
  },
};
