import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9vj-xOM.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";var i,a,o,s,c,l,u=e((()=>{i=`_root_okuqd_7`,a=`_control_okuqd_8`,o=`_nativeInput_okuqd_9`,s=`_circle_okuqd_10`,c=`_labelText_okuqd_11`,l={root:i,control:a,nativeInput:o,circle:s,labelText:c}}));function d({label:e,forceState:t,id:n,className:r,...i}){let a=(0,f.useId)(),o=n??a;return(0,p.jsxs)(`label`,{className:l.root,htmlFor:o,"data-disabled":i.disabled||void 0,"data-force-state":t,children:[(0,p.jsxs)(`span`,{className:l.control,children:[(0,p.jsx)(`input`,{type:`radio`,id:o,className:l.nativeInput,...i}),(0,p.jsx)(`span`,{className:l.circle,"aria-hidden":`true`})]}),e&&(0,p.jsx)(`span`,{className:l.labelText,children:e})]})}var f,p,m=e((()=>{f=t(n(),1),u(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Label text rendered beside the radio button.`},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`}]},description:`Forces a visual state for Storybook stories and visual regression tests.
@internal not for production use`}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m(),h=r(),g={title:`Design System/Components/Radio`,component:d,parameters:{layout:`centered`,docs:{description:{component:[`15×15 radio button control. Figma: Chinnaiya Style Sheet node 31:9080.`,`States: Default, Hover, Checked, Disabled, Checked Disabled, Focus, Checked Focus.`,"Group radio buttons by sharing the same `name` prop."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text`,table:{category:`Anatomy`}},checked:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},_={args:{label:`Option A`}},v={args:{label:`Option A`,forceState:`hover`}},y={args:{label:`Option A`,defaultChecked:!0}},b={args:{label:`Option A`,forceState:`focus`}},x={name:`Checked + Focus`,args:{label:`Option A`,defaultChecked:!0,forceState:`focus`}},S={args:{label:`Option A`,disabled:!0}},C={name:`Checked + Disabled`,args:{label:`Option A`,defaultChecked:!0,disabled:!0}},w={name:`Radio Group`,render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,h.jsx)(d,{name:`locale`,label:`English (US)`,defaultChecked:!0}),(0,h.jsx)(d,{name:`locale`,label:`English (UK)`}),(0,h.jsx)(d,{name:`locale`,label:`French`}),(0,h.jsx)(d,{name:`locale`,label:`German`,disabled:!0})]})},T={name:`All States`,render:()=>(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`20px`,alignItems:`center`},children:[(0,h.jsx)(d,{label:`Default`}),(0,h.jsx)(d,{label:`Hover`,forceState:`hover`}),(0,h.jsx)(d,{label:`Focus`,forceState:`focus`}),(0,h.jsx)(d,{label:`Checked`,defaultChecked:!0}),(0,h.jsx)(d,{label:`Checked Focus`,defaultChecked:!0,forceState:`focus`}),(0,h.jsx)(d,{label:`Disabled`,disabled:!0}),(0,h.jsx)(d,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'hover'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    defaultChecked: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'focus'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Focus',
  args: {
    label: 'Option A',
    defaultChecked: true,
    forceState: 'focus'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Option A',
    defaultChecked: true,
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Radio group — mutually exclusive selection via shared name.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`All states in a grid for quick visual comparison.`,...T.parameters?.docs?.description}}},E=[`Default`,`Hover`,`Checked`,`Focus`,`CheckedFocus`,`Disabled`,`CheckedDisabled`,`Group`,`AllStates`]}))();export{T as AllStates,y as Checked,C as CheckedDisabled,x as CheckedFocus,_ as Default,S as Disabled,b as Focus,w as Group,v as Hover,E as __namedExportsOrder,g as default};