import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { DateTimeInput } from './DateTimeInput';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Input> = {
  title: 'Design System/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Single-line text input with a two-column form layout.',
          'Label (40%) and input field (60%) share a 20px gap.',
          'When the label wraps, the input stays aligned with the **first line** of the label.',
          '',
          'Hover and focus states are implemented. Error, disabled, warning, and success',
          'states are architecturally reserved — see `component.json` for the full roadmap.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    // ── Anatomy ───────────────────────────────────────────────────────────
    label: {
      control: 'text',
      description: 'Label text in the left column',
      table: { category: 'Anatomy' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder shown in an empty field (optional)',
      table: { category: 'Anatomy' },
    },
    helperText: {
      control: 'text',
      description: 'Assistive copy below the input',
      table: { category: 'Anatomy' },
    },
    value: {
      control: 'text',
      description: 'Controlled value',
      table: { category: 'Anatomy' },
    },

    // ── Layout ────────────────────────────────────────────────────────────
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '`horizontal` = 40% label / 60% input grid. `vertical` = stacked.',
      table: { category: 'Layout', defaultValue: { summary: 'horizontal' } },
    },
    width: {
      control: { type: 'number', min: 200, max: 1200, step: 8 },
      description:
        'Total component width in px. In horizontal layout this covers both columns.',
      table: { category: 'Layout', defaultValue: { summary: '640' } },
    },

    // ── Behaviour ─────────────────────────────────────────────────────────
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number', 'date', 'datetime', 'lookup'],
      description: 'HTML input type. `datetime` renders a split date | time field. `lookup` renders a read-only selector.',
      table: { category: 'Behaviour' },
    },
    required: {
      control: 'boolean',
      description: 'Shows the red mandatory indicator on the left edge of the input',
      table: { category: 'Behaviour' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the field — gray background, no hover/focus states',
      table: { category: 'Behaviour' },
    },
    error: {
      control: 'boolean',
      description: 'Error state — border and helper text turn #FF5D5A',
      table: { category: 'Behaviour' },
    },
    autoUpdate: {
      control: 'boolean',
      description: 'Auto-update state — light yellow background when value was auto-populated',
      table: { category: 'Behaviour', defaultValue: { summary: 'false' } },
    },
    suffix: {
      control: false,
      description: 'Icon or element rendered in the 32px slot on the right side of the input',
      table: { category: 'Anatomy' },
    },

    // ── Testing ───────────────────────────────────────────────────────────
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      description:
        'Forces a visual state via `data-state` attribute — for Storybook stories and visual regression tests only.',
      table: {
        category: 'Testing',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Default state — horizontal layout, label present, no placeholder.
 * Shows the standard form row at rest.
 */
export const Default: Story = {
  args: {
    label: "First Name",
    width: 670,
    layout: 'horizontal',
    type: 'text',
  },
};


/**
 * Long label wrapping across two lines.
 * The input must stay aligned with the FIRST line of the label text,
 * not with the bottom edge or midpoint of the full label block.
 */
export const LongLabel: Story = {
  name: 'Long Label',
  args: {
    label: "Data visibility preference for profiles with access to masked data",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    type: 'text',
    required: false
  },
};

/**
 * Hover state — border turns #797883.
 * Uses `forceState="hover"` to trigger the same CSS rule as `:hover`
 * without requiring mouse interaction in Storybook.
 */
export const Hover: Story = {
  name: 'Hover',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'hover',
  },
};

/**
 * Focus state — border turns #5464F2 with a blue glow shadow.
 * Uses `forceState="focus"` to trigger the same CSS rule as `:focus-within`
 * without requiring keyboard interaction in Storybook.
 */
export const Focus: Story = {
  name: 'Focus',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'focus',
    value: "Rama Krish"
  },
};

/**
 * Required field — the red 8px accent bar appears on the left edge of the input.
 * No asterisk in the label; the HTML `required` attribute handles screen-reader
 * announcement. The visual indicator is decorative only.
 */
export const Required: Story = {
  name: 'Required Field',
  args: {
    label: "First Name",
    placeholder: "",
    required: true,
    width: 670,
    layout: 'horizontal',
    type: "text",
  },
};

// ── Additional reference stories ───────────────────────────────────────────

/** Pre-filled value — editing an existing record. */
export const Prefilled: Story = {
  name: 'Prefilled Value',
  args: {
    label: 'Full name',
    defaultValue: "Chinnaiya Raja",
    helperText: "",
    width: 670,
    layout: 'horizontal',
  },
};

/** Full anatomy — label, placeholder, helper text, and required indicator. */
export const FullAnatomy: Story = {
  name: 'Full Anatomy',
  args: {
    label: "First Name",
    placeholder: "Enter your Name",
    helperText: "Type \"#\" to insert merge field",
    required: true,
    width: 670,
    layout: 'horizontal',
    type: 'email',
  },
};

