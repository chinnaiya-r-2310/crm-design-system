import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CEAEBYcm.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-B8gcWVBW.js";import{n as o,t as s}from"./Checkbox-Ba9PoEcn.js";import{n as c,t as l}from"./Tooltip-D1GyQxHm.js";import{n as u,t as d}from"./Dropdown-BmNXGyyS.js";import{n as f,t as p}from"./Icon-BxfEtvoK.js";import{n as m,t as h}from"./Modal-CaIG2_S0.js";import{n as g,t as ee}from"./Table-He0LbyIF.js";import{n as _,t as te}from"./Textarea-BBKe_bi3.js";import{CrmHomepage as ne,i as re,o as v,t as y}from"./CrmHomepage.stories-BtKvHCWJ.js";import{i as b,r as x}from"./Colorful.data-BX7zq0sM.js";import{a as ie,i as S,n as C,t as ae}from"./MinimalDrilldown-DUssQiw-.js";var w,oe,se,T,E,ce,D,le,ue,de,fe,O=e((()=>{b(),w=[{value:`classic`,label:`Classic Sales View`,period:`month`},{value:`daily`,label:`Daily Freight Snapshot`,period:`month`},{value:`pipeline`,label:`Freight Pipeline Center`,period:`month`},{value:`revenue`,label:`Freight Revenue Performance`,period:`month`},{value:`deals`,label:`Freight Contract Desk`,period:`month`},{value:`forecast`,label:`Shipping Forecast Hub`,period:`month`},{value:`accounts`,label:`Key Shipper Accounts`,period:`month`},{value:`leads`,label:`Shipper Conversion Tracker`,period:`month`},{value:`team`,label:`Freight Sales Team`,period:`month`},{value:`territory`,label:`Trade Lane Sales Overview`,period:`month`},{value:`renewals`,label:`Contracts & Lane Expansion`,period:`month`},{value:`executive`,label:`Logistics Executive Summary`,period:`month`}],oe=[{label:`Prospecting`,value:8,display:`$8,000`},{label:`Qualification`,value:18,display:`$18,000`},{label:`Needs analysis`,value:10,display:`$10,000`},{label:`Proposal`,value:24.5,display:`$24,500`},{label:`Negotiation`,value:55,display:`$55,000`}],se=[{id:`summit`,name:`Summit Manufacturing`,stage:`Proposal`,amount:`$28,000`,close:`Jul 10`},{id:`harbor`,name:`Harbor Retail Group`,stage:`Qualification`,amount:`$16,500`,close:`Jul 12`},{id:`cedar`,name:`Cedar Agriculture`,stage:`Needs analysis`,amount:`$12,000`,close:`Jul 15`},{id:`solstice`,name:`Solstice Automotive`,stage:`Negotiation`,amount:`$36,000`,close:`Jul 17`},{id:`pacific`,name:`Pacific Consumer Goods`,stage:`Proposal`,amount:`$21,000`,close:`Jul 20`},{id:`aster`,name:`Aster Technologies`,stage:`Prospecting`,amount:`$9,500`,close:`Jul 22`},{id:`brookfield`,name:`Brookfield Chemicals`,stage:`Qualification`,amount:`$19,000`,close:`Jul 24`},{id:`clearwater`,name:`Clearwater Pharma`,stage:`Proposal`,amount:`$26,000`,close:`Jul 28`},{id:`redwood`,name:`Redwood Electronics`,stage:`Negotiation`,amount:`$34,000`,close:`Jul 29`},{id:`stonebridge`,name:`Stonebridge Imports`,stage:`Qualification`,amount:`$17,500`,close:`Jul 30`},{id:`horizon`,name:`Horizon Solar`,stage:`Needs analysis`,amount:`$23,000`,close:`Aug 3`},{id:`silverline`,name:`Silverline Distribution`,stage:`Proposal`,amount:`$29,500`,close:`Aug 5`},{id:`oakridge`,name:`Oakridge Foods`,stage:`Prospecting`,amount:`$11,000`,close:`Aug 7`},{id:`vertex`,name:`Vertex Electronics`,stage:`Negotiation`,amount:`$42,000`,close:`Aug 10`},{id:`lakeside`,name:`Lakeside Medical`,stage:`Proposal`,amount:`$25,000`,close:`Aug 12`},{id:`brightpath`,name:`Brightpath Agri Exports`,stage:`Qualification`,amount:`$14,500`,close:`Aug 14`},{id:`cobalt`,name:`Cobalt Engineering`,stage:`Needs analysis`,amount:`$31,000`,close:`Aug 17`},{id:`westhaven`,name:`Westhaven Cargo`,stage:`Prospecting`,amount:`$13,000`,close:`Aug 19`}],T=[24,32,28,40,36,48,44,58,52,65,60,72,68,82,90],E=[{label:`Closed revenue`,color:`blue`,values:[20,105,125,92,35,8]},{label:`Forecast`,color:`pink`,values:[85,18,1,48,90,78]}].map(({label:e,color:t,values:n})=>({label:e,color:t,series:x[0].series.map((e,t)=>({label:e.label,value:n[t],display:(n[t]*1e3).toLocaleString(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0})}))})),ce=[{industry:`Electronics`,count:640},{industry:`Pharma`,count:230},{industry:`Automotive`,count:420},{industry:`Manufacturing`,count:165},{industry:`Retail`,count:510},{industry:`Agriculture`,count:300},{industry:`Energy`,count:190},{industry:`Freight`,count:350},{industry:`Chemicals`,count:260},{industry:`Consumer Goods`,count:126}],D={target:3e3,achieved:3210,axisMax:4e3},le=[{id:`pricing`,title:`Confirm ocean freight rates for Atlas Freight`,completed:!1},{id:`demo`,title:`Prepare Northstar Electronics shipping quote`,completed:!1},{id:`contacts`,title:`Update Meridian Health consignee contacts`,completed:!1},{id:`contract`,title:`Send Evergreen Energy freight agreement`,completed:!1},{id:`handoff`,title:`Coordinate booking handoff with operations`,completed:!1},{id:`forecast`,title:`Update weekly freight revenue forecast`,completed:!1},{id:`notes`,title:`Log shipper requirements from discovery call`,completed:!1},{id:`redwood-pricing`,title:`Review Redwood Electronics freight rates`,completed:!1},{id:`stonebridge-discovery`,title:`Schedule Stonebridge Imports lane review`,completed:!1},{id:`horizon-requirements`,title:`Confirm Horizon Solar cargo dimensions`,completed:!1},{id:`silverline-proposal`,title:`Send Silverline Distribution freight proposal`,completed:!1},{id:`oakridge-outreach`,title:`Follow up with Oakridge Foods on reefer capacity`,completed:!1},{id:`vertex-terms`,title:`Review Vertex Electronics shipping terms`,completed:!1},{id:`lakeside-demo`,title:`Prepare Lakeside Medical cold-chain plan`,completed:!1},{id:`brightpath-stakeholders`,title:`Confirm Brightpath Agri Exports loading schedule`,completed:!1},{id:`cobalt-estimate`,title:`Share Cobalt Engineering project cargo estimate`,completed:!1},{id:`westhaven-intro`,title:`Book Westhaven Cargo capacity review`,completed:!1}],ue=[{id:`discovery`,time:`09:30`,end:`10:00`,title:`Ocean freight discovery`,account:`Atlas Freight`,contact:`Daniel Kim`,avatar:`user_01.jpg`,type:`Video call`},{id:`proposal-review`,time:`11:00`,end:`11:45`,title:`Cold-chain proposal review`,account:`Meridian Health`,contact:`Sofia Martinez`,avatar:`user_02.jpg`,type:`Video call`},{id:`solution-demo`,time:`13:00`,end:`13:45`,title:`Shipment visibility walkthrough`,account:`Northstar Electronics`,contact:`Daniel Kim`,avatar:`user_01.jpg`,type:`Video call`},{id:`renewal-review`,time:`15:00`,end:`15:30`,title:`Freight contract renewal`,account:`Evergreen Energy`,contact:`Alex Morgan`,avatar:`user_03.jpg`,type:`Phone call`},{id:`pricing-review`,time:`16:00`,end:`16:30`,title:`Container rate alignment`,account:`Summit Manufacturing`,contact:`Sofia Martinez`,avatar:`user_02.jpg`,type:`Video call`},{id:`contract-review`,time:`17:00`,end:`17:30`,title:`Freight agreement review`,account:`Harbor Retail Group`,contact:`Alex Morgan`,avatar:`user_03.jpg`,type:`Phone call`}],de=[{id:`northstar`,name:`Northstar Electronics`,stage:`Negotiation`,amount:`$32,000`,close:`Jun 26`},{id:`meridian`,name:`Meridian Health`,stage:`Proposal`,amount:`$24,500`,close:`Jun 29`},{id:`atlas`,name:`Atlas Freight`,stage:`Qualification`,amount:`$18,000`,close:`Jul 3`},{id:`evergreen`,name:`Evergreen Energy`,stage:`Negotiation`,amount:`$41,000`,close:`Jul 8`}],fe=[{id:`proposal`,title:`Send Meridian Health cold-chain freight proposal`,completed:!0},{id:`follow-up`,title:`Follow up on Northstar Electronics ocean freight quote`,completed:!1},{id:`renewal`,title:`Review Evergreen Energy shipping contract renewal`,completed:!0}]}));function pe(e){return me[e]??j}var k,A,j,me,M=e((()=>{O(),k={daily:{revenue:[28,35,31,48,42,57],forecast:[32,30,40,44,51,60],pipeline:[12,22,16,28,34],industries:[280,145,310,190,425,210,160,340,185,120],actual:1840,target:2200,sections:[`work`,`charts`,`company`,`industry`]},pipeline:{revenue:[38,52,46,73,64,89],forecast:[42,48,61,67,80,94],pipeline:[32,46,28,52,41],industries:[510,265,380,220,460,175,310,245,195,150],actual:2740,target:3200,sections:[`charts`,`work`,`industry`,`company`],donutFirst:!0},revenue:{revenue:[48,65,58,92,115,128],forecast:[55,61,76,88,108,140],pipeline:[18,26,22,58,72],industries:[720,390,610,280,455,240,320,195,360,165],actual:4260,target:4e3,sections:[`charts`,`company`,`work`,`industry`]},deals:{revenue:[22,46,39,68,54,82],forecast:[30,37,51,59,71,88],pipeline:[15,24,19,62,84],industries:[430,280,510,350,220,165,290,410,185,135],actual:2980,target:3400,sections:[`work`,`charts`,`industry`,`company`],donutFirst:!0},forecast:{revenue:[36,49,62,58,87,104],forecast:[44,57,70,82,105,132],pipeline:[22,31,27,46,63],industries:[540,310,460,250,390,180,275,325,215,140],actual:3520,target:3800,sections:[`company`,`charts`,`industry`,`work`]},accounts:{revenue:[56,43,71,65,96,112],forecast:[48,59,64,80,91,120],pipeline:[20,35,30,48,57],industries:[760,480,590,315,650,290,370,440,230,195],actual:4320,target:4500,sections:[`industry`,`charts`,`company`,`work`],donutFirst:!0},leads:{revenue:[14,28,23,47,39,64],forecast:[20,24,36,40,54,72],pipeline:[68,52,34,23,16],industries:[320,195,270,155,440,310,125,215,180,245],actual:2180,target:2600,sections:[`industry`,`work`,`charts`,`company`],donutFirst:!0},team:{revenue:[42,68,55,89,78,116],forecast:[50,60,74,81,98,124],pipeline:[24,38,29,54,68],industries:[610,340,490,275,530,220,315,390,260,170],actual:3860,target:4200,sections:[`company`,`work`,`charts`,`industry`]},territory:{revenue:[31,53,45,76,69,98],forecast:[39,47,61,70,86,110],pipeline:[29,43,32,47,61],industries:[465,290,540,380,320,235,410,180,305,155],actual:3120,target:3600,sections:[`industry`,`company`,`charts`,`work`],donutFirst:!0},renewals:{revenue:[68,58,82,74,108,119],forecast:[60,72,76,94,101,130],pipeline:[9,16,24,67,92],industries:[580,420,650,240,390,185,330,275,310,160],actual:3480,target:3300,sections:[`work`,`company`,`charts`,`industry`],donutFirst:!0},executive:{revenue:[72,94,86,116,108,142],forecast:[80,88,102,110,128,148],pipeline:[36,48,42,76,98],industries:[780,520,690,430,610,350,470,390,310,240],actual:5120,target:5e3,sections:[`company`,`charts`,`industry`,`work`]}},A=e=>(e*1e3).toLocaleString(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}),j={REVENUE_LINES:E,PIPELINE_STAGES:oe,ACCOUNTS_BY_INDUSTRY:ce,COMPANY_TARGET:D,sections:[`charts`,`company`,`industry`,`work`],chartOrder:[0,1]},me=Object.fromEntries(Object.entries(k).map(([e,t])=>[e,{REVENUE_LINES:E.map((e,n)=>({...e,series:e.series.map((e,r)=>{let i=(n===0?t.revenue:t.forecast)[r];return{...e,value:i,display:A(i)}})})),PIPELINE_STAGES:oe.map((e,n)=>({...e,value:t.pipeline[n],display:A(t.pipeline[n])})),ACCOUNTS_BY_INDUSTRY:ce.map((e,n)=>({...e,count:t.industries[n]})),COMPANY_TARGET:{achieved:t.actual,target:t.target,axisMax:Math.ceil(Math.max(t.actual,t.target)/1e3)*1e3},sections:t.sections,chartOrder:t.donutFirst?[1,0]:[0,1]}]))})),he=e((()=>{}));function N(e){let t=(0,L.useRef)(null),[n,r]=(0,L.useState)(e),[i,a]=(0,L.useState)(180);return(0,L.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(([e])=>{e.contentRect.width>0&&r(e.contentRect.width),e.contentRect.height>0&&a(e.contentRect.height)});return e.observe(t.current),()=>e.disconnect()},[]),{ref:t,width:n,height:i}}function P(e){return e.map((t,n)=>{if(n===0)return`M ${t.x},${t.y}`;let r=e[n-1],i=(r.x+t.x)/2;return`C ${i},${r.y} ${i},${t.y} ${t.x},${t.y}`}).join(` `)}function F(e){let t=e.slice(1).map((t,n)=>(t.y-e[n].y)/(t.x-e[n].x)),n=e.map((n,r)=>{if(r===0)return t[0];if(r===e.length-1)return t[r-1];let i=t[r-1],a=t[r];if(i*a<=0)return 0;let o=(i+a)/2,s=3*Math.min(Math.abs(i),Math.abs(a));return Math.sign(o)*Math.min(Math.abs(o),s)});return e.map((t,r)=>{if(r===0)return`M ${t.x},${t.y}`;let i=e[r-1],a=(t.x-i.x)/3;return`C ${i.x+a},${i.y+n[r-1]*a} ${t.x-a},${t.y-n[r]*a} ${t.x},${t.y}`}).join(` `)}function I({empty:e=!1}){let t=(0,L.useId)(),{ref:n,width:r,height:i}=N(320),o=Math.max(140,i-40),c=e=>o-e/150*(o-30),{ref:u,width:f}=N(1e3),[m,g]=(0,L.useState)(``),[_,v]=(0,L.useState)(null),[y,b]=(0,L.useState)(!1),S=(0,L.useRef)(null),[C,oe]=(0,L.useState)(`month`),[E,ce]=(0,L.useState)(()=>{let e=new URLSearchParams(window.location.search).get(`home-view`);return w.some(t=>t.value===e)?e:`classic`}),[D,O]=(0,L.useState)(()=>e?null:ie()),k=e=>({role:`button`,tabIndex:0,"aria-haspopup":`dialog`,onClick:t=>{t.stopPropagation(),O(e)},onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),t.stopPropagation(),O(e))}}),[A,j]=(0,L.useState)([]),[me,M]=(0,L.useState)(!1),[he,I]=(0,L.useState)(``),z=(0,L.useRef)(null);(0,L.useEffect)(()=>{let t=z.current;if(!t||e)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=[],i=()=>{r.forEach(e=>e.cancel()),r=[]},a=()=>{if(i(),n.matches)return;let e=(e,t,n=0)=>{let i=e.animate(t,{duration:800,delay:n,easing:`cubic-bezier(0.22, 1, 0.36, 1)`,fill:`backwards`});i.id=`crm-minimal-formation`,r.push(i)};t.querySelectorAll(`[data-revenue-series], .crm-minimal__kpi-area`).forEach(t=>{e(t,[{clipPath:`inset(0 100% 0 0)`},{clipPath:`inset(0 0% 0 0)`}])}),t.querySelectorAll(`.crm-minimal__column, .crm-minimal__kpi-columns rect`).forEach((t,n)=>{e(t,[{transform:`scaleY(0)`,transformBox:`fill-box`,transformOrigin:`center bottom`},{transform:`scaleY(1)`,transformBox:`fill-box`,transformOrigin:`center bottom`}],Math.min(n*15,180))}),t.querySelectorAll(`.crm-minimal__donut circle`).forEach((t,n)=>{e(t,[{strokeDasharray:`0 100`},{strokeDasharray:t.getAttribute(`stroke-dasharray`)}],n*50)}),t.querySelectorAll(`.crm-minimal__target-fill`).forEach(t=>{e(t,[{transform:`scaleX(0)`,transformBox:`fill-box`,transformOrigin:`left center`},{transform:`scaleX(1)`,transformBox:`fill-box`,transformOrigin:`left center`}])}),t.querySelectorAll(`.crm-minimal dd, .crm-minimal__chart-summary, .crm-minimal__target-summary, .crm-minimal__donut-total, .crm-minimal__svg-value`).forEach(t=>{e(t,[{opacity:0},{opacity:1}],100)})};return a(),n.addEventListener(`change`,a),()=>{i(),n.removeEventListener(`change`,a)}},[e,E,C]),(0,L.useEffect)(()=>{let e=()=>M(document.fullscreenElement===document.documentElement);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);let B=e=>{let t=Math.min(window.innerWidth-16,Math.max(e.width,340));return{width:t,left:Math.max(8,Math.min(e.left,window.innerWidth-t-8))}},{REVENUE_LINES:V,PIPELINE_STAGES:H,ACCOUNTS_BY_INDUSTRY:U,COMPANY_TARGET:G,sections:K,chartOrder:q}=pe(E),J=K,Y=(f-70)/U.length,X=Math.max(800,Math.ceil(Math.max(...U.map(e=>e.count))/200)*200),[_e,ve]=(0,L.useState)(()=>e?[]:[...fe,...le].map(e=>({...e,completed:[`proposal`,`renewal`,`pricing`].includes(e.id)}))),[ye,be]=(0,L.useState)(null),[xe,Se]=(0,L.useState)(0),[Z,Ce]=(0,L.useState)(null),[we,Te]=(0,L.useState)([]),Q=T.map((e,t)=>({x:2+t*156/(T.length-1),y:25-e/100*24})),Ee=ye===null?-1:Math.max(0,Math.min(ye-1,Q.length-3)),$=re[C],De=e?[]:[...de,...se];return(0,R.jsx)(ne,{empty:e,showTerritory:!1,workspaceName:`Cargo Shipping Logistics`,children:(0,R.jsxs)(`div`,{ref:z,className:`crm-minimal`,children:[(0,R.jsxs)(`div`,{className:`crm-minimal__main`,role:`region`,"aria-labelledby":`${t}-title`,children:[(0,R.jsxs)(`div`,{className:`crm-minimal__heading`,children:[(0,R.jsxs)(`div`,{className:`crm-minimal__welcome`,children:[(0,R.jsx)(`span`,{className:`crm-minimal__welcome-logo`,"aria-hidden":`true`,children:(0,R.jsx)(`img`,{src:`/crm-design-system/images/sailboat-logo.png`,width:`46`,height:`46`,alt:``})}),(0,R.jsx)(`h1`,{id:`${t}-title`,children:`Welcome Patricia Boyle`})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__home-controls`,children:[(0,R.jsx)(d,{layout:`vertical`,width:`max-content`,panelStyle:B,style:{maxWidth:`100%`},options:w,value:E,onChange:e=>{let t=w.find(t=>t.value===e);t&&(ce(t.value),oe(t.period))}}),(0,R.jsx)(d,{value:``,placeholder:`More options`,triggerAriaLabel:`More options`,triggerButtonVariant:`default`,triggerIcon:(0,R.jsx)(p,{name:`More`,size:16}),width:`max-content`,layout:`vertical`,id:`${t}-homepage-actions`,panelStyle:e=>({width:`max-content`,maxWidth:`calc(100vw - 16px)`,left:`auto`,right:Math.max(8,window.innerWidth-e.left-e.width)}),options:[{value:`edit`,label:`Edit Homepage`},{value:`reorder`,label:`Reorder`},{value:`fullscreen`,label:`View Fullscreen`}],onChange:async e=>{if(e===`fullscreen`)try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{I(`Fullscreen is unavailable in this preview. Open the story in a new tab to try again.`)}}})]})]}),he&&(0,R.jsx)(`p`,{role:`status`,children:he}),me&&(0,R.jsx)(a,{variant:`default`,onClick:()=>document.exitFullscreen(),children:`Exit fullscreen`}),(0,R.jsx)(`section`,{id:`${t}-overview`,"aria-label":`Sales overview`,className:`crm-minimal__overview`,children:(0,R.jsxs)(`dl`,{className:`crm-minimal__metrics`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`dt`,{children:`Closed revenue`}),(0,R.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`$0`:$.revenue}),(0,R.jsx)(`p`,{children:e?`No revenue yet`:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--up`,children:[(0,R.jsx)(`span`,{"aria-hidden":`true`,children:`↗`}),` `,$.changes[0].replace(`↑ `,``)]}),` vs. previous `,C]})})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__pipeline-kpi`,children:[(0,R.jsx)(`dt`,{children:`Open pipeline`}),(0,R.jsx)(`dd`,{children:e?`$0`:$.pipeline}),e?(0,R.jsx)(`p`,{children:`No open opportunities`}):(0,R.jsxs)(`svg`,{className:`crm-minimal__kpi-area`,viewBox:`0 0 160 28`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Open pipeline sample trend across 15 snapshots`,onMouseLeave:()=>be(null),children:[(0,R.jsx)(`defs`,{children:(0,R.jsxs)(`linearGradient`,{id:`${t}-pipeline-fill`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,R.jsx)(`stop`,{offset:`0%`,stopColor:`currentColor`,stopOpacity:`0.25`}),(0,R.jsx)(`stop`,{offset:`100%`,stopColor:`currentColor`,stopOpacity:`0.02`})]})}),(0,R.jsx)(`path`,{d:`${P(Q)} L 158,28 L 2,28 Z`,fill:`url(#${t}-pipeline-fill)`}),(0,R.jsx)(`path`,{d:P(Q),fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),Q.map((e,t)=>{let n=t===0?0:(Q[t-1].x+e.x)/2,r=t===Q.length-1?160:(e.x+Q[t+1].x)/2,i=ye!==null&&t>=Ee&&t<Ee+3;return(0,R.jsxs)(`g`,{onMouseEnter:()=>be(t),children:[(0,R.jsx)(`circle`,{"data-snapshot-dot":t,"data-visible":i,cx:e.x,cy:e.y,r:`2`,fill:`currentColor`,opacity:+!!i,pointerEvents:`none`}),(0,R.jsx)(l,{as:`g`,content:`Open pipeline: ${$.pipeline} · Snapshot ${t+1} of 15 · Trend index: ${T[t]}`,placement:`bottom`,followCursor:!0,children:(0,R.jsx)(`rect`,{...k({kind:`pipeline`,label:`Snapshot ${t+1}`,value:Number($.pipeline.replace(/[^\d.]/g,``))/1e3}),className:`crm-minimal__chart-hit`,"data-snapshot":t,x:n,y:`0`,width:r-n,height:`28`,fill:`transparent`,focusable:`true`,"aria-label":`Pipeline snapshot ${t+1} of 15, trend index ${T[t]}`})})]},t)})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`dt`,{children:`Deals won`}),(0,R.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`0`:$.deals}),(0,R.jsx)(`p`,{children:e?`Your first win starts here`:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--up`,children:[(0,R.jsx)(`span`,{"aria-hidden":`true`,children:`↗`}),` `,$.changes[1].replace(`↑ `,``)]}),` vs. previous `,C]})})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__conversion-kpi`,children:[(0,R.jsx)(`dt`,{children:`Conversion rate`}),(0,R.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`0%`:$.conversion}),!e&&(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(`svg`,{className:`crm-minimal__kpi-columns`,viewBox:`0 0 300 30`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Conversion rate sample trend across 45 snapshots`,onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect();t.width>0&&Se(Math.max(0,Math.min(W.length-1,Math.floor((e.clientX-t.left)/t.width*W.length))))},children:[(0,R.jsx)(`defs`,{children:(0,R.jsxs)(`linearGradient`,{id:`${t}-conversion-fill`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,R.jsx)(`stop`,{offset:`0%`,stopColor:`var(--ds-icon-primary-cyan-blue)`}),(0,R.jsx)(`stop`,{offset:`100%`,stopColor:`var(--ds-text-link)`})]})}),(0,R.jsxs)(l,{as:`g`,content:`Snapshot ${xe+1}: ${W[xe]}% conversion · Sample data`,placement:`bottom`,followCursor:!0,children:[(0,R.jsx)(`path`,{d:`M 0,0 H 300 V 30 H 0 Z`,fill:`transparent`,pointerEvents:`all`}),W.map((e,n)=>(0,R.jsx)(`rect`,{className:`crm-minimal__chart-hit`,...k({kind:`conversion`,label:`Snapshot ${n+1}`,value:e}),"aria-label":`Snapshot ${n+1}: ${e}% conversion`,x:n*300/W.length+1,y:30-e,width:300/W.length-2,height:e,fill:`url(#${t}-conversion-fill)`},n))]})]})})]})]})}),(0,R.jsx)(`div`,{className:`crm-minimal__charts${q[0]===1?` crm-minimal__charts--donut-first`:``}`,style:{order:J.indexOf(`charts`)+1},"data-dashboard-section":`charts`,children:q.map(a=>{let s=x[a],u=a===1?{...s,series:H}:s,d=e=>52+e*(r-72)/(u.series.length-1),f=u.series.reduce((e,t)=>e+t.value,0),p=a===0?V[0].series:u.series,m=p[p.length-1],h=p[p.length-2],g=m.value-h.value,ee=g>=0?`up`:`down`,_=0;return(0,R.jsxs)(`section`,{className:`crm-minimal__chart`,"aria-labelledby":`${t}-chart-${a}`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-chart-${a}`,children:u.title})}),e?(0,R.jsx)(`p`,{className:`crm-minimal__empty`,children:a===0?`Close your first deal to see revenue trends.`:`Add opportunities to see your pipeline by stage.`}):(0,R.jsx)(R.Fragment,{children:u.kind===`line`?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`div`,{className:`crm-minimal__chart-summary`,children:[(0,R.jsx)(`strong`,{className:`crm-minimal__trend--${ee}`,children:m.display}),(0,R.jsxs)(`p`,{children:[(0,R.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--${ee}`,children:[(0,R.jsx)(`span`,{"aria-hidden":`true`,children:g>=0?`↗`:`↘`}),` `,Math.abs(g/h.value*100).toFixed(1),`% · `,Math.abs(g*1e3).toLocaleString(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0})]}),` vs. `,h.label]})]}),(0,R.jsxs)(`svg`,{ref:n,className:`crm-minimal__line`,viewBox:`0 20 ${r} ${Math.max(180,i)-20}`,preserveAspectRatio:`xMidYMin meet`,role:`img`,"aria-label":`${u.title}. ${V.filter(e=>!A.includes(e.label)).map(e=>`${e.label}: ${e.series.map(e=>`${e.label}: ${e.display}`).join(`; `)}`).join(`. `)}`,children:[[0,50,100,150].map(e=>{let t=c(e);return(0,R.jsxs)(`g`,{children:[(0,R.jsx)(`line`,{x1:`52`,x2:r-20,y1:t,y2:t,className:`crm-minimal__gridline`}),(0,R.jsxs)(`text`,{className:`crm-minimal__svg-label`,x:`44`,y:t+4,textAnchor:`end`,children:[e,`k`]})]},e)}),(0,R.jsx)(`line`,{x1:`52`,x2:`52`,y1:`30`,y2:o,className:`crm-minimal__y-axis`}),V.filter(e=>!A.includes(e.label)).map(e=>(0,R.jsxs)(`g`,{className:`crm-minimal__revenue--${e.color}`,"data-revenue-series":e.label,children:[(0,R.jsx)(`defs`,{children:(0,R.jsxs)(`linearGradient`,{id:`${t}-revenue-fill-${e.color}`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,R.jsx)(`stop`,{offset:`0%`,stopColor:`currentColor`,stopOpacity:`0.25`}),(0,R.jsx)(`stop`,{offset:`100%`,stopColor:`currentColor`,stopOpacity:`0.02`})]})}),(0,R.jsx)(`path`,{d:`${F(e.series.map((e,t)=>({x:d(t),y:c(e.value)})))} L ${d(e.series.length-1)},${o} L ${d(0)},${o} Z`,fill:`url(#${t}-revenue-fill-${e.color})`,pointerEvents:`none`}),(0,R.jsx)(`path`,{d:F(e.series.map((e,t)=>({x:d(t),y:c(e.value)}))),fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`}),e.series.map((t,n)=>(0,R.jsx)(l,{as:`g`,content:`${e.label} · ${t.label}: ${t.display}`,placement:`bottom`,children:(0,R.jsx)(`circle`,{className:`crm-minimal__chart-hit`,...k({kind:`revenue`,label:t.label,value:t.value,series:e.label}),"aria-label":`${e.label} · ${t.label}: ${t.display}`,"data-month":t.label,cx:d(n),cy:c(t.value),r:`3`,fill:`currentColor`,stroke:`transparent`,strokeWidth:`8`})},t.label))]},e.label)),u.series.map((e,t)=>(0,R.jsx)(`text`,{className:`crm-minimal__line-month`,x:d(t),y:o+26,textAnchor:`middle`,children:e.label.slice(0,3)},e.label))]}),(0,R.jsx)(`ul`,{className:`crm-minimal__line-legend`,"aria-label":`Revenue series`,children:V.map(e=>(0,R.jsx)(`li`,{children:(0,R.jsxs)(`button`,{type:`button`,"aria-pressed":!A.includes(e.label),onClick:()=>j(t=>t.includes(e.label)?t.filter(t=>t!==e.label):[...t,e.label]),children:[(0,R.jsx)(`span`,{className:`crm-minimal__revenue--${e.color}`,"aria-hidden":`true`}),e.label]})},e.label))})]}):(0,R.jsxs)(`div`,{className:`crm-minimal__donut-layout`,children:[(0,R.jsxs)(`svg`,{className:`crm-minimal__donut`,viewBox:`8 8 104 104`,role:`img`,"aria-label":`${u.title}. ${u.series.map(e=>`${e.label}: ${e.display}`).join(`; `)}`,children:[u.series.map((e,t)=>{let n=_,r=e.value/f*100;return _+=r,(0,R.jsx)(l,{as:`g`,content:`${e.label}: ${e.display} (${r.toFixed(1)}%)`,placement:`bottom`,followCursor:!0,children:(0,R.jsx)(`circle`,{...k({kind:`pipeline`,label:e.label,value:e.value}),"aria-label":`${e.label}: ${e.display}, ${r.toFixed(1)}%`,cx:`60`,cy:`60`,r:`44`,fill:`none`,pathLength:`100`,strokeWidth:`14`,strokeDasharray:`${r} ${100-r}`,strokeDashoffset:-n,transform:`rotate(-90 60 60)`,className:`crm-minimal__chart-hit crm-minimal__segment--${t}`})},e.label)}),u.series.map((e,t)=>{let n=u.series.slice(0,t).reduce((e,t)=>e+t.value,0)/f*Math.PI*2-Math.PI/2;return(0,R.jsx)(`line`,{className:`crm-minimal__donut-separator`,x1:60+37*Math.cos(n),y1:60+37*Math.sin(n),x2:60+51*Math.cos(n),y2:60+51*Math.sin(n)},e.label)}),(0,R.jsxs)(`text`,{x:`60`,y:`60`,textAnchor:`middle`,dominantBaseline:`central`,className:`crm-minimal__donut-total`,children:[`$`,f.toFixed(1),`K`]})]}),(0,R.jsx)(`ul`,{className:`crm-minimal__legend`,children:u.series.map((e,t)=>(0,R.jsxs)(`li`,{children:[(0,R.jsx)(`span`,{className:`crm-minimal__segment--${t}`,"aria-hidden":`true`,children:`●`}),(0,R.jsxs)(`div`,{children:[e.label,(0,R.jsxs)(`strong`,{children:[e.display,` `,(0,R.jsxs)(`span`,{className:`crm-minimal__caption`,children:[`· `,(e.value/f*100).toFixed(1),`%`]})]})]})]},e.label))})]})})]},u.title)})}),(0,R.jsxs)(`div`,{className:`crm-minimal__charts crm-minimal__charts--company`,style:{order:J.indexOf(`company`)+1},"data-dashboard-section":`company`,children:[(0,R.jsxs)(`section`,{className:`crm-minimal__chart crm-minimal__company-target`,"aria-labelledby":`${t}-company-title`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-company-title`,children:`Company Target`})}),e?(0,R.jsx)(`p`,{className:`crm-minimal__empty`,children:`Set a company target to track achievement.`}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`div`,{className:`crm-minimal__target-summary`,children:[(0,R.jsxs)(`span`,{children:[`Actual: `,(0,R.jsx)(`strong`,{children:G.achieved})]}),(0,R.jsx)(`span`,{className:`crm-minimal__target-divider`,"aria-hidden":`true`,children:`|`}),(0,R.jsxs)(`span`,{children:[`Target: `,(0,R.jsx)(`strong`,{children:G.target})]})]}),(0,R.jsxs)(`svg`,{className:`crm-minimal__target`,viewBox:`0 0 640 180`,role:`img`,"aria-label":`Company Target. All branches: ${G.achieved} shipments achieved. Target: ${G.target}.`,children:[Array.from({length:5},(e,t)=>t*G.axisMax/4).map(e=>(0,R.jsxs)(`g`,{children:[(0,R.jsx)(`line`,{className:`crm-minimal__gridline`,x1:100+e/G.axisMax*500,x2:100+e/G.axisMax*500,y1:`30`,y2:`120`}),(0,R.jsx)(`text`,{className:`crm-minimal__svg-label`,x:100+e/G.axisMax*500,y:`140`,textAnchor:`middle`,children:e})]},e)),(0,R.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`88`,y:`79`,textAnchor:`end`,children:`All branches`}),(0,R.jsx)(`rect`,{className:`crm-minimal__target-track`,x:`100`,y:`40`,width:`500`,height:`70`}),(0,R.jsx)(l,{as:`g`,content:`All branches: ${G.achieved.toLocaleString(`en-US`)} shipments · Target: ${G.target}`,placement:`bottom`,children:(0,R.jsx)(`rect`,{...k({kind:`shipments`,label:`All branches`,value:G.achieved}),"aria-label":`Achieved: ${G.achieved} shipments. Target: ${G.target}`,className:`crm-minimal__target-fill crm-minimal__chart-hit`,x:`100`,y:`49`,width:G.achieved/G.axisMax*500,height:`52`})}),(0,R.jsx)(`line`,{className:`crm-minimal__target-marker`,x1:100+G.target/G.axisMax*500,x2:100+G.target/G.axisMax*500,y1:`40`,y2:`110`}),(0,R.jsx)(`text`,{className:`crm-minimal__svg-value`,x:100+G.achieved/G.axisMax*250,y:`80`,textAnchor:`middle`,children:G.achieved}),(0,R.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`350`,y:`170`,textAnchor:`middle`,children:`Shipment Count`})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__target-legend`,children:[(0,R.jsx)(`span`,{"aria-hidden":`true`}),`Achieved`]})]})]}),(0,R.jsxs)(`section`,{className:`crm-minimal__chart`,"aria-labelledby":`${t}-appointments-title`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-appointments-title`,children:`My Today's Appointments`})}),e?(0,R.jsx)(`p`,{className:`crm-minimal__empty`,children:`No appointments scheduled today.`}):(0,R.jsx)(`ul`,{className:`crm-minimal__list crm-minimal__appointment-agenda`,children:ue.map(e=>(0,R.jsxs)(`li`,{children:[(0,R.jsx)(`img`,{className:`crm-minimal__appointment-avatar`,src:`/crm-design-system/images/avatars/${e.avatar}`,alt:e.contact,width:`40`,height:`40`}),(0,R.jsxs)(`div`,{className:`crm-minimal__appointment-agenda-details`,children:[(0,R.jsx)(`h3`,{children:e.title}),(0,R.jsxs)(`p`,{className:`crm-minimal__appointment-time`,children:[(0,R.jsxs)(`span`,{children:[e.account,` · `,e.contact]}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`time`,{dateTime:e.time,children:e.time}),` · `,e.type]})]})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__appointment-actions`,role:`group`,"aria-label":`Actions for ${e.title}`,children:[(0,R.jsx)(a,{variant:`link-primary`,onClick:()=>Ce(e),children:`View details`}),(0,R.jsx)(a,{variant:`default`,size:`sm`,"aria-pressed":we.includes(e.id),onClick:()=>Te(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id]),children:we.includes(e.id)?`Completed`:`Mark done`})]})]},e.id))}),(0,R.jsx)(h,{isOpen:Z!==null,type:`alert`,variant:`info`,title:Z?.title??`Appointment details`,description:Z?`${Z.account} · ${Z.contact} · ${Z.time}–${Z.end} · ${Z.type}`:``,confirmLabel:`Close`,onClose:()=>Ce(null)})]})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__industry-builder`,style:{order:J.indexOf(`industry`)+1},"data-dashboard-section":`industry`,children:[(0,R.jsxs)(`section`,{className:`crm-minimal__chart crm-minimal__industries`,"aria-labelledby":`${t}-industries-title`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-industries-title`,children:`Accounts by Industry`})}),e?(0,R.jsx)(`p`,{className:`crm-minimal__empty`,children:`Add accounts to see your industry breakdown.`}):(0,R.jsx)(`div`,{className:`crm-minimal__industry-scroll`,tabIndex:0,role:`group`,"aria-label":`Industry chart, scroll horizontally on small screens`,children:(0,R.jsxs)(`svg`,{ref:u,className:`crm-minimal__columns`,viewBox:`0 0 ${f} 300`,role:`img`,"aria-label":`Accounts by Industry. ${U.map(e=>`${e.industry}: ${e.count}`).join(`; `)}. Total: ${U.reduce((e,t)=>e+t.count,0)} accounts.`,children:[Array.from({length:5},(e,t)=>t*X/4).map(e=>(0,R.jsxs)(`g`,{children:[(0,R.jsx)(`line`,{className:`crm-minimal__gridline`,x1:`50`,x2:f-10,y1:240-e/X*208,y2:240-e/X*208}),(0,R.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`38`,y:245-e/X*208,textAnchor:`end`,children:e})]},e)),U.map((e,t)=>(0,R.jsxs)(`g`,{children:[(0,R.jsx)(l,{as:`g`,content:`${e.industry}: ${e.count} accounts`,placement:`bottom`,children:(0,R.jsx)(`rect`,{...k({kind:`industry`,label:e.industry,value:e.count}),"aria-label":`${e.industry}: ${e.count} accounts`,"data-industry":e.industry,className:`crm-minimal__column crm-minimal__chart-hit`,x:50+t*Y+Y*.23,y:240-e.count/X*208,width:Y*.54,height:e.count/X*208})}),(0,R.jsx)(`text`,{className:`crm-minimal__svg-value`,x:50+(t+.5)*Y,y:230-e.count/X*208,textAnchor:`middle`,children:e.count}),(0,R.jsx)(`foreignObject`,{x:50+t*Y+2.5,y:`250`,width:Y-5,height:`50`,children:(0,R.jsx)(`div`,{className:`crm-minimal__industry-label`,children:e.industry})})]},e.industry))]})})]}),(0,R.jsxs)(`section`,{className:`crm-minimal__builder`,"aria-labelledby":`${t}-builder-title`,children:[(0,R.jsxs)(`div`,{className:`crm-minimal__builder-intro`,children:[(0,R.jsx)(`span`,{className:`crm-minimal__builder-mark`,children:(0,R.jsx)(p,{name:`WmsZia`,size:24})}),(0,R.jsxs)(`h2`,{id:`${t}-builder-title`,children:[`Plan `,(0,R.jsx)(`span`,{children:`Your Next Shipment.`})]}),(0,R.jsx)(`p`,{children:`How can we help your cargo move today?`})]}),(0,R.jsxs)(`form`,{className:`crm-minimal__builder-form`,onSubmit:e=>{e.preventDefault(),m.trim()&&(b(!1),v(m.trim()))},children:[(0,R.jsx)(`span`,{className:`crm-minimal__builder-sparkle`,"aria-hidden":`true`}),(0,R.jsx)(`div`,{ref:S,children:(0,R.jsx)(te,{"aria-label":`Describe your shipment plan`,placeholder:`Ask about freight quotes, trade lanes, or shipment plans…`,width:`100%`,layout:`vertical`,minHeight:48,value:m,maxLength:2e3,onChange:e=>g(e.target.value)})}),(0,R.jsxs)(`div`,{className:`crm-minimal__builder-toolbar`,children:[(0,R.jsxs)(`div`,{className:`crm-minimal__builder-tools`,role:`group`,"aria-label":`Shipment planning tools`,children:[(0,R.jsx)(a,{type:`button`,variant:`link-default`,disabled:!0,"aria-label":`Attach file (unavailable in local demo)`,title:`Attachments are unavailable in this local demo`,children:(0,R.jsx)(p,{name:`RtUnlink`,size:18})}),(0,R.jsx)(a,{type:`button`,variant:`link-default`,"aria-label":`Edit shipment plan`,title:`Edit shipment plan`,onClick:()=>S.current?.querySelector(`textarea`)?.focus(),children:(0,R.jsx)(p,{name:`Edit`,size:18})})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__builder-tools`,role:`group`,"aria-label":`Preview controls`,children:[(0,R.jsx)(a,{type:`button`,variant:`link-default`,disabled:!0,"aria-label":`Voice input (unavailable in local demo)`,title:`Voice input is unavailable in this local demo`,children:(0,R.jsx)(p,{name:`WmsAnnouncements`,size:20})}),(0,R.jsxs)(`div`,{className:`crm-minimal__builder-send-group`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__builder-send-extras`,children:(0,R.jsx)(a,{type:`button`,variant:`link-default`,"aria-label":`Discuss shipment plan first`,title:`Let's discuss first · Local demo`,disabled:!m.trim(),onClick:()=>{b(!0),v(m.trim())},children:(0,R.jsx)(p,{name:`WmsChat`,size:16})})}),(0,R.jsx)(`span`,{className:`crm-minimal__builder-send`,children:(0,R.jsx)(a,{type:`submit`,size:`sm`,"aria-label":`Preview shipment plan`,title:`Preview shipment plan · Local demo`,disabled:!m.trim(),children:(0,R.jsxs)(`svg`,{viewBox:`0 0 26 26`,width:`26`,height:`26`,fill:`none`,"aria-hidden":`true`,children:[(0,R.jsx)(`rect`,{width:`26`,height:`26`,rx:`13`,fill:`var(--crm-minimal-accent)`}),(0,R.jsx)(`path`,{d:`M9.5 11.69L13 8.19L16.5 11.69M13 8.19V17.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})})]})]})]})]}),_!==null&&(0,R.jsx)(h,{isOpen:!0,type:`alert`,variant:`info`,title:y?`Discuss shipment plan · Local demo`:`Shipment plan preview · Local demo`,description:`${_}\n\n${y?`Consider the intended users, required data, and desired outcome before building. `:``}This preview only captures your shipment plan. No bookings are created and no data is sent.`,confirmLabel:`Back to shipment plan`,onSave:()=>{v(null),S.current?.querySelector(`textarea`)?.focus()},onClose:()=>{v(null),S.current?.querySelector(`textarea`)?.focus()}})]})]}),(0,R.jsxs)(`div`,{className:`crm-minimal__grid`,style:{order:J.indexOf(`work`)+1},"data-dashboard-section":`work`,children:[(0,R.jsxs)(`section`,{id:`${t}-deals`,"aria-labelledby":`${t}-deals-title`,className:`crm-minimal__deals`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-deals-title`,children:`Open deals`})}),(0,R.jsx)(`div`,{className:`crm-minimal__table`,children:(0,R.jsx)(ee,{columns:ge,rows:De,selectable:!1,width:`100%`,maxHeight:`var(--crm-minimal-list-height)`,emptyMessage:`No open deals yet. Your opportunities will appear here.`})})]}),(0,R.jsx)(`aside`,{className:`crm-minimal__daily`,"aria-label":`Daily workspace`,children:(0,R.jsxs)(`section`,{id:`${t}-today`,"aria-labelledby":`${t}-tasks-title`,children:[(0,R.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,R.jsx)(`h2`,{id:`${t}-tasks-title`,children:`Today and OverDue Tasks`})}),(0,R.jsx)(`ul`,{className:`crm-minimal__list crm-minimal__today-list`,tabIndex:_e.length?0:void 0,"aria-label":`Today's tasks`,children:_e.map(e=>(0,R.jsx)(`li`,{"data-completed":e.completed||void 0,children:(0,R.jsx)(s,{label:e.title,checked:e.completed,onChange:()=>ve(t=>t.map(t=>t.id===e.id?{...t,completed:!t.completed}:t))})},e.id))}),e&&(0,R.jsx)(`p`,{className:`crm-minimal__empty`,role:`status`,children:`Nothing scheduled. Enjoy a fresh start.`})]})})]})]}),D&&(0,R.jsx)(ae,{selection:D,view:E,onClose:()=>O(null)})]})})}var L,R,z,B,V,H,U,W,ge,G,K,q,J,Y,X,_e;e((()=>{L=t(n(),1),i(),f(),_(),m(),o(),u(),c(),g(),y(),v(),b(),O(),M(),C(),S(),he(),R=r(),{expect:z,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Design System/Patterns/crm-homepage/minimal`,parameters:{layout:`fullscreen`,docs:{description:{component:`A minimal CRM homepage inside the existing CRM shell. Preserves the floating page header, with 30px horizontal content padding, four headline metrics, open deals, and tasks. Uses existing components and shared CRM sample data; all interactions are local.`}}}},W=[18,22,19,24,21,25,23,17,26,20,24,28,22,19,25,27,21,24,18,23,29,25,22,26,20,24,27,23,28,25,21,26,18,24,29,22,25,19,27,23,28,20,26,24,30],ge=[{key:`name`,label:`Account`},{key:`stage`,label:`Stage`},{key:`amount`,label:`Value`},{key:`close`,label:`Closing`}],G={render:()=>(0,R.jsx)(I,{})},K={tags:[`!dev`,`!autodocs`],render:()=>(0,R.jsx)(I,{}),play:async({canvasElement:e})=>{let t=H(e),n=e.querySelector(`.crm-minimal`),r=()=>n.getAnimations({subtree:!0}).filter(e=>e.id===`crm-minimal-formation`);if(await B.click(t.getByRole(`button`,{name:`Classic Sales View`})),await B.click(H(e.ownerDocument.body).getByRole(`option`,{name:`Freight Pipeline Center`})),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){await z(r()).toHaveLength(0);return}await V(()=>z(r().length).toBeGreaterThan(10));let i=n.querySelector(`.crm-minimal__line`),a=i.getBoundingClientRect().height;r().forEach(e=>e.finish()),await z(i.getBoundingClientRect().height).toBe(a),await z(n.querySelectorAll(`[data-revenue-series]`)).toHaveLength(2);let o=n.querySelector(`[data-industry]`);await z(o.getBoundingClientRect().height).toBeGreaterThan(0);let s=H(t.getByRole(`list`,{name:`Revenue series`}));await B.click(s.getByRole(`button`,{name:`Forecast`})),await z(n.querySelector(`[data-revenue-series="Forecast"]`)).toBeNull(),await z(r()).toHaveLength(0),await B.click(s.getByRole(`button`,{name:`Forecast`})),await z(n.querySelectorAll(`[data-revenue-series]`)).toHaveLength(2),await z(r()).toHaveLength(0)}},q={tags:[`!dev`,`!autodocs`],render:()=>(0,R.jsx)(I,{}),play:async({canvasElement:e})=>{let t=H(e);await z(t.getByRole(`heading`,{name:`Welcome Patricia Boyle`})).toBeVisible();let n=H(t.getByRole(`region`,{name:`Plan Your Next Shipment.`}));await z(n.queryByRole(`heading`,{name:`Suggestions`})).not.toBeInTheDocument(),await z(n.queryByRole(`list`)).not.toBeInTheDocument();let r=n.getByRole(`textbox`,{name:`Describe your shipment plan`});await z(n.getByRole(`button`,{name:`Attach file (unavailable in local demo)`})).toBeDisabled(),await z(n.getByRole(`button`,{name:`Voice input (unavailable in local demo)`})).toBeDisabled(),await B.click(n.getByRole(`button`,{name:`Edit shipment plan`})),await z(r).toHaveFocus(),await z(n.getByRole(`button`,{name:`Preview shipment plan`})).toBeDisabled(),await B.type(r,`Plan weekly ocean freight capacity for Singapore to Rotterdam.`),await B.click(n.getByRole(`button`,{name:`Preview shipment plan`}));let i=H(e.ownerDocument.body).getByRole(`alertdialog`,{name:`Shipment plan preview · Local demo`});await z(i).toHaveTextContent(`No bookings are created`),await B.click(H(i).getByRole(`button`,{name:`Back to shipment plan`})),await z(r).toHaveValue(`Plan weekly ocean freight capacity for Singapore to Rotterdam.`),n.getByRole(`button`,{name:`Preview shipment plan`}).focus(),await B.click(await n.findByRole(`button`,{name:`Discuss shipment plan first`}));let a=H(e.ownerDocument.body).getByRole(`alertdialog`,{name:`Discuss shipment plan · Local demo`});await z(a).toHaveTextContent(`Consider the intended users`),await B.click(H(a).getByRole(`button`,{name:`Back to shipment plan`})),await z(r).toHaveFocus(),await B.clear(r),await z(n.getByRole(`button`,{name:`Preview shipment plan`})).toBeDisabled(),r.blur(),await z(t.queryByText(`Friday, June 19, 2026`)).not.toBeInTheDocument(),await z(t.queryByText(`A little clarity for your next move.`)).not.toBeInTheDocument(),await z(t.queryByText(`Reporting period`)).not.toBeInTheDocument(),await z(t.queryByRole(`button`,{name:`All Territories`})).not.toBeInTheDocument();let o=H(t.getByRole(`region`,{name:`Sales overview`}));await z(o.getAllByRole(`term`)).toHaveLength(4),await z(t.queryByText(`Revenue goal`)).not.toBeInTheDocument();let s=o.getByRole(`img`,{name:`Open pipeline sample trend across 15 snapshots`});await z(s).toBeVisible(),await z(s.querySelectorAll(`path`)).toHaveLength(2),await z(e.ownerDocument.defaultView.getComputedStyle(s).position).toBe(`absolute`),await z(o.getByText(`Conversion rate`)).toBeVisible();let c=o.getByRole(`img`,{name:`Conversion rate sample trend across 45 snapshots`});await z(c).toBeVisible(),await z(c.querySelectorAll(`rect`)).toHaveLength(45),await z(e.ownerDocument.defaultView.getComputedStyle(c).position).toBe(`absolute`);let l=c.querySelector(`rect`),u=c.getBoundingClientRect();await B.pointer({target:l,coords:{clientX:u.left+u.width/(W.length*2),clientY:u.bottom-2}});let d=H(e.ownerDocument.body).getByRole(`tooltip`);await z(d).toHaveTextContent(`Snapshot 1: 18% conversion`);let f=c.querySelector(`path`);for(let t of[.03,.05,.5,.99]){await B.pointer({target:f,coords:{clientX:u.left+u.width*t,clientY:u.top+1}}),await z(H(e.ownerDocument.body).getByRole(`tooltip`)).toBe(d);let n=Math.floor(t*W.length);await z(d).toHaveTextContent(`Snapshot ${n+1}: ${W[n]}% conversion`)}await B.unhover(f),await z(H(e.ownerDocument.body).queryByRole(`tooltip`)).not.toBeInTheDocument(),await z(o.getByText(`25%`,{exact:!0})).toBeVisible(),await z(o.getByText(`$84,500`)).toBeVisible();let p=H(t.getByRole(`region`,{name:`Revenue trend`})),m=p.getByRole(`img`,{name:/Revenue trend/});await z(m).toBeVisible(),await z(m.querySelectorAll(`path`)).toHaveLength(4);let h=e.ownerDocument.defaultView,g=m.querySelector(`.crm-minimal__revenue--blue`),ee=m.querySelector(`.crm-minimal__revenue--pink`);await z(h.getComputedStyle(c).color).not.toBe(h.getComputedStyle(g).color),await z(h.getComputedStyle(ee).color).not.toBe(h.getComputedStyle(g).color),await z(c.querySelector(`rect`)?.getAttribute(`fill`)).toMatch(/^url\(#.+-conversion-fill\)$/),await z(h.getComputedStyle(t.getByRole(`region`,{name:`Plan Your Next Shipment.`})).backgroundImage).toContain(`radial-gradient`),await z(h.getComputedStyle(r.closest(`form`)).backgroundImage).toContain(`linear-gradient`),await z(h.getComputedStyle(p.getByRole(`heading`,{name:`Revenue trend`})).fontSize).toBe(`16px`),await z(h.getComputedStyle(p.getByRole(`heading`,{name:`Revenue trend`})).fontWeight).toBe(`500`),await z(m.querySelector(`[data-revenue-series="Target"]`)).toBeNull(),await z(p.queryByText(`Target`,{exact:!0})).not.toBeInTheDocument(),await z(m.querySelector(`.crm-minimal__y-axis`)).toBeInTheDocument();for(let e of[`0k`,`50k`,`100k`,`150k`])await z(H(m).getByText(e,{exact:!0})).toBeVisible();await z(m.querySelectorAll(`.crm-minimal__svg-label`)).toHaveLength(4);for(let e=0;e<E.length;e++)for(let t=e+1;t<E.length;t++){let n=E[e].series.map((e,n)=>e.value-E[t].series[n].value);await z(n.some(e=>e>0)&&n.some(e=>e<0)).toBe(!0)}m.querySelectorAll(`path`).forEach(e=>z(e.getAttribute(`d`)).toContain(`C `));let _=ce.map(e=>e.count);await z(_.some((e,t)=>t>0&&e>_[t-1])).toBe(!0),await z(_.some((e,t)=>t>0&&e<_[t-1])).toBe(!0);let te=m.querySelectorAll(`text.crm-minimal__line-month`);await z(te).toHaveLength(6);for(let e of E){let t=m.querySelector(`[data-revenue-series="${e.label}"]`);await z(t).toHaveClass(`crm-minimal__revenue--${e.color}`),await z(m.querySelector(`[data-revenue-area="${e.label}"]`)).toBeNull();let n=t.querySelector(`path[fill="none"]`);await z(n).toHaveAttribute(`fill`,`none`),await z(n.getAttribute(`d`)?.match(/C /g)).toHaveLength(5);let r=t.querySelectorAll(`circle`);await z(r).toHaveLength(6),r.forEach((e,t)=>z(e.getAttribute(`cx`)).toBe(te[t].getAttribute(`x`)))}let ne=o.getByRole(`img`,{name:`Conversion rate sample trend across 45 snapshots`});for(let t of[s,ne]){let n=!1,r=()=>{n=!0};e.addEventListener(`click`,r);try{let e=new MouseEvent(`click`,{bubbles:!0,cancelable:!0});t.querySelector(`rect`).dispatchEvent(e),await z(e.defaultPrevented).toBe(!0),await z(n).toBe(!1)}finally{e.removeEventListener(`click`,r)}}let re=s.querySelectorAll(`rect[data-snapshot]`),v=H(e.ownerDocument.body);await z(re).toHaveLength(15),await z(s.querySelectorAll(`[data-snapshot-dot]`)).toHaveLength(15),await z(s.querySelectorAll(`[data-visible="true"]`)).toHaveLength(0);for(let e of[0,7,14]){await B.hover(re[e]),await z(v.getByRole(`tooltip`)).toHaveTextContent(`Snapshot ${e+1} of 15`);let t=Math.max(0,Math.min(e-1,12));await z(Array.from(s.querySelectorAll(`[data-visible="true"]`),e=>Number(e.getAttribute(`data-snapshot-dot`)))).toEqual([t,t+1,t+2]),await B.unhover(re[e]),await z(s.querySelectorAll(`[data-visible="true"]`)).toHaveLength(0),await z(v.queryByRole(`tooltip`)).not.toBeInTheDocument()}for(let e of[s,c]){await z(e.querySelectorAll(`[tabindex]`)).toHaveLength(0);for(let t of e.querySelectorAll(`rect`))await z(t).toHaveAttribute(`focusable`,`false`),t.focus(),await z(t).not.toHaveFocus()}await z(v.queryByRole(`tooltip`)).not.toBeInTheDocument();let y=m.querySelector(`[data-revenue-series="Forecast"] circle[data-month="January"]`);await B.hover(y),await z(H(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Forecast · January: $85,000`),await B.unhover(y),await z(t.queryByText(`View chart data`)).not.toBeInTheDocument();let b=H(t.getByRole(`region`,{name:`Pipeline by stage`})),x=b.getByRole(`img`,{name:/Pipeline by stage.*Negotiation: \$55,000/});await z(x).toBeVisible(),await z(x.querySelectorAll(`circle`)).toHaveLength(5),await z(x.querySelectorAll(`.crm-minimal__donut-separator`)).toHaveLength(5),await z(b.getAllByRole(`listitem`)).toHaveLength(5);for(let e of oe)await z(b.getByText(e.label,{exact:!0})).toBeVisible();for(let t of x.querySelectorAll(`line`)){let n=e.ownerDocument.defaultView.getComputedStyle(t);await z(n.strokeWidth).toBe(`2px`),await z(n.vectorEffect).toBe(`non-scaling-stroke`)}await B.hover(x.querySelector(`circle`)),await z(H(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Prospecting: $8,000`);let ie=x.querySelector(`circle`);for(let t of[{clientX:240,clientY:200},{clientX:260,clientY:220}]){await B.pointer({target:ie,coords:t});let n=H(e.ownerDocument.body).getByRole(`tooltip`).parentElement;await z(n.style.left).toBe(`${t.clientX}px`),await z(n.style.top).toBe(`${t.clientY}px`)}await B.unhover(ie),await z(H(e.ownerDocument.body).queryByRole(`tooltip`)).not.toBeInTheDocument(),ie.focus(),await z(await H(e.ownerDocument.body).findByRole(`tooltip`)).toHaveTextContent(`Prospecting: $8,000`),await B.keyboard(`{Escape}`),ie.blur(),await z(b.getByText(`$115.5K`)).toBeVisible(),await z(p.getByText(/77.1% · \$27,000/)).toHaveClass(`crm-minimal__trend--down`),await z(p.getByText(`$8,000`,{exact:!0})).toBeVisible();let S=E.flatMap(e=>e.series.map(e=>e.value));await z(Math.max(...S)).toBe(125),await z(Math.min(...S)).toBe(1),await z(o.getByText(`18.2%`)).toHaveClass(`crm-minimal__trend--up`),await z(o.getByText(`3 deals`)).toHaveClass(`crm-minimal__trend--up`);let C=H(t.getByRole(`region`,{name:`Company Target`}));await z(C.getByRole(`img`,{name:/3210 shipments achieved.*Target: 3000/})).toBeVisible(),await z(C.getByText(`3210`,{selector:`strong`})).toBeVisible(),await z(C.getByText(`3000`,{selector:`strong`})).toBeVisible(),await z(C.queryByText(/% of target achieved/)).not.toBeInTheDocument();let ae=t.getByRole(`region`,{name:`Company Target`}).querySelector(`.crm-minimal__target-fill`);await z(Number(ae.getAttribute(`width`))).toBe(3210/4e3*500),await B.hover(ae),await z(H(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`3,210 shipments · Target: 3000`),await B.unhover(ae);let T=H(t.getByRole(`region`,{name:`My Today's Appointments`}));await z(T.getAllByRole(`listitem`)).toHaveLength(ue.length),await z(t.getAllByRole(`region`,{name:`My Today's Appointments`})).toHaveLength(1);let D=T.getByRole(`list`);await z(D.scrollHeight).toBeGreaterThan(D.clientHeight);for(let e of ue){let t=T.getByText(e.title).closest(`li`);t.scrollIntoView({block:`nearest`}),await z(T.getByText(e.title)).toBeVisible();let n=H(t).getByRole(`img`,{name:e.contact});await z(n).toBeVisible(),await z(n.naturalWidth).toBeGreaterThan(0)}for(let e of ue){let t=H(T.getByRole(`group`,{name:`Actions for ${e.title}`}));await B.click(t.getByRole(`button`,{name:`Mark done`})),await z(t.getByRole(`button`,{name:`Completed`})).toHaveAttribute(`aria-pressed`,`true`),await B.click(t.getByRole(`button`,{name:`Completed`})),await z(t.getByRole(`button`,{name:`Mark done`})).toHaveAttribute(`aria-pressed`,`false`)}await B.click(T.getAllByRole(`button`,{name:`View details`})[0]);let O=H(e.ownerDocument.body).getByRole(`alertdialog`);await V(()=>z(H(O).getByText(`Ocean freight discovery`)).toBeVisible()),await z(H(O).getByText(/Atlas Freight · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible(),await B.click(H(O).getByRole(`button`,{name:`Close`,exact:!0}));let k=t.getByRole(`region`,{name:`Accounts by Industry`});await z(k.querySelectorAll(`rect[data-industry]`)).toHaveLength(10);let A=k.querySelector(`rect[data-industry="Electronics"]`),j=H(e.ownerDocument.body);await B.hover(A),await z(j.getByRole(`tooltip`)).toHaveTextContent(`Electronics: 640 accounts`),await B.unhover(A),await z(j.queryByRole(`tooltip`)).not.toBeInTheDocument(),A.focus(),await z(j.getByRole(`tooltip`)).toHaveTextContent(`Electronics: 640 accounts`),await B.keyboard(`{Escape}`),await z(j.queryByRole(`tooltip`)).not.toBeInTheDocument(),A.blur(),await z(H(k).getByRole(`img`,{name:/Electronics: 640.*Consumer Goods: 126.*3191 accounts/})).toBeVisible();let me=t.getByRole(`button`,{name:`Classic Sales View`});await B.click(me);let M=H(e.ownerDocument.body);await z(M.getAllByRole(`option`)).toHaveLength(w.length);let he=M.getByRole(`listbox`).getBoundingClientRect();await z(he.right).toBeLessThanOrEqual(window.innerWidth),await z(he.left).toBeGreaterThanOrEqual(0),await z(M.queryByText(`Reporting period`)).not.toBeInTheDocument(),await z(M.queryByRole(`option`,{name:`This quarter`})).not.toBeInTheDocument(),await z(w.filter(e=>e.group===`Sales homepages`).length).toBeGreaterThan(10),await B.click(M.getByRole(`option`,{name:`Freight Pipeline Center`})),await z(t.getByRole(`button`,{name:`Freight Pipeline Center`})).toBeVisible(),await z(o.getByText(`$84,500`)).toBeVisible();for(let n of w.filter(e=>e.value!==`classic`)){n.value!==`pipeline`&&(await B.click(t.getByRole(`button`,{name:`Freight Pipeline Center`})),await B.click(M.getByRole(`option`,{name:n.label})));let r=pe(n.value),i=t.getByRole(`region`,{name:`Revenue trend`});await z(H(i).getByText(r.REVENUE_LINES[0].series[5].display,{exact:!0})).toBeVisible(),await z(e.querySelector(`[data-dashboard-section="industry"]`)).toHaveStyle({order:String(r.sections.indexOf(`industry`)+1)});let a=e.querySelectorAll(`[data-dashboard-section="charts"] > section`);await z(H(a[0]).getByRole(`heading`,{name:r.chartOrder[0]===1?`Pipeline by stage`:`Revenue trend`})).toBeVisible();let o=H(t.getByRole(`region`,{name:`Accounts by Industry`})).getByRole(`img`);await z(o).toHaveAccessibleName(z.stringContaining(`Electronics: ${r.ACCOUNTS_BY_INDUSTRY[0].count}`)),n.value!==`pipeline`&&(await B.click(t.getByRole(`button`,{name:n.label})),await B.click(M.getByRole(`option`,{name:`Freight Pipeline Center`})))}await B.click(t.getByRole(`button`,{name:`Freight Pipeline Center`})),await z(M.queryByText(`Reporting period`)).not.toBeInTheDocument(),await B.keyboard(`{Escape}`);let N=t.getByRole(`region`,{name:`Open deals`}).querySelector(`.table-body-wrap`);await z(H(N).getAllByRole(`row`)).toHaveLength(de.length+se.length),await z(N.scrollHeight).toBeGreaterThan(N.clientHeight),N.scrollTop=N.scrollHeight,await z(N.scrollTop).toBeGreaterThan(0),N.scrollTop=0;let P=H(t.getByRole(`region`,{name:`Today and OverDue Tasks`})),F=P.getByRole(`list`,{name:`Today's tasks`}),I=P.getAllByRole(`checkbox`);await z(I).toHaveLength(fe.length+le.length);for(let[e,t]of I.entries())[0,2,3].includes(e)?await z(t).toBeChecked():await z(t).not.toBeChecked();await z(F).toHaveAttribute(`tabindex`,`0`),await z(F.scrollHeight).toBeGreaterThan(F.clientHeight),P.getAllByRole(`checkbox`).at(-1).scrollIntoView({block:`nearest`}),await z(F.scrollTop).toBeGreaterThan(0);for(let e of P.getAllByRole(`checkbox`,{checked:!1}))await B.click(e);for(let e of P.getAllByRole(`checkbox`))await z(e).toBeChecked();await z(P.queryByRole(`status`)).not.toBeInTheDocument(),await z(t.queryByRole(`button`,{name:`Review follow-up`})).not.toBeInTheDocument(),await z(t.queryByText(/\d+ opportunities/)).not.toBeInTheDocument(),await z(t.getByText(`Meridian Health`,{exact:!0})).toBeVisible(),await z(t.queryByRole(`heading`,{name:`Conversations`})).not.toBeInTheDocument(),await B.click(H(e.querySelector(`.crm-minimal__home-controls`)).getByRole(`button`,{name:`More options`}));for(let e of[`Edit Homepage`,`Reorder`,`View Fullscreen`])await z(M.getByRole(`option`,{name:e})).toBeVisible();let L=Array.from(e.querySelectorAll(`[data-dashboard-section]`),e=>e.style.order);for(let t of[`Edit Homepage`,`Reorder`]){t===`Reorder`&&await B.click(H(e.querySelector(`.crm-minimal__home-controls`)).getByRole(`button`,{name:`More options`}));let n=M.getByRole(`option`,{name:t}),r=e.ownerDocument.defaultView.getComputedStyle(n.querySelector(`.dropdown-option-label`));await z(r.paddingLeft).toBe(r.paddingRight),await B.click(n),await z(M.queryByRole(`dialog`)).not.toBeInTheDocument(),await z(M.queryByRole(`listbox`)).not.toBeInTheDocument(),await z(Array.from(e.querySelectorAll(`[data-dashboard-section]`),e=>e.style.order)).toEqual(L)}}},J={render:()=>(0,R.jsx)(I,{empty:!0}),play:async({canvasElement:e})=>{let t=H(e);await z(t.getByText(`No open deals yet. Your opportunities will appear here.`)).toBeVisible(),await z(t.queryByRole(`heading`,{name:`Conversations`})).not.toBeInTheDocument(),await z(t.queryByText(`Revenue goal`)).not.toBeInTheDocument();let n=H(t.getByRole(`region`,{name:`Revenue trend`}));await z(n.getByText(`Close your first deal to see revenue trends.`)).toBeVisible(),await z(n.queryByRole(`img`)).not.toBeInTheDocument();let r=H(t.getByRole(`region`,{name:`Pipeline by stage`}));await z(r.getByText(`Add opportunities to see your pipeline by stage.`)).toBeVisible(),await z(r.queryByRole(`img`)).not.toBeInTheDocument(),await z(e.querySelector(`.crm-minimal__trend`)).not.toBeInTheDocument(),await z(t.getAllByText(`No appointments scheduled today.`)).toHaveLength(1),await z(t.queryByRole(`group`,{name:`Select appointment`})).not.toBeInTheDocument(),await z(t.getByText(`Set a company target to track achievement.`)).toBeVisible();let i=H(t.getByRole(`region`,{name:`Accounts by Industry`}));await z(i.getByText(`Add accounts to see your industry breakdown.`)).toBeVisible(),await z(i.queryByRole(`img`)).not.toBeInTheDocument()}},Y={render:()=>(0,R.jsx)(I,{}),play:async({canvasElement:e})=>{let t=H(H(e).getByRole(`list`,{name:`Revenue series`})),n=t.getByRole(`button`,{name:`Closed revenue`}),r=t.getByRole(`button`,{name:`Forecast`}),i=()=>e.querySelectorAll(`[data-revenue-series]`);await z(i()).toHaveLength(2),await B.click(n),await z(n).toHaveAttribute(`aria-pressed`,`false`),await z(n).toHaveStyle({opacity:`0.4`}),await z(i()).toHaveLength(1),await z(i()[0]).toHaveAttribute(`data-revenue-series`,`Forecast`),await B.click(r),await z(i()).toHaveLength(0),n.focus(),await B.keyboard(`{Enter}`),await z(n).toHaveAttribute(`aria-pressed`,`true`),await z(i()).toHaveLength(1),r.focus(),await B.keyboard(` `),await z(r).toHaveAttribute(`aria-pressed`,`true`),await z(i()).toHaveLength(2)}},X={tags:[`test-only`],render:()=>(0,R.jsx)(I,{}),play:async({canvasElement:e})=>{let t=H(e.ownerDocument.body),n=e.querySelector(`.crm-minimal`);for(let[e,r]of[[`[data-revenue-series="Closed revenue"] circle`,`Revenue trend`],[`[data-revenue-series="Forecast"] circle`,`Revenue trend`],[`.crm-minimal__donut .crm-minimal__chart-hit`,`Pipeline by stage`],[`[data-industry="Electronics"]`,`Accounts by Industry`],[`.crm-minimal__target-fill`,`Company Target`],[`[data-snapshot="0"]`,`Pipeline by stage`],[`.crm-minimal__kpi-columns rect`,`Conversion rate`]]){let i=n.querySelector(e);i.focus(),await B.keyboard(`{Enter}`);let a=await t.findByRole(`dialog`,{name:r});await V(()=>z(H(a).getByRole(`heading`,{name:`Drilled Down By`})).toBeVisible()),await z(H(a).getByRole(`region`,{name:`Chart records`})).toBeVisible(),await B.click(H(a).getByRole(`button`,{name:`Close chart records`})),await V(()=>z(t.queryByRole(`dialog`)).not.toBeInTheDocument()),await z(i).toHaveFocus()}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <MinimalPage />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <MinimalPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = canvasElement.querySelector<HTMLElement>('.crm-minimal')!;
    const animations = () => page.getAnimations({
      subtree: true
    }).filter(animation => animation.id === 'crm-minimal-formation');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Classic Sales View'
    }));
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', {
      name: 'Freight Pipeline Center'
    }));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await expect(animations()).toHaveLength(0);
      return;
    }
    await waitFor(() => expect(animations().length).toBeGreaterThan(10));
    const revenue = page.querySelector<SVGSVGElement>('.crm-minimal__line')!;
    const height = revenue.getBoundingClientRect().height;
    animations().forEach(animation => animation.finish());
    await expect(revenue.getBoundingClientRect().height).toBe(height);
    await expect(page.querySelectorAll('[data-revenue-series]')).toHaveLength(2);
    const industry = page.querySelector<SVGRectElement>('[data-industry]')!;
    await expect(industry.getBoundingClientRect().height).toBeGreaterThan(0);
    const legend = within(canvas.getByRole('list', {
      name: 'Revenue series'
    }));
    await userEvent.click(legend.getByRole('button', {
      name: 'Forecast'
    }));
    await expect(page.querySelector('[data-revenue-series="Forecast"]')).toBeNull();
    await expect(animations()).toHaveLength(0);
    await userEvent.click(legend.getByRole('button', {
      name: 'Forecast'
    }));
    await expect(page.querySelectorAll('[data-revenue-series]')).toHaveLength(2);
    await expect(animations()).toHaveLength(0);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <MinimalPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Welcome Patricia Boyle'
    })).toBeVisible();
    const builder = within(canvas.getByRole('region', {
      name: 'Plan Your Next Shipment.'
    }));
    await expect(builder.queryByRole('heading', {
      name: 'Suggestions'
    })).not.toBeInTheDocument();
    await expect(builder.queryByRole('list')).not.toBeInTheDocument();
    const prompt = builder.getByRole('textbox', {
      name: 'Describe your shipment plan'
    });
    await expect(builder.getByRole('button', {
      name: 'Attach file (unavailable in local demo)'
    })).toBeDisabled();
    await expect(builder.getByRole('button', {
      name: 'Voice input (unavailable in local demo)'
    })).toBeDisabled();
    await userEvent.click(builder.getByRole('button', {
      name: 'Edit shipment plan'
    }));
    await expect(prompt).toHaveFocus();
    await expect(builder.getByRole('button', {
      name: 'Preview shipment plan'
    })).toBeDisabled();
    await userEvent.type(prompt, 'Plan weekly ocean freight capacity for Singapore to Rotterdam.');
    await userEvent.click(builder.getByRole('button', {
      name: 'Preview shipment plan'
    }));
    const preview = within(canvasElement.ownerDocument.body).getByRole('alertdialog', {
      name: 'Shipment plan preview · Local demo'
    });
    await expect(preview).toHaveTextContent('No bookings are created');
    await userEvent.click(within(preview).getByRole('button', {
      name: 'Back to shipment plan'
    }));
    await expect(prompt).toHaveValue('Plan weekly ocean freight capacity for Singapore to Rotterdam.');
    builder.getByRole('button', {
      name: 'Preview shipment plan'
    }).focus();
    await userEvent.click(await builder.findByRole('button', {
      name: 'Discuss shipment plan first'
    }));
    const discussion = within(canvasElement.ownerDocument.body).getByRole('alertdialog', {
      name: 'Discuss shipment plan · Local demo'
    });
    await expect(discussion).toHaveTextContent('Consider the intended users');
    await userEvent.click(within(discussion).getByRole('button', {
      name: 'Back to shipment plan'
    }));
    await expect(prompt).toHaveFocus();
    await userEvent.clear(prompt);
    await expect(builder.getByRole('button', {
      name: 'Preview shipment plan'
    })).toBeDisabled();
    (prompt as HTMLTextAreaElement).blur();
    await expect(canvas.queryByText('Friday, June 19, 2026')).not.toBeInTheDocument();
    await expect(canvas.queryByText('A little clarity for your next move.')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Reporting period')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'All Territories'
    })).not.toBeInTheDocument();
    const overview = within(canvas.getByRole('region', {
      name: 'Sales overview'
    }));
    await expect(overview.getAllByRole('term')).toHaveLength(4);
    await expect(canvas.queryByText('Revenue goal')).not.toBeInTheDocument();
    const miniArea = overview.getByRole('img', {
      name: 'Open pipeline sample trend across 15 snapshots'
    });
    await expect(miniArea).toBeVisible();
    await expect(miniArea.querySelectorAll('path')).toHaveLength(2);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniArea).position).toBe('absolute');
    await expect(overview.getByText('Conversion rate')).toBeVisible();
    const miniColumns = overview.getByRole('img', {
      name: 'Conversion rate sample trend across 45 snapshots'
    });
    await expect(miniColumns).toBeVisible();
    await expect(miniColumns.querySelectorAll('rect')).toHaveLength(45);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniColumns).position).toBe('absolute');
    const conversionBar = miniColumns.querySelector<SVGRectElement>('rect')!;
    const conversionBounds = miniColumns.getBoundingClientRect();
    await userEvent.pointer({
      target: conversionBar,
      coords: {
        clientX: conversionBounds.left + conversionBounds.width / (CONVERSION_SNAPSHOTS.length * 2),
        clientY: conversionBounds.bottom - 2
      }
    });
    const conversionTooltip = within(canvasElement.ownerDocument.body).getByRole('tooltip');
    await expect(conversionTooltip).toHaveTextContent('Snapshot 1: 18% conversion');
    const conversionSurface = miniColumns.querySelector<SVGPathElement>('path')!;
    for (const position of [0.03, 0.05, 0.5, 0.99]) {
      await userEvent.pointer({
        target: conversionSurface,
        coords: {
          clientX: conversionBounds.left + conversionBounds.width * position,
          clientY: conversionBounds.top + 1
        }
      });
      await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toBe(conversionTooltip);
      const snapshot = Math.floor(position * CONVERSION_SNAPSHOTS.length);
      await expect(conversionTooltip).toHaveTextContent(\`Snapshot \${snapshot + 1}: \${CONVERSION_SNAPSHOTS[snapshot]}% conversion\`);
    }
    await userEvent.unhover(conversionSurface);
    await expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).not.toBeInTheDocument();
    await expect(overview.getByText('25%', {
      exact: true
    })).toBeVisible();
    await expect(overview.getByText('$84,500')).toBeVisible();
    const trend = within(canvas.getByRole('region', {
      name: 'Revenue trend'
    }));
    const revenueChart = trend.getByRole('img', {
      name: /Revenue trend/
    });
    await expect(revenueChart).toBeVisible();
    await expect(revenueChart.querySelectorAll('path')).toHaveLength(4);
    const styles = canvasElement.ownerDocument.defaultView!;
    const blueSeries = revenueChart.querySelector<SVGGElement>('.crm-minimal__revenue--blue')!;
    const forecastSeries = revenueChart.querySelector<SVGGElement>('.crm-minimal__revenue--pink')!;
    await expect(styles.getComputedStyle(miniColumns).color).not.toBe(styles.getComputedStyle(blueSeries).color);
    await expect(styles.getComputedStyle(forecastSeries).color).not.toBe(styles.getComputedStyle(blueSeries).color);
    await expect(miniColumns.querySelector('rect')?.getAttribute('fill')).toMatch(/^url\\(#.+-conversion-fill\\)$/);
    await expect(styles.getComputedStyle(canvas.getByRole('region', {
      name: 'Plan Your Next Shipment.'
    })).backgroundImage).toContain('radial-gradient');
    await expect(styles.getComputedStyle(prompt.closest('form')!).backgroundImage).toContain('linear-gradient');
    await expect(styles.getComputedStyle(trend.getByRole('heading', {
      name: 'Revenue trend'
    })).fontSize).toBe('16px');
    await expect(styles.getComputedStyle(trend.getByRole('heading', {
      name: 'Revenue trend'
    })).fontWeight).toBe('500');
    await expect(revenueChart.querySelector('[data-revenue-series="Target"]')).toBeNull();
    await expect(trend.queryByText('Target', {
      exact: true
    })).not.toBeInTheDocument();
    await expect(revenueChart.querySelector('.crm-minimal__y-axis')).toBeInTheDocument();
    for (const label of ['0k', '50k', '100k', '150k']) {
      await expect(within(revenueChart).getByText(label, {
        exact: true
      })).toBeVisible();
    }
    await expect(revenueChart.querySelectorAll('.crm-minimal__svg-label')).toHaveLength(4);
    for (let first = 0; first < REVENUE_LINES.length; first++) {
      for (let second = first + 1; second < REVENUE_LINES.length; second++) {
        const differences = REVENUE_LINES[first].series.map((item, index) => item.value - REVENUE_LINES[second].series[index].value);
        await expect(differences.some(value => value > 0) && differences.some(value => value < 0)).toBe(true);
      }
    }
    revenueChart.querySelectorAll('path').forEach(path => expect(path.getAttribute('d')).toContain('C '));
    const counts = ACCOUNTS_BY_INDUSTRY.map(item => item.count);
    await expect(counts.some((count, index) => index > 0 && count > counts[index - 1])).toBe(true);
    await expect(counts.some((count, index) => index > 0 && count < counts[index - 1])).toBe(true);
    const monthLabels = revenueChart.querySelectorAll('text.crm-minimal__line-month');
    await expect(monthLabels).toHaveLength(6);
    for (const line of REVENUE_LINES) {
      const series = revenueChart.querySelector(\`[data-revenue-series="\${line.label}"]\`)!;
      await expect(series).toHaveClass(\`crm-minimal__revenue--\${line.color}\`);
      await expect(revenueChart.querySelector(\`[data-revenue-area="\${line.label}"]\`)).toBeNull();
      const curve = series.querySelector('path[fill="none"]')!;
      await expect(curve).toHaveAttribute('fill', 'none');
      await expect(curve.getAttribute('d')?.match(/C /g)).toHaveLength(5);
      const dots = series.querySelectorAll('circle');
      await expect(dots).toHaveLength(6);
      dots.forEach((dot, index) => expect(dot.getAttribute('cx')).toBe(monthLabels[index].getAttribute('x')));
    }
    // KPI mini charts are hover-only and prevent click activation and bubbling.
    const conversionChart = overview.getByRole('img', {
      name: 'Conversion rate sample trend across 45 snapshots'
    });
    for (const chart of [miniArea, conversionChart]) {
      let bubbled = false;
      const onClick = () => {
        bubbled = true;
      };
      canvasElement.addEventListener('click', onClick);
      try {
        const click = new MouseEvent('click', {
          bubbles: true,
          cancelable: true
        });
        chart.querySelector('rect')!.dispatchEvent(click);
        await expect(click.defaultPrevented).toBe(true);
        await expect(bubbled).toBe(false);
      } finally {
        canvasElement.removeEventListener('click', onClick);
      }
    }
    const miniAreaHits = miniArea.querySelectorAll<SVGRectElement>('rect[data-snapshot]');
    const miniAreaTooltip = within(canvasElement.ownerDocument.body);
    await expect(miniAreaHits).toHaveLength(15);
    await expect(miniArea.querySelectorAll('[data-snapshot-dot]')).toHaveLength(15);
    await expect(miniArea.querySelectorAll('[data-visible="true"]')).toHaveLength(0);
    for (const index of [0, 7, 14]) {
      await userEvent.hover(miniAreaHits[index]);
      await expect(miniAreaTooltip.getByRole('tooltip')).toHaveTextContent(\`Snapshot \${index + 1} of 15\`);
      const start = Math.max(0, Math.min(index - 1, 12));
      await expect(Array.from(miniArea.querySelectorAll('[data-visible="true"]'), dot => Number(dot.getAttribute('data-snapshot-dot')))).toEqual([start, start + 1, start + 2]);
      await userEvent.unhover(miniAreaHits[index]);
      await expect(miniArea.querySelectorAll('[data-visible="true"]')).toHaveLength(0);
      await expect(miniAreaTooltip.queryByRole('tooltip')).not.toBeInTheDocument();
    }
    for (const chart of [miniArea, miniColumns]) {
      await expect(chart.querySelectorAll('[tabindex]')).toHaveLength(0);
      for (const hit of chart.querySelectorAll<SVGRectElement>('rect')) {
        await expect(hit).toHaveAttribute('focusable', 'false');
        hit.focus();
        await expect(hit).not.toHaveFocus();
      }
    }
    await expect(miniAreaTooltip.queryByRole('tooltip')).not.toBeInTheDocument();
    const forecastPoint = revenueChart.querySelector<SVGCircleElement>('[data-revenue-series="Forecast"] circle[data-month="January"]')!;
    await userEvent.hover(forecastPoint);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Forecast · January: $85,000');
    await userEvent.unhover(forecastPoint);
    await expect(canvas.queryByText('View chart data')).not.toBeInTheDocument();
    const pipeline = within(canvas.getByRole('region', {
      name: 'Pipeline by stage'
    }));
    const pipelineChart = pipeline.getByRole('img', {
      name: /Pipeline by stage.*Negotiation: \\$55,000/
    });
    await expect(pipelineChart).toBeVisible();
    await expect(pipelineChart.querySelectorAll('circle')).toHaveLength(5);
    await expect(pipelineChart.querySelectorAll('.crm-minimal__donut-separator')).toHaveLength(5);
    await expect(pipeline.getAllByRole('listitem')).toHaveLength(5);
    for (const stage of PIPELINE_STAGES) await expect(pipeline.getByText(stage.label, {
      exact: true
    })).toBeVisible();
    for (const separator of pipelineChart.querySelectorAll('line')) {
      const style = canvasElement.ownerDocument.defaultView!.getComputedStyle(separator);
      await expect(style.strokeWidth).toBe('2px');
      await expect(style.vectorEffect).toBe('non-scaling-stroke');
    }
    await userEvent.hover(pipelineChart.querySelector('circle')!);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    const pipelineSegment = pipelineChart.querySelector('circle')!;
    for (const coords of [{
      clientX: 240,
      clientY: 200
    }, {
      clientX: 260,
      clientY: 220
    }]) {
      await userEvent.pointer({
        target: pipelineSegment,
        coords
      });
      const anchor = within(canvasElement.ownerDocument.body).getByRole('tooltip').parentElement!;
      await expect(anchor.style.left).toBe(\`\${coords.clientX}px\`);
      await expect(anchor.style.top).toBe(\`\${coords.clientY}px\`);
    }
    await userEvent.unhover(pipelineSegment);
    await expect(within(canvasElement.ownerDocument.body).queryByRole('tooltip')).not.toBeInTheDocument();
    pipelineSegment.focus();
    await expect(await within(canvasElement.ownerDocument.body).findByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    await userEvent.keyboard('{Escape}');
    pipelineSegment.blur();
    await expect(pipeline.getByText('$115.5K')).toBeVisible();
    await expect(trend.getByText(/77.1% · \\$27,000/)).toHaveClass('crm-minimal__trend--down');
    await expect(trend.getByText('$8,000', {
      exact: true
    })).toBeVisible();
    const revenueValues = REVENUE_LINES.flatMap(line => line.series.map(item => item.value));
    await expect(Math.max(...revenueValues)).toBe(125);
    await expect(Math.min(...revenueValues)).toBe(1);
    await expect(overview.getByText('18.2%')).toHaveClass('crm-minimal__trend--up');
    await expect(overview.getByText('3 deals')).toHaveClass('crm-minimal__trend--up');
    const company = within(canvas.getByRole('region', {
      name: 'Company Target'
    }));
    await expect(company.getByRole('img', {
      name: /3210 shipments achieved.*Target: 3000/
    })).toBeVisible();
    await expect(company.getByText('3210', {
      selector: 'strong'
    })).toBeVisible();
    await expect(company.getByText('3000', {
      selector: 'strong'
    })).toBeVisible();
    await expect(company.queryByText(/% of target achieved/)).not.toBeInTheDocument();
    const achievedBar = canvas.getByRole('region', {
      name: 'Company Target'
    }).querySelector<SVGRectElement>('.crm-minimal__target-fill')!;
    await expect(Number(achievedBar.getAttribute('width'))).toBe(3210 / 4000 * 500);
    await userEvent.hover(achievedBar);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('3,210 shipments · Target: 3000');
    await userEvent.unhover(achievedBar);
    const appointments = within(canvas.getByRole('region', {
      name: "My Today's Appointments"
    }));
    await expect(appointments.getAllByRole('listitem')).toHaveLength(TODAYS_APPOINTMENTS.length);
    await expect(canvas.getAllByRole('region', {
      name: "My Today's Appointments"
    })).toHaveLength(1);
    const appointmentList = appointments.getByRole('list');
    await expect(appointmentList.scrollHeight).toBeGreaterThan(appointmentList.clientHeight);
    for (const appointment of TODAYS_APPOINTMENTS) {
      const row = appointments.getByText(appointment.title).closest('li')!;
      row.scrollIntoView({
        block: 'nearest'
      });
      await expect(appointments.getByText(appointment.title)).toBeVisible();
      const photo = within(row).getByRole('img', {
        name: appointment.contact
      });
      await expect(photo).toBeVisible();
      await expect((photo as HTMLImageElement).naturalWidth).toBeGreaterThan(0);
    }
    for (const appointment of TODAYS_APPOINTMENTS) {
      const actions = within(appointments.getByRole('group', {
        name: \`Actions for \${appointment.title}\`
      }));
      await userEvent.click(actions.getByRole('button', {
        name: 'Mark done'
      }));
      await expect(actions.getByRole('button', {
        name: 'Completed'
      })).toHaveAttribute('aria-pressed', 'true');
      await userEvent.click(actions.getByRole('button', {
        name: 'Completed'
      }));
      await expect(actions.getByRole('button', {
        name: 'Mark done'
      })).toHaveAttribute('aria-pressed', 'false');
    }
    await userEvent.click(appointments.getAllByRole('button', {
      name: 'View details'
    })[0]);
    const appointmentDialog = within(canvasElement.ownerDocument.body).getByRole('alertdialog');
    await waitFor(() => expect(within(appointmentDialog).getByText('Ocean freight discovery')).toBeVisible());
    await expect(within(appointmentDialog).getByText(/Atlas Freight · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible();
    await userEvent.click(within(appointmentDialog).getByRole('button', {
      name: 'Close',
      exact: true
    }));
    const industries = canvas.getByRole('region', {
      name: 'Accounts by Industry'
    });
    await expect(industries.querySelectorAll('rect[data-industry]')).toHaveLength(10);
    const industryColumn = industries.querySelector<SVGRectElement>('rect[data-industry="Electronics"]')!;
    const documentBody = within(canvasElement.ownerDocument.body);
    await userEvent.hover(industryColumn);
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Electronics: 640 accounts');
    await userEvent.unhover(industryColumn);
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.focus();
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Electronics: 640 accounts');
    await userEvent.keyboard('{Escape}');
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.blur();
    await expect(within(industries).getByRole('img', {
      name: /Electronics: 640.*Consumer Goods: 126.*3191 accounts/
    })).toBeVisible();
    const period = canvas.getByRole('button', {
      name: 'Classic Sales View'
    });
    await userEvent.click(period);
    const viewMenu = within(canvasElement.ownerDocument.body);
    await expect(viewMenu.getAllByRole('option')).toHaveLength(SALES_HOME_VIEWS.length);
    const menuBounds = viewMenu.getByRole('listbox').getBoundingClientRect();
    await expect(menuBounds.right).toBeLessThanOrEqual(window.innerWidth);
    await expect(menuBounds.left).toBeGreaterThanOrEqual(0);
    await expect(viewMenu.queryByText('Reporting period')).not.toBeInTheDocument();
    await expect(viewMenu.queryByRole('option', {
      name: 'This quarter'
    })).not.toBeInTheDocument();
    await expect(SALES_HOME_VIEWS.filter(view => view.group === 'Sales homepages').length).toBeGreaterThan(10);
    await userEvent.click(viewMenu.getByRole('option', {
      name: 'Freight Pipeline Center'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Freight Pipeline Center'
    })).toBeVisible();
    await expect(overview.getByText('$84,500')).toBeVisible();
    for (const view of SALES_HOME_VIEWS.filter(view => view.value !== 'classic')) {
      if (view.value !== 'pipeline') {
        await userEvent.click(canvas.getByRole('button', {
          name: 'Freight Pipeline Center'
        }));
        await userEvent.click(viewMenu.getByRole('option', {
          name: view.label
        }));
      }
      const dashboard = getSalesDashboard(view.value);
      const revenue = canvas.getByRole('region', {
        name: 'Revenue trend'
      });
      await expect(within(revenue).getByText(dashboard.REVENUE_LINES[0].series[5].display, {
        exact: true
      })).toBeVisible();
      await expect(canvasElement.querySelector('[data-dashboard-section="industry"]')).toHaveStyle({
        order: String(dashboard.sections.indexOf('industry') + 1)
      });
      const chartPanels = canvasElement.querySelectorAll('[data-dashboard-section="charts"] > section');
      await expect(within(chartPanels[0] as HTMLElement).getByRole('heading', {
        name: dashboard.chartOrder[0] === 1 ? 'Pipeline by stage' : 'Revenue trend'
      })).toBeVisible();
      const industryChart = within(canvas.getByRole('region', {
        name: 'Accounts by Industry'
      })).getByRole('img');
      await expect(industryChart).toHaveAccessibleName(expect.stringContaining(\`Electronics: \${dashboard.ACCOUNTS_BY_INDUSTRY[0].count}\`));
      if (view.value !== 'pipeline') {
        await userEvent.click(canvas.getByRole('button', {
          name: view.label
        }));
        await userEvent.click(viewMenu.getByRole('option', {
          name: 'Freight Pipeline Center'
        }));
      }
    }
    await userEvent.click(canvas.getByRole('button', {
      name: 'Freight Pipeline Center'
    }));
    await expect(viewMenu.queryByText('Reporting period')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    const dealsPanel = canvas.getByRole('region', {
      name: 'Open deals'
    });
    const dealsBody = dealsPanel.querySelector<HTMLElement>('.table-body-wrap')!;
    await expect(within(dealsBody).getAllByRole('row')).toHaveLength(CARGO_DEALS.length + ADDITIONAL_OPEN_DEALS.length);
    await expect(dealsBody.scrollHeight).toBeGreaterThan(dealsBody.clientHeight);
    dealsBody.scrollTop = dealsBody.scrollHeight;
    await expect(dealsBody.scrollTop).toBeGreaterThan(0);
    dealsBody.scrollTop = 0;
    const today = within(canvas.getByRole('region', {
      name: 'Today and OverDue Tasks'
    }));
    const todayList = today.getByRole('list', {
      name: "Today's tasks"
    });
    const taskCheckboxes = today.getAllByRole('checkbox');
    await expect(taskCheckboxes).toHaveLength(CARGO_INITIAL_TASKS.length + TODAY_TASKS.length);
    for (const [index, checkbox] of taskCheckboxes.entries()) {
      if ([0, 2, 3].includes(index)) await expect(checkbox).toBeChecked();else await expect(checkbox).not.toBeChecked();
    }
    await expect(todayList).toHaveAttribute('tabindex', '0');
    await expect(todayList.scrollHeight).toBeGreaterThan(todayList.clientHeight);
    const lastTask = today.getAllByRole('checkbox').at(-1)!;
    lastTask.scrollIntoView({
      block: 'nearest'
    });
    await expect(todayList.scrollTop).toBeGreaterThan(0);
    for (const checkbox of today.getAllByRole('checkbox', {
      checked: false
    })) await userEvent.click(checkbox);
    for (const checkbox of today.getAllByRole('checkbox')) await expect(checkbox).toBeChecked();
    await expect(today.queryByRole('status')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Review follow-up'
    })).not.toBeInTheDocument();
    await expect(canvas.queryByText(/\\d+ opportunities/)).not.toBeInTheDocument();
    await expect(canvas.getByText('Meridian Health', {
      exact: true
    })).toBeVisible();
    await expect(canvas.queryByRole('heading', {
      name: 'Conversations'
    })).not.toBeInTheDocument();
    await userEvent.click(within(canvasElement.querySelector<HTMLElement>('.crm-minimal__home-controls')!).getByRole('button', {
      name: 'More options'
    }));
    for (const name of ['Edit Homepage', 'Reorder', 'View Fullscreen']) await expect(viewMenu.getByRole('option', {
      name
    })).toBeVisible();
    const originalSections = Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-dashboard-section]'), section => section.style.order);
    for (const action of ['Edit Homepage', 'Reorder']) {
      if (action === 'Reorder') await userEvent.click(within(canvasElement.querySelector<HTMLElement>('.crm-minimal__home-controls')!).getByRole('button', {
        name: 'More options'
      }));
      const option = viewMenu.getByRole('option', {
        name: action
      });
      const labelStyle = canvasElement.ownerDocument.defaultView!.getComputedStyle(option.querySelector('.dropdown-option-label')!);
      await expect(labelStyle.paddingLeft).toBe(labelStyle.paddingRight);
      await userEvent.click(option);
      await expect(viewMenu.queryByRole('dialog')).not.toBeInTheDocument();
      await expect(viewMenu.queryByRole('listbox')).not.toBeInTheDocument();
      await expect(Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-dashboard-section]'), section => section.style.order)).toEqual(originalSections);
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <MinimalPage empty />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No open deals yet. Your opportunities will appear here.')).toBeVisible();
    await expect(canvas.queryByRole('heading', {
      name: 'Conversations'
    })).not.toBeInTheDocument();
    await expect(canvas.queryByText('Revenue goal')).not.toBeInTheDocument();
    const trend = within(canvas.getByRole('region', {
      name: 'Revenue trend'
    }));
    await expect(trend.getByText('Close your first deal to see revenue trends.')).toBeVisible();
    await expect(trend.queryByRole('img')).not.toBeInTheDocument();
    const pipeline = within(canvas.getByRole('region', {
      name: 'Pipeline by stage'
    }));
    await expect(pipeline.getByText('Add opportunities to see your pipeline by stage.')).toBeVisible();
    await expect(pipeline.queryByRole('img')).not.toBeInTheDocument();
    await expect(canvasElement.querySelector('.crm-minimal__trend')).not.toBeInTheDocument();
    await expect(canvas.getAllByText('No appointments scheduled today.')).toHaveLength(1);
    await expect(canvas.queryByRole('group', {
      name: 'Select appointment'
    })).not.toBeInTheDocument();
    await expect(canvas.getByText('Set a company target to track achievement.')).toBeVisible();
    const industries = within(canvas.getByRole('region', {
      name: 'Accounts by Industry'
    }));
    await expect(industries.getByText('Add accounts to see your industry breakdown.')).toBeVisible();
    await expect(industries.queryByRole('img')).not.toBeInTheDocument();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <MinimalPage />,
  play: async ({
    canvasElement
  }) => {
    const legend = within(within(canvasElement).getByRole('list', {
      name: 'Revenue series'
    }));
    const closed = legend.getByRole('button', {
      name: 'Closed revenue'
    });
    const forecast = legend.getByRole('button', {
      name: 'Forecast'
    });
    const series = () => canvasElement.querySelectorAll('[data-revenue-series]');
    await expect(series()).toHaveLength(2);
    await userEvent.click(closed);
    await expect(closed).toHaveAttribute('aria-pressed', 'false');
    await expect(closed).toHaveStyle({
      opacity: '0.4'
    });
    await expect(series()).toHaveLength(1);
    await expect(series()[0]).toHaveAttribute('data-revenue-series', 'Forecast');
    await userEvent.click(forecast);
    await expect(series()).toHaveLength(0);
    closed.focus();
    await userEvent.keyboard('{Enter}');
    await expect(closed).toHaveAttribute('aria-pressed', 'true');
    await expect(series()).toHaveLength(1);
    forecast.focus();
    await userEvent.keyboard(' ');
    await expect(forecast).toHaveAttribute('aria-pressed', 'true');
    await expect(series()).toHaveLength(2);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['test-only'],
  render: () => <MinimalPage />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const page = canvasElement.querySelector('.crm-minimal')!;
    const marks = [['[data-revenue-series="Closed revenue"] circle', 'Revenue trend'], ['[data-revenue-series="Forecast"] circle', 'Revenue trend'], ['.crm-minimal__donut .crm-minimal__chart-hit', 'Pipeline by stage'], ['[data-industry="Electronics"]', 'Accounts by Industry'], ['.crm-minimal__target-fill', 'Company Target'], ['[data-snapshot="0"]', 'Pipeline by stage'], ['.crm-minimal__kpi-columns rect', 'Conversion rate']];
    for (const [selector, title] of marks) {
      const mark = page.querySelector<SVGElement>(selector)!;
      mark.focus();
      await userEvent.keyboard('{Enter}');
      const dialog = await body.findByRole('dialog', {
        name: title
      });
      await waitFor(() => expect(within(dialog).getByRole('heading', {
        name: 'Drilled Down By'
      })).toBeVisible());
      await expect(within(dialog).getByRole('region', {
        name: 'Chart records'
      })).toBeVisible();
      await userEvent.click(within(dialog).getByRole('button', {
        name: 'Close chart records'
      }));
      await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
      await expect(mark).toHaveFocus();
    }
  }
}`,...X.parameters?.docs?.source}}},_e=[`Default`,`FormationChecks`,`InteractionChecks`,`EmptyState`,`RevenueLegend`,`ChartDrilldown`]}))();export{X as ChartDrilldown,G as Default,J as EmptyState,K as FormationChecks,q as InteractionChecks,Y as RevenueLegend,_e as __namedExportsOrder,U as default};