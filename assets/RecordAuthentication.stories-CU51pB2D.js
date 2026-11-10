import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-8WWHWaqa.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-0cHJvYDc.js";import{n as o,t as s}from"./Checkbox-MLDMk9w2.js";import{n as c,t as l}from"./Tooltip-BcESm9r4.js";import{n as u,t as d}from"./Dropdown-DFYzTv5Q.js";import{n as f,r as p,t as m}from"./CrmCatalog-Bic-REJ-.js";import{n as h,t as g}from"./Icon--N1XC8dR.js";import{n as _,t as v}from"./Input-5YAYfD_1.js";import{n as y,t as b}from"./MessageBox-BiXZkMQQ.js";import{n as x,t as ee}from"./Switch-DQyQCk2g.js";import{n as S,t as te}from"./MessageInfo-BQUrdfOl.js";import{n as C,t as ne}from"./Modal-CITOYVCT.js";import{n as w,t as T}from"./NextGenTopBand-D4oxLjG3.js";import{n as re,t as ie}from"./Radio-BTMwCCk7.js";import{n as E,t as D}from"./RichTextEditor-BQws941r.js";import{n as O,t as k}from"./Tabs-DReVW6oa.js";import{n as A,t as ae}from"./Tags-QWbw7iw5.js";import{n as oe,t as se}from"./Textarea-CtXeqVV0.js";import{i as j,n as ce,r as le,t as ue}from"./setupMenuItems-BWbcCjOd.js";import{n as de,t as fe}from"./WMSBar-v8NnMSID.js";function M(e){return{fields:[],restrict:!1,validity:e===`phone`?`4`:`7`,digits:`6`,carrier:``,template:me,resendMode:`same`,resendAttempts:e===`phone`?`5`:`3`,resetAfter:e===`phone`?`30`:`24`,validationAttempts:`5`,validationReset:`1`,emailTemplate:`verification`,verificationPage:`standard`}}function pe(e){return e.template.replaceAll("${OTP}",e.digits===`6`?`482913`:`4829`).replaceAll("${Valid For}",`${e.validity} minutes`).replaceAll(`<CRM User>`,`CRM User`).replaceAll("${Organization.Organization Name}",`Zoho`)}var N,P,me,he,ge,_e,ve=e((()=>{ce(),N=[{value:`mobile`,label:`Mobile`},{value:`secondary-phone`,label:`Secondary Phone`},{value:`phone`,label:`Phone`}],P=[{value:`email`,label:`Email ID`},{value:`secondary-email`,label:`Secondary Email`}],me="Your verification OTP is ${OTP}. Valid for ${Valid For}.\nShare with <CRM User> only.\n${Organization.Organization Name}",he=[{value:`verification`,label:`Verification Link Email`},{value:`contact`,label:`Contact Verification Email`}],ge=[{value:`standard`,label:`Verification Page`},{value:`branded`,label:`Branded Verification Page`}],_e=[`Layouts`,`Layout Rules`,`Validation Rules`,`Fields`,`Record Locking Configuration`,`Record Authentication`,`Links`,`Buttons`,`Summary`]}));function ye(e){return{id:``,action:e?`criteria`:`record`,method:`otp`,field:``,criteriaField:`Status`,criteriaOperator:`is`,criteriaValues:[`Open`],buttonName:``,layouts:Ce.slice(0,1),profiles:we.slice(0,2),portal:!1,active:!0,modified:``,settings:M(`phone`)}}function F(e){return e.action===`criteria`?`${e.criteriaField} ${e.criteriaOperator} ${e.criteriaValues.join(`, `)}`:e.action===`buttons`?e.buttonName:`Record creation`}function be({renderSettings:e,onNotice:t}){let[n,r]=(0,I.useState)([]),[i,o]=(0,I.useState)(),[c,u]=(0,I.useState)(``),[f,p]=(0,I.useState)(!1),[m,h]=(0,I.useState)(!1),[_,y]=(0,I.useState)(),b=n.some(e=>e.action===`record`&&e.id!==i?.id),x=e=>{o(t=>t&&{...t,...e}),u(``)},S=()=>{o(void 0),u(``)},te=e=>{o(e??ye(n.some(e=>e.action===`record`))),p(!!e),h(!!e),u(``)},C=e=>{if(!i)return;let t=M(e===`otp`?`phone`:`email`);e===`code`?(t.validity=`4`,t.resetAfter=`30`,t.emailContent={sender:`owner`,subject:"Confirm your action with ${Organization.OrganizationName}",body:`Hello \${Contacts.FullName},

Your confirmation code is \${OTP}. Valid for \${Valid For} minutes.
Share with <CRM User> only.

\${Organization.OrganizationName}`}):e===`link`&&(t.emailContent={sender:`owner`,subject:"Confirm your action with ${Organization.OrganizationName}",body:`Hello \${Contacts.FullName},

Please confirm the requested action with \${Organization.OrganizationName}.

[Verify email address]

