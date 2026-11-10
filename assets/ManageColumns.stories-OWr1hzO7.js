import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-8WWHWaqa.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{i,n as a,r as o,t as s}from"./crm-sample-data-CDsKyueg.js";function c({variant:e,title:t}){let[n,r]=(0,l.useState)(h);return(0,u.jsx)(o,{variant:e,title:t,fields:e===`withTitle`?m:f,selected:n,onChange:r,onSave:()=>{},onCancel:()=>{},onOpenPage:()=>{}})}var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l=t(n(),1),i(),a(),u=r(),d=(e,t,n)=>s(e).map(e=>({key:e.key,label:e.label,scope:n,module:t})),f=d(`Leads`,`Leads`,`lead`),p=[...d(`Quotes`,`Quotes`,`quote`),...d(`Products`,`Products`,`quote`)],m=[...f,...p],h=[`Last_Name`,`First_Name`,`Annual_Revenue`,`Lead_Status`,`Lead_Source`,`Discount`,`Unit_Price`],g={title:`Design System/Components/Manage Columns`,component:o,parameters:{layout:`centered`,docs:{description:{component:`Choose and order the columns shown in a list or report. Variants: modal (search, Cancel/Save), reorder (drag handles), withTitle (scope dropdown, selected count, module groups) and page (no footer, open-in-page icon).`}}},argTypes:{variant:{control:`inline-radio`,options:[`modal`,`reorder`,`withTitle`,`page`]},title:{control:`text`}},args:{variant:`modal`,title:`Manage Columns`},render:e=>(0,u.jsx)(c,{...e})},_={args:{variant:`modal`}},v={args:{variant:`reorder`}},y={args:{variant:`withTitle`}},b={args:{variant:`page`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'modal'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'reorder'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'withTitle'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...b.parameters?.docs?.source}}},x=[`Modal`,`FieldReorder`,`WithTitle`,`Page`]}))();export{v as FieldReorder,_ as Modal,b as Page,y as WithTitle,x as __namedExportsOrder,g as default};