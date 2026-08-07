import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./Button-B69kaLnx.js";import{n as i,t as a}from"./Tooltip-CYjZ_osQ.js";var o,s,c,l,u,d,f,p,m;e((()=>{i(),n(),o=t(),s={title:`Design System/Components/Tooltip`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Hover tooltip with three variants (Black, White, Red) and four arrow placements.`,`Figma: Chinnaiya Style Sheet node 14243:110337.`,`Wraps any trigger element — shows on hover/focus, hides on leave/blur.`,"Pass `alwaysVisible` to pin it open in stories and visual tests."].join(` `)}}},argTypes:{variant:{control:`radio`,options:[`black`,`white`,`red`],table:{category:`Appearance`,defaultValue:{summary:`black`}}},placement:{control:`radio`,options:[`top`,`bottom`,`left`,`right`],table:{category:`Appearance`,defaultValue:{summary:`top`}}},content:{control:`text`,table:{category:`Content`}},showIcon:{control:`boolean`,table:{category:`Content`}},alwaysVisible:{control:`boolean`,table:{category:`Testing`,defaultValue:{summary:`false`}}}}},c={args:{content:`Rename`,variant:`black`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},l={args:{content:`Saravanan S on Oct 29 2018 at 06:04 PM`,variant:`white`,placement:`top`,alwaysVisible:!1},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},u={args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},d={name:`With Warning Icon`,args:{content:`Please enter a valid Email`,variant:`red`,placement:`top`,showIcon:!0,alwaysVisible:!0},render:e=>(0,o.jsx)(`div`,{style:{padding:`40px`},children:(0,o.jsx)(a,{...e,children:(0,o.jsx)(r,{variant:`default`,children:`Hover me`})})})},f={name:`All Variants`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,flexWrap:`wrap`,justifyContent:`center`},children:[`black`,`white`,`red`].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`40px`,alignItems:`center`},children:[(0,o.jsx)(`span`,{style:{fontSize:11,textTransform:`uppercase`,color:`#616E88`,fontWeight:500},children:e}),[`top`,`bottom`,`left`,`right`].map(t=>(0,o.jsx)(`div`,{style:{padding:`20px 40px`},children:(0,o.jsx)(a,{content:`Tooltip text`,variant:e,placement:t,alwaysVisible:!0,children:(0,o.jsx)(r,{variant:`default`,size:`sm`,children:t})})},t))]},e))})},p={name:`Interactive (Hover)`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,padding:`60px`},children:[(0,o.jsx)(a,{content:`Default action`,variant:`black`,children:(0,o.jsx)(r,{variant:`default`,children:`Black tip`})}),(0,o.jsx)(a,{content:`Last modified by Saravanan`,variant:`white`,children:(0,o.jsx)(r,{variant:`default`,children:`White tip`})}),(0,o.jsx)(a,{content:`Please enter a valid email`,variant:`red`,showIcon:!0,children:(0,o.jsx)(r,{variant:`default`,children:`Error tip`})})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`All variants and placements in one view.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Interactive — hover any button to see the tooltip.`,...p.parameters?.docs?.description}}},m=[`Black`,`White`,`Red`,`WithIcon`,`AllVariants`,`Interactive`]}))();export{f as AllVariants,c as Black,p as Interactive,u as Red,l as White,d as WithIcon,m as __namedExportsOrder,s as default};