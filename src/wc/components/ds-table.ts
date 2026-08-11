import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

/**
 * ds-table — data-driven sortable table Web Component.
 *
 * Attributes (JSON strings for complex data):
 *   columns     — JSON: [{key, label, sortable?, width?, align?}]
 *   rows        — JSON: [{id, ...fields}]
 *   selectable  — Boolean, adds checkbox column
 *   selected-ids — JSON: ["id1", "id2"] — controlled selection
 *   sort-key    — currently sorted column key
 *   sort-dir    — "asc" | "desc"
 *   striped     — Boolean, zebra rows
 *   width       — CSS width string or px number
 *   empty-message — shown when rows is empty (default "No data")
 *   row-actions — Boolean, shows 3-dot button per row
 *
 * Events:
 *   ds-sort              — detail: { key: string }
 *   ds-selection-change  — detail: string[] (selected IDs)
 *   ds-row-action        — detail: { row, index }
 */

export interface DsTableColumn {
  key: string;
  label: string;
  width?: number | string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface DsTableRow {
  id: string;
  [key: string]: unknown;
}

@customElement('ds-table')
export class DsTable extends LitElement {
  static styles = [
    tokensStyle,
    css`
      :host { display: block; }

      .root {
        border-radius: 12px;
        border: 1px solid var(--ds-components-table-header-outline-border, #D9E0EB);
        background: var(--ds-bg-common-card, #FFFFFF);
        overflow: hidden;
        box-sizing: border-box;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      /* ── Header ─────────────────────────────────────────────────────────── */

      thead tr {
        height: 36px;
        background: var(--ds-components-table-header-bg, #F4F7FF);
        border-bottom: 1px solid var(--ds-components-table-header-outline-border, #D9E0EB);
      }

      th {
        position: relative;
        padding: 0 12px;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base, 13px);
        font-weight: var(--ds-font-weight-regular, 400);
        line-height: var(--ds-line-height-base, 20px);
        color: var(--ds-text-label, #616E88);
        white-space: nowrap;
        overflow: hidden;
        text-align: left;
        box-sizing: border-box;
      }

      th.sep::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 16px;
        width: 1px;
        background: var(--ds-components-table-header-outline-border, #D9E0EB);
      }

      .sort-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font: inherit;
        color: inherit;
        white-space: nowrap;
        outline: none;
      }

      .sort-btn:focus-visible {
        outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
        border-radius: 2px;
      }

      /* ── Body rows ───────────────────────────────────────────────────────── */

      tbody tr {
        height: 40px;
        border-bottom: 1px solid var(--ds-components-table-row-border, #EEF1F7);
        transition: background 150ms ease;
      }

      tbody tr:last-child { border-bottom: none; }

      tbody tr:hover { background: var(--ds-components-table-table-hover, #F7F8FB); }

      tbody tr[data-selected] { background: var(--ds-components-table-table-checked, #F5F8FF); }
      tbody tr[data-selected]:hover { background: var(--ds-components-table-table-checked, #F5F8FF); }

      tbody tr[data-alt] { background: var(--ds-components-table-alter-color, #FAFBFC); }
      tbody tr[data-alt]:hover { background: var(--ds-components-table-table-hover, #F7F8FB); }

      /* ── Body cells ─────────────────────────────────────────────────────── */

      td {
        padding: 0 12px;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base, 13px);
        font-weight: var(--ds-font-weight-regular, 400);
        line-height: var(--ds-line-height-base, 20px);
        color: var(--ds-text-base, #313949);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }

      /* ── Checkbox column ─────────────────────────────────────────────────── */

      .cb-cell { width: 46px; padding: 0 8px 0 12px; text-align: center; }

      /* Inline checkbox styling (no ds-checkbox import) */
      .row-cb {
        appearance: none;
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        border-radius: 3px;
        border: 2px solid var(--ds-components-input-default-outline, #C0C8E2);
        background: #fff;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        display: inline-block;
        vertical-align: middle;
        transition: background 150ms ease, border-color 150ms ease;
      }
      .row-cb:checked {
        background: var(--ds-brand-primary, #5464F2);
        border-color: var(--ds-brand-primary, #5464F2);
      }
      .row-cb:checked::after {
        content: '';
        position: absolute;
        top: 1px; left: 3px;
        width: 5px; height: 7px;
        border: 2px solid #fff;
        border-top: none; border-left: none;
        transform: rotate(45deg);
      }
      .row-cb:indeterminate {
        background: var(--ds-brand-primary, #5464F2);
        border-color: var(--ds-brand-primary, #5464F2);
      }
      .row-cb:indeterminate::after {
        content: '';
        position: absolute;
        top: 4px; left: 2px;
        width: 8px; height: 2px;
        background: #fff;
        border-radius: 1px;
      }

      /* ── Actions column ──────────────────────────────────────────────────── */

      .act-cell { width: 52px; padding: 0 8px; text-align: center; }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        padding: 0;
        border: none;
        background: none;
        border-radius: 4px;
        cursor: pointer;
        color: var(--ds-text-label, #616E88);
        transition: background 150ms ease, color 150ms ease;
      }
      .action-btn:hover {
        background: var(--ds-components-dropdown-hover-bg, #F2F5FE);
        color: var(--ds-text-base, #313949);
      }
      .action-btn:focus-visible {
        outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
      }

      /* ── Empty state ─────────────────────────────────────────────────────── */

      .empty-cell {
        padding: 48px 24px;
        text-align: center;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base, 13px);
        color: var(--ds-text-muted, #8C9BAB);
      }
    `,
  ];

