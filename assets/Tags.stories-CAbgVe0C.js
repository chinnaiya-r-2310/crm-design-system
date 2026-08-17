import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BwyBN0p_.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tags-CH_1j0PR.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Tags`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Multiselect tag input. First Backspace (empty input) highlights the last tag; second Backspace removes it. Tags accept an optional imageUrl for a user avatar.`}}}},l=e=>`/images/avatars/user_0${e}.jpg`,u=[{value:`design`,label:`Design`},{value:`frontend`,label:`Frontend`},{value:`backend`,label:`Backend`},{value:`qa`,label:`QA`},{value:`devops`,label:`DevOps`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`}],d=[{value:`admin`,label:`Admin`},{value:`manager`,label:`Manager`},{value:`viewer`,label:`Viewer`},{value:`editor`,label:`Editor`}],f={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:u,onChange:t,placeholder:`Select tags`,width:390})}},p={render:()=>{let[e,t]=(0,o.useState)([{value:`design`,label:`Design`},{value:`frontend`,label:`Frontend`}]);return(0,s.jsx)(a,{value:e,options:u,onChange:t,placeholder:`Select tags`,width:390})}},m={render:()=>{let[e,t]=(0,o.useState)([{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4}]);return(0,s.jsx)(a,{value:e,options:[{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4},{value:`groups`,label:`Groups`,count:7}],onChange:t,placeholder:`Select`,width:390})}},h={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:d,onChange:t,placeholder:`Select roles`,width:390,required:!0})}},g={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:u,onChange:t,error:!0,width:390,placeholder:`Required`})}},_={render:()=>(0,s.jsx)(a,{value:[{value:`design`,label:`Design`},{value:`backend`,label:`Backend`}],options:u,disabled:!0,width:390})},v={name:`With user image`,render:()=>{let[e,t]=(0,o.useState)([{value:`alice`,label:`Alice Johnson`,imageUrl:l(1),email:`alice.johnson@example.com`},{value:`bob`,label:`Bob Smith`,imageUrl:l(2),email:`bob.smith@example.com`}]);return(0,s.jsx)(a,{value:e,options:[{value:`alice`,label:`Alice Johnson`,imageUrl:l(1),email:`alice.johnson@example.com`},{value:`bob`,label:`Bob Smith`,imageUrl:l(2),email:`bob.smith@example.com`},{value:`carol`,label:`Carol Williams`,imageUrl:l(3),email:`carol.williams@example.com`},{value:`david`,label:`David Brown`,imageUrl:l(4),email:`david.brown@example.com`},{value:`eve`,label:`Eve Davis`,imageUrl:l(5),email:`eve.davis@example.com`},{value:`frank`,label:`Frank Miller`,imageUrl:l(6),email:`frank.miller@example.com`},{value:`grace`,label:`Grace Lee`,imageUrl:l(7),email:`grace.lee@example.com`},{value:`henry`,label:`Henry Wilson`,imageUrl:l(8),email:`henry.wilson@example.com`}],onChange:t,placeholder:`Select users`,width:390})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={TAG_OPTIONS} onChange={setTags} placeholder="Select tags" width={390} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'design',
      label: 'Design'
    }, {
      value: 'frontend',
      label: 'Frontend'
    }]);
    return <Tags value={tags} options={TAG_OPTIONS} onChange={setTags} placeholder="Select tags" width={390} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={ROLE_OPTIONS} onChange={setTags} placeholder="Select roles" width={390} required />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={TAG_OPTIONS} onChange={setTags} error width={390} placeholder="Required" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tags: TagItem[] = [{
      value: 'design',
      label: 'Design'
    }, {
      value: 'backend',
      label: 'Backend'
    }];
    return <Tags value={tags} options={TAG_OPTIONS} disabled width={390} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With user image',
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'alice',
      label: 'Alice Johnson',
      imageUrl: avatar(1),
      email: 'alice.johnson@example.com'
    }, {
      value: 'bob',
      label: 'Bob Smith',
      imageUrl: avatar(2),
      email: 'bob.smith@example.com'
    }]);
    const avatarOptions: TagItem[] = [{
      value: 'alice',
      label: 'Alice Johnson',
      imageUrl: avatar(1),
      email: 'alice.johnson@example.com'
    }, {
      value: 'bob',
      label: 'Bob Smith',
      imageUrl: avatar(2),
      email: 'bob.smith@example.com'
    }, {
      value: 'carol',
      label: 'Carol Williams',
      imageUrl: avatar(3),
      email: 'carol.williams@example.com'
    }, {
      value: 'david',
      label: 'David Brown',
      imageUrl: avatar(4),
      email: 'david.brown@example.com'
    }, {
      value: 'eve',
      label: 'Eve Davis',
      imageUrl: avatar(5),
      email: 'eve.davis@example.com'
    }, {
      value: 'frank',
      label: 'Frank Miller',
      imageUrl: avatar(6),
      email: 'frank.miller@example.com'
    }, {
      value: 'grace',
      label: 'Grace Lee',
      imageUrl: avatar(7),
      email: 'grace.lee@example.com'
    }, {
      value: 'henry',
      label: 'Henry Wilson',
      imageUrl: avatar(8),
      email: 'henry.wilson@example.com'
    }];
    return <Tags value={tags} options={avatarOptions} onChange={setTags} placeholder="Select users" width={390} />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithValues`,`WithCount`,`Roles`,`ErrorState`,`Disabled`,`WithUserImage`]}))();export{f as Default,_ as Disabled,g as ErrorState,h as Roles,m as WithCount,v as WithUserImage,p as WithValues,y as __namedExportsOrder,c as default};