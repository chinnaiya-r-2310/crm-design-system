import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";var n=e((()=>{}));function r({pct:e,fillColor:t,indeterminate:n}){return(0,a.jsx)(`div`,{className:`pb-track`,children:(0,a.jsx)(`div`,{className:`pb-fill${n?` pb-fill-indeterminate`:``}`,style:n?{}:{width:`${e}%`,background:t}})})}function i({value:e=0,label:t,leftLabel:n,rightLabel:i,color:s=`blue`,indeterminate:c=!1}){let l=Math.min(100,Math.max(0,e)),u=o[s]??o.blue;return(0,a.jsxs)(`div`,{className:`pb-root`,children:[t&&(0,a.jsxs)(`div`,{className:`pb-bar-area`,children:[(0,a.jsx)(`span`,{className:`pb-label`,children:t}),(0,a.jsx)(r,{pct:l,fillColor:u,indeterminate:c})]}),!t&&(0,a.jsx)(r,{pct:l,fillColor:u,indeterminate:c}),(n||i)&&(0,a.jsxs)(`div`,{className:`pb-footer`,children:[(0,a.jsx)(`span`,{className:`pb-footer-left`,children:n}),(0,a.jsx)(`span`,{className:`pb-footer-right`,children:i})]})]})}var a,o,s=e((()=>{a=t(),n(),o={blue:`#5464F2`,red:`#FF5D5A`,green:`#12AA67`},i.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{defaultValue:{value:`0`,computed:!1},required:!1},color:{defaultValue:{value:`'blue'`,computed:!1},required:!1},indeterminate:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),c,l,u,d,f,p,m,h,g,_,v;e((()=>{s(),c=t(),l={title:`Design System/Components/ProgressBar`,component:i,parameters:{layout:`padded`,docs:{description:{component:`Horizontal progress bar with optional label and footer stats. Three color variants: blue, red, green. Figma: Chinnaiya-Style-Sheet, Progress Bar page 91534-167968.`}}},argTypes:{color:{control:`radio`,options:[`blue`,`red`,`green`]},value:{control:{type:`range`,min:0,max:100,step:1}},label:{control:`text`},leftLabel:{control:`text`},rightLabel:{control:`text`},indeterminate:{control:`boolean`}},args:{value:80,color:`blue`,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,indeterminate:!1}},u={},d={args:{color:`blue`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},f={args:{color:`red`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},p={args:{color:`green`,value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`}},m={name:`In Progress (shimmer)`,args:{value:80,label:`File Storage`,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,indeterminate:!0}},h={name:`Title Only`,args:{value:65,label:`CRM Progress`,color:`blue`}},g={name:`Bar Only`,args:{value:45,color:`blue`}},_={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:480,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[{label:`Blue — Full`,color:`blue`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Red — Full`,color:`red`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Green — Full`,color:`green`,value:80,leftLabel:`10000 (80%)`,rightLabel:`2500 (20%)`,title:`File Storage`},{label:`Title Only`,color:`blue`,value:65,title:`CRM Progress`},{label:`Bar Only`,color:`blue`,value:45},{label:`In Progress`,color:`blue`,value:70,title:`File Storage`,leftLabel:`7000 (70%)`,rightLabel:`3000 (30%)`,indeterminate:!0}].map(({label:e,color:t,value:n,leftLabel:r,rightLabel:a,title:o,indeterminate:s})=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e}),(0,c.jsx)(i,{value:n,color:t,label:o,leftLabel:r,rightLabel:a,indeterminate:s})]},e))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'In Progress (shimmer)',
  args: {
    value: 80,
    label: 'File Storage',
    leftLabel: '10000 (80%)',
    rightLabel: '2500 (20%)',
    indeterminate: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  args: {
    value: 65,
    label: 'CRM Progress',
    color: 'blue'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Bar Only',
  args: {
    value: 45,
    color: 'blue'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Blue`,`Red`,`Green`,`InProgress`,`TitleOnly`,`BarOnly`,`AllVariants`]}))();export{_ as AllVariants,g as BarOnly,d as Blue,p as Green,m as InProgress,u as Playground,f as Red,h as TitleOnly,v as __namedExportsOrder,l as default};