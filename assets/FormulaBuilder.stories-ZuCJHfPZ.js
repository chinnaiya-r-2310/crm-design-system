import{i as e}from"./preload-helper-BTXe9M7S.js";import{n as t,t as n}from"./FormulaBuilder-DlimCwMv.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{t(),{expect:r,fn:i,userEvent:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Design System/Components/FormulaBuilder`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Formula editor for summary fields in Zoho CRM reports. Left panel lists functions and fields (search, collapsible groups, Insert per item). Right panel has an operator bar, a formula editor, return type and decimal place options, and an errors area. Done runs the syntax check and only calls onDone when the formula is valid. Figma: Pascal Stone node 78865-73145 ("New Summary Formula").`}}},argTypes:{defaultReturnType:{control:`select`,options:[`Decimal`,`Number`,`Currency`,`Percent`]},defaultDecimalPlaces:{control:`select`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`]}},args:{title:`New Summary Formula`,functions:[{name:`Date Time function`,items:[{id:`today`,label:`TODAY()`,insert:`TODAY()`,description:`Returns the current date.`},{id:`now`,label:`NOW()`,insert:`NOW()`,description:`Returns the current date and time.`},{id:`datediff`,label:`DATEDIFF()`,insert:`DATEDIFF(start, end)`,description:`Days between two dates.`},{id:`year`,label:`YEAR()`,insert:`YEAR(date)`,description:`Year part of a date.`}]},{name:`Math function`,items:[{id:`round`,label:`ROUND()`,insert:`ROUND(value, places)`,description:`Rounds to the given decimal places.`},{id:`abs`,label:`ABS()`,insert:`ABS(value)`,description:`Absolute value.`},{id:`max`,label:`MAX()`,insert:`MAX(a, b)`,description:`Larger of two values.`},{id:`min`,label:`MIN()`,insert:`MIN(a, b)`,description:`Smaller of two values.`}]}],fields:[{name:`Report Group Fields`,items:[{id:`year`,label:`Year`,fieldType:`number`}]},{name:`Leads`,items:[{id:`lead-owner`,label:`Lead Owner`,fieldType:`user`},{id:`company`,label:`Company`,fieldType:`text`},{id:`first-name`,label:`First Name`,fieldType:`text`},{id:`last-name`,label:`Last Name`,fieldType:`text`},{id:`title`,label:`Title`,fieldType:`text`},{id:`email`,label:`Email`,fieldType:`email`},{id:`phone`,label:`Phone`,fieldType:`phone`},{id:`mobile`,label:`Mobile`,fieldType:`phone`},{id:`lead-source`,label:`Lead Source`,fieldType:`picklist`},{id:`lead-status`,label:`Lead Status`,fieldType:`picklist`},{id:`industry`,label:`Industry`,fieldType:`picklist`},{id:`no-of-employees`,label:`No of Employees`,fieldType:`number`},{id:`annual-revenue`,label:`Annual Revenue`,fieldType:`currency`},{id:`rating`,label:`Rating`,fieldType:`picklist`},{id:`created-by`,label:`Created By`,fieldType:`user`},{id:`modified-by`,label:`Modified By`,fieldType:`user`},{id:`city`,label:`City`,fieldType:`text`},{id:`country`,label:`Country`,fieldType:`text`}]}],onCancel:i(),onDone:i(),onCheckSyntax:i()}},c={play:async({canvasElement:e})=>{let t=o(e),n=e.querySelectorAll(`.fb-item`);await r(n.length).toBe(19);for(let e of n)await r(e.querySelector(`.fb-field-icon`)).toBeInTheDocument();await a.type(t.getByRole(`textbox`,{name:`Search fields`}),`Annual Revenue`),await r(t.getByText(`Annual Revenue`,{exact:!0})).toBeVisible(),await a.click(t.getByRole(`button`,{name:`Insert Annual Revenue`})),await r(t.getByRole(`textbox`,{name:`Formula`,exact:!0})).toHaveValue(`Annual Revenue`)}},l={args:{variant:`modal`},play:async({canvasElement:e,args:t})=>{let n=await o(e.ownerDocument.body).findByRole(`dialog`,{name:`New Summary Formula`});await Promise.all(n.getAnimations().map(e=>e.finished)),await r(n).toBeVisible(),await r(n.querySelectorAll(`h2`)).toHaveLength(1),await r(n.querySelector(`.fb-field-icon`)).toBeInTheDocument(),await a.click(o(n).getByRole(`button`,{name:`Cancel`,exact:!0})),await r(t.onCancel).toHaveBeenCalled()}},u={args:{defaultTab:`functions`}},d={args:{defaultFormula:`ROUND(Annual Revenue / No of Employees, 2)`,defaultReturnType:`Currency`,defaultDecimalPlaces:`2`}},f={args:{defaultFormula:`ROUND((Annual Revenue / No of Employees, 2)`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rows = canvasElement.querySelectorAll('.fb-item');
    await expect(rows.length).toBe(19);
    for (const row of rows) {
      await expect(row.querySelector('.fb-field-icon')).toBeInTheDocument();
    }
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Search fields'
    }), 'Annual Revenue');
    await expect(canvas.getByText('Annual Revenue', {
      exact: true
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Insert Annual Revenue'
    }));
    await expect(canvas.getByRole('textbox', {
      name: 'Formula',
      exact: true
    })).toHaveValue('Annual Revenue');
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'modal'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole('dialog', {
      name: 'New Summary Formula'
    });
    await Promise.all(dialog.getAnimations().map(animation => animation.finished));
    await expect(dialog).toBeVisible();
    await expect(dialog.querySelectorAll('h2')).toHaveLength(1);
    await expect(dialog.querySelector('.fb-field-icon')).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
    await expect(args.onCancel).toHaveBeenCalled();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTab: 'functions'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFormula: 'ROUND(Annual Revenue / No of Employees, 2)',
    defaultReturnType: 'Currency',
    defaultDecimalPlaces: '2'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFormula: 'ROUND((Annual Revenue / No of Employees, 2)'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Modal`,`FunctionsTab`,`WithFormula`,`ValidationErrors`]}))();export{c as Default,u as FunctionsTab,l as Modal,f as ValidationErrors,d as WithFormula,p as __namedExportsOrder,s as default};