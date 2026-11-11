import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-UG7feN43.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./DateRangePicker-ZdU0VtDB.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Calendar/Date Range Picker`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown picker with preset ranges (Yesterday, Last 7 Days, etc.) plus single or dual-calendar selection.`,`Figma: Chinnaiya Style Sheet node 88-19100 — "Date Range Picker" section.`,`Supports controlled and uncontrolled modes.`].join(` `)}}},argTypes:{disabled:{control:`boolean`,table:{category:`State`}},width:{control:{type:`number`,min:200,max:500,step:8},table:{category:`Layout`}},placeholder:{control:`text`,table:{category:`Content`}}}},l={args:{width:320,placeholder:`Select date range`}},u={name:`With Date Range`,render:e=>{let[t,n]=(0,o.useState)(new Date(2019,5,24)),[r,i]=(0,o.useState)(new Date(2019,6,15));return(0,s.jsx)(a,{...e,startDate:t,endDate:r,onChange:(e,t)=>{n(e),i(t)}})},args:{width:320}},d={args:{width:320,disabled:!0,placeholder:`Not available`}},f={name:`Interactive Demo`,render:()=>{let[e,t]=(0,o.useState)(null),[n,r]=(0,o.useState)(null);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[(0,s.jsx)(a,{startDate:e,endDate:n,onChange:(e,n)=>{t(e),r(n)},width:340}),(e||n)&&(0,s.jsxs)(`p`,{style:{margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,background:`#F5F6FA`,padding:`6px 12px`,borderRadius:6},children:[e?e.toDateString():`–`,` → `,n?n.toDateString():`–`]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    placeholder: 'Select date range'
  }
}`,...l.parameters?.docs?.source},description:{story:`Default — no date selected, click to open preset list.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Controlled — start and end dates already set.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    width: 320,
    disabled: true,
    placeholder: 'Not available'
  }
}`,...d.parameters?.docs?.source},description:{story:`Disabled state — trigger is not interactive.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Full interactive demo — shows selection updating in real time.`,...f.parameters?.docs?.description}}},p=[`Default`,`WithValue`,`Disabled`,`Interactive`]}))();export{l as Default,d as Disabled,f as Interactive,u as WithValue,p as __namedExportsOrder,c as default};