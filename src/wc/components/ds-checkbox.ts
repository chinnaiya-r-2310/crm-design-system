import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

@customElement('ds-checkbox')
export class DsCheckbox extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: inline-flex; }

    .root {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;
    }
    .root[data-disabled] { cursor: not-allowed; }

    .control {
      position: relative;
      width: 15px;
      height: 15px;
      flex-shrink: 0;
    }

    .nativeInput {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
    }
    .nativeInput:disabled { cursor: not-allowed; }

    .box {
      position: absolute;
      inset: 0;
      border: 2px solid var(--ds-components-input-default-outline, #C0C8E2);
      border-radius: 3px;
      background: var(--ds-bg-common-card, #ffffff);
      background-repeat: no-repeat;
      background-position: center;
      transition: border-color 150ms ease, background-color 150ms ease;
    }

    .nativeInput:hover + .box,
    .root[data-force-state="hover"] .box {
      border-color: var(--ds-components-input-hover-outline, #797883);
    }

    .nativeInput:checked + .box {
      background-color: var(--ds-brand-primary, #5464F2);
      border-color: var(--ds-brand-primary, #5464F2);
      background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.2L3.2 5.5L7 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    }

    .box[data-indeterminate] {
      border-color: var(--ds-text-muted, #9DA0A9);
      background-image: url("data:image/svg+xml,%3Csvg width='7' height='2' viewBox='0 0 7 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.5' y1='1' x2='6.5' y2='1' stroke='%239DA0A9' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
    }

    .nativeInput:focus-visible + .box,
    .root[data-force-state="focus"] .box {
      outline: 2px solid var(--ds-components-input-focus-ring, #8792F0);
      outline-offset: 1px;
    }

    .nativeInput:disabled + .box {
      background-color: var(--ds-components-input-disable-bg, #F5F6F8);
      border-color: var(--ds-components-input-disable-outline, #D2D9F1);
      background-image: none;
    }

    .nativeInput:checked:disabled + .box {
      background-color: var(--ds-brand-primary, #5464F2);
      border-color: var(--ds-brand-primary, #5464F2);
      background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.2L3.2 5.5L7 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      opacity: 0.5;
    }

    .labelText {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular);
      line-height: var(--ds-line-height-base);
      color: var(--ds-text-base, #313949);
    }
    .root[data-disabled] .labelText { opacity: 0.5; }
  `];

  @property() label = '';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) indeterminate = false;
  @property() name = '';
  @property() value = '';

  @query('.nativeInput') private _input!: HTMLInputElement;

  private _id = 'ds-cb-' + Math.random().toString(36).slice(2, 7);

  updated(changed: Map<string, unknown>) {
    if (changed.has('indeterminate') && this._input) {
      this._input.indeterminate = this.indeterminate;
    }
  }

  private _onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: input.checked },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <label
        class="root"
        for=${this._id}
        ?data-disabled=${this.disabled}
      >
        <span class="control">
          <input
            type="checkbox"
            class="nativeInput"
            id=${this._id}
            name=${this.name}
            value=${this.value}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onChange}
          />
          <span
            class="box"
            aria-hidden="true"
            ?data-indeterminate=${this.indeterminate}
          ></span>
        </span>
        ${this.label ? html`<span class="labelText">${this.label}</span>` : nothing}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-checkbox': DsCheckbox; }
}
