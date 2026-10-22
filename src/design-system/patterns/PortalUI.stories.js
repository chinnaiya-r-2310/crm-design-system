import { useState } from 'react';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { Stepper } from '../components/Stepper/Stepper';
import { Tabs } from '../components/Tabs/Tabs';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Switch } from '../components/Switch/Switch';
import { Radio } from '../components/Radio/Radio';
import { Tags } from '../components/Tags/Tags';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { SetupTable } from '../components/Table/Table';
import {
  Search, Info, HelpCircle, ChevronDownFilled, Close, CloseSmall,
  Settings, Bell, CalendarIcon, BentoMenu, ZiaAI,
  WmsMotivator, WmsReminder, WmsZia, WmsComment,
  ModuleLeads, ModuleContacts, ModuleDeals,
} from '../foundations/icons/Icons';

const meta = {
  title: 'Design System/Patterns/Portal UI',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-page pattern for the CRM Contact Portal setup wizard — ' +
          'covers all four wizard steps (Portal Experience, User Group Details, ' +
          'Module Configuration, Field Permissions) plus the read-only Summary and Users views.',
      },
    },
  },
};
export default meta;

// ─── Design tokens (shortcuts) ───────────────────────────────────────────────
const T = {
  font: 'var(--ds-font-family-base)',
  textBase: 'var(--ds-text-base)',
  textLabel: 'var(--ds-text-label)',
  textMuted: 'var(--ds-text-muted)',
  textLink: 'var(--ds-text-link)',
  border: 'var(--ds-components-input-default-outline)',
  accent: 'var(--ds-components-input-focus-outline)',
  bgPage: 'var(--ds-page-bg)',
  bgSurface: 'var(--ds-surface-base)',
  bgSubtle: 'var(--ds-surface-secondary)',
  radiusMd: 'var(--ds-radius-md)',
  radiusLg: 'var(--ds-radius-lg)',
  shadowSm: 'var(--ds-shadow-sm)',
  fontSizeBase: 'var(--ds-font-size-base)',
  fontSizeSm: 'var(--ds-font-size-sm)',
  fontSizeLg: 'var(--ds-font-size-lg)',
  fontWeightSemibold: 'var(--ds-font-weight-semibold)',
  fontWeightMedium: 'var(--ds-font-weight-medium)',
  lineHeight: 'var(--ds-line-height-base)',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const PORTAL_THEMES = [
  { id: 'aurora', name: 'Aurora', tag: 'Modern', layout: 'sidebar', accent: T.accent,
    description: 'Left sidebar navigation with a soft indigo accent. Great for support-heavy portals.' },
  { id: 'classic', name: 'Top Navigation', tag: 'Classic', layout: 'topbar', accent: '#2563eb',
    description: 'Familiar Zoho-style top tabs with dense record tables.' },
  { id: 'canvas', name: 'Canvas Lite', tag: 'Minimal', layout: 'cards', accent: '#10b981',
    description: 'Card-first dashboard with generous white space and rounded surfaces.' },
];

const SYSTEM_THEMES = [
  { id: 'crm-standard', name: 'CRM Standard Portal', tag: 'System', layout: 'topbar', accent: '#2563eb',
    description: "Zoho's system default portal layout with a top navigation bar and module tabs." },
];

const MODULE_ROWS = [
  { tab: 'Leads', primary: true, permissions: ['View', 'Create', 'Edit', 'Delete'],
    layouts: [{ name: 'Standard', checked: true }, { name: 'New Lead', checked: false }, { name: 'Quick Details', checked: false }],
    linkedAs: 'None', addCondition: true },
  { tab: 'Contacts', primary: false, permissions: ['View', 'Create'],
    layouts: [{ name: 'Standard', checked: true }, { name: 'qwe', checked: false }],
    linkedAs: 'Lookup 6', condition: '1 Condition' },
  { tab: 'Deals', primary: false, permissions: ['View'],
    layouts: [{ name: 'Standard', checked: true }, { name: 'Pipeline', checked: false }, { name: 'Education', checked: false }],
    linkedAs: 'Deal lookup for standard', addCondition: true },
];

const FIELD_TABS = ['Leads', 'Contacts', 'Deals', 'Quotes'];

const FIELD_GROUPS = [
  { title: 'Lead Image', collapsible: false,
    fields: [{ label: 'Lead Image', checked: true, readOnly: null, avatar: true }] },
  { title: 'Lead Information', collapsible: true,
    fields: [
      { label: 'Subform 6', checked: true, readOnly: null, subform: true },
      { label: 'Aggregate Field 1', checked: true, readOnly: null, placeholder: 'Formula' },
      { label: 'Multi-Line 1', checked: true, readOnly: false, placeholder: 'Multi Line (Small)' },
      { label: 'Aggregate Field 2', checked: true, readOnly: null, placeholder: 'Formula' },
      { label: 'Number 1', checked: true, readOnly: false, placeholder: 'Number' },
    ] },
];

const TAB_CONFIG = [
  { tab: 'Leads', permissions: 'View, Edit, Create, Delete', layouts: 'Standard', createView: 'Standard', detailView: 'Default Detail View', listView: 'Default List View', linked: '-' },
  { tab: 'Contacts', permissions: 'View, Create', layouts: 'Standard', createView: 'Standard', detailView: 'Default Detail View', listView: 'Default List View', linked: 'Lookup 6', condition: '1 Condition' },
  { tab: 'Deals', permissions: 'View', layouts: 'Standard', createView: '-', detailView: 'Default Detail View', listView: 'Default List View', linked: 'Deal lookup for standard' },
  { tab: 'Notes', permissions: 'View', layouts: '-', createView: '-', detailView: '-', listView: 'Default List View', linked: '-' },
];

const PUBLIC_MODULES = [
  { tab: 'Quotes', layouts: 'Standard', detailView: 'Default Detail View', listView: 'Default List View', linked: '-' },
];

const PORTAL_USERS = [
  { id: '1', name: 'Mia Scott', email: 'mia.scott@quantumsolutions.com', invitedOn: 'Dec 29, 2025 12:11 PM', source: 'Invitation Mail', status: 'Yet to confirm' },
  { id: '2', name: 'Aishwarya M', email: 'aishwarya.mp+hg4@zohotest.com', invitedOn: 'Sep 20, 2023 12:47 PM', source: 'Invitation Mail', status: 'Yet to confirm' },
  { id: '3', name: 'AISHU TEST', email: 'aishwarya.mp+unsub@zohotest.com', invitedOn: 'Sep 20, 2023 12:48 PM', source: 'Invitation Mail', status: 'Yet to confirm' },
  { id: '4', name: 'Saraswathy V', email: 'saraswathy.v@zohotest.com', invitedOn: 'Sep 20, 2023 12:48 PM', source: 'Invitation Mail', status: 'Yet to confirm' },
  { id: '5', name: 'test4', email: 'kowsalya.rr+port02@zohotest.com', invitedOn: 'Sep 7, 2023 11:39 AM', source: 'Invitation Mail', status: 'Active' },
];

// ─── Shell helpers ────────────────────────────────────────────────────────────

function PortalShell({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: T.bgPage, fontFamily: T.font }}>
      <NextGenTopBand moduleLabel="Contacts" userInitials="C" notificationCount={1} />
      <main style={{ padding: '8px 20px 80px' }}>{children}</main>
      <footer style={{
        position: 'fixed', inset: 'auto 0 0 0', zIndex: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 48, padding: '0 16px',
        borderTop: `1px solid ${T.border}`,
        background: T.bgSurface,
        fontFamily: T.font,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[
            { icon: <WmsComment />, label: 'Chats', badge: 1 },
            { icon: <WmsZia />, label: 'Channels' },
            { icon: <WmsMotivator />, label: 'Threads' },
            { icon: <WmsReminder />, label: 'People' },
          ].map(({ icon, label, badge }) => (
            <button key={label} type="button" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 2, background: 'none', border: 'none', cursor: 'pointer',
              color: T.textMuted, fontFamily: T.font, fontSize: 10, position: 'relative',
            }}>
              {icon}
              <span>{label}</span>
              {badge ? <span style={{
                position: 'absolute', top: -4, right: -8,
                background: 'var(--ds-status-error)', color: '#fff',
                borderRadius: 99, fontSize: 9, fontWeight: 700,
                minWidth: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '0 3px',
              }}>{badge}</span> : null}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {[Settings, Bell, CalendarIcon, BentoMenu, ZiaAI].map((Icon, i) => (
            <Icon key={i} style={{ width: 16, height: 16, color: T.textMuted }} />
          ))}
          <span style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'var(--ds-status-info)', color: '#fff',
            borderRadius: T.radiusMd, padding: '4px 10px',
            fontSize: T.fontSizeSm, fontWeight: T.fontWeightMedium,
          }}>
            <HelpCircle style={{ width: 14, height: 14 }} /> Help
          </span>
        </div>
      </footer>
    </div>
  );
}

