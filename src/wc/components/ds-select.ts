import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface SelectOption { value: string; label: string; }

const CHEVRON = svg`<svg width="10" height="5" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`;
const LOCK = svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12.6667 6H3.33333C2.59695 6 2 6.65122 2 7.45455V12.5455C2 13.3488 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.3488 14 12.5455V7.45455C14 6.65122 13.403 6 12.6667 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6V3.77778C5 3.04107 5.31607 2.33453 5.87868 1.81359C6.44129 1.29266 7.20435 1 8 1C8.79565 1 9.55871 1.29266 10.1213 1.81359C10.6839 2.33453 11 3.04107 11 3.77778V6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/><path d="M8 9.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

@customElement('ds-select')
export class DsSelect extends LitElement {
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

    .selectWrapper {
      position: relative; display: flex; align-items: center; width: 100%; height: 34px;
      padding: 0; background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box; cursor: pointer; outline: none; appearance: none;
      font-family: var(--ds-font-family-base); transition: border-color 150ms ease, box-shadow 150ms ease; text-align: left;
    }
    .selectWrapper[data-required]::before {
      content: ''; display: inline-block; position: absolute; top: 0; bottom: 0; left: -1px;
      width: 3px; border-radius: 4px 0 0 4px; z-index: 1;
      border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
      background: transparent; pointer-events: none;
    }
    .selectWrapper[data-required] .selectValue { padding-left: 15px; }
    .selectWrapper:hover { border-color: var(--ds-components-input-hover-outline); }
    .selectWrapper:focus { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }
    .selectWrapper:focus .chevron { transform: scaleY(-1); }

    .selectValue {
      flex: 1; min-width: 0; padding: 0 10px;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
      color: var(--ds-text-base); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box;
    }
    .selectValue[data-placeholder] { color: var(--ds-components-input-placeholder-text); }

    .chevron {
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      width: 32px; height: 32px; color: var(--ds-text-label); transition: transform 150ms ease;
    }
    .lockSlot {
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      width: 32px; height: 32px; background: var(--ds-components-input-readonly-lock-bg, #F4F4F6);
      border-radius: 0 5px 5px 0; color: var(--ds-text-label);
    }

    .helperText {
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-xs); color: var(--ds-text-base);
    }

    /* Dropdown panel */
    .panel {
      position: fixed; z-index: 1500; background: var(--ds-bg-common-card, #fff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); padding: 6px 0; box-sizing: border-box;
      min-width: 120px;
    }
    .option {
      display: flex; align-items: center; gap: 8px; width: 100%; padding: 0 12px; height: 34px;
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      color: var(--ds-text-base); background: none; border: none; cursor: pointer; text-align: left; white-space: nowrap;
      transition: background 100ms ease;
    }
    .option:hover { background: var(--ds-components-dropdown-option-hover-bg, #F4F5FF); }
    .option[data-selected] { color: var(--ds-brand-primary, #5464F2); font-weight: var(--ds-font-weight-medium); }

    /* Variants */
    .root[data-variant="disabled"] .selectWrapper { background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline); cursor: not-allowed; pointer-events: none; }
    .root[data-variant="disabled"] .selectWrapper:hover, .root[data-variant="disabled"] .selectWrapper:focus { border-color: var(--ds-components-input-disable-outline); box-shadow: none; }
    .root[data-variant="disabled"] .selectValue { color: var(--ds-text-muted); }

    .root[data-variant="readonly"] .selectWrapper { background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline); cursor: default; pointer-events: none; }
    .root[data-variant="readonly"] .selectWrapper:hover, .root[data-variant="readonly"] .selectWrapper:focus { border-color: var(--ds-components-input-disable-outline); box-shadow: none; }

    .root[data-variant="error"] .selectWrapper { border-color: var(--ds-components-input-error-outline); }
    .root[data-variant="error"] .selectWrapper:hover, .root[data-variant="error"] .selectWrapper:focus { border-color: var(--ds-components-input-error-outline); box-shadow: none; }
    .root[data-variant="error"] .helperText { color: var(--ds-components-input-error-outline); }
  `];

  @property() label = '';
  @property() placeholder = 'Select';
  @property() value = '';
  @property({ type: Array }) options: SelectOption[] = [];
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) error = false;
  @property() width: string | number = 670;

  @state() private _open = false;
  @state() private _panelStyle = '';
  private _id = 'ds-sel-' + Math.random().toString(36).slice(2, 7);
  private _triggerEl: HTMLButtonElement | null = null;

  private get _variant() {
    if (this.disabled) return 'disabled';
    if (this.readonly) return 'readonly';
    if (this.error) return 'error';
    return undefined;
  }

  private get _displayValue() {
    if (!this.value) return this.placeholder;
    return this.options.find(o => o.value === this.value)?.label ?? this.value;
  }

  private _openPanel(e: Event) {
    if (this.disabled || this.readonly) return;
    this._triggerEl = e.currentTarget as HTMLButtonElement;
    const r = this._triggerEl.getBoundingClientRect();
    this._panelStyle = `top:${r.bottom + 2 + window.scrollY}px;left:${r.left + window.scrollX}px;width:${r.width}px`;
    this._open = true;
    setTimeout(() => document.addEventListener('pointerdown', this._onOutside), 0);
  }

  private _onOutside = (e: PointerEvent) => {
    if (!this.shadowRoot?.contains(e.target as Node)) this._closePanel();
  };

  private _closePanel() {
    this._open = false;
    document.removeEventListener('pointerdown', this._onOutside);
  }

  private _select(opt: SelectOption) {
    this.value = opt.value;
    this._closePanel();
    this.dispatchEvent(new CustomEvent('change', { detail: { value: opt.value }, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointerdown', this._onOutside);
  }

  private _renderTrigger() {
    const isPlaceholder = !this.value;
    return html`
      <button
        id=${this._id}
        type="button"
        class="selectWrapper"
        ?disabled=${this.disabled}
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        ?data-required=${this.required}
        @click=${this._openPanel}
      >
        <span class="selectValue" ?data-placeholder=${isPlaceholder}>${this._displayValue}</span>
        ${this.readonly
          ? html`<span class="lockSlot">${LOCK}</span>`
          : html`<span class="chevron">${CHEVRON}</span>`}
      </button>
      ${this._open ? html`
        <div class="panel" style=${this._panelStyle} role="listbox">
          ${this.options.map(opt => html`
            <button type="button" class="option" role="option" ?data-selected=${opt.value === this.value}
              @click=${() => this._select(opt)}>${opt.label}</button>
          `)}
        </div>` : nothing}
    `;
  }

  render() {
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const variant = this._variant;
    const helper = this.helperText
      ? html`<span class="helperText">${this.helperText}</span>`
      : nothing;
    const labelEl = this.label
      ? html`<label for=${this._id}>${this.label}</label>`
      : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" data-variant=${variant || nothing} style="width:${w}">
          <div class="formRow">${labelEl}<div class="fieldColumn">${this._renderTrigger()}${helper}</div></div>
        </div>`;
    }
    return html`
      <div class="root vertical" data-variant=${variant || nothing} style="width:${w}">
        ${labelEl}${this._renderTrigger()}${helper}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-select': DsSelect; }
}
