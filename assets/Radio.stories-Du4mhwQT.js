import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BwyBN0p_.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";var i=e((()=>{}));function a({label:e,forceState:t,id:n,className:r,...i}){let a=(0,s.useId)(),c=n??a;return(0,o.jsxs)(`label`,{className:`radio-root`,htmlFor:c,"data-disabled":i.disabled||void 0,"data-force-state":t,children:[(0,o.jsxs)(`span`,{className:`radio-control`,children:[(0,o.jsx)(`input`,{type:`radio`,id:c,className:`radio-native-input`,...i}),(0,o.jsx)(`span`,{className:`radio-circle`,"aria-hidden":`true`})]}),e&&(0,o.jsx)(`span`,{className:`radio-label-text`,children:e})]})}var o,s,c=e((()=>{o=r(),s=t(n(),1),i(),a.__docgenInfo={description:``,methods:[],displayName:`Radio`}})),l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c(),l=r(),u={title:`Design System/Components/Radio`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`15×15 radio button control. Figma: Chinnaiya Style Sheet node 31:9080.`,`States: Default, Hover, Checked, Disabled, Checked Disabled, Focus, Checked Focus.`,"Group radio buttons by sharing the same `name` prop."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text`,table:{category:`Anatomy`}},checked:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},d={args:{label:`Option A`}},f={args:{label:`Option A`,forceState:`hover`}},p={args:{label:`Option A`,defaultChecked:!0}},m={args:{label:`Option A`,forceState:`focus`}},h={name:`Checked + Focus`,args:{label:`Option A`,defaultChecked:!0,forceState:`focus`}},g={args:{label:`Option A`,disabled:!0}},_={name:`Checked + Disabled`,args:{label:`Option A`,defaultChecked:!0,disabled:!0}},v={name:`Radio Group`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,l.jsx)(a,{name:`locale`,label:`English (US)`,defaultChecked:!0}),(0,l.jsx)(a,{name:`locale`,label:`English (UK)`}),(0,l.jsx)(a,{name:`locale`,label:`French`}),(0,l.jsx)(a,{name:`locale`,label:`German`,disabled:!0})]})},y={name:`All States`,render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`20px`,alignItems:`center`},children:[(0,l.jsx)(a,{label:`Default`}),(0,l.jsx)(a,{label:`Hover`,forceState:`hover`}),(0,l.jsx)(a,{label:`Focus`,forceState:`focus`}),(0,l.jsx)(a,{label:`Checked`,defaultChecked:!0}),(0,l.jsx)(a,{label:`Checked Focus`,defaultChecked:!0,forceState:`focus`}),(0,l.jsx)(a,{label:`Disabled`,disabled:!0}),(0,l.jsx)(a,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'hover'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    defaultChecked: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'focus'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Focus',
  args: {
    label: 'Option A',
    defaultChecked: true,
    forceState: 'focus'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Option A',
    defaultChecked: true,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Radio Group',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Radio name="locale" label="English (US)" defaultChecked />
      <Radio name="locale" label="English (UK)" />
      <Radio name="locale" label="French" />
      <Radio name="locale" label="German" disabled />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Radio group — mutually exclusive selection via shared name.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    alignItems: 'center'
  }}>
      <Radio label="Default" />
      <Radio label="Hover" forceState="hover" />
      <Radio label="Focus" forceState="focus" />
      <Radio label="Checked" defaultChecked />
      <Radio label="Checked Focus" defaultChecked forceState="focus" />
      <Radio label="Disabled" disabled />
      <Radio label="Checked Disabled" defaultChecked disabled />
    </div>
}`,...y.parameters?.docs?.source},description:{story:`All states in a grid for quick visual comparison.`,...y.parameters?.docs?.description}}},b=[`Default`,`Hover`,`Checked`,`Focus`,`CheckedFocus`,`Disabled`,`CheckedDisabled`,`Group`,`AllStates`]}))();export{y as AllStates,p as Checked,_ as CheckedDisabled,h as CheckedFocus,d as Default,g as Disabled,m as Focus,v as Group,f as Hover,b as __namedExportsOrder,u as default};