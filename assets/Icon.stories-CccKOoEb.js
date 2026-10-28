import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DFHseiZq.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{A as i,At as a,B as o,Bt as s,Ct as c,D as l,Dt as ee,E as te,F as ne,Ft as re,G as ie,Gt as ae,H as oe,Ht as se,I as ce,J as le,Jt as ue,K as de,Kt as fe,L as pe,Lt as u,M as me,N as he,O as ge,Ot as _e,Q as ve,R as ye,Rt as d,St as be,Tt as xe,U as Se,Ut as Ce,V as we,Vt as Te,W as Ee,Wt as De,X as Oe,Y as ke,Yt as Ae,Z as je,_ as f,_t as Me,a as Ne,at as Pe,bt as Fe,c as Ie,ct as Le,d as Re,dt as ze,et as p,f as m,ft as Be,g as h,gt as Ve,h as g,ht as He,i as _,it as Ue,j as v,jt as We,k as y,kt as Ge,l as b,lt as Ke,m as x,mt as qe,n as S,nt as Je,o as Ye,ot as Xe,p as C,pt as Ze,q as Qe,qt as $e,r as w,rt as et,s as tt,st as nt,t as T,tt as rt,u as E,ut as it,w as D,wt as at,xt as ot,yt as st,z as ct,zt as lt}from"./Icons-zkj-61eo.js";import{n as ut,t as dt}from"./Tooltip-B0WUKio8.js";import{n as ft,t as pt}from"./Input-DQXewhsx.js";import{n as mt,t as ht}from"./MessageBox-CRSUkrY0.js";import{n as O,r as gt}from"./CrmCatalog-sZaNeVyM.js";import{i as _t,n as vt,r as k,t as A}from"./Icon-Bsoo8P_Z.js";function yt({name:e,onFeedback:t}){async function n(){try{await navigator.clipboard.writeText(e),t({message:`Copied`,variant:`success`})}catch{t({message:`Could not copy ${e}. Please copy the ID below manually.`,variant:`error`})}}return(0,N.jsx)(`button`,{type:`button`,"aria-label":`Copy icon ID: ${e}`,title:`Copy icon ID`,onClick:n,style:{position:`absolute`,top:4,right:4,padding:5,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:4,background:`var(--ds-bg-common-card)`,color:`var(--ds-text-label)`,cursor:`pointer`},children:(0,N.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.3`,"aria-hidden":`true`,children:[(0,N.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`8`,height:`8`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2`})]})})}function j({label:e,children:t}){return(0,N.jsxs)(`div`,{style:bt,title:e,children:[t,(0,N.jsx)(`span`,{style:xt,children:e})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,bt,xt,X,Z,Q,$;e((()=>{M=t(n(),1),mt(),ft(),vt(),_t(),gt(),ut(),Ae(),N=r(),{expect:P,userEvent:F,within:I}=__STORYBOOK_MODULE_TEST__,L=Object.keys(k).sort(),R={title:`Design System/Foundations/Icons`,component:A,parameters:{layout:`centered`,docs:{description:{component:["Renders a design-system icon from the central registry (`iconMap.ts`).",`Source: crm-icon-library Figma file (node 91-19).`,`Icons: AlertError · AlertInfo · AlertSuccess · AlertWarning · Check · ChevronDownFilled · Close · CloseSmall · CompanyAvatar · CriteriaMinus · CriteriaPlus · Edit · GroupAvatar · HelpCircle · ImageAvatar · Info · Lock · More · ResizeHandle · Search · UserAvatar.`,"Line icons use `currentColor`. Alert icons use fixed Figma brand colors."].join(` `)}}},argTypes:{name:{control:`select`,options:L,description:"Icon to render — must match a key in `iconMap`",table:{category:`Core`}},size:{control:{type:`number`,min:12,max:64,step:4},description:`Width and height in px — icon scales proportionally`,table:{category:`Core`,defaultValue:{summary:`16`}}},className:{control:`text`,description:`CSS class applied to the SVG element (use for color via currentColor)`,table:{category:`Styling`}},title:{control:`text`,description:`Accessible label — applied as aria-label; turns the icon into role="img"`,table:{category:`Accessibility`}},"aria-label":{control:`text`,description:`Explicit aria-label — overrides title`,table:{category:`Accessibility`}},"aria-hidden":{control:`boolean`,description:`Override auto aria-hidden (true by default for decorative icons)`,table:{category:`Accessibility`}}}},z={name:`Playground`,args:{name:`Info`,size:24},render:e=>(0,N.jsx)(`div`,{style:{color:`var(--ds-text-base)`},children:(0,N.jsx)(A,{...e})})},B={name:`Mobile and Email`,parameters:{controls:{disable:!0},docs:{description:{story:`Mobile and Email imported from the CRM Icon Help document (zcicn-mobile and zcicn-emails). Assets are bundled locally; no internal server is required at runtime. Shown at 16, 20, and 24px.`}}},render:()=>(0,N.jsx)(`div`,{style:{display:`flex`,gap:`var(--ds-line-height-base)`,color:`var(--ds-text-base)`,fontFamily:`var(--ds-font-family-base)`},children:[`Mobile`,`Email`].map(e=>(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{children:e}),(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--ds-line-height-base)`},children:[16,20,24].map(t=>(0,N.jsx)(A,{name:e,size:t,"aria-label":`${e} ${t}px`},t))}),(0,N.jsx)(A,{name:e,size:16})]},e))}),play:async({canvasElement:e})=>{let t=I(e);for(let e of[`Mobile`,`Email`])for(let n of[16,20,24]){let r=t.getByRole(`img`,{name:`${e} ${n}px`});await P(r).toHaveAttribute(`width`,String(n)),await P(r).toHaveAttribute(`height`,String(n)),await P(r.querySelector(`path`)).not.toBeNull(),await P(r.querySelector(`use`)).toBeNull()}await P(e.querySelectorAll(`svg[aria-hidden="true"]`)).toHaveLength(2)}},V={name:`Gallery`,parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,M.useState)(``),[n,r]=(0,M.useState)(0),[i,a]=(0,M.useState)(null);(0,M.useEffect)(()=>{if(!i)return;let e=window.setTimeout(()=>a(null),3e3);return()=>window.clearTimeout(e)},[i]);let o=e.trim().toLowerCase().split(/\s+/).filter(Boolean),s=L.filter(e=>{let t=O[e]?.keywords??``;return o.every(n=>`${e} ${t}`.toLowerCase().includes(n))}),c=s.slice(n*120,(n+1)*120);return(0,N.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`,width:`800px`,maxWidth:`100%`},children:[i&&(0,N.jsx)(ht,{variant:i.variant,message:i.message,onClose:()=>a(null),style:{position:`fixed`,top:20,left:`50%`,transform:`translateX(-50%)`,zIndex:1e4,maxWidth:`calc(100vw - 32px)`}}),(0,N.jsx)(pt,{type:`search`,label:`Search icons`,layout:`vertical`,width:`100%`,placeholder:`Search icons by name or keyword`,value:e,onChange:e=>{t(e.target.value),r(0)}}),(0,N.jsxs)(`p`,{role:`status`,style:{fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-label)`,marginBlock:`var(--ds-line-height-base)`},children:[s.length,` of `,L.length,` icons`]}),s.length===0&&(0,N.jsx)(`p`,{style:{color:`var(--ds-text-base)`},children:`No icons found. Try another name.`}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(88px, 1fr))`,gap:`8px`,width:`800px`,maxWidth:`100%`},children:c.map(e=>{let t=k[e],n=O[e],r=n?Math.min(1,64/Math.max(n.width,n.height)):1;return(0,N.jsx)(dt,{content:O[e]?.keywords??e,variant:`black`,wrapperStyle:{display:`block`},children:(0,N.jsxs)(`div`,{tabIndex:0,"aria-label":e,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`10px`,position:`relative`,padding:`36px 8px 14px`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:`8px`,background:`var(--ds-bg-common-card)`,color:`var(--ds-text-base)`,cursor:`default`,transition:`background 120ms`},children:[(0,N.jsx)(t,{width:n?n.width*r:void 0,height:n?n.height*r:void 0,"aria-hidden":`true`,style:{flexShrink:0,maxWidth:64,maxHeight:64,objectFit:`contain`}}),(0,N.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`,lineHeight:`14px`,wordBreak:`break-word`},children:e}),(0,N.jsx)(yt,{name:e,onFeedback:a})]})},e)})}),(0,N.jsxs)(`nav`,{"aria-label":`Icon gallery pages`,style:{display:`flex`,gap:16,alignItems:`center`,marginTop:16},children:[(0,N.jsx)(`button`,{type:`button`,disabled:n===0,onClick:()=>r(e=>e-1),children:`Previous`}),(0,N.jsxs)(`span`,{children:[`Page `,n+1,` of `,Math.max(1,Math.ceil(s.length/120))]}),(0,N.jsx)(`button`,{type:`button`,disabled:(n+1)*120>=s.length,onClick:()=>r(e=>e+1),children:`Next`})]})]})}},H={...V,name:`Gallery Search`,play:async({canvasElement:e})=>{let t=I(e),n=t.getByRole(`searchbox`,{name:`Search icons`});await F.type(n,`  mObIlE  `),await P(t.getByText(`Mobile`,{exact:!0})).toBeVisible(),await P(t.queryByText(`Email`,{exact:!0})).not.toBeInTheDocument(),await F.clear(n),await F.type(n,`no-matching-icon`),await P(t.getByText(`No icons found. Try another name.`)).toBeVisible(),await F.clear(n),await F.type(n,`CrmArrowBack`);let r=t.getByLabelText(`CrmArrowBack`,{exact:!0}).querySelector(`svg`);await P(r).toHaveAttribute(`width`,String(O.CrmArrowBack.width)),await P(r).toHaveAttribute(`height`,String(O.CrmArrowBack.height));let i=L.find(e=>{let t=O[e];return t&&Math.max(t.width,t.height)>64});if(i){await F.clear(n),await F.type(n,i);let e=t.getByLabelText(i,{exact:!0}).querySelector(`svg`).getBoundingClientRect();await P(Math.max(e.width,e.height)).toBeLessThanOrEqual(64);let r=O[i];await P(e.width/e.height).toBeCloseTo(r.width/r.height,1)}await F.clear(n),await F.type(n,`arrow sort`),await P(t.getByText(`CrmArrowSort`,{exact:!0})).toBeVisible();let a=t.getByLabelText(`CrmArrowSort`,{exact:!0});await F.hover(a),await P(await I(e.ownerDocument.body).findByRole(`tooltip`)).toBeVisible(),await F.unhover(a),await F.clear(n),await F.type(n,`Email`),await P(t.getByText(`Email`,{exact:!0})).toBeVisible(),await F.clear(n),await P(t.getByRole(`status`)).toHaveTextContent(`${L.length} of ${L.length} icons`)}},U={...V,name:`Gallery Copy`,play:async({canvasElement:e})=>{let t=I(e),n=t.getByRole(`searchbox`,{name:`Search icons`});await F.type(n,`Mobile`);let r=Object.getOwnPropertyDescriptor(navigator,`clipboard`),i=``;Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{writeText:async e=>{i=e}}});try{let e=t.getByRole(`button`,{name:`Copy icon ID: Mobile`,exact:!0}),n=e.innerHTML;await F.click(e),await P(i).toBe(`Mobile`),await P(t.getByText(`Copied`,{exact:!0})).toBeVisible(),await P(e.innerHTML).toBe(n),await F.click(t.getByRole(`button`,{name:`Dismiss`,exact:!0})),await P(t.queryByText(`Copied`,{exact:!0})).not.toBeInTheDocument(),Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{writeText:async()=>{throw Error(`Clipboard denied`)}}}),await F.click(t.getByRole(`button`,{name:`Copy icon ID: Mobile`,exact:!0})),await P(t.getByText(`Could not copy Mobile. Please copy the ID below manually.`)).toBeVisible()}finally{r?Object.defineProperty(navigator,"clipboard",r):Reflect.deleteProperty(navigator,`clipboard`)}}},W={name:`Size Scale`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,color:`var(--ds-text-base)`,fontFamily:`var(--ds-font-family-base)`},children:[12,16,20,24,32,48].map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(A,{name:`Info`,size:e}),(0,N.jsxs)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`},children:[e,`px`]})]},e))})},G={name:`Color Inheritance`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`,fontFamily:`var(--ds-font-family-base)`},children:[[`var(--ds-text-base)`,`Base`],[`var(--ds-text-label)`,`Label`],[`#5464F2`,`Primary`],[`#FF5D5A`,`Error`],[`#F5A623`,`Warning`],[`#2ECC71`,`Success`]].map(([e,t])=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,color:e},children:[(0,N.jsx)(A,{name:`Lock`,size:20}),(0,N.jsx)(`span`,{style:{fontSize:`11px`},children:t})]},t))})},K={name:`Alert Icons`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`},children:[[w,`AlertSuccess`,`#12AA67`],[T,`AlertError`,`#FF5D5A`],[_,`AlertWarning`,`#F18E0A`],[S,`AlertInfo`,`#24CBB7`]].map(([e,t,n])=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(e,{}),(0,N.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t}),(0,N.jsx)(`span`,{style:{fontSize:`10px`,color:n,fontWeight:600},children:n})]},t))})},q={name:`Line Icons`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`,color:`var(--ds-text-base)`},children:[[b,`Check`,11],[E,`ChevronDownFilled`,10],[m,`Close`,8],[C,`CloseSmall`,8],[h,`CriteriaMinus`,16],[f,`CriteriaPlus`,16],[D,`Edit`,12],[y,`HelpCircle`,16],[me,`Info`,18],[he,`Lock`,16],[ve,`More`,16],[p,`ResizeHandle`,10],[a,`Search`,14]].map(([e,t,n])=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(e,{width:n,height:n}),(0,N.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))})},J={name:`Avatar Icons`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`,display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`},children:[[u,`UserAvatar`],[l,`GroupAvatar`],[x,`CompanyAvatar`],[i,`ImageAvatar`]].map(([e,t])=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(e,{width:48,height:48}),(0,N.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))}),(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`},children:[[d,`UserAvatarDark`],[ge,`GroupAvatarDark`],[g,`CompanyAvatarDark`],[v,`ImageAvatarDark`]].map(([e,t])=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(e,{width:48,height:48}),(0,N.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))})]})},Y={name:`Accessibility`,parameters:{controls:{disable:!0}},render:()=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontFamily:`var(--ds-font-family-base)`,fontSize:`14px`,color:`var(--ds-text-base)`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(A,{name:`Info`,size:16}),(0,N.jsx)(`span`,{children:`Decorative — aria-hidden="true" applied automatically (no label needed)`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(A,{name:`Lock`,size:16,"aria-label":`Locked`}),(0,N.jsx)(`span`,{children:`Meaningful — role="img" aria-label="Locked" (screen readers announce it)`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,N.jsx)(A,{name:`Search`,size:16,title:`Search records`}),(0,N.jsx)(`span`,{children:`Meaningful via title — same effect as aria-label`})]})]})},bt={display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`10px`,padding:`18px 8px 12px`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:`8px`,background:`var(--ds-bg-common-card)`,cursor:`default`},xt={fontSize:`10px`,color:`var(--ds-text-label)`,textAlign:`center`,lineHeight:`13px`,wordBreak:`break-word`,maxWidth:`80px`},X={display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(96px, 1fr))`,gap:`8px`},Z={fontSize:`11px`,fontWeight:600,color:`var(--ds-text-label)`,letterSpacing:`0.06em`,textTransform:`uppercase`,marginBottom:`10px`,marginTop:`28px`},Q={name:`All Icons`,parameters:{controls:{disable:!0},layout:`padded`},render:()=>(0,N.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`,maxWidth:`960px`,color:`var(--ds-text-base)`},children:[(0,N.jsx)(`div`,{style:Z,children:`Utility`}),(0,N.jsx)(`div`,{style:X,children:[[`Info`,(0,N.jsx)(me,{width:18,height:18},`i`)],[`Lock`,(0,N.jsx)(he,{width:16,height:16},`l`)],[`Search`,(0,N.jsx)(a,{width:14,height:14},`s`)],[`More`,(0,N.jsx)(ve,{width:16,height:16},`m`)],[`Check`,(0,N.jsx)(b,{width:11,height:8},`ch`)],[`ChevronDownFilled`,(0,N.jsx)(E,{width:10,height:5},`cdf`)],[`ChevronUp`,(0,N.jsx)(Re,{width:10,height:5},`cu`)],[`Edit`,(0,N.jsx)(D,{width:12,height:12},`e`)],[`Close`,(0,N.jsx)(m,{width:8,height:8},`cl`)],[`CloseSmall`,(0,N.jsx)(C,{width:8,height:8},`cs`)],[`ResizeHandle`,(0,N.jsx)(p,{width:10,height:10},`r`)],[`CriteriaMinus`,(0,N.jsx)(h,{width:16,height:16},`cm`)],[`CriteriaPlus`,(0,N.jsx)(f,{width:16,height:16},`cp`)],[`HelpCircle`,(0,N.jsx)(y,{width:16,height:16},`hc`)],[`Folder`,(0,N.jsx)(te,{width:16,height:14},`fo`)],[`SidebarCollapse`,(0,N.jsx)(re,{width:16,height:16},`sc`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`Alert`}),(0,N.jsx)(`div`,{style:X,children:[[`AlertSuccess`,(0,N.jsx)(w,{width:22,height:22},`as`)],[`AlertError`,(0,N.jsx)(T,{width:22,height:22},`ae`)],[`AlertWarning`,(0,N.jsx)(_,{width:22,height:22},`aw`)],[`AlertInfo`,(0,N.jsx)(S,{width:22,height:22},`ai`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`Avatar`}),(0,N.jsx)(`div`,{style:X,children:[[`UserAvatar`,(0,N.jsx)(u,{width:40,height:40},`ua`)],[`GroupAvatar`,(0,N.jsx)(l,{width:40,height:40},`ga`)],[`CompanyAvatar`,(0,N.jsx)(x,{width:40,height:40},`ca`)],[`ImageAvatar`,(0,N.jsx)(i,{width:40,height:40},`ima`)],[`UserAvatarDark`,(0,N.jsx)(d,{width:40,height:40},`uad`)],[`GroupAvatarDark`,(0,N.jsx)(ge,{width:40,height:40},`gad`)],[`CompanyAvatarDark`,(0,N.jsx)(g,{width:40,height:40},`cad`)],[`ImageAvatarDark`,(0,N.jsx)(v,{width:40,height:40},`iad`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`Module`}),(0,N.jsx)(`div`,{style:X,children:[[`Home`,(0,N.jsx)(Ee,{width:16,height:15},`mh`)],[`Analytics`,(0,N.jsx)(pe,{width:17,height:16},`man`)],[`Reports`,(0,N.jsx)(ke,{width:16,height:16},`mr`)],[`Leads`,(0,N.jsx)(ie,{width:16,height:16},`ml`)],[`Contacts`,(0,N.jsx)(ct,{width:16,height:16},`mc`)],[`Accounts`,(0,N.jsx)(ne,{width:17,height:16},`mac`)],[`Deals`,(0,N.jsx)(we,{width:16,height:16},`md`)],[`Forecasts`,(0,N.jsx)(Se,{width:16,height:16},`mf`)],[`Products`,(0,N.jsx)(le,{width:16,height:16},`mp`)],[`Cases`,(0,N.jsx)(ye,{width:18,height:16},`mca`)],[`Solutions`,(0,N.jsx)(je,{width:17,height:16},`ms`)],[`Activities`,(0,N.jsx)(ce,{width:16,height:16},`ma`)],[`Meeting`,(0,N.jsx)(de,{width:16,height:18},`mm`)],[`Docs`,(0,N.jsx)(oe,{width:16,height:16},`mdo`)],[`Social`,(0,N.jsx)(Oe,{width:16,height:16},`mso`)],[`Custom`,(0,N.jsx)(o,{width:16,height:16},`mcu`)],[`My Jobs`,(0,N.jsx)(Qe,{width:16,height:16},`mmj`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`Top Bar`}),(0,N.jsx)(`div`,{style:X,children:[[`Bell`,(0,N.jsx)(Ye,{width:18,height:18},`bl`)],[`Calendar`,(0,N.jsx)(Ie,{width:18,height:18},`cl`)],[`Settings`,(0,N.jsx)(We,{width:18,height:18},`sg`)],[`BentoMenu`,(0,N.jsx)(tt,{width:16,height:16},`bm`)],[`ZiaAI`,(0,N.jsx)(ue,{width:21,height:20},`za`)],[`AppMarket`,(0,N.jsx)(Ne,{width:18,height:17},`am`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`WMS Bar`}),(0,N.jsx)(`div`,{style:X,children:[[`WmsMotivator`,(0,N.jsx)(Ce,{width:14,height:14},`mo`)],[`WmsReminder`,(0,N.jsx)(ae,{width:16,height:15},`ac`)],[`WmsZia`,(0,N.jsx)($e,{width:17,height:13},`zi`)],[`WmsComment`,(0,N.jsx)(se,{width:14,height:14},`co`)],[`WmsAnnouncements`,(0,N.jsx)(lt,{width:13,height:17},`an`)],[`WmsChat`,(0,N.jsx)(Te,{width:14,height:14},`wc`)],[`WmsChannel`,(0,N.jsx)(s,{width:14,height:14},`wch`)],[`WmsNotes`,(0,N.jsx)(De,{width:13,height:15},`wn`)],[`WmsUsers`,(0,N.jsx)(fe,{width:14,height:14},`wu`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))}),(0,N.jsx)(`div`,{style:Z,children:`Rich Text Editor`}),(0,N.jsx)(`div`,{style:X,children:[[`RtBold`,(0,N.jsx)(nt,{width:16,height:16},`rb`)],[`RtItalic`,(0,N.jsx)(Fe,{width:16,height:16},`ri`)],[`RtUnderline`,(0,N.jsx)(_e,{width:16,height:16},`ru`)],[`RtStrikethrough`,(0,N.jsx)(at,{width:16,height:16},`rs`)],[`RtSubscript`,(0,N.jsx)(xe,{width:16,height:16},`rss`)],[`RtFontColor`,(0,N.jsx)(Ve,{width:16,height:16},`rfc`)],[`RtBgColor`,(0,N.jsx)(Pe,{width:16,height:16},`rbc`)],[`RtAlignLeft`,(0,N.jsx)(et,{width:16,height:16},`ral`)],[`RtAlignCenter`,(0,N.jsx)(rt,{width:16,height:16},`rac`)],[`RtAlignRight`,(0,N.jsx)(Ue,{width:16,height:16},`rar`)],[`RtAlignJustify`,(0,N.jsx)(Je,{width:16,height:16},`raj`)],[`RtBulletList`,(0,N.jsx)(Le,{width:16,height:16},`rbl`)],[`RtIndentRight`,(0,N.jsx)(st,{width:16,height:16},`rir`)],[`RtLineHeight`,(0,N.jsx)(ot,{width:16,height:16},`rlh`)],[`RtImage`,(0,N.jsx)(Me,{width:16,height:16},`rim`)],[`RtUnlink`,(0,N.jsx)(Ge,{width:16,height:16},`run`)],[`RtTable`,(0,N.jsx)(ee,{width:16,height:16},`rt`)],[`RtEvenHeight`,(0,N.jsx)(qe,{width:16,height:16},`reh`)],[`RtBlockquote`,(0,N.jsx)(Xe,{width:16,height:16},`rbq`)],[`RtCode`,(0,N.jsx)(ze,{width:16,height:16},`rc`)],[`RtSpellCheck`,(0,N.jsx)(c,{width:16,height:16},`rsc`)],[`RtQuote`,(0,N.jsx)(be,{width:16,height:16},`rq`)],[`RtChecklist`,(0,N.jsx)(Ke,{width:16,height:16},`rcl`)],[`RtCopyright`,(0,N.jsx)(Be,{width:16,height:16},`rco`)],[`RtClearFormat`,(0,N.jsx)(it,{width:16,height:16},`rcf`)],[`RtExpand`,(0,N.jsx)(He,{width:12,height:12},`re`)],[`RtEmoji`,(0,N.jsx)(Ze,{width:16,height:16},`rem`)]].map(([e,t])=>(0,N.jsx)(j,{label:e,children:t},e))})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    name: 'Info',
    size: 24
  },
  render: args => <div style={{
    color: 'var(--ds-text-base)'
  }}>
      <Icon {...args} />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to change the icon name and size.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Mobile and Email',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Mobile and Email imported from the CRM Icon Help document (zcicn-mobile and zcicn-emails). Assets are bundled locally; no internal server is required at runtime. Shown at 16, 20, and 24px.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--ds-line-height-base)',
    color: 'var(--ds-text-base)',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {(['Mobile', 'Email'] as const).map(name => <div key={name}>
          <p>{name}</p>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ds-line-height-base)'
      }}>
            {[16, 20, 24].map(size => <Icon key={size} name={name} size={size} aria-label={\`\${name} \${size}px\`} />)}
          </div>
          <Icon name={name} size={16} />
        </div>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const name of ['Mobile', 'Email']) {
      for (const size of [16, 20, 24]) {
        const icon = canvas.getByRole('img', {
          name: \`\${name} \${size}px\`
        });
        await expect(icon).toHaveAttribute('width', String(size));
        await expect(icon).toHaveAttribute('height', String(size));
        await expect(icon.querySelector('path')).not.toBeNull();
        await expect(icon.querySelector('use')).toBeNull();
      }
    }
    await expect(canvasElement.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2);
  }
}`,...B.parameters?.docs?.source},description:{story:`Only the two requested icons from the CRM Icon Help document.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function GalleryRender() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const [feedback, setFeedback] = useState<CopyFeedback | null>(null);
    useEffect(() => {
      if (!feedback) return;
      const timeout = window.setTimeout(() => setFeedback(null), 3000);
      return () => window.clearTimeout(timeout);
    }, [feedback]);
    const pageSize = 120;
    const terms = query.trim().toLowerCase().split(/\\s+/).filter(Boolean);
    const filteredIcons = galleryIcons.filter(name => {
      const keywords = crmIconMetadata[name]?.keywords ?? '';
      return terms.every(term => \`\${name} \${keywords}\`.toLowerCase().includes(term));
    });
    const shownIcons = filteredIcons.slice(page * pageSize, (page + 1) * pageSize);
    return <div style={{
      fontFamily: 'var(--ds-font-family-base)',
      width: '800px',
      maxWidth: '100%'
    }}>
      {feedback && <MessageBox variant={feedback.variant} message={feedback.message} onClose={() => setFeedback(null)} style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        maxWidth: 'calc(100vw - 32px)'
      }} />}
      <Input type="search" label="Search icons" layout="vertical" width="100%" placeholder="Search icons by name or keyword" value={query} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        setPage(0);
      }} />
      <p role="status" style={{
        fontSize: 'var(--ds-font-size-base)',
        color: 'var(--ds-text-label)',
        marginBlock: 'var(--ds-line-height-base)'
      }}>
        {filteredIcons.length} of {galleryIcons.length} icons
      </p>
      {filteredIcons.length === 0 && <p style={{
        color: 'var(--ds-text-base)'
      }}>No icons found. Try another name.</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
        gap: '8px',
        width: '800px',
        maxWidth: '100%'
      }}>
        {shownIcons.map(name => {
          const GalleryIcon = iconMap[name];
          const dimensions = crmIconMetadata[name];
          const scale = dimensions ? Math.min(1, 64 / Math.max(dimensions.width, dimensions.height)) : 1;
          return <Tooltip key={name} content={crmIconMetadata[name]?.keywords ?? name} variant="black" wrapperStyle={{
            display: 'block'
          }}>
          <div tabIndex={0} aria-label={name} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              position: 'relative',
              padding: '36px 8px 14px',
              border: '1px solid var(--ds-components-input-default-outline)',
              borderRadius: '8px',
              background: 'var(--ds-bg-common-card)',
              color: 'var(--ds-text-base)',
              cursor: 'default',
              transition: 'background 120ms'
            }}>
            <GalleryIcon width={dimensions ? dimensions.width * scale : undefined} height={dimensions ? dimensions.height * scale : undefined} aria-hidden="true" style={{
                flexShrink: 0,
                maxWidth: 64,
                maxHeight: 64,
                objectFit: 'contain'
              }} />
            <span style={{
                fontSize: '11px',
                color: 'var(--ds-text-label)',
                textAlign: 'center',
                lineHeight: '14px',
                wordBreak: 'break-word'
              }}>
              {name}
            </span>
            <CopyIconId name={name} onFeedback={setFeedback} />
          </div>
          </Tooltip>;
        })}
      </div>
      <nav aria-label="Icon gallery pages" style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        marginTop: 16
      }}>
        <button type="button" disabled={page === 0} onClick={() => setPage(value => value - 1)}>Previous</button>
        <span>Page {page + 1} of {Math.max(1, Math.ceil(filteredIcons.length / pageSize))}</span>
        <button type="button" disabled={(page + 1) * pageSize >= filteredIcons.length} onClick={() => setPage(value => value + 1)}>Next</button>
      </nav>
    </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:`All registered icons displayed in a responsive grid.
Automatically reflects iconMap — add a new entry there and it appears here.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...Gallery,
  name: 'Gallery Search',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByRole('searchbox', {
      name: 'Search icons'
    });
    await userEvent.type(search, '  mObIlE  ');
    await expect(canvas.getByText('Mobile', {
      exact: true
    })).toBeVisible();
    await expect(canvas.queryByText('Email', {
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.clear(search);
    await userEvent.type(search, 'no-matching-icon');
    await expect(canvas.getByText('No icons found. Try another name.')).toBeVisible();
    await userEvent.clear(search);
    await userEvent.type(search, 'CrmArrowBack');
    const nativeIcon = canvas.getByLabelText('CrmArrowBack', {
      exact: true
    }).querySelector('svg');
    await expect(nativeIcon).toHaveAttribute('width', String(crmIconMetadata.CrmArrowBack.width));
    await expect(nativeIcon).toHaveAttribute('height', String(crmIconMetadata.CrmArrowBack.height));
    const largeName = galleryIcons.find(name => {
      const dimensions = crmIconMetadata[name];
      return dimensions && Math.max(dimensions.width, dimensions.height) > 64;
    });
    if (largeName) {
      await userEvent.clear(search);
      await userEvent.type(search, largeName);
      const largeIcon = canvas.getByLabelText(largeName, {
        exact: true
      }).querySelector('svg')!;
      const bounds = largeIcon.getBoundingClientRect();
      await expect(Math.max(bounds.width, bounds.height)).toBeLessThanOrEqual(64);
      const dimensions = crmIconMetadata[largeName];
      await expect(bounds.width / bounds.height).toBeCloseTo(dimensions.width / dimensions.height, 1);
    }
    await userEvent.clear(search);
    await userEvent.type(search, 'arrow sort');
    await expect(canvas.getByText('CrmArrowSort', {
      exact: true
    })).toBeVisible();
    const tile = canvas.getByLabelText('CrmArrowSort', {
      exact: true
    });
    await userEvent.hover(tile);
    await expect(await within(canvasElement.ownerDocument.body).findByRole('tooltip')).toBeVisible();
    await userEvent.unhover(tile);
    await userEvent.clear(search);
    await userEvent.type(search, 'Email');
    await expect(canvas.getByText('Email', {
      exact: true
    })).toBeVisible();
    await userEvent.clear(search);
    await expect(canvas.getByRole('status')).toHaveTextContent(\`\${galleryIcons.length} of \${galleryIcons.length} icons\`);
  }
}`,...H.parameters?.docs?.source},description:{story:`Search checks run separately so browsing Gallery never types automatically.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...Gallery,
  name: 'Gallery Copy',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByRole('searchbox', {
      name: 'Search icons'
    });
    await userEvent.type(search, 'Mobile');
    const clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    let copied = '';
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value: string) => {
          copied = value;
        }
      }
    });
    try {
      const copyButton = canvas.getByRole('button', {
        name: 'Copy icon ID: Mobile',
        exact: true
      });
      const copyArtwork = copyButton.innerHTML;
      await userEvent.click(copyButton);
      await expect(copied).toBe('Mobile');
      await expect(canvas.getByText('Copied', {
        exact: true
      })).toBeVisible();
      await expect(copyButton.innerHTML).toBe(copyArtwork);
      await userEvent.click(canvas.getByRole('button', {
        name: 'Dismiss',
        exact: true
      }));
      await expect(canvas.queryByText('Copied', {
        exact: true
      })).not.toBeInTheDocument();
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async () => {
            throw new Error('Clipboard denied');
          }
        }
      });
      await userEvent.click(canvas.getByRole('button', {
        name: 'Copy icon ID: Mobile',
        exact: true
      }));
      await expect(canvas.getByText('Could not copy Mobile. Please copy the ID below manually.')).toBeVisible();
    } finally {
      if (clipboardDescriptor) Object.defineProperty(navigator, 'clipboard', clipboardDescriptor);else Reflect.deleteProperty(navigator, 'clipboard');
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Size Scale',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    color: 'var(--ds-text-base)',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([12, 16, 20, 24, 32, 48] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Icon name="Info" size={size} />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)'
      }}>{size}px</span>
        </div>)}
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Common size steps — 12 · 16 · 20 · 24 · 32 · 48.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Color Inheritance',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([['var(--ds-text-base)', 'Base'], ['var(--ds-text-label)', 'Label'], ['#5464F2', 'Primary'], ['#FF5D5A', 'Error'], ['#F5A623', 'Warning'], ['#2ECC71', 'Success']] as const).map(([color, label]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      color
    }}>
          <Icon name="Lock" size={20} />
          <span style={{
        fontSize: '11px'
      }}>{label}</span>
        </div>)}
    </div>
}`,...G.parameters?.docs?.source},description:{story:"Icons inherit `currentColor` — wrap with any color to change them.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Alert Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([[AlertSuccess, 'AlertSuccess', '#12AA67'], [AlertError, 'AlertError', '#FF5D5A'], [AlertWarning, 'AlertWarning', '#F18E0A'], [AlertInfo, 'AlertInfo', '#24CBB7']] as const).map(([Comp, label, color]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Comp />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        textAlign: 'center'
      }}>{label}</span>
          <span style={{
        fontSize: '10px',
        color,
        fontWeight: 600
      }}>{color}</span>
        </div>)}
    </div>
}`,...K.parameters?.docs?.source},description:{story:"Alert icons use hardcoded brand colors matching the Figma design. They cannot be recolored via CSS `color`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Line Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontFamily: 'var(--ds-font-family-base)',
    color: 'var(--ds-text-base)'
  }}>
      {([[Check, 'Check', 11], [ChevronDownFilled, 'ChevronDownFilled', 10], [Close, 'Close', 8], [CloseSmall, 'CloseSmall', 8], [CriteriaMinus, 'CriteriaMinus', 16], [CriteriaPlus, 'CriteriaPlus', 16], [Edit, 'Edit', 12], [HelpCircle, 'HelpCircle', 16], [Info, 'Info', 18], [Lock, 'Lock', 16], [More, 'More', 16], [ResizeHandle, 'ResizeHandle', 10], [Search, 'Search', 14]] as const).map(([Comp, label, size]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Comp width={size} height={size} />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        textAlign: 'center'
      }}>{label}</span>
        </div>)}
    </div>
}`,...q.parameters?.docs?.source},description:{story:"Small line icons that inherit color from `currentColor`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Avatar Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    fontFamily: 'var(--ds-font-family-base)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }}>
        {([[UserAvatar, 'UserAvatar'], [GroupAvatar, 'GroupAvatar'], [CompanyAvatar, 'CompanyAvatar'], [ImageAvatar, 'ImageAvatar']] as const).map(([Comp, label]) => <div key={label} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
            <Comp width={48} height={48} />
            <span style={{
          fontSize: '11px',
          color: 'var(--ds-text-label)',
          textAlign: 'center'
        }}>{label}</span>
          </div>)}
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }}>
        {([[UserAvatarDark, 'UserAvatarDark'], [GroupAvatarDark, 'GroupAvatarDark'], [CompanyAvatarDark, 'CompanyAvatarDark'], [ImageAvatarDark, 'ImageAvatarDark']] as const).map(([Comp, label]) => <div key={label} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
            <Comp width={48} height={48} />
            <span style={{
          fontSize: '11px',
          color: 'var(--ds-text-label)',
          textAlign: 'center'
        }}>{label}</span>
          </div>)}
      </div>
    </div>
}`,...J.parameters?.docs?.source},description:{story:`Avatar placeholder icons — fixed Figma colors, not recolorable via currentColor.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'var(--ds-font-family-base)',
    fontSize: '14px',
    color: 'var(--ds-text-base)'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Info" size={16} />
        <span>Decorative — aria-hidden="true" applied automatically (no label needed)</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Lock" size={16} aria-label="Locked" />
        <span>Meaningful — role="img" aria-label="Locked" (screen readers announce it)</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Search" size={16} title="Search records" />
        <span>Meaningful via title — same effect as aria-label</span>
      </div>
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Decorative icons get aria-hidden="true" automatically. Meaningful icons need a label.`,...Y.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'All Icons',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'var(--ds-font-family-base)',
    maxWidth: '960px',
    color: 'var(--ds-text-base)'
  }}>

      {/* ── Utility ── */}
      <div style={SECTION_LABEL_STYLE}>Utility</div>
      <div style={GRID_STYLE}>
        {([['Info', <Info key="i" width={18} height={18} />], ['Lock', <Lock key="l" width={16} height={16} />], ['Search', <Search key="s" width={14} height={14} />], ['More', <More key="m" width={16} height={16} />], ['Check', <Check key="ch" width={11} height={8} />], ['ChevronDownFilled', <ChevronDownFilled key="cdf" width={10} height={5} />], ['ChevronUp', <ChevronUp key="cu" width={10} height={5} />], ['Edit', <Edit key="e" width={12} height={12} />], ['Close', <Close key="cl" width={8} height={8} />], ['CloseSmall', <CloseSmall key="cs" width={8} height={8} />], ['ResizeHandle', <ResizeHandle key="r" width={10} height={10} />], ['CriteriaMinus', <CriteriaMinus key="cm" width={16} height={16} />], ['CriteriaPlus', <CriteriaPlus key="cp" width={16} height={16} />], ['HelpCircle', <HelpCircle key="hc" width={16} height={16} />], ['Folder', <Folder key="fo" width={16} height={14} />], ['SidebarCollapse', <SidebarCollapse key="sc" width={16} height={16} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Alert ── */}
      <div style={SECTION_LABEL_STYLE}>Alert</div>
      <div style={GRID_STYLE}>
        {([['AlertSuccess', <AlertSuccess key="as" width={22} height={22} />], ['AlertError', <AlertError key="ae" width={22} height={22} />], ['AlertWarning', <AlertWarning key="aw" width={22} height={22} />], ['AlertInfo', <AlertInfo key="ai" width={22} height={22} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Avatar ── */}
      <div style={SECTION_LABEL_STYLE}>Avatar</div>
      <div style={GRID_STYLE}>
        {([['UserAvatar', <UserAvatar key="ua" width={40} height={40} />], ['GroupAvatar', <GroupAvatar key="ga" width={40} height={40} />], ['CompanyAvatar', <CompanyAvatar key="ca" width={40} height={40} />], ['ImageAvatar', <ImageAvatar key="ima" width={40} height={40} />], ['UserAvatarDark', <UserAvatarDark key="uad" width={40} height={40} />], ['GroupAvatarDark', <GroupAvatarDark key="gad" width={40} height={40} />], ['CompanyAvatarDark', <CompanyAvatarDark key="cad" width={40} height={40} />], ['ImageAvatarDark', <ImageAvatarDark key="iad" width={40} height={40} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Module ── */}
      <div style={SECTION_LABEL_STYLE}>Module</div>
      <div style={GRID_STYLE}>
        {([['Home', <ModuleHome key="mh" width={16} height={15} />], ['Analytics', <ModuleAnalytics key="man" width={17} height={16} />], ['Reports', <ModuleReports key="mr" width={16} height={16} />], ['Leads', <ModuleLeads key="ml" width={16} height={16} />], ['Contacts', <ModuleContacts key="mc" width={16} height={16} />], ['Accounts', <ModuleAccounts key="mac" width={17} height={16} />], ['Deals', <ModuleDeals key="md" width={16} height={16} />], ['Forecasts', <ModuleForecasts key="mf" width={16} height={16} />], ['Products', <ModuleProducts key="mp" width={16} height={16} />], ['Cases', <ModuleCases key="mca" width={18} height={16} />], ['Solutions', <ModuleSolutions key="ms" width={17} height={16} />], ['Activities', <ModuleActivities key="ma" width={16} height={16} />], ['Meeting', <ModuleMeeting key="mm" width={16} height={18} />], ['Docs', <ModuleDocs key="mdo" width={16} height={16} />], ['Social', <ModuleSocial key="mso" width={16} height={16} />], ['Custom', <ModuleCustom key="mcu" width={16} height={16} />], ['My Jobs', <ModuleMyJobs key="mmj" width={16} height={16} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Top Bar ── */}
      <div style={SECTION_LABEL_STYLE}>Top Bar</div>
      <div style={GRID_STYLE}>
        {([['Bell', <Bell key="bl" width={18} height={18} />], ['Calendar', <CalendarIcon key="cl" width={18} height={18} />], ['Settings', <Settings key="sg" width={18} height={18} />], ['BentoMenu', <BentoMenu key="bm" width={16} height={16} />], ['ZiaAI', <ZiaAI key="za" width={21} height={20} />], ['AppMarket', <AppMarket key="am" width={18} height={17} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── WMS Bar ── */}
      <div style={SECTION_LABEL_STYLE}>WMS Bar</div>
      <div style={GRID_STYLE}>
        {([['WmsMotivator', <WmsMotivator key="mo" width={14} height={14} />], ['WmsReminder', <WmsReminder key="ac" width={16} height={15} />], ['WmsZia', <WmsZia key="zi" width={17} height={13} />], ['WmsComment', <WmsComment key="co" width={14} height={14} />], ['WmsAnnouncements', <WmsAnnouncements key="an" width={13} height={17} />], ['WmsChat', <WmsChat key="wc" width={14} height={14} />], ['WmsChannel', <WmsChannel key="wch" width={14} height={14} />], ['WmsNotes', <WmsNotes key="wn" width={13} height={15} />], ['WmsUsers', <WmsUsers key="wu" width={14} height={14} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Rich Text Editor ── */}
      <div style={SECTION_LABEL_STYLE}>Rich Text Editor</div>
      <div style={GRID_STYLE}>
        {([['RtBold', <RtBold key="rb" width={16} height={16} />], ['RtItalic', <RtItalic key="ri" width={16} height={16} />], ['RtUnderline', <RtUnderline key="ru" width={16} height={16} />], ['RtStrikethrough', <RtStrikethrough key="rs" width={16} height={16} />], ['RtSubscript', <RtSubscript key="rss" width={16} height={16} />], ['RtFontColor', <RtFontColor key="rfc" width={16} height={16} />], ['RtBgColor', <RtBgColor key="rbc" width={16} height={16} />], ['RtAlignLeft', <RtAlignLeft key="ral" width={16} height={16} />], ['RtAlignCenter', <RtAlignCenter key="rac" width={16} height={16} />], ['RtAlignRight', <RtAlignRight key="rar" width={16} height={16} />], ['RtAlignJustify', <RtAlignJustify key="raj" width={16} height={16} />], ['RtBulletList', <RtBulletList key="rbl" width={16} height={16} />], ['RtIndentRight', <RtIndentRight key="rir" width={16} height={16} />], ['RtLineHeight', <RtLineHeight key="rlh" width={16} height={16} />], ['RtImage', <RtImage key="rim" width={16} height={16} />], ['RtUnlink', <RtUnlink key="run" width={16} height={16} />], ['RtTable', <RtTable key="rt" width={16} height={16} />], ['RtEvenHeight', <RtEvenHeight key="reh" width={16} height={16} />], ['RtBlockquote', <RtBlockquote key="rbq" width={16} height={16} />], ['RtCode', <RtCode key="rc" width={16} height={16} />], ['RtSpellCheck', <RtSpellCheck key="rsc" width={16} height={16} />], ['RtQuote', <RtQuote key="rq" width={16} height={16} />], ['RtChecklist', <RtChecklist key="rcl" width={16} height={16} />], ['RtCopyright', <RtCopyright key="rco" width={16} height={16} />], ['RtClearFormat', <RtClearFormat key="rcf" width={16} height={16} />], ['RtExpand', <RtExpand key="re" width={12} height={12} />], ['RtEmoji', <RtEmoji key="rem" width={16} height={16} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`MobileAndEmail`,`Gallery`,`GallerySearch`,`GalleryCopy`,`Sizes`,`Colors`,`AlertIcons`,`LineIcons`,`AvatarIcons`,`Accessibility`,`AllIcons`]}))();export{Y as Accessibility,K as AlertIcons,Q as AllIcons,J as AvatarIcons,G as Colors,V as Gallery,U as GalleryCopy,H as GallerySearch,q as LineIcons,B as MobileAndEmail,z as Playground,W as Sizes,$ as __namedExportsOrder,R as default};