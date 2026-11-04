import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-AvBcNHw9.js";import{t as r}from"./react-dom-CC6l-Sq6.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{At as a,Yt as o,et as s,l as c,u as ee}from"./Icons-DqJ2hPsE.js";var l=e((()=>{}));function u(e){return[...new Set(e.map(e=>e.module).filter(Boolean))]}function d(e,t,n){let r=t.toLowerCase();return e.filter(e=>(!n||e.module===n)&&(e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)))}function f(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType!==Node.TEXT_NODE)return null;let i=r.textContent.slice(0,n.startOffset).match(/#(\w*)$/);return i?{node:r,start:n.startOffset-i[0].length,end:n.startOffset,query:i[1]}:null}function p(e){let t=window.getSelection();if(!t||t.rangeCount===0)return e.getBoundingClientRect();let n=t.getRangeAt(0).cloneRange();return n.collapse(!0),n.getClientRects()[0]??e.getBoundingClientRect()}function m(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType===Node.TEXT_NODE){if(r.textContent.slice(0,n.startOffset).trim()!==``)return null;r=r.previousSibling}else if(r.nodeType===Node.ELEMENT_NODE)r=r.childNodes[n.startOffset-1]??null;else return null;return r?.nodeType===Node.TEXT_NODE&&r.textContent.trim()===``&&(r=r.previousSibling),r?.nodeType===Node.ELEMENT_NODE&&r.classList.contains(`mergefield-token`)?r:null}function h(e){let t=document.createElement(`span`);t.className=`mergefield-token`,t.contentEditable=`false`,t.dataset.value=e.value;let n=document.createElement(`span`);n.className=`mergefield-token-label`;let r=e.label??e.value;n.textContent=e.module?`${r} (${e.module})`:r,t.appendChild(n);let i=document.createElement(`span`);i.className=`mergefield-token-actions`;let a=document.createElement(`span`);a.className=`mergefield-token-chevron`,a.innerHTML=O,i.appendChild(a);let o=document.createElement(`button`);return o.type=`button`,o.className=`mergefield-token-remove`,o.setAttribute(`aria-label`,`Remove ${e.value}`),o.innerHTML=k,i.appendChild(o),t.appendChild(i),t}function g(e){let t=e.nextSibling;t?.nodeType===Node.TEXT_NODE&&t.textContent.trim()===``&&t.remove(),e.remove()}function _(e,t){let n=window.getSelection(),r=document.createRange();r.setStart(e.node,e.start),r.setEnd(e.node,e.end),r.deleteContents();let i=h(t),a=document.createTextNode(`\xA0`),o=document.createDocumentFragment();o.appendChild(i),o.appendChild(a),r.insertNode(o);let s=document.createRange();s.setStart(a,a.length),s.collapse(!0),n.removeAllRanges(),n.addRange(s)}function v(e){let t=window.getSelection(),n=e.nextSibling;(!n||n.nodeType!==Node.TEXT_NODE)&&(n=document.createTextNode(``),e.after(n));let r=document.createRange();r.setStart(n,0),r.collapse(!0),t.removeAllRanges(),t.addRange(r)}function y(){let e=window.getSelection(),t=e.getRangeAt(0);t.deleteContents();let n=document.createElement(`br`);t.insertNode(n),t.setStartAfter(n),t.setEndAfter(n),e.removeAllRanges(),e.addRange(t)}function b(e){let t=``;return e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent.replace(/ /g,` `):e.nodeName===`BR`?t+=`
`:e.classList?.contains(`mergefield-token`)?t+=`#${e.dataset.value}`:t+=e.textContent}),t}function x(e,t,n){let r=new Map(n.map(e=>[e.value,e])),i=/#(\w+)/g,a=0,o,s=document.createDocumentFragment();for(;o=i.exec(t);)r.has(o[1])&&(o.index>a&&s.appendChild(document.createTextNode(t.slice(a,o.index))),s.appendChild(h(r.get(o[1]))),a=i.lastIndex);s.appendChild(document.createTextNode(t.slice(a))),e.appendChild(s)}function S({panelRef:e,pos:t,modules:n,selectedModule:r,onModuleChange:i,options:o,query:s,onQueryChange:l,searchRef:u,onSearchKeyDown:f,showSearch:p,currentValue:m,activeIndex:h,onHover:g,onSelect:_,onDismiss:v}){let[y,b]=(0,E.useState)(!1),x=d(o,s,r);return(0,D.createPortal)((0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{className:`mergefield-backdrop`,"aria-hidden":`true`,onMouseDown:e=>{e.preventDefault(),v()}}),(0,T.jsxs)(`div`,{ref:e,className:`mergefield-popup`,style:{top:t.top,left:t.left},role:`listbox`,onMouseDown:e=>{e.target.tagName!==`INPUT`&&e.preventDefault()},children:[(n.length>0||p)&&(0,T.jsxs)(`div`,{className:`mergefield-popup-head`,children:[n.length>0&&(0,T.jsxs)(`div`,{className:`mergefield-popup-module`,"data-has-search":p||void 0,children:[(0,T.jsxs)(`button`,{type:`button`,className:`mergefield-popup-module-trigger`,"aria-haspopup":`listbox`,"aria-expanded":y,onClick:()=>b(e=>!e),children:[(0,T.jsx)(`span`,{children:r}),(0,T.jsx)(ee,{"aria-hidden":`true`})]}),y&&(0,T.jsx)(`div`,{className:`mergefield-popup-module-list`,role:`listbox`,"aria-label":`Module`,children:n.map(e=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":e===r,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>{i(e),b(!1)},children:[(0,T.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:e===r&&(0,T.jsx)(c,{})}),e]},e))})]}),p&&(0,T.jsxs)(`label`,{className:`mergefield-popup-search`,children:[(0,T.jsx)(a,{"aria-hidden":`true`}),(0,T.jsx)(`input`,{ref:u,type:`text`,value:s,placeholder:`Search`,"aria-label":`Search fields`,onChange:e=>l(e.target.value),onKeyDown:f})]})]}),(0,T.jsx)(`div`,{className:`mergefield-popup-list`,children:x.length===0?(0,T.jsx)(`div`,{className:`mergefield-popup-empty`,children:`No results found`}):x.map((e,t)=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":t===h,"data-active":t===h||void 0,className:`mergefield-popup-option`,onMouseEnter:y?void 0:()=>g(t),onClick:()=>_(e),children:[p&&(0,T.jsx)(`span`,{className:`mergefield-popup-check`,"aria-hidden":`true`,children:e.value===m&&(0,T.jsx)(c,{})}),e.label]},e.value))})]})]}),document.body)}function C({inputId:e,helperId:t,placeholder:n,minHeight:r,mergeFields:i,defaultValue:a,onChange:o,disabled:c,required:ee,singleLine:l}){let C=(0,E.useRef)(null),w=(0,E.useRef)(null),D=(0,E.useRef)(null),O=(0,E.useRef)(null),k=(0,E.useRef)(null),A=u(i),[j,M]=(0,E.useState)(()=>A.includes(`Leads`)?`Leads`:A[0]),[N,P]=(0,E.useState)(!1),[F,I]=(0,E.useState)(``),[L,R]=(0,E.useState)(`insert`),[te,z]=(0,E.useState)(void 0),[B,V]=(0,E.useState)(0),[H,U]=(0,E.useState)({top:0,left:0}),[W,ne]=(0,E.useState)(null),G=()=>{O.current&&delete O.current.dataset.selected,O.current=null};(0,E.useEffect)(()=>{C.current&&a&&x(C.current,a,i)},[]);let K=e=>{e.preventDefault();let t=e.clientY,n=C.current?.offsetHeight??r,i=e=>{ne(Math.max(r,n+(e.clientY-t)))},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)},q=()=>{P(!1),D.current=null,C.current?.querySelectorAll(`[data-changing]`).forEach(e=>delete e.dataset.changing)},J=()=>{let e=f(C.current);if(!e){q();return}let t=D.current;D.current={type:`insert`,...e};let n=p(C.current);U({top:n.bottom,left:n.left}),R(`insert`),I(e.query),(!N||t?.query!==e.query)&&V(0),P(!0)},Y=e=>{D.current={type:`replace`,chip:e},e.dataset.changing=`true`;let t=e.getBoundingClientRect();U({top:t.bottom,left:t.left}),R(`replace`),z(e.dataset.value),I(``),V(0),P(!0)};(0,E.useEffect)(()=>{N&&L===`replace`&&k.current?.focus()},[N,L]);let X=()=>{G(),J(),o?.(b(C.current))},Z=()=>d(i,F,j).length,Q=e=>{let t=D.current;if(!t)return;let n=null;t.type===`replace`?(n=h(e),t.chip.replaceWith(n)):_(t,e),q(),n&&(C.current?.focus(),v(n)),o?.(b(C.current))},$=e=>{if(e.key===`ArrowDown`)return e.preventDefault(),V(e=>Math.min(e+1,Z()-1)),!0;if(e.key===`ArrowUp`)return e.preventDefault(),V(e=>Math.max(e-1,0)),!0;if(e.key===`Enter`||e.key===`Tab`){let t=d(i,F,j)[B];return t&&(e.preventDefault(),Q(t)),!0}if(e.key===`Escape`){e.preventDefault();let t=D.current?.chip;return q(),L===`replace`&&(C.current?.focus(),t?.isConnected&&v(t)),!0}return!1};return(0,E.useEffect)(()=>{if(!N)return;let e=e=>{!C.current?.contains(e.target)&&!w.current?.contains(e.target)&&q()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[N]),(0,T.jsxs)(`div`,{className:`mergefield-wrapper`,"data-required":ee||void 0,style:l?void 0:{"--mf-min-height":`${r}px`},children:[(0,T.jsx)(`div`,{id:e,ref:C,className:`mergefield-editable`,"data-singleline":l||void 0,contentEditable:!c,suppressContentEditableWarning:!0,"data-placeholder":n,"aria-describedby":t,"aria-multiline":!l,role:`textbox`,style:!l&&W!==null?{minHeight:`${W}px`,maxHeight:`${W}px`,transition:`none`}:void 0,onInput:X,onKeyDown:e=>{if(!(N&&$(e))){if(e.key===`Backspace`&&!N){if(O.current){e.preventDefault(),g(O.current),O.current=null,o?.(b(C.current));return}let t=m(C.current);if(t){e.preventDefault(),t.dataset.selected=`true`,O.current=t;return}}e.key!==`Backspace`&&G(),e.key===`Enter`&&(e.preventDefault(),l||(y(),X()))}},onClick:e=>{G();let t=e.target.closest(`.mergefield-token-remove`);if(t){e.preventDefault(),e.stopPropagation();let n=t.closest(`.mergefield-token`);n&&g(n),q(),o?.(b(C.current));return}let n=e.target.closest(`.mergefield-token`);if(n){e.preventDefault(),e.stopPropagation(),Y(n);return}J()},onKeyUp:J}),!c&&!l&&(0,T.jsx)(`div`,{className:`mergefield-resize-icon`,"aria-hidden":`true`,onMouseDown:K,children:(0,T.jsx)(s,{})}),N&&(0,T.jsx)(S,{panelRef:w,pos:H,modules:A,selectedModule:j,onModuleChange:M,options:i,query:F,onQueryChange:e=>{I(e),V(0)},searchRef:k,onSearchKeyDown:$,showSearch:L===`replace`,currentValue:te,onDismiss:q,activeIndex:B,onHover:V,onSelect:Q})]})}function w({label:e,helperText:t,width:n=670,layout:r=`horizontal`,columns:i,variant:a=`multiline`,minHeight:o=70,mergeFields:s=[],hint:c=`Type # to insert merge field`,placeholder:ee,defaultValue:l,value:u,onChange:d,error:f,disabled:p,required:m,id:h,style:g}){let _=(0,E.useId)(),v=h??_,y=t?`${v}-helper`:void 0,b={width:typeof n==`number`?`${n}px`:n,...g},x=p?`disabled`:f?`error`:void 0,S=(0,T.jsx)(C,{inputId:v,helperId:y,placeholder:ee,minHeight:o,mergeFields:s,defaultValue:l??u,onChange:d,disabled:p,required:m,singleLine:a===`singleline`}),w=c&&!f?(0,T.jsx)(`span`,{className:`mergefield-hint`,children:c}):null,D=t?(0,T.jsx)(`span`,{id:y,className:`mergefield-helper-text`,children:t}):null,O=e?(0,T.jsx)(`label`,{className:`mergefield-label`,htmlFor:v,onClick:e=>e.preventDefault(),children:e}):null;return r===`horizontal`&&e?(0,T.jsx)(`div`,{className:`mergefield-root`,style:b,"data-variant":x,children:(0,T.jsxs)(`div`,{className:`mergefield-form-row`,style:i?{gridTemplateColumns:i}:void 0,children:[O,(0,T.jsxs)(`div`,{className:`mergefield-field-column`,children:[S,w,D]})]})}):(0,T.jsxs)(`div`,{className:`mergefield-root mergefield-vertical`,style:b,"data-variant":x,children:[O,S,w,D]})}var T,E,D,O,k,A=e((()=>{T=i(),E=t(n(),1),D=t(r(),1),o(),l(),O=`<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,k=`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true"><path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,w.__docgenInfo={description:"Text field that lets the user drop in a merge field by typing `#`.\n\nBoth variants render the same contentEditable chip surface — `singleline`\njust constrains it to one line (no wrapping, no resize, input-sized).\nA selected field becomes an atomic, non-editable chip inline with the text.\n\nNote: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving\na contentEditable from a controlled `value` on every render fights the\ncaret, so this mirrors how rich-text editors are typically exposed rather\nthan following the plain Input/Textarea controlled pattern. `value` is only\nread once, as a fallback initial value.",methods:[],displayName:`MergeField`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},variant:{defaultValue:{value:`'multiline'`,computed:!1},required:!1},minHeight:{defaultValue:{value:`70`,computed:!1},required:!1},mergeFields:{defaultValue:{value:`[]`,computed:!1},required:!1},hint:{defaultValue:{value:`'Type # to insert merge field'`,computed:!1},required:!1}}}})),j,M,N,P,F,I,L,R,te,z,B,V,H,U,W,ne,G,K,q,J,Y,X,Z,Q,$;e((()=>{j=t(n(),1),A(),M=i(),{within:N,userEvent:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,I=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],L=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),R=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),te=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),z=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),B=[...L,...R,...te,...z],V={title:`Design System/Components/MergeField`,component:w,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}}}},H=[`Hi #FirstName, thanks for your interest in #Company.`,`Reminder: #DealName moves to #DealStage on #DealClosingDate.`,`Hi #ContactFirstName, your #AccountName account is ready for review.`,`Next step for #FirstName #LastName: confirm the #LeadSource details.`],U=[`Hi #FirstName,

Following up on your enquiry about #Company. Could we schedule a short call this week?

Regards,
#LeadOwner`,`Hello #ContactFirstName,

#DealName is now at #DealStage with an amount of #DealAmount. Let us know if anything has changed.

Thanks,
#DealOwner`,`Hi #AccountOwner,

The #AccountName account has a renewal coming up. Please review the details and share your notes before #DealClosingDate.`],W=e=>e[Math.floor(Math.random()*e.length)],ne=()=>({single:W(H),multi:W(U)}),G=()=>(0,M.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,M.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,M.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),K={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,j.useState)({single:``,multi:``}),[n,r]=(0,j.useState)(0);return(0,M.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,M.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,M.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,M.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>{t(ne()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{position:`absolute`,top:20,right:20,zIndex:1,width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,M.jsx)(G,{})}),(0,M.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,M.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,M.jsx)(w,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:B,defaultValue:e.single},`single-${n}`),(0,M.jsx)(w,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:B,defaultValue:e.multi},`multi-${n}`)]})]})}},q={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:I},play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`);await P.click(t),await P.type(t,`#recordname`,{skipClick:!0}),await F(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await P.keyboard(`{Enter}`),await P.type(t,` added to #queu`,{skipClick:!0})}},J={name:`Multiline / Adding tag (completed)`,render:()=>(0,M.jsx)(w,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:I})},Y={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:B}},X={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:B}},Z={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:B},play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`);await P.click(t),await P.type(t,`#`,{skipClick:!0})}},Q={name:`All States`,render:()=>(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,M.jsx)(w,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:B}),(0,M.jsx)(w,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:B}),(0,M.jsx)(w,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:B}),(0,M.jsx)(w,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:B,disabled:!0})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    // Starts empty; the refresh button fills both fields with generated prompts.
    const [prompts, setPrompts] = useState({
      single: '',
      multi: ''
    });
    const [seed, setSeed] = useState(0);
    const regenerate = () => {
      setPrompts(generatePrompts());
      setSeed(s => s + 1); // remounts both fields so they pick up the new defaults
    };
    return <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'var(--ds-bg-common-card, #fff)',
      fontFamily: 'var(--ds-font-family-base)',
      boxSizing: 'border-box',
      padding: '48px 24px',
      overflow: 'hidden',
      // Fixed, viewport-relative offset — not flex "justify-content: center" —
      // so the block's vertical position never recomputes as the Multiline
      // field grows taller (which would otherwise shift it upward and make
      // the field look like it's growing from its middle instead of its
      // bottom edge).
      paddingTop: '18vh'
    }}>
      {/* Decorative background accents — purely visual, never intercept clicks */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: -120,
        left: -100,
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'var(--ds-brand-primary, #5464F2)',
        opacity: 0.35,
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: -140,
        right: -120,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: '#1FB97A',
        opacity: 0.35,
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '30%',
        right: '12%',
        width: 220,
        height: 220,
        borderRadius: '50%',
        background: '#E8A23A',
        opacity: 0.3,
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <button type="button" onClick={regenerate} aria-label="Generate new AI prompts" title="Generate new AI prompts" style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        background: 'var(--ds-bg-common-card, #fff)',
        border: '1px solid var(--ds-components-input-default-outline)',
        borderRadius: 6,
        color: 'var(--ds-text-label, #616E88)',
        cursor: 'pointer'
      }}>
        <RefreshGlyph />
      </button>

      <h1 style={{
        position: 'relative',
        fontSize: 28,
        fontWeight: 600,
        color: 'var(--ds-text-base)',
        margin: '0 0 48px'
      }}>
        Merge Field
      </h1>
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        width: 440
      }}>
        <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} key={\`single-\${seed}\`} defaultValue={prompts.single} />
        <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} key={\`multi-\${seed}\`} defaultValue={prompts.multi} />
      </div>
    </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Adding tag',
  args: {
    layout: 'vertical',
    width: 440,
    mergeFields: NOTIFICATION_FIELDS
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#recordname', {
      skipClick: true
    });
    await waitFor(() => document.querySelector('.mergefield-popup-option[data-active]'));
    await userEvent.keyboard('{Enter}');
    await userEvent.type(field, ' added to #queu', {
      skipClick: true
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Adding tag (completed)',
  render: () => <MergeField layout="vertical" width={440} defaultValue="#recordname added to #queuename Please handle with high priority #user at #dateandtime" mergeFields={NOTIFICATION_FIELDS} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Error',
  args: {
    layout: 'vertical',
    width: 320,
    error: true,
    helperText: 'Cannot be Empty',
    mergeFields: CRM_FIELDS
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Default',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName}',
    mergeFields: CRM_FIELDS
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Adding tag',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName} ',
    mergeFields: CRM_FIELDS
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('textbox');
    await userEvent.click(field);
    await userEvent.type(field, '#', {
      skipClick: true
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 440
  }}>
      <MergeField layout="vertical" label="Multiline" width={440} mergeFields={CRM_FIELDS} />
      <MergeField layout="vertical" label="Multiline — error" width={440} error helperText="Cannot be Empty" mergeFields={CRM_FIELDS} />
      <MergeField layout="vertical" label="Singleline" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} />
      <MergeField layout="vertical" label="Singleline — disabled" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} disabled />
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{Q as AllStates,K as Default,q as MultilineAddingTag,J as MultilineAddingTagComplete,Y as MultilineError,Z as SinglelineAddingTag,X as SinglelineDefault,$ as __namedExportsOrder,V as default};