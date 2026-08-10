import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CpPujnL0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{S as i,_ as a,o}from"./Icons-DnNy9Q3F.js";var s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{s=`_root_oelis_6`,c=`_vertical_oelis_30`,l=`_formRow_oelis_7`,u=`_fieldColumn_oelis_9`,d=`_label_oelis_8`,f=`_selectWrapper_oelis_10`,p=`_selectValue_oelis_12`,m=`_chevron_oelis_13`,h=`_lockSlot_oelis_174`,g=`_helperText_oelis_14`,_={root:s,vertical:c,formRow:l,fieldColumn:u,label:d,selectWrapper:f,selectValue:p,chevron:m,lockSlot:h,helperText:g}}));function y({label:e,placeholder:t=`Select`,value:n,options:r=[],helperText:i,width:s=670,layout:c=`horizontal`,required:l,disabled:u,readOnly:d,error:f,forceState:p,onChange:m,id:h,style:g,columns:v}){let y=(0,b.useId)(),S=h??y,C={width:typeof s==`number`?`${s}px`:s,...g},w=u?`disabled`:d?`readonly`:f?`error`:void 0,T=n?r.find(e=>e.value===n)?.label??n:t,E=!n,D=p===void 0?{}:{"data-state":p},O=(0,x.jsxs)(`button`,{id:S,type:`button`,className:_.selectWrapper,disabled:u,"aria-haspopup":`listbox`,"aria-expanded":!1,"aria-required":l,"data-required":l||void 0,...D,children:[(0,x.jsx)(`span`,{className:_.selectValue,"data-placeholder":E||void 0,children:T}),d?(0,x.jsx)(`span`,{className:_.lockSlot,"aria-hidden":`true`,children:(0,x.jsx)(a,{"aria-hidden":`true`})}):(0,x.jsx)(`span`,{className:_.chevron,"aria-hidden":`true`,children:(0,x.jsx)(o,{"aria-hidden":`true`})})]}),k=i?(0,x.jsx)(`span`,{id:`${S}-helper`,className:_.helperText,children:i}):null,A=e?(0,x.jsx)(`label`,{className:_.label,htmlFor:S,children:e}):null;if(c===`horizontal`&&e){let e=v?{gridTemplateColumns:v}:void 0;return(0,x.jsx)(`div`,{className:_.root,style:C,"data-variant":w,children:(0,x.jsxs)(`div`,{className:_.formRow,style:e,children:[A,(0,x.jsxs)(`div`,{className:_.fieldColumn,children:[O,k]})]})})}return(0,x.jsxs)(`div`,{className:`${_.root} ${_.vertical}`,style:C,"data-variant":w,children:[A,O,k]})}var b,x,S=e((()=>{b=t(n(),1),v(),i(),x=r(),y.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{label:{required:!1,tsType:{name:`string`},description:`Label text in the left column (horizontal) or above (vertical).`},placeholder:{required:!1,tsType:{name:`string`},description:`Text shown when no value is selected. @default 'Select'`,defaultValue:{value:`'Select'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Currently selected option value.`},options:{required:!1,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:`Available options to display in the trigger.`,defaultValue:{value:`[]`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:`Assistive copy rendered below the trigger.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Total component width in px. @default 670`,defaultValue:{value:`670`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Form layout. @default 'horizontal'`,defaultValue:{value:`'horizontal'`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:`Shows the red mandatory indicator on the left edge of the trigger.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled — gray background, no interaction.`},readOnly:{required:!1,tsType:{name:`boolean`},description:`Read-only — displays the value with a lock badge; not interactive.`},error:{required:!1,tsType:{name:`boolean`},description:`Error state — border and helper text turn #FF5D5A.`},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`}]},description:`Forces a visual state for Storybook stories and visual regression tests.
@internal not intended for production use`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the user selects an option. Placeholder for future dropdown.`},id:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},columns:{required:!1,tsType:{name:`string`},description:`Override grid-template-columns for horizontal layout.
@default '3fr 7fr'`}}}})),C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{S(),C=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],w={title:`Design System/Components/Select`,component:y,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown select with the same two-column form layout as Input.`,`The trigger always shows a ChevronDown icon in a 32px right slot.`,`Displays placeholder text when no value is selected.`,`Shares all visual states with Input: hover, focus, required, disabled, error.`].join(` `)}}},argTypes:{label:{control:`text`,description:`Label in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Text shown when no option is selected`,table:{category:`Anatomy`,defaultValue:{summary:`None`}}},helperText:{control:`text`,description:`Assistive copy below the trigger`,table:{category:`Anatomy`}},value:{control:`text`,description:`Currently selected option value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% trigger. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px`,table:{category:`Layout`,defaultValue:{summary:`670`}}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Gray background, no interaction`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:`Force a visual state — for Storybook and visual tests only`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},T={args:{label:`Lead Status`,width:670,layout:`horizontal`,options:C}},E={name:`With Value`,args:{label:`Lead Status`,value:`qualified`,width:670,layout:`horizontal`,options:C}},D={name:`Hover`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:C,forceState:`hover`}},O={name:`Focus`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:C,forceState:`focus`}},k={name:`Required`,args:{label:`Lead Status`,required:!0,width:670,layout:`horizontal`,options:C}},A={name:`Disabled`,args:{label:`Lead Status`,value:`new`,disabled:!0,width:670,layout:`horizontal`,options:C}},j={name:`Read Only`,args:{label:`Lead Status`,value:`qualified`,readOnly:!0,width:670,layout:`horizontal`,options:C}},M={name:`Error`,args:{label:`Lead Status`,helperText:`Please select a lead status.`,error:!0,width:670,layout:`horizontal`,options:C}},N={name:`Full Anatomy`,args:{label:`Lead Status`,placeholder:`None`,helperText:`Select the current stage of this lead.`,required:!0,width:670,layout:`horizontal`,options:C}},P={name:`Vertical Layout`,args:{label:`Lead Status`,width:390,layout:`vertical`,options:C}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...T.parameters?.docs?.source},description:{story:`Default — no value selected, shows placeholder "None".`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...E.parameters?.docs?.source},description:{story:`A value is currently selected — trigger shows the option label.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'hover'
  }
}`,...D.parameters?.docs?.source},description:{story:`Hover state — border turns #797883.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'focus'
  }
}`,...O.parameters?.docs?.source},description:{story:`Focus state — border turns #5464F2 with blue glow.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  args: {
    label: 'Lead Status',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...k.parameters?.docs?.source},description:{story:`Required — red mandatory indicator on the left edge of the trigger.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Lead Status',
    value: 'new',
    disabled: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...A.parameters?.docs?.source},description:{story:`Disabled — gray background, not interactive.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    readOnly: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...j.parameters?.docs?.source},description:{story:`Read-only — muted background, lock badge replaces chevron, value is not changeable.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Lead Status',
    helperText: 'Please select a lead status.',
    error: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...M.parameters?.docs?.source},description:{story:`Error — border and helper text turn #FF5D5A.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Lead Status',
    width: 390,
    layout: 'vertical',
    options: LEAD_STATUS_OPTIONS
  }
}`,...P.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...P.parameters?.docs?.description}}},F=[`Default`,`WithValue`,`Hover`,`Focus`,`Required`,`Disabled`,`ReadOnly`,`Error`,`FullAnatomy`,`Vertical`]}))();export{T as Default,A as Disabled,M as Error,O as Focus,N as FullAnatomy,D as Hover,j as ReadOnly,k as Required,P as Vertical,E as WithValue,F as __namedExportsOrder,w as default};