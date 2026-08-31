import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9u3ETtj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{at as i,j as a}from"./Icons-BYUilB8S.js";import{r as o,t as s}from"./Button-EK6WNORT.js";import{n as c,t as l}from"./Calendar-vobFoc2-.js";import{n as u,t as d}from"./Checkbox-TWwE4Kdu.js";import{n as f,t as p}from"./Tooltip-CQ5Un3Py.js";import{n as m,t as h}from"./Dropdown-BmMh6w10.js";import{n as g,t as _}from"./Input-BTfEP4t3.js";import{n as v,t as ee}from"./DateTimeInput-D4XnT5P0.js";import{n as y,t as te}from"./GroupButton-CVCtEdRz.js";import{n as b,t as ne}from"./MessageInfo-BQUrdfOl.js";import{n as x,t as S}from"./Modal-BFeJeRH3.js";import{n as C,t as w}from"./Radio-BeT0cTag.js";import{n as T,t as re}from"./Tags-C6EHYOdm.js";import{n as E,t as ie}from"./FormSection-DB8ioMjr.js";function ae(){let e=new Date;return`${String(e.getDate()).padStart(2,`0`)}/${String(e.getMonth()+1).padStart(2,`0`)}/${e.getFullYear()}`}function D(e,t,n){return e===`after_n`?`, ends after ${t} ${t===1?`time`:`times`}`:e===`on_date`&&n?`, ends on ${n}`:``}function oe(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){if(!e||!t)return``;let g=D(i,a,o);if(n===`daily`)return`Email will be sent every ${r} ${r===1?`day`:`days`} from ${e}, at ${t} IST${g}`;if(n===`weekly`)return`Email will be sent every ${r} ${r===1?`week`:`weeks`}${s.length>0?` on ${s.join(`, `)}`:``} from ${e}, at ${t} IST${g}`;if(n===`monthly`){let n=r===1?`month`:`months`;return c===`days_of_month`?`Email will be sent every ${r} ${n} on the ${l.length>0?l.slice().sort((e,t)=>e-t).join(`, `):`no days selected`} from ${e}, at ${t} IST${g}`:`Email will be sent every ${r} ${n} on the ${u.charAt(0).toUpperCase()+u.slice(1)} ${d.charAt(0).toUpperCase()+d.slice(1)} from ${e}, at ${t} IST${g}`}return n===`quarterly`?`Email will be sent every ${r} ${r===1?`quarter`:`quarters`}, in the ${f.charAt(0).toUpperCase()+f.slice(1)} month on the ${p===`15th`?`15th`:p.charAt(0).toUpperCase()+p.slice(1)} day, from ${e}, at ${t} IST${g}`:n===`yearly`?`Email will be sent every ${r} ${r===1?`year`:`years`} in ${m.length>0?m.join(`, `):`no months selected`}, on the ${h===`15th`?`15th`:h.charAt(0).toUpperCase()+h.slice(1)} day, from ${e}, at ${t} IST${g}`:`Scheduler will run on ${e}, at ${t} IST`}var O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{O=t(n(),1),x(),m(),u(),o(),f(),E(),v(),g(),b(),T(),C(),c(),y(),i(),k=r(),A={title:`Design System/Patterns/Send Dashboard Scheduler`,parameters:{layout:`centered`,docs:{description:{component:`Modal pattern for scheduling a dashboard email report — configure send options, frequency, start date/time, and delivery preferences.`}}}},j={daily:`Days`,weekly:`Weeks`,monthly:`Months`,quarterly:`Quarter`,yearly:`Years`},M=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],N=[{value:`first`,label:`First`},{value:`second`,label:`Second`},{value:`third`,label:`Third`},{value:`fourth`,label:`Fourth`},{value:`last`,label:`Last`}],P={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-label)`,lineHeight:`var(--ds-line-height-base)`,textAlign:`right`,paddingTop:7},F={fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,color:`var(--ds-text-base)`,whiteSpace:`nowrap`},I=540,L=`130px 390px`,R=150,z={name:`Send Dashboard Scheduler`,render:()=>{let[e,t]=(0,O.useState)(!1),[n,r]=(0,O.useState)(`send_later`),[i,o]=(0,O.useState)(`once`),[c,u]=(0,O.useState)(ae),[f,m]=(0,O.useState)(`12:20 PM`),[g,v]=(0,O.useState)(!0),[y,b]=(0,O.useState)(!1),[x,C]=(0,O.useState)(!1),[T,E]=(0,O.useState)(2),[D,A]=(0,O.useState)(`never`),[z,B]=(0,O.useState)(1),[V,se]=(0,O.useState)(``),[ce,H]=(0,O.useState)(!1),[U,le]=(0,O.useState)(`(GMT 5:30) India Standard Time (Asia/Kolkata)`),[W,G]=(0,O.useState)(U),[K,ue]=(0,O.useState)([]),[q,J]=(0,O.useState)(`days_of_month`),[Y,de]=(0,O.useState)([]),[X,fe]=(0,O.useState)(`first`),[Z,pe]=(0,O.useState)(`monday`),[Q,me]=(0,O.useState)(`first`),[he,ge]=(0,O.useState)(`first`),[_e,ve]=(0,O.useState)([`January`]),[ye,be]=(0,O.useState)(`first`),$=n===`send_later`,xe=$?oe(c,f,i,T,D,z,V,K,q,Y,X,Z,Q,he,_e,ye):``;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Send Email`}),(0,k.jsxs)(S,{isOpen:e,title:`Send Email`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>{if($&&!c.trim()){C(!0);return}t(!1)},cancelLabel:`Cancel`,saveLabel:`Save`,width:600,disableAutoFocus:!0,children:[(0,k.jsx)(ie,{title:`Scheduling Details`}),(0,k.jsx)(h,{label:`Send Options`,layout:`horizontal`,width:I,columns:L,value:n,onChange:e=>r(e),options:[{value:`send_immediately`,label:`Send Immediately`},{value:`send_later`,label:`Send Later`}]}),$&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,alignItems:`start`,width:I},children:[(0,k.jsx)(`span`,{style:P,children:`Frequency`}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,k.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,k.jsx)(h,{layout:`vertical`,width:`100%`,value:i,onChange:e=>{o(e),A(`never`)},options:[{value:`once`,label:`Once`},{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`},{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`yearly`,label:`Yearly`}]})}),i!==`once`&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{style:F,children:`Every`}),(0,k.jsx)(_,{layout:`vertical`,type:`number`,width:70,value:String(T),min:1,onChange:e=>E(Math.max(1,Number(e.target.value)))}),(0,k.jsx)(`span`,{style:F,children:j[i]})]})]})]}),$&&i===`weekly`&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I},children:[(0,k.jsx)(`span`,{}),(0,k.jsx)(te,{options:[{value:`Mon`,label:`Mon`},{value:`Tue`,label:`Tue`},{value:`Wed`,label:`Wed`},{value:`Thu`,label:`Thu`},{value:`Fri`,label:`Fri`},{value:`Sat`,label:`Sat`},{value:`Sun`,label:`Sun`}],value:K,onChange:e=>ue(e),multiSelect:!0,showBadge:!0})]}),$&&i===`monthly`&&(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I},children:[(0,k.jsx)(`span`,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:20},children:[(0,k.jsx)(w,{label:`Days of the month`,name:`monthly-mode`,value:`days_of_month`,checked:q===`days_of_month`,onChange:()=>J(`days_of_month`)}),(0,k.jsx)(w,{label:`On Specific Days`,name:`monthly-mode`,value:`specific_days`,checked:q===`specific_days`,onChange:()=>J(`specific_days`)})]})]}),q===`days_of_month`&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I},children:[(0,k.jsx)(`span`,{}),(0,k.jsx)(l,{mode:`date-of-month`,selectedDayNumbers:Y,onDayNumbersChange:e=>de(e),width:282})]}),q===`specific_days`&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I,alignItems:`start`},children:[(0,k.jsx)(`span`,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,k.jsx)(`span`,{style:F,children:`Every`}),(0,k.jsx)(h,{layout:`vertical`,width:120,value:X,onChange:e=>fe(e),options:[{value:`first`,label:`First`},{value:`15th`,label:`15th`},{value:`last`,label:`Last`}]}),(0,k.jsx)(h,{layout:`vertical`,width:152,value:Z,onChange:e=>pe(e),options:[{value:`monday`,label:`Monday`},{value:`tuesday`,label:`Tuesday`},{value:`wednesday`,label:`Wednesday`},{value:`thursday`,label:`Thursday`},{value:`friday`,label:`Friday`},{value:`saturday`,label:`Saturday`},{value:`sunday`,label:`Sunday`}]})]})]})]}),$&&i===`quarterly`&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I},children:[(0,k.jsx)(`span`,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,k.jsx)(`span`,{style:F,children:`In the`}),(0,k.jsx)(h,{layout:`vertical`,width:100,value:Q,onChange:e=>me(e),options:[{value:`first`,label:`First`},{value:`second`,label:`Second`},{value:`third`,label:`Third`},{value:`last`,label:`Last`}]}),(0,k.jsx)(`span`,{style:F,children:`Month of Quarter on`}),(0,k.jsx)(h,{layout:`vertical`,width:90,value:he,onChange:e=>ge(e),options:[{value:`first`,label:`First`},{value:`15th`,label:`15th`},{value:`last`,label:`Last`}]}),(0,k.jsx)(`span`,{style:F,children:`day`})]})]}),$&&i===`yearly`&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I,alignItems:`start`},children:[(0,k.jsx)(`span`,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:8},children:[(0,k.jsx)(`span`,{style:{...F,paddingTop:7},children:`In`}),(0,k.jsx)(`div`,{style:{flex:1},children:(0,k.jsx)(re,{value:_e.map(e=>({value:e,label:e})),options:M.map(e=>({value:e,label:e})),onChange:e=>ve(e.map(e=>e.value)),width:`100%`,placeholder:`Add month`})})]})]}),(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,width:I},children:[(0,k.jsx)(`span`,{}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,k.jsx)(`span`,{style:F,children:`On`}),(0,k.jsx)(h,{layout:`vertical`,width:120,value:ye,onChange:e=>be(e),options:N}),(0,k.jsx)(`span`,{style:F,children:`day`})]})]})]}),$&&(0,k.jsx)(ee,{label:`Start On`,layout:`horizontal`,width:I,columns:L,dateValue:c,timeValue:f,error:x,helperText:x?`Please enter a start date.`:void 0,onDateChange:e=>{u(e),C(!1)},onTimeChange:e=>m(e)}),$&&(0,k.jsxs)(`p`,{style:{margin:0,marginTop:-15,paddingLeft:R,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-sm)`,color:`var(--ds-text-muted)`,lineHeight:`var(--ds-line-height-base)`},children:[(0,k.jsx)(`span`,{style:{color:`var(--ds-text-label)`},children:`Time Zone: `}),U,(0,k.jsx)(`button`,{type:`button`,className:`input-link-btn`,style:{marginLeft:4},onClick:()=>{G(U),H(!0)},children:`Change`})]}),$&&i!==`once`&&(0,k.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:L,columnGap:20,alignItems:`start`,width:I},children:[(0,k.jsx)(`span`,{style:P,children:`Ends`}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,k.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,k.jsx)(h,{layout:`vertical`,width:`100%`,value:D,onChange:e=>A(e),options:[{value:`never`,label:`Never`},{value:`after_n`,label:`After N times`,triggerLabel:`After`},{value:`on_date`,label:`On Specific Date`}]})}),D===`after_n`&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{layout:`vertical`,type:`number`,width:70,value:String(z),min:1,onChange:e=>B(Math.max(1,Number(e.target.value)))}),(0,k.jsx)(`span`,{style:F,children:`times`})]}),D===`on_date`&&(0,k.jsx)(ee,{layout:`vertical`,width:160,dateOnly:!0,dateValue:V,onDateChange:e=>se(e)})]})]}),$&&xe&&(0,k.jsxs)(`div`,{className:`sds-summary-note`,style:{paddingLeft:R},children:[(0,k.jsx)(`style`,{children:`.sds-summary-note .msg-info-label { display: none; }`}),(0,k.jsx)(ne,{variant:`info`,message:xe})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`15px`},children:[(0,k.jsx)(d,{id:`skip-no-data`,label:`Do not send Email when there is no data in the chart.`,checked:g,onChange:e=>v(e.target.checked)}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,k.jsx)(d,{id:`working-days-only`,label:`Send Email only on working days`,checked:y,onChange:e=>b(e.target.checked)}),(0,k.jsx)(p,{content:`Email will only be dispatched on business days, skipping weekends and public holidays.`,variant:`white`,placement:`top`,children:(0,k.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,color:`var(--ds-text-label)`,cursor:`pointer`,lineHeight:0},children:(0,k.jsx)(a,{})})})]})]})]}),(0,k.jsx)(S,{isOpen:ce,title:`Change Timezone`,onClose:()=>H(!1),onCancel:()=>H(!1),onSave:()=>{le(W),H(!1)},cancelLabel:`Cancel`,saveLabel:`Done`,width:574,children:(0,k.jsx)(h,{label:`Timezone`,layout:`horizontal`,width:`fit-content`,columns:`100px 390px`,value:W,onChange:e=>G(e),options:[{value:`(GMT -12:00) International Date Line West`,label:`(GMT -12:00) International Date Line West`},{value:`(GMT -11:00) Coordinated Universal Time-11`,label:`(GMT -11:00) Coordinated Universal Time-11`},{value:`(GMT -10:00) Hawaii`,label:`(GMT -10:00) Hawaii`},{value:`(GMT -09:00) Alaska`,label:`(GMT -09:00) Alaska`},{value:`(GMT -08:00) Pacific Time (US & Canada)`,label:`(GMT -08:00) Pacific Time (US & Canada)`},{value:`(GMT -07:00) Mountain Time (US & Canada)`,label:`(GMT -07:00) Mountain Time (US & Canada)`},{value:`(GMT -06:00) Central Time (US & Canada)`,label:`(GMT -06:00) Central Time (US & Canada)`},{value:`(GMT -05:00) Eastern Time (US & Canada)`,label:`(GMT -05:00) Eastern Time (US & Canada)`},{value:`(GMT -04:00) Atlantic Time (Canada)`,label:`(GMT -04:00) Atlantic Time (Canada)`},{value:`(GMT -03:30) Newfoundland`,label:`(GMT -03:30) Newfoundland`},{value:`(GMT -03:00) Brasilia`,label:`(GMT -03:00) Brasilia`},{value:`(GMT -02:00) Coordinated Universal Time-02`,label:`(GMT -02:00) Coordinated Universal Time-02`},{value:`(GMT -01:00) Azores`,label:`(GMT -01:00) Azores`},{value:`(GMT +00:00) Dublin / Edinburgh / Lisbon / London`,label:`(GMT +00:00) Dublin / Edinburgh / Lisbon / London`},{value:`(GMT +01:00) Amsterdam / Berlin / Rome / Paris`,label:`(GMT +01:00) Amsterdam / Berlin / Rome / Paris`},{value:`(GMT +02:00) Athens / Bucharest`,label:`(GMT +02:00) Athens / Bucharest`},{value:`(GMT +03:00) Moscow / St. Petersburg`,label:`(GMT +03:00) Moscow / St. Petersburg`},{value:`(GMT +03:30) Tehran`,label:`(GMT +03:30) Tehran`},{value:`(GMT +04:00) Abu Dhabi / Muscat`,label:`(GMT +04:00) Abu Dhabi / Muscat`},{value:`(GMT +04:30) Kabul`,label:`(GMT +04:30) Kabul`},{value:`(GMT +05:00) Islamabad / Karachi`,label:`(GMT +05:00) Islamabad / Karachi`},{value:`(GMT 5:30) India Standard Time (Asia/Kolkata)`,label:`(GMT 5:30) India Standard Time (Asia/Kolkata)`},{value:`(GMT +05:45) Kathmandu`,label:`(GMT +05:45) Kathmandu`},{value:`(GMT +06:00) Dhaka`,label:`(GMT +06:00) Dhaka`},{value:`(GMT +06:30) Yangon (Rangoon)`,label:`(GMT +06:30) Yangon (Rangoon)`},{value:`(GMT +07:00) Bangkok / Hanoi / Jakarta`,label:`(GMT +07:00) Bangkok / Hanoi / Jakarta`},{value:`(GMT +08:00) Beijing / Chongqing / Hong Kong`,label:`(GMT +08:00) Beijing / Chongqing / Hong Kong`},{value:`(GMT +09:00) Osaka / Sapporo / Tokyo`,label:`(GMT +09:00) Osaka / Sapporo / Tokyo`},{value:`(GMT +09:30) Adelaide`,label:`(GMT +09:30) Adelaide`},{value:`(GMT +10:00) Canberra / Melbourne / Sydney`,label:`(GMT +10:00) Canberra / Melbourne / Sydney`},{value:`(GMT +11:00) Solomon Islands / New Caledonia`,label:`(GMT +11:00) Solomon Islands / New Caledonia`},{value:`(GMT +12:00) Auckland / Wellington`,label:`(GMT +12:00) Auckland / Wellington`}]})})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
          }]} value={selectedDays} onChange={v => setSelectedDays(v as string[])} multiSelect showBadge />
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
                  <Calendar mode="date-of-month" selectedDayNumbers={selectedMonthDays} onDayNumbersChange={(nums: number[]) => setSelectedMonthDays(nums)} width={282} />
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
}`,...z.parameters?.docs?.source}}},B=[`SendDashboardScheduler`]}))();export{z as SendDashboardScheduler,B as __namedExportsOrder,A as default};