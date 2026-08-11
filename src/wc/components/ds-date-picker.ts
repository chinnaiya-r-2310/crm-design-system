import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';
import './ds-calendar.js';

const CALENDAR_ICON = svg`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1.5" y="2.5" width="11" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M1.5 6H12.5" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 1V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9.5 1V3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const CLOSE = svg`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

function formatDisplay(iso: string): string {
  if (!iso || iso.length < 10) return '';
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${d}/${m}/${y}`;
}

function parseDisplay(str: string): string | null {
  const clean = str.replace(/\D/g, '');
  if (clean.length === 8) {
    const d = clean.slice(0, 2), m = clean.slice(2, 4), y = clean.slice(4, 8);
    const date = new Date(`${y}-${m}-${d}`);
    if (!isNaN(date.getTime())) return `${y}-${m}-${d}`;
  }
  return null;
}

function maskInput(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 8);
  let out = '';
  for (let i = 0; i < digits.length; i++) {
    if (i === 2 || i === 4) out += '/';
    out += digits[i];
  }
  return out;
}

@customElement('ds-date-picker')
export class DsDatePicker extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .root { display: block; }
    .root.vertical { display: inline-flex; flex-direction: column; gap: 6px; }
    .formRow { display: grid; grid-template-columns: 3fr 7fr; column-gap: 20px; align-items: start; }
    .fieldColumn { display: flex; flex-direction: column; gap: 4px; }

    label { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base); color: var(--ds-text-label); word-break: break-word; user-select: none; }
    .formRow label { text-align: right; padding-top: 7px; }

    .inputWrapper {
      position: relative; display: flex; align-items: center; height: 34px; width: 100%;
      background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box; transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .inputWrapper:hover { border-color: var(--ds-components-input-hover-outline); }
    .inputWrapper:focus-within { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }
    .inputWrapper[data-required]::before { content: ''; position: absolute; top: 0; bottom: 0; left: -1px; width: 3px; border-radius: 4px 0 0 4px; border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A); pointer-events: none; }
    .root[data-error] .inputWrapper { border-color: var(--ds-components-input-error-outline); }
    .root[data-disabled] .inputWrapper { background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline); cursor: not-allowed; pointer-events: none; }

    input {
      flex: 1; min-width: 0; height: 100%; padding: 0 10px; border: none; outline: none; background: transparent;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base); color: var(--ds-text-base);
    }
    input::placeholder { color: var(--ds-components-input-placeholder-text); }

    .suffix { display: flex; align-items: center; gap: 2px; padding-right: 6px; }
    .iconBtn { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border: none; background: none; cursor: pointer; border-radius: 4px; color: var(--ds-text-label); padding: 0; }
    .iconBtn:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }

    .panel {
      position: fixed; z-index: 1500; box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    }

    .helperText { font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs); color: var(--ds-text-base); }
    .root[data-error] .helperText { color: var(--ds-components-input-error-outline); }
  `];

  @property() label = '';
  @property() value = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() placeholder = 'DD/MM/YYYY';
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) error = false;
  @property() width: string | number = 390;
  @property({ attribute: 'min-date' }) minDate = '';
  @property({ attribute: 'max-date' }) maxDate = '';

  @state() private _displayText = '';
  @state() private _open = false;
  @state() private _panelStyle = '';

  @query('input') private _input!: HTMLInputElement;
  private _id = 'ds-dp-' + Math.random().toString(36).slice(2, 7);

  updated(changed: Map<string, unknown>) {
    if (changed.has('value') && this.value) {
      this._displayText = formatDisplay(this.value);
    }
  }

  private _onInput(e: InputEvent) {
    const el = e.target as HTMLInputElement;
    const masked = maskInput(el.value);
    this._displayText = masked;
    el.value = masked;
    const iso = parseDisplay(masked);
    if (iso) {
      this.value = iso;
      this.dispatchEvent(new CustomEvent('change', { detail: { value: iso }, bubbles: true, composed: true }));
    } else if (!masked) {
      this.value = '';
      this.dispatchEvent(new CustomEvent('change', { detail: { value: '' }, bubbles: true, composed: true }));
    }
  }

  private _openCalendar() {
    if (this.disabled) return;
    const wrapper = this.shadowRoot?.querySelector('.inputWrapper');
    if (wrapper) {
      const r = wrapper.getBoundingClientRect();
      this._panelStyle = `top:${r.bottom + 4 + window.scrollY}px;left:${r.left + window.scrollX}px`;
    }
    this._open = true;
    setTimeout(() => document.addEventListener('pointerdown', this._onOutside), 0);
  }

  private _onOutside = (e: PointerEvent) => {
    if (!this.shadowRoot?.contains(e.target as Node)) {
      this._open = false;
      document.removeEventListener('pointerdown', this._onOutside);
    }
  };

  private _onDateSelect(e: CustomEvent) {
    const iso: string = e.detail.value;
    this.value = iso;
    this._displayText = formatDisplay(iso);
    this._open = false;
    document.removeEventListener('pointerdown', this._onOutside);
    this.dispatchEvent(new CustomEvent('change', { detail: { value: iso }, bubbles: true, composed: true }));
  }

  private _clear(e: Event) {
    e.stopPropagation();
    this.value = '';
    this._displayText = '';
    this.dispatchEvent(new CustomEvent('change', { detail: { value: '' }, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointerdown', this._onOutside);
  }

  private _renderField() {
    return html`
      <div class="inputWrapper" ?data-required=${this.required}>
        <input
          id=${this._id}
          type="text"
          .value=${this._displayText}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          autocomplete="off"
          @input=${this._onInput}
          @focus=${this._openCalendar}
        />
        <div class="suffix">
          ${this.value ? html`<button type="button" class="iconBtn" aria-label="Clear date" @click=${this._clear}>${CLOSE}</button>` : nothing}
          <button type="button" class="iconBtn" aria-label="Open calendar" ?disabled=${this.disabled} @click=${this._openCalendar}>${CALENDAR_ICON}</button>
        </div>
      </div>
      ${this._open ? html`
        <div class="panel" style=${this._panelStyle}>
          <ds-calendar
            .value=${this.value}
            min-date=${this.minDate}
            max-date=${this.maxDate}
            @ds-select=${this._onDateSelect}
          ></ds-calendar>
        </div>` : nothing}
    `;
  }

  render() {
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const helper = this.helperText ? html`<span class="helperText">${this.helperText}</span>` : nothing;
    const labelEl = this.label ? html`<label for=${this._id}>${this.label}</label>` : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" ?data-error=${this.error} ?data-disabled=${this.disabled} style="width:${w}">
          <div class="formRow">${labelEl}<div class="fieldColumn">${this._renderField()}${helper}</div></div>
        </div>`;
    }
    return html`
      <div class="root vertical" ?data-error=${this.error} ?data-disabled=${this.disabled} style="width:${w}">
        ${labelEl}${this._renderField()}${helper}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-date-picker': DsDatePicker; }
}
