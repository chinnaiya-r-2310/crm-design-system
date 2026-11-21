import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BasVbcg4.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./NextGenLeftMenu-B4lx0e4S.js";function o({initialActiveId:e,defaultCollapsed:t=!1}){let[n,r]=(0,s.useState)(e);return(0,c.jsxs)(`div`,{style:{display:`flex`,height:`100vh`},children:[(0,c.jsx)(a,{activeId:n,defaultCollapsed:t,onItemClick:r}),(0,c.jsx)(`div`,{style:{flex:1,background:`#f0f2f7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--ds-font-family-base, sans-serif)`,fontSize:14,color:`#616E88`},children:n?`Active: ${n}`:`Click a menu item`})]})}var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Design System/Components/NextGenLeftMenu`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Next-generation left navigation menu for Zoho CRM. Dark navy sidebar with app header, top nav, teamspace section, and searchable module list. Supports expandable folder groups. Figma: Chinnaiya-Style-Sheet node 93673-150972.`}}},argTypes:{appName:{control:`text`},teamspaceName:{control:`text`},topNavItems:{control:!1},modules:{control:!1},activeId:{control:`text`},onItemClick:{control:!1},defaultOpenFolders:{control:!1}}},u={parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{initialActiveId:`reports`,defaultCollapsed:!0})},d={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{})},f={name:`Active Item — Contacts`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{initialActiveId:`contacts`})},p={name:`Active Item — Analytics (top nav)`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{initialActiveId:`analytics`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="reports" defaultCollapsed />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Contacts',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="contacts" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Analytics (top nav)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="analytics" />
}`,...p.parameters?.docs?.source}}},m=[`CollapsedState`,`Default`,`WithActiveItem`,`ActiveTopNav`]}))();export{p as ActiveTopNav,u as CollapsedState,d as Default,f as WithActiveItem,m as __namedExportsOrder,l as default};