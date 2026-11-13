import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DAYtFXoS.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Dropdown-CM_8kEcQ.js";import{n as o,t as s}from"./MergeField-Bedgn5OF.js";var c=e((()=>{i()})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{l=t(n(),1),c(),o(),u=r(),{expect:d,within:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],g=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),_=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),v=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),y=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),b=[{value:`NoteTitle`,label:`Note Title`},{value:`NoteContent`,label:`Note Content`},{value:`NoteCreatedBy`,label:`Created By`},{value:`NoteCreatedTime`,label:`Created Time`},{value:`NoteModifiedTime`,label:`Modified Time`}].map(e=>({...e,module:`Notes`})),x=[{value:`VendorName`,label:`Vendor Name`},{value:`VendorEmail`,label:`Email`},{value:`VendorPhone`,label:`Phone`},{value:`VendorWebsite`,label:`Website`},{value:`VendorCategory`,label:`Category`}].map(e=>({...e,module:`Vendors`})),S=[{value:`LineItemProduct`,label:`Product Name`},{value:`LineItemQuantity`,label:`Quantity`},{value:`LineItemUnitPrice`,label:`Unit Price`},{value:`LineItemDiscount`,label:`Discount`},{value:`LineItemTotal`,label:`Total`}].map(e=>({...e,module:`Product Line Items`})),C=[{value:`QuotedItemProduct`,label:`Product Name`},{value:`QuotedItemQuantity`,label:`Quantity`},{value:`QuotedItemAmount`,label:`Amount`}].map(e=>({...e,module:`Quoted Items`})),w=[...g,..._,...v,...y,...b,...x,...S,...C],T=[{module:`Deals`,items:[{value:`Deals`,label:`Deals`,source:`Deals`},{value:`Lookup1Contacts`,label:`Lookup 1 (Contacts)`,source:`Contacts`},{value:`AccountNameAccounts`,label:`Account Name (Accounts)`,source:`Accounts`},{value:`DealProductLineItems`,label:`Product Line Items (Subform)`,source:`Product Line Items`},{value:`DealQuotedItems`,label:`Quoted Items (Subform)`,source:`Quoted Items`}]},{module:`Related Modules`,items:[{value:`Notes`,label:`Notes`,source:`Notes`},{value:`PrimaryAccountName`,label:`Primary Account Name (Accounts)`,source:`Accounts`},{value:`SecondaryAccountName`,label:`Secondary Account Name (Accounts)`,source:`Accounts`},{value:`VendorName`,label:`Vendor Name (Vendors)`,source:`Vendors`}]}],E={title:`Design System/Components/MergeField`,component:s,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}},filter:{name:`Filter`,control:`boolean`,description:`Show the module filter. When false, search and select fields across all modules.`,table:{category:`Behavior`,defaultValue:{summary:`true`}}}}},D=[`Welcome to #Company, #FirstName!`,`Your #DealName - Action Required by #DealClosingDate`,`Account Update: #AccountName - #AccountOwner`,`Follow-up: #FirstName #LastName from #LeadSource`],O=[`Generate a personalized email for #FirstName from #Company.

Context: Lead source is #LeadSource.

Tone: Professional and friendly.

Call to action: Schedule a demo call.`,`Create an AI-generated summary for #DealName.

Deal details:
- Stage: #DealStage
- Amount: #DealAmount
- Owner: #DealOwner

Highlight key risks and next steps.`,`Draft a follow-up message for #ContactFirstName.

Account: #AccountName (#AccountOwner)

