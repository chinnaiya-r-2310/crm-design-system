import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./Icons-BMWSEpZp.js";var v,y=e((()=>{o(),v={AlertError:g,AlertInfo:d,AlertSuccess:m,AlertWarning:c,Check:n,ChevronDownFilled:f,CloseSmall:h,CriteriaMinus:r,CriteriaPlus:l,HelpCircle:_,Info:i,Lock:a,More:p,ResizeHandle:u,Search:s}}));function b({name:e,size:t=16,className:n,title:r,"aria-label":i,"aria-hidden":a}){let o=v[e],s=i??r,c=!!s;return(0,x.jsx)(o,{width:t,height:t,className:n,"aria-label":s,"aria-hidden":a??(!c||void 0),role:c?`img`:void 0})}var x,S=e((()=>{y(),x=t(),b.__docgenInfo={description:`Renders a design-system icon from the central registry.

Accessibility
─────────────
  Decorative (no aria-label / title):  aria-hidden="true" applied automatically.
  Meaningful  (aria-label or title):   role="img" + accessible name applied.

Color
─────
  Icons use currentColor. Control color with CSS \`color\` on a parent or via className.

Adding icons
────────────
  1. Add the SVG file to src/design-system/foundations/icons/ (PascalCase.svg).
  2. Import and register it in iconMap.ts.
  3. The IconName union updates automatically.`,methods:[],displayName:`Icon`,props:{name:{required:!0,tsType:{name:`unknown`},description:`Icon to render — must be a registered key in iconMap.`},size:{required:!1,tsType:{name:`number`},description:`Width and height in pixels. SVG scales proportionally.
@default 16`,defaultValue:{value:`16`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`CSS class applied to the SVG root element. Use for color via currentColor.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name. Turns the icon into a meaningful image (role="img").
When omitted and no title is provided, the icon is hidden from AT (decorative).`},title:{required:!1,tsType:{name:`string`},description:`Same semantics as aria-label — use when you have a human-readable title for the icon.
Treated identically to aria-label; applied as aria-label on the SVG element.`},"aria-hidden":{required:!1,tsType:{name:`union`,raw:`boolean | 'true' | 'false'`,elements:[{name:`boolean`},{name:`literal`,value:`'true'`},{name:`literal`,value:`'false'`}]},description:`Explicitly override the aria-hidden attribute.
Defaults to true for decorative icons (no aria-label/title).
Pass false to expose a decorative icon to AT when needed.`}}}})),C,w,T,E,D,O,k,A,j,M,N;e((()=>{S(),y(),o(),C=t(),w=Object.keys(v).sort(),T={title:`Design System/Foundations/Icons`,component:b,parameters:{layout:`centered`,docs:{description:{component:["Renders a design-system icon from the central registry (`iconMap.ts`).",`Source: crm-icon-library Figma file (node 91-19).`,`Icons: AlertError · AlertInfo · AlertSuccess · AlertWarning · Check · ChevronDownFilled · CloseSmall · CriteriaMinus · CriteriaPlus · HelpCircle · Info · Lock · More · ResizeHandle · Search.`,"Line icons use `currentColor`. Alert icons use fixed Figma brand colors."].join(` `)}}},argTypes:{name:{control:`select`,options:w,description:"Icon to render — must match a key in `iconMap`",table:{category:`Core`}},size:{control:{type:`number`,min:12,max:64,step:4},description:`Width and height in px — icon scales proportionally`,table:{category:`Core`,defaultValue:{summary:`16`}}},className:{control:`text`,description:`CSS class applied to the SVG element (use for color via currentColor)`,table:{category:`Styling`}},title:{control:`text`,description:`Accessible label — applied as aria-label; turns the icon into role="img"`,table:{category:`Accessibility`}},"aria-label":{control:`text`,description:`Explicit aria-label — overrides title`,table:{category:`Accessibility`}},"aria-hidden":{control:`boolean`,description:`Override auto aria-hidden (true by default for decorative icons)`,table:{category:`Accessibility`}}}},E={name:`Playground`,args:{name:`Info`,size:24},render:e=>(0,C.jsx)(`div`,{style:{color:`var(--ds-text-base)`},children:(0,C.jsx)(b,{...e})})},D={name:`Gallery`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`},children:[(0,C.jsxs)(`div`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,marginBottom:`16px`,letterSpacing:`0.02em`},children:[w.length,` icons`]}),(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(88px, 1fr))`,gap:`8px`,width:`800px`,maxWidth:`100%`},children:w.map(e=>(0,C.jsxs)(`div`,{title:e,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`10px`,padding:`20px 8px 14px`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:`8px`,background:`var(--ds-bg-common-card)`,color:`var(--ds-text-base)`,cursor:`default`,transition:`background 120ms`},children:[(0,C.jsx)(b,{name:e,size:20}),(0,C.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`,lineHeight:`14px`,wordBreak:`break-word`},children:e})]},e))})]})},O={name:`Size Scale`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,color:`var(--ds-text-base)`,fontFamily:`var(--ds-font-family-base)`},children:[12,16,20,24,32,48].map(e=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(b,{name:`Info`,size:e}),(0,C.jsxs)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`},children:[e,`px`]})]},e))})},k={name:`Color Inheritance`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`,fontFamily:`var(--ds-font-family-base)`},children:[[`var(--ds-text-base)`,`Base`],[`var(--ds-text-label)`,`Label`],[`#5464F2`,`Primary`],[`#FF5D5A`,`Error`],[`#F5A623`,`Warning`],[`#2ECC71`,`Success`]].map(([e,t])=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,color:e},children:[(0,C.jsx)(b,{name:`Lock`,size:20}),(0,C.jsx)(`span`,{style:{fontSize:`11px`},children:t})]},t))})},A={name:`Alert Icons`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`},children:[[m,`AlertSuccess`,`#12AA67`],[g,`AlertError`,`#FF5D5A`],[c,`AlertWarning`,`#F18E0A`],[d,`AlertInfo`,`#24CBB7`]].map(([e,t,n])=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(e,{}),(0,C.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t}),(0,C.jsx)(`span`,{style:{fontSize:`10px`,color:n,fontWeight:600},children:n})]},t))})},j={name:`Line Icons`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`,color:`var(--ds-text-base)`},children:[[n,`Check`,11],[f,`ChevronDownFilled`,10],[h,`CloseSmall`,8],[r,`CriteriaMinus`,16],[l,`CriteriaPlus`,16],[_,`HelpCircle`,16],[i,`Info`,18],[a,`Lock`,16],[p,`More`,16],[u,`ResizeHandle`,10],[s,`Search`,14]].map(([e,t,n])=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(e,{width:n,height:n}),(0,C.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))})},M={name:`Accessibility`,parameters:{controls:{disable:!0}},render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontFamily:`var(--ds-font-family-base)`,fontSize:`14px`,color:`var(--ds-text-base)`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(b,{name:`Info`,size:16}),(0,C.jsx)(`span`,{children:`Decorative — aria-hidden="true" applied automatically (no label needed)`})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(b,{name:`Lock`,size:16,"aria-label":`Locked`}),(0,C.jsx)(`span`,{children:`Meaningful — role="img" aria-label="Locked" (screen readers announce it)`})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(b,{name:`Search`,size:16,title:`Search records`}),(0,C.jsx)(`span`,{children:`Meaningful via title — same effect as aria-label`})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    name: 'Info',
    size: 24
  },
  render: args => <div style={{
    color: 'var(--ds-text-base)'
  }}>
      <Icon {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to change the icon name and size.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      <div style={{
      fontSize: '11px',
      color: 'var(--ds-text-label)',
      marginBottom: '16px',
      letterSpacing: '0.02em'
    }}>
        {galleryIcons.length} icons
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
      gap: '8px',
      width: '800px',
      maxWidth: '100%'
    }}>
        {galleryIcons.map(name => <div key={name} title={name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px 8px 14px',
        border: '1px solid var(--ds-components-input-default-outline)',
        borderRadius: '8px',
        background: 'var(--ds-bg-common-card)',
        color: 'var(--ds-text-base)',
        cursor: 'default',
        transition: 'background 120ms'
      }}>
            <Icon name={name} size={20} />
            <span style={{
          fontSize: '11px',
          color: 'var(--ds-text-label)',
          textAlign: 'center',
          lineHeight: '14px',
          wordBreak: 'break-word'
        }}>
              {name}
            </span>
          </div>)}
      </div>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`All registered icons displayed in a responsive grid.
Automatically reflects iconMap — add a new entry there and it appears here.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Size Scale',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    color: 'var(--ds-text-base)',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([12, 16, 20, 24, 32, 48] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Icon name="Info" size={size} />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)'
      }}>{size}px</span>
        </div>)}
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Common size steps — 12 · 16 · 20 · 24 · 32 · 48.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Color Inheritance',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([['var(--ds-text-base)', 'Base'], ['var(--ds-text-label)', 'Label'], ['#5464F2', 'Primary'], ['#FF5D5A', 'Error'], ['#F5A623', 'Warning'], ['#2ECC71', 'Success']] as const).map(([color, label]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      color
    }}>
          <Icon name="Lock" size={20} />
          <span style={{
        fontSize: '11px'
      }}>{label}</span>
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Icons inherit `currentColor` — wrap with any color to change them.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Alert Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontFamily: 'var(--ds-font-family-base)'
  }}>
      {([[AlertSuccess, 'AlertSuccess', '#12AA67'], [AlertError, 'AlertError', '#FF5D5A'], [AlertWarning, 'AlertWarning', '#F18E0A'], [AlertInfo, 'AlertInfo', '#24CBB7']] as const).map(([Comp, label, color]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Comp />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        textAlign: 'center'
      }}>{label}</span>
          <span style={{
        fontSize: '10px',
        color,
        fontWeight: 600
      }}>{color}</span>
        </div>)}
    </div>
}`,...A.parameters?.docs?.source},description:{story:"Alert icons use hardcoded brand colors matching the Figma design. They cannot be recolored via CSS `color`.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Line Icons',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    fontFamily: 'var(--ds-font-family-base)',
    color: 'var(--ds-text-base)'
  }}>
      {([[Check, 'Check', 11], [ChevronDownFilled, 'ChevronDownFilled', 10], [CloseSmall, 'CloseSmall', 8], [CriteriaMinus, 'CriteriaMinus', 16], [CriteriaPlus, 'CriteriaPlus', 16], [HelpCircle, 'HelpCircle', 16], [Info, 'Info', 18], [Lock, 'Lock', 16], [More, 'More', 16], [ResizeHandle, 'ResizeHandle', 10], [Search, 'Search', 14]] as const).map(([Comp, label, size]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Comp width={size} height={size} />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        textAlign: 'center'
      }}>{label}</span>
        </div>)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:"Small line icons that inherit color from `currentColor`.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'var(--ds-font-family-base)',
    fontSize: '14px',
    color: 'var(--ds-text-base)'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Info" size={16} />
        <span>Decorative — aria-hidden="true" applied automatically (no label needed)</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Lock" size={16} aria-label="Locked" />
        <span>Meaningful — role="img" aria-label="Locked" (screen readers announce it)</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="Search" size={16} title="Search records" />
        <span>Meaningful via title — same effect as aria-label</span>
      </div>
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Decorative icons get aria-hidden="true" automatically. Meaningful icons need a label.`,...M.parameters?.docs?.description}}},N=[`Playground`,`Gallery`,`Sizes`,`Colors`,`AlertIcons`,`LineIcons`,`Accessibility`]}))();export{M as Accessibility,A as AlertIcons,k as Colors,D as Gallery,j as LineIcons,E as Playground,O as Sizes,N as __namedExportsOrder,T as default};