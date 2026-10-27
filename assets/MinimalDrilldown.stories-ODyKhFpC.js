import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BXfCIBSi.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{i,n as a,r as o,t as s}from"./MinimalDrilldown-DvcRFxh_.js";function c({selection:e}){let[t,n]=(0,l.useState)(!0);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Open chart records`}),t&&(0,u.jsx)(s,{selection:e,view:`classic`,onClose:()=>n(!1)})]})}var l,u,d,f,p,m,h,g,_,v,y;e((()=>{l=t(n(),1),a(),i(),u=r(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Design System/Patterns/crm-homepage/minimal-drilldown`,parameters:{layout:`fullscreen`}},g={render:()=>(0,u.jsx)(c,{selection:{kind:`revenue`,label:`February`,series:`Closed revenue`,value:105}}),play:async({canvasElement:e})=>{let t=m(e.ownerDocument.body),n=await t.findByRole(`dialog`,{name:`Revenue trend`});await d(getComputedStyle(n).animationName).toBe(`crm-drilldown-enter`),await p(()=>d(getComputedStyle(n).transform).toBe(`matrix(1, 0, 0, 1, 0, 0)`)),await p(()=>d(m(n).getByRole(`heading`,{name:`Drilled Down By`})).toBeVisible()),await d(m(n).getByRole(`region`,{name:`Drilled Down By`})).toHaveTextContent(`February 2026`),await d(m(n).getByText(`$105,000.00`)).toBeVisible(),await d(m(n).getByRole(`region`,{name:`Drilled Down By`})).not.toHaveTextContent(`Homepage`),await d(n.querySelector(`.crm-drilldown__note`)).toBeNull(),await d(m(n).getByRole(`columnheader`,{name:`Account Name`})).toBeVisible();let r=m(n).getByRole(`button`,{name:`Close chart records`});await d(r.parentElement?.firstElementChild).toBe(r),await d(getComputedStyle(r).borderRadius).toBe(`50%`),await p(()=>{d(r.getBoundingClientRect().right).toBeLessThan(n.getBoundingClientRect().left),d(r.getBoundingClientRect().left).toBeGreaterThanOrEqual(0)}),await d(getComputedStyle(n).overflow).toBe(`visible`);let i=m(n).getByRole(`region`,{name:`Chart records`});await d(i.getBoundingClientRect().right).toBeLessThan(n.getBoundingClientRect().right-15);for(let e of n.querySelectorAll(`tbody td`))await d(getComputedStyle(e).whiteSpace).toBe(`nowrap`),await d(e.querySelector(`small`)).toBeNull();await d(m(n).getByRole(`link`,{name:`Open records in new tab`}).querySelector(`svg`)).not.toBeNull();let a=o({kind:`revenue`,label:`February`,series:`Closed revenue`,value:105});await d(a.records.reduce((e,t)=>e+Math.round(t.amount*100),0)).toBe(105e5),await d(a.records.every(e=>e.date.startsWith(`2026-02`)&&e.category===`Closed won`)).toBe(!0);for(let e of[`Excel`,`CSV`]){await f.click(m(n).getByRole(`button`,{name:`Export As`}));let r=await t.findByRole(`option`,{name:e});await f.click(r),await d(m(n).getByRole(`status`)).toHaveTextContent(`Exported ${a.records.length} records as ${e}.`),await d(m(n).getByRole(`button`,{name:`Export As`})).toBeVisible()}await f.click(m(n).getByRole(`button`,{name:`Close chart records`})),await p(()=>d(t.queryByRole(`dialog`)).not.toBeInTheDocument())}},_={render:()=>(0,u.jsx)(c,{selection:{kind:`industry`,label:`Electronics`,value:640}}),play:async({canvasElement:e})=>{let t=m(e.ownerDocument.body),n=await t.findByRole(`dialog`,{name:`Accounts by Industry`});await p(()=>d(m(n).getByText(`1–25 of 640`)).toBeVisible()),await f.click(m(n).getByRole(`button`,{name:`Next records`})),await d(m(n).getByText(`26–50 of 640`)).toBeVisible(),await d(m(n).getByText(`Electronics Shipper 026`)).toBeVisible();let r=new URL(m(n).getByRole(`link`,{name:`Open records in new tab`}).getAttribute(`href`),window.location.origin);await d(JSON.parse(r.searchParams.get(`chart-records`)).label).toBe(`Electronics`),await d(r.searchParams.get(`home-view`)).toBe(`classic`),await f.keyboard(`{Escape}`),await p(()=>d(t.queryByRole(`dialog`)).not.toBeInTheDocument())}},v={render:()=>(0,u.jsx)(c,{selection:{kind:`pipeline`,label:`Negotiation`,value:55}})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Preview selection={{
    kind: 'revenue',
    label: 'February',
    series: 'Closed revenue',
    value: 105
  }} />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', {
      name: 'Revenue trend'
    });
    await expect(getComputedStyle(dialog).animationName).toBe('crm-drilldown-enter');
    await waitFor(() => expect(getComputedStyle(dialog).transform).toBe('matrix(1, 0, 0, 1, 0, 0)'));
    await waitFor(() => expect(within(dialog).getByRole('heading', {
      name: 'Drilled Down By'
    })).toBeVisible());
    await expect(within(dialog).getByRole('region', {
      name: 'Drilled Down By'
    })).toHaveTextContent('February 2026');
    await expect(within(dialog).getByText('$105,000.00')).toBeVisible();
    await expect(within(dialog).getByRole('region', {
      name: 'Drilled Down By'
    })).not.toHaveTextContent('Homepage');
    await expect(dialog.querySelector('.crm-drilldown__note')).toBeNull();
    await expect(within(dialog).getByRole('columnheader', {
      name: 'Account Name'
    })).toBeVisible();
    const close = within(dialog).getByRole('button', {
      name: 'Close chart records'
    });
    await expect(close.parentElement?.firstElementChild).toBe(close);
    await expect(getComputedStyle(close).borderRadius).toBe('50%');
    await waitFor(() => {
      expect(close.getBoundingClientRect().right).toBeLessThan(dialog.getBoundingClientRect().left);
      expect(close.getBoundingClientRect().left).toBeGreaterThanOrEqual(0);
    });
    await expect(getComputedStyle(dialog).overflow).toBe('visible');
    const table = within(dialog).getByRole('region', {
      name: 'Chart records'
    });
    await expect(table.getBoundingClientRect().right).toBeLessThan(dialog.getBoundingClientRect().right - 15);
    for (const cell of dialog.querySelectorAll('tbody td')) {
      await expect(getComputedStyle(cell).whiteSpace).toBe('nowrap');
      await expect(cell.querySelector('small')).toBeNull();
    }
    await expect(within(dialog).getByRole('link', {
      name: 'Open records in new tab'
    }).querySelector('svg')).not.toBeNull();
    const sample = getDrilldownData({
      kind: 'revenue',
      label: 'February',
      series: 'Closed revenue',
      value: 105
    });
    await expect(sample.records.reduce((sum, record) => sum + Math.round(record.amount * 100), 0)).toBe(10500000);
    await expect(sample.records.every(record => record.date.startsWith('2026-02') && record.category === 'Closed won')).toBe(true);
    for (const format of ['Excel', 'CSV']) {
      await userEvent.click(within(dialog).getByRole('button', {
        name: 'Export As'
      }));
      const option = await body.findByRole('option', {
        name: format
      });
      await userEvent.click(option);
      await expect(within(dialog).getByRole('status')).toHaveTextContent(\`Exported \${sample.records.length} records as \${format}.\`);
      await expect(within(dialog).getByRole('button', {
        name: 'Export As'
      })).toBeVisible();
    }
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close chart records'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Preview selection={{
    kind: 'industry',
    label: 'Electronics',
    value: 640
  }} />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', {
      name: 'Accounts by Industry'
    });
    await waitFor(() => expect(within(dialog).getByText('1–25 of 640')).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Next records'
    }));
    await expect(within(dialog).getByText('26–50 of 640')).toBeVisible();
    await expect(within(dialog).getByText('Electronics Shipper 026')).toBeVisible();
    const url = new URL(within(dialog).getByRole('link', {
      name: 'Open records in new tab'
    }).getAttribute('href')!, window.location.origin);
    await expect(JSON.parse(url.searchParams.get('chart-records')!).label).toBe('Electronics');
    await expect(url.searchParams.get('home-view')).toBe('classic');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Preview selection={{
    kind: 'pipeline',
    label: 'Negotiation',
    value: 55
  }} />
}`,...v.parameters?.docs?.source}}},y=[`Revenue`,`Industry`,`Pipeline`]}))();export{_ as Industry,v as Pipeline,g as Revenue,y as __namedExportsOrder,h as default};