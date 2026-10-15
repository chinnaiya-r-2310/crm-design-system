import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-B3_XL3Gq.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-BVW6fVCH.js";import{n as o,t as s}from"./Checkbox-BgrXt4i7.js";import{n as c,t as l}from"./Tooltip-DedKlE4T.js";import{n as u,t as d}from"./Dropdown-CRWPLa5m.js";import{n as f,t as p}from"./Icon-BWfB9ZdT.js";import{n as m,t as h}from"./Modal-DQDpLovW.js";import{n as g,t as _}from"./ProgressBar-DRkcb2p4.js";import{n as v,t as y}from"./Table-ol0r4G1v.js";import{n as b,t as x}from"./Textarea-1C6xE7XY.js";import{CrmHomepage as S,a as C,i as w,n as T,o as E,r as D,t as O}from"./CrmHomepage.stories-Yb-9Bjgm.js";import{i as k,r as A}from"./Colorful.data-BX7zq0sM.js";var j,M,N,P,F,I,L,R=e((()=>{k(),j=[{label:`Prospecting`,value:8,display:`$8,000`},{label:`Qualification`,value:18,display:`$18,000`},{label:`Needs analysis`,value:10,display:`$10,000`},{label:`Proposal`,value:24.5,display:`$24,500`},{label:`Negotiation`,value:55,display:`$55,000`}],M=[24,32,28,40,36,48,44,58,52,65,60,72,68,82,90],N=[{label:`Closed revenue`,color:`blue`,series:A[0].series},{label:`Forecast`,color:`pink`,series:A[0].series.map((e,t)=>{let n=[60,125,62,1,78,102][t];return{label:e.label,value:n,display:`${(n*1e3).toLocaleString(`en-US`)}`}})},{label:`Target`,color:`amber`,series:A[0].series.map((e,t)=>{let n=[65,58,85,70,105,80][t];return{label:e.label,value:n,display:`${(n*1e3).toLocaleString(`en-US`)}`}})}],P=[{industry:`Technology`,count:640},{industry:`Healthcare`,count:230},{industry:`Finance`,count:420},{industry:`Manufacturing`,count:165},{industry:`Retail`,count:510},{industry:`Education`,count:300},{industry:`Energy`,count:190},{industry:`Logistics`,count:350},{industry:`Real Estate`,count:260},{industry:`Hospitality`,count:126}],F={target:3e3,achieved:3210,axisMax:4e3},I=[{id:`pricing`,title:`Confirm pricing for Atlas Logistics`,completed:!1},{id:`demo`,title:`Prepare Northstar Analytics demo`,completed:!1},{id:`contacts`,title:`Update Meridian Health contacts`,completed:!1},{id:`contract`,title:`Send Evergreen Energy contract`,completed:!1},{id:`handoff`,title:`Coordinate customer success handoff`,completed:!1},{id:`forecast`,title:`Update weekly sales forecast`,completed:!1},{id:`notes`,title:`Log discovery call notes`,completed:!1}],L=[{id:`discovery`,time:`09:30`,end:`10:00`,title:`Discovery call`,account:`Atlas Logistics`,contact:`Daniel Kim`,avatar:`user_01.jpg`,type:`Video call`},{id:`proposal-review`,time:`11:00`,end:`11:45`,title:`Proposal review`,account:`Meridian Health`,contact:`Sofia Martinez`,avatar:`user_02.jpg`,type:`Video call`},{id:`renewal-review`,time:`15:00`,end:`15:30`,title:`Renewal discussion`,account:`Evergreen Energy`,contact:`Alex Morgan`,avatar:`user_03.jpg`,type:`Phone call`}]})),z=e((()=>{}));function B(e){let t=(0,U.useRef)(null),[n,r]=(0,U.useState)(e);return(0,U.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(([e])=>{e.contentRect.width>0&&r(e.contentRect.width)});return e.observe(t.current),()=>e.disconnect()},[]),{ref:t,width:n}}function V(e){return e.map((t,n)=>{if(n===0)return`M ${t.x},${t.y}`;let r=e[n-1],i=(r.x+t.x)/2;return`C ${i},${r.y} ${i},${t.y} ${t.x},${t.y}`}).join(` `)}function H({empty:e=!1}){let t=(0,U.useId)(),{ref:n,width:r}=B(320),{ref:i,width:o}=B(1e3),c=(o-70)/P.length,[u,f]=(0,U.useState)(``),[m,g]=(0,U.useState)(null),v=(0,U.useRef)(null),[b,E]=(0,U.useState)(`month`),[O,k]=(0,U.useState)(e?[]:[...D,...I]),[R,z]=(0,U.useState)(null),[H,G]=(0,U.useState)(null),[K,q]=(0,U.useState)([]),J=M.map((e,t)=>({x:2+t*156/(M.length-1),y:25-e/100*24})),Z=R===null?-1:Math.max(0,Math.min(R-1,J.length-3)),Q=w[b],$=e?[]:T;return(0,W.jsx)(S,{empty:e,showTerritory:!1,children:(0,W.jsx)(`div`,{className:`crm-minimal`,children:(0,W.jsxs)(`div`,{className:`crm-minimal__main`,role:`region`,"aria-labelledby":`${t}-title`,children:[(0,W.jsxs)(`div`,{className:`crm-minimal__heading`,children:[(0,W.jsx)(`h1`,{id:`${t}-title`,children:`Welcome Patricia Boyle`}),(0,W.jsx)(d,{layout:`vertical`,width:`fit-content`,options:C,value:b,onChange:e=>E(e)})]}),(0,W.jsxs)(`section`,{id:`${t}-overview`,"aria-label":`Sales overview`,className:`crm-minimal__overview`,children:[(0,W.jsxs)(`dl`,{className:`crm-minimal__metrics`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`dt`,{children:`Closed revenue`}),(0,W.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`$0`:Q.revenue}),(0,W.jsx)(`p`,{children:e?`No revenue yet`:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--up`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`↗`}),` Increased `,Q.changes[0].replace(`↑ `,``)]}),` vs. previous `,b]})})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__pipeline-kpi`,children:[(0,W.jsx)(`dt`,{children:`Open pipeline`}),(0,W.jsx)(`dd`,{children:e?`$0`:Q.pipeline}),e?(0,W.jsx)(`p`,{children:`No open opportunities`}):(0,W.jsxs)(`svg`,{className:`crm-minimal__kpi-area`,viewBox:`0 0 160 28`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Open pipeline sample trend across 15 snapshots`,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},onMouseLeave:()=>z(null),children:[(0,W.jsx)(`defs`,{children:(0,W.jsxs)(`linearGradient`,{id:`${t}-pipeline-fill`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,W.jsx)(`stop`,{offset:`0%`,stopColor:`currentColor`,stopOpacity:`0.25`}),(0,W.jsx)(`stop`,{offset:`100%`,stopColor:`currentColor`,stopOpacity:`0.02`})]})}),(0,W.jsx)(`path`,{d:`${V(J)} L 158,28 L 2,28 Z`,fill:`url(#${t}-pipeline-fill)`}),(0,W.jsx)(`path`,{d:V(J),fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,vectorEffect:`non-scaling-stroke`}),J.map((e,t)=>{let n=t===0?0:(J[t-1].x+e.x)/2,r=t===J.length-1?160:(e.x+J[t+1].x)/2,i=R!==null&&t>=Z&&t<Z+3;return(0,W.jsxs)(`g`,{onMouseEnter:()=>z(t),children:[(0,W.jsx)(`circle`,{"data-snapshot-dot":t,"data-visible":i,cx:e.x,cy:e.y,r:`2`,fill:`currentColor`,opacity:+!!i,pointerEvents:`none`}),(0,W.jsx)(l,{as:`g`,content:`Open pipeline: ${Q.pipeline} · Snapshot ${t+1} of 15 · Trend index: ${M[t]}`,placement:`bottom`,children:(0,W.jsx)(`rect`,{className:`crm-minimal__chart-hit`,"data-snapshot":t,x:n,y:`0`,width:r-n,height:`28`,fill:`transparent`,focusable:`false`,"aria-label":`Pipeline snapshot ${t+1} of 15, trend index ${M[t]}`})})]},t)})]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`dt`,{children:`Deals won`}),(0,W.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`0`:Q.deals}),(0,W.jsx)(`p`,{children:e?`Your first win starts here`:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--up`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`↗`}),` Increased `,Q.changes[1].replace(`↑ `,``)]}),` vs. previous `,b]})})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__conversion-kpi`,children:[(0,W.jsx)(`dt`,{children:`Conversion rate`}),(0,W.jsx)(`dd`,{className:e?void 0:`crm-minimal__trend--up`,children:e?`0%`:Q.conversion}),!e&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(`svg`,{className:`crm-minimal__kpi-columns`,viewBox:`0 0 300 30`,preserveAspectRatio:`none`,role:`img`,"aria-label":`Conversion rate sample trend across 30 snapshots`,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},children:Y.map((e,t)=>(0,W.jsx)(l,{as:`g`,content:`Snapshot ${t+1}: ${e}% conversion · Sample data`,placement:`bottom`,children:(0,W.jsx)(`rect`,{className:`crm-minimal__chart-hit`,focusable:`false`,"aria-label":`Snapshot ${t+1}: ${e}% conversion`,x:t*10+1,y:30-e,width:`8`,height:e,fill:`currentColor`})},t))})})]})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__goal`,children:[(0,W.jsxs)(`div`,{className:`crm-minimal__section-heading`,children:[(0,W.jsx)(`h2`,{children:`Revenue goal`}),(0,W.jsxs)(`p`,{children:[e?`0`:Q.progress,`% of `,Q.target]})]}),(0,W.jsx)(`div`,{role:`progressbar`,"aria-label":`Revenue goal`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e?0:Q.progress,"aria-valuetext":`${e?`$0`:Q.revenue} of ${Q.target}`,children:(0,W.jsx)(_,{value:e?0:Q.progress})})]})]}),(0,W.jsx)(`div`,{className:`crm-minimal__charts`,children:A.slice(0,2).map((i,a)=>{let o=a===1?{...i,series:j}:i,s=e=>52+e*(r-72)/(o.series.length-1),c=o.series.reduce((e,t)=>e+t.value,0),u=o.series[o.series.length-1],d=o.series[o.series.length-2],f=u.value-d.value,p=f>=0?`up`:`down`,m=0;return(0,W.jsxs)(`section`,{className:`crm-minimal__chart`,"aria-labelledby":`${t}-chart-${a}`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-chart-${a}`,children:o.title})}),e?(0,W.jsx)(`p`,{className:`crm-minimal__empty`,children:a===0?`Close your first deal to see revenue trends.`:`Add opportunities to see your pipeline by stage.`}):(0,W.jsx)(W.Fragment,{children:o.kind===`line`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`crm-minimal__chart-summary`,children:[(0,W.jsx)(`strong`,{className:`crm-minimal__trend--${p}`,children:u.display}),(0,W.jsxs)(`p`,{children:[(0,W.jsxs)(`span`,{className:`crm-minimal__trend crm-minimal__trend--${p}`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`,children:f>=0?`↗`:`↘`}),` `,f>=0?`Increased`:`Decreased`,` `,Math.abs(f/d.value*100).toFixed(1),`% · `,Math.abs(f*1e3).toLocaleString(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0})]}),` vs. `,d.label]})]}),(0,W.jsxs)(`svg`,{ref:n,className:`crm-minimal__line`,viewBox:`0 0 ${r} 180`,role:`img`,"aria-label":`${o.title}. ${N.map(e=>`${e.label}: ${e.series.map(e=>`${e.label}: ${e.display}`).join(`; `)}`).join(`. `)}`,children:[Array.from({length:6},(e,t)=>t*25).map(e=>{let t=140-e/125*110;return(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`line`,{x1:`52`,x2:r-20,y1:t,y2:t,className:`crm-minimal__gridline`}),(0,W.jsxs)(`text`,{className:`crm-minimal__svg-label`,x:`44`,y:t+4,textAnchor:`end`,children:[`$`,e,`K`]})]},e)}),(0,W.jsx)(`line`,{x1:`52`,x2:`52`,y1:`30`,y2:`140`,className:`crm-minimal__y-axis`}),N.map(e=>(0,W.jsxs)(`g`,{className:`crm-minimal__revenue--${e.color}`,"data-revenue-series":e.label,children:[(0,W.jsx)(`path`,{d:V(e.series.map((e,t)=>({x:s(t),y:140-e.value/125*110}))),fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`}),e.series.map((t,n)=>(0,W.jsx)(l,{as:`g`,content:`${e.label} · ${t.label}: ${t.display}`,placement:`bottom`,children:(0,W.jsx)(`circle`,{className:`crm-minimal__chart-hit`,tabIndex:0,"aria-label":`${e.label} · ${t.label}: ${t.display}`,"data-month":t.label,cx:s(n),cy:140-t.value/125*110,r:`3`,fill:`currentColor`,stroke:`transparent`,strokeWidth:`8`})},t.label))]},e.label)),o.series.map((e,t)=>(0,W.jsx)(`text`,{className:`crm-minimal__line-month`,x:s(t),y:`166`,textAnchor:`middle`,children:e.label.slice(0,3)},e.label))]}),(0,W.jsx)(`ul`,{className:`crm-minimal__line-legend`,"aria-label":`Revenue series`,children:N.map(e=>(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`span`,{className:`crm-minimal__revenue--${e.color}`,"aria-hidden":`true`}),e.label]},e.label))})]}):(0,W.jsxs)(`div`,{className:`crm-minimal__donut-layout`,children:[(0,W.jsxs)(`svg`,{className:`crm-minimal__donut`,viewBox:`0 0 120 120`,role:`img`,"aria-label":`${o.title}. ${o.series.map(e=>`${e.label}: ${e.display}`).join(`; `)}`,children:[o.series.map((e,t)=>{let n=m,r=e.value/c*100;return m+=r,(0,W.jsx)(l,{as:`g`,content:`${e.label}: ${e.display} (${r.toFixed(1)}%)`,placement:`bottom`,followCursor:!0,children:(0,W.jsx)(`circle`,{tabIndex:0,"aria-label":`${e.label}: ${e.display}, ${r.toFixed(1)}%`,cx:`60`,cy:`60`,r:`44`,fill:`none`,pathLength:`100`,strokeWidth:`14`,strokeDasharray:`${r} ${100-r}`,strokeDashoffset:-n,transform:`rotate(-90 60 60)`,className:`crm-minimal__chart-hit crm-minimal__segment--${t}`})},e.label)}),o.series.map((e,t)=>{let n=o.series.slice(0,t).reduce((e,t)=>e+t.value,0)/c*Math.PI*2-Math.PI/2;return(0,W.jsx)(`line`,{className:`crm-minimal__donut-separator`,x1:60+37*Math.cos(n),y1:60+37*Math.sin(n),x2:60+51*Math.cos(n),y2:60+51*Math.sin(n)},e.label)}),(0,W.jsxs)(`text`,{x:`60`,y:`58`,textAnchor:`middle`,className:`crm-minimal__donut-total`,children:[`$`,c.toFixed(1),`K`]}),(0,W.jsx)(`text`,{x:`60`,y:`72`,textAnchor:`middle`,className:`crm-minimal__donut-caption`,children:`Pipeline`})]}),(0,W.jsx)(`ul`,{className:`crm-minimal__legend`,children:o.series.map((e,t)=>(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`span`,{className:`crm-minimal__segment--${t}`,"aria-hidden":`true`,children:`●`}),(0,W.jsxs)(`div`,{children:[e.label,(0,W.jsxs)(`strong`,{children:[e.display,` `,(0,W.jsxs)(`span`,{className:`crm-minimal__caption`,children:[`· `,(e.value/c*100).toFixed(1),`%`]})]})]})]},e.label))})]})})]},o.title)})}),(0,W.jsxs)(`div`,{className:`crm-minimal__charts crm-minimal__charts--company`,children:[(0,W.jsxs)(`section`,{className:`crm-minimal__chart crm-minimal__company-target`,"aria-labelledby":`${t}-company-title`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-company-title`,children:`Company Target`})}),e?(0,W.jsx)(`p`,{className:`crm-minimal__empty`,children:`Set a company target to track achievement.`}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`crm-minimal__target-summary`,children:[(0,W.jsxs)(`span`,{children:[`Actual: `,(0,W.jsx)(`strong`,{children:F.achieved})]}),(0,W.jsx)(`span`,{className:`crm-minimal__target-divider`,"aria-hidden":`true`,children:`|`}),(0,W.jsxs)(`span`,{children:[`Target: `,(0,W.jsx)(`strong`,{children:F.target})]})]}),(0,W.jsxs)(`svg`,{className:`crm-minimal__target`,viewBox:`0 0 640 180`,role:`img`,"aria-label":`Company Target. Entire Org: ${F.achieved} records achieved. Target: ${F.target}.`,children:[[0,1e3,2e3,3e3,4e3].map(e=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`line`,{className:`crm-minimal__gridline`,x1:100+e/F.axisMax*500,x2:100+e/F.axisMax*500,y1:`30`,y2:`120`}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-label`,x:100+e/F.axisMax*500,y:`140`,textAnchor:`middle`,children:e})]},e)),(0,W.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`88`,y:`79`,textAnchor:`end`,children:`Entire Org`}),(0,W.jsx)(`rect`,{className:`crm-minimal__target-track`,x:`100`,y:`40`,width:`500`,height:`70`}),(0,W.jsx)(l,{as:`g`,content:`Entire Org: ${F.achieved.toLocaleString(`en-US`)} records · Target: ${F.target}`,placement:`bottom`,children:(0,W.jsx)(`rect`,{tabIndex:0,"aria-label":`Achieved: ${F.achieved} records. Target: ${F.target}`,className:`crm-minimal__target-fill crm-minimal__chart-hit`,x:`100`,y:`49`,width:F.achieved/F.axisMax*500,height:`52`})}),(0,W.jsx)(`line`,{className:`crm-minimal__target-marker`,x1:100+F.target/F.axisMax*500,x2:100+F.target/F.axisMax*500,y1:`40`,y2:`110`}),(0,W.jsxs)(`text`,{className:`crm-minimal__svg-label`,x:`120`,y:`24`,children:[`Target: `,F.target]}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-value`,x:100+F.achieved/F.axisMax*250,y:`80`,textAnchor:`middle`,children:F.achieved}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`350`,y:`170`,textAnchor:`middle`,children:`Record Count`})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__target-legend`,children:[(0,W.jsx)(`span`,{"aria-hidden":`true`}),`Achieved`]})]})]}),(0,W.jsxs)(`section`,{className:`crm-minimal__chart`,"aria-labelledby":`${t}-appointments-title`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-appointments-title`,children:`My Today's Appointments`})}),e?(0,W.jsx)(`p`,{className:`crm-minimal__empty`,children:`No appointments scheduled today.`}):(0,W.jsx)(`ul`,{className:`crm-minimal__list crm-minimal__appointment-agenda`,children:L.map(e=>(0,W.jsxs)(`li`,{children:[(0,W.jsx)(`img`,{className:`crm-minimal__appointment-avatar`,src:`/crm-design-system/images/avatars/${e.avatar}`,alt:e.contact,width:`40`,height:`40`}),(0,W.jsxs)(`div`,{className:`crm-minimal__appointment-agenda-details`,children:[(0,W.jsx)(`h3`,{children:e.title}),(0,W.jsxs)(`p`,{className:`crm-minimal__appointment-time`,children:[(0,W.jsxs)(`span`,{children:[e.account,` · `,e.contact]}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`time`,{dateTime:e.time,children:e.time}),` · `,e.type]})]})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__appointment-actions`,role:`group`,"aria-label":`Actions for ${e.title}`,children:[(0,W.jsx)(a,{variant:`link-primary`,onClick:()=>G(e),children:`View details`}),(0,W.jsx)(a,{variant:`default`,size:`sm`,"aria-pressed":K.includes(e.id),onClick:()=>q(t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id]),children:K.includes(e.id)?`Completed`:`Mark done`})]})]},e.id))}),(0,W.jsx)(h,{isOpen:H!==null,type:`alert`,variant:`info`,title:H?.title??`Appointment details`,description:H?`${H.account} · ${H.contact} · ${H.time}–${H.end} · ${H.type}`:``,confirmLabel:`Close`,onClose:()=>G(null)})]})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__industry-builder`,children:[(0,W.jsxs)(`section`,{className:`crm-minimal__chart crm-minimal__industries`,"aria-labelledby":`${t}-industries-title`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-industries-title`,children:`Accounts by Industry`})}),e?(0,W.jsx)(`p`,{className:`crm-minimal__empty`,children:`Add accounts to see your industry breakdown.`}):(0,W.jsx)(`div`,{className:`crm-minimal__industry-scroll`,tabIndex:0,role:`group`,"aria-label":`Industry chart, scroll horizontally on small screens`,children:(0,W.jsxs)(`svg`,{ref:i,className:`crm-minimal__columns`,viewBox:`0 0 ${o} 300`,role:`img`,"aria-label":`Accounts by Industry. ${P.map(e=>`${e.industry}: ${e.count}`).join(`; `)}. Total: ${P.reduce((e,t)=>e+t.count,0)} accounts.`,children:[[0,200,400,600,800].map(e=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(`line`,{className:`crm-minimal__gridline`,x1:`50`,x2:o-10,y1:240-e/800*208,y2:240-e/800*208}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-label`,x:`38`,y:245-e/800*208,textAnchor:`end`,children:e})]},e)),P.map((e,t)=>(0,W.jsxs)(`g`,{children:[(0,W.jsx)(l,{as:`g`,content:`${e.industry}: ${e.count} accounts`,placement:`bottom`,children:(0,W.jsx)(`rect`,{tabIndex:0,"aria-label":`${e.industry}: ${e.count} accounts`,"data-industry":e.industry,className:`crm-minimal__column crm-minimal__chart-hit`,x:50+t*c+c*.23,y:240-e.count/800*208,width:c*.54,height:e.count/800*208})}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-value`,x:50+(t+.5)*c,y:230-e.count/800*208,textAnchor:`middle`,children:e.count}),(0,W.jsx)(`text`,{className:`crm-minimal__svg-label`,x:50+(t+.5)*c,y:`266`,textAnchor:`middle`,children:e.industry})]},e.industry))]})})]}),(0,W.jsxs)(`section`,{className:`crm-minimal__builder`,"aria-labelledby":`${t}-builder-title`,children:[(0,W.jsxs)(`div`,{className:`crm-minimal__builder-intro`,children:[(0,W.jsx)(`span`,{className:`crm-minimal__builder-mark`,children:(0,W.jsx)(p,{name:`WmsZia`,size:24})}),(0,W.jsxs)(`h2`,{id:`${t}-builder-title`,children:[`Build something `,(0,W.jsx)(`span`,{children:`for your next move.`})]}),(0,W.jsx)(`p`,{children:`What would you like to build today?`})]}),(0,W.jsxs)(`form`,{className:`crm-minimal__builder-form`,onSubmit:e=>{e.preventDefault(),u.trim()&&g(u.trim())},children:[(0,W.jsx)(`span`,{className:`crm-minimal__builder-sparkle`,"aria-hidden":`true`}),(0,W.jsx)(`div`,{ref:v,children:(0,W.jsx)(x,{"aria-label":`Describe your idea`,placeholder:`Describe your idea…`,width:`100%`,layout:`vertical`,minHeight:48,value:u,maxLength:2e3,onChange:e=>f(e.target.value)})}),(0,W.jsxs)(`div`,{className:`crm-minimal__builder-toolbar`,children:[(0,W.jsxs)(`div`,{className:`crm-minimal__builder-tools`,role:`group`,"aria-label":`Idea tools`,children:[(0,W.jsx)(a,{type:`button`,variant:`link-default`,disabled:!0,"aria-label":`Attach file (unavailable in local demo)`,title:`Attachments are unavailable in this local demo`,children:(0,W.jsx)(p,{name:`RtUnlink`,size:18})}),(0,W.jsx)(a,{type:`button`,variant:`link-default`,"aria-label":`Edit idea`,title:`Edit idea`,onClick:()=>v.current?.querySelector(`textarea`)?.focus(),children:(0,W.jsx)(p,{name:`Edit`,size:18})})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__builder-tools`,role:`group`,"aria-label":`Preview controls`,children:[(0,W.jsx)(a,{type:`button`,variant:`link-default`,disabled:!0,"aria-label":`Voice input (unavailable in local demo)`,title:`Voice input is unavailable in this local demo`,children:(0,W.jsx)(p,{name:`WmsAnnouncements`,size:20})}),(0,W.jsx)(`span`,{className:`crm-minimal__builder-send`,children:(0,W.jsx)(a,{type:`submit`,size:`sm`,"aria-label":`Preview idea`,title:`Preview idea · Local demo`,disabled:!u.trim(),children:(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`↑`})})})]})]})]}),m!==null&&(0,W.jsx)(h,{isOpen:!0,type:`alert`,variant:`info`,title:`Idea preview · Local demo`,description:`${m}\n\nThis preview only captures your idea. No application is generated and no data is sent.`,confirmLabel:`Back to idea`,onSave:()=>{g(null),v.current?.querySelector(`textarea`)?.focus()},onClose:()=>{g(null),v.current?.querySelector(`textarea`)?.focus()}})]})]}),(0,W.jsxs)(`div`,{className:`crm-minimal__grid`,children:[(0,W.jsxs)(`section`,{id:`${t}-deals`,"aria-labelledby":`${t}-deals-title`,className:`crm-minimal__deals`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-deals-title`,children:`Open deals`})}),(0,W.jsx)(`div`,{className:`crm-minimal__table`,children:(0,W.jsx)(y,{columns:X,rows:$,selectable:!1,width:`100%`,emptyMessage:`No open deals yet. Your opportunities will appear here.`})})]}),(0,W.jsx)(`aside`,{className:`crm-minimal__daily`,"aria-label":`Daily workspace`,children:(0,W.jsxs)(`section`,{id:`${t}-today`,"aria-labelledby":`${t}-tasks-title`,children:[(0,W.jsx)(`div`,{className:`crm-minimal__section-heading`,children:(0,W.jsx)(`h2`,{id:`${t}-tasks-title`,children:`Today`})}),(0,W.jsx)(`ul`,{className:`crm-minimal__list crm-minimal__today-list`,tabIndex:O.length?0:void 0,"aria-label":`Today's tasks`,children:O.map(e=>(0,W.jsx)(`li`,{"data-completed":e.completed||void 0,children:(0,W.jsx)(s,{label:e.title,checked:e.completed,onChange:()=>k(t=>t.map(t=>t.id===e.id?{...t,completed:!t.completed}:t))})},e.id))}),e&&(0,W.jsx)(`p`,{className:`crm-minimal__empty`,role:`status`,children:`Nothing scheduled. Enjoy a fresh start.`})]})})]})]})})})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{U=t(n(),1),i(),f(),b(),m(),o(),u(),g(),c(),v(),O(),E(),k(),R(),z(),W=r(),{expect:G,userEvent:K,within:q}=__STORYBOOK_MODULE_TEST__,J={title:`Design System/Patterns/crm-homepage/minimal`,parameters:{layout:`fullscreen`,docs:{description:{component:`A minimal CRM homepage inside the existing CRM shell. Preserves the floating page header, with 30px horizontal content padding, four headline metrics, revenue progress, open deals, and tasks. Uses existing components and shared CRM sample data; all interactions are local.`}}}},Y=[18,22,19,24,21,25,23,17,26,20,24,28,22,19,25,27,21,24,18,23,29,25,22,26,20,24,27,23,28,25],X=[{key:`name`,label:`Account`},{key:`stage`,label:`Stage`},{key:`amount`,label:`Value`},{key:`close`,label:`Closing`}],Z={render:()=>(0,W.jsx)(H,{}),play:async({canvasElement:e})=>{let t=q(e);await G(t.getByRole(`heading`,{name:`Welcome Patricia Boyle`})).toBeVisible();let n=q(t.getByRole(`region`,{name:`Build something for your next move.`}));await G(n.queryByRole(`heading`,{name:`Suggestions`})).not.toBeInTheDocument(),await G(n.queryByRole(`list`)).not.toBeInTheDocument();let r=n.getByRole(`textbox`,{name:`Describe your idea`});await G(n.getByRole(`button`,{name:`Attach file (unavailable in local demo)`})).toBeDisabled(),await G(n.getByRole(`button`,{name:`Voice input (unavailable in local demo)`})).toBeDisabled(),await K.click(n.getByRole(`button`,{name:`Edit idea`})),await G(r).toHaveFocus(),await G(n.getByRole(`button`,{name:`Preview idea`})).toBeDisabled(),await K.type(r,`Create a sales forecast dashboard.`),await K.click(n.getByRole(`button`,{name:`Preview idea`}));let i=q(e.ownerDocument.body).getByRole(`alertdialog`,{name:`Idea preview · Local demo`});await G(i).toHaveTextContent(`No application is generated`),await K.click(q(i).getByRole(`button`,{name:`Back to idea`})),await G(r).toHaveValue(`Create a sales forecast dashboard.`),await K.clear(r),await G(t.queryByText(`Friday, June 19, 2026`)).not.toBeInTheDocument(),await G(t.queryByText(`A little clarity for your next move.`)).not.toBeInTheDocument(),await G(t.queryByText(`Reporting period`)).not.toBeInTheDocument(),await G(t.queryByRole(`button`,{name:`All Territories`})).not.toBeInTheDocument();let a=q(t.getByRole(`region`,{name:`Sales overview`}));await G(a.getAllByRole(`term`)).toHaveLength(4);let o=a.getByRole(`img`,{name:`Open pipeline sample trend across 15 snapshots`});await G(o).toBeVisible(),await G(o.querySelectorAll(`path`)).toHaveLength(2),await G(e.ownerDocument.defaultView.getComputedStyle(o).position).toBe(`absolute`),await G(a.getByText(`Conversion rate`)).toBeVisible();let s=a.getByRole(`img`,{name:`Conversion rate sample trend across 30 snapshots`});await G(s).toBeVisible(),await G(s.querySelectorAll(`rect`)).toHaveLength(30),await G(e.ownerDocument.defaultView.getComputedStyle(s).position).toBe(`absolute`);let c=s.querySelector(`rect`);await K.hover(c),await G(q(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Snapshot 1: 18% conversion`),await K.unhover(c),await G(a.getByText(`25%`,{exact:!0})).toBeVisible(),await G(a.getByText(`$84,500`)).toBeVisible();let l=q(t.getByRole(`region`,{name:`Revenue trend`})),u=l.getByRole(`img`,{name:/Revenue trend/});await G(u).toBeVisible(),await G(u.querySelectorAll(`path`)).toHaveLength(3),await G(u.querySelector(`.crm-minimal__y-axis`)).toBeInTheDocument(),await G(q(u).getByText(`$0K`)).toBeVisible(),await G(q(u).getByText(`$125K`)).toBeVisible();for(let e=0;e<N.length;e++)for(let t=e+1;t<N.length;t++){let n=N[e].series.map((e,n)=>e.value-N[t].series[n].value);await G(n.some(e=>e>0)&&n.some(e=>e<0)).toBe(!0)}u.querySelectorAll(`path`).forEach(e=>G(e.getAttribute(`d`)).toContain(`C `));let d=P.map(e=>e.count);await G(d.some((e,t)=>t>0&&e>d[t-1])).toBe(!0),await G(d.some((e,t)=>t>0&&e<d[t-1])).toBe(!0);let f=u.querySelectorAll(`text.crm-minimal__line-month`);await G(f).toHaveLength(6);for(let e of N){let t=u.querySelector(`[data-revenue-series="${e.label}"]`);await G(t).toHaveClass(`crm-minimal__revenue--${e.color}`);let n=t.querySelectorAll(`circle`);await G(n).toHaveLength(6),n.forEach((e,t)=>G(e.getAttribute(`cx`)).toBe(f[t].getAttribute(`x`)))}let p=a.getByRole(`img`,{name:`Conversion rate sample trend across 30 snapshots`});for(let t of[o,p]){let n=!1,r=()=>{n=!0};e.addEventListener(`click`,r);try{let e=new MouseEvent(`click`,{bubbles:!0,cancelable:!0});t.querySelector(`rect`).dispatchEvent(e),await G(e.defaultPrevented).toBe(!0),await G(n).toBe(!1)}finally{e.removeEventListener(`click`,r)}}let m=o.querySelectorAll(`rect[data-snapshot]`),h=q(e.ownerDocument.body);await G(m).toHaveLength(15),await G(o.querySelectorAll(`[data-snapshot-dot]`)).toHaveLength(15),await G(o.querySelectorAll(`[data-visible="true"]`)).toHaveLength(0);for(let e of[0,7,14]){await K.hover(m[e]),await G(h.getByRole(`tooltip`)).toHaveTextContent(`Snapshot ${e+1} of 15`);let t=Math.max(0,Math.min(e-1,12));await G(Array.from(o.querySelectorAll(`[data-visible="true"]`),e=>Number(e.getAttribute(`data-snapshot-dot`)))).toEqual([t,t+1,t+2]),await K.unhover(m[e]),await G(o.querySelectorAll(`[data-visible="true"]`)).toHaveLength(0),await G(h.queryByRole(`tooltip`)).not.toBeInTheDocument()}for(let e of[o,s]){await G(e.querySelectorAll(`[tabindex]`)).toHaveLength(0);for(let t of e.querySelectorAll(`rect`))await G(t).toHaveAttribute(`focusable`,`false`),t.focus(),await G(t).not.toHaveFocus()}await G(h.queryByRole(`tooltip`)).not.toBeInTheDocument();let g=u.querySelector(`[data-revenue-series="Forecast"] circle[data-month="January"]`);await K.hover(g),await G(q(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Forecast · January: $60,000`),await K.unhover(g),await G(t.queryByText(`View chart data`)).not.toBeInTheDocument();let _=q(t.getByRole(`region`,{name:`Pipeline by stage`})),v=_.getByRole(`img`,{name:/Pipeline by stage.*Negotiation: \$55,000/});await G(v).toBeVisible(),await G(v.querySelectorAll(`circle`)).toHaveLength(5),await G(v.querySelectorAll(`.crm-minimal__donut-separator`)).toHaveLength(5),await G(_.getAllByRole(`listitem`)).toHaveLength(5);for(let e of j)await G(_.getByText(e.label,{exact:!0})).toBeVisible();for(let t of v.querySelectorAll(`line`)){let n=e.ownerDocument.defaultView.getComputedStyle(t);await G(n.strokeWidth).toBe(`2px`),await G(n.vectorEffect).toBe(`non-scaling-stroke`)}await K.hover(v.querySelector(`circle`)),await G(q(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Prospecting: $8,000`);let y=v.querySelector(`circle`);for(let t of[{clientX:240,clientY:200},{clientX:260,clientY:220}]){await K.pointer({target:y,coords:t});let n=q(e.ownerDocument.body).getByRole(`tooltip`).parentElement;await G(n.style.left).toBe(`${t.clientX}px`),await G(n.style.top).toBe(`${t.clientY}px`)}await K.unhover(y),await G(q(e.ownerDocument.body).queryByRole(`tooltip`)).not.toBeInTheDocument(),y.focus(),await G(q(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`Prospecting: $8,000`),await K.keyboard(`{Escape}`),y.blur(),await G(_.getByText(`$115.5K`)).toBeVisible(),await G(l.getByText(/Decreased 5.6% · \$5,000/)).toHaveClass(`crm-minimal__trend--down`),await G(a.getByText(`Increased 18.2%`)).toHaveClass(`crm-minimal__trend--up`),await G(a.getByText(`Increased 3 deals`)).toHaveClass(`crm-minimal__trend--up`);let b=q(t.getByRole(`region`,{name:`Company Target`}));await G(b.getByRole(`img`,{name:/3210 records achieved.*Target: 3000/})).toBeVisible(),await G(b.getByText(`3210`,{selector:`strong`})).toBeVisible(),await G(b.getByText(`3000`,{selector:`strong`})).toBeVisible(),await G(b.queryByText(/% of target achieved/)).not.toBeInTheDocument();let x=t.getByRole(`region`,{name:`Company Target`}).querySelector(`.crm-minimal__target-fill`);await G(Number(x.getAttribute(`width`))).toBe(3210/4e3*500),await K.hover(x),await G(q(e.ownerDocument.body).getByRole(`tooltip`)).toHaveTextContent(`3,210 records · Target: 3000`),await K.unhover(x);let S=q(t.getByRole(`region`,{name:`My Today's Appointments`}));await G(S.getAllByRole(`listitem`)).toHaveLength(L.length),await G(t.getAllByRole(`region`,{name:`My Today's Appointments`})).toHaveLength(1);for(let e of L){await G(S.getByText(e.title)).toBeVisible();let t=S.getByRole(`img`,{name:e.contact});await G(t).toBeVisible(),await G(t.naturalWidth).toBeGreaterThan(0)}for(let e of L){let t=q(S.getByRole(`group`,{name:`Actions for ${e.title}`}));await K.click(t.getByRole(`button`,{name:`Mark done`})),await G(t.getByRole(`button`,{name:`Completed`})).toHaveAttribute(`aria-pressed`,`true`),await K.click(t.getByRole(`button`,{name:`Completed`})),await G(t.getByRole(`button`,{name:`Mark done`})).toHaveAttribute(`aria-pressed`,`false`)}await K.click(S.getAllByRole(`button`,{name:`View details`})[0]);let C=q(e.ownerDocument.body).getByRole(`alertdialog`);await G(q(C).getByText(`Discovery call`)).toBeVisible(),await G(q(C).getByText(/Atlas Logistics · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible(),await K.click(q(C).getByRole(`button`,{name:`Close`,exact:!0}));let w=t.getByRole(`region`,{name:`Accounts by Industry`});await G(w.querySelectorAll(`rect[data-industry]`)).toHaveLength(10);let T=w.querySelector(`rect[data-industry="Technology"]`),E=q(e.ownerDocument.body);await K.hover(T),await G(E.getByRole(`tooltip`)).toHaveTextContent(`Technology: 640 accounts`),await K.unhover(T),await G(E.queryByRole(`tooltip`)).not.toBeInTheDocument(),T.focus(),await G(E.getByRole(`tooltip`)).toHaveTextContent(`Technology: 640 accounts`),await K.keyboard(`{Escape}`),await G(E.queryByRole(`tooltip`)).not.toBeInTheDocument(),T.blur(),await G(q(w).getByRole(`img`,{name:/Technology: 640.*Hospitality: 126.*3191 accounts/})).toBeVisible();let O=t.getByRole(`button`,{name:`This month`});await K.click(O),await K.click(q(e.ownerDocument.body).getByRole(`option`,{name:`This quarter`})),await G(a.getByText(`$246,000`)).toBeVisible(),await G(a.getByText(`24%`,{exact:!0})).toBeVisible();let k=q(t.getByRole(`region`,{name:`Today`})),A=k.getByRole(`list`,{name:`Today's tasks`});await G(k.getAllByRole(`checkbox`)).toHaveLength(D.length+I.length),await G(A).toHaveAttribute(`tabindex`,`0`),await G(A.scrollHeight).toBeGreaterThan(A.clientHeight),k.getAllByRole(`checkbox`).at(-1).scrollIntoView({block:`nearest`}),await G(A.scrollTop).toBeGreaterThan(0);for(let e of k.getAllByRole(`checkbox`))await K.click(e);for(let e of k.getAllByRole(`checkbox`))await G(e).toBeChecked();await G(k.queryByRole(`status`)).not.toBeInTheDocument(),await G(t.queryByRole(`button`,{name:`Review follow-up`})).not.toBeInTheDocument(),await G(t.queryByText(/\d+ opportunities/)).not.toBeInTheDocument(),await G(t.getByText(`Meridian Health`,{exact:!0})).toBeVisible(),await G(t.queryByRole(`heading`,{name:`Conversations`})).not.toBeInTheDocument()}},Q={render:()=>(0,W.jsx)(H,{empty:!0}),play:async({canvasElement:e})=>{let t=q(e);await G(t.getByText(`No open deals yet. Your opportunities will appear here.`)).toBeVisible(),await G(t.queryByRole(`heading`,{name:`Conversations`})).not.toBeInTheDocument(),await G(t.getByRole(`progressbar`,{name:`Revenue goal`})).toHaveAttribute(`aria-valuenow`,`0`);let n=q(t.getByRole(`region`,{name:`Revenue trend`}));await G(n.getByText(`Close your first deal to see revenue trends.`)).toBeVisible(),await G(n.queryByRole(`img`)).not.toBeInTheDocument();let r=q(t.getByRole(`region`,{name:`Pipeline by stage`}));await G(r.getByText(`Add opportunities to see your pipeline by stage.`)).toBeVisible(),await G(r.queryByRole(`img`)).not.toBeInTheDocument(),await G(e.querySelector(`.crm-minimal__trend`)).not.toBeInTheDocument(),await G(t.getAllByText(`No appointments scheduled today.`)).toHaveLength(1),await G(t.queryByRole(`group`,{name:`Select appointment`})).not.toBeInTheDocument(),await G(t.getByText(`Set a company target to track achievement.`)).toBeVisible();let i=q(t.getByRole(`region`,{name:`Accounts by Industry`}));await G(i.getByText(`Add accounts to see your industry breakdown.`)).toBeVisible(),await G(i.queryByRole(`img`)).not.toBeInTheDocument()}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <MinimalPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Welcome Patricia Boyle'
    })).toBeVisible();
    const builder = within(canvas.getByRole('region', {
      name: 'Build something for your next move.'
    }));
    await expect(builder.queryByRole('heading', {
      name: 'Suggestions'
    })).not.toBeInTheDocument();
    await expect(builder.queryByRole('list')).not.toBeInTheDocument();
    const prompt = builder.getByRole('textbox', {
      name: 'Describe your idea'
    });
    await expect(builder.getByRole('button', {
      name: 'Attach file (unavailable in local demo)'
    })).toBeDisabled();
    await expect(builder.getByRole('button', {
      name: 'Voice input (unavailable in local demo)'
    })).toBeDisabled();
    await userEvent.click(builder.getByRole('button', {
      name: 'Edit idea'
    }));
    await expect(prompt).toHaveFocus();
    await expect(builder.getByRole('button', {
      name: 'Preview idea'
    })).toBeDisabled();
    await userEvent.type(prompt, 'Create a sales forecast dashboard.');
    await userEvent.click(builder.getByRole('button', {
      name: 'Preview idea'
    }));
    const preview = within(canvasElement.ownerDocument.body).getByRole('alertdialog', {
      name: 'Idea preview · Local demo'
    });
    await expect(preview).toHaveTextContent('No application is generated');
    await userEvent.click(within(preview).getByRole('button', {
      name: 'Back to idea'
    }));
    await expect(prompt).toHaveValue('Create a sales forecast dashboard.');
    await userEvent.clear(prompt);
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
    const miniArea = overview.getByRole('img', {
      name: 'Open pipeline sample trend across 15 snapshots'
    });
    await expect(miniArea).toBeVisible();
    await expect(miniArea.querySelectorAll('path')).toHaveLength(2);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniArea).position).toBe('absolute');
    await expect(overview.getByText('Conversion rate')).toBeVisible();
    const miniColumns = overview.getByRole('img', {
      name: 'Conversion rate sample trend across 30 snapshots'
    });
    await expect(miniColumns).toBeVisible();
    await expect(miniColumns.querySelectorAll('rect')).toHaveLength(30);
    await expect(canvasElement.ownerDocument.defaultView!.getComputedStyle(miniColumns).position).toBe('absolute');
    const conversionBar = miniColumns.querySelector<SVGRectElement>('rect')!;
    await userEvent.hover(conversionBar);
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Snapshot 1: 18% conversion');
    await userEvent.unhover(conversionBar);
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
    await expect(revenueChart.querySelectorAll('path')).toHaveLength(3);
    await expect(revenueChart.querySelector('.crm-minimal__y-axis')).toBeInTheDocument();
    await expect(within(revenueChart).getByText('$0K')).toBeVisible();
    await expect(within(revenueChart).getByText('$125K')).toBeVisible();
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
      const dots = series.querySelectorAll('circle');
      await expect(dots).toHaveLength(6);
      dots.forEach((dot, index) => expect(dot.getAttribute('cx')).toBe(monthLabels[index].getAttribute('x')));
    }
    // KPI mini charts are hover-only and prevent click activation and bubbling.
    const conversionChart = overview.getByRole('img', {
      name: 'Conversion rate sample trend across 30 snapshots'
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
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Forecast · January: $60,000');
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
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('Prospecting: $8,000');
    await userEvent.keyboard('{Escape}');
    pipelineSegment.blur();
    await expect(pipeline.getByText('$115.5K')).toBeVisible();
    await expect(trend.getByText(/Decreased 5.6% · \\$5,000/)).toHaveClass('crm-minimal__trend--down');
    await expect(overview.getByText('Increased 18.2%')).toHaveClass('crm-minimal__trend--up');
    await expect(overview.getByText('Increased 3 deals')).toHaveClass('crm-minimal__trend--up');
    const company = within(canvas.getByRole('region', {
      name: 'Company Target'
    }));
    await expect(company.getByRole('img', {
      name: /3210 records achieved.*Target: 3000/
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
    await expect(within(canvasElement.ownerDocument.body).getByRole('tooltip')).toHaveTextContent('3,210 records · Target: 3000');
    await userEvent.unhover(achievedBar);
    const appointments = within(canvas.getByRole('region', {
      name: "My Today's Appointments"
    }));
    await expect(appointments.getAllByRole('listitem')).toHaveLength(TODAYS_APPOINTMENTS.length);
    await expect(canvas.getAllByRole('region', {
      name: "My Today's Appointments"
    })).toHaveLength(1);
    for (const appointment of TODAYS_APPOINTMENTS) {
      await expect(appointments.getByText(appointment.title)).toBeVisible();
      const photo = appointments.getByRole('img', {
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
    await expect(within(appointmentDialog).getByText('Discovery call')).toBeVisible();
    await expect(within(appointmentDialog).getByText(/Atlas Logistics · Daniel Kim · 09:30–10:00 · Video call/)).toBeVisible();
    await userEvent.click(within(appointmentDialog).getByRole('button', {
      name: 'Close',
      exact: true
    }));
    const industries = canvas.getByRole('region', {
      name: 'Accounts by Industry'
    });
    await expect(industries.querySelectorAll('rect[data-industry]')).toHaveLength(10);
    const industryColumn = industries.querySelector<SVGRectElement>('rect[data-industry="Technology"]')!;
    const documentBody = within(canvasElement.ownerDocument.body);
    await userEvent.hover(industryColumn);
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Technology: 640 accounts');
    await userEvent.unhover(industryColumn);
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.focus();
    await expect(documentBody.getByRole('tooltip')).toHaveTextContent('Technology: 640 accounts');
    await userEvent.keyboard('{Escape}');
    await expect(documentBody.queryByRole('tooltip')).not.toBeInTheDocument();
    industryColumn.blur();
    await expect(within(industries).getByRole('img', {
      name: /Technology: 640.*Hospitality: 126.*3191 accounts/
    })).toBeVisible();
    const period = canvas.getByRole('button', {
      name: 'This month'
    });
    await userEvent.click(period);
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', {
      name: 'This quarter'
    }));
    await expect(overview.getByText('$246,000')).toBeVisible();
    await expect(overview.getByText('24%', {
      exact: true
    })).toBeVisible();
    const today = within(canvas.getByRole('region', {
      name: 'Today'
    }));
    const todayList = today.getByRole('list', {
      name: "Today's tasks"
    });
    await expect(today.getAllByRole('checkbox')).toHaveLength(INITIAL_TASKS.length + TODAY_TASKS.length);
    await expect(todayList).toHaveAttribute('tabindex', '0');
    await expect(todayList.scrollHeight).toBeGreaterThan(todayList.clientHeight);
    const lastTask = today.getAllByRole('checkbox').at(-1)!;
    lastTask.scrollIntoView({
      block: 'nearest'
    });
    await expect(todayList.scrollTop).toBeGreaterThan(0);
    for (const checkbox of today.getAllByRole('checkbox')) await userEvent.click(checkbox);
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
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <MinimalPage empty />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No open deals yet. Your opportunities will appear here.')).toBeVisible();
    await expect(canvas.queryByRole('heading', {
      name: 'Conversations'
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('progressbar', {
      name: 'Revenue goal'
    })).toHaveAttribute('aria-valuenow', '0');
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`EmptyState`]}))();export{Z as Default,Q as EmptyState,$ as __namedExportsOrder,J as default};