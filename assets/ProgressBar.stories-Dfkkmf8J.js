import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";var n=e((()=>{}));function r({value:e=0,label:t,leftLabel:n,rightLabel:r,color:o=`blue`}){let s=Math.min(100,Math.max(0,e)),c=a[o]??a.blue,l=n||r;return(0,i.jsxs)(`div`,{className:`pb-root`,children:[t&&(0,i.jsxs)(`div`,{className:`pb-bar-area`,children:[(0,i.jsx)(`span`,{className:`pb-label`,children:t}),(0,i.jsx)(`div`,{className:`pb-track`,children:(0,i.jsx)(`div`,{className:`pb-fill`,style:{width:`${s}%`,background:c}})})]}),!t&&(0,i.jsx)(`div`,{className:`pb-track`,children:(0,i.jsx)(`div`,{className:`pb-fill`,style:{width:`${s}%`,background:c}})}),l&&(0,i.jsxs)(`div`,{className:`pb-footer`,children:[(0,i.jsx)(`span`,{className:`pb-footer-left`,children:n}),(0,i.jsx)(`span`,{className:`pb-footer-right`,children:r})]})]})}var i,a,o=e((()=>{i=t(),n(),a={blue:`#5464F2`,red:`#FF5D5A`,green:`#12AA67`},r.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},color:{defaultValue:{value:`'blue'`,computed:!1},required:!1}}}})),s,c,l,u,d,f,p,m,h,g;e((()=>{o(),s=t(),c={title:`Design System/Components/ProgressBar`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Horizontal progress bar with optional label and footer stats. Three color variants: blue, red, green. Figma: Chinnaiya-Style-Sheet, Progress Bar page 91534-167968.`}}},argTypes:{color:{control:`radio`,options:[`blue`,`red`,`green`]},value:{control:{type:`range`,min:0,max:100,step:1}},label:{control:`text`},leftLabel:{control:`text`},rightLabel:{control:`text`}},args:{value:80,color:`blue`,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},l={},u={args:{color:`blue`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},d={args:{color:`red`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},f={args:{color:`green`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},p={name:`Title Only`,args:{value:65,label:`CRM Progress`,color:`blue`}},m={name:`Bar Only`,args:{value:45,color:`blue`}},h={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:480,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[{label:`Blue — Full`,color:`blue`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Red — Full`,color:`red`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Green — Full`,color:`green`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Title Only`,color:`blue`,value:65,title:`CRM Progress`},{label:`Bar Only`,color:`blue`,value:45}].map(({label:e,color:t,value:n,leftLabel:i,rightLabel:a,title:o})=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e}),(0,s.jsx)(r,{value:n,color:t,label:o,leftLabel:i,rightLabel:a})]},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  args: {
    value: 65,
    label: 'CRM Progress',
    color: 'blue'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Bar Only',
  args: {
    value: 45,
    color: 'blue'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    }].map(({
      label,
      color,
      value,
      leftLabel,
      rightLabel,
      title
    }) => <div key={label}>
          <p style={{
        margin: '0 0 6px',
        fontSize: 11,
        fontWeight: 600,
        color: '#616E88',
        textTransform: 'uppercase',
        letterSpacing: '0.6px'
      }}>{label}</p>
          <ProgressBar value={value} color={color} label={title} leftLabel={leftLabel} rightLabel={rightLabel} />
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Blue`,`Red`,`Green`,`TitleOnly`,`BarOnly`,`AllVariants`]}))();export{h as AllVariants,m as BarOnly,u as Blue,f as Green,l as Playground,d as Red,p as TitleOnly,g as __namedExportsOrder,c as default};