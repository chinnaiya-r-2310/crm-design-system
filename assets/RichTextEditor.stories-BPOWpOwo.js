import{i as e}from"./preload-helper-BTXe9M7S.js";import{n as t,t as n}from"./RichTextEditor-D0k6r9K_.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`Components/RichTextEditor`,component:n,parameters:{layout:`padded`},argTypes:{disabled:{control:`boolean`},error:{control:`boolean`},required:{control:`boolean`},placeholder:{control:`text`},label:{control:`text`},helperText:{control:`text`},minHeight:{control:{type:`number`,min:40,max:400}}}},i={args:{placeholder:`Enter text`,label:`Description`}},a={args:{label:`Notes`,required:!0,placeholder:`Enter your notes here`}},o={args:{label:`Description`,placeholder:`Click to edit`,onSave:()=>alert(`Saved`),onCancel:()=>alert(`Cancelled`)}},s={args:{label:`Description`,placeholder:`Enter description`,helperText:`Max 500 characters`}},c={args:{label:`Description`,placeholder:`Enter text`,error:!0,helperText:`This field is required`}},l={args:{label:`Description`,placeholder:`This field is disabled`,disabled:!0}},u={args:{label:`Description`,placeholder:`Enter detailed description`,minHeight:200}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text',
    label: 'Description'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    required: true,
    placeholder: 'Enter your notes here'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Click to edit',
    onSave: () => alert('Saved'),
    onCancel: () => alert('Cancelled')
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    helperText: 'Max 500 characters'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter text',
    error: true,
    helperText: 'This field is required'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'This field is disabled',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter detailed description',
    minHeight: 200
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithLabel`,`WithAjaxEdit`,`WithHelperText`,`Error`,`Disabled`,`Tall`]}))();export{i as Default,l as Disabled,c as Error,u as Tall,o as WithAjaxEdit,s as WithHelperText,a as WithLabel,d as __namedExportsOrder,r as default};