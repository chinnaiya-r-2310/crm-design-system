import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { CriteriaBuilder } from './CriteriaBuilder';
import { CriteriaSummary } from './CriteriaSummary';
import { NestedCriteria } from './NestedCriteria';
import type { CriteriaRow } from './CriteriaBuilder';
import './CriteriaBuilder.stories.css';

// ─────────────────────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof CriteriaBuilder> = {
  title: 'Design System/Components/CriteriaBuilder',
  component: CriteriaBuilder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Criteria Builder for constructing filter conditions. ' +
          'Supports text, date, and date-range (between) row types. ' +
          'Rows are connected by toggleable AND / OR operators. ' +
          'Maximum 25 criteria rows. ' +
          'Figma: Chinnaiya-Style-Sheet node 93656-149883.',
      },
    },
  },
  argTypes: {
    rows:                { control: false },
    pattern:             { control: 'text' },
    fieldOptions:        { control: false },
    operatorOptions:     { control: false },
    getOperatorOptions:  { control: false },
    getDefaultOperator:  { control: false },
    onChange:            { control: false },
    onPatternChange:     { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CriteriaBuilder>;

// ─────────────────────────────────────────────────────────────────────────────
// Sample data — 30 Lead module fields
// ─────────────────────────────────────────────────────────────────────────────

const FIELD_OPTIONS = [
  // ── Personal info ──────────────────────────────────────────────────────────
  { value: 'first_name',       label: 'First Name',         fieldType: 'text'       },
  { value: 'last_name',        label: 'Last Name',          fieldType: 'text'       },
  { value: 'company',          label: 'Company',            fieldType: 'text'       },
  { value: 'job_title',        label: 'Job Title',          fieldType: 'text'       },
  { value: 'email',            label: 'Email',              fieldType: 'email'      },
  { value: 'phone',            label: 'Phone',              fieldType: 'phone'      },
  { value: 'mobile',           label: 'Mobile',             fieldType: 'phone'      },
  { value: 'fax',              label: 'Fax',                fieldType: 'phone'      },
  { value: 'website',          label: 'Website',            fieldType: 'url'        },
  // ── Categorisation ─────────────────────────────────────────────────────────
  { value: 'lead_source',      label: 'Lead Source',        fieldType: 'picklist'   },
  { value: 'lead_status',      label: 'Lead Status',        fieldType: 'picklist'   },
  { value: 'industry',         label: 'Industry',           fieldType: 'picklist'   },
  { value: 'rating',           label: 'Rating',             fieldType: 'picklist'   },
  { value: 'country',          label: 'Country',            fieldType: 'picklist'   },
  // ── Numeric ────────────────────────────────────────────────────────────────
  { value: 'annual_revenue',   label: 'Annual Revenue',     fieldType: 'currency'   },
  { value: 'no_of_employees',  label: 'No. of Employees',   fieldType: 'number'     },
  { value: 'score',            label: 'Score',              fieldType: 'number'     },
  { value: 'commission_rate',  label: 'Commission Rate',    fieldType: 'percentage' },
  { value: 'expected_revenue', label: 'Expected Revenue',   fieldType: 'currency'   },
  { value: 'deal_value',       label: 'Deal Value',         fieldType: 'currency'   },
  // ── Dates ──────────────────────────────────────────────────────────────────
  { value: 'created_date',     label: 'Created Date',       fieldType: 'date'       },
  { value: 'modified_date',    label: 'Modified Date',      fieldType: 'date'       },
  { value: 'converted_date',   label: 'Converted Date',     fieldType: 'date'       },
  // ── Ownership ──────────────────────────────────────────────────────────────
  { value: 'lead_owner',       label: 'Lead Owner',         fieldType: 'lookup'     },
  { value: 'campaign_source',  label: 'Campaign Source',    fieldType: 'lookup'     },
  // ── Address ────────────────────────────────────────────────────────────────
  { value: 'street',           label: 'Street',             fieldType: 'text'       },
  { value: 'city',             label: 'City',               fieldType: 'text'       },
  { value: 'state',            label: 'State',              fieldType: 'text'       },
  { value: 'zip_code',         label: 'Zip Code',           fieldType: 'text'       },
  { value: 'description',      label: 'Description',        fieldType: 'text'       },
];

/** Operators for text-like fields: single line, multi-line, phone, email, lookup, picklist, url. */
const TEXT_OPERATORS = [
  { value: 'is',             label: 'is'              },
  { value: 'isnt',           label: "isn't"           },
  { value: 'contains',       label: 'contains'        },
  { value: 'doesnt_contain', label: "doesn't contain" },
  { value: 'starts_with',    label: 'starts with'     },
  { value: 'ends_with',      label: 'ends with'       },
  { value: 'is_empty',       label: 'is empty'        },
  { value: 'is_not_empty',   label: 'is not empty'    },
];

/** Operators for numeric fields (number, currency, percentage) and date fields. */
const NUMERIC_OPERATORS = [
  { value: 'eq',           label: '='           },
  { value: 'neq',          label: '!='          },
  { value: 'lt',           label: '<'           },
  { value: 'lte',          label: '<='          },
  { value: 'gt',           label: '>'           },
  { value: 'gte',          label: '>='          },
  { value: 'between',      label: 'between'     },
  { value: 'not_between',  label: 'not between' },
  { value: 'is_empty',     label: 'is empty'    },
  { value: 'is_not_empty', label: 'is not empty'},
];

function getOperatorOptions(fieldType: string) {
  switch (fieldType) {
    case 'number':
    case 'currency':
    case 'percentage':
    case 'date':
      return NUMERIC_OPERATORS;
    default:
      return TEXT_OPERATORS;
  }
}

function getDefaultOperator(fieldType: string): string {
  switch (fieldType) {
    case 'number':
    case 'currency':
    case 'percentage':
    case 'date':
      return 'eq';
    case 'email':
    case 'phone':
    case 'lookup':
    case 'picklist':
      return 'is';
    default: // text, multiline, url, etc.
      return 'contains';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Preset row data
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_ROWS: CriteriaRow[] = [
  {
    id: 'r1',
    field: 'first_name',
    operator: 'contains',
    value: 'Saravanan Selvaraj',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'r2',
    field: 'created_date',
    operator: 'between',
    value: '22/04/2022',
    valueTime: '09:00 AM',
    valueTo: '23/04/2022',
    valueToTime: '06:00 PM',
    type: 'date-range',
    connector: 'OR',
  },
  {
    id: 'r3',
    field: 'lead_status',
    operator: 'is_not_empty',
    value: '${NOTEMPTY}',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'r4',
    field: 'deal_value',
    operator: 'eq',
    value: '',
    type: 'text',
    connector: 'AND',
  },
];

const ERROR_ROWS: CriteriaRow[] = [
  {
    id: 'e1',
    field: '',
    operator: 'eq',
    value: 'Saravanan Selvaraj',
    type: 'text',
    connector: 'AND',
    errors: { field: 'Please select a field.' },
  },
  {
    id: 'e2',
    field: 'created_date',
    operator: 'between',
    value: '',
    valueTime: '',
    valueTo: '23/04/2022',
    valueToTime: '',
    type: 'date-range',
    connector: 'OR',
    errors: {
      value: 'Please enter a valid Date/Time.',
      valueTo: 'From Date should be less than or equal to To Date.',
    },
  },
  {
    id: 'e3',
    field: 'lead_status',
    operator: 'is_empty',
    value: '${EMPTY}',
    type: 'text',
    connector: 'AND',
  },
  {
    id: 'e4',
    field: 'deal_value',
    operator: '',
    value: '',
    type: 'text',
    connector: 'AND',
    errors: { operator: 'Please specify a condition.' },
  },
];

// 25 rows to demonstrate the limit
const LIMIT_ROWS: CriteriaRow[] = Array.from({ length: 25 }, (_, i) => ({
  id: `limit-${i}`,
  field: 'first_name',
  operator: 'eq',
  value: `Value ${i + 1}`,
  type: 'text' as const,
  connector: 'AND' as const,
}));

// ─────────────────────────────────────────────────────────────────────────────
// Interactive wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Interactive({
  initialRows,
  initialPattern,
  reorderable = false,
}: {
  initialRows: CriteriaRow[];
  initialPattern: string;
  reorderable?: boolean;
}) {
  const [rows, setRows] = useState<CriteriaRow[]>(initialRows);
  const [pattern, setPattern] = useState(initialPattern);

  return (
    <div className="criteria-builder-story-interactive" style={{ width: 760, padding: 24, background: '#fff' }}>
      <CriteriaBuilder
        rows={rows}
        pattern={pattern}
        reorderable={reorderable}
        fieldOptions={FIELD_OPTIONS}
        getOperatorOptions={getOperatorOptions}
        getDefaultOperator={getDefaultOperator}
        onChange={setRows}
        onPatternChange={setPattern}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────────────────────

/** Default state — four criteria rows including a date-range row.
 *  Selecting a number / currency / percentage field auto-sets the operator to "=".
 *  Toggling AND / OR regenerates the Criteria Pattern. */
export const Default: Story = {
  name: 'Default',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={DEFAULT_ROWS}
      initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )"
    />
  ),
};

/** Reorder rows while preserving custom pattern grouping and criterion references. */
export const WithReorder: Story = {
  name: 'With reorder',
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  decorators: [
    (Story) => (
      <main className="criteria-reorder-showcase">
        <div className="criteria-reorder-showcase__accent criteria-reorder-showcase__accent--primary" aria-hidden="true" />
        <div className="criteria-reorder-showcase__accent criteria-reorder-showcase__accent--success" aria-hidden="true" />
        <div className="criteria-reorder-showcase__accent criteria-reorder-showcase__accent--warning" aria-hidden="true" />
        <section className="criteria-reorder-showcase__content" aria-labelledby="criteria-reorder-title">
          <h1 id="criteria-reorder-title">
            Criteria Builder with <span className="criteria-reorder-showcase__title-accent">Reorder</span>
          </h1>
          <Story />
        </section>
      </main>
    ),
  ],
  render: () => (
    <Interactive
      reorderable
      initialRows={[
        ...DEFAULT_ROWS,
        { id: 'r5', field: 'company', operator: 'contains', value: 'Zylker', type: 'text', connector: 'AND' },
        { id: 'r6', field: 'city', operator: 'is', value: 'Chennai', type: 'text', connector: 'AND' },
        { id: 'r7', field: 'lead_source', operator: 'is', value: 'Website', type: 'text', connector: 'AND' },
      ]}
      initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 ) and 5 and 6 and 7"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pattern = () => canvasElement.querySelector('.criteria-builder-pattern-text');
    const fields = () => Array.from(canvasElement.querySelectorAll('.criteria-builder-row .dropdown-root'))
      .map(element => element.textContent);
    const connectors = () => Array.from(canvasElement.querySelectorAll('.criteria-builder-conn-btn'));
    const initialConnectors = connectors();
    const initialOperators = initialConnectors.map(element => element.textContent);
    const initialFields = fields();
    await expect(canvas.getAllByRole('button', { name: /Reorder criterion/ })).toHaveLength(7);
    const root = canvasElement.querySelector('.criteria-builder-root')!;
    const initialTop = root.getBoundingClientRect().top;
    const heading = canvas.getByRole('heading', { name: 'Criteria Builder with Reorder' });
    await expect(heading.querySelector('.criteria-reorder-showcase__title-accent')).toHaveTextContent('Reorder');
    const headingTop = heading.getBoundingClientRect().top;
    const initialHeight = root.getBoundingClientRect().height;
    const initialPatternTop = pattern()!.getBoundingClientRect().top;
    const rowGeometry = () => Array.from(canvasElement.querySelectorAll('.dragger .criteria-builder-row'))
      .map(row => {
        const rect = row.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, height: rect.height };
      });
    const initialRows = rowGeometry();
    const rowGaps = (rects: ReturnType<typeof rowGeometry>) => rects.slice(1)
      .map((rect, index) => rect.top - rects[index].bottom);
    const dragHandle = canvas.getByRole('button', { name: 'Reorder criterion 1' });
    const dragBox = dragHandle.getBoundingClientRect();
    const view = canvasElement.ownerDocument.defaultView!;
    dragHandle.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true, button: 0, clientX: dragBox.x + 14, clientY: dragBox.y + 17,
    }));
    view.dispatchEvent(new PointerEvent('pointermove', { clientY: dragBox.y + 25 }));
    await waitFor(() => expect(canvasElement.querySelector('[data-dragging]')).not.toBeNull());
    await expect(root.getBoundingClientRect().height).toBe(initialHeight);
    await expect(pattern()!.getBoundingClientRect().top).toBe(initialPatternTop);
    await expect(rowGeometry()).toEqual(initialRows);
    await expect(rowGaps(rowGeometry())).toEqual(rowGaps(initialRows));
    const list = canvasElement.querySelector('.criteria-builder-reorder-layout > .dragger')!;
    await expect(view.getComputedStyle(list).overflowX).toBe('visible');
    for (const row of list.querySelectorAll('.criteria-builder-row')) {
      await expect(row.getBoundingClientRect().right).toBeLessThanOrEqual(list.getBoundingClientRect().right);
      for (const fields of row.querySelectorAll('.criteria-builder-fields')) {
        await expect(fields.getBoundingClientRect().right).toBeLessThanOrEqual(list.getBoundingClientRect().right);
      }
    }
    for (const action of canvasElement.querySelectorAll('.criteria-builder-actions button')) {
      await expect(action).not.toBeVisible();
    }
    for (const connector of connectors()) {
      await expect(connector).not.toBeVisible();
    }
    // Focus/hover must not reveal another row's handle during an active drag.
    const otherHandle = canvas.getByRole('button', { name: 'Reorder criterion 2' });
    otherHandle.focus();
    await userEvent.hover(otherHandle);
    for (const grip of canvasElement.querySelectorAll('.criteria-builder-reorder-grip')) {
      await expect(grip).not.toBeVisible();
    }
    await userEvent.unhover(otherHandle);
    for (const line of canvasElement.querySelectorAll('.criteria-builder-reorder-rail .criteria-builder-circle-conn-line')) {
      await expect(line).toBeVisible();
      await expect(view.getComputedStyle(line).top).toBe('31px');
    }
    for (const number of canvasElement.querySelectorAll('.criteria-builder-reorder-number')) {
      // Only the floating copy displays the picked criterion's number.
      await expect(view.getComputedStyle(number).visibility).toBe(
        number.closest('.dragger-item--placeholder') ? 'hidden' : 'visible'
      );
    }
    const ghostNumber = canvasElement.ownerDocument.querySelector('.dragger-ghost .criteria-builder-reorder-number');
    await expect(ghostNumber).toBeVisible();
    await expect(ghostNumber).toHaveTextContent('1');
    const ghostGrip = canvasElement.ownerDocument.querySelector('.dragger-ghost .criteria-builder-reorder-grip')!;
    await expect(ghostGrip).toBeVisible();
    const ghost = ghostGrip.closest('.dragger-ghost')!;
    const ghostBox = ghost.getBoundingClientRect();
    const pickedBox = ghost.querySelector('.dragger-item')!.getBoundingClientRect();
    await expect(pickedBox.top - ghostBox.top).toBe(6);
    await expect(ghostBox.bottom - pickedBox.bottom).toBe(6);
    await expect(ghostBox.right - pickedBox.right).toBe(6);
    const pickedFields = ghost.querySelector('.criteria-builder-fields')!;
    await expect(pickedFields.getBoundingClientRect().right).toBeLessThanOrEqual(pickedBox.right);
    await expect(view.getComputedStyle(ghost.querySelector('.criteria-builder-actions')!).display).toBe('none');
    const pickedValue = pickedFields.children[pickedFields.children.length - 2];
    await expect(ghostBox.right - pickedValue.getBoundingClientRect().right).toBe(6);
    const placeholder = list.querySelector('.dragger-item--placeholder')!;
    const slotStyle = view.getComputedStyle(placeholder, '::before');
    await expect(parseFloat(slotStyle.left)).toBe(0);
    await expect(parseFloat(slotStyle.width)).toBeCloseTo(ghostBox.width, 1);
    await expect(parseFloat(slotStyle.height)).toBeCloseTo(ghostBox.height, 1);
    const connectorLine = canvasElement.querySelector('.criteria-builder-reorder-rail .criteria-builder-circle-conn-line')!;
    await expect(connectorLine.getBoundingClientRect().left).toBeGreaterThan(placeholder.getBoundingClientRect().left);
    await expect(parseFloat(slotStyle.top)).toBe(-6);
    const rail = canvasElement.querySelector('.criteria-builder-reorder-rail')!;
    await expect(view.getComputedStyle(rail).zIndex).toBe('0');
    await expect(view.getComputedStyle(list).zIndex).toBe('1');
    const railCircles = rail.querySelectorAll('.criteria-builder-circle');
    for (const circle of railCircles) {
      const bridge = view.getComputedStyle(circle, '::before');
      await expect(bridge.content).toBe('""');
      await expect(bridge.width).toBe('1px');
      await expect(view.getComputedStyle(circle).visibility).toBe('visible');
    }
    for (const action of ghost.querySelectorAll('.criteria-builder-actions button')) {
      await expect(action).not.toBeVisible();
    }
    await expect(ghostNumber!.getBoundingClientRect().left - ghostGrip.getBoundingClientRect().right).toBe(6);
    view.dispatchEvent(new PointerEvent('pointerup'));
    await waitFor(() => expect(canvasElement.querySelector('[data-dragging]')).toBeNull());
    for (const connector of connectors()) {
      await expect(connector).toBeVisible();
    }
    for (const action of canvasElement.querySelectorAll('.criteria-builder-actions button')) {
      await expect(action).toBeVisible();
    }
    for (const line of canvasElement.querySelectorAll('.criteria-builder-reorder-rail .criteria-builder-circle-conn-line')) {
      await expect(view.getComputedStyle(line).top).toBe('61px');
    }
    (view.document.activeElement as HTMLElement)?.blur();
    await expect(root.getBoundingClientRect().height).toBe(initialHeight);
    const lastActions = canvasElement.querySelector('.dragger-item:last-child .criteria-builder-actions')!;
    const [minus, plus] = Array.from(lastActions.children).map(element => element.getBoundingClientRect());
    await expect(plus.left - minus.right).toBe(10);
    const firstHandle = canvas.getByRole('button', { name: 'Reorder criterion 1' });
    const handleBox = firstHandle.getBoundingClientRect();
    const number = firstHandle.querySelector('.criteria-builder-reorder-number')!;
    const grip = firstHandle.querySelector('.criteria-builder-reorder-grip')!;
    const fieldBox = canvasElement.querySelector('.criteria-builder-fields')!.getBoundingClientRect();
    await expect(number).toBeVisible();
    await expect(grip).not.toBeVisible();
    await expect(fieldBox.left - handleBox.right).toBe(6);
    firstHandle.focus();
    await expect(number).toBeVisible();
    await expect(grip).toBeVisible();
    await expect(number.getBoundingClientRect().left - grip.getBoundingClientRect().right).toBe(6);
    const railBox = canvasElement.querySelector('.criteria-builder-reorder-rail')!.getBoundingClientRect();
    await expect(railBox.left).toBe(number.getBoundingClientRect().left);
    const patternLabel = canvasElement.querySelector('.criteria-builder-pattern-label')!;
    await expect(number.getBoundingClientRect().left).toBe(patternLabel.getBoundingClientRect().left);
    await expect(grip.getBoundingClientRect().right).toBeLessThan(root.getBoundingClientRect().left);
    await expect(firstHandle.getBoundingClientRect().width).toBe(handleBox.width);
    firstHandle.blur();
    await expect(number).toBeVisible();
    await expect(grip).not.toBeVisible();
    firstHandle.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(pattern()).toHaveTextContent('( ( ( 2 and 1 ) or 3 ) and 4 ) and 5 and 6 and 7');
    await expect(fields().slice(0, 4)).toEqual([...initialFields.slice(2, 4), ...initialFields.slice(0, 2)]);
    await expect(connectors()).toEqual(initialConnectors);
    await expect(connectors().map(element => element.textContent)).toEqual(initialOperators);
    await expect(canvasElement.querySelector('.dragger .criteria-builder-conn-btn')).toBeNull();
    await userEvent.keyboard('{ArrowUp}');
    await expect(pattern()).toHaveTextContent('( ( ( 1 and 2 ) or 3 ) and 4 ) and 5 and 6 and 7');
    // Boundary moves are no-ops.
    await userEvent.keyboard('{ArrowUp}');
    await expect(fields()).toEqual(initialFields);
    // The picked number follows the live position; drop does not animate it again.
    const fourthHandle = canvas.getByRole('button', { name: 'Reorder criterion 4' });
    const fourthBox = fourthHandle.getBoundingClientRect();
    fourthHandle.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true, button: 0, clientX: fourthBox.x + 6, clientY: fourthBox.y + 17,
    }));
    view.dispatchEvent(new PointerEvent('pointermove', { clientY: fourthBox.y + 25 }));
    await waitFor(() => expect(canvasElement.querySelector('[data-dragging]')).not.toBeNull());
    // Rail slots must follow variable-height rows, not retain the old range-row
    // position when a move changes the order without changing element sizes.
    const expectRailAligned = async () => {
      await waitFor(async () => {
        const slots = Array.from(rail.children);
        const items = Array.from(list.children) as HTMLElement[];
        for (let index = 0; index < items.length; index++) {
          const slot = slots[index] as HTMLElement;
          await expect(slot.offsetTop).toBe(items[index].offsetTop);
          await expect(slot.offsetHeight).toBe(items[index].offsetHeight + (index < items.length - 1 ? 38 : 0));
        }
      });
    };
    const liveNumber = canvasElement.ownerDocument.querySelector('.dragger-ghost .criteria-builder-reorder-number')!;
    await expect(liveNumber).toHaveTextContent('4');
    const secondRow = canvasElement.querySelectorAll('.dragger > .dragger-item')[1] as HTMLElement;
    const listTop = list.getBoundingClientRect().top;
    view.dispatchEvent(new PointerEvent('pointermove', { clientY: listTop + secondRow.offsetTop - 1 }));
    await waitFor(() => expect(liveNumber).toHaveTextContent('2'));
    await expectRailAligned();
    view.dispatchEvent(new PointerEvent('pointermove', { clientY: dragBox.y }));
    await waitFor(() => expect(pattern()).toHaveTextContent('( ( ( 2 and 3 ) or 4 ) and 1 ) and 5 and 6 and 7'));
    await expect(liveNumber).toHaveTextContent('1');
    await expect(list.querySelector('.dragger-item--placeholder .criteria-builder-reorder-number')).not.toBeVisible();
    view.dispatchEvent(new PointerEvent('pointerup'));
    await waitFor(() => expect(canvasElement.querySelector('[data-dragging]')).toBeNull());
    await expect(canvasElement.querySelector('.criteria-builder-number-transition')).toBeNull();
    const droppedNumber = list.querySelector('.dragger-item:first-child .criteria-builder-reorder-number')!;
    await expect(droppedNumber).toHaveTextContent('1');
    const highlightedRow = list.querySelector('.dragger-item--highlight')!;
    await expect(highlightedRow).not.toBeNull();
    // After drop, connectors paint above the yellow feedback, unlike the gray
    // placeholder during dragging. Keep the existing highlight geometry.
    await expect(view.getComputedStyle(rail).zIndex).toBe('1');
    await expect(view.getComputedStyle(list).zIndex).toBe('auto');
    await expect(connectorLine).toBeVisible();
    const highlightShadows = view.getComputedStyle(highlightedRow).boxShadow;
    await expect(highlightShadows).toContain('0px -10px 0px 0px');
    await expect(highlightShadows).toContain('0px 10px 0px 0px');
    const highlightFade = highlightedRow.getAnimations().find(
      animation => (animation as CSSAnimation).animationName === 'criteria-drop-highlight-fade',
    )!;
    await expect(highlightFade).toBeDefined();
    await expect(view.getComputedStyle(highlightedRow).animationTimingFunction).toBe('ease-out');
    highlightFade.pause();
    highlightFade.currentTime = 800;
    const initialHighlight = view.getComputedStyle(highlightedRow).backgroundColor;
    highlightFade.currentTime = 1400;
    await expect(view.getComputedStyle(highlightedRow).backgroundColor).not.toBe(initialHighlight);
    highlightFade.currentTime = 2000;
    await expect(view.getComputedStyle(highlightedRow).backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(view.getComputedStyle(highlightedRow).boxShadow).toContain('rgba(0, 0, 0, 0)');
    await expect(connectorLine).toBeVisible();
    highlightFade.play();
    await expect(view.getComputedStyle(droppedNumber.firstElementChild!).animationName).toBe('none');
    await expect(root.getBoundingClientRect().height).toBe(initialHeight);
    canvas.getByRole('button', { name: 'Reorder criterion 1' }).focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}');
    await expect(fields()).toEqual(initialFields);
    // Custom grouping survives a move rather than being regenerated.
    await userEvent.click(canvas.getByRole('button', { name: 'Edit Pattern' }));
    const input = canvas.getByRole('textbox', { name: 'Criteria pattern' });
    await userEvent.clear(input);
    await userEvent.type(input, '( 1 or 3 ) and ( 2 or 4 ) and 5 and 6 and 7');
    await userEvent.click(canvas.getByRole('button', { name: 'Save pattern' }));
    canvas.getByRole('button', { name: 'Reorder criterion 4' }).focus();
    await userEvent.keyboard('{ArrowUp}');
    await expect(pattern()).toHaveTextContent('( 1 or 4 ) and ( 2 or 3 ) and 5 and 6 and 7');
    await userEvent.click(canvas.getAllByRole('button', { name: 'Remove row' })[3]);
    await expect(canvas.getAllByRole('button', { name: /Reorder criterion/ })).toHaveLength(6);
    await expect(root.getBoundingClientRect().top).toBe(initialTop);
    await expect(heading.getBoundingClientRect().top).toBe(headingTop);
    const shorterHeight = root.getBoundingClientRect().height;
    await userEvent.click(canvas.getByRole('button', { name: 'Add row' }));
    await expect(canvas.getAllByRole('button', { name: /Reorder criterion/ })).toHaveLength(7);
    await expect(root.getBoundingClientRect().height).toBeGreaterThan(shorterHeight);
    await expect(root.getBoundingClientRect().top).toBe(initialTop);
    await expect(heading.getBoundingClientRect().top).toBe(headingTop);
  },
};

