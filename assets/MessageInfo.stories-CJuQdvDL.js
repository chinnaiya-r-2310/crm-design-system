import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";var n=e((()=>{}));function r({variant:e=`info`,message:t,points:n}){let r=a[e]??a.info;return n&&n.length>0?(0,i.jsxs)(`div`,{className:`msg-info-root msg-info-${e} msg-info-multi`,role:`status`,children:[(0,i.jsxs)(`span`,{className:`msg-info-label`,children:[r,`:`]}),(0,i.jsx)(`ul`,{className:`msg-info-list`,children:n.map((e,t)=>(0,i.jsx)(`li`,{className:`msg-info-point`,children:e},t))})]}):(0,i.jsxs)(`div`,{className:`msg-info-root msg-info-${e}`,role:`status`,children:[(0,i.jsxs)(`span`,{className:`msg-info-label`,children:[r,`:\xA0`]}),(0,i.jsx)(`span`,{className:`msg-info-text`,children:t})]})}var i,a,o=e((()=>{i=t(),n(),a={note:`Note`,warning:`Warning`,success:`Success`,error:`Error`,info:`Info`},r.__docgenInfo={description:``,methods:[],displayName:`MessageInfo`,props:{variant:{defaultValue:{value:`'info'`,computed:!1},required:!1}}}})),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o(),s=t(),c=`The next renewal date and recurring status is in lieu with your CRM subscription. Please visit our store to know more.`,l=[`The next renewal date is aligned with your CRM subscription.`,`Recurring status will be updated automatically after each billing cycle.`,`Visit our store to review or modify your current plan.`],u={title:`Design System/Components/MessageInfo`,component:r,parameters:{layout:`padded`,docs:{description:{component:"Compact inline notification strip with a bold variant label. Five variants: Note · Warning · Success · Error · Info. Single-point: pass `message` string. Multi-point: pass `points` string array. Figma: Chinnaiya-Style-Sheet node 93673-150972."}}},argTypes:{variant:{control:`radio`,options:[`note`,`warning`,`success`,`error`,`info`],table:{defaultValue:{summary:`info`}}},message:{control:`text`},points:{control:`object`}},args:{variant:`info`,message:c}},d={},f={args:{variant:`note`,message:c}},p={args:{variant:`warning`,message:c}},m={args:{variant:`success`,message:c}},h={args:{variant:`error`,message:c}},g={args:{variant:`info`,message:c}},_={name:`Note (Multi-point)`,args:{variant:`note`,points:l}},v={name:`Warning (Multi-point)`,args:{variant:`warning`,points:l}},y={name:`Success (Multi-point)`,args:{variant:`success`,points:l}},b={name:`Error (Multi-point)`,args:{variant:`error`,points:l}},x={name:`Info (Multi-point)`,args:{variant:`info`,points:l}},S={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:780,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 10px`,fontSize:12,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`Single-point`}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`note`,`warning`,`success`,`error`,`info`].map(e=>(0,s.jsx)(r,{variant:e,message:c},e))})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 10px`,fontSize:12,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:`Multi-point`}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`note`,`warning`,`success`,`error`,`info`].map(e=>(0,s.jsx)(r,{variant:e,points:l},e))})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'note',
    message: SAMPLE
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: SAMPLE
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: SAMPLE
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: SAMPLE
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: SAMPLE
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Note (Multi-point)',
  args: {
    variant: 'note',
    points: SAMPLE_POINTS
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Warning (Multi-point)',
  args: {
    variant: 'warning',
    points: SAMPLE_POINTS
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Success (Multi-point)',
  args: {
    variant: 'success',
    points: SAMPLE_POINTS
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Error (Multi-point)',
  args: {
    variant: 'error',
    points: SAMPLE_POINTS
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Info (Multi-point)',
  args: {
    variant: 'info',
    points: SAMPLE_POINTS
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Note`,`Warning`,`Success`,`Error`,`Info`,`NoteMulti`,`WarningMulti`,`SuccessMulti`,`ErrorMulti`,`InfoMulti`,`AllVariants`]}))();export{S as AllVariants,h as Error,b as ErrorMulti,g as Info,x as InfoMulti,f as Note,_ as NoteMulti,d as Playground,m as Success,y as SuccessMulti,p as Warning,v as WarningMulti,C as __namedExportsOrder,u as default};