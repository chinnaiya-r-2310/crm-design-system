import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9vj-xOM.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Calendar-B3X367cv.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{o=`_root_vuhig_5`,s=`_trigger_vuhig_12`,c=`_triggerIcon_vuhig_48`,l=`_triggerText_vuhig_55`,u=`_triggerChev_vuhig_67`,d=`_panel_vuhig_76`,f=`_panelWide_vuhig_90`,p=`_presetList_vuhig_96`,m=`_presetItem_vuhig_104`,h=`_presetItemActive_vuhig_127`,g=`_presetLabel_vuhig_133`,_=`_presetPreview_vuhig_137`,v=`_calendarPane_vuhig_149`,y={root:o,trigger:s,triggerIcon:c,triggerText:l,triggerChev:u,panel:d,panelWide:f,presetList:p,presetItem:m,presetItemActive:h,presetLabel:g,presetPreview:_,calendarPane:v}}));function x(){return new Date}function S(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function C(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function w(e){return e.toLocaleDateString(`en-GB`)}function T(e,t){return e?t?`${w(e)} - ${w(t)}`:w(e):null}function E(e){let t=C(x());switch(e){case`none`:return{start:null,end:null};case`yesterday`:{let e=S(t,-1);return{start:e,end:e}}case`last7`:return{start:S(t,-6),end:t};case`last30`:return{start:S(t,-29),end:t};case`last90`:return{start:S(t,-89),end:t};default:return{start:null,end:null}}}function D({startDate:e,endDate:t,onChange:n,placeholder:r=`Select date range`,disabled:i=!1,width:o=320}){let[s,c]=(0,O.useState)(!1),[l,u]=(0,O.useState)(`none`),[d,f]=(0,O.useState)(e??null),[p,m]=(0,O.useState)(t??null),h=n?e:d,g=n?t:p,_=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!s)return;let e=e=>{_.current&&!_.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[s]);let v=(e,t)=>{n?n(e,t):(f(e),m(t))},b=e=>{if(u(e.id),e.id===`specific`||e.id===`range`)return;let{start:t,end:n}=E(e.id);v(t,n)},S=e=>{v(e,null)},C=(e,t)=>{v(e,t)},w=h?T(h,g??null):null,D=l===`specific`||l===`range`,N=l===`range`,P=h?h.getMonth()===11?new Date(h.getFullYear()+1,0,1):new Date(h.getFullYear(),h.getMonth()+1,1):new Date(x().getFullYear(),x().getMonth()+1,1);return(0,k.jsxs)(`div`,{ref:_,className:y.root,style:{width:o},children:[(0,k.jsxs)(`button`,{type:`button`,className:y.trigger,disabled:i,"aria-haspopup":`true`,"aria-expanded":s,"data-open":s||void 0,onClick:()=>!i&&c(e=>!e),children:[(0,k.jsx)(`span`,{className:y.triggerIcon,children:(0,k.jsx)(M,{})}),(0,k.jsx)(`span`,{className:y.triggerText,"data-placeholder":!w||void 0,children:w??r}),(0,k.jsx)(`span`,{className:y.triggerChev,children:(0,k.jsx)(j,{})})]}),s&&(0,k.jsxs)(`div`,{className:`${y.panel} ${D&&N?y.panelWide:``}`,children:[(0,k.jsx)(`div`,{className:y.presetList,children:A.map(e=>{let t=[`yesterday`,`last7`,`last30`,`last90`].includes(e.id)?T(...Object.values(E(e.id))):null;return(0,k.jsxs)(`button`,{type:`button`,className:`${y.presetItem} ${l===e.id?y.presetItemActive:``}`,onClick:()=>b(e),children:[(0,k.jsx)(`span`,{className:y.presetLabel,children:e.label}),t&&(0,k.jsx)(`span`,{className:y.presetPreview,children:t})]},e.id)})}),D&&(0,k.jsxs)(`div`,{className:y.calendarPane,children:[(0,k.jsx)(a,{mode:N?`range`:`single`,value:N?void 0:h??void 0,rangeStart:N?h:void 0,rangeEnd:N?g:void 0,onChange:N?void 0:S,onRangeChange:N?C:void 0,width:256}),N&&(0,k.jsx)(a,{mode:`range`,rangeStart:h,rangeEnd:g,defaultMonth:P,onRangeChange:C,width:256})]})]})]})}var O,k,A,j,M,N=e((()=>{O=t(n(),1),i(),b(),k=r(),A=[{id:`none`,label:`None`},{id:`yesterday`,label:`Yesterday`},{id:`last7`,label:`Last 7 Days`},{id:`last30`,label:`Last 30 Days`},{id:`last90`,label:`Last 90 Days`},{id:`specific`,label:`Specific Date`},{id:`range`,label:`Date Range`}],j=()=>(0,k.jsx)(`svg`,{width:`10`,height:`6`,viewBox:`0 0 10 6`,fill:`none`,"aria-hidden":`true`,children:(0,k.jsx)(`path`,{d:`M1 1L5 5L9 1`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),M=()=>(0,k.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,k.jsx)(`rect`,{x:`1`,y:`2.5`,width:`12`,height:`10.5`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,k.jsx)(`path`,{d:`M1 6H13`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,k.jsx)(`path`,{d:`M4.5 1V4M9.5 1V4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),D.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{startDate:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:`Controlled start date`},endDate:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:`Controlled end date`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(start: Date | null, end: Date | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},name:`start`},{type:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},name:`end`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select date range'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:`Total trigger width in px. @default 320`,defaultValue:{value:`320`,computed:!1}}}}})),P,F,I,L,R,z,B,V;e((()=>{P=t(n(),1),N(),F=r(),I={title:`Design System/Components/Calendar/Date Range Picker`,component:D,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown picker with preset ranges (Yesterday, Last 7 Days, etc.) plus single or dual-calendar selection.`,`Figma: Chinnaiya Style Sheet node 88-19100 — "Date Range Picker" section.`,`Supports controlled and uncontrolled modes.`].join(` `)}}},argTypes:{disabled:{control:`boolean`,table:{category:`State`}},width:{control:{type:`number`,min:200,max:500,step:8},table:{category:`Layout`}},placeholder:{control:`text`,table:{category:`Content`}}}},L={args:{width:320,placeholder:`Select date range`}},R={name:`With Date Range`,render:e=>{let[t,n]=(0,P.useState)(new Date(2019,5,24)),[r,i]=(0,P.useState)(new Date(2019,6,15));return(0,F.jsx)(D,{...e,startDate:t,endDate:r,onChange:(e,t)=>{n(e),i(t)}})},args:{width:320}},z={args:{width:320,disabled:!0,placeholder:`Not available`}},B={name:`Interactive Demo`,render:()=>{let[e,t]=(0,P.useState)(null),[n,r]=(0,P.useState)(null);return(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[(0,F.jsx)(D,{startDate:e,endDate:n,onChange:(e,n)=>{t(e),r(n)},width:340}),(e||n)&&(0,F.jsxs)(`p`,{style:{margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,background:`#F5F6FA`,padding:`6px 12px`,borderRadius:6},children:[e?e.toDateString():`–`,` → `,n?n.toDateString():`–`]})]})}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    placeholder: 'Select date range'
  }
}`,...L.parameters?.docs?.source},description:{story:`Default — no date selected, click to open preset list.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With Date Range',
  render: args => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 24));
    const [end, setEnd] = useState<Date | null>(new Date(2019, 6, 15));
    return <DateRangePicker {...args} startDate={start} endDate={end} onChange={(s, e) => {
      setStart(s);
      setEnd(e);
    }} />;
  },
  args: {
    width: 320
  }
}`,...R.parameters?.docs?.source},description:{story:`Controlled — start and end dates already set.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    disabled: true,
    placeholder: 'Not available'
  }
}`,...z.parameters?.docs?.source},description:{story:`Disabled state — trigger is not interactive.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Interactive Demo',
  render: () => {
    const [start, setStart] = useState<Date | null>(null);
    const [end, setEnd] = useState<Date | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>
        <DateRangePicker startDate={start} endDate={end} onChange={(s, e) => {
        setStart(s);
        setEnd(e);
      }} width={340} />
        {(start || end) && <p style={{
        margin: 0,
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 12,
        color: '#616E88',
        background: '#F5F6FA',
        padding: '6px 12px',
        borderRadius: 6
      }}>
            {start ? start.toDateString() : '–'} → {end ? end.toDateString() : '–'}
          </p>}
      </div>;
  }
}`,...B.parameters?.docs?.source},description:{story:`Full interactive demo — shows selection updating in real time.`,...B.parameters?.docs?.description}}},V=[`Default`,`WithValue`,`Disabled`,`Interactive`]}))();export{L as Default,z as Disabled,B as Interactive,R as WithValue,V as __namedExportsOrder,I as default};