import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{$ as n,A as r,B as i,C as a,D as o,E as s,F as c,G as l,H as ee,I as te,J as u,K as ne,L as re,M as ie,N as ae,O as oe,P as se,Q as ce,R as le,S as ue,T as d,U as f,V as de,W as fe,X as pe,Y as p,Z as m,_ as h,a as g,b as _,c as me,d as v,et as y,f as b,g as he,h as x,i as S,j as ge,k as _e,l as ve,m as C,n as w,o as ye,p as be,q as T,r as E,s as xe,t as Se,u as D,v as O,w as k,x as A,y as j,z as Ce}from"./Icons-BiTgj1cz.js";var M,N=e((()=>{y(),M={AlertError:w,AlertInfo:E,AlertSuccess:S,AlertWarning:g,Check:v,ChevronDownFilled:b,Close:C,CloseSmall:x,CompanyAvatar:h,CriteriaMinus:O,CriteriaPlus:j,Edit:_,GroupAvatar:a,HelpCircle:k,ImageAvatar:d,Info:s,Lock:o,More:l,ResizeHandle:T,Search:u,UserAvatar:m}}));function P({name:e,size:t=16,className:n,title:r,"aria-label":i,"aria-hidden":a}){let o=M[e],s=i??r,c=!!s;return(0,F.jsx)(o,{width:t,height:t,className:n,"aria-label":s,"aria-hidden":a??(!c||void 0),role:c?`img`:void 0})}var F,we=e((()=>{F=t(),N(),P.__docgenInfo={description:`Renders a design-system icon from the central registry.

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
  3. The IconName union updates automatically.`,methods:[],displayName:`Icon`,props:{size:{defaultValue:{value:`16`,computed:!1},required:!1}}}}));function I({label:e,children:t}){return(0,L.jsxs)(`div`,{style:J,title:e,children:[t,(0,L.jsx)(`span`,{style:Y,children:e})]})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{we(),N(),y(),L=t(),R=Object.keys(M).sort(),z={title:`Design System/Foundations/Icons`,component:P,parameters:{layout:`centered`,docs:{description:{component:["Renders a design-system icon from the central registry (`iconMap.ts`).",`Source: crm-icon-library Figma file (node 91-19).`,`Icons: AlertError · AlertInfo · AlertSuccess · AlertWarning · Check · ChevronDownFilled · Close · CloseSmall · CompanyAvatar · CriteriaMinus · CriteriaPlus · Edit · GroupAvatar · HelpCircle · ImageAvatar · Info · Lock · More · ResizeHandle · Search · UserAvatar.`,"Line icons use `currentColor`. Alert icons use fixed Figma brand colors."].join(` `)}}},argTypes:{name:{control:`select`,options:R,description:"Icon to render — must match a key in `iconMap`",table:{category:`Core`}},size:{control:{type:`number`,min:12,max:64,step:4},description:`Width and height in px — icon scales proportionally`,table:{category:`Core`,defaultValue:{summary:`16`}}},className:{control:`text`,description:`CSS class applied to the SVG element (use for color via currentColor)`,table:{category:`Styling`}},title:{control:`text`,description:`Accessible label — applied as aria-label; turns the icon into role="img"`,table:{category:`Accessibility`}},"aria-label":{control:`text`,description:`Explicit aria-label — overrides title`,table:{category:`Accessibility`}},"aria-hidden":{control:`boolean`,description:`Override auto aria-hidden (true by default for decorative icons)`,table:{category:`Accessibility`}}}},B={name:`Playground`,args:{name:`Info`,size:24},render:e=>(0,L.jsx)(`div`,{style:{color:`var(--ds-text-base)`},children:(0,L.jsx)(P,{...e})})},V={name:`Gallery`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`},children:[(0,L.jsxs)(`div`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,marginBottom:`16px`,letterSpacing:`0.02em`},children:[R.length,` icons`]}),(0,L.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(88px, 1fr))`,gap:`8px`,width:`800px`,maxWidth:`100%`},children:R.map(e=>(0,L.jsxs)(`div`,{title:e,style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`10px`,padding:`20px 8px 14px`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:`8px`,background:`var(--ds-bg-common-card)`,color:`var(--ds-text-base)`,cursor:`default`,transition:`background 120ms`},children:[(0,L.jsx)(P,{name:e,size:20}),(0,L.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`,lineHeight:`14px`,wordBreak:`break-word`},children:e})]},e))})]})},H={name:`Size Scale`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,color:`var(--ds-text-base)`,fontFamily:`var(--ds-font-family-base)`},children:[12,16,20,24,32,48].map(e=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(P,{name:`Info`,size:e}),(0,L.jsxs)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`},children:[e,`px`]})]},e))})},U={name:`Color Inheritance`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`,fontFamily:`var(--ds-font-family-base)`},children:[[`var(--ds-text-base)`,`Base`],[`var(--ds-text-label)`,`Label`],[`#5464F2`,`Primary`],[`#FF5D5A`,`Error`],[`#F5A623`,`Warning`],[`#2ECC71`,`Success`]].map(([e,t])=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,color:e},children:[(0,L.jsx)(P,{name:`Lock`,size:20}),(0,L.jsx)(`span`,{style:{fontSize:`11px`},children:t})]},t))})},W={name:`Alert Icons`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`},children:[[S,`AlertSuccess`,`#12AA67`],[w,`AlertError`,`#FF5D5A`],[g,`AlertWarning`,`#F18E0A`],[E,`AlertInfo`,`#24CBB7`]].map(([e,t,n])=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(e,{}),(0,L.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t}),(0,L.jsx)(`span`,{style:{fontSize:`10px`,color:n,fontWeight:600},children:n})]},t))})},G={name:`Line Icons`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`,color:`var(--ds-text-base)`},children:[[v,`Check`,11],[b,`ChevronDownFilled`,10],[C,`Close`,8],[x,`CloseSmall`,8],[O,`CriteriaMinus`,16],[j,`CriteriaPlus`,16],[_,`Edit`,12],[k,`HelpCircle`,16],[s,`Info`,18],[o,`Lock`,16],[l,`More`,16],[T,`ResizeHandle`,10],[u,`Search`,14]].map(([e,t,n])=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(e,{width:n,height:n}),(0,L.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))})},K={name:`Avatar Icons`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,fontFamily:`var(--ds-font-family-base)`},children:[[m,`UserAvatar`],[a,`GroupAvatar`],[h,`CompanyAvatar`],[d,`ImageAvatar`]].map(([e,t])=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(e,{width:48,height:48}),(0,L.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--ds-text-label)`,textAlign:`center`},children:t})]},t))})},q={name:`Accessibility`,parameters:{controls:{disable:!0}},render:()=>(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontFamily:`var(--ds-font-family-base)`,fontSize:`14px`,color:`var(--ds-text-base)`},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(P,{name:`Info`,size:16}),(0,L.jsx)(`span`,{children:`Decorative — aria-hidden="true" applied automatically (no label needed)`})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(P,{name:`Lock`,size:16,"aria-label":`Locked`}),(0,L.jsx)(`span`,{children:`Meaningful — role="img" aria-label="Locked" (screen readers announce it)`})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,L.jsx)(P,{name:`Search`,size:16,title:`Search records`}),(0,L.jsx)(`span`,{children:`Meaningful via title — same effect as aria-label`})]})]})},J={display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`10px`,padding:`18px 8px 12px`,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:`8px`,background:`var(--ds-bg-common-card)`,cursor:`default`},Y={fontSize:`10px`,color:`var(--ds-text-label)`,textAlign:`center`,lineHeight:`13px`,wordBreak:`break-word`,maxWidth:`80px`},X={display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(96px, 1fr))`,gap:`8px`},Z={fontSize:`11px`,fontWeight:600,color:`var(--ds-text-label)`,letterSpacing:`0.06em`,textTransform:`uppercase`,marginBottom:`10px`,marginTop:`28px`},Q={name:`All Icons`,parameters:{controls:{disable:!0},layout:`padded`},render:()=>(0,L.jsxs)(`div`,{style:{fontFamily:`var(--ds-font-family-base)`,maxWidth:`960px`,color:`var(--ds-text-base)`},children:[(0,L.jsx)(`div`,{style:Z,children:`Utility`}),(0,L.jsx)(`div`,{style:X,children:[[`Info`,(0,L.jsx)(s,{width:18,height:18},`i`)],[`Lock`,(0,L.jsx)(o,{width:16,height:16},`l`)],[`Search`,(0,L.jsx)(u,{width:14,height:14},`s`)],[`More`,(0,L.jsx)(l,{width:16,height:16},`m`)],[`Check`,(0,L.jsx)(v,{width:11,height:8},`ch`)],[`ChevronDownFilled`,(0,L.jsx)(b,{width:10,height:5},`cdf`)],[`ChevronUp`,(0,L.jsx)(be,{width:10,height:5},`cu`)],[`Edit`,(0,L.jsx)(_,{width:12,height:12},`e`)],[`Close`,(0,L.jsx)(C,{width:8,height:8},`cl`)],[`CloseSmall`,(0,L.jsx)(x,{width:8,height:8},`cs`)],[`ResizeHandle`,(0,L.jsx)(T,{width:10,height:10},`r`)],[`CriteriaMinus`,(0,L.jsx)(O,{width:16,height:16},`cm`)],[`CriteriaPlus`,(0,L.jsx)(j,{width:16,height:16},`cp`)],[`HelpCircle`,(0,L.jsx)(k,{width:16,height:16},`hc`)],[`Folder`,(0,L.jsx)(ue,{width:16,height:14},`fo`)],[`SidebarCollapse`,(0,L.jsx)(pe,{width:16,height:16},`sc`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))}),(0,L.jsx)(`div`,{style:Z,children:`Alert`}),(0,L.jsx)(`div`,{style:X,children:[[`AlertSuccess`,(0,L.jsx)(S,{width:22,height:22},`as`)],[`AlertError`,(0,L.jsx)(w,{width:22,height:22},`ae`)],[`AlertWarning`,(0,L.jsx)(g,{width:22,height:22},`aw`)],[`AlertInfo`,(0,L.jsx)(E,{width:22,height:22},`ai`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))}),(0,L.jsx)(`div`,{style:Z,children:`Avatar`}),(0,L.jsx)(`div`,{style:X,children:[[`UserAvatar`,(0,L.jsx)(m,{width:40,height:40},`ua`)],[`GroupAvatar`,(0,L.jsx)(a,{width:40,height:40},`ga`)],[`CompanyAvatar`,(0,L.jsx)(h,{width:40,height:40},`ca`)],[`ImageAvatar`,(0,L.jsx)(d,{width:40,height:40},`ima`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))}),(0,L.jsx)(`div`,{style:Z,children:`Module`}),(0,L.jsx)(`div`,{style:X,children:[[`Home`,(0,L.jsx)(re,{width:16,height:15},`mh`)],[`Analytics`,(0,L.jsx)(r,{width:17,height:16},`man`)],[`Reports`,(0,L.jsx)(ee,{width:16,height:16},`mr`)],[`Leads`,(0,L.jsx)(le,{width:16,height:16},`ml`)],[`Contacts`,(0,L.jsx)(ie,{width:16,height:16},`mc`)],[`Accounts`,(0,L.jsx)(oe,{width:17,height:16},`mac`)],[`Deals`,(0,L.jsx)(se,{width:16,height:16},`md`)],[`Forecasts`,(0,L.jsx)(te,{width:16,height:16},`mf`)],[`Products`,(0,L.jsx)(de,{width:16,height:16},`mp`)],[`Cases`,(0,L.jsx)(ge,{width:18,height:16},`mca`)],[`Solutions`,(0,L.jsx)(fe,{width:17,height:16},`ms`)],[`Activities`,(0,L.jsx)(_e,{width:16,height:16},`ma`)],[`Meeting`,(0,L.jsx)(Ce,{width:16,height:18},`mm`)],[`Docs`,(0,L.jsx)(c,{width:16,height:16},`mdo`)],[`Social`,(0,L.jsx)(f,{width:16,height:16},`mso`)],[`Custom`,(0,L.jsx)(ae,{width:16,height:16},`mcu`)],[`My Jobs`,(0,L.jsx)(i,{width:16,height:16},`mmj`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))}),(0,L.jsx)(`div`,{style:Z,children:`Top Bar`}),(0,L.jsx)(`div`,{style:X,children:[[`Bell`,(0,L.jsx)(me,{width:18,height:18},`bl`)],[`Calendar`,(0,L.jsx)(D,{width:18,height:18},`cl`)],[`Settings`,(0,L.jsx)(p,{width:18,height:18},`sg`)],[`BentoMenu`,(0,L.jsx)(ve,{width:16,height:16},`bm`)],[`ZiaAI`,(0,L.jsx)(n,{width:21,height:20},`za`)],[`AppMarket`,(0,L.jsx)(xe,{width:18,height:17},`am`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))}),(0,L.jsx)(`div`,{style:Z,children:`WMS Bar`}),(0,L.jsx)(`div`,{style:X,children:[[`Motivator`,(0,L.jsx)(ne,{width:14,height:14},`mo`)],[`AlarmClock`,(0,L.jsx)(Se,{width:16,height:15},`ac`)],[`Zia`,(0,L.jsx)(ce,{width:17,height:13},`zi`)],[`File`,(0,L.jsx)(A,{width:13,height:15},`fi`)],[`Comment`,(0,L.jsx)(he,{width:14,height:14},`co`)],[`Announcement`,(0,L.jsx)(ye,{width:13,height:17},`an`)]].map(([e,t])=>(0,L.jsx)(I,{label:e,children:t},e))})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to change the icon name and size.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`All registered icons displayed in a responsive grid.
Automatically reflects iconMap — add a new entry there and it appears here.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Common size steps — 12 · 16 · 20 · 24 · 32 · 48.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"Icons inherit `currentColor` — wrap with any color to change them.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Alert icons use hardcoded brand colors matching the Figma design. They cannot be recolored via CSS `color`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
      {([[Check, 'Check', 11], [ChevronDownFilled, 'ChevronDownFilled', 10], [Close, 'Close', 8], [CloseSmall, 'CloseSmall', 8], [CriteriaMinus, 'CriteriaMinus', 16], [CriteriaPlus, 'CriteriaPlus', 16], [Edit, 'Edit', 12], [HelpCircle, 'HelpCircle', 16], [Info, 'Info', 18], [Lock, 'Lock', 16], [More, 'More', 16], [ResizeHandle, 'ResizeHandle', 10], [Search, 'Search', 14]] as const).map(([Comp, label, size]) => <div key={label} style={{
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
}`,...G.parameters?.docs?.source},description:{story:"Small line icons that inherit color from `currentColor`.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Avatar Icons',
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
      {([[UserAvatar, 'UserAvatar'], [GroupAvatar, 'GroupAvatar'], [CompanyAvatar, 'CompanyAvatar'], [ImageAvatar, 'ImageAvatar']] as const).map(([Comp, label]) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Comp width={48} height={48} />
          <span style={{
        fontSize: '11px',
        color: 'var(--ds-text-label)',
        textAlign: 'center'
      }}>{label}</span>
        </div>)}
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Avatar placeholder icons — fixed Figma colors, not recolorable via currentColor.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Decorative icons get aria-hidden="true" automatically. Meaningful icons need a label.`,...q.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'All Icons',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'var(--ds-font-family-base)',
    maxWidth: '960px',
    color: 'var(--ds-text-base)'
  }}>

      {/* ── Utility ── */}
      <div style={SECTION_LABEL_STYLE}>Utility</div>
      <div style={GRID_STYLE}>
        {([['Info', <Info key="i" width={18} height={18} />], ['Lock', <Lock key="l" width={16} height={16} />], ['Search', <Search key="s" width={14} height={14} />], ['More', <More key="m" width={16} height={16} />], ['Check', <Check key="ch" width={11} height={8} />], ['ChevronDownFilled', <ChevronDownFilled key="cdf" width={10} height={5} />], ['ChevronUp', <ChevronUp key="cu" width={10} height={5} />], ['Edit', <Edit key="e" width={12} height={12} />], ['Close', <Close key="cl" width={8} height={8} />], ['CloseSmall', <CloseSmall key="cs" width={8} height={8} />], ['ResizeHandle', <ResizeHandle key="r" width={10} height={10} />], ['CriteriaMinus', <CriteriaMinus key="cm" width={16} height={16} />], ['CriteriaPlus', <CriteriaPlus key="cp" width={16} height={16} />], ['HelpCircle', <HelpCircle key="hc" width={16} height={16} />], ['Folder', <Folder key="fo" width={16} height={14} />], ['SidebarCollapse', <SidebarCollapse key="sc" width={16} height={16} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Alert ── */}
      <div style={SECTION_LABEL_STYLE}>Alert</div>
      <div style={GRID_STYLE}>
        {([['AlertSuccess', <AlertSuccess key="as" width={22} height={22} />], ['AlertError', <AlertError key="ae" width={22} height={22} />], ['AlertWarning', <AlertWarning key="aw" width={22} height={22} />], ['AlertInfo', <AlertInfo key="ai" width={22} height={22} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Avatar ── */}
      <div style={SECTION_LABEL_STYLE}>Avatar</div>
      <div style={GRID_STYLE}>
        {([['UserAvatar', <UserAvatar key="ua" width={40} height={40} />], ['GroupAvatar', <GroupAvatar key="ga" width={40} height={40} />], ['CompanyAvatar', <CompanyAvatar key="ca" width={40} height={40} />], ['ImageAvatar', <ImageAvatar key="ima" width={40} height={40} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Module ── */}
      <div style={SECTION_LABEL_STYLE}>Module</div>
      <div style={GRID_STYLE}>
        {([['Home', <ModuleHome key="mh" width={16} height={15} />], ['Analytics', <ModuleAnalytics key="man" width={17} height={16} />], ['Reports', <ModuleReports key="mr" width={16} height={16} />], ['Leads', <ModuleLeads key="ml" width={16} height={16} />], ['Contacts', <ModuleContacts key="mc" width={16} height={16} />], ['Accounts', <ModuleAccounts key="mac" width={17} height={16} />], ['Deals', <ModuleDeals key="md" width={16} height={16} />], ['Forecasts', <ModuleForecasts key="mf" width={16} height={16} />], ['Products', <ModuleProducts key="mp" width={16} height={16} />], ['Cases', <ModuleCases key="mca" width={18} height={16} />], ['Solutions', <ModuleSolutions key="ms" width={17} height={16} />], ['Activities', <ModuleActivities key="ma" width={16} height={16} />], ['Meeting', <ModuleMeeting key="mm" width={16} height={18} />], ['Docs', <ModuleDocs key="mdo" width={16} height={16} />], ['Social', <ModuleSocial key="mso" width={16} height={16} />], ['Custom', <ModuleCustom key="mcu" width={16} height={16} />], ['My Jobs', <ModuleMyJobs key="mmj" width={16} height={16} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── Top Bar ── */}
      <div style={SECTION_LABEL_STYLE}>Top Bar</div>
      <div style={GRID_STYLE}>
        {([['Bell', <Bell key="bl" width={18} height={18} />], ['Calendar', <CalendarIcon key="cl" width={18} height={18} />], ['Settings', <Settings key="sg" width={18} height={18} />], ['BentoMenu', <BentoMenu key="bm" width={16} height={16} />], ['ZiaAI', <ZiaAI key="za" width={21} height={20} />], ['AppMarket', <AppMarket key="am" width={18} height={17} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

      {/* ── WMS Bar ── */}
      <div style={SECTION_LABEL_STYLE}>WMS Bar</div>
      <div style={GRID_STYLE}>
        {([['Motivator', <Motivator key="mo" width={14} height={14} />], ['AlarmClock', <AlarmClock key="ac" width={16} height={15} />], ['Zia', <Zia key="zi" width={17} height={13} />], ['File', <File key="fi" width={13} height={15} />], ['Comment', <Comment key="co" width={14} height={14} />], ['Announcement', <Announcement key="an" width={13} height={17} />]] as [string, React.ReactNode][]).map(([label, el]) => <IconCell key={label} label={label}>{el}</IconCell>)}
      </div>

    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`Gallery`,`Sizes`,`Colors`,`AlertIcons`,`LineIcons`,`AvatarIcons`,`Accessibility`,`AllIcons`]}))();export{q as Accessibility,W as AlertIcons,Q as AllIcons,K as AvatarIcons,U as Colors,V as Gallery,G as LineIcons,B as Playground,H as Sizes,$ as __namedExportsOrder,z as default};