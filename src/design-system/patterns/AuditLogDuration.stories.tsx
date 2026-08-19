import React, { useState, useRef, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal/Modal';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Button } from '../components/Button/Button';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Tags } from '../components/Tags/Tags';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Info as InfoIcon } from '../foundations/icons/Icons';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Patterns/Audit Log Duration',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal pattern for managing audit log retention settings — ' +
          'set visible log history and archived log retention durations ' +
          'using a dual-range slider.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// ─────────────────────────────────────────────────────────────────────────────
// Date helpers
// ─────────────────────────────────────────────────────────────────────────────

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function subtractYears(date: Date, years: number): Date {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() - years);
  return d;
}

function subtractDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() - days);
  return d;
}

function fmtDate(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Dual Range Slider
// ─────────────────────────────────────────────────────────────────────────────

function DualRangeSlider({
  min = 0,
  max = 10,
  maxA = max,
  valueA,
  valueB,
  onChangeA,
  onChangeB,
  showThumbB = true,
}: {
  min?: number;
  max?: number;
  maxA?: number;
  valueA: number;
  valueB: number;
  onChangeA: (v: number) => void;
  onChangeB: (v: number) => void;
  showThumbB?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const steps    = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const count    = steps.length;

  const pctA = ((valueA - min) / (max - min)) * 100;
  const pctB = ((valueB - min) / (max - min)) * 100;

  const pickValue = useCallback((clientX: number) => {
    const rect  = trackRef.current!.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return Math.round(min + ratio * (max - min));
  }, [min, max]);

  const startDrag = (thumb: 'a' | 'b') => (e: React.MouseEvent) => {
    e.preventDefault();
    const move = (ev: MouseEvent) => {
      const v = pickValue(ev.clientX);
      if (thumb === 'a') onChangeA(Math.min(Math.max(v, 1), Math.min(valueB - 1, maxA)));
      else               onChangeB(Math.max(v, valueA + 1, 2));
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const thumbStyle: React.CSSProperties = {
    position: 'absolute',
    width: 19, height: 19,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    background: '#fff',
    border: '2px solid #9C9CA6',
    boxShadow: '0 3px 12px rgba(49,57,73,0.15)',
    boxSizing: 'border-box',
    cursor: 'grab',
    outline: 'none',
    transition: 'left 80ms ease, border-color 120ms, box-shadow 120ms',
    zIndex: 1,
  };

  return (
    <div style={{ userSelect: 'none', width: '100%', fontFamily: 'var(--ds-font-family-base)' }}>
      <style>{`
        .ds-thumb-dot:hover {
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
        .ds-thumb-dot:focus-visible {
          outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
          outline-offset: 2px;
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
      `}</style>

      {/* ── Track + 2 thumbs ──────────────────────────────────────────────── */}
      <div ref={trackRef} style={{ position: 'relative', height: 16 }}>

        {/* Grey base track */}
        <div style={{
          position: 'absolute', left: 0, right: 0,
          top: '50%', transform: 'translateY(-50%)',
          height: 9, borderRadius: 4.5,
          background: 'var(--ds-components-slider-slider-bg-grey, #E5EAF2)',
          pointerEvents: 'none',
        }} />

        {/* Blue fill — visible range (left → thumb A) */}
        <div style={{
          position: 'absolute', left: 0, width: `${pctA}%`,
          top: '50%', transform: 'translateY(-50%)',
          height: 9, borderRadius: 4.5,
          background: 'var(--ds-components-slider-active-bg-fill-color, #5464F2)',
          pointerEvents: 'none',
        }} />

        {/* Orange fill — archive range (thumb A → thumb B) */}
        {showThumbB && pctB > pctA && (
          <div style={{
            position: 'absolute', left: `${pctA}%`, width: `${pctB - pctA}%`,
            top: '50%', transform: 'translateY(-50%)',
            height: 9, borderRadius: 4.5,
            background: 'var(--ds-icon-primary-orange, #F18E0A)',
            pointerEvents: 'none',
          }} />
        )}

        {/* Thumb A — visible end */}
        <div
          className="ds-thumb-dot"
          onMouseDown={startDrag('a')}
          style={{ ...thumbStyle, left: `${pctA}%` }}
          role="slider"
          tabIndex={0}
          aria-valuemin={min} aria-valuemax={valueB} aria-valuenow={valueA}
          aria-label="Visible log history end"
        />

        {/* Thumb B — archive end */}
        {showThumbB && (
          <div
            className="ds-thumb-dot"
            onMouseDown={startDrag('b')}
            style={{ ...thumbStyle, left: `${pctB}%`, zIndex: 2 }}
            role="slider"
            tabIndex={0}
            aria-valuemin={valueA} aria-valuemax={max} aria-valuenow={valueB}
            aria-label="Archive log end"
          />
        )}
      </div>

      {/* ── Numbers below — centered on each thumb's percentage position ──── */}
      <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
        {steps.map((s, i) => {
          const pct = count > 1 ? (i / (count - 1)) * 100 : 50;
          return (
            <span key={s} style={{
              position: 'absolute',
              left: `${pct}%`,
              transform: 'translateX(-50%)',
              fontSize: 11,
              color: 'var(--ds-text-muted, #8B9BB8)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}>
              {s}
            </span>
          );
        })}
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Retention summary row
// ─────────────────────────────────────────────────────────────────────────────

function RetentionRow({
  dotColor,
  showDot = true,
  label,
  years,
  availableFrom,
  availableTo,
}: {
  dotColor: string;
  showDot?: boolean;
  label: string;
  years: number;
  availableFrom: string;
  availableTo: string;
}) {
  const text: React.CSSProperties = {
    fontFamily: 'var(--ds-font-family-base)',
    fontSize: 'var(--ds-font-size-base)',
    color: 'var(--ds-text-label)',
    lineHeight: '1.6',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
        {showDot && <div style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: dotColor,
          flexShrink: 0,
        }} />}
        <span style={{ ...text, color: 'var(--ds-text-base)', fontWeight: 'var(--ds-font-weight-semibold)' as any }}>
          {label}
        </span>
        <span style={{ ...text, color: 'var(--ds-text-base)' }}>
          : <strong style={{ fontWeight: 'var(--ds-font-weight-semibold)' as any }}>
            {years} {years === 1 ? 'year' : 'years'}
          </strong>
        </span>
      </div>
      <span style={{ ...text, paddingLeft: showDot ? 14 : 0 }}>
        Available Data:{' '}
        <span style={{ color: 'var(--ds-text-base)' }}>{availableFrom} - {availableTo}</span>
      </span>
      <span style={{ ...text, paddingLeft: showDot ? 14 : 0 }}>
        Estimated Data Storage:{' '}
        <span style={{ color: 'var(--ds-text-base)' }}>~ 0</span>
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// More Menu (··· trigger → action list)
// ─────────────────────────────────────────────────────────────────────────────

const menuItemStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px 16px',
  textAlign: 'left',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--ds-font-family-base)',
  fontSize: 'var(--ds-font-size-base)',
  color: 'var(--ds-text-base)',
  whiteSpace: 'nowrap',
};

function MoreMenu({ onManageRetention }: { onManageRetention: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useCallback(() => {}, []); // keep hook order stable

  React.useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuOpen]);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36,
          border: '1px solid var(--ds-border-default, #D8DFF0)',
          borderRadius: 6,
          background: '#fff',
          cursor: 'pointer',
          fontSize: 20,
          letterSpacing: 1,
          color: 'var(--ds-text-base)',
          lineHeight: 1,
        }}
        aria-label="More options"
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        ···
      </button>

      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          right: 0,
          background: '#fff',
          border: '1px solid var(--ds-border-default, #E2E8F5)',
          borderRadius: 8,
          boxShadow: '0 4px 16px rgba(49,57,73,0.14)',
          minWidth: 220,
          zIndex: 200,
          overflow: 'hidden',
        }}>
          <button
            style={menuItemStyle}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ds-bg-surface-hover, #F5F7FA)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
            onClick={() => { onManageRetention(); setMenuOpen(false); }}
          >
            Manage Log Retention Settings
          </button>
          <button
            style={menuItemStyle}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ds-bg-surface-hover, #F5F7FA)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
            onClick={() => setMenuOpen(false)}
          >
            Exported Log History
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Story
// ─────────────────────────────────────────────────────────────────────────────

export const ManageLogRetentionSettings: Story = {
  name: 'Manage Log Retention Settings',
  decorators: [
    (Story) => (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: 'url(/crm-design-system/images/audit-log-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    const [open, setOpen] = useState(true);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [saved, setSaved] = useState(false);
    const [visibleYears, setVisibleYears] = useState(3);
    const [totalYears, setTotalYears]     = useState(7);
    const [archiveEnabled, setArchiveEnabled] = useState(true);

    const [exemptEnabled, setExemptEnabled] = useState(false);
    const [modulesTags, setModulesTags] = useState([]);
    const [subformsTags, setSubformsTags] = useState([]);
    const modulesOptions = [
      { value: 'leads',          label: 'Leads'           },
      { value: 'contacts',       label: 'Contacts'        },
      { value: 'accounts',       label: 'Accounts'        },
      { value: 'deals',          label: 'Deals'           },
      { value: 'campaigns',      label: 'Campaigns'       },
      { value: 'tasks',          label: 'Tasks'           },
      { value: 'meetings',       label: 'Meetings'        },
      { value: 'calls',          label: 'Calls'           },
      { value: 'reports',        label: 'Reports'         },
      { value: 'quotes',         label: 'Quotes'          },
      { value: 'products',       label: 'Products'        },
      { value: 'invoices',       label: 'Invoices'        },
      { value: 'purchase-orders',label: 'Purchase Orders' },
      { value: 'sales-orders',   label: 'Sales Orders'   },
      { value: 'price-books',    label: 'Price Books'     },
      { value: 'cases',          label: 'Cases'           },
      { value: 'solutions',      label: 'Solutions'       },
      { value: 'documents',      label: 'Documents'       },
      { value: 'vendors',        label: 'Vendors'         },
      { value: 'activities',     label: 'Activities'      },
    ];
    const subformsOptions = [
      { value: 'line-items-deals',    label: 'Line Items',        tagLabel: 'Line Items (Deals)',        group: 'Deals' },
      { value: 'tax-details-deals',   label: 'Tax Details',       tagLabel: 'Tax Details (Deals)',       group: 'Deals' },
      { value: 'discount-deals',      label: 'Discount Details',  tagLabel: 'Discount Details (Deals)',  group: 'Deals' },
      { value: 'line-items-quotes',   label: 'Line Items',        tagLabel: 'Line Items (Quotes)',       group: 'Quotes' },
      { value: 'tax-details-quotes',  label: 'Tax Details',       tagLabel: 'Tax Details (Quotes)',      group: 'Quotes' },
      { value: 'shipping-quotes',     label: 'Shipping Charges',  tagLabel: 'Shipping Charges (Quotes)', group: 'Quotes' },
      { value: 'line-items-invoices', label: 'Line Items',        tagLabel: 'Line Items (Invoices)',     group: 'Invoices' },
      { value: 'tax-details-invoices',label: 'Tax Details',       tagLabel: 'Tax Details (Invoices)',    group: 'Invoices' },
      { value: 'line-items-po',       label: 'Line Items',        tagLabel: 'Line Items (Purchase Orders)', group: 'Purchase Orders' },
      { value: 'vendor-details-po',   label: 'Vendor Details',    tagLabel: 'Vendor Details (Purchase Orders)', group: 'Purchase Orders' },
    ];

    const archiveYears = totalYears - visibleYears;

    const today        = new Date('2026-08-18');
    const visibleStart = subtractYears(today, visibleYears);
    const archiveEnd   = subtractDays(visibleStart, 1);
    const archiveStart = subtractYears(archiveEnd, archiveYears);

    return (
      <>
        <Modal
          isOpen={open}
          title="Manage Log Retention Settings"
          description="Choose how long the logs should stay visible and archived in the Audit Log."
          onClose={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          onSave={() => setConfirmOpen(true)}
          cancelLabel="Cancel"
          saveLabel="Save"
          width={640}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingRight: 20 }}>

            {/* ── Dual range slider ───────────────────────────────────────── */}
            <div style={{ paddingTop: 4 }}>
              <DualRangeSlider
                min={0}
                max={10}
                maxA={3}
                valueA={visibleYears}
                valueB={totalYears}
                onChangeA={setVisibleYears}
                onChangeB={setTotalYears}
                showThumbB={archiveEnabled}
              />
            </div>

            {/* ── Archive checkbox ─────────────────────────────────────────── */}
            <Checkbox
              label="Archive"
              checked={archiveEnabled}
              onChange={(e) => setArchiveEnabled(e.target.checked)}
            />

            {/* ── Retention summary rows ───────────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <RetentionRow
                dotColor="var(--ds-components-slider-active-bg-fill-color, #5464F2)"
                showDot={true}
                label="Visible Log History"
                years={visibleYears}
                availableFrom={fmtDate(visibleStart)}
                availableTo="Now"
              />

              {archiveEnabled && archiveYears > 0 && (
                <RetentionRow
                  dotColor="var(--ds-icon-primary-orange, #F18E0A)"
                  label="Archived Logs Retention"
                  years={archiveYears}
                  availableFrom={fmtDate(archiveStart)}
                  availableTo={fmtDate(archiveEnd)}
                />
              )}

              {/* Cleanup Period */}
              {(() => {
                const cleanupDate = archiveEnabled && archiveYears > 0 ? archiveStart : visibleStart;
                const rowText: React.CSSProperties = {
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize: 'var(--ds-font-size-base)',
                  color: 'var(--ds-text-base)',
                  lineHeight: '1.6',
                };
                return (
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                    <div style={{
                      width: 8, height: 8,
                      borderRadius: '50%',
                      background: 'var(--ds-text-muted, #8C9BAB)',
                      flexShrink: 0,
                    }} />
                    <span style={{ ...rowText, fontWeight: 'var(--ds-font-weight-semibold)' as any }}>
                      Cleanup Period
                    </span>
                    <span style={rowText}>
                      : <strong style={{ fontWeight: 'var(--ds-font-weight-semibold)' as any }}>
                        Beyond {fmtDate(cleanupDate)}
                      </strong>
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* ── Select Modules to exempt from Standard Duration ─────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Checkbox
                  label="Select Modules to exempt from Standard Duration"
                  checked={exemptEnabled}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExemptEnabled(e.target.checked)}
                />
                <Tooltip
                  content="Logs for selected modules will not follow the standard duration and will be retained for 6 months only."
                  placement="top"
                  variant="white"
                >
                  <span style={{ display: 'inline-flex', color: 'var(--ds-text-label)' }}>
                    <InfoIcon width={14} height={14} />
                  </span>
                </Tooltip>
              </div>

              {exemptEnabled && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Modules */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{
                      fontFamily: 'var(--ds-font-family-base)',
                      fontSize: 'var(--ds-font-size-base)',
                      fontWeight: 'var(--ds-font-weight-regular)' as any,
                      color: 'var(--ds-text-label)',
                      flexShrink: 0,
                      width: 140,
                      paddingTop: 7,
                      textAlign: 'right',
                    }}>
                      Modules
                    </span>
                    <Tags
                      value={modulesTags}
                      options={modulesOptions}
                      onChange={setModulesTags}
                      width={390}
                    />
                  </div>

                  {/* Subforms */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{
                      fontFamily: 'var(--ds-font-family-base)',
                      fontSize: 'var(--ds-font-size-base)',
                      fontWeight: 'var(--ds-font-weight-regular)' as any,
                      color: 'var(--ds-text-label)',
                      flexShrink: 0,
                      width: 140,
                      paddingTop: 7,
                      textAlign: 'right',
                    }}>
                      Subforms
                    </span>
                    <Tags
                      value={subformsTags}
                      options={subformsOptions}
                      onChange={setSubformsTags}
                      width={390}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ── Notes callout ────────────────────────────────────────────── */}
            <MessageInfo
              variant="note"
              points={[
                'Choose how long logs remain visible on the Audit Log page.',
                'Logs exceeding the visible limit are either archived or permanently deleted to free up storage space.',
                'Audit Logs (including Timeline and Interaction data) count towards your Data Storage.',
                'Archived logs use significantly less storage than active (visible) logs.',
              ]}
            />

            {/* ── Last updated ─────────────────────────────────────────────── */}
            <span style={{
              fontFamily: 'var(--ds-font-family-base)',
              fontSize: 'var(--ds-font-size-base)',
              color: 'var(--ds-text-label)',
            }}>
              Last updated : Aug 10, 2026 12:32 pm by Chinnaiya Raja
            </span>

          </div>
        </Modal>

        <Modal
          type="alert"
          variant="warning"
          isOpen={confirmOpen}
          title="Save audit log duration changes"
          description={
            <>
              <p>Logs beyond the retention period will be permanently deleted. Exempted modules will be retained for 6 months only, then permanently deleted.</p>
              <div style={{ marginTop: 20 }}>
                <MessageInfo variant="note" message="Deleted logs cannot be recovered." />
              </div>
            </>
          }
          confirmLabel="Proceed"
          cancelLabel="Cancel"
          onClose={() => setConfirmOpen(false)}
          onCancel={() => setConfirmOpen(false)}
          onSave={() => {
            setConfirmOpen(false);
            setOpen(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 4000);
          }}
          width={640}
        />

        {saved && (
          <>
            <style>{`
              @keyframes msgbox-slide-down {
                from { opacity: 0; top: 80px; }
                to   { opacity: 1; top: 100px; }
              }
            `}</style>
            <div style={{
              position: 'fixed', left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2000, minWidth: 320,
              animation: 'msgbox-slide-down 260ms cubic-bezier(0.2, 0, 0.2, 1) both',
            }}>
              <MessageBox
                variant="success"
                message="Log retention settings saved successfully."
                onClose={() => setSaved(false)}
              />
            </div>
          </>
        )}
      </>
    );
  },
};
