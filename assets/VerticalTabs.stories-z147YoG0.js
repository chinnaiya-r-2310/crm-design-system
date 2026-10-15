import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-B3_XL3Gq.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./VerticalTabs-Pbl51esU.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/VerticalTabs`,component:a,parameters:{layout:`centered`}},l=[{id:`general`,label:`General`,children:[{id:`personal-settings`,label:`Personal Settings`},{id:`company-details`,label:`Company Details`},{id:`motivator`,label:`Motivator`},{id:`calendar-booking`,label:`Calendar Booking`}]},{id:`users-control`,label:`Users and Control`,children:[{id:`users`,label:`Users`},{id:`roles`,label:`Roles`},{id:`permissions`,label:`Permissions`}]},{id:`channels`,label:`Channels`,children:[{id:`email-ch`,label:`Email`},{id:`phone-ch`,label:`Phone`},{id:`chat-ch`,label:`Chat`}]},{id:`customization`,label:`Customization`,children:[{id:`fields`,label:`Fields`},{id:`layouts`,label:`Layouts`},{id:`templates`,label:`Templates`}]},{id:`automation`,label:`Automation`,children:[{id:`workflows`,label:`Workflows`},{id:`macros`,label:`Macros`}]},{id:`process-mgmt`,label:`Process Management`,children:[{id:`approvals`,label:`Approvals`},{id:`reviews`,label:`Reviews`}]},{id:`data-admin`,label:`Data Administration`,children:[{id:`import`,label:`Import`},{id:`export`,label:`Export`},{id:`backup`,label:`Backup`}]},{id:`developer`,label:`Developer Space`,children:[{id:`api-keys`,label:`API Keys`},{id:`webhooks`,label:`Webhooks`},{id:`sdks`,label:`SDKs`}]},{id:`marketplace`,label:`Marketplace`,children:[{id:`extensions`,label:`Extensions`},{id:`integrations`,label:`Integrations`}]}],u={name:`Style 1`,render:()=>{let[e,t]=(0,o.useState)(`company-details`);return(0,s.jsx)(a,{title:`Setup`,searchable:!0,variant:`1`,items:l,activeId:e,onSelect:t,width:275})}},d={name:`Style 2`,render:()=>{let[e,t]=(0,o.useState)(`company-details`);return(0,s.jsx)(a,{title:`Setup`,searchable:!0,variant:`2`,items:l,activeId:e,onSelect:t,width:275})}},f={name:`All Styles`,render:()=>{let[e,t]=(0,o.useState)(`company-details`),[n,r]=(0,o.useState)(`company-details`);return(0,s.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 1`}),(0,s.jsx)(a,{title:`Setup`,searchable:!0,variant:`1`,items:l,activeId:e,onSelect:t,width:275})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 2`}),(0,s.jsx)(a,{title:`Setup`,searchable:!0,variant:`2`,items:l,activeId:n,onSelect:r,width:275})]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Style 1',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="1" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,...u.parameters?.docs?.source},description:{story:`Style 1 — active item: indigo background + blue text, no left border`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Style 2',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="2" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,...d.parameters?.docs?.source},description:{story:`Style 2 — active item: indigo background + blue text + blue left border bar`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All Styles',
  render: () => {
    const [active1, setActive1] = useState('company-details');
    const [active2, setActive2] = useState('company-details');
    return <div style={{
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start'
    }}>
        <div>
          <p style={{
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 13,
          color: 'var(--ds-text-label)',
          marginBottom: 8,
          marginTop: 0
        }}>Style 1</p>
          <VerticalTabs title="Setup" searchable variant="1" items={SETUP_ITEMS} activeId={active1} onSelect={setActive1} width={275} />
        </div>
        <div>
          <p style={{
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 13,
          color: 'var(--ds-text-label)',
          marginBottom: 8,
          marginTop: 0
        }}>Style 2</p>
          <VerticalTabs title="Setup" searchable variant="2" items={SETUP_ITEMS} activeId={active2} onSelect={setActive2} width={275} />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Both styles side by side`,...f.parameters?.docs?.description}}},p=[`Style1`,`Style2`,`AllStyles`]}))();export{f as AllStyles,u as Style1,d as Style2,p as __namedExportsOrder,c as default};