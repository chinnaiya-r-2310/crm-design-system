import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CXyh61la.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{P as i,pt as a}from"./Icons-uCgmoAdD.js";import{n as o,t as s}from"./Checkbox-CGtFzEZ5.js";import{n as c,t as l}from"./Tooltip-I1PQ1ies.js";import{n as u,t as d}from"./MessageBox-1-ztvnSa.js";import{n as f,t as p}from"./MessageInfo-BQUrdfOl.js";import{n as m,t as h}from"./Modal-Dy_ViDXM.js";import{n as g,t as _}from"./Tags-B4PHYIN-.js";function v(e,t){let n=new Date(e);return n.setFullYear(n.getFullYear()-t),n}function y(e,t){let n=new Date(e);return n.setDate(n.getDate()-t),n}function b(e){return`${E[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}function x({min:e=0,max:t=10,maxA:n=t,valueA:r,valueB:i,onChangeA:a,onChangeB:o,showThumbB:s=!0}){let c=(0,C.useRef)(null),l=Array.from({length:t-e+1},(t,n)=>n+e),u=l.length,d=(r-e)/(t-e)*100,f=(i-e)/(t-e)*100,p=(0,C.useCallback)(n=>{let r=c.current.getBoundingClientRect(),i=Math.min(1,Math.max(0,(n-r.left)/r.width));return Math.round(e+i*(t-e))},[e,t]),m=e=>t=>{t.preventDefault();let s=t=>{let s=p(t.clientX);e===`a`?a(Math.min(Math.max(s,1),Math.min(i-1,n))):o(Math.max(s,r+1,2))},c=()=>{document.removeEventListener(`mousemove`,s),document.removeEventListener(`mouseup`,c)};document.addEventListener(`mousemove`,s),document.addEventListener(`mouseup`,c)},h={position:`absolute`,width:19,height:19,top:`50%`,transform:`translate(-50%, -50%)`,borderRadius:`50%`,background:`#fff`,border:`2px solid #9C9CA6`,boxShadow:`0 3px 12px rgba(49,57,73,0.15)`,boxSizing:`border-box`,cursor:`grab`,outline:`none`,transition:`left 80ms ease, border-color 120ms, box-shadow 120ms`,zIndex:1};return(0,w.jsxs)(`div`,{style:{userSelect:`none`,width:`100%`,fontFamily:`var(--ds-font-family-base)`},children:[(0,w.jsx)(`style`,{children:`
        .ds-thumb-dot:hover {
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
        .ds-thumb-dot:focus-visible {
          outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
          outline-offset: 2px;
          border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2) !important;
        }
      `}),(0,w.jsxs)(`div`,{ref:c,style:{position:`relative`,height:16},children:[(0,w.jsx)(`div`,{style:{position:`absolute`,left:0,right:0,top:`50%`,transform:`translateY(-50%)`,height:9,borderRadius:4.5,background:`var(--ds-components-slider-slider-bg-grey, #E5EAF2)`,pointerEvents:`none`}}),(0,w.jsx)(`div`,{style:{position:`absolute`,left:0,width:`${d}%`,top:`50%`,transform:`translateY(-50%)`,height:9,borderRadius:4.5,background:`var(--ds-components-slider-active-bg-fill-color, #5464F2)`,pointerEvents:`none`}}),s&&f>d&&(0,w.jsx)(`div`,{style:{position:`absolute`,left:`${d}%`,width:`${f-d}%`,top:`50%`,transform:`translateY(-50%)`,height:9,borderRadius:4.5,background:`var(--ds-icon-primary-orange, #F18E0A)`,pointerEvents:`none`}}),(0,w.jsx)(`div`,{className:`ds-thumb-dot`,onMouseDown:m(`a`),style:{...h,left:`${d}%`},role:`slider`,tabIndex:0,"aria-valuemin":e,"aria-valuemax":i,"aria-valuenow":r,"aria-label":`Visible log history end`}),s&&(0,w.jsx)(`div`,{className:`ds-thumb-dot`,onMouseDown:m(`b`),style:{...h,left:`${f}%`,zIndex:2},role:`slider`,tabIndex:0,"aria-valuemin":r,"aria-valuemax":t,"aria-valuenow":i,"aria-label":`Archive log end`})]}),(0,w.jsx)(`div`,{style:{position:`relative`,height:14,marginTop:6},children:l.map((e,t)=>(0,w.jsx)(`span`,{style:{position:`absolute`,left:`${u>1?t/(u-1)*100:50}%`,transform:`translateX(-50%)`,fontSize:11,color:`var(--ds-text-muted, #8B9BB8)`,lineHeight:1,whiteSpace:`nowrap`},children:e},e))})]})}function S({dotColor:e,showDot:t=!0,label:n,years:r,availableFrom:i,availableTo:a}){let o={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-label)`,lineHeight:`1.6`};return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:6},children:[t&&(0,w.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:e,flexShrink:0}}),(0,w.jsx)(`span`,{style:{...o,color:`var(--ds-text-base)`,fontWeight:`var(--ds-font-weight-semibold)`},children:n}),(0,w.jsxs)(`span`,{style:{...o,color:`var(--ds-text-base)`},children:[`: `,(0,w.jsxs)(`strong`,{style:{fontWeight:`var(--ds-font-weight-semibold)`},children:[r,` `,r===1?`year`:`years`]})]})]}),(0,w.jsxs)(`span`,{style:{...o,paddingLeft:t?14:0},children:[`Available Data:`,` `,(0,w.jsxs)(`span`,{style:{color:`var(--ds-text-base)`},children:[i,` - `,a]})]}),(0,w.jsxs)(`span`,{style:{...o,paddingLeft:t?14:0},children:[`Estimated Data Storage:`,` `,(0,w.jsx)(`span`,{style:{color:`var(--ds-text-base)`},children:`~ 0`})]})]})}var C,w,T,E,D,O;e((()=>{C=t(n(),1),m(),o(),f(),u(),g(),c(),a(),w=r(),T={title:`Design System/Patterns/Audit Log Duration`,parameters:{layout:`centered`,docs:{description:{component:`Modal pattern for managing audit log retention settings — set visible log history and archived log retention durations using a dual-range slider.`}}}},E=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],D={name:`Manage Log Retention Settings`,decorators:[e=>(0,w.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundImage:`url(/crm-design-system/images/audit-log-bg.png)`,backgroundSize:`cover`,backgroundPosition:`top left`,display:`flex`,alignItems:`flex-start`,justifyContent:`center`},children:(0,w.jsx)(e,{})})],render:()=>{let[e,t]=(0,C.useState)(!0),[n,r]=(0,C.useState)(!1),[a,o]=(0,C.useState)(!1),[c,u]=(0,C.useState)(3),[f,m]=(0,C.useState)(7),[g,T]=(0,C.useState)(!0),[E,D]=(0,C.useState)(!1),[O,k]=(0,C.useState)([]),[A,j]=(0,C.useState)([]),M=[{value:`leads`,label:`Leads`},{value:`contacts`,label:`Contacts`},{value:`accounts`,label:`Accounts`},{value:`deals`,label:`Deals`},{value:`campaigns`,label:`Campaigns`},{value:`tasks`,label:`Tasks`},{value:`meetings`,label:`Meetings`},{value:`calls`,label:`Calls`},{value:`reports`,label:`Reports`},{value:`quotes`,label:`Quotes`},{value:`products`,label:`Products`},{value:`invoices`,label:`Invoices`},{value:`purchase-orders`,label:`Purchase Orders`},{value:`sales-orders`,label:`Sales Orders`},{value:`price-books`,label:`Price Books`},{value:`cases`,label:`Cases`},{value:`solutions`,label:`Solutions`},{value:`documents`,label:`Documents`},{value:`vendors`,label:`Vendors`},{value:`activities`,label:`Activities`}],N=[{value:`line-items-deals`,label:`Line Items`,tagLabel:`Line Items (Deals)`,group:`Deals`},{value:`tax-details-deals`,label:`Tax Details`,tagLabel:`Tax Details (Deals)`,group:`Deals`},{value:`discount-deals`,label:`Discount Details`,tagLabel:`Discount Details (Deals)`,group:`Deals`},{value:`line-items-quotes`,label:`Line Items`,tagLabel:`Line Items (Quotes)`,group:`Quotes`},{value:`tax-details-quotes`,label:`Tax Details`,tagLabel:`Tax Details (Quotes)`,group:`Quotes`},{value:`shipping-quotes`,label:`Shipping Charges`,tagLabel:`Shipping Charges (Quotes)`,group:`Quotes`},{value:`line-items-invoices`,label:`Line Items`,tagLabel:`Line Items (Invoices)`,group:`Invoices`},{value:`tax-details-invoices`,label:`Tax Details`,tagLabel:`Tax Details (Invoices)`,group:`Invoices`},{value:`line-items-po`,label:`Line Items`,tagLabel:`Line Items (Purchase Orders)`,group:`Purchase Orders`},{value:`vendor-details-po`,label:`Vendor Details`,tagLabel:`Vendor Details (Purchase Orders)`,group:`Purchase Orders`}],P=f-c,F=v(new Date(`2026-08-18`),c),I=y(F,1),L=v(I,P);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h,{isOpen:e,title:`Manage Log Retention Settings`,description:`Choose how long the logs should stay visible and archived in the Audit Log.`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>r(!0),cancelLabel:`Cancel`,saveLabel:`Save`,width:640,children:(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20,paddingRight:20},children:[(0,w.jsx)(`div`,{style:{paddingTop:4},children:(0,w.jsx)(x,{min:0,max:10,maxA:3,valueA:c,valueB:f,onChangeA:u,onChangeB:m,showThumbB:g})}),(0,w.jsx)(s,{label:`Archive`,checked:g,onChange:e=>T(e.target.checked)}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,w.jsx)(S,{dotColor:`var(--ds-components-slider-active-bg-fill-color, #5464F2)`,showDot:!0,label:`Visible Log History`,years:c,availableFrom:b(F),availableTo:`Now`}),g&&P>0&&(0,w.jsx)(S,{dotColor:`var(--ds-icon-primary-orange, #F18E0A)`,label:`Archived Logs Retention`,years:P,availableFrom:b(L),availableTo:b(I)}),(()=>{let e=g&&P>0?L:F,t={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-base)`,lineHeight:`1.6`};return(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,flexWrap:`wrap`,gap:6},children:[(0,w.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:`var(--ds-text-muted, #8C9BAB)`,flexShrink:0}}),(0,w.jsx)(`span`,{style:{...t,fontWeight:`var(--ds-font-weight-semibold)`},children:`Cleanup Period`}),(0,w.jsxs)(`span`,{style:t,children:[`: `,(0,w.jsxs)(`strong`,{style:{fontWeight:`var(--ds-font-weight-semibold)`},children:[`Beyond `,b(e)]})]})]})})()]}),(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,w.jsx)(s,{label:`Select Modules to exempt from Standard Duration`,checked:E,onChange:e=>D(e.target.checked)}),(0,w.jsx)(l,{content:`Logs for selected modules will not follow the standard duration and will be retained for 6 months only.`,placement:`top`,variant:`white`,children:(0,w.jsx)(`span`,{style:{display:`inline-flex`,color:`var(--ds-text-label)`},children:(0,w.jsx)(i,{width:14,height:14})})})]}),E&&(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,w.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,flexShrink:0,width:140,paddingTop:7,textAlign:`right`},children:`Modules`}),(0,w.jsx)(_,{value:O,options:M,onChange:k,width:390})]}),(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,w.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,flexShrink:0,width:140,paddingTop:7,textAlign:`right`},children:`Subforms`}),(0,w.jsx)(_,{value:A,options:N,onChange:j,width:390})]})]})]}),(0,w.jsx)(p,{variant:`note`,points:[`Choose how long logs remain visible on the Audit Log page.`,`Logs exceeding the visible limit are either archived or permanently deleted to free up storage space.`,`Audit Logs (including Timeline and Interaction data) count towards your Data Storage.`,`Archived logs use significantly less storage than active (visible) logs.`]}),(0,w.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-label)`},children:`Last updated : Aug 10, 2026 12:32 pm by Chinnaiya Raja`})]})}),(0,w.jsx)(h,{type:`alert`,variant:`warning`,isOpen:n,title:`Save audit log duration changes`,description:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`p`,{children:`Logs beyond the retention period will be permanently deleted. Exempted modules will be retained for 6 months only, then permanently deleted.`}),(0,w.jsx)(`div`,{style:{marginTop:20},children:(0,w.jsx)(p,{variant:`note`,message:`Deleted logs cannot be recovered.`})})]}),confirmLabel:`Proceed`,cancelLabel:`Cancel`,onClose:()=>r(!1),onCancel:()=>r(!1),onSave:()=>{r(!1),t(!1),o(!0),setTimeout(()=>o(!1),4e3)},width:640}),a&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`style`,{children:`
              @keyframes msgbox-slide-down {
                from { opacity: 0; top: 80px; }
                to   { opacity: 1; top: 100px; }
              }
            `}),(0,w.jsx)(`div`,{style:{position:`fixed`,left:`50%`,transform:`translateX(-50%)`,zIndex:2e3,minWidth:320,animation:`msgbox-slide-down 260ms cubic-bezier(0.2, 0, 0.2, 1) both`},children:(0,w.jsx)(d,{variant:`success`,message:`Log retention settings saved successfully.`,onClose:()=>o(!1)})})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
                <Tooltip content="Logs for selected modules will not follow the standard duration and will be retained for 6 months only." placement="top" variant="white">
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
                  flexShrink: 0,
                  width: 140,
                  paddingTop: 7,
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
                  flexShrink: 0,
                  width: 140,
                  paddingTop: 7,
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
              <p>Logs beyond the retention period will be permanently deleted. Exempted modules will be retained for 6 months only, then permanently deleted.</p>
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
}`,...D.parameters?.docs?.source}}},O=[`ManageLogRetentionSettings`]}))();export{D as ManageLogRetentionSettings,O as __namedExportsOrder,T as default};