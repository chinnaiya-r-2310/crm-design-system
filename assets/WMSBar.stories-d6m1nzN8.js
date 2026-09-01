import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CZl1xe7t.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{ct as i,dt as a,et as o,g as s,lt as c,o as l,pt as u,st as d,t as f,ut as p}from"./Icons-HJwscVC1.js";import{n as m,t as h}from"./NextGenTopBand-B0eOth9N.js";var g=e((()=>{}));function _({chatPlaceholder:e=`Here is your Smart chat`,shortcut:t=`Ctrl+Space`,defaultTab:n=`chats`,activeTab:r,chatBadge:i=!1,onTabChange:u,onChatClick:d,onMotivator:p,onAlarmClock:m,onZia:h,onNotes:g,onComment:_,onAnnouncement:x}){let[S,C]=(0,y.useState)(n),w=r??S,T=e=>{C(e),u?.(e)};return(0,v.jsxs)(`div`,{className:`wmsb-root`,children:[(0,v.jsx)(`div`,{className:`wmsb-tabs`,children:b.map(({id:e,label:t,Icon:n})=>(0,v.jsxs)(`button`,{type:`button`,className:`wmsb-tab${w===e?` wmsb-tab-active`:``}`,onClick:()=>T(e),children:[(0,v.jsxs)(`span`,{className:`wmsb-tab-icon-wrap`,children:[(0,v.jsx)(n,{width:14,height:14}),e===`chats`&&i&&(0,v.jsx)(`span`,{className:`wmsb-badge`})]}),(0,v.jsx)(`span`,{className:`wmsb-tab-label`,children:t})]},e))}),(0,v.jsx)(`div`,{className:`wmsb-sep`}),(0,v.jsxs)(`button`,{type:`button`,className:`wmsb-chat`,onClick:d,children:[(0,v.jsx)(`span`,{className:`wmsb-chat-text`,children:e}),t&&(0,v.jsxs)(`kbd`,{className:`wmsb-kbd`,children:[`(`,t,`)`]})]}),(0,v.jsxs)(`div`,{className:`wmsb-icons`,children:[(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Motivator`,onClick:p,children:(0,v.jsx)(o,{width:14,height:14})}),(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Reminder`,onClick:m,children:(0,v.jsx)(f,{width:15,height:14})}),(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Zia`,onClick:h,children:(0,v.jsx)(a,{width:15,height:12})}),(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Notes`,onClick:g,children:(0,v.jsx)(c,{width:12,height:14})}),(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Comments`,onClick:_,children:(0,v.jsx)(s,{width:14,height:14})}),(0,v.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Announcements`,onClick:x,children:(0,v.jsx)(l,{width:12,height:15})})]})]})}var v,y,b,x=e((()=>{v=r(),y=t(n(),1),g(),u(),b=[{id:`chats`,label:`Chats`,Icon:i},{id:`channels`,label:`Channels`,Icon:d},{id:`contacts`,label:`Contacts`,Icon:p}],_.__docgenInfo={description:``,methods:[],displayName:`WMSBar`,props:{chatPlaceholder:{defaultValue:{value:`'Here is your Smart chat'`,computed:!1},required:!1},shortcut:{defaultValue:{value:`'Ctrl+Space'`,computed:!1},required:!1},defaultTab:{defaultValue:{value:`'chats'`,computed:!1},required:!1},chatBadge:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),S,C,w,T,E,D,O,k;e((()=>{x(),m(),S=r(),C={title:`Design System/Components/WMSBar`,component:_,parameters:{layout:`fullscreen`,docs:{description:{component:`WMS bar for Zoho CRM — thin 34px bar with Chats/Channels/Contacts tabs on the left, a smart chat input in the center, and quick-access icon buttons on the right. Figma: Chinnaiya-Style-Sheet node 93756-151835.`}}}},w={name:`Default`,render:()=>(0,S.jsx)(_,{})},T={name:`With Chat Badge`,render:()=>(0,S.jsx)(_,{chatBadge:!0})},E={name:`Channels Active`,render:()=>(0,S.jsx)(_,{defaultTab:`channels`})},D={name:`Contacts Active`,render:()=>(0,S.jsx)(_,{defaultTab:`contacts`})},O={name:`With TopBand`,render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,S.jsx)(h,{moduleLabel:`Leads`,moduleCount:1,notificationCount:3}),(0,S.jsx)(`div`,{style:{flex:1,background:`#F0F2F7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`#616E88`,fontFamily:`var(--ds-font-family-base, sans-serif)`,paddingBottom:34},children:`Content area`}),(0,S.jsx)(_,{chatBadge:!0})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <WMSBar />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Chat Badge',
  render: () => <WMSBar chatBadge />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Channels Active',
  render: () => <WMSBar defaultTab="channels" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Contacts Active',
  render: () => <WMSBar defaultTab="contacts" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With TopBand',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }}>
      <NextGenTopBand moduleLabel="Leads" moduleCount={1} notificationCount={3} />
      <div style={{
      flex: 1,
      background: '#F0F2F7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      color: '#616E88',
      fontFamily: 'var(--ds-font-family-base, sans-serif)',
      paddingBottom: 34
    }}>
        Content area
      </div>
      <WMSBar chatBadge />
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithBadge`,`ChannelsActive`,`ContactsActive`,`FullPage`]}))();export{E as ChannelsActive,D as ContactsActive,w as Default,O as FullPage,T as WithBadge,k as __namedExportsOrder,C as default};