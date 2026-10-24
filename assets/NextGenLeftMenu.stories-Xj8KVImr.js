import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CULqjkQ9.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./NextGenLeftMenu-NEtnq5x9.js";function o({initialActiveId:e}){let[t,n]=(0,s.useState)(e);return(0,c.jsxs)(`div`,{style:{display:`flex`,height:`100vh`},children:[(0,c.jsx)(a,{activeId:t,onItemClick:n}),(0,c.jsx)(`div`,{style:{flex:1,background:`#f0f2f7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--ds-font-family-base, sans-serif)`,fontSize:14,color:`#616E88`},children:t?`Active: ${t}`:`Click a menu item`})]})}var s,c,l,u,d,f,p;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Design System/Components/NextGenLeftMenu`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`Next-generation left navigation menu for Zoho CRM. Dark navy sidebar with app header, top nav, teamspace section, and searchable module list. Supports expandable folder groups. Figma: Chinnaiya-Style-Sheet node 93673-150972.`}}},argTypes:{appName:{control:`text`},teamspaceName:{control:`text`},topNavItems:{control:!1},modules:{control:!1},activeId:{control:`text`},onItemClick:{control:!1},defaultOpenFolders:{control:!1}}},u={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{})},d={name:`Active Item — Contacts`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{initialActiveId:`contacts`})},f={name:`Active Item — Analytics (top nav)`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{initialActiveId:`analytics`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Contacts',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="contacts" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Active Item — Analytics (top nav)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Shell initialActiveId="analytics" />
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithActiveItem`,`ActiveTopNav`]}))();export{f as ActiveTopNav,u as Default,d as WithActiveItem,p as __namedExportsOrder,l as default};