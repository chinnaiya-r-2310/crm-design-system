import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';
import './ds-calendar.js';

const CALENDAR_ICON = svg`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1.5" y="2.5" width="11" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M1.5 6H12.5" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 1V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 1V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const CLOSE = svg`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const ARROW = svg`<svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 4H11M11 4L8 1M11 4L8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function formatDisplay(iso: string): string {
  if (!iso || iso.length < 10) return '';
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${d}/${m}/${y}`;
}

@customElement('ds-date-range-picker')
export class DsDateRangePicker extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .root { display: block; }
    .root.vertical { display: inline-flex; flex-direction: column; gap: 6px; }
    .formRow { display: grid; grid-template-columns: 3fr 7fr; column-gap: 20px; align-items: start; }
    .fieldColumn { display: flex; flex-direction: column; gap: 4px; }

    label { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base); color: var(--ds-text-label); word-break: break-word; user-select: none; }
    .formRow label { text-align: right; padding-top: 7px; }

    .rangeRow { display: flex; align-items: center; gap: 8px; }
    .sep { display: flex; align-items: center; color: var(--ds-text-label, #8C91AB); flex-shrink: 0; }
    .inputWrapper {
      flex: 1; position: relative; display: flex; align-items: center; height: 34px;
      background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box; cursor: pointer;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .inputWrapper:hover { border-color: var(--ds-components-input-hover-outline); }
    .inputWrapper[data-open], .inputWrapper:focus-within { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }

    .inputText { flex: 1; padding: 0 8px; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); color: var(--ds-text-base); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .inputText[data-placeholder] { color: var(--ds-components-input-placeholder-text); }
    .iconBtn { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border: none; background: none; cursor: pointer; border-radius: 4px; color: var(--ds-text-label); padding: 0; flex-shrink: 0; }
    .iconBtn:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }

    .panel {
      position: fixed; z-index: 1500; display: flex; gap: 8px;
      background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-dropdown-outline);
      border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.15); padding: 12px;
      box-sizing: border-box;
    }
    .panelDivider { width: 1px; background: var(--ds-border-lighter, #DCDBEE); margin: 4px 0; }

    .helperText { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs); color: var(--ds-text-base); }
    .root[data-error] .inputWrapper { border-color: var(--ds-components-input-error-outline); }
    .root[data-disabled] .inputWrapper { background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline); pointer-events: none; }
  `];

  @property({ attribute: 'start-date' }) startDate = '';
  @property({ attribute: 'end-date' }) endDate = '';
  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) error = false;
  @property() width: string | number = 500;

  @state() private _open: 'start' | 'end' | null = null;
  @state() private _panelStyle = '';
  @state() private _tempStart = '';
  private _id = 'ds-drp-' + Math.random().toString(36).slice(2, 7);

  private _openPanel(which: 'start' | 'end', e: Event) {
    if (this.disabled) return;
    const btn = (e.currentTarget as HTMLElement);
    const r = btn.getBoundingClientRect();
    this._panelStyle = `top:${r.bottom + 4 + window.scrollY}px;left:${r.left + window.scrollX}px`;
    this._open = which;
    this._tempStart = this.startDate;
    setTimeout(() => document.addEventListener('pointerdown', this._onOutside), 0);
  }

  private _onOutside = (e: PointerEvent) => {
    if (!this.shadowRoot?.contains(e.target as Node)) {
      this._open = null;
      document.removeEventListener('pointerdown', this._onOutside);
    }
  };

  private _onSelectStart(e: CustomEvent) {
    const iso: string = e.detail.value;
    this.startDate = iso;
    if (this.endDate && iso > this.endDate) this.endDate = '';
    this._open = 'end';
    this._emit();
  }

  private _onSelectEnd(e: CustomEvent) {
    const iso: string = e.detail.value;
    if (this.startDate && iso < this.startDate) return;
    this.endDate = iso;
    this._open = null;
    document.removeEventListener('pointerdown', this._onOutside);
    this._emit();
  }

  private _emit() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { startDate: this.startDate, endDate: this.endDate },
      bubbles: true, composed: true,
    }));
  }

  private _clearStart(e: Event) { e.stopPropagation(); this.startDate = ''; this.endDate = ''; this._emit(); }
  private _clearEnd(e: Event) { e.stopPropagation(); this.endDate = ''; this._emit(); }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointerdown', this._onOutside);
  }

  render() {
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const helper = this.helperText ? html`<span class="helperText">${this.helperText}</span>` : nothing;
    const labelEl = this.label ? html`<label for=${this._id}>${this.label}</label>` : nothing;

    const rangeRow = html`
      <div class="rangeRow">
        <div class="inputWrapper" ?data-open=${this._open === 'start'} @click=${(e: Event) => this._openPanel('start', e)}>
          <span class="inputText" ?data-placeholder=${!this.startDate}>${this.startDate ? formatDisplay(this.startDate) : 'Start date'}</span>
          ${this.startDate
            ? html`<button type="button" class="iconBtn" aria-label="Clear start date" @click=${this._clearStart}>${CLOSE}</button>`
            : html`<button type="button" class="iconBtn">${CALENDAR_ICON}</button>`}
        </div>
        <span class="sep">${ARROW}</span>
        <div class="inputWrapper" ?data-open=${this._open === 'end'} @click=${(e: Event) => this._openPanel('end', e)}>
          <span class="inputText" ?data-placeholder=${!this.endDate}>${this.endDate ? formatDisplay(this.endDate) : 'End date'}</span>
          ${this.endDate
            ? html`<button type="button" class="iconBtn" aria-label="Clear end date" @click=${this._clearEnd}>${CLOSE}</button>`
            : html`<button type="button" class="iconBtn">${CALENDAR_ICON}</button>`}
        </div>
      </div>
      ${this._open ? html`
        <div class="panel" style=${this._panelStyle}>
          ${this._open === 'start' ? html`
            <ds-calendar .value=${this.startDate} range-mode
              .rangeStart=${this.startDate} .rangeEnd=${this.endDate}
              @ds-select=${this._onSelectStart}></ds-calendar>` : html`
            <ds-calendar .value=${this.startDate} range-mode
              .rangeStart=${this.startDate} .rangeEnd=${this.endDate}
              .minDate=${this.startDate}
              @ds-select=${this._onSelectEnd}></ds-calendar>`}
        </div>` : nothing}
    `;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" ?data-error=${this.error} ?data-disabled=${this.disabled} style="width:${w}">
          <div class="formRow">${labelEl}<div class="fieldColumn">${rangeRow}${helper}</div></div>
        </div>`;
    }
    return html`
      <div class="root vertical" ?data-error=${this.error} ?data-disabled=${this.disabled} style="width:${w}">
        ${labelEl}${rangeRow}${helper}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-date-range-picker': DsDateRangePicker; }
}
