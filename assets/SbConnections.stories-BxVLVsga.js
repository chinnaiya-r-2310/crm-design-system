import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-0_VNwaG5.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-uY13S5yn.js";import{n as o,t as s}from"./Tooltip-BFpBdTNa.js";import{n as c,t as l}from"./Icon-D1kCgu0M.js";import{n as u,t as d}from"./NextGenTopBand-CvYGgFuC.js";import{n as f,t as p}from"./Tabs-YivFBIg7.js";import{i as m,n as h,r as g,t as _}from"./setupMenuItems-Dr0vqOrS.js";import{t as v}from"./CrmFonts-CF6NSUVL.js";var y,b,x,S,C,w,T,E,D,O=e((()=>{h(),y=[{id:`list`,label:`Sandbox List`},{id:`changes`,label:`Current Changes List`},{id:`connections`,label:`Connections`},{id:`logs`,label:`Deployment Logs`}],b=[0,310,620],x=[0,130,260,390],S=[95,405,715],C=225,w=[{id:`production`,name:`Production`,icon:`CrmEnterprise`,x:b[1],y:x[0]},{id:`pre-production`,name:`Pre production`,type:`Full Data`,x:b[1],y:x[1]},{id:`customization-qa`,name:`Customization QA`,type:`Configuration and Data`,x:b[0],y:x[2]},{id:`automation-qa`,name:`Automation QA`,type:`Configuration and Data`,x:b[1],y:x[2]},{id:`dev-qa`,name:`Dev QA`,type:`Configuration and Data`,x:b[2],y:x[2]},{id:`customization`,name:`Customization`,type:`Configuration`,x:b[0],y:x[3]},{id:`automation`,name:`Automation`,type:`Configuration`,x:b[1],y:x[3]},{id:`dev`,name:`Dev`,type:`Configuration`,x:b[2],y:x[3]}],T=x[2]+60,E=x[1]+60,D=[{id:`cust-custqa`,from:`customization`,to:`customization-qa`,kind:`internal`,count:8,points:[[S[0],x[3]],[S[0],T]],badge:[S[0],(x[3]+T)/2]},{id:`auto-autoqa`,from:`automation`,to:`automation-qa`,kind:`internal`,count:3,points:[[S[1],x[3]],[S[1],T]],badge:[S[1],(x[3]+T)/2]},{id:`dev-devqa`,from:`dev`,to:`dev-qa`,kind:`internal`,count:15,points:[[S[2],x[3]],[S[2],T]],badge:[S[2],(x[3]+T)/2]},{id:`custqa-pre`,from:`customization-qa`,to:`pre-production`,kind:`inbound`,count:21,points:[[S[0],x[2]],[S[0],C],[S[1]-30,C],[S[1]-30,E]],badge:[(S[0]+S[1]-30)/2,C]},{id:`autoqa-pre`,from:`automation-qa`,to:`pre-production`,kind:`inbound`,count:6,points:[[S[1],x[2]],[S[1],E]],badge:[S[1],C]},{id:`devqa-pre`,from:`dev-qa`,to:`pre-production`,kind:`inbound`,count:9,points:[[S[2],x[2]],[S[2],C],[S[1]+30,C],[S[1]+30,E]],badge:[(S[2]+S[1]+30)/2,C]},{id:`pre-prod`,from:`pre-production`,to:`production`,kind:`outbound`,count:34,points:[[S[1],x[1]],[S[1],60]],badge:[S[1],(x[1]+60)/2]}]})),k=e((()=>{}));function A(e){return e.type?`${e.name} (${e.type})`:e.name}function j(){return(0,L.jsxs)(`ul`,{className:`sb-connections__legend`,"aria-label":`Legend`,children:[(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`span`,{className:`sb-connections__legend-dot`,"data-kind":`inbound`,"aria-hidden":`true`}),`Inbound`]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`span`,{className:`sb-connections__legend-dot`,"data-kind":`outbound`,"aria-hidden":`true`}),`Outbound`]}),(0,L.jsxs)(`li`,{children:[(0,L.jsx)(`span`,{className:`sb-connections__badge sb-connections__badge--static`,"aria-hidden":`true`,children:`##`}),`Waiting for deployment`]})]})}function M(e){let[t,...n]=e,r=`M${t[0]} ${t[1]}`;for(let t=1;t<e.length-1;t++){let[n,i]=e[t-1],[a,o]=e[t],[s,c]=e[t+1],l=Math.hypot(a-n,o-i),u=Math.hypot(s-a,c-o),d=Math.min(H,l/2,u/2),f=a-(a-n)/l*d,p=o-(o-i)/l*d,m=a+(s-a)/u*d,h=o+(c-o)/u*d;r+=` L${f} ${p} Q${a} ${o} ${m} ${h}`}let i=n[n.length-1];return`${r} L${i[0]} ${i[1]}`}function N({connection:e}){let[t,...n]=e.points,r=n[n.length-1],i=e.points[e.points.length-2],a=Math.atan2(r[1]-i[1],r[0]-i[0])*180/Math.PI;return(0,L.jsxs)(`g`,{className:`sb-connections__line`,"data-kind":e.kind,children:[(0,L.jsx)(`path`,{d:M(e.points),fill:`none`}),(0,L.jsx)(`circle`,{cx:t[0],cy:t[1],r:4.5}),(0,L.jsx)(`path`,{d:`M0 0 -7.7 -6.25 -7.7 6.25Z`,transform:`translate(${r[0]} ${r[1]}) rotate(${a})`})]})}function P({nodes:e=w,connections:t=D}){let n=new Map(e.map(e=>[e.id,e]));return(0,L.jsxs)(`figure`,{className:`sb-connections__diagram`,"aria-labelledby":`sb-connections-diagram-caption`,children:[(0,L.jsx)(`figcaption`,{id:`sb-connections-diagram-caption`,className:`sb-connections__sr-only`,children:`Sandbox connection map`}),(0,L.jsxs)(`div`,{className:`sb-connections__canvas`,style:{width:810,height:450},children:[(0,L.jsx)(`ul`,{className:`sb-connections__nodes`,"aria-label":`Environments`,children:e.map(e=>(0,L.jsxs)(`li`,{className:`sb-connections__node`,"data-highlighted":e.highlighted||void 0,style:{left:e.x,top:e.y,width:190,height:60},children:[(0,L.jsxs)(`span`,{className:`sb-connections__node-name`,children:[e.icon&&(0,L.jsx)(l,{name:e.icon,size:16,className:`sb-connections__node-icon`}),e.name]}),e.type&&(0,L.jsx)(`span`,{className:`sb-connections__node-type`,children:e.type})]},e.id))}),(0,L.jsx)(`svg`,{className:`sb-connections__lines`,width:810,height:450,viewBox:`0 0 810 450`,"aria-hidden":`true`,children:t.map(e=>(0,L.jsx)(N,{connection:e},e.id))}),t.filter(e=>e.count>0).map(e=>(0,L.jsx)(s,{content:`${e.count} changes waiting for deployment`,variant:`black`,placement:`bottom`,wrapperClassName:`sb-connections__badge-anchor`,wrapperStyle:{left:e.badge[0],top:e.badge[1]},children:(0,L.jsx)(`span`,{className:`sb-connections__badge`,"aria-hidden":`true`,children:e.count})},e.id))]}),(0,L.jsx)(`ul`,{className:`sb-connections__sr-only`,"aria-label":`Connections`,children:t.map(e=>{let t=n.get(e.from),r=n.get(e.to);return!t||!r?null:(0,L.jsx)(`li`,{children:`${A(t)} to ${A(r)}, ${e.kind}, ${e.count} changes waiting for deployment`},e.id)})})]})}function F({initialTab:e=`connections`}){let[t,n]=(0,I.useState)(e),[r,i]=(0,I.useState)(`sandbox`),o=y.find(e=>e.id===t)?.label??``;return(0,L.jsxs)(`div`,{className:`sb-connections`,children:[(0,L.jsx)(`header`,{children:(0,L.jsx)(d,{moduleLabel:null,showTerritory:!1})}),(0,L.jsx)(`aside`,{className:`sb-connections__sidebar`,"aria-label":`Setup navigation`,children:(0,L.jsx)(g,{variant:`setup`,searchable:!0,width:`100%`,items:_,activeId:r,onSelect:i})}),(0,L.jsxs)(`main`,{className:`sb-connections__workspace`,"aria-label":`Sandbox`,children:[(0,L.jsx)(p,{tabs:y,activeTab:t,onChange:n}),(0,L.jsx)(`section`,{className:`sb-connections__content`,role:`tabpanel`,"aria-label":o,children:t===`connections`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{className:`sb-connections__intro`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h1`,{children:`Connections`}),(0,L.jsxs)(`p`,{children:[`Connections to receive or export the changes with respect to the `,V,` sandbox are listed below`]})]}),(0,L.jsx)(a,{variant:`primary`,children:`Manage Connections`})]}),(0,L.jsx)(j,{}),(0,L.jsx)(`div`,{className:`sb-connections__panel`,children:(0,L.jsx)(P,{})})]}):(0,L.jsxs)(`p`,{className:`sb-connections__note`,children:[o,` is outside the scope of this pattern.`]})})]})]})}var I,L,R,z,B,V,H,U,W,G,K;e((()=>{I=t(n(),1),i(),c(),u(),f(),o(),m(),O(),v(),k(),L=r(),{expect:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V=`Pre production`,H=10,U={title:`Design System/Patterns/SB Connections`,parameters:{layout:`fullscreen`,docs:{description:{component:`Sandbox → Connections tab from Figma node 79946:197286 ("Sandbox Update"). Shows how Customization, Automation and Dev sandboxes flow through their QA sandboxes into Pre production and Production, with inbound/outbound links and counts of changes waiting for deployment. Static sample data; Manage Connections has no action.`}}}},W={render:()=>(0,L.jsx)(F,{}),play:async({canvasElement:e})=>{let t=B(e);await R(t.getByRole(`button`,{name:`Setup Home`})).toBeVisible(),await R(t.getByRole(`button`,{name:`Sandbox`})).toHaveAttribute(`data-active`,`true`),await R(t.getByRole(`tab`,{name:`Connections`})).toHaveAttribute(`aria-selected`,`true`),await R(t.getByRole(`heading`,{name:`Connections`})).toBeVisible(),await R(t.getByRole(`button`,{name:`Manage Connections`})).toHaveAttribute(`data-variant`,`primary`);let n=B(t.getByRole(`list`,{name:`Environments`}));await R(n.getAllByRole(`listitem`)).toHaveLength(8),await R(n.getByText(`Production`)).toBeVisible();let r=B(t.getByRole(`list`,{name:`Connections`}));await R(r.getAllByRole(`listitem`)).toHaveLength(7),await R(r.getByText(/^Pre production \(Full Data\) to Production, outbound/)).toBeInTheDocument(),await z.click(t.getByRole(`tab`,{name:`Deployment Logs`})),await R(t.queryByRole(`list`,{name:`Environments`})).not.toBeInTheDocument(),await z.click(t.getByRole(`tab`,{name:`Connections`})),await R(t.getByRole(`list`,{name:`Environments`})).toBeVisible()}},G={name:`Diagram only`,parameters:{layout:`centered`},render:()=>(0,L.jsx)(`div`,{className:`sb-connections__panel sb-connections__panel--standalone`,children:(0,L.jsx)(P,{})})},P.__docgenInfo={description:``,methods:[],displayName:`SbConnectionsDiagram`,props:{nodes:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  name: string;
  type?: string;
  /** Optional icon from the CRM icon gallery, shown before the name in the label colour. */
  icon?: string;
  /** Top-left corner on the diagram canvas, in px. */
  x: number;
  y: number;
  highlighted?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`type`,value:{name:`string`,required:!1}},{key:`icon`,value:{name:`string`,required:!1},description:`Optional icon from the CRM icon gallery, shown before the name in the label colour.`},{key:`x`,value:{name:`number`,required:!0},description:`Top-left corner on the diagram canvas, in px.`},{key:`y`,value:{name:`number`,required:!0}},{key:`highlighted`,value:{name:`boolean`,required:!1}}]}}],raw:`SandboxNode[]`},description:``,defaultValue:{value:`[
  { id: 'production', name: 'Production', icon: 'CrmEnterprise', x: COL[1], y: ROW[0] },
  { id: 'pre-production', name: 'Pre production', type: 'Full Data', x: COL[1], y: ROW[1] },
  { id: 'customization-qa', name: 'Customization QA', type: 'Configuration and Data', x: COL[0], y: ROW[2] },
  { id: 'automation-qa', name: 'Automation QA', type: 'Configuration and Data', x: COL[1], y: ROW[2] },
  { id: 'dev-qa', name: 'Dev QA', type: 'Configuration and Data', x: COL[2], y: ROW[2] },
  { id: 'customization', name: 'Customization', type: 'Configuration', x: COL[0], y: ROW[3] },
  { id: 'automation', name: 'Automation', type: 'Configuration', x: COL[1], y: ROW[3] },
  { id: 'dev', name: 'Dev', type: 'Configuration', x: COL[2], y: ROW[3] },
]`,computed:!1}},connections:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  from: string;
  to: string;
  kind: ConnectionKind;
  /** Pending changes waiting for deployment. Hidden when 0. */
  count: number;
  /** Polyline from the source anchor to the arrow tip. */
  points: readonly Point[];
  /** Badge centre. */
  badge: Point;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`from`,value:{name:`string`,required:!0}},{key:`to`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'inbound' | 'outbound' | 'internal'`,elements:[{name:`literal`,value:`'inbound'`},{name:`literal`,value:`'outbound'`},{name:`literal`,value:`'internal'`}],required:!0}},{key:`count`,value:{name:`number`,required:!0},description:`Pending changes waiting for deployment. Hidden when 0.`},{key:`points`,value:{name:`unknown`,required:!0},description:`Polyline from the source anchor to the arrow tip.`},{key:`badge`,value:{name:`unknown`,required:!0},description:`Badge centre.`}]}}],raw:`SandboxConnection[]`},description:``,defaultValue:{value:`[
  { id: 'cust-custqa', from: 'customization', to: 'customization-qa', kind: 'internal', count: 8,
    points: [[MID[0], ROW[3]], [MID[0], QA_BOTTOM]], badge: [MID[0], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'auto-autoqa', from: 'automation', to: 'automation-qa', kind: 'internal', count: 3,
    points: [[MID[1], ROW[3]], [MID[1], QA_BOTTOM]], badge: [MID[1], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'dev-devqa', from: 'dev', to: 'dev-qa', kind: 'internal', count: 15,
    points: [[MID[2], ROW[3]], [MID[2], QA_BOTTOM]], badge: [MID[2], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'custqa-pre', from: 'customization-qa', to: 'pre-production', kind: 'inbound', count: 21,
    points: [[MID[0], ROW[2]], [MID[0], MERGE_Y], [MID[1] - 30, MERGE_Y], [MID[1] - 30, PRE_BOTTOM]],
    badge: [(MID[0] + MID[1] - 30) / 2, MERGE_Y] },
  { id: 'autoqa-pre', from: 'automation-qa', to: 'pre-production', kind: 'inbound', count: 6,
    points: [[MID[1], ROW[2]], [MID[1], PRE_BOTTOM]], badge: [MID[1], MERGE_Y] },
  { id: 'devqa-pre', from: 'dev-qa', to: 'pre-production', kind: 'inbound', count: 9,
    points: [[MID[2], ROW[2]], [MID[2], MERGE_Y], [MID[1] + 30, MERGE_Y], [MID[1] + 30, PRE_BOTTOM]],
    badge: [(MID[2] + MID[1] + 30) / 2, MERGE_Y] },
  { id: 'pre-prod', from: 'pre-production', to: 'production', kind: 'outbound', count: 34,
    points: [[MID[1], ROW[1]], [MID[1], NODE_HEIGHT]], badge: [MID[1], (ROW[1] + NODE_HEIGHT) / 2] },
]`,computed:!1}}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`function SbConnectionsDiagram({
  nodes = SANDBOX_NODES,
  connections = SANDBOX_CONNECTIONS
}: {
  nodes?: SandboxNode[];
  connections?: SandboxConnection[];
}) {
  const byId = new Map(nodes.map(node => [node.id, node]));
  return <figure className="sb-connections__diagram" aria-labelledby="sb-connections-diagram-caption">
      <figcaption id="sb-connections-diagram-caption" className="sb-connections__sr-only">Sandbox connection map</figcaption>
      <div className="sb-connections__canvas" style={{
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT
    }}>
        <ul className="sb-connections__nodes" aria-label="Environments">
          {nodes.map(node => <li key={node.id} className="sb-connections__node" data-highlighted={node.highlighted || undefined} style={{
          left: node.x,
          top: node.y,
          width: NODE_WIDTH,
          height: NODE_HEIGHT
        }}>
              <span className="sb-connections__node-name">{node.icon && <Icon name={node.icon} size={16} className="sb-connections__node-icon" />}{node.name}</span>
              {node.type && <span className="sb-connections__node-type">{node.type}</span>}
            </li>)}
        </ul>
        {/* Drawn above the cards so the connector end-circles stay fully visible. */}
        <svg className="sb-connections__lines" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} viewBox={\`0 0 \${CANVAS_WIDTH} \${CANVAS_HEIGHT}\`} aria-hidden="true">
          {connections.map(connection => <ConnectionLine key={connection.id} connection={connection} />)}
        </svg>
        {connections.filter(connection => connection.count > 0).map(connection => <Tooltip key={connection.id} content={\`\${connection.count} changes waiting for deployment\`} variant="black" placement="bottom" wrapperClassName="sb-connections__badge-anchor" wrapperStyle={{
        left: connection.badge[0],
        top: connection.badge[1]
      }}>
            <span className="sb-connections__badge" aria-hidden="true">{connection.count}</span>
          </Tooltip>)}
      </div>
      <ul className="sb-connections__sr-only" aria-label="Connections">
        {connections.map(connection => {
        const from = byId.get(connection.from);
        const to = byId.get(connection.to);
        if (!from || !to) return null;
        return <li key={connection.id}>
            {\`\${nodeLabel(from)} to \${nodeLabel(to)}, \${connection.kind}, \${connection.count} changes waiting for deployment\`}
          </li>;
      })}
      </ul>
    </figure>;
}`,...P.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <SbConnectionsPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Setup Home'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Sandbox'
    })).toHaveAttribute('data-active', 'true');
    await expect(canvas.getByRole('tab', {
      name: 'Connections'
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('heading', {
      name: 'Connections'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Manage Connections'
    })).toHaveAttribute('data-variant', 'primary');
    const environments = within(canvas.getByRole('list', {
      name: 'Environments'
    }));
    await expect(environments.getAllByRole('listitem')).toHaveLength(8);
    await expect(environments.getByText('Production')).toBeVisible();
    const connections = within(canvas.getByRole('list', {
      name: 'Connections'
    }));
    await expect(connections.getAllByRole('listitem')).toHaveLength(7);
    await expect(connections.getByText(/^Pre production \\(Full Data\\) to Production, outbound/)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Deployment Logs'
    }));
    await expect(canvas.queryByRole('list', {
      name: 'Environments'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Connections'
    }));
    await expect(canvas.getByRole('list', {
      name: 'Environments'
    })).toBeVisible();
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Diagram only',
  parameters: {
    layout: 'centered'
  },
  render: () => <div className="sb-connections__panel sb-connections__panel--standalone"><SbConnectionsDiagram /></div>
}`,...G.parameters?.docs?.source}}},K=[`SbConnectionsDiagram`,`Default`,`DiagramOnly`]}))();export{W as Default,G as DiagramOnly,P as SbConnectionsDiagram,K as __namedExportsOrder,U as default};