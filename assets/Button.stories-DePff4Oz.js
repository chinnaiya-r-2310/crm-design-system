import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CpPujnL0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{S as i,a}from"./Icons-DnNy9Q3F.js";import{n as o,t as s}from"./Button-BvQ612bF.js";var c,l,u,d,f,p=e((()=>{c=`_panel_1przt_3`,l=`_option_1przt_18`,u=`_optionTick_1przt_38`,d=`_optionLabel_1przt_47`,f={panel:c,option:l,optionTick:u,optionLabel:d}}));function m({options:e,value:t,defaultValue:n,onChange:r,size:i=`sm`}){let[o,c]=(0,h.useState)(n),[l,u]=(0,h.useState)(!1),d=(0,h.useRef)(null),p=t===void 0?o:t,m=e.find(e=>e.value===p);(0,h.useEffect)(()=>{if(!l)return;function e(e){d.current&&!d.current.contains(e.target)&&u(!1)}return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[l]);function _(e){t===void 0&&c(e),r?.(e),u(!1)}return(0,g.jsx)(`div`,{ref:d,style:{position:`relative`,display:`inline-flex`,alignItems:`center`,gap:10},children:m?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{variant:m.selectedVariant,size:i,arrow:!0,split:!1,isOpen:l,onClick:()=>u(e=>!e),children:m.label}),l&&(0,g.jsx)(`div`,{className:f.panel,children:e.map(e=>(0,g.jsxs)(`button`,{className:f.option,"data-selected":e.value===p||void 0,onClick:()=>_(e.value),children:[(0,g.jsx)(`span`,{className:f.optionTick,"aria-hidden":`true`,children:e.value===p&&(0,g.jsx)(a,{})}),(0,g.jsx)(`span`,{className:f.optionLabel,children:e.label})]},e.value))})]}):e.map(e=>(0,g.jsx)(s,{variant:e.outlineVariant,size:i,onClick:()=>_(e.value),children:e.label},e.value))})}var h,g,_=e((()=>{h=t(n(),1),o(),i(),p(),g=r(),m.__docgenInfo={description:``,methods:[],displayName:`ButtonGroup`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`ButtonGroupOption`}],raw:`ButtonGroupOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:"Controlled selected value. `undefined` shows the full button group."},defaultValue:{required:!1,tsType:{name:`string`},description:`Initial value for uncontrolled usage.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the user picks an option.`},size:{required:!1,tsType:{name:`union`,raw:`'md' | 'sm' | 'xs'`,elements:[{name:`literal`,value:`'md'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'xs'`}]},description:``,defaultValue:{value:`'sm'`,computed:!1}}}}}));function v({onClose:e,topOffset:t=`calc(100% - 1px)`}){return(0,S.jsx)(`div`,{style:{position:`absolute`,top:t,left:0,zIndex:100,background:`var(--ds-components-dropdown-option-bg, #fff)`,border:`1px solid var(--ds-components-dropdown-outline, #CED0E1)`,borderRadius:6,boxShadow:`0 2px 8px 0 var(--ds-shadow-dropdown, rgba(0,0,0,0.15))`,padding:`6px 0`,minWidth:148},children:E.map(t=>(0,S.jsx)(`button`,{onClick:e,onMouseEnter:e=>{e.currentTarget.style.background=`var(--ds-components-dropdown-hover-bg, #F2F5FE)`},onMouseLeave:e=>{e.currentTarget.style.background=`none`},style:{display:`flex`,alignItems:`center`,height:32,margin:`0 6px`,padding:`0 10px`,borderRadius:5,width:`calc(100% - 12px)`,textAlign:`left`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:t===`Delete`?`#F63647`:`var(--ds-text-base, #313949)`,background:`none`,border:`none`,cursor:`pointer`,boxSizing:`border-box`},children:t},t))})}function y({id:e,openId:t,onClose:n,children:r,dropdownOffset:i}){let a=(0,x.useRef)(null),o=t===e;return(0,x.useEffect)(()=>{if(!o)return;function e(e){a.current&&!a.current.contains(e.target)&&n()}return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[o,n]),(0,S.jsxs)(`div`,{ref:a,style:{position:`relative`},children:[r,o&&(0,S.jsx)(v,{onClose:n,topOffset:i})]})}function b({children:e,variant:t,size:n,arrow:r,...i}){let[a,o]=(0,x.useState)(!1);return(0,S.jsx)(s,{variant:t,size:n,arrow:r,loading:a,onClick:()=>{o(!0),setTimeout(()=>o(!1),1e3)},...i,children:e})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{x=t(n(),1),o(),_(),S=r(),C={title:`Design System/Components/Button`,component:s,parameters:{layout:`centered`,docs:{description:{component:[`Full button system from the Chinnaiya Style Sheet — Buttons frame (node 58:20385).`,``,"**Filled** `primary` `default` `negative` `success` — md & sm. `warning` sm only.",``,"**Outline** `outline-blue` `outline-green` `outline-red` — md & sm. `outline-orange` sm only.",``,"**Ghost** `ghost-blue` `ghost-red` — light tinted bg, no border.",``,"**Link** `link-primary` `link-secondary` `link-default` `link-red` — text-only.",``,"**Sizes**: md (32px) · sm (27px) · xs (19px, default variant only). `loading` replaces label with spinner."].join(`
`)}}},argTypes:{children:{control:`text`,description:`Button label text`,table:{category:`Anatomy`}},variant:{control:`select`,options:[`primary`,`default`,`negative`,`success`,`warning`,`outline-blue`,`outline-green`,`outline-red`,`outline-orange`,`ghost-blue`,`ghost-red`,`link-primary`,`link-secondary`,`link-default`,`link-red`],description:`Visual style variant`,table:{category:`Anatomy`,defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`md`,`sm`,`xs`],description:"`md` = 32px · `sm` = 27px · `xs` = 19px (default variant only)",table:{category:`Layout`,defaultValue:{summary:`md`}}},arrow:{control:`boolean`,description:`Append a down-chevron arrow to the right of the label`,table:{category:`Modifiers`,defaultValue:{summary:`false`}}},split:{control:`boolean`,description:"`true` = Menu Button (separator + arrow zone). `false` = More Button (arrow inline, no separator). Ghost variants always hide separator.",table:{category:`Modifiers`,defaultValue:{summary:`true`}}},loading:{control:`boolean`,description:`Spinner only — hides label, disables interaction`,table:{category:`State`,defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state — muted colors, not interactive`,table:{category:`State`,defaultValue:{summary:`false`}}},forceState:{control:`radio`,options:[void 0,`hover`,`active`],description:`Force a visual state for stories and visual regression tests`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}},frontIcon:{control:!1,description:`Icon rendered in the left slot before the label`,table:{category:`Modifiers`}}}},w=({children:e})=>(0,S.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:e}),T=({title:e,children:t})=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,S.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`11px`,fontWeight:600,color:`var(--ds-text-muted)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:e}),t]}),E=[`Edit record`,`Duplicate`,`Archive`,`Delete`],D={args:{children:`Save`,variant:`primary`,size:`md`}},O={name:`Primary / Default`,args:{children:`Save`,variant:`primary`,size:`md`}},k={name:`Primary / Hover`,args:{children:`Save`,variant:`primary`,size:`md`,forceState:`hover`}},A={name:`Primary / Active`,args:{children:`Save`,variant:`primary`,size:`md`,forceState:`active`}},j={name:`Primary / Loader`,args:{children:`Save`,variant:`primary`,size:`md`,loading:!0}},M={name:`Primary / Disabled`,args:{children:`Save`,variant:`primary`,size:`md`,disabled:!0}},N={name:`Primary / With Arrow`,args:{children:`Actions`,variant:`primary`,size:`md`,arrow:!0}},P={name:`Primary — All States`,render:()=>(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,children:`Default`}),(0,S.jsx)(s,{variant:`primary`,size:`md`,forceState:`hover`,children:`Hover`}),(0,S.jsx)(s,{variant:`primary`,size:`md`,forceState:`active`,children:`Active`}),(0,S.jsx)(s,{variant:`primary`,size:`md`,loading:!0,children:`Loading`}),(0,S.jsx)(s,{variant:`primary`,size:`md`,disabled:!0,children:`Disabled`})]})},F={name:`Filled — All Variants`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Default — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Default — sm (warning available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,size:`sm`,children:`Success`}),(0,S.jsx)(s,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,forceState:`hover`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,forceState:`hover`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,forceState:`hover`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,forceState:`hover`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Active`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,forceState:`active`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,forceState:`active`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,forceState:`active`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,forceState:`active`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Loader`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,loading:!0,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,loading:!0,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,loading:!0,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,loading:!0,children:`Success`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,disabled:!0,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,disabled:!0,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,disabled:!0,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,disabled:!0,children:`Success`})]})})]})},I={name:`Outline — All Variants`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Default — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Default — sm (orange available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,forceState:`hover`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,forceState:`hover`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,forceState:`hover`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Active`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,forceState:`active`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,forceState:`active`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,forceState:`active`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Loader`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,loading:!0,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,loading:!0,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,loading:!0,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,disabled:!0,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,disabled:!0,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,disabled:!0,children:`Outline Red`})]})})]})},L={name:`Ghost — All Variants`,render:()=>{let[e,t]=(0,x.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,S.jsx)(y,{id:t,openId:e,onClose:r,dropdownOffset:`100%`,children:n},t);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Default`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,S.jsx)(T,{title:`With arrow — md (inline, no separator)`,children:(0,S.jsxs)(w,{children:[i(`gb`,(0,S.jsx)(s,{variant:`ghost-blue`,size:`md`,arrow:!0,isOpen:e===`gb`,onClick:()=>n(`gb`),children:`More`})),i(`gr`,(0,S.jsx)(s,{variant:`ghost-red`,size:`md`,arrow:!0,isOpen:e===`gr`,onClick:()=>n(`gr`),children:`More`}))]})}),(0,S.jsx)(T,{title:`With arrow — sm (inline, no separator)`,children:(0,S.jsxs)(w,{children:[i(`gsb`,(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,arrow:!0,isOpen:e===`gsb`,onClick:()=>n(`gsb`),children:`More`})),i(`gsr`,(0,S.jsx)(s,{variant:`ghost-red`,size:`sm`,arrow:!0,isOpen:e===`gsr`,onClick:()=>n(`gsr`),children:`More`}))]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,forceState:`hover`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,forceState:`hover`,children:`Ghost Red`}),(0,S.jsx)(s,{variant:`ghost-blue`,arrow:!0,forceState:`hover`,children:`More`}),(0,S.jsx)(s,{variant:`ghost-red`,arrow:!0,forceState:`hover`,children:`More`})]})}),(0,S.jsx)(T,{title:`Active`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,forceState:`active`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,forceState:`active`,children:`Ghost Red`}),(0,S.jsx)(s,{variant:`ghost-blue`,arrow:!0,isOpen:!0,children:`More`}),(0,S.jsx)(s,{variant:`ghost-red`,arrow:!0,isOpen:!0,children:`More`})]})}),(0,S.jsx)(T,{title:`Loader`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,loading:!0,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,loading:!0,children:`Ghost Red`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,disabled:!0,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,disabled:!0,children:`Ghost Red`}),(0,S.jsx)(s,{variant:`ghost-blue`,arrow:!0,disabled:!0,children:`More`}),(0,S.jsx)(s,{variant:`ghost-red`,arrow:!0,disabled:!0,children:`More`})]})})]})}},R={name:`Link — All Variants`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Default`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`link-primary`,children:`Primary Link`}),(0,S.jsx)(s,{variant:`link-secondary`,children:`Secondary Link`}),(0,S.jsx)(s,{variant:`link-default`,children:`Default Link`}),(0,S.jsx)(s,{variant:`link-red`,children:`Red Link`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`link-primary`,forceState:`hover`,children:`Primary Link`}),(0,S.jsx)(s,{variant:`link-secondary`,forceState:`hover`,children:`Secondary Link`}),(0,S.jsx)(s,{variant:`link-default`,forceState:`hover`,children:`Default Link`}),(0,S.jsx)(s,{variant:`link-red`,forceState:`hover`,children:`Red Link`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`link-primary`,disabled:!0,children:`Primary Link`}),(0,S.jsx)(s,{variant:`link-secondary`,disabled:!0,children:`Secondary Link`}),(0,S.jsx)(s,{variant:`link-default`,disabled:!0,children:`Default Link`}),(0,S.jsx)(s,{variant:`link-red`,disabled:!0,children:`Red Link`})]})})]})},z={name:`Sizes — md & sm`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Filled — md (32px)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,size:`md`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,size:`md`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,size:`md`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Filled — sm (27px, warning available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,size:`sm`,children:`Success`}),(0,S.jsx)(s,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,S.jsx)(T,{title:`Outline — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,size:`md`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,size:`md`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Outline — sm (orange available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,S.jsx)(T,{title:`Ghost — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,size:`sm`,children:`Ghost Red`})]})})]})},B={name:`Extreme Small (xs — default only)`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Default`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Verify`}),(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Send`}),(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Export`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsx)(w,{children:(0,S.jsx)(s,{variant:`default`,size:`xs`,forceState:`hover`,children:`Verify`})})}),(0,S.jsx)(T,{title:`Active`,children:(0,S.jsx)(w,{children:(0,S.jsx)(s,{variant:`default`,size:`xs`,forceState:`active`,children:`Verify`})})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsx)(w,{children:(0,S.jsx)(s,{variant:`default`,size:`xs`,disabled:!0,children:`Verify`})})})]})},V={name:`Small Buttons — All Variants`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(T,{title:`Filled — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,children:`Add`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,children:`Add`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,children:`Add`}),(0,S.jsx)(s,{variant:`success`,size:`sm`,children:`Add`}),(0,S.jsx)(s,{variant:`warning`,size:`sm`,children:`Add`})]})}),(0,S.jsx)(T,{title:`Outline — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,children:`Clear`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,children:`Reject`}),(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,children:`Warn`})]})}),(0,S.jsx)(T,{title:`Ghost — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,children:`Assign`}),(0,S.jsx)(s,{variant:`ghost-red`,size:`sm`,children:`Deactivate`})]})}),(0,S.jsx)(T,{title:`With arrow — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`default`,size:`sm`,arrow:!0,children:`Add`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,arrow:!0,children:`Reinvite`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,arrow:!0,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,arrow:!0,children:`Reject`})]})}),(0,S.jsx)(T,{title:`Hover — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,forceState:`hover`,children:`Assign`}),(0,S.jsx)(s,{variant:`ghost-red`,size:`sm`,forceState:`hover`,children:`Deactivate`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,forceState:`hover`,children:`Clear`})]})}),(0,S.jsx)(T,{title:`Loader — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,loading:!0,children:`Add`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,loading:!0,children:`Add`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,loading:!0,children:`Add`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,loading:!0,children:`Clear`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,loading:!0,children:`Reject`})]})}),(0,S.jsx)(T,{title:`Disabled — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,disabled:!0,children:`Add`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,disabled:!0,children:`Add`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,disabled:!0,children:`Clear`}),(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,disabled:!0,children:`Assign`})]})})]})},H={name:`Loader — All Variants`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsx)(T,{title:`Click any button — 1000ms loader`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(b,{variant:`primary`,size:`md`,children:`Save`}),(0,S.jsx)(b,{variant:`default`,size:`md`,children:`Cancel`}),(0,S.jsx)(b,{variant:`negative`,size:`md`,children:`Delete`}),(0,S.jsx)(b,{variant:`success`,size:`md`,children:`Accept`}),(0,S.jsx)(b,{variant:`outline-blue`,size:`md`,children:`Reinvite`}),(0,S.jsx)(b,{variant:`outline-green`,size:`md`,children:`Accept`}),(0,S.jsx)(b,{variant:`outline-red`,size:`md`,children:`Delete`}),(0,S.jsx)(b,{variant:`ghost-blue`,size:`md`,children:`More`}),(0,S.jsx)(b,{variant:`ghost-red`,size:`md`,children:`More`})]})}),(0,S.jsx)(T,{title:`Static loader — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,loading:!0,children:`Save`}),(0,S.jsx)(s,{variant:`default`,size:`md`,loading:!0,children:`Cancel`}),(0,S.jsx)(s,{variant:`negative`,size:`md`,loading:!0,children:`Delete`}),(0,S.jsx)(s,{variant:`success`,size:`md`,loading:!0,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,loading:!0,children:`Reinvite`}),(0,S.jsx)(s,{variant:`outline-green`,size:`md`,loading:!0,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-red`,size:`md`,loading:!0,children:`Delete`}),(0,S.jsx)(s,{variant:`ghost-blue`,size:`md`,loading:!0,children:`More`}),(0,S.jsx)(s,{variant:`ghost-red`,size:`md`,loading:!0,children:`More`})]})}),(0,S.jsx)(T,{title:`Static loader — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,loading:!0,children:`Save`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,loading:!0,children:`Cancel`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,loading:!0,children:`Delete`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,loading:!0,children:`Reinvite`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,loading:!0,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,loading:!0,children:`Delete`})]})}),(0,S.jsx)(T,{title:`Menu button loader — arrow stays, dimmed`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,loading:!0,children:`Create`}),(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,loading:!0,children:`Cancel`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,loading:!0,children:`Actions`})]})})]})},U={name:`Menu Button`,render:()=>{let[e,t]=(0,x.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,S.jsx)(y,{id:t,openId:e,onClose:r,children:n},t);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsxs)(T,{title:`Interactive — click arrow to open`,children:[(0,S.jsxs)(w,{children:[i(`p`,(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,isOpen:e===`p`,onArrowClick:()=>n(`p`),children:`Actions`})),i(`d`,(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,isOpen:e===`d`,onArrowClick:()=>n(`d`),children:`Actions`})),i(`n`,(0,S.jsx)(s,{variant:`negative`,size:`md`,arrow:!0,isOpen:e===`n`,onArrowClick:()=>n(`n`),children:`Actions`})),i(`s`,(0,S.jsx)(s,{variant:`success`,size:`md`,arrow:!0,isOpen:e===`s`,onArrowClick:()=>n(`s`),children:`Actions`}))]}),(0,S.jsxs)(w,{children:[i(`ob`,(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:e===`ob`,onArrowClick:()=>n(`ob`),children:`Actions`})),i(`og`,(0,S.jsx)(s,{variant:`outline-green`,size:`md`,arrow:!0,isOpen:e===`og`,onArrowClick:()=>n(`og`),children:`Actions`})),i(`or`,(0,S.jsx)(s,{variant:`outline-red`,size:`md`,arrow:!0,isOpen:e===`or`,onArrowClick:()=>n(`or`),children:`Actions`}))]})]}),(0,S.jsx)(T,{title:`Filled — md`,children:(0,S.jsxs)(w,{children:[i(`fp`,(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,isOpen:e===`fp`,onArrowClick:()=>n(`fp`),children:`Actions`})),i(`fd`,(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,isOpen:e===`fd`,onArrowClick:()=>n(`fd`),children:`Actions`})),i(`fn`,(0,S.jsx)(s,{variant:`negative`,size:`md`,arrow:!0,isOpen:e===`fn`,onArrowClick:()=>n(`fn`),children:`Actions`})),i(`fs`,(0,S.jsx)(s,{variant:`success`,size:`md`,arrow:!0,isOpen:e===`fs`,onArrowClick:()=>n(`fs`),children:`Actions`}))]})}),(0,S.jsx)(T,{title:`Filled — sm (warning available)`,children:(0,S.jsxs)(w,{children:[i(`sp`,(0,S.jsx)(s,{variant:`primary`,size:`sm`,arrow:!0,isOpen:e===`sp`,onArrowClick:()=>n(`sp`),children:`Actions`})),i(`sd`,(0,S.jsx)(s,{variant:`default`,size:`sm`,arrow:!0,isOpen:e===`sd`,onArrowClick:()=>n(`sd`),children:`Actions`})),i(`sn`,(0,S.jsx)(s,{variant:`negative`,size:`sm`,arrow:!0,isOpen:e===`sn`,onArrowClick:()=>n(`sn`),children:`Actions`})),i(`ss`,(0,S.jsx)(s,{variant:`success`,size:`sm`,arrow:!0,isOpen:e===`ss`,onArrowClick:()=>n(`ss`),children:`Actions`})),i(`sw`,(0,S.jsx)(s,{variant:`warning`,size:`sm`,arrow:!0,isOpen:e===`sw`,onArrowClick:()=>n(`sw`),children:`Actions`}))]})}),(0,S.jsx)(T,{title:`Outline — md`,children:(0,S.jsxs)(w,{children:[i(`mob`,(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:e===`mob`,onArrowClick:()=>n(`mob`),children:`Actions`})),i(`mog`,(0,S.jsx)(s,{variant:`outline-green`,size:`md`,arrow:!0,isOpen:e===`mog`,onArrowClick:()=>n(`mog`),children:`Actions`})),i(`mor`,(0,S.jsx)(s,{variant:`outline-red`,size:`md`,arrow:!0,isOpen:e===`mor`,onArrowClick:()=>n(`mor`),children:`Actions`}))]})}),(0,S.jsx)(T,{title:`Outline — sm (orange available)`,children:(0,S.jsxs)(w,{children:[i(`sob`,(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,arrow:!0,isOpen:e===`sob`,onArrowClick:()=>n(`sob`),children:`Actions`})),i(`sog`,(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,arrow:!0,isOpen:e===`sog`,onArrowClick:()=>n(`sog`),children:`Actions`})),i(`sor`,(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,arrow:!0,isOpen:e===`sor`,onArrowClick:()=>n(`sor`),children:`Actions`})),i(`soo`,(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,arrow:!0,isOpen:e===`soo`,onArrowClick:()=>n(`soo`),children:`Actions`}))]})}),(0,S.jsx)(T,{title:`Active (open state)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`}),(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`})]})}),(0,S.jsx)(T,{title:`Loading (arrow stays, dimmed)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,loading:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,loading:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,loading:!0,children:`Actions`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,disabled:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,disabled:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,disabled:!0,children:`Actions`})]})})]})}},W={name:`More Button`,render:()=>{let[e,t]=(0,x.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,S.jsx)(y,{id:t,openId:e,onClose:r,children:n},t);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsx)(T,{title:`Filled — md (no separator)`,children:(0,S.jsxs)(w,{children:[i(`fp`,(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,split:!1,isOpen:e===`fp`,onClick:()=>n(`fp`),children:`More`})),i(`fd`,(0,S.jsx)(s,{variant:`default`,size:`md`,arrow:!0,split:!1,isOpen:e===`fd`,onClick:()=>n(`fd`),children:`More`})),i(`fn`,(0,S.jsx)(s,{variant:`negative`,size:`md`,arrow:!0,split:!1,isOpen:e===`fn`,onClick:()=>n(`fn`),children:`More`})),i(`fs`,(0,S.jsx)(s,{variant:`success`,size:`md`,arrow:!0,split:!1,isOpen:e===`fs`,onClick:()=>n(`fs`),children:`More`}))]})}),(0,S.jsx)(T,{title:`Filled — sm (no separator, warning available)`,children:(0,S.jsxs)(w,{children:[i(`sp`,(0,S.jsx)(s,{variant:`primary`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sp`,onClick:()=>n(`sp`),children:`More`})),i(`sd`,(0,S.jsx)(s,{variant:`default`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sd`,onClick:()=>n(`sd`),children:`More`})),i(`sn`,(0,S.jsx)(s,{variant:`negative`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sn`,onClick:()=>n(`sn`),children:`More`})),i(`ss`,(0,S.jsx)(s,{variant:`success`,size:`sm`,arrow:!0,split:!1,isOpen:e===`ss`,onClick:()=>n(`ss`),children:`More`})),i(`sw`,(0,S.jsx)(s,{variant:`warning`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sw`,onClick:()=>n(`sw`),children:`More`}))]})}),(0,S.jsx)(T,{title:`Outline — md (no separator)`,children:(0,S.jsxs)(w,{children:[i(`mob`,(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,isOpen:e===`mob`,onClick:()=>n(`mob`),children:`More`})),i(`mog`,(0,S.jsx)(s,{variant:`outline-green`,size:`md`,arrow:!0,split:!1,isOpen:e===`mog`,onClick:()=>n(`mog`),children:`More`})),i(`mor`,(0,S.jsx)(s,{variant:`outline-red`,size:`md`,arrow:!0,split:!1,isOpen:e===`mor`,onClick:()=>n(`mor`),children:`More`}))]})}),(0,S.jsx)(T,{title:`Outline — sm (no separator, orange available)`,children:(0,S.jsxs)(w,{children:[i(`sob`,(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sob`,onClick:()=>n(`sob`),children:`More`})),i(`sog`,(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sog`,onClick:()=>n(`sog`),children:`More`})),i(`sor`,(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sor`,onClick:()=>n(`sor`),children:`More`})),i(`soo`,(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,arrow:!0,split:!1,isOpen:e===`soo`,onClick:()=>n(`soo`),children:`More`}))]})}),(0,S.jsx)(T,{title:`Active (open state)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,split:!1,isOpen:!0,children:`More`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,isOpen:!0,children:`More`})]})}),(0,S.jsx)(T,{title:`Hover`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,split:!1,forceState:`hover`,children:`More`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,forceState:`hover`,children:`More`})]})}),(0,S.jsx)(T,{title:`Disabled`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`md`,arrow:!0,split:!1,disabled:!0,children:`More`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,disabled:!0,children:`More`})]})})]})}},G=[{value:`yes`,label:`Yes`,outlineVariant:`outline-green`,selectedVariant:`success`},{value:`maybe`,label:`Maybe`,outlineVariant:`outline-orange`,selectedVariant:`warning`},{value:`no`,label:`No`,outlineVariant:`outline-red`,selectedVariant:`negative`}],K={name:`Group Button — Meeting Invitation`,render:()=>{let[e,t]=(0,x.useState)(void 0),[n,r]=(0,x.useState)(`yes`),[i,a]=(0,x.useState)(`maybe`),[o,s]=(0,x.useState)(`no`);return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsx)(T,{title:`Interactive — collapses to single solid more button on selection`,children:(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,S.jsx)(m,{options:G,value:e,size:`sm`,onChange:t}),e&&(0,S.jsx)(`button`,{onClick:()=>t(void 0),style:{fontSize:12,color:`var(--ds-text-muted)`,background:`none`,border:`none`,cursor:`pointer`,padding:0,fontFamily:`var(--ds-font-family-base)`},children:`Reset`})]})}),(0,S.jsx)(T,{title:`Yes selected — single solid more button`,children:(0,S.jsx)(m,{options:G,value:n,size:`sm`,onChange:r})}),(0,S.jsx)(T,{title:`Maybe selected`,children:(0,S.jsx)(m,{options:G,value:i,size:`sm`,onChange:a})}),(0,S.jsx)(T,{title:`No selected`,children:(0,S.jsx)(m,{options:G,value:o,size:`sm`,onChange:s})}),(0,S.jsx)(T,{title:`Default — no selection`,children:(0,S.jsx)(m,{options:G,size:`sm`})})]})}},q={name:`Button Group — Combinations`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsx)(T,{title:`Approval — Accept / Reject (outline)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-green`,children:`Accept`}),(0,S.jsx)(s,{variant:`outline-red`,children:`Reject`})]})}),(0,S.jsx)(T,{title:`Approval — Accept / Reject (filled)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`success`,children:`Accept`}),(0,S.jsx)(s,{variant:`negative`,children:`Reject`})]})}),(0,S.jsx)(T,{title:`User Management — Reinvite / Deactivate`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,children:`Reinvite`}),(0,S.jsx)(s,{variant:`outline-red`,children:`Deactivate`})]})}),(0,S.jsx)(T,{title:`Form — Create / Cancel`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Create`}),(0,S.jsx)(s,{variant:`default`,children:`Cancel`})]})}),(0,S.jsx)(T,{title:`Record actions — Save / Save and Close / Cancel`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Save`}),(0,S.jsx)(s,{variant:`default`,children:`Save and Close`}),(0,S.jsx)(s,{variant:`default`,children:`Cancel`})]})}),(0,S.jsx)(T,{title:`Bulk — Save / Add & Reorder / Cancel`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Save`}),(0,S.jsx)(s,{variant:`primary`,children:`Add & Reorder`}),(0,S.jsx)(s,{variant:`default`,children:`Cancel`})]})})]})},J={name:`Keyboard Focus`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,S.jsx)(T,{title:`Filled — md (Tab to focus)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Outline — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Ghost — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,S.jsx)(T,{title:`Link — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`link-primary`,children:`Link Primary`}),(0,S.jsx)(s,{variant:`link-secondary`,children:`Link Secondary`}),(0,S.jsx)(s,{variant:`link-default`,children:`Link Default`}),(0,S.jsx)(s,{variant:`link-red`,children:`Link Red`})]})}),(0,S.jsx)(T,{title:`With arrow — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,arrow:!0,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,arrow:!0,children:`Default`}),(0,S.jsx)(s,{variant:`outline-blue`,arrow:!0,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`ghost-blue`,arrow:!0,children:`Ghost Blue`})]})}),(0,S.jsx)(T,{title:`sm size`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,children:`Default`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`})]})}),(0,S.jsx)(T,{title:`xs size — default only`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Verify`}),(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Send`})]})})]})},Y={name:`Overview — All Buttons`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:8},children:[(0,S.jsx)(T,{title:`Filled — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,children:`Success`})]})}),(0,S.jsx)(T,{title:`Filled — sm (warning available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,size:`sm`,children:`Primary`}),(0,S.jsx)(s,{variant:`default`,size:`sm`,children:`Default`}),(0,S.jsx)(s,{variant:`negative`,size:`sm`,children:`Negative`}),(0,S.jsx)(s,{variant:`success`,size:`sm`,children:`Success`}),(0,S.jsx)(s,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,S.jsx)(T,{title:`Outline — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,children:`Outline Red`})]})}),(0,S.jsx)(T,{title:`Outline — sm (orange available)`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,S.jsx)(s,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,S.jsx)(s,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,S.jsx)(s,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,S.jsx)(T,{title:`Ghost — md`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,S.jsx)(T,{title:`Ghost — sm`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`ghost-blue`,size:`sm`,children:`Ghost Blue`}),(0,S.jsx)(s,{variant:`ghost-red`,size:`sm`,children:`Ghost Red`})]})}),(0,S.jsx)(T,{title:`Link`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`link-primary`,children:`Primary Link`}),(0,S.jsx)(s,{variant:`link-secondary`,children:`Secondary Link`}),(0,S.jsx)(s,{variant:`link-default`,children:`Default Link`}),(0,S.jsx)(s,{variant:`link-red`,children:`Red Link`})]})}),(0,S.jsx)(T,{title:`With Arrow — menu button`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`primary`,arrow:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`default`,arrow:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,arrow:!0,children:`Actions`}),(0,S.jsx)(s,{variant:`outline-blue`,size:`sm`,arrow:!0,children:`Actions`})]})}),(0,S.jsx)(T,{title:`Extreme Small (xs) — default only`,children:(0,S.jsxs)(w,{children:[(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Verify`}),(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Send`}),(0,S.jsx)(s,{variant:`default`,size:`xs`,children:`Export`})]})})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Default',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Hover',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    forceState: 'hover'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Active',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    forceState: 'active'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Loader',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    loading: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Disabled',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Primary / With Arrow',
  args: {
    children: 'Actions',
    variant: 'primary',
    size: 'md',
    arrow: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Primary — All States',
  render: () => <Row>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="md" forceState="hover">Hover</Button>
      <Button variant="primary" size="md" forceState="active">Active</Button>
      <Button variant="primary" size="md" loading>Loading</Button>
      <Button variant="primary" size="md" disabled>Disabled</Button>
    </Row>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Filled — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Default — md">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Default — sm (warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="primary" forceState="hover">Primary</Button>
          <Button variant="default" forceState="hover">Default</Button>
          <Button variant="negative" forceState="hover">Negative</Button>
          <Button variant="success" forceState="hover">Success</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="primary" forceState="active">Primary</Button>
          <Button variant="default" forceState="active">Default</Button>
          <Button variant="negative" forceState="active">Negative</Button>
          <Button variant="success" forceState="active">Success</Button>
        </Row>
      </Section>
      <Section title="Loader">
        <Row>
          <Button variant="primary" loading>Primary</Button>
          <Button variant="default" loading>Default</Button>
          <Button variant="negative" loading>Negative</Button>
          <Button variant="success" loading>Success</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="default" disabled>Default</Button>
          <Button variant="negative" disabled>Negative</Button>
          <Button variant="success" disabled>Success</Button>
        </Row>
      </Section>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Outline — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Default — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Default — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="outline-blue" forceState="hover">Outline Blue</Button>
          <Button variant="outline-green" forceState="hover">Outline Green</Button>
          <Button variant="outline-red" forceState="hover">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="outline-blue" forceState="active">Outline Blue</Button>
          <Button variant="outline-green" forceState="active">Outline Green</Button>
          <Button variant="outline-red" forceState="active">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Loader">
        <Row>
          <Button variant="outline-blue" loading>Outline Blue</Button>
          <Button variant="outline-green" loading>Outline Green</Button>
          <Button variant="outline-red" loading>Outline Red</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="outline-blue" disabled>Outline Blue</Button>
          <Button variant="outline-green" disabled>Outline Green</Button>
          <Button variant="outline-red" disabled>Outline Red</Button>
        </Row>
      </Section>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Ghost — All Variants',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => <MenuWrap key={id} id={id} openId={openId} onClose={close} dropdownOffset="100%">{btn}</MenuWrap>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Section title="Default">
          <Row>
            <Button variant="ghost-blue">Ghost Blue</Button>
            <Button variant="ghost-red">Ghost Red</Button>
          </Row>
        </Section>
        <Section title="With arrow — md (inline, no separator)">
          <Row>
            {W('gb', <Button variant="ghost-blue" size="md" arrow isOpen={openId === 'gb'} onClick={() => toggle('gb')}>More</Button>)}
            {W('gr', <Button variant="ghost-red" size="md" arrow isOpen={openId === 'gr'} onClick={() => toggle('gr')}>More</Button>)}
          </Row>
        </Section>
        <Section title="With arrow — sm (inline, no separator)">
          <Row>
            {W('gsb', <Button variant="ghost-blue" size="sm" arrow isOpen={openId === 'gsb'} onClick={() => toggle('gsb')}>More</Button>)}
            {W('gsr', <Button variant="ghost-red" size="sm" arrow isOpen={openId === 'gsr'} onClick={() => toggle('gsr')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="ghost-blue" forceState="hover">Ghost Blue</Button>
            <Button variant="ghost-red" forceState="hover">Ghost Red</Button>
            <Button variant="ghost-blue" arrow forceState="hover">More</Button>
            <Button variant="ghost-red" arrow forceState="hover">More</Button>
          </Row>
        </Section>
        <Section title="Active">
          <Row>
            <Button variant="ghost-blue" forceState="active">Ghost Blue</Button>
            <Button variant="ghost-red" forceState="active">Ghost Red</Button>
            <Button variant="ghost-blue" arrow isOpen>More</Button>
            <Button variant="ghost-red" arrow isOpen>More</Button>
          </Row>
        </Section>
        <Section title="Loader">
          <Row>
            <Button variant="ghost-blue" loading>Ghost Blue</Button>
            <Button variant="ghost-red" loading>Ghost Red</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="ghost-blue" disabled>Ghost Blue</Button>
            <Button variant="ghost-red" disabled>Ghost Red</Button>
            <Button variant="ghost-blue" arrow disabled>More</Button>
            <Button variant="ghost-red" arrow disabled>More</Button>
          </Row>
        </Section>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Link — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Default">
        <Row>
          <Button variant="link-primary">Primary Link</Button>
          <Button variant="link-secondary">Secondary Link</Button>
          <Button variant="link-default">Default Link</Button>
          <Button variant="link-red">Red Link</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="link-primary" forceState="hover">Primary Link</Button>
          <Button variant="link-secondary" forceState="hover">Secondary Link</Button>
          <Button variant="link-default" forceState="hover">Default Link</Button>
          <Button variant="link-red" forceState="hover">Red Link</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="link-primary" disabled>Primary Link</Button>
          <Button variant="link-secondary" disabled>Secondary Link</Button>
          <Button variant="link-default" disabled>Default Link</Button>
          <Button variant="link-red" disabled>Red Link</Button>
        </Row>
      </Section>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Sizes — md & sm',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Filled — md (32px)">
        <Row>
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="default" size="md">Default</Button>
          <Button variant="negative" size="md">Negative</Button>
          <Button variant="success" size="md">Success</Button>
        </Row>
      </Section>
      <Section title="Filled — sm (27px, warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue" size="md">Outline Blue</Button>
          <Button variant="outline-green" size="md">Outline Green</Button>
          <Button variant="outline-red" size="md">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Outline — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Ghost Blue</Button>
          <Button variant="ghost-red" size="sm">Ghost Red</Button>
        </Row>
      </Section>
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Extreme Small (xs — default only)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Default">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
          <Button variant="default" size="xs">Export</Button>
        </Row>
      </Section>
      <Section title="Hover">
        <Row>
          <Button variant="default" size="xs" forceState="hover">Verify</Button>
        </Row>
      </Section>
      <Section title="Active">
        <Row>
          <Button variant="default" size="xs" forceState="active">Verify</Button>
        </Row>
      </Section>
      <Section title="Disabled">
        <Row>
          <Button variant="default" size="xs" disabled>Verify</Button>
        </Row>
      </Section>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Small Buttons — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Section title="Filled — sm">
        <Row>
          <Button variant="primary" size="sm">Add</Button>
          <Button variant="default" size="sm">Add</Button>
          <Button variant="negative" size="sm">Add</Button>
          <Button variant="success" size="sm">Add</Button>
          <Button variant="warning" size="sm">Add</Button>
        </Row>
      </Section>
      <Section title="Outline — sm">
        <Row>
          <Button variant="outline-blue" size="sm">Clear</Button>
          <Button variant="outline-green" size="sm">Accept</Button>
          <Button variant="outline-red" size="sm">Reject</Button>
          <Button variant="outline-orange" size="sm">Warn</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Assign</Button>
          <Button variant="ghost-red" size="sm">Deactivate</Button>
        </Row>
      </Section>
      <Section title="With arrow — sm">
        <Row>
          <Button variant="default" size="sm" arrow>Add</Button>
          <Button variant="outline-blue" size="sm" arrow>Reinvite</Button>
          <Button variant="outline-green" size="sm" arrow>Accept</Button>
          <Button variant="outline-red" size="sm" arrow>Reject</Button>
        </Row>
      </Section>
      <Section title="Hover — sm">
        <Row>
          <Button variant="ghost-blue" size="sm" forceState="hover">Assign</Button>
          <Button variant="ghost-red" size="sm" forceState="hover">Deactivate</Button>
          <Button variant="outline-blue" size="sm" forceState="hover">Clear</Button>
        </Row>
      </Section>
      <Section title="Loader — sm">
        <Row>
          <Button variant="primary" size="sm" loading>Add</Button>
          <Button variant="default" size="sm" loading>Add</Button>
          <Button variant="negative" size="sm" loading>Add</Button>
          <Button variant="outline-blue" size="sm" loading>Clear</Button>
          <Button variant="outline-red" size="sm" loading>Reject</Button>
        </Row>
      </Section>
      <Section title="Disabled — sm">
        <Row>
          <Button variant="primary" size="sm" disabled>Add</Button>
          <Button variant="default" size="sm" disabled>Add</Button>
          <Button variant="outline-blue" size="sm" disabled>Clear</Button>
          <Button variant="ghost-blue" size="sm" disabled>Assign</Button>
        </Row>
      </Section>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Loader — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Section title="Click any button — 1000ms loader">
        <Row>
          <LoadingButton variant="primary" size="md">Save</LoadingButton>
          <LoadingButton variant="default" size="md">Cancel</LoadingButton>
          <LoadingButton variant="negative" size="md">Delete</LoadingButton>
          <LoadingButton variant="success" size="md">Accept</LoadingButton>
          <LoadingButton variant="outline-blue" size="md">Reinvite</LoadingButton>
          <LoadingButton variant="outline-green" size="md">Accept</LoadingButton>
          <LoadingButton variant="outline-red" size="md">Delete</LoadingButton>
          <LoadingButton variant="ghost-blue" size="md">More</LoadingButton>
          <LoadingButton variant="ghost-red" size="md">More</LoadingButton>
        </Row>
      </Section>
      <Section title="Static loader — md">
        <Row>
          <Button variant="primary" size="md" loading>Save</Button>
          <Button variant="default" size="md" loading>Cancel</Button>
          <Button variant="negative" size="md" loading>Delete</Button>
          <Button variant="success" size="md" loading>Accept</Button>
          <Button variant="outline-blue" size="md" loading>Reinvite</Button>
          <Button variant="outline-green" size="md" loading>Accept</Button>
          <Button variant="outline-red" size="md" loading>Delete</Button>
          <Button variant="ghost-blue" size="md" loading>More</Button>
          <Button variant="ghost-red" size="md" loading>More</Button>
        </Row>
      </Section>
      <Section title="Static loader — sm">
        <Row>
          <Button variant="primary" size="sm" loading>Save</Button>
          <Button variant="default" size="sm" loading>Cancel</Button>
          <Button variant="negative" size="sm" loading>Delete</Button>
          <Button variant="outline-blue" size="sm" loading>Reinvite</Button>
          <Button variant="outline-green" size="sm" loading>Accept</Button>
          <Button variant="outline-red" size="sm" loading>Delete</Button>
        </Row>
      </Section>
      <Section title="Menu button loader — arrow stays, dimmed">
        <Row>
          <Button variant="primary" size="md" arrow loading>Create</Button>
          <Button variant="default" size="md" arrow loading>Cancel</Button>
          <Button variant="outline-blue" size="md" arrow loading>Actions</Button>
        </Row>
      </Section>
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Menu Button',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => <MenuWrap key={id} id={id} openId={openId} onClose={close}>{btn}</MenuWrap>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Section title="Interactive — click arrow to open">
          <Row>
            {W('p', <Button variant="primary" size="md" arrow isOpen={openId === 'p'} onArrowClick={() => toggle('p')}>Actions</Button>)}
            {W('d', <Button variant="default" size="md" arrow isOpen={openId === 'd'} onArrowClick={() => toggle('d')}>Actions</Button>)}
            {W('n', <Button variant="negative" size="md" arrow isOpen={openId === 'n'} onArrowClick={() => toggle('n')}>Actions</Button>)}
            {W('s', <Button variant="success" size="md" arrow isOpen={openId === 's'} onArrowClick={() => toggle('s')}>Actions</Button>)}
          </Row>
          <Row>
            {W('ob', <Button variant="outline-blue" size="md" arrow isOpen={openId === 'ob'} onArrowClick={() => toggle('ob')}>Actions</Button>)}
            {W('og', <Button variant="outline-green" size="md" arrow isOpen={openId === 'og'} onArrowClick={() => toggle('og')}>Actions</Button>)}
            {W('or', <Button variant="outline-red" size="md" arrow isOpen={openId === 'or'} onArrowClick={() => toggle('or')}>Actions</Button>)}
          </Row>
        </Section>

        <Section title="Filled — md">
          <Row>
            {W('fp', <Button variant="primary" size="md" arrow isOpen={openId === 'fp'} onArrowClick={() => toggle('fp')}>Actions</Button>)}
            {W('fd', <Button variant="default" size="md" arrow isOpen={openId === 'fd'} onArrowClick={() => toggle('fd')}>Actions</Button>)}
            {W('fn', <Button variant="negative" size="md" arrow isOpen={openId === 'fn'} onArrowClick={() => toggle('fn')}>Actions</Button>)}
            {W('fs', <Button variant="success" size="md" arrow isOpen={openId === 'fs'} onArrowClick={() => toggle('fs')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Filled — sm (warning available)">
          <Row>
            {W('sp', <Button variant="primary" size="sm" arrow isOpen={openId === 'sp'} onArrowClick={() => toggle('sp')}>Actions</Button>)}
            {W('sd', <Button variant="default" size="sm" arrow isOpen={openId === 'sd'} onArrowClick={() => toggle('sd')}>Actions</Button>)}
            {W('sn', <Button variant="negative" size="sm" arrow isOpen={openId === 'sn'} onArrowClick={() => toggle('sn')}>Actions</Button>)}
            {W('ss', <Button variant="success" size="sm" arrow isOpen={openId === 'ss'} onArrowClick={() => toggle('ss')}>Actions</Button>)}
            {W('sw', <Button variant="warning" size="sm" arrow isOpen={openId === 'sw'} onArrowClick={() => toggle('sw')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Outline — md">
          <Row>
            {W('mob', <Button variant="outline-blue" size="md" arrow isOpen={openId === 'mob'} onArrowClick={() => toggle('mob')}>Actions</Button>)}
            {W('mog', <Button variant="outline-green" size="md" arrow isOpen={openId === 'mog'} onArrowClick={() => toggle('mog')}>Actions</Button>)}
            {W('mor', <Button variant="outline-red" size="md" arrow isOpen={openId === 'mor'} onArrowClick={() => toggle('mor')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Outline — sm (orange available)">
          <Row>
            {W('sob', <Button variant="outline-blue" size="sm" arrow isOpen={openId === 'sob'} onArrowClick={() => toggle('sob')}>Actions</Button>)}
            {W('sog', <Button variant="outline-green" size="sm" arrow isOpen={openId === 'sog'} onArrowClick={() => toggle('sog')}>Actions</Button>)}
            {W('sor', <Button variant="outline-red" size="sm" arrow isOpen={openId === 'sor'} onArrowClick={() => toggle('sor')}>Actions</Button>)}
            {W('soo', <Button variant="outline-orange" size="sm" arrow isOpen={openId === 'soo'} onArrowClick={() => toggle('soo')}>Actions</Button>)}
          </Row>
        </Section>
        <Section title="Active (open state)">
          <Row>
            <Button variant="primary" size="md" arrow isOpen>Actions</Button>
            <Button variant="default" size="md" arrow isOpen>Actions</Button>
            <Button variant="outline-blue" size="md" arrow isOpen>Actions</Button>
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="primary" size="md" arrow forceState="hover">Actions</Button>
            <Button variant="default" size="md" arrow forceState="hover">Actions</Button>
            <Button variant="outline-blue" size="md" arrow forceState="hover">Actions</Button>
          </Row>
        </Section>
        <Section title="Loading (arrow stays, dimmed)">
          <Row>
            <Button variant="primary" size="md" arrow loading>Actions</Button>
            <Button variant="default" size="md" arrow loading>Actions</Button>
            <Button variant="outline-blue" size="md" arrow loading>Actions</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="primary" size="md" arrow disabled>Actions</Button>
            <Button variant="default" size="md" arrow disabled>Actions</Button>
            <Button variant="outline-blue" size="md" arrow disabled>Actions</Button>
          </Row>
        </Section>
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'More Button',
  render: () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);
    const close = () => setOpenId(null);
    const W = (id: string, btn: React.ReactNode) => <MenuWrap key={id} id={id} openId={openId} onClose={close}>{btn}</MenuWrap>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Section title="Filled — md (no separator)">
          <Row>
            {W('fp', <Button variant="primary" size="md" arrow split={false} isOpen={openId === 'fp'} onClick={() => toggle('fp')}>More</Button>)}
            {W('fd', <Button variant="default" size="md" arrow split={false} isOpen={openId === 'fd'} onClick={() => toggle('fd')}>More</Button>)}
            {W('fn', <Button variant="negative" size="md" arrow split={false} isOpen={openId === 'fn'} onClick={() => toggle('fn')}>More</Button>)}
            {W('fs', <Button variant="success" size="md" arrow split={false} isOpen={openId === 'fs'} onClick={() => toggle('fs')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Filled — sm (no separator, warning available)">
          <Row>
            {W('sp', <Button variant="primary" size="sm" arrow split={false} isOpen={openId === 'sp'} onClick={() => toggle('sp')}>More</Button>)}
            {W('sd', <Button variant="default" size="sm" arrow split={false} isOpen={openId === 'sd'} onClick={() => toggle('sd')}>More</Button>)}
            {W('sn', <Button variant="negative" size="sm" arrow split={false} isOpen={openId === 'sn'} onClick={() => toggle('sn')}>More</Button>)}
            {W('ss', <Button variant="success" size="sm" arrow split={false} isOpen={openId === 'ss'} onClick={() => toggle('ss')}>More</Button>)}
            {W('sw', <Button variant="warning" size="sm" arrow split={false} isOpen={openId === 'sw'} onClick={() => toggle('sw')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Outline — md (no separator)">
          <Row>
            {W('mob', <Button variant="outline-blue" size="md" arrow split={false} isOpen={openId === 'mob'} onClick={() => toggle('mob')}>More</Button>)}
            {W('mog', <Button variant="outline-green" size="md" arrow split={false} isOpen={openId === 'mog'} onClick={() => toggle('mog')}>More</Button>)}
            {W('mor', <Button variant="outline-red" size="md" arrow split={false} isOpen={openId === 'mor'} onClick={() => toggle('mor')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Outline — sm (no separator, orange available)">
          <Row>
            {W('sob', <Button variant="outline-blue" size="sm" arrow split={false} isOpen={openId === 'sob'} onClick={() => toggle('sob')}>More</Button>)}
            {W('sog', <Button variant="outline-green" size="sm" arrow split={false} isOpen={openId === 'sog'} onClick={() => toggle('sog')}>More</Button>)}
            {W('sor', <Button variant="outline-red" size="sm" arrow split={false} isOpen={openId === 'sor'} onClick={() => toggle('sor')}>More</Button>)}
            {W('soo', <Button variant="outline-orange" size="sm" arrow split={false} isOpen={openId === 'soo'} onClick={() => toggle('soo')}>More</Button>)}
          </Row>
        </Section>
        <Section title="Active (open state)">
          <Row>
            <Button variant="primary" size="md" arrow split={false} isOpen>More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} isOpen>More</Button>
          </Row>
        </Section>
        <Section title="Hover">
          <Row>
            <Button variant="primary" size="md" arrow split={false} forceState="hover">More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} forceState="hover">More</Button>
          </Row>
        </Section>
        <Section title="Disabled">
          <Row>
            <Button variant="primary" size="md" arrow split={false} disabled>More</Button>
            <Button variant="outline-blue" size="md" arrow split={false} disabled>More</Button>
          </Row>
        </Section>
      </div>;
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Group Button — Meeting Invitation',
  render: () => {
    const [rsvp, setRsvp] = useState<string | undefined>(undefined);
    const [rsvpYes, setRsvpYes] = useState<string>('yes');
    const [rsvpMaybe, setRsvpMaybe] = useState<string>('maybe');
    const [rsvpNo, setRsvpNo] = useState<string>('no');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Section title="Interactive — collapses to single solid more button on selection">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
            <ButtonGroup options={RSVP_OPTIONS} value={rsvp} size="sm" onChange={setRsvp} />
            {rsvp && <button onClick={() => setRsvp(undefined)} style={{
            fontSize: 12,
            color: 'var(--ds-text-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--ds-font-family-base)'
          }}>
                Reset
              </button>}
          </div>
        </Section>
        <Section title="Yes selected — single solid more button">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpYes} size="sm" onChange={setRsvpYes} />
        </Section>
        <Section title="Maybe selected">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpMaybe} size="sm" onChange={setRsvpMaybe} />
        </Section>
        <Section title="No selected">
          <ButtonGroup options={RSVP_OPTIONS} value={rsvpNo} size="sm" onChange={setRsvpNo} />
        </Section>
        <Section title="Default — no selection">
          <ButtonGroup options={RSVP_OPTIONS} size="sm" />
        </Section>
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Group Button — Meeting Invitation RSVP.
Unselected: three small outline buttons (Yes / Maybe / No).
Selected: collapses to a single solid more button (filled + arrow).
Figma: node 34442:87663.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Button Group — Combinations',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Section title="Approval — Accept / Reject (outline)">
        <Row>
          <Button variant="outline-green">Accept</Button>
          <Button variant="outline-red">Reject</Button>
        </Row>
      </Section>
      <Section title="Approval — Accept / Reject (filled)">
        <Row>
          <Button variant="success">Accept</Button>
          <Button variant="negative">Reject</Button>
        </Row>
      </Section>
      <Section title="User Management — Reinvite / Deactivate">
        <Row>
          <Button variant="outline-blue">Reinvite</Button>
          <Button variant="outline-red">Deactivate</Button>
        </Row>
      </Section>
      <Section title="Form — Create / Cancel">
        <Row>
          <Button variant="primary">Create</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
      <Section title="Record actions — Save / Save and Close / Cancel">
        <Row>
          <Button variant="primary">Save</Button>
          <Button variant="default">Save and Close</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
      <Section title="Bulk — Save / Add & Reorder / Cancel">
        <Row>
          <Button variant="primary">Save</Button>
          <Button variant="primary">Add & Reorder</Button>
          <Button variant="default">Cancel</Button>
        </Row>
      </Section>
    </div>
}`,...q.parameters?.docs?.source},description:{story:`Common action bar templates — exact button text and variants from Figma node 93641:149261.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard Focus',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Section title="Filled — md (Tab to focus)">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Ghost — md">
        <Row>
          <Button variant="ghost-blue">Ghost Blue</Button>
          <Button variant="ghost-red">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Link — md">
        <Row>
          <Button variant="link-primary">Link Primary</Button>
          <Button variant="link-secondary">Link Secondary</Button>
          <Button variant="link-default">Link Default</Button>
          <Button variant="link-red">Link Red</Button>
        </Row>
      </Section>
      <Section title="With arrow — md">
        <Row>
          <Button variant="primary" arrow>Primary</Button>
          <Button variant="default" arrow>Default</Button>
          <Button variant="outline-blue" arrow>Outline Blue</Button>
          <Button variant="ghost-blue" arrow>Ghost Blue</Button>
        </Row>
      </Section>
      <Section title="sm size">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
        </Row>
      </Section>
      <Section title="xs size — default only">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
        </Row>
      </Section>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Overview — All Buttons',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 8
  }}>
      <Section title="Filled — md">
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="negative">Negative</Button>
          <Button variant="success">Success</Button>
        </Row>
      </Section>
      <Section title="Filled — sm (warning available)">
        <Row>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="negative" size="sm">Negative</Button>
          <Button variant="success" size="sm">Success</Button>
          <Button variant="warning" size="sm">Warning</Button>
        </Row>
      </Section>
      <Section title="Outline — md">
        <Row>
          <Button variant="outline-blue">Outline Blue</Button>
          <Button variant="outline-green">Outline Green</Button>
          <Button variant="outline-red">Outline Red</Button>
        </Row>
      </Section>
      <Section title="Outline — sm (orange available)">
        <Row>
          <Button variant="outline-blue" size="sm">Outline Blue</Button>
          <Button variant="outline-green" size="sm">Outline Green</Button>
          <Button variant="outline-red" size="sm">Outline Red</Button>
          <Button variant="outline-orange" size="sm">Outline Orange</Button>
        </Row>
      </Section>
      <Section title="Ghost — md">
        <Row>
          <Button variant="ghost-blue">Ghost Blue</Button>
          <Button variant="ghost-red">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Ghost — sm">
        <Row>
          <Button variant="ghost-blue" size="sm">Ghost Blue</Button>
          <Button variant="ghost-red" size="sm">Ghost Red</Button>
        </Row>
      </Section>
      <Section title="Link">
        <Row>
          <Button variant="link-primary">Primary Link</Button>
          <Button variant="link-secondary">Secondary Link</Button>
          <Button variant="link-default">Default Link</Button>
          <Button variant="link-red">Red Link</Button>
        </Row>
      </Section>
      <Section title="With Arrow — menu button">
        <Row>
          <Button variant="primary" arrow>Actions</Button>
          <Button variant="default" arrow>Actions</Button>
          <Button variant="outline-blue" arrow>Actions</Button>
          <Button variant="outline-blue" size="sm" arrow>Actions</Button>
        </Row>
      </Section>
      <Section title="Extreme Small (xs) — default only">
        <Row>
          <Button variant="default" size="xs">Verify</Button>
          <Button variant="default" size="xs">Send</Button>
          <Button variant="default" size="xs">Export</Button>
        </Row>
      </Section>
    </div>
}`,...Y.parameters?.docs?.source}}},X=[`Playground`,`PrimaryDefault`,`PrimaryHover`,`PrimaryActive`,`PrimaryLoader`,`PrimaryDisabled`,`PrimaryWithArrow`,`PrimaryAllStates`,`FilledVariants`,`OutlineVariants`,`GhostVariants`,`LinkVariants`,`Sizes`,`ExtremeSmall`,`SmallButtons`,`LoaderState`,`MenuButton`,`MoreButton`,`GroupButtonMeetingInvitation`,`ButtonGroupCombinations`,`KeyboardFocus`,`Overview`]}))();export{q as ButtonGroupCombinations,B as ExtremeSmall,F as FilledVariants,L as GhostVariants,K as GroupButtonMeetingInvitation,J as KeyboardFocus,R as LinkVariants,H as LoaderState,U as MenuButton,W as MoreButton,I as OutlineVariants,Y as Overview,D as Playground,A as PrimaryActive,P as PrimaryAllStates,O as PrimaryDefault,M as PrimaryDisabled,k as PrimaryHover,j as PrimaryLoader,N as PrimaryWithArrow,z as Sizes,V as SmallButtons,X as __namedExportsOrder,C as default};