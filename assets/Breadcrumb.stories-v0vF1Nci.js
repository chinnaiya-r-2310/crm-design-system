import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BIhBxwSm.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{at as i,f as a}from"./Icons-5gVJ6N4i.js";var o=e((()=>{}));function s({items:e,selectedIndex:t,defaultSelectedIndex:n,onSelect:r}){let[i,a]=(0,l.useState)(n??e.length-1),o=t===void 0?i:t;function s(e,n,i){t===void 0&&a(e),r?.(e),n.onClick?.(i)}return(0,c.jsx)(`nav`,{"aria-label":`Breadcrumb`,className:`breadcrumb-nav`,children:(0,c.jsx)(`ol`,{className:`breadcrumb-list`,children:e.map((t,n)=>(0,c.jsxs)(`li`,{className:`breadcrumb-item`,children:[n===o?(0,c.jsx)(`span`,{className:`breadcrumb-current`,"aria-current":`page`,children:t.label}):t.href?(0,c.jsx)(`a`,{href:t.href,className:`breadcrumb-link`,onClick:e=>{e.preventDefault(),s(n,t,e)},children:t.label}):(0,c.jsx)(`button`,{type:`button`,className:`breadcrumb-button`,onClick:e=>s(n,t,e),children:t.label}),n<e.length-1&&(0,c.jsx)(u,{})]},n))})})}var c,l,u,d=e((()=>{c=r(),l=t(n(),1),o(),i(),u=()=>(0,c.jsx)(a,{className:`breadcrumb-separator`,"aria-hidden":`true`,style:{transform:`rotate(-90deg)`}}),s.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`}}));function f({title:e,children:t}){return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,p.jsx)(`span`,{style:{fontSize:11,color:`#8C9BAB`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:e}),t]})}var p,m,h,g,_,v,y,b;e((()=>{d(),p=r(),m={title:`Design System/Components/Breadcrumb`,component:s,parameters:{layout:`centered`,docs:{description:{component:`Navigation breadcrumb trail. Clicking an ancestor item makes it the selected (current) item. Last item is selected by default. Fully uncontrolled out of the box; pass selectedIndex + onSelect for controlled usage.`}}}},h={name:`Default`,render:()=>(0,p.jsx)(s,{items:[{label:`Home`},{label:`Deals`},{label:`Deal Details`}]})},g={name:`Two levels`,render:()=>(0,p.jsx)(s,{items:[{label:`Contacts`},{label:`John Smith`}]})},_={name:`Single item (current only)`,render:()=>(0,p.jsx)(s,{items:[{label:`Dashboard`}]})},v={name:`Deep trail — 4 levels`,render:()=>(0,p.jsx)(s,{items:[{label:`CRM`},{label:`Accounts`},{label:`Zoho Corp`},{label:`New Deal`}]})},y={name:`All variations`,render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,p.jsx)(f,{title:`Two levels`,children:(0,p.jsx)(s,{items:[{label:`Contacts`},{label:`John Smith`}]})}),(0,p.jsx)(f,{title:`Three levels`,children:(0,p.jsx)(s,{items:[{label:`Home`},{label:`Deals`},{label:`Deal Details`}]})}),(0,p.jsx)(f,{title:`Four levels`,children:(0,p.jsx)(s,{items:[{label:`CRM`},{label:`Accounts`},{label:`Zoho Corp`},{label:`New Deal`}]})}),(0,p.jsx)(f,{title:`Current only`,children:(0,p.jsx)(s,{items:[{label:`Dashboard`}]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <Breadcrumb items={[{
    label: 'Home'
  }, {
    label: 'Deals'
  }, {
    label: 'Deal Details'
  }]} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Two levels',
  render: () => <Breadcrumb items={[{
    label: 'Contacts'
  }, {
    label: 'John Smith'
  }]} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Single item (current only)',
  render: () => <Breadcrumb items={[{
    label: 'Dashboard'
  }]} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Deep trail — 4 levels',
  render: () => <Breadcrumb items={[{
    label: 'CRM'
  }, {
    label: 'Accounts'
  }, {
    label: 'Zoho Corp'
  }, {
    label: 'New Deal'
  }]} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All variations',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Section title="Two levels">
        <Breadcrumb items={[{
        label: 'Contacts'
      }, {
        label: 'John Smith'
      }]} />
      </Section>
      <Section title="Three levels">
        <Breadcrumb items={[{
        label: 'Home'
      }, {
        label: 'Deals'
      }, {
        label: 'Deal Details'
      }]} />
      </Section>
      <Section title="Four levels">
        <Breadcrumb items={[{
        label: 'CRM'
      }, {
        label: 'Accounts'
      }, {
        label: 'Zoho Corp'
      }, {
        label: 'New Deal'
      }]} />
      </Section>
      <Section title="Current only">
        <Breadcrumb items={[{
        label: 'Dashboard'
      }]} />
      </Section>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`TwoLevels`,`SingleItem`,`DeepTrail`,`AllVariations`]}))();export{y as AllVariations,v as DeepTrail,h as Default,_ as SingleItem,g as TwoLevels,b as __namedExportsOrder,m as default};