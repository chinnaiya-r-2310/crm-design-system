import{c as e,i as t}from"./preload-helper-CJc2i8B4.js";import{N as n}from"./iframe-6JdsuIax.js";import{t as r}from"./jsx-runtime-BsPI7X8G.js";import{J as i,et as a,f as o,h as s}from"./Icons-BFiFKMZX.js";var c=t((()=>{}));function l({title:e,searchable:t=!1,items:n=[],activeId:r,onSelect:a,variant:c=`1`,width:l=275}){let[f,p]=(0,d.useState)(``),[m,h]=(0,d.useState)(()=>{let e=new Set;return n.forEach(t=>{t.children?.some(e=>e.id===r)&&e.add(t.id)}),e}),g=e=>{h(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},_=f.toLowerCase().trim(),v=(0,d.useMemo)(()=>_?n.reduce((e,t)=>{if(t.children){let n=t.children.filter(e=>e.label.toLowerCase().includes(_)),r=t.label.toLowerCase().includes(_);(n.length>0||r)&&e.push({...t,children:n.length>0?n:t.children})}else t.label.toLowerCase().includes(_)&&e.push(t);return e},[]):n,[n,_]),y=v.length>0;return(0,u.jsxs)(`div`,{className:`vtabs-panel`,"data-variant":c,style:{width:typeof l==`number`?`${l}px`:l},children:[e&&(0,u.jsx)(`div`,{className:`vtabs-title`,children:e}),t&&(0,u.jsxs)(`div`,{className:`vtabs-search-box`,children:[(0,u.jsx)(`span`,{className:`vtabs-search-icon`,children:(0,u.jsx)(i,{})}),(0,u.jsx)(`input`,{type:`text`,className:`vtabs-search-input`,placeholder:`Search`,value:f,onChange:e=>p(e.target.value),"aria-label":`Search`}),f&&(0,u.jsx)(`button`,{type:`button`,className:`vtabs-search-clear`,onClick:()=>p(``),"aria-label":`Clear search`,children:(0,u.jsx)(s,{})})]}),_&&!y?(0,u.jsxs)(`div`,{className:`vtabs-no-results`,children:[(0,u.jsx)(i,{className:`vtabs-no-results-icon`}),(0,u.jsx)(`span`,{children:`No Results Found`})]}):(0,u.jsx)(`nav`,{className:`vtabs-list`,"aria-label":e??`Navigation`,children:v.map(e=>{if(e.children){let t=_?!0:m.has(e.id);return(0,u.jsxs)(`div`,{className:`vtabs-group`,children:[(0,u.jsxs)(`button`,{type:`button`,className:`vtabs-group-header`,"aria-expanded":t,onClick:()=>{_||g(e.id)},children:[(0,u.jsx)(`span`,{className:`vtabs-group-arrow`,"data-open":t||void 0,children:(0,u.jsx)(o,{})}),e.label]}),(0,u.jsx)(`div`,{className:`vtabs-children-wrap`,"data-open":t||void 0,children:(0,u.jsx)(`div`,{className:`vtabs-children`,children:e.children.map(e=>(0,u.jsx)(`button`,{type:`button`,className:`vtabs-item`,"data-active":e.id===r||void 0,onClick:()=>a?.(e.id),children:e.label},e.id))})})]},e.id)}return(0,u.jsx)(`button`,{type:`button`,className:`vtabs-item vtabs-item--top`,"data-active":e.id===r||void 0,onClick:()=>a?.(e.id),children:e.label},e.id)})})]})}var u,d,f=t((()=>{u=r(),d=e(n(),1),a(),c(),l.__docgenInfo={description:``,methods:[],displayName:`VerticalTabs`,props:{searchable:{defaultValue:{value:`false`,computed:!1},required:!1},items:{defaultValue:{value:`[]`,computed:!1},required:!1},variant:{defaultValue:{value:`'1'`,computed:!1},required:!1},width:{defaultValue:{value:`275`,computed:!1},required:!1}}}})),p,m,h,g,_,v,y,b;t((()=>{p=e(n(),1),f(),m=r(),h={title:`Design System/Components/VerticalTabs`,component:l,parameters:{layout:`centered`}},g=[{id:`general`,label:`General`,children:[{id:`personal-settings`,label:`Personal Settings`},{id:`company-details`,label:`Company Details`},{id:`motivator`,label:`Motivator`},{id:`calendar-booking`,label:`Calendar Booking`}]},{id:`users-control`,label:`Users and Control`,children:[{id:`users`,label:`Users`},{id:`roles`,label:`Roles`},{id:`permissions`,label:`Permissions`}]},{id:`channels`,label:`Channels`,children:[{id:`email-ch`,label:`Email`},{id:`phone-ch`,label:`Phone`},{id:`chat-ch`,label:`Chat`}]},{id:`customization`,label:`Customization`,children:[{id:`fields`,label:`Fields`},{id:`layouts`,label:`Layouts`},{id:`templates`,label:`Templates`}]},{id:`automation`,label:`Automation`,children:[{id:`workflows`,label:`Workflows`},{id:`macros`,label:`Macros`}]},{id:`process-mgmt`,label:`Process Management`,children:[{id:`approvals`,label:`Approvals`},{id:`reviews`,label:`Reviews`}]},{id:`data-admin`,label:`Data Administration`,children:[{id:`import`,label:`Import`},{id:`export`,label:`Export`},{id:`backup`,label:`Backup`}]},{id:`developer`,label:`Developer Space`,children:[{id:`api-keys`,label:`API Keys`},{id:`webhooks`,label:`Webhooks`},{id:`sdks`,label:`SDKs`}]},{id:`marketplace`,label:`Marketplace`,children:[{id:`extensions`,label:`Extensions`},{id:`integrations`,label:`Integrations`}]}],_={name:`Style 1`,render:()=>{let[e,t]=(0,p.useState)(`company-details`);return(0,m.jsx)(l,{title:`Setup`,searchable:!0,variant:`1`,items:g,activeId:e,onSelect:t,width:275})}},v={name:`Style 2`,render:()=>{let[e,t]=(0,p.useState)(`company-details`);return(0,m.jsx)(l,{title:`Setup`,searchable:!0,variant:`2`,items:g,activeId:e,onSelect:t,width:275})}},y={name:`All Styles`,render:()=>{let[e,t]=(0,p.useState)(`company-details`),[n,r]=(0,p.useState)(`company-details`);return(0,m.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 1`}),(0,m.jsx)(l,{title:`Setup`,searchable:!0,variant:`1`,items:g,activeId:e,onSelect:t,width:275})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:8,marginTop:0},children:`Style 2`}),(0,m.jsx)(l,{title:`Setup`,searchable:!0,variant:`2`,items:g,activeId:n,onSelect:r,width:275})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Style 1',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="1" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Style 1 — active item: indigo background + blue text, no left border`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Style 2',
  render: () => {
    const [active, setActive] = useState('company-details');
    return <VerticalTabs title="Setup" searchable variant="2" items={SETUP_ITEMS} activeId={active} onSelect={setActive} width={275} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`Style 2 — active item: indigo background + blue text + blue left border bar`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Both styles side by side`,...y.parameters?.docs?.description}}},b=[`Style1`,`Style2`,`AllStyles`]}))();export{y as AllStyles,_ as Style1,v as Style2,b as __namedExportsOrder,h as default};