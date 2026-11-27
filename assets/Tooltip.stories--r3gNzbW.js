import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{r as n,t as r}from"./Button-CyIwDSWy.js";import{n as i,t as a}from"./Tooltip-B3SuNI1O.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{i(),n(),o=t(),{expect:s,fireEvent:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Design System/Components/Tooltip`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Hover tooltip with three variants (Black, White, Red) and four arrow placements.`,`Figma: Chinnaiya Style Sheet node 14243:110337.`,`Wraps any trigger element — shows on hover/focus, hides on leave/blur.`,"Pass `alwaysVisible` to pin it open in stories and visual tests."].join(` `)}}},argTypes:{variant:{control:`radio`,options:[`black`,`white`,`red`],table:{category:`Appearance`,defaultValue:{summary:`black`}}},placement:{control:`radio`,options:[`top`,`bottom`,`left`,`right`],table:{category:`Appearance`,defaultValue:{summary:`top`}}},content:{control:`text`,table:{category:`Content`}},showIcon:{control:`boolean`,table:{category:`Content`}},delay:{control:{type:`number`,min:0,step:100},description:`Milliseconds to wait after hover/focus before showing. Hiding is immediate.`,table:{category:`Behavior`,defaultValue:{summary:`0`}}},alwaysVisible:{control:`boolean`,table:{category:`Testing`,defaultValue:{summary:`false`}}}}},p={args:{content:`Rename`,variant:`black`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},m={name:`With delay`,args:{content:`Appears after 500ms`,variant:`black`,placement:`top`,delay:500},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover and wait`})})}),play:async({canvasElement:e})=>{let t=d(e).getByRole(`button`,{name:`Hover and wait`});c.mouseOver(t),s(document.querySelector(`[role="tooltip"]`)).toBeNull(),await u(()=>s(document.querySelector(`[role="tooltip"]`)).not.toBeNull(),{timeout:1500}),c.mouseOut(t),await u(()=>s(document.querySelector(`[role="tooltip"]`)).toBeNull())}},h={args:{content:`Saravanan S on Oct 29 2018 at 06:04 PM`,variant:`white`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},g={args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},_={name:`With Warning Icon`,args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,showIcon:!0,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},v={name:`All Variants`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,flexWrap:`wrap`,justifyContent:`center`},children:[`black`,`white`,`red`].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`,alignItems:`center`},children:[(0,o.jsx)(`span`,{style:{fontSize:11,textTransform:`uppercase`,color:`#616E88`,fontWeight:500},children:e}),[`top`,`bottom`,`left`,`right`].map(t=>(0,o.jsx)(`div`,{style:{padding:`20px 40px`},children:(0,o.jsx)(a,{content:`Tooltip text`,variant:e,placement:t,alwaysVisible:!0,children:(0,o.jsx)(r,{variant:`default`,size:`sm`,children:t})})},t))]},e))})},y={render:()=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{position:`fixed`,right:8,top:`40%`},children:(0,o.jsx)(a,{content:`Long chart label: forecast revenue $125,000`,placement:`left`,children:(0,o.jsx)(`button`,{type:`button`,children:`Right edge`})})}),(0,o.jsx)(`div`,{style:{position:`fixed`,left:8,top:8},children:(0,o.jsx)(a,{content:`Long chart label at the top left corner`,placement:`bottom`,children:(0,o.jsx)(`button`,{type:`button`,children:`Top left`})})}),(0,o.jsx)(`div`,{style:{position:`fixed`,right:8,bottom:8},children:(0,o.jsx)(a,{content:`Long chart description `.repeat(30),placement:`top`,followCursor:!0,children:(0,o.jsx)(`button`,{type:`button`,children:`Cursor edge`})})})]}),play:async({canvasElement:e})=>{let t=d(e),n=d(e.ownerDocument.body);for(let r of[`Right edge`,`Top left`,`Cursor edge`]){let i=t.getByRole(`button`,{name:r}),a=i.getBoundingClientRect();await c.mouseOver(i,{clientX:a.right,clientY:a.bottom}),await u(()=>{let t=n.getByRole(`tooltip`),i=t.getBoundingClientRect();s(i.left).toBeGreaterThanOrEqual(7),s(i.top).toBeGreaterThanOrEqual(7),s(i.right).toBeLessThanOrEqual(e.ownerDocument.documentElement.clientWidth-7),s(i.bottom).toBeLessThanOrEqual(e.ownerDocument.documentElement.clientHeight-7),r===`Right edge`&&(s(t).toHaveClass(`tooltip-placement-right`),s(i.right).toBeLessThanOrEqual(a.left))}),await c.mouseOut(i),await u(()=>s(n.queryByRole(`tooltip`)).not.toBeInTheDocument())}}},b={render:()=>(0,o.jsxs)(`div`,{style:{padding:40},children:[(0,o.jsx)(`button`,{type:`button`,children:`Before trigger`}),(0,o.jsx)(a,{content:`Intentional interaction only`,children:(0,o.jsx)(`button`,{type:`button`,autoFocus:!0,children:`Autofocused trigger`})})]}),play:async({canvasElement:e})=>{let t=d(e),n=d(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Autofocused trigger`}),i=t.getByRole(`button`,{name:`Before trigger`});await u(()=>s(r).toHaveFocus()),s(n.queryByRole(`tooltip`)).not.toBeInTheDocument(),await c.mouseOver(r),await u(()=>s(n.getByRole(`tooltip`)).toBeVisible()),await c.mouseOut(r),await u(()=>s(n.queryByRole(`tooltip`)).not.toBeInTheDocument()),i.focus(),r.focus(),s(n.queryByRole(`tooltip`)).not.toBeInTheDocument(),i.focus(),await l.tab(),await u(()=>s(n.getByRole(`tooltip`)).toBeVisible()),await l.keyboard(`{Escape}`),await u(()=>s(n.queryByRole(`tooltip`)).not.toBeInTheDocument()),await l.tab({shift:!0}),s(i).toHaveFocus(),await l.tab(),await u(()=>s(n.getByRole(`tooltip`)).toBeVisible()),await l.tab({shift:!0}),await u(()=>s(n.queryByRole(`tooltip`)).not.toBeInTheDocument())}},x={name:`Interactive (Hover)`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`60px`},children:[(0,o.jsx)(a,{content:`Default action`,variant:`black`,children:(0,o.jsx)(r,{variant:`default`,children:`Black tip`})}),(0,o.jsx)(a,{content:`Last modified by Saravanan`,variant:`white`,children:(0,o.jsx)(r,{variant:`default`,children:`White tip`})}),(0,o.jsx)(a,{content:`Please enter a valid email`,variant:`red`,showIcon:!0,children:(0,o.jsx)(r,{variant:`default`,children:`Error tip`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Rename',
    variant: 'black',
    placement: 'top',
    alwaysVisible: false
  },
  render: args => <div style={{
    padding: '40px'
  }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With delay',
  args: {
    content: 'Appears after 500ms',
    variant: 'black',
    placement: 'top',
    delay: 500
  },
  render: args => <div style={{
    padding: '40px'
  }}>
      <Tooltip {...args}>
        <Button variant="default">Hover and wait</Button>
      </Tooltip>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Hover and wait'
    });
    fireEvent.mouseOver(trigger);
    expect(document.querySelector('[role="tooltip"]')).toBeNull();
    await waitFor(() => expect(document.querySelector('[role="tooltip"]')).not.toBeNull(), {
      timeout: 1500
    });
    fireEvent.mouseOut(trigger);
    await waitFor(() => expect(document.querySelector('[role="tooltip"]')).toBeNull());
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Saravanan S on Oct 29 2018 at 06:04 PM',
    variant: 'white',
    placement: 'top',
    alwaysVisible: false
  },
  render: args => <div style={{
    padding: '40px'
  }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Please enter a valid Email',
    variant: 'red',
    placement: 'top',
    alwaysVisible: true
  },
  render: args => <div style={{
    padding: '40px'
  }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With Warning Icon',
  args: {
    content: 'Please enter a valid Email',
    variant: 'red',
    placement: 'top',
    showIcon: true,
    alwaysVisible: true
  },
  render: args => <div style={{
    padding: '40px'
  }}>
      <Tooltip {...args}>
        <Button variant="default">Hover me</Button>
      </Tooltip>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '80px',
    padding: '60px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      {(['black', 'white', 'red'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      alignItems: 'center'
    }}>
          <span style={{
        fontSize: 11,
        textTransform: 'uppercase',
        color: '#616E88',
        fontWeight: 500
      }}>{variant}</span>
          {(['top', 'bottom', 'left', 'right'] as const).map(placement => <div key={placement} style={{
        padding: '20px 40px'
      }}>
              <Tooltip content="Tooltip text" variant={variant} placement={placement} alwaysVisible>
                <Button variant="default" size="sm">{placement}</Button>
              </Tooltip>
            </div>)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`All variants and placements in one view.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      position: 'fixed',
      right: 8,
      top: '40%'
    }}>
        <Tooltip content="Long chart label: forecast revenue $125,000" placement="left">
          <button type="button">Right edge</button>
        </Tooltip>
      </div>
      <div style={{
      position: 'fixed',
      left: 8,
      top: 8
    }}>
        <Tooltip content="Long chart label at the top left corner" placement="bottom">
          <button type="button">Top left</button>
        </Tooltip>
      </div>
      <div style={{
      position: 'fixed',
      right: 8,
      bottom: 8
    }}>
        <Tooltip content={'Long chart description '.repeat(30)} placement="top" followCursor>
          <button type="button">Cursor edge</button>
        </Tooltip>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    for (const label of ['Right edge', 'Top left', 'Cursor edge']) {
      const trigger = canvas.getByRole('button', {
        name: label
      });
      const bounds = trigger.getBoundingClientRect();
      await fireEvent.mouseOver(trigger, {
        clientX: bounds.right,
        clientY: bounds.bottom
      });
      await waitFor(() => {
        const tooltip = body.getByRole('tooltip');
        const rect = tooltip.getBoundingClientRect();
        expect(rect.left).toBeGreaterThanOrEqual(7);
        expect(rect.top).toBeGreaterThanOrEqual(7);
        expect(rect.right).toBeLessThanOrEqual(canvasElement.ownerDocument.documentElement.clientWidth - 7);
        expect(rect.bottom).toBeLessThanOrEqual(canvasElement.ownerDocument.documentElement.clientHeight - 7);
        if (label === 'Right edge') {
          expect(tooltip).toHaveClass('tooltip-placement-right');
          expect(rect.right).toBeLessThanOrEqual(bounds.left);
        }
      });
      await fireEvent.mouseOut(trigger);
      await waitFor(() => expect(body.queryByRole('tooltip')).not.toBeInTheDocument());
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Regression coverage for chart tooltips at viewport boundaries.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 40
  }}>
      <button type="button">Before trigger</button>
      <Tooltip content="Intentional interaction only">
        <button type="button" autoFocus>Autofocused trigger</button>
      </Tooltip>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Autofocused trigger'
    });
    const before = canvas.getByRole('button', {
      name: 'Before trigger'
    });
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(body.queryByRole('tooltip')).not.toBeInTheDocument();

    // Hover remains available, even on an automatically focused control.
    await fireEvent.mouseOver(trigger);
    await waitFor(() => expect(body.getByRole('tooltip')).toBeVisible());
    await fireEvent.mouseOut(trigger);
    await waitFor(() => expect(body.queryByRole('tooltip')).not.toBeInTheDocument());

    // Programmatic focus (including modal focus restoration) stays quiet.
    before.focus();
    trigger.focus();
    expect(body.queryByRole('tooltip')).not.toBeInTheDocument();

    // Deliberate keyboard navigation still reveals the tooltip.
    before.focus();
    await userEvent.tab();
    await waitFor(() => expect(body.getByRole('tooltip')).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('tooltip')).not.toBeInTheDocument());
    await userEvent.tab({
      shift: true
    });
    expect(before).toHaveFocus();
    await userEvent.tab();
    await waitFor(() => expect(body.getByRole('tooltip')).toBeVisible());
    await userEvent.tab({
      shift: true
    });
    await waitFor(() => expect(body.queryByRole('tooltip')).not.toBeInTheDocument());
  }
}`,...b.parameters?.docs?.source},description:{story:`Automatic or restored focus must not open a tooltip on page/dialog load.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (Hover)',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '60px'
  }}>
      <Tooltip content="Default action" variant="black">
        <Button variant="default">Black tip</Button>
      </Tooltip>
      <Tooltip content="Last modified by Saravanan" variant="white">
        <Button variant="default">White tip</Button>
      </Tooltip>
      <Tooltip content="Please enter a valid email" variant="red" showIcon>
        <Button variant="default">Error tip</Button>
      </Tooltip>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Interactive — hover any button to see the tooltip.`,...x.parameters?.docs?.description}}},S=[`Black`,`WithDelay`,`White`,`Red`,`WithIcon`,`AllVariants`,`ViewportEdges`,`FocusInteractions`,`Interactive`]}))();export{v as AllVariants,p as Black,b as FocusInteractions,x as Interactive,g as Red,y as ViewportEdges,h as White,m as WithDelay,_ as WithIcon,S as __namedExportsOrder,f as default};