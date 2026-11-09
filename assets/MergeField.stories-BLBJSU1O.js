import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-grcoP6bD.js";import{t as r}from"./react-dom-nhPjENS8.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{At as a,N as o,Yt as s,et as c,l,u}from"./Icons-DhkUpdlW.js";import{n as d,t as f}from"./Dropdown-B5JSfWs5.js";var p=e((()=>{d()})),m=e((()=>{}));function h(e){return[...new Set(e.map(e=>e.module).filter(Boolean))]}function g(e,t,n){let r=t.toLowerCase();return e.filter(e=>(!n||e.module===n)&&(e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)))}function ee(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType!==Node.TEXT_NODE)return null;let i=r.textContent.slice(0,n.startOffset).match(/#(\w*)$/);return i?{node:r,start:n.startOffset-i[0].length,end:n.startOffset,query:i[1]}:null}function te(e){let t=window.getSelection();if(!t||t.rangeCount===0)return e.getBoundingClientRect();let n=t.getRangeAt(0).cloneRange();return n.collapse(!0),n.getClientRects()[0]??e.getBoundingClientRect()}function ne(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType===Node.TEXT_NODE){if(r.textContent.slice(0,n.startOffset).trim()!==``)return null;r=r.previousSibling}else if(r.nodeType===Node.ELEMENT_NODE)r=r.childNodes[n.startOffset-1]??null;else return null;return r?.nodeType===Node.TEXT_NODE&&r.textContent.trim()===``&&(r=r.previousSibling),r?.nodeType===Node.ELEMENT_NODE&&r.classList.contains(`mergefield-token`)?r:null}function _(e){let t=document.createElement(`span`);t.className=`mergefield-token`,t.contentEditable=`false`,t.dataset.value=e.value;let n=document.createElement(`span`);n.className=`mergefield-token-label`;let r=e.label??e.value;n.textContent=e.module?`${r} (${e.module})`:r,t.addEventListener(`mouseenter`,()=>{t.title=n.scrollWidth>n.clientWidth?n.textContent:``}),t.appendChild(n);let i=document.createElement(`span`);i.className=`mergefield-token-actions`;let a=document.createElement(`span`);a.className=`mergefield-token-chevron`,a.innerHTML=O,i.appendChild(a);let o=document.createElement(`button`);return o.type=`button`,o.className=`mergefield-token-remove`,o.setAttribute(`aria-label`,`Remove ${e.value}`),o.innerHTML=k,i.appendChild(o),t.appendChild(i),t}function v(e){let t=e.nextSibling;t?.nodeType===Node.TEXT_NODE&&t.textContent.trim()===``&&t.remove(),e.remove()}function y(e,t){let n=window.getSelection(),r=document.createRange();r.setStart(e.node,e.start),r.setEnd(e.node,e.end),r.deleteContents();let i=_(t),a=document.createTextNode(`\xA0`),o=document.createDocumentFragment();o.appendChild(i),o.appendChild(a),r.insertNode(o);let s=document.createRange();s.setStart(a,a.length),s.collapse(!0),n.removeAllRanges(),n.addRange(s)}function b(e){let t=window.getSelection(),n=e.nextSibling;(!n||n.nodeType!==Node.TEXT_NODE)&&(n=document.createTextNode(``),e.after(n));let r=document.createRange();r.setStart(n,0),r.collapse(!0),t.removeAllRanges(),t.addRange(r)}function x(){let e=window.getSelection(),t=e.getRangeAt(0);t.deleteContents();let n=document.createElement(`br`);t.insertNode(n),t.setStartAfter(n),t.setEndAfter(n),e.removeAllRanges(),e.addRange(t)}function re(e){let t=``;return e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent.replace(/ /g,` `):e.nodeName===`BR`?t+=`
`:e.classList?.contains(`mergefield-token`)?t+=`#${e.dataset.value}`:t+=e.textContent}),t}function S(e,t,n){let r=new Map(n.map(e=>[e.value,e])),i=/#(\w+)/g,a=0,o,s=document.createDocumentFragment();for(;o=i.exec(t);)r.has(o[1])&&(o.index>a&&s.appendChild(document.createTextNode(t.slice(a,o.index))),s.appendChild(_(r.get(o[1]))),a=i.lastIndex);s.appendChild(document.createTextNode(t.slice(a))),e.appendChild(s)}function ie({panelRef:e,pos:t,modules:n,selectedModule:r,onModuleChange:i,options:o,query:s,onQueryChange:c,searchRef:d,onSearchKeyDown:f,showSearch:p,currentValue:m,activeIndex:h,onHover:ee,onSelect:te,onDismiss:ne}){let[_,v]=(0,E.useState)(!1),y=g(o,s,r);return(0,D.createPortal)((0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{className:`mergefield-backdrop`,"aria-hidden":`true`,onMouseDown:e=>{e.preventDefault(),ne()}}),(0,T.jsxs)(`div`,{ref:e,className:`mergefield-popup`,style:{top:t.top,left:t.left},role:`listbox`,onMouseDown:e=>{e.target.tagName!==`INPUT`&&e.preventDefault()},children:[(n.length>0||p)&&(0,T.jsxs)(`div`,{className:`mergefield-popup-head`,children:[n.length>0&&(0,T.jsxs)(`div`,{className:`mergefield-popup-module`,"data-has-search":p||void 0,children:[(0,T.jsxs)(`button`,{type:`button`,className:`mergefield-popup-module-trigger`,"aria-haspopup":`listbox`,"aria-expanded":_,onClick:()=>v(e=>!e),children:[(0,T.jsx)(`span`,{children:r}),(0,T.jsx)(u,{"aria-hidden":`true`})]}),_&&(0,T.jsx)(`div`,{className:`mergefield-popup-module-list`,role:`listbox`,"aria-label":`Module`,children:n.map(e=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":e===r,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>{i(e),v(!1)},children:[(0,T.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:e===r&&(0,T.jsx)(l,{})}),e]},e))})]}),p&&(0,T.jsxs)(`label`,{className:`mergefield-popup-search`,children:[(0,T.jsx)(a,{"aria-hidden":`true`}),(0,T.jsx)(`input`,{ref:d,type:`text`,value:s,placeholder:`Search`,"aria-label":`Search fields`,onChange:e=>c(e.target.value),onKeyDown:f})]})]}),(0,T.jsx)(`div`,{className:`mergefield-popup-list`,children:y.length===0?(0,T.jsx)(`div`,{className:`mergefield-popup-empty`,children:`No results found`}):y.map((e,t)=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":t===h,"data-active":t===h||void 0,className:`mergefield-popup-option`,onMouseEnter:_?void 0:()=>ee(t),onClick:()=>te(e),children:[p&&(0,T.jsx)(`span`,{className:`mergefield-popup-check`,"aria-hidden":`true`,children:e.value===m&&(0,T.jsx)(l,{})}),e.label]},e.value))})]})]}),document.body)}function C({inputId:e,helperId:t,placeholder:n,minHeight:r,mergeFields:i,defaultValue:a,onChange:s,disabled:l,readOnly:u,required:d,singleLine:f}){let p=(0,E.useRef)(null),m=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),D=(0,E.useRef)(null),O=h(i),[k,ae]=(0,E.useState)(()=>O.includes(`Leads`)?`Leads`:O[0]),[A,j]=(0,E.useState)(!1),[M,N]=(0,E.useState)(``),[P,F]=(0,E.useState)(`insert`),[oe,se]=(0,E.useState)(void 0),[I,L]=(0,E.useState)(0),[R,z]=(0,E.useState)({top:0,left:0}),[B,V]=(0,E.useState)(null),[H,ce]=(0,E.useState)(!!a),le=()=>{let e=p.current;return!!e&&(e.textContent.trim()!==``||!!e.querySelector(`.mergefield-token`))},U=!f&&H?Math.max(r,100):r,W=()=>{ce(le()),s?.(re(p.current))},G=()=>{w.current&&delete w.current.dataset.selected,w.current=null};(0,E.useEffect)(()=>{p.current&&a&&S(p.current,a,i)},[]);let K=e=>{e.preventDefault();let t=e.clientY,n=p.current?.offsetHeight??r,i=e=>{V(Math.max(U,n+(e.clientY-t)))},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)},q=()=>{j(!1),C.current=null,p.current?.querySelectorAll(`[data-changing]`).forEach(e=>delete e.dataset.changing)},J=()=>{let e=ee(p.current);if(!e){q();return}let t=C.current;C.current={type:`insert`,...e};let n=te(p.current);z({top:n.bottom,left:n.left}),F(`insert`),N(e.query),(!A||t?.query!==e.query)&&L(0),j(!0)},Y=e=>{C.current={type:`replace`,chip:e},e.dataset.changing=`true`;let t=e.getBoundingClientRect();z({top:t.bottom,left:t.left}),F(`replace`),se(e.dataset.value),N(``),L(0),j(!0)};(0,E.useEffect)(()=>{A&&P===`replace`&&D.current?.focus()},[A,P]);let X=()=>{G(),J(),W()},Z=()=>g(i,M,k).length,Q=e=>{let t=C.current;if(!t)return;let n=null;t.type===`replace`?(n=_(e),t.chip.replaceWith(n)):y(t,e),q(),n&&(p.current?.focus(),b(n)),W()},$=e=>{if(e.key===`ArrowDown`)return e.preventDefault(),L(e=>Math.min(e+1,Z()-1)),!0;if(e.key===`ArrowUp`)return e.preventDefault(),L(e=>Math.max(e-1,0)),!0;if(e.key===`Enter`||e.key===`Tab`){let t=g(i,M,k)[I];return t&&(e.preventDefault(),Q(t)),!0}if(e.key===`Escape`){e.preventDefault();let t=C.current?.chip;return q(),P===`replace`&&(p.current?.focus(),t?.isConnected&&b(t)),!0}return!1};return(0,E.useEffect)(()=>{if(!A)return;let e=e=>{!p.current?.contains(e.target)&&!m.current?.contains(e.target)&&q()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[A]),(0,T.jsxs)(`div`,{className:`mergefield-wrapper`,"data-required":d||void 0,"data-readonly":u||void 0,"data-singleline":f||void 0,style:f?void 0:{"--mf-min-height":`${U}px`},children:[(0,T.jsx)(`div`,{id:e,ref:p,className:`mergefield-editable`,"data-singleline":f||void 0,contentEditable:!l&&!u,suppressContentEditableWarning:!0,"data-placeholder":n,"aria-describedby":t,"aria-multiline":!f,"aria-readonly":u||void 0,role:`textbox`,style:f?void 0:{height:`${B??100}px`,minHeight:`${B??100}px`,maxHeight:`${B??100}px`,transition:`none`},onInput:X,onKeyDown:e=>{if(!(A&&$(e))){if(e.key===`Backspace`&&!A){if(w.current){e.preventDefault(),v(w.current),w.current=null,W();return}let t=ne(p.current);if(t){e.preventDefault(),t.dataset.selected=`true`,w.current=t;return}}e.key!==`Backspace`&&G(),e.key===`Enter`&&(e.preventDefault(),f||(x(),X()))}},onClick:e=>{if(u)return;G();let t=e.target.closest(`.mergefield-token-remove`);if(t){e.preventDefault(),e.stopPropagation();let n=t.closest(`.mergefield-token`);n&&v(n),q(),W();return}let n=e.target.closest(`.mergefield-token`);if(n){e.preventDefault(),e.stopPropagation(),Y(n);return}J()},onKeyUp:J}),!l&&!f&&(0,T.jsx)(`div`,{className:`mergefield-resize-icon`,"aria-hidden":`true`,onMouseDown:K,children:(0,T.jsx)(c,{})}),u&&(0,T.jsx)(`div`,{className:`mergefield-lock-badge`,"aria-hidden":`true`,children:(0,T.jsx)(o,{})}),A&&(0,T.jsx)(ie,{panelRef:m,pos:R,modules:O,selectedModule:k,onModuleChange:ae,options:i,query:M,onQueryChange:e=>{N(e),L(0)},searchRef:D,onSearchKeyDown:$,showSearch:P===`replace`,currentValue:oe,onDismiss:q,activeIndex:I,onHover:L,onSelect:Q})]})}function w({label:e,helperText:t,width:n=670,layout:r=`horizontal`,columns:i,variant:a=`multiline`,minHeight:o=70,mergeFields:s=[],hint:c=`Type # to insert merge field`,placeholder:l,defaultValue:u,value:d,onChange:f,error:p,disabled:m,readOnly:h,required:g,id:ee,style:te}){let ne=(0,E.useId)(),_=ee??ne,v=t?`${_}-helper`:void 0,y={width:typeof n==`number`?`${n}px`:n,...te},b=m?`disabled`:h?`readonly`:p?`error`:void 0,x=(0,T.jsx)(C,{inputId:_,helperId:v,placeholder:l,minHeight:o,mergeFields:s,defaultValue:u??d,onChange:f,disabled:m,readOnly:h,required:g,singleLine:a===`singleline`}),re=c&&!p&&!h?(0,T.jsx)(`span`,{className:`mergefield-hint`,children:c}):null,S=t?(0,T.jsx)(`span`,{id:v,className:`mergefield-helper-text`,children:t}):null,ie=e?(0,T.jsx)(`label`,{className:`mergefield-label`,htmlFor:_,onClick:e=>e.preventDefault(),children:e}):null;return r===`horizontal`&&e?(0,T.jsx)(`div`,{className:`mergefield-root`,style:y,"data-variant":b,children:(0,T.jsxs)(`div`,{className:`mergefield-form-row`,style:i?{gridTemplateColumns:i}:void 0,children:[ie,(0,T.jsxs)(`div`,{className:`mergefield-field-column`,children:[x,re,S]})]})}):(0,T.jsxs)(`div`,{className:`mergefield-root mergefield-vertical`,style:y,"data-variant":b,children:[ie,x,re,S]})}var T,E,D,O,k,ae=e((()=>{T=i(),E=t(n(),1),D=t(r(),1),s(),m(),O=`<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,k=`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true"><path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,w.__docgenInfo={description:"Text field that lets the user drop in a merge field by typing `#`.\n\nBoth variants render the same contentEditable chip surface — `singleline`\njust constrains it to one line (no wrapping, no resize, input-sized).\nA selected field becomes an atomic, non-editable chip inline with the text.\n\nNote: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving\na contentEditable from a controlled `value` on every render fights the\ncaret, so this mirrors how rich-text editors are typically exposed rather\nthan following the plain Input/Textarea controlled pattern. `value` is only\nread once, as a fallback initial value.",methods:[],displayName:`MergeField`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},variant:{defaultValue:{value:`'multiline'`,computed:!1},required:!1},minHeight:{defaultValue:{value:`70`,computed:!1},required:!1},mergeFields:{defaultValue:{value:`[]`,computed:!1},required:!1},hint:{defaultValue:{value:`'Type # to insert merge field'`,computed:!1},required:!1}}}})),A,j,M,N,P,F,oe,se,I,L,R,z,B,V,H,ce,le,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{A=t(n(),1),p(),ae(),j=i(),{within:M,userEvent:N,waitFor:P}=__STORYBOOK_MODULE_TEST__,F=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],oe=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),se=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),I=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),L=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),R=[...oe,...se,...I,...L],z={title:`Design System/Components/MergeField`,component:w,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}}}},B=[`Hi #FirstName, thanks for your interest in #Company.`,`Reminder: #DealName moves to #DealStage on #DealClosingDate.`,`Hi #ContactFirstName, your #AccountName account is ready for review.`,`Next step for #FirstName #LastName: confirm the #LeadSource details.`],V=[`Hi #FirstName,

Following up on your enquiry about #Company. Could we schedule a short call this week?

Regards,
#LeadOwner`,`Hello #ContactFirstName,

#DealName is now at #DealStage with an amount of #DealAmount. Let us know if anything has changed.

Thanks,
#DealOwner`,`Hi #AccountOwner,

The #AccountName account has a renewal coming up. Please review the details and share your notes before #DealClosingDate.`],H=e=>e[Math.floor(Math.random()*e.length)],ce=()=>({single:H(B),multi:H(V)}),le=()=>(0,j.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,j.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,j.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),U={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,A.useState)({single:``,multi:``}),[n,r]=(0,A.useState)(0),[i,a]=(0,A.useState)(`edit`);return(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,j.jsxs)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:[(0,j.jsx)(`button`,{type:`button`,onClick:()=>{t({single:``,multi:``}),r(e=>e+1)},style:{background:`none`,border:`none`,padding:0,color:`var(--ds-text-label, #616E88)`,textDecoration:`underline`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,cursor:`pointer`},children:`Clear`}),(0,j.jsx)(f,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:i,onChange:a,triggerAriaLabel:`Field mode`}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>{t(ce()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,j.jsx)(le,{})})]}),(0,j.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,j.jsx)(w,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:R,readOnly:i===`readonly`,defaultValue:e.single},`single-${n}`),(0,j.jsx)(w,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:R,readOnly:i===`readonly`,defaultValue:e.multi},`multi-${n}`)]})]})}},W=({title:e,children:t,controls:n})=>(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,paddingTop:`18vh`,overflow:`hidden`},children:[(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),n&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:n}),(0,j.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:e}),(0,j.jsx)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:t})]}),G={single:B[0],multi:V[0]},K={name:`Read only`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,A.useState)(`readonly`);return(0,j.jsxs)(W,{title:`Merge Field - Read Only`,controls:(0,j.jsx)(f,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:e,onChange:t,triggerAriaLabel:`Field mode`}),children:[(0,j.jsx)(w,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:R,defaultValue:G.single,readOnly:e===`readonly`}),(0,j.jsx)(w,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:R,defaultValue:G.multi,readOnly:e===`readonly`})]})}},q={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:F},play:async({canvasElement:e})=>{let t=M(e).getByRole(`textbox`);await N.click(t),await N.type(t,`#recordname`,{skipClick:!0}),await P(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await N.keyboard(`{Enter}`),await N.type(t,` added to #queu`,{skipClick:!0})}},J={name:`Multiline / Adding tag (completed)`,render:()=>(0,j.jsx)(w,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:F})},Y={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:R}},X={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:R}},Z={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:R},play:async({canvasElement:e})=>{let t=M(e).getByRole(`textbox`);await N.click(t),await N.type(t,`#`,{skipClick:!0})}},Q={name:`All States`,render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,j.jsx)(w,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:R}),(0,j.jsx)(w,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:R}),(0,j.jsx)(w,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:R}),(0,j.jsx)(w,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:R,disabled:!0})]})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    const [mode, setMode] = useState('edit');
    const clearAll = () => {
      setPrompts({
        single: '',
        multi: ''
      });
      setSeed(s => s + 1); // remounts both fields empty
    };
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

      <div style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
      <button type="button" onClick={clearAll} style={{
          background: 'none',
          border: 'none',
          padding: 0,
          color: 'var(--ds-text-label, #616E88)',
          textDecoration: 'underline',
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 'var(--ds-font-size-base)',
          cursor: 'pointer'
        }}>
        Clear
      </button>
      <Dropdown layout="vertical" width={150} options={[{
          value: 'edit',
          label: 'Default'
        }, {
          value: 'readonly',
          label: 'Read only'
        }]} value={mode} onChange={setMode} triggerAriaLabel="Field mode" />
      <button type="button" onClick={regenerate} aria-label="Generate new AI prompts" title="Generate new AI prompts" style={{
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
      </div>

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
        <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} key={\`single-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.single} />
        <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} key={\`multi-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.multi} />
      </div>
    </div>;
  }
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Read only',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [mode, setMode] = useState('readonly');
    return <SlideFrame title="Merge Field - Read Only" controls={<Dropdown layout="vertical" width={150} options={[{
      value: 'edit',
      label: 'Default'
    }, {
      value: 'readonly',
      label: 'Read only'
    }]} value={mode} onChange={setMode} triggerAriaLabel="Field mode" />}>
      <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} defaultValue={READ_ONLY_SAMPLE.single} readOnly={mode === 'readonly'} />
      <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} defaultValue={READ_ONLY_SAMPLE.multi} readOnly={mode === 'readonly'} />
    </SlideFrame>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Read-only: the same sample content in both variants, shown as plain, non-editable text.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`ReadOnly`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{Q as AllStates,U as Default,q as MultilineAddingTag,J as MultilineAddingTagComplete,Y as MultilineError,K as ReadOnly,Z as SinglelineAddingTag,X as SinglelineDefault,$ as __namedExportsOrder,z as default};