  @property({ type: Array }) columns: DsTableColumn[] = [];
  @property({ type: Array }) rows: DsTableRow[] = [];
  @property({ type: Boolean, reflect: true }) selectable = false;
  @property({ attribute: 'selected-ids', type: Array }) selectedIds: string[] = [];
  @property({ attribute: 'sort-key' }) sortKey = '';
  @property({ attribute: 'sort-dir' }) sortDir: 'asc' | 'desc' = 'asc';
  @property({ type: Boolean, reflect: true }) striped = false;
  @property() width: string | number = '';
  @property({ attribute: 'empty-message' }) emptyMessage = 'No data';
  @property({ attribute: 'row-actions', type: Boolean }) rowActions = false;

  @state() private _internalSelected: string[] = [];

  private get _selected() {
    return this.selectedIds.length ? this.selectedIds : this._internalSelected;
  }

  private _toggleAll() {
    const allSelected = this.rows.length > 0 && this.rows.every(r => this._selected.includes(r.id));
    const next = allSelected ? [] : this.rows.map(r => r.id);
    this._internalSelected = next;
    this.dispatchEvent(new CustomEvent('ds-selection-change', { detail: next, bubbles: true, composed: true }));
  }

  private _toggleRow(id: string) {
    const next = this._selected.includes(id)
      ? this._selected.filter(x => x !== id)
      : [...this._selected, id];
    this._internalSelected = next;
    this.dispatchEvent(new CustomEvent('ds-selection-change', { detail: next, bubbles: true, composed: true }));
  }

  private _sort(key: string) {
    this.dispatchEvent(new CustomEvent('ds-sort', { detail: { key }, bubbles: true, composed: true }));
  }

  private _rowAction(row: DsTableRow, index: number, e: Event) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('ds-row-action', { detail: { row, index }, bubbles: true, composed: true }));
  }

  render() {
    const sel = this._selected;
    const allSelected = this.rows.length > 0 && this.rows.every(r => sel.includes(r.id));
    const someSelected = !allSelected && this.rows.some(r => sel.includes(r.id));
    const colSpan = (this.selectable ? 1 : 0) + this.columns.length + (this.rowActions ? 1 : 0);
    const rootStyle = this.width
      ? `width:${typeof this.width === 'number' ? this.width + 'px' : this.width}`
      : '';

    const sortIcon = (col: DsTableColumn) => {
      const active = this.sortKey === col.key;
      const inactiveClr = '#D0D5E8';
      const activeClr = 'currentColor';
      return html`
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true" style="flex-shrink:0">
          <path d="M5 1L9 5H1L5 1Z" fill=${active && this.sortDir === 'asc' ? activeClr : inactiveClr}/>
          <path d="M5 11L1 7H9L5 11Z" fill=${active && this.sortDir === 'desc' ? activeClr : inactiveClr}/>
        </svg>
      `;
    };

    return html`
      <div class="root" style=${rootStyle}>
        <table>
          <thead>
            <tr>
              ${this.selectable ? html`
                <th class="cb-cell sep">
                  <input type="checkbox" class="row-cb" aria-label="Select all rows"
                    .checked=${allSelected}
                    .indeterminate=${someSelected}
                    @change=${() => this._toggleAll()}
                  />
                </th>
              ` : nothing}

              ${this.columns.map((col, i) => {
                const isLast = i === this.columns.length - 1 && !this.rowActions;
                const w = col.width ? (typeof col.width === 'number' ? `${col.width}px` : col.width) : '';
                const ariaSort = col.sortable && this.sortKey === col.key
                  ? (this.sortDir === 'asc' ? 'ascending' : 'descending')
                  : nothing;
                return html`
                  <th class=${isLast ? '' : 'sep'}
                    style="width:${w};text-align:${col.align ?? 'left'}"
                    aria-sort=${ariaSort}
                  >
                    ${col.sortable ? html`
                      <button type="button" class="sort-btn" @click=${() => this._sort(col.key)}>
                        ${col.label} ${sortIcon(col)}
                      </button>
                    ` : col.label}
                  </th>
                `;
              })}

              ${this.rowActions ? html`<th class="act-cell"></th>` : nothing}
            </tr>
          </thead>

          <tbody>
            ${this.rows.length === 0 ? html`
              <tr>
                <td class="empty-cell" colspan=${colSpan}>${this.emptyMessage}</td>
              </tr>
            ` : this.rows.map((row, i) => {
              const isSel = sel.includes(row.id);
              const isAlt = this.striped && i % 2 === 1;
              return html`
                <tr
                  ?data-selected=${isSel}
                  ?data-alt=${isAlt && !isSel}
                >
                  ${this.selectable ? html`
                    <td class="cb-cell">
                      <input type="checkbox" class="row-cb"
                        aria-label=${`Select row ${i + 1}`}
                        .checked=${isSel}
                        @change=${() => this._toggleRow(row.id)}
                      />
                    </td>
                  ` : nothing}

                  ${this.columns.map(col => html`
                    <td style="text-align:${col.align ?? 'left'}"
                      title=${String(row[col.key] ?? '')}
                    >
                      ${String(row[col.key] ?? '')}
                    </td>
                  `)}

                  ${this.rowActions ? html`
                    <td class="act-cell">
                      <button type="button" class="action-btn"
                        aria-label="Row actions"
                        @click=${(e: Event) => this._rowAction(row, i, e)}
                      >
                        <!-- More / ellipsis icon -->
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="3" cy="7" r="1.25" fill="currentColor"/>
                          <circle cx="7" cy="7" r="1.25" fill="currentColor"/>
                          <circle cx="11" cy="7" r="1.25" fill="currentColor"/>
                        </svg>
                      </button>
                    </td>
                  ` : nothing}
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-table': DsTable; }
}
