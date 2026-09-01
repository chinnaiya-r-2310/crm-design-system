import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CZl1xe7t.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-B3CtQWgA.js";import{n as o,t as s}from"./Input-DdYP5uXr.js";import{n as c,t as l}from"./Modal-DKo8adAW.js";var u,d,f,p,m,h,g,_;e((()=>{u=t(n(),1),c(),o(),i(),d=r(),f=[{key:`success`,label:`Success`,triggerVariant:`outline-green`,title:`Changes saved successfully!`,description:`Your preferences have been updated and will take effect immediately across all your active sessions.`},{key:`info`,label:`Info`,triggerVariant:`outline-blue`,title:`Sorting order will affect all users`,description:`This order will be reflected for all users in List views, reports and dashboards when sorting is applied. Also, this property will be enabled in all picklists that are non-alphabetical.`},{key:`warning`,label:`Warning`,triggerVariant:`outline-orange`,title:`Changes will affect all users`,description:`Updating this setting will immediately apply to all active users in your organization. This cannot be undone. Do you want to continue?`,confirmLabel:`Continue`},{key:`error`,label:`Error`,triggerVariant:`outline-red`,title:`Delete "ABC Record"`,description:`Please note that when you delete a workflow rule, all the instant and scheduled actions will be disassociated from this rule. Are you sure you want to delete the rule?`,confirmLabel:`Delete`},{key:`denial`,label:`Denial`,triggerVariant:`default`,title:`Permission Denied`,description:`You do not have sufficient permissions to perform this action. Please contact your administrator to request access.`}],p={title:`Design System/Components/Modal`,component:l,parameters:{layout:`centered`,docs:{description:{component:[`Dialog modal with header, form body, optional footer note, and Cancel/Save actions.`,`Figma: Chinnaiya Style Sheet node 150:25791.`,"Renders into `document.body` via React portal. Closes on backdrop click or Escape key."].join(` `)}}},argTypes:{isOpen:{control:`boolean`,table:{category:`State`}},title:{control:`text`,table:{category:`Anatomy`}},cancelLabel:{control:`text`,table:{category:`Anatomy`}},saveLabel:{control:`text`,table:{category:`Anatomy`}},width:{control:{type:`number`,min:300,max:900,step:8},table:{category:`Layout`}},onClose:{action:`onClose`,table:{category:`Events`}},onCancel:{action:`onCancel`,table:{category:`Events`}},onSave:{action:`onSave`,table:{category:`Events`}}}},m={render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{variant:`primary`,onClick:()=>n(!0),children:`Open Modal`}),(0,d.jsxs)(l,{...e,isOpen:t,onClose:()=>n(!1),onCancel:()=>n(!1),onSave:()=>n(!1),children:[(0,d.jsx)(s,{label:`Full Name`,layout:`horizontal`,width:509,columns:`99px 390px`}),(0,d.jsx)(s,{label:`Email`,layout:`horizontal`,width:509,columns:`99px 390px`,type:`email`})]})]})},args:{title:`Edit Record`,width:569,cancelLabel:`Cancel`,saveLabel:`Save`}},h={name:`Alert Modal`,render:()=>{let[e,t]=(0,u.useState)(null),n=f.find(t=>t.key===e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:f.map(e=>(0,d.jsx)(a,{variant:e.triggerVariant,onClick:()=>t(e.key),children:e.label},e.key))}),n&&(0,d.jsx)(l,{type:`alert`,variant:e,isOpen:!0,title:n.title,description:n.description,onClose:()=>t(null),onCancel:()=>t(null),onSave:()=>t(null),confirmLabel:n.confirmLabel,cancelLabel:`Cancel`,width:480})]})}},g={name:`Alert Only Heading`,render:()=>{let[e,t]=(0,u.useState)(null),n=[{key:`success`,label:`Success`,triggerVariant:`outline-green`,title:`Record saved successfully.`},{key:`info`,label:`Info`,triggerVariant:`outline-blue`,title:`This action will apply to all users.`},{key:`warning`,label:`Warning`,triggerVariant:`outline-orange`,title:`Are you sure you want to continue?`,confirmLabel:`Continue`},{key:`error`,label:`Error`,triggerVariant:`outline-red`,title:`Delete "Sales Pipeline Q3"`,confirmLabel:`Delete`},{key:`denial`,label:`Denial`,triggerVariant:`default`,title:`Permission Denied`}],r=n.find(t=>t.key===e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:n.map(e=>(0,d.jsx)(a,{variant:e.triggerVariant,onClick:()=>t(e.key),children:e.label},e.key))}),r&&(0,d.jsx)(l,{type:`alert`,variant:e,isOpen:!0,title:r.title,onClose:()=>t(null),onCancel:()=>t(null),onSave:()=>t(null),confirmLabel:r.confirmLabel,cancelLabel:`Cancel`,width:480})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)}>
          <Input label="Full Name" layout="horizontal" width={509} columns="99px 390px" />
          <Input label="Email" layout="horizontal" width={509} columns="99px 390px" type="email" />
        </Modal>
      </>;
  },
  args: {
    title: 'Edit Record',
    width: 569,
    cancelLabel: 'Cancel',
    saveLabel: 'Save'
  }
}`,...m.parameters?.docs?.source},description:{story:`Generic modal — minimal content to show the shell structure.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Alert Modal',
  render: () => {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const active = ALERT_VARIANTS.find(v => v.key === activeKey);
    return <>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          {ALERT_VARIANTS.map(v => <Button key={v.key} variant={v.triggerVariant as any} onClick={() => setActiveKey(v.key)}>
              {v.label}
            </Button>)}
        </div>

        {active && <Modal type="alert" variant={activeKey as any} isOpen title={active.title} description={active.description} onClose={() => setActiveKey(null)} onCancel={() => setActiveKey(null)} onSave={() => setActiveKey(null)} confirmLabel={active.confirmLabel} cancelLabel="Cancel" width={480} />}
      </>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Alert Modal — compact dialog with icon, title, optional description, and
right-aligned action buttons. Variants: success, info (single "Ok, Got it"),
warning, error (Cancel + action), denial (single "Ok, Got it").
Figma: Chinnaiya Style Sheet node 93672:150667.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Alert Only Heading',
  render: () => {
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const headingVariants = [{
      key: 'success',
      label: 'Success',
      triggerVariant: 'outline-green',
      title: 'Record saved successfully.'
    }, {
      key: 'info',
      label: 'Info',
      triggerVariant: 'outline-blue',
      title: 'This action will apply to all users.'
    }, {
      key: 'warning',
      label: 'Warning',
      triggerVariant: 'outline-orange',
      title: 'Are you sure you want to continue?',
      confirmLabel: 'Continue'
    }, {
      key: 'error',
      label: 'Error',
      triggerVariant: 'outline-red',
      title: 'Delete "Sales Pipeline Q3"',
      confirmLabel: 'Delete'
    }, {
      key: 'denial',
      label: 'Denial',
      triggerVariant: 'default',
      title: 'Permission Denied'
    }];
    const active = headingVariants.find(v => v.key === activeKey);
    return <>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          {headingVariants.map(v => <Button key={v.key} variant={v.triggerVariant as any} onClick={() => setActiveKey(v.key)}>
              {v.label}
            </Button>)}
        </div>

        {active && <Modal type="alert" variant={activeKey as any} isOpen title={active.title} onClose={() => setActiveKey(null)} onCancel={() => setActiveKey(null)} onSave={() => setActiveKey(null)} confirmLabel={(active as any).confirmLabel} cancelLabel="Cancel" width={480} />}
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Alert only heading — same alert modal but with title only, no description paragraph.
Used when the message is short and self-explanatory.`,...g.parameters?.docs?.description}}},_=[`Default`,`AlertModal`,`AlertOnlyHeading`]}))();export{h as AlertModal,g as AlertOnlyHeading,m as Default,_ as __namedExportsOrder,p as default};