/** Error state — field-level validation messages visible on multiple rows. */
export const WithErrors: Story = {
  name: 'With Errors',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={ERROR_ROWS}
      initialPattern="( ( ( 1 and 2 ) or 3 ) and 4 )"
    />
  ),
};

/** Single row — remove button hidden; Criteria Pattern not yet shown. */
export const SingleRow: Story = {
  name: 'Single Row',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={[{
        id: 's1',
        field: 'first_name',
        operator: 'eq',
        value: '',
        type: 'text',
        connector: 'AND',
      }]}
      initialPattern="1"
    />
  ),
};

/** Date row — single date + time field using the DateTimeInput component. */
export const DateRow: Story = {
  name: 'Date Row',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={[{
        id: 'd1',
        field: 'created_date',
        operator: 'eq',
        value: '22/04/2022',
        valueTime: '12:00 PM',
        type: 'date',
        connector: 'AND',
      }]}
      initialPattern="1"
    />
  ),
};

/** Limit reached — 25 rows filled; clicking + shows the info toast. */
export const LimitReached: Story = {
  name: 'Limit Reached',
  parameters: { controls: { disable: true } },
  render: () => (
    <Interactive
      initialRows={LIMIT_ROWS}
      initialPattern="1 and 2 and 3 and 4 and 5"
    />
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Criteria Summary — read-only view of saved criteria
// Figma: Pascal Stone node 79998-20593
// ─────────────────────────────────────────────────────────────────────────────

const SUMMARY_STANDARD_ROWS = [
  { id: 's1', field: 'Contact Owner', operator: 'IS', value: 'Patricia Boyle' },
  { id: 's2', field: 'City', operator: 'CONTAINS', value: 'Chennai, Pune, Bengaluru' },
  { id: 's3', field: 'Lead Status', operator: 'IS', value: '${EMPTY}' },
];

const SUMMARY_RELATION_ROWS = [
  {
    id: 'n1',
    module: 'Accounts',
    relation: 'WITH',
    relatedModule: 'Deals',
    pattern: '(1 and 2)',
    criteria: [
      { id: 'n1a', field: 'Amount', operator: 'IS GREATER THAN', value: '$1000' },
      { id: 'n1b', field: 'Contact Owner', operator: 'IS', value: 'Hongkong Bank Corporation' },
    ],
  },
  {
    id: 'n2',
    module: 'Accounts',
    relation: 'WITHOUT',
    relatedModule: 'Vendors',
    pattern: '(1 and 2)',
    criteria: [
      { id: 'n2a', field: 'Offer value', operator: 'IS', value: '$1000' },
      { id: 'n2b', field: 'City', operator: 'CONTAINS', value: 'Chennai, Bengaluru, Kochi' },
    ],
  },
];

const SUMMARY_SECTIONS = [
  {
    title: 'Primary Module',
    pattern: '(1 and 2)',
    rows: [
      { id: 'p1', module: 'Accounts', field: 'Contact Owner', operator: 'IS', value: 'Patricia Boyle' },
      { id: 'p2', module: 'Accounts', field: 'Billing City', operator: 'IS', valueModule: 'Vendors', value: 'Billing City' },
    ],
  },
  {
    title: 'Related Module',
    pattern: '(1 and 2)',
    rows: SUMMARY_RELATION_ROWS,
  },
];

const summaryCanvas = { display: 'flex', flexWrap: 'wrap' as const, alignItems: 'flex-start', gap: 60, padding: 24, background: '#fff' };
const summaryCaption = { margin: '0 0 12px', fontFamily: 'var(--ds-font-family-base)', fontSize: 12, color: '#616E88' };

/** Criteria Summary · Standard — numbered "Field OPERATOR Value" rows and the
 *  Criteria Pattern. Shown as a card (with hover Edit / Delete) and plain. */
export const CriteriaSummaryStandard: Story = {
  name: 'Criteria Summary · Standard',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={summaryCanvas}>
      <div>
        <p style={summaryCaption}>Card · hover for Edit / Delete</p>
        <CriteriaSummary
          variant="standard"
          rows={SUMMARY_STANDARD_ROWS}
          pattern="(1 and 2)"
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
      <div>
        <p style={summaryCaption}>Plain</p>
        <CriteriaSummary variant="standard" appearance="plain" rows={SUMMARY_STANDARD_ROWS} pattern="(1 and 2)" />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText('Contact Owner')).toHaveLength(2);
    await expect(canvas.getAllByText('EMPTY')).toHaveLength(2);
    await expect(canvas.getAllByText('Criteria Pattern')).toHaveLength(2);
    await expect(canvas.getAllByRole('button', { name: 'Edit criteria' })).toHaveLength(1);
  },
};

