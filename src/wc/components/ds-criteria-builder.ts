import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export type OperatorType = 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | 'greater_than' | 'less_than' | 'between';
export type ConnectorType = 'AND' | 'OR';
export interface FieldOption { value: string; label: string; type?: 'text' | 'number' | 'date' | 'select'; options?: Array<{ value: string; label: string }>; }
export interface CriteriaRow { id: string; field: string; operator: OperatorType | ''; value: string; value2?: string; }
export interface CriteriaConfig { rows: CriteriaRow[]; connector: ConnectorType; }

const PLUS = svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1V11M1 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const TRASH = svg`<svg width="13" height="14" viewBox="0 0 13 14" fill="none" aria-hidden="true"><path d="M1 3.5H12M5 3.5V2H8V3.5M2 3.5L2.8 12H10.2L11 3.5H2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CHEVRON_DOWN = svg`<svg width="10" height="5" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`;

const MAX_ROWS = 25;

const DEFAULT_OPERATORS: Array<{ value: OperatorType; label: string }> = [
  { value: 'equals', label: 'Equals' },
  { value: 'not_equals', label: 'Does not equal' },
  { value: 'contains', label: 'Contains' },
  { value: 'not_contains', label: 'Does not contain' },
  { value: 'starts_with', label: 'Starts with' },
  { value: 'ends_with', label: 'Ends with' },
  { value: 'is_empty', label: 'Is empty' },
  { value: 'is_not_empty', label: 'Is not empty' },
  { value: 'greater_than', label: 'Greater than' },
  { value: 'less_than', label: 'Less than' },
  { value: 'between', label: 'Between' },
];

function genId() { return 'row-' + Math.random().toString(36).slice(2, 9); }
function isValueless(op: string) { return op === 'is_empty' || op === 'is_not_empty'; }

function buildPattern(rows: CriteriaRow[], connector: ConnectorType): string {
  const parts = rows
    .filter(r => r.field && r.operator)
    .map(r => {
      const fieldName = r.field;
      if (isValueless(r.operator as OperatorType)) return `${fieldName} ${r.operator.replace(/_/g, ' ')}`;
      if (r.operator === 'between' && r.value2) return `${fieldName} between (${r.value}, ${r.value2})`;
      return `${fieldName} ${r.operator.replace(/_/g, ' ')} "${r.value}"`;
    });
  return parts.join(` ${connector} `);
}

@customElement('ds-criteria-builder')
export class DsCriteriaBuilder extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .builder { display: flex; flex-direction: column; gap: 0; }

    .toolBar { display: flex; align-items: center; gap: 10px; padding: 10px 0; flex-wrap: wrap; }
    .connectorGroup { display: flex; align-items: center; gap: 4px; }
    .connBtn {
      height: 28px; padding: 0 14px; border: 1px solid var(--ds-components-input-default-outline, #C0C8E2);
      border-radius: 6px; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-sm, 12px);
      font-weight: var(--ds-font-weight-medium); cursor: pointer; background: none; color: var(--ds-text-label);
      transition: border-color 100ms, background 100ms;
    }
    .connBtn[data-active] { background: var(--ds-brand-primary, #5464F2); border-color: var(--ds-brand-primary, #5464F2); color: #fff; }
    .addBtn {
      display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 14px;
      border: 1px dashed var(--ds-components-input-default-outline, #C0C8E2);
      border-radius: 6px; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-sm, 12px);
      font-weight: var(--ds-font-weight-medium); cursor: pointer; background: none; color: var(--ds-brand-primary, #5464F2);
      transition: background 100ms, border-color 100ms;
    }
    .addBtn:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); border-color: var(--ds-brand-primary); }
    .addBtn:disabled { opacity: 0.4; cursor: not-allowed; }

    .rows { display: flex; flex-direction: column; gap: 6px; }

    .row { display: flex; align-items: center; gap: 6px; }
    .rowIndex { display: flex; align-items: center; justify-content: center; width: 26px; min-width: 26px; height: 26px; border-radius: 50%; background: var(--ds-components-dropdown-hover-bg, #EEF0FF); font-family: var(--ds-font-family-base); font-size: 11px; color: var(--ds-text-label); }

    .miniSelect {
      position: relative; display: flex; align-items: center; height: 32px; min-width: 100px;
      padding: 0 8px 0 10px; border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; background: var(--ds-bg-common-card); cursor: pointer;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-sm, 12px); color: var(--ds-text-base);
      user-select: none; gap: 6px; box-sizing: border-box;
    }
    .miniSelect:hover { border-color: var(--ds-components-input-hover-outline); }
    .miniSelect[data-placeholder] { color: var(--ds-components-input-placeholder-text); }
    .miniSelect .msCaret { margin-left: auto; color: var(--ds-text-label); display: flex; align-items: center; }
    .msText { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    .valueInput {
      flex: 1; min-width: 80px; height: 32px; padding: 0 10px; border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; background: var(--ds-bg-common-card); font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-sm, 12px); color: var(--ds-text-base); outline: none; box-sizing: border-box;
    }
    .valueInput:hover { border-color: var(--ds-components-input-hover-outline); }
    .valueInput:focus { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }

    .betweenSep { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-sm); color: var(--ds-text-label); flex-shrink: 0; }

    .deleteBtn { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: none; background: none; cursor: pointer; border-radius: 4px; color: var(--ds-text-label); padding: 0; flex-shrink: 0; }
    .deleteBtn:hover { background: #FFF0F0; color: #E85D4A; }

    /* inline dropdown panel */
    .msPanel {
      position: fixed; z-index: 1600; background: var(--ds-bg-common-card, #fff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      padding: 4px 0; max-height: 180px; overflow-y: auto; box-sizing: border-box;
    }
    .msOption { display: flex; align-items: center; height: 30px; padding: 0 12px; cursor: pointer; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-sm, 12px); color: var(--ds-text-base); white-space: nowrap; }
    .msOption:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }
    .msOption[data-selected] { color: var(--ds-brand-primary, #5464F2); font-weight: var(--ds-font-weight-medium); }

    .pattern {
      margin-top: 12px; padding: 10px 14px; background: var(--ds-components-dropdown-hover-bg, #F5F6FA);
      border-radius: 6px; font-family: var(--ds-font-family-mono, monospace); font-size: var(--ds-font-size-sm, 12px);
      color: var(--ds-text-base); word-break: break-all; min-height: 36px;
    }
    .patternLabel { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs); color: var(--ds-text-label); margin-bottom: 4px; }

    .emptyState { padding: 16px 0; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); color: var(--ds-text-muted); }
  `];

  @property({ type: Array }) fields: FieldOption[] = [];
  @property({ type: Array }) value: CriteriaRow[] = [];
  @property() connector: ConnectorType = 'AND';
  @property({ type: Boolean, attribute: 'show-pattern' }) showPattern = false;

  @state() private _openDropdown: { rowId: string; kind: 'field' | 'operator' | 'value-select'; panelStyle: string } | null = null;

  private _addRow() {
    if (this.value.length >= MAX_ROWS) return;
    const next = [...this.value, { id: genId(), field: '', operator: '', value: '' }];
    this._emit(next);
  }

  private _removeRow(id: string) {
    this._emit(this.value.filter(r => r.id !== id));
  }

  private _updateRow(id: string, patch: Partial<CriteriaRow>) {
    this._emit(this.value.map(r => r.id === id ? { ...r, ...patch } : r));
  }

  private _setConnector(c: ConnectorType) {
    this.connector = c;
    this.dispatchEvent(new CustomEvent('connector-change', { detail: { connector: c }, bubbles: true, composed: true }));
    this._emitFull();
  }

  private _emit(rows: CriteriaRow[]) {
    this.value = rows;
    this._emitFull();
  }

  private _emitFull() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { rows: this.value, connector: this.connector, pattern: buildPattern(this.value, this.connector) },
      bubbles: true, composed: true,
    }));
  }

  private _openMsPanel(rowId: string, kind: 'field' | 'operator' | 'value-select', el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const panelStyle = `top:${r.bottom + 2 + window.scrollY}px;left:${r.left + window.scrollX}px;min-width:${r.width}px`;
    this._openDropdown = { rowId, kind, panelStyle };
    setTimeout(() => document.addEventListener('pointerdown', this._onMsOutside), 0);
  }

  private _onMsOutside = (e: PointerEvent) => {
    if (!this.shadowRoot?.contains(e.target as Node)) {
      this._openDropdown = null;
      document.removeEventListener('pointerdown', this._onMsOutside);
    }
  };

  private _selectOption(rowId: string, kind: 'field' | 'operator' | 'value-select', val: string) {
    if (kind === 'field') this._updateRow(rowId, { field: val, operator: '', value: '', value2: '' });
    else if (kind === 'operator') this._updateRow(rowId, { operator: val as OperatorType, value: '', value2: '' });
    else if (kind === 'value-select') this._updateRow(rowId, { value: val });
    this._openDropdown = null;
    document.removeEventListener('pointerdown', this._onMsOutside);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointerdown', this._onMsOutside);
  }

  private _renderMiniSelect(rowId: string, kind: 'field' | 'operator' | 'value-select', currentVal: string, options: Array<{ value: string; label: string }>, placeholder: string, minWidth = '120px') {
    const label = options.find(o => o.value === currentVal)?.label;
    const isOpen = this._openDropdown?.rowId === rowId && this._openDropdown.kind === kind;
    return html`
      <div class="miniSelect" style="min-width:${minWidth}" ?data-placeholder=${!label}
        @click=${(e: Event) => { e.stopPropagation(); this._openMsPanel(rowId, kind, e.currentTarget as HTMLElement); }}>
        <span class="msText">${label ?? placeholder}</span>
        <span class="msCaret">${CHEVRON_DOWN}</span>
      </div>
      ${isOpen ? html`
        <div class="msPanel" style=${this._openDropdown!.panelStyle} @click=${(e: Event) => e.stopPropagation()}>
          ${options.map(opt => html`
            <div class="msOption" ?data-selected=${opt.value === currentVal}
              @click=${() => this._selectOption(rowId, kind, opt.value)}>${opt.label}</div>`)}
        </div>` : nothing}
    `;
  }

  private _renderValueField(row: CriteriaRow) {
    if (!row.operator || isValueless(row.operator)) return nothing;
    const fieldDef = this.fields.find(f => f.value === row.field);
    const isBetween = row.operator === 'between';

    if (fieldDef?.type === 'select' && fieldDef.options) {
      return this._renderMiniSelect(row.id, 'value-select', row.value, fieldDef.options, 'Select value', '120px');
    }

    return html`
      <input type=${fieldDef?.type === 'number' ? 'number' : 'text'} class="valueInput"
        .value=${row.value} placeholder="Value"
        @input=${(e: Event) => this._updateRow(row.id, { value: (e.target as HTMLInputElement).value })}/>
      ${isBetween ? html`
        <span class="betweenSep">and</span>
        <input type=${fieldDef?.type === 'number' ? 'number' : 'text'} class="valueInput"
          .value=${row.value2 ?? ''} placeholder="Value 2"
          @input=${(e: Event) => this._updateRow(row.id, { value2: (e.target as HTMLInputElement).value })}/>` : nothing}
    `;
  }

  render() {
    const canAdd = this.value.length < MAX_ROWS;
    const pattern = buildPattern(this.value, this.connector);

    return html`
      <div class="builder">
        <div class="toolBar">
          <div class="connectorGroup">
            <button type="button" class="connBtn" ?data-active=${this.connector === 'AND'} @click=${() => this._setConnector('AND')}>AND</button>
            <button type="button" class="connBtn" ?data-active=${this.connector === 'OR'} @click=${() => this._setConnector('OR')}>OR</button>
          </div>
          <button type="button" class="addBtn" ?disabled=${!canAdd} @click=${this._addRow}>
            ${PLUS} Add condition
          </button>
        </div>

        ${this.value.length === 0
          ? html`<div class="emptyState">No conditions. Click "Add condition" to start.</div>`
          : html`
            <div class="rows">
              ${this.value.map((row, idx) => html`
                <div class="row">
                  <span class="rowIndex">${idx + 1}</span>
                  ${this._renderMiniSelect(row.id, 'field', row.field, this.fields, 'Select field', '140px')}
                  ${row.field
                    ? this._renderMiniSelect(row.id, 'operator', row.operator, DEFAULT_OPERATORS, 'Select operator', '130px')
                    : nothing}
                  ${row.field && row.operator ? this._renderValueField(row) : nothing}
                  <button type="button" class="deleteBtn" aria-label="Delete condition" @click=${() => this._removeRow(row.id)}>${TRASH}</button>
                </div>`)}
            </div>`}

        ${this.showPattern && this.value.length > 0 ? html`
          <div>
            <div class="patternLabel">Expression</div>
            <div class="pattern">${pattern || '—'}</div>
          </div>` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-criteria-builder': DsCriteriaBuilder; }
}
