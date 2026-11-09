import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-Cpi9nY5o.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{N as i,Yt as a}from"./Icons-BgadUlaf.js";import{n as o,t as s}from"./Icon-DBz-BbbI.js";var c=e((()=>{}));function l({label:e,helperText:t,width:n=390,type:r=`text`,layout:a=`horizontal`,suffix:o,columns:c,error:l,autoUpdate:f,forceState:p,id:m,style:h,className:g,readOnly:_,timeValue:v,onTimeChange:y,variant:b,currencyCode:x=`INR`,displayCurrency:S=!0,showPasswordToggle:C=!0,...w}){let T=(0,d.useId)(),E=m??T,D=r===`lookup`,O=r===`date`,k=r===`datetime`,A=b===`currency`,j=b===`password`,[M,N]=(0,d.useState)(!1),P={width:typeof n==`number`?`${n}px`:n,...h},F=w.disabled?`disabled`:_?`readonly`:l?`error`:f?`auto-update`:void 0,I=p===void 0?{}:{"data-state":p},L=j?M?`text`:`password`:D||O||k?`text`:r,R=(0,u.jsx)(i,{"aria-hidden":`true`}),z=(j&&_?R:j&&C&&!w.disabled?(0,u.jsx)(`button`,{type:`button`,className:`input-password-toggle`,"aria-label":M?`Hide password`:`Show password`,"aria-pressed":M,onClick:()=>N(e=>!e),children:(0,u.jsx)(s,{name:M?`CrmEyeClosed`:`CrmEyeOpen`,size:16})}):null)||(_||D&&w.disabled?R:D?(0,u.jsx)(s,{name:`CrmLookupsearch`,size:16}):o),B=D&&!w.placeholder?`Select`:(O||k)&&!w.placeholder?`DD/MM/YYYY`:w.placeholder,V=k?(0,u.jsxs)(`div`,{className:`input-datetime-parts`,"aria-label":`Date and time`,children:[(0,u.jsx)(`input`,{id:E,type:`text`,className:`input-input`,placeholder:`DD/MM/YYYY`,"aria-label":`Date`,"aria-describedby":t?`${E}-helper`:void 0,value:w.value,onChange:w.onChange,readOnly:_,disabled:w.disabled,required:w.required}),(0,u.jsx)(`span`,{className:`input-datetime-divider`,"aria-hidden":`true`}),(0,u.jsx)(`input`,{type:`text`,className:`input-input`,placeholder:`HH:MM`,"aria-label":`Time`,value:v,onChange:y,readOnly:_,disabled:w.disabled})]}):(0,u.jsx)(`input`,{id:E,type:L,className:`input-input`,"aria-describedby":t?`${E}-helper`:void 0,readOnly:D||_,...w,placeholder:B,onWheel:L===`number`?e=>e.currentTarget.blur():w.onWheel}),H=t?(0,u.jsx)(`span`,{id:`${E}-helper`,className:`input-helper-text`,children:t}):null,U=e?(0,u.jsx)(`label`,{className:`input-label`,htmlFor:E,onClick:e=>e.preventDefault(),children:e}):null,W=(0,u.jsxs)(`div`,{className:`input-input-wrapper`,"data-required":w.required||void 0,"data-has-suffix":z?!0:void 0,"data-type":D?`lookup`:j?`password`:void 0,...I,children:[A?(0,u.jsxs)(`div`,{className:`input-currency-parts`,children:[S&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{className:`input-currency-code`,children:x}),(0,u.jsx)(`span`,{className:`input-currency-divider`,"aria-hidden":`true`})]}),V]}):V,z&&(0,u.jsx)(`span`,{className:`input-suffix-slot`,"aria-hidden":j?void 0:`true`,children:z})]});return a===`horizontal`&&e?(0,u.jsx)(`div`,{className:`input-root`,style:h,"data-variant":F,"data-type":D?`lookup`:void 0,children:(0,u.jsxs)(`div`,{className:`input-form-row`,style:c?{gridTemplateColumns:c}:void 0,children:[U,(0,u.jsxs)(`div`,{className:`input-field-column`,children:[W,H]})]})}):(0,u.jsxs)(`div`,{className:`input-root input-vertical`,style:P,"data-variant":F,"data-type":D?`lookup`:void 0,children:[U,W,H]})}var u,d,f=e((()=>{u=r(),o(),d=t(n(),1),c(),a(),l.__docgenInfo={description:`Base Input component.

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
  Icons    → accept \`prefix\`/\`suffix\` ReactNode → render inside .inputWrapper.`,methods:[],displayName:`Input`,props:{width:{defaultValue:{value:`390`,computed:!1},required:!1},type:{defaultValue:{value:`'text'`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},currencyCode:{defaultValue:{value:`'INR'`,computed:!1},required:!1},displayCurrency:{defaultValue:{value:`true`,computed:!1},required:!1},showPasswordToggle:{defaultValue:{value:`true`,computed:!1},required:!1}}}}));export{f as n,l as t};