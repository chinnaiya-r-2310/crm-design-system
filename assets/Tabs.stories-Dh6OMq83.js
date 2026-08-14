import{c as e,i as t}from"./preload-helper-CJc2i8B4.js";import{N as n}from"./iframe-6JdsuIax.js";import{t as r}from"./jsx-runtime-BsPI7X8G.js";var i=t((()=>{}));function a({tabs:e,activeTab:t,onChange:n,size:r=`md`,variant:i=`primary`,showCount:a=!1}){let c=(0,s.useRef)(null),l=(0,s.useRef)([]),[u,d]=(0,s.useState)({left:0,width:0}),[f,p]=(0,s.useState)(!1);return(0,s.useLayoutEffect)(()=>{let n=e.findIndex(e=>e.id===t),r=l.current[n],i=c.current;if(!r||!i)return;let a=i.getBoundingClientRect(),o=r.getBoundingClientRect(),s=parseFloat(getComputedStyle(i).borderLeftWidth)||0;d({left:o.left-a.left-s,width:o.width})},[t,e]),(0,s.useEffect)(()=>{p(!0)},[]),(0,o.jsxs)(`div`,{ref:c,className:`tabs-tab-bar`,"data-variant":i,"data-size":r,role:`tablist`,children:[e.map((e,r)=>{let i=e.id===t;return(0,o.jsx)(`button`,{ref:e=>{l.current[r]=e},role:`tab`,"aria-selected":i,className:`tabs-tab`,"data-active":i||void 0,onClick:()=>n(e.id),children:(0,o.jsxs)(`span`,{className:`tabs-content`,children:[(0,o.jsx)(`span`,{className:`tabs-label`,"data-label":e.label,children:e.label}),a&&e.count!==void 0&&(0,o.jsx)(`span`,{className:`tabs-count`,"aria-label":`${e.count} items`,children:e.count})]})},e.id)}),(0,o.jsx)(`span`,{className:`tabs-indicator`,"data-animated":f||void 0,style:u,"aria-hidden":`true`})]})}var o,s,c=t((()=>{o=r(),s=e(n(),1),i(),a.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'primary'`,computed:!1},required:!1},showCount:{defaultValue:{value:`false`,computed:!1},required:!1}}}}));function l(e){let[t,n]=(0,u.useState)(e.tabs[0].id);return(0,d.jsx)(a,{...e,activeTab:t,onChange:n})}var u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),c(),d=r(),f={title:`Design System/Components/Tabs`,component:a,parameters:{layout:`padded`},argTypes:{variant:{control:`radio`,options:[`primary`,`secondary`],description:`primary = flat bar with underline, secondary = pill container`,table:{defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`md`,`sm`],description:`md = 35px, sm = 26px (primary) / 30px (secondary)`,table:{defaultValue:{summary:`md`}}},showCount:{control:`boolean`,description:`Show count badges. Tabs without a count value are unaffected.`,table:{defaultValue:{summary:`false`}}}}},p=[{id:`overview`,label:`Overview`},{id:`activity`,label:`Activity`},{id:`emails`,label:`Emails`},{id:`calls`,label:`Calls`},{id:`meetings`,label:`Meetings`}],m=[{id:`open`,label:`Open`,count:12},{id:`in-progress`,label:`In Progress`,count:5},{id:`closed`,label:`Closed`,count:128}],h=e=>(0,d.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:12,marginTop:0},children:e}),g={name:`Primary Tab`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,d.jsxs)(`div`,{children:[h(`md — without count`),(0,d.jsx)(l,{tabs:p,size:`md`,variant:`primary`})]}),(0,d.jsxs)(`div`,{children:[h(`md — with count (showCount=true)`),(0,d.jsx)(l,{tabs:m,size:`md`,variant:`primary`,showCount:!0})]}),(0,d.jsxs)(`div`,{children:[h(`sm — without count`),(0,d.jsx)(l,{tabs:p,size:`sm`,variant:`primary`})]}),(0,d.jsxs)(`div`,{children:[h(`sm — with count (showCount=true)`),(0,d.jsx)(l,{tabs:m,size:`sm`,variant:`primary`,showCount:!0})]})]})},_={name:`Secondary Tab`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,d.jsxs)(`div`,{children:[h(`md — without count`),(0,d.jsx)(l,{tabs:p,size:`md`,variant:`secondary`})]}),(0,d.jsxs)(`div`,{children:[h(`md — with count (showCount=true)`),(0,d.jsx)(l,{tabs:m,size:`md`,variant:`secondary`,showCount:!0})]}),(0,d.jsxs)(`div`,{children:[h(`sm — without count`),(0,d.jsx)(l,{tabs:p,size:`sm`,variant:`secondary`})]}),(0,d.jsxs)(`div`,{children:[h(`sm — with count (showCount=true)`),(0,d.jsx)(l,{tabs:m,size:`sm`,variant:`secondary`,showCount:!0})]})]})},v={name:`All Variants`,render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:48},children:[(0,d.jsxs)(`div`,{children:[h(`Primary — md`),(0,d.jsx)(l,{tabs:p,size:`md`,variant:`primary`})]}),(0,d.jsxs)(`div`,{children:[h(`Primary — sm`),(0,d.jsx)(l,{tabs:p,size:`sm`,variant:`primary`})]}),(0,d.jsxs)(`div`,{children:[h(`Secondary — md`),(0,d.jsx)(l,{tabs:p,size:`md`,variant:`secondary`})]}),(0,d.jsxs)(`div`,{children:[h(`Secondary — sm`),(0,d.jsx)(l,{tabs:p,size:`sm`,variant:`secondary`})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Primary Tab — flat bar with sliding underline. Click to switch.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Secondary Tab — pill container with sliding filled-pill indicator. Click to switch.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Both variants side by side for comparison.`,...v.parameters?.docs?.description}}},y=[`PrimaryTab`,`SecondaryTab`,`AllVariants`]}))();export{v as AllVariants,g as PrimaryTab,_ as SecondaryTab,y as __namedExportsOrder,f as default};