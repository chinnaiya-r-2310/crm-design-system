import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DAYtFXoS.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./Tags-BxCVa2wZ.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Design System/Components/Tags`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Multiselect tag input. First Backspace (empty input) highlights the last tag; second Backspace removes it. Tags accept an optional imageUrl for a user avatar.`}}}},l=e=>`/images/avatars/user_0${e}.jpg`,u=[{value:`admin`,label:`Admin`},{value:`manager`,label:`Manager`},{value:`viewer`,label:`Viewer`},{value:`editor`,label:`Editor`}],d={render:()=>{let[e,t]=(0,o.useState)([{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4}]);return(0,s.jsx)(a,{value:e,options:[{value:`users`,label:`Users`,count:12},{value:`roles`,label:`Roles`,count:4},{value:`groups`,label:`Groups`,count:7}],onChange:t,placeholder:`Select`,width:390})}},f={render:()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsx)(a,{value:e,options:u,onChange:t,placeholder:`Select roles`,width:390,required:!0})}},p={name:`With user image`,render:()=>{let[e,t]=(0,o.useState)([{value:`alice`,label:`Alice Johnson`,imageUrl:l(1),email:`alice.johnson@example.com`},{value:`bob`,label:`Bob Smith`,imageUrl:l(2),email:`bob.smith@example.com`}]);return(0,s.jsx)(a,{value:e,options:[{value:`alice`,label:`Alice Johnson`,imageUrl:l(1),email:`alice.johnson@example.com`},{value:`bob`,label:`Bob Smith`,imageUrl:l(2),email:`bob.smith@example.com`},{value:`carol`,label:`Carol Williams`,imageUrl:l(3),email:`carol.williams@example.com`},{value:`david`,label:`David Brown`,imageUrl:l(4),email:`david.brown@example.com`},{value:`eve`,label:`Eve Davis`,imageUrl:l(5),email:`eve.davis@example.com`},{value:`frank`,label:`Frank Miller`,imageUrl:l(6),email:`frank.miller@example.com`},{value:`grace`,label:`Grace Lee`,imageUrl:l(7),email:`grace.lee@example.com`},{value:`henry`,label:`Henry Wilson`,imageUrl:l(8),email:`henry.wilson@example.com`}],onChange:t,placeholder:`Select users`,width:390})}},m=[{value:`tag1`,label:`tag1`,color:`#658BA8`},{value:`tag2`,label:`tag2`,color:`#12AA67`},{value:`tag3`,label:`tag3`,color:`#F18E0A`},{value:`tag4`,label:`tag4`,color:`#F564BB`}],h={render:()=>{let[e,t]=(0,o.useState)([{value:`tag1`,label:`tag1`,color:`#658BA8`},{value:`tag2`,label:`tag2`,color:`#12AA67`}]);return(0,s.jsx)(a,{value:e,options:m,onChange:t,placeholder:`Enter Tags`,width:390,colorTags:!0})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([]);
    return <Tags value={tags} options={ROLE_OPTIONS} onChange={setTags} placeholder="Select roles" width={390} required />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<TagItem[]>([{
      value: 'tag1',
      label: 'tag1',
      color: '#658BA8'
    }, {
      value: 'tag2',
      label: 'tag2',
      color: '#12AA67'
    }]);
    return <Tags value={tags} options={COLOR_TAG_OPTIONS} onChange={setTags} placeholder="Enter Tags" width={390} colorTags />;
  }
}`,...h.parameters?.docs?.source}}},g=[`WithCount`,`Roles`,`WithUserImage`,`ColorTags`]}))();export{h as ColorTags,f as Roles,d as WithCount,p as WithUserImage,g as __namedExportsOrder,c as default};