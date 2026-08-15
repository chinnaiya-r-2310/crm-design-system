import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-C5qsUVz8.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./MessageBox-Dm4qcIC6.js";import{n as o,t as s}from"./Modal-B2bRi9nG.js";import{n as c,t as l}from"./Select-DFxGTYCA.js";import{n as u,t as d}from"./Tags-Ddkl06QM.js";import{n as f,t as p}from"./FormSection-DB8ioMjr.js";var m=e((()=>{o()})),h=e((()=>{u()})),g=e((()=>{i()})),_=e((()=>{f()})),v=e((()=>{c()})),y,b,x,S,C,w,T,E,D;e((()=>{y=t(n(),1),m(),h(),g(),_(),v(),b=r(),x=[{value:`3m`,label:`3 Months`},{value:`6m`,label:`6 Months`},{value:`1y`,label:`1 Year`},{value:`2y`,label:`2 Years`},{value:`3y`,label:`3 Years`},{value:`5y`,label:`5 Years`},{value:`7y`,label:`7 Years`}],S=[{value:`archive`,label:`Archive`},{value:`delete`,label:`Delete`}],C=[{value:`leads`,label:`Leads`},{value:`contacts`,label:`Contacts`},{value:`accounts`,label:`Accounts`},{value:`deals`,label:`Deals`},{value:`activities`,label:`Activities`},{value:`cases`,label:`Cases`},{value:`solutions`,label:`Solutions`},{value:`products`,label:`Products`},{value:`forecasts`,label:`Forecasts`},{value:`reports`,label:`Reports`},{value:`campaigns`,label:`Campaigns`},{value:`quotes`,label:`Quotes`},{value:`sales-orders`,label:`Sales Orders`},{value:`purchase-orders`,label:`Purchase Orders`},{value:`invoices`,label:`Invoices`}],w=[{value:`contact-roles`,label:`Contact Roles`},{value:`product-details`,label:`Product Details`},{value:`invited-guests`,label:`Invited Guests`},{value:`expense-details`,label:`Expense Details`},{value:`participants`,label:`Participants`},{value:`stage-history`,label:`Stage History`}],T={title:`Patterns/Audit Log Duration`,parameters:{layout:`fullscreen`,docs:{description:{story:`Manage Audit Log Duration modal. Composed from Modal + FormSection + Select + Tags + MessageBox. Reference: https://auditlog-basic.onslate.in/`}}}},E={name:`Audit Log Duration`,parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(!1),[i,o]=(0,y.useState)(`1y`),[c,u]=(0,y.useState)(`archive`),[f,m]=(0,y.useState)(`1y`),[h,g]=(0,y.useState)([]),[_,v]=(0,y.useState)([]),T=h.length>0||_.length>0;return(0,b.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#F0F2F7`,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,b.jsx)(`button`,{type:`button`,onClick:()=>t(!0),style:{padding:`8px 20px`,background:`#5464F2`,color:`#fff`,border:`none`,borderRadius:`6px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,fontFamily:`inherit`},children:`Manage Audit Log Duration`}),(0,b.jsxs)(s,{isOpen:e,title:`Manage Audit Log Duration`,onClose:()=>t(!1),onSave:()=>r(!0),cancelLabel:`Cancel`,saveLabel:`Save`,footerNote:`Choose how long the logs should stay visible and archived in the Audit Log.`,width:600,children:[(0,b.jsx)(a,{variant:`info`,closable:!1,message:(0,b.jsxs)(`ul`,{style:{margin:0,paddingLeft:16,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(`li`,{children:`You can choose how long logs stay visible on the Audit Log page.`}),(0,b.jsx)(`li`,{children:`Remaining logs can be archived or deleted to free up space.`}),(0,b.jsx)(`li`,{children:`Audit Logs (including Timeline and Interaction data) count toward your Data Storage.`}),(0,b.jsx)(`li`,{children:`Archived logs use significantly less storage than visible logs.`})]})}),(0,b.jsxs)(p,{title:`Duration Settings`,children:[(0,b.jsx)(l,{label:`Visible Logs Duration`,value:i,options:x,layout:`horizontal`,width:`100%`}),(0,b.jsx)(l,{label:`After Visible Period`,value:c,options:S,layout:`horizontal`,width:`100%`}),c===`archive`&&(0,b.jsx)(l,{label:`Archive Duration`,value:f,options:x,layout:`horizontal`,width:`100%`})]}),(0,b.jsxs)(p,{title:`Modules Exempt from Standard Duration`,children:[(0,b.jsx)(`p`,{style:{margin:`0 0 12px`,fontSize:12,color:`var(--ds-text-secondary, #616E88)`,lineHeight:1.55},children:`Apply a restricted retention period — 6 months for visible logs and 6 months for archived logs — to selected modules and subforms.`}),(0,b.jsx)(d,{value:h,options:C,placeholder:`Select modules...`,onChange:g,width:`100%`}),(0,b.jsx)(`div`,{style:{marginTop:10},children:(0,b.jsx)(d,{value:_,options:w,placeholder:`Select subforms...`,onChange:v,width:`100%`})}),T&&(0,b.jsx)(`div`,{style:{marginTop:10},children:(0,b.jsx)(a,{variant:`warning`,closable:!1,message:`Selected logs are retained for 6 months only, after which they are deleted.`})})]})]}),(0,b.jsx)(s,{isOpen:n,title:`Save audit log duration changes?`,onClose:()=>r(!1),onSave:()=>{r(!1),t(!1)},cancelLabel:`Cancel`,saveLabel:`Okay, Proceed`,width:440,children:(0,b.jsx)(a,{variant:`warning`,closable:!1,message:(0,b.jsxs)(`ul`,{style:{margin:0,paddingLeft:16,display:`flex`,flexDirection:`column`,gap:4},children:[(0,b.jsx)(`li`,{children:`Logs beyond the retention period will be permanently deleted.`}),(0,b.jsx)(`li`,{children:`Exempted modules will be retained for 6 months only, then permanently deleted.`}),(0,b.jsx)(`li`,{children:`Deleted logs cannot be recovered.`})]})})})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Audit Log Duration',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [visibleDur, setVisibleDur] = useState('1y');
    const [afterVisible, setAfterVisible] = useState('archive');
    const [archiveDur, setArchiveDur] = useState('1y');
    const [modules, setModules] = useState<TagItem[]>([]);
    const [subforms, setSubforms] = useState<TagItem[]>([]);
    const hasExemptions = modules.length > 0 || subforms.length > 0;
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F0F2F7',
      fontFamily: 'var(--ds-font-family-base, sans-serif)'
    }}>
        <button type="button" onClick={() => setOpen(true)} style={{
        padding: '8px 20px',
        background: '#5464F2',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        fontFamily: 'inherit'
      }}>
          Manage Audit Log Duration
        </button>

        {/* ── Main modal ── */}
        <Modal isOpen={open} title="Manage Audit Log Duration" onClose={() => setOpen(false)} onSave={() => setConfirm(true)} cancelLabel="Cancel" saveLabel="Save" footerNote="Choose how long the logs should stay visible and archived in the Audit Log." width={600}>
          {/* Info panel */}
          <MessageBox variant="info" closable={false} message={<ul style={{
          margin: 0,
          paddingLeft: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
                <li>You can choose how long logs stay visible on the Audit Log page.</li>
                <li>Remaining logs can be archived or deleted to free up space.</li>
                <li>Audit Logs (including Timeline and Interaction data) count toward your Data Storage.</li>
                <li>Archived logs use significantly less storage than visible logs.</li>
              </ul>} />

          {/* Duration settings */}
          <FormSection title="Duration Settings">
            <Select label="Visible Logs Duration" value={visibleDur} options={DURATION_OPTIONS} layout="horizontal" width="100%" />
            <Select label="After Visible Period" value={afterVisible} options={AFTER_OPTIONS} layout="horizontal" width="100%" />
            {afterVisible === 'archive' && <Select label="Archive Duration" value={archiveDur} options={DURATION_OPTIONS} layout="horizontal" width="100%" />}
          </FormSection>

          {/* Modules exempt */}
          <FormSection title="Modules Exempt from Standard Duration">
            <p style={{
            margin: '0 0 12px',
            fontSize: 12,
            color: 'var(--ds-text-secondary, #616E88)',
            lineHeight: 1.55
          }}>
              Apply a restricted retention period — 6 months for visible logs and 6 months
              for archived logs — to selected modules and subforms.
            </p>
            <Tags value={modules} options={MODULE_OPTIONS} placeholder="Select modules..." onChange={setModules} width="100%" />
            <div style={{
            marginTop: 10
          }}>
              <Tags value={subforms} options={SUBFORM_OPTIONS} placeholder="Select subforms..." onChange={setSubforms} width="100%" />
            </div>
            {hasExemptions && <div style={{
            marginTop: 10
          }}>
                <MessageBox variant="warning" closable={false} message="Selected logs are retained for 6 months only, after which they are deleted." />
              </div>}
          </FormSection>
        </Modal>

        {/* ── Confirmation modal ── */}
        <Modal isOpen={confirm} title="Save audit log duration changes?" onClose={() => setConfirm(false)} onSave={() => {
        setConfirm(false);
        setOpen(false);
      }} cancelLabel="Cancel" saveLabel="Okay, Proceed" width={440}>
          <MessageBox variant="warning" closable={false} message={<ul style={{
          margin: 0,
          paddingLeft: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
                <li>Logs beyond the retention period will be permanently deleted.</li>
                <li>Exempted modules will be retained for 6 months only, then permanently deleted.</li>
                <li>Deleted logs cannot be recovered.</li>
              </ul>} />
        </Modal>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};