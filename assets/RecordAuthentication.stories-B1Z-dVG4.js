import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-B-NiXLN4.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-C9Kc3alk.js";import{n as o,t as s}from"./Checkbox-Dk8yLntf.js";import{n as c,t as l}from"./Dropdown-DyaA627x.js";import{n as u,t as d}from"./Input-BnxYRZTK.js";import{n as f,t as p}from"./MessageBox--vHZRBMV.js";import{n as m,t as h}from"./Icon-v8aS7LO_.js";import{n as g,t as _}from"./MessageInfo-BQUrdfOl.js";import{n as v,t as y}from"./Modal-CSDS-ywJ.js";import{n as b,t as x}from"./NextGenTopBand-YFrNVbsT.js";import{n as S,t as ee}from"./Radio-Cv-FWZv0.js";import{n as C,t as w}from"./RichTextEditor-D0k6r9K_.js";import{n as T,t as te}from"./Tabs-D-bdpeZ-.js";import{n as ne,t as re}from"./Tags-C_gVjtUT.js";import{n as ie,t as ae}from"./Textarea-DvNmJyr2.js";import{n as oe,t as se}from"./VerticalTabs-hzPSOngO.js";import{n as ce,t as le}from"./WMSBar-CrxzPl6v.js";function E(e){return{fields:(e===`phone`?D:O).slice(0,2),restrict:!1,validity:e===`phone`?`4`:`7`,digits:`6`,carrier:``,template:de,resendMode:`same`,resendAttempts:e===`phone`?`5`:`3`,resetAfter:e===`phone`?`30`:`24`,validationAttempts:`5`,validationReset:`1`,emailTemplate:`verification`,verificationPage:`standard`}}function ue(e){return e.template.replaceAll("${OTP}",e.digits===`6`?`482913`:`4829`).replaceAll("${Valid For}",`${e.validity} minutes`).replaceAll(`<CRM User>`,`CRM User`).replaceAll("${Organization.Organization Name}",`Zoho`)}var D,O,de,k,A,fe,pe,me=e((()=>{D=[{value:`mobile`,label:`Mobile`},{value:`secondary-phone`,label:`Secondary Phone`},{value:`phone`,label:`Phone`}],O=[{value:`email`,label:`Email ID`},{value:`secondary-email`,label:`Secondary Email`}],de="Your verification OTP is ${OTP}. Valid for ${Valid For}.\nShare with <CRM User> only. —\n${Organization.Organization Name}",k=[{value:`verification`,label:`Verification Link Email`},{value:`contact`,label:`Contact Verification Email`}],A=[{value:`standard`,label:`Verification Page`},{value:`branded`,label:`Branded Verification Page`}],fe=[{id:`general`,label:`General`,children:[{id:`personal`,label:`Personal Settings`},{id:`company`,label:`Company Details`},{id:`calendar`,label:`Calendar Booking`},{id:`motivator`,label:`Motivator`}]},{id:`security`,label:`Security Control`,children:[{id:`permissions`,label:`Permissions`}]},{id:`channels`,label:`Channels`,children:[{id:`email-channel`,label:`Email`}]},{id:`customization`,label:`Customization`,children:[{id:`modules`,label:`Modules and Fields`},{id:`templates`,label:`Templates`},{id:`pipelines`,label:`Pipelines`},{id:`wizards`,label:`Wizards`},{id:`home`,label:`Customise Home page`},{id:`translations`,label:`Translations`},{id:`copy`,label:`Copy Customisation`},{id:`canvas`,label:`Canvas`}]},{id:`automation`,label:`Automation`,children:[{id:`workflow`,label:`Workflow Rules`},{id:`schedules`,label:`Schedules`},{id:`action`,label:`Action`},{id:`assignment`,label:`Assignment`},{id:`escalation`,label:`Case Escalation Rules`}]}],pe=[`Layouts`,`Layout Rules`,`Validation Rules`,`Fields`,`Record Locking Configuration`,`Record Authentication`,`Links`,`Buttons`,`Summary`]})),he=e((()=>{}));function j(e,t=`7`){return{sender:`owner`,subject:G,body:e===`email`?`Hello \${Contacts.FullName},\n\nPlease verify your email address with \${Organization.OrganizationName}. To confirm your email address, please click on the button below. This link expires in ${t} day(s).\n\n[Verify email address]\n\nIf you did not request this verification, please ignore this email.\n\nRegards,\n\${Organization.OrganizationName}`:`Email address verified

Thank you for confirming your email address. You can now close this page.

