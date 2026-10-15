import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./ProgressBar-DRkcb2p4.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Design System/Components/ProgressBar`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Horizontal progress bar with optional label and footer stats. Three color variants: blue, red, green. Figma: Chinnaiya-Style-Sheet, Progress Bar page 91534-167968.`}}},argTypes:{color:{control:`radio`,options:[`blue`,`red`,`green`]},value:{control:{type:`range`,min:0,max:100,step:1}},label:{control:`text`},leftLabel:{control:`text`},rightLabel:{control:`text`},indeterminate:{control:`boolean`}},args:{value:80,color:`blue`,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,indeterminate:!1}},o={},s={args:{color:`blue`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},c={args:{color:`red`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},l={args:{color:`green`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},u={name:`In Progress (shimmer)`,args:{value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,indeterminate:!0}},d={name:`Title Only`,args:{value:65,label:`CRM Progress`,color:`blue`}},f={name:`Bar Only`,args:{value:45,color:`blue`}},p={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:480,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[{label:`Blue — Full`,color:`blue`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Red — Full`,color:`red`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Green — Full`,color:`green`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Title Only`,color:`blue`,value:65,title:`CRM Progress`},{label:`Bar Only`,color:`blue`,value:45},{label:`In Progress`,color:`blue`,value:70,title:`File Storage`,leftLabel:`7000 (70%)`,rightLabel:`3000 (30%)`,indeterminate:!0}].map(({label:e,color:t,value:n,leftLabel:a,rightLabel:o,title:s,indeterminate:c})=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e}),(0,i.jsx)(r,{value:n,color:t,label:s,leftLabel:a,rightLabel:o,indeterminate:c})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'In Progress (shimmer)',
  args: {
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)',
    indeterminate: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  args: {
    value: 65,
    label: 'CRM Progress',
    color: 'blue'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Bar Only',
  args: {
    value: 45,
    color: 'blue'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 480,
    fontFamily: 'var(--ds-font-family-base, sans-serif)'
  }}>
      {[{
      label: 'Blue — Full',
      color: 'blue' as const,
      value: 80,
      leftLabel: '10000 (80%)',
      rightLabel: '2500 (20%)',
      title: 'File Storage'
    }, {
      label: 'Red — Full',
      color: 'red' as const,
      value: 80,
      leftLabel: '10000 (80%)',
      rightLabel: '2500 (20%)',
      title: 'File Storage'
    }, {
      label: 'Green — Full',
      color: 'green' as const,
      value: 80,
      leftLabel: '10000 (80%)',
      rightLabel: '2500 (20%)',
      title: 'File Storage'
    }, {
      label: 'Title Only',
      color: 'blue' as const,
      value: 65,
      title: 'CRM Progress'
    }, {
      label: 'Bar Only',
      color: 'blue' as const,
      value: 45
    }, {
      label: 'In Progress',
      color: 'blue' as const,
      value: 70,
      title: 'File Storage',
      leftLabel: '7000 (70%)',
      rightLabel: '3000 (30%)',
      indeterminate: true
    }].map(({
      label,
      color,
      value,
      leftLabel,
      rightLabel,
      title,
      indeterminate
    }) => <div key={label}>
          <p style={{
        margin: '0 0 6px',
        fontSize: 11,
        fontWeight: 600,
        color: '#616E88',
        textTransform: 'uppercase',
        letterSpacing: '0.6px'
      }}>{label}</p>
          <ProgressBar value={value} color={color} label={title} leftLabel={leftLabel} rightLabel={rightLabel} indeterminate={indeterminate} />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Blue`,`Red`,`Green`,`InProgress`,`TitleOnly`,`BarOnly`,`AllVariants`]}))();export{p as AllVariants,f as BarOnly,s as Blue,l as Green,u as InProgress,o as Playground,c as Red,d as TitleOnly,m as __namedExportsOrder,a as default};