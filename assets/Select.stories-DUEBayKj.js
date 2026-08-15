import{i as e}from"./preload-helper-BTXe9M7S.js";import{n as t,t as n}from"./Select-DFxGTYCA.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),r=[{value:`new`,label:`New`},{value:`contacted`,label:`Contacted`},{value:`qualified`,label:`Qualified`},{value:`proposal`,label:`Proposal Sent`},{value:`negotiation`,label:`Negotiation`},{value:`won`,label:`Won`},{value:`lost`,label:`Lost`}],i={title:`Design System/Components/Select`,component:n,parameters:{layout:`centered`,docs:{description:{component:[`Dropdown select with the same two-column form layout as Input.`,`The trigger always shows a ChevronDown icon in a 32px right slot.`,`Displays placeholder text when no value is selected.`,`Shares all visual states with Input: hover, focus, required, disabled, error.`].join(` `)}}},argTypes:{label:{control:`text`,description:`Label in the left column`,table:{category:`Anatomy`}},placeholder:{control:`text`,description:`Text shown when no option is selected`,table:{category:`Anatomy`,defaultValue:{summary:`None`}}},helperText:{control:`text`,description:`Assistive copy below the trigger`,table:{category:`Anatomy`}},value:{control:`text`,description:`Currently selected option value`,table:{category:`Anatomy`}},layout:{control:`radio`,options:[`horizontal`,`vertical`],description:"`horizontal` = 40% label / 60% trigger. `vertical` = stacked.",table:{category:`Layout`,defaultValue:{summary:`horizontal`}}},width:{control:{type:`number`,min:200,max:1200,step:8},description:`Total component width in px`,table:{category:`Layout`,defaultValue:{summary:`670`}}},required:{control:`boolean`,description:`Shows the red mandatory indicator on the left edge`,table:{category:`Behaviour`}},disabled:{control:`boolean`,description:`Gray background, no interaction`,table:{category:`Behaviour`}},error:{control:`boolean`,description:`Error state — border and helper text turn #FF5D5A`,table:{category:`Behaviour`}},forceState:{control:`radio`,options:[void 0,`hover`,`focus`],description:`Force a visual state — for Storybook and visual tests only`,table:{category:`Testing`,defaultValue:{summary:`undefined`}}}}},a={args:{label:`Lead Status`,width:670,layout:`horizontal`,options:r}},o={name:`With Value`,args:{label:`Lead Status`,value:`qualified`,width:670,layout:`horizontal`,options:r}},s={name:`Hover`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:r,forceState:`hover`}},c={name:`Focus`,args:{label:`Lead Status`,width:670,layout:`horizontal`,options:r,forceState:`focus`}},l={name:`Required`,args:{label:`Lead Status`,required:!0,width:670,layout:`horizontal`,options:r}},u={name:`Disabled`,args:{label:`Lead Status`,value:`new`,disabled:!0,width:670,layout:`horizontal`,options:r}},d={name:`Read Only`,args:{label:`Lead Status`,value:`qualified`,readOnly:!0,width:670,layout:`horizontal`,options:r}},f={name:`Error`,args:{label:`Lead Status`,helperText:`Please select a lead status.`,error:!0,width:670,layout:`horizontal`,options:r}},p={name:`Full Anatomy`,args:{label:`Lead Status`,placeholder:`None`,helperText:`Select the current stage of this lead.`,required:!0,width:670,layout:`horizontal`,options:r}},m={name:`Vertical Layout`,args:{label:`Lead Status`,width:390,layout:`vertical`,options:r}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...a.parameters?.docs?.source},description:{story:`Default — no value selected, shows placeholder "None".`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...o.parameters?.docs?.source},description:{story:`A value is currently selected — trigger shows the option label.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Hover',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'hover'
  }
}`,...s.parameters?.docs?.source},description:{story:`Hover state — border turns #797883.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Focus',
  args: {
    label: 'Lead Status',
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS,
    forceState: 'focus'
  }
}`,...c.parameters?.docs?.source},description:{story:`Focus state — border turns #5464F2 with blue glow.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  args: {
    label: 'Lead Status',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...l.parameters?.docs?.source},description:{story:`Required — red mandatory indicator on the left edge of the trigger.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    label: 'Lead Status',
    value: 'new',
    disabled: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...u.parameters?.docs?.source},description:{story:`Disabled — gray background, not interactive.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    label: 'Lead Status',
    value: 'qualified',
    readOnly: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...d.parameters?.docs?.source},description:{story:`Read-only — muted background, lock badge replaces chevron, value is not changeable.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Lead Status',
    helperText: 'Please select a lead status.',
    error: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...f.parameters?.docs?.source},description:{story:`Error — border and helper text turn #FF5D5A.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Full Anatomy',
  args: {
    label: 'Lead Status',
    placeholder: 'None',
    helperText: 'Select the current stage of this lead.',
    required: true,
    width: 670,
    layout: 'horizontal',
    options: LEAD_STATUS_OPTIONS
  }
}`,...p.parameters?.docs?.source},description:{story:`Full anatomy — label, placeholder, helper text, and required indicator.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Vertical Layout',
  args: {
    label: 'Lead Status',
    width: 390,
    layout: 'vertical',
    options: LEAD_STATUS_OPTIONS
  }
}`,...m.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above the trigger.`,...m.parameters?.docs?.description}}},h=[`Default`,`WithValue`,`Hover`,`Focus`,`Required`,`Disabled`,`ReadOnly`,`Error`,`FullAnatomy`,`Vertical`]}))();export{a as Default,u as Disabled,f as Error,c as Focus,p as FullAnatomy,s as Hover,d as ReadOnly,l as Required,m as Vertical,o as WithValue,h as __namedExportsOrder,i as default};