function PortalCard({ children }) {
  return (
    <div style={{
      minHeight: 'calc(100vh - 8rem)',
      borderRadius: T.radiusLg,
      border: `1px solid ${T.border}`,
      background: T.bgSurface,
      boxShadow: T.shadowSm,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

function PortalHeader() {
  return (
    <div style={{
      borderBottom: `1px solid ${T.border}`,
      padding: '28px 32px 20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textBase, display: 'flex' }}>
            <ChevronDownFilled style={{ transform: 'rotate(90deg)', width: 18, height: 18 }} />
          </button>
          <h1 style={{ margin: 0, fontSize: T.fontSizeLg, fontWeight: T.fontWeightSemibold, color: T.textBase }}>
            Contact Portal
          </h1>
          <span style={{
            background: T.bgSubtle, borderRadius: T.radiusMd,
            padding: '4px 12px', fontSize: T.fontSizeSm, color: T.textBase,
          }}>Contacts</span>
        </div>
        <button type="button" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: T.fontSizeSm, color: T.textBase,
        }}>
          <HelpCircle style={{ width: 16, height: 16 }} /> Help
        </button>
      </div>
    </div>
  );
}

function GroupHeader({ active, onTabChange }) {
  const tabs = [
    { id: 'modules', label: 'Modules and Permissions' },
    { id: 'settings', label: 'Settings' },
    { id: 'users', label: 'Users' },
  ];

  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, padding: '28px 32px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textBase, display: 'flex' }}>
            <ChevronDownFilled style={{ transform: 'rotate(90deg)', width: 18, height: 18 }} />
          </button>
          <h1 style={{ margin: 0, fontSize: T.fontSizeLg, fontWeight: T.fontWeightSemibold, color: T.textBase }}>
            Zylker Portal
          </h1>
          <span style={{
            background: T.bgSubtle, borderRadius: T.radiusMd,
            padding: '4px 12px', fontSize: T.fontSizeSm, color: T.textBase,
          }}>Leads</span>
        </div>
        <button type="button" style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: T.fontSizeSm, color: T.textBase,
        }}>
          <HelpCircle style={{ width: 16, height: 16 }} /> Help
        </button>
      </div>

      <div style={{ marginTop: 20, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onTabChange?.(t.id)}
              style={{
                background: active === t.id ? T.bgSurface : 'none',
                border: active === t.id ? `1px solid ${T.accent}` : 'none',
                borderBottom: active === t.id ? `1px solid ${T.bgSurface}` : 'none',
                borderRadius: active === t.id ? `${T.radiusMd} ${T.radiusMd} 0 0` : T.radiusMd,
                padding: '8px 16px',
                cursor: 'pointer',
                fontFamily: T.font,
                fontSize: T.fontSizeSm,
                fontWeight: active === t.id ? T.fontWeightSemibold : 'normal',
                color: active === t.id ? T.textBase : T.textLabel,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        {active === 'modules' && (
          <p style={{ paddingBottom: 8, fontSize: T.fontSizeSm, color: T.textMuted, margin: 0 }}>
            All invites sent via: <strong style={{ color: T.textBase }}>Email</strong>
            <span style={{ margin: '0 12px', display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: T.textMuted, verticalAlign: 'middle' }} />
            Sent to: <strong style={{ color: T.textBase }}>Email</strong>
          </p>
        )}
      </div>
    </div>
  );
}

function WizardFooter({ onPrev, onNext, onCancel, nextLabel = 'Next', prevLabel = 'Previous', showCancel = false }) {
  return (
    <div style={{
      position: 'sticky', bottom: 48,
      display: 'flex', justifyContent: 'flex-end', gap: 12,
      borderTop: `1px solid ${T.border}`,
      background: T.bgSurface,
      padding: '14px 32px',
    }}>
      {showCancel && <Button variant="outline" onClick={onCancel}>Cancel</Button>}
      {onPrev && <Button variant="outline" onClick={onPrev}>{prevLabel}</Button>}
      {onNext && <Button variant="primary" onClick={onNext}>{nextLabel}</Button>}
    </div>
  );
}

function ThemePreviewMock({ layout, accent }) {
  const bar = { background: T.border, borderRadius: 4 };
  if (layout === 'sidebar') return (
    <div style={{ display: 'flex', height: 144, borderRadius: T.radiusMd, border: `1px solid ${T.border}`, overflow: 'hidden', background: T.bgSubtle }}>
      <div style={{ width: '25%', padding: 12, background: accent, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.5)' }} />)}
      </div>
      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ height: 12, borderRadius: 4, background: accent }} />
        <div style={{ height: 8, width: '60%', ...bar }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <div style={{ flex: 1, height: 48, borderRadius: T.radiusMd, background: T.bgSurface }} />
          <div style={{ flex: 1, height: 48, borderRadius: T.radiusMd, background: T.bgSurface }} />
        </div>
      </div>
    </div>
  );
  if (layout === 'cards') return (
    <div style={{ height: 144, borderRadius: T.radiusMd, border: `1px solid ${T.border}`, overflow: 'hidden', background: T.bgSubtle, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ height: 12, borderRadius: 4, background: accent }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
        {Array.from({ length: 6 }).map((_, i) => <div key={i} style={{ height: 40, borderRadius: T.radiusMd, background: T.bgSurface }} />)}
      </div>
    </div>
  );
  return (
    <div style={{ height: 144, borderRadius: T.radiusMd, border: `1px solid ${T.border}`, overflow: 'hidden', background: T.bgSubtle, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ height: 8, width: 48, borderRadius: 4, background: accent }} />
        <div style={{ height: 8, width: 40, ...bar }} />
        <div style={{ height: 8, width: 40, ...bar }} />
      </div>
      <div style={{ background: T.bgSurface, borderRadius: T.radiusMd, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ height: 8, ...bar }} />)}
      </div>
    </div>
  );
}

// ─── Story 1: Portal Experience (Step 1) ─────────────────────────────────────

export const PortalExperience = {
  name: 'Step 1 — Portal Experience',
  render: () => {
    const [step1, setStep1] = useState('systemDefinedPortal');
    const [sub, setSub] = useState('predefinedTemplates');
    const [theme, setTheme] = useState('crm-standard');
    const [previewTheme, setPreviewTheme] = useState(null);

    const step1Options = [
      { id: 'systemDefinedPortal', title: 'Default portal interface', sub: 'Experience same as CRM interface' },
      { id: 'tryNewPortalExperience', title: 'Build your Portal experience', sub: 'Pick a template, build with widgets, or use AI' },
    ];
    const subOptions = [
      { id: 'predefinedTemplates', label: 'Select Templates' },
      { id: 'buildUsingWidgets', label: 'Build using widgets' },
      { id: 'buildUsingAI', label: 'Build using AI' },
    ];

    const themes = step1 === 'systemDefinedPortal' ? SYSTEM_THEMES : PORTAL_THEMES;

    return (
      <PortalShell>
        <PortalCard>
          <PortalHeader />
          <div style={{ padding: '28px 32px 112px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Create Portal User Group</h2>
                <p style={{ marginTop: 12, maxWidth: 680, fontSize: T.fontSizeBase, lineHeight: T.lineHeight, color: T.textLabel }}>
                  Create a user group to customize and manage portal access for different users like clients, partners,
                  vendors, or resellers within a domain. Start by choosing the portal experience you want to offer.
                </p>
              </div>
              <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: T.fontSizeSm, color: T.textMuted }}>
                <Info style={{ width: 16, height: 16 }} /> Help
              </button>
            </div>

            <div style={{ marginTop: 24 }}>
              <Stepper
                steps={[
                  { label: 'Portal Experience', state: 'active' },
                  { label: 'User Group Details', state: 'pending' },
                  { label: 'Portal Module Configuration', state: 'pending' },
                  { label: 'Field Permissions', state: 'pending' },
                ]}
              />
            </div>

            <h3 style={{ marginTop: 40, marginBottom: 8, fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal Experience</h3>
            <p style={{ margin: 0, marginBottom: 24, fontSize: T.fontSizeSm, lineHeight: T.lineHeight, color: T.textMuted }}>
              Choose how the <strong style={{ color: T.textBase }}>Contact Portal</strong> looks to your portal users.
              Start with a system-defined layout, or try a new experience with templates, widgets, or AI.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 700 }}>
              {step1Options.map((opt) => {
                const active = step1 === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => { setStep1(opt.id); setTheme(opt.id === 'systemDefinedPortal' ? 'crm-standard' : 'aurora'); }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '16px 20px', textAlign: 'left', cursor: 'pointer',
                      fontFamily: T.font,
                      borderRadius: 12,
                      border: `2px solid ${active ? T.accent : T.border}`,
                      background: active ? `color-mix(in srgb, ${T.accent} 5%, ${T.bgSurface})` : T.bgSurface,
                      boxShadow: active ? T.shadowSm : 'none',
                    }}
                  >
                    <span style={{
                      marginTop: 2, width: 20, height: 20, borderRadius: '50%',
                      border: `2px solid ${active ? T.accent : T.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {active && <span style={{ width: 10, height: 10, borderRadius: '50%', background: T.accent }} />}
                    </span>
                    <span>
                      <span style={{ display: 'block', fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>{opt.title}</span>
                      <span style={{ display: 'block', fontSize: T.fontSizeSm, color: T.textMuted, marginTop: 4 }}>{opt.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {step1 === 'tryNewPortalExperience' && (
              <div style={{ marginTop: 24, marginLeft: 4, borderLeft: `2px solid color-mix(in srgb, ${T.accent} 30%, transparent)`, paddingLeft: 24 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {subOptions.map((s) => {
                    const active = sub === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { setSub(s.id); if (s.id === 'predefinedTemplates') setTheme('aurora'); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '8px 16px', cursor: 'pointer', fontFamily: T.font,
                          borderRadius: 99, fontSize: T.fontSizeSm, fontWeight: T.fontWeightSemibold,
                          border: `1px solid ${active ? T.accent : T.border}`,
                          background: active ? T.accent : T.bgSurface,
                          color: active ? '#fff' : T.textBase,
                        }}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ marginTop: 32 }}>
              <h4 style={{ marginBottom: 16, fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>
                {step1 === 'systemDefinedPortal' ? 'Default portal interface' : 'Predefined portal interface'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: step1 === 'systemDefinedPortal' ? '1fr' : '1fr 1fr', gap: 16, maxWidth: step1 === 'systemDefinedPortal' ? 360 : 680 }}>
                {themes.map((t) => {
                  const selected = theme === t.id;
                  return (
                    <div
                      key={t.id}
                      style={{
                        padding: 12, borderRadius: T.radiusMd,
                        border: `1px solid ${selected ? T.accent : T.border}`,
                        boxShadow: selected ? `0 0 0 1px ${T.accent}` : 'none',
                      }}
                    >
                      <ThemePreviewMock layout={t.layout} accent={t.accent} />
                      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: T.fontSizeSm, fontWeight: T.fontWeightSemibold, color: T.textBase }}>{t.name}</span>
                        <span style={{ background: T.bgSubtle, borderRadius: 4, padding: '2px 8px', fontSize: 11, color: T.textMuted }}>{t.tag}</span>
                      </div>
                      <p style={{ margin: '6px 0 12px', fontSize: 12, lineHeight: T.lineHeight, color: T.textMuted }}>{t.description}</p>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <Button variant={selected ? 'primary' : 'outline'} onClick={() => setTheme(t.id)}>
                          {selected ? 'Selected' : 'Select'}
                        </Button>
                        <Button variant="outline" onClick={() => setPreviewTheme(t)}>Preview</Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <WizardFooter showCancel onCancel={() => {}} onNext={() => {}} nextLabel="Next" />
        </PortalCard>

        {previewTheme && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'grid', placeItems: 'center', background: 'rgba(0,0,0,0.4)', padding: 16 }}>
            <div style={{ width: '100%', maxWidth: 680, borderRadius: T.radiusMd, background: T.bgSurface, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}`, padding: '16px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>{previewTheme.name}</span>
                  <span style={{ background: T.bgSubtle, borderRadius: 4, padding: '2px 8px', fontSize: 11, color: T.textMuted }}>{previewTheme.tag}</span>
                </div>
                <button type="button" onClick={() => setPreviewTheme(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                  <CloseSmall />
                </button>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <ThemePreviewMock layout={previewTheme.layout} accent={previewTheme.accent} />
                <p style={{ marginTop: 16, fontSize: T.fontSizeSm, lineHeight: T.lineHeight, color: T.textMuted }}>{previewTheme.description}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, borderTop: `1px solid ${T.border}`, padding: '14px 24px' }}>
                <Button variant="outline" onClick={() => setPreviewTheme(null)}>Close</Button>
                <Button variant="primary" onClick={() => { setTheme(previewTheme.id); setPreviewTheme(null); }}>Use this template</Button>
              </div>
            </div>
          </div>
        )}
      </PortalShell>
    );
  },
};

// ─── Story 2: User Group Details (Step 2) ────────────────────────────────────

export const UserGroupDetails = {
  name: 'Step 2 — User Group Details',
  render: () => {
    const [groupName, setGroupName] = useState('New creation');
    const [otherModules, setOtherModules] = useState([
      { value: 'Contacts', label: 'Contacts' },
      { value: 'Deals', label: 'Deals' },
    ]);

    return (
      <PortalShell>
        <PortalCard>
          <PortalHeader />
          <div style={{ padding: '28px 32px 112px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Create Portal User Group</h2>
                <p style={{ marginTop: 12, maxWidth: 700, fontSize: T.fontSizeBase, lineHeight: T.lineHeight, color: T.textLabel }}>
                  Create a user group to customize and manage portal access for different users like clients, partners,
                  vendors, or resellers within a domain. For example, if you want to give portal access to clients
                  sourced from a web form, you can create a user group named "Client from Webform" and configure its access settings.
                </p>
              </div>
              <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: T.fontSizeSm, color: T.textMuted }}>
                <Info style={{ width: 16, height: 16 }} /> Help
              </button>
            </div>

            <div style={{ marginTop: 24 }}>
              <Stepper
                steps={[
                  { label: 'Portal Experience', state: 'completed' },
                  { label: 'User Group Details', state: 'active' },
                  { label: 'Portal Module Configuration', state: 'pending' },
                  { label: 'Field Permissions', state: 'pending' },
                ]}
              />
            </div>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 208, flexShrink: 0, textAlign: 'right', fontSize: T.fontSizeSm, color: T.textLabel }}>Portal User Group Name</span>
                <div style={{ flex: 1, maxWidth: 480 }}>
                  <Input
                    layout="vertical"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Enter group name"
                    width="100%"
                    error={!groupName.trim()}
                    helperText={!groupName.trim() ? 'Group name is required.' : undefined}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 208, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                  <span style={{ fontSize: T.fontSizeSm, color: T.textLabel }}>Primary Module</span>
                  <Info style={{ width: 14, height: 14, color: T.textMuted }} />
                </div>
                <div style={{ flex: 1, maxWidth: 480 }}>
                  <Dropdown layout="vertical" width="100%" value="Leads" options={[
                    { value: 'Leads', label: 'Leads' },
                    { value: 'Contacts', label: 'Contacts' },
                    { value: 'Accounts', label: 'Accounts' },
                  ]} onChange={() => {}} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 208, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, paddingTop: 6 }}>
                  <span style={{ fontSize: T.fontSizeSm, color: T.textLabel }}>Other Module(s)</span>
                  <Info style={{ width: 14, height: 14, color: T.textMuted }} />
                </div>
                <div style={{ flex: 1, maxWidth: 480 }}>
                  <Tags
                    value={otherModules}
                    options={[
                      { value: 'Contacts', label: 'Contacts' },
                      { value: 'Deals', label: 'Deals' },
                      { value: 'Accounts', label: 'Accounts' },
                      { value: 'Notes', label: 'Notes' },
                      { value: 'Quotes', label: 'Quotes' },
                    ]}
                    onChange={(tags) => setOtherModules(tags)}
                    width="100%"
                    placeholder="Add module"
                  />
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 48, marginBottom: 24, fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal Invitation Preference</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 208, flexShrink: 0, textAlign: 'right', fontSize: T.fontSizeSm, color: T.textLabel }}>Send Invitations Via</span>
                <div style={{ flex: 1, maxWidth: 480 }}>
                  <Dropdown layout="vertical" width="100%" value="Email" options={[
                    { value: 'Email', label: 'Email' },
                    { value: 'Phone', label: 'Phone' },
                  ]} onChange={() => {}} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 208, flexShrink: 0, textAlign: 'right', fontSize: T.fontSizeSm, color: T.textLabel }}>Related Field</span>
                <div style={{ flex: 1, maxWidth: 480 }}>
                  <Dropdown layout="vertical" width="100%" value="Email (Leads)" options={[
                    { value: 'Email (Leads)', label: 'Email (Leads)' },
                  ]} onChange={() => {}} error helperText="Required field" />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32, maxWidth: 680, borderRadius: T.radiusMd, border: '1px solid #fde68a', background: '#fffbeb', padding: 20, fontSize: T.fontSizeSm, lineHeight: T.lineHeight, color: T.textBase }}>
              <p style={{ margin: '0 0 8px', fontWeight: T.fontWeightSemibold }}>Note:</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>You cannot modify the Primary module after the portal user group is created.</li>
                <li>You cannot modify the invitation preference after adding users or if a portal form is created for the user group.</li>
              </ul>
            </div>
          </div>

          <WizardFooter onPrev={() => {}} onNext={() => {}} />
        </PortalCard>
      </PortalShell>
    );
  },
};

