import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-B3_XL3Gq.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-BVW6fVCH.js";import{n as o,t as s}from"./Checkbox-BgrXt4i7.js";import{n as c,t as l}from"./Dropdown-CRWPLa5m.js";import{n as u,t as d}from"./Input-2A-PGXNO.js";import{n as f,t as p}from"./MessageInfo-BQUrdfOl.js";import{n as m,t as h}from"./Modal-DQDpLovW.js";import{n as g,t as _}from"./NextGenTopBand-DcWDaf3d.js";import{n as v,t as y}from"./Radio-CwUmqptG.js";import{n as b,t as x}from"./Tabs-Bmah47QA.js";import{n as S,t as ee}from"./Tags-COCONXwY.js";import{n as C,t as te}from"./Textarea-1C6xE7XY.js";import{n as w,t as ne}from"./VerticalTabs-Pbl51esU.js";function T(e){return{fields:(e===`phone`?E:D).slice(0,2),restrict:!1,validity:e===`phone`?`4`:`7`,digits:`6`,carrier:``,template:O,resendMode:`same`,resendAttempts:e===`phone`?`5`:`3`,resetAfter:e===`phone`?`30`:`24`,validationAttempts:`5`,validationReset:`1`,emailTemplate:`verification`,verificationPage:`standard`}}function re(e){return e.template.replaceAll("${OTP}",e.digits===`6`?`482913`:`4829`).replaceAll("${Valid For}",`${e.validity} minutes`).replaceAll(`<CRM User>`,`CRM User`).replaceAll("${Organization.Organization Name}",`Zoho`)}var E,D,O,k,A,j,M,N=e((()=>{E=[{value:`mobile`,label:`Mobile`},{value:`secondary-phone`,label:`Secondary Phone`},{value:`phone`,label:`Phone`}],D=[{value:`email`,label:`Email ID`},{value:`secondary-email`,label:`Secondary Email`}],O="Your verification OTP is ${OTP}. Valid for ${Valid For}.\nShare with <CRM User> only. —\n${Organization.Organization Name}",k=[{value:`verification`,label:`Verification Link Email`},{value:`contact`,label:`Contact Verification Email`}],A=[{value:`standard`,label:`Verification Page`},{value:`branded`,label:`Branded Verification Page`}],j=[{id:`general`,label:`General`,children:[{id:`personal`,label:`Personal Settings`},{id:`company`,label:`Company Details`},{id:`calendar`,label:`Calendar Booking`},{id:`motivator`,label:`Motivator`}]},{id:`security`,label:`Security Control`,children:[{id:`permissions`,label:`Permissions`}]},{id:`channels`,label:`Channels`,children:[{id:`email-channel`,label:`Email`}]},{id:`customization`,label:`Customization`,children:[{id:`modules`,label:`Modules and Fields`},{id:`templates`,label:`Templates`},{id:`pipelines`,label:`Pipelines`},{id:`wizards`,label:`Wizards`},{id:`home`,label:`Customise Home page`},{id:`translations`,label:`Translations`},{id:`copy`,label:`Copy Customisation`},{id:`canvas`,label:`Canvas`}]},{id:`automation`,label:`Automation`,children:[{id:`workflow`,label:`Workflow Rules`},{id:`schedules`,label:`Schedules`},{id:`action`,label:`Action`},{id:`assignment`,label:`Assignment`},{id:`escalation`,label:`Case Escalation Rules`}]}],M=[`Layouts`,`Layout Rules`,`Validation Rules`,`Fields`,`Record Locking Configuration`,`Record Authentication`,`Links`,`Buttons`,`Summary`]})),ie=e((()=>{}));function P({label:e,children:t}){return(0,L.jsxs)(`div`,{className:`record-auth-form__row`,children:[(0,L.jsx)(`span`,{className:`record-auth-form__label`,children:e}),(0,L.jsx)(`div`,{children:t})]})}function ae({channel:e,initial:t,expanded:n,onClose:r,onSave:i}){let o=(0,I.useId)(),[c,u]=(0,I.useState)(()=>({...t,fields:[...t.fields]})),[f,m]=(0,I.useState)(n),[g,_]=(0,I.useState)(``),[v,b]=(0,I.useState)(!1),x=e===`phone`,S=(e,t)=>{u(n=>({...n,[e]:t})),b(!1)},C=()=>{let e=[c.validity,c.resendAttempts,c.resetAfter,...x?[c.validationAttempts,c.validationReset]:[]];if(!c.fields.length)return _(`Select at least one field to verify.`);if(e.some(e=>!/^\d+$/.test(e)||!Number.isSafeInteger(Number(e))||Number(e)<1))return _(`Enter positive whole numbers for validity, attempts, and reset intervals.`);if(x&&!c.carrier)return _(`Select an SMS carrier.`);if(x&&(!c.template.trim()||c.template.length>160||!c.template.includes("${OTP}")))return _("Enter an SMS template of up to 160 characters containing ${OTP}.");i(c)},w=(e,t,n)=>(0,L.jsx)(d,{type:`number`,"aria-label":t,min:1,step:1,width:`100%`,value:c[e],suffix:n,onChange:t=>S(e,t.target.value)});return(0,L.jsx)(h,{isOpen:!0,title:`Data Verification via ${x?`Phone Number`:`Email Address`}`,width:670,onClose:r,onSave:C,children:(0,L.jsxs)(`div`,{className:`record-auth-form`,children:[(0,L.jsx)(P,{label:`Fields`,children:(0,L.jsx)(`div`,{role:`group`,"aria-label":`Fields to verify`,children:(0,L.jsx)(ee,{value:c.fields,options:x?E:D,placeholder:`Add`,onChange:e=>S(`fields`,e),width:`100%`})})}),(0,L.jsx)(s,{label:`Restrict outgoing ${x?`calls`:`emails`} until verified`,checked:c.restrict,onChange:e=>S(`restrict`,e.target.checked)}),(0,L.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-settings`,children:[(0,L.jsx)(`h2`,{id:`${o}-settings`,children:x?`OTP Configuration`:`Verification Link Configuration`}),x&&(0,L.jsx)(P,{label:`OTP Length`,children:(0,L.jsx)(`div`,{className:`record-auth-form__inline`,role:`radiogroup`,"aria-label":`OTP Length`,children:[`6`,`4`].map(e=>(0,L.jsx)(y,{label:`${e} Digits`,name:`${o}-digits`,checked:c.digits===e,onChange:()=>S(`digits`,e)},e))})}),(0,L.jsx)(P,{label:x?`Valid for`:`Verification Link Validity`,children:w(`validity`,x?`OTP validity`:`Verification link validity`,x?`Minutes`:`Days`)}),x?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{label:`SMS Carrier`,width:`100%`,columns:`1.1fr 2fr`,value:c.carrier,options:U,onChange:e=>S(`carrier`,e)}),(0,L.jsxs)(P,{label:`SMS Template`,children:[(0,L.jsx)(te,{"aria-label":`SMS Template`,width:`100%`,minHeight:90,maxLength:160,value:c.template,onChange:e=>S(`template`,e.target.value)}),(0,L.jsxs)(`div`,{className:`record-auth-form__count`,children:[(0,L.jsxs)(`span`,{children:[`Use `,"${OTP}",` and `,"${Valid For}",` to insert verification details`]}),(0,L.jsxs)(`span`,{children:[c.template.length,`/160`]})]}),(0,L.jsxs)(`div`,{className:`record-auth-form__preview`,role:`region`,"aria-label":`SMS Preview`,children:[(0,L.jsx)(`strong`,{children:`SMS Preview`}),(0,L.jsx)(`p`,{children:re(c)})]}),(0,L.jsx)(a,{variant:`default`,size:`sm`,onClick:()=>b(!0),children:`Send Test SMS`}),v&&(0,L.jsx)(p,{variant:`info`,message:`Demo preview only. No SMS was sent.`})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{label:`Email Content`,width:`100%`,columns:`1.1fr 2fr`,value:c.emailTemplate,options:k,onChange:e=>S(`emailTemplate`,e)}),(0,L.jsx)(l,{label:`Verification Page`,width:`100%`,columns:`1.1fr 2fr`,value:c.verificationPage,options:A,onChange:e=>S(`verificationPage`,e)})]})]}),x&&(0,L.jsx)(`div`,{children:(0,L.jsx)(a,{variant:`link-primary`,"aria-expanded":f,"aria-controls":`${o}-more`,onClick:()=>m(e=>!e),children:f?`Fewer Options`:`More Options`})}),(!x||f)&&(0,L.jsxs)(`div`,{id:`${o}-more`,className:`record-auth-form__section`,children:[(0,L.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-resend`,children:[(0,L.jsx)(`h2`,{id:`${o}-resend`,children:`Resend Options`}),x&&(0,L.jsx)(l,{label:`OTP Resend`,width:`100%`,columns:`1.1fr 2fr`,options:W,value:c.resendMode,onChange:e=>S(`resendMode`,e)}),(0,L.jsx)(P,{label:`Max Resend Attempts`,children:w(`resendAttempts`,`Max Resend Attempts`)}),(0,L.jsx)(P,{label:`Reset Attempt After`,children:w(`resetAfter`,`Reset resend attempt after`,x?`Minutes`:`Hour(s)`)})]}),x&&(0,L.jsxs)(`section`,{className:`record-auth-form__section`,"aria-labelledby":`${o}-validation`,children:[(0,L.jsx)(`h2`,{id:`${o}-validation`,children:`Validation Options`}),(0,L.jsx)(P,{label:`Max Validation Attempts`,children:w(`validationAttempts`,`Max Validation Attempts`)}),(0,L.jsx)(P,{label:`Reset Attempt After`,children:w(`validationReset`,`Reset validation attempt after`,`Hour(s)`)})]})]}),!x&&(0,L.jsx)(p,{variant:`info`,message:`A new send invalidates the previous link. Latest request wins.`}),g&&(0,L.jsx)(`p`,{className:`record-auth-form__error`,role:`alert`,children:g})]})})}function oe({channel:e,config:t,onEdit:n,onPreview:r}){let i=e===`phone`,o=i?`OTP Configuration for Phone Number Verification`:`Verification Link for Email Address Verification`,s=k.find(e=>e.value===t.emailTemplate)?.label,c=A.find(e=>e.value===t.verificationPage)?.label;return(0,L.jsxs)(`section`,{className:`record-auth__summary`,"aria-label":o,children:[(0,L.jsxs)(`div`,{className:`record-auth__summary-title`,children:[(0,L.jsx)(`h2`,{children:o}),(0,L.jsx)(a,{variant:`link-primary`,size:`sm`,"aria-label":`Edit ${i?`phone`:`email`} verification`,onClick:n,children:`Edit`})]}),(0,L.jsxs)(`div`,{className:`record-auth__summary-card`,children:[(0,L.jsx)(`p`,{children:i?`${t.digits} Digit OTP - Valid for ${t.validity} minutes`:`Link valid for ${t.validity} days`}),(0,L.jsxs)(`dl`,{children:[(0,L.jsx)(`dt`,{children:`Resend:`}),(0,L.jsxs)(`dd`,{children:[t.resendAttempts,` attempts, Reset after `,t.resetAfter,` `,i?`minutes`:`hours`]}),i&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`dt`,{children:`Validation:`}),(0,L.jsxs)(`dd`,{children:[t.validationAttempts,` attempts, Reset after `,t.validationReset,` `,t.validationReset===`1`?`hour`:`hours`]})]})]}),(0,L.jsx)(`div`,{className:`record-auth__links`,children:i?(0,L.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:`SMS Template`,content:t.template}),children:`View SMS Template`}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:`${s} Template`,content:`Hi Ananya,\n\nPlease verify your email address using the verification link provided in your CRM email.\n\nThis link is valid for ${t.validity} days. If you did not request this verification, ignore this email.\n\nZoho CRM\n\nSample template preview — no live verification link.`}),children:`Verification Link Email Template`}),(0,L.jsx)(a,{variant:`link-primary`,onClick:()=>r({title:c??`Verification Page`,content:`Email address verified

