import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CpPujnL0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{S as i,_ as a,g as o}from"./Icons-DnNy9Q3F.js";var s,c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{s=`_root_xkmz3_7`,c=`_vertical_xkmz3_17`,l=`_formRow_xkmz3_8`,u=`_fieldColumn_xkmz3_10`,d=`_label_xkmz3_9`,f=`_inputWrapper_xkmz3_11`,p=`_suffixSlot_xkmz3_192`,m=`_input_xkmz3_11`,h=`_helperText_xkmz3_13`,g=`_datetimeParts_xkmz3_326`,_=`_datetimeDivider_xkmz3_338`,v={root:s,vertical:c,formRow:l,fieldColumn:u,label:d,inputWrapper:f,suffixSlot:p,input:m,helperText:h,datetimeParts:g,datetimeDivider:_}}));function b({label:e,helperText:t,width:n=670,type:r=`text`,layout:i=`horizontal`,suffix:s,columns:c,error:l,autoUpdate:u,forceState:d,id:f,style:p,className:m,readOnly:h,timeValue:g,onTimeChange:_,...y}){let b=(0,x.useId)(),C=f??b,w=r===`lookup`,T=r===`date`,E=r===`datetime`,D={width:typeof n==`number`?`${n}px`:n,...p},O=y.disabled?`disabled`:h?`readonly`:l?`error`:u?`auto-update`:void 0,k=d===void 0?{}:{"data-state":d},A=w||T||E?`text`:r,j=(0,S.jsx)(a,{"aria-hidden":`true`}),M=h||w&&y.disabled?j:w?(0,S.jsx)(o,{"aria-hidden":`true`}):s,N=w&&!y.placeholder?`Select`:(T||E)&&!y.placeholder?`DD/MM/YYYY`:y.placeholder,P=E?(0,S.jsxs)(`div`,{className:v.datetimeParts,"aria-label":`Date and time`,children:[(0,S.jsx)(`input`,{id:C,type:`text`,className:v.input,placeholder:`DD/MM/YYYY`,"aria-label":`Date`,"aria-describedby":t?`${C}-helper`:void 0,value:y.value,onChange:y.onChange,readOnly:h,disabled:y.disabled,required:y.required}),(0,S.jsx)(`span`,{className:v.datetimeDivider,"aria-hidden":`true`}),(0,S.jsx)(`input`,{type:`text`,className:v.input,placeholder:`HH:MM`,"aria-label":`Time`,value:g,onChange:_,readOnly:h,disabled:y.disabled})]}):(0,S.jsx)(`input`,{id:C,type:A,className:v.input,"aria-describedby":t?`${C}-helper`:void 0,readOnly:w||h,...y,placeholder:N,onWheel:A===`number`?e=>e.currentTarget.blur():y.onWheel}),F=t?(0,S.jsx)(`span`,{id:`${C}-helper`,className:v.helperText,children:t}):null,I=e?(0,S.jsx)(`label`,{className:v.label,htmlFor:C,onClick:e=>e.preventDefault(),children:e}):null,L=(0,S.jsxs)(`div`,{className:v.inputWrapper,"data-required":y.required||void 0,"data-has-suffix":M?!0:void 0,"data-type":w?`lookup`:void 0,...k,children:[P,M&&(0,S.jsx)(`span`,{className:v.suffixSlot,"aria-hidden":`true`,children:M})]});if(i===`horizontal`&&e){let e=c?{gridTemplateColumns:c}:void 0;return(0,S.jsx)(`div`,{className:v.root,style:D,"data-variant":O,"data-type":w?`lookup`:void 0,children:(0,S.jsxs)(`div`,{className:v.formRow,style:e,children:[I,(0,S.jsxs)(`div`,{className:v.fieldColumn,children:[L,F]})]})})}return(0,S.jsxs)(`div`,{className:`${v.root} ${v.vertical}`,style:D,"data-variant":O,"data-type":w?`lookup`:void 0,children:[I,L,F]})}var x,S,C=e((()=>{x=t(n(),1),y(),i(),S=r(),b.__docgenInfo={description:`Base Input component.

Layout
──────
  Horizontal (default): CSS Grid — label (40%) | 20px gap | field column (1fr).
    The label's first text line aligns with the input's vertical centre via
    padding-top: 7px = (34px − 20px) / 2 (input height − line height).
    When the label wraps, the input stays fixed at the top of its grid cell.

  Vertical: label stacked above inputWrapper, inline-flex column.

State architecture
──────────────────
  CSS handles all visual states via pseudo-classes and data-state attribute:
    :hover / [data-state="hover"]      → border change
    :focus-within / [data-state="focus"] → border + shadow

  Future variants (error, disabled, …) plug in via data-variant on .root —
  see scaffolded comments in Input.module.css.

Extending
─────────
  Sizes    → add \`size\` prop → set data-size on .root → CSS height rules.
  Variants → add \`variant\` prop → set data-variant on .root → CSS rules.
  Icons    → accept \`prefix\`/\`suffix\` ReactNode → render inside .inputWrapper.`,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:`Visible label. Required for accessibility — provide at minimum an aria-label if omitted.`},helperText:{required:!1,tsType:{name:`string`},description:`Assistive copy rendered below the field. Linked via aria-describedby.`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Total component width in px or any CSS string.
In horizontal layout this spans both the label column and the input column.
Defaults to 640px (horizontal) which gives ≈384px of input space.`,defaultValue:{value:`670`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`| 'text'
| 'email'
| 'password'
| 'search'
| 'tel'
| 'url'
| 'number'
| 'date'     // renders as text with DD/MM/YYYY placeholder; no browser calendar icon
| 'datetime' // split date + time field: left half DD/MM/YYYY | right half HH:MM
| 'lookup'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'email'`},{name:`literal`,value:`'password'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'tel'`},{name:`literal`,value:`'url'`},{name:`literal`,value:`'number'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'datetime'`},{name:`literal`,value:`'lookup'`}]},description:`HTML input type. Defaults to "text".`,defaultValue:{value:`'text'`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Form layout.
- 'horizontal' — 40% label / 20px gap / 60% input (default)
- 'vertical'   — label stacked above input`,defaultValue:{value:`'horizontal'`,computed:!1}},suffix:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Icon or element rendered on the right side of the input.
The slot is 32px wide; the wrapper gains 1px padding (top/right/bottom)
to give the icon breathing room from the border.`},columns:{required:!1,tsType:{name:`string`},description:`Override the CSS grid-template-columns for horizontal layout.
Useful when a parent container needs exact column widths (e.g. "99px 390px" inside a modal).
@default '3fr 7fr' (30% label / 70% input)`},timeValue:{required:!1,tsType:{name:`string`},description:`For datetime type: controlled value for the time half of the field.`},onTimeChange:{required:!1,tsType:{name:`ReactChangeEventHandler`,raw:`React.ChangeEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`For datetime type: change handler for the time half of the field.`},error:{required:!1,tsType:{name:`boolean`},description:`Puts the field in the error visual state.
Border turns #FF5D5A and helper text (if provided) renders in the same color.
Does not conflict with disabled — disabled takes precedence.`},autoUpdate:{required:!1,tsType:{name:`boolean`},description:`Auto-update / auto-fill visual state.
Background turns light yellow (#FFFFEA) with a warm border (#E5DEC5)
to indicate the value was populated automatically (e.g. from a workflow or import).
Disabled and error take precedence over autoUpdate.`},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'focus'`}]},description:`Forces a visual state for Storybook stories and visual regression tests.
'hover' | 'focus' — sets data-state on the input wrapper so CSS applies
the same rules used for real browser pseudo-classes.

@internal not intended for production use`}},composes:[`Omit`]}}));export{C as n,b as t};