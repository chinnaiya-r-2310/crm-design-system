import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BXfCIBSi.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{Yt as i,g as a}from"./Icons-WnOgL0_f.js";import{r as o,t as s}from"./Button-cjF5fQi7.js";import{n as c,t as ee}from"./Checkbox-C6dxg7E6.js";import{i as l,n as u,r as d,t as f}from"./CriteriaSummary-BRbLl0A2.js";import{n as p,t as m}from"./Dropdown-CRzACHRx.js";import{n as h,t as g}from"./Switch-DYPXYh-z.js";var _=e((()=>{}));function te({builderProps:e,idPrefix:t,module:n,moduleOptions:r,valueWidth:i}){let[a,o]=(0,b.useState)(()=>[C(`${t}-1`,n)]),[s,c]=(0,b.useState)(`1`);return(0,y.jsx)(d,{...e,rows:a,pattern:s,onChange:o,onPatternChange:c,moduleOptions:r,valueWidth:i})}function ne({title:e,offText:t,enabled:n=!0,onToggle:r,children:i}){return(0,y.jsxs)(`section`,{className:`nested-criteria__card`,"aria-label":e,children:[(0,y.jsxs)(`div`,{className:`nested-criteria__card-title`,children:[(0,y.jsx)(`h4`,{children:e}),r&&(0,y.jsx)(g,{"aria-label":`Enable ${e}`,checked:n,onChange:e=>r(e.target.checked)})]}),n?i:(0,y.jsx)(`p`,{className:`nested-criteria__card-off`,children:t})]})}function re({row:e,index:t,isLast:n,moduleLabel:r,conditions:i,modules:o,builderProps:s,onChange:c,onRemove:l}){let u=o.find(t=>t.value===e.module)?.label??``;return(0,y.jsxs)(`div`,{className:`nested-criteria__related`,"data-last":n||void 0,children:[(0,y.jsxs)(`div`,{className:`nested-criteria__related-line`,children:[(0,y.jsx)(`span`,{className:`nested-criteria__circle`,children:t+1}),(0,y.jsx)(`span`,{className:`nested-criteria__related-module`,children:r}),(0,y.jsx)(m,{layout:`vertical`,width:150,triggerAriaLabel:`Related condition ${t+1}`,options:i,placeholder:`Select`,value:e.condition,onChange:t=>c({...e,condition:t})}),(0,y.jsx)(m,{layout:`vertical`,width:150,triggerAriaLabel:`Related module ${t+1}`,options:o,placeholder:`Select Module`,value:e.module,onChange:t=>c({...e,module:t})}),l&&(0,y.jsx)(`button`,{type:`button`,className:`nested-criteria__related-remove`,"aria-label":`Remove related module ${t+1}`,onClick:l,children:(0,y.jsx)(a,{})})]}),(0,y.jsxs)(`div`,{className:`nested-criteria__related-body`,children:[(0,y.jsx)(ee,{label:u?`Specify Criteria - ${u}`:`Specify Criteria`,checked:!!e.module&&e.specify,disabled:!e.module,onChange:t=>c({...e,specify:t.target.checked})}),e.module&&e.specify&&(0,y.jsx)(`div`,{className:`nested-criteria__nested`,children:(0,y.jsx)(te,{builderProps:s,idPrefix:`${e.id}-sub`},e.module)})]})]})}function v({moduleLabel:e,moduleOptions:t=[],relatedConditions:n=[],relatedModules:r=[],fieldOptions:i=[],operatorOptions:a,getOperatorOptions:o,getDefaultOperator:c,placeholder:ee=`Select`,fieldPlaceholder:l=`Select Field`,valueWidth:u=360,specifyTitle:d=`Specify Criteria`,relatedTitle:f=`Related Modules Criteria`,relatedOffText:p=`It helps to filter record based on related module values.`,defaultRelatedOn:m=!1,className:h=``}){let[g,_]=(0,b.useState)(m),[v,x]=(0,b.useState)(()=>[w(`related-1`)]),C=e=>x(t=>t.map(t=>t.id===e.id?e:t)),T=e=>x(t=>t.filter(t=>t.id!==e)),E={fieldOptions:i,operatorOptions:a,getOperatorOptions:o,getDefaultOperator:c,placeholder:ee,fieldPlaceholder:l};return(0,y.jsxs)(`div`,{className:`nested-criteria ${h}`.trim(),children:[(0,y.jsx)(ne,{title:d,children:(0,y.jsx)(te,{builderProps:E,idPrefix:`primary`,module:t[0]?.value,moduleOptions:t.length?t:void 0,valueWidth:u})}),(0,y.jsx)(`div`,{className:`nested-criteria__and`,"aria-hidden":`true`,children:(0,y.jsx)(`span`,{children:`AND`})}),(0,y.jsxs)(ne,{title:f,offText:p,enabled:g,onToggle:_,children:[(0,y.jsx)(`div`,{className:`nested-criteria__related-list`,children:v.map((t,i)=>(0,y.jsxs)(b.Fragment,{children:[(0,y.jsx)(re,{row:t,index:i,isLast:i===v.length-1,moduleLabel:e,conditions:n,modules:r,builderProps:E,onChange:C,onRemove:v.length>1?()=>T(t.id):void 0}),i<v.length-1&&(0,y.jsx)(`div`,{className:`nested-criteria__related-conn`,children:(0,y.jsx)(`button`,{type:`button`,"aria-label":`Toggle related connector ${i+1}, currently ${t.connector}`,onClick:()=>C({...t,connector:t.connector===`AND`?`OR`:`AND`}),children:t.connector})})]},t.id))}),(0,y.jsx)(`div`,{className:`nested-criteria__add-condition`,children:(0,y.jsx)(s,{variant:`outline-blue`,size:`sm`,onClick:()=>x(e=>[...e,w(S(`related`))]),children:`Add Condition`})})]})]})}var y,b,x,S,C,w,T=e((()=>{y=r(),b=t(n(),1),_(),l(),o(),c(),p(),h(),i(),x=0,S=e=>`${e}-${Date.now()}-${x+=1}`,C=(e,t)=>({id:e,field:``,operator:``,value:``,type:`text`,connector:`AND`,...t?{module:t}:{}}),w=e=>({id:e,condition:``,module:``,specify:!1,connector:`AND`}),v.__docgenInfo={description:``,methods:[],displayName:`NestedCriteria`,props:{moduleOptions:{defaultValue:{value:`[]`,computed:!1},required:!1},relatedConditions:{defaultValue:{value:`[]`,computed:!1},required:!1},relatedModules:{defaultValue:{value:`[]`,computed:!1},required:!1},fieldOptions:{defaultValue:{value:`[]`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'Select'`,computed:!1},required:!1},fieldPlaceholder:{defaultValue:{value:`'Select Field'`,computed:!1},required:!1},valueWidth:{defaultValue:{value:`360`,computed:!1},required:!1},specifyTitle:{defaultValue:{value:`'Specify Criteria'`,computed:!1},required:!1},relatedTitle:{defaultValue:{value:`'Related Modules Criteria'`,computed:!1},required:!1},relatedOffText:{defaultValue:{value:`'It helps to filter record based on related module values.'`,computed:!1},required:!1},defaultRelatedOn:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}}));function E(e){switch(e){case`number`:case`currency`:case`percentage`:case`date`:return L;default:return I}}function ie(e){switch(e){case`number`:case`currency`:case`percentage`:case`date`:return`eq`;case`email`:case`phone`:case`lookup`:case`picklist`:return`is`;default:return`contains`}}function D({initialRows:e,initialPattern:t}){let[n,r]=(0,O.useState)(e),[i,a]=(0,O.useState)(t);return(0,k.jsx)(`div`,{style:{width:760,padding:24,background:`#fff`},children:(0,k.jsx)(d,{rows:n,pattern:i,fieldOptions:F,getOperatorOptions:E,getDefaultOperator:ie,onChange:r,onPatternChange:a})})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ae,oe,se,$,ce;e((()=>{O=t(n(),1),l(),u(),T(),k=r(),{expect:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Design System/Components/CriteriaBuilder`,component:d,parameters:{layout:`padded`,docs:{description:{component:`Criteria Builder for constructing filter conditions. Supports text, date, and date-range (between) row types. Rows are connected by toggleable AND / OR operators. Maximum 25 criteria rows. Figma: Chinnaiya-Style-Sheet node 93656-149883.`}}},argTypes:{rows:{control:!1},pattern:{control:`text`},fieldOptions:{control:!1},operatorOptions:{control:!1},getOperatorOptions:{control:!1},getDefaultOperator:{control:!1},onChange:{control:!1},onPatternChange:{control:!1}}},F=[{value:`first_name`,label:`First Name`,fieldType:`text`},{value:`last_name`,label:`Last Name`,fieldType:`text`},{value:`company`,label:`Company`,fieldType:`text`},{value:`job_title`,label:`Job Title`,fieldType:`text`},{value:`email`,label:`Email`,fieldType:`email`},{value:`phone`,label:`Phone`,fieldType:`phone`},{value:`mobile`,label:`Mobile`,fieldType:`phone`},{value:`fax`,label:`Fax`,fieldType:`phone`},{value:`website`,label:`Website`,fieldType:`url`},{value:`lead_source`,label:`Lead Source`,fieldType:`picklist`},{value:`lead_status`,label:`Lead Status`,fieldType:`picklist`},{value:`industry`,label:`Industry`,fieldType:`picklist`},{value:`rating`,label:`Rating`,fieldType:`picklist`},{value:`country`,label:`Country`,fieldType:`picklist`},{value:`annual_revenue`,label:`Annual Revenue`,fieldType:`currency`},{value:`no_of_employees`,label:`No. of Employees`,fieldType:`number`},{value:`score`,label:`Score`,fieldType:`number`},{value:`commission_rate`,label:`Commission Rate`,fieldType:`percentage`},{value:`expected_revenue`,label:`Expected Revenue`,fieldType:`currency`},{value:`deal_value`,label:`Deal Value`,fieldType:`currency`},{value:`created_date`,label:`Created Date`,fieldType:`date`},{value:`modified_date`,label:`Modified Date`,fieldType:`date`},{value:`converted_date`,label:`Converted Date`,fieldType:`date`},{value:`lead_owner`,label:`Lead Owner`,fieldType:`lookup`},{value:`campaign_source`,label:`Campaign Source`,fieldType:`lookup`},{value:`street`,label:`Street`,fieldType:`text`},{value:`city`,label:`City`,fieldType:`text`},{value:`state`,label:`State`,fieldType:`text`},{value:`zip_code`,label:`Zip Code`,fieldType:`text`},{value:`description`,label:`Description`,fieldType:`text`}],I=[{value:`is`,label:`is`},{value:`isnt`,label:`isn't`},{value:`contains`,label:`contains`},{value:`doesnt_contain`,label:`doesn't contain`},{value:`starts_with`,label:`starts with`},{value:`ends_with`,label:`ends with`},{value:`is_empty`,label:`is empty`},{value:`is_not_empty`,label:`is not empty`}],L=[{value:`eq`,label:`=`},{value:`neq`,label:`!=`},{value:`lt`,label:`<`},{value:`lte`,label:`<=`},{value:`gt`,label:`>`},{value:`gte`,label:`>=`},{value:`between`,label:`between`},{value:`not_between`,label:`not between`},{value:`is_empty`,label:`is empty`},{value:`is_not_empty`,label:`is not empty`}],R=[{id:`r1`,field:`first_name`,operator:`contains`,value:`Saravanan Selvaraj`,type:`text`,connector:`AND`},{id:`r2`,field:`created_date`,operator:`between`,value:`22/04/2022`,valueTime:`09:00 AM`,valueTo:`23/04/2022`,valueToTime:`06:00 PM`,type:`date-range`,connector:`OR`},{id:`r3`,field:`lead_status`,operator:`is_not_empty`,value:"${NOTEMPTY}",type:`text`,connector:`AND`},{id:`r4`,field:`deal_value`,operator:`eq`,value:``,type:`text`,connector:`AND`}],z=[{id:`e1`,field:``,operator:`eq`,value:`Saravanan Selvaraj`,type:`text`,connector:`AND`,errors:{field:`Please select a field.`}},{id:`e2`,field:`created_date`,operator:`between`,value:``,valueTime:``,valueTo:`23/04/2022`,valueToTime:``,type:`date-range`,connector:`OR`,errors:{value:`Please enter a valid Date/Time.`,valueTo:`From Date should be less than or equal to To Date.`}},{id:`e3`,field:`lead_status`,operator:`is_empty`,value:"${EMPTY}",type:`text`,connector:`AND`},{id:`e4`,field:`deal_value`,operator:``,value:``,type:`text`,connector:`AND`,errors:{operator:`Please specify a condition.`}}],B=Array.from({length:25},(e,t)=>({id:`limit-${t}`,field:`first_name`,operator:`eq`,value:`Value ${t+1}`,type:`text`,connector:`AND`})),V={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(D,{initialRows:R,initialPattern:`( ( ( 1 and 2 ) or 3 ) and 4 )`})},H={name:`With Errors`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(D,{initialRows:z,initialPattern:`( ( ( 1 and 2 ) or 3 ) and 4 )`})},U={name:`Single Row`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(D,{initialRows:[{id:`s1`,field:`first_name`,operator:`eq`,value:``,type:`text`,connector:`AND`}],initialPattern:`1`})},W={name:`Date Row`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(D,{initialRows:[{id:`d1`,field:`created_date`,operator:`eq`,value:`22/04/2022`,valueTime:`12:00 PM`,type:`date`,connector:`AND`}],initialPattern:`1`})},G={name:`Limit Reached`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(D,{initialRows:B,initialPattern:`1 and 2 and 3 and 4 and 5`})},K=[{id:`s1`,field:`Contact Owner`,operator:`IS`,value:`Patricia Boyle`},{id:`s2`,field:`City`,operator:`CONTAINS`,value:`Chennai, Pune, Bengaluru`},{id:`s3`,field:`Lead Status`,operator:`IS`,value:"${EMPTY}"}],q=[{id:`n1`,module:`Accounts`,relation:`WITH`,relatedModule:`Deals`,pattern:`(1 and 2)`,criteria:[{id:`n1a`,field:`Amount`,operator:`IS GREATER THAN`,value:`$1000`},{id:`n1b`,field:`Contact Owner`,operator:`IS`,value:`Hongkong Bank Corporation`}]},{id:`n2`,module:`Accounts`,relation:`WITHOUT`,relatedModule:`Vendors`,pattern:`(1 and 2)`,criteria:[{id:`n2a`,field:`Offer value`,operator:`IS`,value:`$1000`},{id:`n2b`,field:`City`,operator:`CONTAINS`,value:`Chennai, Bengaluru, Kochi`}]}],J=[{title:`Primary Module`,pattern:`(1 and 2)`,rows:[{id:`p1`,module:`Accounts`,field:`Contact Owner`,operator:`IS`,value:`Patricia Boyle`},{id:`p2`,module:`Accounts`,field:`Billing City`,operator:`IS`,valueModule:`Vendors`,value:`Billing City`}]},{title:`Related Module`,pattern:`(1 and 2)`,rows:q}],Y={display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:60,padding:24,background:`#fff`},X={margin:`0 0 12px`,fontFamily:`var(--ds-font-family-base)`,fontSize:12,color:`#616E88`},Z={name:`Criteria Summary · Standard`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsxs)(`div`,{style:Y,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:X,children:`Card · hover for Edit / Delete`}),(0,k.jsx)(f,{variant:`standard`,rows:K,pattern:`(1 and 2)`,onEdit:()=>{},onDelete:()=>{}})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:X,children:`Plain`}),(0,k.jsx)(f,{variant:`standard`,appearance:`plain`,rows:K,pattern:`(1 and 2)`})]})]}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getAllByText(`Contact Owner`)).toHaveLength(2),await A(t.getAllByText(`EMPTY`)).toHaveLength(2),await A(t.getAllByText(`Criteria Pattern`)).toHaveLength(2),await A(t.getAllByRole(`button`,{name:`Edit criteria`})).toHaveLength(1)}},Q={name:`Criteria Summary · Nested Criteria`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsxs)(`div`,{style:Y,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:X,children:`Card · hover for Edit / Delete`}),(0,k.jsx)(f,{variant:`nested`,rows:q,pattern:`(1 and 2)`,onEdit:()=>{},onDelete:()=>{}})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:X,children:`Plain`}),(0,k.jsx)(f,{variant:`nested`,appearance:`plain`,rows:q,pattern:`(1 and 2)`})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`p`,{style:X,children:`Outline · Primary and Related Module`}),(0,k.jsx)(f,{variant:`nested`,appearance:`outline`,sections:J})]})]}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getAllByText(`WITHOUT`)).toHaveLength(3),await A(t.getByText(`Primary Module`)).toBeVisible(),await A(t.getByRole(`separator`)).toHaveTextContent(`AND`);let n=t.getByRole(`button`,{name:`Delete criteria`});n.focus(),await M(()=>A(getComputedStyle(n.closest(`.criteria-summary__actions`)).opacity).toBe(`1`))}},ae=[{value:`contacts`,label:`Contact`},{value:`accounts`,label:`Account`}],oe=[{value:`with`,label:`with`},{value:`without`,label:`without`}],se=[{value:`accounts`,label:`Accounts`},{value:`deals`,label:`Deals`},{value:`tasks`,label:`Tasks`},{value:`calls`,label:`Calls`}],$={name:`Nested Criteria`,parameters:{controls:{disable:!0}},render:()=>(0,k.jsx)(`div`,{style:{width:1020,padding:24,background:`#fff`},children:(0,k.jsx)(v,{moduleLabel:`Contact`,moduleOptions:ae,relatedConditions:oe,relatedModules:se,fieldOptions:F,getOperatorOptions:E,getDefaultOperator:ie})}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getByText(`Specify Criteria`)).toBeVisible(),await A(t.getByText(`It helps to filter record based on related module values.`)).toBeVisible(),await j.click(t.getByRole(`switch`,{name:`Enable Related Modules Criteria`})),await A(t.getByRole(`checkbox`,{name:`Specify Criteria`})).toBeDisabled(),await j.click(t.getByRole(`button`,{name:`Add Condition`}));let n=t.getByRole(`button`,{name:/Toggle related connector 1/});await A(n).toHaveTextContent(`AND`),await j.click(n),await A(t.getByRole(`button`,{name:/Toggle related connector 1/})).toHaveTextContent(`OR`),await A(t.getAllByRole(`button`,{name:/Remove related module/})).toHaveLength(2)}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={DEFAULT_ROWS} initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )" />
}`,...V.parameters?.docs?.source},description:{story:`Default state — four criteria rows including a date-range row.
 Selecting a number / currency / percentage field auto-sets the operator to "=".
 Toggling AND / OR regenerates the Criteria Pattern.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With Errors',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={ERROR_ROWS} initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )" />
}`,...H.parameters?.docs?.source},description:{story:`Error state — field-level validation messages visible on multiple rows.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Single row — remove button hidden; Criteria Pattern not yet shown.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Date row — single date + time field using the DateTimeInput component.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Limit Reached',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive initialRows={LIMIT_ROWS} initialPattern="1 and 2 and 3 and 4 and 5" />
}`,...G.parameters?.docs?.source},description:{story:`Limit reached — 25 rows filled; clicking + shows the info toast.`,...G.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Criteria Summary · Standard — numbered "Field OPERATOR Value" rows and the
 Criteria Pattern. Shown as a card (with hover Edit / Delete) and plain.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Criteria Summary · Nested Criteria — module relations ("Accounts WITH Deals")
 each holding their own numbered criteria and pattern under a guide line.
 Also shown with Primary / Related Module sections joined by AND.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Nested Criteria — Specify Criteria (with module picker), AND, then
 Related Modules Criteria (switch off by default; with / without + module,
 "Specify Criteria - <Module>" checkbox, AND / OR between rows, Add Condition).`,...$.parameters?.docs?.description}}},ce=[`Default`,`WithErrors`,`SingleRow`,`DateRow`,`LimitReached`,`CriteriaSummaryStandard`,`CriteriaSummaryNested`,`NestedCriteriaStory`]}))();export{Q as CriteriaSummaryNested,Z as CriteriaSummaryStandard,W as DateRow,V as Default,G as LimitReached,$ as NestedCriteriaStory,U as SingleRow,H as WithErrors,ce as __namedExportsOrder,P as default};