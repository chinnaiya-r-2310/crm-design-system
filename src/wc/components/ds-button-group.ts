import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';
import { iconChevronDown, iconCheck } from '../shared/icons.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export interface ButtonGroupOption {
  value: string;
  label: string;
  outlineVariant: string;
  selectedVariant: string;
}

// Subset of button styles needed to render inline buttons without the ds-button custom element
// (shadow DOM slotting prevents using ds-button with dynamic label text inside another shadow root)
const BUTTON_BASE_STYLES = css`
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 5px;
    border: none; border-radius: 6px; cursor: pointer;
    font-family: var(--ds-font-family-base); font-weight: var(--ds-font-weight-medium);
    white-space: nowrap; user-select: none; outline: none; box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
  }
  .btn[data-size="md"] { height: 32px; padding: 0 14px; font-size: var(--ds-font-size-md); line-height: var(--ds-line-height-md); }
  .btn[data-size="sm"] { height: 27px; padding: 0 12px; font-size: var(--ds-font-size-sm); line-height: var(--ds-line-height-sm); border-radius: 5px; }
  .btn[data-size="xs"] { height: 19px; padding: 0 10px; font-size: 11px; font-weight: var(--ds-font-weight-semibold, 600); line-height: 13px; border-radius: 4px; }
  .btn:disabled { cursor: not-allowed; pointer-events: none; }
  .btn:focus-visible { outline: 2px solid var(--ds-focus-ring, #8792F0); outline-offset: 1px; }

  /* More Button (arrow, no separator) */
  .btn[data-split] { gap: 0; padding-right: 0; }
  .arrowSection { display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 150ms ease; }
  .btn[data-open] .arrowSection { transform: scaleY(-1); }
  .btn[data-size="md"] .arrowSection { padding: 0 12px; }
  .btn[data-size="sm"] .arrowSection { padding: 0 10px; }
  .btn[data-more] .arrowSection { margin-left: 5px; padding-left: 0; }

  /* Filled: primary */
  .btn[data-variant="primary"] { background: linear-gradient(180deg, var(--ds-components-button-primary-default-primary-btn), var(--ds-components-button-primary-default-primary-btn2)); color: #fff; }
  .btn[data-variant="primary"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-primary-hover-primary-btn-hover), var(--ds-components-button-primary-hover-primary-btn2-hover)); }
  .btn[data-variant="primary"]:active:not(:disabled), .btn[data-variant="primary"][data-open] { background: var(--ds-components-button-primary-active-primary-btn-active); }

  /* Filled: default */
  .btn[data-variant="default"] { background: linear-gradient(180deg, var(--ds-components-button-default-default-primary-btn), var(--ds-components-button-default-default-primary-btn2)); color: var(--ds-text-base); border: 1px solid var(--ds-components-button-default-default-border); }
  .btn[data-variant="default"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-default-hover-primary-btn-hover), var(--ds-components-button-default-hover-primary-btn2-hover)); border-color: var(--ds-components-button-default-hover-border-hover); }
  .btn[data-variant="default"]:active:not(:disabled), .btn[data-variant="default"][data-open] { background: var(--ds-components-button-default-active-primary-btn-active); border-color: var(--ds-components-button-default-active-border); }

  /* Filled: negative */
  .btn[data-variant="negative"] { background: linear-gradient(180deg, var(--ds-components-button-negative-default-primary-btn), var(--ds-components-button-negative-default-primary-btn2)); color: #fff; }
  .btn[data-variant="negative"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-negative-hover-primary-btn-hover), var(--ds-components-button-negative-hover-primary-btn2-hover)); }
  .btn[data-variant="negative"]:active:not(:disabled), .btn[data-variant="negative"][data-open] { background: var(--ds-components-button-negative-active-primary-btn-active); }

  /* Filled: success */
  .btn[data-variant="success"] { background: linear-gradient(180deg, var(--ds-components-button-success-default-primary-btn), var(--ds-components-button-success-default-primary-btn2)); color: #fff; }
  .btn[data-variant="success"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-success-hover-primary-btn-hover), var(--ds-components-button-success-hover-primary-btn2-hover)); }
  .btn[data-variant="success"]:active:not(:disabled), .btn[data-variant="success"][data-open] { background: var(--ds-components-button-success-active-primary-btn-active); }

  /* Outline Blue */
  .btn[data-variant="outline-blue"] { background: var(--ds-components-button-outline-blue-default-bg); color: var(--ds-components-button-outline-blue-default-text); border: 1px solid var(--ds-components-button-outline-blue-default-border); }
  .btn[data-variant="outline-blue"]:hover:not(:disabled) { background: var(--ds-components-button-outline-blue-hover-bg); border-color: var(--ds-components-button-outline-blue-hover-border); color: var(--ds-components-button-outline-blue-hover-text); }
  .btn[data-variant="outline-blue"]:active:not(:disabled), .btn[data-variant="outline-blue"][data-open] { background: var(--ds-components-button-outline-blue-active-bg); border-color: var(--ds-components-button-outline-blue-active-border); color: var(--ds-components-button-outline-blue-active-text); }

  /* Outline Green */
  .btn[data-variant="outline-green"] { background: var(--ds-components-button-outline-green-default-bg); color: var(--ds-components-button-outline-green-default-text); border: 1px solid var(--ds-components-button-outline-green-default-border); }
  .btn[data-variant="outline-green"]:hover:not(:disabled) { background: var(--ds-components-button-outline-green-hover-bg); border-color: var(--ds-components-button-outline-green-hover-border); color: var(--ds-components-button-outline-green-hover-text); }
  .btn[data-variant="outline-green"]:active:not(:disabled), .btn[data-variant="outline-green"][data-open] { background: var(--ds-components-button-outline-green-active-bg); border-color: var(--ds-components-button-outline-green-active-border); color: var(--ds-components-button-outline-green-active-text); }

  /* Outline Red */
  .btn[data-variant="outline-red"] { background: var(--ds-components-button-outline-red-default-bg); color: var(--ds-components-button-outline-red-default-text); border: 1px solid var(--ds-components-button-outline-red-default-border); }
  .btn[data-variant="outline-red"]:hover:not(:disabled) { background: var(--ds-components-button-outline-red-hover-bg); border-color: var(--ds-components-button-outline-red-hover-border); color: var(--ds-components-button-outline-red-hover-text); }
  .btn[data-variant="outline-red"]:active:not(:disabled), .btn[data-variant="outline-red"][data-open] { background: var(--ds-components-button-outline-red-active-bg); border-color: var(--ds-components-button-outline-red-active-border); color: var(--ds-components-button-outline-red-active-text); }

  /* Outline Orange */
  .btn[data-variant="outline-orange"] { background: var(--ds-components-button-outline-orange-default-bg); color: var(--ds-components-button-outline-orange-default-text); border: 1px solid var(--ds-components-button-outline-orange-default-border); }
  .btn[data-variant="outline-orange"]:hover:not(:disabled) { background: var(--ds-components-button-outline-orange-hover-bg); border-color: var(--ds-components-button-outline-orange-hover-border); color: var(--ds-components-button-outline-orange-hover-text); }
  .btn[data-variant="outline-orange"]:active:not(:disabled), .btn[data-variant="outline-orange"][data-open] { background: var(--ds-components-button-outline-orange-active-bg); border-color: var(--ds-components-button-outline-orange-active-border); color: var(--ds-components-button-outline-orange-active-text); }
`;

