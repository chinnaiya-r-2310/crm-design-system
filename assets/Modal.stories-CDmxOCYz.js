import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-0_VNwaG5.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-uY13S5yn.js";import{n as o,t as s}from"./Input-BrhBEx6-.js";import{n as c,t as l}from"./Modal-CnFJ5H68.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{u=t(n(),1),c(),o(),i(),d=r(),{expect:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h=[{key:`success`,label:`Success`,triggerVariant:`outline-green`,title:`Changes saved successfully!`,description:`Your preferences have been updated and will take effect immediately across all your active sessions.`},{key:`info`,label:`Info`,triggerVariant:`outline-blue`,title:`Sorting order will affect all users`,description:`This order will be reflected for all users in List views, reports and dashboards when sorting is applied. Also, this property will be enabled in all picklists that are non-alphabetical.`},{key:`warning`,label:`Warning`,triggerVariant:`outline-orange`,title:`Changes will affect all users`,description:`Updating this setting will immediately apply to all active users in your organization. This cannot be undone. Do you want to continue?`,confirmLabel:`Continue`},{key:`error`,label:`Error`,triggerVariant:`outline-red`,title:`Delete "ABC Record"`,description:`Please note that when you delete a workflow rule, all the instant and scheduled actions will be disassociated from this rule. Are you sure you want to delete the rule?`,confirmLabel:`Delete`},{key:`denial`,label:`Denial`,triggerVariant:`default`,title:`Permission Denied`,description:`You do not have sufficient permissions to perform this action. Please contact your administrator to request access.`}],g={title:`Design System/Components/Modal`,component:l,parameters:{layout:`centered`,docs:{description:{component:[`Dialog modal with header, form body, optional footer note, and Cancel/Save actions.`,`Figma: Chinnaiya Style Sheet node 150:25791.`,"Renders into `document.body` via React portal. Closes on backdrop click or Escape key."].join(` `)}}},argTypes:{isOpen:{control:`boolean`,table:{category:`State`}},title:{control:`text`,table:{category:`Anatomy`}},cancelLabel:{control:`text`,table:{category:`Anatomy`}},saveLabel:{control:`text`,table:{category:`Anatomy`}},width:{control:{type:`number`,min:300,max:900,step:8},table:{category:`Layout`}},onClose:{action:`onClose`,table:{category:`Events`}},onCancel:{action:`onCancel`,table:{category:`Events`}},onSave:{action:`onSave`,table:{category:`Events`}}}},_={render:e=>{let[t,n]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{variant:`primary`,onClick:()=>n(!0),children:`Open Modal`}),(0,d.jsxs)(l,{...e,isOpen:t,onClose:()=>n(!1),onCancel:()=>n(!1),onSave:()=>n(!1),children:[(0,d.jsx)(s,{label:`Full Name`,layout:`horizontal`,width:509,columns:`99px 390px`}),(0,d.jsx)(s,{label:`Email`,layout:`horizontal`,width:509,columns:`99px 390px`,type:`email`})]})]})},args:{title:`Edit Record`,width:569,cancelLabel:`Cancel`,saveLabel:`Save`}},v={render:()=>(0,d.jsx)(l,{isOpen:!0,title:`Scrollable form`,onClose:()=>{},disableAutoFocus:!0,children:Array.from({length:20},(e,t)=>(0,d.jsx)(s,{label:`Field ${t+1}`,width:`100%`},t))}),play:async({canvasElement:e})=>{let t=await m(e.ownerDocument.body).findByRole(`dialog`,{name:`Scrollable form`}),n=t.querySelector(`.modal-body`),r=t.querySelector(`.modal-footer-area`),i=m(t).getAllByRole(`textbox`).at(-1);await p(()=>{f(n.scrollHeight).toBeGreaterThan(n.clientHeight),f(r).toHaveAttribute(`data-shadow`)}),f(r.getBoundingClientRect().top-n.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(6),f(getComputedStyle(r).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),i.focus(),n.scrollTop=n.scrollHeight,n.dispatchEvent(new Event(`scroll`)),await p(()=>f(r).not.toHaveAttribute(`data-shadow`)),f(i).toHaveFocus(),f(i.getBoundingClientRect().bottom).toBeLessThan(r.getBoundingClientRect().top-4)}},y={name:`Alert Modal`,render:()=>{let[e,t]=(0,u.useState)(null),n=h.find(t=>t.key===e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:h.map(e=>(0,d.jsx)(a,{variant:e.triggerVariant,onClick:()=>t(e.key),children:e.label},e.key))}),n&&(0,d.jsx)(l,{type:`alert`,variant:e,isOpen:!0,title:n.title,description:n.description,onClose:()=>t(null),onCancel:()=>t(null),onSave:()=>t(null),confirmLabel:n.confirmLabel,cancelLabel:`Cancel`,width:480})]})}},b={name:`Alert Only Heading`,render:()=>{let[e,t]=(0,u.useState)(null),n=[{key:`success`,label:`Success`,triggerVariant:`outline-green`,title:`Record saved successfully.`},{key:`info`,label:`Info`,triggerVariant:`outline-blue`,title:`This action will apply to all users.`},{key:`warning`,label:`Warning`,triggerVariant:`outline-orange`,title:`Are you sure you want to continue?`,confirmLabel:`Continue`},{key:`error`,label:`Error`,triggerVariant:`outline-red`,title:`Delete "Sales Pipeline Q3"`,confirmLabel:`Delete`},{key:`denial`,label:`Denial`,triggerVariant:`default`,title:`Permission Denied`}],r=n.find(t=>t.key===e);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:n.map(e=>(0,d.jsx)(a,{variant:e.triggerVariant,onClick:()=>t(e.key),children:e.label},e.key))}),r&&(0,d.jsx)(l,{type:`alert`,variant:e,isOpen:!0,title:r.title,onClose:()=>t(null),onCancel:()=>t(null),onSave:()=>t(null),confirmLabel:r.confirmLabel,cancelLabel:`Cancel`,width:480})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Generic modal — minimal content to show the shell structure.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Modal isOpen title="Scrollable form" onClose={() => {}} disableAutoFocus>
      {Array.from({
      length: 20
    }, (_, index) => <Input key={index} label={\`Field \${index + 1}\`} width="100%" />)}
    </Modal>,
  play: async ({
    canvasElement
  }) => {
    const dialog = await within(canvasElement.ownerDocument.body).findByRole('dialog', {
      name: 'Scrollable form'
    });
    const body = dialog.querySelector('.modal-body') as HTMLElement;
    const footer = dialog.querySelector('.modal-footer-area') as HTMLElement;
    const lastInput = within(dialog).getAllByRole('textbox').at(-1) as HTMLInputElement;
    await waitFor(() => {
      expect(body.scrollHeight).toBeGreaterThan(body.clientHeight);
      expect(footer).toHaveAttribute('data-shadow');
    });
    expect(footer.getBoundingClientRect().top - body.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(6);
    expect(getComputedStyle(footer).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    lastInput.focus();
    body.scrollTop = body.scrollHeight;
    body.dispatchEvent(new Event('scroll'));
    await waitFor(() => expect(footer).not.toHaveAttribute('data-shadow'));
    expect(lastInput).toHaveFocus();
    expect(lastInput.getBoundingClientRect().bottom).toBeLessThan(footer.getBoundingClientRect().top - 4);
  }
}`,...v.parameters?.docs?.source},description:{story:`Regression coverage for controls reaching the fixed footer on short screens.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Alert Modal — compact dialog with icon, title, optional description, and
right-aligned action buttons. Variants: success, info (single "Ok, Got it"),
warning, error (Cancel + action), denial (single "Ok, Got it").
Figma: Chinnaiya Style Sheet node 93672:150667.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Alert only heading — same alert modal but with title only, no description paragraph.
Used when the message is short and self-explanatory.`,...b.parameters?.docs?.description}}},x=[`Default`,`ScrollableForm`,`AlertModal`,`AlertOnlyHeading`]}))();export{y as AlertModal,b as AlertOnlyHeading,_ as Default,v as ScrollableForm,x as __namedExportsOrder,g as default};