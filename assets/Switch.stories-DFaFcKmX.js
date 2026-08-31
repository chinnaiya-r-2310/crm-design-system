import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9u3ETtj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Switch-BZwT6qya.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Switch`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Toggle switch built on a native checkbox. Figma: Chinnaiya Style Sheet node 31:9146. Four states: Default, Checked, Disable, Checked Disable.`}}},argTypes:{label:{control:`text`,table:{category:`Content`}},labelPosition:{control:`radio`,options:[`left`,`right`],table:{category:`Layout`,defaultValue:{summary:`right`}}},checked:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}}}},l={args:{label:`Enable notifications`}},u={args:{label:`Enable notifications`,defaultChecked:!0}},d={args:{label:`Locked setting`,disabled:!0}},f={name:`Checked + Disabled`,args:{label:`Locked on`,defaultChecked:!0,disabled:!0}},p={name:`No label`,args:{}},m={name:`Label on left`,args:{label:`Dark mode`,labelPosition:`left`}},h={name:`Interactive (controlled)`,render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,fontFamily:`var(--ds-font-family-base)`},children:(0,s.jsx)(a,{label:e?`Notifications: On`:`Notifications: Off`,checked:e,onChange:e=>t(e.target.checked)})})}},g={name:`All States`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20},children:[(0,s.jsx)(a,{label:`Default (off)`}),(0,s.jsx)(a,{label:`Checked (on)`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Disabled`,disabled:!0}),(0,s.jsx)(a,{label:`Checked + Disabled`,defaultChecked:!0,disabled:!0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Locked setting',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Checked + Disabled',
  args: {
    label: 'Locked on',
    defaultChecked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'No label',
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Label on left',
  args: {
    label: 'Dark mode',
    labelPosition: 'left'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (controlled)',
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--ds-font-family-base)'
    }}>
        <Switch label={on ? 'Notifications: On' : 'Notifications: Off'} checked={on} onChange={e => setOn(e.target.checked)} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <Switch label="Default (off)" />
      <Switch label="Checked (on)" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Checked + Disabled" defaultChecked disabled />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Checked`,`Disabled`,`CheckedDisabled`,`NoLabel`,`LabelLeft`,`Interactive`,`AllStates`]}))();export{g as AllStates,u as Checked,f as CheckedDisabled,l as Default,d as Disabled,h as Interactive,m as LabelLeft,p as NoLabel,_ as __namedExportsOrder,c as default};