/** Criteria Summary · Nested Criteria — module relations ("Accounts WITH Deals")
 *  each holding their own numbered criteria and pattern under a guide line.
 *  Also shown with Primary / Related Module sections joined by AND. */
export const CriteriaSummaryNested: Story = {
  name: 'Criteria Summary · Nested Criteria',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={summaryCanvas}>
      <div>
        <p style={summaryCaption}>Card · hover for Edit / Delete</p>
        <CriteriaSummary
          variant="nested"
          rows={SUMMARY_RELATION_ROWS}
          pattern="(1 and 2)"
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
      <div>
        <p style={summaryCaption}>Plain</p>
        <CriteriaSummary variant="nested" appearance="plain" rows={SUMMARY_RELATION_ROWS} pattern="(1 and 2)" />
      </div>
      <div>
        <p style={summaryCaption}>Outline · Primary and Related Module</p>
        <CriteriaSummary variant="nested" appearance="outline" sections={SUMMARY_SECTIONS} />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText('WITHOUT')).toHaveLength(3);
    await expect(canvas.getByText('Primary Module')).toBeVisible();
    await expect(canvas.getByRole('separator')).toHaveTextContent('AND');
    const del = canvas.getByRole('button', { name: 'Delete criteria' });
    // Keyboard focus reveals the pill (:focus-within), same as mouse hover.
    del.focus();
    await waitFor(() => expect(getComputedStyle(del.closest('.criteria-summary__actions') as HTMLElement).opacity).toBe('1'));
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Nested Criteria (editable) — UI from Cross-module Reports › Base Filter
// ─────────────────────────────────────────────────────────────────────────────

