import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CXyh61la.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tooltip-I1PQ1ies.js";var o=e((()=>{i()})),s=e((()=>{}));function c(){return(0,d.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,d.jsx)(`rect`,{x:`5.75`,y:`1.75`,width:`8.5`,height:`8.5`,rx:`1.25`,stroke:`#313949`,strokeWidth:`1.5`}),(0,d.jsx)(`path`,{d:`M3.5 4.5H2.5C1.94772 4.5 1.5 4.94772 1.5 5.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H10.5C11.0523 14.5 11.5 14.0523 11.5 13.5V12.5`,stroke:`#313949`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function l(){return(0,d.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,d.jsx)(`path`,{d:`M3 8.5L6.5 12L13 5`,stroke:`#39C995`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function u({code:e=``,type:t=`single`,onCopy:n}){let[r,i]=(0,f.useState)(!1),o=(0,f.useCallback)(async()=>{try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}i(!0),n?.(e),setTimeout(()=>i(!1),2e3)},[e,n]);return(0,d.jsxs)(`div`,{className:`cs-root cs-${t}`,children:[(0,d.jsx)(`div`,{className:`cs-code-wrap`,children:(0,d.jsx)(`code`,{className:`cs-code`,children:e})}),(0,d.jsx)(a,{content:r?`Copied!`:`Copy to Clipboard`,placement:`top`,children:(0,d.jsx)(`button`,{type:`button`,className:`cs-copy-btn${r?` cs-copied`:``}`,onClick:o,"aria-label":r?`Copied!`:`Copy to clipboard`,children:r?(0,d.jsx)(l,{}):(0,d.jsx)(c,{})})})]})}var d,f,p=e((()=>{d=r(),f=t(n(),1),o(),s(),u.__docgenInfo={description:``,methods:[],displayName:`CodeSnippet`,props:{code:{defaultValue:{value:`''`,computed:!1},required:!1},type:{defaultValue:{value:`'single'`,computed:!1},required:!1}}}})),m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{p(),m=r(),h=`options ::= JavaScript Regular Expression option (ctor-options)`,g=`var Singleton = (function() {
  var privateVariable = "…";
  this.publicMethod = function() {…};
}) ();`,_=`node -v-start`,v={title:`Design System/Components/CodeSnippet`,component:u,parameters:{layout:`padded`,docs:{description:{component:"Displays a read-only code string with a one-click copy button. `single` — fixed-height, horizontal scroll. `multi` — auto-height, wraps. `inline` — hugs content width, embeds in text. Figma: Chinnaiya-Style-Sheet node 93672-150667."}}},argTypes:{type:{control:`radio`,options:[`single`,`multi`,`inline`]},code:{control:`text`}},args:{type:`single`,code:h}},y={},b={name:`Single Line`,args:{type:`single`,code:h}},x={name:`Multi Line`,args:{type:`multi`,code:g}},S={name:`Inline`,args:{type:`inline`,code:_}},C={name:`Long Single Line (scrolls)`,args:{type:`single`,code:`npx create-react-app my-app --template typescript && cd my-app && npm install @zoho/crm-design-system && npm start`},decorators:[e=>(0,m.jsx)(`div`,{style:{width:400},children:(0,m.jsx)(e,{})})]},w={name:`Inline Within Paragraph`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`p`,{style:{fontFamily:`var(--ds-font-family-base, sans-serif)`,fontSize:14,color:`#313949`,lineHeight:`28px`},children:[`Run\xA0`,(0,m.jsx)(u,{code:`node -v-start`,type:`inline`}),`\xA0to start the Node server.`]})},T={name:`All Variants`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:20,maxWidth:600,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:[{label:`Single Line`,type:`single`,code:h},{label:`Multi Line`,type:`multi`,code:g},{label:`Inline`,type:`inline`,code:_}].map(({label:e,type:t,code:n})=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,textTransform:`uppercase`,letterSpacing:`0.6px`},children:e}),(0,m.jsx)(u,{type:t,code:n})]},t))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Single Line',
  args: {
    type: 'single',
    code: SINGLE_CODE
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Multi Line',
  args: {
    type: 'multi',
    code: MULTI_CODE
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Inline',
  args: {
    type: 'inline',
    code: INLINE_CODE
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Long Single Line (scrolls)',
  args: {
    type: 'single',
    code: \`npx create-react-app my-app --template typescript && cd my-app && npm install @zoho/crm-design-system && npm start\`
  },
  decorators: [Story => <div style={{
    width: 400
  }}><Story /></div>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Inline Within Paragraph',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <p style={{
    fontFamily: 'var(--ds-font-family-base, sans-serif)',
    fontSize: 14,
    color: '#313949',
    lineHeight: '28px'
  }}>
      Run&nbsp;<CodeSnippet code="node -v-start" type="inline" />&nbsp;to start the Node server.
    </p>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    maxWidth: 600,
    fontFamily: 'var(--ds-font-family-base, sans-serif)'
  }}>
      {[{
      label: 'Single Line',
      type: 'single' as const,
      code: SINGLE_CODE
    }, {
      label: 'Multi Line',
      type: 'multi' as const,
      code: MULTI_CODE
    }, {
      label: 'Inline',
      type: 'inline' as const,
      code: INLINE_CODE
    }].map(({
      label,
      type,
      code
    }) => <div key={type}>
          <p style={{
        margin: '0 0 6px',
        fontSize: 11,
        fontWeight: 600,
        color: '#616E88',
        textTransform: 'uppercase',
        letterSpacing: '0.6px'
      }}>{label}</p>
          <CodeSnippet type={type} code={code} />
        </div>)}
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`SingleLine`,`MultiLine`,`Inline`,`LongSingleLine`,`InlineInText`,`AllVariants`]}))();export{T as AllVariants,S as Inline,w as InlineInText,C as LongSingleLine,x as MultiLine,y as Playground,b as SingleLine,E as __namedExportsOrder,v as default};