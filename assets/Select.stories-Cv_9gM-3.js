import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CUIcsb6I.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{N as i,Yt as a,u as o}from"./Icons-CF1w1dEI.js";var s=e((()=>{}));function c({label:e,placeholder:t=`Select`,value:n,options:r=[],helperText:a,width:s=670,layout:c=`horizontal`,required:d,disabled:f,readOnly:p,error:m,forceState:h,onChange:g,id:_,style:v,columns:y}){let b=(0,u.useId)(),x=_??b,S={width:typeof s==`number`?`${s}px`:s,...v},C=f?`disabled`:p?`readonly`:m?`error`:void 0,w=n?r.find(e=>e.value===n)?.label??n:t,T=!n,E=(0,l.jsxs)(`button`,{id:x,type:`button`,className:`select-select-wrapper`,disabled:f,"aria-haspopup":`listbox`,"aria-expanded":!1,"aria-required":d,"data-required":d||void 0,...h===void 0?{}:{"data-state":h},children:[(0,l.jsx)(`span`,{className:`select-select-value`,"data-placeholder":T||void 0,children:w}),p?(0,l.jsx)(`span`,{className:`select-lock-slot`,"aria-hidden":`true`,children:(0,l.jsx)(i,{"aria-hidden":`true`})}):(0,l.jsx)(`span`,{className:`select-chevron`,"aria-hidden":`true`,children:(0,l.jsx)(o,{"aria-hidden":`true`})})]}),D=a?(0,l.jsx)(`span`,{id:`${x}-helper`,className:`select-helper-text`,children:a}):null,O=e?(0,l.jsx)(`label`,{className:`select-label`,htmlFor:x,children:e}):null;return c===`horizontal`&&e?(0,l.jsx)(`div`,{className:`select-root`,style:S,"data-variant":C,children:(0,l.jsxs)(`div`,{className:`select-form-row`,style:y?{gridTemplateColumns:y}:void 0,children:[O,(0,l.jsxs)(`div`,{className:`select-field-column`,children:[E,D]})]})}):(0,l.jsxs)(`div`,{className:`select-root select-vertical`,style:S,"data-variant":C,children:[O,E,D]})}var l,u,d=e((()=>{l=r(),u=t(n(),1),s(),a(),c.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{placeholder:{defaultValue:{value:`'Select'`,computed:!1},required:!1},options:{defaultValue:{value:`[]`,computed:!1},required:!1},width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{d(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],m={title:`Design System/Components/Select with Piclist`,component:c,args:{columns:`1fr 390px`},play:async({canvasElement:e})=>{let t=e.querySelectorAll(`.select-select-wrapper`);await f(t.length).toBeGreaterThan(0);for(let e of t)await f(e.getBoundingClientRect().width).toBe(390)},parameters:{layout:`centered`,docs:{description:{component:[`Dropdown select with the same two-column form layout as Input.`,`The trigger always shows a ChevronDown icon in a 32px right slot.`,`Displays placeholder text when no value is selected.`,`Shares all visual states with Input: hover, focus, required, disabled, error.`].join(` `)}}},argTypes:{label:{control:`text`,description:`Label in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Text shown when no option is selected`,table:{category:`Anatomy`,defaultValue:{summary:`None`}}},helperText:{control:`text`,description:`Assistive copy below the trigger`,table:{category:`Anatomy`}},value:{control:`text`,description:`Currently selected option value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% trigger. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px`,table:{category:`Layout`,defaultValue:{summary:`670`}}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Gray background, no interaction`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:`Force a visual state — for Storybook and visual tests only`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},h={args:{label:`Lead Status`,width:622,layout:`horizontal`,options:p}},g={name:`With Value`,args:{label:`Lead Status`,value:`qualified`,width:622,layout:`horizontal`,options:p}},_={name:`Hover`,args:{label:`Lead Status`,width:622,layout:`horizontal`,options:p,forceState:`hover`}},v={name:`Focus`,args:{label:`Lead Status`,width:622,layout:`horizontal`,options:p,forceState:`focus`}},y={name:`Required`,args:{label:`Lead Status`,required:!0,width:622,layout:`horizontal`,options:p}},b={name:`Disabled`,args:{label:`Lead Status`,value:`new`,disabled:!0,width:622,layout:`horizontal`,options:p}},x={name:`Read Only`,args:{label:`Lead Status`,value:`qualified`,readOnly:!0,width:622,layout:`horizontal`,options:p}},S={name:`Error`,args:{label:`Lead Status`,helperText:`Please select a lead status.`,error:!0,width:622,layout:`horizontal`,options:p}},C={name:`Full Anatomy`,args:{label:`Lead Status`,placeholder:`None`,helperText:`Select the current stage of this lead.`,required:!0,width:622,layout:`horizontal`,options:p}},w={name:`Vertical Layout`,args:{label:`Lead Status`,width:390,layout:`vertical`,options:p}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lead Status',
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...h.parameters?.docs?.source},description:{story:`Default — no value selected, shows placeholder "None".`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...g.parameters?.docs?.source},description:{story:`A value is currently selected — trigger shows the option label.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: 'Lead Status',
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'hover'
  }
}`,..._.parameters?.docs?.source},description:{story:`Hover state — border turns #797883.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: 'Lead Status',
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'focus'
  }
}`,...v.parameters?.docs?.source},description:{story:`Focus state — border turns #5464F2 with blue glow.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  args: {
    label: 'Lead Status',
    required: true,
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...y.parameters?.docs?.source},description:{story:`Required — red mandatory indicator on the left edge of the trigger.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Lead Status',
    value: 'new',
    disabled: true,
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...b.parameters?.docs?.source},description:{story:`Disabled — gray background, not interactive.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    readOnly: true,
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...x.parameters?.docs?.source},description:{story:`Read-only — muted background, lock badge replaces chevron, value is not changeable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Lead Status',
    helperText: 'Please select a lead status.',
    error: true,
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...S.parameters?.docs?.source},description:{story:`Error — border and helper text turn #FF5D5A.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Full Anatomy',
  args: {
    label: 'Lead Status',
    placeholder: 'None',
    helperText: 'Select the current stage of this lead.',
    required: true,
    width: 622,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...C.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Lead Status',
    width: 390,
    layout: 'vertical',
    options: LEAD_STATUS_OPTIONS
  }
}`,...w.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...w.parameters?.docs?.description}}},T=[`Default`,`WithValue`,`Hover`,`Focus`,`Required`,`Disabled`,`ReadOnly`,`Error`,`FullAnatomy`,`Vertical`]}))();export{h as Default,b as Disabled,S as Error,v as Focus,C as FullAnatomy,_ as Hover,x as ReadOnly,y as Required,w as Vertical,g as WithValue,T as __namedExportsOrder,m as default};