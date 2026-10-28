import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{n,t as r}from"./NextGenTopBand-D_-R_GeU.js";import{n as i,t as a}from"./WMSBar-dFZ2Dawo.js";var o,s,c,l,u,d,f;e((()=>{i(),n(),o=t(),s={title:`Design System/Components/WMSBar`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:`WMS bar for Zoho CRM — thin 34px bar with Chats/Channels/Contacts tabs on the left, a smart chat input in the center, and quick-access icon buttons on the right. Figma: Chinnaiya-Style-Sheet node 93756-151835.`}}}},c={name:`Default`,render:()=>(0,o.jsx)(a,{})},l={name:`Channels Active`,render:()=>(0,o.jsx)(a,{defaultTab:`channels`})},u={name:`Contacts Active`,render:()=>(0,o.jsx)(a,{defaultTab:`contacts`})},d={name:`With TopBand`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,o.jsx)(r,{moduleLabel:`Leads`,moduleCount:1,notificationCount:3}),(0,o.jsx)(`div`,{style:{flex:1,background:`#F0F2F7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`#616E88`,fontFamily:`var(--ds-font-family-base, sans-serif)`,paddingBottom:34},children:`Content area`}),(0,o.jsx)(a,{})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <WMSBar />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Channels Active',
  render: () => <WMSBar defaultTab="channels" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Contacts Active',
  render: () => <WMSBar defaultTab="contacts" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`ChannelsActive`,`ContactsActive`,`FullPage`]}))();export{l as ChannelsActive,u as ContactsActive,c as Default,d as FullPage,f as __namedExportsOrder,s as default};