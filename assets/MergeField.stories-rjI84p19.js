import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-ChF4l4yB.js";import{t as r}from"./react-dom-CapDC85O.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{At as a,N as o,Yt as s,et as c,l,u}from"./Icons-DkC2GuxT.js";import{n as d,t as ee}from"./Tooltip-q4p0J_18.js";import{n as f,t as p}from"./Dropdown-C2C-sNds.js";var m=e((()=>{f()})),h=e((()=>{}));function te(e){return[...new Set(e.map(e=>e.module).filter(Boolean))]}function g(e,t,n){let r=t.toLowerCase();return e.filter(e=>(!n||e.module===n)&&(e.label.toLowerCase().includes(r)||e.value.toLowerCase().includes(r)))}function ne(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType!==Node.TEXT_NODE)return null;let i=r.textContent.slice(0,n.startOffset).match(/#(\w*)$/);return i?{node:r,start:n.startOffset-i[0].length,end:n.startOffset,query:i[1]}:null}function re(e){let t=window.getSelection();if(!t||t.rangeCount===0)return e.getBoundingClientRect();let n=t.getRangeAt(0).cloneRange();return n.collapse(!0),n.getClientRects()[0]??e.getBoundingClientRect()}function _(e){let t=window.getSelection();if(!t||t.rangeCount===0)return null;let n=t.getRangeAt(0);if(!n.collapsed||!e.contains(n.startContainer))return null;let r=n.startContainer;if(r.nodeType===Node.TEXT_NODE){if(r.textContent.slice(0,n.startOffset).replace(/\u200b/g,``).trim()!==``)return null;r=r.previousSibling}else if(r.nodeType===Node.ELEMENT_NODE)r=r.childNodes[n.startOffset-1]??null;else return null;return r?.nodeType===Node.TEXT_NODE&&r.textContent.replace(/\u200b/g,``).trim()===``&&(r=r.previousSibling),r?.nodeType===Node.ELEMENT_NODE&&r.classList.contains(`mergefield-token`)?r:null}function v(e){let t=document.createElement(`span`);t.className=`mergefield-token`,t.contentEditable=`false`,t.dataset.value=e.value;let n=document.createElement(`span`);n.className=`mergefield-token-label`;let r=e.label??e.value;n.textContent=e.module?`${r} (${e.module})`:r,t.dataset.label=n.textContent;let i=null;t.addEventListener(`mouseenter`,()=>{if(n.scrollWidth>n.clientWidth){i=document.createElement(`div`),i.className=`mergefield-token-tooltip`,i.textContent=n.textContent,document.body.appendChild(i);let e=t.getBoundingClientRect();i.style.top=e.bottom+4+`px`,i.style.left=e.left+`px`}}),t.addEventListener(`mouseleave`,()=>{i&&=(i.remove(),null)}),t.appendChild(n);let a=document.createElement(`span`);a.className=`mergefield-token-actions`;let o=document.createElement(`span`);o.className=`mergefield-token-chevron`,o.innerHTML=O,a.appendChild(o);let s=document.createElement(`button`);return s.type=`button`,s.className=`mergefield-token-remove`,s.setAttribute(`aria-label`,`Remove ${e.value}`),s.innerHTML=k,a.appendChild(s),t.appendChild(a),t}function y(e){let t=e.nextSibling;t?.nodeType===Node.TEXT_NODE&&t.textContent.replace(/\u200b/g,``).trim()===``&&t.remove(),e.remove()}function ie(e,t){let n=window.getSelection(),r=document.createRange();r.setStart(e.node,e.start),r.setEnd(e.node,e.end),r.deleteContents();let i=v(t),a=document.createTextNode(`​`),o=document.createDocumentFragment();o.appendChild(i),o.appendChild(a),r.insertNode(o);let s=document.createRange();s.setStart(a,a.length),s.collapse(!0),n.removeAllRanges(),n.addRange(s)}function b(e){let t=window.getSelection(),n=e.nextSibling;(!n||n.nodeType!==Node.TEXT_NODE)&&(n=document.createTextNode(``),e.after(n));let r=document.createRange();r.setStart(n,0),r.collapse(!0),t.removeAllRanges(),t.addRange(r)}function x(){let e=window.getSelection(),t=e.getRangeAt(0);t.deleteContents();let n=document.createElement(`br`);t.insertNode(n),t.setStartAfter(n),t.setEndAfter(n),e.removeAllRanges(),e.addRange(t)}function S(e){let t=``;return e.childNodes.forEach(e=>{e.nodeType===Node.TEXT_NODE?t+=e.textContent.replace(/\u200b/g,``).replace(/ /g,` `):e.nodeName===`BR`?t+=`
`:e.classList?.contains(`mergefield-token`)?t+=`#${e.dataset.value}`:t+=e.textContent}),t}function ae(e,t,n){let r=new Map(n.map(e=>[e.value,e])),i=/#(\w+)/g,a=0,o,s=document.createDocumentFragment();for(;o=i.exec(t);)r.has(o[1])&&(o.index>a&&s.appendChild(document.createTextNode(t.slice(a,o.index))),s.appendChild(v(r.get(o[1]))),a=i.lastIndex);s.appendChild(document.createTextNode(t.slice(a))),e.appendChild(s)}function oe({panelRef:e,pos:t,modules:n,selectedModule:r,onModuleChange:i,options:o,query:s,onQueryChange:c,searchRef:d,onSearchKeyDown:f,showSearch:p,currentValue:m,activeIndex:h,onHover:te,onSelect:ne,onDismiss:re,moduleEntries:_,selectedEntry:v,entryLabel:y,onEntrySelect:ie}){let[b,x]=(0,E.useState)(!1),S=(0,E.useRef)(null),[ae,oe]=(0,E.useState)(!1);(0,E.useLayoutEffect)(()=>{let e=S.current;oe(!!e&&e.scrollWidth>e.clientWidth)});let C=g(o,s,r),w=(0,E.useRef)(null);return(0,E.useEffect)(()=>{w.current&&(w.current.scrollTop=0)},[r]),(0,D.createPortal)((0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{className:`mergefield-backdrop`,"aria-hidden":`true`,onMouseDown:e=>{e.preventDefault(),re()}}),(0,T.jsxs)(`div`,{ref:e,className:`mergefield-popup`,style:{top:t.top,left:t.left},role:`listbox`,onMouseDown:e=>{e.target.tagName!==`INPUT`&&e.preventDefault()},children:[(n.length>0||p)&&(0,T.jsxs)(`div`,{className:`mergefield-popup-head`,children:[n.length>0&&(0,T.jsxs)(`div`,{className:`mergefield-popup-module`,"data-has-search":p||void 0,children:[(0,T.jsxs)(`button`,{type:`button`,className:`mergefield-popup-module-trigger`,"aria-haspopup":`listbox`,"aria-expanded":b,onClick:()=>x(e=>!e),children:[(0,T.jsx)(ee,{content:y??r,disabled:!ae,variant:`black`,wrapperStyle:{display:`block`,minWidth:0,maxWidth:`100%`},children:(0,T.jsx)(`span`,{ref:S,className:`mergefield-popup-module-label`,children:y??r})}),(0,T.jsx)(u,{"aria-hidden":`true`})]}),b&&(0,T.jsx)(`div`,{className:`mergefield-popup-module-list`,role:`listbox`,"aria-label":`Module`,children:_?_.map((e,t)=>(0,T.jsxs)(`div`,{className:`mergefield-popup-module-group`,children:[t>0&&(0,T.jsx)(`div`,{className:`mergefield-popup-group-title`,children:e.module}),e.items.map(t=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":t.value===v,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>{x(!1),ie(t,e.module)},children:[(0,T.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:t.value===v&&(0,T.jsx)(l,{})}),t.label]},t.value))]},e.module)):n.map(e=>{let t=e===r;return(0,T.jsxs)(`div`,{className:`mergefield-popup-module-group`,children:[t?(0,T.jsxs)(`div`,{role:`option`,"aria-selected":`true`,className:`mergefield-popup-option mergefield-popup-module-option`,onClick:()=>x(!1),children:[(0,T.jsx)(`span`,{className:`mergefield-popup-module-check`,"aria-hidden":`true`,children:(0,T.jsx)(l,{})}),e]}):(0,T.jsx)(`div`,{className:`mergefield-popup-group-title`,children:e}),g(o,s,e).map(n=>(0,T.jsx)(`div`,{role:`option`,"aria-selected":t&&n.value===m,className:`mergefield-popup-option mergefield-popup-group-option`,onClick:()=>{x(!1),i(e)},children:n.label},`${e}:${n.value}`))]},e)})})]}),p&&(0,T.jsxs)(`label`,{className:`mergefield-popup-search`,children:[(0,T.jsx)(a,{"aria-hidden":`true`}),(0,T.jsx)(`input`,{ref:d,type:`text`,value:s,placeholder:`Search`,"aria-label":`Search fields`,onChange:e=>c(e.target.value),onKeyDown:f})]})]}),(0,T.jsx)(`div`,{className:`mergefield-popup-list`,ref:w,children:C.length===0?(0,T.jsx)(`div`,{className:`mergefield-popup-empty`,children:`No results found`}):C.map((e,t)=>(0,T.jsxs)(`div`,{role:`option`,"aria-selected":t===h,"data-active":t===h||void 0,className:`mergefield-popup-option`,onMouseEnter:b?void 0:()=>te(t),onClick:()=>ne(e),children:[p&&(0,T.jsx)(`span`,{className:`mergefield-popup-check`,"aria-hidden":`true`,children:e.value===m&&(0,T.jsx)(l,{})}),e.label]},e.value))})]})]}),document.body)}function C({inputId:e,helperId:t,placeholder:n,minHeight:r,mergeFields:i,moduleEntries:a,defaultValue:s,onChange:l,disabled:u,readOnly:d,required:ee,singleLine:f}){let p=(0,E.useRef)(null),m=(0,E.useRef)(null),h=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null);(0,E.useRef)(null);let D=a?a.map(e=>e.module):te(i),[O,k]=(0,E.useState)(()=>D.includes(`Leads`)?`Leads`:D[0]),se=a?.[0]?.items?.[0],[A,j]=(0,E.useState)(()=>se?.value),M=a?a.flatMap(e=>e.items).find(e=>e.value===A)?.label:void 0,N=(e,t)=>{j(e.value),k(e.source??t)},[P,F]=(0,E.useState)(!1),[I,L]=(0,E.useState)(``),[R,z]=(0,E.useState)(`insert`),[ce,le]=(0,E.useState)(void 0),[B,V]=(0,E.useState)(0),[ue,H]=(0,E.useState)({top:0,left:0}),[U,de]=(0,E.useState)(null),[fe,pe]=(0,E.useState)(!!s),me=()=>{let e=p.current;return!!e&&(e.textContent.trim()!==``||!!e.querySelector(`.mergefield-token`))},he=!f&&fe?Math.max(r,100):r,W=()=>{pe(me()),l?.(S(p.current))},G=()=>{C.current&&delete C.current.dataset.selected,C.current=null};(0,E.useEffect)(()=>{p.current&&s&&ae(p.current,s,i)},[]);let ge=e=>{e.preventDefault();let t=e.clientY,n=p.current?.offsetHeight??r,i=e=>{de(Math.max(he,n+(e.clientY-t)))},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)},K=()=>{F(!1),h.current=null,p.current?.querySelectorAll(`[data-changing]`).forEach(e=>delete e.dataset.changing)},q=()=>{let e=ne(p.current);if(!e){K();return}let t=h.current;h.current={type:`insert`,...e};let n=re(p.current);H({top:n.bottom,left:n.left}),z(`insert`),L(e.query),(!P||t?.query!==e.query)&&V(0),F(!0)},J=e=>{h.current={type:`replace`,chip:e},e.dataset.changing=`true`;let t=e.getBoundingClientRect();H({top:t.bottom,left:t.left}),z(`replace`),le(e.dataset.value);let n=i.find(t=>t.value===e.dataset.value);if(n?.module){k(n.module);let e=a?.flatMap(e=>e.items).find(e=>e.source===n.module);e&&j(e.value)}L(``),V(0),F(!0)};(0,E.useEffect)(()=>{P&&R===`replace`&&w.current?.focus()},[P,R]);let Y=()=>{G(),q(),W()},X=()=>g(i,I,O).length,Z=e=>{let t=h.current;if(!t)return;let n=null;t.type===`replace`?(n=v(e),t.chip.replaceWith(n)):ie(t,e),K(),n&&(p.current?.focus(),b(n)),W()},Q=e=>{if(e.key===`ArrowDown`)return e.preventDefault(),V(e=>Math.min(e+1,X()-1)),!0;if(e.key===`ArrowUp`)return e.preventDefault(),V(e=>Math.max(e-1,0)),!0;if(e.key===`Enter`||e.key===`Tab`){let t=g(i,I,O)[B];return t&&(e.preventDefault(),Z(t)),!0}if(e.key===`Escape`){e.preventDefault();let t=h.current?.chip;return K(),R===`replace`&&(p.current?.focus(),t?.isConnected&&b(t)),!0}return!1};return(0,E.useEffect)(()=>{if(!P)return;let e=e=>{!p.current?.contains(e.target)&&!m.current?.contains(e.target)&&K()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[P]),(0,T.jsxs)(`div`,{className:`mergefield-wrapper`,"data-required":ee||void 0,"data-readonly":d||void 0,"data-singleline":f||void 0,style:f?void 0:{"--mf-min-height":`${he}px`},children:[(0,T.jsx)(`div`,{id:e,ref:p,className:`mergefield-editable`,"data-singleline":f||void 0,contentEditable:!u&&!d,suppressContentEditableWarning:!0,"data-placeholder":n,"aria-describedby":t,"aria-multiline":!f,"aria-readonly":d||void 0,role:`textbox`,style:f?void 0:{height:`${U??100}px`,minHeight:`${U??100}px`,maxHeight:`${U??100}px`,transition:`none`},onInput:Y,onKeyDown:e=>{if(!(P&&Q(e))){if(e.key===`Backspace`&&!P){if(C.current){e.preventDefault(),y(C.current),C.current=null,W();return}let t=_(p.current);if(t){e.preventDefault(),t.dataset.selected=`true`,C.current=t;return}}e.key!==`Backspace`&&G(),e.key===`Enter`&&(e.preventDefault(),f||(x(),Y()))}},onClick:e=>{if(d)return;G();let t=e.target.closest(`.mergefield-token-remove`);if(t){e.preventDefault(),e.stopPropagation();let n=t.closest(`.mergefield-token`);n&&y(n),K(),W();return}let n=e.target.closest(`.mergefield-token`);if(n){e.preventDefault(),e.stopPropagation(),J(n);return}q()},onKeyUp:q}),!u&&!f&&(0,T.jsx)(`div`,{className:`mergefield-resize-icon`,"aria-hidden":`true`,onMouseDown:ge,children:(0,T.jsx)(c,{})}),d&&(0,T.jsx)(`div`,{className:`mergefield-lock-badge`,"aria-hidden":`true`,children:(0,T.jsx)(o,{})}),P&&(0,T.jsx)(oe,{panelRef:m,pos:ue,modules:D,moduleEntries:a,selectedEntry:A,entryLabel:M,onEntrySelect:N,selectedModule:O,onModuleChange:k,options:i,query:I,onQueryChange:e=>{L(e),V(0)},searchRef:w,onSearchKeyDown:Q,showSearch:R===`replace`,currentValue:ce,onDismiss:K,activeIndex:B,onHover:V,onSelect:Z})]})}function w({label:e,helperText:t,width:n=670,layout:r=`horizontal`,columns:i,variant:a=`multiline`,minHeight:o=70,mergeFields:s=[],moduleEntries:c,hint:l=`Type # to insert merge field`,placeholder:u,defaultValue:d,value:ee,onChange:f,error:p,disabled:m,readOnly:h,required:te,id:g,style:ne}){let re=(0,E.useId)(),_=g??re,v=t?`${_}-helper`:void 0,y={width:typeof n==`number`?`${n}px`:n,...ne},ie=m?`disabled`:h?`readonly`:p?`error`:void 0,b=(0,T.jsx)(C,{inputId:_,helperId:v,placeholder:u,minHeight:o,mergeFields:s,moduleEntries:c,defaultValue:d??ee,onChange:f,disabled:m,readOnly:h,required:te,singleLine:a===`singleline`}),x=l&&!p&&!h?(0,T.jsx)(`span`,{className:`mergefield-hint`,children:l}):null,S=t?(0,T.jsx)(`span`,{id:v,className:`mergefield-helper-text`,children:t}):null,ae=e?(0,T.jsx)(`label`,{className:`mergefield-label`,htmlFor:_,onClick:e=>e.preventDefault(),children:e}):null;return r===`horizontal`&&e?(0,T.jsx)(`div`,{className:`mergefield-root`,style:y,"data-variant":ie,children:(0,T.jsxs)(`div`,{className:`mergefield-form-row`,style:i?{gridTemplateColumns:i}:void 0,children:[ae,(0,T.jsxs)(`div`,{className:`mergefield-field-column`,children:[b,x,S]})]})}):(0,T.jsxs)(`div`,{className:`mergefield-root mergefield-vertical`,style:y,"data-variant":ie,children:[ae,b,x,S]})}var T,E,D,O,k,se=e((()=>{T=i(),E=t(n(),1),D=t(r(),1),d(),s(),h(),O=`<svg width="8" height="4" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,k=`<svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true"><path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,w.__docgenInfo={description:"Text field that lets the user drop in a merge field by typing `#`.\n\nBoth variants render the same contentEditable chip surface — `singleline`\njust constrains it to one line (no wrapping, no resize, input-sized).\nA selected field becomes an atomic, non-editable chip inline with the text.\n\nNote: the surface is uncontrolled (`defaultValue` + `onChange`) — re-driving\na contentEditable from a controlled `value` on every render fights the\ncaret, so this mirrors how rich-text editors are typically exposed rather\nthan following the plain Input/Textarea controlled pattern. `value` is only\nread once, as a fallback initial value.",methods:[],displayName:`MergeField`,props:{width:{defaultValue:{value:`670`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},variant:{defaultValue:{value:`'multiline'`,computed:!1},required:!1},minHeight:{defaultValue:{value:`70`,computed:!1},required:!1},mergeFields:{defaultValue:{value:`[]`,computed:!1},required:!1},hint:{defaultValue:{value:`'Type # to insert merge field'`,computed:!1},required:!1}}}})),A,j,M,N,P,F,I,L,R,z,ce,le,B,V,ue,H,U,de,fe,pe,me,he,W,G,ge,K,q,J,Y,X,Z,Q,$,_e;e((()=>{A=t(n(),1),m(),se(),j=i(),{expect:M,within:N,userEvent:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,I=[{value:`recordname`,label:`Record Name`},{value:`queuename`,label:`Queue Name`},{value:`user`,label:`User`},{value:`dateandtime`,label:`Date & Time`}],L=[{value:`FirstName`,label:`First Name`},{value:`LastName`,label:`Last Name`},{value:`Email`,label:`Email`},{value:`SecondaryEmail`,label:`Secondary Email`},{value:`Phone`,label:`Phone`},{value:`Mobile`,label:`Mobile`},{value:`Fax`,label:`Fax`},{value:`Company`,label:`Company`},{value:`Title`,label:`Title`},{value:`LeadSource`,label:`Lead Source`},{value:`LeadStatus`,label:`Lead Status`},{value:`Industry`,label:`Industry`},{value:`AnnualRevenue`,label:`Annual Revenue`},{value:`NumberOfEmployees`,label:`No. of Employees`},{value:`Rating`,label:`Rating`},{value:`LeadOwner`,label:`Lead Owner`},{value:`Website`,label:`Website`},{value:`City`,label:`City`},{value:`State`,label:`State`},{value:`ZipCode`,label:`Zip Code`}].map(e=>({...e,module:`Leads`})),R=[{value:`AccountName`,label:`Account Name`},{value:`AccountOwner`,label:`Account Owner`},{value:`AccountNumber`,label:`Account Number`},{value:`AccountSite`,label:`Account Site`},{value:`ParentAccount`,label:`Parent Account`},{value:`AccountWebsite`,label:`Website`},{value:`AccountIndustry`,label:`Industry`},{value:`Employees`,label:`Employees`},{value:`AccountAnnualRevenue`,label:`Annual Revenue`},{value:`AccountRating`,label:`Rating`},{value:`Ownership`,label:`Ownership`},{value:`AccountPhone`,label:`Phone`},{value:`AccountFax`,label:`Fax`},{value:`BillingStreet`,label:`Billing Street`},{value:`BillingCity`,label:`Billing City`},{value:`BillingState`,label:`Billing State`},{value:`BillingCode`,label:`Billing Code`},{value:`BillingCountry`,label:`Billing Country`},{value:`ShippingCity`,label:`Shipping City`},{value:`AccountDescription`,label:`Description`}].map(e=>({...e,module:`Accounts`})),z=[{value:`ContactFirstName`,label:`First Name`},{value:`ContactLastName`,label:`Last Name`},{value:`ContactEmail`,label:`Email`},{value:`ContactSecondaryEmail`,label:`Secondary Email`},{value:`ContactPhone`,label:`Phone`},{value:`ContactMobile`,label:`Mobile`},{value:`ContactFax`,label:`Fax`},{value:`ContactTitle`,label:`Title`},{value:`ContactDepartment`,label:`Department`},{value:`ContactLeadSource`,label:`Lead Source`},{value:`ContactAccountName`,label:`Account Name`},{value:`ContactVendorName`,label:`Vendor Name`},{value:`ContactEmailOptOut`,label:`Email Opt Out`},{value:`ContactReportingTo`,label:`Reporting To`},{value:`ContactDateOfBirth`,label:`Date of Birth`},{value:`ContactAssistant`,label:`Assistant`},{value:`ContactAsstPhone`,label:`Asst Phone`},{value:`ContactMailingStreet`,label:`Mailing Street`},{value:`ContactMailingCity`,label:`Mailing City`},{value:`ContactMailingState`,label:`Mailing State`}].map(e=>({...e,module:`Contacts`})),ce=[{value:`DealName`,label:`Deal Name`},{value:`DealOwner`,label:`Deal Owner`},{value:`DealAmount`,label:`Amount`},{value:`DealStage`,label:`Stage`},{value:`DealProbability`,label:`Probability`},{value:`DealClosingDate`,label:`Closing Date`},{value:`DealType`,label:`Type`},{value:`DealNextStep`,label:`Next Step`},{value:`DealLeadSource`,label:`Lead Source`},{value:`DealContactName`,label:`Contact Name`},{value:`DealAccountName`,label:`Account Name`},{value:`DealCampaignSource`,label:`Campaign Source`},{value:`DealExpectedRevenue`,label:`Expected Revenue`},{value:`DealReasonForLoss`,label:`Reason for Loss`},{value:`DealOverallSalesDuration`,label:`Overall Sales Duration`},{value:`DealLastActivityTime`,label:`Last Activity Time`},{value:`DealDescription`,label:`Description`},{value:`DealCreatedTime`,label:`Created Time`},{value:`DealModifiedTime`,label:`Modified Time`},{value:`DealTag`,label:`Tag`}].map(e=>({...e,module:`Deals`})),le=[{value:`NoteTitle`,label:`Note Title`},{value:`NoteContent`,label:`Note Content`},{value:`NoteCreatedBy`,label:`Created By`},{value:`NoteCreatedTime`,label:`Created Time`},{value:`NoteModifiedTime`,label:`Modified Time`}].map(e=>({...e,module:`Notes`})),B=[{value:`VendorName`,label:`Vendor Name`},{value:`VendorEmail`,label:`Email`},{value:`VendorPhone`,label:`Phone`},{value:`VendorWebsite`,label:`Website`},{value:`VendorCategory`,label:`Category`}].map(e=>({...e,module:`Vendors`})),V=[{value:`LineItemProduct`,label:`Product Name`},{value:`LineItemQuantity`,label:`Quantity`},{value:`LineItemUnitPrice`,label:`Unit Price`},{value:`LineItemDiscount`,label:`Discount`},{value:`LineItemTotal`,label:`Total`}].map(e=>({...e,module:`Product Line Items`})),ue=[{value:`QuotedItemProduct`,label:`Product Name`},{value:`QuotedItemQuantity`,label:`Quantity`},{value:`QuotedItemAmount`,label:`Amount`}].map(e=>({...e,module:`Quoted Items`})),H=[...L,...R,...z,...ce,...le,...B,...V,...ue],U=[{module:`Deals`,items:[{value:`Deals`,label:`Deals`,source:`Deals`},{value:`Lookup1Contacts`,label:`Lookup 1 (Contacts)`,source:`Contacts`},{value:`AccountNameAccounts`,label:`Account Name (Accounts)`,source:`Accounts`},{value:`DealProductLineItems`,label:`Product Line Items (Subform)`,source:`Product Line Items`},{value:`DealQuotedItems`,label:`Quoted Items (Subform)`,source:`Quoted Items`}]},{module:`Related Modules`,items:[{value:`Notes`,label:`Notes`,source:`Notes`},{value:`PrimaryAccountName`,label:`Primary Account Name (Accounts)`,source:`Accounts`},{value:`SecondaryAccountName`,label:`Secondary Account Name (Accounts)`,source:`Accounts`},{value:`VendorName`,label:`Vendor Name (Vendors)`,source:`Vendors`}]}],de={title:`Design System/Components/MergeField`,component:w,parameters:{layout:`padded`,docs:{description:{component:'Text field that inserts a merge token when the user types "#". Multiline renders the selected field as an inline chip inside a contentEditable surface; singleline inserts it as literal `${value}` text, matching the existing merge-code syntax.'}}},argTypes:{variant:{control:`radio`,options:[`multiline`,`singleline`],table:{category:`Layout`,defaultValue:{summary:`multiline`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}}}},fe=[`Welcome to #Company, #FirstName!`,`Your #DealName - Action Required by #DealClosingDate`,`Account Update: #AccountName - #AccountOwner`,`Follow-up: #FirstName #LastName from #LeadSource`],pe=[`Generate a personalized email for #FirstName from #Company.

Context: Lead source is #LeadSource.

Tone: Professional and friendly.

Call to action: Schedule a demo call.`,`Create an AI-generated summary for #DealName.

Deal details:
- Stage: #DealStage
- Amount: #DealAmount
- Owner: #DealOwner

Highlight key risks and next steps.`,`Draft a follow-up message for #ContactFirstName.

Account: #AccountName (#AccountOwner)

Focus on recent activity and upcoming renewal. Keep it concise and actionable.`],me=e=>e[Math.floor(Math.random()*e.length)],he=()=>({single:me(fe),multi:me(pe)}),W=()=>(0,j.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,j.jsx)(`path`,{d:`M13.5 8a5.5 5.5 0 1 1-1.6-3.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,j.jsx)(`path`,{d:`M12.5 1.8v2.6H9.9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),G={name:`Default`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,A.useState)({single:``,multi:``}),[n,r]=(0,A.useState)(0),[i,a]=(0,A.useState)(`edit`);return(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,overflow:`hidden`,paddingTop:`18vh`},children:[(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),(0,j.jsxs)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:[(0,j.jsx)(`button`,{type:`button`,onClick:()=>{t({single:``,multi:``}),r(e=>e+1)},style:{background:`none`,border:`none`,padding:0,color:`var(--ds-text-label, #616E88)`,textDecoration:`underline`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,cursor:`pointer`},children:`Clear`}),(0,j.jsx)(p,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:i,onChange:a,triggerAriaLabel:`Field mode`}),(0,j.jsx)(`button`,{type:`button`,onClick:()=>{t(he()),r(e=>e+1)},"aria-label":`Generate new AI prompts`,title:`Generate new AI prompts`,style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0,background:`var(--ds-bg-common-card, #fff)`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,color:`var(--ds-text-label, #616E88)`,cursor:`pointer`},children:(0,j.jsx)(W,{})})]}),(0,j.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:`Merge Field`}),(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:[(0,j.jsx)(w,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:H,moduleEntries:U,readOnly:i===`readonly`,defaultValue:e.single},`single-${n}`),(0,j.jsx)(w,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:H,moduleEntries:U,readOnly:i===`readonly`,defaultValue:e.multi},`multi-${n}`)]})]})}},ge=({title:e,children:t,controls:n})=>(0,j.jsxs)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,alignItems:`center`,minHeight:`100vh`,background:`var(--ds-bg-common-card, #fff)`,fontFamily:`var(--ds-font-family-base)`,boxSizing:`border-box`,padding:`48px 24px`,paddingTop:`18vh`,overflow:`hidden`},children:[(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:-120,left:-100,width:360,height:360,borderRadius:`50%`,background:`var(--ds-brand-primary, #5464F2)`,opacity:.35,filter:`blur(70px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,bottom:-140,right:-120,width:420,height:420,borderRadius:`50%`,background:`#1FB97A`,opacity:.35,filter:`blur(80px)`,pointerEvents:`none`}}),(0,j.jsx)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,top:`30%`,right:`12%`,width:220,height:220,borderRadius:`50%`,background:`#E8A23A`,opacity:.3,filter:`blur(60px)`,pointerEvents:`none`}}),n&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:20,right:20,zIndex:1,display:`flex`,alignItems:`center`,gap:8},children:n}),(0,j.jsx)(`h1`,{style:{position:`relative`,fontSize:28,fontWeight:600,color:`var(--ds-text-base)`,margin:`0 0 48px`},children:e}),(0,j.jsx)(`div`,{style:{position:`relative`,display:`flex`,flexDirection:`column`,gap:32,width:440},children:t})]}),K={single:fe[0],multi:pe[0]},q={name:`Read only`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=(0,A.useState)(`readonly`);return(0,j.jsxs)(ge,{title:`Merge Field - Read Only`,controls:(0,j.jsx)(p,{layout:`vertical`,width:150,options:[{value:`edit`,label:`Default`},{value:`readonly`,label:`Read only`}],value:e,onChange:t,triggerAriaLabel:`Field mode`}),children:[(0,j.jsx)(w,{label:`Singleline`,layout:`vertical`,variant:`singleline`,width:440,mergeFields:H,moduleEntries:U,defaultValue:K.single,readOnly:e===`readonly`}),(0,j.jsx)(w,{label:`Multiline`,layout:`vertical`,width:440,mergeFields:H,moduleEntries:U,defaultValue:K.multi,readOnly:e===`readonly`})]})}},J={name:`Multiline / Adding tag`,args:{layout:`vertical`,width:440,mergeFields:I},play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`);await P.click(t),await P.type(t,`#recordname`,{skipClick:!0}),await F(()=>document.querySelector(`.mergefield-popup-option[data-active]`)),await P.keyboard(`{Enter}`),await P.type(t,` added to #queu`,{skipClick:!0})}},Y={name:`Multiline / Adding tag (completed)`,render:()=>(0,j.jsx)(w,{layout:`vertical`,width:440,defaultValue:`#recordname added to #queuename Please handle with high priority #user at #dateandtime`,mergeFields:I})},X={name:`Multiline / Error`,args:{layout:`vertical`,width:320,error:!0,helperText:`Cannot be Empty`,mergeFields:H,moduleEntries:U}},Z={name:`Singleline / Default`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName}",mergeFields:H,moduleEntries:U}},Q={name:`Singleline / Adding tag`,args:{variant:`singleline`,layout:`vertical`,width:320,defaultValue:"${FirstName} ",mergeFields:H,moduleEntries:U},play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`);await P.click(t),await P.type(t,`#`,{skipClick:!0});let n=N(e.ownerDocument.body);for(let[t,r]of[[`Primary Account Name (Accounts)`,`Account Owner`],[`Notes`,`Note Title`],[`Secondary Account Name (Accounts)`,`Account Owner`],[`Vendor Name (Vendors)`,`Email`]]){await P.click(n.getByRole(`button`,{name:/Deals|Notes|Primary Account Name|Secondary Account Name/}));let i=n.getByRole(`listbox`,{name:`Module`}),a=N(i),o=a.getByRole(`option`,{name:`Secondary Account Name (Accounts)`,exact:!0}),s=e.ownerDocument.createRange();s.selectNodeContents(o.lastChild),await M(s.getClientRects()).toHaveLength(1),await M(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth);let c=a.getByText(`Related Modules`,{exact:!0});await M(c).toBeVisible();let l=a.getByRole(`option`,{name:`Notes`,exact:!0}),u=a.getByRole(`option`,{name:`Primary Account Name (Accounts)`,exact:!0});await M(a.getAllByRole(`option`)[5]).toBe(l),await M(c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await M(l.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await M(a.queryByText(`Accounts`,{exact:!0})).not.toBeInTheDocument(),await M(a.queryByText(`Vendors`,{exact:!0})).not.toBeInTheDocument(),await P.click(a.getByRole(`option`,{name:t,exact:!0})),await M(n.getByRole(`button`,{name:t,exact:!0})).toBeVisible(),await M(n.getByRole(`option`,{name:r,exact:!0})).toBeVisible()}}},$={name:`All States`,render:()=>(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:440},children:[(0,j.jsx)(w,{layout:`vertical`,label:`Multiline`,width:440,mergeFields:H,moduleEntries:U}),(0,j.jsx)(w,{layout:`vertical`,label:`Multiline — error`,width:440,error:!0,helperText:`Cannot be Empty`,mergeFields:H,moduleEntries:U}),(0,j.jsx)(w,{layout:`vertical`,label:`Singleline`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:H,moduleEntries:U}),(0,j.jsx)(w,{layout:`vertical`,label:`Singleline — disabled`,variant:`singleline`,width:440,defaultValue:"${FirstName}",mergeFields:H,moduleEntries:U,disabled:!0})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    const page = within(canvasElement.ownerDocument.body);
    for (const [label, expectedField] of [['Primary Account Name (Accounts)', 'Account Owner'], ['Notes', 'Note Title'], ['Secondary Account Name (Accounts)', 'Account Owner'], ['Vendor Name (Vendors)', 'Email']]) {
      await userEvent.click(page.getByRole('button', {
        name: /Deals|Notes|Primary Account Name|Secondary Account Name/
      }));
      const moduleList = page.getByRole('listbox', {
        name: 'Module'
      });
      const modules = within(moduleList);
      // The filter menu fits the longest label, rather than wrapping at 260px.
      const longestOption = modules.getByRole('option', {
        name: 'Secondary Account Name (Accounts)',
        exact: true
      });
      const labelRange = canvasElement.ownerDocument.createRange();
      labelRange.selectNodeContents(longestOption.lastChild!);
      await expect(labelRange.getClientRects()).toHaveLength(1);
      await expect(moduleList.scrollWidth).toBeLessThanOrEqual(moduleList.clientWidth);
      const relatedHeader = modules.getByText('Related Modules', {
        exact: true
      });
      await expect(relatedHeader).toBeVisible();
      const notesOption = modules.getByRole('option', {
        name: 'Notes',
        exact: true
      });
      const primaryAccountOption = modules.getByRole('option', {
        name: 'Primary Account Name (Accounts)',
        exact: true
      });
      await expect(modules.getAllByRole('option')[5]).toBe(notesOption);
      await expect(relatedHeader.compareDocumentPosition(notesOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(notesOption.compareDocumentPosition(primaryAccountOption) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      await expect(modules.queryByText('Accounts', {
        exact: true
      })).not.toBeInTheDocument();
      await expect(modules.queryByText('Vendors', {
        exact: true
      })).not.toBeInTheDocument();
      await userEvent.click(modules.getByRole('option', {
        name: label,
        exact: true
      }));
      await expect(page.getByRole('button', {
        name: label,
        exact: true
      })).toBeVisible();
      await expect(page.getByRole('option', {
        name: expectedField,
        exact: true
      })).toBeVisible();
    }
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
}`,...$.parameters?.docs?.source}}},_e=[`Default`,`ReadOnly`,`MultilineAddingTag`,`MultilineAddingTagComplete`,`MultilineError`,`SinglelineDefault`,`SinglelineAddingTag`,`AllStates`]}))();export{$ as AllStates,G as Default,J as MultilineAddingTag,Y as MultilineAddingTagComplete,X as MultilineError,q as ReadOnly,Q as SinglelineAddingTag,Z as SinglelineDefault,_e as __namedExportsOrder,de as default};