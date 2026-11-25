import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-C2Qq_MrP.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{M as i,Yt as a}from"./Icons-jAEkxykW.js";import{n as o,t as s}from"./Tooltip-CtqMViFE.js";import{n as c,t as l}from"./Checkbox-DZLglNVi.js";import{n as u,t as d}from"./MessageBox-CaPkf1Bk.js";import{n as f,t as p}from"./MessageInfo-BQUrdfOl.js";import{n as m,t as h}from"./Modal-CgZ1aj-9.js";import{n as g,t as _}from"./Tags-CWpW5RTk.js";import{n as v,t as y}from"./DualRangeSlider-CjaRClsO.js";function b(e,t){let n=new Date(e);return n.setFullYear(n.getFullYear()-t),n}function x(e,t){let n=new Date(e);return n.setDate(n.getDate()-t),n}function S(e){return`${D[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}function C({dotColor:e,showDot:t=!0,label:n,years:r,availableFrom:i,availableTo:a}){let o={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-label)`,lineHeight:`1.6`};return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:6},children:[t&&(0,T.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:e,flexShrink:0}}),(0,T.jsx)(`span`,{style:{...o,color:`var(--ds-text-base)`,fontWeight:`var(--ds-font-weight-semibold)`},children:n}),(0,T.jsxs)(`span`,{style:{...o,color:`var(--ds-text-base)`},children:[`: `,(0,T.jsxs)(`strong`,{style:{fontWeight:`var(--ds-font-weight-semibold)`},children:[r,` `,r===1?`year`:`years`]})]})]}),(0,T.jsxs)(`span`,{style:{...o,paddingLeft:t?14:0},children:[`Available Data:`,` `,(0,T.jsxs)(`span`,{style:{color:`var(--ds-text-base)`},children:[i,` - `,a]})]}),(0,T.jsxs)(`span`,{style:{...o,paddingLeft:t?14:0},children:[`Estimated Data Storage:`,` `,(0,T.jsx)(`span`,{style:{color:`var(--ds-text-base)`},children:`~ 0`})]})]})}var w,T,E,D,O,k;e((()=>{w=t(n(),1),m(),c(),f(),u(),g(),o(),a(),v(),T=r(),E={title:`Work Items/Audit Log Duration`,parameters:{layout:`centered`,docs:{description:{component:`Modal pattern for managing audit log retention settings — set visible log history and archived log retention durations using a dual-range slider.`}}}},D=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],O={name:`Manage Log Retention Settings`,decorators:[e=>(0,T.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundImage:`url(/crm-design-system/images/audit-log-bg.png)`,backgroundSize:`cover`,backgroundPosition:`top left`,display:`flex`,alignItems:`flex-start`,justifyContent:`center`},children:(0,T.jsx)(e,{})})],render:()=>{let[e,t]=(0,w.useState)(!0),[n,r]=(0,w.useState)(!1),[a,o]=(0,w.useState)(!1),[c,u]=(0,w.useState)(3),[f,m]=(0,w.useState)(7),[g,v]=(0,w.useState)(!0),[E,D]=(0,w.useState)(!1),[O,k]=(0,w.useState)([]),[A,j]=(0,w.useState)([]),M=[{value:`leads`,label:`Leads`},{value:`contacts`,label:`Contacts`},{value:`accounts`,label:`Accounts`},{value:`deals`,label:`Deals`},{value:`campaigns`,label:`Campaigns`},{value:`tasks`,label:`Tasks`},{value:`meetings`,label:`Meetings`},{value:`calls`,label:`Calls`},{value:`reports`,label:`Reports`},{value:`quotes`,label:`Quotes`},{value:`products`,label:`Products`},{value:`invoices`,label:`Invoices`},{value:`purchase-orders`,label:`Purchase Orders`},{value:`sales-orders`,label:`Sales Orders`},{value:`price-books`,label:`Price Books`},{value:`cases`,label:`Cases`},{value:`solutions`,label:`Solutions`},{value:`documents`,label:`Documents`},{value:`vendors`,label:`Vendors`},{value:`activities`,label:`Activities`}],N=[{value:`line-items-deals`,label:`Line Items`,tagLabel:`Line Items (Deals)`,group:`Deals`},{value:`tax-details-deals`,label:`Tax Details`,tagLabel:`Tax Details (Deals)`,group:`Deals`},{value:`discount-deals`,label:`Discount Details`,tagLabel:`Discount Details (Deals)`,group:`Deals`},{value:`line-items-quotes`,label:`Line Items`,tagLabel:`Line Items (Quotes)`,group:`Quotes`},{value:`tax-details-quotes`,label:`Tax Details`,tagLabel:`Tax Details (Quotes)`,group:`Quotes`},{value:`shipping-quotes`,label:`Shipping Charges`,tagLabel:`Shipping Charges (Quotes)`,group:`Quotes`},{value:`line-items-invoices`,label:`Line Items`,tagLabel:`Line Items (Invoices)`,group:`Invoices`},{value:`tax-details-invoices`,label:`Tax Details`,tagLabel:`Tax Details (Invoices)`,group:`Invoices`},{value:`line-items-po`,label:`Line Items`,tagLabel:`Line Items (Purchase Orders)`,group:`Purchase Orders`},{value:`vendor-details-po`,label:`Vendor Details`,tagLabel:`Vendor Details (Purchase Orders)`,group:`Purchase Orders`}],P=f-c,F=b(new Date(`2026-08-18`),c),I=x(F,1),L=b(I,P);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{isOpen:e,title:`Manage Log Retention Settings`,description:`Choose how long the logs should stay visible and archived in the Audit Log.`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>r(!0),cancelLabel:`Cancel`,saveLabel:`Save`,width:640,children:(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20,paddingRight:20},children:[(0,T.jsx)(`div`,{style:{paddingTop:4},children:(0,T.jsx)(y,{min:0,max:10,maxA:3,valueA:c,valueB:f,onChangeA:u,onChangeB:m,showThumbB:g})}),(0,T.jsx)(l,{label:`Archive`,checked:g,onChange:e=>v(e.target.checked)}),(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,T.jsx)(C,{dotColor:`var(--ds-components-slider-active-bg-fill-color, #5464F2)`,showDot:!0,label:`Visible Log History`,years:c,availableFrom:S(F),availableTo:`Now`}),g&&P>0&&(0,T.jsx)(C,{dotColor:`var(--ds-icon-primary-orange, #F18E0A)`,label:`Archived Logs Retention`,years:P,availableFrom:S(L),availableTo:S(I)}),(()=>{let e=g&&P>0?L:F,t={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-base)`,lineHeight:`1.6`};return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:6},children:[(0,T.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:`var(--ds-text-muted, #8C9BAB)`,flexShrink:0}}),(0,T.jsx)(`span`,{style:{...t,fontWeight:`var(--ds-font-weight-semibold)`},children:`Cleanup Period`}),(0,T.jsxs)(`span`,{style:t,children:[`: `,(0,T.jsxs)(`strong`,{style:{fontWeight:`var(--ds-font-weight-semibold)`},children:[`Beyond `,S(e)]})]})]})})()]}),(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,T.jsx)(l,{label:`Select Modules to exempt from Standard Duration`,checked:E,onChange:e=>D(e.target.checked)}),(0,T.jsx)(s,{content:`Selected modules logs will not be populated in the audit log generation.`,placement:`top`,variant:`white`,children:(0,T.jsx)(`span`,{style:{display:`inline-flex`,color:`var(--ds-text-label)`},children:(0,T.jsx)(i,{width:14,height:14})})})]}),E&&(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,T.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,lineHeight:`var(--ds-line-height-base)`,flexShrink:0,width:140,paddingTop:8,textAlign:`right`},children:`Modules`}),(0,T.jsx)(_,{value:O,options:M,onChange:k,width:390})]}),(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,T.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,lineHeight:`var(--ds-line-height-base)`,flexShrink:0,width:140,paddingTop:8,textAlign:`right`},children:`Subforms`}),(0,T.jsx)(_,{value:A,options:N,onChange:j,width:390})]})]})]}),(0,T.jsx)(p,{variant:`note`,points:[`Choose how long logs remain visible on the Audit Log page.`,`Logs exceeding the visible limit are either archived or permanently deleted to free up storage space.`,`Audit Logs (including Timeline and Interaction data) count towards your Data Storage.`,`Archived logs use significantly less storage than active (visible) logs.`]}),(0,T.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-label)`},children:`Last updated : Aug 10, 2026 12:32 pm by Chinnaiya Raja`})]})}),(0,T.jsx)(h,{type:`alert`,variant:`warning`,isOpen:n,title:`Save audit log duration changes`,description:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`p`,{children:`Existing logs follow the configured retention period then moving to archive if enabled or being deleted if disabled. Exempted modules stop generating new log, removing them resumes logging.`}),(0,T.jsx)(`div`,{style:{marginTop:20},children:(0,T.jsx)(p,{variant:`note`,message:`Deleted logs cannot be recovered.`})})]}),confirmLabel:`Proceed`,cancelLabel:`Cancel`,onClose:()=>r(!1),onCancel:()=>r(!1),onSave:()=>{r(!1),t(!1),o(!0),setTimeout(()=>o(!1),4e3)},width:640}),a&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`style`,{children:`
              @keyframes msgbox-slide-down {
                from { opacity: 0; top: 80px; }
                to   { opacity: 1; top: 100px; }
              }
            `}),(0,T.jsx)(`div`,{style:{position:`fixed`,left:`50%`,transform:`translateX(-50%)`,zIndex:2e3,minWidth:320,animation:`msgbox-slide-down 260ms cubic-bezier(0.2, 0, 0.2, 1) both`},children:(0,T.jsx)(d,{variant:`success`,message:`Log retention settings saved successfully.`,onClose:()=>o(!1)})})]})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Manage Log Retention Settings',
  decorators: [Story => <div style={{
    position: 'fixed',
    inset: 0,
    backgroundImage: 'url(/crm-design-system/images/audit-log-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }}>
        <Story />
      </div>],
  render: () => {
    const [open, setOpen] = useState(true);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [saved, setSaved] = useState(false);
    const [visibleYears, setVisibleYears] = useState(3);
    const [totalYears, setTotalYears] = useState(7);
    const [archiveEnabled, setArchiveEnabled] = useState(true);
    const [exemptEnabled, setExemptEnabled] = useState(false);
    const [modulesTags, setModulesTags] = useState([]);
    const [subformsTags, setSubformsTags] = useState([]);
    const modulesOptions = [{
      value: 'leads',
      label: 'Leads'
    }, {
      value: 'contacts',
      label: 'Contacts'
    }, {
      value: 'accounts',
      label: 'Accounts'
    }, {
      value: 'deals',
      label: 'Deals'
    }, {
      value: 'campaigns',
      label: 'Campaigns'
    }, {
      value: 'tasks',
      label: 'Tasks'
    }, {
      value: 'meetings',
      label: 'Meetings'
    }, {
      value: 'calls',
      label: 'Calls'
    }, {
      value: 'reports',
      label: 'Reports'
    }, {
      value: 'quotes',
      label: 'Quotes'
    }, {
      value: 'products',
      label: 'Products'
    }, {
      value: 'invoices',
      label: 'Invoices'
    }, {
      value: 'purchase-orders',
      label: 'Purchase Orders'
    }, {
      value: 'sales-orders',
      label: 'Sales Orders'
    }, {
      value: 'price-books',
      label: 'Price Books'
    }, {
      value: 'cases',
      label: 'Cases'
    }, {
      value: 'solutions',
      label: 'Solutions'
    }, {
      value: 'documents',
      label: 'Documents'
    }, {
      value: 'vendors',
      label: 'Vendors'
    }, {
      value: 'activities',
      label: 'Activities'
    }];
    const subformsOptions = [{
      value: 'line-items-deals',
      label: 'Line Items',
      tagLabel: 'Line Items (Deals)',
      group: 'Deals'
    }, {
      value: 'tax-details-deals',
      label: 'Tax Details',
      tagLabel: 'Tax Details (Deals)',
      group: 'Deals'
    }, {
      value: 'discount-deals',
      label: 'Discount Details',
      tagLabel: 'Discount Details (Deals)',
      group: 'Deals'
    }, {
      value: 'line-items-quotes',
      label: 'Line Items',
      tagLabel: 'Line Items (Quotes)',
      group: 'Quotes'
    }, {
      value: 'tax-details-quotes',
      label: 'Tax Details',
      tagLabel: 'Tax Details (Quotes)',
      group: 'Quotes'
    }, {
      value: 'shipping-quotes',
      label: 'Shipping Charges',
      tagLabel: 'Shipping Charges (Quotes)',
      group: 'Quotes'
    }, {
      value: 'line-items-invoices',
      label: 'Line Items',
      tagLabel: 'Line Items (Invoices)',
      group: 'Invoices'
    }, {
      value: 'tax-details-invoices',
      label: 'Tax Details',
      tagLabel: 'Tax Details (Invoices)',
      group: 'Invoices'
    }, {
      value: 'line-items-po',
      label: 'Line Items',
      tagLabel: 'Line Items (Purchase Orders)',
      group: 'Purchase Orders'
    }, {
      value: 'vendor-details-po',
      label: 'Vendor Details',
      tagLabel: 'Vendor Details (Purchase Orders)',
      group: 'Purchase Orders'
    }];
    const archiveYears = totalYears - visibleYears;
    const today = new Date('2026-08-18');
    const visibleStart = subtractYears(today, visibleYears);
    const archiveEnd = subtractDays(visibleStart, 1);
    const archiveStart = subtractYears(archiveEnd, archiveYears);
    return <>
        <Modal isOpen={open} title="Manage Log Retention Settings" description="Choose how long the logs should stay visible and archived in the Audit Log." onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setConfirmOpen(true)} cancelLabel="Cancel" saveLabel="Save" width={640}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          paddingRight: 20
        }}>

            {/* ── Dual range slider ───────────────────────────────────────── */}
            <div style={{
            paddingTop: 4
          }}>
              <DualRangeSlider min={0} max={10} maxA={3} valueA={visibleYears} valueB={totalYears} onChangeA={setVisibleYears} onChangeB={setTotalYears} showThumbB={archiveEnabled} />
            </div>

            {/* ── Archive checkbox ─────────────────────────────────────────── */}
            <Checkbox label="Archive" checked={archiveEnabled} onChange={e => setArchiveEnabled(e.target.checked)} />

            {/* ── Retention summary rows ───────────────────────────────────── */}
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
              <RetentionRow dotColor="var(--ds-components-slider-active-bg-fill-color, #5464F2)" showDot={true} label="Visible Log History" years={visibleYears} availableFrom={fmtDate(visibleStart)} availableTo="Now" />

              {archiveEnabled && archiveYears > 0 && <RetentionRow dotColor="var(--ds-icon-primary-orange, #F18E0A)" label="Archived Logs Retention" years={archiveYears} availableFrom={fmtDate(archiveStart)} availableTo={fmtDate(archiveEnd)} />}

              {/* Cleanup Period */}
              {(() => {
              const cleanupDate = archiveEnabled && archiveYears > 0 ? archiveStart : visibleStart;
              const rowText: React.CSSProperties = {
                fontFamily: 'var(--ds-font-family-base)',
                fontSize: 'var(--ds-font-size-base)',
                color: 'var(--ds-text-base)',
                lineHeight: '1.6'
              };
              return <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 6
              }}>
                    <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--ds-text-muted, #8C9BAB)',
                  flexShrink: 0
                }} />
                    <span style={{
                  ...rowText,
                  fontWeight: 'var(--ds-font-weight-semibold)' as any
                }}>
                      Cleanup Period
                    </span>
                    <span style={rowText}>
                      : <strong style={{
                    fontWeight: 'var(--ds-font-weight-semibold)' as any
                  }}>
                        Beyond {fmtDate(cleanupDate)}
                      </strong>
                    </span>
                  </div>;
            })()}
            </div>

            {/* ── Select Modules to exempt from Standard Duration ─────────── */}
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
                <Checkbox label="Select Modules to exempt from Standard Duration" checked={exemptEnabled} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExemptEnabled(e.target.checked)} />
                <Tooltip content="Selected modules logs will not be populated in the audit log generation." placement="top" variant="white">
                  <span style={{
                  display: 'inline-flex',
                  color: 'var(--ds-text-label)'
                }}>
                    <InfoIcon width={14} height={14} />
                  </span>
                </Tooltip>
              </div>

              {exemptEnabled && <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }}>
                  {/* Modules */}
                  <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12
              }}>
                    <span style={{
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize: 'var(--ds-font-size-base)',
                  fontWeight: 'var(--ds-font-weight-regular)' as any,
                  color: 'var(--ds-text-label)',
                  lineHeight: 'var(--ds-line-height-base)',
                  flexShrink: 0,
                  width: 140,
                  paddingTop: 8,
                  textAlign: 'right'
                }}>
                      Modules
                    </span>
                    <Tags value={modulesTags} options={modulesOptions} onChange={setModulesTags} width={390} />
                  </div>

                  {/* Subforms */}
                  <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12
              }}>
                    <span style={{
                  fontFamily: 'var(--ds-font-family-base)',
                  fontSize: 'var(--ds-font-size-base)',
                  fontWeight: 'var(--ds-font-weight-regular)' as any,
                  color: 'var(--ds-text-label)',
                  lineHeight: 'var(--ds-line-height-base)',
                  flexShrink: 0,
                  width: 140,
                  paddingTop: 8,
                  textAlign: 'right'
                }}>
                      Subforms
                    </span>
                    <Tags value={subformsTags} options={subformsOptions} onChange={setSubformsTags} width={390} />
                  </div>
                </div>}
            </div>

            {/* ── Notes callout ────────────────────────────────────────────── */}
            <MessageInfo variant="note" points={['Choose how long logs remain visible on the Audit Log page.', 'Logs exceeding the visible limit are either archived or permanently deleted to free up storage space.', 'Audit Logs (including Timeline and Interaction data) count towards your Data Storage.', 'Archived logs use significantly less storage than active (visible) logs.']} />

            {/* ── Last updated ─────────────────────────────────────────────── */}
            <span style={{
            fontFamily: 'var(--ds-font-family-base)',
            fontSize: 'var(--ds-font-size-base)',
            color: 'var(--ds-text-label)'
          }}>
              Last updated : Aug 10, 2026 12:32 pm by Chinnaiya Raja
            </span>

          </div>
        </Modal>

        <Modal type="alert" variant="warning" isOpen={confirmOpen} title="Save audit log duration changes" description={<>
              <p>Existing logs follow the configured retention period then moving to archive if enabled or being deleted if disabled. Exempted modules stop generating new log, removing them resumes logging.</p>
              <div style={{
          marginTop: 20
        }}>
                <MessageInfo variant="note" message="Deleted logs cannot be recovered." />
              </div>
            </>} confirmLabel="Proceed" cancelLabel="Cancel" onClose={() => setConfirmOpen(false)} onCancel={() => setConfirmOpen(false)} onSave={() => {
        setConfirmOpen(false);
        setOpen(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 4000);
      }} width={640} />

        {saved && <>
            <style>{\`
              @keyframes msgbox-slide-down {
                from { opacity: 0; top: 80px; }
                to   { opacity: 1; top: 100px; }
              }
            \`}</style>
            <div style={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2000,
          minWidth: 320,
          animation: 'msgbox-slide-down 260ms cubic-bezier(0.2, 0, 0.2, 1) both'
        }}>
              <MessageBox variant="success" message="Log retention settings saved successfully." onClose={() => setSaved(false)} />
            </div>
          </>}
      </>;
  }
}`,...O.parameters?.docs?.source}}},k=[`ManageLogRetentionSettings`]}))();export{O as ManageLogRetentionSettings,k as __namedExportsOrder,E as default};