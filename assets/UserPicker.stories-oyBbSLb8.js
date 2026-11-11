import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-DcSDsYVi.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{n as i,t as a}from"./UserPicker-AeXrpx74.js";function o({initialValue:e,label:t,layout:n,width:r,disabled:i,error:o,required:l,helperText:d}){let[f,p]=(0,s.useState)(e);return(0,c.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,c.jsx)(a,{label:t,placeholder:`Select user`,value:f,users:u,onChange:p,layout:n,width:r??390,disabled:i,error:o,required:l,helperText:d})})}var s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{s=t(n(),1),i(),c=r(),l={title:`Design System/Components/UserPicker`,component:a,parameters:{layout:`padded`,docs:{description:{component:`User selection dropdown. Shows a searchable list of users with avatar, name, and email. Selected user is indicated by a checkmark and previewed in the trigger with an avatar circle. Figma: Chinnaiya-Style-Sheet node 93656-149883.`}}},argTypes:{users:{control:!1},onChange:{control:!1},value:{control:`text`},width:{control:`number`},layout:{control:`radio`,options:[`horizontal`,`vertical`]},disabled:{control:`boolean`},error:{control:`boolean`},required:{control:`boolean`}}},u=[{id:`u1`,name:`Saravanan Selvaraj`,subLabel:`saravanan.s@zohocorp.com`,avatarUrl:`/images/avatars/user_01.jpg`},{id:`u2`,name:`Chinnaiya R`,subLabel:`chinnaiya.r@zohocorp.com`,avatarUrl:`/images/avatars/user_02.jpg`},{id:`u3`,name:`Priya Nair`,subLabel:`priya.nair@zohocorp.com`,avatarUrl:`/images/avatars/user_03.jpg`},{id:`u4`,name:`Arjun Sharma`,subLabel:`arjun.sharma@zohocorp.com`,avatarUrl:`/images/avatars/user_04.jpg`},{id:`u5`,name:`Divya Krishnan`,subLabel:`divya.k@zohocorp.com`,avatarUrl:`/images/avatars/user_05.jpg`},{id:`u6`,name:`Ranjith Kumar`,subLabel:`ranjith.k@zohocorp.com`,avatarUrl:`/images/avatars/user_06.jpg`},{id:`u7`,name:`Meena Sundaram`,subLabel:`meena.s@zohocorp.com`,avatarUrl:`/images/avatars/user_07.jpg`},{id:`u8`,name:`Vikram Anand`,subLabel:`vikram.a@zohocorp.com`,avatarUrl:`/images/avatars/user_08.jpg`},{id:`u9`,name:`Lakshmi Venkat`,subLabel:`lakshmi.v@zohocorp.com`},{id:`u10`,name:`Suresh Babu`,subLabel:`suresh.b@zohocorp.com`},{id:`u11`,name:`Kavitha Ramesh`,subLabel:`kavitha.r@zohocorp.com`},{id:`u12`,name:`Murugan Selvam`,subLabel:`murugan.s@zohocorp.com`}],d={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{label:`Lead Owner`,layout:`horizontal`,width:390})},f={name:`With Selection`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{label:`Lead Owner`,layout:`horizontal`,width:390,initialValue:`u2`})},p={name:`Vertical`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(`div`,{style:{padding:24,background:`#fff`},children:(0,c.jsx)(a,{placeholder:`Select user`,users:u,layout:`vertical`,width:390})})},m={name:`Error State`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{label:`Lead Owner`,layout:`horizontal`,width:390,error:!0,helperText:`Please select a user.`,required:!0})},h={name:`Disabled`,parameters:{controls:{disable:!0}},render:()=>(0,c.jsx)(o,{label:`Lead Owner`,layout:`horizontal`,width:390,initialValue:`u1`,disabled:!0})},g={"All Users":u.map(e=>e.id),Managers:[`u1`,`u2`,`u3`],Admins:[`u4`,`u5`]},_={name:`With Filter`,parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,s.useState)(),[n,r]=(0,s.useState)(u.map(e=>e.id));return(0,c.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,c.jsx)(a,{label:`Lead Owner`,placeholder:`Select user`,value:e,users:u.filter(e=>n.includes(e.id)),onChange:t,layout:`horizontal`,width:390,filters:[{id:`role`,options:[`All Users`,`Managers`,`Admins`]}],onFilterChange:(e,t)=>{r(g[t]??u.map(e=>e.id))}})})}},v={name:`With Dual Filter`,parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,s.useState)();return(0,c.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,c.jsx)(a,{label:`Lead Owner`,placeholder:`Select user`,value:e,users:u,onChange:t,layout:`horizontal`,width:390,filters:[{id:`type`,options:[`Roles`,`Users`,`Teams`]},{id:`access`,options:[`Managers`,`Admins`,`Members`]}]})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} />
}`,...d.parameters?.docs?.source},description:{story:`Default — no user pre-selected; search filters by name or email.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Selection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} initialValue="u2" />
}`,...f.parameters?.docs?.source},description:{story:`Pre-selected user shown in the trigger with their photo.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24,
    background: '#fff'
  }}>
      <UserPicker placeholder="Select user" users={USERS} layout="vertical" width={390} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above trigger.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} error helperText="Please select a user." required />
}`,...m.parameters?.docs?.source},description:{story:`Error state — validation message below the trigger.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} initialValue="u1" disabled />
}`,...h.parameters?.docs?.source},description:{story:`Disabled — trigger is non-interactive.`,...h.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With Filter',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | undefined>();
    const [visibleIds, setVisibleIds] = useState<string[]>(USERS.map(u => u.id));
    const handleFilter = (_groupId: string, opt: string) => {
      setVisibleIds(ROLES_MAP[opt] ?? USERS.map(u => u.id));
    };
    return <div style={{
      padding: 24,
      background: '#fff',
      minWidth: 500
    }}>
        <UserPicker label="Lead Owner" placeholder="Select user" value={value} users={USERS.filter(u => visibleIds.includes(u.id))} onChange={setValue} layout="horizontal" width={390} filters={[{
        id: 'role',
        options: ['All Users', 'Managers', 'Admins']
      }]} onFilterChange={handleFilter} />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Single filter bar above search (e.g. "All Users" dropdown).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Dual Filter',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | undefined>();
    return <div style={{
      padding: 24,
      background: '#fff',
      minWidth: 500
    }}>
        <UserPicker label="Lead Owner" placeholder="Select user" value={value} users={USERS} onChange={setValue} layout="horizontal" width={390} filters={[{
        id: 'type',
        options: ['Roles', 'Users', 'Teams']
      }, {
        id: 'access',
        options: ['Managers', 'Admins', 'Members']
      }]} />
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Two filter bars side-by-side (Roles | Managers).`,...v.parameters?.docs?.description}}},y=[`Default`,`WithSelection`,`Vertical`,`ErrorState`,`Disabled`,`WithFilter`,`WithDualFilter`]}))();export{d as Default,h as Disabled,m as ErrorState,p as Vertical,v as WithDualFilter,_ as WithFilter,f as WithSelection,y as __namedExportsOrder,l as default};