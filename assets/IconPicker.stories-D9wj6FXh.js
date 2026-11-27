import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-B9f41fNJ.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{At as i,It as a,Yt as o,l as s}from"./Icons-DZJ4aUFs.js";import{n as c,t as l}from"./Tooltip-BS6DrY6N.js";import{n as u,r as d}from"./CrmCatalog-B0Rdqbp9.js";import{a as f,n as p,o as m,s as h,t as g}from"./Icon-CXzUsU6N.js";var _=e((()=>{}));function v(e){return A[e]??e.replace(/^Crm/,``).replace(/CustomBtn$/,``).replace(/([a-z0-9])([A-Z])/g,`$1 $2`).trim()}function y(e){return typeof e==`string`?{name:e,label:v(e)}:{label:v(e.name),...e}}function b(e,t){let n=(m[e.name]??u[e.name])?.keywords??``,r=`${e.label} ${n}`.toLowerCase();return t.split(/\s+/).every(e=>r.includes(e))}function x({item:e,selected:t,focusable:n,onSelect:r,onKeyDown:i,cellRef:a,tooltipDelay:o}){return(0,w.jsx)(l,{content:e.label,placement:`top`,followCursor:!0,delay:o,wrapperClassName:`icon-picker-cell-wrap`,children:(0,w.jsxs)(`button`,{ref:a,type:`button`,role:`option`,"aria-selected":t,"aria-label":e.label,tabIndex:n?0:-1,className:t?`icon-picker-cell icon-picker-cell--selected`:`icon-picker-cell`,onClick:()=>r(e.name),onKeyDown:i,children:[e.name===`text`?(0,w.jsx)(`span`,{className:`icon-picker-initials`,"aria-hidden":`true`,children:e.initials}):(0,w.jsx)(g,{name:e.name,size:16}),t&&(0,w.jsx)(`span`,{className:`icon-picker-badge`,"aria-hidden":`true`,children:(0,w.jsx)(s,{width:7,height:5})})]})})}function S({label:e,labelId:t,items:n,value:r,onSelect:i,tooltipDelay:a}){let o=(0,T.useRef)([]),s=n.findIndex(e=>e.name===r),[c,l]=(0,T.useState)(null),u=Math.min(c??(s>=0?s:0),n.length-1);function d(e){let t=Math.max(0,Math.min(n.length-1,e));l(t),o.current[t]?.focus()}function f(e,t){let r={ArrowRight:t+1,ArrowLeft:t-1,ArrowDown:t+D,ArrowUp:t-D,Home:0,End:n.length-1};e.key in r&&(e.preventDefault(),d(r[e.key]))}return(0,w.jsx)(`div`,{role:`listbox`,"aria-labelledby":t,"aria-label":t?void 0:e,className:`icon-picker-grid`,children:n.map((e,t)=>(0,w.jsx)(x,{item:e,selected:e.name===r,focusable:t===u,onSelect:e=>{l(t),i(e)},onKeyDown:e=>f(e,t),cellRef:e=>{o.current[t]=e},tooltipDelay:a},e.name))})}function C({icons:e=O,recommended:t=[],initials:n,value:r,defaultValue:o=null,onChange:s,searchPlaceholder:c=`Search`,recommendedLabel:l=`Recommended`,noResultsText:u=`No Result Found`,rows:d=5,tooltipDelay:f=500,autoFocus:p=!1,variant:m=`default`,title:h=`Change Module Icon`,onClose:g,closeAriaLabel:_=`Close icon picker`}){let[v,x]=(0,T.useState)(o),[C,k]=(0,T.useState)(``),A=(0,T.useRef)(null),M=(0,T.useId)(),N=(0,T.useId)(),P=m===`popover`,F=r===void 0?v:r,I=C.trim().toLowerCase(),L=(0,T.useMemo)(()=>{let t=e.map(y);return n?[{name:E,label:`Text (${n})`,initials:n},...t]:t},[e,n]),R=(0,T.useMemo)(()=>t.map(y),[t]),z=!I&&R.length>0,B=(0,T.useMemo)(()=>new Set(t.map(e=>typeof e==`string`?e:e.name)),[t]),V=I?L.filter(e=>b(e,I)):z?L.filter(e=>!B.has(e.name)):L;function H(e){r===void 0&&x(e),s?.(e)}function U(){k(``),A.current?.focus()}return(0,w.jsxs)(`div`,{className:P?`icon-picker icon-picker--popover`:`icon-picker`,role:P?`dialog`:void 0,"aria-labelledby":P?N:void 0,onKeyDown:P?e=>{e.key===`Escape`&&!e.defaultPrevented&&(e.stopPropagation(),g?.())}:void 0,children:[P&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{className:`icon-picker-hook`,"aria-hidden":`true`}),(0,w.jsxs)(`div`,{className:`icon-picker-header`,children:[(0,w.jsx)(`h2`,{id:N,className:`icon-picker-title`,children:h}),(0,w.jsx)(`button`,{type:`button`,className:`icon-picker-close`,onClick:g,"aria-label":_,children:(0,w.jsx)(a,{width:12,height:12,"aria-hidden":`true`})})]})]}),(0,w.jsxs)(`div`,{className:`icon-picker-search`,children:[(0,w.jsx)(`span`,{className:`icon-picker-search-icon`,children:(0,w.jsx)(i,{"aria-hidden":`true`})}),(0,w.jsx)(`input`,{ref:A,type:`text`,className:`icon-picker-search-input`,placeholder:c,"aria-label":`Search icons`,value:C,onChange:e=>k(e.target.value),onKeyDown:e=>{e.key===`Escape`&&C&&(e.stopPropagation(),U())},autoFocus:p}),C&&(0,w.jsx)(`button`,{type:`button`,className:`icon-picker-clear`,onClick:U,"aria-label":`Clear search`,children:(0,w.jsx)(j,{})})]}),(0,w.jsxs)(`div`,{className:z?`icon-picker-content icon-picker-content--recommended`:`icon-picker-content`,style:{"--icon-picker-rows":d,"--icon-picker-recommended-rows":Math.ceil(R.length/D)},children:[z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`icon-picker-section`,children:[(0,w.jsx)(`span`,{id:M,className:`icon-picker-label`,children:l}),(0,w.jsx)(S,{labelId:M,items:R,value:F,onSelect:H,tooltipDelay:f})]}),(0,w.jsx)(`hr`,{className:`icon-picker-divider`})]}),V.length>0?(0,w.jsx)(S,{label:`All icons`,items:V,value:F,onSelect:H,tooltipDelay:f}):(0,w.jsx)(`p`,{className:`icon-picker-empty`,role:`status`,children:u})]})]})}var w,T,E,D,O,k,A,j,M=e((()=>{w=r(),T=t(n(),1),p(),c(),o(),d(),h(),_(),E=`text`,D=7,O=f.map(e=>e.name),k=Object.keys(u).filter(e=>e.endsWith(`CustomBtn`)),A=Object.fromEntries(f.map(e=>[e.name,e.label])),j=()=>(0,w.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{d:`M1 1L7 7M7 1L1 7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})}),C.__docgenInfo={description:`Icon picker panel — search, an optional "Recommended" row and a 7-column icon grid.

Value is an icon name from the CRM catalog, or ICON_PICKER_TEXT when the
text (initials) option is chosen. Controlled via value + onChange, or
uncontrolled via defaultValue.`,methods:[],displayName:`IconPicker`,props:{icons:{defaultValue:{value:`industryIconCatalog.map(icon => icon.name)`,computed:!0},required:!1},recommended:{defaultValue:{value:`[]`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},searchPlaceholder:{defaultValue:{value:`'Search'`,computed:!1},required:!1},recommendedLabel:{defaultValue:{value:`'Recommended'`,computed:!1},required:!1},noResultsText:{defaultValue:{value:`'No Result Found'`,computed:!1},required:!1},rows:{defaultValue:{value:`5`,computed:!1},required:!1},tooltipDelay:{defaultValue:{value:`500`,computed:!1},required:!1},autoFocus:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},title:{defaultValue:{value:`'Change Module Icon'`,computed:!1},required:!1},closeAriaLabel:{defaultValue:{value:`'Close icon picker'`,computed:!1},required:!1}}}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{N=r(),P=t(n(),1),M(),p(),{expect:F,userEvent:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Design System/Components/Icon Picker`,component:C,parameters:{layout:`centered`,docs:{description:{component:'Icon picker panel. Defaults to the 300 industry icons (12 industries × 25); search matches icon names and industry (try "finance" or "legal"). The Recommended row hides while searching. Arrow keys move through the grid, Enter/Space selects. Pass `initials` to offer a text option, which emits `ICON_PICKER_TEXT` as its value.'}}},args:{recommended:[`IndustryAppointment`,`IndustryInvoice`,`IndustryContract`,`IndustryShipping`],initials:`ST`,defaultValue:`IndustryInvoice`,rows:5,tooltipDelay:500}},z={name:`Default`},B={name:`With hook, title and close`,args:{variant:`popover`,title:`Change Module Icon`,initials:`IN`,defaultValue:E},parameters:{docs:{description:{story:"Optional popover chrome. Handle `onClose` to dismiss the picker; Escape clears an active search before dismissing."}}},render:e=>{let[t,n]=(0,P.useState)(!0);return t?(0,N.jsx)(C,{...e,onClose:()=>{e.onClose?.(),n(!1)}}):(0,N.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Change Module Icon`})},play:async({canvasElement:e})=>{let t=L(e),n=t.getByRole(`dialog`,{name:`Change Module Icon`});await F(L(n).getByRole(`option`,{name:`Text (IN)`})).toHaveAttribute(`aria-selected`,`true`);let r=L(n).getByRole(`textbox`,{name:`Search icons`});await I.type(r,`invoice`),await F(L(n).queryByText(`Recommended`)).not.toBeInTheDocument(),await I.keyboard(`{Escape}`),await F(r).toHaveValue(``),await F(n).toBeInTheDocument(),await I.click(L(n).getByRole(`button`,{name:`Close icon picker`})),await F(t.queryByRole(`dialog`)).not.toBeInTheDocument(),await I.click(t.getByRole(`button`,{name:`Change Module Icon`})),await I.click(t.getByRole(`textbox`,{name:`Search icons`})),await I.keyboard(`{Escape}`),await F(t.queryByRole(`dialog`)).not.toBeInTheDocument(),await I.click(t.getByRole(`button`,{name:`Change Module Icon`}))}},V={name:`All Variant`,render:e=>{let[t,n]=(0,P.useState)(!0),r={display:`flex`,flexDirection:`column`,gap:`var(--ds-spacing-4, 16px)`},i={margin:0,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-md)`,color:`var(--ds-text-label)`};return(0,N.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-start`,gap:`64px`,padding:`var(--ds-spacing-4, 16px)`},children:[(0,N.jsxs)(`section`,{"aria-label":`Dropdown UI`,style:r,children:[(0,N.jsx)(`h2`,{style:i,children:`Dropdown UI`}),(0,N.jsx)(C,{...e,variant:`default`})]}),(0,N.jsxs)(`section`,{"aria-label":`Popover UI`,style:r,children:[(0,N.jsx)(`h2`,{style:i,children:`Popover UI`}),t?(0,N.jsx)(C,{...e,...B.args,onClose:()=>{e.onClose?.(),n(!1)}}):(0,N.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Change Module Icon`})]})]})},play:async({canvasElement:e})=>{let t=L(e),n=L(t.getByRole(`region`,{name:`Dropdown UI`})),r=L(t.getByRole(`region`,{name:`Popover UI`}));await F(n.getByRole(`heading`,{name:`Dropdown UI`})).toBeVisible(),await F(r.getByRole(`heading`,{name:`Popover UI`})).toBeVisible(),await F(r.getByRole(`dialog`,{name:`Change Module Icon`})).toBeVisible();for(let e of[n,r]){let t=e.getByRole(`option`,{selected:!0}),n=t.querySelector(`.icon-picker-badge`),r=t.closest(`.icon-picker-cell-wrap`).nextElementSibling;await I.hover(r);let i=n.getBoundingClientRect(),a=n.ownerDocument.elementFromPoint(i.right-.5,i.top+i.height/2);await F(t.contains(a)).toBe(!0),await I.unhover(r)}let i=n.getByRole(`textbox`,{name:`Search icons`});await I.type(i,`invoice`),await F(r.getByRole(`textbox`,{name:`Search icons`})).toHaveValue(``),await I.clear(i),await I.click(r.getByRole(`button`,{name:`Close icon picker`})),await F(r.queryByRole(`dialog`)).not.toBeInTheDocument(),await F(n.getByRole(`textbox`,{name:`Search icons`})).toBeVisible(),await I.click(r.getByRole(`button`,{name:`Change Module Icon`})),await F(r.getByRole(`dialog`,{name:`Change Module Icon`})).toBeVisible()}},H={name:`Without recommended`,args:{recommended:[]}},U={name:`Icons only (no text option)`,args:{initials:void 0,defaultValue:null}},W={name:`Custom button icons`,args:{icons:k,recommended:[`CrmBoardCustomBtn`,`CrmVideoDisableCustomBtn`,`CrmCalendarDateCustomBtn`,`CrmCameraCustomBtn`],defaultValue:`CrmFormCustomBtn`}},G={name:`Custom icon set`,args:{icons:[`CrmLeads`,`CrmContacts`,`CrmAccounts`,`CrmPotentials`,`CrmInvoices`,`CrmQuotes`,`CrmCampaigns`,`CrmCases`,`CrmSolutions`,`CrmVendors`],recommended:[],initials:void 0,defaultValue:`CrmInvoices`}},K={name:`Controlled — selection readout`,render:e=>{let[t,n]=(0,P.useState)(`IndustryInvoice`);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[(0,N.jsx)(C,{...e,value:t,onChange:n}),(0,N.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`var(--ds-font-family-base)`,fontSize:`var(--ds-font-size-md)`,color:`var(--ds-text-label)`},children:[`Selected:`,t===`text`?(0,N.jsx)(`strong`,{children:`ST`}):(0,N.jsx)(g,{name:t,size:16}),(0,N.jsx)(`code`,{children:t})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Default'
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With hook, title and close',
  args: {
    variant: 'popover',
    title: 'Change Module Icon',
    initials: 'IN',
    defaultValue: ICON_PICKER_TEXT
  },
  parameters: {
    docs: {
      description: {
        story: 'Optional popover chrome. Handle \`onClose\` to dismiss the picker; Escape clears an active search before dismissing.'
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <IconPicker {...args} onClose={() => {
      args.onClose?.();
      setOpen(false);
    }} /> : <button type="button" onClick={() => setOpen(true)}>Change Module Icon</button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog', {
      name: 'Change Module Icon'
    });
    await expect(within(dialog).getByRole('option', {
      name: 'Text (IN)'
    })).toHaveAttribute('aria-selected', 'true');
    const search = within(dialog).getByRole('textbox', {
      name: 'Search icons'
    });
    await userEvent.type(search, 'invoice');
    await expect(within(dialog).queryByText('Recommended')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(search).toHaveValue('');
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close icon picker'
    }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change Module Icon'
    }));
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Search icons'
    }));
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    // Leave the reference variant visible after the interaction checks.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change Module Icon'
    }));
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'All Variant',
  render: args => {
    const [popoverOpen, setPopoverOpen] = useState(true);
    const sectionStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--ds-spacing-4, 16px)'
    };
    const headingStyle = {
      margin: 0,
      fontFamily: 'var(--ds-font-family-base)',
      fontSize: 'var(--ds-font-size-md)',
      color: 'var(--ds-text-label)'
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: '64px',
      padding: 'var(--ds-spacing-4, 16px)'
    }}>
        <section aria-label="Dropdown UI" style={sectionStyle}>
          <h2 style={headingStyle}>Dropdown UI</h2>
          <IconPicker {...args} variant="default" />
        </section>
        <section aria-label="Popover UI" style={sectionStyle}>
          <h2 style={headingStyle}>Popover UI</h2>
          {popoverOpen ? <IconPicker {...args} {...WithHookTitleAndClose.args} onClose={() => {
          args.onClose?.();
          setPopoverOpen(false);
        }} /> : <button type="button" onClick={() => setPopoverOpen(true)}>Change Module Icon</button>}
        </section>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dropdown = within(canvas.getByRole('region', {
      name: 'Dropdown UI'
    }));
    const popover = within(canvas.getByRole('region', {
      name: 'Popover UI'
    }));
    await expect(dropdown.getByRole('heading', {
      name: 'Dropdown UI'
    })).toBeVisible();
    await expect(popover.getByRole('heading', {
      name: 'Popover UI'
    })).toBeVisible();
    await expect(popover.getByRole('dialog', {
      name: 'Change Module Icon'
    })).toBeVisible();
    // The next tile must not paint over the selected badge's overflowing edge.
    for (const picker of [dropdown, popover]) {
      const selected = picker.getByRole('option', {
        selected: true
      });
      const badge = selected.querySelector('.icon-picker-badge');
      const neighbor = selected.closest('.icon-picker-cell-wrap').nextElementSibling;
      await userEvent.hover(neighbor);
      const bounds = badge.getBoundingClientRect();
      const topmost = badge.ownerDocument.elementFromPoint(bounds.right - 0.5, bounds.top + bounds.height / 2);
      await expect(selected.contains(topmost)).toBe(true);
      await userEvent.unhover(neighbor);
    }
    const search = dropdown.getByRole('textbox', {
      name: 'Search icons'
    });
    await userEvent.type(search, 'invoice');
    await expect(popover.getByRole('textbox', {
      name: 'Search icons'
    })).toHaveValue('');
    await userEvent.clear(search);
    await userEvent.click(popover.getByRole('button', {
      name: 'Close icon picker'
    }));
    await expect(popover.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(dropdown.getByRole('textbox', {
      name: 'Search icons'
    })).toBeVisible();
    await userEvent.click(popover.getByRole('button', {
      name: 'Change Module Icon'
    }));
    await expect(popover.getByRole('dialog', {
      name: 'Change Module Icon'
    })).toBeVisible();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Without recommended',
  args: {
    recommended: []
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Icons only (no text option)',
  args: {
    initials: undefined,
    defaultValue: null
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Custom button icons',
  args: {
    icons: CUSTOM_BUTTON_ICONS,
    recommended: ['CrmBoardCustomBtn', 'CrmVideoDisableCustomBtn', 'CrmCalendarDateCustomBtn', 'CrmCameraCustomBtn'],
    defaultValue: 'CrmFormCustomBtn'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Custom icon set',
  args: {
    icons: ['CrmLeads', 'CrmContacts', 'CrmAccounts', 'CrmPotentials', 'CrmInvoices', 'CrmQuotes', 'CrmCampaigns', 'CrmCases', 'CrmSolutions', 'CrmVendors'],
    recommended: [],
    initials: undefined,
    defaultValue: 'CrmInvoices'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Controlled — selection readout',
  render: args => {
    const [value, setValue] = useState('IndustryInvoice');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }}>
        <IconPicker {...args} value={value} onChange={setValue} />
        <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--ds-font-family-base)',
        fontSize: 'var(--ds-font-size-md)',
        color: 'var(--ds-text-label)'
      }}>
          Selected:
          {value === ICON_PICKER_TEXT ? <strong>ST</strong> : <Icon name={value} size={16} />}
          <code>{value}</code>
        </span>
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithHookTitleAndClose`,`AllVariant`,`WithoutRecommended`,`IconsOnly`,`CustomButtonIcons`,`CustomIconSet`,`Controlled`]}))();export{V as AllVariant,K as Controlled,W as CustomButtonIcons,G as CustomIconSet,z as Default,U as IconsOnly,B as WithHookTitleAndClose,H as WithoutRecommended,q as __namedExportsOrder,R as default};