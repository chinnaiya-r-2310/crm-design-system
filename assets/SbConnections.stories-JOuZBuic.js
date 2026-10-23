import{i as e,s as t}from"./preload-helper-BTXe9M7S.js";import{N as n}from"./iframe-BDqwoKPa.js";import{t as r}from"./jsx-runtime-D-I7Lrue.js";import{r as i,t as a}from"./Button-i45e5kHS.js";import{n as o,t as s}from"./Tooltip-DUvZTevo.js";import{n as c,t as l}from"./Icon-CL6QhJdb.js";import{n as u,t as d}from"./NextGenTopBand-B-I-XF8o.js";import{n as f,t as p}from"./Tabs-BDD0tVxd.js";import{i as m,n as h,r as g,t as _}from"./setupMenuItems-y8fZHMVe.js";var v,y,b,x,S,C,w,T,E,D=e((()=>{h(),v=[{id:`list`,label:`Sandbox List`},{id:`changes`,label:`Current Changes List`},{id:`connections`,label:`Connections`},{id:`logs`,label:`Deployment Logs`}],y=[0,310,620],b=[0,130,260,390],x=[95,405,715],S=225,C=[{id:`production`,name:`Production`,icon:`CrmEnterprise`,x:y[1],y:b[0]},{id:`pre-production`,name:`Pre production`,type:`Full Data`,x:y[1],y:b[1]},{id:`customization-qa`,name:`Customization QA`,type:`Configuration and Data`,x:y[0],y:b[2]},{id:`automation-qa`,name:`Automation QA`,type:`Configuration and Data`,x:y[1],y:b[2]},{id:`dev-qa`,name:`Dev QA`,type:`Configuration and Data`,x:y[2],y:b[2]},{id:`customization`,name:`Customization`,type:`Configuration`,x:y[0],y:b[3]},{id:`automation`,name:`Automation`,type:`Configuration`,x:y[1],y:b[3]},{id:`dev`,name:`Dev`,type:`Configuration`,x:y[2],y:b[3]}],w=b[2]+60,T=b[1]+60,E=[{id:`cust-custqa`,from:`customization`,to:`customization-qa`,kind:`internal`,count:12,points:[[x[0],b[3]],[x[0],w]],badge:[x[0],(b[3]+w)/2]},{id:`auto-autoqa`,from:`automation`,to:`automation-qa`,kind:`internal`,count:12,points:[[x[1],b[3]],[x[1],w]],badge:[x[1],(b[3]+w)/2]},{id:`dev-devqa`,from:`dev`,to:`dev-qa`,kind:`internal`,count:12,points:[[x[2],b[3]],[x[2],w]],badge:[x[2],(b[3]+w)/2]},{id:`custqa-pre`,from:`customization-qa`,to:`pre-production`,kind:`inbound`,count:12,points:[[x[0],b[2]],[x[0],S],[x[1]-30,S],[x[1]-30,T]],badge:[(x[0]+x[1]-30)/2,S]},{id:`autoqa-pre`,from:`automation-qa`,to:`pre-production`,kind:`inbound`,count:12,points:[[x[1],b[2]],[x[1],T]],badge:[x[1],S]},{id:`devqa-pre`,from:`dev-qa`,to:`pre-production`,kind:`inbound`,count:12,points:[[x[2],b[2]],[x[2],S],[x[1]+30,S],[x[1]+30,T]],badge:[(x[2]+x[1]+30)/2,S]},{id:`pre-prod`,from:`pre-production`,to:`production`,kind:`outbound`,count:12,points:[[x[1],b[1]],[x[1],60]],badge:[x[1],(b[1]+60)/2]}]})),O=e((()=>{}));function k(e){return e.type?`${e.name} (${e.type})`:e.name}function A(){return(0,I.jsxs)(`ul`,{className:`sb-connections__legend`,"aria-label":`Legend`,children:[(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`span`,{className:`sb-connections__legend-dot`,"data-kind":`inbound`,"aria-hidden":`true`}),`Inbound`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`span`,{className:`sb-connections__legend-dot`,"data-kind":`outbound`,"aria-hidden":`true`}),`Outbound`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`span`,{className:`sb-connections__badge sb-connections__badge--static`,"aria-hidden":`true`,children:`##`}),`Waiting for deployment`]})]})}function j(e){let[t,...n]=e,r=`M${t[0]} ${t[1]}`;for(let t=1;t<e.length-1;t++){let[n,i]=e[t-1],[a,o]=e[t],[s,c]=e[t+1],l=Math.hypot(a-n,o-i),u=Math.hypot(s-a,c-o),d=Math.min(V,l/2,u/2),f=a-(a-n)/l*d,p=o-(o-i)/l*d,m=a+(s-a)/u*d,h=o+(c-o)/u*d;r+=` L${f} ${p} Q${a} ${o} ${m} ${h}`}let i=n[n.length-1];return`${r} L${i[0]} ${i[1]}`}function M({connection:e}){let[t,...n]=e.points,r=n[n.length-1],i=e.points[e.points.length-2],a=Math.atan2(r[1]-i[1],r[0]-i[0])*180/Math.PI;return(0,I.jsxs)(`g`,{className:`sb-connections__line`,"data-kind":e.kind,children:[(0,I.jsx)(`path`,{d:j(e.points),fill:`none`}),(0,I.jsx)(`circle`,{cx:t[0],cy:t[1],r:4.5}),(0,I.jsx)(`path`,{d:`M0 0 -7.7 -6.25 -7.7 6.25Z`,transform:`translate(${r[0]} ${r[1]}) rotate(${a})`})]})}function N({nodes:e=C,connections:t=E}){let n=new Map(e.map(e=>[e.id,e]));return(0,I.jsxs)(`figure`,{className:`sb-connections__diagram`,"aria-labelledby":`sb-connections-diagram-caption`,children:[(0,I.jsx)(`figcaption`,{id:`sb-connections-diagram-caption`,className:`sb-connections__sr-only`,children:`Sandbox connection map`}),(0,I.jsxs)(`div`,{className:`sb-connections__canvas`,style:{width:810,height:450},children:[(0,I.jsx)(`ul`,{className:`sb-connections__nodes`,"aria-label":`Environments`,children:e.map(e=>(0,I.jsxs)(`li`,{className:`sb-connections__node`,"data-highlighted":e.highlighted||void 0,style:{left:e.x,top:e.y,width:190,height:60},children:[(0,I.jsxs)(`span`,{className:`sb-connections__node-name`,children:[e.icon&&(0,I.jsx)(l,{name:e.icon,size:16,className:`sb-connections__node-icon`}),e.name]}),e.type&&(0,I.jsx)(`span`,{className:`sb-connections__node-type`,children:e.type})]},e.id))}),(0,I.jsx)(`svg`,{className:`sb-connections__lines`,width:810,height:450,viewBox:`0 0 810 450`,"aria-hidden":`true`,children:t.map(e=>(0,I.jsx)(M,{connection:e},e.id))}),t.filter(e=>e.count>0).map(e=>(0,I.jsx)(s,{content:`${e.count} changes waiting for deployment`,variant:`black`,placement:`bottom`,wrapperClassName:`sb-connections__badge-anchor`,wrapperStyle:{left:e.badge[0],top:e.badge[1]},children:(0,I.jsx)(`span`,{className:`sb-connections__badge`,"aria-hidden":`true`,children:e.count})},e.id))]}),(0,I.jsx)(`ul`,{className:`sb-connections__sr-only`,"aria-label":`Connections`,children:t.map(e=>{let t=n.get(e.from),r=n.get(e.to);return!t||!r?null:(0,I.jsx)(`li`,{children:`${k(t)} to ${k(r)}, ${e.kind}, ${e.count} changes waiting for deployment`},e.id)})})]})}function P({initialTab:e=`connections`}){let[t,n]=(0,F.useState)(e),[r,i]=(0,F.useState)(`sandbox`),o=v.find(e=>e.id===t)?.label??``;return(0,I.jsxs)(`div`,{className:`sb-connections`,children:[(0,I.jsx)(`header`,{children:(0,I.jsx)(d,{moduleLabel:null,showTerritory:!1})}),(0,I.jsx)(`aside`,{className:`sb-connections__sidebar`,"aria-label":`Setup navigation`,children:(0,I.jsx)(g,{variant:`setup`,searchable:!0,width:`100%`,items:_,activeId:r,onSelect:i})}),(0,I.jsxs)(`main`,{className:`sb-connections__workspace`,"aria-label":`Sandbox`,children:[(0,I.jsx)(p,{tabs:v,activeTab:t,onChange:n}),(0,I.jsx)(`section`,{className:`sb-connections__content`,role:`tabpanel`,"aria-label":o,children:t===`connections`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`sb-connections__intro`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h1`,{children:`Connections`}),(0,I.jsxs)(`p`,{children:[`Connections to receive or export the changes with respect to the `,B,` sandbox are listed below`]})]}),(0,I.jsx)(a,{variant:`primary`,children:`Manage Connections`})]}),(0,I.jsx)(A,{}),(0,I.jsx)(`div`,{className:`sb-connections__panel`,children:(0,I.jsx)(N,{})})]}):(0,I.jsxs)(`p`,{className:`sb-connections__note`,children:[o,` is outside the scope of this pattern.`]})})]})]})}var F,I,L,R,z,B,V,H,U,W,G;e((()=>{F=t(n(),1),i(),c(),u(),f(),o(),m(),D(),O(),I=r(),{expect:L,userEvent:R,within:z}=__STORYBOOK_MODULE_TEST__,B=`Pre production`,V=10,H={title:`Design System/Patterns/SB Connections`,parameters:{layout:`fullscreen`,docs:{description:{component:`Sandbox → Connections tab from Figma node 79946:197286 ("Sandbox Update"). Shows how Customization, Automation and Dev sandboxes flow through their QA sandboxes into Pre production and Production, with inbound/outbound links and counts of changes waiting for deployment. Static sample data; Manage Connections has no action.`}}}},U={render:()=>(0,I.jsx)(P,{}),play:async({canvasElement:e})=>{let t=z(e);await L(t.getByRole(`button`,{name:`Setup Home`})).toBeVisible(),await L(t.getByRole(`button`,{name:`Sandbox`})).toHaveAttribute(`data-active`,`true`),await L(t.getByRole(`tab`,{name:`Connections`})).toHaveAttribute(`aria-selected`,`true`),await L(t.getByRole(`heading`,{name:`Connections`})).toBeVisible(),await L(t.getByRole(`button`,{name:`Manage Connections`})).toHaveAttribute(`data-variant`,`primary`);let n=z(t.getByRole(`list`,{name:`Environments`}));await L(n.getAllByRole(`listitem`)).toHaveLength(8),await L(n.getByText(`Production`)).toBeVisible();let r=z(t.getByRole(`list`,{name:`Connections`}));await L(r.getAllByRole(`listitem`)).toHaveLength(7),await L(r.getByText(/^Pre production \(Full Data\) to Production, outbound/)).toBeInTheDocument(),await R.click(t.getByRole(`tab`,{name:`Deployment Logs`})),await L(t.queryByRole(`list`,{name:`Environments`})).not.toBeInTheDocument(),await R.click(t.getByRole(`tab`,{name:`Connections`})),await L(t.getByRole(`list`,{name:`Environments`})).toBeVisible()}},W={name:`Diagram only`,parameters:{layout:`centered`},render:()=>(0,I.jsx)(`div`,{className:`sb-connections__panel sb-connections__panel--standalone`,children:(0,I.jsx)(N,{})})},N.__docgenInfo={description:``,methods:[],displayName:`SbConnectionsDiagram`,props:{nodes:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
  { id: 'cust-custqa', from: 'customization', to: 'customization-qa', kind: 'internal', count: 12,
    points: [[MID[0], ROW[3]], [MID[0], QA_BOTTOM]], badge: [MID[0], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'auto-autoqa', from: 'automation', to: 'automation-qa', kind: 'internal', count: 12,
    points: [[MID[1], ROW[3]], [MID[1], QA_BOTTOM]], badge: [MID[1], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'dev-devqa', from: 'dev', to: 'dev-qa', kind: 'internal', count: 12,
    points: [[MID[2], ROW[3]], [MID[2], QA_BOTTOM]], badge: [MID[2], (ROW[3] + QA_BOTTOM) / 2] },
  { id: 'custqa-pre', from: 'customization-qa', to: 'pre-production', kind: 'inbound', count: 12,
    points: [[MID[0], ROW[2]], [MID[0], MERGE_Y], [MID[1] - 30, MERGE_Y], [MID[1] - 30, PRE_BOTTOM]],
    badge: [(MID[0] + MID[1] - 30) / 2, MERGE_Y] },
  { id: 'autoqa-pre', from: 'automation-qa', to: 'pre-production', kind: 'inbound', count: 12,
    points: [[MID[1], ROW[2]], [MID[1], PRE_BOTTOM]], badge: [MID[1], MERGE_Y] },
  { id: 'devqa-pre', from: 'dev-qa', to: 'pre-production', kind: 'inbound', count: 12,
    points: [[MID[2], ROW[2]], [MID[2], MERGE_Y], [MID[1] + 30, MERGE_Y], [MID[1] + 30, PRE_BOTTOM]],
    badge: [(MID[2] + MID[1] + 30) / 2, MERGE_Y] },
  { id: 'pre-prod', from: 'pre-production', to: 'production', kind: 'outbound', count: 12,
    points: [[MID[1], ROW[1]], [MID[1], NODE_HEIGHT]], badge: [MID[1], (ROW[1] + NODE_HEIGHT) / 2] },
]`,computed:!1}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`function SbConnectionsDiagram({
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
}`,...N.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Diagram only',
  parameters: {
    layout: 'centered'
  },
  render: () => <div className="sb-connections__panel sb-connections__panel--standalone"><SbConnectionsDiagram /></div>
}`,...W.parameters?.docs?.source}}},G=[`SbConnectionsDiagram`,`Default`,`DiagramOnly`]}))();export{U as Default,W as DiagramOnly,N as SbConnectionsDiagram,G as __namedExportsOrder,H as default};