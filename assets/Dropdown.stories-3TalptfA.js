import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BwyBN0p_.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Dropdown-BYC2O-Pn.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Dropdown`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Dropdown select with a floating option panel. Matches the Option Comp (node 208-28857) and Dropdown Value (node 239-37380) from the Chinnaiya Style Sheet. Supports hover, selected, disabled option states, and optional search.`}}},argTypes:{label:{control:`text`,table:{category:`Content`}},placeholder:{control:`text`,table:{category:`Content`}},helperText:{control:`text`,table:{category:`Content`}},searchable:{control:`boolean`,table:{category:`Modifiers`}},required:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},error:{control:`boolean`,table:{category:`State`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],table:{category:`Layout`}},options:{control:!1},onChange:{control:!1}}},l=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],u=[{value:`web`,label:`Web Site`},{value:`call`,label:`Cold Call`},{value:`referral`,label:`Referral`},{value:`email`,label:`Email Campaign`},{value:`social`,label:`Social Media`},{value:`event`,label:`Trade Show`}],d=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`in`,label:`India`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`jp`,label:`Japan`},{value:`br`,label:`Brazil`},{value:`mx`,label:`Mexico`},{value:`sg`,label:`Singapore`},{value:`ae`,label:`UAE`},{value:`za`,label:`South Africa`}],f=[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`,disabled:!0},{value:`pending`,label:`Pending`},{value:`suspended`,label:`Suspended`,disabled:!0},{value:`closed`,label:`Closed`}],p={render:e=>{let[t,n]=(0,o.useState)(``);return(0,s.jsx)(a,{...e,value:t,onChange:n})},args:{label:`Lead Status`,options:l,width:622}},m={args:{searchable:!0},name:`Default`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:l,value:e,onChange:t,width:622})}},h={name:`With Selected Value`,render:()=>{let[e,t]=(0,o.useState)(`qualified`);return(0,s.jsx)(a,{label:`Lead Status`,options:l,value:e,onChange:t,width:622})}},g={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:l,value:e,onChange:t,required:!0,width:622})}},_={name:`Error State`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Status`,options:l,value:e,onChange:t,required:!0,error:!0,helperText:`Please select a lead status.`,width:622})}},v={render:()=>(0,s.jsx)(a,{label:`Lead Status`,options:l,value:`qualified`,disabled:!0,width:622})},y={name:`With Disabled Options`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Account Status`,options:f,value:e,onChange:t,width:622})}},b={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Country`,options:d,value:e,onChange:t,searchable:!0,width:622})}},x={name:`Searchable — Long List`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Country`,options:d,value:e,onChange:t,searchable:!0,helperText:`Scroll or search to find your country.`,width:622})}},S={name:`Vertical Layout`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Lead Source`,options:u,value:e,onChange:t,layout:`vertical`,width:300})}},C={name:`All States`,render:()=>{let[e,t]=(0,o.useState)({default:``,value:`qualified`,required:``,error:``,disabled:`qualified`}),n=e=>n=>t(t=>({...t,[e]:n}));return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:622},children:[(0,s.jsx)(a,{label:`Default`,options:l,value:e.default,onChange:n(`default`),width:622}),(0,s.jsx)(a,{label:`With Value`,options:l,value:e.value,onChange:n(`value`),width:622}),(0,s.jsx)(a,{label:`Required`,options:l,value:e.required,onChange:n(`required`),required:!0,width:622}),(0,s.jsx)(a,{label:`Error`,options:l,value:e.error,onChange:n(`error`),error:!0,helperText:`This field is required.`,width:622}),(0,s.jsx)(a,{label:`Disabled`,options:l,value:e.disabled,disabled:!0,width:622})]})}},w={name:`Multi-Select`,render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{label:`Lead Status`,options:l,selectedValues:e,onMultiChange:t,multiSelect:!0,searchable:!0,placeholder:`Select statuses`,width:622})}},T={name:`Footer Action`,render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(l);return(0,s.jsx)(a,{label:`Lead Status`,options:n,value:e,onChange:t,searchable:!0,footerAction:{label:`Add new status`,onClick:()=>{let e=prompt(`Enter new status label`);e&&r(t=>[...t,{value:e.toLowerCase().replace(/\s+/g,`-`),label:e}])}},width:622})}},E={name:`With Groups`,render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Pipeline Stage`,options:[{value:`new`,label:`New`,group:`Open`},{value:`contacted`,label:`Contacted`,group:`Open`},{value:`qualified`,label:`Qualified`,group:`Open`},{value:`proposal`,label:`Proposal Sent`,group:`In Progress`},{value:`negotiation`,label:`Negotiation`,group:`In Progress`},{value:`won`,label:`Won`,group:`Closed`},{value:`lost`,label:`Lost`,group:`Closed`}],value:e,onChange:t,width:622})}},D={name:`In Form Context`,render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{style:{width:670,background:`var(--ds-bg-common-card)`,borderRadius:8,border:`1px solid var(--ds-components-input-default-outline)`,padding:`20px 24px`,display:`flex`,flexDirection:`column`,gap:16,fontFamily:`var(--ds-font-family-base)`},children:[(0,s.jsx)(a,{label:`Lead Status`,options:l,value:e,onChange:t,required:!0,width:622}),(0,s.jsx)(a,{label:`Lead Source`,options:u,value:n,onChange:r,width:622})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    label: 'Lead Status',
    options: LEAD_STATUS,
    width: 622
  }
}`,...p.parameters?.docs?.source},description:{story:`Interactive playground — use Controls to adjust all props.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  name: 'Default',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} width={622} />;
  }
}`,...m.parameters?.docs?.source},description:{story:`Default state — no value selected.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Selected Value',
  render: () => {
    const [val, setVal] = useState('qualified');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} width={622} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Pre-selected value.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} required width={622} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`Required field — red left-edge indicator.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Status" options={LEAD_STATUS} value={val} onChange={setVal} required error helperText="Please select a lead status." width={622} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Error state with helper text.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown label="Lead Status" options={LEAD_STATUS} value="qualified" disabled width={622} />
}`,...v.parameters?.docs?.source},description:{story:`Disabled — no interaction possible.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Options',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Account Status" options={WITH_DISABLED} value={val} onChange={setVal} width={622} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Options with some disabled entries.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Country" options={COUNTRIES} value={val} onChange={setVal} searchable width={622} />;
  }
}`,...b.parameters?.docs?.source},description:{story:`Searchable — filter options by typing.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Searchable — Long List',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Country" options={COUNTRIES} value={val} onChange={setVal} searchable helperText="Scroll or search to find your country." width={622} />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Searchable with a long list — shows scrollable panel.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  render: () => {
    const [val, setVal] = useState('');
    return <Dropdown label="Lead Source" options={LEAD_SOURCE} value={val} onChange={setVal} layout="vertical" width={300} />;
  }
}`,...S.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        <Dropdown label="Default" options={LEAD_STATUS} value={vals.default} onChange={set('default')} width={622} />
        <Dropdown label="With Value" options={LEAD_STATUS} value={vals.value} onChange={set('value')} width={622} />
        <Dropdown label="Required" options={LEAD_STATUS} value={vals.required} onChange={set('required')} required width={622} />
        <Dropdown label="Error" options={LEAD_STATUS} value={vals.error} onChange={set('error')} error helperText="This field is required." width={622} />
        <Dropdown label="Disabled" options={LEAD_STATUS} value={vals.disabled} disabled width={622} />
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:`All visual states side-by-side.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Multi-Select',
  render: () => {
    const [vals, setVals] = useState<string[]>([]);
    return <Dropdown label="Lead Status" options={LEAD_STATUS} selectedValues={vals} onMultiChange={setVals} multiSelect searchable placeholder="Select statuses" width={622} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`Multi-select — checkbox per option, Done button in footer.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Footer Action',
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
    }} width={622} />;
  }
}`,...T.parameters?.docs?.source},description:{story:`Footer action — "+ Add new" button pinned at the bottom of the panel.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    return <Dropdown label="Pipeline Stage" options={grouped} value={val} onChange={setVal} width={622} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`Grouped options — options with a group key render under named headings.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <Dropdown label="Lead Status" options={LEAD_STATUS} value={status} onChange={setStatus} required width={622} />
        <Dropdown label="Lead Source" options={LEAD_SOURCE} value={source} onChange={setSource} width={622} />
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Two dropdowns in a form context.`,...D.parameters?.docs?.description}}},O=[`Playground`,`Default`,`WithValue`,`Required`,`ErrorState`,`Disabled`,`WithDisabledOptions`,`Searchable`,`SearchableScrollable`,`VerticalLayout`,`AllStates`,`MultiSelect`,`WithFooterAction`,`WithGroups`,`InForm`]}))();export{C as AllStates,m as Default,v as Disabled,_ as ErrorState,D as InForm,w as MultiSelect,p as Playground,g as Required,b as Searchable,x as SearchableScrollable,S as VerticalLayout,y as WithDisabledOptions,T as WithFooterAction,E as WithGroups,h as WithValue,O as __namedExportsOrder,c as default};