Focus on recent activity and upcoming renewal. Keep it concise and actionable.`],k=e=>e[Math.floor(Math.random()*e.length)],A=()=>({single:k(D),multi:k(O)}),j=()=>(0,u.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,u.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,u.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),M={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,l.useState)({single:``,multi:``}),[n,r]=(0,l.useState)(0),[i,o]=(0,l.useState)(`edit`);return(0,u.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,u.jsxs)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:[(0,u.jsx)(`button`,{type:`button`,onClick:()=>{t({single:``,multi:``}),r(e=>e+1)},style:{background:`none`,border:`none`,padding:0,color:`var(--ds-text-label, #616E88)`,textDecoration:`underline`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,cursor:`pointer`},children:`Clear`}),(0,u.jsx)(a,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:i,onChange:o,triggerAriaLabel:`Field mode`}),(0,u.jsx)(`button`,{type:`button`,onClick:()=>{t(A()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,u.jsx)(j,{})})]}),(0,u.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,u.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,u.jsx)(s,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:w,moduleEntries:T,readOnly:i===`readonly`,defaultValue:e.single},`single-${n}`),(0,u.jsx)(s,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:w,moduleEntries:T,readOnly:i===`readonly`,defaultValue:e.multi},`multi-${n}`)]})]})}},N=({title:e,children:t,controls:n})=>(0,u.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,paddingTop:`18vh`,overflow:`hidden`},children:[(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,u.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),n&&(0,u.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:n}),(0,u.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:e}),(0,u.jsx)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:t})]}),P={single:D[0],multi:O[0]},F={name:`Read only`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,l.useState)(`readonly`);return(0,u.jsxs)(N,{title:`Merge Field - Read Only`,controls:(0,u.jsx)(a,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:e,onChange:t,triggerAriaLabel:`Field mode`}),children:[(0,u.jsx)(s,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:w,moduleEntries:T,defaultValue:P.single,readOnly:e===`readonly`}),(0,u.jsx)(s,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:w,moduleEntries:T,defaultValue:P.multi,readOnly:e===`readonly`})]})}},I={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:h},play:async({canvasElement:e})=>{let t=f(e).getByRole(`textbox`);await p.click(t),await p.type(t,`#recordname`,{skipClick:!0}),await m(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await p.keyboard(`{Enter}`),await p.type(t,` added to #queu`,{skipClick:!0})}},L={name:`Multiline / Adding tag (completed)`,render:()=>(0,u.jsx)(s,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:h})},R={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:w,moduleEntries:T}},z={args:{layout:`vertical`,width:390,filter:!1,mergeFields:w,moduleEntries:T},play:async({canvasElement:e})=>{let t=f(e).getByRole(`textbox`);await p.click(t),await p.type(t,`#`,{skipClick:!0});let n=f(e.ownerDocument.body);await d(n.queryByRole(`button`,{name:`Leads`,exact:!0})).not.toBeInTheDocument(),await d(n.getAllByRole(`option`,{name:`First Name`,exact:!0})[0]).toBeVisible(),await d(n.getByRole(`option`,{name:`Deal Name`,exact:!0})).toBeVisible(),await p.keyboard(`{Escape}`),await p.type(t,`#DealName`,{skipClick:!0}),await p.keyboard(`{Enter}`),await d(e.querySelector(`.mergefield-token`)).toHaveAttribute(`data-value`,`DealName`)}},B={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:w,moduleEntries:T}},V={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:w,moduleEntries:T},play:async({canvasElement:e})=>{let t=f(e).getByRole(`textbox`);await p.click(t),await p.type(t,`#`,{skipClick:!0});let n=f(e.ownerDocument.body);for(let[t,r]of[[`Primary Account Name (Accounts)`,`Account Owner`],[`Notes`,`Note Title`],[`Secondary Account Name (Accounts)`,`Account Owner`],[`Vendor Name (Vendors)`,`Email`]]){await p.click(n.getByRole(`button`,{name:/Deals|Notes|Primary Account Name|Secondary Account Name/}));let i=n.getByRole(`listbox`,{name:`Module`}),a=f(i),o=a.getByRole(`option`,{name:`Secondary Account Name (Accounts)`,exact:!0}),s=e.ownerDocument.createRange();s.selectNodeContents(o.lastChild),await d(s.getClientRects()).toHaveLength(1),await d(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth);let c=a.getByText(`Related Modules`,{exact:!0});await d(c).toBeVisible();let l=a.getByRole(`option`,{name:`Notes`,exact:!0}),u=a.getByRole(`option`,{name:`Primary Account Name (Accounts)`,exact:!0});await d(a.getAllByRole(`option`)[5]).toBe(l),await d(c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await d(l.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await d(a.queryByText(`Accounts`,{exact:!0})).not.toBeInTheDocument(),await d(a.queryByText(`Vendors`,{exact:!0})).not.toBeInTheDocument(),await p.click(a.getByRole(`option`,{name:t,exact:!0})),await d(n.getByRole(`button`,{name:t,exact:!0})).toBeVisible(),await d(n.getByRole(`option`,{name:r,exact:!0})).toBeVisible()}}},H={name:`All States`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,u.jsx)(s,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:w,moduleEntries:T}),(0,u.jsx)(s,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:w,moduleEntries:T}),(0,u.jsx)(s,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:w,moduleEntries:T}),(0,u.jsx)(s,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:w,moduleEntries:T,disabled:!0})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    // Starts empty; the refresh button fills both fields with generated prompts.
    const [prompts, setPrompts] = useState({
      single: '',
      multi: ''
    });
    const [seed, setSeed] = useState(0);
    const [mode, setMode] = useState('edit');
    const clearAll = () => {
      setPrompts({
        single: '',
        multi: ''
      });
      setSeed(s => s + 1); // remounts both fields empty
    };
    const regenerate = () => {
      setPrompts(generatePrompts());
      setSeed(s => s + 1); // remounts both fields so they pick up the new defaults
    };
    return <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'var(--ds-bg-common-card, #fff)',
      fontFamily: 'var(--ds-font-family-base)',
      boxSizing: 'border-box',
      padding: '48px 24px',
      overflow: 'hidden',
      // Fixed, viewport-relative offset — not flex "justify-content: center" —
      // so the block's vertical position never recomputes as the Multiline
      // field grows taller (which would otherwise shift it upward and make
      // the field look like it's growing from its middle instead of its
      // bottom edge).
      paddingTop: '18vh'
    }}>
      {/* Decorative background accents — purely visual, never intercept clicks */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: -120,
        left: -100,
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'var(--ds-brand-primary, #5464F2)',
        opacity: 0.35,
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: -140,
        right: -120,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: '#1FB97A',
        opacity: 0.35,
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '30%',
        right: '12%',
        width: 220,
        height: 220,
        borderRadius: '50%',
        background: '#E8A23A',
        opacity: 0.3,
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
      <button type="button" onClick={clearAll} style={{
          background: 'none',
          border: 'none',
          padding: 0,
          color: 'var(--ds-text-label, #616E88)',
          textDecoration: 'underline',
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 'var(--ds-font-size-base)',
          cursor: 'pointer'
        }}>
        Clear
      </button>
      <Dropdown layout="vertical" width={150} options={[{
          value: 'edit',
          label: 'Default'
        }, {
          value: 'readonly',
          label: 'Read only'
        }]} value={mode} onChange={setMode} triggerAriaLabel="Field mode" />
      <button type="button" onClick={regenerate} aria-label="Generate new AI prompts" title="Generate new AI prompts" style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          background: 'var(--ds-bg-common-card, #fff)',
          border: '1px solid var(--ds-components-input-default-outline)',
          borderRadius: 6,
          color: 'var(--ds-text-label, #616E88)',
          cursor: 'pointer'
        }}>
        <RefreshGlyph />
      </button>
      </div>

      <h1 style={{
        position: 'relative',
        fontSize: 28,
        fontWeight: 600,
        color: 'var(--ds-text-base)',
        margin: '0 0 48px'
      }}>
        Merge Field
      </h1>
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        width: 440
      }}>
        <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} key={\`single-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.single} />
        <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} key={\`multi-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.multi} />
      </div>
    </div>;
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Read only',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [mode, setMode] = useState('readonly');
    return <SlideFrame title="Merge Field - Read Only" controls={<Dropdown layout="vertical" width={150} options={[{
      value: 'edit',
      label: 'Default'
    }, {
      value: 'readonly',
      label: 'Read only'
    }]} value={mode} onChange={setMode} triggerAriaLabel="Field mode" />}>
      <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} defaultValue={READ_ONLY_SAMPLE.single} readOnly={mode === 'readonly'} />
      <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} defaultValue={READ_ONLY_SAMPLE.multi} readOnly={mode === 'readonly'} />
    </SlideFrame>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Read-only: the same sample content in both variants, shown as plain, non-editable text.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Adding tag',
  args: {
    layout: 'vertical',
    width: 440,
    mergeFields: NOTIFICATION_FIELDS
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#recordname', {
      skipClick: true
    });
    await waitFor(() => document.querySelector('.mergefield-popup-option[data-active]'));
    await userEvent.keyboard('{Enter}');
    await userEvent.type(field, ' added to #queu', {
      skipClick: true
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Adding tag (completed)',
  render: () => <MergeField layout="vertical" width={440} defaultValue="#recordname added to #queuename Please handle with high priority #user at #dateandtime" mergeFields={NOTIFICATION_FIELDS} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Error',
  args: {
    layout: 'vertical',
    width: 320,
    error: true,
    helperText: 'Cannot be Empty',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    width: 390,
    filter: false,
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#', {
      skipClick: true
    });
    const page = within(canvasElement.ownerDocument.body);
    await expect(page.queryByRole('button', {
      name: 'Leads',
      exact: true
    })).not.toBeInTheDocument();
    await expect(page.getAllByRole('option', {
      name: 'First Name',
      exact: true
    })[0]).toBeVisible();
    await expect(page.getByRole('option', {
      name: 'Deal Name',
      exact: true
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await userEvent.type(field, '#DealName', {
      skipClick: true
    });
    await userEvent.keyboard('{Enter}');
    await expect(canvasElement.querySelector('.mergefield-token')).toHaveAttribute('data-value', 'DealName');
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Default',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName}',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Adding tag',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName} ',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#', {
      skipClick: true
    });
    const page = within(canvasElement.ownerDocument.body);
    for (const [label, expectedField] of [['Primary Account Name (Accounts)', 'Account Owner'], ['Notes', 'Note Title'], ['Secondary Account Name (Accounts)', 'Account Owner'], ['Vendor Name (Vendors)', 'Email']]) {
      await userEvent.click(page.getByRole('button', {
        name: /Deals|Notes|Primary Account Name|Secondary Account Name/
      }));
      const moduleList = page.getByRole('listbox', {
        name: 'Module'
      });
      const modules = within(moduleList);
      // The filter menu fits the longest label, rather than wrapping at 260px.
      const longestOption = modules.getByRole('option', {
        name: 'Secondary Account Name (Accounts)',
        exact: true
      });
      const labelRange = canvasElement.ownerDocument.createRange();
      labelRange.selectNodeContents(longestOption.lastChild!);
      await expect(labelRange.getClientRects()).toHaveLength(1);
      await expect(moduleList.scrollWidth).toBeLessThanOrEqual(moduleList.clientWidth);
      const relatedHeader = modules.getByText('Related Modules', {
        exact: true
      });
      await expect(relatedHeader).toBeVisible();
      const notesOption = modules.getByRole('option', {
        name: 'Notes',
        exact: true
      });
      const primaryAccountOption = modules.getByRole('option', {
        name: 'Primary Account Name (Accounts)',
        exact: true
      });
      await expect(modules.getAllByRole('option')[5]).toBe(notesOption);
      await expect(relatedHeader.compareDocumentPosition(notesOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(notesOption.compareDocumentPosition(primaryAccountOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(modules.queryByText('Accounts', {
        exact: true
      })).not.toBeInTheDocument();
      await expect(modules.queryByText('Vendors', {
        exact: true
      })).not.toBeInTheDocument();
      await userEvent.click(modules.getByRole('option', {
        name: label,
        exact: true
      }));
      await expect(page.getByRole('button', {
        name: label,
        exact: true
      })).toBeVisible();
      await expect(page.getByRole('option', {
        name: expectedField,
        exact: true
      })).toBeVisible();
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 440
  }}>
      <MergeField layout="vertical" label="Multiline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Multiline — error" width={440} error helperText="Cannot be Empty" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Singleline" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Singleline — disabled" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} disabled />
    </div>
}`,...H.parameters?.docs?.source}}},U=[`Default`,`ReadOnly`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`FilterDisabled`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{H as AllStates,M as Default,z as FilterDisabled,I as MultilineAddingTag,L as MultilineAddingTagComplete,R as MultilineError,F as ReadOnly,V as SinglelineAddingTag,B as SinglelineDefault,U as __namedExportsOrder,E as default};