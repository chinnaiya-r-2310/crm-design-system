import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-CqNH1q5E.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./Button-s8QEkq83.js";import{n as o,t as s}from"./Checkbox-Cki4VoOp.js";import{n as c,t as l}from"./Dropdown-D4C-w6-C.js";import{n as u,t as d}from"./Input-CMj9YVkL.js";import{n as f,t as p}from"./Modal-BVOTNhNK.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m=t(n(),1),f(),u(),c(),o(),i(),h=r(),g={title:`Design System/Components/Modal`,component:p,parameters:{layout:`centered`,docs:{description:{component:[`Dialog modal with header, form body, optional footer note, and Cancel/Save actions.`,`Figma: Chinnaiya Style Sheet node 150:25791.`,"Renders into `document.body` via React portal. Closes on backdrop click or Escape key."].join(` `)}}},argTypes:{isOpen:{control:`boolean`,table:{category:`State`}},title:{control:`text`,table:{category:`Anatomy`}},cancelLabel:{control:`text`,table:{category:`Anatomy`}},saveLabel:{control:`text`,table:{category:`Anatomy`}},width:{control:{type:`number`,min:300,max:900,step:8},table:{category:`Layout`}},onClose:{action:`onClose`,table:{category:`Events`}},onCancel:{action:`onCancel`,table:{category:`Events`}},onSave:{action:`onSave`,table:{category:`Events`}}}},_=[{value:`in`,label:`India`},{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`au`,label:`Australia`},{value:`ca`,label:`Canada`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`jp`,label:`Japan`},{value:`sg`,label:`Singapore`},{value:`cn`,label:`China`},{value:`br`,label:`Brazil`},{value:`mx`,label:`Mexico`},{value:`kr`,label:`South Korea`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`nl`,label:`Netherlands`},{value:`se`,label:`Sweden`},{value:`ch`,label:`Switzerland`},{value:`ae`,label:`United Arab Emirates`},{value:`sa`,label:`Saudi Arabia`},{value:`za`,label:`South Africa`},{value:`nz`,label:`New Zealand`},{value:`hk`,label:`Hong Kong`},{value:`my`,label:`Malaysia`},{value:`id`,label:`Indonesia`}],v=[{value:`en`,label:`English`},{value:`hi`,label:`Hindi`},{value:`es`,label:`Spanish`},{value:`fr`,label:`French`},{value:`de`,label:`German`},{value:`ja`,label:`Japanese`},{value:`zh_cn`,label:`Chinese (Simplified)`},{value:`zh_tw`,label:`Chinese (Traditional)`},{value:`ar`,label:`Arabic`},{value:`pt`,label:`Portuguese`},{value:`ko`,label:`Korean`},{value:`it`,label:`Italian`},{value:`nl`,label:`Dutch`},{value:`sv`,label:`Swedish`},{value:`ta`,label:`Tamil`},{value:`te`,label:`Telugu`},{value:`ms`,label:`Malay`},{value:`id`,label:`Indonesian`}],y=[{value:`usd`,label:`USD – US Dollar`},{value:`eur`,label:`EUR – Euro`},{value:`gbp`,label:`GBP – British Pound`},{value:`inr`,label:`INR – Indian Rupee`},{value:`jpy`,label:`JPY – Japanese Yen`},{value:`cny`,label:`CNY – Chinese Yuan`},{value:`aud`,label:`AUD – Australian Dollar`},{value:`cad`,label:`CAD – Canadian Dollar`},{value:`sgd`,label:`SGD – Singapore Dollar`},{value:`chf`,label:`CHF – Swiss Franc`},{value:`sek`,label:`SEK – Swedish Krona`},{value:`brl`,label:`BRL – Brazilian Real`},{value:`mxn`,label:`MXN – Mexican Peso`},{value:`krw`,label:`KRW – South Korean Won`},{value:`aed`,label:`AED – UAE Dirham`},{value:`sar`,label:`SAR – Saudi Riyal`},{value:`hkd`,label:`HKD – Hong Kong Dollar`},{value:`myr`,label:`MYR – Malaysian Ringgit`},{value:`idr`,label:`IDR – Indonesian Rupiah`},{value:`nzd`,label:`NZD – New Zealand Dollar`}],b=[{value:`dd_mm_yyyy_sl`,label:`DD/MM/YYYY`},{value:`mm_dd_yyyy_sl`,label:`MM/DD/YYYY`},{value:`yyyy_mm_dd`,label:`YYYY-MM-DD`},{value:`dd_mm_yyyy_hy`,label:`DD-MM-YYYY`},{value:`dd_mm_yyyy_dt`,label:`DD.MM.YYYY`},{value:`mmm_dd_yyyy`,label:`MMM DD, YYYY`},{value:`dd_mmm_yyyy`,label:`DD MMM YYYY`}],x=[{value:`12h`,label:`12-hour (1:30 PM)`},{value:`24h`,label:`24-hour (13:30)`},{value:`12h_s`,label:`12-hour with seconds (1:30:00 PM)`},{value:`24h_s`,label:`24-hour with seconds (13:30:00)`}],S=[{value:`comma_dot`,label:`1,234,567.89`},{value:`dot_comma`,label:`1.234.567,89`},{value:`space_comma`,label:`1 234 567,89`},{value:`none_dot`,label:`1234567.89`}],C={name:`Locale Information`,render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{variant:`primary`,onClick:()=>n(!0),children:`Open Modal`}),(0,h.jsxs)(p,{...e,isOpen:t,title:`Locale Information`,onClose:()=>n(!1),onCancel:()=>n(!1),onSave:()=>n(!1),footerNote:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{id:`recommend`}),(0,h.jsx)(`label`,{htmlFor:`recommend`,style:{fontSize:14,color:`#313949`,cursor:`pointer`},children:`Use recommended variant`}),(0,h.jsx)(`a`,{href:`#`,style:{fontSize:14,color:`#5464F2`,textDecoration:`none`,marginLeft:8},children:`Preview`})]}),children:[(0,h.jsx)(l,{label:`Country`,layout:`horizontal`,width:509,columns:`99px 390px`,options:_}),(0,h.jsx)(l,{label:`Language`,layout:`horizontal`,width:509,columns:`99px 390px`,options:v}),(0,h.jsx)(l,{label:`Date Format`,layout:`horizontal`,width:509,columns:`99px 390px`,options:b}),(0,h.jsx)(l,{label:`Time Format`,layout:`horizontal`,width:509,columns:`99px 390px`,options:x}),(0,h.jsx)(l,{label:`Number Format`,layout:`horizontal`,width:509,columns:`99px 390px`,options:S}),(0,h.jsx)(l,{label:`Currency`,layout:`horizontal`,width:509,columns:`99px 390px`,options:y})]})]})},args:{width:569,cancelLabel:`Cancel`,saveLabel:`Save`}},w={render:e=>{let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{variant:`primary`,onClick:()=>n(!0),children:`Open Modal`}),(0,h.jsxs)(p,{...e,isOpen:t,onClose:()=>n(!1),onCancel:()=>n(!1),onSave:()=>n(!1),children:[(0,h.jsx)(d,{label:`Full Name`,layout:`horizontal`,width:509,columns:`99px 390px`}),(0,h.jsx)(d,{label:`Email`,layout:`horizontal`,width:509,columns:`99px 390px`,type:`email`})]})]})},args:{title:`Edit Record`,width:569,cancelLabel:`Cancel`,saveLabel:`Save`}},T={name:`Wide (590px)`,render:e=>{let[t,n]=(0,m.useState)(!1),r=`120px 390px`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{variant:`primary`,onClick:()=>n(!0),children:`Open Wide Modal`}),(0,h.jsxs)(p,{...e,isOpen:t,onClose:()=>n(!1),onCancel:()=>n(!1),onSave:()=>n(!1),children:[(0,h.jsx)(d,{label:`First Name`,layout:`horizontal`,width:530,columns:r}),(0,h.jsx)(d,{label:`Last Name`,layout:`horizontal`,width:530,columns:r}),(0,h.jsx)(d,{label:`Email`,layout:`horizontal`,width:530,columns:r,type:`email`}),(0,h.jsx)(d,{label:`Phone`,layout:`horizontal`,width:530,columns:r,type:`tel`,required:!0}),(0,h.jsx)(l,{label:`Account`,layout:`horizontal`,width:530,columns:r,options:[]})]})]})},args:{title:`Add Contact`,width:590,cancelLabel:`Cancel`,saveLabel:`Create`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Locale Information',
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={open} title="Locale Information" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)} footerNote={<>
              <Checkbox id="recommend" />
              <label htmlFor="recommend" style={{
          fontSize: 14,
          color: '#313949',
          cursor: 'pointer'
        }}>
                Use recommended variant
              </label>
              <a href="#" style={{
          fontSize: 14,
          color: '#5464F2',
          textDecoration: 'none',
          marginLeft: 8
        }}>
                Preview
              </a>
            </>}>
          <Dropdown label="Country" layout="horizontal" width={509} columns="99px 390px" options={COUNTRIES} />
          <Dropdown label="Language" layout="horizontal" width={509} columns="99px 390px" options={LANGUAGES} />
          <Dropdown label="Date Format" layout="horizontal" width={509} columns="99px 390px" options={DATE_FORMATS} />
          <Dropdown label="Time Format" layout="horizontal" width={509} columns="99px 390px" options={TIME_FORMATS} />
          <Dropdown label="Number Format" layout="horizontal" width={509} columns="99px 390px" options={NUMBER_FORMATS} />
          <Dropdown label="Currency" layout="horizontal" width={509} columns="99px 390px" options={CURRENCIES} />
        </Modal>
      </>;
  },
  args: {
    width: 569,
    cancelLabel: 'Cancel',
    saveLabel: 'Save'
  }
}`,...C.parameters?.docs?.source},description:{story:`Locale Information form — matches the Figma design exactly.
Use the "Open Modal" button to trigger it.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)}>
          <Input label="Full Name" layout="horizontal" width={509} columns="99px 390px" />
          <Input label="Email" layout="horizontal" width={509} columns="99px 390px" type="email" />
        </Modal>
      </>;
  },
  args: {
    title: 'Edit Record',
    width: 569,
    cancelLabel: 'Cancel',
    saveLabel: 'Save'
  }
}`,...w.parameters?.docs?.source},description:{story:`Generic modal — minimal content to show the shell structure.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Wide (590px)',
  render: args => {
    const [open, setOpen] = useState(false);
    const W = 530;
    const COLS = '120px 390px';
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Wide Modal
        </Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)}>
          <Input label="First Name" layout="horizontal" width={W} columns={COLS} />
          <Input label="Last Name" layout="horizontal" width={W} columns={COLS} />
          <Input label="Email" layout="horizontal" width={W} columns={COLS} type="email" />
          <Input label="Phone" layout="horizontal" width={W} columns={COLS} type="tel" required />
          <Dropdown label="Account" layout="horizontal" width={W} columns={COLS} options={[]} />
        </Modal>
      </>;
  },
  args: {
    title: 'Add Contact',
    width: 590,
    cancelLabel: 'Cancel',
    saveLabel: 'Create'
  }
}`,...T.parameters?.docs?.source},description:{story:`Wide modal — 590px, 120px label + 390px input.`,...T.parameters?.docs?.description}}},E=[`LocaleInformation`,`Default`,`Wide`]}))();export{w as Default,C as LocaleInformation,T as Wide,E as __namedExportsOrder,g as default};