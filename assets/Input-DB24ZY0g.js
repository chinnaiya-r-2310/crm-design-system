import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CXyh61la.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{F as i,P as a,pt as o}from"./Icons-uCgmoAdD.js";var s=e((()=>{}));function c({label:e,helperText:t,width:n=670,type:r=`text`,layout:o=`horizontal`,suffix:s,columns:c,error:d,autoUpdate:f,forceState:p,id:m,style:h,className:g,readOnly:_,timeValue:v,onTimeChange:y,...b}){let x=(0,u.useId)(),S=m??x,C=r===`lookup`,w=r===`date`,T=r===`datetime`,E={width:typeof n==`number`?`${n}px`:n,...h},D=b.disabled?`disabled`:_?`readonly`:d?`error`:f?`auto-update`:void 0,O=p===void 0?{}:{"data-state":p},k=C||w||T?`text`:r,A=(0,l.jsx)(i,{"aria-hidden":`true`}),j=_||C&&b.disabled?A:C?(0,l.jsx)(a,{"aria-hidden":`true`}):s,M=C&&!b.placeholder?`Select`:(w||T)&&!b.placeholder?`DD/MM/YYYY`:b.placeholder,N=T?(0,l.jsxs)(`div`,{className:`input-datetime-parts`,"aria-label":`Date and time`,children:[(0,l.jsx)(`input`,{id:S,type:`text`,className:`input-input`,placeholder:`DD/MM/YYYY`,"aria-label":`Date`,"aria-describedby":t?`${S}-helper`:void 0,value:b.value,onChange:b.onChange,readOnly:_,disabled:b.disabled,required:b.required}),(0,l.jsx)(`span`,{className:`input-datetime-divider`,"aria-hidden":`true`}),(0,l.jsx)(`input`,{type:`text`,className:`input-input`,placeholder:`HH:MM`,"aria-label":`Time`,value:v,onChange:y,readOnly:_,disabled:b.disabled})]}):(0,l.jsx)(`input`,{id:S,type:k,className:`input-input`,"aria-describedby":t?`${S}-helper`:void 0,readOnly:C||_,...b,placeholder:M,onWheel:k===`number`?e=>e.currentTarget.blur():b.onWheel}),P=t?(0,l.jsx)(`span`,{id:`${S}-helper`,className:`input-helper-text`,children:t}):null,F=e?(0,l.jsx)(`label`,{className:`input-label`,htmlFor:S,onClick:e=>e.preventDefault(),children:e}):null,I=(0,l.jsxs)(`div`,{className:`input-input-wrapper`,"data-required":b.required||void 0,"data-has-suffix":j?!0:void 0,"data-type":C?`lookup`:void 0,...O,children:[N,j&&(0,l.jsx)(`span`,{className:`input-suffix-slot`,"aria-hidden":`true`,children:j})]});return o===`horizontal`&&e?(0,l.jsx)(`div`,{className:`input-root`,style:E,"data-variant":D,"data-type":C?`lookup`:void 0,children:(0,l.jsxs)(`div`,{className:`input-form-row`,style:c?{gridTemplateColumns:c}:void 0,children:[F,(0,l.jsxs)(`div`,{className:`input-field-column`,children:[I,P]})]})}):(0,l.jsxs)(`div`,{className:`input-root input-vertical`,style:E,"data-variant":D,"data-type":C?`lookup`:void 0,children:[F,I,P]})}var l,u,d=e((()=>{l=r(),u=t(n(),1),s(),o(),c.__docgenInfo={description:`Base Input component.

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
  Icons    → accept \`prefix\`/\`suffix\` ReactNode → render inside .inputWrapper.`,methods:[],displayName:`Input`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},type:{defaultValue:{value:`'text'`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}}}));export{d as n,c as t};