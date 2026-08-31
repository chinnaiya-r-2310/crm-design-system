import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-D9u3ETtj.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Input-BTfEP4t3.js";import{n as o,t as s}from"./DateTimeInput-D4XnT5P0.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`Design System/Components/Input`,component:a,parameters:{layout:`centered`,docs:{description:{component:[`Single-line text input with a two-column form layout.`,`Label (40%) and input field (60%) share a 20px gap.`,`When the label wraps, the input stays aligned with the **first line** of the label.`,``,`Hover and focus states are implemented. Error, disabled, warning, and success`,"states are architecturally reserved — see `component.json` for the full roadmap."].join(` `)}}},argTypes:{label:{control:`text`,description:`Label text in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Placeholder shown in an empty field (optional)`,table:{category:`Anatomy`}},helperText:{control:`text`,description:`Assistive copy below the input`,table:{category:`Anatomy`}},value:{control:`text`,description:`Controlled value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% input grid. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px. In horizontal layout this covers both columns.`,table:{category:`Layout`,defaultValue:{summary:`640`}}},type:{control:`select`,options:[`text`,`email`,`password`,`search`,`tel`,`url`,`number`,`date`,`datetime`,`lookup`],description:"HTML input type. `datetime` renders a split date | time field. `lookup` renders a read-only selector.",table:{category:`Behaviour`}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge of the input`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Disables the field — gray background, no hover/focus states`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},autoUpdate:{control:`boolean`,description:`Auto-update state — light yellow background when value was auto-populated`,table:{category:`Behaviour`,defaultValue:{summary:`false`}}},suffix:{control:!1,description:`Icon or element rendered in the 32px slot on the right side of the input`,table:{category:`Anatomy`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:"Forces a visual state via `data-state` attribute — for Storybook stories and visual regression tests only.",table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},d={args:{label:`First Name`,width:670,layout:`horizontal`,type:`text`}},f={name:`Long Label`,args:{label:`Data visibility preference for profiles with access to masked data`,placeholder:``,width:670,layout:`horizontal`,type:`text`,required:!1}},p={name:`Hover`,args:{label:`First Name`,placeholder:``,width:670,layout:`horizontal`,forceState:`hover`}},m={name:`Focus`,args:{label:`First Name`,placeholder:``,width:670,layout:`horizontal`,forceState:`focus`,value:`Rama Krish`}},h={name:`Required Field`,args:{label:`First Name`,placeholder:``,required:!0,width:670,layout:`horizontal`,type:`text`}},g={name:`Prefilled Value`,args:{label:`Full name`,defaultValue:`Chinnaiya Raja`,helperText:``,width:670,layout:`horizontal`}},_={name:`Full Anatomy`,args:{label:`First Name`,placeholder:`Enter your Name`,helperText:`Type "#" to insert merge field`,required:!0,width:670,layout:`horizontal`,type:`email`}},v={name:`Vertical Layout`,args:{label:`Search`,placeholder:`Search contacts…`,width:390,layout:`vertical`,type:`search`}},y={name:`Lookup`,args:{label:`Account Name`,width:670,layout:`horizontal`,type:`lookup`}},b={name:`Required Lookup`,args:{label:`Account Name`,required:!0,width:670,layout:`horizontal`,type:`lookup`}},x={name:`Disabled`,args:{label:`Work email`,defaultValue:`rama@company.com`,width:670,layout:`horizontal`,type:`email`,disabled:!0}},S={name:`Read Only`,args:{label:`Work email`,defaultValue:`rama@company.com`,width:670,layout:`horizontal`,type:`email`,readOnly:!0}},C={name:`Disabled Lookup`,args:{label:`Account Name`,defaultValue:`Acme Corp`,width:670,layout:`horizontal`,type:`lookup`,disabled:!0}},w={name:`Read Only Lookup`,args:{label:`Account Name`,defaultValue:`Acme Corp`,width:670,layout:`horizontal`,type:`lookup`,readOnly:!0}},T={name:`Error`,args:{label:`Last Name`,placeholder:``,helperText:`Last Name cannot be empty.`,error:!0,width:670,layout:`horizontal`,type:`email`}},E={name:`Error (Focused)`,args:{label:`Work email`,placeholder:`you@company.com`,helperText:`Enter a valid email address.`,error:!0,forceState:`focus`,width:670,layout:`horizontal`,type:`email`}},D={name:`Required + Error`,args:{label:`Work email`,placeholder:`you@company.com`,helperText:`This field is required.`,required:!0,error:!0,width:670,layout:`horizontal`,type:`email`}},O={name:`Auto Update`,args:{label:`Contact Name`,defaultValue:`My Contact`,width:670,layout:`horizontal`,autoUpdate:!0}},k={name:`Date & Time`,args:{label:`Created Time`,width:670,layout:`horizontal`,type:`datetime`}},A={name:`Date & Time (Vertical)`,args:{width:390,layout:`vertical`,type:`datetime`}},j={name:`Date & Time (with Calendar)`,parameters:{controls:{disable:!0}},render:()=>{let[e,t]=(0,c.useState)(`22/04/2025`),[n,r]=(0,c.useState)(``);return(0,l.jsx)(`div`,{style:{padding:24},children:(0,l.jsx)(s,{width:390,dateValue:e,timeValue:n,onDateChange:t,onTimeChange:r})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "First Name",
    width: 670,
    layout: 'horizontal',
    type: 'text'
  }
}`,...d.parameters?.docs?.source},description:{story:`Default state — horizontal layout, label present, no placeholder.
Shows the standard form row at rest.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Long Label',
  args: {
    label: "Data visibility preference for profiles with access to masked data",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    type: 'text',
    required: false
  }
}`,...f.parameters?.docs?.source},description:{story:`Long label wrapping across two lines.
The input must stay aligned with the FIRST line of the label text,
not with the bottom edge or midpoint of the full label block.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'hover'
  }
}`,...p.parameters?.docs?.source},description:{story:'Hover state — border turns #797883.\nUses `forceState="hover"` to trigger the same CSS rule as `:hover`\nwithout requiring mouse interaction in Storybook.',...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: "First Name",
    placeholder: "",
    width: 670,
    layout: 'horizontal',
    forceState: 'focus',
    value: "Rama Krish"
  }
}`,...m.parameters?.docs?.source},description:{story:'Focus state — border turns #5464F2 with a blue glow shadow.\nUses `forceState="focus"` to trigger the same CSS rule as `:focus-within`\nwithout requiring keyboard interaction in Storybook.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Required Field',
  args: {
    label: "First Name",
    placeholder: "",
    required: true,
    width: 670,
    layout: 'horizontal',
    type: "text"
  }
}`,...h.parameters?.docs?.source},description:{story:`Required field — the red 8px accent bar appears on the left edge of the input.
No asterisk in the label; the HTML \`required\` attribute handles screen-reader
announcement. The visual indicator is decorative only.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Prefilled Value',
  args: {
    label: 'Full name',
    defaultValue: "Chinnaiya Raja",
    helperText: "",
    width: 670,
    layout: 'horizontal'
  }
}`,...g.parameters?.docs?.source},description:{story:`Pre-filled value — editing an existing record.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Search',
    placeholder: 'Search contacts…',
    width: 390,
    layout: 'vertical',
    type: 'search'
  }
}`,...v.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the input.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Lookup',
  args: {
    label: 'Account Name',
    width: 670,
    layout: 'horizontal',
    type: 'lookup'
  }
}`,...y.parameters?.docs?.source},description:{story:`Lookup field — read-only input that opens a record-search dialog when clicked.
The Info icon is injected automatically; the grey suffix slot signals the field
is not free-text. Pass type="lookup" — no suffix prop needed.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Required Lookup',
  args: {
    label: 'Account Name',
    required: true,
    width: 670,
    layout: 'horizontal',
    type: 'lookup'
  }
}`,...b.parameters?.docs?.source},description:{story:`Required lookup field — red accent bar and Info icon slot coexist.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    disabled: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Disabled state — gray background, muted border, no hover or focus effects.
The input and label both render at reduced opacity to signal non-interactivity.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Work email',
    defaultValue: 'rama@company.com',
    width: 670,
    layout: 'horizontal',
    type: 'email',
    readOnly: true
  }
}`,...S.parameters?.docs?.source},description:{story:`Read-only state — muted background, lock badge on the right, value is not editable.
Use when the field should display a value the user cannot change in this context.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    disabled: true
  }
}`,...C.parameters?.docs?.source},description:{story:`Disabled lookup — grey background, muted border, not-allowed cursor.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Read Only Lookup',
  args: {
    label: 'Account Name',
    defaultValue: 'Acme Corp',
    width: 670,
    layout: 'horizontal',
    type: 'lookup',
    readOnly: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Read-only lookup — muted background, lock badge replaces chevron.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Error state — border turns #FF5D5A and helper text adopts the same color.
Use when validation fails after submission or on blur.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Error with focus — confirms the red glow (not blue) appears when the
field is focused in the error state.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Required + Error — both the mandatory indicator and error state active.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Auto Update',
  args: {
    label: 'Contact Name',
    defaultValue: 'My Contact',
    width: 670,
    layout: 'horizontal',
    autoUpdate: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Auto-update state — light yellow background (#FFFFEA) with warm border (#E5DEC5).
Shown when a field value has been automatically populated by a workflow, import,
or system rule rather than entered manually by the user.
Figma: node 52027-148588.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Date & Time',
  args: {
    label: 'Created Time',
    width: 670,
    layout: 'horizontal',
    type: 'datetime'
  }
}`,...k.parameters?.docs?.source},description:{story:`Date and time field — two sections (date | time) inside one input wrapper,
separated by a vertical divider line.
Left: DD/MM/YYYY · Right: HH:MM
Figma: node 1354-62104.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Date & Time (Vertical)',
  args: {
    width: 390,
    layout: 'vertical',
    type: 'datetime'
  }
}`,...A.parameters?.docs?.source},description:{story:`Date and time — vertical layout at 390px (as used inside CriteriaBuilder).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`DateTimeInput — 390px split field with calendar popup on the date half.
Time defaults to the next rounded hour on first render when empty.
Clicking the date half opens a Calendar; the time half accepts free text.`,...j.parameters?.docs?.description}}},M=[`Default`,`LongLabel`,`Hover`,`Focus`,`Required`,`Prefilled`,`FullAnatomy`,`Vertical`,`Lookup`,`RequiredLookup`,`Disabled`,`ReadOnly`,`DisabledLookup`,`ReadOnlyLookup`,`Error`,`ErrorFocused`,`RequiredError`,`AutoUpdate`,`DateTimeField`,`DateTimeVertical`,`DateTimeInputStory`]}))();export{O as AutoUpdate,k as DateTimeField,j as DateTimeInputStory,A as DateTimeVertical,d as Default,x as Disabled,C as DisabledLookup,T as Error,E as ErrorFocused,m as Focus,_ as FullAnatomy,p as Hover,f as LongLabel,y as Lookup,g as Prefilled,S as ReadOnly,w as ReadOnlyLookup,h as Required,D as RequiredError,b as RequiredLookup,v as Vertical,M as __namedExportsOrder,u as default};