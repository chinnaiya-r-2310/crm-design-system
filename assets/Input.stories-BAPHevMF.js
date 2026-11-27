import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DeHoAdc0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Input-5Gb51muZ.js";import{n as o,t as s}from"./DateTimeInput-mzKEPp9z.js";function c(){let[e,t]=(0,l.useState)(`22/04/2025`),[n,r]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:28,padding:24},children:[[[`Default`,h],[`Small`,v],[`Long Label`,y],[`Hover`,b],[`Focus`,x],[`Required Field`,S],[`Prefilled Value`,C],[`Full Anatomy`,w],[`Vertical Layout`,T],[`Lookup`,E],[`Required Lookup`,D],[`Disabled`,O],[`Read Only`,k],[`Disabled Lookup`,A],[`Read Only Lookup`,j],[`Error`,M],[`Error (Focused)`,N],[`Required + Error`,P],[`Auto Update`,F],[`Date & Time`,I],[`Date & Time (Vertical)`,L],[`Currency`,z],[`Password`,V]].map(([e,t])=>(0,u.jsxs)(`section`,{"aria-label":e,children:[(0,u.jsx)(`h3`,{style:{margin:`0 0 12px`,fontSize:14,color:`var(--ds-text-heading)`},children:e}),(0,u.jsx)(a,{...t.args})]},e)),(0,u.jsxs)(`section`,{"aria-label":`Date & Time (with Calendar)`,children:[(0,u.jsx)(`h3`,{style:{margin:`0 0 12px`,fontSize:14,color:`var(--ds-text-heading)`},children:`Date & Time (with Calendar)`}),(0,u.jsx)(s,{width:390,dateValue:e,timeValue:n,onDateChange:t,onTimeChange:r})]})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{l=t(n(),1),i(),o(),u=r(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Design System/Components/Input`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Single-line text input with a two-column form layout.`,`Label (40%) and input field (60%) share a 20px gap.`,`When the label wraps, the input stays aligned with the **first line** of the label.`,``,`Hover and focus states are implemented. Error, disabled, warning, and success`,"states are architecturally reserved — see `component.json` for the full roadmap."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Placeholder shown in an empty field (optional)`,table:{category:`Anatomy`}},helperText:{control:`text`,description:`Assistive copy below the input`,table:{category:`Anatomy`}},value:{control:`text`,description:`Controlled value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% input grid. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px. In horizontal layout this covers both columns.`,table:{category:`Layout`,defaultValue:{summary:`640`}}},type:{control:`select`,options:[`text`,`email`,`password`,`search`,`tel`,`url`,`number`,`date`,`datetime`,`lookup`],description:"HTML input type. `datetime` renders a split date | time field. `lookup` renders a read-only selector.",table:{category:`Behaviour`}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge of the input`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Disables the field — gray background, no hover/focus states`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},autoUpdate:{control:`boolean`,description:`Auto-update state — light yellow background when value was auto-populated`,table:{category:`Behaviour`,defaultValue:{summary:`false`}}},suffix:{control:!1,description:`Icon or element rendered in the 32px slot on the right side of the input`,table:{category:`Anatomy`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:"Forces a visual state via `data-state` attribute — for Storybook stories and visual regression tests only.",table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},h={args:{label:`First Name`,width:670,layout:`horizontal`,type:`text`}},g={name:`Header input`,args:{variant:`header`,defaultValue:`Untitled Joined Report`,"aria-label":`Report title`,onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}},parameters:{docs:{description:{story:`Editable heading with a hover border. Hugs the text with a 100px minimum and expands to 390px on focus.`}}},play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`,{name:`Report title`}),n=t.closest(`.input-header`);await d(t).toHaveValue(`Untitled Joined Report`),await f.hover(t),await d(n.getBoundingClientRect().width).toBeGreaterThanOrEqual(100),await f.click(t),await d(n.getBoundingClientRect().width).toBe(390),await f.clear(t),await f.type(t,`Sales{Enter}`),await d(t).not.toHaveFocus(),await d(n.getBoundingClientRect().width).toBe(100),await f.click(t),await f.clear(t),await f.type(t,`Untitled Joined Report{Enter}`)}},_={name:`Search box`,args:{variant:`search`,width:240,"aria-label":`Search recipients`,placeholder:`Search`},parameters:{docs:{description:{story:`Compact 30px search with a leading icon, clear action, and base-size Puvi text. Controlled fields supply onClear to reset their value.`}}},play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`searchbox`,{name:`Search recipients`}),r=getComputedStyle(n).getPropertyValue(`--ds-font-size-base`).trim();await d(getComputedStyle(n).fontFamily).toContain(`Puvi`),await d(getComputedStyle(n).fontSize).toBe(r),await d(getComputedStyle(n,`::placeholder`).fontSize).toBe(r),await d(getComputedStyle(n,`::placeholder`).fontFamily).toContain(`Puvi`),await d(n.closest(`.input-input-wrapper`).getBoundingClientRect().height).toBe(30),await f.type(n,`Operations`),await d(n).toHaveValue(`Operations`),await f.click(t.getByRole(`button`,{name:`Clear search`})),await d(n).toHaveValue(``),await d(n).toHaveFocus()}},v={args:{label:`First Name`,width:400,layout:`vertical`,type:`text`,size:`sm`,placeholder:`Enter name`}},y={name:`Long Label`,args:{label:`Data visibility preference for profiles with access to masked data`,placeholder:``,width:670,layout:`horizontal`,type:`text`,required:!1}},b={name:`Hover`,args:{label:`First Name`,placeholder:``,width:670,layout:`horizontal`,forceState:`hover`}},x={name:`Focus`,args:{label:`First Name`,placeholder:``,width:670,layout:`horizontal`,forceState:`focus`,value:`Rama Krish`}},S={name:`Required Field`,args:{label:`First Name`,placeholder:``,required:!0,width:670,layout:`horizontal`,type:`text`}},C={name:`Prefilled Value`,args:{label:`Full name`,defaultValue:`Chinnaiya Raja`,helperText:``,width:670,layout:`horizontal`}},w={name:`Full Anatomy`,args:{label:`First Name`,placeholder:`Enter your Name`,helperText:`Type "#" to insert merge field`,required:!0,width:670,layout:`horizontal`,type:`email`}},T={name:`Vertical Layout`,args:{label:`Search`,placeholder:`Search contacts…`,width:390,layout:`vertical`,type:`search`}},E={name:`Lookup`,args:{label:`Account Name`,width:670,layout:`horizontal`,type:`lookup`}},D={name:`Required Lookup`,args:{label:`Account Name`,required:!0,width:670,layout:`horizontal`,type:`lookup`}},O={name:`Disabled`,args:{label:`Work email`,defaultValue:`rama@company.com`,width:670,layout:`horizontal`,type:`email`,disabled:!0}},k={name:`Read Only`,args:{label:`Work email`,defaultValue:`rama@company.com`,width:670,layout:`horizontal`,type:`email`,readOnly:!0}},A={name:`Disabled Lookup`,args:{label:`Account Name`,defaultValue:`Acme Corp`,width:670,layout:`horizontal`,type:`lookup`,disabled:!0}},j={name:`Read Only Lookup`,args:{label:`Account Name`,defaultValue:`Acme Corp`,width:670,layout:`horizontal`,type:`lookup`,readOnly:!0}},M={name:`Error`,args:{label:`Last Name`,placeholder:``,helperText:`Last Name cannot be empty.`,error:!0,width:670,layout:`horizontal`,type:`email`}},N={name:`Error (Focused)`,args:{label:`Work email`,placeholder:`you@company.com`,helperText:`Enter a valid email address.`,error:!0,forceState:`focus`,width:670,layout:`horizontal`,type:`email`}},P={name:`Required + Error`,args:{label:`Work email`,placeholder:`you@company.com`,helperText:`This field is required.`,required:!0,error:!0,width:670,layout:`horizontal`,type:`email`}},F={name:`Auto Update`,args:{label:`Contact Name`,defaultValue:`My Contact`,width:670,layout:`horizontal`,autoUpdate:!0}},I={name:`Date & Time`,args:{label:`Created Time`,width:670,layout:`horizontal`,type:`datetime`}},L={name:`Date & Time (Vertical)`,args:{width:390,layout:`vertical`,type:`datetime`}},R={name:`Date & Time (with Calendar)`,parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,l.useState)(`22/04/2025`),[n,r]=(0,l.useState)(``);return(0,u.jsx)(`div`,{style:{padding:24},children:(0,u.jsx)(s,{width:390,dateValue:e,timeValue:n,onDateChange:t,onTimeChange:r})})}},z={args:{label:`Annual Revenue`,layout:`vertical`,variant:`currency`,currencyCode:`INR`,displayCurrency:!0,placeholder:`0.00`,required:!1,readOnly:!1,disabled:!1},argTypes:{displayCurrency:{control:`boolean`},required:{control:`boolean`,name:`Mandatory`},readOnly:{control:`boolean`,name:`Readonly`},disabled:{control:`boolean`}}},B={parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(c,{})},V={args:{label:`Password`,layout:`vertical`,variant:`password`,showPasswordToggle:!0,placeholder:`Enter password`,required:!1,readOnly:!1,disabled:!1},argTypes:{showPasswordToggle:{control:`boolean`,name:`Hide/Show Icon`},required:{control:`boolean`,name:`Mandatory`},readOnly:{control:`boolean`,name:`Readonly`},disabled:{control:`boolean`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "First Name",
    width: 670,
    layout: 'horizontal',
    type: 'text'
  }
}`,...h.parameters?.docs?.source},description:{story:`Default state — horizontal layout, label present, no placeholder.
Shows the standard form row at rest.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Header input',
  args: {
    variant: 'header',
    defaultValue: 'Untitled Joined Report',
    'aria-label': 'Report title',
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') event.currentTarget.blur();
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Editable heading with a hover border. Hugs the text with a 100px minimum and expands to 390px on focus.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Report title'
    });
    const root = input.closest('.input-header')!;
    await expect(input).toHaveValue('Untitled Joined Report');
    await userEvent.hover(input);
    await expect(root.getBoundingClientRect().width).toBeGreaterThanOrEqual(100);
    await userEvent.click(input);
    await expect(root.getBoundingClientRect().width).toBe(390);
    await userEvent.clear(input);
    await userEvent.type(input, 'Sales{Enter}');
    await expect(input).not.toHaveFocus();
    await expect(root.getBoundingClientRect().width).toBe(100);
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, 'Untitled Joined Report{Enter}');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Search box',
  args: {
    variant: 'search',
    width: 240,
    'aria-label': 'Search recipients',
    placeholder: 'Search'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact 30px search with a leading icon, clear action, and base-size Puvi text. Controlled fields supply onClear to reset their value.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByRole('searchbox', {
      name: 'Search recipients'
    });
    const baseSize = getComputedStyle(search).getPropertyValue('--ds-font-size-base').trim();
    await expect(getComputedStyle(search).fontFamily).toContain('Puvi');
    await expect(getComputedStyle(search).fontSize).toBe(baseSize);
    await expect(getComputedStyle(search, '::placeholder').fontSize).toBe(baseSize);
    await expect(getComputedStyle(search, '::placeholder').fontFamily).toContain('Puvi');
    await expect(search.closest('.input-input-wrapper')!.getBoundingClientRect().height).toBe(30);
    await userEvent.type(search, 'Operations');
    await expect(search).toHaveValue('Operations');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(search).toHaveValue('');
    await expect(search).toHaveFocus();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "First Name",
    width: 400,
    layout: 'vertical',
    type: 'text',
    size: 'sm',
    placeholder: 'Enter name'
  }
}`,...v.parameters?.docs?.source},description:{story:`Small size: 27px tall with 13px text, for compact toolbars and section headers.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Long Label',
  args: {
    label: "Data visibility preference for profiles with access to masked data",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    type: 'text',
    required: false
  }
}`,...y.parameters?.docs?.source},description:{story:`Long label wrapping across two lines.
The input must stay aligned with the FIRST line of the label text,
not with the bottom edge or midpoint of the full label block.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'hover'
  }
}`,...b.parameters?.docs?.source},description:{story:'Hover state — border turns #797883.\nUses `forceState="hover"` to trigger the same CSS rule as `:hover`\nwithout requiring mouse interaction in Storybook.',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'focus',
    value: "Rama Krish"
  }
}`,...x.parameters?.docs?.source},description:{story:'Focus state — border turns #5464F2 with a blue glow shadow.\nUses `forceState="focus"` to trigger the same CSS rule as `:focus-within`\nwithout requiring keyboard interaction in Storybook.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Required Field',
  args: {
    label: "First Name",
    placeholder: "",
    required: true,
    width: 670,
    layout: 'horizontal',
    type: "text"
  }
}`,...S.parameters?.docs?.source},description:{story:`Required field — the red 8px accent bar appears on the left edge of the input.
No asterisk in the label; the HTML \`required\` attribute handles screen-reader
announcement. The visual indicator is decorative only.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Prefilled Value',
  args: {
    label: 'Full name',
    defaultValue: "Chinnaiya Raja",
    helperText: "",
    width: 670,
    layout: 'horizontal'
  }
}`,...C.parameters?.docs?.source},description:{story:`Pre-filled value — editing an existing record.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Full Anatomy',
  args: {
    label: "First Name",
    placeholder: "Enter your Name",
    helperText: "Type \\"#\\" to insert merge field",
    required: true,
    width: 670,
    layout: 'horizontal',
    type: 'email'
  }
}`,...w.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Search',
    placeholder: 'Search contacts…',
    width: 390,
    layout: 'vertical',
    type: 'search'
  }
}`,...T.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the input.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Lookup',
  args: {
    label: 'Account Name',
    width: 670,
    layout: 'horizontal',
    type: 'lookup'
  }
}`,...E.parameters?.docs?.source},description:{story:`Lookup field — read-only input that opens a record-search dialog when clicked.
The Info icon is injected automatically; the grey suffix slot signals the field
is not free-text. Pass type="lookup" — no suffix prop needed.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Required Lookup',
  args: {
    label: 'Account Name',
    required: true,
    width: 670,
    layout: 'horizontal',
    type: 'lookup'
  }
}`,...D.parameters?.docs?.source},description:{story:`Required lookup field — red accent bar and Info icon slot coexist.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    disabled: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Disabled state — gray background, muted border, no hover or focus effects.
The input and label both render at reduced opacity to signal non-interactivity.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    readOnly: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Read-only state — muted background, lock badge on the right, value is not editable.
Use when the field should display a value the user cannot change in this context.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    disabled: true
  }
}`,...A.parameters?.docs?.source},description:{story:`Disabled lookup — grey background, muted border, not-allowed cursor.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Read Only Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    readOnly: true
  }
}`,...j.parameters?.docs?.source},description:{story:`Read-only lookup — muted background, lock badge replaces chevron.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: "Last Name",
    placeholder: "",
    helperText: "Last Name cannot be empty.",
    error: true,
    width: 670,
    layout: 'horizontal',
    type: 'email'
  }
}`,...M.parameters?.docs?.source},description:{story:`Error state — border turns #FF5D5A and helper text adopts the same color.
Use when validation fails after submission or on blur.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Error (Focused)',
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    helperText: 'Enter a valid email address.',
    error: true,
    forceState: 'focus',
    width: 670,
    layout: 'horizontal',
    type: 'email'
  }
}`,...N.parameters?.docs?.source},description:{story:`Error with focus — confirms the red glow (not blue) appears when the
field is focused in the error state.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Required + Error',
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    helperText: 'This field is required.',
    required: true,
    error: true,
    width: 670,
    layout: 'horizontal',
    type: 'email'
  }
}`,...P.parameters?.docs?.source},description:{story:`Required + Error — both the mandatory indicator and error state active.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Auto Update',
  args: {
    label: 'Contact Name',
    defaultValue: 'My Contact',
    width: 670,
    layout: 'horizontal',
    autoUpdate: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Auto-update state — light yellow background (#FFFFEA) with warm border (#E5DEC5).
Shown when a field value has been automatically populated by a workflow, import,
or system rule rather than entered manually by the user.
Figma: node 52027-148588.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Date & Time',
  args: {
    label: 'Created Time',
    width: 670,
    layout: 'horizontal',
    type: 'datetime'
  }
}`,...I.parameters?.docs?.source},description:{story:`Date and time field — two sections (date | time) inside one input wrapper,
separated by a vertical divider line.
Left: DD/MM/YYYY · Right: HH:MM
Figma: node 1354-62104.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Date & Time (Vertical)',
  args: {
    width: 390,
    layout: 'vertical',
    type: 'datetime'
  }
}`,...L.parameters?.docs?.source},description:{story:`Date and time — vertical layout at 390px (as used inside CriteriaBuilder).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Date & Time (with Calendar)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [date, setDate] = useState('22/04/2025');
    const [time, setTime] = useState('');
    return <div style={{
      padding: 24
    }}>
        <DateTimeInput width={390} dateValue={date} timeValue={time} onDateChange={setDate} onTimeChange={setTime} />
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`DateTimeInput — 390px split field with calendar popup on the date half.
Time defaults to the next rounded hour on first render when empty.
Clicking the date half opens a Calendar; the time half accepts free text.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Annual Revenue',
    layout: 'vertical',
    variant: 'currency',
    currencyCode: 'INR',
    displayCurrency: true,
    placeholder: '0.00',
    required: false,
    readOnly: false,
    disabled: false
  },
  argTypes: {
    displayCurrency: {
      control: 'boolean'
    },
    required: {
      control: 'boolean',
      name: 'Mandatory'
    },
    readOnly: {
      control: 'boolean',
      name: 'Readonly'
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <InputVariants />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    layout: 'vertical',
    variant: 'password',
    showPasswordToggle: true,
    placeholder: 'Enter password',
    required: false,
    readOnly: false,
    disabled: false
  },
  argTypes: {
    showPasswordToggle: {
      control: 'boolean',
      name: 'Hide/Show Icon'
    },
    required: {
      control: 'boolean',
      name: 'Mandatory'
    },
    readOnly: {
      control: 'boolean',
      name: 'Readonly'
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...V.parameters?.docs?.source}}},H=`Default.HeaderInput.SearchInput.Small.LongLabel.Hover.Focus.Required.Prefilled.FullAnatomy.Vertical.Lookup.RequiredLookup.Disabled.ReadOnly.DisabledLookup.ReadOnlyLookup.Error.ErrorFocused.RequiredError.AutoUpdate.DateTimeField.DateTimeVertical.DateTimeInputStory.Currency.AllVariants.Password`.split(`.`)}))();export{B as AllVariants,F as AutoUpdate,z as Currency,I as DateTimeField,R as DateTimeInputStory,L as DateTimeVertical,h as Default,O as Disabled,A as DisabledLookup,M as Error,N as ErrorFocused,x as Focus,w as FullAnatomy,g as HeaderInput,b as Hover,y as LongLabel,E as Lookup,V as Password,C as Prefilled,k as ReadOnly,j as ReadOnlyLookup,S as Required,P as RequiredError,D as RequiredLookup,_ as SearchInput,v as Small,T as Vertical,H as __namedExportsOrder,m as default};