const NESTED_MODULE_OPTIONS = [
  { value: 'contacts', label: 'Contact' },
  { value: 'accounts', label: 'Account' },
];
const NESTED_RELATED_CONDITIONS = [
  { value: 'with', label: 'with' },
  { value: 'without', label: 'without' },
];
const NESTED_RELATED_MODULES = [
  { value: 'accounts', label: 'Accounts' },
  { value: 'deals', label: 'Deals' },
  { value: 'tasks', label: 'Tasks' },
  { value: 'calls', label: 'Calls' },
];

/** Nested Criteria — Specify Criteria (with module picker), AND, then
 *  Related Modules Criteria (switch off by default; with / without + module,
 *  "Specify Criteria - <Module>" checkbox, AND / OR between rows, Add Condition). */
export const NestedCriteriaStory: Story = {
  name: 'Nested Criteria',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 1020, padding: 24, background: '#fff' }}>
      <NestedCriteria
        moduleLabel="Contact"
        moduleOptions={NESTED_MODULE_OPTIONS}
        relatedConditions={NESTED_RELATED_CONDITIONS}
        relatedModules={NESTED_RELATED_MODULES}
        fieldOptions={FIELD_OPTIONS}
        getOperatorOptions={getOperatorOptions}
        getDefaultOperator={getDefaultOperator}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Specify Criteria')).toBeVisible();
    await expect(canvas.getByText('It helps to filter record based on related module values.')).toBeVisible();
    await userEvent.click(canvas.getByRole('switch', { name: 'Enable Related Modules Criteria' }));
    await expect(canvas.getByRole('checkbox', { name: 'Specify Criteria' })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', { name: 'Add Condition' }));
    const toggle = canvas.getByRole('button', { name: /Toggle related connector 1/ });
    await expect(toggle).toHaveTextContent('AND');
    await userEvent.click(toggle);
    await expect(canvas.getByRole('button', { name: /Toggle related connector 1/ })).toHaveTextContent('OR');
    await expect(canvas.getAllByRole('button', { name: /Remove related module/ })).toHaveLength(2);
  },
};
