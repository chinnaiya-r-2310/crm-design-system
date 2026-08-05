import type { Meta, StoryObj } from '@storybook/react';
import colorTokens from './tokens/color.json';

interface ColorToken {
  path: string;
  hex: string;
  alpha: number;
  isAlias: boolean;
}

interface TokenGroup {
  group: string;
  tokens: ColorToken[];
}

type TokenNode = {
  $type?: string;
  $value?: { hex: string; alpha: number } | string;
  [key: string]: unknown;
};

function collectTokens(node: TokenNode, pathParts: string[]): ColorToken[] {
  if (node.$type === 'color') {
    const val = node.$value;
    if (typeof val === 'string') {
      return [{ path: pathParts.join('.'), hex: '#888888', alpha: 1, isAlias: true }];
    }
    if (val && typeof val === 'object' && 'hex' in val) {
      return [{ path: pathParts.join('.'), hex: val.hex as string, alpha: (val.alpha as number) ?? 1, isAlias: false }];
    }
    return [];
  }

  const results: ColorToken[] = [];
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    if (value && typeof value === 'object') {
      results.push(...collectTokens(value as TokenNode, [...pathParts, key]));
    }
  }
  return results;
}

function buildGroups(): TokenGroup[] {
  const groups: TokenGroup[] = [];
  for (const [groupKey, groupValue] of Object.entries(colorTokens)) {
    if (groupKey.startsWith('$')) continue;
    const tokens = collectTokens(groupValue as TokenNode, [groupKey]);
    if (tokens.length > 0) {
      groups.push({ group: groupKey, tokens });
    }
  }
  return groups;
}

const groups = buildGroups();

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`;
}

function getLuminance(hex: string): number {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function SwatchCard({ token }: { token: ColorToken }) {
  const bg = token.isAlias ? '#888888' : hexToRgba(token.hex, token.alpha);
  const textColor = getLuminance(token.isAlias ? '#888888' : token.hex) > 0.4 ? '#1a1a2e' : '#ffffff';
  const shortPath = token.path.split('.').slice(1).join('.');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 160 }}>
      <div
        title={token.path}
        style={{
          height: 72,
          borderRadius: 8,
          background: bg,
          border: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '6px 8px',
          boxSizing: 'border-box',
        }}
      >
        {token.isAlias && (
          <span style={{ fontSize: 10, color: textColor, opacity: 0.8 }}>alias</span>
        )}
      </div>
      <div style={{ marginTop: 6 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#1a1a2e', lineHeight: 1.3, wordBreak: 'break-all' }}>
          {shortPath || token.path}
        </div>
        <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2, fontFamily: 'monospace' }}>
          {token.isAlias ? 'alias' : token.hex.toUpperCase()}
          {!token.isAlias && token.alpha < 1 && ` / ${Math.round(token.alpha * 100)}%`}
        </div>
      </div>
    </div>
  );
}

const GROUP_LABELS: Record<string, string> = {
  bg: 'Background',
  text: 'Text',
  border: 'Border',
  neutral: 'Neutral',
  icon: 'Icon',
  status: 'Status',
  shadow: 'Shadow',
  focus: 'Focus',
  components: 'Components',
  products: 'Products',
};

function ColorFoundationsPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: 32, background: '#f8f9fb', minHeight: '100vh' }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#111827' }}>Color Foundations</h1>
        <p style={{ margin: '8px 0 0', color: '#6b7280', fontSize: 15 }}>
          {groups.reduce((n, g) => n + g.tokens.length, 0)} tokens across {groups.length} groups — Day Mode NXT GEN
        </p>
      </div>

      {groups.map(({ group, tokens }) => (
        <section key={group} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#1f2937', textTransform: 'capitalize' }}>
              {GROUP_LABELS[group] ?? group}
            </h2>
            <span style={{ fontSize: 13, color: '#9ca3af' }}>{tokens.length} tokens</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {tokens.map((token) => (
              <SwatchCard key={token.path} token={token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Foundations/Colors',
  component: ColorFoundationsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'All color design tokens from the Day Mode NXT GEN token set, grouped by category.',
      },
    },
  },
};

export default meta;

export const AllColors: StoryObj = {
  name: 'All Colors',
  render: () => <ColorFoundationsPage />,
};
