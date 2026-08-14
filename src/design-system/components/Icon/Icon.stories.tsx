import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconMap } from './iconMap';
import type { IconName } from './iconMap';
import {
  AlertError, AlertInfo, AlertSuccess, AlertWarning,
  Check, ChevronDownFilled, Close, CloseSmall, CompanyAvatar, CriteriaMinus, CriteriaPlus,
  Edit, GroupAvatar, HelpCircle, ImageAvatar, Info, Lock, More, ResizeHandle, Search, UserAvatar,
  Folder, SidebarCollapse, ChevronUp,
  ModuleLeads, ModuleContacts, ModuleAccounts, ModuleDeals, ModuleForecasts,
  ModuleSolutions, ModuleProducts, ModuleCases, ModuleActivities, ModuleMeeting,
  ModuleReports, ModuleHome, ModuleDocs, ModuleSocial, ModuleCustom, ModuleMyJobs, ModuleAnalytics,
  Bell, CalendarIcon, Settings, BentoMenu, ZiaAI, AppMarket,
  Motivator, AlarmClock, Zia, File, Comment, Announcement,
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
          'Icons: AlertError · AlertInfo · AlertSuccess · AlertWarning · Check · ChevronDownFilled · Close · CloseSmall · CompanyAvatar · CriteriaMinus · CriteriaPlus · Edit · GroupAvatar · HelpCircle · ImageAvatar · Info · Lock · More · ResizeHandle · Search · UserAvatar.',
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
        [Check,             'Check',             11],
        [ChevronDownFilled, 'ChevronDownFilled',  10],
        [Close,             'Close',               8],
        [CloseSmall,        'CloseSmall',           8],
        [CriteriaMinus,     'CriteriaMinus',       16],
        [CriteriaPlus,      'CriteriaPlus',        16],
        [Edit,              'Edit',                12],
        [HelpCircle,        'HelpCircle',          16],
        [Info,              'Info',                18],
        [Lock,              'Lock',                16],
        [More,              'More',                16],
        [ResizeHandle,      'ResizeHandle',        10],
        [Search,            'Search',              14],
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
// Avatar icons — fixed colors, 80×80
// ─────────────────────────────────────────────────────────────────────────────

/** Avatar placeholder icons — fixed Figma colors, not recolorable via currentColor. */
export const AvatarIcons: Story = {
  name: 'Avatar Icons',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      fontFamily: 'var(--ds-font-family-base)',
    }}>
      {([
        [UserAvatar,    'UserAvatar'],
        [GroupAvatar,   'GroupAvatar'],
        [CompanyAvatar, 'CompanyAvatar'],
        [ImageAvatar,   'ImageAvatar'],
      ] as const).map(([Comp, label]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Comp width={48} height={48} />
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

// ─────────────────────────────────────────────────────────────────────────────
// Full icon gallery — every icon component, organized by category
// ─────────────────────────────────────────────────────────────────────────────

const CELL_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '18px 8px 12px',
  border: '1px solid var(--ds-components-input-default-outline)',
  borderRadius: '8px',
  background: 'var(--ds-bg-common-card)',
  cursor: 'default',
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: '10px',
  color: 'var(--ds-text-label)',
  textAlign: 'center',
  lineHeight: '13px',
  wordBreak: 'break-word',
  maxWidth: '80px',
};

const GRID_STYLE: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
  gap: '8px',
};

const SECTION_LABEL_STYLE: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--ds-text-label)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '10px',
  marginTop: '28px',
};

function IconCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={CELL_STYLE} title={label}>
      {children}
      <span style={LABEL_STYLE}>{label}</span>
    </div>
  );
}

