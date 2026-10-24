import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Textarea-CkI1X2Dh.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i=t(),{expect:a,fireEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Design System/Components/Textarea`,component:r,parameters:{layout:`centered`,docs:{description:{component:`Multi-line text area. Same visual design as Input (border, states, label layout). Figma: Chinnaiya Style Sheet node 466:47702 ("Description"). Starts at 34px (same as Input), expands to 70px on focus. Custom resize icon from crm-icon-library node 91-19.`}}},argTypes:{layout:{control:`radio`,options:[`horizontal`,`vertical`],table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},error:{control:`boolean`,table:{category:`State`}},disabled:{control:`boolean`,table:{category:`State`}},required:{control:`boolean`,table:{category:`State`}},minHeight:{control:{type:`number`,min:34,step:8},table:{category:`Layout`,defaultValue:{summary:`70`}}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],table:{category:`Testing`}}}},l={args:{label:`Description`,placeholder:`Enter a description…`,layout:`horizontal`,width:670}},u={name:`Horizontal layout`,args:{label:`Description`,placeholder:`Enter a description…`,layout:`horizontal`,width:670}},d={name:`Vertical layout`,args:{label:`Description`,placeholder:`Enter a description…`,layout:`vertical`,width:390}},f={args:{label:`Description`,placeholder:`Required field`,required:!0,layout:`horizontal`,width:670}},p={name:`Error`,args:{label:`Description`,value:`Invalid text`,error:!0,helperText:`Description must be at least 20 characters.`,layout:`horizontal`,width:670}},m={args:{label:`Description`,value:`This field is locked.`,disabled:!0,layout:`horizontal`,width:670}},h={name:`Read Only`,args:{label:`Description`,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,readOnly:!0,layout:`horizontal`,width:670}},g={name:`With helper text`,args:{label:`Description`,placeholder:`Enter a description…`,helperText:`Max 500 characters. Markdown is not supported.`,layout:`horizontal`,width:670}},_={args:{label:`Description`,defaultValue:`Cargo shipment handling instructions.`,width:670},play:async({canvasElement:e})=>{let t=s(e).getByRole(`textbox`),n=e.querySelector(`.textarea-resize-icon`);if(!n)throw Error(`Resize handle is missing`);let r=t.getBoundingClientRect().height,i=n.getBoundingClientRect().top;await o.mouseDown(n,{clientY:i});try{for(let e of[60,120,30])await o.mouseMove(document,{clientY:i+e}),a(getComputedStyle(t).transitionDuration).toBe(`0s`),a(t.getBoundingClientRect().height).toBe(r+e);await o.mouseMove(document,{clientY:i-200}),a(t.getBoundingClientRect().height).toBe(70)}finally{await o.mouseUp(document)}await o.mouseMove(document,{clientY:i+200}),a(t.getBoundingClientRect().height).toBe(70)}},v={name:`All States`,render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:670},children:[(0,i.jsx)(r,{label:`Default`,placeholder:`Enter text…`,width:670}),(0,i.jsx)(r,{label:`Hover`,placeholder:`Enter text…`,width:670,forceState:`hover`}),(0,i.jsx)(r,{label:`Focus`,placeholder:`Enter text…`,width:670,forceState:`focus`}),(0,i.jsx)(r,{label:`Required`,placeholder:`Required field`,required:!0,width:670}),(0,i.jsx)(r,{label:`Disabled`,value:`This field is disabled.`,disabled:!0,width:670}),(0,i.jsx)(r,{label:`Read Only`,value:`This field is read-only.`,readOnly:!0,width:670}),(0,i.jsx)(r,{label:`Error`,value:`Bad input`,error:!0,helperText:`This field has an error.`,width:670})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'horizontal',
    width: 670
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Vertical layout',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    layout: 'vertical',
    width: 390
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Required field',
    required: true,
    layout: 'horizontal',
    width: 670
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Description',
    value: 'Invalid text',
    error: true,
    helperText: 'Description must be at least 20 characters.',
    layout: 'horizontal',
    width: 670
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    value: 'This field is locked.',
    disabled: true,
    layout: 'horizontal',
    width: 670
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Description',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    readOnly: true,
    layout: 'horizontal',
    width: 670
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With helper text',
  args: {
    label: 'Description',
    placeholder: 'Enter a description…',
    helperText: 'Max 500 characters. Markdown is not supported.',
    layout: 'horizontal',
    width: 670
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    defaultValue: 'Cargo shipment handling instructions.',
    width: 670
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = within(canvasElement).getByRole('textbox');
    const handle = canvasElement.querySelector('.textarea-resize-icon');
    if (!handle) throw new Error('Resize handle is missing');
    const initialHeight = textarea.getBoundingClientRect().height;
    const startY = handle.getBoundingClientRect().top;
    await fireEvent.mouseDown(handle, {
      clientY: startY
    });
    try {
      for (const delta of [60, 120, 30]) {
        await fireEvent.mouseMove(document, {
          clientY: startY + delta
        });
        expect(getComputedStyle(textarea).transitionDuration).toBe('0s');
        expect(textarea.getBoundingClientRect().height).toBe(initialHeight + delta);
      }
      await fireEvent.mouseMove(document, {
        clientY: startY - 200
      });
      expect(textarea.getBoundingClientRect().height).toBe(70);
    } finally {
      await fireEvent.mouseUp(document);
    }
    await fireEvent.mouseMove(document, {
      clientY: startY + 200
    });
    expect(textarea.getBoundingClientRect().height).toBe(70);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 670
  }}>
      <Textarea label="Default" placeholder="Enter text…" width={670} />
      <Textarea label="Hover" placeholder="Enter text…" width={670} forceState="hover" />
      <Textarea label="Focus" placeholder="Enter text…" width={670} forceState="focus" />
      <Textarea label="Required" placeholder="Required field" required width={670} />
      <Textarea label="Disabled" value="This field is disabled." disabled width={670} />
      <Textarea label="Read Only" value="This field is read-only." readOnly width={670} />
      <Textarea label="Error" value="Bad input" error helperText="This field has an error." width={670} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Horizontal`,`Vertical`,`Required`,`ErrorState`,`Disabled`,`ReadOnly`,`WithHelperText`,`ResizeTracksPointer`,`AllStates`]}))();export{v as AllStates,l as Default,m as Disabled,p as ErrorState,u as Horizontal,h as ReadOnly,f as Required,_ as ResizeTracksPointer,d as Vertical,g as WithHelperText,y as __namedExportsOrder,c as default};