import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-K1ok792Q.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Calendar-Chsc7vax.js";var o=e((()=>{}));function s(){return new Date}function c(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function l(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function u(e){return e.toLocaleDateString(`en-GB`)}function d(e,t){return e?t?`${u(e)} - ${u(t)}`:u(e):null}function f(e){let t=l(s());switch(e){case`none`:return{start:null,end:null};case`yesterday`:{let e=c(t,-1);return{start:e,end:e}}case`last7`:return{start:c(t,-6),end:t};case`last30`:return{start:c(t,-29),end:t};case`last90`:return{start:c(t,-89),end:t};default:return{start:null,end:null}}}function p({startDate:e,endDate:t,onChange:n,placeholder:r=`Select date range`,disabled:i=!1,width:o=320}){let[c,l]=(0,h.useState)(!1),[u,p]=(0,h.useState)(`none`),[y,b]=(0,h.useState)(e??null),[x,S]=(0,h.useState)(t??null),C=n?e:y,w=n?t:x,T=(0,h.useRef)(null);(0,h.useEffect)(()=>{if(!c)return;let e=e=>{T.current&&!T.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[c]);let E=(e,t)=>{n?n(e,t):(b(e),S(t))},D=e=>{if(p(e.id),e.id===`specific`||e.id===`range`)return;let{start:t,end:n}=f(e.id);E(t,n)},O=e=>{E(e,null)},k=(e,t)=>{E(e,t)},A=C?d(C,w??null):null,j=u===`specific`||u===`range`,M=u===`range`,N=C?C.getMonth()===11?new Date(C.getFullYear()+1,0,1):new Date(C.getFullYear(),C.getMonth()+1,1):new Date(s().getFullYear(),s().getMonth()+1,1);return(0,m.jsxs)(`div`,{ref:T,className:`calendar-root`,style:{width:o},children:[(0,m.jsxs)(`button`,{type:`button`,className:`calendar-trigger`,disabled:i,"aria-haspopup":`true`,"aria-expanded":c,"data-open":c||void 0,onClick:()=>!i&&l(e=>!e),children:[(0,m.jsx)(`span`,{className:`calendar-trigger-icon`,children:(0,m.jsx)(v,{})}),(0,m.jsx)(`span`,{className:`calendar-trigger-text`,"data-placeholder":!A||void 0,children:A??r}),(0,m.jsx)(`span`,{className:`calendar-trigger-chev`,children:(0,m.jsx)(_,{})})]}),c&&(0,m.jsxs)(`div`,{className:`calendar-panel ${j&&M?`calendar-panel-wide`:``}`,children:[(0,m.jsx)(`div`,{className:`calendar-preset-list`,children:g.map(e=>{let t=[`yesterday`,`last7`,`last30`,`last90`].includes(e.id)?d(...Object.values(f(e.id))):null;return(0,m.jsxs)(`button`,{type:`button`,className:`calendar-preset-item ${u===e.id?`calendar-preset-item-active`:``}`,onClick:()=>D(e),children:[(0,m.jsx)(`span`,{className:`calendar-preset-label`,children:e.label}),t&&(0,m.jsx)(`span`,{className:`calendar-preset-preview`,children:t})]},e.id)})}),j&&(0,m.jsxs)(`div`,{className:`calendar-calendar-pane`,children:[(0,m.jsx)(a,{mode:M?`range`:`single`,value:M?void 0:C??void 0,rangeStart:M?C:void 0,rangeEnd:M?w:void 0,onChange:M?void 0:O,onRangeChange:M?k:void 0,width:256}),M&&(0,m.jsx)(a,{mode:`range`,rangeStart:C,rangeEnd:w,defaultMonth:N,onRangeChange:k,width:256})]})]})]})}var m,h,g,_,v,y=e((()=>{m=r(),h=t(n(),1),i(),o(),g=[{id:`none`,label:`None`},{id:`yesterday`,label:`Yesterday`},{id:`last7`,label:`Last 7 Days`},{id:`last30`,label:`Last 30 Days`},{id:`last90`,label:`Last 90 Days`},{id:`specific`,label:`Specific Date`},{id:`range`,label:`Date Range`}],_=()=>(0,m.jsx)(`svg`,{width:`10`,height:`6`,viewBox:`0 0 10 6`,fill:`none`,"aria-hidden":`true`,children:(0,m.jsx)(`path`,{d:`M1 1L5 5L9 1`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),v=()=>(0,m.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,m.jsx)(`rect`,{x:`1`,y:`2.5`,width:`12`,height:`10.5`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,m.jsx)(`path`,{d:`M1 6H13`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,m.jsx)(`path`,{d:`M4.5 1V4M9.5 1V4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),p.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{placeholder:{defaultValue:{value:`'Select date range'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},width:{defaultValue:{value:`320`,computed:!1},required:!1}}}})),b,x,S,C,w,T,E,D;e((()=>{b=t(n(),1),y(),x=r(),S={title:`Design System/Components/Calendar/Date Range Picker`,component:p,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown picker with preset ranges (Yesterday, Last 7 Days, etc.) plus single or dual-calendar selection.`,`Figma: Chinnaiya Style Sheet node 88-19100 — "Date Range Picker" section.`,`Supports controlled and uncontrolled modes.`].join(` `)}}},argTypes:{disabled:{control:`boolean`,table:{category:`State`}},width:{control:{type:`number`,min:200,max:500,step:8},table:{category:`Layout`}},placeholder:{control:`text`,table:{category:`Content`}}}},C={args:{width:320,placeholder:`Select date range`}},w={name:`With Date Range`,render:e=>{let[t,n]=(0,b.useState)(new Date(2019,5,24)),[r,i]=(0,b.useState)(new Date(2019,6,15));return(0,x.jsx)(p,{...e,startDate:t,endDate:r,onChange:(e,t)=>{n(e),i(t)}})},args:{width:320}},T={args:{width:320,disabled:!0,placeholder:`Not available`}},E={name:`Interactive Demo`,render:()=>{let[e,t]=(0,b.useState)(null),[n,r]=(0,b.useState)(null);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[(0,x.jsx)(p,{startDate:e,endDate:n,onChange:(e,n)=>{t(e),r(n)},width:340}),(e||n)&&(0,x.jsxs)(`p`,{style:{margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,background:`#F5F6FA`,padding:`6px 12px`,borderRadius:6},children:[e?e.toDateString():`–`,` → `,n?n.toDateString():`–`]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    placeholder: 'Select date range'
  }
}`,...C.parameters?.docs?.source},description:{story:`Default — no date selected, click to open preset list.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Controlled — start and end dates already set.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    disabled: true,
    placeholder: 'Not available'
  }
}`,...T.parameters?.docs?.source},description:{story:`Disabled state — trigger is not interactive.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Full interactive demo — shows selection updating in real time.`,...E.parameters?.docs?.description}}},D=[`Default`,`WithValue`,`Disabled`,`Interactive`]}))();export{C as Default,T as Disabled,E as Interactive,w as WithValue,D as __namedExportsOrder,S as default};