Thank you for confirming your email address.

Sample success page — no verification has been performed.`}),children:`Verification Page`})]})})]})]})}function F({initial:e=`empty`,dialog:t,expanded:n=!1,configuration:r=!1}){let i=(0,I.useId)(),[a,o]=(0,I.useState)(r?`configuration`:`verification`),[s,c]=(0,I.useState)(()=>e===`empty`?{}:{phone:{...T(`phone`),carrier:`twilio`},...e===`both`?{email:T(`email`)}:{}}),[u,d]=(0,I.useState)(t),[f,m]=(0,I.useState)(),[g,v]=(0,I.useState)(``),[y,b]=(0,I.useState)(`modules`),S=!!s.phone||!!s.email;return(0,L.jsxs)(`div`,{className:`record-auth`,children:[(0,L.jsx)(`header`,{children:(0,L.jsx)(_,{moduleLabel:`Setup Home`,notificationCount:3,userInitials:`AK`})}),(0,L.jsxs)(`div`,{className:`record-auth__shell`,children:[(0,L.jsx)(`aside`,{className:`record-auth__sidebar`,"aria-label":`Setup navigation`,children:(0,L.jsx)(ne,{title:`Setup`,searchable:!0,width:`100%`,items:j,activeId:y,onSelect:b,variant:`1`})}),(0,L.jsxs)(`main`,{className:`record-auth__workspace`,"aria-label":`Record Authentication`,children:[(0,L.jsx)(`div`,{className:`record-auth__module-title`,children:(0,L.jsx)(`h1`,{children:`Contacts`})}),(0,L.jsx)(`nav`,{className:`record-auth__module-tabs`,"aria-label":`Contacts settings`,children:M.map(e=>(0,L.jsx)(`span`,{"aria-current":e===`Record Authentication`?`page`:void 0,children:e},e))}),(0,L.jsxs)(`div`,{className:`record-auth__content`,children:[(0,L.jsx)(x,{tabs:H,activeTab:a,onChange:o,variant:`secondary`}),(0,L.jsx)(`div`,{className:`record-auth__panel`,role:`tabpanel`,"aria-label":a===`verification`?`Data Verification`:`Record Configuration`,children:a===`verification`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`record-auth__intro`,children:[(0,L.jsx)(`p`,{children:`Verify that phone numbers and email addresses belong to the contact.`}),S&&(0,L.jsx)(l,{id:`${i}-verify`,width:`fit-content`,placeholder:`Verify via`,value:``,options:[{value:`phone`,label:`Phone Number`},{value:`email`,label:`Email Address`}],onChange:e=>d(e)})]}),!S&&(0,L.jsx)(l,{id:`${i}-verify`,width:180,placeholder:`Verify via`,value:``,options:[{value:`phone`,label:`Phone Number`},{value:`email`,label:`Email Address`}],onChange:e=>d(e)}),[`phone`,`email`].map(e=>s[e]&&(0,L.jsx)(oe,{channel:e,config:s[e],onEdit:()=>d(e),onPreview:m},e)),g&&(0,L.jsx)(p,{variant:`success`,message:g})]})})]})]})]}),u&&(0,L.jsx)(ae,{channel:u,initial:s[u]??T(u),expanded:n,onClose:()=>d(void 0),onSave:e=>{c(t=>({...t,[u]:e})),v(`${u===`phone`?`Phone`:`Email`} verification configuration saved for this demo.`),d(void 0)}},u),f&&(0,L.jsx)(h,{isOpen:!0,title:f.title,width:620,onClose:()=>m(void 0),onSave:()=>m(void 0),saveLabel:`Done`,children:(0,L.jsx)(`div`,{className:`record-auth-form`,children:(0,L.jsx)(`p`,{className:`record-auth-form__template`,children:f.content})})})]})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{I=t(n(),1),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),C(),w(),N(),ie(),L=r(),{expect:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H=[{id:`verification`,label:`Data Verification`},{id:`configuration`,label:`Record Configuration`}],U=[{value:`twilio`,label:`Twilio`},{value:`messagebird`,label:`MessageBird`}],W=[{value:`same`,label:`Same OTP`},{value:`new`,label:`New OTP`}],G={title:`Design System/Patterns/Record Authentication`,parameters:{layout:`fullscreen`,docs:{description:{component:`Data Verification configuration based on the six provided PDF frames. Phone OTP, email verification links, template previews, and in-memory saved summaries. Record Configuration is intentionally empty. No real SMS, email, or authentication requests are made.`}}}},K={render:()=>(0,L.jsx)(F,{}),play:async({canvasElement:e})=>{let t=V(e),n=V(e.ownerDocument.body);await z.click(t.getByRole(`button`,{name:`Verify via`})),await z.click(n.getByRole(`option`,{name:`Phone Number`}));let r=await n.findByRole(`dialog`);await R(V(r).getByText(`Data Verification via Phone Number`)).toBeVisible(),await z.click(V(r).getByRole(`button`,{name:`Cancel`})),await B(()=>R(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await R(t.queryByRole(`region`,{name:`OTP Configuration for Phone Number Verification`})).not.toBeInTheDocument(),await z.click(t.getByRole(`tab`,{name:`Record Configuration`})),await R(t.getByRole(`tabpanel`,{name:`Record Configuration`})).toBeEmptyDOMElement(),await z.click(t.getByRole(`tab`,{name:`Data Verification`}))}},q={render:()=>(0,L.jsx)(F,{dialog:`phone`})},J={render:()=>(0,L.jsx)(F,{dialog:`phone`,expanded:!0})},Y={render:()=>(0,L.jsx)(F,{dialog:`email`}),play:async({canvasElement:e})=>{let t=V(e),n=V(e.ownerDocument.body),r=V(await n.findByRole(`dialog`)),i=r.getByRole(`spinbutton`,{name:`Verification link validity`});await z.clear(i),await z.click(r.getByRole(`button`,{name:`Save`})),await R(r.getByRole(`alert`)).toHaveTextContent(`Enter positive whole numbers`),await z.type(i,`10`),await z.click(r.getByRole(`button`,{name:`Save`})),await B(()=>R(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await R(t.getByText(`Link valid for 10 days`)).toBeVisible(),await z.click(t.getByRole(`button`,{name:`Edit email verification`}));let a=V(await n.findByRole(`dialog`));await R(a.getByRole(`spinbutton`,{name:`Verification link validity`})).toHaveValue(10),await z.click(a.getByRole(`button`,{name:`Cancel`}))}},X={render:()=>(0,L.jsx)(F,{initial:`phone`})},Z={render:()=>(0,L.jsx)(F,{initial:`both`}),play:async({canvasElement:e})=>{let t=V(e),n=V(e.ownerDocument.body);await R(t.getByText(`6 Digit OTP - Valid for 4 minutes`)).toBeVisible(),await R(t.getByText(`Link valid for 7 days`)).toBeVisible(),await z.click(t.getByRole(`button`,{name:`View SMS Template`}));let r=V(await n.findByRole(`dialog`));await R(r.getByText(/Your verification OTP is/)).toBeVisible(),await z.click(r.getByRole(`button`,{name:`Done`})),await B(()=>R(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await z.click(t.getByRole(`button`,{name:`Edit phone verification`}));let i=V(await n.findByRole(`dialog`));await z.click(i.getByRole(`radio`,{name:`4 Digits`})),await R(i.getByRole(`region`,{name:`SMS Preview`})).toHaveTextContent(`4829`),await z.click(i.getByRole(`button`,{name:`More Options`})),await R(i.getByRole(`spinbutton`,{name:`Max Resend Attempts`})).toHaveValue(5),await z.click(i.getByRole(`button`,{name:`Send Test SMS`})),await R(i.getByText(`Demo preview only. No SMS was sent.`)).toBeVisible(),await z.click(i.getByRole(`button`,{name:`Save`})),await B(()=>R(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await R(t.getByText(`4 Digit OTP - Valid for 4 minutes`)).toBeVisible()}},Q={render:()=>(0,L.jsx)(F,{configuration:!0})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify via'
    }));
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage dialog="phone" expanded />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    await expect(form.getByRole('alert')).toHaveTextContent('Enter positive whole numbers');
    await userEvent.type(validity, '10');
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('Link valid for 10 days')).toBeVisible();
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage initial="phone" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage initial="both" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByText('6 Digit OTP - Valid for 4 minutes')).toBeVisible();
    await expect(canvas.getByText('Link valid for 7 days')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'View SMS Template'
    }));
    const preview = within(await body.findByRole('dialog'));
    await expect(preview.getByText(/Your verification OTP is/)).toBeVisible();
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
    await expect(form.getByRole('spinbutton', {
      name: 'Max Resend Attempts'
    })).toHaveValue(5);
    await userEvent.click(form.getByRole('button', {
      name: 'Send Test SMS'
    }));
    await expect(form.getByText('Demo preview only. No SMS was sent.')).toBeVisible();
    await userEvent.click(form.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(canvas.getByText('4 Digit OTP - Valid for 4 minutes')).toBeVisible();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <RecordAuthenticationPage configuration />
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`PhoneVerification`,`PhoneMoreOptions`,`EmailVerification`,`PhoneConfigured`,`Configured`,`RecordConfiguration`]}))();export{Z as Configured,K as Default,Y as EmailVerification,X as PhoneConfigured,J as PhoneMoreOptions,q as PhoneVerification,Q as RecordConfiguration,$ as __namedExportsOrder,G as default};