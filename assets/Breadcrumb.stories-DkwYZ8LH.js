import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9vj-xOM.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{g as i,o as a}from"./Icons-BMWSEpZp.js";var o,s,c,l,u,d,f,p,m=e((()=>{o=`_nav_17zxa_1`,s=`_list_17zxa_5`,c=`_item_17zxa_14`,l=`_link_17zxa_21`,u=`_button_17zxa_22`,d=`_current_17zxa_23`,f=`_separator_17zxa_62`,p={nav:o,list:s,item:c,link:l,button:u,current:d,separator:f}}));function h({items:e,selectedIndex:t,defaultSelectedIndex:n,onSelect:r}){let[i,a]=(0,g.useState)(n??e.length-1),o=t===void 0?i:t;function s(e,n,i){t===void 0&&a(e),r?.(e),n.onClick?.(i)}return(0,_.jsx)(`nav`,{"aria-label":`Breadcrumb`,className:p.nav,children:(0,_.jsx)(`ol`,{className:p.list,children:e.map((t,n)=>{let r=n===o;return(0,_.jsxs)(`li`,{className:p.item,children:[r?(0,_.jsx)(`span`,{className:p.current,"aria-current":`page`,children:t.label}):t.href?(0,_.jsx)(`a`,{href:t.href,className:p.link,onClick:e=>{e.preventDefault(),s(n,t,e)},children:t.label}):(0,_.jsx)(`button`,{type:`button`,className:p.button,onClick:e=>s(n,t,e),children:t.label}),n<e.length-1&&(0,_.jsx)(v,{})]},n)})})})}var g,_,v,y=e((()=>{g=t(n(),1),m(),i(),_=r(),v=()=>(0,_.jsx)(a,{className:p.separator,"aria-hidden":`true`,style:{transform:`rotate(-90deg)`}}),h.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},selectedIndex:{required:!1,tsType:{name:`number`},description:`Index of the selected (current) item. Controls externally when provided.`},defaultSelectedIndex:{required:!1,tsType:{name:`number`},description:`Default selected index for uncontrolled usage. Defaults to last item.`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when the user clicks an ancestor item.`}}}}));function b({title:e,children:t}){return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,x.jsx)(`span`,{style:{fontSize:11,color:`#8C9BAB`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:e}),t]})}var x,S,C,w,T,E,D,O;e((()=>{y(),x=r(),S={title:`Design System/Components/Breadcrumb`,component:h,parameters:{layout:`centered`,docs:{description:{component:`Navigation breadcrumb trail. Clicking an ancestor item makes it the selected (current) item. Last item is selected by default. Fully uncontrolled out of the box; pass selectedIndex + onSelect for controlled usage.`}}}},C={name:`Default`,render:()=>(0,x.jsx)(h,{items:[{label:`Home`},{label:`Deals`},{label:`Deal Details`}]})},w={name:`Two levels`,render:()=>(0,x.jsx)(h,{items:[{label:`Contacts`},{label:`John Smith`}]})},T={name:`Single item (current only)`,render:()=>(0,x.jsx)(h,{items:[{label:`Dashboard`}]})},E={name:`Deep trail — 4 levels`,render:()=>(0,x.jsx)(h,{items:[{label:`CRM`},{label:`Accounts`},{label:`Zoho Corp`},{label:`New Deal`}]})},D={name:`All variations`,render:()=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,x.jsx)(b,{title:`Two levels`,children:(0,x.jsx)(h,{items:[{label:`Contacts`},{label:`John Smith`}]})}),(0,x.jsx)(b,{title:`Three levels`,children:(0,x.jsx)(h,{items:[{label:`Home`},{label:`Deals`},{label:`Deal Details`}]})}),(0,x.jsx)(b,{title:`Four levels`,children:(0,x.jsx)(h,{items:[{label:`CRM`},{label:`Accounts`},{label:`Zoho Corp`},{label:`New Deal`}]})}),(0,x.jsx)(b,{title:`Current only`,children:(0,x.jsx)(h,{items:[{label:`Dashboard`}]})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <Breadcrumb items={[{
    label: 'Home'
  }, {
    label: 'Deals'
  }, {
    label: 'Deal Details'
  }]} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Two levels',
  render: () => <Breadcrumb items={[{
    label: 'Contacts'
  }, {
    label: 'John Smith'
  }]} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Single item (current only)',
  render: () => <Breadcrumb items={[{
    label: 'Dashboard'
  }]} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`TwoLevels`,`SingleItem`,`DeepTrail`,`AllVariations`]}))();export{D as AllVariations,E as DeepTrail,C as Default,T as SingleItem,w as TwoLevels,O as __namedExportsOrder,S as default};