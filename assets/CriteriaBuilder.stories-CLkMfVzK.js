import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D1rmBOiZ.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./CriteriaBuilder-fsyUGwzO.js";import{n as o,t as s}from"./CriteriaSummary-C943GanB.js";import{n as c,t as l}from"./NestedCriteria-DUKCAFoQ.js";function u(e){switch(e){case`number`:case`currency`:case`percentage`:case`date`:return S;default:return x}}function d(e){switch(e){case`number`:case`currency`:case`percentage`:case`date`:return`eq`;case`email`:case`phone`:case`lookup`:case`picklist`:return`is`;default:return`contains`}}function f({initialRows:e,initialPattern:t}){let[n,r]=(0,p.useState)(e),[i,o]=(0,p.useState)(t);return(0,m.jsx)(`div`,{style:{width:760,padding:24,background:`#fff`},children:(0,m.jsx)(a,{rows:n,pattern:i,fieldOptions:b,getOperatorOptions:u,getDefaultOperator:d,onChange:r,onPatternChange:o})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{p=t(n(),1),i(),o(),c(),m=r(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Design System/Components/CriteriaBuilder`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Criteria Builder for constructing filter conditions. Supports text, date, and date-range (between) row types. Rows are connected by toggleable AND / OR operators. Maximum 25 criteria rows. Figma: Chinnaiya-Style-Sheet node 93656-149883.`}}},argTypes:{rows:{control:!1},pattern:{control:`text`},fieldOptions:{control:!1},operatorOptions:{control:!1},getOperatorOptions:{control:!1},getDefaultOperator:{control:!1},onChange:{control:!1},onPatternChange:{control:!1}}},b=[{value:`first_name`,label:`First Name`,fieldType:`text`},{value:`last_name`,label:`Last Name`,fieldType:`text`},{value:`company`,label:`Company`,fieldType:`text`},{value:`job_title`,label:`Job Title`,fieldType:`text`},{value:`email`,label:`Email`,fieldType:`email`},{value:`phone`,label:`Phone`,fieldType:`phone`},{value:`mobile`,label:`Mobile`,fieldType:`phone`},{value:`fax`,label:`Fax`,fieldType:`phone`},{value:`website`,label:`Website`,fieldType:`url`},{value:`lead_source`,label:`Lead Source`,fieldType:`picklist`},{value:`lead_status`,label:`Lead Status`,fieldType:`picklist`},{value:`industry`,label:`Industry`,fieldType:`picklist`},{value:`rating`,label:`Rating`,fieldType:`picklist`},{value:`country`,label:`Country`,fieldType:`picklist`},{value:`annual_revenue`,label:`Annual Revenue`,fieldType:`currency`},{value:`no_of_employees`,label:`No. of Employees`,fieldType:`number`},{value:`score`,label:`Score`,fieldType:`number`},{value:`commission_rate`,label:`Commission Rate`,fieldType:`percentage`},{value:`expected_revenue`,label:`Expected Revenue`,fieldType:`currency`},{value:`deal_value`,label:`Deal Value`,fieldType:`currency`},{value:`created_date`,label:`Created Date`,fieldType:`date`},{value:`modified_date`,label:`Modified Date`,fieldType:`date`},{value:`converted_date`,label:`Converted Date`,fieldType:`date`},{value:`lead_owner`,label:`Lead Owner`,fieldType:`lookup`},{value:`campaign_source`,label:`Campaign Source`,fieldType:`lookup`},{value:`street`,label:`Street`,fieldType:`text`},{value:`city`,label:`City`,fieldType:`text`},{value:`state`,label:`State`,fieldType:`text`},{value:`zip_code`,label:`Zip Code`,fieldType:`text`},{value:`description`,label:`Description`,fieldType:`text`}],x=[{value:`is`,label:`is`},{value:`isnt`,label:`isn't`},{value:`contains`,label:`contains`},{value:`doesnt_contain`,label:`doesn't contain`},{value:`starts_with`,label:`starts with`},{value:`ends_with`,label:`ends with`},{value:`is_empty`,label:`is empty`},{value:`is_not_empty`,label:`is not empty`}],S=[{value:`eq`,label:`=`},{value:`neq`,label:`!=`},{value:`lt`,label:`<`},{value:`lte`,label:`<=`},{value:`gt`,label:`>`},{value:`gte`,label:`>=`},{value:`between`,label:`between`},{value:`not_between`,label:`not between`},{value:`is_empty`,label:`is empty`},{value:`is_not_empty`,label:`is not empty`}],C=[{id:`r1`,field:`first_name`,operator:`contains`,value:`Saravanan Selvaraj`,type:`text`,connector:`AND`},{id:`r2`,field:`created_date`,operator:`between`,value:`22/04/2022`,valueTime:`09:00 AM`,valueTo:`23/04/2022`,valueToTime:`06:00 PM`,type:`date-range`,connector:`OR`},{id:`r3`,field:`lead_status`,operator:`is_not_empty`,value:"${NOTEMPTY}",type:`text`,connector:`AND`},{id:`r4`,field:`deal_value`,operator:`eq`,value:``,type:`text`,connector:`AND`}],w=[{id:`e1`,field:``,operator:`eq`,value:`Saravanan Selvaraj`,type:`text`,connector:`AND`,errors:{field:`Please select a field.`}},{id:`e2`,field:`created_date`,operator:`between`,value:``,valueTime:``,valueTo:`23/04/2022`,valueToTime:``,type:`date-range`,connector:`OR`,errors:{value:`Please enter a valid Date/Time.`,valueTo:`From Date should be less than or equal to To Date.`}},{id:`e3`,field:`lead_status`,operator:`is_empty`,value:"${EMPTY}",type:`text`,connector:`AND`},{id:`e4`,field:`deal_value`,operator:``,value:``,type:`text`,connector:`AND`,errors:{operator:`Please specify a condition.`}}],T=Array.from({length:25},(e,t)=>({id:`limit-${t}`,field:`first_name`,operator:`eq`,value:`Value ${t+1}`,type:`text`,connector:`AND`})),E={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(f,{initialRows:C,initialPattern:`( ( ( 1 and 2 ) or 3 ) and 4 )`})},D={name:`With Errors`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(f,{initialRows:w,initialPattern:`( ( ( 1 and 2 ) or 3 ) and 4 )`})},O={name:`Single Row`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(f,{initialRows:[{id:`s1`,field:`first_name`,operator:`eq`,value:``,type:`text`,connector:`AND`}],initialPattern:`1`})},k={name:`Date Row`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(f,{initialRows:[{id:`d1`,field:`created_date`,operator:`eq`,value:`22/04/2022`,valueTime:`12:00 PM`,type:`date`,connector:`AND`}],initialPattern:`1`})},A={name:`Limit Reached`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(f,{initialRows:T,initialPattern:`1 and 2 and 3 and 4 and 5`})},j=[{id:`s1`,field:`Contact Owner`,operator:`IS`,value:`Patricia Boyle`},{id:`s2`,field:`City`,operator:`CONTAINS`,value:`Chennai, Pune, Bengaluru`},{id:`s3`,field:`Lead Status`,operator:`IS`,value:"${EMPTY}"}],M=[{id:`n1`,module:`Accounts`,relation:`WITH`,relatedModule:`Deals`,pattern:`(1 and 2)`,criteria:[{id:`n1a`,field:`Amount`,operator:`IS GREATER THAN`,value:`$1000`},{id:`n1b`,field:`Contact Owner`,operator:`IS`,value:`Hongkong Bank Corporation`}]},{id:`n2`,module:`Accounts`,relation:`WITHOUT`,relatedModule:`Vendors`,pattern:`(1 and 2)`,criteria:[{id:`n2a`,field:`Offer value`,operator:`IS`,value:`$1000`},{id:`n2b`,field:`City`,operator:`CONTAINS`,value:`Chennai, Bengaluru, Kochi`}]}],N=[{title:`Primary Module`,pattern:`(1 and 2)`,rows:[{id:`p1`,module:`Accounts`,field:`Contact Owner`,operator:`IS`,value:`Patricia Boyle`},{id:`p2`,module:`Accounts`,field:`Billing City`,operator:`IS`,valueModule:`Vendors`,value:`Billing City`}]},{title:`Related Module`,pattern:`(1 and 2)`,rows:M}],P={display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:60,padding:24,background:`#fff`},F={margin:`0 0 12px`,fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`},I={name:`Criteria Summary · Standard`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{style:P,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:F,children:`Card · hover for Edit / Delete`}),(0,m.jsx)(s,{variant:`standard`,rows:j,pattern:`(1 and 2)`,onEdit:()=>{},onDelete:()=>{}})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:F,children:`Plain`}),(0,m.jsx)(s,{variant:`standard`,appearance:`plain`,rows:j,pattern:`(1 and 2)`})]})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getAllByText(`Contact Owner`)).toHaveLength(2),await h(t.getAllByText(`EMPTY`)).toHaveLength(2),await h(t.getAllByText(`Criteria Pattern`)).toHaveLength(2),await h(t.getAllByRole(`button`,{name:`Edit criteria`})).toHaveLength(1)}},L={name:`Criteria Summary · Nested Criteria`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{style:P,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:F,children:`Card · hover for Edit / Delete`}),(0,m.jsx)(s,{variant:`nested`,rows:M,pattern:`(1 and 2)`,onEdit:()=>{},onDelete:()=>{}})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:F,children:`Plain`}),(0,m.jsx)(s,{variant:`nested`,appearance:`plain`,rows:M,pattern:`(1 and 2)`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:F,children:`Outline · Primary and Related Module`}),(0,m.jsx)(s,{variant:`nested`,appearance:`outline`,sections:N})]})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getAllByText(`WITHOUT`)).toHaveLength(3),await h(t.getByText(`Primary Module`)).toBeVisible(),await h(t.getByRole(`separator`)).toHaveTextContent(`AND`);let n=t.getByRole(`button`,{name:`Delete criteria`});n.focus(),await _(()=>h(getComputedStyle(n.closest(`.criteria-summary__actions`)).opacity).toBe(`1`))}},R=[{value:`contacts`,label:`Contact`},{value:`accounts`,label:`Account`}],z=[{value:`with`,label:`with`},{value:`without`,label:`without`}],B=[{value:`accounts`,label:`Accounts`},{value:`deals`,label:`Deals`},{value:`tasks`,label:`Tasks`},{value:`calls`,label:`Calls`}],V={name:`Nested Criteria`,parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{style:{width:1020,padding:24,background:`#fff`},children:(0,m.jsx)(l,{moduleLabel:`Contact`,moduleOptions:R,relatedConditions:z,relatedModules:B,fieldOptions:b,getOperatorOptions:u,getDefaultOperator:d})}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByText(`Specify Criteria`)).toBeVisible(),await h(t.getByText(`It helps to filter record based on related module values.`)).toBeVisible(),await g.click(t.getByRole(`switch`,{name:`Enable Related Modules Criteria`})),await h(t.getByRole(`checkbox`,{name:`Specify Criteria`})).toBeDisabled(),await g.click(t.getByRole(`button`,{name:`Add Condition`}));let n=t.getByRole(`button`,{name:/Toggle related connector 1/});await h(n).toHaveTextContent(`AND`),await g.click(n),await h(t.getByRole(`button`,{name:/Toggle related connector 1/})).toHaveTextContent(`OR`),await h(t.getAllByRole(`button`,{name:/Remove related module/})).toHaveLength(2)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={DEFAULT_ROWS} initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )" />
}`,...E.parameters?.docs?.source},description:{story:`Default state — four criteria rows including a date-range row.
 Selecting a number / currency / percentage field auto-sets the operator to "=".
 Toggling AND / OR regenerates the Criteria Pattern.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Errors',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={ERROR_ROWS} initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )" />
}`,...D.parameters?.docs?.source},description:{story:`Error state — field-level validation messages visible on multiple rows.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Single Row',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={[{
    id: 's1',
    field: 'first_name',
    operator: 'eq',
    value: '',
    type: 'text',
    connector: 'AND'
  }]} initialPattern="1" />
}`,...O.parameters?.docs?.source},description:{story:`Single row — remove button hidden; Criteria Pattern not yet shown.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Date Row',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={[{
    id: 'd1',
    field: 'created_date',
    operator: 'eq',
    value: '22/04/2022',
    valueTime: '12:00 PM',
    type: 'date',
    connector: 'AND'
  }]} initialPattern="1" />
}`,...k.parameters?.docs?.source},description:{story:`Date row — single date + time field using the DateTimeInput component.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Limit Reached',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={LIMIT_ROWS} initialPattern="1 and 2 and 3 and 4 and 5" />
}`,...A.parameters?.docs?.source},description:{story:`Limit reached — 25 rows filled; clicking + shows the info toast.`,...A.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Criteria Summary · Standard',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={summaryCanvas}>
      <div>
        <p style={summaryCaption}>Card · hover for Edit / Delete</p>
        <CriteriaSummary variant="standard" rows={SUMMARY_STANDARD_ROWS} pattern="(1 and 2)" onEdit={() => {}} onDelete={() => {}} />
      </div>
      <div>
        <p style={summaryCaption}>Plain</p>
        <CriteriaSummary variant="standard" appearance="plain" rows={SUMMARY_STANDARD_ROWS} pattern="(1 and 2)" />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText('Contact Owner')).toHaveLength(2);
    await expect(canvas.getAllByText('EMPTY')).toHaveLength(2);
    await expect(canvas.getAllByText('Criteria Pattern')).toHaveLength(2);
    await expect(canvas.getAllByRole('button', {
      name: 'Edit criteria'
    })).toHaveLength(1);
  }
}`,...I.parameters?.docs?.source},description:{story:`Criteria Summary · Standard — numbered "Field OPERATOR Value" rows and the
 Criteria Pattern. Shown as a card (with hover Edit / Delete) and plain.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Criteria Summary · Nested Criteria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={summaryCanvas}>
      <div>
        <p style={summaryCaption}>Card · hover for Edit / Delete</p>
        <CriteriaSummary variant="nested" rows={SUMMARY_RELATION_ROWS} pattern="(1 and 2)" onEdit={() => {}} onDelete={() => {}} />
      </div>
      <div>
        <p style={summaryCaption}>Plain</p>
        <CriteriaSummary variant="nested" appearance="plain" rows={SUMMARY_RELATION_ROWS} pattern="(1 and 2)" />
      </div>
      <div>
        <p style={summaryCaption}>Outline · Primary and Related Module</p>
        <CriteriaSummary variant="nested" appearance="outline" sections={SUMMARY_SECTIONS} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText('WITHOUT')).toHaveLength(3);
    await expect(canvas.getByText('Primary Module')).toBeVisible();
    await expect(canvas.getByRole('separator')).toHaveTextContent('AND');
    const del = canvas.getByRole('button', {
      name: 'Delete criteria'
    });
    // Keyboard focus reveals the pill (:focus-within), same as mouse hover.
    del.focus();
    await waitFor(() => expect(getComputedStyle(del.closest('.criteria-summary__actions') as HTMLElement).opacity).toBe('1'));
  }
}`,...L.parameters?.docs?.source},description:{story:`Criteria Summary · Nested Criteria — module relations ("Accounts WITH Deals")
 each holding their own numbered criteria and pattern under a guide line.
 Also shown with Primary / Related Module sections joined by AND.`,...L.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Nested Criteria',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 1020,
    padding: 24,
    background: '#fff'
  }}>
      <NestedCriteria moduleLabel="Contact" moduleOptions={NESTED_MODULE_OPTIONS} relatedConditions={NESTED_RELATED_CONDITIONS} relatedModules={NESTED_RELATED_MODULES} fieldOptions={FIELD_OPTIONS} getOperatorOptions={getOperatorOptions} getDefaultOperator={getDefaultOperator} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Specify Criteria')).toBeVisible();
    await expect(canvas.getByText('It helps to filter record based on related module values.')).toBeVisible();
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Enable Related Modules Criteria'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Specify Criteria'
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add Condition'
    }));
    const toggle = canvas.getByRole('button', {
      name: /Toggle related connector 1/
    });
    await expect(toggle).toHaveTextContent('AND');
    await userEvent.click(toggle);
    await expect(canvas.getByRole('button', {
      name: /Toggle related connector 1/
    })).toHaveTextContent('OR');
    await expect(canvas.getAllByRole('button', {
      name: /Remove related module/
    })).toHaveLength(2);
  }
}`,...V.parameters?.docs?.source},description:{story:`Nested Criteria — Specify Criteria (with module picker), AND, then
 Related Modules Criteria (switch off by default; with / without + module,
 "Specify Criteria - <Module>" checkbox, AND / OR between rows, Add Condition).`,...V.parameters?.docs?.description}}},H=[`Default`,`WithErrors`,`SingleRow`,`DateRow`,`LimitReached`,`CriteriaSummaryStandard`,`CriteriaSummaryNested`,`NestedCriteriaStory`]}))();export{L as CriteriaSummaryNested,I as CriteriaSummaryStandard,k as DateRow,E as Default,A as LimitReached,V as NestedCriteriaStory,O as SingleRow,D as WithErrors,H as __namedExportsOrder,y as default};