import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DAYtFXoS.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tags-BxCVa2wZ.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Multi-Select`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Multi-select input with removable tags. Type to search options and press Enter to select. First Backspace (empty input) highlights the last tag; second Backspace removes it.`}}}},l=[{value:`design`,label:`Design`},{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`qa`,label:`QA`},{value:`devops`,label:`DevOps`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`}],u={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,placeholder:`Select tags`,width:390})}},d={render:()=>{let[e,t]=(0,o.useState)([{value:`design`,label:`Design`},{value:`frontend`,label:`Frontend`}]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,placeholder:`Select tags`,width:390})}},f={render:()=>(0,s.jsx)(a,{value:[{value:`design`,label:`Design`},{value:`backend`,label:`Backend`}],options:l,disabled:!0,width:390})},p={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,error:!0,width:390,placeholder:`Required`})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <MultiSelect value={tags} options={OPTIONS} onChange={setTags} placeholder="Select tags" width={390} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'design',
      label: 'Design'
    }, {
      value: 'frontend',
      label: 'Frontend'
    }]);
    return <MultiSelect value={tags} options={OPTIONS} onChange={setTags} placeholder="Select tags" width={390} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tags: TagItem[] = [{
      value: 'design',
      label: 'Design'
    }, {
      value: 'backend',
      label: 'Backend'
    }];
    return <MultiSelect value={tags} options={OPTIONS} disabled width={390} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <MultiSelect value={tags} options={OPTIONS} onChange={setTags} error width={390} placeholder="Required" />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithValues`,`Disabled`,`ErrorState`]}))();export{u as Default,f as Disabled,p as ErrorState,d as WithValues,m as __namedExportsOrder,c as default};