// ─── Story 3: Module Configuration (Step 3) ──────────────────────────────────

export const ModuleConfiguration = {
  name: 'Step 3 — Module Configuration',
  render: () => {
    const initLayouts = Object.fromEntries(
      MODULE_ROWS.flatMap((r) => r.layouts.map((l) => [`${r.tab}:${l.name}`, l.checked]))
    );
    const [layouts, setLayouts] = useState(initLayouts);

    const toggle = (key) => setLayouts((s) => ({ ...s, [key]: !s[key] }));

    const columns = ['Tabs', 'Permissions', 'Layouts', 'Create View', 'Detail View', 'List View', 'Linked As & Conditions'];

    return (
      <PortalShell>
        <PortalCard>
          <PortalHeader />
          <div style={{ padding: '28px 32px 112px' }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal User Group</h2>

            <div style={{ marginTop: 16 }}>
              <Stepper
                steps={[
                  { label: 'Portal Experience', state: 'completed' },
                  { label: 'User Group Details', state: 'completed' },
                  { label: 'Portal Module Configuration', state: 'active' },
                  { label: 'Field Permissions', state: 'pending' },
                ]}
              />
            </div>

            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0, fontSize: T.fontSizeLg, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal Module Configuration</h3>
              <Button variant="outline">Add Modules ▾</Button>
            </div>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: T.fontSizeBase, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Related Modules</h4>
            <p style={{ margin: '0 0 20px', fontSize: T.fontSizeSm, color: T.textLabel }}>
              Select the modules and their respective layout and permission associated with{' '}
              <strong>Leads</strong>. <strong>Zylker Portal</strong> user group will have access to only these modules as tabs.
            </p>

            <div style={{ overflowX: 'auto', borderRadius: T.radiusMd, border: `1px solid ${T.border}` }}>
              <table style={{ width: '100%', minWidth: 1100, borderCollapse: 'collapse', fontSize: T.fontSizeSm, fontFamily: T.font }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${T.border}`, textAlign: 'left' }}>
                    {columns.map((h) => (
                      <th key={h} style={{ padding: '14px 20px', fontWeight: T.fontWeightSemibold, color: T.textBase }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MODULE_ROWS.map((row) => (
                    <tr key={row.tab} style={{ borderBottom: `1px solid ${T.border}`, verticalAlign: 'top' }}>
                      <td style={{ padding: '20px', color: T.textBase }}>
                        <strong>{row.tab}</strong>
                        {row.primary && (
                          <span style={{ marginLeft: 8, background: T.bgSubtle, color: T.textLink, borderRadius: 4, padding: '2px 8px', fontSize: 11 }}>Primary</span>
                        )}
                      </td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, border: `1px solid ${T.border}`, borderRadius: T.radiusMd, padding: '8px 28px 8px 8px', width: 230, position: 'relative' }}>
                          {row.permissions.map((p) => (
                            <span key={p} style={{ background: T.bgSubtle, borderRadius: 99, padding: '4px 10px', fontSize: 12, color: T.textLabel }}>{p}</span>
                          ))}
                          <ChevronDownFilled style={{ position: 'absolute', right: 8, top: 10, width: 12, height: 12, color: T.textMuted }} />
                        </div>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                          {row.layouts.map((l) => {
                            const key = `${row.tab}:${l.name}`;
                            return (
                              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <Checkbox id={key} checked={layouts[key] ?? false} onChange={(e) => toggle(key)} />
                                <label htmlFor={key} style={{ fontSize: T.fontSizeSm, color: T.textBase, cursor: 'pointer' }}>{l.name}</label>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {row.layouts.map((l) => (
                            <Dropdown key={l.name} layout="vertical" width={200} value={l.name} options={[{ value: l.name, label: l.name }]} onChange={() => {}} />
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {row.layouts.map((l) => (
                            <Dropdown key={l.name} layout="vertical" width={200} value="Default Detail View" options={[{ value: 'Default Detail View', label: 'Default Detail View' }]} onChange={() => {}} />
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <Dropdown layout="vertical" width={200} value="Default List View" options={[{ value: 'Default List View', label: 'Default List View' }]} onChange={() => {}} />
                      </td>
                      <td style={{ padding: '20px' }}>
                        {row.linkedAs && (
                          <Dropdown layout="vertical" width={200} value={row.linkedAs} options={[{ value: row.linkedAs, label: row.linkedAs }]} onChange={() => {}} />
                        )}
                        {row.condition && (
                          <button type="button" style={{ marginTop: 8, display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: T.textLink, fontSize: T.fontSizeSm }}>{row.condition}</button>
                        )}
                        {row.addCondition && (
                          <button type="button" style={{ marginTop: 8, display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: T.textLink, fontSize: T.fontSizeSm }}>Add Conditions</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <WizardFooter onPrev={() => {}} onNext={() => {}} />
        </PortalCard>
      </PortalShell>
    );
  },
};

// ─── Story 4: Field Permissions (Step 4) ─────────────────────────────────────

export const FieldPermissions = {
  name: 'Step 4 — Field Permissions',
  render: () => {
    const [activeTab, setActiveTab] = useState('Leads');
    const [fieldState, setFieldState] = useState(
      Object.fromEntries(
        FIELD_GROUPS.flatMap((g) =>
          g.fields.map((f) => [`${g.title}:${f.label}`, { checked: f.checked, readOnly: !!f.readOnly }])
        )
      )
    );

    const toggle = (key, prop) =>
      setFieldState((s) => ({ ...s, [key]: { ...s[key], [prop]: !s[key][prop] } }));

    return (
      <PortalShell>
        <PortalCard>
          <PortalHeader />
          <div style={{ padding: '28px 32px 112px' }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal User Group</h2>
            <p style={{ marginTop: 12, maxWidth: 700, fontSize: T.fontSizeBase, lineHeight: T.lineHeight, color: T.textLabel }}>
              Create a user group to customize and manage portal access for different users like clients, partners, vendors,
              or resellers within a domain.
            </p>

            <div style={{ marginTop: 24 }}>
              <Stepper
                steps={[
                  { label: 'Portal Experience', state: 'completed' },
                  { label: 'User Group Details', state: 'completed' },
                  { label: 'Portal Module Configuration', state: 'completed' },
                  { label: 'Field Permissions', state: 'active' },
                ]}
              />
            </div>

            <p style={{ marginTop: 32, fontSize: T.fontSizeBase, color: T.textBase }}>
              Choose the fields to be displayed for every selected tab in the{' '}
              <strong>Zylker Portal</strong> portal user group.
            </p>
            <p style={{ marginTop: 8, fontSize: T.fontSizeSm, color: T.textMuted }}>Note: Field permissions are not specific to layouts.</p>

            <div style={{ marginTop: 24 }}>
              <Tabs
                tabs={FIELD_TABS.map((t) => ({ id: t, label: t }))}
                activeTab={activeTab}
                onChange={(id) => setActiveTab(id)}
              />
            </div>

            {activeTab === 'Leads' && (
              <>
                <div style={{ marginTop: 24, display: 'inline-block', borderBottom: `2px solid ${T.accent}`, paddingBottom: 4, fontSize: T.fontSizeBase, color: T.accent, fontWeight: T.fontWeightMedium }}>Standard</div>

                <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {FIELD_GROUPS.map((group) => (
                    <div key={group.title}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: T.bgSubtle, borderRadius: T.radiusMd, padding: '12px 16px' }}>
                        <Checkbox id={`group-${group.title}`} checked label={group.title} onChange={() => {}} />
                      </div>

                      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {group.fields.map((f) => {
                          const key = `${group.title}:${f.label}`;
                          const s = fieldState[key] ?? { checked: false, readOnly: false };
                          return (
                            <div key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 200px 200px', gap: 16, alignItems: 'center', padding: '8px 16px', borderRadius: T.radiusMd, border: `1px solid ${T.border}` }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <Checkbox id={key} checked={s.checked} onChange={() => toggle(key, 'checked')} />
                                <label htmlFor={key} style={{ fontSize: T.fontSizeSm, color: T.textBase, cursor: 'pointer' }}>{f.label}</label>
                                {f.placeholder && <span style={{ fontSize: 11, color: T.textMuted }}>({f.placeholder})</span>}
                              </div>
                              {f.readOnly !== undefined && f.readOnly !== null && !f.subform ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <Switch checked={s.readOnly} onChange={() => toggle(key, 'readOnly')} id={`ro-${key}`} />
                                  <label htmlFor={`ro-${key}`} style={{ fontSize: T.fontSizeSm, color: T.textLabel }}>Read Only</label>
                                </div>
                              ) : <div />}
                              {f.subform ? (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                  {['View', 'Create', 'Edit', 'Delete'].map((p) => (
                                    <span key={p} style={{ background: T.bgSubtle, borderRadius: 99, padding: '2px 8px', fontSize: 11, color: T.textLabel }}>{p}</span>
                                  ))}
                                </div>
                              ) : <div />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab !== 'Leads' && (
              <div style={{ marginTop: 32, textAlign: 'center', color: T.textMuted, fontSize: T.fontSizeSm }}>
                Select a layout from the {activeTab} module to configure field permissions.
              </div>
            )}
          </div>

          <WizardFooter onPrev={() => {}} onNext={() => {}} nextLabel="Save" />
        </PortalCard>
      </PortalShell>
    );
  },
};

// ─── Story 5: Modules Summary ─────────────────────────────────────────────────

export const ModulesSummary = {
  name: 'Summary — Modules & Permissions',
  render: () => {
    const [activeGroup, setActiveGroup] = useState('modules');
    const tabCols = ['Tabs', 'Permissions', 'Layouts', 'Create View', 'Detail View', 'List View', 'Linked As & Conditions'];
    const pubCols = ['Tabs', 'Layouts', 'Detail View', 'List View', 'Linked As & Conditions'];

    return (
      <PortalShell>
        <PortalCard>
          <GroupHeader active={activeGroup} onTabChange={setActiveGroup} />
          <div style={{ padding: '28px 32px 112px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ margin: 0, fontSize: T.fontSizeLg, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Portal Tab Configuration</h2>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="outline">Edit</Button>
                <Button variant="outline">Go to Field Permissions</Button>
                <Button variant="outline">Portal Preview</Button>
              </div>
            </div>

            <div style={{ marginTop: 20, overflowX: 'auto', borderRadius: T.radiusMd, border: `1px solid ${T.border}` }}>
              <table style={{ width: '100%', minWidth: 1100, borderCollapse: 'collapse', fontSize: T.fontSizeSm, fontFamily: T.font }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${T.border}`, textAlign: 'left' }}>
                    {tabCols.map((h) => (
                      <th key={h} style={{ padding: '14px 20px', fontWeight: T.fontWeightSemibold, color: T.textBase }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TAB_CONFIG.map((row, i) => (
                    <tr key={row.tab} style={{ borderBottom: i < TAB_CONFIG.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                      <td style={{ padding: '14px 20px', fontWeight: T.fontWeightMedium, color: T.textBase }}>{row.tab}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.permissions}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.layouts}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.createView}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.detailView}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.listView}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>
                        {row.linked}
                        {row.condition && (
                          <>
                            {' '}
                            <span style={{ fontWeight: T.fontWeightSemibold, color: T.textLink }}>AND</span>{' '}
                            <span style={{ color: T.textLink, textDecoration: 'underline' }}>{row.condition}</span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ marginTop: 40, marginBottom: 20, fontSize: T.fontSizeLg, fontWeight: T.fontWeightSemibold, color: T.textBase }}>Public Modules</h2>
            <div style={{ overflowX: 'auto', borderRadius: T.radiusMd, border: `1px solid ${T.border}` }}>
              <table style={{ width: '100%', minWidth: 800, borderCollapse: 'collapse', fontSize: T.fontSizeSm, fontFamily: T.font }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${T.border}`, textAlign: 'left' }}>
                    {pubCols.map((h) => (
                      <th key={h} style={{ padding: '14px 20px', fontWeight: T.fontWeightSemibold, color: T.textBase }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PUBLIC_MODULES.map((row) => (
                    <tr key={row.tab}>
                      <td style={{ padding: '14px 20px', fontWeight: T.fontWeightMedium, color: T.textBase }}>{row.tab}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.layouts}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.detailView}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.listView}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{row.linked}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </PortalCard>
      </PortalShell>
    );
  },
};

// ─── Story 6: Users ───────────────────────────────────────────────────────────

export const Users = {
  name: 'Users',
  render: () => {
    const [activeGroup, setActiveGroup] = useState('users');
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState({});
    const [active, setActive] = useState(
      Object.fromEntries(PORTAL_USERS.map((u) => [u.id, u.status === 'Active']))
    );
    const [reinvited, setReinvited] = useState({});

    const users = PORTAL_USERS.filter(
      (u) =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <PortalShell>
        <PortalCard>
          <GroupHeader active={activeGroup} onTabChange={setActiveGroup} />
          <div style={{ padding: '28px 32px 112px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Button variant="outline">All Users ({PORTAL_USERS.length}) ▾</Button>
                <Input
                  layout="vertical"
                  placeholder="Search Users"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  width={220}
                  suffix={<Search style={{ width: 14, height: 14, color: 'var(--ds-text-muted)' }} />}
                />
              </div>
              <Button variant="outline">Invite users</Button>
            </div>

            <div style={{ marginTop: 20, overflowX: 'auto', borderRadius: T.radiusMd, border: `1px solid ${T.border}` }}>
              <table style={{ width: '100%', minWidth: 900, borderCollapse: 'collapse', fontSize: T.fontSizeSm, fontFamily: T.font }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${T.border}`, textAlign: 'left' }}>
                    {['Portal User Name ▾', 'Email Id', 'Invited/Submitted On ▾', 'All Source ▾', 'Portal User Status', 'Actions'].map((h) => (
                      <th key={h} style={{ padding: '14px 20px', fontWeight: T.fontWeightSemibold, color: T.textBase }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.id} style={{ borderBottom: i < users.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                      <td style={{ padding: '14px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <Checkbox
                            id={`sel-${u.id}`}
                            checked={!!selected[u.id]}
                            onChange={() => setSelected((s) => ({ ...s, [u.id]: !s[u.id] }))}
                          />
                          <span style={{ color: T.textLink }}>{u.name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: T.textLink }}>{u.email}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{u.invitedOn}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>{u.source}</td>
                      <td style={{ padding: '14px 20px', color: T.textLabel }}>
                        {active[u.id] ? 'Active' : u.status === 'Active' ? 'Disabled' : u.status}
                      </td>
                      <td style={{ padding: '14px 20px' }}>
                        {u.status === 'Yet to confirm' && !active[u.id] ? (
                          <button
                            type="button"
                            onClick={() => setReinvited((r) => ({ ...r, [u.id]: true }))}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textLink, fontSize: T.fontSizeSm }}
                          >
                            {reinvited[u.id] ? 'Invited' : 'Reinvite'}
                          </button>
                        ) : (
                          <Switch
                            checked={!!active[u.id]}
                            onChange={() => setActive((a) => ({ ...a, [u.id]: !a[u.id] }))}
                            id={`active-${u.id}`}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ padding: '32px 20px', textAlign: 'center', color: T.textMuted }}>
                        No users match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </PortalCard>
      </PortalShell>
    );
  },
};
