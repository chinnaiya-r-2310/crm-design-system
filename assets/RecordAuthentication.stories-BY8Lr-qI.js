import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CULqjkQ9.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-BaAI9Sdx.js";import{n as o,t as s}from"./Checkbox-DUw7oJMH.js";import{n as c,t as l}from"./Dropdown-Ch76Fk9y.js";import{n as u,t as d}from"./Input-ufjjzKQ8.js";import{n as f,t as p}from"./MessageBox-GsGU7Q8S.js";import{n as m,r as h,t as g}from"./CrmCatalog-hJMFAUcT.js";import{n as _,t as v}from"./Icon-RUxy1lnO.js";import{n as y,t as b}from"./MessageInfo-BQUrdfOl.js";import{n as x,t as S}from"./Modal-Xl7PI8e9.js";import{n as C,t as w}from"./NextGenTopBand-GOzaj01b.js";import{n as T,t as ee}from"./Radio-WeXY7hgE.js";import{n as E,t as D}from"./RichTextEditor-mnu0hrVZ.js";import{n as O,t as te}from"./Stepper-BjSaR0vw.js";import{n as k,t as ne}from"./Switch-yBHIaYfh.js";import{n as re,t as ie}from"./Table-UrhVfNsT.js";import{n as ae,t as oe}from"./Tabs-D1mqiVSb.js";import{n as se,t as A}from"./Tags-DNaQjg9j.js";import{n as ce,t as le}from"./Textarea-D7BTqkNG.js";import{i as ue,n as de,r as fe,t as pe}from"./setupMenuItems-DgKrt0gi.js";import{n as me,t as he}from"./WMSBar-DZz-9sJy.js";function j(e){return{fields:(e===`phone`?M:N).slice(0,2),restrict:!1,validity:e===`phone`?`4`:`7`,digits:`6`,carrier:``,template:_e,resendMode:`same`,resendAttempts:e===`phone`?`5`:`3`,resetAfter:e===`phone`?`30`:`24`,validationAttempts:`5`,validationReset:`1`,emailTemplate:`verification`,verificationPage:`standard`}}function ge(e){return e.template.replaceAll("${OTP}",e.digits===`6`?`482913`:`4829`).replaceAll("${Valid For}",`${e.validity} minutes`).replaceAll(`<CRM User>`,`CRM User`).replaceAll("${Organization.Organization Name}",`Zoho`)}var M,N,_e,ve,ye,be,xe=e((()=>{de(),M=[{value:`mobile`,label:`Mobile`},{value:`secondary-phone`,label:`Secondary Phone`},{value:`phone`,label:`Phone`}],N=[{value:`email`,label:`Email ID`},{value:`secondary-email`,label:`Secondary Email`}],_e="Your verification OTP is ${OTP}. Valid for ${Valid For}.\nShare with <CRM User> only.\n${Organization.Organization Name}",ve=[{value:`verification`,label:`Verification Link Email`},{value:`contact`,label:`Contact Verification Email`}],ye=[{value:`standard`,label:`Verification Page`},{value:`branded`,label:`Branded Verification Page`}],be=[`Layouts`,`Layout Rules`,`Validation Rules`,`Fields`,`Record Locking Configuration`,`Record Authentication`,`Links`,`Buttons`,`Summary`]}));function Se(e){return{id:``,action:e?`criteria`:`record`,method:`otp`,field:``,criteriaField:`Status`,criteriaValue:`Open`,buttonName:``,layouts:Te.slice(0,1),profiles:Ee.slice(0,2),portal:!1,active:!0,modified:``,settings:j(`phone`)}}function P(e){return e.action===`criteria`?`${e.criteriaField} is ${e.criteriaValue}`:e.action===`buttons`?e.buttonName:`Record creation`}function Ce({renderSettings:e,onNotice:t}){let n=(0,F.useId)(),[r,i]=(0,F.useState)([]),[o,s]=(0,F.useState)(),[c,u]=(0,F.useState)(0),[f,p]=(0,F.useState)(``),[m,h]=(0,F.useState)(),g=r.some(e=>e.action===`record`&&e.id!==o?.id),_=e=>{s(t=>t&&{...t,...e}),p(``)},v=()=>{s(void 0),u(0),p(``)},y=e=>{s(e??Se(r.some(e=>e.action===`record`))),u(0),p(``)},x=e=>{if(!o)return;let t=j(e===`otp`?`phone`:`email`);e===`code`?(t.validity=`4`,t.resetAfter=`30`,t.emailContent={sender:`owner`,subject:"Confirm your action with ${Organization.OrganizationName}",body:`Hello \${Contacts.FullName},

Your confirmation code is \${OTP}. Valid for \${Valid For} minutes.
Share with <CRM User> only.

\${Organization.OrganizationName}`}):e===`link`&&(t.emailContent={sender:`owner`,subject:"Confirm your action with ${Organization.OrganizationName}",body:`Hello \${Contacts.FullName},

Please confirm the requested action with \${Organization.OrganizationName}.

[Verify email address]

