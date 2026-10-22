import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Stepper-BjSaR0vw.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Design System/Components/Stepper`,component:r,parameters:{layout:`padded`,docs:{description:{component:'Chevron-style progress stepper. `variant="multi"` — green/orange/gray per state. `variant="single"` — blue monochrome. Pass `steps` as strings + `currentStep`, or as `{ label, state }` objects. Figma: Chinnaiya-Style-Sheet node 93672-150667.'}}}},o={name:`Multi Color (step 2 active)`,render:()=>(0,i.jsx)(r,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:1})},s={name:`Multi Color (step 3 active)`,render:()=>(0,i.jsx)(r,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:2})},c={name:`Multi Color (all completed)`,render:()=>(0,i.jsx)(r,{variant:`multi`,steps:[{label:`Upload`,state:`completed`},{label:`Module - File Mapping`,state:`completed`},{label:`Field Mapping`,state:`completed`},{label:`Review`,state:`completed`},{label:`Finish`,state:`completed`}]})},l={name:`Single Color (step 1 active)`,render:()=>(0,i.jsx)(r,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:0})},u={name:`Single Color (step 2 active)`,render:()=>(0,i.jsx)(r,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:1})},d={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>{let e=e=>(0,i.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e});return(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,i.jsxs)(`div`,{children:[e(`Multi Color — step 2 active`),(0,i.jsx)(r,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:1})]}),(0,i.jsxs)(`div`,{children:[e(`Multi Color — step 4 active`),(0,i.jsx)(r,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:3})]}),(0,i.jsxs)(`div`,{children:[e(`Single Color — step 1 active`),(0,i.jsx)(r,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:0})]}),(0,i.jsxs)(`div`,{children:[e(`Single Color — step 2 active`),(0,i.jsx)(r,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:1})]}),(0,i.jsxs)(`div`,{children:[e(`Single Color — all pending`),(0,i.jsx)(r,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`]})]})]})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Multi Color (step 2 active)',
  render: () => <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={1} />
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Multi Color (step 3 active)',
  render: () => <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={2} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Multi Color (all completed)',
  render: () => <Stepper variant="multi" steps={[{
    label: 'Upload',
    state: 'completed'
  }, {
    label: 'Module - File Mapping',
    state: 'completed'
  }, {
    label: 'Field Mapping',
    state: 'completed'
  }, {
    label: 'Review',
    state: 'completed'
  }, {
    label: 'Finish',
    state: 'completed'
  }]} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Single Color (step 1 active)',
  render: () => <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={0} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Single Color (step 2 active)',
  render: () => <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={1} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const label = (text: string) => <p style={{
      margin: '0 0 8px',
      fontSize: 11,
      fontWeight: 600,
      color: '#616E88',
      textTransform: 'uppercase',
      letterSpacing: '0.6px'
    }}>
        {text}
      </p>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      fontFamily: 'var(--ds-font-family-base, sans-serif)'
    }}>
        <div>
          {label('Multi Color — step 2 active')}
          <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={1} />
        </div>
        <div>
          {label('Multi Color — step 4 active')}
          <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={3} />
        </div>
        <div>
          {label('Single Color — step 1 active')}
          <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={0} />
        </div>
        <div>
          {label('Single Color — step 2 active')}
          <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={1} />
        </div>
        <div>
          {label('Single Color — all pending')}
          <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f=[`MultiColor`,`MultiColorStep3`,`MultiColorAllCompleted`,`SingleColor`,`SingleColorStep2`,`AllVariants`]}))();export{d as AllVariants,o as MultiColor,c as MultiColorAllCompleted,s as MultiColorStep3,l as SingleColor,u as SingleColorStep2,f as __namedExportsOrder,a as default};