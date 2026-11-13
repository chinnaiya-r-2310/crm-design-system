import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D1rmBOiZ.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-DwuZP9xo.js";import{i as o,n as s,r as c,t as l}from"./UserSelectionModal.data-UqBEBENK.js";function u(e){let[t,n]=(0,d.useState)(!0),[r,i]=(0,d.useState)(e.value);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:()=>n(!0),children:`Select Users`}),(0,f.jsx)(`p`,{role:`status`,children:r.length?`Selected: ${r.map(e=>e.label).join(`, `)}`:`No recipients selected`}),t&&(0,f.jsx)(c,{...e,value:r,onClose:()=>n(!1),onSave:e=>{i(e),n(!1)}})]})}var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),i(),o(),s(),f=r(),p={title:`Design System/Components/User Selection Modal`,component:c,parameters:{layout:`centered`},args:{options:l,value:[]}},m={render:e=>(0,f.jsx)(u,{...e})},h={args:{value:l.filter(e=>[`user:esther`,`group:visual`,`role:administrator`,`hierarchy:sales-manager`].includes(e.value))},render:e=>(0,f.jsx)(u,{...e})},g={args:{allowAdditionalEmails:!0,value:[{value:`email:operations@example.com`,label:`operations@example.com`,kind:`email`}]},render:e=>(0,f.jsx)(u,{...e})},_={args:{maxSelections:2},render:e=>(0,f.jsx)(u,{...e})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: RECIPIENT_OPTIONS.filter(item => ['user:esther', 'group:visual', 'role:administrator', 'hierarchy:sales-manager'].includes(item.value))
  },
  render: args => <Example {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowAdditionalEmails: true,
    value: [{
      value: 'email:operations@example.com',
      label: 'operations@example.com',
      kind: 'email'
    }]
  },
  render: args => <Example {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    maxSelections: 2
  },
  render: args => <Example {...args} />
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithSelections`,`AdditionalRecipients`,`SelectionLimit`]}))();export{g as AdditionalRecipients,m as Default,_ as SelectionLimit,h as WithSelections,v as __namedExportsOrder,p as default};