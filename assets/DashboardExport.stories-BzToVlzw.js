import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CULqjkQ9.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-BaAI9Sdx.js";import{n as o,t as s}from"./Checkbox-DUw7oJMH.js";import{n as c,t as l}from"./Dropdown-Ch76Fk9y.js";import{n as u,t as d}from"./Input-ufjjzKQ8.js";import{n as f,t as p}from"./Modal-Xl7PI8e9.js";import{n as m,t as h}from"./Radio-WeXY7hgE.js";import{n as g,t as _}from"./Switch-yBHIaYfh.js";var v=e((()=>{})),y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{y=t(n(),1),f(),u(),c(),m(),o(),g(),i(),v(),b=r(),{expect:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T=[{value:`pdf`,label:`PDF`},{value:`html`,label:`HTML`},{value:`image`,label:`Image`}],E=[`Letter`,`Legal`,`Tabloid`,`A3`,`A4`].map(e=>({value:e,label:e})),D={title:`Design System/Patterns/Dashboard Export`,parameters:{layout:`centered`,docs:{description:{component:`Dashboard export settings modal based on the PM wireframe. Choose a file name and format, then configure PDF layout, included content, orientation, paper size, and optional password protection. Export validates the settings and closes without an acknowledgement message; generating files and encrypting PDFs require a host application export service.`}}},args:{initialFormat:`pdf`,initiallyOpen:!0,phase1:!1},argTypes:{initialFormat:{control:`select`,options:T.map(e=>e.value)},initiallyOpen:{control:`boolean`},phase1:{control:`boolean`,description:`Hide orientation, paper settings, and password protection.`}}},O={args:{},render:function({initialFormat:e,initiallyOpen:t,phase1:n}){let[r,i]=(0,y.useState)(t),[o,c]=(0,y.useState)(`org_overview`),[u,f]=(0,y.useState)(e),[m,g]=(0,y.useState)(!1),[v,x]=(0,y.useState)(!0),[S,C]=(0,y.useState)(!0),[w,D]=(0,y.useState)(`portrait`),[O,k]=(0,y.useState)(`Letter`),[A,j]=(0,y.useState)(!1),[M,N]=(0,y.useState)(``),[P,F]=(0,y.useState)(!1),[I,L]=(0,y.useState)(!1),R=(0,y.useRef)(null),z=(0,y.useRef)(null),B=(0,y.useId)(),V=u===`pdf`,H=I&&!o.trim(),U=P&&!n&&V&&A&&!M.trim();(0,y.useEffect)(()=>{if(!r)return;let e=z.current?.querySelector(`button`),t=e=>{if(e.key!==`Tab`)return;let t=R.current?.closest(`[role="dialog"]`),n=Array.from(t?.querySelectorAll(`button:not([disabled]), input:not([disabled]), [tabindex="0"]`)??[]).filter(e=>e.getClientRects().length>0),r=n[0],i=n[n.length-1];!r||!i||(e.shiftKey&&(document.activeElement===r||!t?.contains(document.activeElement))?(e.preventDefault(),i.focus()):!e.shiftKey&&(document.activeElement===i||!t?.contains(document.activeElement))&&(e.preventDefault(),r.focus()))};return document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`keydown`,t),e?.focus()}},[r]);let W=()=>{i(!1),N(``),j(!1),L(!1),F(!1)},G=()=>{if(L(!0),F(A),!o.trim()||!n&&V&&A&&!M.trim()){let e=o.trim()?`${B}-password`:`${B}-name`;document.getElementById(e)?.focus();return}W()};return(0,b.jsxs)(`div`,{className:`dashboard-export-launcher`,children:[(0,b.jsx)(`div`,{ref:z,children:(0,b.jsx)(a,{variant:`primary`,onClick:()=>i(!0),children:`Export dashboard`})}),(0,b.jsx)(p,{isOpen:r,title:`Export Dashboard - "Org Overview"`,onClose:W,onSave:G,cancelLabel:`Cancel`,saveLabel:`Export`,width:n?`min(575px, 100vw)`:`min(760px, 100vw)`,className:`dashboard-export-modal${n?` dashboard-export-modal--phase1`:``}`,children:(0,b.jsxs)(`form`,{ref:R,className:`dashboard-export-form`,noValidate:!0,onSubmit:e=>{e.preventDefault(),G()},children:[(0,b.jsx)(d,{id:`${B}-name`,label:`File name`,width:`100%`,columns:`var(--dashboard-export-columns)`,value:o,onChange:e=>c(e.target.value.toLowerCase().replace(/\s+/g,`_`)),required:!0,error:H,"aria-invalid":H||void 0,helperText:H?`Enter a file name.`:void 0}),(0,b.jsxs)(`div`,{className:`dashboard-export-row`,children:[(0,b.jsx)(`span`,{id:`${B}-include`,className:`dashboard-export-label`,children:`Include`}),(0,b.jsxs)(`fieldset`,{className:`dashboard-export-options dashboard-export-includes`,"aria-labelledby":`${B}-include`,children:[(0,b.jsx)(s,{label:`Title`,checked:v,onChange:e=>x(e.target.checked)}),(0,b.jsx)(s,{label:`Description`,checked:S,onChange:e=>C(e.target.checked)})]})]}),(0,b.jsx)(l,{label:`File format`,triggerAriaLabel:`File format`,width:`100%`,columns:`var(--dashboard-export-columns)`,value:u,options:T,onChange:e=>{f(e),N(``),j(!1),F(!1)}}),V&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:`dashboard-export-row`,children:(0,b.jsx)(`fieldset`,{className:`dashboard-export-options dashboard-export-field`,"aria-label":`PDF layout`,children:(0,b.jsx)(s,{label:`One component per page`,checked:m,onChange:e=>g(e.target.checked)})})}),!n&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`dashboard-export-row`,children:[(0,b.jsx)(`span`,{id:`${B}-orientation`,className:`dashboard-export-label`,children:`Orientation`}),(0,b.jsxs)(`fieldset`,{className:`dashboard-export-options`,"aria-labelledby":`${B}-orientation`,children:[(0,b.jsx)(h,{name:`${B}-orientation`,label:`Portrait`,value:`portrait`,checked:w===`portrait`,onChange:()=>D(`portrait`)}),(0,b.jsx)(h,{name:`${B}-orientation`,label:`Landscape`,value:`landscape`,checked:w===`landscape`,onChange:()=>D(`landscape`)})]})]}),(0,b.jsx)(l,{label:`PDF paper settings`,triggerAriaLabel:`PDF paper settings`,width:`100%`,columns:`var(--dashboard-export-columns)`,value:O,options:E,onChange:e=>k(e)}),(0,b.jsxs)(`div`,{className:`dashboard-export-row`,children:[(0,b.jsx)(`label`,{htmlFor:`${B}-protect`,className:`dashboard-export-label`,children:`Set password`}),(0,b.jsx)(_,{id:`${B}-protect`,"aria-label":`Set password`,checked:A,onChange:e=>{j(e.target.checked),N(``),F(!1)}})]}),A&&(0,b.jsx)(d,{id:`${B}-password`,label:`Enter password`,type:`password`,width:`100%`,columns:`var(--dashboard-export-columns)`,autoComplete:`new-password`,value:M,onChange:e=>N(e.target.value),"aria-required":`true`,error:U,"aria-invalid":U||void 0,helperText:U?`Enter a password or turn off password protection.`:void 0})]})]})]})})]})},play:async({canvasElement:e})=>{let t=w(e.ownerDocument.body),n=w(await t.findByRole(`dialog`,{name:`Export Dashboard - "Org Overview"`}));await x(n.getByLabelText(`File name`)).toHaveValue(`org_overview`);let r=n.getByRole(`checkbox`,{name:`One component per page`});await x(r).not.toBeChecked(),await S.click(r),await x(r).toBeChecked(),await S.click(r),await x(r).not.toBeChecked();let i=w(n.getByRole(`group`,{name:`Include`}));await x(i.getByLabelText(`Title`)).toBeChecked(),await x(i.getByLabelText(`Description`)).toBeChecked(),await S.click(n.getByRole(`switch`,{name:`Set password`})),await x(n.getByLabelText(`Enter password`)).not.toHaveAttribute(`aria-invalid`),await x(n.getByLabelText(`Enter password`).closest(`.input-root`)).not.toHaveAttribute(`data-variant`,`error`),await S.click(n.getByRole(`button`,{name:`Export`,exact:!0})),await x(n.getByLabelText(`Enter password`)).toHaveAttribute(`aria-invalid`,`true`),await S.type(n.getByLabelText(`Enter password`),`Demo-passphrase`),await S.clear(n.getByLabelText(`File name`)),await S.click(n.getByRole(`button`,{name:`Export`,exact:!0})),await x(n.getByLabelText(`File name`)).toHaveAttribute(`aria-invalid`,`true`),await S.type(n.getByLabelText(`File name`),`Org Overview`),await x(n.getByLabelText(`File name`)).toHaveValue(`org_overview`),await S.click(n.getByRole(`button`,{name:`Export`,exact:!0})),await C(()=>x(t.queryByRole(`dialog`)).not.toBeInTheDocument()),await x(t.queryByRole(`status`)).not.toBeInTheDocument(),await S.click(t.getByRole(`button`,{name:`Export dashboard`})),await x(n.getByRole(`switch`,{name:`Set password`})).not.toBeChecked()}},k={...O,name:`Other formats`,args:{initialFormat:`html`},play:async({canvasElement:e})=>{let t=w(e.ownerDocument.body),n=w(await t.findByRole(`dialog`));await x(n.queryByRole(`group`,{name:`PDF layout`})).not.toBeInTheDocument();for(let e of[`Image`,`PDF`])await S.click(n.getByRole(`button`,{name:`File format`})),await x(t.getAllByRole(`option`)).toHaveLength(3),await x(t.queryByRole(`option`,{name:`Excel`,exact:!0})).not.toBeInTheDocument(),await x(t.queryByRole(`option`,{name:`CSV`,exact:!0})).not.toBeInTheDocument(),await S.click(await t.findByRole(`option`,{name:e,exact:!0}));await x(n.getByRole(`group`,{name:`PDF layout`})).toBeVisible(),await S.click(n.getByLabelText(`Landscape`)),await x(n.getByLabelText(`Landscape`)).toBeChecked(),await S.click(n.getByRole(`button`,{name:`PDF paper settings`})),await S.click(await t.findByRole(`option`,{name:`A4`,exact:!0})),await x(n.getByRole(`button`,{name:`PDF paper settings`})).toHaveTextContent(`A4`)}},A={...O,args:{phase1:!0},play:async({canvasElement:e})=>{let t=w(e.ownerDocument.body),n=w(await t.findByRole(`dialog`)),r=w(n.getByRole(`group`,{name:`Include`}));await x(r.getByRole(`checkbox`,{name:`Title`,exact:!0})).toBeChecked(),await x(r.getByRole(`checkbox`,{name:`Description`,exact:!0})).toBeChecked(),await S.click(r.getByRole(`checkbox`,{name:`Description`,exact:!0})),await x(r.getByRole(`checkbox`,{name:`Description`,exact:!0})).not.toBeChecked();for(let e of[`HTML`,`Image`,`PDF`])await S.click(n.getByRole(`button`,{name:`File format`})),await x(t.getAllByRole(`option`)).toHaveLength(3),await x(t.queryByRole(`option`,{name:`Excel`,exact:!0})).not.toBeInTheDocument(),await x(t.queryByRole(`option`,{name:`CSV`,exact:!0})).not.toBeInTheDocument(),await S.click(await t.findByRole(`option`,{name:e,exact:!0})),await x(r.getByText(`Title`,{exact:!0})).toBeVisible(),await x(r.getByRole(`checkbox`,{name:`Title`,exact:!0})).toBeChecked(),await x(r.getByText(`Description`,{exact:!0})).toBeVisible(),await x(r.getByRole(`checkbox`,{name:`Description`,exact:!0})).not.toBeChecked(),e!==`PDF`&&await x(n.queryByRole(`group`,{name:`PDF layout`})).not.toBeInTheDocument();let i=n.getByRole(`checkbox`,{name:`One component per page`});await x(i).not.toBeChecked(),await S.click(i),await x(i).toBeChecked(),await x(n.queryByRole(`group`,{name:`Orientation`})).not.toBeInTheDocument(),await x(n.queryByRole(`button`,{name:`PDF paper settings`})).not.toBeInTheDocument(),await x(n.queryByRole(`switch`,{name:`Set password`})).not.toBeInTheDocument(),await x(n.queryByLabelText(`Enter password`)).not.toBeInTheDocument(),await S.clear(n.getByLabelText(`File name`)),await S.click(n.getByRole(`button`,{name:`Export`,exact:!0})),await x(n.getByLabelText(`File name`)).toHaveAttribute(`aria-invalid`,`true`),await S.type(n.getByLabelText(`File name`),`Org Overview`),await x(n.getByLabelText(`File name`)).toHaveValue(`org_overview`),await S.click(n.getByRole(`button`,{name:`Export`,exact:!0})),await C(()=>x(t.queryByRole(`dialog`)).not.toBeInTheDocument()),await x(t.queryByRole(`status`)).not.toBeInTheDocument(),await S.click(t.getByRole(`button`,{name:`Export dashboard`}))}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function DashboardExportPattern({
    initialFormat,
    initiallyOpen,
    phase1
  }) {
    const [open, setOpen] = useState(initiallyOpen);
    const [fileName, setFileName] = useState('org_overview');
    const [format, setFormat] = useState<FileFormat>(initialFormat);
    const [eachComponentPerPage, setEachComponentPerPage] = useState(false);
    const [includeTitle, setIncludeTitle] = useState(true);
    const [includeDescription, setIncludeDescription] = useState(true);
    const [orientation, setOrientation] = useState('portrait');
    const [paperSize, setPaperSize] = useState('Letter');
    const [passwordEnabled, setPasswordEnabled] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordSubmitted, setPasswordSubmitted] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const isPdf = format === 'pdf';
    const nameError = submitted && !fileName.trim();
    const passwordError = passwordSubmitted && !phase1 && isPdf && passwordEnabled && !password.trim();

    // Keep keyboard navigation inside this modal without changing the shared Modal.
    useEffect(() => {
      if (!open) return;
      const launchButton = triggerRef.current?.querySelector('button');
      const trapFocus = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;
        const dialog = formRef.current?.closest('[role="dialog"]');
        const elements = Array.from(dialog?.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), [tabindex="0"]') ?? []).filter(element => element.getClientRects().length > 0);
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && (document.activeElement === first || !dialog?.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialog?.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', trapFocus);
      return () => {
        document.removeEventListener('keydown', trapFocus);
        launchButton?.focus();
      };
    }, [open]);
    const close = () => {
      setOpen(false);
      setPassword('');
      setPasswordEnabled(false);
      setSubmitted(false);
      setPasswordSubmitted(false);
    };
    const save = () => {
      setSubmitted(true);
      setPasswordSubmitted(passwordEnabled);
      if (!fileName.trim() || !phase1 && isPdf && passwordEnabled && !password.trim()) {
        const fieldId = !fileName.trim() ? \`\${id}-name\` : \`\${id}-password\`;
        document.getElementById(fieldId)?.focus();
        return;
      }
      close();
    };
    return <div className="dashboard-export-launcher">
        <div ref={triggerRef}>
          <Button variant="primary" onClick={() => setOpen(true)}>Export dashboard</Button>
        </div>
        <Modal isOpen={open} title={'Export Dashboard - "Org Overview"'} onClose={close} onSave={save} cancelLabel="Cancel" saveLabel="Export" width={phase1 ? 'min(575px, 100vw)' : 'min(760px, 100vw)'} className={\`dashboard-export-modal\${phase1 ? ' dashboard-export-modal--phase1' : ''}\`}>
          <form ref={formRef} className="dashboard-export-form" noValidate onSubmit={(event: FormEvent) => {
          event.preventDefault();
          save();
        }}>
            <Input id={\`\${id}-name\`} label="File name" width="100%" columns="var(--dashboard-export-columns)" value={fileName} onChange={(event: ChangeEvent<HTMLInputElement>) => setFileName(event.target.value.toLowerCase().replace(/\\s+/g, '_'))} required error={nameError} aria-invalid={nameError || undefined} helperText={nameError ? 'Enter a file name.' : undefined} />
            <div className="dashboard-export-row">
              <span id={\`\${id}-include\`} className="dashboard-export-label">Include</span>
              <fieldset className="dashboard-export-options dashboard-export-includes" aria-labelledby={\`\${id}-include\`}>
                <Checkbox label="Title" checked={includeTitle} onChange={(event: ChangeEvent<HTMLInputElement>) => setIncludeTitle(event.target.checked)} />
                <Checkbox label="Description" checked={includeDescription} onChange={(event: ChangeEvent<HTMLInputElement>) => setIncludeDescription(event.target.checked)} />
              </fieldset>
            </div>
            <Dropdown label="File format" triggerAriaLabel="File format" width="100%" columns="var(--dashboard-export-columns)" value={format} options={formats} onChange={(value: FileFormat) => {
            setFormat(value);
            setPassword('');
            setPasswordEnabled(false);
            setPasswordSubmitted(false);
          }} />
            {isPdf && <>
              <div className="dashboard-export-row">
                <fieldset className="dashboard-export-options dashboard-export-field" aria-label="PDF layout">
                  <Checkbox label="One component per page" checked={eachComponentPerPage} onChange={(event: ChangeEvent<HTMLInputElement>) => setEachComponentPerPage(event.target.checked)} />
                </fieldset>
              </div>
              {!phase1 && <>
              <div className="dashboard-export-row">
                <span id={\`\${id}-orientation\`} className="dashboard-export-label">Orientation</span>
                <fieldset className="dashboard-export-options" aria-labelledby={\`\${id}-orientation\`}>
                  <Radio name={\`\${id}-orientation\`} label="Portrait" value="portrait" checked={orientation === 'portrait'} onChange={() => setOrientation('portrait')} />
                  <Radio name={\`\${id}-orientation\`} label="Landscape" value="landscape" checked={orientation === 'landscape'} onChange={() => setOrientation('landscape')} />
                </fieldset>
              </div>
              <Dropdown label="PDF paper settings" triggerAriaLabel="PDF paper settings" width="100%" columns="var(--dashboard-export-columns)" value={paperSize} options={paperSizes} onChange={(value: string) => setPaperSize(value)} />
              <div className="dashboard-export-row">
                <label htmlFor={\`\${id}-protect\`} className="dashboard-export-label">Set password</label>
                <Switch id={\`\${id}-protect\`} aria-label="Set password" checked={passwordEnabled} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setPasswordEnabled(event.target.checked);
                  setPassword('');
                  setPasswordSubmitted(false);
                }} />
              </div>
              {passwordEnabled && <Input id={\`\${id}-password\`} label="Enter password" type="password" width="100%" columns="var(--dashboard-export-columns)" autoComplete="new-password" value={password} onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} aria-required="true" error={passwordError} aria-invalid={passwordError || undefined} helperText={passwordError ? 'Enter a password or turn off password protection.' : undefined} />}
              </>}
            </>}
          </form>
        </Modal>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog', {
      name: 'Export Dashboard - "Org Overview"'
    }));
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    const layoutCheckbox = dialog.getByRole('checkbox', {
      name: 'One component per page'
    });
    await expect(layoutCheckbox).not.toBeChecked();
    await userEvent.click(layoutCheckbox);
    await expect(layoutCheckbox).toBeChecked();
    await userEvent.click(layoutCheckbox);
    await expect(layoutCheckbox).not.toBeChecked();
    const includes = within(dialog.getByRole('group', {
      name: 'Include'
    }));
    await expect(includes.getByLabelText('Title')).toBeChecked();
    await expect(includes.getByLabelText('Description')).toBeChecked();
    await userEvent.click(dialog.getByRole('switch', {
      name: 'Set password'
    }));
    await expect(dialog.getByLabelText('Enter password')).not.toHaveAttribute('aria-invalid');
    await expect(dialog.getByLabelText('Enter password').closest('.input-root')).not.toHaveAttribute('data-variant', 'error');
    await userEvent.click(dialog.getByRole('button', {
      name: 'Export',
      exact: true
    }));
    await expect(dialog.getByLabelText('Enter password')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('Enter password'), 'Demo-passphrase');
    await userEvent.clear(dialog.getByLabelText('File name'));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Export',
      exact: true
    }));
    await expect(dialog.getByLabelText('File name')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('File name'), 'Org Overview');
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    await userEvent.click(dialog.getByRole('button', {
      name: 'Export',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(page.queryByRole('status')).not.toBeInTheDocument();
    // Leave the modal open for visual review after exercising the save flow.
    await userEvent.click(page.getByRole('button', {
      name: 'Export dashboard'
    }));
    await expect(dialog.getByRole('switch', {
      name: 'Set password'
    })).not.toBeChecked();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...DashboardExport,
  name: 'Other formats',
  args: {
    initialFormat: 'html'
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog'));
    await expect(dialog.queryByRole('group', {
      name: 'PDF layout'
    })).not.toBeInTheDocument();
    for (const format of ['Image', 'PDF']) {
      await userEvent.click(dialog.getByRole('button', {
        name: 'File format'
      }));
      await expect(page.getAllByRole('option')).toHaveLength(3);
      await expect(page.queryByRole('option', {
        name: 'Excel',
        exact: true
      })).not.toBeInTheDocument();
      await expect(page.queryByRole('option', {
        name: 'CSV',
        exact: true
      })).not.toBeInTheDocument();
      await userEvent.click(await page.findByRole('option', {
        name: format,
        exact: true
      }));
    }
    await expect(dialog.getByRole('group', {
      name: 'PDF layout'
    })).toBeVisible();
    await userEvent.click(dialog.getByLabelText('Landscape'));
    await expect(dialog.getByLabelText('Landscape')).toBeChecked();
    await userEvent.click(dialog.getByRole('button', {
      name: 'PDF paper settings'
    }));
    await userEvent.click(await page.findByRole('option', {
      name: 'A4',
      exact: true
    }));
    await expect(dialog.getByRole('button', {
      name: 'PDF paper settings'
    })).toHaveTextContent('A4');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...DashboardExport,
  args: {
    phase1: true
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = within(await page.findByRole('dialog'));
    const includes = within(dialog.getByRole('group', {
      name: 'Include'
    }));
    await expect(includes.getByRole('checkbox', {
      name: 'Title',
      exact: true
    })).toBeChecked();
    await expect(includes.getByRole('checkbox', {
      name: 'Description',
      exact: true
    })).toBeChecked();
    await userEvent.click(includes.getByRole('checkbox', {
      name: 'Description',
      exact: true
    }));
    await expect(includes.getByRole('checkbox', {
      name: 'Description',
      exact: true
    })).not.toBeChecked();
    for (const format of ['HTML', 'Image', 'PDF']) {
      await userEvent.click(dialog.getByRole('button', {
        name: 'File format'
      }));
      await expect(page.getAllByRole('option')).toHaveLength(3);
      await expect(page.queryByRole('option', {
        name: 'Excel',
        exact: true
      })).not.toBeInTheDocument();
      await expect(page.queryByRole('option', {
        name: 'CSV',
        exact: true
      })).not.toBeInTheDocument();
      await userEvent.click(await page.findByRole('option', {
        name: format,
        exact: true
      }));
      await expect(includes.getByText('Title', {
        exact: true
      })).toBeVisible();
      await expect(includes.getByRole('checkbox', {
        name: 'Title',
        exact: true
      })).toBeChecked();
      await expect(includes.getByText('Description', {
        exact: true
      })).toBeVisible();
      await expect(includes.getByRole('checkbox', {
        name: 'Description',
        exact: true
      })).not.toBeChecked();
      if (format !== 'PDF') {
        await expect(dialog.queryByRole('group', {
          name: 'PDF layout'
        })).not.toBeInTheDocument();
      }
    }
    const layout = dialog.getByRole('checkbox', {
      name: 'One component per page'
    });
    await expect(layout).not.toBeChecked();
    await userEvent.click(layout);
    await expect(layout).toBeChecked();
    await expect(dialog.queryByRole('group', {
      name: 'Orientation'
    })).not.toBeInTheDocument();
    await expect(dialog.queryByRole('button', {
      name: 'PDF paper settings'
    })).not.toBeInTheDocument();
    await expect(dialog.queryByRole('switch', {
      name: 'Set password'
    })).not.toBeInTheDocument();
    await expect(dialog.queryByLabelText('Enter password')).not.toBeInTheDocument();
    await userEvent.clear(dialog.getByLabelText('File name'));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Export',
      exact: true
    }));
    await expect(dialog.getByLabelText('File name')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(dialog.getByLabelText('File name'), 'Org Overview');
    await expect(dialog.getByLabelText('File name')).toHaveValue('org_overview');
    await userEvent.click(dialog.getByRole('button', {
      name: 'Export',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await expect(page.queryByRole('status')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Export dashboard'
    }));
  }
}`,...A.parameters?.docs?.source}}},j=[`DashboardExport`,`OtherFormats`,`Phase1`]}))();export{O as DashboardExport,k as OtherFormats,A as Phase1,j as __namedExportsOrder,D as default};