import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DeHoAdc0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Dropdown-BPPDYYCj.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{o=t(n(),1),i(),s=r(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Design System/Components/Dropdown`,component:a,play:async({canvasElement:e})=>{let t=e.querySelectorAll(`.dropdown-trigger`);await c(t.length).toBeGreaterThan(0);for(let e of t)await c(e.getBoundingClientRect().width).toBe(390)},parameters:{layout:`centered`,docs:{description:{component:`Dropdown select with a floating option panel. Matches the Option Comp (node 208-28857) and Dropdown Value (node 239-37380) from the Chinnaiya Style Sheet. Supports hover, selected, disabled option states, and optional search.`}}},argTypes:{label:{control:`text`,table:{category:`Content`}},placeholder:{control:`text`,table:{category:`Content`}},helperText:{control:`text`,table:{category:`Content`}},searchable:{control:`boolean`,table:{category:`Modifiers`}},required:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},error:{control:`boolean`,table:{category:`State`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],table:{category:`Layout`}},options:{control:!1},onChange:{control:!1}}},f=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],p=[{value:`web`,label:`Web Site`},{value:`call`,label:`Cold Call`},{value:`referral`,label:`Referral`},{value:`email`,label:`Email Campaign`},{value:`social`,label:`Social Media`},{value:`event`,label:`Trade Show`}],m=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`in`,label:`India`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`jp`,label:`Japan`},{value:`br`,label:`Brazil`},{value:`mx`,label:`Mexico`},{value:`sg`,label:`Singapore`},{value:`ae`,label:`UAE`},{value:`za`,label:`South Africa`}],h=[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`,disabled:!0},{value:`pending`,label:`Pending`},{value:`suspended`,label:`Suspended`,disabled:!0},{value:`closed`,label:`Closed`}],g={render:e=>{let[t,n]=(0,o.useState)(``);return(0,s.jsx)(a,{...e,value:t,onChange:n})},args:{label:`Lead Status`,options:f,width:622,columns:`1fr 390px`}},_={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{size:`sm`,options:f,value:e,onChange:t,placeholder:`Lead Status`,width:390})}},v={args:{searchable:!0},name:`Default`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:f,value:e,onChange:t,width:622,columns:`1fr 390px`})}},y={name:`With Selected Value`,render:()=>{let[e,t]=(0,o.useState)(`qualified`);return(0,s.jsx)(a,{label:`Lead Status`,options:f,value:e,onChange:t,width:622,columns:`1fr 390px`})}},b={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:f,value:e,onChange:t,required:!0,width:622,columns:`1fr 390px`})}},x={name:`Error State`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:f,value:e,onChange:t,required:!0,error:!0,helperText:`Please select a lead status.`,width:622,columns:`1fr 390px`})}},S={render:()=>(0,s.jsx)(a,{label:`Lead Status`,options:f,value:`qualified`,disabled:!0,width:622,columns:`1fr 390px`})},C={name:`With Disabled Options`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Account Status`,options:h,value:e,onChange:t,width:622,columns:`1fr 390px`})}},w=[{value:`Lookup1`,label:`Lookup 1 (Contacts)`,module:`Deals`},{value:`DealAccountName`,label:`Account Name (Accounts)`,module:`Deals`},{value:`DealNotes`,label:`Notes`,module:`Deals`},{value:`PrimaryAccountName`,label:`Primary Account Name`,module:`Deals`,group:`Accounts`},{value:`SecondaryAccountName`,label:`Secondary Account Name`,module:`Deals`,group:`Accounts`},{value:`VendorName`,label:`Vendor Name`,module:`Deals`,group:`Vendors`},{value:`ContactEmail`,label:`Email`,module:`Contacts`},{value:`ContactPhone`,label:`Phone`,module:`Contacts`},{value:`AccountName`,label:`Account Name`,module:`Accounts`},{value:`AccountSite`,label:`Account Site`,module:`Accounts`},{value:`VendorContact`,label:`Vendor Contact`,module:`Vendors`},{value:`VendorPhone`,label:`Vendor Phone`,module:`Vendors`}],T={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Field`,options:w,value:e,onChange:t,moduleFilter:[`Deals`,`Contacts`,`Accounts`,`Vendors`],width:622,columns:`1fr 390px`})}},E={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Country`,options:m,value:e,onChange:t,searchable:!0,width:622,columns:`1fr 390px`})}},D={name:`Searchable — Long List`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Country`,options:m,value:e,onChange:t,searchable:!0,helperText:`Scroll or search to find your country.`,width:622,columns:`1fr 390px`})}},O={name:`Vertical Layout`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Source`,options:p,value:e,onChange:t,layout:`vertical`,width:390})}},k={name:`All States`,render:()=>{let[e,t]=(0,o.useState)({default:``,value:`qualified`,required:``,error:``,disabled:`qualified`}),n=e=>n=>t(t=>({...t,[e]:n}));return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:622},children:[(0,s.jsx)(a,{label:`Default`,options:f,value:e.default,onChange:n(`default`),width:622,columns:`1fr 390px`}),(0,s.jsx)(a,{label:`With Value`,options:f,value:e.value,onChange:n(`value`),width:622,columns:`1fr 390px`}),(0,s.jsx)(a,{label:`Required`,options:f,value:e.required,onChange:n(`required`),required:!0,width:622,columns:`1fr 390px`}),(0,s.jsx)(a,{label:`Error`,options:f,value:e.error,onChange:n(`error`),error:!0,helperText:`This field is required.`,width:622,columns:`1fr 390px`}),(0,s.jsx)(a,{label:`Disabled`,options:f,value:e.disabled,disabled:!0,width:622,columns:`1fr 390px`})]})}},A={name:`Multi-Select`,render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{label:`Lead Status`,options:f,selectedValues:e,onMultiChange:t,multiSelect:!0,searchable:!0,placeholder:`Select statuses`,width:622,columns:`1fr 390px`})}},j={name:`Footer Action`,play:async({canvasElement:e})=>{await c(e.querySelector(`.dropdown-trigger`).getBoundingClientRect().width).toBe(390);let t=u(e),n=u(e.ownerDocument.body);await l.click(t.getByRole(`button`));let r=await n.findByRole(`option`,{name:`New`,exact:!0}),i=n.getByRole(`button`,{name:`Add new status`});await l.hover(r),await c(r).toHaveAttribute(`data-active`),await l.unhover(r),await l.hover(i),await c(r).not.toHaveAttribute(`data-active`),await c(e.ownerDocument.querySelectorAll(`.dropdown-option[data-active]`)).toHaveLength(0),await l.hover(r),await c(r).toHaveAttribute(`data-active`),await l.click(r),await c(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await c(t.getByRole(`button`)).toHaveTextContent(`New`)},render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(f);return(0,s.jsx)(a,{label:`Lead Status`,options:n,value:e,onChange:t,searchable:!0,footerAction:{label:`Add new status`,onClick:()=>{let e=prompt(`Enter new status label`);e&&r(t=>[...t,{value:e.toLowerCase().replace(/\s+/g,`-`),label:e}])}},width:622,columns:`1fr 390px`})}},M={name:`With Groups`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Pipeline Stage`,options:[{value:`new`,label:`New`,group:`Open`},{value:`contacted`,label:`Contacted`,group:`Open`},{value:`qualified`,label:`Qualified`,group:`Open`},{value:`proposal`,label:`Proposal Sent`,group:`In Progress`},{value:`negotiation`,label:`Negotiation`,group:`In Progress`},{value:`won`,label:`Won`,group:`Closed`},{value:`lost`,label:`Lost`,group:`Closed`}],value:e,onChange:t,width:622,columns:`1fr 390px`})}},N={name:`In Form Context`,render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{style:{width:670,background:`var(--ds-bg-common-card)`,borderRadius:8,border:`1px solid var(--ds-components-input-default-outline)`,padding:`20px 24px`,display:`flex`,flexDirection:`column`,gap:16,fontFamily:`var(--ds-font-family-base)`},children:[(0,s.jsx)(a,{label:`Lead Status`,options:f,value:e,onChange:t,required:!0,width:622,columns:`1fr 390px`}),(0,s.jsx)(a,{label:`Lead Source`,options:p,value:n,onChange:r,width:622,columns:`1fr 390px`})]})}},P=()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Show Submenu`,layout:`vertical`,width:390,options:[{value:`sum_avg_time`,label:`Sum of Average Time Spent (Minutes)`,submenu:[{value:`sum_avg_time_week`,label:`By Week`},{value:`sum_avg_time_month`,label:`By Month`},{value:`sum_avg_time_year`,label:`By Year`}]},{value:`min_avg_time`,label:`Minimum of Average Time Spent (Minutes)`},{value:`max_avg_time`,label:`Maximum of Average Time Spent (Minutes)`}],value:e,onChange:t,placeholder:`Select`})},F=[{value:`lead-widget-1`,label:`Lead widget view 1`},{value:`lead-widget-2`,label:`Lead widget view 2`},{value:`lead-widget-3`,label:`Lead widget view 3`},{value:`lead-widget-4`,label:`Lead widget view 4`},{value:`lead-widget-5`,label:`Lead widget view 5`}],I={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:622},children:[(0,s.jsx)(a,{label:`Form`,options:[{value:`contact`,label:`Contact Us Form`},{value:`subscription`,label:`Subscription Form`},{value:`compliant`,label:`Compliant Query Form`}],value:e,onChange:t,onRefresh:()=>r(e=>e+1),width:622,columns:`1fr 390px`}),(0,s.jsxs)(`span`,{style:{fontSize:12,color:`#616E88`},children:[`Refreshed `,n,` times`]})]})}},L={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Form`,options:[{value:`contact`,label:`Contact Us Form`},{value:`subscription`,label:`Subscription Form`}],value:e,onChange:t,onRefresh:()=>{},refreshVariant:`icon`,refreshLabel:`Refresh forms`,width:622,columns:`1fr 390px`})}},R={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:622},children:[(0,s.jsx)(a,{label:`Custom View`,options:F,value:e,onChange:t,footerAction:{label:`New Custom View`,submenu:[{label:`Use Canvas`,onClick:()=>r(`Canvas`)},{label:`Use Widget`,onClick:()=>r(`Widget`)}]},width:622,columns:`1fr 390px`}),(0,s.jsxs)(`span`,{style:{fontSize:12,color:`#616E88`},children:[`Last action: `,n||`none`]})]})}},P.__docgenInfo={description:``,methods:[],displayName:`WithSubmenu`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    label: 'Lead Status',
    options: LEAD_STATUS,
    width: 622,
    columns: '1fr 390px'
  }
}`,...g.parameters?.docs?.source},description:{story:`Interactive playground — use Controls to adjust all props.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown size="sm" options={LEAD_STATUS} value={val} onChange={setVal} placeholder="Lead Status" width={390} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Default state — no value selected.
Small size: 27px tall with 13px text, for compact toolbars and section headers.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  name: 'Default',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} width={622} columns="1fr 390px" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Selected Value',
  render: () => {
    const [val, setVal] = useState('qualified');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} width={622} columns="1fr 390px" />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Pre-selected value.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} required width={622} columns="1fr 390px" />;
  }
}`,...b.parameters?.docs?.source},description:{story:`Required field — red left-edge indicator.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} required error helperText="Please select a lead status." width={622} columns="1fr 390px" />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Error state with helper text.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown label="Lead Status" options={LEAD_STATUS} value="qualified" disabled width={622} columns="1fr 390px" />
}`,...S.parameters?.docs?.source},description:{story:`Disabled — no interaction possible.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Options',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Account Status" options={WITH_DISABLED} value={val} onChange={setVal} width={622} columns="1fr 390px" />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Options with some disabled entries.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Field" options={MODULE_FIELDS} value={val} onChange={setVal} moduleFilter={['Deals', 'Contacts', 'Accounts', 'Vendors']} width={622} columns="1fr 390px" />;
  }
}`,...T.parameters?.docs?.source},description:{story:`Module-filter variant: module trigger joined to the search box; options follow the selected module.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Country" options={COUNTRIES} value={val} onChange={setVal} searchable width={622} columns="1fr 390px" />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Searchable — Long List',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Country" options={COUNTRIES} value={val} onChange={setVal} searchable helperText="Scroll or search to find your country." width={622} columns="1fr 390px" />;
  }
}`,...D.parameters?.docs?.source},description:{story:`Searchable with a long list — shows scrollable panel.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Source" options={LEAD_SOURCE} value={val} onChange={setVal} layout="vertical" width={390} />;
  }
}`,...O.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => {
    const [vals, setVals] = useState<Record<string, string>>({
      default: '',
      value: 'qualified',
      required: '',
      error: '',
      disabled: 'qualified'
    });
    const set = (k: string) => (v: string) => setVals(prev => ({
      ...prev,
      [k]: v
    }));
    const row: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 622
    };
    return <div style={row}>
        <Dropdown label="Default" options={LEAD_STATUS} value={vals.default} onChange={set('default')} width={622} columns="1fr 390px" />
        <Dropdown label="With Value" options={LEAD_STATUS} value={vals.value} onChange={set('value')} width={622} columns="1fr 390px" />
        <Dropdown label="Required" options={LEAD_STATUS} value={vals.required} onChange={set('required')} required width={622} columns="1fr 390px" />
        <Dropdown label="Error" options={LEAD_STATUS} value={vals.error} onChange={set('error')} error helperText="This field is required." width={622} columns="1fr 390px" />
        <Dropdown label="Disabled" options={LEAD_STATUS} value={vals.disabled} disabled width={622} columns="1fr 390px" />
      </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:`All visual states side-by-side.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Multi-Select',
  render: () => {
    const [vals, setVals] = useState<string[]>([]);
    return <Dropdown label="Lead Status" options={LEAD_STATUS} selectedValues={vals} onMultiChange={setVals} multiSelect searchable placeholder="Select statuses" width={622} columns="1fr 390px" />;
  }
}`,...A.parameters?.docs?.source},description:{story:`Multi-select — checkbox per option, Done button in footer.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Footer Action',
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('.dropdown-trigger')!.getBoundingClientRect().width).toBe(390);
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button'));
    const option = await page.findByRole('option', {
      name: 'New',
      exact: true
    });
    const footer = page.getByRole('button', {
      name: 'Add new status'
    });
    await userEvent.hover(option);
    await expect(option).toHaveAttribute('data-active');
    await userEvent.unhover(option);
    await userEvent.hover(footer);
    await expect(option).not.toHaveAttribute('data-active');
    await expect(canvasElement.ownerDocument.querySelectorAll('.dropdown-option[data-active]')).toHaveLength(0);
    await userEvent.hover(option);
    await expect(option).toHaveAttribute('data-active');
    await userEvent.click(option);
    await expect(page.queryByRole('listbox')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button')).toHaveTextContent('New');
  },
  render: () => {
    const [val, setVal] = useState('');
    const [opts, setOpts] = useState(LEAD_STATUS);
    return <Dropdown label="Lead Status" options={opts} value={val} onChange={setVal} searchable footerAction={{
      label: 'Add new status',
      onClick: () => {
        const label = prompt('Enter new status label');
        if (label) setOpts(prev => [...prev, {
          value: label.toLowerCase().replace(/\\s+/g, '-'),
          label
        }]);
      }
    }} width={622} columns="1fr 390px" />;
  }
}`,...j.parameters?.docs?.source},description:{story:`Footer action — "+ Add new" button pinned at the bottom of the panel.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With Groups',
  render: () => {
    const [val, setVal] = useState('');
    const grouped = [{
      value: 'new',
      label: 'New',
      group: 'Open'
    }, {
      value: 'contacted',
      label: 'Contacted',
      group: 'Open'
    }, {
      value: 'qualified',
      label: 'Qualified',
      group: 'Open'
    }, {
      value: 'proposal',
      label: 'Proposal Sent',
      group: 'In Progress'
    }, {
      value: 'negotiation',
      label: 'Negotiation',
      group: 'In Progress'
    }, {
      value: 'won',
      label: 'Won',
      group: 'Closed'
    }, {
      value: 'lost',
      label: 'Lost',
      group: 'Closed'
    }];
    return <Dropdown label="Pipeline Stage" options={grouped} value={val} onChange={setVal} width={622} columns="1fr 390px" />;
  }
}`,...M.parameters?.docs?.source},description:{story:`Grouped options — options with a group key render under named headings.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'In Form Context',
  render: () => {
    const [status, setStatus] = useState('');
    const [source, setSource] = useState('');
    const card: React.CSSProperties = {
      width: 670,
      background: 'var(--ds-bg-common-card)',
      borderRadius: 8,
      border: '1px solid var(--ds-components-input-default-outline)',
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--ds-font-family-base)'
    };
    return <div style={card}>
        <Dropdown label="Lead Status" options={LEAD_STATUS} value={status} onChange={setStatus} required width={622} columns="1fr 390px" />
        <Dropdown label="Lead Source" options={LEAD_SOURCE} value={source} onChange={setSource} width={622} columns="1fr 390px" />
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`Two dropdowns in a form context.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const options = [{
    value: 'sum_avg_time',
    label: 'Sum of Average Time Spent (Minutes)',
    submenu: [{
      value: 'sum_avg_time_week',
      label: 'By Week'
    }, {
      value: 'sum_avg_time_month',
      label: 'By Month'
    }, {
      value: 'sum_avg_time_year',
      label: 'By Year'
    }]
  }, {
    value: 'min_avg_time',
    label: 'Minimum of Average Time Spent (Minutes)'
  }, {
    value: 'max_avg_time',
    label: 'Maximum of Average Time Spent (Minutes)'
  }];
  return <Dropdown label="Show Submenu" layout="vertical" width={390} options={options} value={value} onChange={setValue} placeholder="Select" />;
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    const [count, setCount] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 622
    }}>
        <Dropdown label="Form" options={[{
        value: 'contact',
        label: 'Contact Us Form'
      }, {
        value: 'subscription',
        label: 'Subscription Form'
      }, {
        value: 'compliant',
        label: 'Compliant Query Form'
      }]} value={val} onChange={setVal} onRefresh={() => setCount(c => c + 1)} width={622} columns="1fr 390px" />
        <span style={{
        fontSize: 12,
        color: '#616E88'
      }}>Refreshed {count} times</span>
      </div>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Refresh button at the top of the panel — labelled pill.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Form" options={[{
      value: 'contact',
      label: 'Contact Us Form'
    }, {
      value: 'subscription',
      label: 'Subscription Form'
    }]} value={val} onChange={setVal} onRefresh={() => {}} refreshVariant="icon" refreshLabel="Refresh forms" width={622} columns="1fr 390px" />;
  }
}`,...L.parameters?.docs?.source},description:{story:`Refresh button in icon-only form.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    const [last, setLast] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 622
    }}>
        <Dropdown label="Custom View" options={CUSTOM_VIEW_OPTIONS} value={val} onChange={setVal} footerAction={{
        label: 'New Custom View',
        submenu: [{
          label: 'Use Canvas',
          onClick: () => setLast('Canvas')
        }, {
          label: 'Use Widget',
          onClick: () => setLast('Widget')
        }]
      }} width={622} columns="1fr 390px" />
        <span style={{
        fontSize: 12,
        color: '#616E88'
      }}>Last action: {last || 'none'}</span>
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Footer action with a submenu — "New Custom View ›" opens Use Canvas / Use Widget.`,...R.parameters?.docs?.description}}},z=[`Playground`,`Small`,`Default`,`WithValue`,`Required`,`ErrorState`,`Disabled`,`WithDisabledOptions`,`ModuleFilter`,`Searchable`,`SearchableScrollable`,`VerticalLayout`,`AllStates`,`MultiSelect`,`WithFooterAction`,`WithGroups`,`InForm`,`WithSubmenu`,`WithRefreshButton`,`WithRefreshIcon`,`WithFooterSubmenu`]}))();export{k as AllStates,v as Default,S as Disabled,x as ErrorState,N as InForm,T as ModuleFilter,A as MultiSelect,g as Playground,b as Required,E as Searchable,D as SearchableScrollable,_ as Small,O as VerticalLayout,C as WithDisabledOptions,j as WithFooterAction,R as WithFooterSubmenu,M as WithGroups,I as WithRefreshButton,L as WithRefreshIcon,P as WithSubmenu,y as WithValue,z as __namedExportsOrder,d as default};