/** Vertical layout — label stacked above the input. */
export const Vertical: Story = {
  name: 'Vertical Layout',
  args: {
    label: 'Search',
    placeholder: 'Search contacts…',
    width: 390,
    layout: 'vertical',
    type: 'search',
  },
};

/**
 * Lookup field — read-only input that opens a record-search dialog when clicked.
 * The Info icon is injected automatically; the grey suffix slot signals the field
 * is not free-text. Pass type="lookup" — no suffix prop needed.
 */
export const Lookup: Story = {
  name: 'Lookup',
  args: {
    label: 'Account Name',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
  },
};

/**
 * Required lookup field — red accent bar and Info icon slot coexist.
 */
export const RequiredLookup: Story = {
  name: 'Required Lookup',
  args: {
    label: 'Account Name',
    required: true,
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
  },
};

/**
 * Disabled state — gray background, muted border, no hover or focus effects.
 * The input and label both render at reduced opacity to signal non-interactivity.
 */
export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    disabled: true,
  },
};

/**
 * Read-only state — muted background, lock badge on the right, value is not editable.
 * Use when the field should display a value the user cannot change in this context.
 */
export const ReadOnly: Story = {
  name: 'Read Only',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    readOnly: true,
  },
};

/**
 * Disabled lookup — grey background, muted border, not-allowed cursor.
 */
export const DisabledLookup: Story = {
  name: 'Disabled Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    disabled: true,
  },
};

/**
 * Read-only lookup — muted background, lock badge replaces chevron.
 */
export const ReadOnlyLookup: Story = {
  name: 'Read Only Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    readOnly: true,
  },
};

/**
 * Error state — border turns #FF5D5A and helper text adopts the same color.
 * Use when validation fails after submission or on blur.
 */
export const Error: Story = {
  name: 'Error',
  args: {
    label: "Last Name",
    placeholder: "",
    helperText: "Last Name cannot be empty.",
    error: true,
    width: 670,
    layout: 'horizontal',
    type: 'email',
  },
};

/**
 * Error with focus — confirms the red glow (not blue) appears when the
 * field is focused in the error state.
 */
export const ErrorFocused: Story = {
  name: 'Error (Focused)',
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    helperText: 'Enter a valid email address.',
    error: true,
    forceState: 'focus',
    width: 670,
    layout: 'horizontal',
    type: 'email',
  },
};

/**
 * Required + Error — both the mandatory indicator and error state active.
 */
export const RequiredError: Story = {
  name: 'Required + Error',
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    helperText: 'This field is required.',
    required: true,
    error: true,
    width: 670,
    layout: 'horizontal',
    type: 'email',
  },
};

/**
 * Auto-update state — light yellow background (#FFFFEA) with warm border (#E5DEC5).
 * Shown when a field value has been automatically populated by a workflow, import,
 * or system rule rather than entered manually by the user.
 * Figma: node 52027-148588.
 */
export const AutoUpdate: Story = {
  name: 'Auto Update',
  args: {
    label: 'Contact Name',
    defaultValue: 'My Contact',
    width: 670,
    layout: 'horizontal',
    autoUpdate: true,
  },
};

/**
 * Date and time field — two sections (date | time) inside one input wrapper,
 * separated by a vertical divider line.
 * Left: DD/MM/YYYY · Right: HH:MM
 * Figma: node 1354-62104.
 */
export const DateTimeField: Story = {
  name: 'Date & Time',
  args: {
    label: 'Created Time',
    width: 670,
    layout: 'horizontal',
    type: 'datetime',
  },
};

/**
 * Date and time — vertical layout at 390px (as used inside CriteriaBuilder).
 */
export const DateTimeVertical: Story = {
  name: 'Date & Time (Vertical)',
  args: {
    width: 390,
    layout: 'vertical',
    type: 'datetime',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// DateTimeInput — calendar-integrated split date | time field
// ─────────────────────────────────────────────────────────────────────────────

/**
 * DateTimeInput — 390px split field with calendar popup on the date half.
 * Time defaults to the next rounded hour on first render when empty.
 * Clicking the date half opens a Calendar; the time half accepts free text.
 */
export const DateTimeInputStory: Story = {
  name: 'Date & Time (with Calendar)',
  parameters: { controls: { disable: true } },
  render: () => {
    const [date, setDate] = useState('22/04/2025');
    const [time, setTime] = useState('');
    return (
      <div style={{ padding: 24 }}>
        <DateTimeInput
          width={390}
          dateValue={date}
          timeValue={time}
          onDateChange={setDate}
          onTimeChange={setTime}
        />
      </div>
    );
  },
};
