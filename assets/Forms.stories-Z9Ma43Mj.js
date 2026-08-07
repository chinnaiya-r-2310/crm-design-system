import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-CqNH1q5E.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{d as i,g as a}from"./Icons-CL4OXD18.js";import{n as o,t as s}from"./Button-s8QEkq83.js";import{n as c,t as l}from"./Checkbox-Cki4VoOp.js";import{n as u,t as d}from"./Dropdown-D4C-w6-C.js";import{n as f,t as p}from"./Input-CMj9YVkL.js";import{n as m,t as h}from"./DatePicker-IYFAvWFv.js";import{n as g,t as _}from"./Modal-BVOTNhNK.js";import{n as v,t as y}from"./Textarea-DjDz7jyd.js";import{n as b,t as x}from"./Tooltip-IHj1SG-v.js";var S,C,w,T=e((()=>{S=`_section_iiycu_1`,C=`_heading_iiycu_15`,w={section:S,heading:C}}));function E({title:e,children:t}){return(0,D.jsxs)(`div`,{className:w.section,children:[(0,D.jsx)(`h3`,{className:w.heading,children:e}),t]})}var D,O=e((()=>{T(),D=r(),E.__docgenInfo={description:``,methods:[],displayName:`FormSection`,props:{title:{required:!0,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),k,A,j,M,N,P,F,I,L,R;e((()=>{k=t(n(),1),g(),f(),u(),v(),c(),o(),b(),m(),O(),a(),A=r(),j=[{value:`in`,label:`India`},{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`au`,label:`Australia`},{value:`ca`,label:`Canada`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`jp`,label:`Japan`},{value:`sg`,label:`Singapore`},{value:`cn`,label:`China`},{value:`br`,label:`Brazil`},{value:`mx`,label:`Mexico`},{value:`kr`,label:`South Korea`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`nl`,label:`Netherlands`},{value:`se`,label:`Sweden`},{value:`ch`,label:`Switzerland`},{value:`ae`,label:`United Arab Emirates`},{value:`sa`,label:`Saudi Arabia`},{value:`za`,label:`South Africa`},{value:`nz`,label:`New Zealand`},{value:`hk`,label:`Hong Kong`},{value:`my`,label:`Malaysia`},{value:`id`,label:`Indonesia`}],M=[{value:`usd`,label:`USD – US Dollar`},{value:`eur`,label:`EUR – Euro`},{value:`gbp`,label:`GBP – British Pound`},{value:`inr`,label:`INR – Indian Rupee`},{value:`jpy`,label:`JPY – Japanese Yen`},{value:`cny`,label:`CNY – Chinese Yuan`},{value:`aud`,label:`AUD – Australian Dollar`},{value:`cad`,label:`CAD – Canadian Dollar`},{value:`sgd`,label:`SGD – Singapore Dollar`},{value:`chf`,label:`CHF – Swiss Franc`},{value:`sek`,label:`SEK – Swedish Krona`},{value:`brl`,label:`BRL – Brazilian Real`},{value:`mxn`,label:`MXN – Mexican Peso`},{value:`krw`,label:`KRW – South Korean Won`},{value:`aed`,label:`AED – UAE Dirham`},{value:`sar`,label:`SAR – Saudi Riyal`},{value:`hkd`,label:`HKD – Hong Kong Dollar`},{value:`myr`,label:`MYR – Malaysian Ringgit`},{value:`idr`,label:`IDR – Indonesian Rupiah`},{value:`nzd`,label:`NZD – New Zealand Dollar`}],N={title:`Design System/Patterns/Forms`,parameters:{layout:`centered`}},P={name:`Create New Employee`,render:()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(!1),a=`140px 390px`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Create New Employee`}),(0,A.jsxs)(_,{isOpen:e,title:`Create New Employee`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>t(!1),cancelLabel:`Cancel`,saveLabel:`Save`,width:610,footerNote:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(l,{id:`send-welcome`,checked:n,onChange:e=>r(e.target.checked)}),(0,A.jsx)(`label`,{htmlFor:`send-welcome`,style:{fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-base)`,fontWeight:`var(--ds-font-weight-regular)`,color:`var(--ds-text-base)`,cursor:`pointer`},children:`Send welcome email to new employee`}),(0,A.jsx)(x,{content:`Employee will receive login credentials and onboarding instructions via email.`,variant:`black`,placement:`top`,children:(0,A.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,color:`var(--ds-text-muted, #8A94A6)`,cursor:`default`,lineHeight:0},children:(0,A.jsx)(i,{})})})]}),children:[(0,A.jsx)(E,{title:`Personal Information`}),(0,A.jsx)(p,{label:`First Name`,layout:`horizontal`,width:550,columns:a,required:!0}),(0,A.jsx)(p,{label:`Last Name`,layout:`horizontal`,width:550,columns:a,required:!0}),(0,A.jsx)(p,{label:`Employee ID`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Email`,layout:`horizontal`,width:550,columns:a,type:`email`,required:!0}),(0,A.jsx)(p,{label:`Phone`,layout:`horizontal`,width:550,columns:a,type:`tel`}),(0,A.jsx)(E,{title:`Employment Details`}),(0,A.jsx)(d,{label:`Department`,layout:`horizontal`,width:550,columns:a,options:[{label:`Engineering`,value:`engineering`},{label:`Product`,value:`product`},{label:`Design`,value:`design`},{label:`Marketing`,value:`marketing`},{label:`Human Resources`,value:`hr`},{label:`Finance`,value:`finance`},{label:`Sales`,value:`sales`},{label:`Operations`,value:`operations`},{label:`Customer Support`,value:`support`},{label:`Legal & Compliance`,value:`legal`}]}),(0,A.jsx)(p,{label:`Job Title`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(h,{label:`Date of Joining`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(d,{label:`Reporting Manager`,layout:`horizontal`,width:550,columns:a,options:[{label:`Alice Johnson`,value:`alice`},{label:`Bob Chen`,value:`bob`},{label:`Carol Smith`,value:`carol`}]}),(0,A.jsx)(d,{label:`Work Location`,layout:`horizontal`,width:550,columns:a,options:[{label:`Head Office`,value:`hq`},{label:`Remote`,value:`remote`},{label:`Hybrid`,value:`hybrid`},{label:`Branch – NYC`,value:`nyc`},{label:`Branch – London`,value:`london`}]}),(0,A.jsx)(E,{title:`Additional`}),(0,A.jsx)(y,{label:`Notes`,layout:`horizontal`,width:550,columns:a})]})]})}},F={name:`Create Contact`,render:()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(!1),a=`140px 390px`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Create Contact`}),(0,A.jsxs)(_,{isOpen:e,title:`Create Contact`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>t(!1),cancelLabel:`Cancel`,saveLabel:`Save Contact`,width:610,children:[(0,A.jsxs)(E,{title:`Contact Information`,children:[(0,A.jsx)(p,{label:`First Name`,required:!0,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Last Name`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Account Name`,layout:`horizontal`,width:550,columns:a,readOnly:!0,placeholder:`Search account…`,suffix:(0,A.jsx)(x,{content:`Link this contact to an existing account`,variant:`black`,placement:`top`,children:(0,A.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,color:`var(--ds-text-label)`,cursor:`default`,lineHeight:0},children:(0,A.jsx)(i,{})})})})]}),(0,A.jsxs)(E,{title:`Contact Details`,children:[(0,A.jsx)(p,{label:`Email`,type:`email`,required:!0,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Phone`,type:`tel`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Mobile`,type:`tel`,layout:`horizontal`,width:550,columns:a}),(0,A.jsx)(p,{label:`Department`,layout:`horizontal`,width:550,columns:a})]}),(0,A.jsxs)(E,{title:`Lead & Assignment`,children:[(0,A.jsx)(d,{label:`Lead Source`,placeholder:`Select`,layout:`horizontal`,width:550,columns:a,options:[{value:`web`,label:`Web Site`},{value:`cold_call`,label:`Cold Call`},{value:`referral`,label:`Referral`},{value:`email`,label:`Email Campaign`},{value:`social`,label:`Social Media`},{value:`other`,label:`Other`}]}),(0,A.jsx)(d,{label:`Contact Owner`,placeholder:`Select`,layout:`horizontal`,width:550,columns:a,options:[{value:`chinnaiya`,label:`Chinnaiya R`},{value:`priya`,label:`Priya S`},{value:`arjun`,label:`Arjun M`}]})]}),(0,A.jsxs)(E,{title:`Additional Information`,children:[(0,A.jsx)(y,{label:`Description`,layout:`horizontal`,width:550,columns:a,placeholder:`Add Description`,minHeight:90}),(0,A.jsx)(l,{label:`Email Opt-Out`,checked:n,onChange:e=>r(e.target.checked)})]})]})]})}},I={name:`Create Vendor`,render:()=>{let[e,t]=(0,k.useState)(!1),n=`140px 390px`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Create Vendor`}),(0,A.jsxs)(_,{isOpen:e,title:`Create Vendor`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>t(!1),cancelLabel:`Cancel`,saveLabel:`Save`,width:610,children:[(0,A.jsxs)(E,{title:`Basic Information`,children:[(0,A.jsx)(p,{label:`Vendor Name`,required:!0,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(d,{label:`Vendor Owner`,layout:`horizontal`,width:550,columns:n,options:[{value:`chinnaiya`,label:`Chinnaiya R`},{value:`priya`,label:`Priya S`},{value:`arjun`,label:`Arjun M`}]}),(0,A.jsx)(d,{label:`Vendor Type`,layout:`horizontal`,width:550,columns:n,options:[{value:`supplier`,label:`Supplier`},{value:`manufacturer`,label:`Manufacturer`},{value:`distributor`,label:`Distributor`},{value:`reseller`,label:`Reseller`},{value:`consultant`,label:`Consultant`}]})]}),(0,A.jsxs)(E,{title:`Contact Details`,children:[(0,A.jsx)(p,{label:`Phone`,type:`tel`,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`Email`,type:`email`,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`Website`,type:`url`,layout:`horizontal`,width:550,columns:n,placeholder:`https://`})]}),(0,A.jsxs)(E,{title:`Address`,children:[(0,A.jsx)(p,{label:`Street`,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`City`,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`State`,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(d,{label:`Country`,layout:`horizontal`,width:550,columns:n,options:j}),(0,A.jsx)(p,{label:`Zip Code`,layout:`horizontal`,width:550,columns:n})]}),(0,A.jsxs)(E,{title:`Financial`,children:[(0,A.jsx)(d,{label:`Payment Terms`,layout:`horizontal`,width:550,columns:n,options:[{value:`net15`,label:`Net 15`},{value:`net30`,label:`Net 30`},{value:`net45`,label:`Net 45`},{value:`net60`,label:`Net 60`},{value:`cod`,label:`Cash on Delivery`},{value:`prepaid`,label:`Prepaid`}]}),(0,A.jsx)(d,{label:`Currency`,layout:`horizontal`,width:550,columns:n,options:M}),(0,A.jsx)(p,{label:`Tax ID / GST`,layout:`horizontal`,width:550,columns:n})]}),(0,A.jsx)(E,{title:`Additional`,children:(0,A.jsx)(y,{label:`Description`,layout:`horizontal`,width:550,columns:n,placeholder:`Add a description…`,minHeight:90})})]})]})}},L={name:`Create Deal`,render:()=>{let[e,t]=(0,k.useState)(!1),n=`140px 390px`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Create Deal`}),(0,A.jsxs)(_,{isOpen:e,title:`Create Deal`,onClose:()=>t(!1),onCancel:()=>t(!1),onSave:()=>t(!1),cancelLabel:`Cancel`,saveLabel:`Save Deal`,width:610,children:[(0,A.jsxs)(E,{title:`Deal Information`,children:[(0,A.jsx)(p,{label:`Deal Name`,required:!0,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`Account Name`,required:!0,layout:`horizontal`,width:550,columns:n,placeholder:`Search account…`}),(0,A.jsx)(p,{label:`Contact Name`,layout:`horizontal`,width:550,columns:n,placeholder:`Search contact…`})]}),(0,A.jsxs)(E,{title:`Sales Details`,children:[(0,A.jsx)(d,{label:`Stage`,required:!0,layout:`horizontal`,width:550,columns:n,options:[{value:`qualification`,label:`Qualification`},{value:`needs_analysis`,label:`Needs Analysis`},{value:`value_proposition`,label:`Value Proposition`},{value:`decision_makers`,label:`Id. Decision Makers`},{value:`perception`,label:`Perception Analysis`},{value:`proposal`,label:`Proposal / Price Quote`},{value:`negotiation`,label:`Negotiation / Review`},{value:`closed_won`,label:`Closed Won`},{value:`closed_lost`,label:`Closed Lost`}]}),(0,A.jsx)(p,{label:`Amount`,type:`number`,layout:`horizontal`,width:550,columns:n,placeholder:`0.00`}),(0,A.jsx)(h,{label:`Closing Date`,required:!0,layout:`horizontal`,width:550,columns:n}),(0,A.jsx)(p,{label:`Probability (%)`,type:`number`,layout:`horizontal`,width:550,columns:n,placeholder:`0`})]}),(0,A.jsxs)(E,{title:`Lead & Assignment`,children:[(0,A.jsx)(d,{label:`Lead Source`,layout:`horizontal`,width:550,columns:n,options:[{value:`web`,label:`Web Site`},{value:`cold_call`,label:`Cold Call`},{value:`referral`,label:`Referral`},{value:`email`,label:`Email Campaign`},{value:`social`,label:`Social Media`},{value:`partner`,label:`Partner`},{value:`event`,label:`Internal Event`},{value:`other`,label:`Other`}]}),(0,A.jsx)(d,{label:`Deal Owner`,layout:`horizontal`,width:550,columns:n,options:[{value:`chinnaiya`,label:`Chinnaiya R`},{value:`priya`,label:`Priya S`},{value:`arjun`,label:`Arjun M`},{value:`divya`,label:`Divya K`}]}),(0,A.jsx)(d,{label:`Deal Type`,layout:`horizontal`,width:550,columns:n,options:[{value:`new_business`,label:`New Business`},{value:`existing_business`,label:`Existing Business`}]})]}),(0,A.jsx)(E,{title:`Additional`,children:(0,A.jsx)(y,{label:`Description`,layout:`horizontal`,width:550,columns:n,placeholder:`Add a description…`,minHeight:90})})]})]})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Create New Employee',
  render: () => {
    const [open, setOpen] = useState(false);
    const [sendWelcome, setSendWelcome] = useState(false);
    const COL = '140px 390px';
    const W = 550;
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create New Employee
        </Button>
        <Modal isOpen={open} title="Create New Employee" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)} cancelLabel="Cancel" saveLabel="Save" width={610} footerNote={<>
              <Checkbox id="send-welcome" checked={sendWelcome} onChange={e => setSendWelcome(e.target.checked)} />
              <label htmlFor="send-welcome" style={{
          fontFamily: 'var(--ds-font-family-base)',
          fontSize: 'var(--ds-font-size-base)',
          fontWeight: 'var(--ds-font-weight-regular)',
          color: 'var(--ds-text-base)',
          cursor: 'pointer'
        }}>
                Send welcome email to new employee
              </label>
              <Tooltip content="Employee will receive login credentials and onboarding instructions via email." variant="black" placement="top">
                <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--ds-text-muted, #8A94A6)',
            cursor: 'default',
            lineHeight: 0
          }}>
                  <Info />
                </span>
              </Tooltip>
            </>}>
          <FormSection title="Personal Information" />
          <Input label="First Name" layout="horizontal" width={W} columns={COL} required />
          <Input label="Last Name" layout="horizontal" width={W} columns={COL} required />
          <Input label="Employee ID" layout="horizontal" width={W} columns={COL} />
          <Input label="Email" layout="horizontal" width={W} columns={COL} type="email" required />
          <Input label="Phone" layout="horizontal" width={W} columns={COL} type="tel" />

          <FormSection title="Employment Details" />
          <Dropdown label="Department" layout="horizontal" width={W} columns={COL} options={[{
          label: 'Engineering',
          value: 'engineering'
        }, {
          label: 'Product',
          value: 'product'
        }, {
          label: 'Design',
          value: 'design'
        }, {
          label: 'Marketing',
          value: 'marketing'
        }, {
          label: 'Human Resources',
          value: 'hr'
        }, {
          label: 'Finance',
          value: 'finance'
        }, {
          label: 'Sales',
          value: 'sales'
        }, {
          label: 'Operations',
          value: 'operations'
        }, {
          label: 'Customer Support',
          value: 'support'
        }, {
          label: 'Legal & Compliance',
          value: 'legal'
        }]} />
          <Input label="Job Title" layout="horizontal" width={W} columns={COL} />
          <DatePicker label="Date of Joining" layout="horizontal" width={W} columns={COL} />
          <Dropdown label="Reporting Manager" layout="horizontal" width={W} columns={COL} options={[{
          label: 'Alice Johnson',
          value: 'alice'
        }, {
          label: 'Bob Chen',
          value: 'bob'
        }, {
          label: 'Carol Smith',
          value: 'carol'
        }]} />
          <Dropdown label="Work Location" layout="horizontal" width={W} columns={COL} options={[{
          label: 'Head Office',
          value: 'hq'
        }, {
          label: 'Remote',
          value: 'remote'
        }, {
          label: 'Hybrid',
          value: 'hybrid'
        }, {
          label: 'Branch – NYC',
          value: 'nyc'
        }, {
          label: 'Branch – London',
          value: 'london'
        }]} />

          <FormSection title="Additional" />
          <Textarea label="Notes" layout="horizontal" width={W} columns={COL} />
        </Modal>
      </>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Create Contact',
  render: () => {
    const [open, setOpen] = useState(false);
    const [emailOptOut, setEmailOptOut] = useState(false);
    const W = 550;
    const COLS = '140px 390px';
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Contact
        </Button>
        <Modal isOpen={open} title="Create Contact" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)} cancelLabel="Cancel" saveLabel="Save Contact" width={610}>
          <FormSection title="Contact Information">
            <Input label="First Name" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Last Name" layout="horizontal" width={W} columns={COLS} />
            <Input label="Account Name" layout="horizontal" width={W} columns={COLS} readOnly placeholder="Search account…" suffix={<Tooltip content="Link this contact to an existing account" variant="black" placement="top">
                  <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--ds-text-label)',
              cursor: 'default',
              lineHeight: 0
            }}>
                    <Info />
                  </span>
                </Tooltip>} />
          </FormSection>

          <FormSection title="Contact Details">
            <Input label="Email" type="email" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Phone" type="tel" layout="horizontal" width={W} columns={COLS} />
            <Input label="Mobile" type="tel" layout="horizontal" width={W} columns={COLS} />
            <Input label="Department" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Lead & Assignment">
            <Dropdown label="Lead Source" placeholder="Select" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'web',
            label: 'Web Site'
          }, {
            value: 'cold_call',
            label: 'Cold Call'
          }, {
            value: 'referral',
            label: 'Referral'
          }, {
            value: 'email',
            label: 'Email Campaign'
          }, {
            value: 'social',
            label: 'Social Media'
          }, {
            value: 'other',
            label: 'Other'
          }]} />
            <Dropdown label="Contact Owner" placeholder="Select" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'chinnaiya',
            label: 'Chinnaiya R'
          }, {
            value: 'priya',
            label: 'Priya S'
          }, {
            value: 'arjun',
            label: 'Arjun M'
          }]} />
          </FormSection>

          <FormSection title="Additional Information">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add Description" minHeight={90} />
            <Checkbox label="Email Opt-Out" checked={emailOptOut} onChange={e => setEmailOptOut(e.target.checked)} />
          </FormSection>
        </Modal>
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Create Vendor',
  render: () => {
    const [open, setOpen] = useState(false);
    const W = 550;
    const COLS = '140px 390px';
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Vendor
        </Button>
        <Modal isOpen={open} title="Create Vendor" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)} cancelLabel="Cancel" saveLabel="Save" width={610}>
          <FormSection title="Basic Information">
            <Input label="Vendor Name" required layout="horizontal" width={W} columns={COLS} />
            <Dropdown label="Vendor Owner" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'chinnaiya',
            label: 'Chinnaiya R'
          }, {
            value: 'priya',
            label: 'Priya S'
          }, {
            value: 'arjun',
            label: 'Arjun M'
          }]} />
            <Dropdown label="Vendor Type" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'supplier',
            label: 'Supplier'
          }, {
            value: 'manufacturer',
            label: 'Manufacturer'
          }, {
            value: 'distributor',
            label: 'Distributor'
          }, {
            value: 'reseller',
            label: 'Reseller'
          }, {
            value: 'consultant',
            label: 'Consultant'
          }]} />
          </FormSection>

          <FormSection title="Contact Details">
            <Input label="Phone" type="tel" layout="horizontal" width={W} columns={COLS} />
            <Input label="Email" type="email" layout="horizontal" width={W} columns={COLS} />
            <Input label="Website" type="url" layout="horizontal" width={W} columns={COLS} placeholder="https://" />
          </FormSection>

          <FormSection title="Address">
            <Input label="Street" layout="horizontal" width={W} columns={COLS} />
            <Input label="City" layout="horizontal" width={W} columns={COLS} />
            <Input label="State" layout="horizontal" width={W} columns={COLS} />
            <Dropdown label="Country" layout="horizontal" width={W} columns={COLS} options={COUNTRIES} />
            <Input label="Zip Code" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Financial">
            <Dropdown label="Payment Terms" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'net15',
            label: 'Net 15'
          }, {
            value: 'net30',
            label: 'Net 30'
          }, {
            value: 'net45',
            label: 'Net 45'
          }, {
            value: 'net60',
            label: 'Net 60'
          }, {
            value: 'cod',
            label: 'Cash on Delivery'
          }, {
            value: 'prepaid',
            label: 'Prepaid'
          }]} />
            <Dropdown label="Currency" layout="horizontal" width={W} columns={COLS} options={CURRENCIES} />
            <Input label="Tax ID / GST" layout="horizontal" width={W} columns={COLS} />
          </FormSection>

          <FormSection title="Additional">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add a description…" minHeight={90} />
          </FormSection>
        </Modal>
      </>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Create Deal',
  render: () => {
    const [open, setOpen] = useState(false);
    const W = 550;
    const COLS = '140px 390px';
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Create Deal
        </Button>
        <Modal isOpen={open} title="Create Deal" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onSave={() => setOpen(false)} cancelLabel="Cancel" saveLabel="Save Deal" width={610}>
          <FormSection title="Deal Information">
            <Input label="Deal Name" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Account Name" required layout="horizontal" width={W} columns={COLS} placeholder="Search account…" />
            <Input label="Contact Name" layout="horizontal" width={W} columns={COLS} placeholder="Search contact…" />
          </FormSection>

          <FormSection title="Sales Details">
            <Dropdown label="Stage" required layout="horizontal" width={W} columns={COLS} options={[{
            value: 'qualification',
            label: 'Qualification'
          }, {
            value: 'needs_analysis',
            label: 'Needs Analysis'
          }, {
            value: 'value_proposition',
            label: 'Value Proposition'
          }, {
            value: 'decision_makers',
            label: 'Id. Decision Makers'
          }, {
            value: 'perception',
            label: 'Perception Analysis'
          }, {
            value: 'proposal',
            label: 'Proposal / Price Quote'
          }, {
            value: 'negotiation',
            label: 'Negotiation / Review'
          }, {
            value: 'closed_won',
            label: 'Closed Won'
          }, {
            value: 'closed_lost',
            label: 'Closed Lost'
          }]} />
            <Input label="Amount" type="number" layout="horizontal" width={W} columns={COLS} placeholder="0.00" />
            <DatePicker label="Closing Date" required layout="horizontal" width={W} columns={COLS} />
            <Input label="Probability (%)" type="number" layout="horizontal" width={W} columns={COLS} placeholder="0" />
          </FormSection>

          <FormSection title="Lead & Assignment">
            <Dropdown label="Lead Source" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'web',
            label: 'Web Site'
          }, {
            value: 'cold_call',
            label: 'Cold Call'
          }, {
            value: 'referral',
            label: 'Referral'
          }, {
            value: 'email',
            label: 'Email Campaign'
          }, {
            value: 'social',
            label: 'Social Media'
          }, {
            value: 'partner',
            label: 'Partner'
          }, {
            value: 'event',
            label: 'Internal Event'
          }, {
            value: 'other',
            label: 'Other'
          }]} />
            <Dropdown label="Deal Owner" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'chinnaiya',
            label: 'Chinnaiya R'
          }, {
            value: 'priya',
            label: 'Priya S'
          }, {
            value: 'arjun',
            label: 'Arjun M'
          }, {
            value: 'divya',
            label: 'Divya K'
          }]} />
            <Dropdown label="Deal Type" layout="horizontal" width={W} columns={COLS} options={[{
            value: 'new_business',
            label: 'New Business'
          }, {
            value: 'existing_business',
            label: 'Existing Business'
          }]} />
          </FormSection>

          <FormSection title="Additional">
            <Textarea label="Description" layout="horizontal" width={W} columns={COLS} placeholder="Add a description…" minHeight={90} />
          </FormSection>
        </Modal>
      </>;
  }
}`,...L.parameters?.docs?.source}}},R=[`CreateEmployee`,`CreateContact`,`CreateVendor`,`CreateDeal`]}))();export{F as CreateContact,L as CreateDeal,P as CreateEmployee,I as CreateVendor,R as __namedExportsOrder,N as default};