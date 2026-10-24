import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{r as n,t as r}from"./Button-uY13S5yn.js";import{n as i,t as a}from"./Tooltip-BFpBdTNa.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),n(),o=t(),{expect:s,fireEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Design System/Components/Tooltip`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Hover tooltip with three variants (Black, White, Red) and four arrow placements.`,`Figma: Chinnaiya Style Sheet node 14243:110337.`,`Wraps any trigger element — shows on hover/focus, hides on leave/blur.`,"Pass `alwaysVisible` to pin it open in stories and visual tests."].join(` `)}}},argTypes:{variant:{control:`radio`,options:[`black`,`white`,`red`],table:{category:`Appearance`,defaultValue:{summary:`black`}}},placement:{control:`radio`,options:[`top`,`bottom`,`left`,`right`],table:{category:`Appearance`,defaultValue:{summary:`top`}}},content:{control:`text`,table:{category:`Content`}},showIcon:{control:`boolean`,table:{category:`Content`}},alwaysVisible:{control:`boolean`,table:{category:`Testing`,defaultValue:{summary:`false`}}}}},f={args:{content:`Rename`,variant:`black`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},p={args:{content:`Saravanan S on Oct 29 2018 at 06:04 PM`,variant:`white`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},m={args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},h={name:`With Warning Icon`,args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,showIcon:!0,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},g={name:`All Variants`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,flexWrap:`wrap`,justifyContent:`center`},children:[`black`,`white`,`red`].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`,alignItems:`center`},children:[(0,o.jsx)(`span`,{style:{fontSize:11,textTransform:`uppercase`,color:`#616E88`,fontWeight:500},children:e}),[`top`,`bottom`,`left`,`right`].map(t=>(0,o.jsx)(`div`,{style:{padding:`20px 40px`},children:(0,o.jsx)(a,{content:`Tooltip text`,variant:e,placement:t,alwaysVisible:!0,children:(0,o.jsx)(r,{variant:`default`,size:`sm`,children:t})})},t))]},e))})},_={render:()=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{position:`fixed`,right:8,top:`40%`},children:(0,o.jsx)(a,{content:`Long chart label: forecast revenue $125,000`,placement:`left`,children:(0,o.jsx)(`button`,{type:`button`,children:`Right edge`})})}),(0,o.jsx)(`div`,{style:{position:`fixed`,left:8,top:8},children:(0,o.jsx)(a,{content:`Long chart label at the top left corner`,placement:`bottom`,children:(0,o.jsx)(`button`,{type:`button`,children:`Top left`})})}),(0,o.jsx)(`div`,{style:{position:`fixed`,right:8,bottom:8},children:(0,o.jsx)(a,{content:`Long chart description `.repeat(30),placement:`top`,followCursor:!0,children:(0,o.jsx)(`button`,{type:`button`,children:`Cursor edge`})})})]}),play:async({canvasElement:e})=>{let t=u(e),n=u(e.ownerDocument.body);for(let r of[`Right edge`,`Top left`,`Cursor edge`]){let i=t.getByRole(`button`,{name:r}),a=i.getBoundingClientRect();await c.mouseOver(i,{clientX:a.right,clientY:a.bottom}),await l(()=>{let t=n.getByRole(`tooltip`),i=t.getBoundingClientRect();s(i.left).toBeGreaterThanOrEqual(7),s(i.top).toBeGreaterThanOrEqual(7),s(i.right).toBeLessThanOrEqual(e.ownerDocument.documentElement.clientWidth-7),s(i.bottom).toBeLessThanOrEqual(e.ownerDocument.documentElement.clientHeight-7),r===`Right edge`&&(s(t).toHaveClass(`tooltip-placement-right`),s(i.right).toBeLessThanOrEqual(a.left))}),await c.mouseOut(i),await l(()=>s(n.queryByRole(`tooltip`)).not.toBeInTheDocument())}}},v={name:`Interactive (Hover)`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`60px`},children:[(0,o.jsx)(a,{content:`Default action`,variant:`black`,children:(0,o.jsx)(r,{variant:`default`,children:`Black tip`})}),(0,o.jsx)(a,{content:`Last modified by Saravanan`,variant:`white`,children:(0,o.jsx)(r,{variant:`default`,children:`White tip`})}),(0,o.jsx)(a,{content:`Please enter a valid email`,variant:`red`,showIcon:!0,children:(0,o.jsx)(r,{variant:`default`,children:`Error tip`})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`All variants and placements in one view.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Regression coverage for chart tooltips at viewport boundaries.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Interactive — hover any button to see the tooltip.`,...v.parameters?.docs?.description}}},y=[`Black`,`White`,`Red`,`WithIcon`,`AllVariants`,`ViewportEdges`,`Interactive`]}))();export{g as AllVariants,f as Black,v as Interactive,m as Red,_ as ViewportEdges,p as White,h as WithIcon,y as __namedExportsOrder,d as default};