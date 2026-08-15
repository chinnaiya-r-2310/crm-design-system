import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-C5qsUVz8.js";import{t as r}from"./react-dom-DbwYm0T6.js";import{t as i}from"./jsx-runtime-D-I7Lrue.js";import{J as a,d as o,et as s,f as c}from"./Icons-Bs9DTAAW.js";var l=e((()=>{}));function ee({options:e,selected:t,onSelect:n,anchorEl:r}){let[i,a]=(0,m.useState)(null);return(0,m.useEffect)(()=>{if(!r)return;let e=r.getBoundingClientRect();a({top:e.bottom+2,left:e.left,width:e.width})},[r]),i?(0,h.createPortal)((0,p.jsx)(`div`,{className:`user-picker-filter-dropdown`,style:{top:i.top,left:i.left,minWidth:i.width},onMouseDown:e=>e.stopPropagation(),children:e.map(e=>(0,p.jsx)(`div`,{className:`user-picker-filter-option`,"data-selected":t===e||void 0,onClick:()=>n(e),children:e},e))}),document.body):null}function u(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)|0;return g[Math.abs(t)%g.length]}function d(e){let t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase()}function te({user:e,size:t=24}){return(0,p.jsx)(`span`,{className:`user-picker-avatar`,style:{width:t,height:t,background:e.avatarColor??u(e.name),fontSize:t*.42},"aria-hidden":`true`,children:e.avatarUrl?(0,p.jsx)(`img`,{src:e.avatarUrl,alt:``,className:`user-picker-avatar-img`}):d(e.name)})}function f({label:e,placeholder:t=`Select user`,value:n,users:r=[],helperText:i,width:s=390,layout:l=`horizontal`,required:u,disabled:d,error:f,onChange:g,onFilterChange:v,filters:y,id:b,style:x,columns:S}){let C=(0,m.useId)(),w=b??C,T=`${w}-list`,[E,D]=(0,m.useState)(!1),[O,k]=(0,m.useState)(``),[A,j]=(0,m.useState)(n),[M,N]=(0,m.useState)(-1),[P,F]=(0,m.useState)(null),[I,L]=(0,m.useState)(null),[R,ne]=(0,m.useState)(()=>{let e={};return(y??[]).forEach(t=>{e[t.id]=t.options[0]??``}),e}),z=(0,m.useRef)({}),B=(0,m.useRef)(null),V=(0,m.useRef)(null),H=(0,m.useRef)(null),U=(0,m.useRef)(null),W=(0,m.useRef)(null),G=(0,m.useRef)(!1),K=(0,m.useRef)(!1),q=g?n:A,J=r.find(e=>e.id===q),Y=O?r.filter(e=>e.name.toLowerCase().includes(O.toLowerCase())||(e.subLabel??``).toLowerCase().includes(O.toLowerCase())):r,X=()=>{if(!V.current)return;let e=V.current.getBoundingClientRect();F({top:e.bottom-1,left:e.left,width:e.width})},re=()=>{d||D(e=>(e||k(``),!e))},Z=e=>{g?g(e.id):j(e.id),D(!1),k(``)},ie=(e,t)=>{ne(n=>({...n,[e]:t})),L(null),v?.(e,t)};(0,m.useEffect)(()=>{if(!E)return;let e=e=>{let t=e.target;!B.current?.contains(t)&&!H.current?.contains(t)&&D(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[E]),(0,m.useEffect)(()=>{if(!I)return;let e=()=>L(null);return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[I]),(0,m.useEffect)(()=>{E?(G.current=!0,X()):(F(null),G.current=!1)},[E]),(0,m.useEffect)(()=>{if(E)return window.addEventListener(`resize`,X),()=>window.removeEventListener(`resize`,X)},[E]),(0,m.useEffect)(()=>{P&&G.current&&(G.current=!1,U.current?.focus())},[P]),(0,m.useEffect)(()=>{if(E){let e=Y.findIndex(e=>e.id===q);N(e>=0?e:-1)}else N(-1)},[E]),(0,m.useEffect)(()=>{E&&N(Y.length>0?0:-1)},[O]),(0,m.useEffect)(()=>{!K.current||M<0||!W.current||(K.current=!1,W.current.querySelector(`[data-user-index="${M}"]`)?.scrollIntoView({block:`nearest`}))},[M]);let Q=e=>{if(e.key===`Escape`){D(!1);return}if(E){if(e.key===`ArrowDown`)e.preventDefault(),K.current=!0,N(e=>Math.min(e+1,Y.length-1));else if(e.key===`ArrowUp`)e.preventDefault(),K.current=!0,N(e=>Math.max(e-1,0));else if(e.key===`Enter`){e.preventDefault();let t=Y[M];t&&Z(t)}}},$=d?`disabled`:f?`error`:void 0,ae={width:typeof s==`number`?`${s}px`:s},oe=E&&P?(0,h.createPortal)((0,p.jsxs)(`div`,{ref:H,id:T,className:`user-picker-panel`,style:{top:P.top,left:P.left,width:P.width},role:`listbox`,"aria-label":e??`Select user`,onKeyDown:Q,children:[y&&y.length>0&&(0,p.jsx)(`div`,{className:`user-picker-filter-bar`,onMouseDown:e=>e.stopPropagation(),children:y.map((e,t)=>(0,p.jsxs)(`span`,{className:`user-picker-filter-group`,children:[t>0&&(0,p.jsx)(`span`,{className:`user-picker-filter-divider`,"aria-hidden":`true`}),(0,p.jsxs)(`button`,{ref:t=>{z.current[e.id]=t},type:`button`,className:`user-picker-filter-btn`,"data-open":I===e.id||void 0,onClick:()=>L(t=>t===e.id?null:e.id),children:[(0,p.jsx)(`span`,{className:`user-picker-filter-label`,children:R[e.id]??e.options[0]}),(0,p.jsx)(c,{className:`user-picker-filter-chevron`})]}),I===e.id&&(0,p.jsx)(ee,{options:e.options,selected:R[e.id],onSelect:t=>ie(e.id,t),anchorEl:z.current[e.id]})]},e.id))}),(0,p.jsx)(`div`,{className:`user-picker-search-row`,children:(0,p.jsxs)(`div`,{className:`user-picker-search-box`,children:[(0,p.jsx)(`span`,{className:`user-picker-search-icon`,children:(0,p.jsx)(a,{})}),(0,p.jsx)(`input`,{ref:U,className:`user-picker-search-input`,type:`text`,placeholder:`Search`,value:O,onChange:e=>k(e.target.value),"aria-label":`Search users`}),O&&(0,p.jsx)(`button`,{type:`button`,className:`user-picker-clear-btn`,onClick:()=>k(``),"aria-label":`Clear search`,children:(0,p.jsx)(_,{})})]})}),(0,p.jsx)(`div`,{className:`user-picker-user-list`,ref:W,children:Y.length===0?(0,p.jsx)(`div`,{className:`user-picker-no-results`,children:`No users found`}):Y.map((e,t)=>{let n=e.id===q;return(0,p.jsxs)(`div`,{className:`user-picker-user-option`,role:`option`,"aria-selected":n,"data-selected":n||void 0,"data-active":M===t||void 0,"data-user-index":t,onMouseEnter:()=>N(t),onClick:()=>Z(e),children:[(0,p.jsx)(te,{user:e,size:28}),(0,p.jsxs)(`div`,{className:`user-picker-user-info`,children:[(0,p.jsx)(`span`,{className:`user-picker-user-name`,children:e.name}),e.subLabel&&(0,p.jsx)(`span`,{className:`user-picker-user-sub`,children:e.subLabel})]}),n&&(0,p.jsx)(`span`,{className:`user-picker-check`,"aria-hidden":`true`,children:(0,p.jsx)(o,{})})]},e.id)})})]}),document.body):null,se=(0,p.jsxs)(`div`,{ref:B,className:`user-picker-dropdown-wrapper`,style:ae,onKeyDown:Q,children:[(0,p.jsxs)(`button`,{ref:V,id:w,type:`button`,className:`user-picker-trigger`,disabled:d,"aria-haspopup":`listbox`,"aria-expanded":E,"aria-controls":E?T:void 0,"aria-required":u,"data-required":u||void 0,"data-open":E||void 0,onClick:re,children:[J?(0,p.jsx)(`span`,{className:`user-picker-trigger-user`,children:(0,p.jsx)(`span`,{className:`user-picker-trigger-name`,children:J.name})}):(0,p.jsx)(`span`,{className:`user-picker-trigger-value`,"data-placeholder":!0,children:t}),(0,p.jsx)(`span`,{className:`user-picker-chevron`,"aria-hidden":`true`,children:(0,p.jsx)(c,{})})]}),oe]}),ce=i?(0,p.jsx)(`span`,{className:`user-picker-helper-text`,children:i}):null,le=e?(0,p.jsx)(`span`,{className:`user-picker-label`,children:e}):null;return l===`horizontal`&&e?(0,p.jsx)(`div`,{className:`user-picker-root`,style:x,"data-variant":$,children:(0,p.jsxs)(`div`,{className:`user-picker-form-row`,style:S?{gridTemplateColumns:S}:void 0,children:[le,(0,p.jsxs)(`div`,{className:`user-picker-field-column`,children:[se,ce]})]})}):(0,p.jsxs)(`div`,{className:`user-picker-root user-picker-vertical`,style:x,"data-variant":$,children:[le,se,ce]})}var p,m,h,g,_,v=e((()=>{p=i(),m=t(n(),1),h=t(r(),1),l(),s(),g=[`#5464F2`,`#12AA67`,`#F5A623`,`#E85D4A`,`#9B51E0`,`#2D9CDB`,`#27AE60`,`#EB5757`,`#F2994A`,`#6FCF97`],_=()=>(0,p.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,"aria-hidden":`true`,children:(0,p.jsx)(`path`,{d:`M1 1L7 7M7 1L1 7`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})}),f.__docgenInfo={description:``,methods:[],displayName:`UserPicker`,props:{placeholder:{defaultValue:{value:`'Select user'`,computed:!1},required:!1},users:{defaultValue:{value:`[]`,computed:!1},required:!1},width:{defaultValue:{value:`390`,computed:!1},required:!1},layout:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1}}}}));function y({initialValue:e,label:t,layout:n,width:r,disabled:i,error:a,required:o,helperText:s}){let[c,l]=(0,b.useState)(e);return(0,x.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,x.jsx)(f,{label:t,placeholder:`Select user`,value:c,users:C,onChange:l,layout:n,width:r??390,disabled:i,error:a,required:o,helperText:s})})}var b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{b=t(n(),1),v(),x=i(),S={title:`Design System/Components/UserPicker`,component:f,parameters:{layout:`padded`,docs:{description:{component:`User selection dropdown. Shows a searchable list of users with avatar, name, and email. Selected user is indicated by a checkmark and previewed in the trigger with an avatar circle. Figma: Chinnaiya-Style-Sheet node 93656-149883.`}}},argTypes:{users:{control:!1},onChange:{control:!1},value:{control:`text`},width:{control:`number`},layout:{control:`radio`,options:[`horizontal`,`vertical`]},disabled:{control:`boolean`},error:{control:`boolean`},required:{control:`boolean`}}},C=[{id:`u1`,name:`Saravanan Selvaraj`,subLabel:`saravanan.s@zohocorp.com`,avatarUrl:`/images/avatars/user_01.jpg`},{id:`u2`,name:`Chinnaiya R`,subLabel:`chinnaiya.r@zohocorp.com`,avatarUrl:`/images/avatars/user_02.jpg`},{id:`u3`,name:`Priya Nair`,subLabel:`priya.nair@zohocorp.com`,avatarUrl:`/images/avatars/user_03.jpg`},{id:`u4`,name:`Arjun Sharma`,subLabel:`arjun.sharma@zohocorp.com`,avatarUrl:`/images/avatars/user_04.jpg`},{id:`u5`,name:`Divya Krishnan`,subLabel:`divya.k@zohocorp.com`,avatarUrl:`/images/avatars/user_05.jpg`},{id:`u6`,name:`Ranjith Kumar`,subLabel:`ranjith.k@zohocorp.com`,avatarUrl:`/images/avatars/user_06.jpg`},{id:`u7`,name:`Meena Sundaram`,subLabel:`meena.s@zohocorp.com`,avatarUrl:`/images/avatars/user_07.jpg`},{id:`u8`,name:`Vikram Anand`,subLabel:`vikram.a@zohocorp.com`,avatarUrl:`/images/avatars/user_08.jpg`},{id:`u9`,name:`Lakshmi Venkat`,subLabel:`lakshmi.v@zohocorp.com`},{id:`u10`,name:`Suresh Babu`,subLabel:`suresh.b@zohocorp.com`},{id:`u11`,name:`Kavitha Ramesh`,subLabel:`kavitha.r@zohocorp.com`},{id:`u12`,name:`Murugan Selvam`,subLabel:`murugan.s@zohocorp.com`}],w={name:`Default`,parameters:{controls:{disable:!0}},render:()=>(0,x.jsx)(y,{label:`Lead Owner`,layout:`horizontal`,width:390})},T={name:`With Selection`,parameters:{controls:{disable:!0}},render:()=>(0,x.jsx)(y,{label:`Lead Owner`,layout:`horizontal`,width:390,initialValue:`u2`})},E={name:`Vertical`,parameters:{controls:{disable:!0}},render:()=>(0,x.jsx)(`div`,{style:{padding:24,background:`#fff`},children:(0,x.jsx)(f,{placeholder:`Select user`,users:C,layout:`vertical`,width:390})})},D={name:`Error State`,parameters:{controls:{disable:!0}},render:()=>(0,x.jsx)(y,{label:`Lead Owner`,layout:`horizontal`,width:390,error:!0,helperText:`Please select a user.`,required:!0})},O={name:`Disabled`,parameters:{controls:{disable:!0}},render:()=>(0,x.jsx)(y,{label:`Lead Owner`,layout:`horizontal`,width:390,initialValue:`u1`,disabled:!0})},k={"All Users":C.map(e=>e.id),Managers:[`u1`,`u2`,`u3`],Admins:[`u4`,`u5`]},A={name:`With Filter`,parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,b.useState)(),[n,r]=(0,b.useState)(C.map(e=>e.id));return(0,x.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,x.jsx)(f,{label:`Lead Owner`,placeholder:`Select user`,value:e,users:C.filter(e=>n.includes(e.id)),onChange:t,layout:`horizontal`,width:390,filters:[{id:`role`,options:[`All Users`,`Managers`,`Admins`]}],onFilterChange:(e,t)=>{r(k[t]??C.map(e=>e.id))}})})}},j={name:`With Dual Filter`,parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,b.useState)();return(0,x.jsx)(`div`,{style:{padding:24,background:`#fff`,minWidth:500},children:(0,x.jsx)(f,{label:`Lead Owner`,placeholder:`Select user`,value:e,users:C,onChange:t,layout:`horizontal`,width:390,filters:[{id:`type`,options:[`Roles`,`Users`,`Teams`]},{id:`access`,options:[`Managers`,`Admins`,`Members`]}]})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} />
}`,...w.parameters?.docs?.source},description:{story:`Default — no user pre-selected; search filters by name or email.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Selection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} initialValue="u2" />
}`,...T.parameters?.docs?.source},description:{story:`Pre-selected user shown in the trigger with their photo.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Vertical layout — label stacked above trigger.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} error helperText="Please select a user." required />
}`,...D.parameters?.docs?.source},description:{story:`Error state — validation message below the trigger.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Interactive label="Lead Owner" layout="horizontal" width={390} initialValue="u1" disabled />
}`,...O.parameters?.docs?.source},description:{story:`Disabled — trigger is non-interactive.`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Single filter bar above search (e.g. "All Users" dropdown).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Two filter bars side-by-side (Roles | Managers).`,...j.parameters?.docs?.description}}},M=[`Default`,`WithSelection`,`Vertical`,`ErrorState`,`Disabled`,`WithFilter`,`WithDualFilter`]}))();export{w as Default,O as Disabled,D as ErrorState,E as Vertical,j as WithDualFilter,A as WithFilter,T as WithSelection,M as __namedExportsOrder,S as default};