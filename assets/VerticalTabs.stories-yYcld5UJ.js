import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-0_VNwaG5.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{i,n as a,r as o,t as s}from"./setupMenuItems-Dr0vqOrS.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(n(),1),i(),a(),l=r(),{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Design System/Components/VerticalTabs`,component:o,parameters:{layout:`centered`}},m=[{id:`general`,label:`General`,children:[{id:`personal-settings`,label:`Personal Settings`},{id:`company-details`,label:`Company Details`},{id:`motivator`,label:`Motivator`},{id:`calendar-booking`,label:`Calendar Booking`}]},{id:`users-control`,label:`Users and Control`,children:[{id:`users`,label:`Users`},{id:`roles`,label:`Roles`},{id:`permissions`,label:`Permissions`}]},{id:`channels`,label:`Channels`,children:[{id:`email-ch`,label:`Email`},{id:`phone-ch`,label:`Phone`},{id:`chat-ch`,label:`Chat`}]},{id:`customization`,label:`Customization`,children:[{id:`fields`,label:`Fields`},{id:`layouts`,label:`Layouts`},{id:`templates`,label:`Templates`}]},{id:`automation`,label:`Automation`,children:[{id:`workflows`,label:`Workflows`},{id:`macros`,label:`Macros`}]},{id:`process-mgmt`,label:`Process Management`,children:[{id:`approvals`,label:`Approvals`},{id:`reviews`,label:`Reviews`}]},{id:`data-admin`,label:`Data Administration`,children:[{id:`import`,label:`Import`},{id:`export`,label:`Export`},{id:`backup`,label:`Backup`}]},{id:`developer`,label:`Developer Space`,children:[{id:`api-keys`,label:`API Keys`},{id:`webhooks`,label:`Webhooks`},{id:`sdks`,label:`SDKs`}]},{id:`marketplace`,label:`Marketplace`,children:[{id:`extensions`,label:`Extensions`},{id:`integrations`,label:`Integrations`}]}],h={name:`Style 1`,render:()=>{let[e,t]=(0,c.useState)(`company-details`);return(0,l.jsx)(o,{title:`Setup`,searchable:!0,variant:`1`,items:m,activeId:e,onSelect:t,width:275})}},g={name:`Style 2`,render:()=>{let[e,t]=(0,c.useState)(`company-details`);return(0,l.jsx)(o,{title:`Setup`,searchable:!0,variant:`2`,items:m,activeId:e,onSelect:t,width:275})}},_={name:`All Styles`,render:()=>{let[e,t]=(0,c.useState)(`company-details`),[n,r]=(0,c.useState)(`company-details`);return(0,l.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 1`}),(0,l.jsx)(o,{title:`Setup`,searchable:!0,variant:`1`,items:m,activeId:e,onSelect:t,width:275})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 2`}),(0,l.jsx)(o,{title:`Setup`,searchable:!0,variant:`2`,items:m,activeId:n,onSelect:r,width:275})]})]})}},v={render:()=>{let[e,t]=(0,c.useState)(``);return(0,l.jsx)(`div`,{style:{height:760,overflowY:`auto`},children:(0,l.jsx)(o,{variant:`setup`,searchable:!0,items:s,defaultExpanded:[`general`,`customization`,`automation`],activeId:e,onSelect:t,width:240})})},play:async({canvasElement:e})=>{let t=f(e);await u(t.getByRole(`button`,{name:`Setup Home`})).toBeVisible(),await u(t.getByRole(`button`,{name:`Customise Setup`})).toBeVisible();let n=t.getByRole(`button`,{name:`General`});await u(n).toHaveAttribute(`aria-expanded`,`true`),await u(t.getByRole(`button`,{name:`Security Control`})).toHaveAttribute(`aria-expanded`,`false`),await d.click(t.getByRole(`button`,{name:`Company Settings`})),await u(t.getByRole(`button`,{name:`Company Settings`})).toHaveAttribute(`data-active`,`true`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Style 1',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="1" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`Style 1 — active item: indigo background + blue text, no left border`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Style 2',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="2" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`Style 2 — active item: indigo background + blue text + blue left border bar`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Both styles side by side`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('');
    return <div style={{
      height: 760,
      overflowY: 'auto'
    }}>
        <VerticalTabs variant="setup" searchable items={SETUP_MENU_ITEMS} defaultExpanded={['general', 'customization', 'automation']} activeId={active} onSelect={setActive} width={240} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Setup Home'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Customise Setup'
    })).toBeVisible();
    const general = canvas.getByRole('button', {
      name: 'General'
    });
    await expect(general).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Security Control'
    })).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Company Settings'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Company Settings'
    })).toHaveAttribute('data-active', 'true');
  }
}`,...v.parameters?.docs?.source},description:{story:`Setup — CRM Setup left menu: "← Setup Home" header with a customise action,
search, and icon-led groups with an up/down chevron.
Figma: Pascal Stone "Setup Left Menu" (79954:198542).`,...v.parameters?.docs?.description}}},y=[`Style1`,`Style2`,`AllStyles`,`Setup`]}))();export{_ as AllStyles,v as Setup,h as Style1,g as Style2,y as __namedExportsOrder,p as default};