import type { Meta, StoryObj } from '@storybook/react';
import typographyTokens from './tokens/typography.json';

// ─────────────────────────────────────────────────────────────────────────────
// Token shapes
// ─────────────────────────────────────────────────────────────────────────────

interface PrimitiveToken {
  name: string;
  path: string;
  value: number | string;
  figmaId?: string;
}

interface ScaleEntry {
  name: string;
  label: string;
  usage: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily: string;
}

type TokenNode = { $type?: string; $value?: unknown; [key: string]: unknown };

function collectPrimitives(node: TokenNode, pathParts: string[]): PrimitiveToken[] {
  if (node.$type && '$value' in node && typeof node.$value !== 'object') {
    return [{
      name: pathParts[pathParts.length - 1],
      path: pathParts.join('.'),
      value: node.$value as number | string,
      figmaId: (node.$extensions as Record<string, unknown> | undefined)
        ?.['com.figma.variableId'] as string | undefined,
    }];
  }
  const results: PrimitiveToken[] = [];
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$') || typeof child !== 'object' || child === null) continue;
    results.push(...collectPrimitives(child as TokenNode, [...pathParts, key]));
  }
  return results;
}

function resolveAlias(alias: string): number | string {
  const inner = alias.slice(1, -1);
  const parts = inner.split('.');
  let node: unknown = typographyTokens;
  for (const part of parts) {
    if (typeof node !== 'object' || node === null) return alias;
    node = (node as Record<string, unknown>)[part];
  }
  return (node as TokenNode)?.$value as number | string ?? alias;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build data
// ─────────────────────────────────────────────────────────────────────────────

const tokens = typographyTokens as unknown as Record<string, TokenNode>;

const fontSizeTokens   = collectPrimitives(tokens.fontSize,   ['fontSize']);
const lineHeightTokens = collectPrimitives(tokens.lineHeight,  ['lineHeight']);
const fontWeightTokens = collectPrimitives(tokens.fontWeight,  ['fontWeight']);
const fontFamilyTokens = collectPrimitives(tokens.fontFamily,  ['fontFamily']);

const SCALE_META: Record<string, { label: string; usage: string }> = {
  xs:   { label: 'XS — 11px',       usage: 'Helper text, badges, timestamps' },
  sm:   { label: 'SM — 12px',       usage: 'Captions, secondary labels, tags' },
  md:   { label: 'MD — 13px',       usage: 'Button labels (sm), compact UI' },
  base: { label: 'Base — 14px',     usage: 'Body text, form fields, table rows' },
  h3:   { label: 'H3 — 15px',       usage: 'Small headings, section labels' },
  h2:   { label: 'H2 — 18px',       usage: 'Card titles, section headings' },
  h1:   { label: 'H1 — 20px',       usage: 'Page headings, module titles' },
};

const SAMPLE: Record<string, string> = {
  xs:   'Mailbox: bharathi.s@zohocorp.com · Account Type: Private',
  sm:   'Transform your business with the gold standard in customer relationship management software.',
  md:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz  0123456789',
  base: 'Bharathithasan Shanmugam · bharathi.s@zohocorp.com · +91 98400 00000',
  h3:   'Example for Small Font',
  h2:   'CRM Design System — Typography',
  h1:   'CRM Design System',
};

const scaleEntries: ScaleEntry[] = Object.entries(tokens.scale)
  .filter(([k]) => !k.startsWith('$'))
  .map(([name, node]) => {
    const v = (node as TokenNode).$value as Record<string, string>;
    return {
      name,
      label:      SCALE_META[name]?.label  ?? name,
      usage:      SCALE_META[name]?.usage  ?? '',
      fontSize:   resolveAlias(v.fontSize)   as number,
      lineHeight: resolveAlias(v.lineHeight)  as number,
      fontWeight: resolveAlias(v.fontWeight)  as number,
      fontFamily: resolveAlias(v.fontFamily)  as string,
    };
  });

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 7px',
      borderRadius: 4,
      background: '#EEF1F9',
      color: '#374151',
      fontSize: 11,
      fontFamily: 'monospace',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

function ScaleRow({ entry }: { entry: ScaleEntry }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr 200px',
      alignItems: 'center',
      gap: 24,
      padding: '18px 24px',
      borderBottom: '1px solid #E5E7EB',
    }}>
      {/* meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{
          fontFamily: 'monospace',
          fontSize: 11,
          fontWeight: 700,
          color: '#6366F1',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {entry.name}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Pill>{entry.fontSize}px</Pill>
          <Pill>lh {entry.lineHeight}px</Pill>
          <Pill>w{entry.fontWeight}</Pill>
        </div>
        <span style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.4 }}>{entry.label}</span>
      </div>

      {/* rendered specimen */}
      <div style={{
        fontSize: entry.fontSize,
        lineHeight: `${entry.lineHeight}px`,
        fontWeight: entry.fontWeight,
        fontFamily: entry.fontFamily,
        color: '#31394A',
        minWidth: 0,
        wordBreak: 'break-word',
      }}>
        {SAMPLE[entry.name]}
      </div>

      {/* usage */}
      <div style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.5 }}>
        {entry.usage}
      </div>
    </div>
  );
}

function WeightRow({ token }: { token: PrimitiveToken }) {
  const label: Record<string, string> = { regular: '400', medium: '500', semibold: '600', bold: '700' };
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      alignItems: 'center',
      gap: 24,
      padding: '14px 24px',
      borderBottom: '1px solid #E5E7EB',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Pill>fontWeight.{token.name}</Pill>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>{label[token.name] ?? token.value}</span>
      </div>
      <div style={{
        fontSize: 18,
        fontWeight: token.value as number,
        fontFamily: 'Zoho Puvi, -apple-system, sans-serif',
        color: '#31394A',
        lineHeight: 1.3,
      }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ  abcdefghijklmnopqrstuvwxyz  0123456789
      </div>
    </div>
  );
}

