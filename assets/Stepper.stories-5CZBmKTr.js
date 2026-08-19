import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";var n=e((()=>{}));function r({state:e}){return e===`completed`?(0,s.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 15 15`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsx)(`circle`,{cx:`7.5`,cy:`7.5`,r:`7.5`,fill:`#12AA67`}),(0,s.jsx)(`path`,{d:`M4.5 8.2L6 9.8L10.6 5.2`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):(0,s.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,s.jsx)(`circle`,{cx:`4`,cy:`4`,r:`4`,fill:e===`active`?`#F9C6A1`:`#CCCEDF`})})}function i({number:e,state:t}){return t===`pending`?(0,s.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 17 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`16`,height:`16`,rx:`8`,fill:`none`,stroke:`#DCDBEE`}),(0,s.jsx)(`text`,{x:`8.5`,y:`12.5`,textAnchor:`middle`,fontSize:`10`,fill:`#313949`,children:e})]}):(0,s.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 17 17`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,s.jsx)(`rect`,{width:`17`,height:`17`,rx:`8.5`,fill:`#5464F2`}),(0,s.jsx)(`text`,{x:`8.5`,y:`12.5`,textAnchor:`middle`,fontSize:`10`,fontWeight:`700`,fill:`white`,children:e})]})}function a(e,t){return e.map((e,n)=>{let r=typeof e==`string`?e:e.label,i;return i=typeof e==`object`&&e.state?e.state:t===void 0?`pending`:n<t?`completed`:n===t?`active`:`pending`,{label:r,state:i,number:n+1}})}function o({variant:e=`multi`,steps:t=[],currentStep:n}){let o=a(t,n),u=e===`single`?l:c;return(0,s.jsx)(`div`,{className:`stp-root`,children:o.map((t,n)=>{let a=n===0,c=n===o.length-1,{bg:l,border:d}=u[t.state],f=!!d,p={"--stp-bg":l,"--stp-border":d||`transparent`,zIndex:n+1,padding:f?`1.5px`:`0`};return(0,s.jsx)(`div`,{className:`stp-step${a?` stp-first`:``}${c?` stp-last`:``}`,style:p,children:(0,s.jsxs)(`div`,{className:`stp-inner`,style:a?{borderRadius:`4px 0 0 4px`}:void 0,children:[(0,s.jsx)(`span`,{className:`stp-icon-wrap`,children:e===`multi`?(0,s.jsx)(r,{state:t.state}):(0,s.jsx)(i,{number:t.number,state:t.state})}),(0,s.jsx)(`span`,{className:`stp-label${t.state===`active`?` stp-label-bold`:``}`,children:t.label})]})},n)})})}var s,c,l,u=e((()=>{s=t(),n(),c={completed:{bg:`#F1FFF4`,border:`#89D69C`},active:{bg:`#FFFAF2`,border:`#F7A973`},pending:{bg:`#F2F3FA`,border:null}},l={completed:{bg:`#E9EBFE`,border:`#5464F2`},active:{bg:`#E9EBFE`,border:`#5464F2`},pending:{bg:`#F2F3FA`,border:null}},o.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{variant:{defaultValue:{value:`'multi'`,computed:!1},required:!1},steps:{defaultValue:{value:`[]`,computed:!1},required:!1}}}})),d,f,p,m,h,g,_,v,y;e((()=>{u(),d=t(),f={title:`Design System/Components/Stepper`,component:o,parameters:{layout:`padded`,docs:{description:{component:'Chevron-style progress stepper. `variant="multi"` — green/orange/gray per state. `variant="single"` — blue monochrome. Pass `steps` as strings + `currentStep`, or as `{ label, state }` objects. Figma: Chinnaiya-Style-Sheet node 93672-150667.'}}}},p={name:`Multi Color (step 2 active)`,render:()=>(0,d.jsx)(o,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:1})},m={name:`Multi Color (step 3 active)`,render:()=>(0,d.jsx)(o,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:2})},h={name:`Multi Color (all completed)`,render:()=>(0,d.jsx)(o,{variant:`multi`,steps:[{label:`Upload`,state:`completed`},{label:`Module - File Mapping`,state:`completed`},{label:`Field Mapping`,state:`completed`},{label:`Review`,state:`completed`},{label:`Finish`,state:`completed`}]})},g={name:`Single Color (step 1 active)`,render:()=>(0,d.jsx)(o,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:0})},_={name:`Single Color (step 2 active)`,render:()=>(0,d.jsx)(o,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:1})},v={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>{let e=e=>(0,d.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e});return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,d.jsxs)(`div`,{children:[e(`Multi Color — step 2 active`),(0,d.jsx)(o,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:1})]}),(0,d.jsxs)(`div`,{children:[e(`Multi Color — step 4 active`),(0,d.jsx)(o,{variant:`multi`,steps:[`Upload`,`Module - File Mapping`,`Field Mapping`,`Review`,`Finish`],currentStep:3})]}),(0,d.jsxs)(`div`,{children:[e(`Single Color — step 1 active`),(0,d.jsx)(o,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:0})]}),(0,d.jsxs)(`div`,{children:[e(`Single Color — step 2 active`),(0,d.jsx)(o,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`],currentStep:1})]}),(0,d.jsxs)(`div`,{children:[e(`Single Color — all pending`),(0,d.jsx)(o,{variant:`single`,steps:[`Brand Registration`,`Campaign Registration`,`Payment Summary`]})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Multi Color (step 2 active)',
  render: () => <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={1} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Multi Color (step 3 active)',
  render: () => <Stepper variant="multi" steps={['Upload', 'Module - File Mapping', 'Field Mapping', 'Review', 'Finish']} currentStep={2} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Single Color (step 1 active)',
  render: () => <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={0} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Single Color (step 2 active)',
  render: () => <Stepper variant="single" steps={['Brand Registration', 'Campaign Registration', 'Payment Summary']} currentStep={1} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`MultiColor`,`MultiColorStep3`,`MultiColorAllCompleted`,`SingleColor`,`SingleColorStep2`,`AllVariants`]}))();export{v as AllVariants,p as MultiColor,h as MultiColorAllCompleted,m as MultiColorStep3,g as SingleColor,_ as SingleColorStep2,y as __namedExportsOrder,f as default};