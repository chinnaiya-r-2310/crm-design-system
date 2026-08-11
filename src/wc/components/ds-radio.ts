import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

@customElement('ds-radio')
export class DsRadio extends LitElement {
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

    .circle {
      position: absolute;
      inset: 0;
      border: 2px solid var(--ds-components-input-default-outline, #C0C8E2);
      border-radius: 50%;
      background: var(--ds-bg-common-card, #ffffff);
      transition: border-color 150ms ease, background-color 150ms ease;
    }

    .circle::after {
      content: '';
      position: absolute;
      width: 7px;
      height: 7px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: #ffffff;
      border-radius: 50%;
      transition: transform 150ms ease;
    }

    .nativeInput:hover + .circle,
    .root[data-force-state="hover"] .circle {
      border-color: var(--ds-components-input-hover-outline, #797883);
    }

    .nativeInput:checked + .circle {
      background: var(--ds-brand-primary, #5464F2);
      border-color: var(--ds-brand-primary, #5464F2);
    }
    .nativeInput:checked + .circle::after {
      transform: translate(-50%, -50%) scale(1);
    }

    .nativeInput:focus-visible + .circle,
    .root[data-force-state="focus"] .circle {
      outline: 2px solid var(--ds-components-input-focus-ring, #8792F0);
      outline-offset: 1px;
    }

    .nativeInput:disabled + .circle {
      background: var(--ds-components-input-disable-bg, #F5F6F8);
      border-color: var(--ds-components-input-disable-outline, #D2D9F1);
    }
    .nativeInput:checked:disabled + .circle {
      background: var(--ds-brand-primary, #5464F2);
      border-color: var(--ds-brand-primary, #5464F2);
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
  @property() name = '';
  @property() value = '';

  private _id = 'ds-radio-' + Math.random().toString(36).slice(2, 7);

  private _onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: input.checked, value: this.value },
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
            type="radio"
            class="nativeInput"
            id=${this._id}
            name=${this.name}
            value=${this.value}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onChange}
          />
          <span class="circle" aria-hidden="true"></span>
        </span>
        ${this.label ? html`<span class="labelText">${this.label}</span>` : nothing}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-radio': DsRadio; }
}
