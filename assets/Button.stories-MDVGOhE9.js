import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9u3ETtj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,r as a,t as o}from"./Button-EK6WNORT.js";function s({onClose:e,topOffset:t=`calc(100% - 1px)`}){return(0,d.jsx)(`div`,{style:{position:`absolute`,top:t,left:0,zIndex:100,background:`var(--ds-components-dropdown-option-bg, #fff)`,border:`1px solid var(--ds-components-dropdown-outline, #CED0E1)`,borderRadius:6,boxShadow:`0 2px 8px 0 var(--ds-shadow-dropdown, rgba(0,0,0,0.15))`,padding:`6px 0`,minWidth:148},children:h.map(t=>(0,d.jsx)(`button`,{onClick:e,onMouseEnter:e=>{e.currentTarget.style.background=`var(--ds-components-dropdown-hover-bg, #F2F5FE)`},onMouseLeave:e=>{e.currentTarget.style.background=`none`},style:{display:`flex`,alignItems:`center`,height:32,margin:`0 6px`,padding:`0 10px`,borderRadius:5,width:`calc(100% - 12px)`,textAlign:`left`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:t===`Delete`?`#F63647`:`var(--ds-text-base, #313949)`,background:`none`,border:`none`,cursor:`pointer`,boxSizing:`border-box`},children:t},t))})}function c({id:e,openId:t,onClose:n,children:r,dropdownOffset:i}){let a=(0,u.useRef)(null),o=t===e;return(0,u.useEffect)(()=>{if(!o)return;function e(e){a.current&&!a.current.contains(e.target)&&n()}return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[o,n]),(0,d.jsxs)(`div`,{ref:a,style:{position:`relative`},children:[r,o&&(0,d.jsx)(s,{onClose:n,topOffset:i})]})}function l({children:e,variant:t,size:n,arrow:r,...i}){let[a,s]=(0,u.useState)(!1);return(0,d.jsx)(o,{variant:t,size:n,arrow:r,loading:a,onClick:()=>{s(!0),setTimeout(()=>s(!1),1e3)},...i,children:e})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{u=t(n(),1),a(),d=r(),f={title:`Design System/Components/Button`,component:o,parameters:{layout:`centered`,docs:{description:{component:[`Full button system from the Chinnaiya Style Sheet — Buttons frame (node 58:20385).`,``,"**Filled** `primary` `default` `negative` `success` — md & sm. `warning` sm only.",``,"**Outline** `outline-blue` `outline-green` `outline-red` — md & sm. `outline-orange` sm only.",``,"**Ghost** `ghost-blue` `ghost-red` — light tinted bg, no border.",``,"**Link** `link-primary` `link-secondary` `link-default` `link-red` — text-only.",``,"**Sizes**: md (32px) · sm (27px) · xs (19px, default variant only). `loading` replaces label with spinner."].join(`
`)}}},argTypes:{children:{control:`text`,description:`Button label text`,table:{category:`Anatomy`}},variant:{control:`select`,options:[`primary`,`default`,`negative`,`success`,`warning`,`outline-blue`,`outline-green`,`outline-red`,`outline-orange`,`ghost-blue`,`ghost-red`,`link-primary`,`link-secondary`,`link-default`,`link-red`],description:`Visual style variant`,table:{category:`Anatomy`,defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`md`,`sm`,`xs`],description:"`md` = 32px · `sm` = 27px · `xs` = 19px (default variant only)",table:{category:`Layout`,defaultValue:{summary:`md`}}},arrow:{control:`boolean`,description:`Append a down-chevron arrow to the right of the label`,table:{category:`Modifiers`,defaultValue:{summary:`false`}}},split:{control:`boolean`,description:"`true` = Menu Button (separator + arrow zone). `false` = More Button (arrow inline, no separator). Ghost variants always hide separator.",table:{category:`Modifiers`,defaultValue:{summary:`true`}}},loading:{control:`boolean`,description:`Spinner only — hides label, disables interaction`,table:{category:`State`,defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disabled state — muted colors, not interactive`,table:{category:`State`,defaultValue:{summary:`false`}}},forceState:{control:`radio`,options:[void 0,`hover`,`active`],description:`Force a visual state for stories and visual regression tests`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}},frontIcon:{control:!1,description:`Icon rendered in the left slot before the label`,table:{category:`Modifiers`}}}},p=({children:e})=>(0,d.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:e}),m=({title:e,children:t})=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,d.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`11px`,fontWeight:600,color:`var(--ds-text-muted)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:e}),t]}),h=[`Edit record`,`Duplicate`,`Archive`,`Delete`],g={args:{children:`Save`,variant:`primary`,size:`md`}},_={name:`Primary / Default`,args:{children:`Save`,variant:`primary`,size:`md`}},v={name:`Primary / Hover`,args:{children:`Save`,variant:`primary`,size:`md`,forceState:`hover`}},y={name:`Primary / Active`,args:{children:`Save`,variant:`primary`,size:`md`,forceState:`active`}},b={name:`Primary / Loader`,args:{children:`Save`,variant:`primary`,size:`md`,loading:!0}},x={name:`Primary / Disabled`,args:{children:`Save`,variant:`primary`,size:`md`,disabled:!0}},S={name:`Primary / With Arrow`,args:{children:`Actions`,variant:`primary`,size:`md`,arrow:!0}},C={name:`Primary — All States`,render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,children:`Default`}),(0,d.jsx)(o,{variant:`primary`,size:`md`,forceState:`hover`,children:`Hover`}),(0,d.jsx)(o,{variant:`primary`,size:`md`,forceState:`active`,children:`Active`}),(0,d.jsx)(o,{variant:`primary`,size:`md`,loading:!0,children:`Loading`}),(0,d.jsx)(o,{variant:`primary`,size:`md`,disabled:!0,children:`Disabled`})]})},w={name:`Filled — All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Default — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Default — sm (warning available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,size:`sm`,children:`Success`}),(0,d.jsx)(o,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,forceState:`hover`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,forceState:`hover`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,forceState:`hover`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,forceState:`hover`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Active`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,forceState:`active`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,forceState:`active`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,forceState:`active`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,forceState:`active`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Loader`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,loading:!0,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,loading:!0,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,loading:!0,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,loading:!0,children:`Success`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,disabled:!0,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,disabled:!0,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,disabled:!0,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,disabled:!0,children:`Success`})]})})]})},T={name:`Outline — All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Default — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Default — sm (orange available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,forceState:`hover`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,forceState:`hover`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,forceState:`hover`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Active`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,forceState:`active`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,forceState:`active`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,forceState:`active`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Loader`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,loading:!0,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,loading:!0,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,loading:!0,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,disabled:!0,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,disabled:!0,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,disabled:!0,children:`Outline Red`})]})})]})},E={name:`Ghost — All Variants`,render:()=>{let[e,t]=(0,u.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,d.jsx)(c,{id:t,openId:e,onClose:r,dropdownOffset:`100%`,children:n},t);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Default`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,d.jsx)(m,{title:`With arrow — md (inline, no separator)`,children:(0,d.jsxs)(p,{children:[i(`gb`,(0,d.jsx)(o,{variant:`ghost-blue`,size:`md`,arrow:!0,isOpen:e===`gb`,onClick:()=>n(`gb`),children:`More`})),i(`gr`,(0,d.jsx)(o,{variant:`ghost-red`,size:`md`,arrow:!0,isOpen:e===`gr`,onClick:()=>n(`gr`),children:`More`}))]})}),(0,d.jsx)(m,{title:`With arrow — sm (inline, no separator)`,children:(0,d.jsxs)(p,{children:[i(`gsb`,(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,arrow:!0,isOpen:e===`gsb`,onClick:()=>n(`gsb`),children:`More`})),i(`gsr`,(0,d.jsx)(o,{variant:`ghost-red`,size:`sm`,arrow:!0,isOpen:e===`gsr`,onClick:()=>n(`gsr`),children:`More`}))]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,forceState:`hover`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,forceState:`hover`,children:`Ghost Red`}),(0,d.jsx)(o,{variant:`ghost-blue`,arrow:!0,forceState:`hover`,children:`More`}),(0,d.jsx)(o,{variant:`ghost-red`,arrow:!0,forceState:`hover`,children:`More`})]})}),(0,d.jsx)(m,{title:`Active`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,forceState:`active`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,forceState:`active`,children:`Ghost Red`}),(0,d.jsx)(o,{variant:`ghost-blue`,arrow:!0,isOpen:!0,children:`More`}),(0,d.jsx)(o,{variant:`ghost-red`,arrow:!0,isOpen:!0,children:`More`})]})}),(0,d.jsx)(m,{title:`Loader`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,loading:!0,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,loading:!0,children:`Ghost Red`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,disabled:!0,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,disabled:!0,children:`Ghost Red`}),(0,d.jsx)(o,{variant:`ghost-blue`,arrow:!0,disabled:!0,children:`More`}),(0,d.jsx)(o,{variant:`ghost-red`,arrow:!0,disabled:!0,children:`More`})]})})]})}},D={name:`Link — All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Default`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`link-primary`,children:`Primary Link`}),(0,d.jsx)(o,{variant:`link-secondary`,children:`Secondary Link`}),(0,d.jsx)(o,{variant:`link-default`,children:`Default Link`}),(0,d.jsx)(o,{variant:`link-red`,children:`Red Link`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`link-primary`,forceState:`hover`,children:`Primary Link`}),(0,d.jsx)(o,{variant:`link-secondary`,forceState:`hover`,children:`Secondary Link`}),(0,d.jsx)(o,{variant:`link-default`,forceState:`hover`,children:`Default Link`}),(0,d.jsx)(o,{variant:`link-red`,forceState:`hover`,children:`Red Link`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`link-primary`,disabled:!0,children:`Primary Link`}),(0,d.jsx)(o,{variant:`link-secondary`,disabled:!0,children:`Secondary Link`}),(0,d.jsx)(o,{variant:`link-default`,disabled:!0,children:`Default Link`}),(0,d.jsx)(o,{variant:`link-red`,disabled:!0,children:`Red Link`})]})})]})},O={name:`Sizes — md & sm`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Filled — md (32px)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,size:`md`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,size:`md`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,size:`md`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Filled — sm (27px, warning available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,size:`sm`,children:`Success`}),(0,d.jsx)(o,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,d.jsx)(m,{title:`Outline — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,size:`md`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,size:`md`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Outline — sm (orange available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,d.jsx)(m,{title:`Ghost — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,size:`sm`,children:`Ghost Red`})]})})]})},k={name:`Extreme Small (xs — default only)`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Default`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Verify`}),(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Send`}),(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Export`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsx)(p,{children:(0,d.jsx)(o,{variant:`default`,size:`xs`,forceState:`hover`,children:`Verify`})})}),(0,d.jsx)(m,{title:`Active`,children:(0,d.jsx)(p,{children:(0,d.jsx)(o,{variant:`default`,size:`xs`,forceState:`active`,children:`Verify`})})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsx)(p,{children:(0,d.jsx)(o,{variant:`default`,size:`xs`,disabled:!0,children:`Verify`})})})]})},A={name:`Small Buttons — All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(m,{title:`Filled — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,children:`Add`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`Add`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,children:`Add`}),(0,d.jsx)(o,{variant:`success`,size:`sm`,children:`Add`}),(0,d.jsx)(o,{variant:`warning`,size:`sm`,children:`Add`})]})}),(0,d.jsx)(m,{title:`Outline — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,children:`Clear`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,children:`Reject`}),(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,children:`Warn`})]})}),(0,d.jsx)(m,{title:`Ghost — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,children:`Assign`}),(0,d.jsx)(o,{variant:`ghost-red`,size:`sm`,children:`Deactivate`})]})}),(0,d.jsx)(m,{title:`With arrow — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`default`,size:`sm`,arrow:!0,children:`Add`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,arrow:!0,children:`Reinvite`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,arrow:!0,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,arrow:!0,children:`Reject`})]})}),(0,d.jsx)(m,{title:`Hover — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,forceState:`hover`,children:`Assign`}),(0,d.jsx)(o,{variant:`ghost-red`,size:`sm`,forceState:`hover`,children:`Deactivate`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,forceState:`hover`,children:`Clear`})]})}),(0,d.jsx)(m,{title:`Loader — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,loading:!0,children:`Add`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,loading:!0,children:`Add`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,loading:!0,children:`Add`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,loading:!0,children:`Clear`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,loading:!0,children:`Reject`})]})}),(0,d.jsx)(m,{title:`Disabled — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,disabled:!0,children:`Add`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,disabled:!0,children:`Add`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,disabled:!0,children:`Clear`}),(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,disabled:!0,children:`Assign`})]})})]})},j={name:`Loader — All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsx)(m,{title:`Click any button — 1000ms loader`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(l,{variant:`primary`,size:`md`,children:`Save`}),(0,d.jsx)(l,{variant:`default`,size:`md`,children:`Cancel`}),(0,d.jsx)(l,{variant:`negative`,size:`md`,children:`Delete`}),(0,d.jsx)(l,{variant:`success`,size:`md`,children:`Accept`}),(0,d.jsx)(l,{variant:`outline-blue`,size:`md`,children:`Reinvite`}),(0,d.jsx)(l,{variant:`outline-green`,size:`md`,children:`Accept`}),(0,d.jsx)(l,{variant:`outline-red`,size:`md`,children:`Delete`}),(0,d.jsx)(l,{variant:`ghost-blue`,size:`md`,children:`More`}),(0,d.jsx)(l,{variant:`ghost-red`,size:`md`,children:`More`})]})}),(0,d.jsx)(m,{title:`Static loader — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,loading:!0,children:`Save`}),(0,d.jsx)(o,{variant:`default`,size:`md`,loading:!0,children:`Cancel`}),(0,d.jsx)(o,{variant:`negative`,size:`md`,loading:!0,children:`Delete`}),(0,d.jsx)(o,{variant:`success`,size:`md`,loading:!0,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,loading:!0,children:`Reinvite`}),(0,d.jsx)(o,{variant:`outline-green`,size:`md`,loading:!0,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-red`,size:`md`,loading:!0,children:`Delete`}),(0,d.jsx)(o,{variant:`ghost-blue`,size:`md`,loading:!0,children:`More`}),(0,d.jsx)(o,{variant:`ghost-red`,size:`md`,loading:!0,children:`More`})]})}),(0,d.jsx)(m,{title:`Static loader — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,loading:!0,children:`Save`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,loading:!0,children:`Cancel`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,loading:!0,children:`Delete`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,loading:!0,children:`Reinvite`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,loading:!0,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,loading:!0,children:`Delete`})]})}),(0,d.jsx)(m,{title:`Menu button loader — arrow stays, dimmed`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,loading:!0,children:`Create`}),(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,loading:!0,children:`Cancel`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,loading:!0,children:`Actions`})]})})]})},M={name:`Menu Button`,render:()=>{let[e,t]=(0,u.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,d.jsx)(c,{id:t,openId:e,onClose:r,children:n},t);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsxs)(m,{title:`Interactive — click arrow to open`,children:[(0,d.jsxs)(p,{children:[i(`p`,(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,isOpen:e===`p`,onArrowClick:()=>n(`p`),children:`Actions`})),i(`d`,(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,isOpen:e===`d`,onArrowClick:()=>n(`d`),children:`Actions`})),i(`n`,(0,d.jsx)(o,{variant:`negative`,size:`md`,arrow:!0,isOpen:e===`n`,onArrowClick:()=>n(`n`),children:`Actions`})),i(`s`,(0,d.jsx)(o,{variant:`success`,size:`md`,arrow:!0,isOpen:e===`s`,onArrowClick:()=>n(`s`),children:`Actions`}))]}),(0,d.jsxs)(p,{children:[i(`ob`,(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:e===`ob`,onArrowClick:()=>n(`ob`),children:`Actions`})),i(`og`,(0,d.jsx)(o,{variant:`outline-green`,size:`md`,arrow:!0,isOpen:e===`og`,onArrowClick:()=>n(`og`),children:`Actions`})),i(`or`,(0,d.jsx)(o,{variant:`outline-red`,size:`md`,arrow:!0,isOpen:e===`or`,onArrowClick:()=>n(`or`),children:`Actions`}))]})]}),(0,d.jsx)(m,{title:`Filled — md`,children:(0,d.jsxs)(p,{children:[i(`fp`,(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,isOpen:e===`fp`,onArrowClick:()=>n(`fp`),children:`Actions`})),i(`fd`,(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,isOpen:e===`fd`,onArrowClick:()=>n(`fd`),children:`Actions`})),i(`fn`,(0,d.jsx)(o,{variant:`negative`,size:`md`,arrow:!0,isOpen:e===`fn`,onArrowClick:()=>n(`fn`),children:`Actions`})),i(`fs`,(0,d.jsx)(o,{variant:`success`,size:`md`,arrow:!0,isOpen:e===`fs`,onArrowClick:()=>n(`fs`),children:`Actions`}))]})}),(0,d.jsx)(m,{title:`Filled — sm (warning available)`,children:(0,d.jsxs)(p,{children:[i(`sp`,(0,d.jsx)(o,{variant:`primary`,size:`sm`,arrow:!0,isOpen:e===`sp`,onArrowClick:()=>n(`sp`),children:`Actions`})),i(`sd`,(0,d.jsx)(o,{variant:`default`,size:`sm`,arrow:!0,isOpen:e===`sd`,onArrowClick:()=>n(`sd`),children:`Actions`})),i(`sn`,(0,d.jsx)(o,{variant:`negative`,size:`sm`,arrow:!0,isOpen:e===`sn`,onArrowClick:()=>n(`sn`),children:`Actions`})),i(`ss`,(0,d.jsx)(o,{variant:`success`,size:`sm`,arrow:!0,isOpen:e===`ss`,onArrowClick:()=>n(`ss`),children:`Actions`})),i(`sw`,(0,d.jsx)(o,{variant:`warning`,size:`sm`,arrow:!0,isOpen:e===`sw`,onArrowClick:()=>n(`sw`),children:`Actions`}))]})}),(0,d.jsx)(m,{title:`Outline — md`,children:(0,d.jsxs)(p,{children:[i(`mob`,(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:e===`mob`,onArrowClick:()=>n(`mob`),children:`Actions`})),i(`mog`,(0,d.jsx)(o,{variant:`outline-green`,size:`md`,arrow:!0,isOpen:e===`mog`,onArrowClick:()=>n(`mog`),children:`Actions`})),i(`mor`,(0,d.jsx)(o,{variant:`outline-red`,size:`md`,arrow:!0,isOpen:e===`mor`,onArrowClick:()=>n(`mor`),children:`Actions`}))]})}),(0,d.jsx)(m,{title:`Outline — sm (orange available)`,children:(0,d.jsxs)(p,{children:[i(`sob`,(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,arrow:!0,isOpen:e===`sob`,onArrowClick:()=>n(`sob`),children:`Actions`})),i(`sog`,(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,arrow:!0,isOpen:e===`sog`,onArrowClick:()=>n(`sog`),children:`Actions`})),i(`sor`,(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,arrow:!0,isOpen:e===`sor`,onArrowClick:()=>n(`sor`),children:`Actions`})),i(`soo`,(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,arrow:!0,isOpen:e===`soo`,onArrowClick:()=>n(`soo`),children:`Actions`}))]})}),(0,d.jsx)(m,{title:`Active (open state)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,isOpen:!0,children:`Actions`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`}),(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,forceState:`hover`,children:`Actions`})]})}),(0,d.jsx)(m,{title:`Loading (arrow stays, dimmed)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,loading:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,loading:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,loading:!0,children:`Actions`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,disabled:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,disabled:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,disabled:!0,children:`Actions`})]})})]})}},N={name:`More Button`,render:()=>{let[e,t]=(0,u.useState)(null),n=e=>t(t=>t===e?null:e),r=()=>t(null),i=(t,n)=>(0,d.jsx)(c,{id:t,openId:e,onClose:r,children:n},t);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsx)(m,{title:`Filled — md (no separator)`,children:(0,d.jsxs)(p,{children:[i(`fp`,(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,split:!1,isOpen:e===`fp`,onClick:()=>n(`fp`),children:`More`})),i(`fd`,(0,d.jsx)(o,{variant:`default`,size:`md`,arrow:!0,split:!1,isOpen:e===`fd`,onClick:()=>n(`fd`),children:`More`})),i(`fn`,(0,d.jsx)(o,{variant:`negative`,size:`md`,arrow:!0,split:!1,isOpen:e===`fn`,onClick:()=>n(`fn`),children:`More`})),i(`fs`,(0,d.jsx)(o,{variant:`success`,size:`md`,arrow:!0,split:!1,isOpen:e===`fs`,onClick:()=>n(`fs`),children:`More`}))]})}),(0,d.jsx)(m,{title:`Filled — sm (no separator, warning available)`,children:(0,d.jsxs)(p,{children:[i(`sp`,(0,d.jsx)(o,{variant:`primary`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sp`,onClick:()=>n(`sp`),children:`More`})),i(`sd`,(0,d.jsx)(o,{variant:`default`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sd`,onClick:()=>n(`sd`),children:`More`})),i(`sn`,(0,d.jsx)(o,{variant:`negative`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sn`,onClick:()=>n(`sn`),children:`More`})),i(`ss`,(0,d.jsx)(o,{variant:`success`,size:`sm`,arrow:!0,split:!1,isOpen:e===`ss`,onClick:()=>n(`ss`),children:`More`})),i(`sw`,(0,d.jsx)(o,{variant:`warning`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sw`,onClick:()=>n(`sw`),children:`More`}))]})}),(0,d.jsx)(m,{title:`Outline — md (no separator)`,children:(0,d.jsxs)(p,{children:[i(`mob`,(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,isOpen:e===`mob`,onClick:()=>n(`mob`),children:`More`})),i(`mog`,(0,d.jsx)(o,{variant:`outline-green`,size:`md`,arrow:!0,split:!1,isOpen:e===`mog`,onClick:()=>n(`mog`),children:`More`})),i(`mor`,(0,d.jsx)(o,{variant:`outline-red`,size:`md`,arrow:!0,split:!1,isOpen:e===`mor`,onClick:()=>n(`mor`),children:`More`}))]})}),(0,d.jsx)(m,{title:`Outline — sm (no separator, orange available)`,children:(0,d.jsxs)(p,{children:[i(`sob`,(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sob`,onClick:()=>n(`sob`),children:`More`})),i(`sog`,(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sog`,onClick:()=>n(`sog`),children:`More`})),i(`sor`,(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,arrow:!0,split:!1,isOpen:e===`sor`,onClick:()=>n(`sor`),children:`More`})),i(`soo`,(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,arrow:!0,split:!1,isOpen:e===`soo`,onClick:()=>n(`soo`),children:`More`}))]})}),(0,d.jsx)(m,{title:`Active (open state)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,split:!1,isOpen:!0,children:`More`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,isOpen:!0,children:`More`})]})}),(0,d.jsx)(m,{title:`Hover`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,split:!1,forceState:`hover`,children:`More`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,forceState:`hover`,children:`More`})]})}),(0,d.jsx)(m,{title:`Disabled`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`md`,arrow:!0,split:!1,disabled:!0,children:`More`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`md`,arrow:!0,split:!1,disabled:!0,children:`More`})]})})]})}},P=[{value:`yes`,label:`Yes`,outlineVariant:`outline-green`,selectedVariant:`success`},{value:`maybe`,label:`Maybe`,outlineVariant:`outline-orange`,selectedVariant:`warning`},{value:`no`,label:`No`,outlineVariant:`outline-red`,selectedVariant:`negative`}],F={name:`Group Button — Meeting Invitation`,render:()=>{let[e,t]=(0,u.useState)(void 0),[n,r]=(0,u.useState)(`yes`),[a,o]=(0,u.useState)(`maybe`),[s,c]=(0,u.useState)(`no`);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsx)(m,{title:`Interactive — collapses to single solid more button on selection`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,d.jsx)(i,{options:P,value:e,size:`sm`,onChange:t}),e&&(0,d.jsx)(`button`,{onClick:()=>t(void 0),style:{fontSize:12,color:`var(--ds-text-muted)`,background:`none`,border:`none`,cursor:`pointer`,padding:0,fontFamily:`var(--ds-font-family-base)`},children:`Reset`})]})}),(0,d.jsx)(m,{title:`Yes selected — single solid more button`,children:(0,d.jsx)(i,{options:P,value:n,size:`sm`,onChange:r})}),(0,d.jsx)(m,{title:`Maybe selected`,children:(0,d.jsx)(i,{options:P,value:a,size:`sm`,onChange:o})}),(0,d.jsx)(m,{title:`No selected`,children:(0,d.jsx)(i,{options:P,value:s,size:`sm`,onChange:c})}),(0,d.jsx)(m,{title:`Default — no selection`,children:(0,d.jsx)(i,{options:P,size:`sm`})})]})}},I={name:`Button Group — Combinations`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsx)(m,{title:`Approval — Accept / Reject (outline)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-green`,children:`Accept`}),(0,d.jsx)(o,{variant:`outline-red`,children:`Reject`})]})}),(0,d.jsx)(m,{title:`Approval — Accept / Reject (filled)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`success`,children:`Accept`}),(0,d.jsx)(o,{variant:`negative`,children:`Reject`})]})}),(0,d.jsx)(m,{title:`User Management — Reinvite / Deactivate`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,children:`Reinvite`}),(0,d.jsx)(o,{variant:`outline-red`,children:`Deactivate`})]})}),(0,d.jsx)(m,{title:`Form — Create / Cancel`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Create`}),(0,d.jsx)(o,{variant:`default`,children:`Cancel`})]})}),(0,d.jsx)(m,{title:`Record actions — Save / Save and Close / Cancel`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Save`}),(0,d.jsx)(o,{variant:`default`,children:`Save and Close`}),(0,d.jsx)(o,{variant:`default`,children:`Cancel`})]})}),(0,d.jsx)(m,{title:`Bulk — Save / Add & Reorder / Cancel`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Save`}),(0,d.jsx)(o,{variant:`primary`,children:`Add & Reorder`}),(0,d.jsx)(o,{variant:`default`,children:`Cancel`})]})})]})},L={name:`Keyboard Focus`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,d.jsx)(m,{title:`Filled — md (Tab to focus)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Outline — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Ghost — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,d.jsx)(m,{title:`Link — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`link-primary`,children:`Link Primary`}),(0,d.jsx)(o,{variant:`link-secondary`,children:`Link Secondary`}),(0,d.jsx)(o,{variant:`link-default`,children:`Link Default`}),(0,d.jsx)(o,{variant:`link-red`,children:`Link Red`})]})}),(0,d.jsx)(m,{title:`With arrow — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,arrow:!0,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,arrow:!0,children:`Default`}),(0,d.jsx)(o,{variant:`outline-blue`,arrow:!0,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`ghost-blue`,arrow:!0,children:`Ghost Blue`})]})}),(0,d.jsx)(m,{title:`sm size`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`Default`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`})]})}),(0,d.jsx)(m,{title:`xs size — default only`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Verify`}),(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Send`})]})})]})},R={name:`Overview — All Buttons`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:8},children:[(0,d.jsx)(m,{title:`Filled — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,children:`Success`})]})}),(0,d.jsx)(m,{title:`Filled — sm (warning available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,size:`sm`,children:`Primary`}),(0,d.jsx)(o,{variant:`default`,size:`sm`,children:`Default`}),(0,d.jsx)(o,{variant:`negative`,size:`sm`,children:`Negative`}),(0,d.jsx)(o,{variant:`success`,size:`sm`,children:`Success`}),(0,d.jsx)(o,{variant:`warning`,size:`sm`,children:`Warning`})]})}),(0,d.jsx)(m,{title:`Outline — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,children:`Outline Red`})]})}),(0,d.jsx)(m,{title:`Outline — sm (orange available)`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,children:`Outline Blue`}),(0,d.jsx)(o,{variant:`outline-green`,size:`sm`,children:`Outline Green`}),(0,d.jsx)(o,{variant:`outline-red`,size:`sm`,children:`Outline Red`}),(0,d.jsx)(o,{variant:`outline-orange`,size:`sm`,children:`Outline Orange`})]})}),(0,d.jsx)(m,{title:`Ghost — md`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,children:`Ghost Red`})]})}),(0,d.jsx)(m,{title:`Ghost — sm`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`ghost-blue`,size:`sm`,children:`Ghost Blue`}),(0,d.jsx)(o,{variant:`ghost-red`,size:`sm`,children:`Ghost Red`})]})}),(0,d.jsx)(m,{title:`Link`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`link-primary`,children:`Primary Link`}),(0,d.jsx)(o,{variant:`link-secondary`,children:`Secondary Link`}),(0,d.jsx)(o,{variant:`link-default`,children:`Default Link`}),(0,d.jsx)(o,{variant:`link-red`,children:`Red Link`})]})}),(0,d.jsx)(m,{title:`With Arrow — menu button`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`primary`,arrow:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`default`,arrow:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,arrow:!0,children:`Actions`}),(0,d.jsx)(o,{variant:`outline-blue`,size:`sm`,arrow:!0,children:`Actions`})]})}),(0,d.jsx)(m,{title:`Extreme Small (xs) — default only`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Verify`}),(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Send`}),(0,d.jsx)(o,{variant:`default`,size:`xs`,children:`Export`})]})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Default',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Hover',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    forceState: 'hover'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Active',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    forceState: 'active'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Loader',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Disabled',
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Primary / With Arrow',
  args: {
    children: 'Actions',
    variant: 'primary',
    size: 'md',
    arrow: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Primary — All States',
  render: () => <Row>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="md" forceState="hover">Hover</Button>
      <Button variant="primary" size="md" forceState="active">Active</Button>
      <Button variant="primary" size="md" loading>Loading</Button>
      <Button variant="primary" size="md" disabled>Disabled</Button>
    </Row>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Group Button — Meeting Invitation RSVP.
Unselected: three small outline buttons (Yes / Maybe / No).
Selected: collapses to a single solid more button (filled + arrow).
Figma: node 34442:87663.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Common action bar templates — exact button text and variants from Figma node 93641:149261.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`PrimaryDefault`,`PrimaryHover`,`PrimaryActive`,`PrimaryLoader`,`PrimaryDisabled`,`PrimaryWithArrow`,`PrimaryAllStates`,`FilledVariants`,`OutlineVariants`,`GhostVariants`,`LinkVariants`,`Sizes`,`ExtremeSmall`,`SmallButtons`,`LoaderState`,`MenuButton`,`MoreButton`,`GroupButtonMeetingInvitation`,`ButtonGroupCombinations`,`KeyboardFocus`,`Overview`]}))();export{I as ButtonGroupCombinations,k as ExtremeSmall,w as FilledVariants,E as GhostVariants,F as GroupButtonMeetingInvitation,L as KeyboardFocus,D as LinkVariants,j as LoaderState,M as MenuButton,N as MoreButton,T as OutlineVariants,R as Overview,g as Playground,y as PrimaryActive,C as PrimaryAllStates,_ as PrimaryDefault,x as PrimaryDisabled,v as PrimaryHover,b as PrimaryLoader,S as PrimaryWithArrow,O as Sizes,A as SmallButtons,z as __namedExportsOrder,f as default};