import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-TDciG1g1.js";import{t as r}from"./react-dom-DW67ciIn.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{At as a,N as o,Yt as s,et as ee,l as c,u as l}from"./Icons-jOdw8Jxw.js";import{n as u,t as te}from"./Tooltip-DRG5QPtf.js";import{n as d,t as f}from"./Dropdown-CJu8QsNI.js";var p=e((()=>{d()})),m=e((()=>{}));function ne(e){return[...new Set(e.map(e=>e.module).filter(Boolean))]}function h(e,t,n){let r=t.toLowerCase();return e.filter(e=>(!n||e.module===n)&&(e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)))}function re(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType!==Node.TEXT_NODE)return null;let i=r.textContent.slice(0,n.startOffset).match(/#(\w*)$/);return i?{node:r,start:n.startOffset-i[0].length,end:n.startOffset,query:i[1]}:null}function ie(e){let t=window.getSelection();if(!t||t.rangeCount===0)return e.getBoundingClientRect();let n=t.getRangeAt(0).cloneRange();return n.collapse(!0),n.getClientRects()[0]??e.getBoundingClientRect()}function g(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType===Node.TEXT_NODE){if(r.textContent.slice(0,n.startOffset).trim()!==``)return null;r=r.previousSibling}else if(r.nodeType===Node.ELEMENT_NODE)r=r.childNodes[n.startOffset-1]??null;else return null;return r?.nodeType===Node.TEXT_NODE&&r.textContent.trim()===``&&(r=r.previousSibling),r?.nodeType===Node.ELEMENT_NODE&&r.classList.contains(`mergefield-token`)?r:null}function _(e){let t=document.createElement(`span`);t.className=`mergefield-token`,t.contentEditable=`false`,t.dataset.value=e.value;let n=document.createElement(`span`);n.className=`mergefield-token-label`;let r=e.label??e.value;n.textContent=e.module?`${r} (${e.module})`:r,t.addEventListener(`mouseenter`,()=>{t.title=n.scrollWidth>n.clientWidth?n.textContent:``}),t.appendChild(n);let i=document.createElement(`span`);i.className=`mergefield-token-actions`;let a=document.createElement(`span`);a.className=`mergefield-token-chevron`,a.innerHTML=D,i.appendChild(a);let o=document.createElement(`button`);return o.type=`button`,o.className=`mergefield-token-remove`,o.setAttribute(`aria-label`,`Remove ${e.value}`),o.innerHTML=O,i.appendChild(o),t.appendChild(i),t}function v(e){let t=e.nextSibling;t?.nodeType===Node.TEXT_NODE&&t.textContent.trim()===``&&t.remove(),e.remove()}function ae(e,t){let n=window.getSelection(),r=document.createRange();r.setStart(e.node,e.start),r.setEnd(e.node,e.end),r.deleteContents();let i=_(t),a=document.createTextNode(`\xA0`),o=document.createDocumentFragment();o.appendChild(i),o.appendChild(a),r.insertNode(o);let s=document.createRange();s.setStart(a,a.length),s.collapse(!0),n.removeAllRanges(),n.addRange(s)}function y(e){let t=window.getSelection(),n=e.nextSibling;(!n||n.nodeType!==Node.TEXT_NODE)&&(n=document.createTextNode(``),e.after(n));let r=document.createRange();r.setStart(n,0),r.collapse(!0),t.removeAllRanges(),t.addRange(r)}function b(){let e=window.getSelection(),t=e.getRangeAt(0);t.deleteContents();let n=document.createElement(`br`);t.insertNode(n),t.setStartAfter(n),t.setEndAfter(n),e.removeAllRanges(),e.addRange(t)}function x(e){let t=``;return e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent.replace(/ /g,` `):e.nodeName===`BR`?t+=`
`:e.classList?.contains(`mergefield-token`)?t+=`#${e.dataset.value}`:t+=e.textContent}),t}function oe(e,t,n){let r=new Map(n.map(e=>[e.value,e])),i=/#(\w+)/g,a=0,o,s=document.createDocumentFragment();for(;o=i.exec(t);)r.has(o[1])&&(o.index>a&&s.appendChild(document.createTextNode(t.slice(a,o.index))),s.appendChild(_(r.get(o[1]))),a=i.lastIndex);s.appendChild(document.createTextNode(t.slice(a))),e.appendChild(s)}function se({panelRef:e,pos:t,modules:n,selectedModule:r,onModuleChange:i,options:o,query:s,onQueryChange:ee,searchRef:u,onSearchKeyDown:d,showSearch:f,currentValue:p,activeIndex:m,onHover:ne,onSelect:re,onDismiss:ie,moduleEntries:g,selectedEntry:_,entryLabel:v,onEntrySelect:ae}){let[y,b]=(0,T.useState)(!1),x=(0,T.useRef)(null),[oe,se]=(0,T.useState)(!1);(0,T.useLayoutEffect)(()=>{let e=x.current;se(!!e&&e.scrollWidth>e.clientWidth)});let S=h(o,s,r),C=(0,T.useRef)(null);return(0,T.useEffect)(()=>{C.current&&(C.current.scrollTop=0)},[r]),(0,E.createPortal)((0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{className:`mergefield-backdrop`,"aria-hidden":`true`,onMouseDown:e=>{e.preventDefault(),ie()}}),(0,w.jsxs)(`div`,{ref:e,className:`mergefield-popup`,style:{top:t.top,left:t.left},role:`listbox`,onMouseDown:e=>{e.target.tagName!==`INPUT`&&e.preventDefault()},children:[(n.length>0||f)&&(0,w.jsxs)(`div`,{className:`mergefield-popup-head`,children:[n.length>0&&(0,w.jsxs)(`div`,{className:`mergefield-popup-module`,"data-has-search":f||void 0,children:[(0,w.jsxs)(`button`,{type:`button`,className:`mergefield-popup-module-trigger`,"aria-haspopup":`listbox`,"aria-expanded":y,onClick:()=>b(e=>!e),children:[(0,w.jsx)(te,{content:v??r,disabled:!oe,variant:`black`,wrapperStyle:{display:`block`,minWidth:0,maxWidth:`100%`},children:(0,w.jsx)(`span`,{ref:x,className:`mergefield-popup-module-label`,children:v??r})}),(0,w.jsx)(l,{"aria-hidden":`true`})]}),y&&(0,w.jsx)(`div`,{className:`mergefield-popup-module-list`,role:`listbox`,"aria-label":`Module`,children:g?g.map((e,t)=>(0,w.jsxs)(`div`,{className:`mergefield-popup-module-group`,children:[t>0&&(0,w.jsx)(`div`,{className:`mergefield-popup-group-title`,children:e.module}),e.items.map(t=>(0,w.jsxs)(`div`,{role:`option`,"aria-selected":t.value===_,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>{b(!1),ae(t,e.module)},children:[(0,w.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:t.value===_&&(0,w.jsx)(c,{})}),t.label]},t.value))]},e.module)):n.map(e=>{let t=e===r;return(0,w.jsxs)(`div`,{className:`mergefield-popup-module-group`,children:[t?(0,w.jsxs)(`div`,{role:`option`,"aria-selected":`true`,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>b(!1),children:[(0,w.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:(0,w.jsx)(c,{})}),e]}):(0,w.jsx)(`div`,{className:`mergefield-popup-group-title`,children:e}),h(o,s,e).map(n=>(0,w.jsx)(`div`,{role:`option`,"aria-selected":t&&n.value===p,className:`mergefield-popup-option mergefield-popup-group-option`,onClick:()=>{b(!1),i(e)},children:n.label},`${e}:${n.value}`))]},e)})})]}),f&&(0,w.jsxs)(`label`,{className:`mergefield-popup-search`,children:[(0,w.jsx)(a,{"aria-hidden":`true`}),(0,w.jsx)(`input`,{ref:u,type:`text`,value:s,placeholder:`Search`,"aria-label":`Search fields`,onChange:e=>ee(e.target.value),onKeyDown:d})]})]}),(0,w.jsx)(`div`,{className:`mergefield-popup-list`,ref:C,children:S.length===0?(0,w.jsx)(`div`,{className:`mergefield-popup-empty`,children:`No results found`}):S.map((e,t)=>(0,w.jsxs)(`div`,{role:`option`,"aria-selected":t===m,"data-active":t===m||void 0,className:`mergefield-popup-option`,onMouseEnter:y?void 0:()=>ne(t),onClick:()=>re(e),children:[f&&(0,w.jsx)(`span`,{className:`mergefield-popup-check`,"aria-hidden":`true`,children:e.value===p&&(0,w.jsx)(c,{})}),e.label]},e.value))})]})]}),document.body)}function S({inputId:e,helperId:t,placeholder:n,minHeight:r,mergeFields:i,moduleEntries:a,defaultValue:s,onChange:c,disabled:l,readOnly:u,required:te,singleLine:d}){let f=(0,T.useRef)(null),p=(0,T.useRef)(null),m=(0,T.useRef)(null),S=(0,T.useRef)(null),C=(0,T.useRef)(null),E=a?a.map(e=>e.module):ne(i),[D,O]=(0,T.useState)(()=>E.includes(`Leads`)?`Leads`:E[0]),ce=a?.[0]?.items?.[0],[k,A]=(0,T.useState)(()=>ce?.value),j=a?a.flatMap(e=>e.items).find(e=>e.value===k)?.label:void 0,M=(e,t)=>{A(e.value),O(e.source??t)},[N,P]=(0,T.useState)(!1),[F,I]=(0,T.useState)(``),[L,R]=(0,T.useState)(`insert`),[le,ue]=(0,T.useState)(void 0),[z,B]=(0,T.useState)(0),[V,H]=(0,T.useState)({top:0,left:0}),[U,W]=(0,T.useState)(null),[de,fe]=(0,T.useState)(!!s),pe=()=>{let e=f.current;return!!e&&(e.textContent.trim()!==``||!!e.querySelector(`.mergefield-token`))},me=!d&&de?Math.max(r,100):r,G=()=>{fe(pe()),c?.(x(f.current))},K=()=>{S.current&&delete S.current.dataset.selected,S.current=null};(0,T.useEffect)(()=>{f.current&&s&&oe(f.current,s,i)},[]);let he=e=>{e.preventDefault();let t=e.clientY,n=f.current?.offsetHeight??r,i=e=>{W(Math.max(me,n+(e.clientY-t)))},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)},q=()=>{P(!1),m.current=null,f.current?.querySelectorAll(`[data-changing]`).forEach(e=>delete e.dataset.changing)},J=()=>{let e=re(f.current);if(!e){q();return}let t=m.current;m.current={type:`insert`,...e};let n=ie(f.current);H({top:n.bottom,left:n.left}),R(`insert`),I(e.query),(!N||t?.query!==e.query)&&B(0),P(!0)},Y=e=>{m.current={type:`replace`,chip:e},e.dataset.changing=`true`;let t=e.getBoundingClientRect();H({top:t.bottom,left:t.left}),R(`replace`),ue(e.dataset.value);let n=i.find(t=>t.value===e.dataset.value);if(n?.module){O(n.module);let e=a?.flatMap(e=>e.items).find(e=>e.source===n.module);e&&A(e.value)}I(``),B(0),P(!0)};(0,T.useEffect)(()=>{N&&L===`replace`&&C.current?.focus()},[N,L]);let X=()=>{K(),J(),G()},Z=()=>h(i,F,D).length,Q=e=>{let t=m.current;if(!t)return;let n=null;t.type===`replace`?(n=_(e),t.chip.replaceWith(n)):ae(t,e),q(),n&&(f.current?.focus(),y(n)),G()},$=e=>{if(e.key===`ArrowDown`)return e.preventDefault(),B(e=>Math.min(e+1,Z()-1)),!0;if(e.key===`ArrowUp`)return e.preventDefault(),B(e=>Math.max(e-1,0)),!0;if(e.key===`Enter`||e.key===`Tab`){let t=h(i,F,D)[z];return t&&(e.preventDefault(),Q(t)),!0}if(e.key===`Escape`){e.preventDefault();let t=m.current?.chip;return q(),L===`replace`&&(f.current?.focus(),t?.isConnected&&y(t)),!0}return!1};return(0,T.useEffect)(()=>{if(!N)return;let e=e=>{!f.current?.contains(e.target)&&!p.current?.contains(e.target)&&q()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[N]),(0,w.jsxs)(`div`,{className:`mergefield-wrapper`,"data-required":te||void 0,"data-readonly":u||void 0,"data-singleline":d||void 0,style:d?void 0:{"--mf-min-height":`${me}px`},children:[(0,w.jsx)(`div`,{id:e,ref:f,className:`mergefield-editable`,"data-singleline":d||void 0,contentEditable:!l&&!u,suppressContentEditableWarning:!0,"data-placeholder":n,"aria-describedby":t,"aria-multiline":!d,"aria-readonly":u||void 0,role:`textbox`,style:d?void 0:{height:`${U??100}px`,minHeight:`${U??100}px`,maxHeight:`${U??100}px`,transition:`none`},onInput:X,onKeyDown:e=>{if(!(N&&$(e))){if(e.key===`Backspace`&&!N){if(S.current){e.preventDefault(),v(S.current),S.current=null,G();return}let t=g(f.current);if(t){e.preventDefault(),t.dataset.selected=`true`,S.current=t;return}}e.key!==`Backspace`&&K(),e.key===`Enter`&&(e.preventDefault(),d||(b(),X()))}},onClick:e=>{if(u)return;K();let t=e.target.closest(`.mergefield-token-remove`);if(t){e.preventDefault(),e.stopPropagation();let n=t.closest(`.mergefield-token`);n&&v(n),q(),G();return}let n=e.target.closest(`.mergefield-token`);if(n){e.preventDefault(),e.stopPropagation(),Y(n);return}J()},onKeyUp:J}),!l&&!d&&(0,w.jsx)(`div`,{className:`mergefield-resize-icon`,"aria-hidden":`true`,onMouseDown:he,children:(0,w.jsx)(ee,{})}),u&&(0,w.jsx)(`div`,{className:`mergefield-lock-badge`,"aria-hidden":`true`,children:(0,w.jsx)(o,{})}),N&&(0,w.jsx)(se,{panelRef:p,pos:V,modules:E,moduleEntries:a,selectedEntry:k,entryLabel:j,onEntrySelect:M,selectedModule:D,onModuleChange:O,options:i,query:F,onQueryChange:e=>{I(e),B(0)},searchRef:C,onSearchKeyDown:$,showSearch:L===`replace`,currentValue:le,onDismiss:q,activeIndex:z,onHover:B,onSelect:Q})]})}function C({label:e,helperText:t,width:n=670,layout:r=`horizontal`,columns:i,variant:a=`multiline`,minHeight:o=70,mergeFields:s=[],moduleEntries:ee,hint:c=`Type # to insert merge field`,placeholder:l,defaultValue:u,value:te,onChange:d,error:f,disabled:p,readOnly:m,required:ne,id:h,style:re}){let ie=(0,T.useId)(),g=h??ie,_=t?`${g}-helper`:void 0,v={width:typeof n==`number`?`${n}px`:n,...re},ae=p?`disabled`:m?`readonly`:f?`error`:void 0,y=(0,w.jsx)(S,{inputId:g,helperId:_,placeholder:l,minHeight:o,mergeFields:s,moduleEntries:ee,defaultValue:u??te,onChange:d,disabled:p,readOnly:m,required:ne,singleLine:a===`singleline`}),b=c&&!f&&!m?(0,w.jsx)(`span`,{className:`mergefield-hint`,children:c}):null,x=t?(0,w.jsx)(`span`,{id:_,className:`mergefield-helper-text`,children:t}):null,oe=e?(0,w.jsx)(`label`,{className:`mergefield-label`,htmlFor:g,onClick:e=>e.preventDefault(),children:e}):null;return r===`horizontal`&&e?(0,w.jsx)(`div`,{className:`mergefield-root`,style:v,"data-variant":ae,children:(0,w.jsxs)(`div`,{className:`mergefield-form-row`,style:i?{gridTemplateColumns:i}:void 0,children:[oe,(0,w.jsxs)(`div`,{className:`mergefield-field-column`,children:[y,b,x]})]})}):(0,w.jsxs)(`div`,{className:`mergefield-root mergefield-vertical`,style:v,"data-variant":ae,children:[oe,y,b,x]})}var w,T,E,D,O,ce=e((()=>{w=i(),T=t(n(),1),E=t(r(),1),u(),s(),m(),D=`<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,O=`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true"><path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,C.__docgenInfo={description:"Text field that lets the user drop in a merge field by typing `#`.\n\nBoth variants render the same contentEditable chip surface — `singleline`\njust constrains it to one line (no wrapping, no resize, input-sized).\nA selected field becomes an atomic, non-editable chip inline with the text.\n\nNote: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving\na contentEditable from a controlled `value` on every render fights the\ncaret, so this mirrors how rich-text editors are typically exposed rather\nthan following the plain Input/Textarea controlled pattern. `value` is only\nread once, as a fallback initial value.",methods:[],displayName:`MergeField`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},variant:{defaultValue:{value:`'multiline'`,computed:!1},required:!1},minHeight:{defaultValue:{value:`70`,computed:!1},required:!1},mergeFields:{defaultValue:{value:`[]`,computed:!1},required:!1},hint:{defaultValue:{value:`'Type # to insert merge field'`,computed:!1},required:!1}}}})),k,A,j,M,N,P,F,I,L,R,le,ue,z,B,V,H,U,W,de,fe,pe,me,G,K,he,q,J,Y,X,Z,Q,$,ge;e((()=>{k=t(n(),1),p(),ce(),A=i(),{within:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],F=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),I=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),L=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),R=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),le=[{value:`NoteTitle`,label:`Note Title`},{value:`NoteContent`,label:`Note Content`},{value:`NoteCreatedBy`,label:`Created By`},{value:`NoteCreatedTime`,label:`Created Time`},{value:`NoteModifiedTime`,label:`Modified Time`}].map(e=>({...e,module:`Notes`})),ue=[{value:`VendorName`,label:`Vendor Name`},{value:`VendorEmail`,label:`Email`},{value:`VendorPhone`,label:`Phone`},{value:`VendorWebsite`,label:`Website`},{value:`VendorCategory`,label:`Category`}].map(e=>({...e,module:`Vendors`})),z=[{value:`LineItemProduct`,label:`Product Name`},{value:`LineItemQuantity`,label:`Quantity`},{value:`LineItemUnitPrice`,label:`Unit Price`},{value:`LineItemDiscount`,label:`Discount`},{value:`LineItemTotal`,label:`Total`}].map(e=>({...e,module:`Product Line Items`})),B=[{value:`QuotedItemProduct`,label:`Product Name`},{value:`QuotedItemQuantity`,label:`Quantity`},{value:`QuotedItemAmount`,label:`Amount`}].map(e=>({...e,module:`Quoted Items`})),V=[...F,...I,...L,...R,...le,...ue,...z,...B],H=[{module:`Deals`,items:[{value:`Deals`,label:`Deals`,source:`Deals`},{value:`Lookup1Contacts`,label:`Lookup 1 (Contacts)`,source:`Contacts`},{value:`AccountNameAccounts`,label:`Account Name (Accounts)`,source:`Accounts`},{value:`Notes`,label:`Notes`,source:`Notes`},{value:`DealProductLineItems`,label:`Product Line Items (Subform)`,source:`Product Line Items`},{value:`DealQuotedItems`,label:`Quoted Items (Subform)`,source:`Quoted Items`}]},{module:`Accounts`,items:[{value:`PrimaryAccountName`,label:`Primary Account Name`,source:`Accounts`},{value:`SecondaryAccountName`,label:`Secondary Account Name`,source:`Accounts`}]},{module:`Vendors`,items:[{value:`VendorName`,label:`Vendor Name`,source:`Vendors`}]}],U={title:`Design System/Components/MergeField`,component:C,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}}}},W=[`Hi #FirstName, thanks for your interest in #Company.`,`Reminder: #DealName moves to #DealStage on #DealClosingDate.`,`Hi #ContactFirstName, your #AccountName account is ready for review.`,`Next step for #FirstName #LastName: confirm the #LeadSource details.`],de=[`Hi #FirstName,

Following up on your enquiry about #Company. Could we schedule a short call this week?

Regards,
#LeadOwner`,`Hello #ContactFirstName,

#DealName is now at #DealStage with an amount of #DealAmount. Let us know if anything has changed.

Thanks,
#DealOwner`,`Hi #AccountOwner,

The #AccountName account has a renewal coming up. Please review the details and share your notes before #DealClosingDate.`],fe=e=>e[Math.floor(Math.random()*e.length)],pe=()=>({single:fe(W),multi:fe(de)}),me=()=>(0,A.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),G={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,k.useState)({single:``,multi:``}),[n,r]=(0,k.useState)(0),[i,a]=(0,k.useState)(`edit`);return(0,A.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,A.jsxs)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:[(0,A.jsx)(`button`,{type:`button`,onClick:()=>{t({single:``,multi:``}),r(e=>e+1)},style:{background:`none`,border:`none`,padding:0,color:`var(--ds-text-label, #616E88)`,textDecoration:`underline`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,cursor:`pointer`},children:`Clear`}),(0,A.jsx)(f,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:i,onChange:a,triggerAriaLabel:`Field mode`}),(0,A.jsx)(`button`,{type:`button`,onClick:()=>{t(pe()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,A.jsx)(me,{})})]}),(0,A.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,A.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,A.jsx)(C,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:V,moduleEntries:H,readOnly:i===`readonly`,defaultValue:e.single},`single-${n}`),(0,A.jsx)(C,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:V,moduleEntries:H,readOnly:i===`readonly`,defaultValue:e.multi},`multi-${n}`)]})]})}},K=({title:e,children:t,controls:n})=>(0,A.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,paddingTop:`18vh`,overflow:`hidden`},children:[(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,A.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),n&&(0,A.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:n}),(0,A.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:e}),(0,A.jsx)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:t})]}),he={single:W[0],multi:de[0]},q={name:`Read only`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,k.useState)(`readonly`);return(0,A.jsxs)(K,{title:`Merge Field - Read Only`,controls:(0,A.jsx)(f,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:e,onChange:t,triggerAriaLabel:`Field mode`}),children:[(0,A.jsx)(C,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:V,moduleEntries:H,defaultValue:he.single,readOnly:e===`readonly`}),(0,A.jsx)(C,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:V,moduleEntries:H,defaultValue:he.multi,readOnly:e===`readonly`})]})}},J={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:P},play:async({canvasElement:e})=>{let t=j(e).getByRole(`textbox`);await M.click(t),await M.type(t,`#recordname`,{skipClick:!0}),await N(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await M.keyboard(`{Enter}`),await M.type(t,` added to #queu`,{skipClick:!0})}},Y={name:`Multiline / Adding tag (completed)`,render:()=>(0,A.jsx)(C,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:P})},X={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:V,moduleEntries:H}},Z={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:V,moduleEntries:H}},Q={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:V,moduleEntries:H},play:async({canvasElement:e})=>{let t=j(e).getByRole(`textbox`);await M.click(t),await M.type(t,`#`,{skipClick:!0})}},$={name:`All States`,render:()=>(0,A.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,A.jsx)(C,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:V,moduleEntries:H}),(0,A.jsx)(C,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:V,moduleEntries:H}),(0,A.jsx)(C,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:V,moduleEntries:H}),(0,A.jsx)(C,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:V,moduleEntries:H,disabled:!0})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
        <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} key={\`single-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.single} />
        <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} key={\`multi-\${seed}\`} readOnly={mode === 'readonly'} defaultValue={prompts.multi} />
      </div>
    </div>;
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      <MergeField label="Singleline" layout="vertical" variant="singleline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} defaultValue={READ_ONLY_SAMPLE.single} readOnly={mode === 'readonly'} />
      <MergeField label="Multiline" layout="vertical" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} defaultValue={READ_ONLY_SAMPLE.multi} readOnly={mode === 'readonly'} />
    </SlideFrame>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Read-only: the same sample content in both variants, shown as plain, non-editable text.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Adding tag (completed)',
  render: () => <MergeField layout="vertical" width={440} defaultValue="#recordname added to #queuename Please handle with high priority #user at #dateandtime" mergeFields={NOTIFICATION_FIELDS} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Multiline / Error',
  args: {
    layout: 'vertical',
    width: 320,
    error: true,
    helperText: 'Cannot be Empty',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Default',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName}',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Singleline / Adding tag',
  args: {
    variant: 'singleline',
    layout: 'vertical',
    width: 320,
    defaultValue: '\${FirstName} ',
    mergeFields: CRM_FIELDS,
    moduleEntries: CRM_MODULE_ENTRIES
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 440
  }}>
      <MergeField layout="vertical" label="Multiline" width={440} mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Multiline — error" width={440} error helperText="Cannot be Empty" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Singleline" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} />
      <MergeField layout="vertical" label="Singleline — disabled" variant="singleline" width={440} defaultValue="\${FirstName}" mergeFields={CRM_FIELDS} moduleEntries={CRM_MODULE_ENTRIES} disabled />
    </div>
}`,...$.parameters?.docs?.source}}},ge=[`Default`,`ReadOnly`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{$ as AllStates,G as Default,J as MultilineAddingTag,Y as MultilineAddingTagComplete,X as MultilineError,q as ReadOnly,Q as SinglelineAddingTag,Z as SinglelineDefault,ge as __namedExportsOrder,U as default};