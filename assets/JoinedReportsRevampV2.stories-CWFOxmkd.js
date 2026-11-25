import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-C2Qq_MrP.js";import{t as r}from"./react-dom-ZZbH0f0r.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{M as a,Yt as o,u as s}from"./Icons-jAEkxykW.js";import{r as c,t as l}from"./Button-WH05PzwQ.js";import{n as u,t as d}from"./Tooltip-CtqMViFE.js";import{n as f,t as p}from"./Dropdown-_gaWEL05.js";import{n as m,t as h}from"./Icon-DH-ASDJs.js";import{n as g,t as _}from"./Checkbox-DZLglNVi.js";import{n as v,t as y}from"./Input-XSOLS_NX.js";import{n as b,t as x}from"./MessageBox-CaPkf1Bk.js";import{n as S,t as C}from"./Dragger-BDCoR5O-.js";import{n as w,t as ee}from"./FormTable-FvE4F9Cn.js";import{n as te,t as ne}from"./FormulaBuilder-DovhCz9l.js";import{n as T,t as re}from"./Tabs-6pfI7UXf.js";import{n as ie,t as ae}from"./MessageInfo-BQUrdfOl.js";import{n as E,t as oe}from"./Modal-CgZ1aj-9.js";import{n as D,t as se}from"./NextGenLeftMenu-CVyaEhAU.js";import{n as ce,t as le}from"./NextGenTopBand-pzYOkTLx.js";import{t as O}from"./CrossModuleReports-DsKEkk3M.js";import{BuilderBackground as ue,t as de}from"./JoinedReportsRevamp.stories-Be2cWKKn.js";var k=e((()=>{}));function A(e,t){return e.reportId===B?t:U.find(t=>t.value===e.reportId)?.label??``}function fe(e,t,n){return Array.from({length:e},(e,r)=>({id:r+1,reportId:r===0?B:n||t===`group`?U[r-1].value:``}))}function pe({primaryReportName:e,initialStep:t,initialReportCount:n,open:r,mode:i=`create`,onClose:a,onNotify:o,onSaved:c}){let[u,f]=(0,N.useState)(t),[m,h]=(0,N.useState)(!1),[g,_]=(0,N.useState)(()=>new Set),v=i===`edit`,b=e=>Array.from({length:n},(t,n)=>W[(n+e)%W.length].value),[x,S]=(0,N.useState)(()=>fe(n,t,v)),[C,w]=(0,N.useState)(()=>v?[{id:1,name:`Lead Source`,fields:b(0)},{id:2,name:`Lead Owner`,fields:b(3)}]:t===`group`?[{id:1,name:``,fields:[]}]:[]),te=(0,N.useRef)(100),ne=()=>(te.current+=1,te.current),T=(e,t)=>S(n=>n.map(n=>n.id===e?{...n,reportId:t,error:void 0}:n)),re=()=>{if(x.length>=V){o(`info`,ge);return}S(e=>[...e,{id:ne(),reportId:``}])},ie=e=>S(t=>t.filter(t=>t.id!==e)),E=(e,t)=>S(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<=0||i<=0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a}),D=()=>w(e=>[...e,{id:ne(),name:``,fields:[]}]),se=(e,t)=>w(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a});(0,N.useEffect)(()=>{if(!r)return;let e=window.setTimeout(()=>{u===`group`?document.getElementById(`jrv2-group-name-first`)?.focus():document.querySelector(`.jrv2-modal [aria-label="Report 2"]`)?.focus()},0);return()=>window.clearTimeout(e)},[r,u]);let ce=e=>w(t=>t.filter(t=>t.id!==e)),le=(e,t)=>w(n=>n.map(n=>n.id===e?{...n,name:t}:n)),O=(e,t,n)=>w(r=>r.map(r=>{if(r.id!==e)return r;let i=[...r.fields];return i[t]=n,{...r,fields:i}})),ue=()=>{let t=x.map(e=>e.reportId?{...e,error:void 0}:{...e,error:H});if(S(t),t.some(e=>e.error))return;let n=new Set;if((u===`group`?C:[]).forEach(e=>{e.name.trim()||n.add(`${e.id}:name`),x.forEach((t,r)=>{e.fields[r]||n.add(`${e.id}:${r}`)})}),n.size>0){_(n);return}_(new Set),c(`Untitled Joined Report`,x.map(t=>A(t,e)))},de=C.length-1;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(oe,{isOpen:r,title:v?`Edit Joined Report`:`Create Joined Report`,width:u===`group`?_e+ve*(x.length+1):600,className:`jrv2-modal`,disableAutoFocus:!0,closeOnEscape:!1,onClose:a,saveLabel:`Done`,onSave:ue,footerStart:u===`group`?(0,F.jsx)(l,{variant:`default`,onClick:()=>f(`select`),children:`Back`}):void 0,children:(0,F.jsxs)(`div`,{className:`jrv2-body`,children:[u===`select`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`p`,{className:`jrv2-intro`,children:`View multiple reports at once by creating a Joined Report.`}),(0,F.jsx)(ee,{ariaLabel:`Reports`,headers:[`Report`],rows:x,canReorder:x.length===3,onMove:E,actionGap:13,renderCells:(t,n)=>[n===0?(0,F.jsx)(y,{width:`100%`,disabled:!0,"aria-label":`Primary report`,value:e,suffix:(0,F.jsx)(s,{"aria-hidden":`true`})},`primary`):(0,F.jsx)(p,{width:`100%`,placeholder:`Select Report`,triggerAriaLabel:`Report ${n+1}`,options:U,value:t.reportId,error:!!t.error,helperText:t.error,onChange:e=>T(t.id,e)},`report`)],renderActions:(e,t)=>({onRemove:t>0?()=>ie(e.id):void 0,removeLabel:`Remove report ${t+1}`,onAdd:t===x.length-1?re:void 0,addLabel:`Add report`})}),!v&&(0,F.jsx)(ae,{variant:`note`,message:(0,F.jsxs)(F.Fragment,{children:[`Category columns are not supported in the joined report. Those columns cannot be viewed. Reports from `,(0,F.jsx)(`strong`,{children:`any module`}),` can now be joined — a common group is mapped per report after saving.`]})})]}),u===`group`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`jrv2-group-head`,children:[(0,F.jsx)(`p`,{className:`jrv2-section-heading`,children:`Group records by field to combine each report's fields under a common name.`}),(0,F.jsx)(l,{variant:`outline-blue`,onClick:()=>h(!0),children:`Preview`})]}),(0,F.jsx)(ee,{ariaLabel:`Group records by field`,headers:[`Group Name`,...x.map(t=>(0,F.jsx)(d,{content:`Map Field For "${A(t,e)}"`,variant:`black`,placement:`top`,wrapperStyle:{display:`block`,maxWidth:`100%`},children:(0,F.jsx)(`span`,{className:`jrv2-col-text`,children:`Map Field For "${A(t,e)}"`})},t.id))],gapAfter:Array.from({length:x.length+1},()=>20),rows:C,canReorder:C.length>1,onMove:se,renderCells:(e,t)=>[(0,F.jsx)(y,{width:250,placeholder:`Enter name`,id:t===0?`jrv2-group-name-first`:void 0,"aria-label":`Group ${t+1} name`,error:g.has(`${e.id}:name`)&&!e.name.trim(),helperText:g.has(`${e.id}:name`)&&!e.name.trim()?`Enter a group name`:void 0,value:e.name,onChange:t=>le(e.id,t.target.value)},`name`),...x.map((n,r)=>(0,F.jsx)(p,{width:250,placeholder:`Select field`,triggerAriaLabel:`Group ${t+1} field for report ${r+1}`,options:W,error:g.has(`${e.id}:${r}`)&&!e.fields[r],helperText:g.has(`${e.id}:${r}`)&&!e.fields[r]?`Select a field`:void 0,value:e.fields[r]??``,onChange:t=>O(e.id,r,t)},n.id))],renderActions:(e,t)=>({onRemove:C.length>1?()=>ce(e.id):void 0,removeLabel:`Remove group ${t+1}`,onAdd:t===de?D:void 0,addLabel:`Add group`})})]})]})}),(0,F.jsx)(oe,{isOpen:m,title:`Preview`,width:1180,showClose:!0,showFooter:!1,onClose:()=>h(!1),children:(0,F.jsxs)(`table`,{className:`jrv2-preview-table`,"aria-label":`Joined report preview`,children:[(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{children:`Month & Year`}),(0,F.jsx)(`th`,{children:`Parent Module`}),(0,F.jsx)(`th`,{children:`Owner`}),(0,F.jsx)(`th`,{children:`Lookup Field`}),(0,F.jsx)(`th`,{children:`Report 1 (${e})`}),(0,F.jsx)(`th`,{children:`Report 2 (${x[1]?A(x[1],e):`Report 2`})`}),(0,F.jsx)(`th`,{children:`Report 3 (${x[2]?A(x[2],e):`Report 3`})`})]})}),(0,F.jsxs)(`tbody`,{children:[(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Jan 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,F.jsx)(`td`,{children:`Deal 1`}),(0,F.jsx)(`td`,{children:`Acme Corp renewal`}),(0,F.jsx)(`td`,{children:`Globex upsell`}),(0,F.jsx)(`td`,{children:`Initech expansion`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`2`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Feb 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,F.jsx)(`td`,{children:`Deal 2`}),(0,F.jsx)(`td`,{children:`-`}),(0,F.jsx)(`td`,{children:`Umbrella renewal`}),(0,F.jsx)(`td`,{children:`Hooli deal`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`0`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Mar 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Priya`}),(0,F.jsx)(`td`,{children:`Deal 3`}),(0,F.jsx)(`td`,{children:`Nova Labs demo`}),(0,F.jsx)(`td`,{children:`-`}),(0,F.jsx)(`td`,{children:`Vertex pilot`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`0`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Apr 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,F.jsx)(`td`,{children:`Deal 4`}),(0,F.jsx)(`td`,{children:`Orbit Media expansion`}),(0,F.jsx)(`td`,{children:`Pinnacle renewal`}),(0,F.jsx)(`td`,{children:`-`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`0`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`May 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,F.jsx)(`td`,{children:`Deal 5`}),(0,F.jsx)(`td`,{children:`Stark Industries pilot`}),(0,F.jsx)(`td`,{children:`Wayne Corp upsell`}),(0,F.jsx)(`td`,{children:`Acme Corp renewal`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Jun 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Priya`}),(0,F.jsx)(`td`,{children:`Deal 6`}),(0,F.jsx)(`td`,{children:`Contoso renewal`}),(0,F.jsx)(`td`,{children:`Fabrikam demo`}),(0,F.jsx)(`td`,{children:`-`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`0`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Jul 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,F.jsx)(`td`,{children:`Deal 7`}),(0,F.jsx)(`td`,{children:`Litware expansion`}),(0,F.jsx)(`td`,{children:`-`}),(0,F.jsx)(`td`,{children:`Northwind pilot`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`0`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{rowSpan:2,children:`Aug 2026`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,F.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,F.jsx)(`td`,{children:`Deal 8`}),(0,F.jsx)(`td`,{children:`Adventure Works upsell`}),(0,F.jsx)(`td`,{children:`Tailspin renewal`}),(0,F.jsx)(`td`,{children:`Proseware deal`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`1`}),(0,F.jsx)(`td`,{children:`0`})]})]})]})})]})}function me({hasFilters:e,onAdd:t,onDelete:n}){return(0,F.jsxs)(`section`,{className:`cmr__panel-body jrv2-builder-filters`,"aria-label":`Filters`,children:[(0,F.jsxs)(`div`,{className:`cmr__panel-heading`,children:[(0,F.jsx)(`h2`,{children:`Filters`}),e&&(0,F.jsxs)(`div`,{className:`cmr__heading-actions`,children:[(0,F.jsx)(d,{content:`Edit filters`,variant:`black`,placement:`top`,followCursor:!0,children:(0,F.jsx)(`button`,{type:`button`,className:`criteria-summary__action`,"aria-label":`Edit filters`,children:(0,F.jsx)(h,{name:`Edit`,size:13})})}),(0,F.jsx)(d,{content:`Delete filters`,variant:`black`,placement:`top`,followCursor:!0,children:(0,F.jsx)(`button`,{type:`button`,className:`criteria-summary__action criteria-summary__action--delete`,"aria-label":`Delete filters`,onClick:n,children:(0,F.jsx)(h,{name:`Delete`,size:12})})})]})]}),e?(0,F.jsxs)(`section`,{className:`cmr__saved`,"aria-label":`Saved Lead Source filter`,children:[(0,F.jsx)(`h3`,{children:`Lead Source`}),(0,F.jsx)(`p`,{className:`cmr__saved-sentence`,children:`Lead Source is Advertisement or Partner`})]}):(0,F.jsxs)(`div`,{className:`cmr__empty`,children:[(0,F.jsx)(`p`,{children:`No filters applied`}),(0,F.jsx)(l,{variant:`outline-blue`,size:`sm`,className:`cmr__add-filter`,onClick:t,children:`Add Filter`})]})]})}function he({label:e,direction:t,onSort:n}){let[r,i]=(0,N.useState)(null),a=(0,N.useRef)(null),o=(0,N.useRef)(null);return(0,N.useEffect)(()=>{if(!r)return;o.current?.querySelector(`[aria-checked="true"]`)?.focus();let e=e=>{!o.current?.contains(e.target)&&!a.current?.contains(e.target)&&i(null)},t=()=>i(null);return document.addEventListener(`pointerdown`,e),window.addEventListener(`scroll`,t,!0),window.addEventListener(`resize`,t),()=>{document.removeEventListener(`pointerdown`,e),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`resize`,t)}},[r]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`button`,{ref:a,type:`button`,className:`jrv2-preview-sort`,"aria-label":`Sort by ${e}`,"aria-haspopup":`menu`,"aria-expanded":!!r,onClick:()=>{let e=a.current.getBoundingClientRect();i(t=>t?null:{top:Math.max(4,Math.min(e.bottom+4,window.innerHeight-84)),left:Math.max(4,Math.min(e.right-128,window.innerWidth-132))})},children:[(0,F.jsx)(`span`,{children:e}),(0,F.jsxs)(`span`,{className:`jrv2-preview-sort-icons`,"aria-hidden":`true`,children:[(0,F.jsx)(s,{className:`jrv2-preview-sort-up${t===`ascending`?` jrv2-preview-sort-active`:``}`}),(0,F.jsx)(s,{className:t===`descending`?`jrv2-preview-sort-active`:``})]})]}),r&&(0,P.createPortal)((0,F.jsx)(`div`,{ref:o,className:`jrv2-preview-sort-menu`,role:`menu`,"aria-label":`Sort ${e}`,style:r,onKeyDown:e=>{if(e.key===`Escape`||e.key===`Tab`)i(null),e.key===`Escape`&&(e.preventDefault(),a.current?.focus());else if(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Home`||e.key===`End`){e.preventDefault();let t=Array.from(o.current.querySelectorAll(`button`)),n=t.indexOf(document.activeElement);t[e.key===`Home`?0:e.key===`End`?1:(n+1)%2].focus()}},children:[`ascending`,`descending`].map(e=>(0,F.jsxs)(`button`,{type:`button`,role:`menuitemradio`,"aria-checked":(t??`ascending`)===e,onClick:()=>{n(e),i(null),a.current?.focus()},children:[(0,F.jsx)(h,{name:e===`ascending`?`CrmArrowDownLinedzcicnarrowuplined`:`CrmArrowDownLined`,size:18}),e===`ascending`?`Asc`:`Desc`]},e))}),document.body)]})}function j({onEdit:e,onCreate:t,saved:n,reports:r,initialGroupCount:i}){let[o,c]=(0,N.useState)({}),u=r.map((e,t)=>o[t]||e),[f,m]=(0,N.useState)(null),[g,v]=(0,N.useState)(``),b=e=>{let t=g.trim();t&&(c(n=>({...n,[e]:t})),m(null))},[S,w]=(0,N.useState)(`Untitled Joined Report`),[ee,te]=(0,N.useState)(!1),T=[`Created Date - By Month and Year`,`Assigned user`,`Account`,...r.flatMap((e,t)=>G[t])],[ie,ae]=(0,N.useState)({}),E=e=>ie[e]??(e===0?280:180),[D,ce]=(0,N.useState)(null),O=(0,N.useRef)(null),ue=(e,t)=>{ae(n=>({...n,[e]:Math.max(100,Math.min(600,t))}))},de=xe.map(e=>{let t=e.rows.map((e,t)=>({values:e,index:t,owner:t<2?`Selvam`:`Priya`,account:t%2==0?`Fabrikam Inc`:`Northwind Traders`}));if(D&&D.column>0){let{column:e,direction:n}=D;t.sort((t,r)=>{let i=e===1?t.owner.localeCompare(r.owner):e===2?t.account.localeCompare(r.account):t.values[e-3]-r.values[e-3];return(n===`ascending`?i:-i)||t.index-r.index})}return{...e,sortedRows:t}});D?.column===0&&D.direction===`descending`&&de.reverse();let[k,A]=(0,N.useState)(()=>[{id:1,field:`Created Date`,interval:`Month and Year`,order:`Asc`},{id:2,field:`Assigned user`,interval:``,order:`Asc`},{id:3,field:`Account`,interval:``,order:`Asc`}].slice(0,i).map(e=>({...e,mappedFields:r.map(()=>e.field),mappingOrder:r.map((e,t)=>t)}))),[fe,pe]=(0,N.useState)(null),[j,M]=(0,N.useState)(null),[P,I]=(0,N.useState)([]),[L,R]=(0,N.useState)(()=>u.map((e,t)=>t)),z=(e,t)=>{R(n=>{let r=n.filter(t=>t!==e);return r.splice(n.indexOf(t),0,e),r})},[B,V]=(0,N.useState)(!1),H=!!(j&&!k.some(e=>e.id===j.id)),ge=[{value:`Account`,label:`Account`,group:`By lookup`},{value:`Created Date`,label:`Created Date`,group:`By date-time`},{value:`Modified Date`,label:`Modified Date`,group:`By date-time`},{value:`Assigned user`,label:`Assigned user`,group:`By user`}],U=[...new Set([...ge.map(e=>e.value),...W.map(e=>e.value)])].map(e=>({value:e,label:e})),_e={Account:`Lookup · Accounts`,"Account Name":`Lookup · Accounts`,"Campaign Source":`Lookup · Campaigns`,"Created Date":`Date`,"Modified Date":`Date`,"Close Date":`Date`,"Created Time":`Date`,"Modified Time":`Date`,"Assigned user":`User`,"Assigned To":`User`,Owner:`User`,Amount:`Currency`,"Annual Revenue":`Currency`,Probability:`Number`,Currency:`Picklist`,"Deal Stage":`Picklist`,Industry:`Picklist`,"Lead Source":`Picklist`,Rating:`Picklist`,"Sales Channel":`Picklist`,Email:`Email`,Phone:`Phone`,Website:`URL`},ve=[...new Set(u.flatMap((e,t)=>{let n=P[t];return n?[_e[n]||`Text`]:[]}))].length>1,Se=u.length>0&&u.every((e,t)=>_e[P[t]]===`Date`),K=[{value:`Date`,label:`By Date`},{value:`Week`,label:`By Week`},{value:`Month and Year`,label:`By Month and Year`},{value:`Quarter and Year`,label:`By Quarter and Year`},{value:`Year`,label:`By Year`}],q=()=>{if(!j)return;if(ve||!j.field.trim()||u.some((e,t)=>!P[t])){V(!0);return}let e={...j,interval:Se?j.interval||`Month and Year`:``,mappedFields:[...P],mappingOrder:[...L]};A(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[...t,e]),H&&pe(e.id),M(null)},[J,Ce]=(0,N.useState)({}),we=e=>J[e]??{tab:`columns`,columns:[`Account Name`,`Assistant`,`Asst Phone`,`Average Time Spent (Minutes)`,`Contact Name`,`Contact Owner`],aggregates:[`Revenue per Lead`,`Projected Revenue`,`Avg of Annual Revenue`,`Min of Annual Revenue`,`Sum of Auto_Currency_aklnmyoh`],hasFilters:!1,showRowCount:!0},Y=(e,t)=>{Ce(n=>({...n,[e]:{...we(e),...t}}))},[Te,Ee]=(0,N.useState)(`columns`),[De,Oe]=(0,N.useState)(n),[ke,Ae]=(0,N.useState)([`Lead Name`,`Email`,`Company`,`Created Time`,`Lead Owner`,`First Name`,`Last Name`]),[je,Me]=(0,N.useState)([`Avg of Annual Revenue`,`Sum of Annual Revenue`,`Count of Unique Leads`]),[X,Z]=(0,N.useState)(null),[Ne,Pe]=(0,N.useState)(``),[Fe,Ie]=(0,N.useState)(!1),[Q,Le]=(0,N.useState)([{label:`percent summary formula`,formula:`Annual Revenue / 100`},{label:`ukh,hh`,formula:`Annual Revenue`},{label:`Revenue per Lead`,formula:`Annual Revenue / Count of Unique Leads`},{label:`Projected Revenue`,formula:`Annual Revenue * Probability / 100`},{label:`Revenue in Thousands`,formula:`Annual Revenue / 1000`},{label:`Probability Percentage`,formula:`Probability / 100`}]),[$,Re]=(0,N.useState)(null),ze=e=>{let t=we(e);Z({report:e,selected:[...t.aggregates],showRowCount:t.showRowCount}),Pe(``)},Be=[...new Set([`Count of Unique Leads`,...[`Annual Revenue`,`Auto_Currency_aklnmyoh`,`Auto_Currency_cajrfwgg`].flatMap(e=>[`Avg`,`Sum`,`Min`,`Max`].map(t=>`${t} of ${e}`)),...X?we(X.report).aggregates:[]])].filter(e=>!Q.some(t=>t.label===e)),Ve=e=>e.toLowerCase().includes(Ne.trim().toLowerCase()),He=e=>Z(t=>t&&{...t,selected:t.selected.includes(e)?t.selected.filter(t=>t!==e):[...t.selected,e]});return(0,F.jsxs)(`div`,{className:`jrv2-builder`,children:[(0,F.jsx)(se,{activeId:`reports`,defaultCollapsed:!0}),(0,F.jsxs)(`div`,{className:`jrv2-builder-main`,children:[(0,F.jsx)(le,{moduleLabel:`Reports`,searchPlaceholder:`Search records`,showTerritory:!1}),(0,F.jsxs)(`div`,{className:`jrv2-builder-subbar`,children:[(0,F.jsxs)(`div`,{className:`jrv2-builder-subtitle`,children:[(0,F.jsx)(h,{name:`CrmArrowBack`,size:18}),(0,F.jsxs)(`div`,{className:`jrv2-builder-title-stack`,children:[n?(0,F.jsx)(`div`,{className:`jrv2-builder-title-input`,children:(0,F.jsx)(y,{variant:`header`,"aria-label":`Report title`,value:S,onChange:e=>w(e.target.value),onBlur:()=>w(e=>e.trim()||`Untitled Joined Report`),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})}):(0,F.jsx)(`span`,{className:`jrv2-builder-name`,children:`Leads By Source`}),!n&&(0,F.jsx)(`span`,{className:`jrv2-builder-module`,children:`Leads`})]})]}),(0,F.jsxs)(`div`,{className:`jrv2-builder-actions`,children:[!n&&(0,F.jsxs)(`p`,{className:`jrv2-builder-cta`,children:[`Do you want to join another report?`,` `,(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit`,onClick:t,children:`Create Joined Report`})]}),n&&(0,F.jsx)(l,{variant:`link-primary`,onClick:e,children:`Edit Joined Report`}),(0,F.jsx)(l,{variant:`default`,children:`Cancel`}),(0,F.jsx)(l,{variant:`default`,children:`Run`}),(0,F.jsx)(l,{variant:`primary`,children:`Save`})]})]}),(0,F.jsxs)(`div`,{className:`jrv2-builder-body`,children:[(0,F.jsx)(`section`,{className:`jrv2-builder-panel${n?` jrv2-builder-panel--joined`:``}${j||X?` jrv2-builder-panel--group-editor`:``}${X?` jrv2-builder-panel--aggregate-editor`:``}`,"aria-label":`Joined report structure`,children:n&&X?(0,F.jsxs)(`section`,{className:`jrv2-row-group-editor jrv2-aggregate-editor`,"aria-label":`Aggregate columns`,children:[(0,F.jsxs)(`header`,{className:`jrv2-aggregate-heading`,children:[(0,F.jsx)(`h2`,{className:`jrv2-builder-panel-title`,children:`Aggregate Columns`}),(0,F.jsx)(d,{content:`Create Aggregate Formula`,variant:`white`,placement:`top`,followCursor:!0,children:(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn jrv2-joined-add`,"aria-label":`Create Aggregate Formula`,onClick:()=>{Re(null),Ie(!0)},children:`+`})})]}),(0,F.jsxs)(`div`,{className:`jrv2-aggregate-content`,children:[(0,F.jsx)(y,{width:`100%`,type:`search`,"aria-label":`Search aggregate columns`,placeholder:`Search`,value:Ne,onChange:e=>Pe(e.target.value)}),(0,F.jsx)(_,{label:`Show Row Count`,checked:X.showRowCount,onChange:e=>Z({...X,showRowCount:e.target.checked})}),(0,F.jsxs)(`div`,{className:`jrv2-aggregate-section-heading`,children:[(0,F.jsx)(`h3`,{className:`jrv2-joined-label`,children:`Report Columns`}),Q.some(e=>X.selected.includes(e.label))&&(0,F.jsx)(`button`,{type:`button`,className:`jrv2-aggregate-clear`,"aria-label":`Clear all report columns`,onClick:()=>Z({...X,selected:X.selected.filter(e=>!Q.some(t=>t.label===e))}),children:`Clear all`})]}),Q.filter(e=>Ve(e.label)).map((e,t)=>(0,F.jsxs)(`div`,{className:`jrv2-aggregate-option${t===0?` jrv2-aggregate-option--initial`:``}`,children:[(0,F.jsx)(_,{label:e.label,checked:X.selected.includes(e.label),onChange:()=>He(e.label)}),(0,F.jsx)(p,{width:`auto`,triggerAriaLabel:`Options for ${e.label}`,triggerButtonVariant:`link-default`,triggerIcon:(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`3.80 25.60 17.00 7.00`,width:17,height:7,"aria-hidden":`true`,focusable:`false`,children:[(0,F.jsx)(`path`,{d:`M 8.8,29.1 A 1.5,1.5 0 0,1 7.3,30.6 A 1.5,1.5 0 0,1 5.8,29.1 A 1.5,1.5 0 0,1 7.3,27.6 A 1.5,1.5 0 0,1 8.8,29.1 Z`,fill:`var(--ds-text-label)`,stroke:`none`}),(0,F.jsx)(`path`,{d:`M 13.8,29.1 A 1.5,1.5 0 0,1 12.3,30.6 A 1.5,1.5 0 0,1 10.8,29.1 A 1.5,1.5 0 0,1 12.3,27.6 A 1.5,1.5 0 0,1 13.8,29.1 Z`,fill:`var(--ds-text-label)`,stroke:`none`}),(0,F.jsx)(`path`,{d:`M 18.8,29.1 A 1.5,1.5 0 0,1 17.3,30.6 A 1.5,1.5 0 0,1 15.8,29.1 A 1.5,1.5 0 0,1 17.3,27.6 A 1.5,1.5 0 0,1 18.8,29.1 Z`,fill:`var(--ds-text-label)`,stroke:`none`})]}),showSelectionIndicator:!1,options:[{value:`edit`,label:`Edit`},{value:`delete`,label:`Delete`}],onChange:t=>{t===`edit`?(Re(e.label),Ie(!0)):t===`delete`&&(Le(t=>t.filter(t=>t.label!==e.label)),Z({...X,selected:X.selected.filter(t=>t!==e.label)}),Ce(t=>Object.fromEntries(Object.entries(t).map(([t,n])=>[t,{...n,aggregates:n.aggregates.filter(t=>t!==e.label)}]))))}})]},e.label)),(0,F.jsxs)(`div`,{className:`jrv2-aggregate-section-heading`,children:[(0,F.jsx)(`h3`,{className:`jrv2-joined-label`,children:Number(X.report)===0?`Leads`:u[Number(X.report)]}),Be.some(e=>X.selected.includes(e))&&(0,F.jsx)(`button`,{type:`button`,className:`jrv2-aggregate-clear`,"aria-label":`Clear all module columns`,onClick:()=>Z({...X,selected:X.selected.filter(e=>!Be.includes(e))}),children:`Clear all`})]}),Be.filter(Ve).map(e=>(0,F.jsx)(_,{label:e,checked:X.selected.includes(e),onChange:()=>He(e)},e)),!Be.some(Ve)&&!Q.some(e=>Ve(e.label))&&(0,F.jsx)(`p`,{className:`jrv2-joined-muted`,role:`status`,children:`No matching columns`})]}),(0,F.jsxs)(`footer`,{className:`jrv2-row-group-footer`,children:[(0,F.jsx)(l,{variant:`primary`,onClick:()=>{Y(X.report,{aggregates:X.selected,showRowCount:X.showRowCount}),Z(null)},children:`Done`}),(0,F.jsx)(l,{variant:`default`,onClick:()=>Z(null),children:`Cancel`})]})]}):n&&j?(0,F.jsxs)(`section`,{className:`jrv2-row-group-editor`,"aria-label":H?`Add row group`:`Edit row group`,children:[(0,F.jsxs)(`div`,{className:`jrv2-row-group-heading`,children:[(0,F.jsx)(`h2`,{className:`jrv2-builder-panel-title`,children:H?`Add Row Group`:`Edit Row Group`}),(0,F.jsx)(p,{width:`auto`,triggerAriaLabel:`Recommended Fields`,triggerButtonVariant:`link-primary`,triggerIcon:(0,F.jsxs)(`span`,{className:`jrv2-recommended-trigger`,children:[`Recommended Fields `,(0,F.jsx)(s,{"aria-hidden":`true`})]}),options:ge,value:``,showSelectionIndicator:!1,panelStyle:{"--dropdown-group-heading-margin":`4px 16px 0`,"--dropdown-panel-padding-top":`2px`,"--dropdown-option-padding-left":`10px`},onChange:e=>{I(u.map(()=>e)),M({...j,field:e,interval:e.includes(`Date`)?`Month and Year`:``}),V(!1)}})]}),(0,F.jsxs)(`div`,{className:`jrv2-joined-group-form`,children:[(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(`div`,{className:`jrv2-row-group-mapping`,children:(0,F.jsxs)(`div`,{className:`jrv2-mapping-table`,role:`table`,"aria-label":`Report field mapping`,children:[(0,F.jsxs)(`div`,{className:`jrv2-mapping-row jrv2-mapping-header`,role:`row`,children:[(0,F.jsx)(`div`,{role:`columnheader`,children:`Report`}),(0,F.jsx)(`div`,{role:`columnheader`,children:`Group by field`})]}),(0,F.jsx)(C,{dragHandleOnly:!0,items:L.map(String),onChange:e=>R(e.map(Number)),gripperOnHover:!0,renderItem:e=>{let t=Number(e),n=L.indexOf(t);return(0,F.jsxs)(`div`,{className:`jrv2-mapping-row`,role:`row`,children:[(0,F.jsxs)(`div`,{role:`cell`,children:[u.length>1&&(0,F.jsx)(`button`,{type:`button`,className:`jrv2-mapping-grip`,"data-drag-handle":!0,"aria-label":`Reorder ${u[t]}`,"aria-description":`Drag to reorder, or use the Up and Down arrow keys.`,onKeyDown:e=>{let r=e.key===`ArrowUp`?n-1:e.key===`ArrowDown`?n+1:-1;(e.key===`ArrowUp`||e.key===`ArrowDown`)&&e.preventDefault(),r>=0&&r<L.length&&z(t,L[r])},children:(0,F.jsx)(h,{name:`CrmMaskDrag`,size:12})}),(0,F.jsx)(`span`,{className:`jrv2-mapping-report-name`,title:u[t],children:u[t]})]}),(0,F.jsx)(`div`,{role:`cell`,children:(0,F.jsx)(p,{width:`100%`,placeholder:`Select field`,triggerAriaLabel:`Group by field for ${u[t]}`,options:U,value:P[t]||``,error:B&&!P[t]?`Select a field`:void 0,onChange:e=>I(n=>u.map((r,i)=>i===t?e:n[i]||``))})})]})}})]})})}),ve&&(0,F.jsx)(x,{variant:`warning`,className:`jrv2-mixed-types-warning`,closable:!1,message:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`strong`,{children:`Warning:`}),` Selected fields have different data types. Choose fields of the same type to create this group.`]})}),Se&&(0,F.jsx)(`div`,{className:`jrv2-row-group-detail`,children:(0,F.jsx)(p,{style:{"--jrv2-date-granularity":1},label:`Date granularity`,width:`100%`,triggerAriaLabel:`Date granularity`,options:K,value:j.interval||`Month and Year`,onChange:e=>M({...j,interval:e})})}),(0,F.jsx)(`div`,{className:`jrv2-row-group-detail`,children:(0,F.jsx)(y,{label:(0,F.jsxs)(`span`,{className:`jrv2-group-name-label`,children:[`Enter Group Name `,(0,F.jsx)(d,{content:`This name appears as the row heading.`,variant:`white`,placement:`top`,followCursor:!0,children:(0,F.jsx)(`button`,{type:`button`,className:`jrv2-group-name-info`,"aria-label":`Group name information`,children:(0,F.jsx)(a,{"aria-hidden":`true`})})})]}),layout:`vertical`,width:`100%`,placeholder:`Common group ${k.length+1}`,value:j.field,error:B&&!j.field.trim()?`Enter a group name`:void 0,onChange:e=>M({...j,field:e.target.value})})})]}),(0,F.jsxs)(`div`,{className:`jrv2-row-group-footer`,children:[(0,F.jsx)(l,{variant:`primary`,disabled:ve,onClick:q,children:`Done`}),(0,F.jsx)(l,{variant:`default`,onClick:()=>M(null),children:`Cancel`}),(0,F.jsx)(l,{className:`jrv2-delete-group`,variant:`ghost-red`,onClick:()=>{A(e=>e.filter(e=>e.id!==j.id)),M(null)},children:`Delete Group`})]})]}):n?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`header`,{className:`jrv2-joined-summary`,children:(0,F.jsx)(`h2`,{children:`Joined Report`})}),(0,F.jsxs)(`section`,{className:`jrv2-joined-groups`,"aria-label":`Row groups`,children:[(0,F.jsxs)(`div`,{className:`jrv2-group-heading`,children:[(0,F.jsx)(`h3`,{className:`jrv2-joined-label`,children:`Row Groups`}),(0,F.jsx)(d,{content:`Add Row Group`,variant:`white`,placement:`top`,followCursor:!0,children:(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn jrv2-joined-add`,"aria-label":`Add New Group`,onClick:()=>{I(u.map(()=>``)),R(u.map((e,t)=>t)),V(!1),M({id:Date.now(),field:``,interval:``,order:`Asc`,mappedFields:[],mappingOrder:[]})},children:`+`})})]}),(0,F.jsx)(`div`,{className:`jrv2-group-list`,children:(0,F.jsx)(C,{dragHandleOnly:!0,items:k.map(e=>String(e.id)),onChange:e=>A(t=>e.map(e=>t.find(t=>String(t.id)===e))),gripperOnHover:!0,renderItem:e=>{let t=k.find(t=>String(t.id)===e);return(0,F.jsxs)(`div`,{className:`jrv2-joined-group${t.id===fe?` jrv2-joined-group--highlighted`:``}`,children:[k.length>1&&(0,F.jsx)(`button`,{type:`button`,className:`jrv2-group-grip`,"data-drag-handle":!0,"aria-label":`Reorder ${t.field} group`,onKeyDown:e=>{e.key!==`ArrowUp`&&e.key!==`ArrowDown`||(e.preventDefault(),A(n=>{let r=n.findIndex(e=>e.id===t.id),i=r+(e.key===`ArrowUp`?-1:1);if(i<0||i>=n.length)return n;let a=[...n];return[a[r],a[i]]=[a[i],a[r]],a}))},children:(0,F.jsx)(h,{name:`CrmMaskDrag`,size:12})}),(0,F.jsxs)(`div`,{className:`jrv2-joined-group-name`,children:[(0,F.jsx)(`span`,{children:t.field}),t.interval&&(0,F.jsxs)(`span`,{className:`jrv2-joined-muted`,children:[`By `,t.interval]})]}),(0,F.jsx)(`button`,{type:`button`,className:`jrv2-joined-sort`,"aria-label":`${t.field} sort order: ${t.order}. Switch to ${t.order===`Asc`?`Desc`:`Asc`}`,onClick:()=>A(e=>e.map(e=>e.id===t.id?{...e,order:e.order===`Asc`?`Desc`:`Asc`}:e)),children:t.order}),(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit ${t.field} group`,onClick:()=>{I([...t.mappedFields]),R([...t.mappingOrder]),V(!1),M({...t})},children:(0,F.jsx)(h,{name:`CrmEditFilledMd`,size:13})})]},t.id)}})})]}),u.map((e,t)=>{let n=String(t),r=we(n);return(0,F.jsxs)(`details`,{className:`jrv2-joined-report`,open:t===0,children:[(0,F.jsxs)(`summary`,{className:`jrv2-report-toggle`,"aria-label":`Report ${t+1}: ${e}`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`jrv2-report-label-row`,children:(0,F.jsxs)(`h3`,{className:`jrv2-joined-label`,children:[`Report `,t+1]})}),(0,F.jsxs)(`div`,{className:`jrv2-report-name-row`,children:[(0,F.jsx)(`p`,{children:e}),(0,F.jsx)(d,{content:`rename`,variant:`black`,placement:`top`,wrapperStyle:{display:`inline-flex`,flexShrink:0},children:(0,F.jsx)(`button`,{type:`button`,className:`jrv2-report-rename`,"aria-label":`Rename Report ${t+1}`,onClick:n=>{n.preventDefault(),n.stopPropagation(),v(e),m(t)},children:(0,F.jsx)(h,{name:`CrmEditFilledMd`,size:13})})})]})]}),(0,F.jsx)(s,{size:12,className:`jrv2-report-chevron`})]}),(0,F.jsxs)(`div`,{className:`jrv2-report-content`,role:`region`,"aria-label":`${e} settings`,children:[(0,F.jsx)(`div`,{className:`jrv2-builder-tabs`,children:(0,F.jsx)(re,{tabs:[{id:`columns`,label:`Columns`},{id:`filters`,label:`Filters`}],activeTab:r.tab,onChange:e=>Y(n,{tab:e}),variant:`secondary`,size:`md`})}),r.tab===`filters`?(0,F.jsx)(me,{hasFilters:r.hasFilters,onAdd:()=>Y(n,{hasFilters:!0}),onDelete:()=>Y(n,{hasFilters:!1})}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:`jrv2-builder-row`,children:(0,F.jsx)(`h4`,{className:`jrv2-joined-label`,children:`Columns`})}),(0,F.jsx)(C,{dragHandleOnly:!0,items:r.columns,onChange:e=>Y(n,{columns:e})}),(0,F.jsxs)(`div`,{className:`jrv2-builder-row jrv2-builder-row--section`,children:[(0,F.jsx)(`h4`,{className:`jrv2-joined-label`,children:`Aggregate columns`}),(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit aggregate columns for Report ${t+1}`,onClick:()=>ze(n),children:(0,F.jsx)(h,{name:`CrmEditFilledMd`,size:13})})]}),(0,F.jsx)(C,{dragHandleOnly:!0,items:r.aggregates,onChange:e=>Y(n,{aggregates:e}),renderItem:e=>(0,F.jsx)(`span`,{className:`jrv2-aggregate-label`,title:e,children:e})})]})]})]},t)})]}):(0,F.jsxs)(`div`,{className:`jrv2-builder-block`,children:[(0,F.jsx)(`div`,{className:`jrv2-builder-tabs`,children:(0,F.jsx)(re,{tabs:[{id:`columns`,label:`Columns`},{id:`filters`,label:`Filters`}],activeTab:Te,onChange:Ee,variant:`secondary`,size:`md`})}),Te===`filters`?(0,F.jsx)(me,{hasFilters:De,onAdd:()=>Oe(!0),onDelete:()=>Oe(!1)}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`jrv2-builder-row`,children:[(0,F.jsx)(`span`,{className:`jrv2-builder-block-title`,children:`Columns`}),(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit columns`,children:(0,F.jsx)(h,{name:`CrmEditFilledMd`,size:13,className:`jrv2-builder-edit-icon`})})]}),(0,F.jsx)(C,{dragHandleOnly:!0,items:ke,onChange:Ae}),(0,F.jsxs)(`div`,{className:`jrv2-builder-row jrv2-builder-row--section`,children:[(0,F.jsx)(`span`,{className:`jrv2-builder-block-title`,children:`Aggregate Columns`}),(0,F.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit aggregate columns`,children:(0,F.jsx)(h,{name:`CrmEditFilledMd`,size:13,className:`jrv2-builder-edit-icon`})})]}),(0,F.jsx)(C,{dragHandleOnly:!0,items:je,onChange:Me})]})]})}),(0,F.jsxs)(`section`,{className:`jrv2-builder-preview`,"aria-label":`Report preview`,children:[(0,F.jsxs)(`p`,{className:`jrv2-builder-notice`,children:[(0,F.jsx)(a,{"aria-hidden":`true`}),`Preview shown with limited number of rows. Run the report to see actual aggregate values.`,(0,F.jsx)(`span`,{className:`jrv2-builder-link`,children:`Show Details`})]}),n?(0,F.jsx)(`div`,{className:`jrv2-joined-preview-scroll${ee?` jrv2-joined-preview-scroll--scrolled`:``}`,onScroll:e=>te(e.currentTarget.scrollLeft>0),children:(0,F.jsxs)(`table`,{className:`jrv2-builder-table jrv2-joined-preview-table`,"aria-label":`Joined report preview`,style:{width:T.reduce((e,t,n)=>e+E(n),0)},children:[(0,F.jsx)(`colgroup`,{children:T.map((e,t)=>(0,F.jsx)(`col`,{style:{width:E(t)}},`${t}-${e}`))}),(0,F.jsxs)(`thead`,{children:[(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{"aria-label":`Grouping field`}),(0,F.jsx)(`th`,{colSpan:2,"aria-label":`Additional grouping fields`}),u.map((e,t)=>(0,F.jsxs)(`th`,{colSpan:G[t].length,scope:`colgroup`,className:`jrv2-builder-group-head`,children:[`Report `,t+1,` — `,e]},`${t}-${e}`))]}),(0,F.jsx)(`tr`,{children:T.map((e,t)=>(0,F.jsxs)(`th`,{scope:`col`,"aria-sort":D?.column===t?D.direction:`none`,children:[(0,F.jsx)(he,{label:e,direction:D?.column===t?D.direction:void 0,onSort:e=>ce({column:t,direction:e})}),(0,F.jsx)(`span`,{className:`jrv2-preview-resize`,role:`separator`,"aria-orientation":`vertical`,"aria-label":`Resize ${e} column`,tabIndex:0,"aria-valuemin":100,"aria-valuemax":600,"aria-valuenow":E(t),onPointerDown:e=>{e.button===0&&(e.preventDefault(),e.stopPropagation(),O.current={column:t,startX:e.clientX,width:E(t)},e.currentTarget.setPointerCapture(e.pointerId))},onPointerMove:e=>{let n=O.current;!n||n.column!==t||ue(t,n.width+e.clientX-n.startX)},onPointerUp:e=>{O.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},onLostPointerCapture:()=>{O.current=null},onPointerCancel:()=>{O.current=null},onKeyDown:e=>{e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||(e.preventDefault(),ue(t,E(t)+(e.key===`ArrowRight`?10:-10)))}})]},`${t}-${e}`))})]}),(0,F.jsx)(`tbody`,{children:de.flatMap(e=>[...e.sortedRows.map(({values:t,index:n,owner:r,account:i},a)=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{children:a===0?e.label:``}),(0,F.jsx)(`td`,{children:a===0||e.sortedRows[a-1].owner!==r?r:``}),(0,F.jsx)(`td`,{children:i}),t.slice(0,u.reduce((e,t,n)=>e+G[n].length,0)).map((e,t)=>(0,F.jsx)(`td`,{className:`jrv2-preview-number`,children:e},t))]},`${e.label}-${n}`)),(0,F.jsxs)(`tr`,{className:`jrv2-preview-total`,children:[(0,F.jsxs)(`th`,{scope:`row`,children:[e.label,` Total`]}),(0,F.jsx)(`td`,{}),(0,F.jsx)(`td`,{}),e.rows[0].slice(0,u.reduce((e,t,n)=>e+G[n].length,0)).map((t,n)=>(0,F.jsx)(`td`,{className:`jrv2-preview-number`,children:e.rows.reduce((e,t)=>e+t[n],0)},n))]},`${e.label}-total`)])}),(0,F.jsx)(`tfoot`,{children:(0,F.jsxs)(`tr`,{className:`jrv2-preview-grand-total`,children:[(0,F.jsx)(`th`,{scope:`row`,children:`Grand Total`}),(0,F.jsx)(`td`,{colSpan:2}),u.flatMap((e,t)=>G[t].map((e,n)=>{let r=G.slice(0,t).reduce((e,t)=>e+t.length,0)+n;return(0,F.jsx)(`td`,{className:`jrv2-preview-number`,children:xe.reduce((e,t)=>e+t.rows.reduce((e,t)=>e+t[r],0),0)},`${t}-${e}`)}))]})})]})}):(0,F.jsxs)(`table`,{className:`jrv2-builder-table`,"aria-label":`Report 1 Leads By Source`,children:[(0,F.jsxs)(`thead`,{children:[(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{}),(0,F.jsx)(`th`,{colSpan:be.length,className:`jrv2-builder-group-head`,children:`Report 1 - Leads by Source`})]}),(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{className:`jrv2-builder-source-head`,children:`Lead Source`}),be.map(e=>(0,F.jsx)(`th`,{children:e},e))]})]}),(0,F.jsx)(`tbody`,{children:ye.map((e,t)=>(0,F.jsxs)(`tr`,{children:[t===0&&(0,F.jsx)(`td`,{className:`jrv2-builder-source`,rowSpan:ye.length,children:`Advertisement`}),(0,F.jsx)(`td`,{className:`jrv2-builder-link`,children:e}),(0,F.jsx)(`td`,{children:`-`}),(0,F.jsx)(`td`,{children:`-`}),(0,F.jsx)(`td`,{children:`21 Oct, 2015 03:06 PM`}),(0,F.jsx)(`td`,{children:`Maheshva`})]},e))}),(0,F.jsx)(`tfoot`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`td`,{className:`jrv2-builder-source`,children:`Grand Total`}),(0,F.jsx)(`td`,{colSpan:be.length})]})})]})]})]})]}),(0,F.jsx)(oe,{className:`jrv2-rename-modal`,isOpen:f!==null,title:`Rename Report ${(f??0)+1}`,width:600,saveLabel:`Done`,onClose:()=>m(null),onSave:()=>{f!==null&&b(f)},children:(0,F.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),f!==null&&b(f)},onKeyDown:e=>{e.key===`Escape`&&m(null)},children:(0,F.jsx)(y,{label:`Report Name`,"aria-label":`Report Name`,width:`100%`,required:!0,value:g,onChange:e=>v(e.target.value)})})}),(0,F.jsx)(oe,{isOpen:Fe,title:$?`Edit Summary Formula`:`New Summary Formula`,width:1e3,onClose:()=>Ie(!1),showFooter:!1,children:Fe&&(0,F.jsx)(ne,{title:$?`Edit Summary Formula`:`New Summary Formula`,defaultFormula:Q.find(e=>e.label===$)?.formula||``,fields:[{name:`Leads`,items:[{id:`annual-revenue`,label:`Annual Revenue`},{id:`employees`,label:`No of Employees`}]}],onCancel:()=>Ie(!1),onDone:({formula:e})=>{let t=$||`Summary formula ${Q.length+1}`;Le(n=>$?n.map(n=>n.label===$?{label:t,formula:e}:n):[...n,{label:t,formula:e}]),Z(e=>e&&{...e,selected:[...new Set([...e.selected,t])]}),Ie(!1)}})})]})}function M({primaryReportName:e,initialStep:t,initialReportCount:n,initialGroupCount:r=1,startOpen:i=!0,saved:a=!0}){let[o,s]=(0,N.useState)(i),[c,l]=(0,N.useState)(`create`),[u,d]=(0,N.useState)(a),[f,p]=(0,N.useState)(()=>fe(n,t,!0).map(t=>A(t,e))),[m,h]=(0,N.useState)(0),[g,_]=(0,N.useState)(null);return(0,N.useEffect)(()=>{if(!g)return;let e=window.setTimeout(()=>_(null),5e3);return()=>window.clearTimeout(e)},[g]),(0,F.jsxs)(F.Fragment,{children:[u?(0,F.jsx)(j,{saved:!0,reports:f,initialGroupCount:r,onEdit:()=>{l(`edit`),h(e=>e+1),s(!0)},onCreate:()=>{l(`create`),h(e=>e+1),s(!0)}}):(0,F.jsx)(ue,{saved:!1,onEdit:()=>{l(`edit`),h(e=>e+1),s(!0)},onCreate:()=>{l(`create`),h(e=>e+1),s(!0)}}),g&&(0,P.createPortal)((0,F.jsx)(`div`,{className:`jrv2-note-banner`,children:(0,F.jsx)(x,{variant:g.variant,message:g.message,onClose:()=>_(null)})},g.id),document.body),(0,F.jsx)(pe,{open:o,mode:c,primaryReportName:e,initialStep:t,initialReportCount:n,onClose:()=>s(!1),onNotify:(e,t)=>_({id:Date.now(),variant:e,message:t}),onSaved:(e,t)=>{p(t),d(!0),s(!1)}},m)]})}var N,P,F,I,L,R,z,B,V,H,ge,U,W,_e,ve,ye,be,G,xe,Se,K,q,J,Ce;e((()=>{N=t(n(),1),P=t(r(),1),c(),g(),te(),f(),ce(),D(),w(),m(),v(),b(),ie(),E(),u(),T(),S(),o(),de(),k(),O(),F=i(),{expect:I,userEvent:L,waitFor:R,within:z}=__STORYBOOK_MODULE_TEST__,B=`primary`,V=3,H=`A Report has to be selected`,ge=`You cannot add more than ${V} reports`,U=[`Sales Pipeline by Region`,`Won Deals This Quarter`,`Lead Source Performance`,`Activity Summary by Owner`,`Campaign ROI Overview`,`Quote Conversion Rate`,`Renewals Due Next 90 Days`,`Support Case Backlog`,`Revenue by Product Line`,`Account Health Scores`,`Forecast vs Actuals`,`Territory Coverage Map`].map(e=>({value:e,label:e})),W=[`Account Name`,`Amount`,`Annual Revenue`,`Assigned To`,`Campaign Source`,`City`,`Close Date`,`Company`,`Country`,`Created Time`,`Currency`,`Deal Stage`,`Description`,`Email`,`Industry`,`Lead Source`,`Modified Time`,`Owner`,`Phone`,`Probability`,`Rating`,`Region`,`Sales Channel`,`State`,`Website`].map(e=>({value:e,label:e})),_e=151,ve=270,ye=[`Karpaska`,`Kipsta`,`Kiosha`,`Kingdom of Calm`,`Killer`,`Kid Cudi`,`Khabardaar.com`,`Keewi`,`KeepSake`,`Keepsake`,`Kalenji`,`Karnik Couture`,`Karma T Shirts`,`Karlsburg`,`Kappa`,`Kaplor`,`Kapdaclick.Com`],be=[`Lead Name`,`Email`,`Company`,`Created Time`,`Lead Owner`],G=[[`Count of contacts`,`Avg time spent`],[`Count of tasks`],[`Count of site visits`,`Sum of duration`]],xe=[{label:`Jul 2026`,rows:[[80,80,58,74,120],[61,179,58,102,90],[79,52,93,110,180],[48,101,68,5,45]]},{label:`Aug 2026`,rows:[[174,6,93,37,60],[178,109,150,21,75],[55,86,56,79,150],[109,117,153,33,105]]},{label:`Sep 2026`,rows:[[180,102,109,96,165],[83,136,84,96,120],[35,93,116,84,90],[18,148,126,101,135]]}],Se={title:`Work Items/Joined Reports - Revamp`,parameters:{layout:`fullscreen`,docs:{description:{component:`Isolated V2 flow without a report-name field or stepper. Step 1 selects up to three reports; step 2 groups records by field (vertically centred). Built from existing Modal, Input, Dropdown, Button, Icon and MessageBox components. Controls: the primary report name, the starting step (step 2 shows the centred layout) and how many reports are already selected. Done validates report selections, closes the modal and shows Untitled Joined Report with an edit link. No network calls are made.`}}},args:{primaryReportName:`Monthly Sales Pipeline`,initialStep:`select`,initialReportCount:2},argTypes:{initialStep:{control:`inline-radio`,options:[`select`,`group`]},initialReportCount:{control:{type:`range`,min:1,max:V,step:1}}},render:e=>(0,F.jsx)(M,{...e})},K={name:`V2`,args:{startOpen:!1,saved:!1},play:async({canvasElement:e,mount:t,args:n})=>{await t((0,F.jsx)(M,{...n},`creation-test`));let r=z(e),i=z(document.body);await I(r.getByLabelText(`Main navigation`)).toHaveClass(`jr-builder-nav`),await I(r.getByText(`Leads By Source`,{exact:!0})).toBeVisible(),await I(r.getByRole(`table`,{name:`Report 1 Leads By Source`})).toBeVisible(),await L.click(r.getByRole(`button`,{name:`Create Joined Report`,exact:!0}));let a=z(await i.findByRole(`dialog`));await I(a.getByRole(`status`)).toHaveTextContent(`Category columns are not supported in the joined report.`),await I(a.getByRole(`status`)).toHaveTextContent(`Reports from any module can now be joined — a common group is mapped per report after saving.`),await L.click(a.getByRole(`button`,{name:`Report 2`,exact:!0})),await L.click(await i.findByRole(`option`,{name:`Sales Pipeline by Region`,exact:!0})),await L.click(a.getByRole(`button`,{name:`Done`,exact:!0})),await R(()=>I(i.queryByRole(`dialog`)).not.toBeInTheDocument()),await I(r.getByRole(`heading`,{name:`Report 2`,exact:!0})).toBeVisible(),await I(i.queryByText(/Joined Report .* saved\./)).not.toBeInTheDocument(),await L.click(r.getByRole(`button`,{name:`Edit Joined Report`,exact:!0})),a=z(await i.findByRole(`dialog`)),await L.click(a.getByRole(`button`,{name:`Add report`,exact:!0})),await L.click(a.getByRole(`button`,{name:`Report 3`,exact:!0})),await L.click(await i.findByRole(`option`,{name:`Won Deals This Quarter`,exact:!0})),await L.click(a.getByRole(`button`,{name:`Done`,exact:!0})),await R(()=>I(i.queryByRole(`dialog`)).not.toBeInTheDocument()),await I(r.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible(),await I(i.queryByText(/Joined Report .* saved\./)).not.toBeInTheDocument(),await t((0,F.jsx)(M,{...n},`creation-ready`)),await I(r.getByRole(`button`,{name:`Create Joined Report`,exact:!0})).toBeVisible(),await I(r.queryByRole(`button`,{name:`Edit Joined Report`,exact:!0})).not.toBeInTheDocument()}},q={name:`V2 - Summary`,args:{startOpen:!1,saved:!0,initialReportCount:3,initialGroupCount:3},play:async({canvasElement:e})=>{let t=z(e);await I(t.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible(),await L.click(t.getByRole(`button`,{name:`Edit aggregate columns for Report 1`}));let n=z(t.getByRole(`region`,{name:`Aggregate columns`}));await I(n.getByRole(`checkbox`,{name:`Show Row Count`})).toBeChecked();let r=n.getByRole(`checkbox`,{name:`Show Row Count`}).closest(`.checkbox-root`);await I(getComputedStyle(r).alignItems).toBe(`center`),await I(getComputedStyle(r.querySelector(`.checkbox-control`)).marginTop).toBe(`0px`),await I(n.getAllByRole(`checkbox`).filter(e=>e.checked)).toHaveLength(6),await I(n.getByRole(`button`,{name:`Create Aggregate Formula`})).toBeVisible(),await I(n.getByRole(`checkbox`,{name:`Revenue per Lead`,exact:!0})).toBeInTheDocument();let i=n.getByRole(`button`,{name:`Options for percent summary formula`});await L.click(i);let a=z(e.ownerDocument.body);await I(a.getByRole(`option`,{name:`Edit`,exact:!0})).toBeVisible(),await I(a.getByRole(`option`,{name:`Delete`,exact:!0})).toBeVisible(),await L.keyboard(`{Escape}`),await L.click(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})),await L.click(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})),await L.click(n.getByRole(`button`,{name:`Clear all report columns`})),await I(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})).not.toBeChecked(),await I(n.queryByRole(`button`,{name:`Clear all report columns`})).not.toBeInTheDocument(),await I(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})).toBeChecked(),await L.click(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})),await L.click(n.getByRole(`button`,{name:`Clear all module columns`})),await I(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})).toBeChecked(),await I(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})).not.toBeChecked(),await I(n.queryByRole(`button`,{name:`Clear all module columns`})).not.toBeInTheDocument(),await I(n.getByRole(`button`,{name:`Clear all report columns`})).toBeVisible(),await L.type(n.getByRole(`searchbox`,{name:`Search aggregate columns`}),`Annual Revenue`),await I(n.queryByRole(`checkbox`,{name:`Count of Unique Leads`})).not.toBeInTheDocument(),await L.click(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})),await L.click(n.getByRole(`button`,{name:`Done`,exact:!0}));let o=z(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`}));await I(o.getByText(`Sum of Annual Revenue`,{exact:!0})).toBeVisible(),await L.click(t.getByRole(`button`,{name:`Edit aggregate columns for Report 1`})),n=z(t.getByRole(`region`,{name:`Aggregate columns`})),await I(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})).toBeChecked(),await L.click(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})),await L.click(n.getByRole(`button`,{name:`Cancel`,exact:!0})),await I(z(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`})).getByText(`Sum of Annual Revenue`,{exact:!0})).toBeVisible();let s=t.getByRole(`textbox`,{name:`Report title`});await I(s).toHaveValue(`Untitled Joined Report`);let c=s.closest(`.jrv2-builder-title-input`);await L.hover(s);let l=c.getBoundingClientRect().width;await I(l).toBeGreaterThanOrEqual(100),await L.click(s),await I(c.getBoundingClientRect().width).toBe(390),await L.clear(s),await L.type(s,`Sales{Enter}`),await I(c.getBoundingClientRect().width).toBe(100),await L.clear(s),await L.type(s,`Regional Sales Summary{Enter}`),await I(s).toHaveValue(`Regional Sales Summary`),await I(s).not.toHaveFocus(),await L.clear(s),await L.tab(),await I(s).toHaveValue(`Untitled Joined Report`),await I(t.getAllByRole(`button`,{name:/sort order: Asc/})).toHaveLength(3);let u=t.getByRole(`region`,{name:`Row groups`});await I(z(u).getAllByRole(`button`,{name:/^Reorder .* group$/})).toHaveLength(3),z(u).getByRole(`button`,{name:`Reorder Account group`}).focus(),await L.keyboard(`{ArrowUp}`),await I(Array.from(u.querySelectorAll(`.jrv2-joined-group-name > span:first-child`)).map(e=>e.textContent)).toEqual([`Created Date`,`Account`,`Assigned user`]),await L.keyboard(`{ArrowDown}`),await I(Array.from(u.querySelectorAll(`.jrv2-joined-group-name > span:first-child`)).map(e=>e.textContent)).toEqual([`Created Date`,`Assigned user`,`Account`]);let d=t.getByRole(`table`,{name:`Joined report preview`}),f=z(d),p=f.getByRole(`button`,{name:`Sort by Count of contacts`,exact:!0}),m=()=>Array.from(d.querySelectorAll(`tbody tr`)).slice(0,4).map(e=>Number(e.children[3].textContent)),h=z(e.ownerDocument.body);await L.click(p),await I(h.getByRole(`menu`,{name:`Sort Count of contacts`})).toBeVisible();let g=h.getByRole(`menu`,{name:`Sort Count of contacts`});await I(getComputedStyle(g).fontFamily).toContain(`Zoho Puvi`),await I(g.querySelectorAll(`svg`)).toHaveLength(2),await L.click(h.getByRole(`menuitemradio`,{name:`Asc`,exact:!0})),await I(p.closest(`th`)).toHaveAttribute(`aria-sort`,`ascending`),await I(m()).toEqual([48,61,79,80]),await L.click(p),await L.click(h.getByRole(`menuitemradio`,{name:`Desc`,exact:!0})),await I(p.closest(`th`)).toHaveAttribute(`aria-sort`,`descending`),await I(m()).toEqual([80,79,61,48]),await I(d.querySelector(`tbody tr:nth-child(5) td:nth-child(4)`)).toHaveTextContent(`268`);let _=f.getByRole(`button`,{name:`Sort by Created Date - By Month and Year`,exact:!0});await L.click(_),await L.click(h.getByRole(`menuitemradio`,{name:`Desc`,exact:!0})),await I(d.querySelector(`tbody tr td`)).toHaveTextContent(`Sep 2026`),await L.click(_),await L.click(h.getByRole(`menuitemradio`,{name:`Asc`,exact:!0})),await I(d.querySelector(`tbody tr td`)).toHaveTextContent(`Jul 2026`),await L.click(_),await L.keyboard(`{Escape}`),await I(h.queryByRole(`menu`,{name:`Sort Created Date - By Month and Year`})).not.toBeInTheDocument();let v=f.getByRole(`separator`,{name:`Resize Account column`}),y=v.closest(`th`),b=y.getBoundingClientRect().width;v.focus(),await L.keyboard(`{ArrowRight}{ArrowRight}`),await I(v).toHaveAttribute(`aria-valuenow`,`200`),await I(y.getBoundingClientRect().width).toBe(b+20),await L.keyboard(`{ArrowLeft}{ArrowLeft}`),await I(v).toHaveAttribute(`aria-valuenow`,`180`),await L.keyboard(`{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}`),await I(v).toHaveAttribute(`aria-valuenow`,`100`);let x=d.querySelector(`tbody tr td:nth-child(3)`);await I(getComputedStyle(x).textOverflow).toBe(`ellipsis`),await I(getComputedStyle(x).overflow).toBe(`hidden`),await I(x.scrollWidth).toBeGreaterThan(x.clientWidth),await I(getComputedStyle(d).minWidth).toBe(`100%`),await L.keyboard(`{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}`);let S=z(d).getByRole(`rowheader`,{name:`Grand Total`,exact:!0});await I(S.closest(`tfoot`)).not.toBeNull(),await I(S).toBeVisible();let C=d.parentElement;await I(d.querySelector(`thead`)?.textContent).not.toContain(`▲`),await I(getComputedStyle(S).boxShadow).toBe(`none`),await I(getComputedStyle(S,`::after`).content).toBe(`none`),C.scrollLeft=C.scrollWidth,C.scrollTop=C.scrollHeight,C.dispatchEvent(new Event(`scroll`,{bubbles:!0})),await R(()=>I(C).toHaveClass(`jrv2-joined-preview-scroll--scrolled`)),await I(S).toBeVisible(),await I(getComputedStyle(S).position).toBe(`sticky`),await I(getComputedStyle(S).borderRightColor).toBe(`rgba(0, 0, 0, 0)`),C.scrollTo(0,0),C.dispatchEvent(new Event(`scroll`,{bubbles:!0})),await R(()=>I(C).not.toHaveClass(`jrv2-joined-preview-scroll--scrolled`));for(let[e,n]of[`Monthly Sales Pipeline`,`Sales Pipeline by Region`,`Sales Performance by Owner`].entries()){let r=t.getByRole(`heading`,{name:`Report ${e+1}`,exact:!0}).closest(`details`),i=r.querySelector(`summary`),a=r.querySelector(`.jrv2-report-rename`);r.open||(await L.hover(i),await I(a).not.toBeVisible(),await L.click(i)),await L.unhover(i),await L.click(s),await I(a).not.toBeVisible(),i.focus(),await I(a).toBeVisible(),e===0&&(await L.hover(a),await I(await z(document.body).findByRole(`tooltip`)).toHaveTextContent(`rename`),await L.unhover(a),a.focus(),await I(await z(document.body).findByRole(`tooltip`)).toHaveTextContent(`rename`),a.blur());let o=r.querySelector(`summary p`).textContent||n;await L.click(a);let c=z(await z(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),l=c.getByRole(`textbox`,{name:`Report Name`});await I(l).toHaveValue(o),await I(l.closest(`.input-input-wrapper`).getBoundingClientRect().width).toBe(390);let u=l.closest(`.modal-body`);await I(u.scrollWidth).toBeLessThanOrEqual(u.clientWidth);let f=u.closest(`.modal-dialog`).getBoundingClientRect();await I(f.right-l.getBoundingClientRect().right).toBeGreaterThanOrEqual(30),await L.clear(l),await L.type(l,`Discarded name`),await L.click(c.getByRole(`button`,{name:`Cancel`,exact:!0})),await R(()=>I(z(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument()),await I(z(r).getByText(o,{exact:!0})).toBeVisible(),await L.hover(i),await L.click(a),c=z(await z(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),await L.clear(c.getByRole(`textbox`,{name:`Report Name`})),await L.click(c.getByRole(`button`,{name:`Done`,exact:!0})),await I(c.getByRole(`textbox`,{name:`Report Name`})).toBeVisible(),await L.type(c.getByRole(`textbox`,{name:`Report Name`}),`Renamed report ${e+1}`),await L.click(c.getByRole(`button`,{name:`Done`,exact:!0})),await R(()=>I(z(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument()),await I(r.open).toBe(!0),await I(z(r).getByText(`Renamed report ${e+1}`,{exact:!0})).toBeVisible(),await I(z(d).getByRole(`columnheader`,{name:`Report ${e+1} — Renamed report ${e+1}`})).toBeVisible(),await L.hover(i),await L.click(a),c=z(await z(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),await L.clear(c.getByRole(`textbox`,{name:`Report Name`})),await L.type(c.getByRole(`textbox`,{name:`Report Name`}),`${o}{Enter}`),await R(()=>I(z(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument())}}},J={name:`V2-Add Group`,args:{startOpen:!1,saved:!0,initialReportCount:3},play:async({canvasElement:e})=>{let t=z(e);await I(t.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible();let n=z(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`}));await I(n.queryByRole(`button`,{name:`Add column to Monthly Sales Pipeline`})).not.toBeInTheDocument(),await L.click(n.getByRole(`tab`,{name:`Filters`})),await L.click(n.getByRole(`button`,{name:`Add Filter`})),await I(n.getByText(`Lead Source is Advertisement or Partner`)).toBeVisible(),await L.click(t.getByText(`Sales Pipeline by Region`,{selector:`summary p`,exact:!0}));let r=z(t.getByRole(`region`,{name:`Sales Pipeline by Region settings`}));await I(r.queryByText(`Email`,{exact:!0})).not.toBeInTheDocument(),await L.click(r.getByRole(`tab`,{name:`Filters`})),await I(r.getByText(`No filters applied`)).toBeVisible(),await I(n.getByText(`Lead Source is Advertisement or Partner`)).toBeVisible(),await L.click(n.getByRole(`tab`,{name:`Columns`})),await I(t.queryByRole(`button`,{name:/^Reorder .* group$/})).not.toBeInTheDocument(),await L.click(t.getByRole(`button`,{name:`Edit Created Date group`}));let i=z(t.getByRole(`region`,{name:`Edit row group`}));await I(i.getByRole(`heading`,{name:`Edit Row Group`,exact:!0})).toBeVisible(),await I(t.queryByRole(`dialog`)).not.toBeInTheDocument(),await I(i.getAllByRole(`button`,{name:/^Group by field for /})).toHaveLength(3),await I(i.getByRole(`button`,{name:`Date granularity`})).toHaveTextContent(`By Month and Year`);let a=i.getByRole(`textbox`);await L.clear(a),await L.type(a,`Monthly records`),await L.click(i.getByRole(`button`,{name:`Done`,exact:!0})),await I(t.getByRole(`button`,{name:`Edit Monthly records group`})).toBeVisible(),await I(t.queryByRole(`button`,{name:/^Reorder .* group$/})).not.toBeInTheDocument(),await L.click(t.getByRole(`button`,{name:`Edit Monthly records group`})),i=z(t.getByRole(`region`,{name:`Edit row group`})),await I(i.getByRole(`textbox`)).toHaveValue(`Monthly records`),await I(i.getAllByRole(`button`,{name:/^Group by field for /})[0]).toHaveTextContent(`Created Date`),await L.clear(i.getByRole(`textbox`)),await L.type(i.getByRole(`textbox`),`Discarded name`),await L.click(i.getByRole(`button`,{name:`Cancel`,exact:!0})),await I(t.getByRole(`button`,{name:`Edit Monthly records group`})).toBeVisible(),await L.click(t.getByRole(`button`,{name:`Add New Group`}));let o=t.getByRole(`region`,{name:`Add row group`});await I(t.queryByRole(`dialog`)).not.toBeInTheDocument();let s=z(o);await I(s.queryByRole(`button`,{name:`Back to joined report structure`})).not.toBeInTheDocument(),await I(s.queryByRole(`radio`)).not.toBeInTheDocument(),await I(s.getByRole(`table`,{name:`Report field mapping`})).toBeVisible(),await I(s.getAllByRole(`button`,{name:/^Group by field for /})[0]).toBeEnabled(),await L.click(s.getByRole(`button`,{name:`Recommended Fields`})),await L.click(await z(document.body).findByRole(`option`,{name:`Account`,exact:!0}));let c=await s.findByRole(`table`,{name:`Report field mapping`});await I(z(c).getAllByRole(`row`)).toHaveLength(4),await I(s.queryByRole(`button`,{name:`Date granularity`})).not.toBeInTheDocument(),await L.click(s.getByRole(`button`,{name:`Recommended Fields`}));let l=await z(document.body).findByRole(`option`,{name:`Account`,exact:!0});await I(l).toHaveAttribute(`aria-selected`,`false`),await I(l.querySelector(`.dropdown-option-check`)).toBeNull(),await L.click(await z(document.body).findByRole(`option`,{name:`Created Date`,exact:!0})),await I(s.getByRole(`button`,{name:`Date granularity`})).toBeVisible(),await L.click(s.getByRole(`button`,{name:`Date granularity`}));for(let e of[`By Date`,`By Week`,`By Month and Year`,`By Quarter and Year`,`By Year`])await I(z(document.body).getByRole(`option`,{name:e,exact:!0})).toBeVisible();await L.click(z(document.body).getByRole(`option`,{name:`By Week`,exact:!0})),await I(s.getByRole(`button`,{name:`Recommended Fields`})).toBeVisible(),await I(z(c).getAllByRole(`row`)).toHaveLength(4);let u=s.getAllByRole(`button`,{name:/^Group by field for /});await L.click(u[2]),await L.click(await z(document.body).findByRole(`option`,{name:`Account Name`,exact:!0})),await I(z(s.getByRole(`status`)).getByText(`Warning:`)).toBeVisible(),await I(z(s.getByRole(`status`)).getByText(`Selected fields have different data types. Choose fields of the same type to create this group.`)).toBeVisible(),await I(s.getByRole(`button`,{name:`Done`,exact:!0})).toBeDisabled(),await I(s.queryByRole(`button`,{name:`Date granularity`})).not.toBeInTheDocument(),await L.click(u[2]),await L.click(await z(document.body).findByRole(`option`,{name:`Modified Time`,exact:!0})),await I(s.queryByRole(`status`)).not.toBeInTheDocument(),await I(s.getByRole(`button`,{name:`Done`,exact:!0})).toBeEnabled(),await I(s.getByRole(`button`,{name:`Date granularity`})).toBeVisible();let d=s.getByRole(`button`,{name:`Delete Group`,exact:!0});await I(d).toHaveAttribute(`data-variant`,`ghost-red`),await L.click(d),await I(t.queryByRole(`region`,{name:`Add row group`})).not.toBeInTheDocument();let f=t.getByRole(`button`,{name:`Add New Group`});await I(f).toBeVisible(),await I(f.closest(`.jrv2-group-heading`)).toContainElement(t.getByRole(`heading`,{name:`Row Groups`,exact:!0})),await I(f).toHaveClass(`jrv2-builder-edit-btn`),await I(f).toHaveTextContent(`+`),await L.click(f);let p=z(t.getByRole(`region`,{name:`Add row group`}));await L.click(p.getByRole(`button`,{name:`Recommended Fields`})),await L.click(await z(document.body).findByRole(`option`,{name:`Account`,exact:!0})),await L.clear(p.getByRole(`textbox`)),await L.type(p.getByRole(`textbox`),`Account grouping`),await L.click(p.getByRole(`button`,{name:`Done`,exact:!0}));let m=t.getByRole(`button`,{name:`Edit Account grouping group`}).closest(`.jrv2-joined-group`);await I(m).toHaveClass(`jrv2-joined-group--highlighted`),await I(t.getByRole(`button`,{name:`Edit Monthly records group`}).closest(`.jrv2-joined-group`)).not.toHaveClass(`jrv2-joined-group--highlighted`),await I(t.getByRole(`button`,{name:`Reorder Account grouping group`})).toBeInTheDocument(),await L.click(t.getByRole(`button`,{name:`Add New Group`}))}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'V2',
  args: {
    startOpen: false,
    saved: false
  },
  play: async ({
    canvasElement,
    mount,
    args
  }) => {
    await mount(<JoinedReportsRevampV2Page key="creation-test" {...args} />);
    const canvas = within(canvasElement);
    const page = within(document.body);
    await expect(canvas.getByLabelText('Main navigation')).toHaveClass('jr-builder-nav');
    await expect(canvas.getByText('Leads By Source', {
      exact: true
    })).toBeVisible();
    await expect(canvas.getByRole('table', {
      name: 'Report 1 Leads By Source'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Create Joined Report',
      exact: true
    }));
    let dialog = within(await page.findByRole('dialog'));
    await expect(dialog.getByRole('status')).toHaveTextContent('Category columns are not supported in the joined report.');
    await expect(dialog.getByRole('status')).toHaveTextContent('Reports from any module can now be joined — a common group is mapped per report after saving.');
    await userEvent.click(dialog.getByRole('button', {
      name: 'Report 2',
      exact: true
    }));
    await userEvent.click(await page.findByRole('option', {
      name: 'Sales Pipeline by Region',
      exact: true
    }));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByRole('heading', {
      name: 'Report 2',
      exact: true
    })).toBeVisible();
    await expect(page.queryByText(/Joined Report .* saved\\./)).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Joined Report',
      exact: true
    }));
    dialog = within(await page.findByRole('dialog'));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Add report',
      exact: true
    }));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Report 3',
      exact: true
    }));
    await userEvent.click(await page.findByRole('option', {
      name: 'Won Deals This Quarter',
      exact: true
    }));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByRole('heading', {
      name: 'Report 3',
      exact: true
    })).toBeVisible();
    await expect(page.queryByText(/Joined Report .* saved\\./)).not.toBeInTheDocument();

    // Keep the interactive story at the creation entry point after testing save/edit.
    await mount(<JoinedReportsRevampV2Page key="creation-ready" {...args} />);
    await expect(canvas.getByRole('button', {
      name: 'Create Joined Report',
      exact: true
    })).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Edit Joined Report',
      exact: true
    })).not.toBeInTheDocument();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'V2 - Summary',
  args: {
    startOpen: false,
    saved: true,
    initialReportCount: 3,
    initialGroupCount: 3
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Report 3',
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit aggregate columns for Report 1'
    }));
    let aggregateEditor = within(canvas.getByRole('region', {
      name: 'Aggregate columns'
    }));
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Show Row Count'
    })).toBeChecked();
    const rowCountLabel = aggregateEditor.getByRole('checkbox', {
      name: 'Show Row Count'
    }).closest('.checkbox-root')!;
    await expect(getComputedStyle(rowCountLabel).alignItems).toBe('center');
    await expect(getComputedStyle(rowCountLabel.querySelector('.checkbox-control')!).marginTop).toBe('0px');
    await expect(aggregateEditor.getAllByRole('checkbox').filter(checkbox => (checkbox as HTMLInputElement).checked)).toHaveLength(6);
    await expect(aggregateEditor.getByRole('button', {
      name: 'Create Aggregate Formula'
    })).toBeVisible();
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Revenue per Lead',
      exact: true
    })).toBeInTheDocument();
    const formulaOptions = aggregateEditor.getByRole('button', {
      name: 'Options for percent summary formula'
    });
    await userEvent.click(formulaOptions);
    const formulaMenu = within(canvasElement.ownerDocument.body);
    await expect(formulaMenu.getByRole('option', {
      name: 'Edit',
      exact: true
    })).toBeVisible();
    await expect(formulaMenu.getByRole('option', {
      name: 'Delete',
      exact: true
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await userEvent.click(aggregateEditor.getByRole('checkbox', {
      name: 'percent summary formula',
      exact: true
    }));
    await userEvent.click(aggregateEditor.getByRole('checkbox', {
      name: 'Count of Unique Leads',
      exact: true
    }));
    await userEvent.click(aggregateEditor.getByRole('button', {
      name: 'Clear all report columns'
    }));
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'percent summary formula',
      exact: true
    })).not.toBeChecked();
    await expect(aggregateEditor.queryByRole('button', {
      name: 'Clear all report columns'
    })).not.toBeInTheDocument();
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Count of Unique Leads',
      exact: true
    })).toBeChecked();
    await userEvent.click(aggregateEditor.getByRole('checkbox', {
      name: 'percent summary formula',
      exact: true
    }));
    await userEvent.click(aggregateEditor.getByRole('button', {
      name: 'Clear all module columns'
    }));
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'percent summary formula',
      exact: true
    })).toBeChecked();
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Count of Unique Leads',
      exact: true
    })).not.toBeChecked();
    await expect(aggregateEditor.queryByRole('button', {
      name: 'Clear all module columns'
    })).not.toBeInTheDocument();
    await expect(aggregateEditor.getByRole('button', {
      name: 'Clear all report columns'
    })).toBeVisible();
    await userEvent.type(aggregateEditor.getByRole('searchbox', {
      name: 'Search aggregate columns'
    }), 'Annual Revenue');
    await expect(aggregateEditor.queryByRole('checkbox', {
      name: 'Count of Unique Leads'
    })).not.toBeInTheDocument();
    await userEvent.click(aggregateEditor.getByRole('checkbox', {
      name: 'Sum of Annual Revenue',
      exact: true
    }));
    await userEvent.click(aggregateEditor.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    const firstReportSettings = within(canvas.getByRole('region', {
      name: 'Monthly Sales Pipeline settings'
    }));
    await expect(firstReportSettings.getByText('Sum of Annual Revenue', {
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit aggregate columns for Report 1'
    }));
    aggregateEditor = within(canvas.getByRole('region', {
      name: 'Aggregate columns'
    }));
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Sum of Annual Revenue',
      exact: true
    })).toBeChecked();
    await userEvent.click(aggregateEditor.getByRole('checkbox', {
      name: 'Sum of Annual Revenue',
      exact: true
    }));
    await userEvent.click(aggregateEditor.getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
    await expect(within(canvas.getByRole('region', {
      name: 'Monthly Sales Pipeline settings'
    })).getByText('Sum of Annual Revenue', {
      exact: true
    })).toBeVisible();
    const title = canvas.getByRole('textbox', {
      name: 'Report title'
    });
    await expect(title).toHaveValue('Untitled Joined Report');
    const titleField = title.closest('.jrv2-builder-title-input')!;
    await userEvent.hover(title);
    const initialWidth = titleField.getBoundingClientRect().width;
    await expect(initialWidth).toBeGreaterThanOrEqual(100);
    await userEvent.click(title);
    await expect(titleField.getBoundingClientRect().width).toBe(390);
    await userEvent.clear(title);
    await userEvent.type(title, 'Sales{Enter}');
    await expect(titleField.getBoundingClientRect().width).toBe(100);
    await userEvent.clear(title);
    await userEvent.type(title, 'Regional Sales Summary{Enter}');
    await expect(title).toHaveValue('Regional Sales Summary');
    await expect(title).not.toHaveFocus();
    await userEvent.clear(title);
    await userEvent.tab();
    await expect(title).toHaveValue('Untitled Joined Report');
    await expect(canvas.getAllByRole('button', {
      name: /sort order: Asc/
    })).toHaveLength(3);
    const groups = canvas.getByRole('region', {
      name: 'Row groups'
    });
    await expect(within(groups).getAllByRole('button', {
      name: /^Reorder .* group$/
    })).toHaveLength(3);
    const accountGrip = within(groups).getByRole('button', {
      name: 'Reorder Account group'
    });
    accountGrip.focus();
    await userEvent.keyboard('{ArrowUp}');
    await expect(Array.from(groups.querySelectorAll('.jrv2-joined-group-name > span:first-child')).map(node => node.textContent)).toEqual(['Created Date', 'Account', 'Assigned user']);
    await userEvent.keyboard('{ArrowDown}');
    await expect(Array.from(groups.querySelectorAll('.jrv2-joined-group-name > span:first-child')).map(node => node.textContent)).toEqual(['Created Date', 'Assigned user', 'Account']);
    const table = canvas.getByRole('table', {
      name: 'Joined report preview'
    });
    const tableQueries = within(table);
    const countSort = tableQueries.getByRole('button', {
      name: 'Sort by Count of contacts',
      exact: true
    });
    const firstMonthValues = () => Array.from(table.querySelectorAll('tbody tr')).slice(0, 4).map(row => Number(row.children[3].textContent));
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(countSort);
    await expect(page.getByRole('menu', {
      name: 'Sort Count of contacts'
    })).toBeVisible();
    const sortMenu = page.getByRole('menu', {
      name: 'Sort Count of contacts'
    });
    await expect(getComputedStyle(sortMenu).fontFamily).toContain('Zoho Puvi');
    await expect(sortMenu.querySelectorAll('svg')).toHaveLength(2);
    await userEvent.click(page.getByRole('menuitemradio', {
      name: 'Asc',
      exact: true
    }));
    await expect(countSort.closest('th')).toHaveAttribute('aria-sort', 'ascending');
    await expect(firstMonthValues()).toEqual([48, 61, 79, 80]);
    await userEvent.click(countSort);
    await userEvent.click(page.getByRole('menuitemradio', {
      name: 'Desc',
      exact: true
    }));
    await expect(countSort.closest('th')).toHaveAttribute('aria-sort', 'descending');
    await expect(firstMonthValues()).toEqual([80, 79, 61, 48]);
    await expect(table.querySelector('tbody tr:nth-child(5) td:nth-child(4)')).toHaveTextContent('268');
    const dateSort = tableQueries.getByRole('button', {
      name: 'Sort by Created Date - By Month and Year',
      exact: true
    });
    await userEvent.click(dateSort);
    await userEvent.click(page.getByRole('menuitemradio', {
      name: 'Desc',
      exact: true
    }));
    await expect(table.querySelector('tbody tr td')).toHaveTextContent('Sep 2026');
    await userEvent.click(dateSort);
    await userEvent.click(page.getByRole('menuitemradio', {
      name: 'Asc',
      exact: true
    }));
    await expect(table.querySelector('tbody tr td')).toHaveTextContent('Jul 2026');
    await userEvent.click(dateSort);
    await userEvent.keyboard('{Escape}');
    await expect(page.queryByRole('menu', {
      name: 'Sort Created Date - By Month and Year'
    })).not.toBeInTheDocument();
    const resize = tableQueries.getByRole('separator', {
      name: 'Resize Account column'
    });
    const accountHeader = resize.closest('th')!;
    const initialColumnWidth = accountHeader.getBoundingClientRect().width;
    resize.focus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await expect(resize).toHaveAttribute('aria-valuenow', '200');
    await expect(accountHeader.getBoundingClientRect().width).toBe(initialColumnWidth + 20);
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await expect(resize).toHaveAttribute('aria-valuenow', '180');
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}');
    await expect(resize).toHaveAttribute('aria-valuenow', '100');
    const accountCell = table.querySelector('tbody tr td:nth-child(3)')!;
    await expect(getComputedStyle(accountCell).textOverflow).toBe('ellipsis');
    await expect(getComputedStyle(accountCell).overflow).toBe('hidden');
    await expect(accountCell.scrollWidth).toBeGreaterThan(accountCell.clientWidth);
    await expect(getComputedStyle(table).minWidth).toBe('100%');
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
    const total = within(table).getByRole('rowheader', {
      name: 'Grand Total',
      exact: true
    });
    await expect(total.closest('tfoot')).not.toBeNull();
    await expect(total).toBeVisible();
    const scroller = table.parentElement!;
    await expect(table.querySelector('thead')?.textContent).not.toContain('▲');
    await expect(getComputedStyle(total).boxShadow).toBe('none');
    await expect(getComputedStyle(total, '::after').content).toBe('none');
    scroller.scrollLeft = scroller.scrollWidth;
    scroller.scrollTop = scroller.scrollHeight;
    scroller.dispatchEvent(new Event('scroll', {
      bubbles: true
    }));
    await waitFor(() => expect(scroller).toHaveClass('jrv2-joined-preview-scroll--scrolled'));
    await expect(total).toBeVisible();
    await expect(getComputedStyle(total).position).toBe('sticky');
    await expect(getComputedStyle(total).borderRightColor).toBe('rgba(0, 0, 0, 0)');
    scroller.scrollTo(0, 0);
    scroller.dispatchEvent(new Event('scroll', {
      bubbles: true
    }));
    await waitFor(() => expect(scroller).not.toHaveClass('jrv2-joined-preview-scroll--scrolled'));
    for (const [index, originalName] of ['Monthly Sales Pipeline', 'Sales Pipeline by Region', 'Sales Performance by Owner'].entries()) {
      const heading = canvas.getByRole('heading', {
        name: \`Report \${index + 1}\`,
        exact: true
      });
      const section = heading.closest('details')!;
      const summary = section.querySelector('summary')!;
      const rename = section.querySelector<HTMLButtonElement>('.jrv2-report-rename')!;
      if (!section.open) {
        await userEvent.hover(summary);
        await expect(rename).not.toBeVisible();
        await userEvent.click(summary);
      }
      await userEvent.unhover(summary);
      await userEvent.click(title);
      await expect(rename).not.toBeVisible();
      summary.focus();
      await expect(rename).toBeVisible();
      if (index === 0) {
        await userEvent.hover(rename);
        await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent('rename');
        await userEvent.unhover(rename);
        rename.focus();
        await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent('rename');
        rename.blur();
      }
      const previousName = section.querySelector('summary p')!.textContent || originalName;
      await userEvent.click(rename);
      let renameDialog = within(await within(document.body).findByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      }));
      const input = renameDialog.getByRole('textbox', {
        name: 'Report Name'
      });
      await expect(input).toHaveValue(previousName);
      await expect(input.closest('.input-input-wrapper')!.getBoundingClientRect().width).toBe(390);
      const renameBody = input.closest('.modal-body')!;
      await expect(renameBody.scrollWidth).toBeLessThanOrEqual(renameBody.clientWidth);
      const renameBounds = renameBody.closest('.modal-dialog')!.getBoundingClientRect();
      await expect(renameBounds.right - input.getBoundingClientRect().right).toBeGreaterThanOrEqual(30);
      await userEvent.clear(input);
      await userEvent.type(input, 'Discarded name');
      await userEvent.click(renameDialog.getByRole('button', {
        name: 'Cancel',
        exact: true
      }));
      await waitFor(() => expect(within(document.body).queryByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      })).not.toBeInTheDocument());
      await expect(within(section).getByText(previousName, {
        exact: true
      })).toBeVisible();
      await userEvent.hover(summary);
      await userEvent.click(rename);
      renameDialog = within(await within(document.body).findByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      }));
      await userEvent.clear(renameDialog.getByRole('textbox', {
        name: 'Report Name'
      }));
      await userEvent.click(renameDialog.getByRole('button', {
        name: 'Done',
        exact: true
      }));
      await expect(renameDialog.getByRole('textbox', {
        name: 'Report Name'
      })).toBeVisible();
      await userEvent.type(renameDialog.getByRole('textbox', {
        name: 'Report Name'
      }), \`Renamed report \${index + 1}\`);
      await userEvent.click(renameDialog.getByRole('button', {
        name: 'Done',
        exact: true
      }));
      await waitFor(() => expect(within(document.body).queryByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      })).not.toBeInTheDocument());
      await expect(section.open).toBe(true);
      await expect(within(section).getByText(\`Renamed report \${index + 1}\`, {
        exact: true
      })).toBeVisible();
      await expect(within(table).getByRole('columnheader', {
        name: \`Report \${index + 1} — Renamed report \${index + 1}\`
      })).toBeVisible();
      await userEvent.hover(summary);
      await userEvent.click(rename);
      renameDialog = within(await within(document.body).findByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      }));
      await userEvent.clear(renameDialog.getByRole('textbox', {
        name: 'Report Name'
      }));
      await userEvent.type(renameDialog.getByRole('textbox', {
        name: 'Report Name'
      }), \`\${previousName}{Enter}\`);
      await waitFor(() => expect(within(document.body).queryByRole('dialog', {
        name: \`Rename Report \${index + 1}\`
      })).not.toBeInTheDocument());
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'V2-Add Group',
  args: {
    startOpen: false,
    saved: true,
    initialReportCount: 3
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Report 3',
      exact: true
    })).toBeVisible();
    const firstReport = within(canvas.getByRole('region', {
      name: 'Monthly Sales Pipeline settings'
    }));
    await expect(firstReport.queryByRole('button', {
      name: 'Add column to Monthly Sales Pipeline'
    })).not.toBeInTheDocument();
    await userEvent.click(firstReport.getByRole('tab', {
      name: 'Filters'
    }));
    await userEvent.click(firstReport.getByRole('button', {
      name: 'Add Filter'
    }));
    await expect(firstReport.getByText('Lead Source is Advertisement or Partner')).toBeVisible();
    await userEvent.click(canvas.getByText('Sales Pipeline by Region', {
      selector: 'summary p',
      exact: true
    }));
    const secondReport = within(canvas.getByRole('region', {
      name: 'Sales Pipeline by Region settings'
    }));
    await expect(secondReport.queryByText('Email', {
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(secondReport.getByRole('tab', {
      name: 'Filters'
    }));
    await expect(secondReport.getByText('No filters applied')).toBeVisible();
    await expect(firstReport.getByText('Lead Source is Advertisement or Partner')).toBeVisible();
    await userEvent.click(firstReport.getByRole('tab', {
      name: 'Columns'
    }));
    await expect(canvas.queryByRole('button', {
      name: /^Reorder .* group$/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Created Date group'
    }));
    let editPanel = within(canvas.getByRole('region', {
      name: 'Edit row group'
    }));
    await expect(editPanel.getByRole('heading', {
      name: 'Edit Row Group',
      exact: true
    })).toBeVisible();
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(editPanel.getAllByRole('button', {
      name: /^Group by field for /
    })).toHaveLength(3);
    await expect(editPanel.getByRole('button', {
      name: 'Date granularity'
    })).toHaveTextContent('By Month and Year');
    const groupName = editPanel.getByRole('textbox');
    await userEvent.clear(groupName);
    await userEvent.type(groupName, 'Monthly records');
    await userEvent.click(editPanel.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await expect(canvas.getByRole('button', {
      name: 'Edit Monthly records group'
    })).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: /^Reorder .* group$/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Monthly records group'
    }));
    editPanel = within(canvas.getByRole('region', {
      name: 'Edit row group'
    }));
    await expect(editPanel.getByRole('textbox')).toHaveValue('Monthly records');
    await expect(editPanel.getAllByRole('button', {
      name: /^Group by field for /
    })[0]).toHaveTextContent('Created Date');
    await userEvent.clear(editPanel.getByRole('textbox'));
    await userEvent.type(editPanel.getByRole('textbox'), 'Discarded name');
    await userEvent.click(editPanel.getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
    await expect(canvas.getByRole('button', {
      name: 'Edit Monthly records group'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add New Group'
    }));
    const panel = canvas.getByRole('region', {
      name: 'Add row group'
    });
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    const editor = within(panel);
    await expect(editor.queryByRole('button', {
      name: 'Back to joined report structure'
    })).not.toBeInTheDocument();
    await expect(editor.queryByRole('radio')).not.toBeInTheDocument();
    await expect(editor.getByRole('table', {
      name: 'Report field mapping'
    })).toBeVisible();
    await expect(editor.getAllByRole('button', {
      name: /^Group by field for /
    })[0]).toBeEnabled();
    await userEvent.click(editor.getByRole('button', {
      name: 'Recommended Fields'
    }));
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Account',
      exact: true
    }));
    const mapping = await editor.findByRole('table', {
      name: 'Report field mapping'
    });
    await expect(within(mapping).getAllByRole('row')).toHaveLength(4);
    await expect(editor.queryByRole('button', {
      name: 'Date granularity'
    })).not.toBeInTheDocument();
    await userEvent.click(editor.getByRole('button', {
      name: 'Recommended Fields'
    }));
    const recommendedAccount = await within(document.body).findByRole('option', {
      name: 'Account',
      exact: true
    });
    await expect(recommendedAccount).toHaveAttribute('aria-selected', 'false');
    await expect(recommendedAccount.querySelector('.dropdown-option-check')).toBeNull();
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Created Date',
      exact: true
    }));
    await expect(editor.getByRole('button', {
      name: 'Date granularity'
    })).toBeVisible();
    await userEvent.click(editor.getByRole('button', {
      name: 'Date granularity'
    }));
    for (const name of ['By Date', 'By Week', 'By Month and Year', 'By Quarter and Year', 'By Year']) {
      await expect(within(document.body).getByRole('option', {
        name,
        exact: true
      })).toBeVisible();
    }
    await userEvent.click(within(document.body).getByRole('option', {
      name: 'By Week',
      exact: true
    }));
    await expect(editor.getByRole('button', {
      name: 'Recommended Fields'
    })).toBeVisible();
    await expect(within(mapping).getAllByRole('row')).toHaveLength(4);
    const fieldSelectors = editor.getAllByRole('button', {
      name: /^Group by field for /
    });
    await userEvent.click(fieldSelectors[2]);
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Account Name',
      exact: true
    }));
    await expect(within(editor.getByRole('status')).getByText('Warning:')).toBeVisible();
    await expect(within(editor.getByRole('status')).getByText('Selected fields have different data types. Choose fields of the same type to create this group.')).toBeVisible();
    await expect(editor.getByRole('button', {
      name: 'Done',
      exact: true
    })).toBeDisabled();
    await expect(editor.queryByRole('button', {
      name: 'Date granularity'
    })).not.toBeInTheDocument();
    await userEvent.click(fieldSelectors[2]);
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Modified Time',
      exact: true
    }));
    await expect(editor.queryByRole('status')).not.toBeInTheDocument();
    await expect(editor.getByRole('button', {
      name: 'Done',
      exact: true
    })).toBeEnabled();
    await expect(editor.getByRole('button', {
      name: 'Date granularity'
    })).toBeVisible();
    const deleteGroup = editor.getByRole('button', {
      name: 'Delete Group',
      exact: true
    });
    await expect(deleteGroup).toHaveAttribute('data-variant', 'ghost-red');
    await userEvent.click(deleteGroup);
    await expect(canvas.queryByRole('region', {
      name: 'Add row group'
    })).not.toBeInTheDocument();
    const addGroup = canvas.getByRole('button', {
      name: 'Add New Group'
    });
    await expect(addGroup).toBeVisible();
    await expect(addGroup.closest('.jrv2-group-heading')).toContainElement(canvas.getByRole('heading', {
      name: 'Row Groups',
      exact: true
    }));
    await expect(addGroup).toHaveClass('jrv2-builder-edit-btn');
    await expect(addGroup).toHaveTextContent('+');
    await userEvent.click(addGroup);
    const newGroupEditor = within(canvas.getByRole('region', {
      name: 'Add row group'
    }));
    await userEvent.click(newGroupEditor.getByRole('button', {
      name: 'Recommended Fields'
    }));
    await userEvent.click(await within(document.body).findByRole('option', {
      name: 'Account',
      exact: true
    }));
    await userEvent.clear(newGroupEditor.getByRole('textbox'));
    await userEvent.type(newGroupEditor.getByRole('textbox'), 'Account grouping');
    await userEvent.click(newGroupEditor.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    const addedGroup = canvas.getByRole('button', {
      name: 'Edit Account grouping group'
    }).closest('.jrv2-joined-group');
    await expect(addedGroup).toHaveClass('jrv2-joined-group--highlighted');
    await expect(canvas.getByRole('button', {
      name: 'Edit Monthly records group'
    }).closest('.jrv2-joined-group')).not.toHaveClass('jrv2-joined-group--highlighted');
    await expect(canvas.getByRole('button', {
      name: 'Reorder Account grouping group'
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add New Group'
    }));
  }
}`,...J.parameters?.docs?.source}}},Ce=[`V2`,`V2Summary`,`V2AddGroup`]}))();export{K as V2,J as V2AddGroup,q as V2Summary,Ce as __namedExportsOrder,Se as default};