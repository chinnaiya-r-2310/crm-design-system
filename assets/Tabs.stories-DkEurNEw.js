import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9vj-xOM.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";var i,a,o,s,c,l,u,d=e((()=>{i=`_tabBar_1p66g_7`,a=`_tab_1p66g_7`,o=`_content_1p66g_87`,s=`_count_1p66g_91`,c=`_indicator_1p66g_107`,l=`_label_1p66g_221`,u={tabBar:i,tab:a,content:o,count:s,indicator:c,label:l}}));function f({tabs:e,activeTab:t,onChange:n,size:r=`md`,variant:i=`primary`,showCount:a=!1}){let o=(0,p.useRef)(null),s=(0,p.useRef)([]),[c,l]=(0,p.useState)({left:0,width:0}),[d,f]=(0,p.useState)(!1);return(0,p.useLayoutEffect)(()=>{let n=e.findIndex(e=>e.id===t),r=s.current[n],i=o.current;if(!r||!i)return;let a=i.getBoundingClientRect(),c=r.getBoundingClientRect(),u=parseFloat(getComputedStyle(i).borderLeftWidth)||0;l({left:c.left-a.left-u,width:c.width})},[t,e]),(0,p.useEffect)(()=>{f(!0)},[]),(0,m.jsxs)(`div`,{ref:o,className:u.tabBar,"data-variant":i,"data-size":r,role:`tablist`,children:[e.map((e,r)=>{let i=e.id===t;return(0,m.jsx)(`button`,{ref:e=>{s.current[r]=e},role:`tab`,"aria-selected":i,className:u.tab,"data-active":i||void 0,onClick:()=>n(e.id),children:(0,m.jsxs)(`span`,{className:u.content,children:[(0,m.jsx)(`span`,{className:u.label,"data-label":e.label,children:e.label}),a&&e.count!==void 0&&(0,m.jsx)(`span`,{className:u.count,"aria-label":`${e.count} items`,children:e.count})]})},e.id)}),(0,m.jsx)(`span`,{className:u.indicator,"data-animated":d||void 0,style:c,"aria-hidden":`true`})]})}var p,m,h=e((()=>{p=t(n(),1),d(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},activeTab:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'md' | 'sm'`,elements:[{name:`literal`,value:`'md'`},{name:`literal`,value:`'sm'`}]},description:`md = Primary Tab 35px / Secondary Tab 35px outer
sm = Small Primary Tab 26px / Small Secondary Tab 30px outer`,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`}]},description:`primary: flat bar with sliding underline indicator
secondary: pill container with sliding filled-pill indicator`,defaultValue:{value:`'primary'`,computed:!1}},showCount:{required:!1,tsType:{name:`boolean`},description:`Show count badges. When false (default) no badge is rendered even if a tab has a count value.`,defaultValue:{value:`false`,computed:!1}}}}}));function g(e){let[t,n]=(0,_.useState)(e.tabs[0].id);return(0,v.jsx)(f,{...e,activeTab:t,onChange:n})}var _,v,y,b,x,S,C,w,T,E;e((()=>{_=t(n(),1),h(),v=r(),y={title:`Design System/Components/Tabs`,component:f,parameters:{layout:`padded`},argTypes:{variant:{control:`radio`,options:[`primary`,`secondary`],description:`primary = flat bar with underline, secondary = pill container`,table:{defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`md`,`sm`],description:`md = 35px, sm = 26px (primary) / 30px (secondary)`,table:{defaultValue:{summary:`md`}}},showCount:{control:`boolean`,description:`Show count badges. Tabs without a count value are unaffected.`,table:{defaultValue:{summary:`false`}}}}},b=[{id:`overview`,label:`Overview`},{id:`activity`,label:`Activity`},{id:`emails`,label:`Emails`},{id:`calls`,label:`Calls`},{id:`meetings`,label:`Meetings`}],x=[{id:`open`,label:`Open`,count:12},{id:`in-progress`,label:`In Progress`,count:5},{id:`closed`,label:`Closed`,count:128}],S=e=>(0,v.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:12,marginTop:0},children:e}),C={name:`Primary Tab`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,v.jsxs)(`div`,{children:[S(`md — without count`),(0,v.jsx)(g,{tabs:b,size:`md`,variant:`primary`})]}),(0,v.jsxs)(`div`,{children:[S(`md — with count (showCount=true)`),(0,v.jsx)(g,{tabs:x,size:`md`,variant:`primary`,showCount:!0})]}),(0,v.jsxs)(`div`,{children:[S(`sm — without count`),(0,v.jsx)(g,{tabs:b,size:`sm`,variant:`primary`})]}),(0,v.jsxs)(`div`,{children:[S(`sm — with count (showCount=true)`),(0,v.jsx)(g,{tabs:x,size:`sm`,variant:`primary`,showCount:!0})]})]})},w={name:`Secondary Tab`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,v.jsxs)(`div`,{children:[S(`md — without count`),(0,v.jsx)(g,{tabs:b,size:`md`,variant:`secondary`})]}),(0,v.jsxs)(`div`,{children:[S(`md — with count (showCount=true)`),(0,v.jsx)(g,{tabs:x,size:`md`,variant:`secondary`,showCount:!0})]}),(0,v.jsxs)(`div`,{children:[S(`sm — without count`),(0,v.jsx)(g,{tabs:b,size:`sm`,variant:`secondary`})]}),(0,v.jsxs)(`div`,{children:[S(`sm — with count (showCount=true)`),(0,v.jsx)(g,{tabs:x,size:`sm`,variant:`secondary`,showCount:!0})]})]})},T={name:`All Variants`,render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:48},children:[(0,v.jsxs)(`div`,{children:[S(`Primary — md`),(0,v.jsx)(g,{tabs:b,size:`md`,variant:`primary`})]}),(0,v.jsxs)(`div`,{children:[S(`Primary — sm`),(0,v.jsx)(g,{tabs:b,size:`sm`,variant:`primary`})]}),(0,v.jsxs)(`div`,{children:[S(`Secondary — md`),(0,v.jsx)(g,{tabs:b,size:`md`,variant:`secondary`})]}),(0,v.jsxs)(`div`,{children:[S(`Secondary — sm`),(0,v.jsx)(g,{tabs:b,size:`sm`,variant:`secondary`})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Primary Tab',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <div>
        {L('md — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="primary" />
      </div>
      <div>
        {L('md — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="md" variant="primary" showCount />
      </div>
      <div>
        {L('sm — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="primary" />
      </div>
      <div>
        {L('sm — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="sm" variant="primary" showCount />
      </div>
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Primary Tab — flat bar with sliding underline. Click to switch.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Secondary Tab',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <div>
        {L('md — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="secondary" />
      </div>
      <div>
        {L('md — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="md" variant="secondary" showCount />
      </div>
      <div>
        {L('sm — without count')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="secondary" />
      </div>
      <div>
        {L('sm — with count (showCount=true)')}
        <InteractiveTabs tabs={TABS_WITH_COUNT} size="sm" variant="secondary" showCount />
      </div>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Secondary Tab — pill container with sliding filled-pill indicator. Click to switch.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      <div>
        {L('Primary — md')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="primary" />
      </div>
      <div>
        {L('Primary — sm')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="primary" />
      </div>
      <div>
        {L('Secondary — md')}
        <InteractiveTabs tabs={TABS_BASIC} size="md" variant="secondary" />
      </div>
      <div>
        {L('Secondary — sm')}
        <InteractiveTabs tabs={TABS_BASIC} size="sm" variant="secondary" />
      </div>
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Both variants side by side for comparison.`,...T.parameters?.docs?.description}}},E=[`PrimaryTab`,`SecondaryTab`,`AllVariants`]}))();export{T as AllVariants,C as PrimaryTab,w as SecondaryTab,E as __namedExportsOrder,y as default};