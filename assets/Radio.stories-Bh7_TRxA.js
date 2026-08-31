import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Radio-COdNOHDG.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Design System/Components/Radio`,component:r,parameters:{layout:`centered`,docs:{description:{component:[`15×15 radio button control. Figma: Chinnaiya Style Sheet node 31:9080.`,`States: Default, Hover, Checked, Disabled, Checked Disabled, Focus, Checked Focus.`,"Group radio buttons by sharing the same `name` prop."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text`,table:{category:`Anatomy`}},checked:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},o={args:{label:`Option A`}},s={args:{label:`Option A`,forceState:`hover`}},c={args:{label:`Option A`,defaultChecked:!0}},l={args:{label:`Option A`,forceState:`focus`}},u={name:`Checked + Focus`,args:{label:`Option A`,defaultChecked:!0,forceState:`focus`}},d={args:{label:`Option A`,disabled:!0}},f={name:`Checked + Disabled`,args:{label:`Option A`,defaultChecked:!0,disabled:!0}},p={name:`Radio Group`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,i.jsx)(r,{name:`locale`,label:`English (US)`,defaultChecked:!0}),(0,i.jsx)(r,{name:`locale`,label:`English (UK)`}),(0,i.jsx)(r,{name:`locale`,label:`French`}),(0,i.jsx)(r,{name:`locale`,label:`German`,disabled:!0})]})},m={name:`All States`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`20px`,alignItems:`center`},children:[(0,i.jsx)(r,{label:`Default`}),(0,i.jsx)(r,{label:`Hover`,forceState:`hover`}),(0,i.jsx)(r,{label:`Focus`,forceState:`focus`}),(0,i.jsx)(r,{label:`Checked`,defaultChecked:!0}),(0,i.jsx)(r,{label:`Checked Focus`,defaultChecked:!0,forceState:`focus`}),(0,i.jsx)(r,{label:`Disabled`,disabled:!0}),(0,i.jsx)(r,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'hover'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'focus'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Focus',
  args: {
    label: 'Option A',
    defaultChecked: true,
    forceState: 'focus'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Option A',
    defaultChecked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Radio group — mutually exclusive selection via shared name.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`All states in a grid for quick visual comparison.`,...m.parameters?.docs?.description}}},h=[`Default`,`Hover`,`Checked`,`Focus`,`CheckedFocus`,`Disabled`,`CheckedDisabled`,`Group`,`AllStates`]}))();export{m as AllStates,c as Checked,f as CheckedDisabled,u as CheckedFocus,o as Default,d as Disabled,l as Focus,p as Group,s as Hover,h as __namedExportsOrder,a as default};