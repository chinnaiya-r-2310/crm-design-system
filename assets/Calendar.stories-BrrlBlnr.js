import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DrHkVmpO.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Calendar-C0G77HtQ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Calendar`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Calendar widget with single-select, range, and multi-select modes.`,`Figma: Chinnaiya Style Sheet node 88-19100.`,`Includes month/year picker overlay, weekend highlight, and Day/Week/Month view tabs.`].join(` `)}}},argTypes:{mode:{control:`radio`,options:[`single`,`range`,`multi`],table:{category:`Behaviour`,defaultValue:{summary:`single`}}},highlightWeekends:{control:`boolean`,table:{category:`Appearance`}},showViewTabs:{control:`boolean`,table:{category:`Appearance`}},width:{control:{type:`number`,min:240,max:400,step:8},table:{category:`Layout`}}}},l={args:{mode:`single`,defaultMonth:new Date(2019,5,1)}},u={name:`Selected Date`,render:()=>{let[e,t]=(0,o.useState)(new Date(2019,5,24));return(0,s.jsx)(a,{mode:`single`,value:e,onChange:t,defaultMonth:new Date(2019,5,1)})}},d={name:`Date Range`,render:()=>{let[e,t]=(0,o.useState)(new Date(2019,5,10)),[n,r]=(0,o.useState)(new Date(2019,5,20));return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`center`},children:[(0,s.jsx)(a,{mode:`range`,rangeStart:e,rangeEnd:n,onRangeChange:(e,n)=>{t(e),r(n)},defaultMonth:new Date(2019,5,1)}),(0,s.jsx)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,margin:0},children:e?`${e.toDateString()} → ${n?n.toDateString():`...`}`:`Click a date to start`})]})}},f={name:`Multi Date Select`,render:()=>{let[e,t]=(0,o.useState)([new Date(2019,5,3),new Date(2019,5,7),new Date(2019,5,14),new Date(2019,5,21)]);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`center`},children:[(0,s.jsx)(a,{mode:`multi`,selectedDates:e,onMultiChange:t,defaultMonth:new Date(2019,5,1)}),(0,s.jsxs)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,margin:0},children:[e.length,` date`,e.length===1?``:`s`,` selected`]})]})}},p={name:`Weekend Identifier`,args:{mode:`single`,highlightWeekends:!0,defaultMonth:new Date(2019,5,1)}},m={name:`Day, Week & Month Tabs`,args:{mode:`single`,showViewTabs:!0,defaultMonth:new Date(2019,5,1)}},h={name:`Month / Year Picker`,render:()=>{let[e,t]=(0,o.useState)(null);return(0,s.jsx)(a,{mode:`single`,value:e??void 0,onChange:t,defaultMonth:new Date(2019,5,1)})},parameters:{docs:{description:{story:`Click the month/year label in the header to toggle the year + month picker overlay.`}}}},g={name:`Dual Calendar Range`,render:()=>{let[e,t]=(0,o.useState)(new Date(2019,5,24)),[n,r]=(0,o.useState)(new Date(2019,6,15)),i=(e,n)=>{t(e),r(n)};return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`center`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:1,background:`#D6D6E2`,borderRadius:8,overflow:`hidden`},children:[(0,s.jsx)(a,{mode:`range`,rangeStart:e,rangeEnd:n,onRangeChange:i,defaultMonth:new Date(2019,5,1),width:270}),(0,s.jsx)(a,{mode:`range`,rangeStart:e,rangeEnd:n,onRangeChange:i,defaultMonth:new Date(2019,6,1),width:270})]}),(0,s.jsxs)(`p`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`,margin:0},children:[e?.toDateString(),` → `,n?.toDateString()??`…`]})]})}},_={name:`Date of Month (1–31)`,render:()=>{let[e,t]=(0,o.useState)([2,5,16,23]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,s.jsxs)(`div`,{style:{background:`#fff`,border:`1px solid #D6D6E2`,borderRadius:8,boxShadow:`0 4px 16px rgba(0,0,0,0.08)`,padding:`14px`,width:284,boxSizing:`border-box`,fontFamily:`var(--ds-font-family-base)`},children:[(0,s.jsx)(`p`,{style:{margin:`0 0 10px`,fontSize:12,fontWeight:600,color:`#616E88`},children:`Select Dates`}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2},children:Array.from({length:31},(e,t)=>t+1).map(t=>{let r=e.includes(t);return(0,s.jsx)(`button`,{type:`button`,onClick:()=>n(t),style:{height:32,border:`none`,borderRadius:`50%`,background:r?`#5464F2`:`transparent`,color:r?`#fff`:`#313949`,fontFamily:`var(--ds-font-family-base)`,fontSize:12,fontWeight:r?500:400,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:t},t)})}),(0,s.jsx)(`p`,{style:{margin:`10px 0 0`,fontSize:11,color:`#B0B7C4`},children:e.sort((e,t)=>e-t).join(`, `)||`—`})]})}},v={name:`All Variants`,render:()=>{let[e,t]=(0,o.useState)(new Date(2019,5,24)),[n,r]=(0,o.useState)(new Date(2019,5,10)),[i,c]=(0,o.useState)(new Date(2019,5,20)),[l,u]=(0,o.useState)([new Date(2019,5,3),new Date(2019,5,7),new Date(2019,5,14)]),d=new Date(2019,5,1);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24,alignItems:`flex-start`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Single Select`}),(0,s.jsx)(a,{mode:`single`,value:e,onChange:t,defaultMonth:d})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Date Range`}),(0,s.jsx)(a,{mode:`range`,rangeStart:n,rangeEnd:i,onRangeChange:(e,t)=>{r(e),c(t)},defaultMonth:d})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Multi Select`}),(0,s.jsx)(a,{mode:`multi`,selectedDates:l,onMultiChange:u,defaultMonth:d})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`Weekend Highlight`}),(0,s.jsx)(a,{mode:`single`,highlightWeekends:!0,defaultMonth:d})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{margin:`0 0 6px`,fontSize:11,fontWeight:600,color:`#616E88`,fontFamily:`var(--ds-font-family-base)`,textTransform:`uppercase`,letterSpacing:`0.5px`},children:`With View Tabs`}),(0,s.jsx)(a,{mode:`single`,showViewTabs:!0,defaultMonth:d})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    defaultMonth: new Date(2019, 5, 1)
  }
}`,...l.parameters?.docs?.source},description:{story:`Default calendar — single date selection. Click any date to select it.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Selected Date',
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date(2019, 5, 24));
    return <Calendar mode="single" value={value} onChange={setValue} defaultMonth={new Date(2019, 5, 1)} />;
  }
}`,...u.parameters?.docs?.source},description:{story:`Single date selected — June 24, 2019.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Date Range',
  render: () => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 10));
    const [end, setEnd] = useState<Date | null>(new Date(2019, 5, 20));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }}>
        <Calendar mode="range" rangeStart={start} rangeEnd={end} onRangeChange={(s, e) => {
        setStart(s);
        setEnd(e);
      }} defaultMonth={new Date(2019, 5, 1)} />
        <p style={{
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 12,
        color: '#616E88',
        margin: 0
      }}>
          {start ? \`\${start.toDateString()} → \${end ? end.toDateString() : '...'}\` : 'Click a date to start'}
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Hover to preview; click to start a range, click again to end it.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Multi Date Select',
  render: () => {
    const [dates, setDates] = useState<Date[]>([new Date(2019, 5, 3), new Date(2019, 5, 7), new Date(2019, 5, 14), new Date(2019, 5, 21)]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }}>
        <Calendar mode="multi" selectedDates={dates} onMultiChange={setDates} defaultMonth={new Date(2019, 5, 1)} />
        <p style={{
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 12,
        color: '#616E88',
        margin: 0
      }}>
          {dates.length} date{dates.length !== 1 ? 's' : ''} selected
        </p>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Multi date selection — toggle individual dates.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Weekend Identifier',
  args: {
    mode: 'single',
    highlightWeekends: true,
    defaultMonth: new Date(2019, 5, 1)
  }
}`,...p.parameters?.docs?.source},description:{story:`Weekends (Sa and Su) are highlighted in orange.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Day, Week & Month Tabs',
  args: {
    mode: 'single',
    showViewTabs: true,
    defaultMonth: new Date(2019, 5, 1)
  }
}`,...m.parameters?.docs?.source},description:{story:`Day / Week / Month view tabs shown at the bottom.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Month / Year Picker',
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Calendar mode="single" value={value ?? undefined} onChange={setValue} defaultMonth={new Date(2019, 5, 1)} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the month/year label in the header to toggle the year + month picker overlay.'
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Click the "June 2019" header to open the month/year picker, then select a month.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Dual Calendar Range',
  render: () => {
    const [start, setStart] = useState<Date | null>(new Date(2019, 5, 24));
    const [end, setEnd] = useState<Date | null>(new Date(2019, 6, 15));
    const handleRange = (s: Date | null, e: Date | null) => {
      setStart(s);
      setEnd(e);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        gap: 1,
        background: '#D6D6E2',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
          <Calendar mode="range" rangeStart={start} rangeEnd={end} onRangeChange={handleRange} defaultMonth={new Date(2019, 5, 1)} width={270} />
          <Calendar mode="range" rangeStart={start} rangeEnd={end} onRangeChange={handleRange} defaultMonth={new Date(2019, 6, 1)} width={270} />
        </div>
        <p style={{
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 12,
        color: '#616E88',
        margin: 0
      }}>
          {start?.toDateString()} → {end?.toDateString() ?? '…'}
        </p>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Two calendars side-by-side sharing the same range state — used for the Date Range preset.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Date of Month (1–31)',
  render: () => {
    const [selected, setSelected] = useState<number[]>([2, 5, 16, 23]);
    const toggle = (n: number) => setSelected(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
    return <div style={{
      background: '#fff',
      border: '1px solid #D6D6E2',
      borderRadius: 8,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      padding: '14px',
      width: 284,
      boxSizing: 'border-box',
      fontFamily: 'var(--ds-font-family-base)'
    }}>
        <p style={{
        margin: '0 0 10px',
        fontSize: 12,
        fontWeight: 600,
        color: '#616E88'
      }}>
          Select Dates
        </p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 2
      }}>
          {Array.from({
          length: 31
        }, (_, i) => i + 1).map(n => {
          const active = selected.includes(n);
          return <button key={n} type="button" onClick={() => toggle(n)} style={{
            height: 32,
            border: 'none',
            borderRadius: '50%',
            background: active ? '#5464F2' : 'transparent',
            color: active ? '#fff' : '#313949',
            fontFamily: 'var(--ds-font-family-base)',
            fontSize: 12,
            fontWeight: active ? 500 : 400,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                {n}
              </button>;
        })}
        </div>
        <p style={{
        margin: '10px 0 0',
        fontSize: 11,
        color: '#B0B7C4'
      }}>
          {selected.sort((a, b) => a - b).join(', ') || '—'}
        </p>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Date of Month picker — a 1–31 number grid for recurring monthly schedules
(no week-day headers; individual dates toggled).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const [single, setSingle] = useState<Date | null>(new Date(2019, 5, 24));
    const [rStart, setRStart] = useState<Date | null>(new Date(2019, 5, 10));
    const [rEnd, setREnd] = useState<Date | null>(new Date(2019, 5, 20));
    const [multi, setMulti] = useState<Date[]>([new Date(2019, 5, 3), new Date(2019, 5, 7), new Date(2019, 5, 14)]);
    const base = new Date(2019, 5, 1);
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'flex-start'
    }}>
        <div>
          <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          fontWeight: 600,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>Single Select</p>
          <Calendar mode="single" value={single} onChange={setSingle} defaultMonth={base} />
        </div>
        <div>
          <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          fontWeight: 600,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>Date Range</p>
          <Calendar mode="range" rangeStart={rStart} rangeEnd={rEnd} onRangeChange={(s, e) => {
          setRStart(s);
          setREnd(e);
        }} defaultMonth={base} />
        </div>
        <div>
          <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          fontWeight: 600,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>Multi Select</p>
          <Calendar mode="multi" selectedDates={multi} onMultiChange={setMulti} defaultMonth={base} />
        </div>
        <div>
          <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          fontWeight: 600,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>Weekend Highlight</p>
          <Calendar mode="single" highlightWeekends defaultMonth={base} />
        </div>
        <div>
          <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          fontWeight: 600,
          color: '#616E88',
          fontFamily: 'var(--ds-font-family-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>With View Tabs</p>
          <Calendar mode="single" showViewTabs defaultMonth={base} />
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`All standalone variants side by side.`,...v.parameters?.docs?.description}}},y=[`Default`,`SelectedDate`,`DateRange`,`MultiDateSelect`,`WeekendIdentifier`,`WithViewTabs`,`MonthYearPicker`,`DualCalendarRange`,`DateOfMonthPicker`,`AllVariants`]}))();export{v as AllVariants,_ as DateOfMonthPicker,d as DateRange,l as Default,g as DualCalendarRange,h as MonthYearPicker,f as MultiDateSelect,u as SelectedDate,p as WeekendIdentifier,m as WithViewTabs,y as __namedExportsOrder,c as default};