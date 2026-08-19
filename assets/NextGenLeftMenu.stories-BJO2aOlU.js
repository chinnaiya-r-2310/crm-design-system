import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DUDLhfMX.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{$ as i,B as a,D as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,N as m,P as h,R as g,U as _,V as v,W as y,X as b,Y as x,at as S,f as C,p as w,q as T,tt as E,z as D}from"./Icons-CfWlYmyi.js";var O=e((()=>{}));function k({appName:e=`Zoho CRM`,teamspaceName:t=`CRM Teamspace`,topNavItems:n=M,modules:r=N,activeId:a,onItemClick:s,defaultOpenFolders:c=[`activity`]}){let[l,u]=(0,j.useState)(()=>new Set(c)),[d,f]=(0,j.useState)(``),p=e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},m=d.toLowerCase(),h=(e=>m?e.reduce((e,t)=>{if(t.type===`folder`){let n=(t.children||[]).filter(e=>e.label.toLowerCase().includes(m));(n.length||t.label.toLowerCase().includes(m))&&e.push({...t,children:n})}else t.label.toLowerCase().includes(m)&&e.push(t);return e},[]):e)(r),g=e=>{let t=e.icon;return(0,A.jsxs)(`button`,{type:`button`,className:`nglm-item${a===e.id?` nglm-active`:``}`,onClick:()=>s?.(e.id),children:[t&&(0,A.jsx)(`span`,{className:`nglm-item-icon`,children:(0,A.jsx)(t,{})}),(0,A.jsx)(`span`,{className:`nglm-item-label`,children:e.label})]},e.id)},_=e=>{let t=l.has(e.id)||m&&(e.children||[]).length>0,n=(e.children||[]).length>0;return(0,A.jsxs)(`div`,{className:`nglm-folder`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`nglm-item nglm-folder-trigger`,onClick:()=>p(e.id),children:[(0,A.jsx)(`span`,{className:`nglm-item-icon nglm-folder-icon`,children:(0,A.jsx)(o,{})}),(0,A.jsx)(`span`,{className:`nglm-item-label`,children:e.label}),(0,A.jsx)(`span`,{className:`nglm-folder-chevron`,children:t?(0,A.jsx)(w,{}):(0,A.jsx)(C,{})})]}),t&&n&&(0,A.jsx)(`div`,{className:`nglm-folder-children`,children:(e.children||[]).map(e=>g(e))})]},e.id)};return(0,A.jsxs)(`nav`,{className:`nglm-root`,children:[(0,A.jsxs)(`div`,{className:`nglm-header`,children:[(0,A.jsx)(`div`,{className:`nglm-app-badge`,children:`Z`}),(0,A.jsx)(`span`,{className:`nglm-app-name`,children:e}),(0,A.jsx)(C,{className:`nglm-header-chevron`}),(0,A.jsx)(`button`,{type:`button`,className:`nglm-icon-btn`,"aria-label":`Collapse sidebar`,children:(0,A.jsx)(E,{})})]}),(0,A.jsx)(`div`,{className:`nglm-top-nav`,children:n.map(e=>{let t=e.icon;return(0,A.jsxs)(`button`,{type:`button`,className:`nglm-item${a===e.id?` nglm-active`:``}`,onClick:()=>s?.(e.id),children:[t&&(0,A.jsx)(`span`,{className:`nglm-item-icon`,children:(0,A.jsx)(t,{})}),(0,A.jsx)(`span`,{className:`nglm-item-label`,children:e.label})]},e.id)})}),(0,A.jsxs)(`div`,{className:`nglm-teamspace`,children:[(0,A.jsx)(`div`,{className:`nglm-ts-badge`,children:`C`}),(0,A.jsx)(`span`,{className:`nglm-ts-name`,children:t}),(0,A.jsx)(C,{className:`nglm-ts-chevron`}),(0,A.jsx)(`button`,{type:`button`,className:`nglm-icon-btn nglm-ts-more`,"aria-label":`More options`,children:(0,A.jsx)(b,{})})]}),(0,A.jsxs)(`div`,{className:`nglm-modules`,children:[(0,A.jsxs)(`div`,{className:`nglm-search-wrap`,children:[(0,A.jsx)(`span`,{className:`nglm-search-icon`,children:(0,A.jsx)(i,{})}),(0,A.jsx)(`input`,{className:`nglm-search-input`,placeholder:`Search Modules`,value:d,onChange:e=>f(e.target.value)})]}),(0,A.jsx)(`div`,{className:`nglm-module-list`,children:h.map(e=>e.type===`folder`?_(e):g(e))})]})]})}var A,j,M,N,P=e((()=>{A=r(),j=t(n(),1),O(),S(),M=[{id:`home`,label:`Home`,icon:l},{id:`analytics`,label:`Analytics`,icon:s},{id:`reports`,label:`Reports`,icon:T},{id:`my-requests`,label:`My Requests`,icon:c}],N=[{id:`contacts`,label:`Contacts`,icon:p},{id:`leads`,label:`Leads`,icon:_},{id:`deals`,label:`Deals`,icon:D},{id:`accounts`,label:`Accounts`,icon:m},{id:`forecasts`,label:`Forecasts`,icon:v},{id:`solutions`,label:`Solutions`,icon:x},{id:`products`,label:`Products`,icon:f},{id:`case-study`,label:`Case Study`,icon:u},{id:`activity`,label:`Activity`,type:`folder`,children:[{id:`calls`,label:`Calls`,icon:h},{id:`meetings`,label:`Meetings`,icon:y},{id:`tasks`,label:`Tasks`,icon:c}]},{id:`inventory`,label:`Inventory`,type:`folder`,children:[]},{id:`demo-request`,label:`Demo Request`,icon:g},{id:`expanse-tracking`,label:`Expanse Tracking`,icon:g},{id:`social-media-strategy`,label:`Social Media Strategy`,icon:d},{id:`influencer-outreach`,label:`Influencer Outreach`,icon:g},{id:`budget-allocation`,label:`Budget Allocation S...`,icon:g},{id:`brand-voice`,label:`Brand Voice and Gui...`,icon:a},{id:`projects`,label:`Projects`,type:`folder`,children:[]},{id:`cliq-channels`,label:`Cliq Channels`,type:`folder`,children:[]},{id:`bugs-ideas`,label:`Bugs and Ideas`,icon:g},{id:`strategy-presentation`,label:`Strategy Presentation`,icon:a}],k.__docgenInfo={description:``,methods:[],displayName:`NextGenLeftMenu`,props:{appName:{defaultValue:{value:`'Zoho CRM'`,computed:!1},required:!1},teamspaceName:{defaultValue:{value:`'CRM Teamspace'`,computed:!1},required:!1},topNavItems:{defaultValue:{value:`[
  { id: 'home',        label: 'Home',        icon: ModuleHome },
  { id: 'analytics',  label: 'Analytics',   icon: ModuleAnalytics },
  { id: 'reports',    label: 'Reports',     icon: ModuleReports },
  { id: 'my-requests',label: 'My Requests', icon: ModuleMyJobs },
]`,computed:!1},required:!1},modules:{defaultValue:{value:`[
  { id: 'contacts',   label: 'Contacts',   icon: ModuleContacts },
  { id: 'leads',      label: 'Leads',      icon: ModuleLeads },
  { id: 'deals',      label: 'Deals',      icon: ModuleDeals },
  { id: 'accounts',   label: 'Accounts',   icon: ModuleAccounts },
  { id: 'forecasts',  label: 'Forecasts',  icon: ModuleForecasts },
  { id: 'solutions',  label: 'Solutions',  icon: ModuleSolutions },
  { id: 'products',   label: 'Products',   icon: ModuleProducts },
  { id: 'case-study', label: 'Case Study', icon: ModuleCases },
  {
    id: 'activity', label: 'Activity', type: 'folder',
    children: [
      { id: 'calls',    label: 'Calls',    icon: ModuleActivities },
      { id: 'meetings', label: 'Meetings', icon: ModuleMeeting },
      { id: 'tasks',    label: 'Tasks',    icon: ModuleMyJobs },
    ],
  },
  { id: 'inventory', label: 'Inventory', type: 'folder', children: [] },
  { id: 'demo-request',           label: 'Demo Request',           icon: ModuleCustom },
  { id: 'expanse-tracking',       label: 'Expanse Tracking',       icon: ModuleCustom },
  { id: 'social-media-strategy',  label: 'Social Media Strategy',  icon: ModuleSocial },
  { id: 'influencer-outreach',    label: 'Influencer Outreach',    icon: ModuleCustom },
  { id: 'budget-allocation',      label: 'Budget Allocation S...',  icon: ModuleCustom },
  { id: 'brand-voice',            label: 'Brand Voice and Gui...', icon: ModuleDocs },
  { id: 'projects',               label: 'Projects',               type: 'folder', children: [] },
  { id: 'cliq-channels',          label: 'Cliq Channels',          type: 'folder', children: [] },
  { id: 'bugs-ideas',             label: 'Bugs and Ideas',         icon: ModuleCustom },
  { id: 'strategy-presentation',  label: 'Strategy Presentation',  icon: ModuleDocs },
]`,computed:!1},required:!1},defaultOpenFolders:{defaultValue:{value:`['activity']`,computed:!1},required:!1}}}}));function F({initialActiveId:e}){let[t,n]=(0,I.useState)(e);return(0,L.jsxs)(`div`,{style:{display:`flex`,height:`100vh`},children:[(0,L.jsx)(k,{activeId:t,onItemClick:n}),(0,L.jsx)(`div`,{style:{flex:1,background:`#f0f2f7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--ds-font-family-base, sans-serif)`,fontSize:14,color:`#616E88`},children:t?`Active: ${t}`:`Click a menu item`})]})}var I,L,R,z,B,V,H;e((()=>{I=t(n(),1),P(),L=r(),R={title:`Design System/Components/NextGenLeftMenu`,component:k,parameters:{layout:`fullscreen`,docs:{description:{component:`Next-generation left navigation menu for Zoho CRM. Dark navy sidebar with app header, top nav, teamspace section, and searchable module list. Supports expandable folder groups. Figma: Chinnaiya-Style-Sheet node 93673-150972.`}}},argTypes:{appName:{control:`text`},teamspaceName:{control:`text`},topNavItems:{control:!1},modules:{control:!1},activeId:{control:`text`},onItemClick:{control:!1},defaultOpenFolders:{control:!1}}},z={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(F,{})},B={name:`Active Item — Contacts`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(F,{initialActiveId:`contacts`})},V={name:`Active Item — Analytics (top nav)`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(F,{initialActiveId:`analytics`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Contacts',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="contacts" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Analytics (top nav)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="analytics" />
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithActiveItem`,`ActiveTopNav`]}))();export{V as ActiveTopNav,z as Default,B as WithActiveItem,H as __namedExportsOrder,R as default};