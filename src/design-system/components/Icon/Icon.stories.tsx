import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconMap } from './iconMap';
import type { IconName } from './iconMap';
import {
  AlertError, AlertInfo, AlertSuccess, AlertWarning,
  Check, ChevronDownFilled, CloseSmall, CriteriaMinus, CriteriaPlus, HelpCircle,
  Info, Lock, More, ResizeHandle, Search,
} from '../../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Gallery helpers — derived from the central registry (always in sync)
// ─────────────────────────────────────────────────────────────────────────────

const galleryIcons = (Object.keys(iconMap) as IconName[]).sort();

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Icon> = {
  title: 'Design System/Foundations/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Renders a design-system icon from the central registry (`iconMap.ts`).',
          'Source: crm-icon-library Figma file (node 91-19).',
          'Icons: AlertError · AlertInfo · AlertSuccess · AlertWarning · Check · ChevronDownFilled · CloseSmall · CriteriaMinus · CriteriaPlus · HelpCircle · Info · Lock · More · ResizeHandle · Search.',
          'Line icons use `currentColor`. Alert icons use fixed Figma brand colors.',
        ].join(' '),
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: galleryIcons,
      description: 'Icon to render — must match a key in `iconMap`',
      table: { category: 'Core' },
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 },
      description: 'Width and height in px — icon scales proportionally',
      table: { category: 'Core', defaultValue: { summary: '16' } },
    },
    className: {
      control: 'text',
      description: 'CSS class applied to the SVG element (use for color via currentColor)',
      table: { category: 'Styling' },
    },
    title: {
      control: 'text',
      description: 'Accessible label — applied as aria-label; turns the icon into role="img"',
      table: { category: 'Accessibility' },
    },
    'aria-label': {
      control: 'text',
      description: 'Explicit aria-label — overrides title',
      table: { category: 'Accessibility' },
    },
    'aria-hidden': {
      control: 'boolean',
      description: 'Override auto aria-hidden (true by default for decorative icons)',
      table: { category: 'Accessibility' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

// ─────────────────────────────────────────────────────────────────────────────
// Playground — single icon with live controls
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Interactive playground — use the controls panel to change the icon name and size.
 */
export const Playground: Story = {
  name: 'Playground',
  args: {
    name: 'Info',
    size: 24,
  },
  render: (args) => (
    <div style={{ color: 'var(--ds-text-base)' }}>
      <Icon {...args} />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Gallery — every registered icon
// ─────────────────────────────────────────────────────────────────────────────

/**
 * All registered icons displayed in a responsive grid.
 * Automatically reflects iconMap — add a new entry there and it appears here.
 */
export const Gallery: Story = {
  name: 'Gallery',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ fontFamily: 'var(--ds-font-family-base)' }}>
      <div style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        marginBottom: '16px',
        letterSpacing: '0.02em',
      }}>
        {galleryIcons.length} icons
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
        gap: '8px',
        width: '800px',
        maxWidth: '100%',
      }}>
        {galleryIcons.map((name) => (
          <div
            key={name}
            title={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '20px 8px 14px',
              border: '1px solid var(--ds-components-input-default-outline)',
              borderRadius: '8px',
              background: 'var(--ds-bg-common-card)',
              color: 'var(--ds-text-base)',
              cursor: 'default',
              transition: 'background 120ms',
            }}
          >
            <Icon name={name} size={20} />
            <span style={{
              fontSize: '11px',
              color: 'var(--ds-text-label)',
              textAlign: 'center',
              lineHeight: '14px',
              wordBreak: 'break-word',
            }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Size scale
// ─────────────────────────────────────────────────────────────────────────────

/** Common size steps — 12 · 16 · 20 · 24 · 32 · 48. */
export const Sizes: Story = {
  name: 'Size Scale',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      color: 'var(--ds-text-base)',
      fontFamily: 'var(--ds-font-family-base)',
    }}>
      {([12, 16, 20, 24, 32, 48] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name="Info" size={size} />
          <span style={{ fontSize: '11px', color: 'var(--ds-text-label)' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Color
// ─────────────────────────────────────────────────────────────────────────────

/** Icons inherit `currentColor` — wrap with any color to change them. */
export const Colors: Story = {
  name: 'Color Inheritance',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      fontFamily: 'var(--ds-font-family-base)',
    }}>
      {([
        ['var(--ds-text-base)',   'Base'],
        ['var(--ds-text-label)',  'Label'],
        ['#5464F2',               'Primary'],
        ['#FF5D5A',               'Error'],
        ['#F5A623',               'Warning'],
        ['#2ECC71',               'Success'],
      ] as const).map(([color, label]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color }}>
          <Icon name="Lock" size={20} />
          <span style={{ fontSize: '11px' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Alert icons — fixed Figma brand colors (not currentColor)
// ─────────────────────────────────────────────────────────────────────────────

/** Alert icons use hardcoded brand colors matching the Figma design. They cannot be recolored via CSS `color`. */
export const AlertIcons: Story = {
  name: 'Alert Icons',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      fontFamily: 'var(--ds-font-family-base)',
    }}>
      {([
        [AlertSuccess, 'AlertSuccess', '#12AA67'],
        [AlertError,   'AlertError',   '#FF5D5A'],
        [AlertWarning, 'AlertWarning', '#F18E0A'],
        [AlertInfo,    'AlertInfo',    '#24CBB7'],
      ] as const).map(([Comp, label, color]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Comp />
          <span style={{ fontSize: '11px', color: 'var(--ds-text-label)', textAlign: 'center' }}>{label}</span>
          <span style={{ fontSize: '10px', color, fontWeight: 600 }}>{color}</span>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// UI icons — currentColor (line icons)
// ─────────────────────────────────────────────────────────────────────────────

/** Small line icons that inherit color from `currentColor`. */
export const LineIcons: Story = {
  name: 'Line Icons',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      fontFamily: 'var(--ds-font-family-base)',
      color: 'var(--ds-text-base)',
    }}>
      {([
        [Check,            'Check',            11],
        [ChevronDownFilled,'ChevronDownFilled', 10],
        [CloseSmall,       'CloseSmall',         8],
        [CriteriaMinus,    'CriteriaMinus',     16],
        [CriteriaPlus,     'CriteriaPlus',      16],
        [HelpCircle,       'HelpCircle',        16],
        [Info,             'Info',              18],
        [Lock,             'Lock',              16],
        [More,             'More',              16],
        [ResizeHandle,     'ResizeHandle',      10],
        [Search,           'Search',            14],
      ] as const).map(([Comp, label, size]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Comp width={size} height={size} />
          <span style={{ fontSize: '11px', color: 'var(--ds-text-label)', textAlign: 'center' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Accessibility
// ─────────────────────────────────────────────────────────────────────────────

/** Decorative icons get aria-hidden="true" automatically. Meaningful icons need a label. */
export const Accessibility: Story = {
  name: 'Accessibility',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'var(--ds-font-family-base)',
      fontSize: '14px',
      color: 'var(--ds-text-base)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="Info" size={16} />
        <span>Decorative — aria-hidden="true" applied automatically (no label needed)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="Lock" size={16} aria-label="Locked" />
        <span>Meaningful — role="img" aria-label="Locked" (screen readers announce it)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="Search" size={16} title="Search records" />
        <span>Meaningful via title — same effect as aria-label</span>
      </div>
    </div>
  ),
};
