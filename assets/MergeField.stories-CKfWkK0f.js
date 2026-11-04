import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BlLz5Tk7.js";import{t as r}from"./react-dom-SH0YCvsO.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{At as a,Yt as o,et as s,l as c,u as ee}from"./Icons-DQbfBXIu.js";var l=e((()=>{}));function te(e){return[...new Set(e.map(e=>e.module).filter(Boolean))]}function u(e,t,n){let r=t.toLowerCase();return e.filter(e=>(!n||e.module===n)&&(e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)))}function d(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType!==Node.TEXT_NODE)return null;let i=r.textContent.slice(0,n.startOffset).match(/#(\w*)$/);return i?{node:r,start:n.startOffset-i[0].length,end:n.startOffset,query:i[1]}:null}function f(e){let t=window.getSelection();if(!t||t.rangeCount===0)return e.getBoundingClientRect();let n=t.getRangeAt(0).cloneRange();return n.collapse(!0),n.getClientRects()[0]??e.getBoundingClientRect()}function p(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType===Node.TEXT_NODE){if(r.textContent.slice(0,n.startOffset).trim()!==``)return null;r=r.previousSibling}else if(r.nodeType===Node.ELEMENT_NODE)r=r.childNodes[n.startOffset-1]??null;else return null;return r?.nodeType===Node.TEXT_NODE&&r.textContent.trim()===``&&(r=r.previousSibling),r?.nodeType===Node.ELEMENT_NODE&&r.classList.contains(`mergefield-token`)?r:null}function m(e){let t=document.createElement(`span`);t.className=`mergefield-token`,t.contentEditable=`false`,t.dataset.value=e.value;let n=document.createElement(`span`);n.className=`mergefield-token-label`;let r=e.label??e.value;n.textContent=e.module?`${r} (${e.module})`:r,t.appendChild(n);let i=document.createElement(`span`);i.className=`mergefield-token-actions`;let a=document.createElement(`span`);a.className=`mergefield-token-chevron`,a.innerHTML=E,i.appendChild(a);let o=document.createElement(`button`);return o.type=`button`,o.className=`mergefield-token-remove`,o.setAttribute(`aria-label`,`Remove ${e.value}`),o.innerHTML=D,i.appendChild(o),t.appendChild(i),t}function h(e){let t=e.nextSibling;t?.nodeType===Node.TEXT_NODE&&t.textContent.trim()===``&&t.remove(),e.remove()}function ne(e,t){let n=window.getSelection(),r=document.createRange();r.setStart(e.node,e.start),r.setEnd(e.node,e.end),r.deleteContents();let i=m(t),a=document.createTextNode(`\xA0`),o=document.createDocumentFragment();o.appendChild(i),o.appendChild(a),r.insertNode(o);let s=document.createRange();s.setStart(a,a.length),s.collapse(!0),n.removeAllRanges(),n.addRange(s)}function g(e){let t=window.getSelection(),n=e.nextSibling;(!n||n.nodeType!==Node.TEXT_NODE)&&(n=document.createTextNode(``),e.after(n));let r=document.createRange();r.setStart(n,0),r.collapse(!0),t.removeAllRanges(),t.addRange(r)}function _(){let e=window.getSelection(),t=e.getRangeAt(0);t.deleteContents();let n=document.createElement(`br`);t.insertNode(n),t.setStartAfter(n),t.setEndAfter(n),e.removeAllRanges(),e.addRange(t)}function v(e){let t=``;return e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent.replace(/ /g,` `):e.nodeName===`BR`?t+=`
`:e.classList?.contains(`mergefield-token`)?t+=`#${e.dataset.value}`:t+=e.textContent}),t}function y(e,t,n){let r=new Map(n.map(e=>[e.value,e])),i=/#(\w+)/g,a=0,o,s=document.createDocumentFragment();for(;o=i.exec(t);)r.has(o[1])&&(o.index>a&&s.appendChild(document.createTextNode(t.slice(a,o.index))),s.appendChild(m(r.get(o[1]))),a=i.lastIndex);s.appendChild(document.createTextNode(t.slice(a))),e.appendChild(s)}function b({panelRef:e,pos:t,modules:n,selectedModule:r,onModuleChange:i,options:o,query:s,onQueryChange:l,searchRef:te,onSearchKeyDown:d,showSearch:f,currentValue:p,activeIndex:m,onHover:h,onSelect:ne,onDismiss:g}){let[_,v]=(0,w.useState)(!1),y=u(o,s,r);return(0,T.createPortal)((0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{className:`mergefield-backdrop`,"aria-hidden":`true`,onMouseDown:e=>{e.preventDefault(),g()}}),(0,C.jsxs)(`div`,{ref:e,className:`mergefield-popup`,style:{top:t.top,left:t.left},role:`listbox`,onMouseDown:e=>{e.target.tagName!==`INPUT`&&e.preventDefault()},children:[(n.length>0||f)&&(0,C.jsxs)(`div`,{className:`mergefield-popup-head`,children:[n.length>0&&(0,C.jsxs)(`div`,{className:`mergefield-popup-module`,"data-has-search":f||void 0,children:[(0,C.jsxs)(`button`,{type:`button`,className:`mergefield-popup-module-trigger`,"aria-haspopup":`listbox`,"aria-expanded":_,onClick:()=>v(e=>!e),children:[(0,C.jsx)(`span`,{children:r}),(0,C.jsx)(ee,{"aria-hidden":`true`})]}),_&&(0,C.jsx)(`div`,{className:`mergefield-popup-module-list`,role:`listbox`,"aria-label":`Module`,children:n.map(e=>(0,C.jsxs)(`div`,{role:`option`,"aria-selected":e===r,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>{i(e),v(!1)},children:[(0,C.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:e===r&&(0,C.jsx)(c,{})}),e]},e))})]}),f&&(0,C.jsxs)(`label`,{className:`mergefield-popup-search`,children:[(0,C.jsx)(a,{"aria-hidden":`true`}),(0,C.jsx)(`input`,{ref:te,type:`text`,value:s,placeholder:`Search`,"aria-label":`Search fields`,onChange:e=>l(e.target.value),onKeyDown:d})]})]}),(0,C.jsx)(`div`,{className:`mergefield-popup-list`,children:y.length===0?(0,C.jsx)(`div`,{className:`mergefield-popup-empty`,children:`No results found`}):y.map((e,t)=>(0,C.jsxs)(`div`,{role:`option`,"aria-selected":t===m,"data-active":t===m||void 0,className:`mergefield-popup-option`,onMouseEnter:_?void 0:()=>h(t),onClick:()=>ne(e),children:[f&&(0,C.jsx)(`span`,{className:`mergefield-popup-check`,"aria-hidden":`true`,children:e.value===p&&(0,C.jsx)(c,{})}),e.label]},e.value))})]})]}),document.body)}function x({inputId:e,helperId:t,placeholder:n,minHeight:r,mergeFields:i,defaultValue:a,onChange:o,disabled:c,required:ee,singleLine:l}){let x=(0,w.useRef)(null),S=(0,w.useRef)(null),T=(0,w.useRef)(null),E=(0,w.useRef)(null),D=(0,w.useRef)(null),O=te(i),[k,A]=(0,w.useState)(()=>O.includes(`Leads`)?`Leads`:O[0]),[j,M]=(0,w.useState)(!1),[N,P]=(0,w.useState)(``),[F,I]=(0,w.useState)(`insert`),[L,R]=(0,w.useState)(void 0),[z,B]=(0,w.useState)(0),[V,H]=(0,w.useState)({top:0,left:0}),[U,W]=(0,w.useState)(null),G=()=>{E.current&&delete E.current.dataset.selected,E.current=null};(0,w.useEffect)(()=>{x.current&&a&&y(x.current,a,i)},[]);let K=e=>{e.preventDefault();let t=e.clientY,n=x.current?.offsetHeight??r,i=e=>{W(Math.max(r,n+(e.clientY-t)))},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)},q=()=>{M(!1),T.current=null,x.current?.querySelectorAll(`[data-changing]`).forEach(e=>delete e.dataset.changing)},J=()=>{let e=d(x.current);if(!e){q();return}T.current={type:`insert`,...e};let t=f(x.current);H({top:t.bottom,left:t.left}),I(`insert`),P(e.query),B(0),M(!0)},Y=e=>{T.current={type:`replace`,chip:e},e.dataset.changing=`true`;let t=e.getBoundingClientRect();H({top:t.bottom,left:t.left}),I(`replace`),R(e.dataset.value),P(``),B(0),M(!0)};(0,w.useEffect)(()=>{j&&F===`replace`&&D.current?.focus()},[j,F]);let X=()=>{G(),J(),o?.(v(x.current))},Z=()=>u(i,N,k).length,Q=e=>{let t=T.current;if(!t)return;let n=null;t.type===`replace`?(n=m(e),t.chip.replaceWith(n)):ne(t,e),q(),n&&(x.current?.focus(),g(n)),o?.(v(x.current))},$=e=>{if(e.key===`ArrowDown`)return e.preventDefault(),B(e=>Math.min(e+1,Z()-1)),!0;if(e.key===`ArrowUp`)return e.preventDefault(),B(e=>Math.max(e-1,0)),!0;if(e.key===`Enter`||e.key===`Tab`){let t=u(i,N,k)[z];return t&&(e.preventDefault(),Q(t)),!0}if(e.key===`Escape`){e.preventDefault();let t=T.current?.chip;return q(),F===`replace`&&(x.current?.focus(),t?.isConnected&&g(t)),!0}return!1};return(0,w.useEffect)(()=>{if(!j)return;let e=e=>{!x.current?.contains(e.target)&&!S.current?.contains(e.target)&&q()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[j]),(0,C.jsxs)(`div`,{className:`mergefield-wrapper`,"data-required":ee||void 0,style:l?void 0:{"--mf-min-height":`${r}px`},children:[(0,C.jsx)(`div`,{id:e,ref:x,className:`mergefield-editable`,"data-singleline":l||void 0,contentEditable:!c,suppressContentEditableWarning:!0,"data-placeholder":n,"aria-describedby":t,"aria-multiline":!l,role:`textbox`,style:!l&&U!==null?{minHeight:`${U}px`,maxHeight:`${U}px`,transition:`none`}:void 0,onInput:X,onKeyDown:e=>{if(!(j&&$(e))){if(e.key===`Backspace`&&!j){if(E.current){e.preventDefault(),h(E.current),E.current=null,o?.(v(x.current));return}let t=p(x.current);if(t){e.preventDefault(),t.dataset.selected=`true`,E.current=t;return}}e.key!==`Backspace`&&G(),e.key===`Enter`&&(e.preventDefault(),l||(_(),X()))}},onClick:e=>{G();let t=e.target.closest(`.mergefield-token-remove`);if(t){e.preventDefault(),e.stopPropagation();let n=t.closest(`.mergefield-token`);n&&h(n),q(),o?.(v(x.current));return}let n=e.target.closest(`.mergefield-token`);if(n){e.preventDefault(),e.stopPropagation(),Y(n);return}J()},onKeyUp:J}),!c&&!l&&(0,C.jsx)(`div`,{className:`mergefield-resize-icon`,"aria-hidden":`true`,onMouseDown:K,children:(0,C.jsx)(s,{})}),j&&(0,C.jsx)(b,{panelRef:S,pos:V,modules:O,selectedModule:k,onModuleChange:A,options:i,query:N,onQueryChange:e=>{P(e),B(0)},searchRef:D,onSearchKeyDown:$,showSearch:F===`replace`,currentValue:L,onDismiss:q,activeIndex:z,onHover:B,onSelect:Q})]})}function S({label:e,helperText:t,width:n=670,layout:r=`horizontal`,columns:i,variant:a=`multiline`,minHeight:o=70,mergeFields:s=[],hint:c=`Type # to insert merge field`,placeholder:ee,defaultValue:l,value:te,onChange:u,error:d,disabled:f,required:p,id:m,style:h}){let ne=(0,w.useId)(),g=m??ne,_=t?`${g}-helper`:void 0,v={width:typeof n==`number`?`${n}px`:n,...h},y=f?`disabled`:d?`error`:void 0,b=(0,C.jsx)(x,{inputId:g,helperId:_,placeholder:ee,minHeight:o,mergeFields:s,defaultValue:l??te,onChange:u,disabled:f,required:p,singleLine:a===`singleline`}),S=c&&!d?(0,C.jsx)(`span`,{className:`mergefield-hint`,children:c}):null,T=t?(0,C.jsx)(`span`,{id:_,className:`mergefield-helper-text`,children:t}):null,E=e?(0,C.jsx)(`label`,{className:`mergefield-label`,htmlFor:g,onClick:e=>e.preventDefault(),children:e}):null;return r===`horizontal`&&e?(0,C.jsx)(`div`,{className:`mergefield-root`,style:v,"data-variant":y,children:(0,C.jsxs)(`div`,{className:`mergefield-form-row`,style:i?{gridTemplateColumns:i}:void 0,children:[E,(0,C.jsxs)(`div`,{className:`mergefield-field-column`,children:[b,S,T]})]})}):(0,C.jsxs)(`div`,{className:`mergefield-root mergefield-vertical`,style:v,"data-variant":y,children:[E,b,S,T]})}var C,w,T,E,D,O=e((()=>{C=i(),w=t(n(),1),T=t(r(),1),o(),l(),E=`<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,D=`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true"><path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,S.__docgenInfo={description:"Text field that lets the user drop in a merge field by typing `#`.\n\nBoth variants render the same contentEditable chip surface — `singleline`\njust constrains it to one line (no wrapping, no resize, input-sized).\nA selected field becomes an atomic, non-editable chip inline with the text.\n\nNote: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving\na contentEditable from a controlled `value` on every render fights the\ncaret, so this mirrors how rich-text editors are typically exposed rather\nthan following the plain Input/Textarea controlled pattern. `value` is only\nread once, as a fallback initial value.",methods:[],displayName:`MergeField`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},variant:{defaultValue:{value:`'multiline'`,computed:!1},required:!1},minHeight:{defaultValue:{value:`70`,computed:!1},required:!1},mergeFields:{defaultValue:{value:`[]`,computed:!1},required:!1},hint:{defaultValue:{value:`'Type # to insert merge field'`,computed:!1},required:!1}}}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{k=t(n(),1),O(),A=i(),{within:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],F=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),I=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),L=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),R=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),z=[...F,...I,...L,...R],B={title:`Design System/Components/MergeField`,component:S,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}}}},V=[`Hi #FirstName, thanks for your interest in #Company.`,`Reminder: #DealName moves to #DealStage on #DealClosingDate.`,`Hi #ContactFirstName, your #AccountName account is ready for review.`,`Next step for #FirstName #LastName: confirm the #LeadSource details.`],H=[`Hi #FirstName,

Following up on your enquiry about #Company. Could we schedule a short call this week?

Regards,
#LeadOwner`,`Hello #ContactFirstName,

#DealName is now at #DealStage with an amount of #DealAmount. Let us know if anything has changed.

Thanks,
#DealOwner`,`Hi #AccountOwner,

The #AccountName account has a renewal coming up. Please review the details and share your notes before #DealClosingDate.`],U=e=>e[Math.floor(Math.random()*e.length)],W=()=>({single:U(V),multi:U(H)}),G=()=>(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),K={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,k.useState)({single:``,multi:``}),[n,r]=(0,k.useState)(0);return(0,A.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,A.jsx)(`button`,{type:`button`,onClick:()=>{t(W()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{position:`absolute`,top:20,right:20,zIndex:1,width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,A.jsx)(G,{})}),(0,A.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,A.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,A.jsx)(S,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:z,defaultValue:e.single},`single-${n}`),(0,A.jsx)(S,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:z,defaultValue:e.multi},`multi-${n}`)]})]})}},q={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:P},play:async({canvasElement:e})=>{let t=j(e).getByRole(`textbox`);await M.click(t),await M.type(t,`#recordname`,{skipClick:!0}),await N(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await M.keyboard(`{Enter}`),await M.type(t,` added to #queu`,{skipClick:!0})}},J={name:`Multiline / Adding tag (completed)`,render:()=>(0,A.jsx)(S,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:P})},Y={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:z}},X={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:z}},Z={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:z},play:async({canvasElement:e})=>{let t=j(e).getByRole(`textbox`);await M.click(t),await M.type(t,`#`,{skipClick:!0})}},Q={name:`All States`,render:()=>(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,A.jsx)(S,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:z}),(0,A.jsx)(S,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:z}),(0,A.jsx)(S,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:z}),(0,A.jsx)(S,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:z,disabled:!0})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{Q as AllStates,K as Default,q as MultilineAddingTag,J as MultilineAddingTagComplete,Y as MultilineError,Z as SinglelineAddingTag,X as SinglelineDefault,$ as __namedExportsOrder,B as default};