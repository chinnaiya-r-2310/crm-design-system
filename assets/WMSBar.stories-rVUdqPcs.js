import{i as e,s as t}from"./preload-helper-CJc2i8B4.js";import{t as n}from"./jsx-runtime-BsPI7X8G.js";import{K as r,Q as i,et as a,g as o,o as s,t as c,x as l}from"./Icons-BFiFKMZX.js";import{n as u,r as d}from"./NextGenTopBand-CLeZJHwP.js";var f=e((()=>{}));function p(){return(0,h.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,h.jsx)(`path`,{d:`M10.5 3H3.5C2.39543 3 1.5 3.89543 1.5 5V8C1.5 8.99 2.17 9.82 3.09 10.01C3.26 10.05 3.38 10.21 3.38 10.39V12L5.57 10.09C5.77 9.91 6.02 9.82 6.28 9.82H10.5C11.6046 9.82 12.5 8.92457 12.5 7.82V5C12.5 3.89543 11.6046 3 10.5 3ZM4.5 6.67C4.5 6.97 4.25 7.22 3.95 7.22C3.65 7.22 3.4 6.97 3.4 6.67C3.4 6.37 3.65 6.12 3.95 6.12C4.25 6.12 4.5 6.37 4.5 6.67ZM7.05 6.67C7.05 6.97 6.8 7.22 6.5 7.22C6.2 7.22 5.95 6.97 5.95 6.67C5.95 6.37 6.2 6.12 6.5 6.12C6.8 6.12 7.05 6.37 7.05 6.67ZM9.6 6.67C9.6 6.97 9.35 7.22 9.05 7.22C8.75 7.22 8.5 6.97 8.5 6.67C8.5 6.37 8.75 6.12 9.05 6.12C9.35 6.12 9.6 6.37 9.6 6.67Z`,fill:`currentColor`})})}function m({chatPlaceholder:e=`Here is your Smart chat`,shortcut:t=`Ctrl+Space`,onChatClick:n,onMotivator:a,onAlarmClock:u,onZia:d,onFile:f,onComment:m,onAnnouncement:g}){return(0,h.jsxs)(`div`,{className:`wmsb-root`,children:[(0,h.jsxs)(`button`,{type:`button`,className:`wmsb-chat`,onClick:n,children:[(0,h.jsx)(`span`,{className:`wmsb-chat-icon`,children:(0,h.jsx)(p,{})}),(0,h.jsx)(`span`,{className:`wmsb-chat-text`,children:e}),t&&(0,h.jsx)(`kbd`,{className:`wmsb-kbd`,children:t})]}),(0,h.jsxs)(`div`,{className:`wmsb-icons`,children:[(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Motivator`,onClick:a,children:(0,h.jsx)(r,{width:14,height:14})}),(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Alarm clock`,onClick:u,children:(0,h.jsx)(c,{width:14,height:14})}),(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Zia AI`,onClick:d,children:(0,h.jsx)(i,{width:15,height:12})}),(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Files`,onClick:f,children:(0,h.jsx)(l,{width:12,height:14})}),(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Comments`,onClick:m,children:(0,h.jsx)(o,{width:14,height:14})}),(0,h.jsx)(`button`,{type:`button`,className:`wmsb-icon-btn`,"aria-label":`Announcements`,onClick:g,children:(0,h.jsx)(s,{width:12,height:15})})]})]})}var h,g=e((()=>{h=n(),f(),a(),m.__docgenInfo={description:``,methods:[],displayName:`WMSBar`,props:{chatPlaceholder:{defaultValue:{value:`'Here is your Smart chat'`,computed:!1},required:!1},shortcut:{defaultValue:{value:`'Ctrl+Space'`,computed:!1},required:!1}}}})),_,v,y,b,x,S;e((()=>{g(),_=n(),v={title:`Design System/Components/WMSBar`,component:m,parameters:{layout:`fullscreen`,docs:{description:{component:`WMS (Workplace Management System) bar for Zoho CRM. Thin 28px bar with AI chat prompt on the left and quick-access icon buttons on the right. Figma: Chinnaiya-Style-Sheet node 70415:192244.`}}}},y={name:`Default`,render:()=>(0,_.jsx)(m,{})},b={name:`Custom Prompt`,render:()=>(0,_.jsx)(m,{chatPlaceholder:`Ask Zia anything...`,shortcut:`Ctrl+K`})},x={name:`With TopBand`,render:()=>{let{NextGenTopBand:e}=(d(),t(u));return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,_.jsx)(e,{moduleLabel:`Leads`,moduleCount:1,notificationCount:3}),(0,_.jsx)(m,{}),(0,_.jsx)(`div`,{style:{flex:1,background:`#F0F2F7`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:14,color:`#616E88`,fontFamily:`var(--ds-font-family-base, sans-serif)`},children:`Content area`})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <WMSBar />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Custom Prompt',
  render: () => <WMSBar chatPlaceholder="Ask Zia anything..." shortcut="Ctrl+K" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With TopBand',
  render: () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {
      NextGenTopBand
    } = require('../NextGenTopBand/NextGenTopBand');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
        <NextGenTopBand moduleLabel="Leads" moduleCount={1} notificationCount={3} />
        <WMSBar />
        <div style={{
        flex: 1,
        background: '#F0F2F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#616E88',
        fontFamily: 'var(--ds-font-family-base, sans-serif)'
      }}>
          Content area
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CustomPrompt`,`FullPage`]}))();export{b as CustomPrompt,y as Default,x as FullPage,S as __namedExportsOrder,v as default};