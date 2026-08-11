import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

const INFO_ICON = svg`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="8.75" cy="8.75" r="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.25" cy="5.25" r="1.5" fill="currentColor"/><path d="M7.11048 9.45227C7.97824 8.76356 8.24535 8.32977 8.81003 8.5281C9.51589 8.77601 6.90127 13.0735 7.60713 13.3214C8.17181 13.5198 8.90199 13.0235 9.57305 12.3899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const LOCK_ICON = svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12.6667 6H3.33333C2.59695 6 2 6.65122 2 7.45455V12.5455C2 13.3488 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.3488 14 12.5455V7.45455C14 6.65122 13.403 6 12.6667 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6V3.77778C5 3.04107 5.31607 2.33453 5.87868 1.81359C6.44129 1.29266 7.20435 1 8 1C8.79565 1 9.55871 1.29266 10.1213 1.81359C10.6839 2.33453 11 3.04107 11 3.77778V6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/><path d="M8 9.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

@customElement('ds-input')
export class DsInput extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .root { display: block; }
    .root.vertical { display: inline-flex; flex-direction: column; gap: 6px; }

    .formRow { display: grid; grid-template-columns: 3fr 7fr; column-gap: 20px; align-items: start; }
    .fieldColumn { display: flex; flex-direction: column; gap: 4px; }

    label {
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
      color: var(--ds-text-label); word-break: break-word; user-select: none; box-sizing: border-box;
    }
    .formRow label { text-align: right; padding-top: 7px; }

    .inputWrapper {
      position: relative; display: flex; align-items: center; height: 34px;
      background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .inputWrapper[data-required]::before {
      content: ''; display: inline-block; position: absolute; top: 0; bottom: 0; left: -1px;
      width: 3px; border-radius: 4px 0 0 4px; z-index: 1;
      border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
      background: transparent; pointer-events: none;
    }
    .inputWrapper:hover { border-color: var(--ds-components-input-hover-outline); }
    .inputWrapper:focus-within { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }
    .inputWrapper:focus-within:hover { border-color: var(--ds-components-input-focus-outline); }
    .inputWrapper[data-has-suffix] { padding: 1px 0 1px 0; }

    input {
      flex: 1; min-width: 0; height: 100%; padding: 0 10px; border: none; outline: none;
      background: transparent; border-radius: inherit;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
      color: var(--ds-text-base); box-sizing: border-box;
    }
    input::placeholder { color: var(--ds-components-input-placeholder-text); opacity: 1; }
    input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
    input[type="number"] { -moz-appearance: textfield; }

    .suffixSlot {
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      width: 32px; height: 32px; background: #F4F4F6; border-radius: 0 5px 5px 0;
      color: var(--ds-text-label);
    }

    .helperText {
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-xs); color: var(--ds-text-base);
    }

    /* ── Disabled ── */
    .root[data-variant="disabled"] .inputWrapper {
      background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline);
      cursor: not-allowed; pointer-events: none;
    }
    .root[data-variant="disabled"] .inputWrapper:hover,
    .root[data-variant="disabled"] .inputWrapper:focus-within {
      border-color: var(--ds-components-input-disable-outline); box-shadow: none;
    }
    .root[data-variant="disabled"] input { cursor: not-allowed; color: var(--ds-text-muted); }

    /* ── Readonly ── */
    .root[data-variant="readonly"] .inputWrapper {
      background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline);
      cursor: not-allowed; pointer-events: none;
    }
    .root[data-variant="readonly"] .inputWrapper:hover,
    .root[data-variant="readonly"] .inputWrapper:focus-within {
      border-color: var(--ds-components-input-disable-outline); box-shadow: none;
    }
    .root[data-variant="readonly"] input { color: var(--ds-text-muted); cursor: not-allowed; }

    /* ── Error ── */
    .root[data-variant="error"] .inputWrapper { border-color: var(--ds-components-input-error-outline); }
    .root[data-variant="error"] .inputWrapper:hover,
    .root[data-variant="error"] .inputWrapper:focus-within {
      border-color: var(--ds-components-input-error-outline); box-shadow: none;
    }
    .root[data-variant="error"] .helperText { color: var(--ds-components-input-error-outline); }

    /* ── Auto-update ── */
    .root[data-variant="auto-update"] .inputWrapper { background: #FFFFEA; border-color: #E5DEC5; }
    .root[data-variant="auto-update"] .inputWrapper:hover { border-color: #C8BB9C; }
    .root[data-variant="auto-update"] .inputWrapper:focus-within { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }
  `];

  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number' | 'lookup' = 'text';
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property() placeholder = '';
  @property() value = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) error = false;
  @property({ type: Boolean, attribute: 'auto-update' }) autoUpdate = false;
  @property() name = '';
  @property() width: string | number = 670;

  @state() private _id = 'ds-input-' + Math.random().toString(36).slice(2, 7);

  private get _variant() {
    if (this.disabled) return 'disabled';
    if (this.readonly) return 'readonly';
    if (this.error) return 'error';
    if (this.autoUpdate) return 'auto-update';
    return undefined;
  }

  private get _isLookup() { return this.type === 'lookup'; }
  private get _resolvedType() { return this._isLookup ? 'text' : this.type; }
  private get _resolvedPlaceholder() {
    if (this._isLookup && !this.placeholder) return 'Select';
    return this.placeholder;
  }
  private get _suffix() {
    if (this.readonly) return LOCK_ICON;
    if (this._isLookup) return INFO_ICON;
    return nothing;
  }
  private get _hasSuffix() { return this.readonly || this._isLookup; }

  private _onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('ds-input', { detail: { value: input.value }, bubbles: true, composed: true }));
  }
  private _onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: input.value }, bubbles: true, composed: true }));
  }

  private _renderField() {
    return html`
      <div
        class="inputWrapper"
        ?data-required=${this.required}
        ?data-has-suffix=${this._hasSuffix}
        data-type=${this._isLookup ? 'lookup' : nothing}
      >
        <input
          id=${this._id}
          type=${this._resolvedType}
          name=${this.name}
          .value=${this.value}
          placeholder=${this._resolvedPlaceholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly || this._isLookup}
          @input=${this._onInput}
          @change=${this._onChange}
        />
        ${this._hasSuffix ? html`<span class="suffixSlot">${this._suffix}<slot name="suffix"></slot></span>` : html`<slot name="suffix"></slot>`}
      </div>
    `;
  }

  render() {
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const variant = this._variant;
    const helper = this.helperText
      ? html`<span class="helperText" id="${this._id}-helper">${this.helperText}</span>`
      : nothing;
    const labelEl = this.label
      ? html`<label for=${this._id}>${this.label}</label>`
      : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" data-variant=${variant || nothing} style="width:${w}">
          <div class="formRow">
            ${labelEl}
            <div class="fieldColumn">${this._renderField()}${helper}</div>
          </div>
        </div>`;
    }
    return html`
      <div class="root vertical" data-variant=${variant || nothing} style="width:${w}">
        ${labelEl}${this._renderField()}${helper}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-input': DsInput; }
}