function FamilyCard({ token }: { token: PrimitiveToken }) {
  return (
    <div style={{
      flex: '1 1 340px',
      padding: '20px 24px',
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 10,
    }}>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#6B7280', marginBottom: 4 }}>
        fontFamily.{token.name}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#9CA3AF', marginBottom: 16, wordBreak: 'break-all', lineHeight: 1.5 }}>
        {token.value as string}
      </div>
      <div style={{ fontSize: 24, fontFamily: token.value as string, color: '#31394A', lineHeight: 1.3, marginBottom: 8 }}>
        AaBbCcDd 0123456789
      </div>
      <div style={{ fontSize: 13, fontFamily: token.value as string, color: '#616E88', lineHeight: 1.5 }}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
        abcdefghijklmnopqrstuvwxyz<br />
        @#$%&amp;!?  0123456789
      </div>
    </div>
  );
}

function PrimitiveTable({ tokens: rows, unit }: { tokens: PrimitiveToken[]; unit: string }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ background: '#F9FAFB', borderBottom: '2px solid #E5E7EB' }}>
          {['Token', 'Value', 'Figma Variable ID'].map(h => (
            <th key={h} style={{ textAlign: 'left', padding: '10px 16px', color: '#6B7280', fontWeight: 600, fontSize: 12 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((token, i) => (
          <tr key={token.path} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderBottom: '1px solid #E5E7EB' }}>
            <td style={{ padding: '10px 16px', fontFamily: 'monospace', color: '#374151', fontSize: 12 }}>
              {token.path}
            </td>
            <td style={{ padding: '10px 16px', fontFamily: 'monospace', color: '#111827', fontWeight: 700, fontSize: 13 }}>
              {token.value}{unit}
            </td>
            <td style={{ padding: '10px 16px', fontFamily: 'monospace', color: '#9CA3AF', fontSize: 11 }}>
              {token.figmaId ?? '—'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SectionHead({ title, count }: { title: string; count?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#1F2937', fontFamily: 'system-ui, sans-serif' }}>{title}</h2>
      {count !== undefined && (
        <span style={{ fontSize: 13, color: '#9CA3AF', fontFamily: 'system-ui, sans-serif' }}>{count} token{count !== 1 ? 's' : ''}</span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

function TypographyPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: '40px 48px', background: '#F8F9FB', minHeight: '100vh' }}>

      {/* header */}
      <div style={{ marginBottom: 56 }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#111827' }}>Typography</h1>
        <p style={{ margin: '8px 0 0', color: '#6B7280', fontSize: 15 }}>
          Zoho Puvi · {scaleEntries.length} scale steps · {fontSizeTokens.length} size tokens · {fontWeightTokens.length} weight tokens
        </p>
        <p style={{ margin: '4px 0 0', color: '#9CA3AF', fontSize: 13 }}>
          Based on Chinnaiya Style Sheet — Typography-Puvi (node 325-57142)
        </p>
      </div>

      {/* type scale */}
      <section style={{ marginBottom: 56 }}>
        <SectionHead title="Type Scale" count={scaleEntries.length} />
        <p style={{ margin: '0 0 16px', color: '#9CA3AF', fontSize: 13 }}>
          Each step composites fontSize + lineHeight + fontWeight. Sizes from the Figma font size scale: 11 · 12 · 13 · 14 · 15 · 18 · 20px.
        </p>
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr 200px',
            gap: 24,
            padding: '10px 24px',
            background: '#F9FAFB',
            borderBottom: '2px solid #E5E7EB',
          }}>
            {['Token', 'Specimen', 'Usage'].map(h => (
              <span key={h} style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
            ))}
          </div>
          {scaleEntries.map(entry => <ScaleRow key={entry.name} entry={entry} />)}
        </div>
      </section>

      {/* font family */}
      <section style={{ marginBottom: 56 }}>
        <SectionHead title="Font Family" count={fontFamilyTokens.length} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {fontFamilyTokens.map(token => <FamilyCard key={token.path} token={token} />)}
        </div>
      </section>

      {/* font weight */}
      <section style={{ marginBottom: 56 }}>
        <SectionHead title="Font Weight" count={fontWeightTokens.length} />
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden' }}>
          {fontWeightTokens.map(token => <WeightRow key={token.path} token={token} />)}
        </div>
      </section>

      {/* font size primitives */}
      <section style={{ marginBottom: 48 }}>
        <SectionHead title="Font Size Primitives" count={fontSizeTokens.length} />
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden' }}>
          <PrimitiveTable tokens={fontSizeTokens} unit="px" />
        </div>
      </section>

      {/* line height primitives */}
      <section style={{ marginBottom: 48 }}>
        <SectionHead title="Line Height Primitives" count={lineHeightTokens.length} />
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden' }}>
          <PrimitiveTable tokens={lineHeightTokens} unit="px" />
        </div>
      </section>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Story
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Design System/Foundations/Typography',
  component: TypographyPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'All typography design tokens sourced from the Chinnaiya Style Sheet — ' +
          'Typography-Puvi frame (node 325-57142). Font: Zoho Puvi. ' +
          'Sizes: 11 · 12 · 13 · 14 · 15 · 18 · 20px. ' +
          'Weights: 400 (regular) · 500 (medium) · 600 (semibold) · 700 (bold).',
      },
    },
  },
};

export default meta;

export const AllTypography: StoryObj = {
  name: 'All Typography',
  render: () => <TypographyPage />,
};
