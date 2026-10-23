import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Icon } from '../components/Icon/Icon';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { Tabs } from '../components/Tabs/Tabs';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { VerticalTabs } from '../components/VerticalTabs/VerticalTabs';
import {
  CANVAS_HEIGHT, CANVAS_WIDTH, NODE_HEIGHT, NODE_WIDTH,
  SANDBOX_CONNECTIONS, SANDBOX_NODES, SANDBOX_TABS, SB_SETUP_ITEMS,
} from './SbConnections.data';
import type { SandboxConnection, SandboxNode } from './SbConnections.data';
import './SbConnections.css';

const ENVIRONMENT = 'Pre production';

function nodeLabel(node: SandboxNode) {
  return node.type ? `${node.name} (${node.type})` : node.name;
}

function ConnectionLegend() {
  return (
    <ul className="sb-connections__legend" aria-label="Legend">
      <li><span className="sb-connections__legend-dot" data-kind="inbound" aria-hidden="true" />Inbound</li>
      <li><span className="sb-connections__legend-dot" data-kind="outbound" aria-hidden="true" />Outbound</li>
      <li><span className="sb-connections__badge sb-connections__badge--static" aria-hidden="true">##</span>Waiting for deployment</li>
    </ul>
  );
}

const CORNER_RADIUS = 10;

/** Polyline path with each bend replaced by a smooth curve. */
function roundedPath(points: SandboxConnection['points']) {
  const [first, ...others] = points;
  let d = `M${first[0]} ${first[1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const inLen = Math.hypot(cx - px, cy - py);
    const outLen = Math.hypot(nx - cx, ny - cy);
    const r = Math.min(CORNER_RADIUS, inLen / 2, outLen / 2);
    const ax = cx - ((cx - px) / inLen) * r;
    const ay = cy - ((cy - py) / inLen) * r;
    const bx = cx + ((nx - cx) / outLen) * r;
    const by = cy + ((ny - cy) / outLen) * r;
    d += ` L${ax} ${ay} Q${cx} ${cy} ${bx} ${by}`;
  }
  const last = others[others.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}

function ConnectionLine({ connection }: { connection: SandboxConnection }) {
  const [start, ...rest] = connection.points;
  const tip = rest[rest.length - 1];
  const before = connection.points[connection.points.length - 2];
  const angle = Math.atan2(tip[1] - before[1], tip[0] - before[0]) * 180 / Math.PI;
  return (
    <g className="sb-connections__line" data-kind={connection.kind}>
      <path d={roundedPath(connection.points)} fill="none" />
      {/* 9px circle + 1px outline = 10px end-dot. */}
      <circle cx={start[0]} cy={start[1]} r={4.5} />
      {/* Figma arrowhead: 12.5px wide, 7.7px deep, tip on the line end. */}
      <path d="M0 0 -7.7 -6.25 -7.7 6.25Z" transform={`translate(${tip[0]} ${tip[1]}) rotate(${angle})`} />
    </g>
  );
}

export function SbConnectionsDiagram({ nodes = SANDBOX_NODES, connections = SANDBOX_CONNECTIONS }: {
  nodes?: SandboxNode[]; connections?: SandboxConnection[];
}) {
  const byId = new Map(nodes.map(node => [node.id, node]));
  return (
    <figure className="sb-connections__diagram" aria-labelledby="sb-connections-diagram-caption">
      <figcaption id="sb-connections-diagram-caption" className="sb-connections__sr-only">Sandbox connection map</figcaption>
      <div className="sb-connections__canvas" style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>
        <ul className="sb-connections__nodes" aria-label="Environments">
          {nodes.map(node => (
            <li key={node.id} className="sb-connections__node" data-highlighted={node.highlighted || undefined}
              style={{ left: node.x, top: node.y, width: NODE_WIDTH, height: NODE_HEIGHT }}>
              <span className="sb-connections__node-name">{node.icon && <Icon name={node.icon} size={16} className="sb-connections__node-icon" />}{node.name}</span>
              {node.type && <span className="sb-connections__node-type">{node.type}</span>}
            </li>
          ))}
        </ul>
        {/* Drawn above the cards so the connector end-circles stay fully visible. */}
        <svg className="sb-connections__lines" width={CANVAS_WIDTH} height={CANVAS_HEIGHT}
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`} aria-hidden="true">
          {connections.map(connection => <ConnectionLine key={connection.id} connection={connection} />)}
        </svg>
        {connections.filter(connection => connection.count > 0).map(connection => (
          <Tooltip key={connection.id} content={`${connection.count} changes waiting for deployment`}
            variant="black" placement="bottom" wrapperClassName="sb-connections__badge-anchor"
            wrapperStyle={{ left: connection.badge[0], top: connection.badge[1] }}>
            <span className="sb-connections__badge" aria-hidden="true">{connection.count}</span>
          </Tooltip>
        ))}
      </div>
      <ul className="sb-connections__sr-only" aria-label="Connections">
        {connections.map(connection => {
          const from = byId.get(connection.from);
          const to = byId.get(connection.to);
          if (!from || !to) return null;
          return <li key={connection.id}>
            {`${nodeLabel(from)} to ${nodeLabel(to)}, ${connection.kind}, ${connection.count} changes waiting for deployment`}
          </li>;
        })}
      </ul>
    </figure>
  );
}

