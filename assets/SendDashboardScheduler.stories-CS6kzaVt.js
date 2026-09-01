import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CZl1xe7t.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{P as i,pt as a}from"./Icons-HJwscVC1.js";import{r as o,t as s}from"./Button-B3CtQWgA.js";import{n as c,t as l}from"./Checkbox-DAACrAgW.js";import{n as u,t as d}from"./Tooltip-D_KO4yCW.js";import{n as f,t as p}from"./Dropdown-B7X0_lib.js";import{n as m,t as h}from"./Input-DdYP5uXr.js";import{n as g,t as _}from"./DateTimeInput-DR4H3zVN.js";import{n as v,t as ee}from"./GroupButton-CKQFBGT8.js";import{n as y,t as te}from"./MessageInfo-BQUrdfOl.js";import{n as b,t as x}from"./Modal-DKo8adAW.js";import{n as S,t as C}from"./Radio-Iz9Dpz6z.js";import{n as w,t as ne}from"./Tags-Ch_gsfhu.js";import{n as T,t as re}from"./FormSection-DB8ioMjr.js";function ie(){let e=new Date;return`${String(e.getDate()).padStart(2,`0`)}/${String(e.getMonth()+1).padStart(2,`0`)}/${e.getFullYear()}`}function E(e,t,n){return e===`after_n`?`, ends after ${t} ${t===1?`time`:`times`}`:e===`on_date`&&n?`, ends on ${n}`:``}function ae(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){if(!e||!t)return``;let g=E(i,a,o);if(n===`daily`)return`Email will be sent every ${r} ${r===1?`day`:`days`} from ${e}, at ${t} IST${g}`;if(n===`weekly`)return`Email will be sent every ${r} ${r===1?`week`:`weeks`}${s.length>0?` on ${s.join(`, `)}`:``} from ${e}, at ${t} IST${g}`;if(n===`monthly`){let n=r===1?`month`:`months`;return c===`days_of_month`?`Email will be sent every ${r} ${n} on the ${l.length>0?l.slice().sort((e,t)=>e-t).join(`, `):`no days selected`} from ${e}, at ${t} IST${g}`:`Email will be sent every ${r} ${n} on the ${u.charAt(0).toUpperCase()+u.slice(1)} ${d.charAt(0).toUpperCase()+d.slice(1)} from ${e}, at ${t} IST${g}`}return n===`quarterly`?`Email will be sent every ${r} ${r===1?`quarter`:`quarters`}, in the ${f.charAt(0).toUpperCase()+f.slice(1)} month on the ${p===`15th`?`15th`:p.charAt(0).toUpperCase()+p.slice(1)} day, from ${e}, at ${t} IST${g}`:n===`yearly`?`Email will be sent every ${r} ${r===1?`year`:`years`} in ${m.length>0?m.join(`, `):`no months selected`}, on the ${h===`15th`?`15th`:h.charAt(0).toUpperCase()+h.slice(1)} day, from ${e}, at ${t} IST${g}`:`Scheduler will run on ${e}, at ${t} IST`}var D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{D=t(n(),1),b(),f(),c(),o(),u(),T(),g(),m(),y(),w(),S(),v(),a(),O=r(),k={title:`Design System/Patterns/Send Dashboard Scheduler`,parameters:{layout:`centered`,docs:{description:{component:`Modal pattern for scheduling a dashboard email report — configure send options, frequency, start date/time, and delivery preferences.`}}}},A={daily:`Days`,weekly:`Weeks`,monthly:`Months`,quarterly:`Quarter`,yearly:`Years`},j=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],M=[{value:`first`,label:`First`},{value:`second`,label:`Second`},{value:`third`,label:`Third`},{value:`fourth`,label:`Fourth`},{value:`last`,label:`Last`}],N={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,lineHeight:`var(--ds-line-height-base)`,textAlign:`right`,paddingTop:7},P={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-base)`,whiteSpace:`nowrap`},F=540,I=`130px 390px`,L=150,R={name:`Send Dashboard Scheduler`,render:()=>{let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(`send_later`),[a,o]=(0,D.useState)(`once`),[c,u]=(0,D.useState)(ie),[f,m]=(0,D.useState)(`12:20 PM`),[g,v]=(0,D.useState)(!0),[y,b]=(0,D.useState)(!1),[S,w]=(0,D.useState)(!1),[T,E]=(0,D.useState)(2),[k,R]=(0,D.useState)(`never`),[z,oe]=(0,D.useState)(1),[B,se]=(0,D.useState)(``),[ce,V]=(0,D.useState)(!1),[H,le]=(0,D.useState)(`(GMT 5:30) India Standard Time (Asia/Kolkata)`),[U,ue]=(0,D.useState)(H),[W,de]=(0,D.useState)([]),[G,K]=(0,D.useState)(`days_of_month`),[q,fe]=(0,D.useState)([]),[J,pe]=(0,D.useState)(`first`),[Y,me]=(0,D.useState)(`monday`),[X,he]=(0,D.useState)(`first`),[Z,ge]=(0,D.useState)(`first`),[_e,ve]=(0,D.useState)([`January`]),[ye,be]=(0,D.useState)(`first`),Q=n===`send_later`,$=Q?ae(c,f,a,T,k,z,B,W,G,q,J,Y,X,Z,_e,ye):``;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Send Email`}),(0,O.jsxs)(x,{isOpen:e,title:`Send Email`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>{if(Q&&!c.trim()){w(!0);return}t(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:600,disableAutoFocus:!0,children:[(0,O.jsx)(re,{title:`Scheduling Details`}),(0,O.jsx)(p,{label:`Send Options`,layout:`horizontal`,width:F,columns:I,value:n,onChange:e=>r(e),options:[{value:`send_immediately`,label:`Send Immediately`},{value:`send_later`,label:`Send Later`}]}),Q&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,alignItems:`start`,width:F},children:[(0,O.jsx)(`span`,{style:N,children:`Frequency`}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,O.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,O.jsx)(p,{layout:`vertical`,width:`100%`,value:a,onChange:e=>{o(e),R(`never`)},options:[{value:`once`,label:`Once`},{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`},{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`yearly`,label:`Yearly`}]})}),a!==`once`&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{style:P,children:`Every`}),(0,O.jsx)(h,{layout:`vertical`,type:`number`,width:70,value:String(T),min:1,onChange:e=>E(Math.max(1,Number(e.target.value)))}),(0,O.jsx)(`span`,{style:P,children:A[a]})]})]})]}),Q&&a===`weekly`&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F},children:[(0,O.jsx)(`span`,{}),(0,O.jsx)(ee,{options:[{value:`Mon`,label:`Mon`},{value:`Tue`,label:`Tue`},{value:`Wed`,label:`Wed`},{value:`Thu`,label:`Thu`},{value:`Fri`,label:`Fri`},{value:`Sat`,label:`Sat`},{value:`Sun`,label:`Sun`}],value:W,onChange:e=>de(e),multiSelect:!0,showBadge:!0,itemWidth:50})]}),Q&&a===`monthly`&&(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:20},children:[(0,O.jsx)(C,{label:`Days of the month`,name:`monthly-mode`,value:`days_of_month`,checked:G===`days_of_month`,onChange:()=>K(`days_of_month`)}),(0,O.jsx)(C,{label:`On Specific Days`,name:`monthly-mode`,value:`specific_days`,checked:G===`specific_days`,onChange:()=>K(`specific_days`)})]})]}),G===`days_of_month`&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`inline-flex`,flexDirection:`column`,gap:10,border:`1px solid var(--ds-components-input-default-outline)`,borderRadius:6,padding:`15px 10px`,width:`fit-content`},children:[(0,O.jsx)(`style`,{children:`
                      .sds-cal-day { background: transparent; color: var(--ds-text-base); border: 1px solid transparent; transition: background 100ms, color 100ms, border-color 100ms; }
                      .sds-cal-day:hover { background: var(--ds-components-button-outline-blue-default-bg); border-color: var(--ds-components-button-outline-blue-default-border); color: var(--ds-text-link); }
                      .sds-cal-day[data-sel] { background: var(--ds-components-input-focus-outline); color: #fff; border-color: var(--ds-components-input-focus-outline); }
                      .sds-cal-day[data-sel]:hover { background: var(--ds-components-input-focus-outline); color: #fff; border-color: var(--ds-components-input-focus-outline); }
                    `}),(0,O.jsx)(`span`,{style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-sm)`,fontWeight:600,color:`var(--ds-text-base)`},children:`Select Dates`}),(0,O.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 34px)`,gap:4},children:Array.from({length:31},(e,t)=>t+1).map(e=>(0,O.jsx)(`button`,{type:`button`,className:`sds-cal-day`,"data-sel":q.includes(e)||void 0,onClick:()=>fe(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),style:{width:34,height:34,borderRadius:`50%`,cursor:`pointer`,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-sm)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e},e))})]})]}),G===`specific_days`&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F,alignItems:`start`},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(`span`,{style:P,children:`Every`}),(0,O.jsx)(p,{layout:`vertical`,width:120,value:J,onChange:e=>pe(e),options:[{value:`first`,label:`First`},{value:`15th`,label:`15th`},{value:`last`,label:`Last`}]}),(0,O.jsx)(p,{layout:`vertical`,width:152,value:Y,onChange:e=>me(e),options:[{value:`monday`,label:`Monday`},{value:`tuesday`,label:`Tuesday`},{value:`wednesday`,label:`Wednesday`},{value:`thursday`,label:`Thursday`},{value:`friday`,label:`Friday`},{value:`saturday`,label:`Saturday`},{value:`sunday`,label:`Sunday`}]})]})]})]}),Q&&a===`quarterly`&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,O.jsx)(`span`,{style:P,children:`In the`}),(0,O.jsx)(p,{layout:`vertical`,width:100,value:X,onChange:e=>he(e),options:[{value:`first`,label:`First`},{value:`second`,label:`Second`},{value:`third`,label:`Third`},{value:`last`,label:`Last`}]}),(0,O.jsx)(`span`,{style:P,children:`Month of Quarter on`}),(0,O.jsx)(p,{layout:`vertical`,width:90,value:Z,onChange:e=>ge(e),options:[{value:`first`,label:`First`},{value:`15th`,label:`15th`},{value:`last`,label:`Last`}]}),(0,O.jsx)(`span`,{style:P,children:`day`})]})]}),Q&&a===`yearly`&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F,alignItems:`start`},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,O.jsx)(`span`,{style:{...P,paddingTop:7},children:`In`}),(0,O.jsx)(`div`,{style:{flex:1},children:(0,O.jsx)(ne,{value:_e.map(e=>({value:e,label:e})),options:j.map(e=>({value:e,label:e})),onChange:e=>ve(e.map(e=>e.value)),width:`100%`,placeholder:`Add month`})})]})]}),(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,width:F},children:[(0,O.jsx)(`span`,{}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(`span`,{style:P,children:`On`}),(0,O.jsx)(p,{layout:`vertical`,width:120,value:ye,onChange:e=>be(e),options:M}),(0,O.jsx)(`span`,{style:P,children:`day`})]})]})]}),Q&&(0,O.jsx)(_,{label:`Start On`,layout:`horizontal`,width:F,columns:I,dateValue:c,timeValue:f,error:S,helperText:S?`Please enter a start date.`:void 0,onDateChange:e=>{u(e),w(!1)},onTimeChange:e=>m(e)}),Q&&(0,O.jsxs)(`p`,{style:{margin:0,marginTop:-15,paddingLeft:L,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-sm)`,color:`var(--ds-text-muted)`,lineHeight:`var(--ds-line-height-base)`},children:[(0,O.jsx)(`span`,{style:{color:`var(--ds-text-label)`},children:`Time Zone: `}),H,(0,O.jsx)(`button`,{type:`button`,className:`input-link-btn`,style:{marginLeft:4},onClick:()=>{ue(H),V(!0)},children:`Change`})]}),Q&&a!==`once`&&(0,O.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:I,columnGap:20,alignItems:`start`,width:F},children:[(0,O.jsx)(`span`,{style:N,children:`Ends`}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,O.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,O.jsx)(p,{layout:`vertical`,width:`100%`,value:k,onChange:e=>R(e),options:[{value:`never`,label:`Never`},{value:`after_n`,label:`After N times`,triggerLabel:`After`},{value:`on_date`,label:`On Specific Date`}]})}),k===`after_n`&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h,{layout:`vertical`,type:`number`,width:70,value:String(z),min:1,onChange:e=>oe(Math.max(1,Number(e.target.value)))}),(0,O.jsx)(`span`,{style:P,children:`times`})]}),k===`on_date`&&(0,O.jsx)(_,{layout:`vertical`,width:160,dateOnly:!0,dateValue:B,onDateChange:e=>se(e)})]})]}),Q&&$&&(0,O.jsxs)(`div`,{className:`sds-summary-note`,style:{paddingLeft:L},children:[(0,O.jsx)(`style`,{children:`.sds-summary-note .msg-info-label { display: none; }`}),(0,O.jsx)(te,{variant:`info`,message:$})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`15px`},children:[(0,O.jsx)(l,{id:`skip-no-data`,label:`Do not send Email when there is no data in the chart.`,checked:g,onChange:e=>v(e.target.checked)}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,O.jsx)(l,{id:`working-days-only`,label:`Send Email only on working days`,checked:y,onChange:e=>b(e.target.checked)}),(0,O.jsx)(d,{content:`Email will only be dispatched on business days, skipping weekends and public holidays.`,variant:`white`,placement:`top`,children:(0,O.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,color:`var(--ds-text-label)`,cursor:`pointer`,lineHeight:0},children:(0,O.jsx)(i,{})})})]})]})]}),(0,O.jsx)(x,{isOpen:ce,title:`Change Timezone`,onClose:()=>V(!1),onCancel:()=>V(!1),onSave:()=>{le(U),V(!1)},cancelLabel:`Cancel`,saveLabel:`Done`,width:574,children:(0,O.jsx)(p,{label:`Timezone`,layout:`horizontal`,width:`fit-content`,columns:`100px 390px`,value:U,onChange:e=>ue(e),options:[{value:`(GMT -12:00) International Date Line West`,label:`(GMT -12:00) International Date Line West`},{value:`(GMT -11:00) Coordinated Universal Time-11`,label:`(GMT -11:00) Coordinated Universal Time-11`},{value:`(GMT -10:00) Hawaii`,label:`(GMT -10:00) Hawaii`},{value:`(GMT -09:00) Alaska`,label:`(GMT -09:00) Alaska`},{value:`(GMT -08:00) Pacific Time (US & Canada)`,label:`(GMT -08:00) Pacific Time (US & Canada)`},{value:`(GMT -07:00) Mountain Time (US & Canada)`,label:`(GMT -07:00) Mountain Time (US & Canada)`},{value:`(GMT -06:00) Central Time (US & Canada)`,label:`(GMT -06:00) Central Time (US & Canada)`},{value:`(GMT -05:00) Eastern Time (US & Canada)`,label:`(GMT -05:00) Eastern Time (US & Canada)`},{value:`(GMT -04:00) Atlantic Time (Canada)`,label:`(GMT -04:00) Atlantic Time (Canada)`},{value:`(GMT -03:30) Newfoundland`,label:`(GMT -03:30) Newfoundland`},{value:`(GMT -03:00) Brasilia`,label:`(GMT -03:00) Brasilia`},{value:`(GMT -02:00) Coordinated Universal Time-02`,label:`(GMT -02:00) Coordinated Universal Time-02`},{value:`(GMT -01:00) Azores`,label:`(GMT -01:00) Azores`},{value:`(GMT +00:00) Dublin / Edinburgh / Lisbon / London`,label:`(GMT +00:00) Dublin / Edinburgh / Lisbon / London`},{value:`(GMT +01:00) Amsterdam / Berlin / Rome / Paris`,label:`(GMT +01:00) Amsterdam / Berlin / Rome / Paris`},{value:`(GMT +02:00) Athens / Bucharest`,label:`(GMT +02:00) Athens / Bucharest`},{value:`(GMT +03:00) Moscow / St. Petersburg`,label:`(GMT +03:00) Moscow / St. Petersburg`},{value:`(GMT +03:30) Tehran`,label:`(GMT +03:30) Tehran`},{value:`(GMT +04:00) Abu Dhabi / Muscat`,label:`(GMT +04:00) Abu Dhabi / Muscat`},{value:`(GMT +04:30) Kabul`,label:`(GMT +04:30) Kabul`},{value:`(GMT +05:00) Islamabad / Karachi`,label:`(GMT +05:00) Islamabad / Karachi`},{value:`(GMT 5:30) India Standard Time (Asia/Kolkata)`,label:`(GMT 5:30) India Standard Time (Asia/Kolkata)`},{value:`(GMT +05:45) Kathmandu`,label:`(GMT +05:45) Kathmandu`},{value:`(GMT +06:00) Dhaka`,label:`(GMT +06:00) Dhaka`},{value:`(GMT +06:30) Yangon (Rangoon)`,label:`(GMT +06:30) Yangon (Rangoon)`},{value:`(GMT +07:00) Bangkok / Hanoi / Jakarta`,label:`(GMT +07:00) Bangkok / Hanoi / Jakarta`},{value:`(GMT +08:00) Beijing / Chongqing / Hong Kong`,label:`(GMT +08:00) Beijing / Chongqing / Hong Kong`},{value:`(GMT +09:00) Osaka / Sapporo / Tokyo`,label:`(GMT +09:00) Osaka / Sapporo / Tokyo`},{value:`(GMT +09:30) Adelaide`,label:`(GMT +09:30) Adelaide`},{value:`(GMT +10:00) Canberra / Melbourne / Sydney`,label:`(GMT +10:00) Canberra / Melbourne / Sydney`},{value:`(GMT +11:00) Solomon Islands / New Caledonia`,label:`(GMT +11:00) Solomon Islands / New Caledonia`},{value:`(GMT +12:00) Auckland / Wellington`,label:`(GMT +12:00) Auckland / Wellington`}]})})]})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Send Dashboard Scheduler',
  render: () => {
    const [open, setOpen] = useState(false);
    const [sendOption, setSendOption] = useState('send_later');
    const [frequency, setFrequency] = useState('once');
    const [date, setDate] = useState(todayDDMMYYYY);
    const [time, setTime] = useState('12:20 PM');
    const [skipNoData, setSkipNoData] = useState(true);
    const [workingOnly, setWorkingOnly] = useState(false);
    const [startOnError, setStartOnError] = useState(false);
    const [everyN, setEveryN] = useState(2);
    const [ends, setEnds] = useState('never');
    const [endsAfterN, setEndsAfterN] = useState(1);
    const [endsOnDate, setEndsOnDate] = useState('');
    const [tzOpen, setTzOpen] = useState(false);
    const [timezone, setTimezone] = useState('(GMT 5:30) India Standard Time (Asia/Kolkata)');
    const [tzDraft, setTzDraft] = useState(timezone);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [monthlyMode, setMonthlyMode] = useState<'days_of_month' | 'specific_days'>('days_of_month');
    const [selectedMonthDays, setSelectedMonthDays] = useState<number[]>([]);
    const [monthlyPos, setMonthlyPos] = useState('first');
    const [monthlyWeekDay, setMonthlyWeekDay] = useState('monday');
    const [quarterMonthPos, setQuarterMonthPos] = useState('first');
    const [quarterDay, setQuarterDay] = useState('first');
    const [yearlyMonths, setYearlyMonths] = useState<string[]>(['January']);
    const [yearlyOn, setYearlyOn] = useState('first');
    const showSchedule = sendOption === 'send_later';
    const summary = showSchedule ? formatScheduleSummary(date, time, frequency, everyN, ends, endsAfterN, endsOnDate, selectedDays, monthlyMode, selectedMonthDays, monthlyPos, monthlyWeekDay, quarterMonthPos, quarterDay, yearlyMonths, yearlyOn) : '';
    const handleSave = () => {
      if (showSchedule && !date.trim()) {
        setStartOnError(true);
        return;
      }
      setOpen(false);
    };
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Send Email
        </Button>

        <Modal isOpen={open} title="Send Email" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={handleSave} cancelLabel="Cancel" saveLabel="Save" width={600} disableAutoFocus>
          <FormSection title="Scheduling Details" />

          {/* Send Options */}
          <Dropdown label="Send Options" layout="horizontal" width={W} columns={COLS} value={sendOption} onChange={(val: string) => setSendOption(val)} options={[{
          value: 'send_immediately',
          label: 'Send Immediately'
        }, {
          value: 'send_later',
          label: 'Send Later'
        }]} />

          {/* Frequency + Every N [Unit] (same row for repeating frequencies) */}
          {showSchedule && <div style={{
          display: 'grid',
          gridTemplateColumns: COLS,
          columnGap: 20,
          alignItems: 'start',
          width: W
        }}>
              <span style={FIELD_LABEL_STYLE}>Frequency</span>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
                <div style={{
              flex: 1,
              minWidth: 0
            }}>
                  <Dropdown layout="vertical" width="100%" value={frequency} onChange={(val: string) => {
                setFrequency(val);
                setEnds('never');
              }} options={[{
                value: 'once',
                label: 'Once'
              }, {
                value: 'daily',
                label: 'Daily'
              }, {
                value: 'weekly',
                label: 'Weekly'
              }, {
                value: 'monthly',
                label: 'Monthly'
              }, {
                value: 'quarterly',
                label: 'Quarterly'
              }, {
                value: 'yearly',
                label: 'Yearly'
              }]} />
                </div>
                {frequency !== 'once' && <>
                    <span style={INLINE_TEXT_STYLE}>Every</span>
                    <Input layout="vertical" type="number" width={70} value={String(everyN)} min={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEveryN(Math.max(1, Number(e.target.value)))} />
                    <span style={INLINE_TEXT_STYLE}>{FREQ_UNIT[frequency]}</span>
                  </>}
              </div>
            </div>}

          {/* Weekly — day-of-week picker */}
          {showSchedule && frequency === 'weekly' && <div style={{
          display: 'grid',
          gridTemplateColumns: COLS,
          columnGap: 20,
          width: W
        }}>
              <span />
              <GroupButton options={[{
            value: 'Mon',
            label: 'Mon'
          }, {
            value: 'Tue',
            label: 'Tue'
          }, {
            value: 'Wed',
            label: 'Wed'
          }, {
            value: 'Thu',
            label: 'Thu'
          }, {
            value: 'Fri',
            label: 'Fri'
          }, {
            value: 'Sat',
            label: 'Sat'
          }, {
            value: 'Sun',
            label: 'Sun'
          }]} value={selectedDays} onChange={v => setSelectedDays(v as string[])} multiSelect showBadge itemWidth={50} />
            </div>}

          {/* Monthly — mode radio + date grid or specific-day dropdowns */}
          {showSchedule && frequency === 'monthly' && <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}>
              <div style={{
            display: 'grid',
            gridTemplateColumns: COLS,
            columnGap: 20,
            width: W
          }}>
                <span />
                <div style={{
              display: 'flex',
              gap: 20
            }}>
                  <Radio label="Days of the month" name="monthly-mode" value="days_of_month" checked={monthlyMode === 'days_of_month'} onChange={() => setMonthlyMode('days_of_month')} />
                  <Radio label="On Specific Days" name="monthly-mode" value="specific_days" checked={monthlyMode === 'specific_days'} onChange={() => setMonthlyMode('specific_days')} />
                </div>
              </div>

              {monthlyMode === 'days_of_month' && <div style={{
            display: 'grid',
            gridTemplateColumns: COLS,
            columnGap: 20,
            width: W
          }}>
                  <span />
                  <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: 10,
              border: '1px solid var(--ds-components-input-default-outline)',
              borderRadius: 6,
              padding: '15px 10px',
              width: 'fit-content'
            }}>
                    <style>{\`
                      .sds-cal-day { background: transparent; color: var(--ds-text-base); border: 1px solid transparent; transition: background 100ms, color 100ms, border-color 100ms; }
                      .sds-cal-day:hover { background: var(--ds-components-button-outline-blue-default-bg); border-color: var(--ds-components-button-outline-blue-default-border); color: var(--ds-text-link); }
                      .sds-cal-day[data-sel] { background: var(--ds-components-input-focus-outline); color: #fff; border-color: var(--ds-components-input-focus-outline); }
                      .sds-cal-day[data-sel]:hover { background: var(--ds-components-input-focus-outline); color: #fff; border-color: var(--ds-components-input-focus-outline); }
                    \`}</style>
                    <span style={{
                fontFamily: 'var(--ds-font-family-base)',
                fontSize: 'var(--ds-font-size-sm)',
                fontWeight: 600,
                color: 'var(--ds-text-base)'
              }}>Select Dates</span>
                    <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 34px)',
                gap: 4
              }}>
                      {Array.from({
                  length: 31
                }, (_, i) => i + 1).map(day => {
                  const sel = selectedMonthDays.includes(day);
                  return <button key={day} type="button" className="sds-cal-day" data-sel={sel || undefined} onClick={() => setSelectedMonthDays(p => p.includes(day) ? p.filter(d => d !== day) : [...p, day])} style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontFamily: 'var(--ds-font-family-base)',
                    fontSize: 'var(--ds-font-size-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                            {day}
                          </button>;
                })}
                    </div>
                  </div>
                </div>}

              {monthlyMode === 'specific_days' && <div style={{
            display: 'grid',
            gridTemplateColumns: COLS,
            columnGap: 20,
            width: W,
            alignItems: 'start'
          }}>
                  <span />
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
                    <span style={INLINE_TEXT_STYLE}>Every</span>
                    <Dropdown layout="vertical" width={120} value={monthlyPos} onChange={(val: string) => setMonthlyPos(val)} options={[{
                value: 'first',
                label: 'First'
              }, {
                value: '15th',
                label: '15th'
              }, {
                value: 'last',
                label: 'Last'
              }]} />
                    <Dropdown layout="vertical" width={152} value={monthlyWeekDay} onChange={(val: string) => setMonthlyWeekDay(val)} options={[{
                value: 'monday',
                label: 'Monday'
              }, {
                value: 'tuesday',
                label: 'Tuesday'
              }, {
                value: 'wednesday',
                label: 'Wednesday'
              }, {
                value: 'thursday',
                label: 'Thursday'
              }, {
                value: 'friday',
                label: 'Friday'
              }, {
                value: 'saturday',
                label: 'Saturday'
              }, {
                value: 'sunday',
                label: 'Sunday'
              }]} />
                  </div>
                </div>}
            </div>}

          {/* Quarterly — month of quarter + day */}
          {showSchedule && frequency === 'quarterly' && <div style={{
          display: 'grid',
          gridTemplateColumns: COLS,
          columnGap: 20,
          width: W
        }}>
              <span />
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap'
          }}>
                <span style={INLINE_TEXT_STYLE}>In the</span>
                <Dropdown layout="vertical" width={100} value={quarterMonthPos} onChange={(val: string) => setQuarterMonthPos(val)} options={[{
              value: 'first',
              label: 'First'
            }, {
              value: 'second',
              label: 'Second'
            }, {
              value: 'third',
              label: 'Third'
            }, {
              value: 'last',
              label: 'Last'
            }]} />
                <span style={INLINE_TEXT_STYLE}>Month of Quarter on</span>
                <Dropdown layout="vertical" width={90} value={quarterDay} onChange={(val: string) => setQuarterDay(val)} options={[{
              value: 'first',
              label: 'First'
            }, {
              value: '15th',
              label: '15th'
            }, {
              value: 'last',
              label: 'Last'
            }]} />
                <span style={INLINE_TEXT_STYLE}>day</span>
              </div>
            </div>}

          {/* Yearly — month tags + ordinal day */}
          {showSchedule && frequency === 'yearly' && <>
              <div style={{
            display: 'grid',
            gridTemplateColumns: COLS,
            columnGap: 20,
            width: W,
            alignItems: 'start'
          }}>
                <span />
                <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8
            }}>
                  <span style={{
                ...INLINE_TEXT_STYLE,
                paddingTop: 7
              }}>In</span>
                  <div style={{
                flex: 1
              }}>
                    <Tags value={yearlyMonths.map(m => ({
                  value: m,
                  label: m
                }))} options={ALL_MONTHS.map(m => ({
                  value: m,
                  label: m
                }))} onChange={(tags: {
                  value: string;
                  label: string;
                }[]) => setYearlyMonths(tags.map(t => t.value))} width="100%" placeholder="Add month" />
                  </div>
                </div>
              </div>

              <div style={{
            display: 'grid',
            gridTemplateColumns: COLS,
            columnGap: 20,
            width: W
          }}>
                <span />
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
                  <span style={INLINE_TEXT_STYLE}>On</span>
                  <Dropdown layout="vertical" width={120} value={yearlyOn} onChange={(val: string) => setYearlyOn(val)} options={ORDINAL_OPTS} />
                  <span style={INLINE_TEXT_STYLE}>day</span>
                </div>
              </div>
            </>}

          {/* Start On — date + time picker */}
          {showSchedule && <DateTimeInput label="Start On" layout="horizontal" width={W} columns={COLS} dateValue={date} timeValue={time} error={startOnError} helperText={startOnError ? 'Please enter a start date.' : undefined} onDateChange={(val: string) => {
          setDate(val);
          setStartOnError(false);
        }} onTimeChange={(val: string) => setTime(val)} />}

          {/* Timezone note — always below Start On */}
          {showSchedule && <p style={{
          margin: 0,
          marginTop: -15,
          paddingLeft: FIELD_OFFSET,
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 'var(--ds-font-size-sm)',
          color: 'var(--ds-text-muted)',
          lineHeight: 'var(--ds-line-height-base)'
        }}>
              <span style={{
            color: 'var(--ds-text-label)'
          }}>Time Zone: </span>
              {timezone}
              <button type="button" className="input-link-btn" style={{
            marginLeft: 4
          }} onClick={() => {
            setTzDraft(timezone);
            setTzOpen(true);
          }}>
                Change
              </button>
            </p>}

          {/* Ends — shown for all repeating frequencies */}
          {showSchedule && frequency !== 'once' && <div style={{
          display: 'grid',
          gridTemplateColumns: COLS,
          columnGap: 20,
          alignItems: 'start',
          width: W
        }}>
              <span style={FIELD_LABEL_STYLE}>Ends</span>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
                <div style={{
              flex: 1,
              minWidth: 0
            }}>
                  <Dropdown layout="vertical" width="100%" value={ends} onChange={(val: string) => setEnds(val)} options={[{
                value: 'never',
                label: 'Never'
              }, {
                value: 'after_n',
                label: 'After N times',
                triggerLabel: 'After'
              }, {
                value: 'on_date',
                label: 'On Specific Date'
              }]} />
                </div>
                {ends === 'after_n' && <>
                    <Input layout="vertical" type="number" width={70} value={String(endsAfterN)} min={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndsAfterN(Math.max(1, Number(e.target.value)))} />
                    <span style={INLINE_TEXT_STYLE}>times</span>
                  </>}
                {ends === 'on_date' && <DateTimeInput layout="vertical" width={160} dateOnly dateValue={endsOnDate} onDateChange={(val: string) => setEndsOnDate(val)} />}
              </div>
            </div>}

          {/* Scheduler run summary */}
          {showSchedule && summary && <div className="sds-summary-note" style={{
          paddingLeft: FIELD_OFFSET
        }}>
              <style>{\`.sds-summary-note .msg-info-label { display: none; }\`}</style>
              <MessageInfo variant="info" message={summary} />
            </div>}

          {/* Delivery preferences */}
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
            <Checkbox id="skip-no-data" label="Do not send Email when there is no data in the chart." checked={skipNoData} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkipNoData(e.target.checked)} />

            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
              <Checkbox id="working-days-only" label="Send Email only on working days" checked={workingOnly} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkingOnly(e.target.checked)} />
              <Tooltip content="Email will only be dispatched on business days, skipping weekends and public holidays." variant="white" placement="top">
                <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--ds-text-label)',
                cursor: 'pointer',
                lineHeight: 0
              }}>
                  <Info />
                </span>
              </Tooltip>
            </div>
          </div>
        </Modal>

        <Modal isOpen={tzOpen} title="Change Timezone" onClose={() => setTzOpen(false)} onCancel={() => setTzOpen(false)} onSave={() => {
        setTimezone(tzDraft);
        setTzOpen(false);
      }} cancelLabel="Cancel" saveLabel="Done" width={574}>
          <Dropdown label="Timezone" layout="horizontal" width="fit-content" columns="100px 390px" value={tzDraft} onChange={(val: string) => setTzDraft(val)} options={[{
          value: '(GMT -12:00) International Date Line West',
          label: '(GMT -12:00) International Date Line West'
        }, {
          value: '(GMT -11:00) Coordinated Universal Time-11',
          label: '(GMT -11:00) Coordinated Universal Time-11'
        }, {
          value: '(GMT -10:00) Hawaii',
          label: '(GMT -10:00) Hawaii'
        }, {
          value: '(GMT -09:00) Alaska',
          label: '(GMT -09:00) Alaska'
        }, {
          value: '(GMT -08:00) Pacific Time (US & Canada)',
          label: '(GMT -08:00) Pacific Time (US & Canada)'
        }, {
          value: '(GMT -07:00) Mountain Time (US & Canada)',
          label: '(GMT -07:00) Mountain Time (US & Canada)'
        }, {
          value: '(GMT -06:00) Central Time (US & Canada)',
          label: '(GMT -06:00) Central Time (US & Canada)'
        }, {
          value: '(GMT -05:00) Eastern Time (US & Canada)',
          label: '(GMT -05:00) Eastern Time (US & Canada)'
        }, {
          value: '(GMT -04:00) Atlantic Time (Canada)',
          label: '(GMT -04:00) Atlantic Time (Canada)'
        }, {
          value: '(GMT -03:30) Newfoundland',
          label: '(GMT -03:30) Newfoundland'
        }, {
          value: '(GMT -03:00) Brasilia',
          label: '(GMT -03:00) Brasilia'
        }, {
          value: '(GMT -02:00) Coordinated Universal Time-02',
          label: '(GMT -02:00) Coordinated Universal Time-02'
        }, {
          value: '(GMT -01:00) Azores',
          label: '(GMT -01:00) Azores'
        }, {
          value: '(GMT +00:00) Dublin / Edinburgh / Lisbon / London',
          label: '(GMT +00:00) Dublin / Edinburgh / Lisbon / London'
        }, {
          value: '(GMT +01:00) Amsterdam / Berlin / Rome / Paris',
          label: '(GMT +01:00) Amsterdam / Berlin / Rome / Paris'
        }, {
          value: '(GMT +02:00) Athens / Bucharest',
          label: '(GMT +02:00) Athens / Bucharest'
        }, {
          value: '(GMT +03:00) Moscow / St. Petersburg',
          label: '(GMT +03:00) Moscow / St. Petersburg'
        }, {
          value: '(GMT +03:30) Tehran',
          label: '(GMT +03:30) Tehran'
        }, {
          value: '(GMT +04:00) Abu Dhabi / Muscat',
          label: '(GMT +04:00) Abu Dhabi / Muscat'
        }, {
          value: '(GMT +04:30) Kabul',
          label: '(GMT +04:30) Kabul'
        }, {
          value: '(GMT +05:00) Islamabad / Karachi',
          label: '(GMT +05:00) Islamabad / Karachi'
        }, {
          value: '(GMT 5:30) India Standard Time (Asia/Kolkata)',
          label: '(GMT 5:30) India Standard Time (Asia/Kolkata)'
        }, {
          value: '(GMT +05:45) Kathmandu',
          label: '(GMT +05:45) Kathmandu'
        }, {
          value: '(GMT +06:00) Dhaka',
          label: '(GMT +06:00) Dhaka'
        }, {
          value: '(GMT +06:30) Yangon (Rangoon)',
          label: '(GMT +06:30) Yangon (Rangoon)'
        }, {
          value: '(GMT +07:00) Bangkok / Hanoi / Jakarta',
          label: '(GMT +07:00) Bangkok / Hanoi / Jakarta'
        }, {
          value: '(GMT +08:00) Beijing / Chongqing / Hong Kong',
          label: '(GMT +08:00) Beijing / Chongqing / Hong Kong'
        }, {
          value: '(GMT +09:00) Osaka / Sapporo / Tokyo',
          label: '(GMT +09:00) Osaka / Sapporo / Tokyo'
        }, {
          value: '(GMT +09:30) Adelaide',
          label: '(GMT +09:30) Adelaide'
        }, {
          value: '(GMT +10:00) Canberra / Melbourne / Sydney',
          label: '(GMT +10:00) Canberra / Melbourne / Sydney'
        }, {
          value: '(GMT +11:00) Solomon Islands / New Caledonia',
          label: '(GMT +11:00) Solomon Islands / New Caledonia'
        }, {
          value: '(GMT +12:00) Auckland / Wellington',
          label: '(GMT +12:00) Auckland / Wellington'
        }]} />
        </Modal>
      </>;
  }
}`,...R.parameters?.docs?.source}}},z=[`SendDashboardScheduler`]}))();export{R as SendDashboardScheduler,z as __namedExportsOrder,k as default};