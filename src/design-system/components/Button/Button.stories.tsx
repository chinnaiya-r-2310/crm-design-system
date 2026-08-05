import { useState, useRef, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonVariant, ButtonSize } from './Button';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Full button system from the Chinnaiya Style Sheet — Buttons frame (node 58:20385).',
          '',
          '**Filled** `primary` `default` `negative` `success` — md & sm. `warning` sm only.',
          '',
          '**Outline** `outline-blue` `outline-green` `outline-red` — md & sm. `outline-orange` sm only.',
          '',
          '**Ghost** `ghost-blue` `ghost-red` — light tinted bg, no border.',
          '',
          '**Link** `link-primary` `link-secondary` `link-default` `link-red` — text-only.',
          '',
          '**Sizes**: md (32px) · sm (27px) · xs (19px, default variant only). `loading` replaces label with spinner.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
      table: { category: 'Anatomy' },
    },
    variant: {
      control: 'select',
      options: [
        'primary', 'default', 'negative', 'success', 'warning',
        'outline-blue', 'outline-green', 'outline-red', 'outline-orange',
        'ghost-blue', 'ghost-red',
        'link-primary', 'link-secondary', 'link-default', 'link-red',
      ] satisfies ButtonVariant[],
      description: 'Visual style variant',
      table: { category: 'Anatomy', defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: ['md', 'sm', 'xs'] satisfies ButtonSize[],
      description: '`md` = 32px · `sm` = 27px · `xs` = 19px (default variant only)',
      table: { category: 'Layout', defaultValue: { summary: 'md' } },
    },
    arrow: {
      control: 'boolean',
      description: 'Append a down-chevron arrow to the right of the label',
      table: { category: 'Modifiers', defaultValue: { summary: 'false' } },
    },
    split: {
      control: 'boolean',
      description: '`true` = Menu Button (separator + arrow zone). `false` = More Button (arrow inline, no separator). Ghost variants always hide separator.',
      table: { category: 'Modifiers', defaultValue: { summary: 'true' } },
    },
    loading: {
      control: 'boolean',
      description: 'Spinner only — hides label, disables interaction',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state — muted colors, not interactive',
      table: { category: 'State', defaultValue: { summary: 'false' } },
    },
    forceState: {
      control: 'radio',
      options: [undefined, 'hover', 'active'],
      description: 'Force a visual state for stories and visual regression tests',
      table: { category: 'Testing', defaultValue: { summary: 'undefined' } },
    },
    frontIcon: {
      control: false,
      description: 'Icon rendered in the left slot before the label',
      table: { category: 'Modifiers' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
    {children}
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <span style={{
      fontFamily: 'var(--ds-font-family-base)',
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--ds-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    }}>
      {title}
    </span>
    {children}
  </div>
);

const DROPDOWN_ACTIONS = ['Edit record', 'Duplicate', 'Archive', 'Delete'];

function DropdownPanel({ onClose, topOffset = 'calc(100% - 1px)' }: { onClose: () => void; topOffset?: string }) {
  return (
    <div style={{
      position: 'absolute', top: topOffset, left: 0, zIndex: 100,
      background: 'var(--ds-components-dropdown-option-bg, #fff)',
      border: '1px solid var(--ds-components-dropdown-outline, #CED0E1)',
      borderRadius: 6,
      boxShadow: '0 2px 8px 0 var(--ds-shadow-dropdown, rgba(0,0,0,0.15))',
      padding: '6px 0', minWidth: 148,
    }}>
      {DROPDOWN_ACTIONS.map(action => (
        <button
          key={action}
          onClick={onClose}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--ds-components-dropdown-hover-bg, #F2F5FE)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
          style={{
            display: 'flex', alignItems: 'center', height: 32,
            margin: '0 6px', padding: '0 10px', borderRadius: 5,
            width: 'calc(100% - 12px)', textAlign: 'left',
            fontFamily: 'var(--ds-font-family-base)',
            fontSize: 'var(--ds-font-size-base)',
            color: action === 'Delete' ? '#F63647' : 'var(--ds-text-base, #313949)',
            background: 'none', border: 'none', cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          {action}
        </button>
      ))}
    </div>
  );
}

function MenuWrap({ id, openId, onClose, children, dropdownOffset }: {
  id: string;
  openId: string | null;
  onClose: () => void;
  children: React.ReactNode;
  dropdownOffset?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isOpen = openId === id;
  useEffect(() => {
    if (!isOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isOpen, onClose]);
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {children}
      {isOpen && <DropdownPanel onClose={onClose} topOffset={dropdownOffset} />}
    </div>
  );
}

/** Button that triggers a 1000ms loading spinner on click. */
function LoadingButton({ children, variant, size, arrow, ...rest }: React.ComponentProps<typeof Button>) {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant={variant}
      size={size}
      arrow={arrow}
      loading={loading}
      onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1000); }}
      {...rest}
    >
      {children}
    </Button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { children: 'Save', variant: 'primary', size: 'md' },
};

// ── Primary states ────────────────────────────────────────────────────────

export const PrimaryDefault: Story = {
  name: 'Primary / Default',
  args: { children: 'Save', variant: 'primary', size: 'md' },
};

export const PrimaryHover: Story = {
  name: 'Primary / Hover',
  args: { children: 'Save', variant: 'primary', size: 'md', forceState: 'hover' },
};

export const PrimaryActive: Story = {
  name: 'Primary / Active',
  args: { children: 'Save', variant: 'primary', size: 'md', forceState: 'active' },
};

export const PrimaryLoader: Story = {
  name: 'Primary / Loader',
  args: { children: 'Save', variant: 'primary', size: 'md', loading: true },
};

export const PrimaryDisabled: Story = {
  name: 'Primary / Disabled',
  args: { children: 'Save', variant: 'primary', size: 'md', disabled: true },
};

export const PrimaryWithArrow: Story = {
  name: 'Primary / With Arrow',
  args: { children: 'Actions', variant: 'primary', size: 'md', arrow: true },
};

export const PrimaryAllStates: Story = {
  name: 'Primary — All States',
  render: () => (
    <Row>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="md" forceState="hover">Hover</Button>
      <Button variant="primary" size="md" forceState="active">Active</Button>
      <Button variant="primary" size="md" loading>Loading</Button>
      <Button variant="primary" size="md" disabled>Disabled</Button>
    </Row>
  ),
};

// ── Filled variants (md — no warning/orange) ──────────────────────────────

export const FilledVariants: Story = {
  name: 'Filled — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Default — md">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Default — sm (warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="primary" forceState="hover">Primary</Button>
          <Button variant="default" forceState="hover">Default</Button>
          <Button variant="negative" forceState="hover">Negative</Button>
          <Button variant="success" forceState="hover">Success</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="primary" forceState="active">Primary</Button>
          <Button variant="default" forceState="active">Default</Button>
          <Button variant="negative" forceState="active">Negative</Button>
          <Button variant="success" forceState="active">Success</Button>
        </Row>
      </Section>
      <Section title="Loader">
        <Row>
          <Button variant="primary" loading>Primary</Button>
          <Button variant="default" loading>Default</Button>
          <Button variant="negative" loading>Negative</Button>
          <Button variant="success" loading>Success</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="default" disabled>Default</Button>
          <Button variant="negative" disabled>Negative</Button>
          <Button variant="success" disabled>Success</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Outline variants (orange = sm only) ───────────────────────────────────

export const OutlineVariants: Story = {
  name: 'Outline — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Default — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Default — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="outline-blue" forceState="hover">Outline Blue</Button>
          <Button variant="outline-green" forceState="hover">Outline Green</Button>
          <Button variant="outline-red" forceState="hover">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="outline-blue" forceState="active">Outline Blue</Button>
          <Button variant="outline-green" forceState="active">Outline Green</Button>
          <Button variant="outline-red" forceState="active">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Loader">
        <Row>
          <Button variant="outline-blue" loading>Outline Blue</Button>
          <Button variant="outline-green" loading>Outline Green</Button>
          <Button variant="outline-red" loading>Outline Red</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="outline-blue" disabled>Outline Blue</Button>
          <Button variant="outline-green" disabled>Outline Green</Button>
          <Button variant="outline-red" disabled>Outline Red</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Ghost variants ─────────────────────────────────────────────────────────

export const GhostVariants: Story = {
  name: 'Ghost — All Variants',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => (
      <MenuWrap key={id} id={id} openId={openId} onClose={close} dropdownOffset="100%">{btn}</MenuWrap>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Section title="Default">
          <Row>
            <Button variant="ghost-blue">Ghost Blue</Button>
            <Button variant="ghost-red">Ghost Red</Button>
          </Row>
        </Section>
        <Section title="With arrow — md (inline, no separator)">
          <Row>
            {W('gb', <Button variant="ghost-blue" size="md" arrow isOpen={openId === 'gb'} onClick={() => toggle('gb')}>More</Button>)}
            {W('gr', <Button variant="ghost-red" size="md" arrow isOpen={openId === 'gr'} onClick={() => toggle('gr')}>More</Button>)}
          </Row>
        </Section>
        <Section title="With arrow — sm (inline, no separator)">
          <Row>
            {W('gsb', <Button variant="ghost-blue" size="sm" arrow isOpen={openId === 'gsb'} onClick={() => toggle('gsb')}>More</Button>)}
            {W('gsr', <Button variant="ghost-red" size="sm" arrow isOpen={openId === 'gsr'} onClick={() => toggle('gsr')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="ghost-blue" forceState="hover">Ghost Blue</Button>
            <Button variant="ghost-red" forceState="hover">Ghost Red</Button>
            <Button variant="ghost-blue" arrow forceState="hover">More</Button>
            <Button variant="ghost-red" arrow forceState="hover">More</Button>
          </Row>
        </Section>
        <Section title="Active">
          <Row>
            <Button variant="ghost-blue" forceState="active">Ghost Blue</Button>
            <Button variant="ghost-red" forceState="active">Ghost Red</Button>
            <Button variant="ghost-blue" arrow isOpen>More</Button>
            <Button variant="ghost-red" arrow isOpen>More</Button>
          </Row>
        </Section>
        <Section title="Loader">
          <Row>
            <Button variant="ghost-blue" loading>Ghost Blue</Button>
            <Button variant="ghost-red" loading>Ghost Red</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="ghost-blue" disabled>Ghost Blue</Button>
            <Button variant="ghost-red" disabled>Ghost Red</Button>
            <Button variant="ghost-blue" arrow disabled>More</Button>
            <Button variant="ghost-red" arrow disabled>More</Button>
          </Row>
        </Section>
      </div>
    );
  },
};

// ── Link variants ──────────────────────────────────────────────────────────

export const LinkVariants: Story = {
  name: 'Link — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Default">
        <Row>
          <Button variant="link-primary">Primary Link</Button>
          <Button variant="link-secondary">Secondary Link</Button>
          <Button variant="link-default">Default Link</Button>
          <Button variant="link-red">Red Link</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="link-primary" forceState="hover">Primary Link</Button>
          <Button variant="link-secondary" forceState="hover">Secondary Link</Button>
          <Button variant="link-default" forceState="hover">Default Link</Button>
          <Button variant="link-red" forceState="hover">Red Link</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="link-primary" disabled>Primary Link</Button>
          <Button variant="link-secondary" disabled>Secondary Link</Button>
          <Button variant="link-default" disabled>Default Link</Button>
          <Button variant="link-red" disabled>Red Link</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Sizes ──────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes — md & sm',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Filled — md (32px)">
        <Row>
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="default" size="md">Default</Button>
          <Button variant="negative" size="md">Negative</Button>
          <Button variant="success" size="md">Success</Button>
        </Row>
      </Section>
      <Section title="Filled — sm (27px, warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue" size="md">Outline Blue</Button>
          <Button variant="outline-green" size="md">Outline Green</Button>
          <Button variant="outline-red" size="md">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Outline — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Ghost Blue</Button>
          <Button variant="ghost-red" size="sm">Ghost Red</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Extreme Small (xs — default only) ─────────────────────────────────────

export const ExtremeSmall: Story = {
  name: 'Extreme Small (xs — default only)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Default">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
          <Button variant="default" size="xs">Export</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="default" size="xs" forceState="hover">Verify</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="default" size="xs" forceState="active">Verify</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="default" size="xs" disabled>Verify</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Small Buttons — all sm variants (Figma node 18997:111271) ─────────────

export const SmallButtons: Story = {
  name: 'Small Buttons — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Section title="Filled — sm">
        <Row>
          <Button variant="primary" size="sm">Add</Button>
          <Button variant="default" size="sm">Add</Button>
          <Button variant="negative" size="sm">Add</Button>
          <Button variant="success" size="sm">Add</Button>
          <Button variant="warning" size="sm">Add</Button>
        </Row>
      </Section>
      <Section title="Outline — sm">
        <Row>
          <Button variant="outline-blue" size="sm">Clear</Button>
          <Button variant="outline-green" size="sm">Accept</Button>
          <Button variant="outline-red" size="sm">Reject</Button>
          <Button variant="outline-orange" size="sm">Warn</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Assign</Button>
          <Button variant="ghost-red" size="sm">Deactivate</Button>
        </Row>
      </Section>
      <Section title="With arrow — sm">
        <Row>
          <Button variant="default" size="sm" arrow>Add</Button>
          <Button variant="outline-blue" size="sm" arrow>Reinvite</Button>
          <Button variant="outline-green" size="sm" arrow>Accept</Button>
          <Button variant="outline-red" size="sm" arrow>Reject</Button>
        </Row>
      </Section>
      <Section title="Hover — sm">
        <Row>
          <Button variant="ghost-blue" size="sm" forceState="hover">Assign</Button>
          <Button variant="ghost-red" size="sm" forceState="hover">Deactivate</Button>
          <Button variant="outline-blue" size="sm" forceState="hover">Clear</Button>
        </Row>
      </Section>
      <Section title="Loader — sm">
        <Row>
          <Button variant="primary" size="sm" loading>Add</Button>
          <Button variant="default" size="sm" loading>Add</Button>
          <Button variant="negative" size="sm" loading>Add</Button>
          <Button variant="outline-blue" size="sm" loading>Clear</Button>
          <Button variant="outline-red" size="sm" loading>Reject</Button>
        </Row>
      </Section>
      <Section title="Disabled — sm">
        <Row>
          <Button variant="primary" size="sm" disabled>Add</Button>
          <Button variant="default" size="sm" disabled>Add</Button>
          <Button variant="outline-blue" size="sm" disabled>Clear</Button>
          <Button variant="ghost-blue" size="sm" disabled>Assign</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Loader — all variants with 1000ms interactive demo ────────────────────

export const LoaderState: Story = {
  name: 'Loader — All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Section title="Click any button — 1000ms loader">
        <Row>
          <LoadingButton variant="primary" size="md">Save</LoadingButton>
          <LoadingButton variant="default" size="md">Cancel</LoadingButton>
          <LoadingButton variant="negative" size="md">Delete</LoadingButton>
          <LoadingButton variant="success" size="md">Accept</LoadingButton>
          <LoadingButton variant="outline-blue" size="md">Reinvite</LoadingButton>
          <LoadingButton variant="outline-green" size="md">Accept</LoadingButton>
          <LoadingButton variant="outline-red" size="md">Delete</LoadingButton>
          <LoadingButton variant="ghost-blue" size="md">More</LoadingButton>
          <LoadingButton variant="ghost-red" size="md">More</LoadingButton>
        </Row>
      </Section>
      <Section title="Static loader — md">
        <Row>
          <Button variant="primary" size="md" loading>Save</Button>
          <Button variant="default" size="md" loading>Cancel</Button>
          <Button variant="negative" size="md" loading>Delete</Button>
          <Button variant="success" size="md" loading>Accept</Button>
          <Button variant="outline-blue" size="md" loading>Reinvite</Button>
          <Button variant="outline-green" size="md" loading>Accept</Button>
          <Button variant="outline-red" size="md" loading>Delete</Button>
          <Button variant="ghost-blue" size="md" loading>More</Button>
          <Button variant="ghost-red" size="md" loading>More</Button>
        </Row>
      </Section>
      <Section title="Static loader — sm">
        <Row>
          <Button variant="primary" size="sm" loading>Save</Button>
          <Button variant="default" size="sm" loading>Cancel</Button>
          <Button variant="negative" size="sm" loading>Delete</Button>
          <Button variant="outline-blue" size="sm" loading>Reinvite</Button>
          <Button variant="outline-green" size="sm" loading>Accept</Button>
          <Button variant="outline-red" size="sm" loading>Delete</Button>
        </Row>
      </Section>
      <Section title="Menu button loader — arrow stays, dimmed">
        <Row>
          <Button variant="primary" size="md" arrow loading>Create</Button>
          <Button variant="default" size="md" arrow loading>Cancel</Button>
          <Button variant="outline-blue" size="md" arrow loading>Actions</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Menu Button (arrow + separator) ───────────────────────────────────────

export const MenuButton: Story = {
  name: 'Menu Button',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => (
      <MenuWrap key={id} id={id} openId={openId} onClose={close}>{btn}</MenuWrap>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Section title="Interactive — click arrow to open">
          <Row>
            {W('p', <Button variant="primary" size="md" arrow isOpen={openId === 'p'} onArrowClick={() => toggle('p')}>Actions</Button>)}
            {W('d', <Button variant="default" size="md" arrow isOpen={openId === 'd'} onArrowClick={() => toggle('d')}>Actions</Button>)}
            {W('n', <Button variant="negative" size="md" arrow isOpen={openId === 'n'} onArrowClick={() => toggle('n')}>Actions</Button>)}
            {W('s', <Button variant="success" size="md" arrow isOpen={openId === 's'} onArrowClick={() => toggle('s')}>Actions</Button>)}
          </Row>
          <Row>
            {W('ob', <Button variant="outline-blue" size="md" arrow isOpen={openId === 'ob'} onArrowClick={() => toggle('ob')}>Actions</Button>)}
            {W('og', <Button variant="outline-green" size="md" arrow isOpen={openId === 'og'} onArrowClick={() => toggle('og')}>Actions</Button>)}
            {W('or', <Button variant="outline-red" size="md" arrow isOpen={openId === 'or'} onArrowClick={() => toggle('or')}>Actions</Button>)}
          </Row>
        </Section>

        <Section title="Filled — md">
          <Row>
            {W('fp', <Button variant="primary" size="md" arrow isOpen={openId === 'fp'} onArrowClick={() => toggle('fp')}>Actions</Button>)}
            {W('fd', <Button variant="default" size="md" arrow isOpen={openId === 'fd'} onArrowClick={() => toggle('fd')}>Actions</Button>)}
            {W('fn', <Button variant="negative" size="md" arrow isOpen={openId === 'fn'} onArrowClick={() => toggle('fn')}>Actions</Button>)}
            {W('fs', <Button variant="success" size="md" arrow isOpen={openId === 'fs'} onArrowClick={() => toggle('fs')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Filled — sm (warning available)">
          <Row>
            {W('sp', <Button variant="primary" size="sm" arrow isOpen={openId === 'sp'} onArrowClick={() => toggle('sp')}>Actions</Button>)}
            {W('sd', <Button variant="default" size="sm" arrow isOpen={openId === 'sd'} onArrowClick={() => toggle('sd')}>Actions</Button>)}
            {W('sn', <Button variant="negative" size="sm" arrow isOpen={openId === 'sn'} onArrowClick={() => toggle('sn')}>Actions</Button>)}
            {W('ss', <Button variant="success" size="sm" arrow isOpen={openId === 'ss'} onArrowClick={() => toggle('ss')}>Actions</Button>)}
            {W('sw', <Button variant="warning" size="sm" arrow isOpen={openId === 'sw'} onArrowClick={() => toggle('sw')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Outline — md">
          <Row>
            {W('mob', <Button variant="outline-blue" size="md" arrow isOpen={openId === 'mob'} onArrowClick={() => toggle('mob')}>Actions</Button>)}
            {W('mog', <Button variant="outline-green" size="md" arrow isOpen={openId === 'mog'} onArrowClick={() => toggle('mog')}>Actions</Button>)}
            {W('mor', <Button variant="outline-red" size="md" arrow isOpen={openId === 'mor'} onArrowClick={() => toggle('mor')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Outline — sm (orange available)">
          <Row>
            {W('sob', <Button variant="outline-blue" size="sm" arrow isOpen={openId === 'sob'} onArrowClick={() => toggle('sob')}>Actions</Button>)}
            {W('sog', <Button variant="outline-green" size="sm" arrow isOpen={openId === 'sog'} onArrowClick={() => toggle('sog')}>Actions</Button>)}
            {W('sor', <Button variant="outline-red" size="sm" arrow isOpen={openId === 'sor'} onArrowClick={() => toggle('sor')}>Actions</Button>)}
            {W('soo', <Button variant="outline-orange" size="sm" arrow isOpen={openId === 'soo'} onArrowClick={() => toggle('soo')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Active (open state)">
          <Row>
            <Button variant="primary" size="md" arrow isOpen>Actions</Button>
            <Button variant="default" size="md" arrow isOpen>Actions</Button>
            <Button variant="outline-blue" size="md" arrow isOpen>Actions</Button>
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="primary" size="md" arrow forceState="hover">Actions</Button>
            <Button variant="default" size="md" arrow forceState="hover">Actions</Button>
            <Button variant="outline-blue" size="md" arrow forceState="hover">Actions</Button>
          </Row>
        </Section>
        <Section title="Loading (arrow stays, dimmed)">
          <Row>
            <Button variant="primary" size="md" arrow loading>Actions</Button>
            <Button variant="default" size="md" arrow loading>Actions</Button>
            <Button variant="outline-blue" size="md" arrow loading>Actions</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="primary" size="md" arrow disabled>Actions</Button>
            <Button variant="default" size="md" arrow disabled>Actions</Button>
            <Button variant="outline-blue" size="md" arrow disabled>Actions</Button>
          </Row>
        </Section>
      </div>
    );
  },
};

// ── More Button (arrow only, no separator) ─────────────────────────────────

export const MoreButton: Story = {
  name: 'More Button',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => (
      <MenuWrap key={id} id={id} openId={openId} onClose={close}>{btn}</MenuWrap>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Section title="Filled — md (no separator)">
          <Row>
            {W('fp', <Button variant="primary" size="md" arrow split={false} isOpen={openId === 'fp'} onClick={() => toggle('fp')}>More</Button>)}
            {W('fd', <Button variant="default" size="md" arrow split={false} isOpen={openId === 'fd'} onClick={() => toggle('fd')}>More</Button>)}
            {W('fn', <Button variant="negative" size="md" arrow split={false} isOpen={openId === 'fn'} onClick={() => toggle('fn')}>More</Button>)}
            {W('fs', <Button variant="success" size="md" arrow split={false} isOpen={openId === 'fs'} onClick={() => toggle('fs')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Filled — sm (no separator, warning available)">
          <Row>
            {W('sp', <Button variant="primary" size="sm" arrow split={false} isOpen={openId === 'sp'} onClick={() => toggle('sp')}>More</Button>)}
            {W('sd', <Button variant="default" size="sm" arrow split={false} isOpen={openId === 'sd'} onClick={() => toggle('sd')}>More</Button>)}
            {W('sn', <Button variant="negative" size="sm" arrow split={false} isOpen={openId === 'sn'} onClick={() => toggle('sn')}>More</Button>)}
            {W('ss', <Button variant="success" size="sm" arrow split={false} isOpen={openId === 'ss'} onClick={() => toggle('ss')}>More</Button>)}
            {W('sw', <Button variant="warning" size="sm" arrow split={false} isOpen={openId === 'sw'} onClick={() => toggle('sw')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Outline — md (no separator)">
          <Row>
            {W('mob', <Button variant="outline-blue" size="md" arrow split={false} isOpen={openId === 'mob'} onClick={() => toggle('mob')}>More</Button>)}
            {W('mog', <Button variant="outline-green" size="md" arrow split={false} isOpen={openId === 'mog'} onClick={() => toggle('mog')}>More</Button>)}
            {W('mor', <Button variant="outline-red" size="md" arrow split={false} isOpen={openId === 'mor'} onClick={() => toggle('mor')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Outline — sm (no separator, orange available)">
          <Row>
            {W('sob', <Button variant="outline-blue" size="sm" arrow split={false} isOpen={openId === 'sob'} onClick={() => toggle('sob')}>More</Button>)}
            {W('sog', <Button variant="outline-green" size="sm" arrow split={false} isOpen={openId === 'sog'} onClick={() => toggle('sog')}>More</Button>)}
            {W('sor', <Button variant="outline-red" size="sm" arrow split={false} isOpen={openId === 'sor'} onClick={() => toggle('sor')}>More</Button>)}
            {W('soo', <Button variant="outline-orange" size="sm" arrow split={false} isOpen={openId === 'soo'} onClick={() => toggle('soo')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Active (open state)">
          <Row>
            <Button variant="primary" size="md" arrow split={false} isOpen>More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} isOpen>More</Button>
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="primary" size="md" arrow split={false} forceState="hover">More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} forceState="hover">More</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="primary" size="md" arrow split={false} disabled>More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} disabled>More</Button>
          </Row>
        </Section>
      </div>
    );
  },
};

// ── Group Button — Meeting Invitation (collapses to solid more button) ────

const RSVP_OPTIONS = [
  { value: 'yes',   label: 'Yes',   outlineVariant: 'outline-green'  as ButtonVariant, selectedVariant: 'success'  as ButtonVariant },
  { value: 'maybe', label: 'Maybe', outlineVariant: 'outline-orange' as ButtonVariant, selectedVariant: 'warning'  as ButtonVariant },
  { value: 'no',    label: 'No',    outlineVariant: 'outline-red'    as ButtonVariant, selectedVariant: 'negative' as ButtonVariant },
];

/**
 * Group Button — Meeting Invitation RSVP.
 * Unselected: three small outline buttons (Yes / Maybe / No).
 * Selected: collapses to a single solid more button (filled + arrow).
 * Figma: node 34442:87663.
 */
export const GroupButtonMeetingInvitation: Story = {
  name: 'Group Button — Meeting Invitation',
  render: () => {
    const [rsvp, setRsvp] = useState<string | undefined>(undefined);
    const [rsvpYes, setRsvpYes] = useState<string>('yes');
    const [rsvpMaybe, setRsvpMaybe] = useState<string>('maybe');
    const [rsvpNo, setRsvpNo] = useState<string>('no');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Section title="Interactive — collapses to single solid more button on selection">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ButtonGroup options={RSVP_OPTIONS} value={rsvp} size="sm" onChange={setRsvp} />
            {rsvp && (
              <button
                onClick={() => setRsvp(undefined)}
                style={{
                  fontSize: 12, color: 'var(--ds-text-muted)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 0, fontFamily: 'var(--ds-font-family-base)',
                }}
              >
                Reset
              </button>
            )}
          </div>
        </Section>
        <Section title="Yes selected — single solid more button">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpYes} size="sm" onChange={setRsvpYes} />
        </Section>
        <Section title="Maybe selected">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpMaybe} size="sm" onChange={setRsvpMaybe} />
        </Section>
        <Section title="No selected">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpNo} size="sm" onChange={setRsvpNo} />
        </Section>
        <Section title="Default — no selection">
          <ButtonGroup options={RSVP_OPTIONS} size="sm" />
        </Section>
      </div>
    );
  },
};

// ── Button Group Combinations — action templates ──────────────────────────

/**
 * Common action bar templates — exact button text and variants from Figma node 93641:149261.
 */
export const ButtonGroupCombinations: Story = {
  name: 'Button Group — Combinations',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Section title="Approval — Accept / Reject (outline)">
        <Row>
          <Button variant="outline-green">Accept</Button>
          <Button variant="outline-red">Reject</Button>
        </Row>
      </Section>
      <Section title="Approval — Accept / Reject (filled)">
        <Row>
          <Button variant="success">Accept</Button>
          <Button variant="negative">Reject</Button>
        </Row>
      </Section>
      <Section title="User Management — Reinvite / Deactivate">
        <Row>
          <Button variant="outline-blue">Reinvite</Button>
          <Button variant="outline-red">Deactivate</Button>
        </Row>
      </Section>
      <Section title="Form — Create / Cancel">
        <Row>
          <Button variant="primary">Create</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
      <Section title="Record actions — Save / Save and Close / Cancel">
        <Row>
          <Button variant="primary">Save</Button>
          <Button variant="default">Save and Close</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
      <Section title="Bulk — Save / Add & Reorder / Cancel">
        <Row>
          <Button variant="primary">Save</Button>
          <Button variant="primary">Add & Reorder</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Keyboard Focus ─────────────────────────────────────────────────────────

export const KeyboardFocus: Story = {
  name: 'Keyboard Focus',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Section title="Filled — md (Tab to focus)">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Ghost — md">
        <Row>
          <Button variant="ghost-blue">Ghost Blue</Button>
          <Button variant="ghost-red">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Link — md">
        <Row>
          <Button variant="link-primary">Link Primary</Button>
          <Button variant="link-secondary">Link Secondary</Button>
          <Button variant="link-default">Link Default</Button>
          <Button variant="link-red">Link Red</Button>
        </Row>
      </Section>
      <Section title="With arrow — md">
        <Row>
          <Button variant="primary" arrow>Primary</Button>
          <Button variant="default" arrow>Default</Button>
          <Button variant="outline-blue" arrow>Outline Blue</Button>
          <Button variant="ghost-blue" arrow>Ghost Blue</Button>
        </Row>
      </Section>
      <Section title="sm size">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
        </Row>
      </Section>
      <Section title="xs size — default only">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
        </Row>
      </Section>
    </div>
  ),
};

// ── Full overview ──────────────────────────────────────────────────────────

export const Overview: Story = {
  name: 'Overview — All Buttons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 8 }}>
      <Section title="Filled — md">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Filled — sm (warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Outline — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Ghost — md">
        <Row>
          <Button variant="ghost-blue">Ghost Blue</Button>
          <Button variant="ghost-red">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Ghost Blue</Button>
          <Button variant="ghost-red" size="sm">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Link">
        <Row>
          <Button variant="link-primary">Primary Link</Button>
          <Button variant="link-secondary">Secondary Link</Button>
          <Button variant="link-default">Default Link</Button>
          <Button variant="link-red">Red Link</Button>
        </Row>
      </Section>
      <Section title="With Arrow — menu button">
        <Row>
          <Button variant="primary" arrow>Actions</Button>
          <Button variant="default" arrow>Actions</Button>
          <Button variant="outline-blue" arrow>Actions</Button>
          <Button variant="outline-blue" size="sm" arrow>Actions</Button>
        </Row>
      </Section>
      <Section title="Extreme Small (xs) — default only">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
          <Button variant="default" size="xs">Export</Button>
        </Row>
      </Section>
    </div>
  ),
};