If you did not request this action, ignore this email.`}),_({method:e,field:``,settings:t})},C=()=>{if(o){if(o.action===`record`&&g){p(`Record creation already has a configuration. Edit the existing rule.`);return}if(o.action===`buttons`&&(!o.buttonName.trim()||!o.layouts.length||!o.profiles.length)){p(`Enter a button name and select at least one layout and profile.`);return}u(e=>e+1)}},w=e=>{if(!o)return;if(!o.field){p(`Select a verification field.`);return}if(r.some(e=>e.id!==o.id&&e.action===o.action&&e.method===o.method&&e.field===o.field)){p(`This action, method, and field already have a configuration. Edit the existing rule.`);return}let n={...o,settings:e,id:o.id||crypto.randomUUID(),modified:new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`,year:`numeric`}).format(new Date)};i(e=>o.id?e.map(e=>e.id===o.id?n:e):[...e,n]),v(),t(`Record verification configured successfully`)},T=(0,I.jsx)(te,{variant:`single`,steps:[`Action`,`Method`,`Configuration`],currentStep:c}),E=o&&(0,I.jsxs)(I.Fragment,{children:[T,(0,I.jsx)(b,{variant:`info`,message:`Verifying: ${P(o)} via ${L[o.method]}. Confirmation captures consent; it does not verify ownership of the field.`}),(0,I.jsx)(l,{label:`Verification Field`,width:`100%`,value:o.field,placeholder:`Select a field`,options:De(o.method),onChange:e=>_({field:e}),error:!!f}),o.action===`record`&&(0,I.jsx)(b,{variant:`info`,message:`Confirmation is required before saving a new record. Only one record-creation configuration is allowed.`}),f&&(0,I.jsx)(`p`,{className:`record-auth-form__error`,role:`alert`,children:f})]});return(0,I.jsxs)(`div`,{className:`record-confirmation`,children:[(0,I.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{children:`Record Verification Settings`}),(0,I.jsx)(`p`,{children:`Configure the channel used to obtain consent for a process in this module.`})]}),(0,I.jsx)(a,{variant:`primary`,onClick:()=>y(),children:`New`})]}),r.length===0?(0,I.jsxs)(`div`,{className:`record-confirmation__empty`,children:[(0,I.jsx)(`h2`,{children:`No record verification configured`}),(0,I.jsx)(`p`,{children:`Request consent when a record is created, a picklist value changes, or a custom button is used.`}),(0,I.jsx)(a,{variant:`link-primary`,onClick:()=>y(),children:`Configure Record Verification`})]}):(0,I.jsx)(ie,{rows:r,columns:[{key:`action`,label:`Use verification at`,width:200,render:(e,t)=>P(t)},{key:`field`,label:`Field`,width:150,render:(e,t)=>De(t.method).find(t=>t.value===e)?.label},{key:`method`,label:`Type / Channel`,width:180,render:e=>L[e]},{key:`modified`,label:`Last modified`,width:150},{key:`active`,label:`Status`,width:100,render:(e,t)=>(0,I.jsx)(ne,{"aria-label":`Enable ${P(t)}`,checked:e,onChange:e=>i(n=>n.map(n=>n.id===t.id?{...n,active:e.target.checked}:n))})},{key:`id`,label:`Actions`,width:150,render:(e,t)=>(0,I.jsxs)(`div`,{className:`record-auth-form__inline`,children:[(0,I.jsx)(a,{variant:`link-primary`,"aria-label":`Edit ${P(t)}`,onClick:()=>y(t),children:`Edit`}),(0,I.jsx)(a,{variant:`link-primary`,"aria-label":`Delete ${P(t)}`,onClick:()=>h(t),children:`Delete`})]})}]}),o&&c<2&&(0,I.jsx)(S,{isOpen:!0,title:`Record Verification`,width:680,className:`record-auth-config-modal`,onClose:v,onSave:C,saveLabel:`Next`,footerStart:c>0?(0,I.jsx)(a,{onClick:()=>u(e=>e-1),children:`Back`}):void 0,children:(0,I.jsxs)(`div`,{className:`record-auth-form`,children:[T,(0,I.jsx)(`p`,{className:`record-confirmation__description`,children:c===0?`Choose when this module should ask for consent. You will pick how to send the request on the next step.`:`How should the contact give consent?`}),c===0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`record-confirmation__choices`,role:`radiogroup`,"aria-label":`Verification action`,children:[`record`,`criteria`,`buttons`].map(e=>(0,I.jsxs)(`div`,{className:`record-confirmation__choice`,"data-selected":o.action===e,children:[(0,I.jsx)(ee,{name:`${n}-action`,label:we[e],checked:o.action===e,disabled:e===`record`&&g,onChange:()=>_({action:e,...e!==`buttons`&&o.method===`link`?{method:`otp`,field:``,settings:j(`phone`)}:{}})}),(0,I.jsx)(`p`,{children:e===`record`?g?`Already configured. Edit the existing record-creation rule.`:`Ask for consent before a new record is saved.`:e===`criteria`?`Ask for consent when a picklist is set to a value.`:`Ask for consent via a custom button on the record’s Detail page.`})]},e))}),o.action===`criteria`&&(0,I.jsxs)(`div`,{className:`record-confirmation__criteria`,children:[(0,I.jsx)(l,{label:`Picklist`,layout:`vertical`,width:`100%`,options:Object.keys(R).map(e=>({value:e,label:e})),value:o.criteriaField,onChange:e=>_({criteriaField:e,criteriaValue:R[e][0]})}),(0,I.jsx)(`span`,{children:`is`}),(0,I.jsx)(l,{label:`Value`,layout:`vertical`,width:`100%`,options:R[o.criteriaField].map(e=>({value:e,label:e})),value:o.criteriaValue,onChange:e=>_({criteriaValue:e})})]}),o.action===`buttons`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d,{label:`Button Name`,width:`100%`,value:o.buttonName,onChange:e=>_({buttonName:e.target.value})}),(0,I.jsx)(A,{label:`Select Layout(s)`,width:`100%`,value:o.layouts,options:Te,onChange:e=>_({layouts:e})}),(0,I.jsx)(A,{label:`Profiles`,width:`100%`,value:o.profiles,options:Ee,onChange:e=>_({profiles:e})}),(0,I.jsx)(ne,{label:`For Portal Users`,checked:o.portal,onChange:e=>_({portal:e.target.checked})})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{variant:`info`,message:`Verifying: ${P(o)}`}),(0,I.jsx)(`div`,{className:`record-confirmation__choices`,role:`radiogroup`,"aria-label":`Confirmation method`,children:[`otp`,`code`,`link`].map(e=>(0,I.jsxs)(`div`,{className:`record-confirmation__choice`,"data-selected":o.method===e,children:[(0,I.jsx)(ee,{name:`${n}-method`,label:`Via ${L[e]}`,checked:o.method===e,disabled:e===`link`&&o.action!==`buttons`,onChange:()=>x(e)}),(0,I.jsx)(`p`,{children:e===`link`?o.action===`buttons`?`The recipient confirms the action by clicking the email link.`:`Available only for button actions.`:`The contact shares the code with the CRM user to confirm this action.`})]},e))})]}),f&&(0,I.jsx)(`p`,{className:`record-auth-form__error`,role:`alert`,children:f})]})}),o&&c===2&&e({method:o.method,initial:o.settings,lead:E,onBack:e=>{_({settings:e}),u(1),p(``)},onClose:v,onSave:w}),m&&(0,I.jsx)(S,{isOpen:!0,type:`alert`,variant:`warning`,title:`Delete record verification?`,description:`Remove the configuration for ${P(m)}? Existing confirmation statuses are preserved.`,saveLabel:`Delete`,onClose:()=>h(void 0),onSave:()=>{i(e=>e.filter(e=>e.id!==m.id)),h(void 0),t(`Record verification configuration deleted`)}})]})}var F,I,we,L,R,Te,Ee,De,Oe=e((()=>{F=t(n(),1),i(),c(),u(),y(),x(),T(),O(),k(),re(),se(),xe(),I=r(),we={record:`Record creation`,criteria:`Picklist value`,buttons:`Button actions`},L={otp:`OTP on Phone`,code:`Code on Email`,link:`Confirmation Link`},R={Status:[`Open`,`In progress`,`Completed`],"Lead Source":[`Trade Show`,`Web Form`,`Referral`],Rating:[`Hot`,`Warm`,`Cold`]},Te=[`Standard`,`Enterprise`].map(e=>({label:e,value:e})),Ee=[`Administrator`,`Standard`,`Sales Manager`].map(e=>({label:e,value:e})),De=e=>e===`otp`?M:N,Ce.__docgenInfo={description:`PM mock: independent record-consent rules; no live delivery or enforcement.`,methods:[],displayName:`RecordVerification`,props:{renderSettings:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(props: ConfirmationSettingsProps) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  method: ConfirmationMethod; initial: VerificationConfig; lead: ReactNode;
  onBack: (settings: VerificationConfig) => void; onClose: () => void; onSave: (settings: VerificationConfig) => void;
}`,signature:{properties:[{key:`method`,value:{name:`union`,raw:`'otp' | 'code' | 'link'`,elements:[{name:`literal`,value:`'otp'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'link'`}],required:!0}},{key:`initial`,value:{name:`VerificationConfig`,required:!0}},{key:`lead`,value:{name:`ReactNode`,required:!0}},{key:`onBack`,value:{name:`signature`,type:`function`,raw:`(settings: VerificationConfig) => void`,signature:{arguments:[{type:{name:`VerificationConfig`},name:`settings`}],return:{name:`void`}},required:!0}},{key:`onClose`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`onSave`,value:{name:`signature`,type:`function`,raw:`(settings: VerificationConfig) => void`,signature:{arguments:[{type:{name:`VerificationConfig`},name:`settings`}],return:{name:`void`}},required:!0}}]}},name:`props`}],return:{name:`ReactNode`}}},description:``},onNotice:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(message: string) => void`,signature:{arguments:[{type:{name:`string`},name:`message`}],return:{name:`void`}}},description:``}}}})),ke=e((()=>{}));function Ae(e,t=`7`){return{sender:`owner`,subject:Re,body:e===`email`?`Hello \${Contacts.FullName},\n\nPlease verify your email address with \${Organization.OrganizationName}. To confirm your email address, please click on the button below. This link expires in ${t} day(s).\n\n[Verify email address]\n\nIf you did not request this verification, please ignore this email.\n\nRegards,\n\${Organization.OrganizationName}`:`Email address verified

Thank you for confirming your email address. You can now close this page.`}}function je({kind:e,initial:t,validity:n,onClose:r,onSave:i,readOnly:o=!1}){let[s,c]=(0,V.useState)(()=>t??Ae(e,n)),[u,f]=(0,V.useState)(`en-US`),[p,m]=(0,V.useState)(s.body),[h,g]=(0,V.useState)(0);return(0,H.jsx)(S,{isOpen:!0,title:o?e===`email`?`Verification Link Email Preview`:`Verification Page Preview`:e===`email`?`Edit Email Content`:`Edit Verification Page`,width:865,className:`record-auth-template-modal${o?` record-auth-preview-modal`:``}`,disableAutoFocus:!0,showFooter:!o,showClose:o,closeLabel:`Close preview`,headerActions:!o&&e===`email`?(0,H.jsx)(l,{"aria-label":`Template language`,width:`fit-content`,value:u,onChange:f,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:[{value:`en-US`,label:`English (United States)`},{value:`en-GB`,label:`English (United Kingdom)`},{value:`fr`,label:`French`},{value:`de`,label:`German`},{value:`es`,label:`Spanish`},{value:`it`,label:`Italian`},{value:`pt`,label:`Portuguese`},{value:`nl`,label:`Dutch`},{value:`ja`,label:`Japanese`},{value:`zh`,label:`Chinese (Simplified)`},{value:`hi`,label:`Hindi`},{value:`ta`,label:`Tamil`}]}):void 0,footerStart:(0,H.jsx)(a,{variant:`ghost-blue`,onClick:()=>{let t=Ae(e,n);c(t),m(t.body),g(e=>e+1)},children:`Reset to default`}),onClose:r,onSave:()=>i?.(s),children:(0,H.jsxs)(`div`,{className:`record-auth-template${e===`page`?` record-auth-template--page`:``}`,children:[o&&e===`email`&&(0,H.jsxs)(`dl`,{className:`record-auth-preview__fields`,children:[(0,H.jsx)(`dt`,{children:`From`}),(0,H.jsx)(`dd`,{children:s.sender===`organization`?`Organization Email`:`Record Owner’s Email`}),(0,H.jsx)(`dt`,{children:`Subject`}),(0,H.jsx)(`dd`,{children:s.subject})]}),!o&&e===`email`&&(0,H.jsxs)(`div`,{className:`record-auth-template__fields`,children:[(0,H.jsx)(l,{label:`From`,"aria-label":`From`,width:`100%`,value:s.sender,options:[{value:`owner`,label:`Record Owner’s Email`},{value:`organization`,label:`Organization Email`}],onChange:e=>c(t=>({...t,sender:e}))}),(0,H.jsx)(d,{label:`Subject`,width:`100%`,value:s.subject,onChange:e=>c(t=>({...t,subject:e.target.value}))})]}),o?(0,H.jsx)(`div`,{className:`rte-field`,children:(0,H.jsx)(`div`,{className:`rte-editor-wrap`,children:(0,H.jsx)(`div`,{className:`rte-editor`,role:`region`,"aria-label":e===`email`?`Email template preview`:`Verification page preview`,children:e===`email`?s.body.split(`[Verify email address]`).map((e,t)=>(0,H.jsxs)(`span`,{children:[t>0&&(0,H.jsx)(`span`,{className:`record-auth-preview__verify`,children:`Verify email address`}),e]},t)):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`h2`,{children:s.body.split(`

`)[0]}),s.body.split(`

`).slice(1).map((e,t)=>(0,H.jsx)(`p`,{children:e},t))]})})})}):(0,H.jsx)(D,{width:`100%`,minHeight:e===`page`?0:380,alwaysShowToolbar:!0,toolbarPosition:`top`,showExpand:!1,"aria-label":e===`email`?`Email template body`:`Verification page body`,initialContent:e===`email`?p.split(`[Verify email address]`).map((e,t)=>(0,H.jsxs)(`span`,{children:[t>0&&(0,H.jsx)(`span`,{contentEditable:!1,children:(0,H.jsx)(a,{variant:`primary`,className:`record-auth-template__verify`,children:`Verify email address`})}),e]},t)):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`h2`,{children:p.split(`

`)[0]}),p.split(`

`).slice(1).map((e,t)=>(0,H.jsx)(`p`,{children:e},t))]}),onChange:t=>c(n=>({...n,body:e===`email`?t.replace(/(?<!\[)Verify email address(?!\])/g,`[Verify email address]`):t}))},h)]})})}function z({label:e,children:t}){return(0,H.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,H.jsx)(`span`,{className:`record-auth-form__label`,children:e}),(0,H.jsx)(`div`,{children:t})]})}function Me({channel:e,initial:t,expanded:n,onClose:r,onSave:i,method:o,lead:c,onBack:u}){let f=(0,V.useId)(),[p,m]=(0,V.useState)(()=>({...t,fields:[...t.fields]})),[h,g]=(0,V.useState)(n),[_,y]=(0,V.useState)(),[x,C]=(0,V.useState)({}),w=e===`phone`,T=o===`code`,E=w||T,D=(e,t)=>{m(n=>({...n,[e]:t})),C(t=>({...t,[e]:void 0}))},O=e=>x[e]?(0,H.jsx)(`p`,{id:`${f}-${e}-error`,className:`record-auth-form__error`,role:`alert`,children:x[e]}):null,te=()=>{let e={},t=[`validity`,`resendAttempts`,`resetAfter`,...E?[`validationAttempts`,`validationReset`]:[]];p.fields.length||(e.fields=`Select at least one field to verify.`);let n={validity:E?`OTP Validity`:`Verification Link Validity`,resendAttempts:`Max Resend Attempts`,resetAfter:`Reset Resend Attempt After`,validationAttempts:`Max Validation Attempts`,validationReset:`Reset Validation Attempt After`};for(let r of t){let t=p[r];t.trim()?(!/^\d+$/.test(t)||!Number.isSafeInteger(Number(t))||Number(t)<1)&&(e[r]=`${n[r]} must be a positive whole number`):e[r]=`${n[r]} cannot be empty`}if(w&&!p.carrier&&(e.carrier=`Select an SMS carrier.`),w&&(!p.template.trim()||p.template.length>160||!p.template.includes("${OTP}"))&&(e.template="Enter an SMS template of up to 160 characters containing ${OTP}."),C(e),Object.keys(e).length){(e.resendAttempts||e.resetAfter||e.validationAttempts||e.validationReset)&&g(!0);return}i(p)},k=(e,t,n)=>(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`div`,{className:`record-auth-form__number`,children:[(0,H.jsx)(d,{type:`number`,"aria-label":t,error:!!x[e],"aria-invalid":!!x[e],"aria-describedby":[n&&`${f}-${e}-unit`,x[e]&&`${f}-${e}-error`].filter(Boolean).join(` `)||void 0,min:1,step:1,width:`100%`,value:p[e],onChange:t=>D(e,t.target.value)}),n&&(0,H.jsx)(`span`,{id:`${f}-${e}-unit`,children:n===`Minutes`?`Minute(s)`:n})]}),O(e)]});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(S,{isOpen:!0,title:o?`Record Verification via ${w?`OTP on Phone`:T?`Code on Email`:`Confirmation Link`}`:`Data Verification via ${w?`Phone Number`:`Email Address`}`,className:`record-auth-config-modal`,width:670,onClose:r,onSave:te,footerStart:u?(0,H.jsx)(a,{onClick:()=>u(p),children:`Back`}):void 0,children:(0,H.jsxs)(`div`,{className:`record-auth-form`,children:[c,!o&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{label:`Fields`,children:(0,H.jsxs)(`div`,{role:`group`,"aria-label":`Fields to verify`,"aria-invalid":!!x.fields,"aria-describedby":x.fields?`${f}-fields-error`:void 0,children:[(0,H.jsx)(A,{value:p.fields,options:w?M:N,placeholder:`Add`,onChange:e=>D(`fields`,e),width:`100%`}),O(`fields`)]})}),(0,H.jsx)(s,{label:`Restrict outgoing ${w?`calls`:`emails`} until verified`,checked:p.restrict,onChange:e=>D(`restrict`,e.target.checked)})]}),(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${f}-settings`,children:[(0,H.jsx)(`h2`,{id:`${f}-settings`,children:E?T?`Email Code Configuration`:`OTP Configuration`:`Verification Link Configuration`}),E&&(0,H.jsx)(z,{label:`OTP Length`,children:(0,H.jsx)(`div`,{className:`record-auth-form__inline`,role:`radiogroup`,"aria-label":`OTP Length`,children:[`6`,`4`].map(e=>(0,H.jsx)(ee,{label:`${e} Digits`,name:`${f}-digits`,checked:p.digits===e,onChange:()=>D(`digits`,e)},e))})}),(0,H.jsx)(z,{label:E?`Valid for`:`Verification Link Validity`,children:k(`validity`,E?`OTP validity`:`Verification link validity`,E?`Minutes`:`Day(s)`)}),w?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{label:`SMS Carrier`,children:(0,H.jsxs)(`div`,{role:`group`,"aria-label":`SMS carrier selection`,"aria-invalid":!!x.carrier,"aria-describedby":x.carrier?`${f}-carrier-error`:void 0,children:[(0,H.jsx)(l,{"aria-label":`SMS Carrier`,width:`100%`,value:p.carrier,options:Ie,onChange:e=>D(`carrier`,e)}),O(`carrier`)]})}),(0,H.jsxs)(`div`,{className:`record-auth-form__row record-auth-form__template-row`,children:[(0,H.jsx)(`label`,{className:`record-auth-form__label`,htmlFor:`${f}-sms-template`,children:`SMS Template`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(le,{id:`${f}-sms-template`,error:!!x.template,"aria-invalid":!!x.template,"aria-describedby":`${f}-sms-hint${x.template?` ${f}-template-error`:``}`,width:`100%`,minHeight:90,maxLength:160,value:p.template,onChange:e=>D(`template`,e.target.value)}),O(`template`),(0,H.jsxs)(`div`,{className:`record-auth-form__count`,children:[(0,H.jsx)(`span`,{id:`${f}-sms-hint`,children:`Type # to insert merge field`}),(0,H.jsxs)(`span`,{children:[p.template.length,`/160`]})]}),(0,H.jsxs)(`div`,{className:`record-auth-form__preview`,role:`region`,"aria-label":`SMS Preview`,children:[(0,H.jsx)(`strong`,{children:`SMS Preview`}),(0,H.jsx)(`p`,{children:ge(p)})]}),(0,H.jsx)(a,{variant:`link-primary`,size:`sm`,children:`Send Text SMS`})]})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{label:`Email Content`,children:(0,H.jsxs)(`button`,{type:`button`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>y({title:`Email Content`,content:``,kind:`email`}),children:[(0,H.jsx)(`span`,{children:ve.find(e=>e.value===p.emailTemplate)?.label}),(0,H.jsx)(v,{name:`CrmEditFilledMd`,size:12})]})}),!T&&(0,H.jsx)(z,{label:`Verification Page`,children:(0,H.jsxs)(`button`,{type:`button`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>y({title:`Verification Page`,content:``,kind:`page`}),children:[(0,H.jsx)(`span`,{children:ye.find(e=>e.value===p.verificationPage)?.label}),(0,H.jsx)(v,{name:`CrmEditFilledMd`,size:12})]})})]})]}),!h&&(0,H.jsx)(`div`,{children:(0,H.jsx)(a,{variant:`link-primary`,"aria-expanded":h,"aria-controls":`${f}-more`,onClick:()=>g(!0),children:`More Options`})}),h&&(0,H.jsxs)(`div`,{id:`${f}-more`,className:`record-auth-form__options`,children:[(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${f}-resend`,children:[(0,H.jsx)(`h2`,{id:`${f}-resend`,children:`Resend Options`}),E&&(0,H.jsx)(z,{label:`OTP Resend`,children:(0,H.jsx)(l,{"aria-label":`OTP Resend`,width:`100%`,options:Le,value:p.resendMode,onChange:e=>D(`resendMode`,e)})}),(0,H.jsx)(z,{label:`Max Resend Attempts`,children:k(`resendAttempts`,`Max Resend Attempts`)}),(0,H.jsx)(z,{label:`Reset Attempt After`,children:k(`resetAfter`,`Reset resend attempt after`,E?`Minutes`:`Hour(s)`)})]}),E&&(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${f}-validation`,children:[(0,H.jsx)(`h2`,{id:`${f}-validation`,children:`Validation Options`}),(0,H.jsx)(z,{label:`Max Validation Attempts`,children:k(`validationAttempts`,`Max Validation Attempts`)}),(0,H.jsx)(z,{label:`Reset Attempt After`,children:k(`validationReset`,`Reset validation attempt after`,`Hour(s)`)})]})]}),!E&&(0,H.jsx)(b,{variant:`info`,message:`A new send invalidates the previous link. Latest request wins.`})]})}),_?.kind&&(0,H.jsx)(je,{kind:_.kind,validity:p.validity,initial:_.kind===`email`?p.emailContent:p.pageContent,onClose:()=>y(void 0),onSave:e=>{D(_.kind===`email`?`emailContent`:`pageContent`,e),y(void 0)}})]})}function Ne({channel:e,config:t,onEdit:n,onPreview:r}){let i=e===`phone`,o=i?`CrmMobile`:`CrmBestTimeToEmailPlayBooks`,s=g[o],c=m[o],l=i?`OTP Configuration for Phone Number Verification`:`Verification Link for Email Address Verification`,u=ve.find(e=>e.value===t.emailTemplate)?.label,d=ye.find(e=>e.value===t.verificationPage)?.label;return(0,H.jsxs)(`section`,{className:`record-auth__summary`,"aria-label":l,children:[(0,H.jsxs)(`div`,{className:`record-auth__summary-title`,children:[(0,H.jsxs)(`h2`,{children:[(0,H.jsx)(s,{width:c.width,height:c.height,"aria-hidden":`true`}),l]}),(0,H.jsx)(a,{variant:`link-primary`,size:`sm`,"aria-label":`Edit ${i?`phone`:`email`} verification`,onClick:n,children:`Edit`})]}),(0,H.jsxs)(`div`,{className:`record-auth__summary-card`,children:[(0,H.jsx)(`p`,{children:i?`${t.digits} Digit OTP - Valid for ${t.validity} minutes`:`Link valid for ${t.validity} days`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{children:`Resend:`}),(0,H.jsxs)(`dd`,{children:[t.resendAttempts,` attempts, Reset after `,t.resetAfter,` `,i?`minutes`:`hours`]}),i&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`dt`,{children:`Validation:`}),(0,H.jsxs)(`dd`,{children:[t.validationAttempts,` attempts, Reset after `,t.validationReset,` `,t.validationReset===`1`?`hour`:`hours`]})]})]}),(0,H.jsx)(`div`,{className:`record-auth__links`,children:i?(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:`SMS Template Preview`,content:t.template}),children:`SMS Template`}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:u??`Email Content`,content:``,kind:`email`}),children:`Verification Link Email`}),(0,H.jsx)(`span`,{className:`record-auth__link-separator`,"aria-hidden":`true`}),(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:d??`Verification Page`,content:``,kind:`page`}),children:`Verification Page`})]})})]})]})}function B({initial:e=`empty`,dialog:t,expanded:n=!1,configuration:r=!1}){let i=(0,V.useId)(),[a,o]=(0,V.useState)(r?`configuration`:`verification`),[s,c]=(0,V.useState)(()=>e===`empty`?{}:{phone:{...j(`phone`),carrier:`twilio`},...e===`both`?{email:j(`email`)}:{}}),[u,d]=(0,V.useState)(t),[f,m]=(0,V.useState)(),[h,g]=(0,V.useState)();(0,V.useEffect)(()=>{if(!h)return;let e=window.setTimeout(()=>g(void 0),5e3);return()=>window.clearTimeout(e)},[h]);let[_,v]=(0,V.useState)(`modules-fields`),y=!!s.phone||!!s.email,b=Fe.filter(e=>!s[e.value]);return(0,H.jsxs)(`div`,{className:`record-auth`,children:[(0,H.jsx)(`header`,{children:(0,H.jsx)(w,{moduleLabel:null,showTerritory:!1})}),(0,H.jsxs)(`div`,{className:`record-auth__shell`,children:[(0,H.jsx)(`aside`,{className:`record-auth__sidebar`,"aria-label":`Setup navigation`,children:(0,H.jsx)(fe,{variant:`setup`,searchable:!0,width:`100%`,items:pe,activeId:_,onSelect:v})}),(0,H.jsxs)(`main`,{className:`record-auth__workspace`,"aria-label":`Record Authentication`,children:[(0,H.jsxs)(`div`,{className:`record-auth__module-title`,children:[(0,H.jsx)(`svg`,{width:`14.5`,height:`12`,viewBox:`0 0 14.5 12`,fill:`none`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M6 1 1 6l5 5M1 6h12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,H.jsxs)(`h1`,{children:[`Contacts`,(0,H.jsx)(`svg`,{width:`9`,height:`5`,viewBox:`0 0 9 5`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M0 0h9L4.5 5Z`,fill:`currentColor`})})]})]}),(0,H.jsx)(`nav`,{className:`record-auth__module-tabs`,"aria-label":`Contacts settings`,children:be.map(e=>(0,H.jsx)(`span`,{"aria-current":e===`Record Authentication`?`page`:void 0,children:e},e))}),(0,H.jsxs)(`div`,{className:`record-auth__content`,children:[(0,H.jsx)(oe,{tabs:Pe,activeTab:a,onChange:o,variant:`secondary`}),(0,H.jsxs)(`div`,{className:`record-auth__panel`,role:`tabpanel`,"aria-label":a===`verification`?`Data Verification`:`Record Verification`,children:[a===`verification`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,H.jsx)(`p`,{children:`Verify that phone numbers and email addresses belong to the contact.`}),y&&b.length>0&&(0,H.jsx)(l,{id:`${i}-verify`,width:`fit-content`,placeholder:`Verify via`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:b,onChange:e=>d(e)})]}),!y&&(0,H.jsx)(l,{id:`${i}-verify`,width:180,placeholder:`Verify via`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:b,onChange:e=>d(e)}),[`phone`,`email`].map(e=>s[e]&&(0,H.jsx)(Ne,{channel:e,config:s[e],onEdit:()=>d(e),onPreview:m},e))]}),(0,H.jsx)(`div`,{hidden:a!==`configuration`,children:(0,H.jsx)(Ce,{onNotice:e=>g({message:e}),renderSettings:({method:e,initial:t,lead:n,onBack:r,onClose:i,onSave:a})=>(0,H.jsx)(Me,{channel:e===`otp`?`phone`:`email`,method:e,initial:t,expanded:!1,lead:n,onBack:r,onClose:i,onSave:a},e)})})]})]})]})]}),(0,H.jsx)(`footer`,{className:`record-auth__wms`,"aria-label":`Communication bar`,children:(0,H.jsx)(he,{})}),h&&(0,H.jsx)(p,{className:`record-auth__notice`,variant:`success`,message:h.message,onClose:()=>g(void 0)}),u&&(0,H.jsx)(Me,{channel:u,initial:s[u]??j(u),expanded:n,onClose:()=>d(void 0),onSave:e=>{c(t=>({...t,[u]:e})),g({message:`${u===`phone`?`Phone Number`:`Email Address`} verification configured successfully`}),d(void 0)}},u),f?.kind&&(0,H.jsx)(je,{kind:f.kind,validity:s.email?.validity,readOnly:!0,initial:f.kind===`email`?s.email?.emailContent:s.email?.pageContent,onClose:()=>m(void 0)}),f&&!f.kind&&(0,H.jsx)(S,{isOpen:!0,title:f.title,width:620,className:`record-auth-preview-modal`,showFooter:!1,disableAutoFocus:!0,showClose:!0,closeLabel:`Close preview`,onClose:()=>m(void 0),children:(0,H.jsx)(`div`,{className:`record-auth-form`,children:(0,H.jsx)(`p`,{className:`record-auth-form__template`,children:f.content})})})]})}var V,H,U,W,G,K,Pe,Fe,Ie,Le,Re,ze,q,J,Y,X,Z,Q,$,Be;e((()=>{V=t(n(),1),i(),o(),c(),u(),_(),h(),f(),y(),x(),C(),E(),T(),ae(),se(),ce(),ue(),me(),xe(),Oe(),ke(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,Pe=[{id:`verification`,label:`Data Verification`},{id:`configuration`,label:`Record Verification`}],Fe=[{value:`phone`,label:`Phone Number`,icon:(0,H.jsx)(v,{name:`Mobile`,size:16})},{value:`email`,label:`Email Address`,icon:(0,H.jsx)(v,{name:`Email`,size:16})}],Ie=[{value:`twilio`,label:`Twilio`},{value:`messagebird`,label:`MessageBird`},{value:`vonage`,label:`Vonage`},{value:`plivo`,label:`Plivo`},{value:`sinch`,label:`Sinch`},{value:`telnyx`,label:`Telnyx`},{value:`textlocal`,label:`Textlocal`},{value:`clicksend`,label:`ClickSend`}],Le=[{value:`same`,label:`Same OTP`},{value:`new`,label:`New OTP`}],Re="Verify your email address with ${Organization.OrganizationName}",ze={title:`Design System/Patterns/Record Authentication`,parameters:{layout:`fullscreen`,docs:{description:{component:`Data Verification configuration based on the six provided PDF frames. Phone OTP, email verification links, template previews, and in-memory saved summaries. Record Verification follows the PM mock with action, method, and delivery configuration steps. No real SMS, email, or authentication requests are made.`}}}},q={render:()=>(0,H.jsx)(B,{}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await U(e.querySelector(`.ngtb-badge`)).not.toBeInTheDocument(),await U(K(t.getByRole(`button`,{name:`User profile`})).getByRole(`img`,{name:`User`})).toHaveAttribute(`src`,`/crm-design-system/images/avatars/user_06.jpg`);let r=t.getByRole(`button`,{name:`Verify via`});await U(r).toHaveAttribute(`data-variant`,`primary`),await W.click(r);for(let e of[`Phone Number`,`Email Address`])await U(n.getByRole(`option`,{name:e}).querySelector(`.dropdown-option-icon svg`)).toBeInTheDocument();await W.click(n.getByRole(`option`,{name:`Phone Number`}));let i=await n.findByRole(`dialog`);await G(()=>U(K(i).getByText(`Data Verification via Phone Number`)).toBeVisible()),await W.click(K(i).getByRole(`button`,{name:`Cancel`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.queryByRole(`region`,{name:`OTP Configuration for Phone Number Verification`})).not.toBeInTheDocument(),await W.click(t.getByRole(`tab`,{name:`Record Verification`})),await U(t.getByRole(`heading`,{name:`No record verification configured`})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Data Verification`}))}},J={render:()=>(0,H.jsx)(B,{dialog:`phone`})},Y={render:()=>(0,H.jsx)(B,{dialog:`phone`,expanded:!0}),play:async({canvasElement:e})=>{let t=K(await K(e.ownerDocument.body).findByRole(`dialog`)),n=t.getByRole(`spinbutton`,{name:`Max Resend Attempts`});await W.clear(n),await W.click(t.getByRole(`button`,{name:`Save`})),await U(n).toHaveAccessibleDescription(`Max Resend Attempts cannot be empty`),await W.type(n,`0`),await W.click(t.getByRole(`button`,{name:`Save`})),await U(n).toHaveAccessibleDescription(`Max Resend Attempts must be a positive whole number`),await W.clear(n),await W.type(n,`5`),await U(n).not.toHaveAttribute(`aria-invalid`,`true`)}},X={render:()=>(0,H.jsx)(B,{dialog:`email`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body),r=K(await n.findByRole(`dialog`));await U(r.queryByRole(`heading`,{name:`Resend Options`})).not.toBeInTheDocument(),await W.click(r.getByRole(`button`,{name:`More Options`})),await G(()=>U(r.getByRole(`heading`,{name:`Resend Options`})).toBeVisible());let i=r.getByRole(`spinbutton`,{name:`Max Resend Attempts`});await W.clear(i),await W.click(r.getByRole(`button`,{name:`Save`})),await U(i).toHaveAccessibleDescription(`Max Resend Attempts cannot be empty`),await W.type(i,`5`);let a=r.getByRole(`spinbutton`,{name:`Verification link validity`});await W.clear(a),await W.click(r.getByRole(`button`,{name:`Save`})),await U(r.getByRole(`alert`)).toHaveTextContent(`Verification Link Validity cannot be empty`),await U(a).toHaveAttribute(`aria-invalid`,`true`),await U(a).toHaveAccessibleDescription(`Day(s) Verification Link Validity cannot be empty`),await U(r.getByRole(`alert`).parentElement).toContainElement(a),await W.type(a,`10`);let o=[];for(let[e,t,r]of[[`Verification Link Email`,`Edit Email Content`,`Email template body`],[`Verification Page`,`Edit Verification Page`,`Verification page body`]]){let i=K(await n.findByRole(`dialog`)).getByRole(`button`,{name:e});await U(i).toHaveClass(`record-auth-form__template-input`),await U(i).not.toHaveClass(`button-btn`),await U(getComputedStyle(i).height).toBe(`34px`);let a=getComputedStyle(i).backgroundColor;await W.hover(i),await U(getComputedStyle(i).backgroundColor).toBe(a),await U(getComputedStyle(i).backgroundImage).toBe(`none`),await W.unhover(i),await U(i.querySelector(`svg`)).toHaveAttribute(`width`,`12`),await W.click(i),await U(n.getByRole(`dialog`,{name:`Data Verification via Email Address`})).toBeVisible(),await U(n.getAllByRole(`dialog`)).toHaveLength(2);let s=K(await n.findByRole(`dialog`,{name:t})),c=s.getByRole(`textbox`,{name:r});await G(()=>U(c).toBeVisible()),await U(s.queryByTitle(`Expand`)).not.toBeInTheDocument();let l=c.closest(`.rte-field`),u=getComputedStyle(l).borderColor,d=c.closest(`.rte-editor-wrap`),f=getComputedStyle(c),p=getComputedStyle(d),m=getComputedStyle(d,`::before`),h=[p.padding,m.marginBottom,f.padding,f.borderRadius,f.boxShadow];if(t===`Edit Email Content`?o=h:await U(h).toEqual(o),await W.hover(l),await U(getComputedStyle(l).borderColor).toBe(u),t===`Edit Email Content`){await U(s.getByRole(`button`,{name:`English (United States)`})).toBeVisible(),await W.click(s.getByRole(`button`,{name:`English (United States)`}));let e=n.getByRole(`listbox`),t=e.getBoundingClientRect().width;for(let t of e.querySelectorAll(`.dropdown-option-label`))await U(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth);await W.click(n.getByRole(`option`,{name:`French`,exact:!0}));let r=s.getByRole(`button`,{name:`French`,exact:!0});await U(r).toBeVisible(),await W.click(r),await U(Math.round(n.getByRole(`listbox`).getBoundingClientRect().width)).toBe(Math.round(t)),await U(t).toBeGreaterThan(r.getBoundingClientRect().width),await W.click(n.getByRole(`option`,{name:`French`,exact:!0}))}else await U(s.queryByRole(`button`,{name:`English (United States)`})).not.toBeInTheDocument(),await U(s.getByRole(`heading`,{name:`Email address verified`})).toBeVisible(),await U(c.closest(`.record-auth-template`)).toHaveClass(`record-auth-template--page`),await U(c).not.toHaveTextContent("${Organization.OrganizationName}"),await U(getComputedStyle(c).minHeight).toBe(`0px`),await U(getComputedStyle(d).minHeight).toBe(`0px`);if(t===`Edit Email Content`){let e=s.getByRole(`button`,{name:`Verify email address`});await U(e).toBeVisible(),await U(getComputedStyle(e).backgroundImage).toBe(`none`),await U(getComputedStyle(e).fontSize).toBe(`14px`);let t=s.getByRole(`button`,{name:`Record Owner’s Email`});await U(getComputedStyle(t).fontSize).toBe(`14px`),window.innerWidth>=900&&await U(Math.round(t.getBoundingClientRect().width)).toBe(390);for(let e of[`From`,`Subject`])await U(getComputedStyle(s.getByText(e,{exact:!0})).textAlign).toBe(`right`)}await W.click(c),await W.keyboard(`{ControlOrMeta>}a{/ControlOrMeta}`),await W.type(c,`Custom verification content`),await W.click(s.getByRole(`button`,{name:`Reset to default`})),await U(s.getByRole(`textbox`,{name:r})).not.toHaveTextContent(`Custom verification content`),t===`Edit Email Content`&&(await W.clear(s.getByRole(`textbox`,{name:`Subject`})),await W.type(s.getByRole(`textbox`,{name:`Subject`}),`Confirm your email`)),t===`Edit Verification Page`?await W.keyboard(`{Escape}`):await W.click(s.getByRole(`button`,{name:`Save`})),await G(()=>U(n.getAllByRole(`dialog`)).toHaveLength(1));let g=K(await n.findByRole(`dialog`,{name:`Data Verification via Email Address`}));await U(g.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10)}await W.click(K(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Verification Link Email`}));let s=K(await n.findByRole(`dialog`,{name:`Edit Email Content`}));await U(s.getByRole(`textbox`,{name:`Subject`})).toHaveValue(`Confirm your email`),await W.click(s.getByRole(`button`,{name:`Cancel`})),await W.click(K(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Link valid for 10 days`)).toBeVisible(),await W.click(t.getByRole(`button`,{name:`Verify via`})),await U(n.queryByRole(`option`,{name:`Email Address`})).not.toBeInTheDocument(),await U(n.getByRole(`option`,{name:`Phone Number`})).toBeVisible(),await W.keyboard(`{Escape}`),await W.click(t.getByRole(`button`,{name:`Edit email verification`}));let c=K(await n.findByRole(`dialog`));await U(c.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10),await W.click(c.getByRole(`button`,{name:`Cancel`}))}},Z={render:()=>(0,H.jsx)(B,{initial:`phone`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await W.click(t.getByRole(`button`,{name:`Verify via`})),await U(n.queryByRole(`option`,{name:`Phone Number`})).not.toBeInTheDocument(),await W.click(n.getByRole(`option`,{name:`Email Address`}));let r=K(await n.findByRole(`dialog`));await W.click(r.getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.queryByRole(`button`,{name:`Verify via`})).not.toBeInTheDocument();let i=t.getByRole(`status`);await U(i).toHaveClass(`record-auth__notice`),await U(getComputedStyle(i).position).toBe(`fixed`),await U(i).toHaveTextContent(`Email Address verification configured successfully`),await G(()=>U(t.queryByRole(`status`)).not.toBeInTheDocument(),{timeout:6500})}},Q={render:()=>(0,H.jsx)(B,{initial:`both`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await U(t.getByText(`6 Digit OTP - Valid for 4 minutes`)).toBeVisible(),await U(t.getByText(`Link valid for 7 days`)).toBeVisible();let r=t.getByRole(`heading`,{name:`Contacts`,exact:!0});await U(r.querySelector(`svg`)).toHaveAttribute(`width`,`9`),await U(r.parentElement?.querySelector(`:scope > svg`)).toHaveAttribute(`width`,`14.5`),await U(getComputedStyle(r).gap).toBe(`6px`);let i=e.querySelector(`.record-auth__link-separator`);await U(getComputedStyle(i).width).toBe(`6px`),await U(getComputedStyle(i).height).toBe(`6px`),await U(getComputedStyle(i).backgroundColor).toBe(`rgb(217, 217, 217)`),await U(getComputedStyle(i.parentElement).gap).toBe(`10px`),await U(t.queryByRole(`button`,{name:`Verify via`})).not.toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`SMS Template`,exact:!0}));let a=K(await n.findByRole(`dialog`,{name:`SMS Template Preview`}));await G(()=>U(a.getByText(/Your verification OTP is/)).toBeVisible()),await U(a.getAllByRole(`button`)).toHaveLength(1),await W.click(a.getByRole(`button`,{name:`Close preview`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument());for(let[e,r,i]of[[`Verification Link Email`,`Verification Link Email Preview`,`Email template preview`],[`Verification Page`,`Verification Page Preview`,`Verification page preview`]]){await W.click(t.getByRole(`button`,{name:e,exact:!0}));let a=await n.findByRole(`dialog`,{name:r}),o=K(a);await G(()=>U(o.getByRole(`region`,{name:i})).toBeVisible()),await U(o.queryByRole(`textbox`)).not.toBeInTheDocument(),await U(a.querySelector(`[contenteditable="true"]`)).toBeNull(),await U(a.querySelector(`.rte-toolbar`)).toBeNull(),await U(a.querySelector(`.modal-footer-area`)).toBeNull(),await U(o.getAllByRole(`button`)).toHaveLength(1),await W.click(o.getByRole(`button`,{name:`Close preview`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument())}await W.click(t.getByRole(`button`,{name:`Edit phone verification`}));let o=K(await n.findByRole(`dialog`));await W.click(o.getByRole(`radio`,{name:`4 Digits`})),await U(o.getByRole(`region`,{name:`SMS Preview`})).toHaveTextContent(`4829`),await W.click(o.getByRole(`button`,{name:`More Options`})),await U(o.queryByRole(`button`,{name:`Fewer Options`})).not.toBeInTheDocument();for(let e of[`OTP validity`,`Reset resend attempt after`]){let t=o.getByRole(`spinbutton`,{name:e});await U(t).toHaveAccessibleDescription(`Minute(s)`),await U(t.closest(`.input-input-wrapper`)?.querySelector(`.input-suffix`)).toBeFalsy()}await U(o.getByRole(`spinbutton`,{name:`Max Resend Attempts`})).toHaveValue(5),await U(o.getByRole(`textbox`,{name:`SMS Template`})).toHaveAccessibleDescription(`Type # to insert merge field`),await U(o.getByText(`SMS Preview`)).toBeVisible();let s=o.getByRole(`button`,{name:`Send Text SMS`});await U(s).toHaveAttribute(`data-variant`,`link-primary`),await W.click(s),await U(o.queryByText(`Demo preview only. No SMS was sent.`)).not.toBeInTheDocument(),await W.click(o.getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`4 Digit OTP - Valid for 4 minutes`)).toBeVisible();for(let[e,n,r]of[[`OTP Configuration for Phone Number Verification`,`10`,`14`],[`Verification Link for Email Address Verification`,`16`,`13`]]){let i=t.getByRole(`heading`,{name:e}).querySelector(`svg`);await U(i).toHaveAttribute(`aria-hidden`,`true`),await U(i).toHaveAttribute(`width`,n),await U(i).toHaveAttribute(`height`,r),await U(getComputedStyle(i).width).toBe(`${n}px`),await U(getComputedStyle(i).height).toBe(`${r}px`)}let c=t.getByRole(`status`);await U(c).toHaveClass(`message-box-success`),await U(c).toHaveTextContent(`Phone Number verification configured successfully`),await W.click(K(c).getByRole(`button`,{name:`Dismiss`})),await U(t.queryByRole(`status`)).not.toBeInTheDocument()}},$={name:`Record Verification`,render:()=>(0,H.jsx)(B,{configuration:!0}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body),r=async()=>(await W.click(t.getByRole(`button`,{name:`New`,exact:!0})),K(await n.findByRole(`dialog`))),i=async()=>{await W.click(K(n.getByRole(`dialog`)).getByRole(`button`,{name:`Next`}))},a=async e=>{await W.click(n.getByRole(`option`,{name:e,exact:!0}))},o=await r();await U(o.getByRole(`radio`,{name:`Record creation`})).toBeChecked(),await i(),await U(n.getByRole(`radio`,{name:`Via Confirmation Link`})).toBeDisabled(),await i(),o=K(n.getByRole(`dialog`)),await W.click(o.getByRole(`button`,{name:`Save`,exact:!0})),await U(o.getByRole(`alert`)).toHaveTextContent(`Select an SMS carrier.`),await W.click(o.getByRole(`button`,{name:`Select a field`})),await a(`Mobile`),await W.click(o.getByRole(`button`,{name:`Select`,exact:!0})),await a(`Twilio`),await W.click(o.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Record creation`,{exact:!0})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Data Verification`})),await U(t.getByRole(`button`,{name:`Verify via`})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Record Verification`})),await U(t.getByText(`Record creation`,{exact:!0})).toBeVisible(),o=await r(),await U(o.getByRole(`radio`,{name:`Record creation`})).toBeDisabled(),await U(o.getByRole(`radio`,{name:`Picklist value`})).toBeChecked(),await i(),await W.click(n.getByRole(`radio`,{name:`Via Code on Email`})),await i(),o=K(n.getByRole(`dialog`)),await G(()=>U(o.getByRole(`heading`,{name:`Email Code Configuration`})).toBeVisible()),await U(o.queryByRole(`button`,{name:`Verification Page`,exact:!0})).not.toBeInTheDocument(),await W.click(o.getByRole(`button`,{name:`Save`,exact:!0})),await U(o.getByRole(`alert`)).toHaveTextContent(`Select a verification field.`),await W.click(o.getByRole(`button`,{name:`Select a field`})),await a(`Email ID`),await W.click(o.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Status is Open`)).toBeVisible();let s=t.getByRole(`switch`,{name:`Enable Status is Open`});await W.click(s),await U(s).not.toBeChecked(),o=await r(),await W.click(o.getByRole(`radio`,{name:`Button actions`})),await i(),await U(o.getByRole(`alert`)).toHaveTextContent(`Enter a button name`),await W.type(o.getByRole(`textbox`,{name:`Button Name`}),`Approve shipment`),await i(),await W.click(n.getByRole(`radio`,{name:`Via Confirmation Link`})),await i(),o=K(n.getByRole(`dialog`)),await W.click(o.getByRole(`button`,{name:`Select a field`})),await a(`Email ID`),await W.click(o.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Approve shipment`,{exact:!0})).toBeVisible(),await W.click(t.getByRole(`button`,{name:`Edit Approve shipment`})),o=K(await n.findByRole(`dialog`)),await U(o.getByRole(`textbox`,{name:`Button Name`})).toHaveValue(`Approve shipment`),await W.click(o.getByRole(`button`,{name:`Cancel`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await W.click(t.getByRole(`button`,{name:`Delete Approve shipment`}));let c=K(await n.findByRole(`alertdialog`));await W.click(c.getByRole(`button`,{name:`Delete`,exact:!0})),await G(()=>U(t.queryByText(`Approve shipment`,{exact:!0})).not.toBeInTheDocument())}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(within(dialog).getByText('Data Verification via Phone Number')).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('region', {
      name: 'OTP Configuration for Phone Number Verification'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Record Verification'
    }));
    await expect(canvas.getByRole('heading', {
      name: 'No record verification configured'
    })).toBeVisible();
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
    await expect(form.queryByRole('heading', {
      name: 'Resend Options'
    })).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('button', {
      name: 'More Options'
    }));
    await waitFor(() => expect(form.getByRole('heading', {
      name: 'Resend Options'
    })).toBeVisible());
    const resendAttempts = form.getByRole('spinbutton', {
      name: 'Max Resend Attempts'
    });
    await userEvent.clear(resendAttempts);
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await expect(resendAttempts).toHaveAccessibleDescription('Max Resend Attempts cannot be empty');
    await userEvent.type(resendAttempts, '5');
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
    let emailTemplateGeometry: string[] = [];
    for (const [link, title, sample] of [['Verification Link Email', 'Edit Email Content', 'Email template body'], ['Verification Page', 'Edit Verification Page', 'Verification page body']]) {
      const settings = within(await body.findByRole('dialog'));
      const trigger = settings.getByRole('button', {
        name: link
      });
      await expect(trigger).toHaveClass('record-auth-form__template-input');
      await expect(trigger).not.toHaveClass('button-btn');
      await expect(getComputedStyle(trigger).height).toBe('34px');
      const inputBackground = getComputedStyle(trigger).backgroundColor;
      await userEvent.hover(trigger);
      await expect(getComputedStyle(trigger).backgroundColor).toBe(inputBackground);
      await expect(getComputedStyle(trigger).backgroundImage).toBe('none');
      await userEvent.unhover(trigger);
      await expect(trigger.querySelector('svg')).toHaveAttribute('width', '12');
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
      await expect(preview.queryByTitle('Expand')).not.toBeInTheDocument();
      const field = editor.closest('.rte-field')!;
      const border = getComputedStyle(field).borderColor;
      const canvas = editor.closest('.rte-editor-wrap')!;
      const cardStyle = getComputedStyle(editor);
      const canvasStyle = getComputedStyle(canvas);
      const logoStyle = getComputedStyle(canvas, '::before');
      const templateGeometry = [canvasStyle.padding, logoStyle.marginBottom, cardStyle.padding, cardStyle.borderRadius, cardStyle.boxShadow];
      if (title === 'Edit Email Content') emailTemplateGeometry = templateGeometry;else await expect(templateGeometry).toEqual(emailTemplateGeometry);
      await userEvent.hover(field);
      await expect(getComputedStyle(field).borderColor).toBe(border);
      if (title === 'Edit Email Content') {
        await expect(preview.getByRole('button', {
          name: 'English (United States)'
        })).toBeVisible();
        await userEvent.click(preview.getByRole('button', {
          name: 'English (United States)'
        }));
        const languageMenu = body.getByRole('listbox');
        const languageMenuWidth = languageMenu.getBoundingClientRect().width;
        for (const label of languageMenu.querySelectorAll('.dropdown-option-label')) {
          await expect(label.scrollWidth).toBeLessThanOrEqual(label.clientWidth);
        }
        await userEvent.click(body.getByRole('option', {
          name: 'French',
          exact: true
        }));
        const frenchTrigger = preview.getByRole('button', {
          name: 'French',
          exact: true
        });
        await expect(frenchTrigger).toBeVisible();
        await userEvent.click(frenchTrigger);
        await expect(Math.round(body.getByRole('listbox').getBoundingClientRect().width)).toBe(Math.round(languageMenuWidth));
        await expect(languageMenuWidth).toBeGreaterThan(frenchTrigger.getBoundingClientRect().width);
        await userEvent.click(body.getByRole('option', {
          name: 'French',
          exact: true
        }));
      } else {
        await expect(preview.queryByRole('button', {
          name: 'English (United States)'
        })).not.toBeInTheDocument();
        await expect(preview.getByRole('heading', {
          name: 'Email address verified'
        })).toBeVisible();
        await expect(editor.closest('.record-auth-template')).toHaveClass('record-auth-template--page');
        await expect(editor).not.toHaveTextContent('\${Organization.OrganizationName}');
        await expect(getComputedStyle(editor).minHeight).toBe('0px');
        await expect(getComputedStyle(canvas).minHeight).toBe('0px');
      }
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
    const moduleTitle = canvas.getByRole('heading', {
      name: 'Contacts',
      exact: true
    });
    await expect(moduleTitle.querySelector('svg')).toHaveAttribute('width', '9');
    await expect(moduleTitle.parentElement?.querySelector(':scope > svg')).toHaveAttribute('width', '14.5');
    await expect(getComputedStyle(moduleTitle).gap).toBe('6px');
    const separator = canvasElement.querySelector('.record-auth__link-separator')!;
    await expect(getComputedStyle(separator).width).toBe('6px');
    await expect(getComputedStyle(separator).height).toBe('6px');
    await expect(getComputedStyle(separator).backgroundColor).toBe('rgb(217, 217, 217)');
    await expect(getComputedStyle(separator.parentElement!).gap).toBe('10px');
    await expect(canvas.queryByRole('button', {
      name: 'Verify via'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'SMS Template',
      exact: true
    }));
    const preview = within(await body.findByRole('dialog', {
      name: 'SMS Template Preview'
    }));
    await waitFor(() => expect(preview.getByText(/Your verification OTP is/)).toBeVisible());
    await expect(preview.getAllByRole('button')).toHaveLength(1);
    await userEvent.click(preview.getByRole('button', {
      name: 'Close preview'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    for (const [link, title, region] of [['Verification Link Email', 'Verification Link Email Preview', 'Email template preview'], ['Verification Page', 'Verification Page Preview', 'Verification page preview']]) {
      await userEvent.click(canvas.getByRole('button', {
        name: link,
        exact: true
      }));
      const dialog = await body.findByRole('dialog', {
        name: title
      });
      const summaryPreview = within(dialog);
      await waitFor(() => expect(summaryPreview.getByRole('region', {
        name: region
      })).toBeVisible());
      await expect(summaryPreview.queryByRole('textbox')).not.toBeInTheDocument();
      await expect(dialog.querySelector('[contenteditable="true"]')).toBeNull();
      await expect(dialog.querySelector('.rte-toolbar')).toBeNull();
      await expect(dialog.querySelector('.modal-footer-area')).toBeNull();
      await expect(summaryPreview.getAllByRole('button')).toHaveLength(1);
      await userEvent.click(summaryPreview.getByRole('button', {
        name: 'Close preview'
      }));
      await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    }
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
    for (const [title, width, height] of [['OTP Configuration for Phone Number Verification', '10', '14'], ['Verification Link for Email Address Verification', '16', '13']]) {
      const heading = canvas.getByRole('heading', {
        name: title
      });
      const icon = heading.querySelector('svg');
      await expect(icon).toHaveAttribute('aria-hidden', 'true');
      await expect(icon).toHaveAttribute('width', width);
      await expect(icon).toHaveAttribute('height', height);
      await expect(getComputedStyle(icon!).width).toBe(\`\${width}px\`);
      await expect(getComputedStyle(icon!).height).toBe(\`\${height}px\`);
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
  name: 'Record Verification',
  render: () => <RecordAuthenticationPage configuration />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const open = async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'New',
        exact: true
      }));
      return within(await body.findByRole('dialog'));
    };
    const next = async () => {
      await userEvent.click(within(body.getByRole('dialog')).getByRole('button', {
        name: 'Next'
      }));
    };
    const choose = async (name: string) => {
      await userEvent.click(body.getByRole('option', {
        name,
        exact: true
      }));
    };
    let form = await open();
    await expect(form.getByRole('radio', {
      name: 'Record creation'
    })).toBeChecked();
    await next();
    await expect(body.getByRole('radio', {
      name: 'Via Confirmation Link'
    })).toBeDisabled();
    await next();
    form = within(body.getByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Select an SMS carrier.');
    await userEvent.click(form.getByRole('button', {
      name: 'Select a field'
    }));
    await choose('Mobile');
    await userEvent.click(form.getByRole('button', {
      name: 'Select',
      exact: true
    }));
    await choose('Twilio');
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Record creation', {
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Data Verification'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Verify via'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Record Verification'
    }));
    await expect(canvas.getByText('Record creation', {
      exact: true
    })).toBeVisible();
    form = await open();
    await expect(form.getByRole('radio', {
      name: 'Record creation'
    })).toBeDisabled();
    await expect(form.getByRole('radio', {
      name: 'Picklist value'
    })).toBeChecked();
    await next();
    await userEvent.click(body.getByRole('radio', {
      name: 'Via Code on Email'
    }));
    await next();
    form = within(body.getByRole('dialog'));
    await waitFor(() => expect(form.getByRole('heading', {
      name: 'Email Code Configuration'
    })).toBeVisible());
    await expect(form.queryByRole('button', {
      name: 'Verification Page',
      exact: true
    })).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Select a verification field.');
    await userEvent.click(form.getByRole('button', {
      name: 'Select a field'
    }));
    await choose('Email ID');
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Status is Open')).toBeVisible();
    const enabled = canvas.getByRole('switch', {
      name: 'Enable Status is Open'
    });
    await userEvent.click(enabled);
    await expect(enabled).not.toBeChecked();
    form = await open();
    await userEvent.click(form.getByRole('radio', {
      name: 'Button actions'
    }));
    await next();
    await expect(form.getByRole('alert')).toHaveTextContent('Enter a button name');
    await userEvent.type(form.getByRole('textbox', {
      name: 'Button Name'
    }), 'Approve shipment');
    await next();
    await userEvent.click(body.getByRole('radio', {
      name: 'Via Confirmation Link'
    }));
    await next();
    form = within(body.getByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'Select a field'
    }));
    await choose('Email ID');
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Approve shipment', {
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Approve shipment'
    }));
    form = within(await body.findByRole('dialog'));
    await expect(form.getByRole('textbox', {
      name: 'Button Name'
    })).toHaveValue('Approve shipment');
    await userEvent.click(form.getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete Approve shipment'
    }));
    const confirmation = within(await body.findByRole('alertdialog'));
    await userEvent.click(confirmation.getByRole('button', {
      name: 'Delete',
      exact: true
    }));
    await waitFor(() => expect(canvas.queryByText('Approve shipment', {
      exact: true
    })).not.toBeInTheDocument());
  }
}`,...$.parameters?.docs?.source}}},Be=[`Default`,`PhoneVerification`,`PhoneMoreOptions`,`EmailVerification`,`PhoneConfigured`,`Configured`,`RecordConfiguration`]}))();export{Q as Configured,q as Default,X as EmailVerification,Z as PhoneConfigured,Y as PhoneMoreOptions,J as PhoneVerification,$ as RecordConfiguration,Be as __namedExportsOrder,ze as default};