import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BwZA-zGr.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tabs-C2g7001B.js";function o(e){let[t,n]=(0,s.useState)(e.tabs[0].id);return(0,c.jsx)(a,{...e,activeTab:t,onChange:n})}var s,c,l,u,d,f,p,m,h,g;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Design System/Components/Tabs`,component:a,parameters:{layout:`padded`},argTypes:{variant:{control:`radio`,options:[`primary`,`secondary`],description:`primary = flat bar with underline, secondary = pill container`,table:{defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`md`,`sm`],description:`md = 35px, sm = 26px (primary) / 30px (secondary)`,table:{defaultValue:{summary:`md`}}},showCount:{control:`boolean`,description:`Show count badges. Tabs without a count value are unaffected.`,table:{defaultValue:{summary:`false`}}}}},u=[{id:`overview`,label:`Overview`},{id:`activity`,label:`Activity`},{id:`emails`,label:`Emails`},{id:`calls`,label:`Calls`},{id:`meetings`,label:`Meetings`}],d=[{id:`open`,label:`Open`,count:12},{id:`in-progress`,label:`In Progress`,count:5},{id:`closed`,label:`Closed`,count:128}],f=e=>(0,c.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:13,color:`var(--ds-text-label)`,marginBottom:12,marginTop:0},children:e}),p={name:`Primary Tab`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,c.jsxs)(`div`,{children:[f(`md — without count`),(0,c.jsx)(o,{tabs:u,size:`md`,variant:`primary`})]}),(0,c.jsxs)(`div`,{children:[f(`md — with count (showCount=true)`),(0,c.jsx)(o,{tabs:d,size:`md`,variant:`primary`,showCount:!0})]}),(0,c.jsxs)(`div`,{children:[f(`sm — without count`),(0,c.jsx)(o,{tabs:u,size:`sm`,variant:`primary`})]}),(0,c.jsxs)(`div`,{children:[f(`sm — with count (showCount=true)`),(0,c.jsx)(o,{tabs:d,size:`sm`,variant:`primary`,showCount:!0})]})]})},m={name:`Secondary Tab`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:40},children:[(0,c.jsxs)(`div`,{children:[f(`md — without count`),(0,c.jsx)(o,{tabs:u,size:`md`,variant:`secondary`})]}),(0,c.jsxs)(`div`,{children:[f(`md — with count (showCount=true)`),(0,c.jsx)(o,{tabs:d,size:`md`,variant:`secondary`,showCount:!0})]}),(0,c.jsxs)(`div`,{children:[f(`sm — without count`),(0,c.jsx)(o,{tabs:u,size:`sm`,variant:`secondary`})]}),(0,c.jsxs)(`div`,{children:[f(`sm — with count (showCount=true)`),(0,c.jsx)(o,{tabs:d,size:`sm`,variant:`secondary`,showCount:!0})]})]})},h={name:`All Variants`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:48},children:[(0,c.jsxs)(`div`,{children:[f(`Primary — md`),(0,c.jsx)(o,{tabs:u,size:`md`,variant:`primary`})]}),(0,c.jsxs)(`div`,{children:[f(`Primary — sm`),(0,c.jsx)(o,{tabs:u,size:`sm`,variant:`primary`})]}),(0,c.jsxs)(`div`,{children:[f(`Secondary — md`),(0,c.jsx)(o,{tabs:u,size:`md`,variant:`secondary`})]}),(0,c.jsxs)(`div`,{children:[f(`Secondary — sm`),(0,c.jsx)(o,{tabs:u,size:`sm`,variant:`secondary`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Primary Tab — flat bar with sliding underline. Click to switch.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Secondary Tab — pill container with sliding filled-pill indicator. Click to switch.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Both variants side by side for comparison.`,...h.parameters?.docs?.description}}},g=[`PrimaryTab`,`SecondaryTab`,`AllVariants`]}))();export{h as AllVariants,p as PrimaryTab,m as SecondaryTab,g as __namedExportsOrder,l as default};