@customElement('ds-button-group')
export class DsButtonGroup extends LitElement {
  @property({ type: Array }) options: ButtonGroupOption[] = [];
  @property() value?: string;
  @property({ attribute: 'default-value' }) defaultValue?: string;
  @property() size: 'md' | 'sm' | 'xs' = 'sm';
  @state() private _internalValue?: string;
  @state() private _dropdownOpen = false;

  private _onPointerDown = (e: PointerEvent) => {
    if (!e.composedPath().includes(this)) {
      this._dropdownOpen = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    if (this._internalValue === undefined) {
      this._internalValue = this.defaultValue;
    }
    document.addEventListener('pointerdown', this._onPointerDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointerdown', this._onPointerDown);
  }

  static styles = [tokensStyle, BUTTON_BASE_STYLES, css`
    :host { display: inline-flex; position: relative; align-items: center; }

    .group { display: inline-flex; align-items: center; gap: 10px; position: relative; }

    .panel {
      position: absolute; top: calc(100% + 2px); left: 0; z-index: 100;
      background: var(--ds-components-dropdown-option-bg, #ffffff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px;
      box-shadow: 0 2px 8px 0 var(--ds-shadow-dropdown, rgba(0,0,0,0.15));
      padding: 6px 0; width: max-content; max-width: 390px; box-sizing: border-box;
    }

    .option {
      display: flex; align-items: center; height: 32px;
      margin: 0 6px; padding: 0; border-radius: 5px;
      border: none; background: none; width: calc(100% - 12px);
      text-align: left; font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base); font-weight: var(--ds-font-weight-regular);
      color: var(--ds-text-base); box-sizing: border-box; cursor: pointer; user-select: none;
    }
    .option:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }
    .option[data-selected] { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }
    .panel:hover .option[data-selected] { background: none; }
    .panel:hover .option[data-selected]:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }

    .optionTick { width: 25px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: var(--ds-text-base); }
    .optionLabel { flex: 1; min-width: 0; padding-right: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  `];

  private get _selected() {
    return this.value !== undefined ? this.value : this._internalValue;
  }

  private _handleSelect(val: string) {
    if (this.value === undefined) this._internalValue = val;
    this._dropdownOpen = false;
    this.dispatchEvent(new CustomEvent('ds-change', {
      detail: { value: val },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const selected = this._selected;
    const selectedOption = this.options.find(o => o.value === selected);

    return html`
      <div class="group">
        ${selectedOption
          ? html`
            <button
              class="btn"
              data-variant=${selectedOption.selectedVariant}
              data-size=${this.size}
              data-split
              data-more
              ?data-open=${this._dropdownOpen}
              @click=${() => { this._dropdownOpen = !this._dropdownOpen; }}
            >
              ${selectedOption.label}
              <span class="arrowSection" aria-hidden="true">${iconChevronDown}</span>
            </button>
            ${this._dropdownOpen ? html`
              <div class="panel">
                ${this.options.map(opt => html`
                  <button
                    class="option"
                    data-selected=${ifDefined(opt.value === selected ? '' : undefined)}
                    @click=${() => this._handleSelect(opt.value)}
                  >
                    <span class="optionTick" aria-hidden="true">
                      ${opt.value === selected ? iconCheck : ''}
                    </span>
                    <span class="optionLabel">${opt.label}</span>
                  </button>`)}
              </div>` : ''}
          `
          : this.options.map(opt => html`
            <button
              class="btn"
              data-variant=${opt.outlineVariant}
              data-size=${this.size}
              @click=${() => this._handleSelect(opt.value)}
            >${opt.label}</button>`)}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-button-group': DsButtonGroup;
  }
}
