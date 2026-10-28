import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Radio-DNvCUEer.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Design System/Components/Radio`,component:r,parameters:{layout:`centered`,docs:{description:{component:[`15×15 radio button control. Figma: Chinnaiya Style Sheet node 31:9080.`,`States: Default, Hover, Checked, Disabled, Checked Disabled, Focus, Checked Focus.`,"Group radio buttons by sharing the same `name` prop."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text`,table:{category:`Anatomy`}},checked:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},c={args:{label:`Option A`}},l={args:{label:`Option A`,forceState:`hover`}},u={args:{label:`Option A`,defaultChecked:!0},play:async({canvasElement:e})=>{let t=o(e).getByRole(`radio`);await a(t).toBeChecked();let n=t.nextElementSibling,r=getComputedStyle(n),i=getComputedStyle(n,`::after`);await a(r.display).toBe(`grid`),await a(r.alignItems).toBe(`center`),await a(r.justifyItems).toBe(`center`),await a(i.position).toBe(`static`),await a(i.width).toBe(i.height)}},d={args:{label:`Option A`,forceState:`focus`}},f={name:`Checked + Focus`,args:{label:`Option A`,defaultChecked:!0,forceState:`focus`}},p={args:{label:`Option A`,disabled:!0}},m={name:`Checked + Disabled`,args:{label:`Option A`,defaultChecked:!0,disabled:!0}},h={name:`Radio Group`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,i.jsx)(r,{name:`locale`,label:`English (US)`,defaultChecked:!0}),(0,i.jsx)(r,{name:`locale`,label:`English (UK)`}),(0,i.jsx)(r,{name:`locale`,label:`French`}),(0,i.jsx)(r,{name:`locale`,label:`German`,disabled:!0})]})},g={name:`All States`,render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`20px`,alignItems:`center`},children:[(0,i.jsx)(r,{label:`Default`}),(0,i.jsx)(r,{label:`Hover`,forceState:`hover`}),(0,i.jsx)(r,{label:`Focus`,forceState:`focus`}),(0,i.jsx)(r,{label:`Checked`,defaultChecked:!0}),(0,i.jsx)(r,{label:`Checked Focus`,defaultChecked:!0,forceState:`focus`}),(0,i.jsx)(r,{label:`Disabled`,disabled:!0}),(0,i.jsx)(r,{label:`Checked Disabled`,defaultChecked:!0,disabled:!0})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'hover'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    defaultChecked: true
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('radio');
    await expect(input).toBeChecked();
    const circle = input.nextElementSibling as HTMLElement;
    const style = getComputedStyle(circle);
    const dot = getComputedStyle(circle, '::after');
    await expect(style.display).toBe('grid');
    await expect(style.alignItems).toBe('center');
    await expect(style.justifyItems).toBe('center');
    await expect(dot.position).toBe('static');
    await expect(dot.width).toBe(dot.height);
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    forceState: 'focus'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Focus',
  args: {
    label: 'Option A',
    defaultChecked: true,
    forceState: 'focus'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Option A',
    defaultChecked: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Radio group — mutually exclusive selection via shared name.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`All states in a grid for quick visual comparison.`,...g.parameters?.docs?.description}}},_=[`Default`,`Hover`,`Checked`,`Focus`,`CheckedFocus`,`Disabled`,`CheckedDisabled`,`Group`,`AllStates`]}))();export{g as AllStates,u as Checked,m as CheckedDisabled,f as CheckedFocus,c as Default,p as Disabled,d as Focus,h as Group,l as Hover,_ as __namedExportsOrder,s as default};