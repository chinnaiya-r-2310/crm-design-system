import{i as e}from"./preload-helper-BTXe9M7S.js";import{t}from"./jsx-runtime-D-I7Lrue.js";import{E as n,Z as r,at as i,g as a,o,rt as s,t as c}from"./Icons-XILV4UI-.js";import{n as l,t as u}from"./NextGenTopBand-Co9lSqlG.js";var d=e((()=>{}));function f(){return(0,m.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,m.jsx)(`path`,{d:`M10.5 3H3.5C2.39543 3 1.5 3.89543 1.5 5V8C1.5 8.99 2.17 9.82 3.09 10.01C3.26 10.05 3.38 10.21 3.38 10.39V12L5.57 10.09C5.77 9.91 6.02 9.82 6.28 9.82H10.5C11.6046 9.82 12.5 8.92457 12.5 7.82V5C12.5 3.89543 11.6046 3 10.5 3ZM4.5 6.67C4.5 6.97 4.25 7.22 3.95 7.22C3.65 7.22 3.4 6.97 3.4 6.67C3.4 6.37 3.65 6.12 3.95 6.12C4.25 6.12 4.5 6.37 4.5 6.67ZM7.05 6.67C7.05 6.97 6.8 7.22 6.5 7.22C6.2 7.22 5.95 6.97 5.95 6.67C5.95 6.37 6.2 6.12 6.5 6.12C6.8 6.12 7.05 6.37 7.05 6.67ZM9.6 6.67C9.6 6.97 9.35 7.22 9.05 7.22C8.75 7.22 8.5 6.97 8.5 6.67C8.5 6.37 8.75 6.12 9.05 6.12C9.35 6.12 9.6 6.37 9.6 6.67Z`,fill:`currentColor`})})}function p({chatPlaceholder:e=`Here is your Smart chat`,shortcut:t=`Ctrl+Space`,onChatClick:i,onMotivator:l,onAlarmClock:u,onZia:d,onFile:p,onComment:h,onAnnouncement:g}){return(0,m.jsxs)(`div`,{className:`wmsb-root`,children:[(0,m.jsxs)(`button`,{type:`button`,className:`wmsb-chat`,onClick:i,children:[(0,m.jsx)(`span`,{className:`wmsb-chat-icon`,children:(0,m.jsx)(f,{})}),(0,m.jsx)(`span`,{className:`wmsb-chat-text`,children:e}),t&&(0,m.jsx)(`kbd`,{className:`wmsb-kbd`,children:t})]}),(0,m.jsxs)(`div`,{className:`wmsb-icons`,children:[(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Motivator`,onClick:l,children:(0,m.jsx)(r,{width:14,height:14})}),(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Alarm clock`,onClick:u,children:(0,m.jsx)(c,{width:14,height:14})}),(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Zia AI`,onClick:d,children:(0,m.jsx)(s,{width:15,height:12})}),(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Files`,onClick:p,children:(0,m.jsx)(n,{width:12,height:14})}),(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Comments`,onClick:h,children:(0,m.jsx)(a,{width:14,height:14})}),(0,m.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Announcements`,onClick:g,children:(0,m.jsx)(o,{width:12,height:15})})]})]})}var m,h=e((()=>{m=t(),d(),i(),p.__docgenInfo={description:``,methods:[],displayName:`WMSBar`,props:{chatPlaceholder:{defaultValue:{value:`'Here is your Smart chat'`,computed:!1},required:!1},shortcut:{defaultValue:{value:`'Ctrl+Space'`,computed:!1},required:!1}}}})),g,_,v,y,b,x;e((()=>{h(),l(),g=t(),_={title:`Design System/Components/WMSBar`,component:p,parameters:{layout:`fullscreen`,docs:{description:{component:`WMS (Workplace Management System) bar for Zoho CRM. Thin 28px bar with AI chat prompt on the left and quick-access icon buttons on the right. Figma: Chinnaiya-Style-Sheet node 70415:192244.`}}}},v={name:`Default`,render:()=>(0,g.jsx)(p,{})},y={name:`Custom Prompt`,render:()=>(0,g.jsx)(p,{chatPlaceholder:`Ask Zia anything...`,shortcut:`Ctrl+K`})},b={name:`With TopBand`,render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,g.jsx)(u,{moduleLabel:`Leads`,moduleCount:1,notificationCount:3}),(0,g.jsx)(`div`,{style:{flex:1,background:`#F0F2F7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`#616E88`,fontFamily:`var(--ds-font-family-base, sans-serif)`,paddingBottom:28},children:`Content area`}),(0,g.jsx)(p,{})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <WMSBar />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Custom Prompt',
  render: () => <WMSBar chatPlaceholder="Ask Zia anything..." shortcut="Ctrl+K" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With TopBand',
  render: () => {
    return <div style={{
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
        paddingBottom: 28
      }}>
          Content area
        </div>
        <WMSBar />
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`CustomPrompt`,`FullPage`]}))();export{y as CustomPrompt,v as Default,b as FullPage,x as __namedExportsOrder,_ as default};