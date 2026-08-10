import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-CpPujnL0.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tags-DtpQIoXa.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Tags`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Multiselect tag input — click or type to search from available options. Selected items appear as chips. Backspace removes the last chip.`}}}},l=[{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`},{value:`carol`,label:`Carol Williams`},{value:`david`,label:`David Brown`},{value:`eve`,label:`Eve Davis`},{value:`frank`,label:`Frank Miller`},{value:`grace`,label:`Grace Lee`}],u=[{value:`admin`,label:`Admin`},{value:`manager`,label:`Manager`},{value:`viewer`,label:`Viewer`},{value:`editor`,label:`Editor`}],d={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,placeholder:`Select users`,width:390})}},f={render:()=>{let[e,t]=(0,o.useState)([{value:`alice`,label:`Alice Johnson`},{value:`bob`,label:`Bob Smith`}]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,placeholder:`Select users`,width:390})}},p={render:()=>{let[e,t]=(0,o.useState)([{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4}]);return(0,s.jsx)(a,{value:e,options:[{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4},{value:`groups`,label:`Groups`,count:7}],onChange:t,placeholder:`Select`,width:390})}},m={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:u,onChange:t,placeholder:`Select roles`,width:390,required:!0})}},h={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:l,onChange:t,error:!0,width:390,placeholder:`Required`})}},g={render:()=>(0,s.jsx)(a,{value:[{value:`alice`,label:`Alice Johnson`},{value:`carol`,label:`Carol Williams`}],options:l,disabled:!0,width:390})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={USER_OPTIONS} onChange={setTags} placeholder="Select users" width={390} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'alice',
      label: 'Alice Johnson'
    }, {
      value: 'bob',
      label: 'Bob Smith'
    }]);
    return <Tags value={tags} options={USER_OPTIONS} onChange={setTags} placeholder="Select users" width={390} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'users',
      label: 'Users',
      count: 12
    }, {
      value: 'roles',
      label: 'Roles',
      count: 4
    }]);
    const countOptions: TagItem[] = [{
      value: 'users',
      label: 'Users',
      count: 12
    }, {
      value: 'roles',
      label: 'Roles',
      count: 4
    }, {
      value: 'groups',
      label: 'Groups',
      count: 7
    }];
    return <Tags value={tags} options={countOptions} onChange={setTags} placeholder="Select" width={390} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={ROLE_OPTIONS} onChange={setTags} placeholder="Select roles" width={390} required />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={USER_OPTIONS} onChange={setTags} error width={390} placeholder="Required" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tags: TagItem[] = [{
      value: 'alice',
      label: 'Alice Johnson'
    }, {
      value: 'carol',
      label: 'Carol Williams'
    }];
    return <Tags value={tags} options={USER_OPTIONS} disabled width={390} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithValues`,`WithCount`,`Roles`,`ErrorState`,`Disabled`]}))();export{d as Default,g as Disabled,h as ErrorState,m as Roles,p as WithCount,f as WithValues,_ as __namedExportsOrder,c as default};