If you did not request this action, ignore this email.`}),h(!0),x({method:e,field:``,settings:t})},w=e=>{if(!i)return;if(!f||!m){u(`Select When and Consent Type.`);return}if(i.action===`record`&&b){u(`Record creation already has a configuration. Edit the existing rule.`);return}if(i.action===`criteria`&&!i.criteriaValues.length){u(`Select at least one picklist value.`);return}if(i.action===`buttons`&&(!i.buttonName.trim()||!i.layouts.length||!i.profiles.length)){u(`Enter a button name and select at least one layout and profile.`);return}if(!i.field){u(`Select a verification field.`);return}if(n.some(e=>e.id!==i.id&&e.action===i.action&&e.method===i.method&&e.field===i.field)){u(`This action, method, and field already have a configuration. Edit the existing rule.`);return}let a={...i,settings:e,id:i.id||crypto.randomUUID(),modified:new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`,year:`numeric`}).format(new Date)};r(e=>i.id?e.map(e=>e.id===i.id?a:e):[...e,a]),S(),t(`Record verification configured successfully`)},T=i&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsxs)(`span`,{className:`record-auth-form__label record-confirmation__when-label`,children:[`When`,(0,L.jsx)(l,{variant:`white`,placement:`top`,followCursor:!0,maxWidth:600,content:`Choose the event that requires the contact’s consent. Confirmation captures consent for an action; it does not verify ownership of a phone number or email address.`,children:(0,L.jsx)(`button`,{type:`button`,className:`record-confirmation__info`,"aria-label":`About When`,children:(0,L.jsx)(g,{name:`CrmInfoSolid`,size:13})})})]}),(0,L.jsx)(d,{id:`record-consent-when`,triggerAriaLabel:`When`,placeholder:`Select`,width:`100%`,value:f?i.action:``,options:[{value:`record`,label:xe.record,description:b?`Already configured. Edit the existing record-creation rule.`:`Ask for consent before a new record is saved.`,disabled:b},{value:`criteria`,label:xe.criteria,description:`Ask for consent when a picklist is set to a value.`},{value:`buttons`,label:xe.buttons,description:`Ask for consent via a custom button on the record’s Detail page.`}],onChange:e=>{p(!0),e!==`buttons`&&i.method===`link`&&C(`otp`),x({action:e})}})]}),(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:`Consent Type`}),(0,L.jsx)(d,{id:`record-consent-type`,triggerAriaLabel:`Consent Type`,placeholder:`Select`,width:`100%`,value:m?i.method:``,options:[{value:`otp`,label:R.otp,description:`Send an SMS OTP to confirm the action.`},{value:`code`,label:R.code,description:`Send an email code to confirm the action.`},{value:`link`,label:R.link,description:`Confirm the action by clicking an email link.`,disabledTooltip:`Available only for button actions.`,disabled:!f||i.action!==`buttons`}],onChange:C})]}),f&&i.action===`criteria`&&(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:`Picklist condition`}),(0,L.jsxs)(`div`,{className:`record-confirmation__criteria`,children:[(0,L.jsx)(d,{triggerAriaLabel:`Picklist`,width:`100%`,options:Object.keys(Se).map(e=>({value:e,label:e})),value:i.criteriaField,onChange:e=>x({criteriaField:e,criteriaValues:[Se[e][0]]})}),(0,L.jsx)(d,{triggerAriaLabel:`Operator`,width:`100%`,options:[`is`,`is not`].map(e=>({value:e,label:e})),value:i.criteriaOperator,onChange:e=>x({criteriaOperator:e})}),(0,L.jsx)(d,{triggerAriaLabel:`Values`,width:`100%`,multiSelect:!0,selectedValues:i.criteriaValues,options:Se[i.criteriaField].map(e=>({value:e,label:e})),onMultiChange:e=>x({criteriaValues:e})})]})]}),f&&i.action===`buttons`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`label`,{htmlFor:`record-consent-button-name`,className:`record-auth-form__label`,children:`Button Name`}),(0,L.jsx)(v,{id:`record-consent-button-name`,"aria-label":`Button Name`,width:`100%`,value:i.buttonName,onChange:e=>x({buttonName:e.target.value})})]}),(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:`Layout`}),(0,L.jsx)(ae,{width:`100%`,value:i.layouts,options:Ce,onChange:e=>x({layouts:e})})]}),(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:`Profile`}),(0,L.jsx)(ae,{width:`100%`,value:i.profiles,options:we,onChange:e=>x({profiles:e})})]}),(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{}),(0,L.jsx)(s,{label:`For Portal Users`,checked:i.portal,onChange:e=>x({portal:e.target.checked})})]})]}),m&&(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:`Verification Field`}),(0,L.jsx)(d,{triggerAriaLabel:`Verification Field`,width:`100%`,value:i.field,placeholder:`Select a field`,options:Te(i.method),onChange:e=>x({field:e}),error:!!c})]}),c&&(0,L.jsx)(`p`,{className:`record-auth-form__error`,role:`alert`,children:c})]});return(0,L.jsxs)(`div`,{className:`record-confirmation`,children:[(0,L.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,L.jsx)(`p`,{children:`Configure the channel used to obtain consent for a process in this module.`}),n.length>0&&(0,L.jsx)(a,{variant:`primary`,onClick:()=>te(),children:`Configure`})]}),n.length===0&&(0,L.jsx)(a,{variant:`primary`,onClick:()=>te(),children:`Configure`}),n.map(e=>(0,L.jsxs)(`section`,{className:`record-auth__summary`,"aria-label":F(e),children:[(0,L.jsxs)(`div`,{className:`record-auth__summary-title`,children:[(0,L.jsx)(`h2`,{children:F(e)}),(0,L.jsxs)(`div`,{className:`record-auth-form__inline`,children:[(0,L.jsx)(ee,{"aria-label":`Enable ${F(e)}`,checked:e.active,onChange:t=>r(n=>n.map(n=>n.id===e.id?{...n,active:t.target.checked}:n))}),(0,L.jsx)(a,{variant:`link-primary`,"aria-label":`Edit ${F(e)}`,onClick:()=>te(e),children:`Edit`}),(0,L.jsx)(a,{variant:`link-primary`,"aria-label":`Delete ${F(e)}`,onClick:()=>y(e),children:`Delete`})]})]}),(0,L.jsxs)(`div`,{className:`record-auth__summary-card`,children:[(0,L.jsxs)(`p`,{children:[R[e.method],` — `,e.method===`link`?`Link valid for ${e.settings.validity} days`:`${e.settings.digits} Digit OTP - Valid for ${e.settings.validity} minutes`]}),(0,L.jsxs)(`dl`,{children:[(0,L.jsx)(`dt`,{children:`Field:`}),(0,L.jsx)(`dd`,{children:Te(e.method).find(t=>t.value===e.field)?.label}),(0,L.jsx)(`dt`,{children:`Resend:`}),(0,L.jsxs)(`dd`,{children:[e.settings.resendAttempts,` attempts, Reset after `,e.settings.resetAfter,` `,e.method===`link`?`hours`:`minutes`]}),e.method!==`link`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`dt`,{children:`Validation:`}),(0,L.jsxs)(`dd`,{children:[e.settings.validationAttempts,` attempts, Reset after `,e.settings.validationReset,` hours`]})]}),e.action===`buttons`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`dt`,{children:`Layout:`}),(0,L.jsx)(`dd`,{children:e.layouts.map(e=>e.label).join(`, `)}),(0,L.jsx)(`dt`,{children:`Profile:`}),(0,L.jsx)(`dd`,{children:e.profiles.map(e=>e.label).join(`, `)}),(0,L.jsx)(`dt`,{children:`Portal users:`}),(0,L.jsx)(`dd`,{children:e.portal?`Included`:`Not included`})]}),(0,L.jsx)(`dt`,{children:`Last modified:`}),(0,L.jsx)(`dd`,{children:e.modified})]})]})]},e.id)),i&&e({method:i.method,initial:i.settings,lead:T,showSettings:m,onIncompleteSave:()=>u(`Select When and Consent Type.`),onChange:e=>x({settings:e}),onClose:S,onSave:w}),_&&(0,L.jsx)(ne,{isOpen:!0,type:`alert`,variant:`warning`,title:`Delete record verification?`,description:`Remove the configuration for ${F(_)}? Existing confirmation statuses are preserved.`,saveLabel:`Delete`,onClose:()=>y(void 0),onSave:()=>{r(e=>e.filter(e=>e.id!==_.id)),y(void 0),t(`Record verification configuration deleted`)}})]})}var I,L,xe,R,Se,Ce,we,Te,Ee=e((()=>{I=t(n(),1),i(),u(),_(),o(),h(),C(),c(),x(),A(),ve(),L=r(),xe={record:`Record creation`,criteria:`Picklist value`,buttons:`Button actions`},R={otp:`OTP on Phone`,code:`Code on Email`,link:`Confirmation Link`},Se={Status:[`Open`,`In progress`,`Completed`],"Lead Source":[`Trade Show`,`Web Form`,`Referral`],Rating:[`Hot`,`Warm`,`Cold`]},Ce=[`Standard`,`Enterprise`].map(e=>({label:e,value:e})),we=[`Administrator`,`Standard`,`Sales Manager`].map(e=>({label:e,value:e})),Te=e=>e===`otp`?N:P,be.__docgenInfo={description:`PM mock: independent record-consent rules; no live delivery or enforcement.`,methods:[],displayName:`RecordVerification`,props:{renderSettings:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(props: ConfirmationSettingsProps) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  method: ConfirmationMethod; initial: VerificationConfig; lead: ReactNode; showSettings: boolean;
  onIncompleteSave: () => void;
  onChange: (settings: VerificationConfig) => void; onClose: () => void; onSave: (settings: VerificationConfig) => void;
}`,signature:{properties:[{key:`method`,value:{name:`union`,raw:`'otp' | 'code' | 'link'`,elements:[{name:`literal`,value:`'otp'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'link'`}],required:!0}},{key:`initial`,value:{name:`VerificationConfig`,required:!0}},{key:`lead`,value:{name:`ReactNode`,required:!0}},{key:`showSettings`,value:{name:`boolean`,required:!0}},{key:`onIncompleteSave`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`(settings: VerificationConfig) => void`,signature:{arguments:[{type:{name:`VerificationConfig`},name:`settings`}],return:{name:`void`}},required:!0}},{key:`onClose`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}},{key:`onSave`,value:{name:`signature`,type:`function`,raw:`(settings: VerificationConfig) => void`,signature:{arguments:[{type:{name:`VerificationConfig`},name:`settings`}],return:{name:`void`}},required:!0}}]}},name:`props`}],return:{name:`ReactNode`}}},description:``},onNotice:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(message: string) => void`,signature:{arguments:[{type:{name:`string`},name:`message`}],return:{name:`void`}}},description:``}}}})),De=e((()=>{}));function Oe(e,t=`7`){return{sender:`owner`,subject:Ie,body:e===`email`?`Hello \${Contacts.FullName},\n\nPlease verify your email address with \${Organization.OrganizationName}. To confirm your email address, please click on the button below. This link expires in ${t} day(s).\n\n[Verify email address]\n\nIf you did not request this verification, please ignore this email.\n\nRegards,\n\${Organization.OrganizationName}`:`Email address verified

Thank you for confirming your email address. You can now close this page.`}}function ke({kind:e,initial:t,validity:n,onClose:r,onSave:i,readOnly:o=!1}){let[s,c]=(0,V.useState)(()=>t??Oe(e,n)),[l,u]=(0,V.useState)(`en-US`),[f,p]=(0,V.useState)(s.body),[m,h]=(0,V.useState)(0);return(0,H.jsx)(ne,{isOpen:!0,title:o?e===`email`?`Verification Link Email Preview`:`Verification Page Preview`:e===`email`?`Edit Email Content`:`Edit Verification Page`,width:865,className:`record-auth-template-modal${o?` record-auth-preview-modal`:``}`,disableAutoFocus:!0,showFooter:!o,showClose:o,closeLabel:`Close preview`,headerActions:!o&&e===`email`?(0,H.jsx)(d,{"aria-label":`Template language`,width:`fit-content`,value:l,onChange:u,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:[{value:`en-US`,label:`English (United States)`},{value:`en-GB`,label:`English (United Kingdom)`},{value:`fr`,label:`French`},{value:`de`,label:`German`},{value:`es`,label:`Spanish`},{value:`it`,label:`Italian`},{value:`pt`,label:`Portuguese`},{value:`nl`,label:`Dutch`},{value:`ja`,label:`Japanese`},{value:`zh`,label:`Chinese (Simplified)`},{value:`hi`,label:`Hindi`},{value:`ta`,label:`Tamil`}]}):void 0,footerStart:(0,H.jsx)(a,{variant:`ghost-blue`,onClick:()=>{let t=Oe(e,n);c(t),p(t.body),h(e=>e+1)},children:`Reset to default`}),onClose:r,onSave:()=>i?.(s),children:(0,H.jsxs)(`div`,{className:`record-auth-template${e===`page`?` record-auth-template--page`:``}`,children:[o&&e===`email`&&(0,H.jsxs)(`dl`,{className:`record-auth-preview__fields`,children:[(0,H.jsx)(`dt`,{children:`From`}),(0,H.jsx)(`dd`,{children:s.sender===`organization`?`Organization Email`:`Record Owner’s Email`}),(0,H.jsx)(`dt`,{children:`Subject`}),(0,H.jsx)(`dd`,{children:s.subject})]}),!o&&e===`email`&&(0,H.jsxs)(`div`,{className:`record-auth-template__fields`,children:[(0,H.jsx)(d,{label:`From`,"aria-label":`From`,width:`100%`,value:s.sender,options:[{value:`owner`,label:`Record Owner’s Email`},{value:`organization`,label:`Organization Email`}],onChange:e=>c(t=>({...t,sender:e}))}),(0,H.jsx)(v,{label:`Subject`,width:`100%`,value:s.subject,onChange:e=>c(t=>({...t,subject:e.target.value}))})]}),o?(0,H.jsx)(`div`,{className:`rte-field`,children:(0,H.jsx)(`div`,{className:`rte-editor-wrap`,children:(0,H.jsx)(`div`,{className:`rte-editor`,role:`region`,"aria-label":e===`email`?`Email template preview`:`Verification page preview`,children:e===`email`?s.body.split(`[Verify email address]`).map((e,t)=>(0,H.jsxs)(`span`,{children:[t>0&&(0,H.jsx)(`span`,{className:`record-auth-preview__verify`,children:`Verify email address`}),e]},t)):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`h2`,{children:s.body.split(`

`)[0]}),s.body.split(`

`).slice(1).map((e,t)=>(0,H.jsx)(`p`,{children:e},t))]})})})}):(0,H.jsx)(D,{width:`100%`,minHeight:e===`page`?0:380,alwaysShowToolbar:!0,toolbarPosition:`top`,showExpand:!1,"aria-label":e===`email`?`Email template body`:`Verification page body`,initialContent:e===`email`?f.split(`[Verify email address]`).map((e,t)=>(0,H.jsxs)(`span`,{children:[t>0&&(0,H.jsx)(`span`,{contentEditable:!1,children:(0,H.jsx)(a,{variant:`primary`,className:`record-auth-template__verify`,children:`Verify email address`})}),e]},t)):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`h2`,{children:f.split(`

`)[0]}),f.split(`

`).slice(1).map((e,t)=>(0,H.jsx)(`p`,{children:e},t))]}),onChange:t=>c(n=>({...n,body:e===`email`?t.replace(/(?<!\[)Verify email address(?!\])/g,`[Verify email address]`):t}))},m)]})})}function z({label:e,children:t}){return(0,H.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,H.jsx)(`span`,{className:`record-auth-form__label`,children:e}),(0,H.jsx)(`div`,{children:t})]})}function Ae({channel:e,initial:t,expanded:n,onClose:r,onSave:i,method:o,lead:c,onChange:l,showSettings:u=!0,onIncompleteSave:f}){let p=(0,V.useId)(),[m,h]=(0,V.useState)(()=>({...t,fields:[...t.fields]})),[_,y]=(0,V.useState)(n),[x,ee]=(0,V.useState)(!1),[S,C]=(0,V.useState)(),[w,T]=(0,V.useState)({}),re=(0,V.useRef)(o);(0,V.useEffect)(()=>{re.current!==o&&(re.current=o,h({...t,fields:[...t.fields]}),T({}),C(void 0))},[o,t]),(0,V.useEffect)(()=>{if(!x)return;let e=window.setTimeout(()=>ee(!1),5e3);return()=>window.clearTimeout(e)},[x]);let E=e===`phone`,D=o===`code`,O=E||D,k=(e,t)=>{let n={...m,[e]:t};h(n),l?.(n),T(t=>({...t,[e]:void 0}))},A=e=>w[e]?(0,H.jsx)(`p`,{id:`${p}-${e}-error`,className:`record-auth-form__error`,role:`alert`,children:w[e]}):null,oe=()=>{if(!u){f?.();return}let e={},t=[`validity`,`resendAttempts`,`resetAfter`,...O?[`validationAttempts`,`validationReset`]:[]];!o&&!m.fields.length&&(e.fields=`Select at least one field to verify.`);let n={validity:O?`OTP Validity`:`Verification Link Validity`,resendAttempts:`Max Resend Attempts`,resetAfter:`Reset Resend Attempt After`,validationAttempts:`Max Validation Attempts`,validationReset:`Reset Validation Attempt After`};for(let r of t){let t=m[r];t.trim()?(!/^\d+$/.test(t)||!Number.isSafeInteger(Number(t))||Number(t)<1)&&(e[r]=`${n[r]} must be a positive whole number`):e[r]=`${n[r]} cannot be empty`}if(E&&!m.carrier&&(e.carrier=`Select an SMS carrier.`),E&&(!m.template.trim()||m.template.length>160||!m.template.includes("${OTP}"))&&(e.template="Enter an SMS template of up to 160 characters containing ${OTP}."),T(e),Object.keys(e).length){(e.resendAttempts||e.resetAfter||e.validationAttempts||e.validationReset)&&y(!0);return}i(m)},j=(e,t,n)=>(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(`div`,{className:`record-auth-form__number`,children:[(0,H.jsx)(v,{type:`number`,"aria-label":t,error:!!w[e],"aria-invalid":!!w[e],"aria-describedby":[n&&`${p}-${e}-unit`,w[e]&&`${p}-${e}-error`].filter(Boolean).join(` `)||void 0,min:1,step:1,width:`100%`,value:m[e],onChange:t=>k(e,t.target.value)}),n&&(0,H.jsx)(`span`,{id:`${p}-${e}-unit`,children:n===`Minutes`?`Minute(s)`:n})]}),A(e)]});return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ne,{isOpen:!0,title:o?`Record Verification`:`Data Verification via ${E?`Phone Number`:`Email Address`}`,className:`record-auth-config-modal${o?` record-confirmation-modal`:``}`,width:620,onClose:r,onSave:oe,children:(0,H.jsxs)(`div`,{className:`record-auth-form`,children:[c,!o&&(0,H.jsxs)(`div`,{className:`record-auth-form__field-selection`,children:[(0,H.jsx)(z,{label:`Fields`,children:(0,H.jsxs)(`div`,{role:`group`,"aria-label":`Fields to verify`,"aria-invalid":!!w.fields,"aria-describedby":w.fields?`${p}-fields-error`:void 0,children:[(0,H.jsx)(ae,{value:m.fields,options:E?N:P,placeholder:`Add Fields`,onChange:e=>k(`fields`,e),width:`100%`}),A(`fields`)]})}),(0,H.jsx)(s,{label:`Restrict outgoing ${E?`calls`:`emails`} until verified`,checked:m.restrict,onChange:e=>k(`restrict`,e.target.checked)})]}),u&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${p}-settings`,children:[(0,H.jsx)(`h2`,{id:`${p}-settings`,children:O?D?`Email Code Configuration`:`OTP Configuration`:`Verification Link Configuration`}),O&&(0,H.jsx)(z,{label:`OTP Length`,children:(0,H.jsx)(`div`,{className:`record-auth-form__inline`,role:`radiogroup`,"aria-label":`OTP Length`,children:[`6`,`4`].map(e=>(0,H.jsx)(ie,{label:`${e} Digits`,name:`${p}-digits`,checked:m.digits===e,onChange:()=>k(`digits`,e)},e))})}),(0,H.jsx)(z,{label:O?`Valid for`:`Verification Link Validity`,children:j(`validity`,O?`OTP validity`:`Verification link validity`,O?`Minutes`:`Day(s)`)}),E?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{label:`SMS Carrier`,children:(0,H.jsxs)(`div`,{role:`group`,"aria-label":`SMS carrier selection`,"aria-invalid":!!w.carrier,"aria-describedby":w.carrier?`${p}-carrier-error`:void 0,children:[(0,H.jsx)(d,{"aria-label":`SMS Carrier`,width:`100%`,value:m.carrier,options:Pe,onChange:e=>k(`carrier`,e)}),A(`carrier`)]})}),(0,H.jsxs)(`div`,{className:`record-auth-form__row record-auth-form__template-row`,children:[(0,H.jsx)(`label`,{className:`record-auth-form__label`,htmlFor:`${p}-sms-template`,children:`SMS Template`}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(se,{id:`${p}-sms-template`,error:!!w.template,"aria-invalid":!!w.template,"aria-describedby":`${p}-sms-hint${w.template?` ${p}-template-error`:``}`,width:`100%`,minHeight:90,maxLength:160,value:m.template,onChange:e=>k(`template`,e.target.value)}),A(`template`),(0,H.jsxs)(`div`,{className:`record-auth-form__count`,children:[(0,H.jsx)(`span`,{id:`${p}-sms-hint`,children:`Type # to insert merge field`}),(0,H.jsxs)(`span`,{children:[m.template.length,`/160`]})]}),(0,H.jsxs)(`div`,{className:`record-auth-form__preview`,role:`region`,"aria-label":`SMS Preview`,children:[(0,H.jsx)(`strong`,{children:`SMS Preview`}),(0,H.jsx)(`p`,{children:pe(m)})]}),(0,H.jsx)(a,{variant:`link-primary`,size:`sm`,onClick:()=>ee(!0),children:`Send Test SMS`})]})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(z,{label:`Email Content`,children:(0,H.jsxs)(`button`,{type:`button`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>C({title:`Email Content`,content:``,kind:`email`}),children:[(0,H.jsx)(`span`,{children:he.find(e=>e.value===m.emailTemplate)?.label}),(0,H.jsx)(g,{name:`CrmEditFilledMd`,size:10})]})}),!D&&(0,H.jsx)(z,{label:`Verification Page`,children:(0,H.jsxs)(`button`,{type:`button`,className:`record-auth-form__template-input`,"aria-haspopup":`dialog`,onClick:()=>C({title:`Verification Page`,content:``,kind:`page`}),children:[(0,H.jsx)(`span`,{children:ge.find(e=>e.value===m.verificationPage)?.label}),(0,H.jsx)(g,{name:`CrmEditFilledMd`,size:10})]})})]})]}),!_&&(0,H.jsx)(`div`,{children:(0,H.jsx)(a,{variant:`link-primary`,"aria-expanded":_,"aria-controls":`${p}-more`,onClick:()=>y(!0),children:`More Options`})}),_&&(0,H.jsxs)(`div`,{id:`${p}-more`,className:`record-auth-form__options`,children:[(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${p}-resend`,children:[(0,H.jsx)(`h2`,{id:`${p}-resend`,children:`Resend Options`}),O&&(0,H.jsx)(z,{label:`OTP Resend`,children:(0,H.jsx)(d,{"aria-label":`OTP Resend`,width:`100%`,options:Fe,value:m.resendMode,onChange:e=>k(`resendMode`,e)})}),(0,H.jsx)(z,{label:`Max Resend Attempts`,children:j(`resendAttempts`,`Max Resend Attempts`)}),(0,H.jsx)(z,{label:`Reset Attempt After`,children:j(`resetAfter`,`Reset resend attempt after`,O?`Minutes`:`Hour(s)`)})]}),O&&(0,H.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${p}-validation`,children:[(0,H.jsx)(`h2`,{id:`${p}-validation`,children:`Validation Options`}),(0,H.jsx)(z,{label:`Max Validation Attempts`,children:j(`validationAttempts`,`Max Validation Attempts`)}),(0,H.jsx)(z,{label:`Reset Attempt After`,children:j(`validationReset`,`Reset validation attempt after`,`Hour(s)`)})]})]}),!o&&!O&&(0,H.jsx)(te,{variant:`info`,message:`A new send invalidates the previous link. Latest request wins.`})]})]})}),x&&(0,H.jsx)(b,{className:`record-auth__notice`,variant:`success`,message:`Test SMS sent successfully`,onClose:()=>ee(!1)}),S?.kind&&(0,H.jsx)(ke,{kind:S.kind,validity:m.validity,initial:S.kind===`email`?m.emailContent:m.pageContent,onClose:()=>C(void 0),onSave:e=>{k(S.kind===`email`?`emailContent`:`pageContent`,e),C(void 0)}})]})}function je({channel:e,config:t,onEdit:n,onPreview:r}){let i=e===`phone`,o=i?`CrmMobile`:`CrmBestTimeToEmailPlayBooks`,s=m[o],c=f[o],l=i?`OTP Configuration for Phone Number Verification`:`Verification Link for Email Address Verification`,u=he.find(e=>e.value===t.emailTemplate)?.label,d=ge.find(e=>e.value===t.verificationPage)?.label;return(0,H.jsxs)(`section`,{className:`record-auth__summary`,"aria-label":l,children:[(0,H.jsxs)(`div`,{className:`record-auth__summary-title`,children:[(0,H.jsxs)(`h2`,{children:[(0,H.jsx)(s,{width:c.width,height:c.height,"aria-hidden":`true`}),l]}),(0,H.jsx)(a,{variant:`link-primary`,size:`sm`,"aria-label":`Edit ${i?`phone`:`email`} verification`,onClick:n,children:`Edit`})]}),(0,H.jsxs)(`div`,{className:`record-auth__summary-card`,children:[(0,H.jsx)(`p`,{children:i?`${t.digits} Digit OTP - Valid for ${t.validity} minutes`:`Link valid for ${t.validity} days`}),(0,H.jsxs)(`dl`,{children:[(0,H.jsx)(`dt`,{children:`Resend:`}),(0,H.jsxs)(`dd`,{children:[t.resendAttempts,` attempts, Reset after `,t.resetAfter,` `,i?`minutes`:`hours`]}),i&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`dt`,{children:`Validation:`}),(0,H.jsxs)(`dd`,{children:[t.validationAttempts,` attempts, Reset after `,t.validationReset,` `,t.validationReset===`1`?`hour`:`hours`]})]})]}),(0,H.jsx)(`div`,{className:`record-auth__links`,children:i?(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:`SMS Template Preview`,content:t.template}),children:`SMS Template`}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:u??`Email Content`,content:``,kind:`email`}),children:`Verification Link Email`}),(0,H.jsx)(`span`,{className:`record-auth__link-separator`,"aria-hidden":`true`}),(0,H.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:d??`Verification Page`,content:``,kind:`page`}),children:`Verification Page`})]})})]})]})}function B({initial:e=`empty`,dialog:t,expanded:n=!1,configuration:r=!1}){let i=(0,V.useId)(),[a,o]=(0,V.useState)(r?`configuration`:`verification`),[s,c]=(0,V.useState)(()=>e===`empty`?{}:{phone:{...M(`phone`),fields:N.slice(0,2),carrier:`twilio`},...e===`both`?{email:{...M(`email`),fields:P.slice(0,2)}}:{}}),[l,u]=(0,V.useState)(t),[f,p]=(0,V.useState)(),[m,h]=(0,V.useState)();(0,V.useEffect)(()=>{if(!m)return;let e=window.setTimeout(()=>h(void 0),5e3);return()=>window.clearTimeout(e)},[m]);let[g,_]=(0,V.useState)(`modules-fields`),v=!!s.phone||!!s.email,y=Ne.filter(e=>!s[e.value]);return(0,H.jsxs)(`div`,{className:`record-auth`,children:[(0,H.jsx)(`header`,{children:(0,H.jsx)(T,{moduleLabel:null,showTerritory:!1})}),(0,H.jsxs)(`div`,{className:`record-auth__shell`,children:[(0,H.jsx)(`aside`,{className:`record-auth__sidebar`,"aria-label":`Setup navigation`,children:(0,H.jsx)(le,{variant:`setup`,searchable:!0,width:`100%`,items:ue,activeId:g,onSelect:_})}),(0,H.jsxs)(`main`,{className:`record-auth__workspace`,"aria-label":`Record Authentication`,children:[(0,H.jsxs)(`div`,{className:`record-auth__module-title`,children:[(0,H.jsx)(`svg`,{width:`14.5`,height:`12`,viewBox:`0 0 14.5 12`,fill:`none`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M6 1 1 6l5 5M1 6h12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,H.jsxs)(`h1`,{children:[`Contacts`,(0,H.jsx)(`svg`,{width:`9`,height:`5`,viewBox:`0 0 9 5`,"aria-hidden":`true`,children:(0,H.jsx)(`path`,{d:`M0 0h9L4.5 5Z`,fill:`currentColor`})})]})]}),(0,H.jsx)(`nav`,{className:`record-auth__module-tabs`,"aria-label":`Contacts settings`,children:_e.map(e=>(0,H.jsx)(`span`,{"aria-current":e===`Record Authentication`?`page`:void 0,children:e},e))}),(0,H.jsxs)(`div`,{className:`record-auth__content`,children:[(0,H.jsx)(k,{tabs:Me,activeTab:a,onChange:o,variant:`secondary`}),(0,H.jsxs)(`div`,{className:`record-auth__panel`,role:`tabpanel`,"aria-label":a===`verification`?`Data Verification`:`Record Verification`,children:[a===`verification`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,H.jsx)(`p`,{children:`Verify that phone numbers and email addresses belong to the contact.`}),v&&y.length>0&&(0,H.jsx)(d,{id:`${i}-verify`,width:`fit-content`,placeholder:`Verify as`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:y,onChange:e=>u(e)})]}),!v&&(0,H.jsx)(d,{id:`${i}-verify`,width:180,placeholder:`Verify as`,value:``,triggerButtonVariant:`primary`,panelStyle:{width:`max-content`,maxWidth:`calc(100vw - 24px)`},options:y,onChange:e=>u(e)}),[`phone`,`email`].map(e=>s[e]&&(0,H.jsx)(je,{channel:e,config:s[e],onEdit:()=>u(e),onPreview:p},e))]}),(0,H.jsx)(`div`,{hidden:a!==`configuration`,children:(0,H.jsx)(be,{onNotice:e=>h({message:e}),renderSettings:({method:e,initial:t,lead:n,onChange:r,onClose:i,onSave:a,showSettings:o,onIncompleteSave:s})=>(0,H.jsx)(Ae,{channel:e===`otp`?`phone`:`email`,method:e,showSettings:o,onIncompleteSave:s,initial:t,expanded:!1,lead:n,onChange:r,onClose:i,onSave:a})})})]})]})]})]}),(0,H.jsx)(`footer`,{className:`record-auth__wms`,"aria-label":`Communication bar`,children:(0,H.jsx)(fe,{})}),m&&(0,H.jsx)(b,{className:`record-auth__notice`,variant:`success`,message:m.message,onClose:()=>h(void 0)}),l&&(0,H.jsx)(Ae,{channel:l,initial:s[l]??M(l),expanded:n,onClose:()=>u(void 0),onSave:e=>{c(t=>({...t,[l]:e})),h({message:`${l===`phone`?`Phone Number`:`Email Address`} verification configured successfully`}),u(void 0)}},l),f?.kind&&(0,H.jsx)(ke,{kind:f.kind,validity:s.email?.validity,readOnly:!0,initial:f.kind===`email`?s.email?.emailContent:s.email?.pageContent,onClose:()=>p(void 0)}),f&&!f.kind&&(0,H.jsx)(ne,{isOpen:!0,title:f.title,width:620,className:`record-auth-preview-modal`,showFooter:!1,disableAutoFocus:!0,showClose:!0,closeLabel:`Close preview`,onClose:()=>p(void 0),children:(0,H.jsx)(`div`,{className:`record-auth-form`,children:(0,H.jsx)(`p`,{className:`record-auth-form__template`,children:f.content})})})]})}var V,H,U,W,G,K,Me,Ne,Pe,Fe,Ie,Le,q,J,Y,X,Z,Q,$,Re;e((()=>{V=t(n(),1),i(),o(),u(),_(),h(),p(),y(),S(),C(),w(),E(),re(),O(),A(),oe(),j(),de(),ve(),Ee(),De(),H=r(),{expect:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,Me=[{id:`verification`,label:`Data Verification`},{id:`configuration`,label:`Record Verification`}],Ne=[{value:`phone`,label:`Phone Number`,icon:(0,H.jsx)(g,{name:`Mobile`,size:16})},{value:`email`,label:`Email Address`,icon:(0,H.jsx)(g,{name:`Email`,size:16})}],Pe=[{value:`twilio`,label:`Twilio`},{value:`messagebird`,label:`MessageBird`},{value:`vonage`,label:`Vonage`},{value:`plivo`,label:`Plivo`},{value:`sinch`,label:`Sinch`},{value:`telnyx`,label:`Telnyx`},{value:`textlocal`,label:`Textlocal`},{value:`clicksend`,label:`ClickSend`}],Fe=[{value:`same`,label:`Same OTP`},{value:`new`,label:`New OTP`}],Ie="Verify your email address with ${Organization.OrganizationName}",Le={title:`Work Items/Record Authentication`,parameters:{layout:`fullscreen`,docs:{description:{component:`Data Verification configuration based on the six provided PDF frames. Phone OTP, email verification links, template previews, and in-memory saved summaries. Record Verification combines action, consent type, and shared delivery settings in a single form. No real SMS, email, or authentication requests are made.`}}}},q={render:()=>(0,H.jsx)(B,{}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await U(e.querySelector(`.ngtb-badge`)).not.toBeInTheDocument(),await U(K(t.getByRole(`button`,{name:`User profile`})).getByRole(`img`,{name:`User`})).toHaveAttribute(`src`,`/crm-design-system/images/avatars/user_06.jpg`);let r=t.getByRole(`button`,{name:`Verify as`});await U(r).toHaveAttribute(`data-variant`,`primary`),await W.click(r);for(let e of[`Phone Number`,`Email Address`])await U(n.getByRole(`option`,{name:e}).querySelector(`.dropdown-option-icon svg`)).toBeInTheDocument();await W.click(n.getByRole(`option`,{name:`Phone Number`}));let i=await n.findByRole(`dialog`);await G(()=>U(K(i).getByText(`Data Verification via Phone Number`)).toBeVisible()),await W.click(K(i).getByRole(`button`,{name:`Cancel`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.queryByRole(`region`,{name:`OTP Configuration for Phone Number Verification`})).not.toBeInTheDocument(),await W.click(t.getByRole(`tab`,{name:`Record Verification`})),await U(t.getByRole(`button`,{name:`Configure`,exact:!0})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Data Verification`}))}},J={render:()=>(0,H.jsx)(B,{dialog:`phone`}),play:async({canvasElement:e})=>{let t=K(e.ownerDocument.body),n=await t.findByRole(`dialog`),r=K(n),i=r.getByRole(`group`,{name:`Fields to verify`});await U(i.querySelectorAll(`.tags-tag`)).toHaveLength(0),await U(r.getByRole(`checkbox`)).not.toBeChecked();let a=n.querySelector(`.record-auth-form__field-selection`);await U(getComputedStyle(a).rowGap).toBe(`8px`);for(let e of n.querySelectorAll(`.checkbox-root, .radio-root`)){let t=e.querySelector(`.checkbox-control, .radio-control`).getBoundingClientRect(),n=e.querySelector(`.checkbox-label-text, .radio-label-text`).getBoundingClientRect();await U(Math.abs(t.top+t.height/2-n.top-n.height/2)).toBeLessThan(1)}await W.click(r.getByRole(`button`,{name:`Save`})),await G(()=>U(r.getByText(`Select at least one field to verify.`)).toBeVisible()),await W.click(r.getByRole(`textbox`,{name:`Add Fields`})),await W.click(t.getByRole(`option`,{name:`Mobile`,exact:!0})),await U(r.getByRole(`button`,{name:`Remove Mobile`})).toBeInTheDocument(),await U(r.queryByText(`Select at least one field to verify.`)).not.toBeInTheDocument()}},Y={render:()=>(0,H.jsx)(B,{dialog:`phone`,expanded:!0}),play:async({canvasElement:e})=>{let t=await K(e.ownerDocument.body).findByRole(`dialog`),n=K(t),r=t.querySelector(`.modal-body`),i=n.getByRole(`textbox`,{name:`Add Fields`});await W.click(i),r.scrollTop=0,await G(()=>{let e=i.closest(`.tags-container`);U(e.getBoundingClientRect().top-r.getBoundingClientRect().top).toBeGreaterThanOrEqual(8),U(getComputedStyle(e).boxShadow).not.toBe(`none`)}),await W.click(n.getByRole(`heading`,{name:`OTP Configuration`}));let a=n.getByRole(`spinbutton`,{name:`Reset validation attempt after`});await W.click(a),await G(()=>{r.scrollTop=r.scrollHeight;let e=a.closest(`.input-input-wrapper`);U(r.getBoundingClientRect().bottom-e.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(8),U(getComputedStyle(e).boxShadow).not.toBe(`none`)});let o=n.getByRole(`spinbutton`,{name:`Max Resend Attempts`});await W.clear(o),await W.click(n.getByRole(`button`,{name:`Save`})),await U(o).toHaveAccessibleDescription(`Max Resend Attempts cannot be empty`),await W.type(o,`0`),await W.click(n.getByRole(`button`,{name:`Save`})),await U(o).toHaveAccessibleDescription(`Max Resend Attempts must be a positive whole number`),await W.clear(o),await W.type(o,`5`),await U(o).not.toHaveAttribute(`aria-invalid`,`true`)}},X={render:()=>(0,H.jsx)(B,{dialog:`email`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body),r=K(await n.findByRole(`dialog`));await U(r.queryByRole(`button`,{name:`Remove Email ID`})).not.toBeInTheDocument(),await W.click(r.getByRole(`textbox`,{name:`Add Fields`})),await W.click(n.getByRole(`option`,{name:`Email ID`,exact:!0})),await U(r.queryByRole(`heading`,{name:`Resend Options`})).not.toBeInTheDocument(),await W.click(r.getByRole(`button`,{name:`More Options`})),await G(()=>U(r.getByRole(`heading`,{name:`Resend Options`})).toBeVisible());let i=r.getByRole(`spinbutton`,{name:`Max Resend Attempts`});await W.clear(i),await W.click(r.getByRole(`button`,{name:`Save`})),await U(i).toHaveAccessibleDescription(`Max Resend Attempts cannot be empty`),await W.type(i,`5`);let a=r.getByRole(`spinbutton`,{name:`Verification link validity`});await W.clear(a),await W.click(r.getByRole(`button`,{name:`Save`})),await U(r.getByText(`Verification Link Validity cannot be empty`)).toBeVisible(),await U(a).toHaveAttribute(`aria-invalid`,`true`),await U(a).toHaveAccessibleDescription(`Day(s) Verification Link Validity cannot be empty`),await U(r.getByRole(`alert`).parentElement).toContainElement(a),await W.type(a,`10`);let o=[];for(let[e,t,r]of[[`Verification Link Email`,`Edit Email Content`,`Email template body`],[`Verification Page`,`Edit Verification Page`,`Verification page body`]]){let i=K(await n.findByRole(`dialog`)).getByRole(`button`,{name:e});await U(i).toHaveClass(`record-auth-form__template-input`),await U(i).not.toHaveClass(`button-btn`),await U(getComputedStyle(i).height).toBe(`34px`);let a=getComputedStyle(i).backgroundColor;await W.hover(i),await U(getComputedStyle(i).backgroundColor).toBe(a),await U(getComputedStyle(i).backgroundImage).toBe(`none`),await W.unhover(i);let s=i.querySelector(`svg`);await U(s).toHaveAttribute(`width`,`10`);let c=s.getBoundingClientRect(),l=i.getBoundingClientRect();await U(Math.abs(c.top+c.height/2-l.top-l.height/2)).toBeLessThanOrEqual(1),await W.click(i),await U(n.getByRole(`dialog`,{name:`Data Verification via Email Address`})).toBeVisible(),await U(n.getAllByRole(`dialog`)).toHaveLength(2);let u=K(await n.findByRole(`dialog`,{name:t})),d=u.getByRole(`textbox`,{name:r});await G(()=>U(d).toBeVisible()),await U(u.queryByTitle(`Expand`)).not.toBeInTheDocument();let f=d.closest(`.rte-field`),p=getComputedStyle(f).borderColor,m=d.closest(`.rte-editor-wrap`),h=getComputedStyle(d),g=getComputedStyle(m),_=getComputedStyle(m,`::before`),v=[g.padding,_.marginBottom,h.padding,h.borderRadius,h.boxShadow];if(t===`Edit Email Content`?o=v:await U(v).toEqual(o),await W.hover(f),await U(getComputedStyle(f).borderColor).toBe(p),t===`Edit Email Content`){await U(u.getByRole(`button`,{name:`English (United States)`})).toBeVisible(),await W.click(u.getByRole(`button`,{name:`English (United States)`}));let e=n.getByRole(`listbox`),t=e.getBoundingClientRect().width;for(let t of e.querySelectorAll(`.dropdown-option-label`))await U(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth);await W.click(n.getByRole(`option`,{name:`French`,exact:!0}));let r=u.getByRole(`button`,{name:`French`,exact:!0});await U(r).toBeVisible(),await W.click(r),await U(Math.round(n.getByRole(`listbox`).getBoundingClientRect().width)).toBe(Math.round(t)),await U(t).toBeGreaterThan(r.getBoundingClientRect().width),await W.click(n.getByRole(`option`,{name:`French`,exact:!0}))}else await U(u.queryByRole(`button`,{name:`English (United States)`})).not.toBeInTheDocument(),await U(u.getByRole(`heading`,{name:`Email address verified`})).toBeVisible(),await U(d.closest(`.record-auth-template`)).toHaveClass(`record-auth-template--page`),await U(d).not.toHaveTextContent("${Organization.OrganizationName}"),await U(getComputedStyle(d).minHeight).toBe(`0px`),await U(getComputedStyle(m).minHeight).toBe(`0px`);if(t===`Edit Email Content`){let e=u.getByRole(`button`,{name:`Verify email address`});await U(e).toBeVisible(),await U(getComputedStyle(e).backgroundImage).toBe(`none`),await U(getComputedStyle(e).fontSize).toBe(`14px`);let t=u.getByRole(`button`,{name:`Record Owner’s Email`});await U(getComputedStyle(t).fontSize).toBe(`14px`),window.innerWidth>=900&&await U(Math.round(t.getBoundingClientRect().width)).toBe(390);for(let e of[`From`,`Subject`])await U(getComputedStyle(u.getByText(e,{exact:!0})).textAlign).toBe(`right`)}await W.click(d),await W.keyboard(`{ControlOrMeta>}a{/ControlOrMeta}`),await W.type(d,`Custom verification content`),await W.click(u.getByRole(`button`,{name:`Reset to default`})),await U(u.getByRole(`textbox`,{name:r})).not.toHaveTextContent(`Custom verification content`),t===`Edit Email Content`&&(await W.clear(u.getByRole(`textbox`,{name:`Subject`})),await W.type(u.getByRole(`textbox`,{name:`Subject`}),`Confirm your email`)),t===`Edit Verification Page`?await W.keyboard(`{Escape}`):await W.click(u.getByRole(`button`,{name:`Save`})),await G(()=>U(n.getAllByRole(`dialog`)).toHaveLength(1));let y=K(await n.findByRole(`dialog`,{name:`Data Verification via Email Address`}));await U(y.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10)}await W.click(K(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Verification Link Email`}));let s=K(await n.findByRole(`dialog`,{name:`Edit Email Content`}));await U(s.getByRole(`textbox`,{name:`Subject`})).toHaveValue(`Confirm your email`),await W.click(s.getByRole(`button`,{name:`Cancel`})),await W.click(K(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Link valid for 10 days`)).toBeVisible(),await W.click(t.getByRole(`button`,{name:`Verify as`})),await U(n.queryByRole(`option`,{name:`Email Address`})).not.toBeInTheDocument(),await U(n.getByRole(`option`,{name:`Phone Number`})).toBeVisible(),await W.keyboard(`{Escape}`),await W.click(t.getByRole(`button`,{name:`Edit email verification`}));let c=K(await n.findByRole(`dialog`));await U(c.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10),await W.click(c.getByRole(`button`,{name:`Cancel`}))}},Z={render:()=>(0,H.jsx)(B,{initial:`phone`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await W.click(t.getByRole(`button`,{name:`Verify as`})),await U(n.queryByRole(`option`,{name:`Phone Number`})).not.toBeInTheDocument(),await W.click(n.getByRole(`option`,{name:`Email Address`}));let r=K(await n.findByRole(`dialog`));await W.click(r.getByRole(`textbox`,{name:`Add Fields`})),await W.click(n.getByRole(`option`,{name:`Email ID`,exact:!0})),await W.click(r.getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.queryByRole(`button`,{name:`Verify as`})).not.toBeInTheDocument();let i=t.getByRole(`status`);await U(i).toHaveClass(`record-auth__notice`),await U(getComputedStyle(i).position).toBe(`fixed`),await U(i).toHaveTextContent(`Email Address verification configured successfully`),await G(()=>U(t.queryByRole(`status`)).not.toBeInTheDocument(),{timeout:6500})}},Q={render:()=>(0,H.jsx)(B,{initial:`both`}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body);await U(t.getByText(`6 Digit OTP - Valid for 4 minutes`)).toBeVisible(),await U(t.getByText(`Link valid for 7 days`)).toBeVisible();let r=t.getByRole(`heading`,{name:`Contacts`,exact:!0});await U(r.querySelector(`svg`)).toHaveAttribute(`width`,`9`),await U(r.parentElement?.querySelector(`:scope > svg`)).toHaveAttribute(`width`,`14.5`),await U(getComputedStyle(r).gap).toBe(`6px`);let i=e.querySelector(`.record-auth__link-separator`);await U(getComputedStyle(i).width).toBe(`6px`),await U(getComputedStyle(i).height).toBe(`6px`),await U(getComputedStyle(i).backgroundColor).toBe(`rgb(217, 217, 217)`),await U(getComputedStyle(i.parentElement).gap).toBe(`10px`),await U(t.queryByRole(`button`,{name:`Verify as`})).not.toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`SMS Template`,exact:!0}));let a=K(await n.findByRole(`dialog`,{name:`SMS Template Preview`}));await G(()=>U(a.getByText(/Your verification OTP is/)).toBeVisible()),await U(a.getAllByRole(`button`)).toHaveLength(1),await W.click(a.getByRole(`button`,{name:`Close preview`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument());for(let[e,r,i]of[[`Verification Link Email`,`Verification Link Email Preview`,`Email template preview`],[`Verification Page`,`Verification Page Preview`,`Verification page preview`]]){await W.click(t.getByRole(`button`,{name:e,exact:!0}));let a=await n.findByRole(`dialog`,{name:r}),o=K(a);await G(()=>U(o.getByRole(`region`,{name:i})).toBeVisible()),await U(o.queryByRole(`textbox`)).not.toBeInTheDocument(),await U(a.querySelector(`[contenteditable="true"]`)).toBeNull(),await U(a.querySelector(`.rte-toolbar`)).toBeNull(),await U(a.querySelector(`.modal-footer-area`)).toBeNull(),await U(o.getAllByRole(`button`)).toHaveLength(1),await W.click(o.getByRole(`button`,{name:`Close preview`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument())}await W.click(t.getByRole(`button`,{name:`Edit phone verification`}));let o=K(await n.findByRole(`dialog`));await W.click(o.getByRole(`radio`,{name:`4 Digits`})),await U(o.getByRole(`region`,{name:`SMS Preview`})).toHaveTextContent(`4829`),await W.click(o.getByRole(`button`,{name:`More Options`})),await U(o.queryByRole(`button`,{name:`Fewer Options`})).not.toBeInTheDocument();for(let e of[`OTP validity`,`Reset resend attempt after`]){let t=o.getByRole(`spinbutton`,{name:e});await U(t).toHaveAccessibleDescription(`Minute(s)`),await U(t.closest(`.input-input-wrapper`)?.querySelector(`.input-suffix`)).toBeFalsy()}await U(o.getByRole(`spinbutton`,{name:`Max Resend Attempts`})).toHaveValue(5),await U(o.getByRole(`textbox`,{name:`SMS Template`})).toHaveAccessibleDescription(`Type # to insert merge field`),await U(o.getByText(`SMS Preview`)).toBeVisible();let s=o.getByRole(`button`,{name:`Send Test SMS`});await U(s).toHaveAttribute(`data-variant`,`link-primary`),await W.click(s);let c=n.getByRole(`status`);await U(c).toHaveTextContent(`Test SMS sent successfully`),await W.click(K(c).getByRole(`button`,{name:`Dismiss`})),await U(o.queryByText(`Demo preview only. No SMS was sent.`)).not.toBeInTheDocument(),await W.click(o.getByRole(`button`,{name:`Save`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`4 Digit OTP - Valid for 4 minutes`)).toBeVisible();for(let[e,n,r]of[[`OTP Configuration for Phone Number Verification`,`10`,`14`],[`Verification Link for Email Address Verification`,`16`,`13`]]){let i=t.getByRole(`heading`,{name:e}).querySelector(`svg`);await U(i).toHaveAttribute(`aria-hidden`,`true`),await U(i).toHaveAttribute(`width`,n),await U(i).toHaveAttribute(`height`,r),await U(getComputedStyle(i).width).toBe(`${n}px`),await U(getComputedStyle(i).height).toBe(`${r}px`)}let l=t.getByRole(`status`);await U(l).toHaveClass(`message-box-success`),await U(l).toHaveTextContent(`Phone Number verification configured successfully`),await W.click(K(l).getByRole(`button`,{name:`Dismiss`})),await U(t.queryByRole(`status`)).not.toBeInTheDocument()}},$={name:`Record Verification`,render:()=>(0,H.jsx)(B,{configuration:!0}),play:async({canvasElement:e})=>{let t=K(e),n=K(e.ownerDocument.body),r=async()=>(await W.click(t.getByRole(`button`,{name:`Configure`,exact:!0})),K(await n.findByRole(`dialog`))),i=async e=>{await W.click(n.getByRole(`option`,{name:e,exact:!0}))},a=await r();await U(a.queryByRole(`heading`,{name:/Configuration/})).not.toBeInTheDocument(),await U(a.queryByRole(`button`,{name:`Verification Field`})).not.toBeInTheDocument(),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await U(a.getByRole(`alert`)).toHaveTextContent(`Select When and Consent Type.`);for(let e of[`When`,`Consent Type`]){let t=a.getByRole(`button`,{name:e,exact:!0});await U(t).toHaveTextContent(`Select`),await U(Math.round(t.getBoundingClientRect().width)).toBe(390);let n=t.closest(`.record-auth-form__row`).firstElementChild;await U(getComputedStyle(n).textAlign).toBe(`right`),await U(n.getBoundingClientRect().width).toBeLessThan(120)}await U(t.queryByText(`Record Verification Settings`)).not.toBeInTheDocument(),await U(e.querySelector(`.record-confirmation__empty`)).toBeNull(),await U(a.queryByRole(`button`,{name:`Next`})).not.toBeInTheDocument();let o=a.getAllByRole(`button`,{name:/^(When|Consent Type)$/});await U(o.map(e=>e.getAttribute(`aria-label`))).toEqual([`When`,`Consent Type`]),await W.click(a.getByRole(`button`,{name:`About When`})),await U(await n.findByRole(`tooltip`)).toHaveTextContent(`Choose the event`),await U(n.getByRole(`tooltip`)).toHaveClass(`tooltip-white`),await U(n.getByRole(`tooltip`).getBoundingClientRect().width).toBeLessThanOrEqual(600),await U(getComputedStyle(a.getByRole(`button`,{name:`About When`})).cursor).toBe(`default`),await U(a.getByRole(`button`,{name:`About When`}).querySelector(`svg`)).toBeInTheDocument(),await W.unhover(a.getByRole(`button`,{name:`About When`})),await W.click(a.getByRole(`button`,{name:`Consent Type`,exact:!0})),await U(n.getAllByRole(`option`)).toHaveLength(3);let s=n.getByRole(`option`,{name:/Confirmation Link/});await U(s).toHaveAttribute(`aria-disabled`,`true`),await W.hover(s),await U(n.getByRole(`tooltip`)).toHaveTextContent(`Available only for button actions.`),await W.unhover(s);let c=n.getByText(`Send an SMS OTP to confirm the action.`);await U(c).toBeVisible(),await U(getComputedStyle(c).fontSize).toBe(`13px`),await U(getComputedStyle(c).fontFamily).toContain(`Zoho Puvi`),await i(`OTP on Phone Send an SMS OTP to confirm the action.`),a=K(n.getByRole(`dialog`)),await W.click(a.getByRole(`button`,{name:`When`,exact:!0})),await i(`Record creation Ask for consent before a new record is saved.`),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await U(a.getByRole(`alert`)).toHaveTextContent(`Select an SMS carrier.`),await W.click(a.getByRole(`button`,{name:`Verification Field`})),await i(`Mobile`),await W.click(a.getByRole(`button`,{name:`Select`,exact:!0})),await i(`Twilio`),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Record creation`,{exact:!0})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Data Verification`})),await U(t.getByRole(`button`,{name:`Verify as`})).toBeVisible(),await W.click(t.getByRole(`tab`,{name:`Record Verification`})),await U(t.getByText(`Record creation`,{exact:!0})).toBeVisible(),a=await r(),await W.click(a.getByRole(`button`,{name:`When`,exact:!0})),await U(n.getByRole(`option`,{name:/Record creation/})).toHaveAttribute(`aria-disabled`,`true`),await i(`Picklist value Ask for consent when a picklist is set to a value.`),await U(a.getByRole(`button`,{name:`Picklist`,exact:!0})).toBeVisible(),await W.click(a.getByRole(`button`,{name:`Values`,exact:!0})),await i(`In progress`),await W.click(n.getByRole(`button`,{name:`Done`,exact:!0})),await W.click(a.getByRole(`button`,{name:`Consent Type`,exact:!0}));let l=n.getByRole(`dialog`);await i(`Code on Email Send an email code to confirm the action.`),await U(n.getByRole(`dialog`)).toBe(l),await U(l).toHaveAccessibleName(`Record Verification`),a=K(n.getByRole(`dialog`)),await G(()=>U(a.getByRole(`heading`,{name:`Email Code Configuration`})).toBeVisible()),await U(a.queryByRole(`button`,{name:`Verification Page`,exact:!0})).not.toBeInTheDocument(),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await U(a.getByRole(`alert`)).toHaveTextContent(`Select a verification field.`),await W.click(a.getByRole(`button`,{name:`Verification Field`})),await i(`Email ID`),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Status is Open, In progress`)).toBeVisible(),await U(t.queryByRole(`table`)).not.toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`Edit Status is Open, In progress`}));let u=K(await n.findByRole(`dialog`));await U(u.getByRole(`button`,{name:`Values`})).toHaveTextContent(`2 selected`),await W.click(u.getByRole(`button`,{name:`Cancel`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument());let d=t.getByRole(`switch`,{name:`Enable Status is Open, In progress`});await W.click(d),await U(d).not.toBeChecked(),a=await r(),await W.click(a.getByRole(`button`,{name:`When`,exact:!0})),await i(`Button actions Ask for consent via a custom button on the record’s Detail page.`),await W.click(a.getByRole(`button`,{name:`Consent Type`,exact:!0})),await i(`Confirmation Link Confirm the action by clicking an email link.`),a=K(n.getByRole(`dialog`)),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await U(a.getByRole(`alert`)).toHaveTextContent(`Enter a button name`),await U(a.getByText(`Layout`,{exact:!0})).toBeVisible(),await U(a.getByText(`Profile`,{exact:!0})).toBeVisible();let f=a.getByRole(`checkbox`,{name:`For Portal Users`});await W.click(f),await U(f).toBeChecked();let p=a.getByRole(`textbox`,{name:`Button Name`}),m=p.closest(`.input-input-wrapper`);await U(getComputedStyle(p).paddingInlineStart).toBe(`10px`),await U(m.getBoundingClientRect().height).toBe(34),await W.click(p),await G(()=>U(getComputedStyle(m).boxShadow).not.toBe(`none`)),await W.type(p,`Approve shipment`),await W.click(a.getByRole(`button`,{name:`When`,exact:!0})),await i(`Picklist value Ask for consent when a picklist is set to a value.`),a=K(n.getByRole(`dialog`)),await G(()=>U(a.getByRole(`heading`,{name:`OTP Configuration`})).toBeVisible());let h=a.getByRole(`spinbutton`,{name:`OTP validity`});await W.clear(h),await W.type(h,`8`),await W.click(a.getByRole(`button`,{name:`When`,exact:!0})),await i(`Button actions Ask for consent via a custom button on the record’s Detail page.`),await U(a.getByRole(`spinbutton`,{name:`OTP validity`})).toHaveValue(8),await U(a.getByRole(`textbox`,{name:`Button Name`})).toHaveValue(`Approve shipment`),await W.click(a.getByRole(`button`,{name:`Consent Type`,exact:!0})),await i(`Confirmation Link Confirm the action by clicking an email link.`),a=K(n.getByRole(`dialog`)),await W.click(a.getByRole(`button`,{name:`Verification Field`})),await i(`Email ID`),await W.click(a.getByRole(`button`,{name:`Save`,exact:!0})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await U(t.getByText(`Approve shipment`,{exact:!0})).toBeVisible(),await W.click(t.getByRole(`button`,{name:`Edit Approve shipment`})),a=K(await n.findByRole(`dialog`)),await U(a.getByRole(`textbox`,{name:`Button Name`})).toHaveValue(`Approve shipment`),await W.click(a.getByRole(`button`,{name:`Cancel`})),await G(()=>U(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await W.click(t.getByRole(`button`,{name:`Delete Approve shipment`}));let g=K(await n.findByRole(`alertdialog`));await W.click(g.getByRole(`button`,{name:`Delete`,exact:!0})),await G(()=>U(t.queryByText(`Approve shipment`,{exact:!0})).not.toBeInTheDocument())}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
      name: 'Verify as'
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
    await expect(canvas.getByRole('button', {
      name: 'Configure',
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Data Verification'
    }));
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog');
    const form = within(dialog);
    const fields = form.getByRole('group', {
      name: 'Fields to verify'
    });
    await expect(fields.querySelectorAll('.tags-tag')).toHaveLength(0);
    await expect(form.getByRole('checkbox')).not.toBeChecked();
    const selection = dialog.querySelector('.record-auth-form__field-selection')!;
    await expect(getComputedStyle(selection).rowGap).toBe('8px');
    for (const root of dialog.querySelectorAll('.checkbox-root, .radio-root')) {
      const control = root.querySelector('.checkbox-control, .radio-control')!.getBoundingClientRect();
      const label = root.querySelector('.checkbox-label-text, .radio-label-text')!.getBoundingClientRect();
      await expect(Math.abs(control.top + control.height / 2 - label.top - label.height / 2)).toBeLessThan(1);
    }
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(form.getByText('Select at least one field to verify.')).toBeVisible());
    await userEvent.click(form.getByRole('textbox', {
      name: 'Add Fields'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'Mobile',
      exact: true
    }));
    await expect(form.getByRole('button', {
      name: 'Remove Mobile'
    })).toBeInTheDocument();
    await expect(form.queryByText('Select at least one field to verify.')).not.toBeInTheDocument();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" expanded />,
  play: async ({
    canvasElement
  }) => {
    const dialog = await within(canvasElement.ownerDocument.body).findByRole('dialog');
    const form = within(dialog);
    const scrollArea = dialog.querySelector('.modal-body')!;
    const first = form.getByRole('textbox', {
      name: 'Add Fields'
    });
    await userEvent.click(first);
    scrollArea.scrollTop = 0;
    await waitFor(() => {
      const control = first.closest('.tags-container')!;
      expect(control.getBoundingClientRect().top - scrollArea.getBoundingClientRect().top).toBeGreaterThanOrEqual(8);
      expect(getComputedStyle(control).boxShadow).not.toBe('none');
    });
    await userEvent.click(form.getByRole('heading', {
      name: 'OTP Configuration'
    }));
    const last = form.getByRole('spinbutton', {
      name: 'Reset validation attempt after'
    });
    await userEvent.click(last);
    await waitFor(() => {
      scrollArea.scrollTop = scrollArea.scrollHeight;
      const control = last.closest('.input-input-wrapper')!;
      expect(scrollArea.getBoundingClientRect().bottom - control.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(8);
      expect(getComputedStyle(control).boxShadow).not.toBe('none');
    });
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
    await expect(form.queryByRole('button', {
      name: 'Remove Email ID'
    })).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('textbox', {
      name: 'Add Fields'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'Email ID',
      exact: true
    }));
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
    await expect(form.getByText('Verification Link Validity cannot be empty')).toBeVisible();
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
      const editIcon = trigger.querySelector('svg')!;
      await expect(editIcon).toHaveAttribute('width', '10');
      const iconBounds = editIcon.getBoundingClientRect();
      const triggerBounds = trigger.getBoundingClientRect();
      await expect(Math.abs(iconBounds.top + iconBounds.height / 2 - triggerBounds.top - triggerBounds.height / 2)).toBeLessThanOrEqual(1);
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
      name: 'Verify as'
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
      name: 'Verify as'
    }));
    await expect(body.queryByRole('option', {
      name: 'Phone Number'
    })).not.toBeInTheDocument();
    await userEvent.click(body.getByRole('option', {
      name: 'Email Address'
    }));
    const form = within(await body.findByRole('dialog'));
    await userEvent.click(form.getByRole('textbox', {
      name: 'Add Fields'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'Email ID',
      exact: true
    }));
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.queryByRole('button', {
      name: 'Verify as'
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
      name: 'Verify as'
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
      name: 'Send Test SMS'
    });
    await expect(testSms).toHaveAttribute('data-variant', 'link-primary');
    await userEvent.click(testSms);
    const testNotice = body.getByRole('status');
    await expect(testNotice).toHaveTextContent('Test SMS sent successfully');
    await userEvent.click(within(testNotice).getByRole('button', {
      name: 'Dismiss'
    }));
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
        name: 'Configure',
        exact: true
      }));
      return within(await body.findByRole('dialog'));
    };
    const choose = async (name: string) => {
      await userEvent.click(body.getByRole('option', {
        name,
        exact: true
      }));
    };
    let form = await open();
    await expect(form.queryByRole('heading', {
      name: /Configuration/
    })).not.toBeInTheDocument();
    await expect(form.queryByRole('button', {
      name: 'Verification Field'
    })).not.toBeInTheDocument();
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Select When and Consent Type.');
    for (const name of ['When', 'Consent Type']) {
      const selector = form.getByRole('button', {
        name,
        exact: true
      });
      await expect(selector).toHaveTextContent('Select');
      await expect(Math.round(selector.getBoundingClientRect().width)).toBe(390);
      const label = selector.closest('.record-auth-form__row')!.firstElementChild!;
      await expect(getComputedStyle(label).textAlign).toBe('right');
      await expect(label.getBoundingClientRect().width).toBeLessThan(120);
    }
    await expect(canvas.queryByText('Record Verification Settings')).not.toBeInTheDocument();
    await expect(canvasElement.querySelector('.record-confirmation__empty')).toBeNull();
    await expect(form.queryByRole('button', {
      name: 'Next'
    })).not.toBeInTheDocument();
    const selectors = form.getAllByRole('button', {
      name: /^(When|Consent Type)$/
    });
    await expect(selectors.map(element => element.getAttribute('aria-label'))).toEqual(['When', 'Consent Type']);
    await userEvent.click(form.getByRole('button', {
      name: 'About When'
    }));
    await expect(await body.findByRole('tooltip')).toHaveTextContent('Choose the event');
    await expect(body.getByRole('tooltip')).toHaveClass('tooltip-white');
    await expect(body.getByRole('tooltip').getBoundingClientRect().width).toBeLessThanOrEqual(600);
    await expect(getComputedStyle(form.getByRole('button', {
      name: 'About When'
    })).cursor).toBe('default');
    await expect(form.getByRole('button', {
      name: 'About When'
    }).querySelector('svg')).toBeInTheDocument();
    await userEvent.unhover(form.getByRole('button', {
      name: 'About When'
    }));
    await userEvent.click(form.getByRole('button', {
      name: 'Consent Type',
      exact: true
    }));
    await expect(body.getAllByRole('option')).toHaveLength(3);
    const disabledLink = body.getByRole('option', {
      name: /Confirmation Link/
    });
    await expect(disabledLink).toHaveAttribute('aria-disabled', 'true');
    await userEvent.hover(disabledLink);
    await expect(body.getByRole('tooltip')).toHaveTextContent('Available only for button actions.');
    await userEvent.unhover(disabledLink);
    const secondary = body.getByText('Send an SMS OTP to confirm the action.');
    await expect(secondary).toBeVisible();
    await expect(getComputedStyle(secondary).fontSize).toBe('13px');
    await expect(getComputedStyle(secondary).fontFamily).toContain('Zoho Puvi');
    await choose('OTP on Phone Send an SMS OTP to confirm the action.');
    form = within(body.getByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'When',
      exact: true
    }));
    await choose('Record creation Ask for consent before a new record is saved.');
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Select an SMS carrier.');
    await userEvent.click(form.getByRole('button', {
      name: 'Verification Field'
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
      name: 'Verify as'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Record Verification'
    }));
    await expect(canvas.getByText('Record creation', {
      exact: true
    })).toBeVisible();
    form = await open();
    await userEvent.click(form.getByRole('button', {
      name: 'When',
      exact: true
    }));
    await expect(body.getByRole('option', {
      name: /Record creation/
    })).toHaveAttribute('aria-disabled', 'true');
    await choose('Picklist value Ask for consent when a picklist is set to a value.');
    await expect(form.getByRole('button', {
      name: 'Picklist',
      exact: true
    })).toBeVisible();
    await userEvent.click(form.getByRole('button', {
      name: 'Values',
      exact: true
    }));
    await choose('In progress');
    await userEvent.click(body.getByRole('button', {
      name: 'Done',
      exact: true
    }));
    await userEvent.click(form.getByRole('button', {
      name: 'Consent Type',
      exact: true
    }));
    const sameDialog = body.getByRole('dialog');
    await choose('Code on Email Send an email code to confirm the action.');
    await expect(body.getByRole('dialog')).toBe(sameDialog);
    await expect(sameDialog).toHaveAccessibleName('Record Verification');
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
      name: 'Verification Field'
    }));
    await choose('Email ID');
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Status is Open, In progress')).toBeVisible();
    await expect(canvas.queryByRole('table')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Status is Open, In progress'
    }));
    const criteriaEdit = within(await body.findByRole('dialog'));
    await expect(criteriaEdit.getByRole('button', {
      name: 'Values'
    })).toHaveTextContent('2 selected');
    await userEvent.click(criteriaEdit.getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    const enabled = canvas.getByRole('switch', {
      name: 'Enable Status is Open, In progress'
    });
    await userEvent.click(enabled);
    await expect(enabled).not.toBeChecked();
    form = await open();
    await userEvent.click(form.getByRole('button', {
      name: 'When',
      exact: true
    }));
    await choose('Button actions Ask for consent via a custom button on the record’s Detail page.');
    await userEvent.click(form.getByRole('button', {
      name: 'Consent Type',
      exact: true
    }));
    await choose('Confirmation Link Confirm the action by clicking an email link.');
    form = within(body.getByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'Save',
      exact: true
    }));
    await expect(form.getByRole('alert')).toHaveTextContent('Enter a button name');
    await expect(form.getByText('Layout', {
      exact: true
    })).toBeVisible();
    await expect(form.getByText('Profile', {
      exact: true
    })).toBeVisible();
    const portalUsers = form.getByRole('checkbox', {
      name: 'For Portal Users'
    });
    await userEvent.click(portalUsers);
    await expect(portalUsers).toBeChecked();
    const buttonName = form.getByRole('textbox', {
      name: 'Button Name'
    });
    const inputBox = buttonName.closest('.input-input-wrapper')!;
    await expect(getComputedStyle(buttonName).paddingInlineStart).toBe('10px');
    await expect(inputBox.getBoundingClientRect().height).toBe(34);
    await userEvent.click(buttonName);
    await waitFor(() => expect(getComputedStyle(inputBox).boxShadow).not.toBe('none'));
    await userEvent.type(buttonName, 'Approve shipment');
    // Incompatible actions reset link consent; compatible changes preserve delivery edits.
    await userEvent.click(form.getByRole('button', {
      name: 'When',
      exact: true
    }));
    await choose('Picklist value Ask for consent when a picklist is set to a value.');
    form = within(body.getByRole('dialog'));
    await waitFor(() => expect(form.getByRole('heading', {
      name: 'OTP Configuration'
    })).toBeVisible());
    const validity = form.getByRole('spinbutton', {
      name: 'OTP validity'
    });
    await userEvent.clear(validity);
    await userEvent.type(validity, '8');
    await userEvent.click(form.getByRole('button', {
      name: 'When',
      exact: true
    }));
    await choose('Button actions Ask for consent via a custom button on the record’s Detail page.');
    await expect(form.getByRole('spinbutton', {
      name: 'OTP validity'
    })).toHaveValue(8);
    await expect(form.getByRole('textbox', {
      name: 'Button Name'
    })).toHaveValue('Approve shipment');
    await userEvent.click(form.getByRole('button', {
      name: 'Consent Type',
      exact: true
    }));
    await choose('Confirmation Link Confirm the action by clicking an email link.');
    form = within(body.getByRole('dialog'));
    await userEvent.click(form.getByRole('button', {
      name: 'Verification Field'
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
}`,...$.parameters?.docs?.source}}},Re=[`Default`,`PhoneVerification`,`PhoneMoreOptions`,`EmailVerification`,`PhoneConfigured`,`Configured`,`RecordConfiguration`]}))();export{Q as Configured,q as Default,X as EmailVerification,Z as PhoneConfigured,Y as PhoneMoreOptions,J as PhoneVerification,$ as RecordConfiguration,Re as __namedExportsOrder,Le as default};