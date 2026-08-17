import type { Meta, StoryObj } from '@storybook/react';
import { CodeSnippet } from './CodeSnippet';

const SINGLE_CODE = `options ::= JavaScript Regular Expression option (ctor-options)`;

const MULTI_CODE = `var Singleton = (function() {
  var privateVariable = "…";
  this.publicMethod = function() {…};
}) ();`;

const INLINE_CODE = `node -v-start`;

const meta: Meta<typeof CodeSnippet> = {
  title: 'Design System/Components/CodeSnippet',
  component: CodeSnippet,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Displays a read-only code string with a one-click copy button. ' +
          '`single` — fixed-height, horizontal scroll. ' +
          '`multi` — auto-height, wraps. ' +
          '`inline` — hugs content width, embeds in text. ' +
          'Figma: Chinnaiya-Style-Sheet node 93672-150667.',
      },
    },
  },
  argTypes: {
    type:  { control: 'radio', options: ['single', 'multi', 'inline'] },
    code:  { control: 'text' },
  },
  args: { type: 'single', code: SINGLE_CODE },
};
export default meta;
type Story = StoryObj<typeof CodeSnippet>;

export const Playground: Story = {};

export const SingleLine: Story = {
  name: 'Single Line',
  args: { type: 'single', code: SINGLE_CODE },
};

export const MultiLine: Story = {
  name: 'Multi Line',
  args: { type: 'multi', code: MULTI_CODE },
};

export const Inline: Story = {
  name: 'Inline',
  args: { type: 'inline', code: INLINE_CODE },
};

export const LongSingleLine: Story = {
  name: 'Long Single Line (scrolls)',
  args: {
    type: 'single',
    code: `npx create-react-app my-app --template typescript && cd my-app && npm install @zoho/crm-design-system && npm start`,
  },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const InlineInText: Story = {
  name: 'Inline Within Paragraph',
  parameters: { controls: { disable: true } },
  render: () => (
    <p style={{ fontFamily: 'var(--ds-font-family-base, sans-serif)', fontSize: 14, color: '#313949', lineHeight: '28px' }}>
      Run&nbsp;<CodeSnippet code="node -v-start" type="inline" />&nbsp;to start the Node server.
    </p>
  ),
};

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600, fontFamily: 'var(--ds-font-family-base, sans-serif)' }}>
      {([
        { label: 'Single Line', type: 'single' as const, code: SINGLE_CODE },
        { label: 'Multi Line',  type: 'multi'  as const, code: MULTI_CODE },
        { label: 'Inline',      type: 'inline' as const, code: INLINE_CODE },
      ]).map(({ label, type, code }) => (
        <div key={type}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 600, color: '#616E88', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{label}</p>
          <CodeSnippet type={type} code={code} />
        </div>
      ))}
    </div>
  ),
};
