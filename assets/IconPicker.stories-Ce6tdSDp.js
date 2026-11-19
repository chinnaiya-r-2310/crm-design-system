import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DyhCRvOj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{At as i,Yt as a,l as o}from"./Icons-Bti4wkGZ.js";import{n as s,t as c}from"./Tooltip-DRUjjcBw.js";import{n as l,r as u}from"./CrmCatalog-Br3bfAPB.js";import{a as d,n as f,o as p,s as m,t as h}from"./Icon-UfOSRdLt.js";var g=e((()=>{}));function _(e){return k[e]??e.replace(/^Crm/,``).replace(/CustomBtn$/,``).replace(/([a-z0-9])([A-Z])/g,`$1 $2`).trim()}function v(e){return typeof e==`string`?{name:e,label:_(e)}:{label:_(e.name),...e}}function y(e,t){let n=(p[e.name]??l[e.name])?.keywords??``,r=`${e.label} ${n}`.toLowerCase();return t.split(/\s+/).every(e=>r.includes(e))}function b({item:e,selected:t,focusable:n,onSelect:r,onKeyDown:i,cellRef:a,tooltipDelay:s}){return(0,C.jsx)(c,{content:e.label,placement:`top`,followCursor:!0,delay:s,wrapperClassName:`icon-picker-cell-wrap`,children:(0,C.jsxs)(`button`,{ref:a,type:`button`,role:`option`,"aria-selected":t,"aria-label":e.label,tabIndex:n?0:-1,className:t?`icon-picker-cell icon-picker-cell--selected`:`icon-picker-cell`,onClick:()=>r(e.name),onKeyDown:i,children:[e.name===`text`?(0,C.jsx)(`span`,{className:`icon-picker-initials`,"aria-hidden":`true`,children:e.initials}):(0,C.jsx)(h,{name:e.name,size:16}),t&&(0,C.jsx)(`span`,{className:`icon-picker-badge`,"aria-hidden":`true`,children:(0,C.jsx)(o,{width:7,height:5})})]})})}function x({label:e,labelId:t,items:n,value:r,onSelect:i,scroll:a,rows:o,tooltipDelay:s}){let c=(0,w.useRef)([]),l=n.findIndex(e=>e.name===r),[u,d]=(0,w.useState)(null),f=Math.min(u??(l>=0?l:0),n.length-1);function p(e){let t=Math.max(0,Math.min(n.length-1,e));d(t),c.current[t]?.focus()}function m(e,t){let r={ArrowRight:t+1,ArrowLeft:t-1,ArrowDown:t+E,ArrowUp:t-E,Home:0,End:n.length-1};e.key in r&&(e.preventDefault(),p(r[e.key]))}return(0,C.jsx)(`div`,{role:`listbox`,"aria-labelledby":t,"aria-label":t?void 0:e,className:a?`icon-picker-grid icon-picker-grid--scroll`:`icon-picker-grid`,style:a?{"--icon-picker-rows":o}:void 0,children:n.map((e,t)=>(0,C.jsx)(b,{item:e,selected:e.name===r,focusable:t===f,onSelect:e=>{d(t),i(e)},onKeyDown:e=>m(e,t),cellRef:e=>{c.current[t]=e},tooltipDelay:s},e.name))})}function S({icons:e=D,recommended:t=[],initials:n,value:r,defaultValue:a=null,onChange:o,searchPlaceholder:s=`Search`,recommendedLabel:c=`Recommended`,noResultsText:l=`No Result Found`,rows:u=5,tooltipDelay:d=500,autoFocus:f=!1}){let[p,m]=(0,w.useState)(a),[h,g]=(0,w.useState)(``),_=(0,w.useRef)(null),b=(0,w.useId)(),S=r===void 0?p:r,E=h.trim().toLowerCase(),O=(0,w.useMemo)(()=>{let t=e.map(v);return n?[{name:T,label:`Text (${n})`,initials:n},...t]:t},[e,n]),k=(0,w.useMemo)(()=>t.map(v),[t]),j=!E&&k.length>0,M=(0,w.useMemo)(()=>new Set(t.map(e=>typeof e==`string`?e:e.name)),[t]),N=E?O.filter(e=>y(e,E)):j?O.filter(e=>!M.has(e.name)):O;function P(e){r===void 0&&m(e),o?.(e)}function F(){g(``),_.current?.focus()}return(0,C.jsxs)(`div`,{className:`icon-picker`,children:[(0,C.jsxs)(`div`,{className:`icon-picker-search`,children:[(0,C.jsx)(`span`,{className:`icon-picker-search-icon`,children:(0,C.jsx)(i,{"aria-hidden":`true`})}),(0,C.jsx)(`input`,{ref:_,type:`text`,className:`icon-picker-search-input`,placeholder:s,"aria-label":`Search icons`,value:h,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Escape`&&h&&(e.stopPropagation(),F())},autoFocus:f}),h&&(0,C.jsx)(`button`,{type:`button`,className:`icon-picker-clear`,onClick:F,"aria-label":`Clear search`,children:(0,C.jsx)(A,{})})]}),j&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`div`,{className:`icon-picker-section`,children:[(0,C.jsx)(`span`,{id:b,className:`icon-picker-label`,children:c}),(0,C.jsx)(x,{labelId:b,items:k,value:S,onSelect:P,tooltipDelay:d})]}),(0,C.jsx)(`hr`,{className:`icon-picker-divider`})]}),N.length>0?(0,C.jsx)(x,{label:`All icons`,items:N,value:S,onSelect:P,scroll:!0,rows:u,tooltipDelay:d}):(0,C.jsx)(`p`,{className:`icon-picker-empty`,role:`status`,children:l})]})}var C,w,T,E,D,O,k,A,j=e((()=>{C=r(),w=t(n(),1),f(),s(),a(),u(),m(),g(),T=`text`,E=7,D=d.map(e=>e.name),O=Object.keys(l).filter(e=>e.endsWith(`CustomBtn`)),k=Object.fromEntries(d.map(e=>[e.name,e.label])),A=()=>(0,C.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,children:(0,C.jsx)(`path`,{d:`M1 1L7 7M7 1L1 7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})}),S.__docgenInfo={description:`Icon picker panel — search, an optional "Recommended" row and a 7-column icon grid.

Value is an icon name from the CRM catalog, or ICON_PICKER_TEXT when the
text (initials) option is chosen. Controlled via value + onChange, or
uncontrolled via defaultValue.`,methods:[],displayName:`IconPicker`,props:{icons:{defaultValue:{value:`industryIconCatalog.map(icon => icon.name)`,computed:!0},required:!1},recommended:{defaultValue:{value:`[]`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:`'Search'`,computed:!1},required:!1},recommendedLabel:{defaultValue:{value:`'Recommended'`,computed:!1},required:!1},noResultsText:{defaultValue:{value:`'No Result Found'`,computed:!1},required:!1},rows:{defaultValue:{value:`5`,computed:!1},required:!1},tooltipDelay:{defaultValue:{value:`500`,computed:!1},required:!1},autoFocus:{defaultValue:{value:`false`,computed:!1},required:!1}}}})),M,N,P,F,I,L,R,z,B,V;e((()=>{M=r(),N=t(n(),1),j(),f(),P={title:`Design System/Components/Icon Picker`,component:S,parameters:{layout:`centered`,docs:{description:{component:'Icon picker panel. Defaults to the 300 industry icons (12 industries × 25); search matches icon names and industry (try "finance" or "legal"). The Recommended row hides while searching. Arrow keys move through the grid, Enter/Space selects. Pass `initials` to offer a text option, which emits `ICON_PICKER_TEXT` as its value.'}}},args:{recommended:[`IndustryAppointment`,`IndustryInvoice`,`IndustryContract`,`IndustryShipping`],initials:`ST`,defaultValue:`IndustryInvoice`,rows:5,tooltipDelay:500}},F={name:`Default`},I={name:`Without recommended`,args:{recommended:[]}},L={name:`Icons only (no text option)`,args:{initials:void 0,defaultValue:null}},R={name:`Custom button icons`,args:{icons:O,recommended:[`CrmBoardCustomBtn`,`CrmVideoDisableCustomBtn`,`CrmCalendarDateCustomBtn`,`CrmCameraCustomBtn`],defaultValue:`CrmFormCustomBtn`}},z={name:`Custom icon set`,args:{icons:[`CrmLeads`,`CrmContacts`,`CrmAccounts`,`CrmPotentials`,`CrmInvoices`,`CrmQuotes`,`CrmCampaigns`,`CrmCases`,`CrmSolutions`,`CrmVendors`],recommended:[],initials:void 0,defaultValue:`CrmInvoices`}},B={name:`Controlled — selection readout`,render:e=>{let[t,n]=(0,N.useState)(`IndustryInvoice`);return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[(0,M.jsx)(S,{...e,value:t,onChange:n}),(0,M.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-md)`,color:`var(--ds-text-label)`},children:[`Selected:`,t===`text`?(0,M.jsx)(`strong`,{children:`ST`}):(0,M.jsx)(h,{name:t,size:16}),(0,M.jsx)(`code`,{children:t})]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Default'
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Without recommended',
  args: {
    recommended: []
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Icons only (no text option)',
  args: {
    initials: undefined,
    defaultValue: null
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Custom button icons',
  args: {
    icons: CUSTOM_BUTTON_ICONS,
    recommended: ['CrmBoardCustomBtn', 'CrmVideoDisableCustomBtn', 'CrmCalendarDateCustomBtn', 'CrmCameraCustomBtn'],
    defaultValue: 'CrmFormCustomBtn'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Custom icon set',
  args: {
    icons: ['CrmLeads', 'CrmContacts', 'CrmAccounts', 'CrmPotentials', 'CrmInvoices', 'CrmQuotes', 'CrmCampaigns', 'CrmCases', 'CrmSolutions', 'CrmVendors'],
    recommended: [],
    initials: undefined,
    defaultValue: 'CrmInvoices'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Controlled — selection readout',
  render: args => {
    const [value, setValue] = useState('IndustryInvoice');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>
        <IconPicker {...args} value={value} onChange={setValue} />
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 'var(--ds-font-size-md)',
        color: 'var(--ds-text-label)'
      }}>
          Selected:
          {value === ICON_PICKER_TEXT ? <strong>ST</strong> : <Icon name={value} size={16} />}
          <code>{value}</code>
        </span>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V=[`Default`,`WithoutRecommended`,`IconsOnly`,`CustomButtonIcons`,`CustomIconSet`,`Controlled`]}))();export{B as Controlled,R as CustomButtonIcons,z as CustomIconSet,F as Default,L as IconsOnly,I as WithoutRecommended,V as __namedExportsOrder,P as default};