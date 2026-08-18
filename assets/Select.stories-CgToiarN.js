import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CUMN0NDL.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{D as i,et as a,f as o}from"./Icons-D2Putz0a.js";var s=e((()=>{}));function c({label:e,placeholder:t=`Select`,value:n,options:r=[],helperText:a,width:s=670,layout:c=`horizontal`,required:d,disabled:f,readOnly:p,error:m,forceState:h,onChange:g,id:_,style:v,columns:y}){let b=(0,u.useId)(),x=_??b,S={width:typeof s==`number`?`${s}px`:s,...v},C=f?`disabled`:p?`readonly`:m?`error`:void 0,w=n?r.find(e=>e.value===n)?.label??n:t,T=!n,E=(0,l.jsxs)(`button`,{id:x,type:`button`,className:`select-select-wrapper`,disabled:f,"aria-haspopup":`listbox`,"aria-expanded":!1,"aria-required":d,"data-required":d||void 0,...h===void 0?{}:{"data-state":h},children:[(0,l.jsx)(`span`,{className:`select-select-value`,"data-placeholder":T||void 0,children:w}),p?(0,l.jsx)(`span`,{className:`select-lock-slot`,"aria-hidden":`true`,children:(0,l.jsx)(i,{"aria-hidden":`true`})}):(0,l.jsx)(`span`,{className:`select-chevron`,"aria-hidden":`true`,children:(0,l.jsx)(o,{"aria-hidden":`true`})})]}),D=a?(0,l.jsx)(`span`,{id:`${x}-helper`,className:`select-helper-text`,children:a}):null,O=e?(0,l.jsx)(`label`,{className:`select-label`,htmlFor:x,children:e}):null;return c===`horizontal`&&e?(0,l.jsx)(`div`,{className:`select-root`,style:S,"data-variant":C,children:(0,l.jsxs)(`div`,{className:`select-form-row`,style:y?{gridTemplateColumns:y}:void 0,children:[O,(0,l.jsxs)(`div`,{className:`select-field-column`,children:[E,D]})]})}):(0,l.jsxs)(`div`,{className:`select-root select-vertical`,style:S,"data-variant":C,children:[O,E,D]})}var l,u,d=e((()=>{l=r(),u=t(n(),1),s(),a(),c.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{placeholder:{defaultValue:{value:`'Select'`,computed:!1},required:!1},options:{defaultValue:{value:`[]`,computed:!1},required:!1},width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{d(),f=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],p={title:`Design System/Components/Select`,component:c,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown select with the same two-column form layout as Input.`,`The trigger always shows a ChevronDown icon in a 32px right slot.`,`Displays placeholder text when no value is selected.`,`Shares all visual states with Input: hover, focus, required, disabled, error.`].join(` `)}}},argTypes:{label:{control:`text`,description:`Label in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Text shown when no option is selected`,table:{category:`Anatomy`,defaultValue:{summary:`None`}}},helperText:{control:`text`,description:`Assistive copy below the trigger`,table:{category:`Anatomy`}},value:{control:`text`,description:`Currently selected option value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% trigger. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px`,table:{category:`Layout`,defaultValue:{summary:`670`}}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Gray background, no interaction`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:`Force a visual state — for Storybook and visual tests only`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},m={args:{label:`Lead Status`,width:670,layout:`horizontal`,options:f}},h={name:`With Value`,args:{label:`Lead Status`,value:`qualified`,width:670,layout:`horizontal`,options:f}},g={name:`Hover`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:f,forceState:`hover`}},_={name:`Focus`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:f,forceState:`focus`}},v={name:`Required`,args:{label:`Lead Status`,required:!0,width:670,layout:`horizontal`,options:f}},y={name:`Disabled`,args:{label:`Lead Status`,value:`new`,disabled:!0,width:670,layout:`horizontal`,options:f}},b={name:`Read Only`,args:{label:`Lead Status`,value:`qualified`,readOnly:!0,width:670,layout:`horizontal`,options:f}},x={name:`Error`,args:{label:`Lead Status`,helperText:`Please select a lead status.`,error:!0,width:670,layout:`horizontal`,options:f}},S={name:`Full Anatomy`,args:{label:`Lead Status`,placeholder:`None`,helperText:`Select the current stage of this lead.`,required:!0,width:670,layout:`horizontal`,options:f}},C={name:`Vertical Layout`,args:{label:`Lead Status`,width:390,layout:`vertical`,options:f}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...m.parameters?.docs?.source},description:{story:`Default — no value selected, shows placeholder "None".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...h.parameters?.docs?.source},description:{story:`A value is currently selected — trigger shows the option label.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'hover'
  }
}`,...g.parameters?.docs?.source},description:{story:`Hover state — border turns #797883.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'focus'
  }
}`,..._.parameters?.docs?.source},description:{story:`Focus state — border turns #5464F2 with blue glow.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  args: {
    label: 'Lead Status',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...v.parameters?.docs?.source},description:{story:`Required — red mandatory indicator on the left edge of the trigger.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Lead Status',
    value: 'new',
    disabled: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...y.parameters?.docs?.source},description:{story:`Disabled — gray background, not interactive.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    readOnly: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...b.parameters?.docs?.source},description:{story:`Read-only — muted background, lock badge replaces chevron, value is not changeable.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Lead Status',
    helperText: 'Please select a lead status.',
    error: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...x.parameters?.docs?.source},description:{story:`Error — border and helper text turn #FF5D5A.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Full Anatomy',
  args: {
    label: 'Lead Status',
    placeholder: 'None',
    helperText: 'Select the current stage of this lead.',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...S.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Lead Status',
    width: 390,
    layout: 'vertical',
    options: LEAD_STATUS_OPTIONS
  }
}`,...C.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...C.parameters?.docs?.description}}},w=[`Default`,`WithValue`,`Hover`,`Focus`,`Required`,`Disabled`,`ReadOnly`,`Error`,`FullAnatomy`,`Vertical`]}))();export{m as Default,y as Disabled,x as Error,_ as Focus,S as FullAnatomy,g as Hover,b as ReadOnly,v as Required,C as Vertical,h as WithValue,w as __namedExportsOrder,p as default};