\${Organization.OrganizationName}`}}function M({kind:e,initial:t,validity:n,onClose:r,onSave:i}){let[o,s]=(0,F.useState)(()=>t??j(e,n)),[c,u]=(0,F.useState)(`en-US`),[f,p]=(0,F.useState)(o.body),[m,h]=(0,F.useState)(0);return(0,I.jsx)(y,{isOpen:!0,title:e===`email`?`Edit Email Content`:`Edit Verification Page`,width:865,className:`record-auth-template-modal`,disableAutoFocus:!0,headerActions:(0,I.jsx)(l,{"aria-label":`Template language`,width:`fit-content`,value:c,onChange:u,options:[{value:`en-US`,label:`English (United States)`},{value:`en-GB`,label:`English (United Kingdom)`},{value:`fr`,label:`French`},{value:`de`,label:`German`},{value:`es`,label:`Spanish`},{value:`it`,label:`Italian`},{value:`pt`,label:`Portuguese`},{value:`nl`,label:`Dutch`},{value:`ja`,label:`Japanese`},{value:`zh`,label:`Chinese (Simplified)`},{value:`hi`,label:`Hindi`},{value:`ta`,label:`Tamil`}]}),footerStart:(0,I.jsx)(a,{variant:`ghost-blue`,onClick:()=>{let t=j(e,n);s(t),p(t.body),h(e=>e+1)},children:`Reset to default`}),onClose:r,onSave:()=>i(o),children:(0,I.jsxs)(`div`,{className:`record-auth-template`,children:[e===`email`&&(0,I.jsxs)(`div`,{className:`record-auth-template__fields`,children:[(0,I.jsx)(l,{label:`From`,"aria-label":`From`,width:`100%`,value:o.sender,options:[{value:`owner`,label:`Record Owner’s Email`},{value:`organization`,label:`Organization Email`}],onChange:e=>s(t=>({...t,sender:e}))}),(0,I.jsx)(d,{label:`Subject`,width:`100%`,value:o.subject,onChange:e=>s(t=>({...t,subject:e.target.value}))})]}),(0,I.jsx)(w,{width:`100%`,minHeight:380,alwaysShowToolbar:!0,toolbarPosition:`top`,showExpand:!1,"aria-label":e===`email`?`Email template body`:`Verification page body`,initialContent:e===`email`?f.split(`[Verify email address]`).map((e,t)=>(0,I.jsxs)(`span`,{children:[t>0&&(0,I.jsx)(`span`,{contentEditable:!1,children:(0,I.jsx)(a,{variant:`primary`,className:`record-auth-template__verify`,children:`Verify email address`})}),e]},t)):f,onChange:t=>s(n=>({...n,body:e===`email`?t.replace(/(?<!\[)Verify email address(?!\])/g,`[Verify email address]`):t}))},m)]})})}function N({label:e,children:t}){return(0,I.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,I.jsx)(`span`,{className:`record-auth-form__label`,children:e}),(0,I.jsx)(`div`,{children:t})]})}function ge({channel:e,initial:t,expanded:n,onClose:r,onSave:i}){let o=(0,F.useId)(),[c,u]=(0,F.useState)(()=>({...t,fields:[...t.fields]})),[f,p]=(0,F.useState)(n),[m,g]=(0,F.useState)(),[v,b]=(0,F.useState)({}),x=e===`phone`,S=(e,t)=>{u(n=>({...n,[e]:t})),b(t=>({...t,[e]:void 0}))},C=e=>v[e]?(0,I.jsx)(`p`,{id:`${o}-${e}-error`,className:`record-auth-form__error`,role:`alert`,children:v[e]}):null,w=()=>{let e={},t=[`validity`,`resendAttempts`,`resetAfter`,...x?[`validationAttempts`,`validationReset`]:[]];c.fields.length||(e.fields=`Select at least one field to verify.`);let n={validity:x?`OTP Validity`:`Verification Link Validity`,resendAttempts:`Max Resend Attempts`,resetAfter:`Reset Resend Attempt After`,validationAttempts:`Max Validation Attempts`,validationReset:`Reset Validation Attempt After`};for(let r of t){let t=c[r];t.trim()?(!/^\d+$/.test(t)||!Number.isSafeInteger(Number(t))||Number(t)<1)&&(e[r]=`${n[r]} must be a positive whole number`):e[r]=`${n[r]} cannot be empty`}if(x&&!c.carrier&&(e.carrier=`Select an SMS carrier.`),x&&(!c.template.trim()||c.template.length>160||!c.template.includes("${OTP}"))&&(e.template="Enter an SMS template of up to 160 characters containing ${OTP}."),b(e),Object.keys(e).length){x&&(e.resendAttempts||e.resetAfter||e.validationAttempts||e.validationReset)&&p(!0);return}i(c)},T=(e,t,n)=>(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`record-auth-form__number`,children:[(0,I.jsx)(d,{type:`number`,"aria-label":t,error:!!v[e],"aria-invalid":!!v[e],"aria-describedby":[n&&`${o}-${e}-unit`,v[e]&&`${o}-${e}-error`].filter(Boolean).join(` `)||void 0,min:1,step:1,width:`100%`,value:c[e],onChange:t=>S(e,t.target.value)}),n&&(0,I.jsx)(`span`,{id:`${o}-${e}-unit`,children:n===`Minutes`?`Minute(s)`:n})]}),C(e)]});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(y,{isOpen:!0,title:`Data Verification via ${x?`Phone Number`:`Email Address`}`,className:`record-auth-config-modal`,width:670,onClose:r,onSave:w,children:(0,I.jsxs)(`div`,{className:`record-auth-form`,children:[(0,I.jsx)(N,{label:`Fields`,children:(0,I.jsxs)(`div`,{role:`group`,"aria-label":`Fields to verify`,"aria-invalid":!!v.fields,"aria-describedby":v.fields?`${o}-fields-error`:void 0,children:[(0,I.jsx)(re,{value:c.fields,options:x?D:O,placeholder:`Add`,onChange:e=>S(`fields`,e),width:`100%`}),C(`fields`)]})}),(0,I.jsx)(s,{label:`Restrict outgoing ${x?`calls`:`emails`} until verified`,checked:c.restrict,onChange:e=>S(`restrict`,e.target.checked)}),(0,I.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-settings`,children:[(0,I.jsx)(`h2`,{id:`${o}-settings`,children:x?`OTP Configuration`:`Verification Link Configuration`}),x&&(0,I.jsx)(N,{label:`OTP Length`,children:(0,I.jsx)(`div`,{className:`record-auth-form__inline`,role:`radiogroup`,"aria-label":`OTP Length`,children:[`6`,`4`].map(e=>(0,I.jsx)(ee,{label:`${e} Digits`,name:`${o}-digits`,checked:c.digits===e,onChange:()=>S(`digits`,e)},e))})}),(0,I.jsx)(N,{label:x?`Valid for`:`Verification Link Validity`,children:T(`validity`,x?`OTP validity`:`Verification link validity`,x?`Minutes`:`Day(s)`)}),x?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(N,{label:`SMS Carrier`,children:(0,I.jsxs)(`div`,{role:`group`,"aria-label":`SMS carrier selection`,"aria-invalid":!!v.carrier,"aria-describedby":v.carrier?`${o}-carrier-error`:void 0,children:[(0,I.jsx)(l,{"aria-label":`SMS Carrier`,width:`100%`,value:c.carrier,options:U,onChange:e=>S(`carrier`,e)}),C(`carrier`)]})}),(0,I.jsxs)(`div`,{className:`record-auth-form__row record-auth-form__template-row`,children:[(0,I.jsx)(`label`,{className:`record-auth-form__label`,htmlFor:`${o}-sms-template`,children:`SMS Template`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ae,{id:`${o}-sms-template`,error:!!v.template,"aria-invalid":!!v.template,"aria-describedby":`${o}-sms-hint${v.template?` ${o}-template-error`:``}`,width:`100%`,minHeight:90,maxLength:160,value:c.template,onChange:e=>S(`template`,e.target.value)}),C(`template`),(0,I.jsxs)(`div`,{className:`record-auth-form__count`,children:[(0,I.jsx)(`span`,{id:`${o}-sms-hint`,children:`Type # to insert merge field`}),(0,I.jsxs)(`span`,{children:[c.template.length,`/160`]})]}),(0,I.jsxs)(`div`,{className:`record-auth-form__preview`,role:`region`,"aria-label":`SMS Preview`,children:[(0,I.jsx)(`strong`,{children:`SMS Preview`}),(0,I.jsx)(`p`,{children:ue(c)})]}),(0,I.jsx)(a,{variant:`link-primary`,size:`sm`,children:`Send Text SMS`})]})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(N,{label:`Email Content`,children:(0,I.jsxs)(a,{variant:`default`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>g({title:`Email Content`,content:``,kind:`email`}),children:[(0,I.jsx)(`span`,{children:k.find(e=>e.value===c.emailTemplate)?.label}),(0,I.jsx)(h,{name:`Edit`,size:16})]})}),(0,I.jsx)(N,{label:`Verification Page`,children:(0,I.jsxs)(a,{variant:`default`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>g({title:`Verification Page`,content:``,kind:`page`}),children:[(0,I.jsx)(`span`,{children:A.find(e=>e.value===c.verificationPage)?.label}),(0,I.jsx)(h,{name:`Edit`,size:16})]})})]})]}),x&&!f&&(0,I.jsx)(`div`,{children:(0,I.jsx)(a,{variant:`link-primary`,"aria-expanded":f,"aria-controls":`${o}-more`,onClick:()=>p(!0),children:`More Options`})}),(!x||f)&&(0,I.jsxs)(`div`,{id:`${o}-more`,className:`record-auth-form__options`,children:[(0,I.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-resend`,children:[(0,I.jsx)(`h2`,{id:`${o}-resend`,children:`Resend Options`}),x&&(0,I.jsx)(N,{label:`OTP Resend`,children:(0,I.jsx)(l,{"aria-label":`OTP Resend`,width:`100%`,options:W,value:c.resendMode,onChange:e=>S(`resendMode`,e)})}),(0,I.jsx)(N,{label:`Max Resend Attempts`,children:T(`resendAttempts`,`Max Resend Attempts`)}),(0,I.jsx)(N,{label:`Reset Attempt After`,children:T(`resetAfter`,`Reset resend attempt after`,x?`Minutes`:`Hour(s)`)})]}),x&&(0,I.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-validation`,children:[(0,I.jsx)(`h2`,{id:`${o}-validation`,children:`Validation Options`}),(0,I.jsx)(N,{label:`Max Validation Attempts`,children:T(`validationAttempts`,`Max Validation Attempts`)}),(0,I.jsx)(N,{label:`Reset Attempt After`,children:T(`validationReset`,`Reset validation attempt after`,`Hour(s)`)})]})]}),!x&&(0,I.jsx)(_,{variant:`info`,message:`A new send invalidates the previous link. Latest request wins.`})]})}),m?.kind&&(0,I.jsx)(M,{kind:m.kind,validity:c.validity,initial:m.kind===`email`?c.emailContent:c.pageContent,onClose:()=>g(void 0),onSave:e=>{S(m.kind===`email`?`emailContent`:`pageContent`,e),g(void 0)}})]})}function _e({channel:e,config:t,onEdit:n,onPreview:r}){let i=e===`phone`,o=i?`OTP Configuration for Phone Number Verification`:`Verification Link for Email Address Verification`,s=k.find(e=>e.value===t.emailTemplate)?.label,c=A.find(e=>e.value===t.verificationPage)?.label;return(0,I.jsxs)(`section`,{className:`record-auth__summary`,"aria-label":o,children:[(0,I.jsxs)(`div`,{className:`record-auth__summary-title`,children:[(0,I.jsxs)(`h2`,{children:[(0,I.jsx)(h,{name:i?`Mobile`:`Email`,size:20}),o]}),(0,I.jsx)(a,{variant:`link-primary`,size:`sm`,"aria-label":`Edit ${i?`phone`:`email`} verification`,onClick:n,children:`Edit`})]}),(0,I.jsxs)(`div`,{className:`record-auth__summary-card`,children:[(0,I.jsx)(`p`,{children:i?`${t.digits} Digit OTP - Valid for ${t.validity} minutes`:`Link valid for ${t.validity} days`}),(0,I.jsxs)(`dl`,{children:[(0,I.jsx)(`dt`,{children:`Resend:`}),(0,I.jsxs)(`dd`,{children:[t.resendAttempts,` attempts, Reset after `,t.resetAfter,` `,i?`minutes`:`hours`]}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`dt`,{children:`Validation:`}),(0,I.jsxs)(`dd`,{children:[t.validationAttempts,` attempts, Reset after `,t.validationReset,` `,t.validationReset===`1`?`hour`:`hours`]})]})]}),(0,I.jsx)(`div`,{className:`record-auth__links`,children:i?(0,I.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:`SMS Template`,content:t.template}),children:`View SMS Template`}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:s??`Email Content`,content:``,kind:`email`}),children:`Verification Link Email Template`}),(0,I.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:c??`Verification Page`,content:``,kind:`page`}),children:`Verification Page`})]})})]})]})}function P({initial:e=`empty`,dialog:t,expanded:n=!1,configuration:r=!1}){let i=(0,F.useId)(),[a,o]=(0,F.useState)(r?`configuration`:`verification`),[s,c]=(0,F.useState)(()=>e===`empty`?{}:{phone:{...E(`phone`),carrier:`twilio`},...e===`both`?{email:E(`email`)}:{}}),[u,d]=(0,F.useState)(t),[f,m]=(0,F.useState)(),[h,g]=(0,F.useState)();(0,F.useEffect)(()=>{if(!h)return;let e=window.setTimeout(()=>g(void 0),5e3);return()=>window.clearTimeout(e)},[h]);let[_,v]=(0,F.useState)(`modules`),b=!!s.phone||!!s.email,S=H.filter(e=>!s[e.value]);return(0,I.jsxs)(`div`,{className:`record-auth`,children:[(0,I.jsx)(`header`,{children:(0,I.jsx)(x,{moduleLabel:null,showTerritory:!1})}),(0,I.jsxs)(`div`,{className:`record-auth__shell`,children:[(0,I.jsx)(`aside`,{className:`record-auth__sidebar`,"aria-label":`Setup navigation`,children:(0,I.jsx)(se,{title:`Setup`,searchable:!0,width:`100%`,items:fe,activeId:_,onSelect:v,variant:`1`})}),(0,I.jsxs)(`main`,{className:`record-auth__workspace`,"aria-label":`Record Authentication`,children:[(0,I.jsx)(`div`,{className:`record-auth__module-title`,children:(0,I.jsx)(`h1`,{children:`Contacts`})}),(0,I.jsx)(`nav`,{className:`record-auth__module-tabs`,"aria-label":`Contacts settings`,children:pe.map(e=>(0,I.jsx)(`span`,{"aria-current":e===`Record Authentication`?`page`:void 0,children:e},e))}),(0,I.jsxs)(`div`,{className:`record-auth__content`,children:[(0,I.jsx)(te,{tabs:V,activeTab:a,onChange:o,variant:`secondary`}),(0,I.jsx)(`div`,{className:`record-auth__panel`,role:`tabpanel`,"aria-label":a===`verification`?`Data Verification`:`Record Configuration`,children:a===`verification`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,I.jsx)(`p`,{children:`Verify that phone numbers and email addresses belong to the contact.`}),b&&S.length>0&&(0,I.jsx)(l,{id:`${i}-verify`,width:`fit-content`,placeholder:`Verify via`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:S,onChange:e=>d(e)})]}),!b&&(0,I.jsx)(l,{id:`${i}-verify`,width:180,placeholder:`Verify via`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:S,onChange:e=>d(e)}),[`phone`,`email`].map(e=>s[e]&&(0,I.jsx)(_e,{channel:e,config:s[e],onEdit:()=>d(e),onPreview:m},e))]})})]})]})]}),(0,I.jsx)(`footer`,{className:`record-auth__wms`,"aria-label":`Communication bar`,children:(0,I.jsx)(le,{})}),h&&(0,I.jsx)(p,{className:`record-auth__notice`,variant:`success`,message:h.message,onClose:()=>g(void 0)}),u&&(0,I.jsx)(ge,{channel:u,initial:s[u]??E(u),expanded:n,onClose:()=>d(void 0),onSave:e=>{c(t=>({...t,[u]:e})),g({message:`${u===`phone`?`Phone Number`:`Email Address`} verification configured successfully`}),d(void 0)}},u),f?.kind&&(0,I.jsx)(M,{kind:f.kind,validity:s.email?.validity,initial:f.kind===`email`?s.email?.emailContent:s.email?.pageContent,onClose:()=>m(void 0),onSave:e=>{let t=f.kind===`email`?`emailContent`:`pageContent`;c(n=>n.email?{...n,email:{...n.email,[t]:e}}:n),m(void 0)}}),f&&!f.kind&&(0,I.jsx)(y,{isOpen:!0,title:f.title,width:620,onClose:()=>m(void 0),onSave:()=>m(void 0),saveLabel:`Done`,children:(0,I.jsx)(`div`,{className:`record-auth-form`,children:(0,I.jsx)(`p`,{className:`record-auth-form__template`,children:f.content})})})]})}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ve;e((()=>{F=t(n(),1),i(),o(),c(),u(),m(),f(),g(),v(),b(),C(),S(),T(),ne(),ie(),oe(),ce(),me(),he(),I=r(),{expect:L,userEvent:R,waitFor:z,within:B}=__STORYBOOK_MODULE_TEST__,V=[{id:`verification`,label:`Data Verification`},{id:`configuration`,label:`Record Configuration`}],H=[{value:`phone`,label:`Phone Number`,icon:(0,I.jsx)(h,{name:`Mobile`,size:16})},{value:`email`,label:`Email Address`,icon:(0,I.jsx)(h,{name:`Email`,size:16})}],U=[{value:`twilio`,label:`Twilio`},{value:`messagebird`,label:`MessageBird`},{value:`vonage`,label:`Vonage`},{value:`plivo`,label:`Plivo`},{value:`sinch`,label:`Sinch`},{value:`telnyx`,label:`Telnyx`},{value:`textlocal`,label:`Textlocal`},{value:`clicksend`,label:`ClickSend`}],W=[{value:`same`,label:`Same OTP`},{value:`new`,label:`New OTP`}],G="Verify your email address with ${Organization.OrganizationName}",K={title:`Design System/Patterns/Record Authentication`,parameters:{layout:`fullscreen`,docs:{description:{component:`Data Verification configuration based on the six provided PDF frames. Phone OTP, email verification links, template previews, and in-memory saved summaries. Record Configuration is intentionally empty. No real SMS, email, or authentication requests are made.`}}}},q={render:()=>(0,I.jsx)(P,{}),play:async({canvasElement:e})=>{let t=B(e),n=B(e.ownerDocument.body);await L(e.querySelector(`.ngtb-badge`)).not.toBeInTheDocument(),await L(B(t.getByRole(`button`,{name:`User profile`})).getByRole(`img`,{name:`User`})).toHaveAttribute(`src`,`/crm-design-system/images/avatars/user_06.jpg`);let r=t.getByRole(`button`,{name:`Verify via`});await L(r).toHaveAttribute(`data-variant`,`primary`),await R.click(r);for(let e of[`Phone Number`,`Email Address`])await L(n.getByRole(`option`,{name:e}).querySelector(`.dropdown-option-icon svg`)).toBeInTheDocument();await R.click(n.getByRole(`option`,{name:`Phone Number`}));let i=await n.findByRole(`dialog`);await L(B(i).getByText(`Data Verification via Phone Number`)).toBeVisible(),await R.click(B(i).getByRole(`button`,{name:`Cancel`})),await z(()=>L(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(t.queryByRole(`region`,{name:`OTP Configuration for Phone Number Verification`})).not.toBeInTheDocument(),await R.click(t.getByRole(`tab`,{name:`Record Configuration`})),await L(t.getByRole(`tabpanel`,{name:`Record Configuration`})).toBeEmptyDOMElement(),await R.click(t.getByRole(`tab`,{name:`Data Verification`}))}},J={render:()=>(0,I.jsx)(P,{dialog:`phone`})},Y={render:()=>(0,I.jsx)(P,{dialog:`phone`,expanded:!0}),play:async({canvasElement:e})=>{let t=B(await B(e.ownerDocument.body).findByRole(`dialog`)),n=t.getByRole(`spinbutton`,{name:`Max Resend Attempts`});await R.clear(n),await R.click(t.getByRole(`button`,{name:`Save`})),await L(n).toHaveAccessibleDescription(`Max Resend Attempts cannot be empty`),await R.type(n,`0`),await R.click(t.getByRole(`button`,{name:`Save`})),await L(n).toHaveAccessibleDescription(`Max Resend Attempts must be a positive whole number`),await R.clear(n),await R.type(n,`5`),await L(n).not.toHaveAttribute(`aria-invalid`,`true`)}},X={render:()=>(0,I.jsx)(P,{dialog:`email`}),play:async({canvasElement:e})=>{let t=B(e),n=B(e.ownerDocument.body),r=B(await n.findByRole(`dialog`)),i=r.getByRole(`spinbutton`,{name:`Verification link validity`});await R.clear(i),await R.click(r.getByRole(`button`,{name:`Save`})),await L(r.getByRole(`alert`)).toHaveTextContent(`Verification Link Validity cannot be empty`),await L(i).toHaveAttribute(`aria-invalid`,`true`),await L(i).toHaveAccessibleDescription(`Day(s) Verification Link Validity cannot be empty`),await L(r.getByRole(`alert`).parentElement).toContainElement(i),await R.type(i,`10`);for(let[e,t,r]of[[`Verification Link Email`,`Edit Email Content`,`Email template body`],[`Verification Page`,`Edit Verification Page`,`Verification page body`]]){let i=B(await n.findByRole(`dialog`)).getByRole(`button`,{name:e});await L(i).toHaveClass(`record-auth-form__template-input`),await L(i.querySelector(`svg`)).toHaveAttribute(`width`,`16`),await R.click(i),await L(n.getByRole(`dialog`,{name:`Data Verification via Email Address`})).toBeVisible(),await L(n.getAllByRole(`dialog`)).toHaveLength(2);let a=B(await n.findByRole(`dialog`,{name:t})),o=a.getByRole(`textbox`,{name:r});if(await z(()=>L(o).toBeVisible()),await L(a.getByRole(`button`,{name:`English (United States)`})).toBeVisible(),await L(a.queryByTitle(`Expand`)).not.toBeInTheDocument(),await R.click(a.getByRole(`button`,{name:`English (United States)`})),await R.click(n.getByRole(`option`,{name:`French`,exact:!0})),await L(a.getByRole(`button`,{name:`French`,exact:!0})).toBeVisible(),t===`Edit Email Content`){let e=a.getByRole(`button`,{name:`Verify email address`});await L(e).toBeVisible(),await L(getComputedStyle(e).backgroundImage).toBe(`none`),await L(getComputedStyle(e).fontSize).toBe(`14px`);let t=a.getByRole(`button`,{name:`Record Owner’s Email`});await L(getComputedStyle(t).fontSize).toBe(`14px`),window.innerWidth>=900&&await L(Math.round(t.getBoundingClientRect().width)).toBe(390);for(let e of[`From`,`Subject`])await L(getComputedStyle(a.getByText(e,{exact:!0})).textAlign).toBe(`right`)}await R.click(o),await R.keyboard(`{ControlOrMeta>}a{/ControlOrMeta}`),await R.type(o,`Custom verification content`),await R.click(a.getByRole(`button`,{name:`Reset to default`})),await L(a.getByRole(`textbox`,{name:r})).not.toHaveTextContent(`Custom verification content`),t===`Edit Email Content`&&(await R.clear(a.getByRole(`textbox`,{name:`Subject`})),await R.type(a.getByRole(`textbox`,{name:`Subject`}),`Confirm your email`)),t===`Edit Verification Page`?await R.keyboard(`{Escape}`):await R.click(a.getByRole(`button`,{name:`Save`})),await z(()=>L(n.getAllByRole(`dialog`)).toHaveLength(1));let s=B(await n.findByRole(`dialog`,{name:`Data Verification via Email Address`}));await L(s.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10)}await R.click(B(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Verification Link Email`}));let a=B(await n.findByRole(`dialog`,{name:`Edit Email Content`}));await L(a.getByRole(`textbox`,{name:`Subject`})).toHaveValue(`Confirm your email`),await R.click(a.getByRole(`button`,{name:`Cancel`})),await R.click(B(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Save`})),await z(()=>L(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(t.getByText(`Link valid for 10 days`)).toBeVisible(),await R.click(t.getByRole(`button`,{name:`Verify via`})),await L(n.queryByRole(`option`,{name:`Email Address`})).not.toBeInTheDocument(),await L(n.getByRole(`option`,{name:`Phone Number`})).toBeVisible(),await R.keyboard(`{Escape}`),await R.click(t.getByRole(`button`,{name:`Edit email verification`}));let o=B(await n.findByRole(`dialog`));await L(o.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10),await R.click(o.getByRole(`button`,{name:`Cancel`}))}},Z={render:()=>(0,I.jsx)(P,{initial:`phone`}),play:async({canvasElement:e})=>{let t=B(e),n=B(e.ownerDocument.body);await R.click(t.getByRole(`button`,{name:`Verify via`})),await L(n.queryByRole(`option`,{name:`Phone Number`})).not.toBeInTheDocument(),await R.click(n.getByRole(`option`,{name:`Email Address`}));let r=B(await n.findByRole(`dialog`));await R.click(r.getByRole(`button`,{name:`Save`})),await z(()=>L(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(t.queryByRole(`button`,{name:`Verify via`})).not.toBeInTheDocument();let i=t.getByRole(`status`);await L(i).toHaveClass(`record-auth__notice`),await L(getComputedStyle(i).position).toBe(`fixed`),await L(i).toHaveTextContent(`Email Address verification configured successfully`),await z(()=>L(t.queryByRole(`status`)).not.toBeInTheDocument(),{timeout:6500})}},Q={render:()=>(0,I.jsx)(P,{initial:`both`}),play:async({canvasElement:e})=>{let t=B(e),n=B(e.ownerDocument.body);await L(t.getByText(`6 Digit OTP - Valid for 4 minutes`)).toBeVisible(),await L(t.getByText(`Link valid for 7 days`)).toBeVisible(),await L(t.queryByRole(`button`,{name:`Verify via`})).not.toBeInTheDocument(),await R.click(t.getByRole(`button`,{name:`View SMS Template`}));let r=B(await n.findByRole(`dialog`));await z(()=>L(r.getByText(/Your verification OTP is/)).toBeVisible()),await R.click(r.getByRole(`button`,{name:`Done`})),await z(()=>L(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await R.click(t.getByRole(`button`,{name:`Edit phone verification`}));let i=B(await n.findByRole(`dialog`));await R.click(i.getByRole(`radio`,{name:`4 Digits`})),await L(i.getByRole(`region`,{name:`SMS Preview`})).toHaveTextContent(`4829`),await R.click(i.getByRole(`button`,{name:`More Options`})),await L(i.queryByRole(`button`,{name:`Fewer Options`})).not.toBeInTheDocument();for(let e of[`OTP validity`,`Reset resend attempt after`]){let t=i.getByRole(`spinbutton`,{name:e});await L(t).toHaveAccessibleDescription(`Minute(s)`),await L(t.closest(`.input-input-wrapper`)?.querySelector(`.input-suffix`)).toBeFalsy()}await L(i.getByRole(`spinbutton`,{name:`Max Resend Attempts`})).toHaveValue(5),await L(i.getByRole(`textbox`,{name:`SMS Template`})).toHaveAccessibleDescription(`Type # to insert merge field`),await L(i.getByText(`SMS Preview`)).toBeVisible();let a=i.getByRole(`button`,{name:`Send Text SMS`});await L(a).toHaveAttribute(`data-variant`,`link-primary`),await R.click(a),await L(i.queryByText(`Demo preview only. No SMS was sent.`)).not.toBeInTheDocument(),await R.click(i.getByRole(`button`,{name:`Save`})),await z(()=>L(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await L(t.getByText(`4 Digit OTP - Valid for 4 minutes`)).toBeVisible();for(let e of[`OTP Configuration for Phone Number Verification`,`Verification Link for Email Address Verification`]){let n=t.getByRole(`heading`,{name:e});await L(n.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`)}let o=t.getByRole(`status`);await L(o).toHaveClass(`message-box-success`),await L(o).toHaveTextContent(`Phone Number verification configured successfully`),await R.click(B(o).getByRole(`button`,{name:`Dismiss`})),await L(t.queryByRole(`status`)).not.toBeInTheDocument()}},$={render:()=>(0,I.jsx)(P,{configuration:!0})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvasElement.querySelector('.ngtb-badge')).not.toBeInTheDocument();
    await expect(within(canvas.getByRole('button', {
      name: 'User profile'
    })).getByRole('img', {
      name: 'User'
    })).toHaveAttribute('src', \`\${import.meta.env.BASE_URL}images/avatars/user_06.jpg\`);
    const verifyButton = canvas.getByRole('button', {
      name: 'Verify via'
    });
    await expect(verifyButton).toHaveAttribute('data-variant', 'primary');
    await userEvent.click(verifyButton);
    for (const name of ['Phone Number', 'Email Address']) {
      await expect(body.getByRole('option', {
        name
      }).querySelector('.dropdown-option-icon svg')).toBeInTheDocument();
    }
    await userEvent.click(body.getByRole('option', {
      name: 'Phone Number'
    }));
    const dialog = await body.findByRole('dialog');
    await expect(within(dialog).getByText('Data Verification via Phone Number')).toBeVisible();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('region', {
      name: 'OTP Configuration for Phone Number Verification'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Record Configuration'
    }));
    await expect(canvas.getByRole('tabpanel', {
      name: 'Record Configuration'
    })).toBeEmptyDOMElement();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Data Verification'
    }));
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" expanded />,
  play: async ({
    canvasElement
  }) => {
    const form = within(await within(canvasElement.ownerDocument.body).findByRole('dialog'));
    const attempts = form.getByRole('spinbutton', {
      name: 'Max Resend Attempts'
    });
    await userEvent.clear(attempts);
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await expect(attempts).toHaveAccessibleDescription('Max Resend Attempts cannot be empty');
    await userEvent.type(attempts, '0');
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await expect(attempts).toHaveAccessibleDescription('Max Resend Attempts must be a positive whole number');
    await userEvent.clear(attempts);
    await userEvent.type(attempts, '5');
    await expect(attempts).not.toHaveAttribute('aria-invalid', 'true');
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="email" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const form = within(await body.findByRole('dialog'));
    const validity = form.getByRole('spinbutton', {
      name: 'Verification link validity'
    });
    await userEvent.clear(validity);
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Verification Link Validity cannot be empty');
    await expect(validity).toHaveAttribute('aria-invalid', 'true');
    await expect(validity).toHaveAccessibleDescription('Day(s) Verification Link Validity cannot be empty');
    await expect(form.getByRole('alert').parentElement).toContainElement(validity);
    await userEvent.type(validity, '10');
    for (const [link, title, sample] of [['Verification Link Email', 'Edit Email Content', 'Email template body'], ['Verification Page', 'Edit Verification Page', 'Verification page body']]) {
      const settings = within(await body.findByRole('dialog'));
      const trigger = settings.getByRole('button', {
        name: link
      });
      await expect(trigger).toHaveClass('record-auth-form__template-input');
      await expect(trigger.querySelector('svg')).toHaveAttribute('width', '16');
      await userEvent.click(trigger);
      await expect(body.getByRole('dialog', {
        name: 'Data Verification via Email Address'
      })).toBeVisible();
      await expect(body.getAllByRole('dialog')).toHaveLength(2);
      const preview = within(await body.findByRole('dialog', {
        name: title
      }));
      const editor = preview.getByRole('textbox', {
        name: sample
      });
      await waitFor(() => expect(editor).toBeVisible());
      await expect(preview.getByRole('button', {
        name: 'English (United States)'
      })).toBeVisible();
      await expect(preview.queryByTitle('Expand')).not.toBeInTheDocument();
      await userEvent.click(preview.getByRole('button', {
        name: 'English (United States)'
      }));
      await userEvent.click(body.getByRole('option', {
        name: 'French',
        exact: true
      }));
      await expect(preview.getByRole('button', {
        name: 'French',
        exact: true
      })).toBeVisible();
      if (title === 'Edit Email Content') {
        const verify = preview.getByRole('button', {
          name: 'Verify email address'
        });
        await expect(verify).toBeVisible();
        await expect(getComputedStyle(verify).backgroundImage).toBe('none');
        await expect(getComputedStyle(verify).fontSize).toBe('14px');
        const from = preview.getByRole('button', {
          name: 'Record Owner’s Email'
        });
        await expect(getComputedStyle(from).fontSize).toBe('14px');
        if (window.innerWidth >= 900) await expect(Math.round(from.getBoundingClientRect().width)).toBe(390);
        for (const label of ['From', 'Subject']) {
          await expect(getComputedStyle(preview.getByText(label, {
            exact: true
          })).textAlign).toBe('right');
        }
      }
      await userEvent.click(editor);
      await userEvent.keyboard('{ControlOrMeta>}a{/ControlOrMeta}');
      await userEvent.type(editor, 'Custom verification content');
      await userEvent.click(preview.getByRole('button', {
        name: 'Reset to default'
      }));
      await expect(preview.getByRole('textbox', {
        name: sample
      })).not.toHaveTextContent('Custom verification content');
      if (title === 'Edit Email Content') {
        await userEvent.clear(preview.getByRole('textbox', {
          name: 'Subject'
        }));
        await userEvent.type(preview.getByRole('textbox', {
          name: 'Subject'
        }), 'Confirm your email');
      }
      if (title === 'Edit Verification Page') await userEvent.keyboard('{Escape}');else await userEvent.click(preview.getByRole('button', {
        name: 'Save'
      }));
      await waitFor(() => expect(body.getAllByRole('dialog')).toHaveLength(1));
      const restored = within(await body.findByRole('dialog', {
        name: 'Data Verification via Email Address'
      }));
      await expect(restored.getByRole('spinbutton', {
        name: 'Verification link validity'
      })).toHaveValue(10);
    }
    await userEvent.click(within(await body.findByRole('dialog')).getByRole('button', {
      name: 'Verification Link Email'
    }));
    const savedTemplate = within(await body.findByRole('dialog', {
      name: 'Edit Email Content'
    }));
    await expect(savedTemplate.getByRole('textbox', {
      name: 'Subject'
    })).toHaveValue('Confirm your email');
    await userEvent.click(savedTemplate.getByRole('button', {
      name: 'Cancel'
    }));
    await userEvent.click(within(await body.findByRole('dialog')).getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Link valid for 10 days')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify via'
    }));
    await expect(body.queryByRole('option', {
      name: 'Email Address'
    })).not.toBeInTheDocument();
    await expect(body.getByRole('option', {
      name: 'Phone Number'
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit email verification'
    }));
    const edit = within(await body.findByRole('dialog'));
    await expect(edit.getByRole('spinbutton', {
      name: 'Verification link validity'
    })).toHaveValue(10);
    await userEvent.click(edit.getByRole('button', {
      name: 'Cancel'
    }));
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage initial="phone" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify via'
    }));
    await expect(body.queryByRole('option', {
      name: 'Phone Number'
    })).not.toBeInTheDocument();
    await userEvent.click(body.getByRole('option', {
      name: 'Email Address'
    }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('button', {
      name: 'Verify via'
    })).not.toBeInTheDocument();
    const notice = canvas.getByRole('status');
    await expect(notice).toHaveClass('record-auth__notice');
    await expect(getComputedStyle(notice).position).toBe('fixed');
    await expect(notice).toHaveTextContent('Email Address verification configured successfully');
    await waitFor(() => expect(canvas.queryByRole('status')).not.toBeInTheDocument(), {
      timeout: 6500
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage initial="both" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByText('6 Digit OTP - Valid for 4 minutes')).toBeVisible();
    await expect(canvas.getByText('Link valid for 7 days')).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Verify via'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'View SMS Template'
    }));
    const preview = within(await body.findByRole('dialog'));
    await waitFor(() => expect(preview.getByText(/Your verification OTP is/)).toBeVisible());
    await userEvent.click(preview.getByRole('button', {
      name: 'Done'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit phone verification'
    }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('radio', {
      name: '4 Digits'
    }));
    await expect(form.getByRole('region', {
      name: 'SMS Preview'
    })).toHaveTextContent('4829');
    await userEvent.click(form.getByRole('button', {
      name: 'More Options'
    }));
    await expect(form.queryByRole('button', {
      name: 'Fewer Options'
    })).not.toBeInTheDocument();
    for (const name of ['OTP validity', 'Reset resend attempt after']) {
      const input = form.getByRole('spinbutton', {
        name
      });
      await expect(input).toHaveAccessibleDescription('Minute(s)');
      await expect(input.closest('.input-input-wrapper')?.querySelector('.input-suffix')).toBeFalsy();
    }
    await expect(form.getByRole('spinbutton', {
      name: 'Max Resend Attempts'
    })).toHaveValue(5);
    await expect(form.getByRole('textbox', {
      name: 'SMS Template'
    })).toHaveAccessibleDescription('Type # to insert merge field');
    await expect(form.getByText('SMS Preview')).toBeVisible();
    const testSms = form.getByRole('button', {
      name: 'Send Text SMS'
    });
    await expect(testSms).toHaveAttribute('data-variant', 'link-primary');
    await userEvent.click(testSms);
    await expect(form.queryByText('Demo preview only. No SMS was sent.')).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('4 Digit OTP - Valid for 4 minutes')).toBeVisible();
    for (const title of ['OTP Configuration for Phone Number Verification', 'Verification Link for Email Address Verification']) {
      const heading = canvas.getByRole('heading', {
        name: title
      });
      await expect(heading.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    }
    const success = canvas.getByRole('status');
    await expect(success).toHaveClass('message-box-success');
    await expect(success).toHaveTextContent('Phone Number verification configured successfully');
    await userEvent.click(within(success).getByRole('button', {
      name: 'Dismiss'
    }));
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage configuration />
}`,...$.parameters?.docs?.source}}},ve=[`Default`,`PhoneVerification`,`PhoneMoreOptions`,`EmailVerification`,`PhoneConfigured`,`Configured`,`RecordConfiguration`]}))();export{Q as Configured,q as Default,X as EmailVerification,Z as PhoneConfigured,Y as PhoneMoreOptions,J as PhoneVerification,$ as RecordConfiguration,ve as __namedExportsOrder,K as default};