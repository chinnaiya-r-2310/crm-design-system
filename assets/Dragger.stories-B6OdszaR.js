import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-8WWHWaqa.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Dragger-B384Do1h.js";function o({initial:e,gripperOnHover:t}){let[n,r]=(0,s.useState)(e);return(0,c.jsx)(`div`,{style:{width:260,padding:16,background:`var(--ds-bg-common-white)`,border:`1px solid var(--ds-border-lighter)`,borderRadius:8},children:(0,c.jsx)(a,{items:n,onChange:r,gripperOnHover:t})})}var s,c,l,u,d,f,p,m;e((()=>{s=t(n(),1),i(),c=r(),l=[`Lead Name`,`Email`,`Company`,`Created Time`,`Lead Owner`,`First Name`,`Last Name`],u={title:`Design System/Components/Dragger`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Reorderable list. Drag an entity by its handle: a copy follows the pointer vertically, the empty slot stays grey and moves with the pick, and the other entities glide to their new positions. The dropped entity flashes yellow briefly. The drag handle is shown only when there is more than one entity.`}}},argTypes:{gripperOnHover:{control:`boolean`,description:`Show the drag handle only while the entity is hovered.`}},args:{gripperOnHover:!1},render:e=>(0,c.jsx)(o,{initial:l,gripperOnHover:e.gripperOnHover})},d={args:{gripperOnHover:!0}},f={args:{gripperOnHover:!0}},p={args:{gripperOnHover:!1},render:e=>(0,c.jsx)(o,{initial:[`Lead Source`],gripperOnHover:e.gripperOnHover})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    gripperOnHover: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    gripperOnHover: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    gripperOnHover: false
  },
  render: args => <DraggerDemo initial={['Lead Source']} gripperOnHover={args.gripperOnHover} />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`GripperOnHover`,`SingleEntity`]}))();export{d as Default,f as GripperOnHover,p as SingleEntity,m as __namedExportsOrder,u as default};