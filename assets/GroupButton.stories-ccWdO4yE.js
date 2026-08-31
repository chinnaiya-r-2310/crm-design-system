import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9u3ETtj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./GroupButton-CVCtEdRz.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/GroupButton`,component:a,parameters:{layout:`centered`,docs:{description:{component:`A row of labelled toggle buttons. Supports single-select and multi-select modes. Commonly used for day-of-week pickers and similar compact option groups.`}}},argTypes:{multiSelect:{control:`boolean`,table:{category:`Behaviour`}},showBadge:{control:`boolean`,table:{category:`Appearance`}},disabled:{control:`boolean`,table:{category:`State`}},itemWidth:{control:`number`,table:{category:`Layout`}},itemHeight:{control:`number`,table:{category:`Layout`}},gap:{control:`number`,table:{category:`Layout`}}}},l=[{value:`Mon`,label:`Mon`},{value:`Tue`,label:`Tue`},{value:`Wed`,label:`Wed`},{value:`Thu`,label:`Thu`},{value:`Fri`,label:`Fri`},{value:`Sat`,label:`Sat`},{value:`Sun`,label:`Sun`}],u={name:`Multi-select (Day Picker)`,render:()=>{let[e,t]=(0,o.useState)([`Mon`,`Wed`]);return(0,s.jsx)(a,{options:l,value:e,onChange:e=>t(e),multiSelect:!0,showBadge:!0})}},d={name:`Single-select`,render:()=>{let[e,t]=(0,o.useState)(`Tue`);return(0,s.jsx)(a,{options:l,value:e,onChange:e=>t(e),multiSelect:!1,showBadge:!1})}},f={name:`Multi-select, no badge`,render:()=>{let[e,t]=(0,o.useState)([`Fri`,`Sat`,`Sun`]);return(0,s.jsx)(a,{options:l,value:e,onChange:e=>t(e),multiSelect:!0,showBadge:!1})}},p={name:`Disabled`,render:()=>(0,s.jsx)(a,{options:l,value:[`Mon`,`Fri`],multiSelect:!0,disabled:!0})},m={name:`Custom options`,render:()=>{let e=[{value:`q1`,label:`Q1`},{value:`q2`,label:`Q2`},{value:`q3`,label:`Q3`},{value:`q4`,label:`Q4`}],[t,n]=(0,o.useState)([`q1`]);return(0,s.jsx)(a,{options:e,value:t,onChange:e=>n(e),multiSelect:!0,itemWidth:60})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Multi-select (Day Picker)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['Mon', 'Wed']);
    return <GroupButton options={DAYS} value={selected} onChange={v => setSelected(v as string[])} multiSelect showBadge />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Single-select',
  render: () => {
    const [selected, setSelected] = useState('Tue');
    return <GroupButton options={DAYS} value={selected} onChange={v => setSelected(v as string)} multiSelect={false} showBadge={false} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Multi-select, no badge',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['Fri', 'Sat', 'Sun']);
    return <GroupButton options={DAYS} value={selected} onChange={v => setSelected(v as string[])} multiSelect showBadge={false} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <GroupButton options={DAYS} value={['Mon', 'Fri']} multiSelect disabled />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Custom options',
  render: () => {
    const opts = [{
      value: 'q1',
      label: 'Q1'
    }, {
      value: 'q2',
      label: 'Q2'
    }, {
      value: 'q3',
      label: 'Q3'
    }, {
      value: 'q4',
      label: 'Q4'
    }];
    const [selected, setSelected] = useState<string[]>(['q1']);
    return <GroupButton options={opts} value={selected} onChange={v => setSelected(v as string[])} multiSelect itemWidth={60} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`DayPicker`,`SingleSelect`,`NoBadge`,`Disabled`,`CustomOptions`]}))();export{m as CustomOptions,u as DayPicker,p as Disabled,f as NoBadge,d as SingleSelect,h as __namedExportsOrder,c as default};