import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

const PREV = svg`<svg width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true"><path d="M7 1L2 6.5L7 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const NEXT = svg`<svg width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true"><path d="M1 1L6 6.5L1 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

function toDateKey(d: Date) { return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }
function sameDay(a: Date, b: Date) { return toDateKey(a) === toDateKey(b); }

@customElement('ds-calendar')
export class DsCalendar extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: inline-block; }

    .cal {
      background: var(--ds-bg-common-card, #fff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 8px; padding: 16px; box-sizing: border-box; user-select: none;
    }
    .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .monthYear { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); font-weight: var(--ds-font-weight-semibold, 600); color: var(--ds-text-heading, #202123); }
    .nav { display: flex; align-items: center; gap: 8px; }
    .navBtn { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border: none; background: none; border-radius: 4px; cursor: pointer; color: var(--ds-text-label, #8C91AB); padding: 0; }
    .navBtn:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }

    .grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
    .dayName { display: flex; align-items: center; justify-content: center; height: 28px; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs, 11px); font-weight: var(--ds-font-weight-medium, 500); color: var(--ds-text-label, #8C91AB); }
    .cell {
      display: flex; align-items: center; justify-content: center; height: 32px; width: 32px;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); color: var(--ds-text-base);
      border-radius: 6px; cursor: pointer; border: none; background: none; justify-self: center;
    }
    .cell:hover:not(:disabled):not([data-today]):not([data-selected]) { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }
    .cell[data-today] { font-weight: var(--ds-font-weight-semibold, 600); color: var(--ds-brand-primary, #5464F2); }
    .cell[data-selected] { background: var(--ds-brand-primary, #5464F2); color: #fff; font-weight: var(--ds-font-weight-semibold, 600); }
    .cell[data-selected][data-today] { color: #fff; }
    .cell[data-in-range]:not([data-selected]) { background: #EEF0FF; border-radius: 0; color: var(--ds-text-base); }
    .cell[data-range-start]:not([data-range-start][data-range-end]) { border-radius: 6px 0 0 6px; }
    .cell[data-range-end]:not([data-range-start][data-range-end]) { border-radius: 0 6px 6px 0; }
    .cell[data-other-month] { color: var(--ds-text-muted, #B0B7C4); }
    .cell:disabled { cursor: not-allowed; opacity: 0.35; }
  `];

  @property() value = '';
  @property({ attribute: 'range-start' }) rangeStart = '';
  @property({ attribute: 'range-end' }) rangeEnd = '';
  @property({ attribute: 'min-date' }) minDate = '';
  @property({ attribute: 'max-date' }) maxDate = '';
  @property({ type: Boolean, attribute: 'range-mode' }) rangeMode = false;

  @state() private _viewYear = 0;
  @state() private _viewMonth = 0;

  connectedCallback() {
    super.connectedCallback();
    const base = this.value ? new Date(this.value) : new Date();
    this._viewYear = base.getFullYear();
    this._viewMonth = base.getMonth();
  }

  private get _selected(): Date | null { return this.value ? new Date(this.value) : null; }
  private get _rangeStart(): Date | null { return this.rangeStart ? new Date(this.rangeStart) : null; }
  private get _rangeEnd(): Date | null { return this.rangeEnd ? new Date(this.rangeEnd) : null; }
  private get _min(): Date | null { return this.minDate ? new Date(this.minDate) : null; }
  private get _max(): Date | null { return this.maxDate ? new Date(this.maxDate) : null; }

  private _prevMonth() {
    if (this._viewMonth === 0) { this._viewMonth = 11; this._viewYear--; }
    else this._viewMonth--;
  }
  private _nextMonth() {
    if (this._viewMonth === 11) { this._viewMonth = 0; this._viewYear++; }
    else this._viewMonth++;
  }

  private _buildGrid(): Array<{ date: Date; otherMonth: boolean }> {
    const first = new Date(this._viewYear, this._viewMonth, 1);
    const last = new Date(this._viewYear, this._viewMonth + 1, 0);
    const cells: Array<{ date: Date; otherMonth: boolean }> = [];
    for (let i = 0; i < first.getDay(); i++) {
      cells.push({ date: new Date(this._viewYear, this._viewMonth, -first.getDay() + 1 + i), otherMonth: true });
    }
    for (let d = 1; d <= last.getDate(); d++) {
      cells.push({ date: new Date(this._viewYear, this._viewMonth, d), otherMonth: false });
    }
    const remaining = 7 - (cells.length % 7);
    if (remaining < 7) {
      for (let d = 1; d <= remaining; d++) {
        cells.push({ date: new Date(this._viewYear, this._viewMonth + 1, d), otherMonth: true });
      }
    }
    return cells;
  }

  private _isDisabled(d: Date): boolean {
    if (this._min && d < this._min) return true;
    if (this._max && d > this._max) return true;
    return false;
  }

  private _isInRange(d: Date): boolean {
    if (!this.rangeMode || !this._rangeStart || !this._rangeEnd) return false;
    return d > this._rangeStart && d < this._rangeEnd;
  }

  private _select(d: Date) {
    if (this._isDisabled(d)) return;
    const iso = d.toISOString().slice(0, 10);
    this.dispatchEvent(new CustomEvent('ds-select', { detail: { value: iso, date: d }, bubbles: true, composed: true }));
  }

  render() {
    const today = new Date();
    const cells = this._buildGrid();
    return html`
      <div class="cal">
        <div class="header">
          <span class="monthYear">${MONTHS[this._viewMonth]} ${this._viewYear}</span>
          <div class="nav">
            <button type="button" class="navBtn" aria-label="Previous month" @click=${this._prevMonth}>${PREV}</button>
            <button type="button" class="navBtn" aria-label="Next month" @click=${this._nextMonth}>${NEXT}</button>
          </div>
        </div>
        <div class="grid" role="grid" aria-label="${MONTHS[this._viewMonth]} ${this._viewYear}">
          ${DAYS.map(d => html`<div class="dayName" role="columnheader">${d}</div>`)}
          ${cells.map(({ date, otherMonth }) => {
            const sel = this._selected && sameDay(date, this._selected);
            const isRangeStart = this._rangeStart && sameDay(date, this._rangeStart);
            const isRangeEnd = this._rangeEnd && sameDay(date, this._rangeEnd);
            const inRange = this._isInRange(date);
            const isToday = sameDay(date, today);
            const disabled = this._isDisabled(date);
            return html`
              <button type="button" class="cell"
                role="gridcell"
                aria-label="${date.toLocaleDateString()}"
                aria-selected=${sel}
                aria-disabled=${disabled}
                ?disabled=${disabled}
                ?data-today=${isToday}
                ?data-selected=${sel || isRangeStart || isRangeEnd}
                ?data-in-range=${inRange}
                ?data-range-start=${isRangeStart}
                ?data-range-end=${isRangeEnd}
                ?data-other-month=${otherMonth}
                @click=${() => this._select(date)}
              >${date.getDate()}</button>
            `;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-calendar': DsCalendar; }
}
