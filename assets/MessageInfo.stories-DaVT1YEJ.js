import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./MessageInfo-BQUrdfOl.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),i=t(),a=`The next renewal date and recurring status is in lieu with your CRM subscription. Please visit our store to know more.`,o=[`The next renewal date is aligned with your CRM subscription.`,`Recurring status will be updated automatically after each billing cycle.`,`Visit our store to review or modify your current plan.`],s={title:`Design System/Components/MessageInfo`,component:r,parameters:{layout:`padded`,docs:{description:{component:"Compact inline notification strip with a bold variant label. Five variants: Note · Warning · Success · Error · Info. Single-point: pass `message` string. Multi-point: pass `points` string array. Figma: Chinnaiya-Style-Sheet node 93673-150972."}}},argTypes:{variant:{control:`radio`,options:[`note`,`warning`,`success`,`error`,`info`],table:{defaultValue:{summary:`info`}}},message:{control:`text`},points:{control:`object`}},args:{variant:`info`,message:a}},c={},l={args:{variant:`note`,message:a}},u={args:{variant:`warning`,message:a}},d={args:{variant:`success`,message:a}},f={args:{variant:`error`,message:a}},p={args:{variant:`info`,message:a}},m={name:`Note (Multi-point)`,args:{variant:`note`,points:o}},h={name:`Warning (Multi-point)`,args:{variant:`warning`,points:o}},g={name:`Success (Multi-point)`,args:{variant:`success`,points:o}},_={name:`Error (Multi-point)`,args:{variant:`error`,points:o}},v={name:`Info (Multi-point)`,args:{variant:`info`,points:o}},y={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:780,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{margin:`0 0 10px`,fontSize:12,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`Single-point`}),(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`note`,`warning`,`success`,`error`,`info`].map(e=>(0,i.jsx)(r,{variant:e,message:a},e))})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{style:{margin:`0 0 10px`,fontSize:12,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`Multi-point`}),(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`note`,`warning`,`success`,`error`,`info`].map(e=>(0,i.jsx)(r,{variant:e,points:o},e))})]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'note',
    message: SAMPLE
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: SAMPLE
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: SAMPLE
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: SAMPLE
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: SAMPLE
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Note (Multi-point)',
  args: {
    variant: 'note',
    points: SAMPLE_POINTS
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Warning (Multi-point)',
  args: {
    variant: 'warning',
    points: SAMPLE_POINTS
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Success (Multi-point)',
  args: {
    variant: 'success',
    points: SAMPLE_POINTS
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Error (Multi-point)',
  args: {
    variant: 'error',
    points: SAMPLE_POINTS
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Info (Multi-point)',
  args: {
    variant: 'info',
    points: SAMPLE_POINTS
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    maxWidth: 780,
    fontFamily: 'var(--ds-font-family-base, sans-serif)'
  }}>
      <div>
        <p style={{
        margin: '0 0 10px',
        fontSize: 12,
        fontWeight: 600,
        color: '#616E88',
        textTransform: 'uppercase',
        letterSpacing: '0.6px'
      }}>Single-point</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          {(['note', 'warning', 'success', 'error', 'info'] as const).map(v => <MessageInfo key={v} variant={v} message={SAMPLE} />)}
        </div>
      </div>
      <div>
        <p style={{
        margin: '0 0 10px',
        fontSize: 12,
        fontWeight: 600,
        color: '#616E88',
        textTransform: 'uppercase',
        letterSpacing: '0.6px'
      }}>Multi-point</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          {(['note', 'warning', 'success', 'error', 'info'] as const).map(v => <MessageInfo key={v} variant={v} points={SAMPLE_POINTS} />)}
        </div>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Note`,`Warning`,`Success`,`Error`,`Info`,`NoteMulti`,`WarningMulti`,`SuccessMulti`,`ErrorMulti`,`InfoMulti`,`AllVariants`]}))();export{y as AllVariants,f as Error,_ as ErrorMulti,p as Info,v as InfoMulti,l as Note,m as NoteMulti,c as Playground,d as Success,g as SuccessMulti,u as Warning,h as WarningMulti,b as __namedExportsOrder,s as default};