import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CkdNwFls.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-DeurjHLl.js";import{n as o,t as s}from"./Icon-BL5zELH3.js";import{n as c,t as l}from"./ProgressBar-DRkcb2p4.js";var u=e((()=>{}));function d({variant:e=`success`,title:t,children:n,actions:r,defaultMinimized:i=!1,minimized:o,onMinimizedChange:c,onClose:l}){let[u,d]=(0,p.useState)(i),[h,g]=(0,p.useState)(!0),_=(0,p.useId)(),v=o??u,y=m[e]??m.info;return h?(0,f.jsxs)(`section`,{className:`wmst-root wmst-${e}${v?` wmst-minimized`:``}`,role:e===`error`?`alert`:`status`,"aria-labelledby":_,children:[(0,f.jsxs)(`header`,{className:`wmst-header`,children:[(0,f.jsxs)(`div`,{className:`wmst-title-group`,children:[(0,f.jsx)(`span`,{className:`wmst-status-badge`,"aria-hidden":`true`,children:(0,f.jsx)(s,{name:y,size:16})}),(0,f.jsx)(`h3`,{id:_,className:`wmst-title`,children:t})]}),(0,f.jsxs)(`div`,{className:`wmst-controls`,children:[(0,f.jsx)(`button`,{type:`button`,className:`wmst-icon-btn`,"aria-label":v?`Expand notification`:`Minimize notification`,"aria-expanded":!v,onClick:()=>{let e=!v;d(e),c?.(e)},children:(0,f.jsx)(s,{name:v?`RtExpand`:`CriteriaMinus`,size:8})}),(0,f.jsx)(`button`,{type:`button`,className:`wmst-icon-btn`,"aria-label":`Close notification`,onClick:()=>{g(!1),l?.()},children:(0,f.jsx)(s,{name:`CloseSmall`,size:8})})]})]}),!v&&(n||r?.length>0)&&(0,f.jsxs)(`div`,{className:`wmst-body`,children:[n&&(0,f.jsx)(`div`,{className:`wmst-message`,children:n}),r?.length>0&&(0,f.jsx)(`div`,{className:`wmst-actions`,children:r.map(({label:e,onClick:t,variant:n=`default`})=>(0,f.jsx)(a,{variant:n,size:`sm`,onClick:t,children:e},e))})]})]}):null}var f,p,m,h=e((()=>{f=r(),p=t(n(),1),u(),o(),i(),m={success:`AlertSuccess`,error:`AlertError`,info:`AlertInfo`,warning:`AlertWarning`},d.__docgenInfo={description:``,methods:[],displayName:`WMSToaster`,props:{variant:{defaultValue:{value:`'success'`,computed:!1},required:!1},defaultMinimized:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),c(),g=r(),_={title:`Design System/Components/WMSToaster`,component:d,parameters:{layout:`padded`,docs:{description:{component:`WMS toast notification card for Zoho CRM. Shows a status badge (success, error, info, warning), a title, minimize and close controls, and an optional body with action buttons. Minimized state collapses the card to its header. Figma: Chinnaiya-Style-Sheet node 93780-156008 ("Toast Message").`}}},argTypes:{variant:{control:`select`,options:[`success`,`error`,`info`,`warning`]},title:{control:`text`}},args:{variant:`success`,title:`Imported successfully`}},v={args:{variant:`success`,title:`Imported successfully`,children:(0,g.jsxs)(g.Fragment,{children:[`Notes imported successfully from `,(0,g.jsx)(`a`,{href:`#sample`,children:`Sample File.csv`}),`. Please refresh the browser to access it.`]})}},y={args:{variant:`error`,title:`Import failed`,children:`The file could not be processed. Check the format and try again.`}},b={args:{variant:`info`,title:`Mass action status`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:[(0,g.jsx)(`span`,{children:`0 out of 98 leads deleted.`}),(0,g.jsx)(`span`,{children:`Module - Leads`}),(0,g.jsx)(`span`,{children:`Custom View - Junk Leads`})]})}},x={args:{variant:`warning`,title:`Your CRM data storage is 90% full`,actions:[{label:`Manage your data storage`,variant:`outline-blue`}],children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13},children:[(0,g.jsx)(`span`,{style:{fontWeight:600,color:`#313949`},children:`Storage`}),(0,g.jsx)(`span`,{style:{fontWeight:500,color:`#616E88`},children:`1.1 GB remaining of 12.9 GB`})]}),(0,g.jsx)(l,{value:90,color:`red`})]})}},S={args:{variant:`success`,title:`Report update status`,children:`Successfully updated to new reports version.`,actions:[{label:`Try now`,variant:`primary`},{label:`Close`,variant:`default`}]}},C={args:{variant:`info`,title:`VoC - Computation completed`,defaultMinimized:!0,children:`Results are ready to view.`}},w={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,alignItems:`flex-start`},children:[(0,g.jsx)(d,{variant:`warning`,title:`Your CRM data storage is 90% full`}),(0,g.jsx)(d,{variant:`success`,title:`Imported successfully`,children:`Notes imported successfully.`}),(0,g.jsx)(d,{variant:`success`,title:`Report update status`,children:`Successfully updated to new reports version.`,actions:[{label:`Close`,variant:`default`}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Imported successfully',
    children: <>
        Notes imported successfully from <a href="#sample">Sample File.csv</a>. Please refresh the browser to access it.
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Import failed',
    children: 'The file could not be processed. Check the format and try again.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Mass action status',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
        <span>0 out of 98 leads deleted.</span>
        <span>Module - Leads</span>
        <span>Custom View - Junk Leads</span>
      </div>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Your CRM data storage is 90% full',
    actions: [{
      label: 'Manage your data storage',
      variant: 'outline-blue'
    }],
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: '100%'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13
      }}>
          <span style={{
          fontWeight: 600,
          color: '#313949'
        }}>Storage</span>
          <span style={{
          fontWeight: 500,
          color: '#616E88'
        }}>1.1 GB remaining of 12.9 GB</span>
        </div>
        <ProgressBar value={90} color="red" />
      </div>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Report update status',
    children: 'Successfully updated to new reports version.',
    actions: [{
      label: 'Try now',
      variant: 'primary'
    }, {
      label: 'Close',
      variant: 'default'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'VoC - Computation completed',
    defaultMinimized: true,
    children: 'Results are ready to view.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start'
  }}>
      <WMSToaster variant="warning" title="Your CRM data storage is 90% full" />
      <WMSToaster variant="success" title="Imported successfully" children="Notes imported successfully." />
      <WMSToaster variant="success" title="Report update status" children="Successfully updated to new reports version." actions={[{
      label: 'Close',
      variant: 'default'
    }]} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Success`,`ErrorState`,`Info`,`Warning`,`WithActions`,`Minimized`,`Stack`]}))();export{y as ErrorState,b as Info,C as Minimized,w as Stack,v as Success,x as Warning,S as WithActions,T as __namedExportsOrder,_ as default};