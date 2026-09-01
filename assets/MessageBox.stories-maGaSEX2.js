import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CZl1xe7t.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./MessageBox-BfZ30fjJ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n(),1),i(),s=r(),c={position:`fixed`,top:70,left:`50%`,transform:`translateX(-50%)`,width:`max-content`},l={title:`Design System/Components/MessageBox`,component:a,decorators:[e=>(0,s.jsx)(`div`,{style:c,children:(0,s.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Inline status message with icon, text, and optional close button. Figma: Chinnaiya Style Sheet node 31:9759. Four variants: Success, Error, Warning, Info. Supports compact (message only) and expanded (title + message) layouts.`}}},argTypes:{variant:{control:`radio`,options:[`success`,`error`,`warning`,`info`],table:{category:`Appearance`,defaultValue:{summary:`info`}}},message:{control:`text`,table:{category:`Content`}},title:{control:`text`,table:{category:`Content`}}}},u={args:{variant:`success`,message:`You have successfully created the account.`,onClose:()=>{}}},d={args:{variant:`error`,message:`Something went wrong. Please try again.`,onClose:()=>{}}},f={args:{variant:`warning`,message:`Your session will expire in 5 minutes.`,onClose:()=>{}}},p={args:{variant:`info`,message:`This record was last modified 3 days ago.`,onClose:()=>{}}},m={name:`With close button`,render:()=>{let[e,t]=(0,o.useState)(!0);return e?(0,s.jsx)(a,{variant:`success`,message:`Lead saved successfully.`,onClose:()=>t(!1),style:{width:420}}):(0,s.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:14,color:`#616E88`},children:`Message dismissed.`})}},h={name:`With title`,args:{variant:`error`,title:`Submission failed`,message:`Please fix the errors below and try again.`}},g={name:`All Variants`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:440},children:[(0,s.jsx)(a,{variant:`success`,message:`You have successfully created the account.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`error`,message:`Something went wrong. Please try again.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`warning`,message:`Your session will expire in 5 minutes.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`info`,message:`This record was last modified 3 days ago.`,onClose:()=>{}})]})},_={name:`All with title`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:440},children:[(0,s.jsx)(a,{variant:`success`,title:`Account created`,message:`You have successfully created the account.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`error`,title:`Submission failed`,message:`Please fix the errors and try again.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`warning`,title:`Session expiring`,message:`Your session will expire in 5 minutes.`,onClose:()=>{}}),(0,s.jsx)(a,{variant:`info`,title:`Note`,message:`This record was last modified 3 days ago.`,onClose:()=>{}})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: 'You have successfully created the account.',
    onClose: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    message: 'Something went wrong. Please try again.',
    onClose: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    message: 'Your session will expire in 5 minutes.',
    onClose: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'This record was last modified 3 days ago.',
    onClose: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With close button',
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <MessageBox variant="success" message="Lead saved successfully." onClose={() => setVisible(false)} style={{
      width: 420
    }} /> : <span style={{
      fontFamily: 'var(--ds-font-family-base)',
      fontSize: 14,
      color: '#616E88'
    }}>
        Message dismissed.
      </span>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With title',
  args: {
    variant: 'error',
    title: 'Submission failed',
    message: 'Please fix the errors below and try again.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 440
  }}>
      <MessageBox variant="success" message="You have successfully created the account." onClose={() => {}} />
      <MessageBox variant="error" message="Something went wrong. Please try again." onClose={() => {}} />
      <MessageBox variant="warning" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <MessageBox variant="info" message="This record was last modified 3 days ago." onClose={() => {}} />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'All with title',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 440
  }}>
      <MessageBox variant="success" title="Account created" message="You have successfully created the account." onClose={() => {}} />
      <MessageBox variant="error" title="Submission failed" message="Please fix the errors and try again." onClose={() => {}} />
      <MessageBox variant="warning" title="Session expiring" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <MessageBox variant="info" title="Note" message="This record was last modified 3 days ago." onClose={() => {}} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Success`,`Error`,`Warning`,`Info`,`WithCloseButton`,`WithTitle`,`AllVariants`,`AllWithTitle`]}))();export{g as AllVariants,_ as AllWithTitle,d as Error,p as Info,u as Success,f as Warning,m as WithCloseButton,h as WithTitle,v as __namedExportsOrder,l as default};