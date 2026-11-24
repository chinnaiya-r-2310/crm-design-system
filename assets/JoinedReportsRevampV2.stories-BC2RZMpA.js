import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DWFYcyD7.js";import{t as r}from"./react-dom-xoLK1SvS.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{M as a,Yt as o,u as s}from"./Icons-CrlLmXbd.js";import{r as c,t as l}from"./Button-Cv6Y-rD-.js";import{n as u,t as d}from"./Tooltip-DL2WtHXW.js";import{n as f,t as p}from"./Dropdown-Dykvws1M.js";import{n as m,t as h}from"./Icon-C75a0X7X.js";import{n as g,t as _}from"./Checkbox-Bwx9a1ZJ.js";import{n as v,t as y}from"./Input-BDVJl8x3.js";import{n as ee,t as b}from"./MessageBox-DvOyNQWn.js";import{n as x,t as S}from"./Dragger-CO4Qln3n.js";import{n as C,t as te}from"./FormTable-C0JscKfC.js";import{n as ne,t as re}from"./FormulaBuilder-DP5hxTRh.js";import{n as w,t as ie}from"./Tabs-Die4fpSf.js";import{n as ae,t as oe}from"./MessageInfo-BQUrdfOl.js";import{n as T,t as se}from"./Modal-D-KatIxe.js";import{n as E,t as ce}from"./NextGenLeftMenu-BnHXDgsF.js";import{n as le,t as ue}from"./NextGenTopBand-DZUWGUZa.js";import{t as D}from"./CrossModuleReports-DsKEkk3M.js";import{BuilderBackground as de,t as fe}from"./JoinedReportsRevamp.stories-GS38ZSJT.js";var O=e((()=>{}));function k(e,t){return e.reportId===V?t:U.find(t=>t.value===e.reportId)?.label??``}function A(e,t,n){return Array.from({length:e},(e,r)=>({id:r+1,reportId:r===0?V:n||t===`group`?U[r-1].value:``}))}function j({primaryReportName:e,initialStep:t,initialReportCount:n,open:r,mode:i=`create`,onClose:a,onNotify:o,onSaved:c}){let[u,f]=(0,P.useState)(t),[m,h]=(0,P.useState)(!1),[g,_]=(0,P.useState)(()=>new Set),v=i===`edit`,ee=e=>Array.from({length:n},(t,n)=>W[(n+e)%W.length].value),[b,x]=(0,P.useState)(()=>A(n,t,v)),[S,C]=(0,P.useState)(()=>v?[{id:1,name:`Lead Source`,fields:ee(0)},{id:2,name:`Lead Owner`,fields:ee(3)}]:t===`group`?[{id:1,name:``,fields:[]}]:[]),ne=(0,P.useRef)(100),re=()=>(ne.current+=1,ne.current),w=(e,t)=>x(n=>n.map(n=>n.id===e?{...n,reportId:t,error:void 0}:n)),ie=()=>{if(b.length>=H){o(`info`,ge);return}x(e=>[...e,{id:re(),reportId:``}])},ae=e=>x(t=>t.filter(t=>t.id!==e)),T=(e,t)=>x(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<=0||i<=0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a}),E=()=>C(e=>[...e,{id:re(),name:``,fields:[]}]),ce=(e,t)=>C(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a});(0,P.useEffect)(()=>{if(!r)return;let e=window.setTimeout(()=>{u===`group`?document.getElementById(`jrv2-group-name-first`)?.focus():document.querySelector(`.jrv2-modal [aria-label="Report 2"]`)?.focus()},0);return()=>window.clearTimeout(e)},[r,u]);let le=e=>C(t=>t.filter(t=>t.id!==e)),ue=(e,t)=>C(n=>n.map(n=>n.id===e?{...n,name:t}:n)),D=(e,t,n)=>C(r=>r.map(r=>{if(r.id!==e)return r;let i=[...r.fields];return i[t]=n,{...r,fields:i}})),de=()=>{let t=b.map(e=>e.reportId?{...e,error:void 0}:{...e,error:he});if(x(t),t.some(e=>e.error))return;let n=new Set;if((u===`group`?S:[]).forEach(e=>{e.name.trim()||n.add(`${e.id}:name`),b.forEach((t,r)=>{e.fields[r]||n.add(`${e.id}:${r}`)})}),n.size>0){_(n);return}_(new Set),c(`Untitled Joined Report`,b.map(t=>k(t,e)))},fe=S.length-1;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(se,{isOpen:r,title:v?`Edit Joined Report`:`Create Joined Report`,width:u===`group`?_e+ve*(b.length+1):600,className:`jrv2-modal`,disableAutoFocus:!0,closeOnEscape:!1,onClose:a,saveLabel:`Done`,onSave:de,footerStart:u===`group`?(0,I.jsx)(l,{variant:`default`,onClick:()=>f(`select`),children:`Back`}):void 0,children:(0,I.jsxs)(`div`,{className:`jrv2-body`,children:[u===`select`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{className:`jrv2-intro`,children:`View multiple reports at once by creating a Joined Report.`}),(0,I.jsx)(te,{ariaLabel:`Reports`,headers:[`Report`],rows:b,canReorder:b.length===3,onMove:T,actionGap:13,renderCells:(t,n)=>[n===0?(0,I.jsx)(y,{width:`100%`,disabled:!0,"aria-label":`Primary report`,value:e,suffix:(0,I.jsx)(s,{"aria-hidden":`true`})},`primary`):(0,I.jsx)(p,{width:`100%`,placeholder:`Select Report`,triggerAriaLabel:`Report ${n+1}`,options:U,value:t.reportId,error:!!t.error,helperText:t.error,onChange:e=>w(t.id,e)},`report`)],renderActions:(e,t)=>({onRemove:t>0?()=>ae(e.id):void 0,removeLabel:`Remove report ${t+1}`,onAdd:t===b.length-1?ie:void 0,addLabel:`Add report`})}),!v&&(0,I.jsx)(oe,{variant:`note`,message:(0,I.jsxs)(I.Fragment,{children:[`Category columns are not supported in the joined report. Those columns cannot be viewed. Reports from `,(0,I.jsx)(`strong`,{children:`any module`}),` can now be joined — a common group is mapped per report after saving.`]})})]}),u===`group`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`jrv2-group-head`,children:[(0,I.jsx)(`p`,{className:`jrv2-section-heading`,children:`Group records by field to combine each report's fields under a common name.`}),(0,I.jsx)(l,{variant:`outline-blue`,onClick:()=>h(!0),children:`Preview`})]}),(0,I.jsx)(te,{ariaLabel:`Group records by field`,headers:[`Group Name`,...b.map(t=>(0,I.jsx)(d,{content:`Map Field For "${k(t,e)}"`,variant:`black`,placement:`top`,wrapperStyle:{display:`block`,maxWidth:`100%`},children:(0,I.jsx)(`span`,{className:`jrv2-col-text`,children:`Map Field For "${k(t,e)}"`})},t.id))],gapAfter:Array.from({length:b.length+1},()=>20),rows:S,canReorder:S.length>1,onMove:ce,renderCells:(e,t)=>[(0,I.jsx)(y,{width:250,placeholder:`Enter name`,id:t===0?`jrv2-group-name-first`:void 0,"aria-label":`Group ${t+1} name`,error:g.has(`${e.id}:name`)&&!e.name.trim(),helperText:g.has(`${e.id}:name`)&&!e.name.trim()?`Enter a group name`:void 0,value:e.name,onChange:t=>ue(e.id,t.target.value)},`name`),...b.map((n,r)=>(0,I.jsx)(p,{width:250,placeholder:`Select field`,triggerAriaLabel:`Group ${t+1} field for report ${r+1}`,options:W,error:g.has(`${e.id}:${r}`)&&!e.fields[r],helperText:g.has(`${e.id}:${r}`)&&!e.fields[r]?`Select a field`:void 0,value:e.fields[r]??``,onChange:t=>D(e.id,r,t)},n.id))],renderActions:(e,t)=>({onRemove:S.length>1?()=>le(e.id):void 0,removeLabel:`Remove group ${t+1}`,onAdd:t===fe?E:void 0,addLabel:`Add group`})})]})]})}),(0,I.jsx)(se,{isOpen:m,title:`Preview`,width:1180,showClose:!0,showFooter:!1,onClose:()=>h(!1),children:(0,I.jsxs)(`table`,{className:`jrv2-preview-table`,"aria-label":`Joined report preview`,children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{children:`Month & Year`}),(0,I.jsx)(`th`,{children:`Parent Module`}),(0,I.jsx)(`th`,{children:`Owner`}),(0,I.jsx)(`th`,{children:`Lookup Field`}),(0,I.jsx)(`th`,{children:`Report 1 (${e})`}),(0,I.jsx)(`th`,{children:`Report 2 (${b[1]?k(b[1],e):`Report 2`})`}),(0,I.jsx)(`th`,{children:`Report 3 (${b[2]?k(b[2],e):`Report 3`})`})]})}),(0,I.jsxs)(`tbody`,{children:[(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Jan 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,I.jsx)(`td`,{children:`Deal 1`}),(0,I.jsx)(`td`,{children:`Acme Corp renewal`}),(0,I.jsx)(`td`,{children:`Globex upsell`}),(0,I.jsx)(`td`,{children:`Initech expansion`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`2`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Feb 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,I.jsx)(`td`,{children:`Deal 2`}),(0,I.jsx)(`td`,{children:`-`}),(0,I.jsx)(`td`,{children:`Umbrella renewal`}),(0,I.jsx)(`td`,{children:`Hooli deal`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`0`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Mar 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Priya`}),(0,I.jsx)(`td`,{children:`Deal 3`}),(0,I.jsx)(`td`,{children:`Nova Labs demo`}),(0,I.jsx)(`td`,{children:`-`}),(0,I.jsx)(`td`,{children:`Vertex pilot`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`0`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Apr 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,I.jsx)(`td`,{children:`Deal 4`}),(0,I.jsx)(`td`,{children:`Orbit Media expansion`}),(0,I.jsx)(`td`,{children:`Pinnacle renewal`}),(0,I.jsx)(`td`,{children:`-`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`0`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`May 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,I.jsx)(`td`,{children:`Deal 5`}),(0,I.jsx)(`td`,{children:`Stark Industries pilot`}),(0,I.jsx)(`td`,{children:`Wayne Corp upsell`}),(0,I.jsx)(`td`,{children:`Acme Corp renewal`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Jun 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Priya`}),(0,I.jsx)(`td`,{children:`Deal 6`}),(0,I.jsx)(`td`,{children:`Contoso renewal`}),(0,I.jsx)(`td`,{children:`Fabrikam demo`}),(0,I.jsx)(`td`,{children:`-`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`0`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Jul 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Selvam`}),(0,I.jsx)(`td`,{children:`Deal 7`}),(0,I.jsx)(`td`,{children:`Litware expansion`}),(0,I.jsx)(`td`,{children:`-`}),(0,I.jsx)(`td`,{children:`Northwind pilot`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`0`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{rowSpan:2,children:`Aug 2026`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Deal`}),(0,I.jsx)(`td`,{rowSpan:2,children:`Maya`}),(0,I.jsx)(`td`,{children:`Deal 8`}),(0,I.jsx)(`td`,{children:`Adventure Works upsell`}),(0,I.jsx)(`td`,{children:`Tailspin renewal`}),(0,I.jsx)(`td`,{children:`Proseware deal`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`1`}),(0,I.jsx)(`td`,{children:`0`})]})]})]})})]})}function pe({hasFilters:e,onAdd:t,onDelete:n}){return(0,I.jsxs)(`section`,{className:`cmr__panel-body jrv2-builder-filters`,"aria-label":`Filters`,children:[(0,I.jsxs)(`div`,{className:`cmr__panel-heading`,children:[(0,I.jsx)(`h2`,{children:`Filters`}),e&&(0,I.jsxs)(`div`,{className:`cmr__heading-actions`,children:[(0,I.jsx)(d,{content:`Edit filters`,variant:`black`,placement:`top`,followCursor:!0,children:(0,I.jsx)(`button`,{type:`button`,className:`criteria-summary__action`,"aria-label":`Edit filters`,children:(0,I.jsx)(h,{name:`Edit`,size:13})})}),(0,I.jsx)(d,{content:`Delete filters`,variant:`black`,placement:`top`,followCursor:!0,children:(0,I.jsx)(`button`,{type:`button`,className:`criteria-summary__action criteria-summary__action--delete`,"aria-label":`Delete filters`,onClick:n,children:(0,I.jsx)(h,{name:`Delete`,size:12})})})]})]}),e?(0,I.jsxs)(`section`,{className:`cmr__saved`,"aria-label":`Saved Lead Source filter`,children:[(0,I.jsx)(`h3`,{children:`Lead Source`}),(0,I.jsx)(`p`,{className:`cmr__saved-sentence`,children:`Lead Source is Advertisement or Partner`})]}):(0,I.jsxs)(`div`,{className:`cmr__empty`,children:[(0,I.jsx)(`p`,{children:`No filters applied`}),(0,I.jsx)(l,{variant:`outline-blue`,size:`sm`,className:`cmr__add-filter`,onClick:t,children:`Add Filter`})]})]})}function me({label:e,direction:t,onSort:n}){let[r,i]=(0,P.useState)(null),a=(0,P.useRef)(null),o=(0,P.useRef)(null);return(0,P.useEffect)(()=>{if(!r)return;o.current?.querySelector(`[aria-checked="true"]`)?.focus();let e=e=>{!o.current?.contains(e.target)&&!a.current?.contains(e.target)&&i(null)},t=()=>i(null);return document.addEventListener(`pointerdown`,e),window.addEventListener(`scroll`,t,!0),window.addEventListener(`resize`,t),()=>{document.removeEventListener(`pointerdown`,e),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`resize`,t)}},[r]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`button`,{ref:a,type:`button`,className:`jrv2-preview-sort`,"aria-label":`Sort by ${e}`,"aria-haspopup":`menu`,"aria-expanded":!!r,onClick:()=>{let e=a.current.getBoundingClientRect();i(t=>t?null:{top:Math.max(4,Math.min(e.bottom+4,window.innerHeight-84)),left:Math.max(4,Math.min(e.right-128,window.innerWidth-132))})},children:[(0,I.jsx)(`span`,{children:e}),(0,I.jsxs)(`span`,{className:`jrv2-preview-sort-icons`,"aria-hidden":`true`,children:[(0,I.jsx)(s,{className:`jrv2-preview-sort-up${t===`ascending`?` jrv2-preview-sort-active`:``}`}),(0,I.jsx)(s,{className:t===`descending`?`jrv2-preview-sort-active`:``})]})]}),r&&(0,F.createPortal)((0,I.jsx)(`div`,{ref:o,className:`jrv2-preview-sort-menu`,role:`menu`,"aria-label":`Sort ${e}`,style:r,onKeyDown:e=>{if(e.key===`Escape`||e.key===`Tab`)i(null),e.key===`Escape`&&(e.preventDefault(),a.current?.focus());else if(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Home`||e.key===`End`){e.preventDefault();let t=Array.from(o.current.querySelectorAll(`button`)),n=t.indexOf(document.activeElement);t[e.key===`Home`?0:e.key===`End`?1:(n+1)%2].focus()}},children:[`ascending`,`descending`].map(e=>(0,I.jsxs)(`button`,{type:`button`,role:`menuitemradio`,"aria-checked":(t??`ascending`)===e,onClick:()=>{n(e),i(null),a.current?.focus()},children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,children:e===`ascending`?`↑`:`↓`}),e===`ascending`?`Asc`:`Desc`]},e))}),document.body)]})}function M({onEdit:e,onCreate:t,saved:n,reports:r,initialGroupCount:i}){let[o,c]=(0,P.useState)({}),u=r.map((e,t)=>o[t]||e),[f,m]=(0,P.useState)(null),[g,v]=(0,P.useState)(``),ee=e=>{let t=g.trim();t&&(c(n=>({...n,[e]:t})),m(null))},[x,C]=(0,P.useState)(`Untitled Joined Report`),[te,ne]=(0,P.useState)(!1),w=[`Created Date - By Month and Year`,`Assigned user`,`Account`,...r.flatMap((e,t)=>G[t])],[ae,oe]=(0,P.useState)({}),T=e=>ae[e]??(e===0?280:180),[E,le]=(0,P.useState)(null),D=(0,P.useRef)(null),de=(e,t)=>{oe(n=>({...n,[e]:Math.max(100,Math.min(600,t))}))},fe=xe.map(e=>{let t=e.rows.map((e,t)=>({values:e,index:t,owner:t<2?`Selvam`:`Priya`,account:t%2==0?`Fabrikam Inc`:`Northwind Traders`}));if(E&&E.column>0){let{column:e,direction:n}=E;t.sort((t,r)=>{let i=e===1?t.owner.localeCompare(r.owner):e===2?t.account.localeCompare(r.account):t.values[e-3]-r.values[e-3];return(n===`ascending`?i:-i)||t.index-r.index})}return{...e,sortedRows:t}});E?.column===0&&E.direction===`descending`&&fe.reverse();let[O,k]=(0,P.useState)(()=>[{id:1,field:`Created Date`,interval:`Month and Year`,order:`Asc`},{id:2,field:`Assigned user`,interval:``,order:`Asc`},{id:3,field:`Account`,interval:``,order:`Asc`}].slice(0,i).map(e=>({...e,mappedFields:r.map(()=>e.field),mappingOrder:r.map((e,t)=>t)}))),[A,j]=(0,P.useState)(null),[M,N]=(0,P.useState)([]),[F,L]=(0,P.useState)(()=>u.map((e,t)=>t)),R=(e,t)=>{L(n=>{let r=n.filter(t=>t!==e);return r.splice(n.indexOf(t),0,e),r})},[z,B]=(0,P.useState)(!1),V=!!(A&&!O.some(e=>e.id===A.id)),H=[{value:`Account`,label:`Account`,group:`By lookup`},{value:`Created Date`,label:`Created Date`,group:`By date-time`},{value:`Modified Date`,label:`Modified Date`,group:`By date-time`},{value:`Assigned user`,label:`Assigned user`,group:`By user`}],he=[...new Set([...H.map(e=>e.value),...W.map(e=>e.value)])].map(e=>({value:e,label:e})),ge={Account:`Lookup · Accounts`,"Account Name":`Lookup · Accounts`,"Campaign Source":`Lookup · Campaigns`,"Created Date":`Date`,"Modified Date":`Date`,"Close Date":`Date`,"Created Time":`Date`,"Modified Time":`Date`,"Assigned user":`User`,"Assigned To":`User`,Owner:`User`,Amount:`Currency`,"Annual Revenue":`Currency`,Probability:`Number`,Currency:`Picklist`,"Deal Stage":`Picklist`,Industry:`Picklist`,"Lead Source":`Picklist`,Rating:`Picklist`,"Sales Channel":`Picklist`,Email:`Email`,Phone:`Phone`,Website:`URL`},U=[...new Set(u.flatMap((e,t)=>{let n=M[t];return n?[ge[n]||`Text`]:[]}))].length>1,_e=u.length>0&&u.every((e,t)=>ge[M[t]]===`Date`),ve=[{value:`Date`,label:`By Date`},{value:`Week`,label:`By Week`},{value:`Month and Year`,label:`By Month and Year`},{value:`Quarter and Year`,label:`By Quarter and Year`},{value:`Year`,label:`By Year`}],Se=()=>{if(!A)return;if(U||!A.field.trim()||u.some((e,t)=>!M[t])){B(!0);return}let e={...A,interval:_e?A.interval||`Month and Year`:``,mappedFields:[...M],mappingOrder:[...F]};k(t=>t.some(t=>t.id===e.id)?t.map(t=>t.id===e.id?e:t):[...t,e]),j(null)},[K,q]=(0,P.useState)({}),J=e=>K[e]??{tab:`columns`,columns:[`Account Name`,`Assistant`,`Asst Phone`,`Average Time Spent (Minutes)`,`Contact Name`,`Contact Owner`],aggregates:[`Revenue per Lead`,`Projected Revenue`,`Avg of Annual Revenue`,`Min of Annual Revenue`,`Sum of Auto_Currency_aklnmyoh`],hasFilters:!1,showRowCount:!0},Y=(e,t)=>{q(n=>({...n,[e]:{...J(e),...t}}))},[Ce,we]=(0,P.useState)(`columns`),[Te,Ee]=(0,P.useState)(n),[De,Oe]=(0,P.useState)([`Lead Name`,`Email`,`Company`,`Created Time`,`Lead Owner`,`First Name`,`Last Name`]),[ke,Ae]=(0,P.useState)([`Avg of Annual Revenue`,`Sum of Annual Revenue`,`Count of Unique Leads`]),[X,Z]=(0,P.useState)(null),[je,Me]=(0,P.useState)(``),[Ne,Pe]=(0,P.useState)(!1),[Q,Fe]=(0,P.useState)([{label:`percent summary formula`,formula:`Annual Revenue / 100`},{label:`ukh,hh`,formula:`Annual Revenue`},{label:`Revenue per Lead`,formula:`Annual Revenue / Count of Unique Leads`},{label:`Projected Revenue`,formula:`Annual Revenue * Probability / 100`},{label:`Revenue in Thousands`,formula:`Annual Revenue / 1000`},{label:`Probability Percentage`,formula:`Probability / 100`}]),[$,Ie]=(0,P.useState)(null),Le=e=>{let t=J(e);Z({report:e,selected:[...t.aggregates],showRowCount:t.showRowCount}),Me(``)},Re=[...new Set([`Count of Unique Leads`,...[`Annual Revenue`,`Auto_Currency_aklnmyoh`,`Auto_Currency_cajrfwgg`].flatMap(e=>[`Avg`,`Sum`,`Min`,`Max`].map(t=>`${t} of ${e}`)),...X?J(X.report).aggregates:[]])].filter(e=>!Q.some(t=>t.label===e)),ze=e=>e.toLowerCase().includes(je.trim().toLowerCase()),Be=e=>Z(t=>t&&{...t,selected:t.selected.includes(e)?t.selected.filter(t=>t!==e):[...t.selected,e]});return(0,I.jsxs)(`div`,{className:`jrv2-builder`,children:[(0,I.jsx)(ce,{activeId:`reports`,defaultCollapsed:!0}),(0,I.jsxs)(`div`,{className:`jrv2-builder-main`,children:[(0,I.jsx)(ue,{moduleLabel:`Reports`,searchPlaceholder:`Search records`,showTerritory:!1}),(0,I.jsxs)(`div`,{className:`jrv2-builder-subbar`,children:[(0,I.jsxs)(`div`,{className:`jrv2-builder-subtitle`,children:[(0,I.jsx)(h,{name:`CrmArrowBack`,size:18}),(0,I.jsxs)(`div`,{className:`jrv2-builder-title-stack`,children:[n?(0,I.jsx)(`div`,{className:`jrv2-builder-title-input`,children:(0,I.jsx)(y,{variant:`header`,"aria-label":`Report title`,value:x,onChange:e=>C(e.target.value),onBlur:()=>C(e=>e.trim()||`Untitled Joined Report`),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})}):(0,I.jsx)(`span`,{className:`jrv2-builder-name`,children:`Leads By Source`}),!n&&(0,I.jsx)(`span`,{className:`jrv2-builder-module`,children:`Leads`})]})]}),(0,I.jsxs)(`div`,{className:`jrv2-builder-actions`,children:[!n&&(0,I.jsxs)(`p`,{className:`jrv2-builder-cta`,children:[`Do you want to join another report?`,` `,(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit`,onClick:t,children:`Create Joined Report`})]}),n&&(0,I.jsx)(l,{variant:`link-primary`,onClick:e,children:`Edit Joined Report`}),(0,I.jsx)(l,{variant:`default`,children:`Cancel`}),(0,I.jsx)(l,{variant:`default`,children:`Run`}),(0,I.jsx)(l,{variant:`primary`,children:`Save`})]})]}),(0,I.jsxs)(`div`,{className:`jrv2-builder-body`,children:[(0,I.jsx)(`section`,{className:`jrv2-builder-panel${n?` jrv2-builder-panel--joined`:``}${A||X?` jrv2-builder-panel--group-editor`:``}${X?` jrv2-builder-panel--aggregate-editor`:``}`,"aria-label":`Joined report structure`,children:n&&X?(0,I.jsxs)(`section`,{className:`jrv2-row-group-editor jrv2-aggregate-editor`,"aria-label":`Aggregate columns`,children:[(0,I.jsxs)(`header`,{className:`jrv2-aggregate-heading`,children:[(0,I.jsx)(`h2`,{className:`jrv2-builder-panel-title`,children:`Aggregate Columns`}),(0,I.jsx)(d,{content:`Create Aggregate Formula`,variant:`white`,placement:`top`,followCursor:!0,children:(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Create Aggregate Formula`,onClick:()=>{Ie(null),Pe(!0)},children:`+`})})]}),(0,I.jsxs)(`div`,{className:`jrv2-aggregate-content`,children:[(0,I.jsx)(y,{width:`100%`,type:`search`,"aria-label":`Search aggregate columns`,placeholder:`Search`,value:je,onChange:e=>Me(e.target.value)}),(0,I.jsx)(_,{label:`Show Row Count`,checked:X.showRowCount,onChange:e=>Z({...X,showRowCount:e.target.checked})}),(0,I.jsxs)(`div`,{className:`jrv2-aggregate-section-heading`,children:[(0,I.jsx)(`h3`,{className:`jrv2-joined-label`,children:`Report Columns`}),Q.some(e=>X.selected.includes(e.label))&&(0,I.jsx)(`button`,{type:`button`,className:`jrv2-aggregate-clear`,"aria-label":`Clear all report columns`,onClick:()=>Z({...X,selected:X.selected.filter(e=>!Q.some(t=>t.label===e))}),children:`Clear all`})]}),Q.filter(e=>ze(e.label)).map(e=>(0,I.jsxs)(`div`,{className:`jrv2-aggregate-option`,children:[(0,I.jsx)(_,{label:e.label,checked:X.selected.includes(e.label),onChange:()=>Be(e.label)}),(0,I.jsx)(p,{width:`auto`,triggerAriaLabel:`Options for ${e.label}`,triggerButtonVariant:`ghost`,triggerIcon:`⋯`,showSelectionIndicator:!1,options:[{value:`edit`,label:`Edit`},{value:`remove`,label:`Remove`}],onChange:t=>{t===`edit`?(Ie(e.label),Pe(!0)):Z({...X,selected:X.selected.filter(t=>t!==e.label)})}})]},e.label)),(0,I.jsxs)(`div`,{className:`jrv2-aggregate-section-heading`,children:[(0,I.jsx)(`h3`,{className:`jrv2-joined-label`,children:Number(X.report)===0?`Leads`:u[Number(X.report)]}),Re.some(e=>X.selected.includes(e))&&(0,I.jsx)(`button`,{type:`button`,className:`jrv2-aggregate-clear`,"aria-label":`Clear all module columns`,onClick:()=>Z({...X,selected:X.selected.filter(e=>!Re.includes(e))}),children:`Clear all`})]}),Re.filter(ze).map(e=>(0,I.jsx)(_,{label:e,checked:X.selected.includes(e),onChange:()=>Be(e)},e)),!Re.some(ze)&&!Q.some(e=>ze(e.label))&&(0,I.jsx)(`p`,{className:`jrv2-joined-muted`,role:`status`,children:`No matching columns`})]}),(0,I.jsxs)(`footer`,{className:`jrv2-row-group-footer`,children:[(0,I.jsx)(l,{variant:`primary`,onClick:()=>{Y(X.report,{aggregates:X.selected,showRowCount:X.showRowCount}),Z(null)},children:`Done`}),(0,I.jsx)(l,{variant:`default`,onClick:()=>Z(null),children:`Cancel`})]})]}):n&&A?(0,I.jsxs)(`section`,{className:`jrv2-row-group-editor`,"aria-label":V?`Add row group`:`Edit row group`,children:[(0,I.jsxs)(`div`,{className:`jrv2-row-group-heading`,children:[(0,I.jsx)(`h2`,{className:`jrv2-builder-panel-title`,children:V?`Add Row Group`:`Edit Row Group`}),(0,I.jsx)(p,{width:`auto`,triggerAriaLabel:`Recommended Fields`,triggerButtonVariant:`link-primary`,triggerIcon:(0,I.jsxs)(`span`,{className:`jrv2-recommended-trigger`,children:[`Recommended Fields `,(0,I.jsx)(s,{"aria-hidden":`true`})]}),options:H,value:``,showSelectionIndicator:!1,panelStyle:{"--dropdown-group-heading-margin":`4px 16px 0`,"--dropdown-panel-padding-top":`2px`,"--dropdown-option-padding-left":`10px`},onChange:e=>{N(u.map(()=>e)),j({...A,field:e,interval:e.includes(`Date`)?`Month and Year`:``}),B(!1)}})]}),(0,I.jsxs)(`div`,{className:`jrv2-joined-group-form`,children:[(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(`div`,{className:`jrv2-row-group-mapping`,children:(0,I.jsxs)(`div`,{className:`jrv2-mapping-table`,role:`table`,"aria-label":`Report field mapping`,children:[(0,I.jsxs)(`div`,{className:`jrv2-mapping-row jrv2-mapping-header`,role:`row`,children:[(0,I.jsx)(`div`,{role:`columnheader`,children:`Report`}),(0,I.jsx)(`div`,{role:`columnheader`,children:`Group by field`})]}),(0,I.jsx)(S,{dragHandleOnly:!0,items:F.map(String),onChange:e=>L(e.map(Number)),gripperOnHover:!0,renderItem:e=>{let t=Number(e),n=F.indexOf(t);return(0,I.jsxs)(`div`,{className:`jrv2-mapping-row`,role:`row`,children:[(0,I.jsxs)(`div`,{role:`cell`,children:[u.length>1&&(0,I.jsx)(`button`,{type:`button`,className:`jrv2-mapping-grip`,"data-drag-handle":!0,"aria-label":`Reorder ${u[t]}`,"aria-description":`Drag to reorder, or use the Up and Down arrow keys.`,onKeyDown:e=>{let r=e.key===`ArrowUp`?n-1:e.key===`ArrowDown`?n+1:-1;(e.key===`ArrowUp`||e.key===`ArrowDown`)&&e.preventDefault(),r>=0&&r<F.length&&R(t,F[r])},children:(0,I.jsx)(h,{name:`CrmMaskDrag`,size:12})}),(0,I.jsx)(`span`,{className:`jrv2-mapping-report-name`,title:u[t],children:u[t]})]}),(0,I.jsx)(`div`,{role:`cell`,children:(0,I.jsx)(p,{width:`100%`,placeholder:`Select field`,triggerAriaLabel:`Group by field for ${u[t]}`,options:he,value:M[t]||``,error:z&&!M[t]?`Select a field`:void 0,onChange:e=>N(n=>u.map((r,i)=>i===t?e:n[i]||``))})})]})}})]})})}),U&&(0,I.jsx)(b,{variant:`warning`,className:`jrv2-mixed-types-warning`,closable:!1,message:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`strong`,{children:`Warning:`}),` Selected fields have different data types. Choose fields of the same type to create this group.`]})}),_e&&(0,I.jsx)(`div`,{className:`jrv2-row-group-detail`,children:(0,I.jsx)(p,{style:{"--jrv2-date-granularity":1},label:`Date granularity`,width:`100%`,triggerAriaLabel:`Date granularity`,options:ve,value:A.interval||`Month and Year`,onChange:e=>j({...A,interval:e})})}),(0,I.jsx)(`div`,{className:`jrv2-row-group-detail`,children:(0,I.jsx)(y,{label:(0,I.jsxs)(`span`,{className:`jrv2-group-name-label`,children:[`Enter Group Name `,(0,I.jsx)(d,{content:`This name appears as the row heading.`,variant:`white`,placement:`top`,followCursor:!0,children:(0,I.jsx)(`button`,{type:`button`,className:`jrv2-group-name-info`,"aria-label":`Group name information`,children:(0,I.jsx)(a,{"aria-hidden":`true`})})})]}),layout:`vertical`,width:`100%`,placeholder:`Common group ${O.length+1}`,value:A.field,error:z&&!A.field.trim()?`Enter a group name`:void 0,onChange:e=>j({...A,field:e.target.value})})})]}),(0,I.jsxs)(`div`,{className:`jrv2-row-group-footer`,children:[(0,I.jsx)(l,{variant:`primary`,disabled:U,onClick:Se,children:`Done`}),(0,I.jsx)(l,{variant:`default`,onClick:()=>j(null),children:`Cancel`}),(0,I.jsx)(l,{className:`jrv2-delete-group`,variant:`ghost-red`,onClick:()=>{k(e=>e.filter(e=>e.id!==A.id)),j(null)},children:`Delete Group`})]})]}):n?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`header`,{className:`jrv2-joined-summary`,children:(0,I.jsx)(`h2`,{children:`Joined Report`})}),(0,I.jsxs)(`section`,{className:`jrv2-joined-groups`,"aria-label":`Row groups`,children:[(0,I.jsx)(`h3`,{className:`jrv2-joined-label`,children:`Row Groups`}),(0,I.jsx)(`div`,{className:`jrv2-group-list`,children:(0,I.jsx)(S,{dragHandleOnly:!0,items:O.map(e=>String(e.id)),onChange:e=>k(t=>e.map(e=>t.find(t=>String(t.id)===e))),gripperOnHover:!0,renderItem:e=>{let t=O.find(t=>String(t.id)===e);return(0,I.jsxs)(`div`,{className:`jrv2-joined-group`,children:[O.length>1&&(0,I.jsx)(`button`,{type:`button`,className:`jrv2-group-grip`,"data-drag-handle":!0,"aria-label":`Reorder ${t.field} group`,onKeyDown:e=>{e.key!==`ArrowUp`&&e.key!==`ArrowDown`||(e.preventDefault(),k(n=>{let r=n.findIndex(e=>e.id===t.id),i=r+(e.key===`ArrowUp`?-1:1);if(i<0||i>=n.length)return n;let a=[...n];return[a[r],a[i]]=[a[i],a[r]],a}))},children:(0,I.jsx)(h,{name:`CrmMaskDrag`,size:12})}),(0,I.jsxs)(`div`,{className:`jrv2-joined-group-name`,children:[(0,I.jsx)(`span`,{children:t.field}),t.interval&&(0,I.jsxs)(`span`,{className:`jrv2-joined-muted`,children:[`By `,t.interval]})]}),(0,I.jsx)(`button`,{type:`button`,className:`jrv2-joined-sort`,"aria-label":`${t.field} sort order: ${t.order}. Switch to ${t.order===`Asc`?`Desc`:`Asc`}`,onClick:()=>k(e=>e.map(e=>e.id===t.id?{...e,order:e.order===`Asc`?`Desc`:`Asc`}:e)),children:t.order}),(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit ${t.field} group`,onClick:()=>{N([...t.mappedFields]),L([...t.mappingOrder]),B(!1),j({...t})},children:(0,I.jsx)(h,{name:`CrmEditFilledMd`,size:13})})]},t.id)}})}),(0,I.jsx)(l,{variant:`link-primary`,className:`jrv2-joined-add`,onClick:()=>{N(u.map(()=>``)),L(u.map((e,t)=>t)),B(!1),j({id:Date.now(),field:``,interval:``,order:`Asc`,mappedFields:[],mappingOrder:[]})},children:`Add New Group`})]}),u.map((e,t)=>{let n=String(t),r=J(n);return(0,I.jsxs)(`details`,{className:`jrv2-joined-report`,open:t===0,children:[(0,I.jsxs)(`summary`,{className:`jrv2-report-toggle`,"aria-label":`Report ${t+1}: ${e}`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`jrv2-report-label-row`,children:(0,I.jsxs)(`h3`,{className:`jrv2-joined-label`,children:[`Report `,t+1]})}),(0,I.jsxs)(`div`,{className:`jrv2-report-name-row`,children:[(0,I.jsx)(`p`,{children:e}),(0,I.jsx)(d,{content:`rename`,variant:`black`,placement:`top`,wrapperStyle:{display:`inline-flex`,flexShrink:0},children:(0,I.jsx)(`button`,{type:`button`,className:`jrv2-report-rename`,"aria-label":`Rename Report ${t+1}`,onClick:n=>{n.preventDefault(),n.stopPropagation(),v(e),m(t)},children:(0,I.jsx)(h,{name:`CrmEditFilledMd`,size:13})})})]})]}),(0,I.jsx)(s,{size:12,className:`jrv2-report-chevron`})]}),(0,I.jsxs)(`div`,{className:`jrv2-report-content`,role:`region`,"aria-label":`${e} settings`,children:[(0,I.jsx)(`div`,{className:`jrv2-builder-tabs`,children:(0,I.jsx)(ie,{tabs:[{id:`columns`,label:`Columns`},{id:`filters`,label:`Filters`}],activeTab:r.tab,onChange:e=>Y(n,{tab:e}),variant:`secondary`,size:`md`})}),r.tab===`filters`?(0,I.jsx)(pe,{hasFilters:r.hasFilters,onAdd:()=>Y(n,{hasFilters:!0}),onDelete:()=>Y(n,{hasFilters:!1})}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`jrv2-builder-row`,children:(0,I.jsx)(`h4`,{className:`jrv2-joined-label`,children:`Columns`})}),(0,I.jsx)(S,{dragHandleOnly:!0,items:r.columns,onChange:e=>Y(n,{columns:e})}),(0,I.jsxs)(`div`,{className:`jrv2-builder-row jrv2-builder-row--section`,children:[(0,I.jsx)(`h4`,{className:`jrv2-joined-label`,children:`Aggregate columns`}),(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit aggregate columns for Report ${t+1}`,onClick:()=>Le(n),children:(0,I.jsx)(h,{name:`CrmEditFilledMd`,size:13})})]}),(0,I.jsx)(S,{dragHandleOnly:!0,items:r.aggregates,onChange:e=>Y(n,{aggregates:e}),renderItem:e=>(0,I.jsx)(`span`,{className:`jrv2-aggregate-label`,title:e,children:e})})]})]})]},t)})]}):(0,I.jsxs)(`div`,{className:`jrv2-builder-block`,children:[(0,I.jsx)(`div`,{className:`jrv2-builder-tabs`,children:(0,I.jsx)(ie,{tabs:[{id:`columns`,label:`Columns`},{id:`filters`,label:`Filters`}],activeTab:Ce,onChange:we,variant:`secondary`,size:`md`})}),Ce===`filters`?(0,I.jsx)(pe,{hasFilters:Te,onAdd:()=>Ee(!0),onDelete:()=>Ee(!1)}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`jrv2-builder-row`,children:[(0,I.jsx)(`span`,{className:`jrv2-builder-block-title`,children:`Columns`}),(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit columns`,children:(0,I.jsx)(h,{name:`CrmEditFilledMd`,size:13,className:`jrv2-builder-edit-icon`})})]}),(0,I.jsx)(S,{dragHandleOnly:!0,items:De,onChange:Oe}),(0,I.jsxs)(`div`,{className:`jrv2-builder-row jrv2-builder-row--section`,children:[(0,I.jsx)(`span`,{className:`jrv2-builder-block-title`,children:`Aggregate Columns`}),(0,I.jsx)(`button`,{type:`button`,className:`jrv2-builder-edit-btn`,"aria-label":`Edit aggregate columns`,children:(0,I.jsx)(h,{name:`CrmEditFilledMd`,size:13,className:`jrv2-builder-edit-icon`})})]}),(0,I.jsx)(S,{dragHandleOnly:!0,items:ke,onChange:Ae})]})]})}),(0,I.jsxs)(`section`,{className:`jrv2-builder-preview`,"aria-label":`Report preview`,children:[(0,I.jsxs)(`p`,{className:`jrv2-builder-notice`,children:[(0,I.jsx)(a,{"aria-hidden":`true`}),`Preview shown with limited number of rows. Run the report to see actual aggregate values.`,(0,I.jsx)(`span`,{className:`jrv2-builder-link`,children:`Show Details`})]}),n?(0,I.jsx)(`div`,{className:`jrv2-joined-preview-scroll${te?` jrv2-joined-preview-scroll--scrolled`:``}`,onScroll:e=>ne(e.currentTarget.scrollLeft>0),children:(0,I.jsxs)(`table`,{className:`jrv2-builder-table jrv2-joined-preview-table`,"aria-label":`Joined report preview`,style:{width:w.reduce((e,t,n)=>e+T(n),0)},children:[(0,I.jsx)(`colgroup`,{children:w.map((e,t)=>(0,I.jsx)(`col`,{style:{width:T(t)}},`${t}-${e}`))}),(0,I.jsxs)(`thead`,{children:[(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{"aria-label":`Grouping field`}),(0,I.jsx)(`th`,{colSpan:2,"aria-label":`Additional grouping fields`}),u.map((e,t)=>(0,I.jsxs)(`th`,{colSpan:G[t].length,scope:`colgroup`,className:`jrv2-builder-group-head`,children:[`Report `,t+1,` — `,e]},`${t}-${e}`))]}),(0,I.jsx)(`tr`,{children:w.map((e,t)=>(0,I.jsxs)(`th`,{scope:`col`,"aria-sort":E?.column===t?E.direction:`none`,children:[(0,I.jsx)(me,{label:e,direction:E?.column===t?E.direction:void 0,onSort:e=>le({column:t,direction:e})}),(0,I.jsx)(`span`,{className:`jrv2-preview-resize`,role:`separator`,"aria-orientation":`vertical`,"aria-label":`Resize ${e} column`,tabIndex:0,"aria-valuemin":100,"aria-valuemax":600,"aria-valuenow":T(t),onPointerDown:e=>{e.button===0&&(e.preventDefault(),e.stopPropagation(),D.current={column:t,startX:e.clientX,width:T(t)},e.currentTarget.setPointerCapture(e.pointerId))},onPointerMove:e=>{let n=D.current;!n||n.column!==t||de(t,n.width+e.clientX-n.startX)},onPointerUp:e=>{D.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},onLostPointerCapture:()=>{D.current=null},onPointerCancel:()=>{D.current=null},onKeyDown:e=>{e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||(e.preventDefault(),de(t,T(t)+(e.key===`ArrowRight`?10:-10)))}})]},`${t}-${e}`))})]}),(0,I.jsx)(`tbody`,{children:fe.flatMap(e=>[...e.sortedRows.map(({values:t,index:n,owner:r,account:i},a)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{children:a===0?e.label:``}),(0,I.jsx)(`td`,{children:a===0||e.sortedRows[a-1].owner!==r?r:``}),(0,I.jsx)(`td`,{children:i}),t.slice(0,u.reduce((e,t,n)=>e+G[n].length,0)).map((e,t)=>(0,I.jsx)(`td`,{className:`jrv2-preview-number`,children:e},t))]},`${e.label}-${n}`)),(0,I.jsxs)(`tr`,{className:`jrv2-preview-total`,children:[(0,I.jsxs)(`th`,{scope:`row`,children:[e.label,` Total`]}),(0,I.jsx)(`td`,{}),(0,I.jsx)(`td`,{}),e.rows[0].slice(0,u.reduce((e,t,n)=>e+G[n].length,0)).map((t,n)=>(0,I.jsx)(`td`,{className:`jrv2-preview-number`,children:e.rows.reduce((e,t)=>e+t[n],0)},n))]},`${e.label}-total`)])}),(0,I.jsx)(`tfoot`,{children:(0,I.jsxs)(`tr`,{className:`jrv2-preview-grand-total`,children:[(0,I.jsx)(`th`,{scope:`row`,children:`Grand Total`}),(0,I.jsx)(`td`,{colSpan:2}),u.flatMap((e,t)=>G[t].map((e,n)=>{let r=G.slice(0,t).reduce((e,t)=>e+t.length,0)+n;return(0,I.jsx)(`td`,{className:`jrv2-preview-number`,children:xe.reduce((e,t)=>e+t.rows.reduce((e,t)=>e+t[r],0),0)},`${t}-${e}`)}))]})})]})}):(0,I.jsxs)(`table`,{className:`jrv2-builder-table`,"aria-label":`Report 1 Leads By Source`,children:[(0,I.jsxs)(`thead`,{children:[(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{}),(0,I.jsx)(`th`,{colSpan:be.length,className:`jrv2-builder-group-head`,children:`Report 1 - Leads by Source`})]}),(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`jrv2-builder-source-head`,children:`Lead Source`}),be.map(e=>(0,I.jsx)(`th`,{children:e},e))]})]}),(0,I.jsx)(`tbody`,{children:ye.map((e,t)=>(0,I.jsxs)(`tr`,{children:[t===0&&(0,I.jsx)(`td`,{className:`jrv2-builder-source`,rowSpan:ye.length,children:`Advertisement`}),(0,I.jsx)(`td`,{className:`jrv2-builder-link`,children:e}),(0,I.jsx)(`td`,{children:`-`}),(0,I.jsx)(`td`,{children:`-`}),(0,I.jsx)(`td`,{children:`21 Oct, 2015 03:06 PM`}),(0,I.jsx)(`td`,{children:`Maheshva`})]},e))}),(0,I.jsx)(`tfoot`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`td`,{className:`jrv2-builder-source`,children:`Grand Total`}),(0,I.jsx)(`td`,{colSpan:be.length})]})})]})]})]})]}),(0,I.jsx)(se,{className:`jrv2-rename-modal`,isOpen:f!==null,title:`Rename Report ${(f??0)+1}`,width:600,saveLabel:`Done`,onClose:()=>m(null),onSave:()=>{f!==null&&ee(f)},children:(0,I.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),f!==null&&ee(f)},onKeyDown:e=>{e.key===`Escape`&&m(null)},children:(0,I.jsx)(y,{label:`Report Name`,"aria-label":`Report Name`,width:`100%`,required:!0,value:g,onChange:e=>v(e.target.value)})})}),(0,I.jsx)(se,{isOpen:Ne,title:$?`Edit Summary Formula`:`New Summary Formula`,width:1e3,onClose:()=>Pe(!1),showFooter:!1,children:Ne&&(0,I.jsx)(re,{title:$?`Edit Summary Formula`:`New Summary Formula`,defaultFormula:Q.find(e=>e.label===$)?.formula||``,fields:[{name:`Leads`,items:[{id:`annual-revenue`,label:`Annual Revenue`},{id:`employees`,label:`No of Employees`}]}],onCancel:()=>Pe(!1),onDone:({formula:e})=>{let t=$||`Summary formula ${Q.length+1}`;Fe(n=>$?n.map(n=>n.label===$?{label:t,formula:e}:n):[...n,{label:t,formula:e}]),Z(e=>e&&{...e,selected:[...new Set([...e.selected,t])]}),Pe(!1)}})})]})}function N({primaryReportName:e,initialStep:t,initialReportCount:n,initialGroupCount:r=1,startOpen:i=!0,saved:a=!0}){let[o,s]=(0,P.useState)(i),[c,l]=(0,P.useState)(`create`),[u,d]=(0,P.useState)(a),[f,p]=(0,P.useState)(()=>A(n,t,!0).map(t=>k(t,e))),[m,h]=(0,P.useState)(0),[g,_]=(0,P.useState)(null);return(0,P.useEffect)(()=>{if(!g)return;let e=window.setTimeout(()=>_(null),5e3);return()=>window.clearTimeout(e)},[g]),(0,I.jsxs)(I.Fragment,{children:[u?(0,I.jsx)(M,{saved:!0,reports:f,initialGroupCount:r,onEdit:()=>{l(`edit`),h(e=>e+1),s(!0)},onCreate:()=>{l(`create`),h(e=>e+1),s(!0)}}):(0,I.jsx)(de,{saved:!1,onEdit:()=>{l(`edit`),h(e=>e+1),s(!0)},onCreate:()=>{l(`create`),h(e=>e+1),s(!0)}}),g&&(0,F.createPortal)((0,I.jsx)(`div`,{className:`jrv2-note-banner`,children:(0,I.jsx)(b,{variant:g.variant,message:g.message,onClose:()=>_(null)})},g.id),document.body),(0,I.jsx)(j,{open:o,mode:c,primaryReportName:e,initialStep:t,initialReportCount:n,onClose:()=>s(!1),onNotify:(e,t)=>_({id:Date.now(),variant:e,message:t}),onSaved:(e,t)=>{p(t),d(!0),s(!1)}},m)]})}var P,F,I,L,R,z,B,V,H,he,ge,U,W,_e,ve,ye,be,G,xe,Se,K,q,J,Y;e((()=>{P=t(n(),1),F=t(r(),1),c(),g(),ne(),f(),le(),E(),C(),m(),v(),ee(),ae(),T(),u(),w(),x(),o(),fe(),O(),D(),I=i(),{expect:L,userEvent:R,waitFor:z,within:B}=__STORYBOOK_MODULE_TEST__,V=`primary`,H=3,he=`A Report has to be selected`,ge=`You cannot add more than ${H} reports`,U=[`Sales Pipeline by Region`,`Won Deals This Quarter`,`Lead Source Performance`,`Activity Summary by Owner`,`Campaign ROI Overview`,`Quote Conversion Rate`,`Renewals Due Next 90 Days`,`Support Case Backlog`,`Revenue by Product Line`,`Account Health Scores`,`Forecast vs Actuals`,`Territory Coverage Map`].map(e=>({value:e,label:e})),W=[`Account Name`,`Amount`,`Annual Revenue`,`Assigned To`,`Campaign Source`,`City`,`Close Date`,`Company`,`Country`,`Created Time`,`Currency`,`Deal Stage`,`Description`,`Email`,`Industry`,`Lead Source`,`Modified Time`,`Owner`,`Phone`,`Probability`,`Rating`,`Region`,`Sales Channel`,`State`,`Website`].map(e=>({value:e,label:e})),_e=151,ve=270,ye=[`Karpaska`,`Kipsta`,`Kiosha`,`Kingdom of Calm`,`Killer`,`Kid Cudi`,`Khabardaar.com`,`Keewi`,`KeepSake`,`Keepsake`,`Kalenji`,`Karnik Couture`,`Karma T Shirts`,`Karlsburg`,`Kappa`,`Kaplor`,`Kapdaclick.Com`],be=[`Lead Name`,`Email`,`Company`,`Created Time`,`Lead Owner`],G=[[`Count of contacts`,`Avg time spent`],[`Count of tasks`],[`Count of site visits`,`Sum of duration`]],xe=[{label:`Jul 2026`,rows:[[80,80,58,74,120],[61,179,58,102,90],[79,52,93,110,180],[48,101,68,5,45]]},{label:`Aug 2026`,rows:[[174,6,93,37,60],[178,109,150,21,75],[55,86,56,79,150],[109,117,153,33,105]]},{label:`Sep 2026`,rows:[[180,102,109,96,165],[83,136,84,96,120],[35,93,116,84,90],[18,148,126,101,135]]}],Se={title:`Work Items/Joined Reports - Revamp`,parameters:{layout:`fullscreen`,docs:{description:{component:`Isolated V2 flow without a report-name field or stepper. Step 1 selects up to three reports; step 2 groups records by field (vertically centred). Built from existing Modal, Input, Dropdown, Button, Icon and MessageBox components. Controls: the primary report name, the starting step (step 2 shows the centred layout) and how many reports are already selected. Done validates report selections, closes the modal and shows Untitled Joined Report with an edit link. No network calls are made.`}}},args:{primaryReportName:`Monthly Sales Pipeline`,initialStep:`select`,initialReportCount:2},argTypes:{initialStep:{control:`inline-radio`,options:[`select`,`group`]},initialReportCount:{control:{type:`range`,min:1,max:H,step:1}}},render:e=>(0,I.jsx)(N,{...e})},K={name:`V2`,args:{startOpen:!1,saved:!1},play:async({canvasElement:e,mount:t,args:n})=>{await t((0,I.jsx)(N,{...n},`creation-test`));let r=B(e),i=B(document.body);await L(r.getByLabelText(`Main navigation`)).toHaveClass(`jr-builder-nav`),await L(r.getByText(`Leads By Source`,{exact:!0})).toBeVisible(),await L(r.getByRole(`table`,{name:`Report 1 Leads By Source`})).toBeVisible(),await R.click(r.getByRole(`button`,{name:`Create Joined Report`,exact:!0}));let a=B(await i.findByRole(`dialog`));await L(a.getByRole(`status`)).toHaveTextContent(`Category columns are not supported in the joined report.`),await L(a.getByRole(`status`)).toHaveTextContent(`Reports from any module can now be joined — a common group is mapped per report after saving.`),await R.click(a.getByRole(`button`,{name:`Report 2`,exact:!0})),await R.click(await i.findByRole(`option`,{name:`Sales Pipeline by Region`,exact:!0})),await R.click(a.getByRole(`button`,{name:`Done`,exact:!0})),await z(()=>L(i.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(r.getByRole(`heading`,{name:`Report 2`,exact:!0})).toBeVisible(),await L(i.queryByText(/Joined Report .* saved\./)).not.toBeInTheDocument(),await R.click(r.getByRole(`button`,{name:`Edit Joined Report`,exact:!0})),a=B(await i.findByRole(`dialog`)),await R.click(a.getByRole(`button`,{name:`Add report`,exact:!0})),await R.click(a.getByRole(`button`,{name:`Report 3`,exact:!0})),await R.click(await i.findByRole(`option`,{name:`Won Deals This Quarter`,exact:!0})),await R.click(a.getByRole(`button`,{name:`Done`,exact:!0})),await z(()=>L(i.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(r.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible(),await L(i.queryByText(/Joined Report .* saved\./)).not.toBeInTheDocument(),await t((0,I.jsx)(N,{...n},`creation-ready`)),await L(r.getByRole(`button`,{name:`Create Joined Report`,exact:!0})).toBeVisible(),await L(r.queryByRole(`button`,{name:`Edit Joined Report`,exact:!0})).not.toBeInTheDocument()}},q={name:`V2 - Summary`,args:{startOpen:!1,saved:!0,initialReportCount:3,initialGroupCount:3},play:async({canvasElement:e})=>{let t=B(e);await L(t.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible(),await R.click(t.getByRole(`button`,{name:`Edit aggregate columns for Report 1`}));let n=B(t.getByRole(`region`,{name:`Aggregate columns`}));await L(n.getByRole(`checkbox`,{name:`Show Row Count`})).toBeChecked(),await L(n.getAllByRole(`checkbox`).filter(e=>e.checked)).toHaveLength(6),await L(n.getByRole(`button`,{name:`Create Aggregate Formula`})).toBeVisible(),await L(n.getByRole(`checkbox`,{name:`Revenue per Lead`,exact:!0})).toBeInTheDocument(),await R.click(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})),await R.click(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})),await R.click(n.getByRole(`button`,{name:`Clear all report columns`})),await L(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})).not.toBeChecked(),await L(n.queryByRole(`button`,{name:`Clear all report columns`})).not.toBeInTheDocument(),await L(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})).toBeChecked(),await R.click(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})),await R.click(n.getByRole(`button`,{name:`Clear all module columns`})),await L(n.getByRole(`checkbox`,{name:`percent summary formula`,exact:!0})).toBeChecked(),await L(n.getByRole(`checkbox`,{name:`Count of Unique Leads`,exact:!0})).not.toBeChecked(),await L(n.queryByRole(`button`,{name:`Clear all module columns`})).not.toBeInTheDocument(),await L(n.getByRole(`button`,{name:`Clear all report columns`})).toBeVisible(),await R.type(n.getByRole(`searchbox`,{name:`Search aggregate columns`}),`Annual Revenue`),await L(n.queryByRole(`checkbox`,{name:`Count of Unique Leads`})).not.toBeInTheDocument(),await R.click(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})),await R.click(n.getByRole(`button`,{name:`Done`,exact:!0}));let r=B(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`}));await L(r.getByText(`Sum of Annual Revenue`,{exact:!0})).toBeVisible(),await R.click(t.getByRole(`button`,{name:`Edit aggregate columns for Report 1`})),n=B(t.getByRole(`region`,{name:`Aggregate columns`})),await L(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})).toBeChecked(),await R.click(n.getByRole(`checkbox`,{name:`Sum of Annual Revenue`,exact:!0})),await R.click(n.getByRole(`button`,{name:`Cancel`,exact:!0})),await L(B(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`})).getByText(`Sum of Annual Revenue`,{exact:!0})).toBeVisible();let i=t.getByRole(`textbox`,{name:`Report title`});await L(i).toHaveValue(`Untitled Joined Report`);let a=i.closest(`.jrv2-builder-title-input`);await R.hover(i);let o=a.getBoundingClientRect().width;await L(o).toBeGreaterThanOrEqual(100),await R.click(i),await L(a.getBoundingClientRect().width).toBe(390),await R.clear(i),await R.type(i,`Sales{Enter}`),await L(a.getBoundingClientRect().width).toBe(100),await R.clear(i),await R.type(i,`Regional Sales Summary{Enter}`),await L(i).toHaveValue(`Regional Sales Summary`),await L(i).not.toHaveFocus(),await R.clear(i),await R.tab(),await L(i).toHaveValue(`Untitled Joined Report`),await L(t.getAllByRole(`button`,{name:/sort order: Asc/})).toHaveLength(3);let s=t.getByRole(`region`,{name:`Row groups`});await L(B(s).getAllByRole(`button`,{name:/^Reorder .* group$/})).toHaveLength(3),B(s).getByRole(`button`,{name:`Reorder Account group`}).focus(),await R.keyboard(`{ArrowUp}`),await L(Array.from(s.querySelectorAll(`.jrv2-joined-group-name > span:first-child`)).map(e=>e.textContent)).toEqual([`Created Date`,`Account`,`Assigned user`]),await R.keyboard(`{ArrowDown}`),await L(Array.from(s.querySelectorAll(`.jrv2-joined-group-name > span:first-child`)).map(e=>e.textContent)).toEqual([`Created Date`,`Assigned user`,`Account`]);let c=t.getByRole(`table`,{name:`Joined report preview`}),l=B(c),u=l.getByRole(`button`,{name:`Sort by Count of contacts`,exact:!0}),d=()=>Array.from(c.querySelectorAll(`tbody tr`)).slice(0,4).map(e=>Number(e.children[3].textContent)),f=B(e.ownerDocument.body);await R.click(u),await L(f.getByRole(`menu`,{name:`Sort Count of contacts`})).toBeVisible(),await R.click(f.getByRole(`menuitemradio`,{name:`Asc`,exact:!0})),await L(u.closest(`th`)).toHaveAttribute(`aria-sort`,`ascending`),await L(d()).toEqual([48,61,79,80]),await R.click(u),await R.click(f.getByRole(`menuitemradio`,{name:`Desc`,exact:!0})),await L(u.closest(`th`)).toHaveAttribute(`aria-sort`,`descending`),await L(d()).toEqual([80,79,61,48]),await L(c.querySelector(`tbody tr:nth-child(5) td:nth-child(4)`)).toHaveTextContent(`268`);let p=l.getByRole(`button`,{name:`Sort by Created Date - By Month and Year`,exact:!0});await R.click(p),await R.click(f.getByRole(`menuitemradio`,{name:`Desc`,exact:!0})),await L(c.querySelector(`tbody tr td`)).toHaveTextContent(`Sep 2026`),await R.click(p),await R.click(f.getByRole(`menuitemradio`,{name:`Asc`,exact:!0})),await L(c.querySelector(`tbody tr td`)).toHaveTextContent(`Jul 2026`),await R.click(p),await R.keyboard(`{Escape}`),await L(f.queryByRole(`menu`,{name:`Sort Created Date - By Month and Year`})).not.toBeInTheDocument();let m=l.getByRole(`separator`,{name:`Resize Account column`}),h=m.closest(`th`),g=h.getBoundingClientRect().width;m.focus(),await R.keyboard(`{ArrowRight}{ArrowRight}`),await L(m).toHaveAttribute(`aria-valuenow`,`200`),await L(h.getBoundingClientRect().width).toBe(g+20),await R.keyboard(`{ArrowLeft}{ArrowLeft}`),await L(m).toHaveAttribute(`aria-valuenow`,`180`);let _=B(c).getByRole(`rowheader`,{name:`Grand Total`,exact:!0});await L(_.closest(`tfoot`)).not.toBeNull(),await L(_).toBeVisible();let v=c.parentElement;await L(c.querySelector(`thead`)?.textContent).not.toContain(`▲`),await L(getComputedStyle(_).boxShadow).toBe(`none`),await L(getComputedStyle(_,`::after`).content).toBe(`none`),v.scrollLeft=v.scrollWidth,v.scrollTop=v.scrollHeight,v.dispatchEvent(new Event(`scroll`,{bubbles:!0})),await z(()=>L(v).toHaveClass(`jrv2-joined-preview-scroll--scrolled`)),await L(_).toBeVisible(),await L(getComputedStyle(_).position).toBe(`sticky`),await L(getComputedStyle(_).borderRightColor).toBe(`rgba(0, 0, 0, 0)`),v.scrollTo(0,0),v.dispatchEvent(new Event(`scroll`,{bubbles:!0})),await z(()=>L(v).not.toHaveClass(`jrv2-joined-preview-scroll--scrolled`));for(let[e,n]of[`Monthly Sales Pipeline`,`Sales Pipeline by Region`,`Sales Performance by Owner`].entries()){let r=t.getByRole(`heading`,{name:`Report ${e+1}`,exact:!0}).closest(`details`),a=r.querySelector(`summary`),o=r.querySelector(`.jrv2-report-rename`);r.open||(await R.hover(a),await L(o).not.toBeVisible(),await R.click(a)),await R.unhover(a),await R.click(i),await L(o).not.toBeVisible(),a.focus(),await L(o).toBeVisible(),e===0&&(await R.hover(o),await L(await B(document.body).findByRole(`tooltip`)).toHaveTextContent(`rename`),await R.unhover(o),o.focus(),await L(await B(document.body).findByRole(`tooltip`)).toHaveTextContent(`rename`),o.blur());let s=r.querySelector(`summary p`).textContent||n;await R.click(o);let l=B(await B(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),u=l.getByRole(`textbox`,{name:`Report Name`});await L(u).toHaveValue(s),await L(u.closest(`.input-input-wrapper`).getBoundingClientRect().width).toBe(390);let d=u.closest(`.modal-body`);await L(d.scrollWidth).toBeLessThanOrEqual(d.clientWidth);let f=d.closest(`.modal-dialog`).getBoundingClientRect();await L(f.right-u.getBoundingClientRect().right).toBeGreaterThanOrEqual(30),await R.clear(u),await R.type(u,`Discarded name`),await R.click(l.getByRole(`button`,{name:`Cancel`,exact:!0})),await z(()=>L(B(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument()),await L(B(r).getByText(s,{exact:!0})).toBeVisible(),await R.hover(a),await R.click(o),l=B(await B(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),await R.clear(l.getByRole(`textbox`,{name:`Report Name`})),await R.click(l.getByRole(`button`,{name:`Done`,exact:!0})),await L(l.getByRole(`textbox`,{name:`Report Name`})).toBeVisible(),await R.type(l.getByRole(`textbox`,{name:`Report Name`}),`Renamed report ${e+1}`),await R.click(l.getByRole(`button`,{name:`Done`,exact:!0})),await z(()=>L(B(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument()),await L(r.open).toBe(!0),await L(B(r).getByText(`Renamed report ${e+1}`,{exact:!0})).toBeVisible(),await L(B(c).getByRole(`columnheader`,{name:`Report ${e+1} — Renamed report ${e+1}`})).toBeVisible(),await R.hover(a),await R.click(o),l=B(await B(document.body).findByRole(`dialog`,{name:`Rename Report ${e+1}`})),await R.clear(l.getByRole(`textbox`,{name:`Report Name`})),await R.type(l.getByRole(`textbox`,{name:`Report Name`}),`${s}{Enter}`),await z(()=>L(B(document.body).queryByRole(`dialog`,{name:`Rename Report ${e+1}`})).not.toBeInTheDocument())}}},J={name:`V2-Add Group`,args:{startOpen:!1,saved:!0,initialReportCount:3},play:async({canvasElement:e})=>{let t=B(e);await L(t.getByRole(`heading`,{name:`Report 3`,exact:!0})).toBeVisible();let n=B(t.getByRole(`region`,{name:`Monthly Sales Pipeline settings`}));await L(n.queryByRole(`button`,{name:`Add column to Monthly Sales Pipeline`})).not.toBeInTheDocument(),await R.click(n.getByRole(`tab`,{name:`Filters`})),await R.click(n.getByRole(`button`,{name:`Add Filter`})),await L(n.getByText(`Lead Source is Advertisement or Partner`)).toBeVisible(),await R.click(t.getByText(`Sales Pipeline by Region`,{selector:`summary p`,exact:!0}));let r=B(t.getByRole(`region`,{name:`Sales Pipeline by Region settings`}));await L(r.queryByText(`Email`,{exact:!0})).not.toBeInTheDocument(),await R.click(r.getByRole(`tab`,{name:`Filters`})),await L(r.getByText(`No filters applied`)).toBeVisible(),await L(n.getByText(`Lead Source is Advertisement or Partner`)).toBeVisible(),await R.click(n.getByRole(`tab`,{name:`Columns`})),await L(t.queryByRole(`button`,{name:/^Reorder .* group$/})).not.toBeInTheDocument(),await R.click(t.getByRole(`button`,{name:`Edit Created Date group`}));let i=B(t.getByRole(`region`,{name:`Edit row group`}));await L(i.getByRole(`heading`,{name:`Edit Row Group`,exact:!0})).toBeVisible(),await L(t.queryByRole(`dialog`)).not.toBeInTheDocument(),await L(i.getAllByRole(`button`,{name:/^Group by field for /})).toHaveLength(3),await L(i.getByRole(`button`,{name:`Date granularity`})).toHaveTextContent(`By Month and Year`);let a=i.getByRole(`textbox`);await R.clear(a),await R.type(a,`Monthly records`),await R.click(i.getByRole(`button`,{name:`Done`,exact:!0})),await L(t.getByRole(`button`,{name:`Edit Monthly records group`})).toBeVisible(),await L(t.queryByRole(`button`,{name:/^Reorder .* group$/})).not.toBeInTheDocument(),await R.click(t.getByRole(`button`,{name:`Edit Monthly records group`})),i=B(t.getByRole(`region`,{name:`Edit row group`})),await L(i.getByRole(`textbox`)).toHaveValue(`Monthly records`),await L(i.getAllByRole(`button`,{name:/^Group by field for /})[0]).toHaveTextContent(`Created Date`),await R.clear(i.getByRole(`textbox`)),await R.type(i.getByRole(`textbox`),`Discarded name`),await R.click(i.getByRole(`button`,{name:`Cancel`,exact:!0})),await L(t.getByRole(`button`,{name:`Edit Monthly records group`})).toBeVisible(),await R.click(t.getByRole(`button`,{name:`Add New Group`}));let o=t.getByRole(`region`,{name:`Add row group`});await L(t.queryByRole(`dialog`)).not.toBeInTheDocument();let s=B(o);await L(s.queryByRole(`button`,{name:`Back to joined report structure`})).not.toBeInTheDocument(),await L(s.queryByRole(`radio`)).not.toBeInTheDocument(),await L(s.getByRole(`table`,{name:`Report field mapping`})).toBeVisible(),await L(s.getAllByRole(`button`,{name:/^Group by field for /})[0]).toBeEnabled(),await R.click(s.getByRole(`button`,{name:`Recommended Fields`})),await R.click(await B(document.body).findByRole(`option`,{name:`Account`,exact:!0}));let c=await s.findByRole(`table`,{name:`Report field mapping`});await L(B(c).getAllByRole(`row`)).toHaveLength(4),await L(s.queryByRole(`button`,{name:`Date granularity`})).not.toBeInTheDocument(),await R.click(s.getByRole(`button`,{name:`Recommended Fields`}));let l=await B(document.body).findByRole(`option`,{name:`Account`,exact:!0});await L(l).toHaveAttribute(`aria-selected`,`false`),await L(l.querySelector(`.dropdown-option-check`)).toBeNull(),await R.click(await B(document.body).findByRole(`option`,{name:`Created Date`,exact:!0})),await L(s.getByRole(`button`,{name:`Date granularity`})).toBeVisible(),await R.click(s.getByRole(`button`,{name:`Date granularity`}));for(let e of[`By Date`,`By Week`,`By Month and Year`,`By Quarter and Year`,`By Year`])await L(B(document.body).getByRole(`option`,{name:e,exact:!0})).toBeVisible();await R.click(B(document.body).getByRole(`option`,{name:`By Week`,exact:!0})),await L(s.getByRole(`button`,{name:`Recommended Fields`})).toBeVisible(),await L(B(c).getAllByRole(`row`)).toHaveLength(4);let u=s.getAllByRole(`button`,{name:/^Group by field for /});await R.click(u[2]),await R.click(await B(document.body).findByRole(`option`,{name:`Account Name`,exact:!0})),await L(B(s.getByRole(`status`)).getByText(`Warning:`)).toBeVisible(),await L(B(s.getByRole(`status`)).getByText(`Selected fields have different data types. Choose fields of the same type to create this group.`)).toBeVisible(),await L(s.getByRole(`button`,{name:`Done`,exact:!0})).toBeDisabled(),await L(s.queryByRole(`button`,{name:`Date granularity`})).not.toBeInTheDocument(),await R.click(u[2]),await R.click(await B(document.body).findByRole(`option`,{name:`Modified Time`,exact:!0})),await L(s.queryByRole(`status`)).not.toBeInTheDocument(),await L(s.getByRole(`button`,{name:`Done`,exact:!0})).toBeEnabled(),await L(s.getByRole(`button`,{name:`Date granularity`})).toBeVisible();let d=s.getByRole(`button`,{name:`Delete Group`,exact:!0});await L(d).toHaveAttribute(`data-variant`,`ghost-red`),await R.click(d),await L(t.queryByRole(`region`,{name:`Add row group`})).not.toBeInTheDocument(),await L(t.getByRole(`button`,{name:`Add New Group`})).toBeVisible(),await R.click(t.getByRole(`button`,{name:`Add New Group`}))}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    await expect(aggregateEditor.getAllByRole('checkbox').filter(checkbox => (checkbox as HTMLInputElement).checked)).toHaveLength(6);
    await expect(aggregateEditor.getByRole('button', {
      name: 'Create Aggregate Formula'
    })).toBeVisible();
    await expect(aggregateEditor.getByRole('checkbox', {
      name: 'Revenue per Lead',
      exact: true
    })).toBeInTheDocument();
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
    await expect(canvas.getByRole('button', {
      name: 'Add New Group'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add New Group'
    }));
  }
}`,...J.parameters?.docs?.source}}},Y=[`V2`,`V2Summary`,`V2AddGroup`]}))();export{K as V2,J as V2AddGroup,q as V2Summary,Y as __namedExportsOrder,Se as default};