function SbConnectionsPage({ initialTab = 'connections' }: { initialTab?: string }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [sidebarId, setSidebarId] = useState('sandbox');
  const tabLabel = SANDBOX_TABS.find(tab => tab.id === activeTab)?.label ?? '';
  return (
    <div className="sb-connections">
      <header><NextGenTopBand moduleLabel={null} showTerritory={false} /></header>
      <aside className="sb-connections__sidebar" aria-label="Setup navigation">
        <VerticalTabs variant="setup" searchable width="100%" items={SB_SETUP_ITEMS}
          activeId={sidebarId} onSelect={setSidebarId} />
      </aside>
      <main className="sb-connections__workspace" aria-label="Sandbox">
        <Tabs tabs={SANDBOX_TABS} activeTab={activeTab} onChange={setActiveTab} />
        <section className="sb-connections__content" role="tabpanel" aria-label={tabLabel}>
          {activeTab === 'connections' ? <>
            <div className="sb-connections__intro">
              <div>
                <h1>Connections</h1>
                <p>Connections to receive or export the changes with respect to the {ENVIRONMENT} sandbox are listed below</p>
              </div>
              <Button variant="primary">Manage Connections</Button>
            </div>
            <ConnectionLegend />
            <div className="sb-connections__panel">
              <SbConnectionsDiagram />
            </div>
          </> : <p className="sb-connections__note">{tabLabel} is outside the scope of this pattern.</p>}
        </section>
      </main>
    </div>
  );
}

const meta = {
  title: 'Design System/Patterns/SB Connections',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Sandbox → Connections tab from Figma node 79946:197286 ("Sandbox Update"). Shows how Customization, Automation and Dev sandboxes flow through their QA sandboxes into Pre production and Production, with inbound/outbound links and counts of changes waiting for deployment. Static sample data; Manage Connections has no action.',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SbConnectionsPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Setup Home' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Sandbox' })).toHaveAttribute('data-active', 'true');
    await expect(canvas.getByRole('tab', { name: 'Connections' })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('heading', { name: 'Connections' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Manage Connections' })).toHaveAttribute('data-variant', 'primary');
    const environments = within(canvas.getByRole('list', { name: 'Environments' }));
    await expect(environments.getAllByRole('listitem')).toHaveLength(8);
    await expect(environments.getByText('Production')).toBeVisible();
    const connections = within(canvas.getByRole('list', { name: 'Connections' }));
    await expect(connections.getAllByRole('listitem')).toHaveLength(7);
    await expect(connections.getByText(/^Pre production \(Full Data\) to Production, outbound/)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', { name: 'Deployment Logs' }));
    await expect(canvas.queryByRole('list', { name: 'Environments' })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', { name: 'Connections' }));
    await expect(canvas.getByRole('list', { name: 'Environments' })).toBeVisible();
  },
};

export const DiagramOnly: Story = {
  name: 'Diagram only',
  parameters: { layout: 'centered' },
  render: () => <div className="sb-connections__panel sb-connections__panel--standalone"><SbConnectionsDiagram /></div>,
};
