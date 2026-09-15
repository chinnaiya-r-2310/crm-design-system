import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DW-Tj92J.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Icon-BaU-_FnR.js";import{n as o,t as s}from"./NextGenTopBand-B4mJjzLq.js";var c=e((()=>{}));function l({chatPlaceholder:e=`Here is your Smart chat`,shortcut:t=`Ctrl+Space`,defaultTab:n=`chats`,activeTab:r,onTabChange:i,onChatClick:o,onMotivator:s,onAlarmClock:c,onZia:l,onNotes:p,onComment:m,onAnnouncement:h}){let[g,_]=(0,d.useState)(n),v=r??g,y=e=>{_(e),i?.(e)};return(0,u.jsxs)(`div`,{className:`wmsb-root`,children:[(0,u.jsx)(`div`,{className:`wmsb-tabs`,children:f.map(({id:e,label:t,icon:n})=>(0,u.jsxs)(`button`,{type:`button`,className:`wmsb-tab${v===e?` wmsb-tab-active`:``}`,onClick:()=>y(e),children:[(0,u.jsxs)(`span`,{className:`wmsb-tab-icon-wrap`,children:[(0,u.jsx)(a,{name:n,size:14}),e===`chats`&&(0,u.jsx)(`span`,{className:`wmsb-badge`})]}),(0,u.jsx)(`span`,{className:`wmsb-tab-label`,"data-label":t,children:t})]},e))}),(0,u.jsxs)(`button`,{type:`button`,className:`wmsb-chat`,onClick:o,children:[(0,u.jsx)(`span`,{className:`wmsb-chat-text`,children:e}),t&&(0,u.jsxs)(`kbd`,{className:`wmsb-kbd`,children:[`(`,t,`)`]})]}),(0,u.jsxs)(`div`,{className:`wmsb-icons`,children:[(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Motivator`,onClick:s,children:(0,u.jsx)(a,{name:`WmsMotivator`,size:14})}),(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Reminder`,onClick:c,children:(0,u.jsx)(a,{name:`WmsReminder`,size:15})}),(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Zia`,onClick:l,children:(0,u.jsx)(a,{name:`WmsZia`,size:15})}),(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Notes`,onClick:p,children:(0,u.jsx)(a,{name:`WmsNotes`,size:14})}),(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Comments`,onClick:m,children:(0,u.jsx)(a,{name:`WmsComment`,size:14})}),(0,u.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Announcements`,onClick:h,children:(0,u.jsx)(a,{name:`WmsAnnouncements`,size:14})})]})]})}var u,d,f,p=e((()=>{u=r(),d=t(n(),1),c(),i(),f=[{id:`chats`,label:`Chats`,icon:`WmsChat`},{id:`channels`,label:`Channels`,icon:`WmsChannel`},{id:`contacts`,label:`Contacts`,icon:`WmsUsers`}],l.__docgenInfo={description:``,methods:[],displayName:`WMSBar`,props:{chatPlaceholder:{defaultValue:{value:`'Here is your Smart chat'`,computed:!1},required:!1},shortcut:{defaultValue:{value:`'Ctrl+Space'`,computed:!1},required:!1},defaultTab:{defaultValue:{value:`'chats'`,computed:!1},required:!1}}}})),m,h,g,_,v,y,b;e((()=>{p(),o(),m=r(),h={title:`Design System/Components/WMSBar`,component:l,parameters:{layout:`fullscreen`,docs:{description:{component:`WMS bar for Zoho CRM — thin 34px bar with Chats/Channels/Contacts tabs on the left, a smart chat input in the center, and quick-access icon buttons on the right. Figma: Chinnaiya-Style-Sheet node 93756-151835.`}}}},g={name:`Default`,render:()=>(0,m.jsx)(l,{})},_={name:`Channels Active`,render:()=>(0,m.jsx)(l,{defaultTab:`channels`})},v={name:`Contacts Active`,render:()=>(0,m.jsx)(l,{defaultTab:`contacts`})},y={name:`With TopBand`,render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,m.jsx)(s,{moduleLabel:`Leads`,moduleCount:1,notificationCount:3}),(0,m.jsx)(`div`,{style:{flex:1,background:`#F0F2F7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`#616E88`,fontFamily:`var(--ds-font-family-base, sans-serif)`,paddingBottom:34},children:`Content area`}),(0,m.jsx)(l,{})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <WMSBar />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Channels Active',
  render: () => <WMSBar defaultTab="channels" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Contacts Active',
  render: () => <WMSBar defaultTab="contacts" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      <WMSBar />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`ChannelsActive`,`ContactsActive`,`FullPage`]}))();export{_ as ChannelsActive,v as ContactsActive,g as Default,y as FullPage,b as __namedExportsOrder,h as default};