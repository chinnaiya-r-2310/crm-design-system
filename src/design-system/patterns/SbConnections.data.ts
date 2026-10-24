// Figma 79946:197286 ("Sandbox Update") — Sandbox → Connections tab.

export type ConnectionKind = 'inbound' | 'outbound' | 'internal';
export type Point = readonly [number, number];

export type SandboxNode = {
  id: string;
  name: string;
  type?: string;
  /** Optional icon from the CRM icon gallery, shown before the name in the label colour. */
  icon?: string;
  /** Top-left corner on the diagram canvas, in px. */
  x: number;
  y: number;
  highlighted?: boolean;
};

export type SandboxConnection = {
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
};

// Wide enough for "Configuration and Data" on one line.
export const NODE_WIDTH = 190;
export const NODE_HEIGHT = 60;
export const CANVAS_WIDTH = 810;
export const CANVAS_HEIGHT = 450;

export const SANDBOX_TABS = [
  { id: 'list', label: 'Sandbox List' },
  { id: 'changes', label: 'Current Changes List' },
  { id: 'connections', label: 'Connections' },
  { id: 'logs', label: 'Deployment Logs' },
];

// Setup left menu (icons + groups) comes from the VerticalTabs "setup" variant.
export { SETUP_MENU_ITEMS as SB_SETUP_ITEMS } from '../components/VerticalTabs/setupMenuItems';

// Stage layout from the reference image, flowing bottom to top: three build
// sandboxes feed their QA sandboxes, every QA sandbox feeds Pre production,
// which deploys to Production at the top.
const COL = [0, 310, 620] as const; // 120px gap between cards
const ROW = [0, 130, 260, 390] as const;
// Horizontal centre of each column, and the row where QA links merge.
const MID = [95, 405, 715] as const;
const MERGE_Y = 225;

export const SANDBOX_NODES: SandboxNode[] = [
  { id: 'production', name: 'Production', icon: 'CrmEnterprise', x: COL[1], y: ROW[0] },
  { id: 'pre-production', name: 'Pre production', type: 'Full Data', x: COL[1], y: ROW[1] },
  { id: 'customization-qa', name: 'Customization QA', type: 'Configuration and Data', x: COL[0], y: ROW[2] },
  { id: 'automation-qa', name: 'Automation QA', type: 'Configuration and Data', x: COL[1], y: ROW[2] },
  { id: 'dev-qa', name: 'Dev QA', type: 'Configuration and Data', x: COL[2], y: ROW[2] },
  { id: 'customization', name: 'Customization', type: 'Configuration', x: COL[0], y: ROW[3] },
  { id: 'automation', name: 'Automation', type: 'Configuration', x: COL[1], y: ROW[3] },
  { id: 'dev', name: 'Dev', type: 'Configuration', x: COL[2], y: ROW[3] },
];

const QA_BOTTOM = ROW[2] + NODE_HEIGHT;
const PRE_BOTTOM = ROW[1] + NODE_HEIGHT;

export const SANDBOX_CONNECTIONS: SandboxConnection[] = [
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
];
