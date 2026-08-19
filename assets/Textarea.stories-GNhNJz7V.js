import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Textarea-BZiuXtDY.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Design System/Components/Textarea`,component:r,parameters:{layout:`centered`,docs:{description:{component:`Multi-line text area. Same visual design as Input (border, states, label layout). Figma: Chinnaiya Style Sheet node 466:47702 ("Description"). Starts at 34px (same as Input), expands to 70px on focus. Custom resize icon from crm-icon-library node 91-19.`}}},argTypes:{layout:{control:`radio`,options:[`horizontal`,`vertical`],table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}},minHeight:{control:{type:`number`,min:34,step:8},table:{category:`Layout`,defaultValue:{summary:`70`}}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`}}}},o={args:{label:`Description`,placeholder:`Enter a description…`,layout:`horizontal`,width:670}},s={name:`Horizontal layout`,args:{label:`Description`,placeholder:`Enter a description…`,layout:`horizontal`,width:670}},c={name:`Vertical layout`,args:{label:`Description`,placeholder:`Enter a description…`,layout:`vertical`,width:390}},l={args:{label:`Description`,placeholder:`Required field`,required:!0,layout:`horizontal`,width:670}},u={name:`Error`,args:{label:`Description`,value:`Invalid text`,error:!0,helperText:`Description must be at least 20 characters.`,layout:`horizontal`,width:670}},d={args:{label:`Description`,value:`This field is locked.`,disabled:!0,layout:`horizontal`,width:670}},f={name:`Read Only`,args:{label:`Description`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,readOnly:!0,layout:`horizontal`,width:670}},p={name:`With helper text`,args:{label:`Description`,placeholder:`Enter a description…`,helperText:`Max 500 characters. Markdown is not supported.`,layout:`horizontal`,width:670}},m={name:`All States`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:670},children:[(0,i.jsx)(r,{label:`Default`,placeholder:`Enter text…`,width:670}),(0,i.jsx)(r,{label:`Hover`,placeholder:`Enter text…`,width:670,forceState:`hover`}),(0,i.jsx)(r,{label:`Focus`,placeholder:`Enter text…`,width:670,forceState:`focus`}),(0,i.jsx)(r,{label:`Required`,placeholder:`Required field`,required:!0,width:670}),(0,i.jsx)(r,{label:`Disabled`,value:`This field is disabled.`,disabled:!0,width:670}),(0,i.jsx)(r,{label:`Read Only`,value:`This field is read-only.`,readOnly:!0,width:670}),(0,i.jsx)(r,{label:`Error`,value:`Bad input`,error:!0,helperText:`This field has an error.`,width:670})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Vertical layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'vertical',
    width: 390
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Required field',
    required: true,
    layout: 'horizontal',
    width: 670
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Description',
    value: 'Invalid text',
    error: true,
    helperText: 'Description must be at least 20 characters.',
    layout: 'horizontal',
    width: 670
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    value: 'This field is locked.',
    disabled: true,
    layout: 'horizontal',
    width: 670
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Description',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    readOnly: true,
    layout: 'horizontal',
    width: 670
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With helper text',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    helperText: 'Max 500 characters. Markdown is not supported.',
    layout: 'horizontal',
    width: 670
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 670
  }}>
      <Textarea label="Default" placeholder="Enter text…" width={670} />
      <Textarea label="Hover" placeholder="Enter text…" width={670} forceState="hover" />
      <Textarea label="Focus" placeholder="Enter text…" width={670} forceState="focus" />
      <Textarea label="Required" placeholder="Required field" required width={670} />
      <Textarea label="Disabled" value="This field is disabled." disabled width={670} />
      <Textarea label="Read Only" value="This field is read-only." readOnly width={670} />
      <Textarea label="Error" value="Bad input" error helperText="This field has an error." width={670} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Horizontal`,`Vertical`,`Required`,`ErrorState`,`Disabled`,`ReadOnly`,`WithHelperText`,`AllStates`]}))();export{m as AllStates,o as Default,d as Disabled,u as ErrorState,s as Horizontal,f as ReadOnly,l as Required,c as Vertical,p as WithHelperText,h as __namedExportsOrder,a as default};