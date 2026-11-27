import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-XZfgAIhB.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-CyIwDSWy.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./UserSelectionModal.data-mUoKoRey.js";function f(e){let[t,n]=(0,p.useState)(!0),[r,i]=(0,p.useState)(e.value);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>n(!0),children:`Select Users`}),(0,m.jsx)(`p`,{role:`status`,children:r.length?`Selected: ${r.map(e=>e.label).join(`, `)}`:`No recipients selected`}),t&&(0,m.jsx)(o,{...e,value:r,onClose:()=>n(!1),onSave:e=>{i(e),n(!1)}})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{p=t(n(),1),i(),l(),s(),m=r(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Design System/Components/User Selection Modal`,component:o,parameters:{layout:`centered`},args:{options:u,value:[]}},b={render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`})),r=v(t.getByRole(`region`,{name:`Selected recipients`}));await _(()=>h(t.getByRole(`heading`,{name:`Available`})).toBeVisible()),await h(t.getByRole(`heading`,{name:`Selected`})).toBeVisible(),await h(r.getByText(`No results found`)).toBeVisible();let i=t.getByRole(`button`,{name:`Recipient type`}),a=n.getByRole(`searchbox`).closest(`label`);await _(()=>{let e=i.getBoundingClientRect().width,t=a.getBoundingClientRect().width;h(e/(e+t)).toBeCloseTo(.4,2)});let o=getComputedStyle(i).borderRightColor,s=getComputedStyle(a).borderBottomColor;i.focus(),await _(()=>{h(getComputedStyle(i).boxShadow).toBe(`none`),h(getComputedStyle(i).outlineStyle).toBe(`none`),h(getComputedStyle(i).borderBottomColor).not.toBe(s),h(getComputedStyle(i).borderRightColor).toBe(o)});let c=t.getByRole(`dialog`),l=c.getBoundingClientRect().height;await h(l).toBeCloseTo(Math.min(600,window.innerHeight*.9),0);let u=a.parentElement.getBoundingClientRect().height;n.getByRole(`searchbox`).focus(),await _(()=>{h(getComputedStyle(a).borderBottomColor).not.toBe(s),h(getComputedStyle(a).boxShadow).toBe(`none`),h(getComputedStyle(i).borderRightColor).toBe(o),h(getComputedStyle(i).borderBottomColor).toBe(s),h(getComputedStyle(i).boxShadow).toBe(`none`),h(a.parentElement.getBoundingClientRect().height).toBe(u)}),i.focus(),await _(()=>h(getComputedStyle(a).borderBottomColor).toBe(s)),i.blur(),await h(r.queryByRole(`button`,{name:/^Users -/})).not.toBeInTheDocument();let d=n.getByRole(`button`,{name:/Esther Howard/});d.focus(),await _(()=>h(v(d).getByText(`Add`)).toBeVisible()),await g.click(d),await h(n.queryByRole(`button`,{name:/Esther Howard/})).not.toBeInTheDocument();let f=r.getByRole(`button`,{name:`Users - 1`});await h(f).toBeVisible(),await h(f).toHaveTextContent(`Users - 1`);let p=t.getByRole(`region`,{name:`Available recipients`}),m=t.getByRole(`region`,{name:`Selected recipients`});await h(m.getBoundingClientRect().height).toBe(p.getBoundingClientRect().height),await h(getComputedStyle(f.parentElement).borderTopColor).toBe(`rgb(220, 219, 238)`),await h(getComputedStyle(m.parentElement).borderTopColor).toBe(`rgb(220, 219, 238)`);let y=m.getBoundingClientRect().height,b=r.getByRole(`button`,{name:`Remove Esther Howard`});await h(b.querySelector(`svg`)).toBeInTheDocument(),await h(getComputedStyle(b.closest(`.tags-tag`)).height).toBe(`27px`),await g.click(b),await h(m.getBoundingClientRect().height).toBe(y),await h(p.getBoundingClientRect().height).toBe(y),await h(c.getBoundingClientRect().height).toBe(l),await h(n.getByRole(`button`,{name:/Esther Howard/})).toBeVisible(),await h(r.queryByRole(`button`,{name:/^Users -/})).not.toBeInTheDocument(),await g.type(n.getByRole(`searchbox`),`Jacob`),await h(n.getByRole(`button`,{name:/Jacob Jones/})).toBeVisible(),await h(n.queryByRole(`button`,{name:/Esther Howard/})).not.toBeInTheDocument();let x=n.getByRole(`button`,{name:`Clear search`});await h(x).toHaveClass(`dropdown-clear-btn`),await h(getComputedStyle(x).width).toBe(`16px`),await h(getComputedStyle(x).height).toBe(`16px`),await g.click(x),await h(n.getByRole(`searchbox`)).toHaveValue(``),await h(n.getByRole(`searchbox`)).toHaveFocus(),await h(n.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument(),await h(n.getByRole(`button`,{name:/Esther Howard/})).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Cancel`})),await h(t.getByRole(`status`)).toHaveTextContent(`No recipients selected`)}},x={args:{value:u.filter(e=>[`user:louisa`,`user:divakar`,`user:cisco`,`user:darlene`,`group:visual`,`group:product`].includes(e.value))},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Selected recipients`}));await _(()=>h(n.getByRole(`button`,{name:`Users - 4`})).toBeVisible()),await h(n.getByRole(`button`,{name:`Groups - 2`})).toBeVisible(),await h(n.queryByRole(`button`,{name:/^Roles/})).not.toBeInTheDocument();let r=n.getByText(`Visual Design`).closest(`.tags-tag`);await h(r).toBeVisible(),await h(r.querySelector(`.user-selection-avatar`)).toBeNull(),await h(n.queryByText(`Marvin McKinney`)).not.toBeInTheDocument(),await h(n.getByRole(`button`,{name:`Remove Visual Design`})).toBeInTheDocument(),await h(r.getBoundingClientRect().height).toBe(27),await h(n.getByText(`Louisa Grand`).closest(`.tags-tag`).getBoundingClientRect().height).toBe(27);let i=n.getByRole(`button`,{name:`Groups - 2`}),a=getComputedStyle(i),o={color:a.color,fontSize:a.fontSize,fontWeight:a.fontWeight},s=r.closest(`.user-selection-section-body`),c=i.querySelector(`.user-selection-section-chevron svg path`),l=()=>{let e=c.getBoundingClientRect(),t=i.getBoundingClientRect();return{x:e.x-t.x,y:e.y-t.y,width:e.width,height:e.height}},u=l(),d=()=>{let e=l();h(e.x).toBeCloseTo(u.x,1),h(e.y).toBeCloseTo(u.y,1),h(e.width).toBeCloseTo(u.width,1),h(e.height).toBeCloseTo(u.height,1)};await g.click(i),await h(i).toHaveAttribute(`aria-expanded`,`false`),await h(i).toHaveTextContent(`Groups - 2`),await h(s).toHaveAttribute(`inert`),await _(()=>h(s.getBoundingClientRect().height).toBe(0)),await _(d);for(let[e,t]of Object.entries(o))await h(getComputedStyle(i)[e]).toBe(t);await g.click(i),await h(i).toHaveAttribute(`aria-expanded`,`true`),await h(i).toHaveTextContent(`Groups - 2`),await h(s).not.toHaveAttribute(`inert`),await _(()=>h(s.getBoundingClientRect().height).toBeGreaterThan(0)),await _(d),await h(n.getByText(`Visual Design`)).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Done`})),await h(t.getByRole(`status`)).toHaveTextContent(`Visual Design`)}},S={args:{value:[`Pre-Sale`,`Visual CRM Lab`,`Approval Group`,`Marketing`,`test56789`,`Design Team 45`].flatMap(e=>u.filter(t=>t.kind===`group`&&t.label===e))},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Selected recipients`}));await _(()=>h(n.getByRole(`button`,{name:`Groups - 6`})).toBeVisible()),await h(n.getAllByRole(`button`,{name:/^Remove /})).toHaveLength(6),await h(n.getByText(`Design Team 45`)).toBeVisible(),await h(n.getByText(`Pre-Sale`).closest(`.user-selection-section`).querySelector(`.user-selection-avatar`)).toBeNull(),await g.hover(n.getByText(`Pre-Sale`)),await g.click(n.getByRole(`button`,{name:`Remove Pre-Sale`})),await h(n.getByRole(`button`,{name:`Groups - 5`})).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Done`})),await h(t.getByRole(`status`)).toHaveTextContent(`Design Team 45`),await h(t.getByRole(`status`)).not.toHaveTextContent(`Pre-Sale`)}},C={args:{value:u.filter(e=>[`role:administrator`,`hierarchy:sales-manager`].includes(e.value))},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=t.getByRole(`button`,{name:`Recipient type`});await g.click(n);let r=t.getByRole(`option`,{name:`Roles and Subordinates`});await h(r).toBeVisible();let i=v(r).getByText(`Roles and Subordinates`);await _(()=>{h(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth),h(r.getBoundingClientRect().width).toBeGreaterThan(n.getBoundingClientRect().width),h(t.getByRole(`listbox`).getBoundingClientRect().left).toBeCloseTo(n.getBoundingClientRect().left-1,0)}),await g.click(r),await h(n).toHaveTextContent(`Roles and Subordinates`)}},w={args:{allowAdditionalEmails:!0,value:[{value:`email:operations@example.com`,label:`operations@example.com`,kind:`email`}]},render:e=>(0,m.jsx)(f,{...e})},T={args:{options:[{value:`user:long`,kind:`user`,label:`Alexandra Catherine Montgomery-Wellington with a very long display name from the International Customer Operations Department`,detail:`alexandra.catherine.montgomery.wellington@international-operations.example.com`}]},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`})),r=v(t.getByRole(`region`,{name:`Selected recipients`})),i=n.getByRole(`button`,{name:/Alexandra Catherine/});for(let e of[v(i).getByText(/Alexandra Catherine/),v(i).getByText(/alexandra\.catherine/)])await h(getComputedStyle(e).whiteSpace).toBe(`nowrap`),await h(getComputedStyle(e).textOverflow).toBe(`ellipsis`),await h(e.scrollWidth).toBeGreaterThan(e.clientWidth);await g.click(i);let a=r.getByText(/Alexandra Catherine/);await h(getComputedStyle(a).whiteSpace).toBe(`nowrap`),await h(getComputedStyle(a).textOverflow).toBe(`ellipsis`),await h(a.scrollWidth).toBeGreaterThan(a.clientWidth),await g.click(t.getByRole(`button`,{name:`Done`})),await h(t.getByRole(`status`)).toHaveTextContent(`Alexandra Catherine`)}},E={args:{options:[]},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`})),r=n.getByText(`No users available`);await _(()=>h(r).toBeVisible());let i=r.parentElement.getBoundingClientRect(),a=r.getBoundingClientRect();await h(a.height).toBeCloseTo(i.height,0),await g.type(n.getByRole(`searchbox`),`missing`),await h(n.getByText(`No results found`)).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Recipient type`})),await g.click(t.getByRole(`option`,{name:`Groups`})),await h(n.getByText(`No groups available`)).toBeVisible()}},D={render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`})),r=v(t.getByRole(`region`,{name:`Selected recipients`}));for(let[e,i]of[[`Groups`,`Visual CRM Lab`],[`Roles`,`Administrator`],[`Roles and Subordinates`,`Sales Manager`],[`Territories`,`North Zone`],[`Territories and Sub-territories`,`West Zone`]]){await g.click(t.getByRole(`button`,{name:`Recipient type`})),await g.click(t.getByRole(`option`,{name:e}));let a=n.getByRole(`button`,{name:i});await h(a.querySelector(`.user-selection-avatar`)).toBeNull(),await h(a.getBoundingClientRect().height).toBe(47),await g.click(a),await h(n.queryByRole(`button`,{name:i})).not.toBeInTheDocument(),await h(r.getByRole(`button`,{name:`${e} - 1`})).toBeVisible();let o=r.getByText(i,{exact:!0}).closest(`.tags-tag`);await h(o.querySelector(`.user-selection-avatar`)).toBeNull(),await h(getComputedStyle(o.parentElement.parentElement).flexWrap).toBe(`wrap`),await g.click(r.getByRole(`button`,{name:`Remove ${i}`})),await h(r.queryByRole(`button`,{name:`${e} - 1`})).not.toBeInTheDocument(),await g.click(n.getByRole(`button`,{name:i}))}await g.click(t.getByRole(`button`,{name:`Done`})),await h(t.getByRole(`status`)).toHaveTextContent(`North Zone`),await h(t.getByRole(`status`)).toHaveTextContent(`West Zone`)}},O={args:{variant:`individual-users`,options:c,allowAdditionalEmails:!0,additionalRecipientOptions:d},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`})),r=v(t.getByRole(`region`,{name:`Selected recipients`})),i=async e=>{await g.click(t.getByRole(`button`,{name:`Recipient type`})),await g.click(t.getByRole(`option`,{name:e}))};await g.click(n.getByRole(`button`,{name:/Esther Howard/})),await h(n.queryByRole(`button`,{name:/Esther Howard/})).not.toBeInTheDocument(),await i(`Groups`),await h(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`Sales Group`);let a=t.getByRole(`button`,{name:`Recipient collection`});await _(()=>{let e=a.getBoundingClientRect().width,t=n.getByRole(`searchbox`).closest(`label`).getBoundingClientRect().width;h(e/(e+t)).toBeCloseTo(.4,2)}),h(getComputedStyle(t.getByRole(`heading`,{name:`Available`})).paddingRight).toBe(`10px`),await g.click(a);let o=t.getByRole(`listbox`);await _(()=>{h(o.getBoundingClientRect().width).toBeGreaterThanOrEqual(a.getBoundingClientRect().width),h(o.style.width).toBe(`max-content`),h(o.getBoundingClientRect().right).toBeLessThanOrEqual(e.ownerDocument.defaultView.innerWidth)}),await g.keyboard(`{Escape}`);let s=n.getByRole(`button`,{name:/Esther Howard/});await h(v(s).getByText(`Added`)).toBeVisible(),await h(s).toHaveAttribute(`aria-disabled`,`true`),await g.click(s),await h(r.getAllByRole(`button`,{name:/^Remove /})).toHaveLength(1),await g.click(n.getByRole(`button`,{name:/Jacob Jones/})),await h(r.getByRole(`heading`,{name:`Sales Group - 1`})).toBeVisible(),await h(r.getByRole(`button`,{name:`Groups - 1`})).toBeVisible(),await h(getComputedStyle(r.getByRole(`button`,{name:`Groups - 1`})).fontSize).toBe(`13px`);let c=r.getByRole(`heading`,{name:`Sales Group - 1`});await h(getComputedStyle(c).fontSize).toBe(`12px`),await h(getComputedStyle(c.querySelector(`.user-selection-section-count`)).fontSize).toBe(`12px`),await h(s.querySelector(`.user-selection-added svg`)).not.toBeNull(),await i(`Roles`),await h(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`CEO`),await h(v(n.getByRole(`button`,{name:/Jacob Jones/})).getByText(`Added`)).toBeVisible(),await g.click(n.getByRole(`button`,{name:/Albert Flores/})),await h(r.getByRole(`heading`,{name:`CEO - 1`})).toBeVisible(),await g.click(r.getByRole(`button`,{name:`Remove Jacob Jones`})),await h(r.queryByRole(`button`,{name:`Groups - 1`})).not.toBeInTheDocument(),await h(v(n.getByRole(`button`,{name:/Jacob Jones/})).queryByText(`Added`)).not.toBeInTheDocument(),await g.click(n.getByRole(`button`,{name:/Jacob Jones/})),await h(r.getByRole(`heading`,{name:`CEO - 2`})).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Done`})),await h(t.getByRole(`status`)).toHaveTextContent(`Selected: Esther Howard, Albert Flores, Jacob Jones`),await h(t.getByRole(`status`)).not.toHaveTextContent(`CEO`),await g.click(t.getByRole(`button`,{name:`Select Users`})),await _(()=>h(v(t.getByRole(`region`,{name:`Selected recipients`})).getByRole(`heading`,{name:`CEO - 2`})).toBeVisible()),await g.click(t.getByRole(`button`,{name:`Cancel`}))}},k={args:{variant:`individual-users`,options:c,maxSelections:5,allowAdditionalEmails:!0,value:c.filter(e=>[`user:esther`,`user:jacob`,`user:albert`,`user:divakar`,`user:marvin`].includes(e.value)).map((e,t)=>({...e,...t===2?{source:{value:`group:sales-group`,label:`Sales Group`,kind:`group`}}:t>2?{source:{value:`role:ceo`,label:`CEO`,kind:`role`}}:{}}))},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body),n=v(t.getByRole(`region`,{name:`Available recipients`}));await g.click(n.getByRole(`button`,{name:/Louisa Grand/})),await h(t.getByRole(`alert`)).toHaveTextContent(`Select up to 5 recipients.`),await g.click(t.getByRole(`button`,{name:`Recipient type`})),await g.click(t.getByRole(`option`,{name:`Territories`})),await h(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`North Zone`),await h(n.getByRole(`button`,{name:/Esther Howard/})).toHaveAttribute(`aria-pressed`,`true`),await g.click(t.getByRole(`button`,{name:`Remove Albert Flores`})),await g.click(n.getByRole(`button`,{name:/Prakash Sekar/}));let r=v(t.getByRole(`region`,{name:`Selected recipients`}));await h(r.getByRole(`heading`,{name:`North Zone - 1`})).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Cancel`})),await h(t.getByRole(`status`)).toHaveTextContent(`Albert Flores`),await h(t.getByRole(`status`)).not.toHaveTextContent(`Prakash Sekar`)}},A={args:{variant:`individual-users`,options:[{value:`group:empty`,kind:`group`,label:`New Group`,members:[]}]},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body);await g.click(t.getByRole(`button`,{name:`Recipient type`})),await g.click(t.getByRole(`option`,{name:`Groups`})),await h(t.getByRole(`button`,{name:`Recipient collection`})).toHaveTextContent(`New Group`),await h(t.getByText(`No users available`)).toBeVisible(),await h(t.getByRole(`region`,{name:`Available recipients`}).querySelector(`.user-selection-result`)).toBeNull()}},j={args:{variant:`individual-users`,options:c,allowAdditionalEmails:!0,additionalRecipientOptions:d},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body);await h(t.queryByText(/^Email: You can select up to/)).toBeNull(),await h(t.queryByText(/^Push Notifications: You can select up to/)).toBeNull();let n=t.getByRole(`button`,{name:`Add Additional Recipient`});await _(()=>h(n).toBeVisible()),await h(n.closest(`.modal-footer`)).not.toBeNull();let r=n.closest(`.modal-dialog`),i=v(r).getByRole(`region`,{name:`Available recipients`}),a=v(r).getByRole(`region`,{name:`Selected recipients`}),o=i.getBoundingClientRect().height,s=r.getBoundingClientRect().height;await g.click(t.getByRole(`button`,{name:`Add Additional Recipient`}));let c=v(t.getByRole(`dialog`,{name:`Select Recipient`}));await h(c.getAllByRole(`checkbox`)).toHaveLength(10);let l=c.getByRole(`searchbox`,{name:`Search additional recipients`});await h(l.closest(`.modal-header-title-row`)).not.toBeNull();let u=c.getByRole(`heading`,{name:`Select Recipient`}),d=l.closest(`.input-root`).getBoundingClientRect(),f=u.getBoundingClientRect();await h(Math.abs(d.left-f.right-10)).toBeLessThan(1),await h(getComputedStyle(l).fontFamily).toContain(`Puvi`),await h(getComputedStyle(l,`::placeholder`).fontFamily).toContain(`Puvi`);let p=getComputedStyle(l).getPropertyValue(`--ds-font-size-base`).trim();await h(getComputedStyle(l).fontSize).toBe(p),await h(getComputedStyle(l,`::placeholder`).fontSize).toBe(p),await g.type(l,`  OPERATIONS  `),await h(c.getAllByRole(`checkbox`)).toHaveLength(1),await g.click(c.getByRole(`checkbox`,{name:`Select Operations`})),await g.clear(l),await g.type(l,`alerts@example.com`),await h(c.getAllByRole(`checkbox`)).toHaveLength(1),await h(c.getByRole(`checkbox`,{name:`Select Alerts`})).not.toBeChecked(),await g.clear(l),await g.type(l,`no-matching-recipient`),await h(c.getByText(`No recipients found`)).toBeVisible(),await g.click(c.getByRole(`button`,{name:`Clear recipient search`})),await h(l).toHaveFocus(),await h(c.getAllByRole(`checkbox`)).toHaveLength(10),await h(c.getByRole(`checkbox`,{name:`Select Operations`})).toBeChecked(),await g.click(c.getByRole(`checkbox`,{name:`Select Operations`})),await _(()=>{let e=c.getByText(`Display Name`).getBoundingClientRect(),t=c.getAllByRole(`checkbox`)[0].closest(`.checkbox-root`).querySelector(`.checkbox-label-text`).getBoundingClientRect();h(Math.abs(e.left-t.left)).toBeLessThanOrEqual(1)}),await h(t.getByRole(`dialog`,{name:`Select Recipient`}).querySelector(`.table-resize-handle`)).toBeNull(),await h(c.getByRole(`checkbox`,{name:`Select Support`})).toBeDisabled(),await h(t.getByRole(`dialog`,{name:`Select Recipient`}).querySelector(`.table-report`)).toBeNull();let m=c.getByRole(`button`,{name:`Create Recipient`});await h(m).toHaveAttribute(`data-variant`,`outline-blue`),await g.click(m);let y=v(t.getByRole(`dialog`,{name:`Create Recipient`}));await g.type(y.getByRole(`textbox`,{name:/Display Name/}),`Finance Team`),await g.type(y.getByRole(`textbox`,{name:/^Email/}),`finance-team@example.com`),await g.click(y.getByRole(`button`,{name:`Cancel`})),await h(c.queryByRole(`checkbox`,{name:`Select Finance Team`})).not.toBeInTheDocument(),await g.click(m),y=v(t.getByRole(`dialog`,{name:`Create Recipient`}));let b=y.getByRole(`textbox`,{name:/Display Name/}),x=y.getByRole(`textbox`,{name:/^Email/});await _(()=>h(y.getByRole(`heading`,{name:`Create Recipient`})).toBeVisible()),await _(()=>h(b).toHaveFocus()),await g.click(y.getByRole(`button`,{name:`Save`})),await h(b).toBeRequired(),await h(x).toBeRequired(),await h(b).toHaveAttribute(`aria-invalid`,`true`),await h(x).toHaveAttribute(`aria-invalid`,`true`),await h(b).toHaveAccessibleDescription(`Display Name cannot be empty.`),await h(x).toHaveAccessibleDescription(`Email cannot be empty.`),await h(y.getAllByRole(`alert`)).toHaveLength(2),await h(b.closest(`.input-root`)).toHaveAttribute(`data-variant`,`error`),await g.type(x,`invalid-email`),await g.click(y.getByRole(`button`,{name:`Save`})),await h(x).toHaveAccessibleDescription(`Enter a valid email address.`),await g.clear(x),await g.type(x,`operations@example.com`),await g.click(y.getByRole(`button`,{name:`Save`})),await h(x).toHaveAccessibleDescription(`A recipient with this email address already exists.`),await g.clear(x),await g.type(b,`Finance Team`),await h(b).toHaveAttribute(`aria-invalid`,`false`),await g.type(y.getByRole(`textbox`,{name:/^Email/}),`finance-team@example.com`),await g.click(y.getByRole(`button`,{name:`Save`})),await h(c.getByRole(`checkbox`,{name:`Select Finance Team`})).toBeDisabled();let S=c.getByRole(`checkbox`,{name:`Select Finance Team`}).closest(`tr`);await h(S).toBe(c.getAllByRole(`checkbox`)[0].closest(`tr`)),await h(S.querySelector(`[data-new-recipient]`)).not.toBeNull(),await _(()=>h(getComputedStyle(S).backgroundColor).toBe(`rgb(253, 250, 222)`)),await _(()=>h(S.querySelector(`[data-new-recipient]`)).toBeNull(),{timeout:6e3}),await _(()=>h(getComputedStyle(S).backgroundColor).not.toBe(`rgb(253, 250, 222)`));let C=c.getByRole(`checkbox`,{name:`Select Finance Team`}).closest(`label`).querySelector(`.checkbox-label-text`);await h(getComputedStyle(C).opacity).toBe(`1`);let w=c.getByRole(`checkbox`,{name:`Select Operations`}).closest(`tr`),T=v(w).getByRole(`button`,{name:`More options for Operations`}),E=T.closest(`.user-selection-recipient-actions`);await g.hover(c.getByRole(`heading`,{name:`Select Recipient`})),await h(getComputedStyle(E).opacity).toBe(`0`),c.getByRole(`checkbox`,{name:`Select Operations`}).focus(),await h(getComputedStyle(E).opacity).toBe(`0`),await _(()=>{T.focus(),h(T).toHaveFocus(),h(T).toBeVisible()}),await h(T.getBoundingClientRect().left).toBeLessThan(c.getByRole(`checkbox`,{name:`Select Operations`}).getBoundingClientRect().left),await h(getComputedStyle(T).backgroundColor).toBe(`rgb(255, 255, 255)`),await h(getComputedStyle(T).borderTopStyle).toBe(`solid`),await _(()=>h(getComputedStyle(T).borderTopColor).toBe(`rgb(197, 196, 211)`)),await _(()=>h(getComputedStyle(w).backgroundColor).toBe(`rgb(247, 248, 251)`));let D=getComputedStyle(w).backgroundColor;await g.click(T);let O=t.getByRole(`option`,{name:`Edit`,exact:!0}).closest(`.dropdown-panel`);await h(O.getBoundingClientRect().width).toBeGreaterThanOrEqual(120);let k=v(O).getByRole(`option`,{name:`Edit`,exact:!0});await h(O.querySelector(`.dropdown-option-check`)).toBeNull();let A=k.getBoundingClientRect();await h(e.ownerDocument.elementFromPoint(A.x+A.width/2,A.y+A.height/2)?.closest(`[role="option"]`)).toBe(k),await g.hover(k),await h(getComputedStyle(w).backgroundColor).toBe(D),await h(getComputedStyle(T).backgroundColor).toBe(`rgb(255, 255, 255)`),await g.click(k);let j=t.getByRole(`dialog`,{name:`Edit Recipient`}),M=v(j);await _(()=>h(M.getByDisplayValue(`Operations`)).toBeVisible());let N=M.getByText(/A confirmation email will be sent/);await h(N).toBeVisible(),await h(N.closest(`.msg-info-root`)).not.toHaveClass(`msg-info-multi`),await h(N.closest(`.msg-info-root`).querySelector(`ul`)).toBeNull(),await h(j.getBoundingClientRect().width).toBeLessThanOrEqual(625);let P=j.querySelector(`.modal-body`);await h(P.scrollWidth).toBeLessThanOrEqual(P.clientWidth);for(let e of M.getAllByRole(`textbox`)){let t=e.closest(`.input-input-wrapper`).getBoundingClientRect();await h(j.getBoundingClientRect().right-t.right).toBeGreaterThanOrEqual(29),await h(t.width).toBeGreaterThan(0),window.innerWidth>=762&&await h(t.width).toBe(390),await h(getComputedStyle(e.closest(`.input-input-wrapper`),`::before`).display).toBe(`none`)}await g.clear(M.getByDisplayValue(`Operations`)),await g.type(M.getByRole(`textbox`,{name:/Display Name/}),`Operations Team`),await g.click(M.getByRole(`button`,{name:`Save`})),await h(c.getByRole(`checkbox`,{name:`Select Operations Team`})).toBeInTheDocument(),await g.hover(c.getByRole(`checkbox`,{name:`Select Support`}).closest(`tr`)),await g.click(c.getByRole(`button`,{name:`More options for Support`})),await g.click(t.getByRole(`option`,{name:`Delete`,exact:!0}));let F=v(await t.findByRole(`alertdialog`,{name:`Delete "Support"`}));await h(c.getByRole(`checkbox`,{name:`Select Support`})).toBeInTheDocument(),await g.click(F.getByRole(`button`,{name:`Cancel`,exact:!0})),await _(()=>h(t.queryByRole(`alertdialog`)).toBeNull()),await h(c.getByRole(`checkbox`,{name:`Select Support`})).toBeInTheDocument(),await g.hover(c.getByRole(`checkbox`,{name:`Select Support`}).closest(`tr`)),await g.click(c.getByRole(`button`,{name:`More options for Support`})),await g.click(t.getByRole(`option`,{name:`Delete`,exact:!0})),F=v(await t.findByRole(`alertdialog`,{name:`Delete "Support"`})),await h(F.getByRole(`button`,{name:`Delete`,exact:!0})).toHaveAttribute(`data-variant`,`negative`),await g.click(F.getByRole(`button`,{name:`Delete`,exact:!0})),await _(()=>h(t.queryByRole(`alertdialog`)).toBeNull()),await h(c.queryByRole(`checkbox`,{name:`Select Support`})).not.toBeInTheDocument(),await g.click(c.getByRole(`checkbox`,{name:`Select Operations Team`})),await g.click(c.getByRole(`button`,{name:`Cancel`})),await h(t.queryByText(`operations@example.com`)).not.toBeInTheDocument(),await g.click(t.getByRole(`button`,{name:`Add Additional Recipient`})),c=v(t.getByRole(`dialog`,{name:`Select Recipient`})),await h(c.getByRole(`checkbox`,{name:`Select Operations Team`})).not.toBeChecked(),await g.click(c.getByRole(`checkbox`,{name:`Select Operations Team`})),await g.click(c.getByRole(`button`,{name:`Done`}));let I=t.getByRole(`button`,{name:`Edit additional recipients`}).closest(`.user-selection-recipient-field`);await h(v(I).getByText(`operations@example.com`)).toBeVisible(),await h(v(I).queryByRole(`textbox`)).not.toBeInTheDocument(),await h(v(I).queryByRole(`button`,{name:/^Remove /})).not.toBeInTheDocument();let L=v(I).getByRole(`button`,{name:`Edit additional recipients`});await h(L.getBoundingClientRect().width).toBeGreaterThanOrEqual(I.clientWidth-1);let R=()=>{let e=L.querySelector(`svg`).getBoundingClientRect();h(e.width).toBe(13),h(e.height).toBe(13);let t=I.querySelector(`.tags-tag`).getBoundingClientRect();h(Math.abs(e.top+e.height/2-t.top-t.height/2)).toBeLessThanOrEqual(1)};R();let z=I.style.minHeight;I.style.minHeight=`${I.clientHeight+40}px`,R(),I.style.minHeight=z,await g.click(L,{offsetX:8,offsetY:8}),c=v(t.getByRole(`dialog`,{name:`Select Recipient`})),await h(c.getByRole(`checkbox`,{name:`Select Operations Team`})).toBeChecked(),await g.click(c.getByRole(`button`,{name:`Cancel`})),await h(v(I).getByText(`operations@example.com`)).toBeVisible(),await h(i.getBoundingClientRect().height).toBeCloseTo(o,0),await h(a.getBoundingClientRect().height).toBeCloseTo(o,0),s<window.innerHeight*.9-1&&await h(r.getBoundingClientRect().height).toBeGreaterThan(s),await h(r.getBoundingClientRect().height).toBeLessThanOrEqual(window.innerHeight*.9+1),t.getByRole(`button`,{name:`Edit additional recipients`}).focus(),await h(t.getByRole(`button`,{name:`Edit additional recipients`})).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Edit additional recipients`})),c=v(t.getByRole(`dialog`,{name:`Select Recipient`})),await h(c.getByRole(`checkbox`,{name:`Select Operations Team`})).toBeChecked(),await g.click(c.getByRole(`checkbox`,{name:`Select Operations Team`})),await g.click(c.getByRole(`checkbox`,{name:`Select Alerts`})),await g.click(c.getByRole(`button`,{name:`Done`})),await h(v(I).queryByText(`operations@example.com`)).not.toBeInTheDocument(),await h(v(I).getByText(`alerts@example.com`)).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Done`})),await h(v(e).getByRole(`status`)).toHaveTextContent(`alerts@example.com`),await h(v(e).getByRole(`status`)).not.toHaveTextContent(`operations@example.com`)}},M={args:{variant:`individual-users`,allowAdditionalEmails:!0,options:Array.from({length:91},(e,t)=>({value:`user:operations-${t}`,label:`Operations User ${t+1}`,kind:`user`})),value:Array.from({length:90},(e,t)=>({value:`user:operations-${t}`,label:`Operations User ${t+1}`,kind:`user`})),additionalRecipientOptions:Array.from({length:11},(e,t)=>({value:`email:alerts-${t}@example.com`,label:`Alert Recipient ${t+1}`,email:`alerts-${t}@example.com`,verified:!0}))},render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=v(e.ownerDocument.body);await g.click(t.getByRole(`button`,{name:/Operations User 91/})),await h(t.getByRole(`alert`)).toHaveTextContent(`Select up to 90 users.`),await g.click(t.getByRole(`button`,{name:`Add Additional Recipient`}));let n=v(t.getByRole(`dialog`,{name:`Select Recipient`}));for(let e=1;e<=10;e++)await g.click(n.getByRole(`checkbox`,{name:RegExp(`^Select Alert Recipient `+e+`$`)}));await g.click(n.getByRole(`checkbox`,{name:/^Select Alert Recipient 11$/})),await h(n.getByRole(`alert`)).toHaveTextContent(`Select up to 10 additional recipients.`),await h(n.getByRole(`checkbox`,{name:/^Select Alert Recipient 11$/})).not.toBeChecked(),await g.click(n.getByRole(`button`,{name:`Done`})),await g.click(t.getByRole(`button`,{name:`Done`})),await h(v(e).getByRole(`status`)).toHaveTextContent(`alerts-9@example.com`),await h(v(e).getByRole(`status`)).not.toHaveTextContent(`alerts-10@example.com`)}},N={args:{maxSelections:2},render:e=>(0,m.jsx)(f,{...e})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    await waitFor(() => expect(page.getByRole('heading', {
      name: 'Available'
    })).toBeVisible());
    await expect(page.getByRole('heading', {
      name: 'Selected'
    })).toBeVisible();
    await expect(selected.getByText('No results found')).toBeVisible();
    const filter = page.getByRole('button', {
      name: 'Recipient type'
    });
    const search = directory.getByRole('searchbox').closest('label')!;
    await waitFor(() => {
      const filterWidth = filter.getBoundingClientRect().width;
      const searchWidth = search.getBoundingClientRect().width;
      expect(filterWidth / (filterWidth + searchWidth)).toBeCloseTo(0.4, 2);
    });
    const filterBorder = getComputedStyle(filter).borderRightColor;
    const searchBorder = getComputedStyle(search).borderBottomColor;
    filter.focus();
    await waitFor(() => {
      expect(getComputedStyle(filter).boxShadow).toBe('none');
      expect(getComputedStyle(filter).outlineStyle).toBe('none');
      expect(getComputedStyle(filter).borderBottomColor).not.toBe(searchBorder);
      expect(getComputedStyle(filter).borderRightColor).toBe(filterBorder);
    });
    const dialog = page.getByRole('dialog');
    const dialogHeight = dialog.getBoundingClientRect().height;
    await expect(dialogHeight).toBeCloseTo(Math.min(600, window.innerHeight * 0.9), 0);
    const rowHeight = search.parentElement!.getBoundingClientRect().height;
    directory.getByRole('searchbox').focus();
    await waitFor(() => {
      expect(getComputedStyle(search).borderBottomColor).not.toBe(searchBorder);
      expect(getComputedStyle(search).boxShadow).toBe('none');
      expect(getComputedStyle(filter).borderRightColor).toBe(filterBorder);
      expect(getComputedStyle(filter).borderBottomColor).toBe(searchBorder);
      expect(getComputedStyle(filter).boxShadow).toBe('none');
      expect(search.parentElement!.getBoundingClientRect().height).toBe(rowHeight);
    });
    filter.focus();
    await waitFor(() => expect(getComputedStyle(search).borderBottomColor).toBe(searchBorder));
    filter.blur();
    await expect(selected.queryByRole('button', {
      name: /^Users -/
    })).not.toBeInTheDocument();
    const esther = directory.getByRole('button', {
      name: /Esther Howard/
    });
    esther.focus();
    await waitFor(() => expect(within(esther).getByText('Add')).toBeVisible());
    await userEvent.click(esther);
    await expect(directory.queryByRole('button', {
      name: /Esther Howard/
    })).not.toBeInTheDocument();
    const usersHeading = selected.getByRole('button', {
      name: 'Users - 1'
    });
    await expect(usersHeading).toBeVisible();
    await expect(usersHeading).toHaveTextContent('Users - 1');
    const availablePanel = page.getByRole('region', {
      name: 'Available recipients'
    });
    const selectedPanel = page.getByRole('region', {
      name: 'Selected recipients'
    });
    await expect(selectedPanel.getBoundingClientRect().height).toBe(availablePanel.getBoundingClientRect().height);
    await expect(getComputedStyle(usersHeading.parentElement!).borderTopColor).toBe('rgb(220, 219, 238)');
    await expect(getComputedStyle(selectedPanel.parentElement!).borderTopColor).toBe('rgb(220, 219, 238)');
    const panelHeight = selectedPanel.getBoundingClientRect().height;
    const removeButton = selected.getByRole('button', {
      name: 'Remove Esther Howard'
    });
    await expect(removeButton.querySelector('svg')).toBeInTheDocument();
    await expect(getComputedStyle(removeButton.closest('.tags-tag')!).height).toBe('27px');
    await userEvent.click(removeButton);
    await expect(selectedPanel.getBoundingClientRect().height).toBe(panelHeight);
    await expect(availablePanel.getBoundingClientRect().height).toBe(panelHeight);
    await expect(dialog.getBoundingClientRect().height).toBe(dialogHeight);
    await expect(directory.getByRole('button', {
      name: /Esther Howard/
    })).toBeVisible();
    await expect(selected.queryByRole('button', {
      name: /^Users -/
    })).not.toBeInTheDocument();
    await userEvent.type(directory.getByRole('searchbox'), 'Jacob');
    await expect(directory.getByRole('button', {
      name: /Jacob Jones/
    })).toBeVisible();
    await expect(directory.queryByRole('button', {
      name: /Esther Howard/
    })).not.toBeInTheDocument();
    const clear = directory.getByRole('button', {
      name: 'Clear search'
    });
    await expect(clear).toHaveClass('dropdown-clear-btn');
    await expect(getComputedStyle(clear).width).toBe('16px');
    await expect(getComputedStyle(clear).height).toBe('16px');
    await userEvent.click(clear);
    await expect(directory.getByRole('searchbox')).toHaveValue('');
    await expect(directory.getByRole('searchbox')).toHaveFocus();
    await expect(directory.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
    await expect(directory.getByRole('button', {
      name: /Esther Howard/
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('No recipients selected');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: RECIPIENT_OPTIONS.filter(item => ['user:louisa', 'user:divakar', 'user:cisco', 'user:darlene', 'group:visual', 'group:product'].includes(item.value))
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    await waitFor(() => expect(selected.getByRole('button', {
      name: 'Users - 4'
    })).toBeVisible());
    await expect(selected.getByRole('button', {
      name: 'Groups - 2'
    })).toBeVisible();
    await expect(selected.queryByRole('button', {
      name: /^Roles/
    })).not.toBeInTheDocument();
    const groupChip = selected.getByText('Visual Design').closest('.tags-tag')!;
    await expect(groupChip).toBeVisible();
    await expect(groupChip.querySelector('.user-selection-avatar')).toBeNull();
    await expect(selected.queryByText('Marvin McKinney')).not.toBeInTheDocument();
    await expect(selected.getByRole('button', {
      name: 'Remove Visual Design'
    })).toBeInTheDocument();
    await expect(groupChip.getBoundingClientRect().height).toBe(27);
    await expect(selected.getByText('Louisa Grand').closest('.tags-tag')!.getBoundingClientRect().height).toBe(27);
    const heading = selected.getByRole('button', {
      name: 'Groups - 2'
    });
    const headingStyle = getComputedStyle(heading);
    const originalStyle = {
      color: headingStyle.color,
      fontSize: headingStyle.fontSize,
      fontWeight: headingStyle.fontWeight
    };
    const body = groupChip.closest('.user-selection-section-body')!;
    const arrow = heading.querySelector('.user-selection-section-chevron svg path')!;
    const relativeArrowBounds = () => {
      const bounds = arrow.getBoundingClientRect();
      const header = heading.getBoundingClientRect();
      return {
        x: bounds.x - header.x,
        y: bounds.y - header.y,
        width: bounds.width,
        height: bounds.height
      };
    };
    const arrowBounds = relativeArrowBounds();
    const expectArrowPosition = () => {
      const bounds = relativeArrowBounds();
      expect(bounds.x).toBeCloseTo(arrowBounds.x, 1);
      expect(bounds.y).toBeCloseTo(arrowBounds.y, 1);
      expect(bounds.width).toBeCloseTo(arrowBounds.width, 1);
      expect(bounds.height).toBeCloseTo(arrowBounds.height, 1);
    };
    await userEvent.click(heading);
    await expect(heading).toHaveAttribute('aria-expanded', 'false');
    await expect(heading).toHaveTextContent('Groups - 2');
    await expect(body).toHaveAttribute('inert');
    await waitFor(() => expect(body.getBoundingClientRect().height).toBe(0));
    await waitFor(expectArrowPosition);
    for (const [property, value] of Object.entries(originalStyle)) {
      await expect(getComputedStyle(heading)[property as 'color' | 'fontSize' | 'fontWeight']).toBe(value);
    }
    await userEvent.click(heading);
    await expect(heading).toHaveAttribute('aria-expanded', 'true');
    await expect(heading).toHaveTextContent('Groups - 2');
    await expect(body).not.toHaveAttribute('inert');
    await waitFor(() => expect(body.getBoundingClientRect().height).toBeGreaterThan(0));
    await waitFor(expectArrowPosition);
    await expect(selected.getByText('Visual Design')).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('Visual Design');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['Pre-Sale', 'Visual CRM Lab', 'Approval Group', 'Marketing', 'test56789', 'Design Team 45'].flatMap(label => RECIPIENT_OPTIONS.filter(item => item.kind === 'group' && item.label === label))
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    await waitFor(() => expect(selected.getByRole('button', {
      name: 'Groups - 6'
    })).toBeVisible());
    await expect(selected.getAllByRole('button', {
      name: /^Remove /
    })).toHaveLength(6);
    await expect(selected.getByText('Design Team 45')).toBeVisible();
    await expect(selected.getByText('Pre-Sale').closest('.user-selection-section')!.querySelector('.user-selection-avatar')).toBeNull();
    await userEvent.hover(selected.getByText('Pre-Sale'));
    await userEvent.click(selected.getByRole('button', {
      name: 'Remove Pre-Sale'
    }));
    await expect(selected.getByRole('button', {
      name: 'Groups - 5'
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('Design Team 45');
    await expect(page.getByRole('status')).not.toHaveTextContent('Pre-Sale');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: RECIPIENT_OPTIONS.filter(item => ['role:administrator', 'hierarchy:sales-manager'].includes(item.value))
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const trigger = page.getByRole('button', {
      name: 'Recipient type'
    });
    await userEvent.click(trigger);
    const option = page.getByRole('option', {
      name: 'Roles and Subordinates'
    });
    await expect(option).toBeVisible();
    const label = within(option).getByText('Roles and Subordinates');
    await waitFor(() => {
      expect(label.scrollWidth).toBeLessThanOrEqual(label.clientWidth);
      expect(option.getBoundingClientRect().width).toBeGreaterThan(trigger.getBoundingClientRect().width);
      expect(page.getByRole('listbox').getBoundingClientRect().left).toBeCloseTo(trigger.getBoundingClientRect().left - 1, 0);
    });
    await userEvent.click(option);
    await expect(trigger).toHaveTextContent('Roles and Subordinates');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    allowAdditionalEmails: true,
    value: [{
      value: 'email:operations@example.com',
      label: 'operations@example.com',
      kind: 'email'
    }]
  },
  render: args => <Example {...args} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'user:long',
      kind: 'user',
      label: 'Alexandra Catherine Montgomery-Wellington with a very long display name from the International Customer Operations Department',
      detail: 'alexandra.catherine.montgomery.wellington@international-operations.example.com'
    }]
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    const row = directory.getByRole('button', {
      name: /Alexandra Catherine/
    });
    for (const text of [within(row).getByText(/Alexandra Catherine/), within(row).getByText(/alexandra\\.catherine/)]) {
      await expect(getComputedStyle(text).whiteSpace).toBe('nowrap');
      await expect(getComputedStyle(text).textOverflow).toBe('ellipsis');
      await expect(text.scrollWidth).toBeGreaterThan(text.clientWidth);
    }
    await userEvent.click(row);
    const chip = selected.getByText(/Alexandra Catherine/);
    await expect(getComputedStyle(chip).whiteSpace).toBe('nowrap');
    await expect(getComputedStyle(chip).textOverflow).toBe('ellipsis');
    await expect(chip.scrollWidth).toBeGreaterThan(chip.clientWidth);
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('Alexandra Catherine');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    options: []
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    const empty = directory.getByText('No users available');
    await waitFor(() => expect(empty).toBeVisible());
    const results = empty.parentElement!.getBoundingClientRect();
    const bounds = empty.getBoundingClientRect();
    await expect(bounds.height).toBeCloseTo(results.height, 0);
    await userEvent.type(directory.getByRole('searchbox'), 'missing');
    await expect(directory.getByText('No results found')).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Recipient type'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Groups'
    }));
    await expect(directory.getByText('No groups available')).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    for (const [category, label] of [['Groups', 'Visual CRM Lab'], ['Roles', 'Administrator'], ['Roles and Subordinates', 'Sales Manager'], ['Territories', 'North Zone'], ['Territories and Sub-territories', 'West Zone']]) {
      await userEvent.click(page.getByRole('button', {
        name: 'Recipient type'
      }));
      await userEvent.click(page.getByRole('option', {
        name: category
      }));
      const row = directory.getByRole('button', {
        name: label
      });
      await expect(row.querySelector('.user-selection-avatar')).toBeNull();
      await expect(row.getBoundingClientRect().height).toBe(47);
      await userEvent.click(row);
      await expect(directory.queryByRole('button', {
        name: label
      })).not.toBeInTheDocument();
      await expect(selected.getByRole('button', {
        name: \`\${category} - 1\`
      })).toBeVisible();
      const chip = selected.getByText(label, {
        exact: true
      }).closest('.tags-tag')!;
      await expect(chip.querySelector('.user-selection-avatar')).toBeNull();
      await expect(getComputedStyle(chip.parentElement!.parentElement!).flexWrap).toBe('wrap');
      await userEvent.click(selected.getByRole('button', {
        name: \`Remove \${label}\`
      }));
      await expect(selected.queryByRole('button', {
        name: \`\${category} - 1\`
      })).not.toBeInTheDocument();
      await userEvent.click(directory.getByRole('button', {
        name: label
      }));
    }
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('North Zone');
    await expect(page.getByRole('status')).toHaveTextContent('West Zone');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'individual-users',
    options: INDIVIDUAL_USER_OPTIONS,
    allowAdditionalEmails: true,
    additionalRecipientOptions: ADDITIONAL_RECIPIENT_OPTIONS
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    const chooseCategory = async (name: string) => {
      await userEvent.click(page.getByRole('button', {
        name: 'Recipient type'
      }));
      await userEvent.click(page.getByRole('option', {
        name
      }));
    };
    await userEvent.click(directory.getByRole('button', {
      name: /Esther Howard/
    }));
    await expect(directory.queryByRole('button', {
      name: /Esther Howard/
    })).not.toBeInTheDocument();
    await chooseCategory('Groups');
    await expect(page.getByRole('button', {
      name: 'Recipient collection'
    })).toHaveTextContent('Sales Group');
    const collectionFilter = page.getByRole('button', {
      name: 'Recipient collection'
    });
    await waitFor(() => {
      const filterWidth = collectionFilter.getBoundingClientRect().width;
      const searchWidth = directory.getByRole('searchbox').closest('label')!.getBoundingClientRect().width;
      expect(filterWidth / (filterWidth + searchWidth)).toBeCloseTo(0.4, 2);
    });
    expect(getComputedStyle(page.getByRole('heading', {
      name: 'Available'
    })).paddingRight).toBe('10px');
    await userEvent.click(collectionFilter);
    const collectionMenu = page.getByRole('listbox');
    await waitFor(() => {
      expect(collectionMenu.getBoundingClientRect().width).toBeGreaterThanOrEqual(collectionFilter.getBoundingClientRect().width);
      expect(collectionMenu.style.width).toBe('max-content');
      expect(collectionMenu.getBoundingClientRect().right).toBeLessThanOrEqual(canvasElement.ownerDocument.defaultView!.innerWidth);
    });
    await userEvent.keyboard('{Escape}');
    const esther = directory.getByRole('button', {
      name: /Esther Howard/
    });
    await expect(within(esther).getByText('Added')).toBeVisible();
    await expect(esther).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(esther);
    await expect(selected.getAllByRole('button', {
      name: /^Remove /
    })).toHaveLength(1);
    await userEvent.click(directory.getByRole('button', {
      name: /Jacob Jones/
    }));
    await expect(selected.getByRole('heading', {
      name: 'Sales Group - 1'
    })).toBeVisible();
    await expect(selected.getByRole('button', {
      name: 'Groups - 1'
    })).toBeVisible();
    await expect(getComputedStyle(selected.getByRole('button', {
      name: 'Groups - 1'
    })).fontSize).toBe('13px');
    const sourceHeading = selected.getByRole('heading', {
      name: 'Sales Group - 1'
    });
    await expect(getComputedStyle(sourceHeading).fontSize).toBe('12px');
    await expect(getComputedStyle(sourceHeading.querySelector('.user-selection-section-count')!).fontSize).toBe('12px');
    await expect(esther.querySelector('.user-selection-added svg')).not.toBeNull();
    await chooseCategory('Roles');
    await expect(page.getByRole('button', {
      name: 'Recipient collection'
    })).toHaveTextContent('CEO');
    await expect(within(directory.getByRole('button', {
      name: /Jacob Jones/
    })).getByText('Added')).toBeVisible();
    await userEvent.click(directory.getByRole('button', {
      name: /Albert Flores/
    }));
    await expect(selected.getByRole('heading', {
      name: 'CEO - 1'
    })).toBeVisible();
    await userEvent.click(selected.getByRole('button', {
      name: 'Remove Jacob Jones'
    }));
    await expect(selected.queryByRole('button', {
      name: 'Groups - 1'
    })).not.toBeInTheDocument();
    await expect(within(directory.getByRole('button', {
      name: /Jacob Jones/
    })).queryByText('Added')).not.toBeInTheDocument();
    await userEvent.click(directory.getByRole('button', {
      name: /Jacob Jones/
    }));
    await expect(selected.getByRole('heading', {
      name: 'CEO - 2'
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('Selected: Esther Howard, Albert Flores, Jacob Jones');
    await expect(page.getByRole('status')).not.toHaveTextContent('CEO');
    await userEvent.click(page.getByRole('button', {
      name: 'Select Users'
    }));
    await waitFor(() => expect(within(page.getByRole('region', {
      name: 'Selected recipients'
    })).getByRole('heading', {
      name: 'CEO - 2'
    })).toBeVisible());
    await userEvent.click(page.getByRole('button', {
      name: 'Cancel'
    }));
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'individual-users',
    options: INDIVIDUAL_USER_OPTIONS,
    maxSelections: 5,
    allowAdditionalEmails: true,
    value: INDIVIDUAL_USER_OPTIONS.filter(item => ['user:esther', 'user:jacob', 'user:albert', 'user:divakar', 'user:marvin'].includes(item.value)).map((item, index) => ({
      ...item,
      ...(index === 2 ? {
        source: {
          value: 'group:sales-group',
          label: 'Sales Group',
          kind: 'group' as const
        }
      } : index > 2 ? {
        source: {
          value: 'role:ceo',
          label: 'CEO',
          kind: 'role' as const
        }
      } : {})
    }))
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const directory = within(page.getByRole('region', {
      name: 'Available recipients'
    }));
    await userEvent.click(directory.getByRole('button', {
      name: /Louisa Grand/
    }));
    await expect(page.getByRole('alert')).toHaveTextContent('Select up to 5 recipients.');
    await userEvent.click(page.getByRole('button', {
      name: 'Recipient type'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Territories'
    }));
    await expect(page.getByRole('button', {
      name: 'Recipient collection'
    })).toHaveTextContent('North Zone');
    await expect(directory.getByRole('button', {
      name: /Esther Howard/
    })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(page.getByRole('button', {
      name: 'Remove Albert Flores'
    }));
    await userEvent.click(directory.getByRole('button', {
      name: /Prakash Sekar/
    }));
    const selected = within(page.getByRole('region', {
      name: 'Selected recipients'
    }));
    await expect(selected.getByRole('heading', {
      name: 'North Zone - 1'
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(page.getByRole('status')).toHaveTextContent('Albert Flores');
    await expect(page.getByRole('status')).not.toHaveTextContent('Prakash Sekar');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'individual-users',
    options: [{
      value: 'group:empty',
      kind: 'group',
      label: 'New Group',
      members: []
    }]
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', {
      name: 'Recipient type'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Groups'
    }));
    await expect(page.getByRole('button', {
      name: 'Recipient collection'
    })).toHaveTextContent('New Group');
    await expect(page.getByText('No users available')).toBeVisible();
    await expect(page.getByRole('region', {
      name: 'Available recipients'
    }).querySelector('.user-selection-result')).toBeNull();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'individual-users',
    options: INDIVIDUAL_USER_OPTIONS,
    allowAdditionalEmails: true,
    additionalRecipientOptions: ADDITIONAL_RECIPIENT_OPTIONS
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    await expect(page.queryByText(/^Email: You can select up to/)).toBeNull();
    await expect(page.queryByText(/^Push Notifications: You can select up to/)).toBeNull();
    const addButton = page.getByRole('button', {
      name: 'Add Additional Recipient'
    });
    await waitFor(() => expect(addButton).toBeVisible());
    await expect(addButton.closest('.modal-footer')).not.toBeNull();
    const modal = addButton.closest<HTMLElement>('.modal-dialog')!;
    const available = within(modal).getByRole('region', {
      name: 'Available recipients'
    });
    const selected = within(modal).getByRole('region', {
      name: 'Selected recipients'
    });
    const panelHeight = available.getBoundingClientRect().height;
    const modalHeight = modal.getBoundingClientRect().height;
    await userEvent.click(page.getByRole('button', {
      name: 'Add Additional Recipient'
    }));
    let picker = within(page.getByRole('dialog', {
      name: 'Select Recipient'
    }));
    await expect(picker.getAllByRole('checkbox')).toHaveLength(10);
    const recipientSearch = picker.getByRole('searchbox', {
      name: 'Search additional recipients'
    });
    await expect(recipientSearch.closest('.modal-header-title-row')).not.toBeNull();
    const recipientHeading = picker.getByRole('heading', {
      name: 'Select Recipient'
    });
    const searchBounds = recipientSearch.closest('.input-root')!.getBoundingClientRect();
    const headingBounds = recipientHeading.getBoundingClientRect();
    await expect(Math.abs(searchBounds.left - headingBounds.right - 10)).toBeLessThan(1);
    await expect(getComputedStyle(recipientSearch).fontFamily).toContain('Puvi');
    await expect(getComputedStyle(recipientSearch, '::placeholder').fontFamily).toContain('Puvi');
    const baseSize = getComputedStyle(recipientSearch).getPropertyValue('--ds-font-size-base').trim();
    await expect(getComputedStyle(recipientSearch).fontSize).toBe(baseSize);
    await expect(getComputedStyle(recipientSearch, '::placeholder').fontSize).toBe(baseSize);
    await userEvent.type(recipientSearch, '  OPERATIONS  ');
    await expect(picker.getAllByRole('checkbox')).toHaveLength(1);
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Operations'
    }));
    await userEvent.clear(recipientSearch);
    await userEvent.type(recipientSearch, 'alerts@example.com');
    await expect(picker.getAllByRole('checkbox')).toHaveLength(1);
    await expect(picker.getByRole('checkbox', {
      name: 'Select Alerts'
    })).not.toBeChecked();
    await userEvent.clear(recipientSearch);
    await userEvent.type(recipientSearch, 'no-matching-recipient');
    await expect(picker.getByText('No recipients found')).toBeVisible();
    await userEvent.click(picker.getByRole('button', {
      name: 'Clear recipient search'
    }));
    await expect(recipientSearch).toHaveFocus();
    await expect(picker.getAllByRole('checkbox')).toHaveLength(10);
    await expect(picker.getByRole('checkbox', {
      name: 'Select Operations'
    })).toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Operations'
    }));
    await waitFor(() => {
      const heading = picker.getByText('Display Name').getBoundingClientRect();
      const label = picker.getAllByRole('checkbox')[0].closest('.checkbox-root')!.querySelector('.checkbox-label-text')!.getBoundingClientRect();
      expect(Math.abs(heading.left - label.left)).toBeLessThanOrEqual(1);
    });
    await expect(page.getByRole('dialog', {
      name: 'Select Recipient'
    }).querySelector('.table-resize-handle')).toBeNull();
    await expect(picker.getByRole('checkbox', {
      name: 'Select Support'
    })).toBeDisabled();
    await expect(page.getByRole('dialog', {
      name: 'Select Recipient'
    }).querySelector('.table-report')).toBeNull();
    const createButton = picker.getByRole('button', {
      name: 'Create Recipient'
    });
    await expect(createButton).toHaveAttribute('data-variant', 'outline-blue');
    await userEvent.click(createButton);
    let creator = within(page.getByRole('dialog', {
      name: 'Create Recipient'
    }));
    await userEvent.type(creator.getByRole('textbox', {
      name: /Display Name/
    }), 'Finance Team');
    await userEvent.type(creator.getByRole('textbox', {
      name: /^Email/
    }), 'finance-team@example.com');
    await userEvent.click(creator.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(picker.queryByRole('checkbox', {
      name: 'Select Finance Team'
    })).not.toBeInTheDocument();
    await userEvent.click(createButton);
    creator = within(page.getByRole('dialog', {
      name: 'Create Recipient'
    }));
    const displayName = creator.getByRole('textbox', {
      name: /Display Name/
    });
    const emailAddress = creator.getByRole('textbox', {
      name: /^Email/
    });
    await waitFor(() => expect(creator.getByRole('heading', {
      name: 'Create Recipient'
    })).toBeVisible());
    await waitFor(() => expect(displayName).toHaveFocus());
    await userEvent.click(creator.getByRole('button', {
      name: 'Save'
    }));
    await expect(displayName).toBeRequired();
    await expect(emailAddress).toBeRequired();
    await expect(displayName).toHaveAttribute('aria-invalid', 'true');
    await expect(emailAddress).toHaveAttribute('aria-invalid', 'true');
    await expect(displayName).toHaveAccessibleDescription('Display Name cannot be empty.');
    await expect(emailAddress).toHaveAccessibleDescription('Email cannot be empty.');
    await expect(creator.getAllByRole('alert')).toHaveLength(2);
    await expect(displayName.closest('.input-root')).toHaveAttribute('data-variant', 'error');
    await userEvent.type(emailAddress, 'invalid-email');
    await userEvent.click(creator.getByRole('button', {
      name: 'Save'
    }));
    await expect(emailAddress).toHaveAccessibleDescription('Enter a valid email address.');
    await userEvent.clear(emailAddress);
    await userEvent.type(emailAddress, 'operations@example.com');
    await userEvent.click(creator.getByRole('button', {
      name: 'Save'
    }));
    await expect(emailAddress).toHaveAccessibleDescription('A recipient with this email address already exists.');
    await userEvent.clear(emailAddress);
    await userEvent.type(displayName, 'Finance Team');
    await expect(displayName).toHaveAttribute('aria-invalid', 'false');
    await userEvent.type(creator.getByRole('textbox', {
      name: /^Email/
    }), 'finance-team@example.com');
    await userEvent.click(creator.getByRole('button', {
      name: 'Save'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Finance Team'
    })).toBeDisabled();
    const newRow = picker.getByRole('checkbox', {
      name: 'Select Finance Team'
    }).closest('tr')!;
    await expect(newRow).toBe(picker.getAllByRole('checkbox')[0].closest('tr'));
    await expect(newRow.querySelector('[data-new-recipient]')).not.toBeNull();
    await waitFor(() => expect(getComputedStyle(newRow).backgroundColor).toBe('rgb(253, 250, 222)'));
    await waitFor(() => expect(newRow.querySelector('[data-new-recipient]')).toBeNull(), {
      timeout: 6000
    });
    await waitFor(() => expect(getComputedStyle(newRow).backgroundColor).not.toBe('rgb(253, 250, 222)'));
    const disabledLabel = picker.getByRole('checkbox', {
      name: 'Select Finance Team'
    }).closest('label')!.querySelector('.checkbox-label-text')!;
    await expect(getComputedStyle(disabledLabel).opacity).toBe('1');
    const operationsRow = picker.getByRole('checkbox', {
      name: 'Select Operations'
    }).closest('tr')!;
    const actions = within(operationsRow).getByRole('button', {
      name: 'More options for Operations'
    });
    const actionContainer = actions.closest('.user-selection-recipient-actions')!;
    await userEvent.hover(picker.getByRole('heading', {
      name: 'Select Recipient'
    }));
    await expect(getComputedStyle(actionContainer).opacity).toBe('0');
    picker.getByRole('checkbox', {
      name: 'Select Operations'
    }).focus();
    await expect(getComputedStyle(actionContainer).opacity).toBe('0');
    await waitFor(() => {
      actions.focus();
      expect(actions).toHaveFocus();
      expect(actions).toBeVisible();
    });
    await expect(actions.getBoundingClientRect().left).toBeLessThan(picker.getByRole('checkbox', {
      name: 'Select Operations'
    }).getBoundingClientRect().left);
    await expect(getComputedStyle(actions).backgroundColor).toBe('rgb(255, 255, 255)');
    await expect(getComputedStyle(actions).borderTopStyle).toBe('solid');
    await waitFor(() => expect(getComputedStyle(actions).borderTopColor).toBe('rgb(197, 196, 211)'));
    await waitFor(() => expect(getComputedStyle(operationsRow).backgroundColor).toBe('rgb(247, 248, 251)'));
    const focusedRowBackground = getComputedStyle(operationsRow).backgroundColor;
    await userEvent.click(actions);
    const actionMenu = page.getByRole('option', {
      name: 'Edit',
      exact: true
    }).closest<HTMLElement>('.dropdown-panel')!;
    await expect(actionMenu.getBoundingClientRect().width).toBeGreaterThanOrEqual(120);
    const editOption = within(actionMenu).getByRole('option', {
      name: 'Edit',
      exact: true
    });
    await expect(actionMenu.querySelector('.dropdown-option-check')).toBeNull();
    const optionBounds = editOption.getBoundingClientRect();
    await expect(canvasElement.ownerDocument.elementFromPoint(optionBounds.x + optionBounds.width / 2, optionBounds.y + optionBounds.height / 2)?.closest('[role="option"]')).toBe(editOption);
    await userEvent.hover(editOption);
    await expect(getComputedStyle(operationsRow).backgroundColor).toBe(focusedRowBackground);
    await expect(getComputedStyle(actions).backgroundColor).toBe('rgb(255, 255, 255)');
    await userEvent.click(editOption);
    const editorDialog = page.getByRole('dialog', {
      name: 'Edit Recipient'
    });
    const editor = within(editorDialog);
    await waitFor(() => expect(editor.getByDisplayValue('Operations')).toBeVisible());
    const verificationNote = editor.getByText(/A confirmation email will be sent/);
    await expect(verificationNote).toBeVisible();
    await expect(verificationNote.closest('.msg-info-root')).not.toHaveClass('msg-info-multi');
    await expect(verificationNote.closest('.msg-info-root')!.querySelector('ul')).toBeNull();
    await expect(editorDialog.getBoundingClientRect().width).toBeLessThanOrEqual(625);
    const editorBody = editorDialog.querySelector<HTMLElement>('.modal-body')!;
    await expect(editorBody.scrollWidth).toBeLessThanOrEqual(editorBody.clientWidth);
    for (const input of editor.getAllByRole('textbox')) {
      const field = input.closest('.input-input-wrapper')!.getBoundingClientRect();
      await expect(editorDialog.getBoundingClientRect().right - field.right).toBeGreaterThanOrEqual(29);
      await expect(field.width).toBeGreaterThan(0);
      if (window.innerWidth >= 762) await expect(field.width).toBe(390);
      await expect(getComputedStyle(input.closest('.input-input-wrapper')!, '::before').display).toBe('none');
    }
    await userEvent.clear(editor.getByDisplayValue('Operations'));
    await userEvent.type(editor.getByRole('textbox', {
      name: /Display Name/
    }), 'Operations Team');
    await userEvent.click(editor.getByRole('button', {
      name: 'Save'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    })).toBeInTheDocument();
    await userEvent.hover(picker.getByRole('checkbox', {
      name: 'Select Support'
    }).closest('tr')!);
    await userEvent.click(picker.getByRole('button', {
      name: 'More options for Support'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Delete',
      exact: true
    }));
    let confirmation = within(await page.findByRole('alertdialog', {
      name: 'Delete "Support"'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Support'
    })).toBeInTheDocument();
    await userEvent.click(confirmation.getByRole('button', {
      name: 'Cancel',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('alertdialog')).toBeNull());
    await expect(picker.getByRole('checkbox', {
      name: 'Select Support'
    })).toBeInTheDocument();
    await userEvent.hover(picker.getByRole('checkbox', {
      name: 'Select Support'
    }).closest('tr')!);
    await userEvent.click(picker.getByRole('button', {
      name: 'More options for Support'
    }));
    await userEvent.click(page.getByRole('option', {
      name: 'Delete',
      exact: true
    }));
    confirmation = within(await page.findByRole('alertdialog', {
      name: 'Delete "Support"'
    }));
    await expect(confirmation.getByRole('button', {
      name: 'Delete',
      exact: true
    })).toHaveAttribute('data-variant', 'negative');
    await userEvent.click(confirmation.getByRole('button', {
      name: 'Delete',
      exact: true
    }));
    await waitFor(() => expect(page.queryByRole('alertdialog')).toBeNull());
    await expect(picker.queryByRole('checkbox', {
      name: 'Select Support'
    })).not.toBeInTheDocument();
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    }));
    await userEvent.click(picker.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(page.queryByText('operations@example.com')).not.toBeInTheDocument();
    await userEvent.click(page.getByRole('button', {
      name: 'Add Additional Recipient'
    }));
    picker = within(page.getByRole('dialog', {
      name: 'Select Recipient'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    })).not.toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    }));
    await userEvent.click(picker.getByRole('button', {
      name: 'Done'
    }));
    const field = page.getByRole('button', {
      name: 'Edit additional recipients'
    }).closest<HTMLElement>('.user-selection-recipient-field')!;
    await expect(within(field).getByText('operations@example.com')).toBeVisible();
    await expect(within(field).queryByRole('textbox')).not.toBeInTheDocument();
    await expect(within(field).queryByRole('button', {
      name: /^Remove /
    })).not.toBeInTheDocument();
    const editRecipients = within(field).getByRole('button', {
      name: 'Edit additional recipients'
    });
    await expect(editRecipients.getBoundingClientRect().width).toBeGreaterThanOrEqual(field.clientWidth - 1);
    const assertEditIconAlignment = () => {
      const icon = editRecipients.querySelector('svg')!.getBoundingClientRect();
      expect(icon.width).toBe(13);
      expect(icon.height).toBe(13);
      const tag = field.querySelector('.tags-tag')!.getBoundingClientRect();
      expect(Math.abs(icon.top + icon.height / 2 - tag.top - tag.height / 2)).toBeLessThanOrEqual(1);
    };
    assertEditIconAlignment();
    const originalMinHeight = field.style.minHeight;
    field.style.minHeight = \`\${field.clientHeight + 40}px\`;
    assertEditIconAlignment();
    field.style.minHeight = originalMinHeight;
    await userEvent.click(editRecipients, {
      offsetX: 8,
      offsetY: 8
    });
    picker = within(page.getByRole('dialog', {
      name: 'Select Recipient'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    })).toBeChecked();
    await userEvent.click(picker.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(within(field).getByText('operations@example.com')).toBeVisible();
    await expect(available.getBoundingClientRect().height).toBeCloseTo(panelHeight, 0);
    await expect(selected.getBoundingClientRect().height).toBeCloseTo(panelHeight, 0);
    if (modalHeight < window.innerHeight * 0.9 - 1) {
      await expect(modal.getBoundingClientRect().height).toBeGreaterThan(modalHeight);
    }
    await expect(modal.getBoundingClientRect().height).toBeLessThanOrEqual(window.innerHeight * 0.9 + 1);
    page.getByRole('button', {
      name: 'Edit additional recipients'
    }).focus();
    await expect(page.getByRole('button', {
      name: 'Edit additional recipients'
    })).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Edit additional recipients'
    }));
    picker = within(page.getByRole('dialog', {
      name: 'Select Recipient'
    }));
    await expect(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    })).toBeChecked();
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Operations Team'
    }));
    await userEvent.click(picker.getByRole('checkbox', {
      name: 'Select Alerts'
    }));
    await userEvent.click(picker.getByRole('button', {
      name: 'Done'
    }));
    await expect(within(field).queryByText('operations@example.com')).not.toBeInTheDocument();
    await expect(within(field).getByText('alerts@example.com')).toBeVisible();
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(within(canvasElement).getByRole('status')).toHaveTextContent('alerts@example.com');
    await expect(within(canvasElement).getByRole('status')).not.toHaveTextContent('operations@example.com');
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'individual-users',
    allowAdditionalEmails: true,
    options: Array.from({
      length: 91
    }, (_, index) => ({
      value: \`user:operations-\${index}\`,
      label: \`Operations User \${index + 1}\`,
      kind: 'user' as const
    })),
    value: Array.from({
      length: 90
    }, (_, index) => ({
      value: \`user:operations-\${index}\`,
      label: \`Operations User \${index + 1}\`,
      kind: 'user' as const
    })),
    additionalRecipientOptions: Array.from({
      length: 11
    }, (_, index) => ({
      value: \`email:alerts-\${index}@example.com\`,
      label: \`Alert Recipient \${index + 1}\`,
      email: \`alerts-\${index}@example.com\`,
      verified: true
    }))
  },
  render: args => <Example {...args} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', {
      name: /Operations User 91/
    }));
    await expect(page.getByRole('alert')).toHaveTextContent('Select up to 90 users.');
    await userEvent.click(page.getByRole('button', {
      name: 'Add Additional Recipient'
    }));
    const picker = within(page.getByRole('dialog', {
      name: 'Select Recipient'
    }));
    for (let index = 1; index <= 10; index++) {
      await userEvent.click(picker.getByRole('checkbox', {
        name: new RegExp('^Select Alert Recipient ' + index + '$')
      }));
    }
    await userEvent.click(picker.getByRole('checkbox', {
      name: /^Select Alert Recipient 11$/
    }));
    await expect(picker.getByRole('alert')).toHaveTextContent('Select up to 10 additional recipients.');
    await expect(picker.getByRole('checkbox', {
      name: /^Select Alert Recipient 11$/
    })).not.toBeChecked();
    await userEvent.click(picker.getByRole('button', {
      name: 'Done'
    }));
    await userEvent.click(page.getByRole('button', {
      name: 'Done'
    }));
    await expect(within(canvasElement).getByRole('status')).toHaveTextContent('alerts-9@example.com');
    await expect(within(canvasElement).getByRole('status')).not.toHaveTextContent('alerts-10@example.com');
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    maxSelections: 2
  },
  render: args => <Example {...args} />
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithSelections`,`SelectedGroups`,`RolesAndSubordinates`,`AdditionalRecipients`,`LongNamesAndEmails`,`EmptyDirectory`,`RecipientCategories`,`IndividualUsers`,`IndividualUsersWithSelections`,`IndividualUsersEmpty`,`IndividualUsersAdditionalRecipients`,`IndividualUsersRecipientLimits`,`SelectionLimit`]}))();export{w as AdditionalRecipients,b as Default,E as EmptyDirectory,O as IndividualUsers,j as IndividualUsersAdditionalRecipients,A as IndividualUsersEmpty,M as IndividualUsersRecipientLimits,k as IndividualUsersWithSelections,T as LongNamesAndEmails,D as RecipientCategories,C as RolesAndSubordinates,S as SelectedGroups,N as SelectionLimit,x as WithSelections,P as __namedExportsOrder,y as default};