export const AllIcons: Story = {
  name: 'All Icons',
  parameters: { controls: { disable: true }, layout: 'padded' },
  render: () => (
    <div style={{ fontFamily: 'var(--ds-font-family-base)', maxWidth: '960px', color: 'var(--ds-text-base)' }}>

      {/* ── Utility ── */}
      <div style={SECTION_LABEL_STYLE}>Utility</div>
      <div style={GRID_STYLE}>
        {([
          ['Info',              <Info key="i" width={18} height={18} />],
          ['Lock',              <Lock key="l" width={16} height={16} />],
          ['Search',            <Search key="s" width={14} height={14} />],
          ['More',              <More key="m" width={16} height={16} />],
          ['Check',             <Check key="ch" width={11} height={8} />],
          ['ChevronDownFilled', <ChevronDownFilled key="cdf" width={10} height={5} />],
          ['ChevronUp',         <ChevronUp key="cu" width={10} height={5} />],
          ['Edit',              <Edit key="e" width={12} height={12} />],
          ['Close',             <Close key="cl" width={8} height={8} />],
          ['CloseSmall',        <CloseSmall key="cs" width={8} height={8} />],
          ['ResizeHandle',      <ResizeHandle key="r" width={10} height={10} />],
          ['CriteriaMinus',     <CriteriaMinus key="cm" width={16} height={16} />],
          ['CriteriaPlus',      <CriteriaPlus key="cp" width={16} height={16} />],
          ['HelpCircle',        <HelpCircle key="hc" width={16} height={16} />],
          ['Folder',            <Folder key="fo" width={16} height={14} />],
          ['SidebarCollapse',   <SidebarCollapse key="sc" width={16} height={16} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

      {/* ── Alert ── */}
      <div style={SECTION_LABEL_STYLE}>Alert</div>
      <div style={GRID_STYLE}>
        {([
          ['AlertSuccess', <AlertSuccess key="as" width={22} height={22} />],
          ['AlertError',   <AlertError   key="ae" width={22} height={22} />],
          ['AlertWarning', <AlertWarning key="aw" width={22} height={22} />],
          ['AlertInfo',    <AlertInfo    key="ai" width={22} height={22} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

      {/* ── Avatar ── */}
      <div style={SECTION_LABEL_STYLE}>Avatar</div>
      <div style={GRID_STYLE}>
        {([
          ['UserAvatar',    <UserAvatar    key="ua" width={40} height={40} />],
          ['GroupAvatar',   <GroupAvatar   key="ga" width={40} height={40} />],
          ['CompanyAvatar', <CompanyAvatar key="ca" width={40} height={40} />],
          ['ImageAvatar',   <ImageAvatar   key="ima" width={40} height={40} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

      {/* ── Module ── */}
      <div style={SECTION_LABEL_STYLE}>Module</div>
      <div style={GRID_STYLE}>
        {([
          ['Home',       <ModuleHome       key="mh"  width={16} height={15} />],
          ['Analytics',  <ModuleAnalytics  key="man" width={17} height={16} />],
          ['Reports',    <ModuleReports    key="mr"  width={16} height={16} />],
          ['Leads',      <ModuleLeads      key="ml"  width={16} height={16} />],
          ['Contacts',   <ModuleContacts   key="mc"  width={16} height={16} />],
          ['Accounts',   <ModuleAccounts   key="mac" width={17} height={16} />],
          ['Deals',      <ModuleDeals      key="md"  width={16} height={16} />],
          ['Forecasts',  <ModuleForecasts  key="mf"  width={16} height={16} />],
          ['Products',   <ModuleProducts   key="mp"  width={16} height={16} />],
          ['Cases',      <ModuleCases      key="mca" width={18} height={16} />],
          ['Solutions',  <ModuleSolutions  key="ms"  width={17} height={16} />],
          ['Activities', <ModuleActivities key="ma"  width={16} height={16} />],
          ['Meeting',    <ModuleMeeting    key="mm"  width={16} height={18} />],
          ['Docs',       <ModuleDocs       key="mdo" width={16} height={16} />],
          ['Social',     <ModuleSocial     key="mso" width={16} height={16} />],
          ['Custom',     <ModuleCustom     key="mcu" width={16} height={16} />],
          ['My Jobs',    <ModuleMyJobs     key="mmj" width={16} height={16} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

      {/* ── Top Bar ── */}
      <div style={SECTION_LABEL_STYLE}>Top Bar</div>
      <div style={GRID_STYLE}>
        {([
          ['Bell',      <Bell      key="bl"  width={18} height={18} />],
          ['Calendar',  <CalendarIcon key="cl" width={18} height={18} />],
          ['Settings',  <Settings  key="sg"  width={18} height={18} />],
          ['BentoMenu', <BentoMenu key="bm"  width={16} height={16} />],
          ['ZiaAI',     <ZiaAI     key="za"  width={21} height={20} />],
          ['AppMarket', <AppMarket key="am"  width={18} height={17} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

      {/* ── WMS Bar ── */}
      <div style={SECTION_LABEL_STYLE}>WMS Bar</div>
      <div style={GRID_STYLE}>
        {([
          ['Motivator',    <Motivator    key="mo" width={14} height={14} />],
          ['AlarmClock',   <AlarmClock   key="ac" width={16} height={15} />],
          ['Zia',          <Zia          key="zi" width={17} height={13} />],
          ['File',         <File         key="fi" width={13} height={15} />],
          ['Comment',      <Comment      key="co" width={14} height={14} />],
          ['Announcement', <Announcement key="an" width={13} height={17} />],
        ] as [string, React.ReactNode][]).map(([label, el]) => (
          <IconCell key={label} label={label}>{el}</IconCell>
        ))}
      </div>

    </div>
  ),
};
