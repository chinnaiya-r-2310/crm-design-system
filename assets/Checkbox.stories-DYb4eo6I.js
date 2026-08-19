import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Checkbox-CVtEhzo7.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),i=t(),a={title:`Design System/Components/Checkbox`,component:r,parameters:{layout:`centered`,docs:{description:{component:[`15×15 checkbox control. Figma: Chinnaiya Style Sheet node 15:503.`,`States: Default, Hover, Checked, Indeterminate, Disabled, Checked Disabled, Focus, Checked Focus.`,"Pass `label` to render text beside the control."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text`,table:{category:`Anatomy`}},checked:{control:`boolean`,table:{category:`State`}},indeterminate:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},o={args:{label:`Enable feature`}},s={args:{label:`Enable feature`,forceState:`hover`}},c={args:{label:`Enable feature`,defaultChecked:!0}},l={args:{label:`Enable feature`,forceState:`focus`}},u={name:`Checked + Focus`,args:{label:`Enable feature`,defaultChecked:!0,forceState:`focus`}},d={args:{label:`Select all`,indeterminate:!0}},f={args:{label:`Enable feature`,disabled:!0}},p={name:`Checked + Disabled`,args:{label:`Enable feature`,defaultChecked:!0,disabled:!0}},m={name:`No Label`,args:{}},h={name:`All States`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`20px`,alignItems:`center`},children:[(0,i.jsx)(r,{label:`Default`}),(0,i.jsx)(r,{label:`Hover`,forceState:`hover`}),(0,i.jsx)(r,{label:`Focus`,forceState:`focus`}),(0,i.jsx)(r,{label:`Checked`,defaultChecked:!0}),(0,i.jsx)(r,{label:`Checked Focus`,defaultChecked:!0,forceState:`focus`}),(0,i.jsx)(r,{label:`Indeterminate`,indeterminate:!0}),(0,i.jsx)(r,{label:`Disabled`,disabled:!0}),(0,i.jsx)(r,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature',
    forceState: 'hover'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature',
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature',
    forceState: 'focus'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Focus',
  args: {
    label: 'Enable feature',
    defaultChecked: true,
    forceState: 'focus'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    indeterminate: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Enable feature',
    defaultChecked: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'No Label',
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    alignItems: 'center'
  }}>
      <Checkbox label="Default" />
      <Checkbox label="Hover" forceState="hover" />
      <Checkbox label="Focus" forceState="focus" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Checked Focus" defaultChecked forceState="focus" />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked Disabled" defaultChecked disabled />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`All states in a grid for quick visual comparison.`,...h.parameters?.docs?.description}}},g=[`Default`,`Hover`,`Checked`,`Focus`,`CheckedFocus`,`Indeterminate`,`Disabled`,`CheckedDisabled`,`NoLabel`,`AllStates`]}))();export{h as AllStates,c as Checked,p as CheckedDisabled,u as CheckedFocus,o as Default,f as Disabled,l as Focus,s as Hover,d as Indeterminate,m as NoLabel,g as __namedExportsOrder,a as default};