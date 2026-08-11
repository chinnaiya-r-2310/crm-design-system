import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

@customElement('ds-switch')
export class DsSwitch extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: inline-flex; }

    .root {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .root[data-disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .control {
      position: relative;
      display: inline-flex;
      flex-shrink: 0;
    }

    .nativeInput {
      position: absolute;
      inset: 0;
      opacity: 0;
      z-index: 1;
      cursor: inherit;
      margin: 0;
      width: 30px;
      height: 18px;
    }

    .track {
      position: relative;
      width: 30px;
      height: 18px;
      border-radius: 100px;
      background: var(--ds-components-switch-default-bg, #D7D9EB);
      transition: background 200ms ease;
      flex-shrink: 0;
    }
    .nativeInput:checked ~ .track {
      background: var(--ds-components-switch-checked-bg, #72C98A);
    }
    .nativeInput:focus-visible ~ .track {
      outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
      outline-offset: 2px;
    }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ffffff;
      transition: left 200ms ease;
      pointer-events: none;
    }
    .nativeInput:checked ~ .track .thumb { left: 14px; }

    .label {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular);
      line-height: var(--ds-line-height-base);
      color: var(--ds-text-base);
    }
  `];

  @property() label = '';
  @property({ attribute: 'label-position' }) labelPosition: 'left' | 'right' = 'right';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() name = '';

  private _id = 'ds-sw-' + Math.random().toString(36).slice(2, 7);

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
    const labelEl = this.label
      ? html`<span class="label">${this.label}</span>`
      : nothing;

    return html`
      <label
        class="root"
        for=${this._id}
        ?data-disabled=${this.disabled}
        data-label-position=${this.labelPosition}
      >
        ${this.labelPosition === 'left' ? labelEl : nothing}
        <span class="control">
          <input
            type="checkbox"
            role="switch"
            class="nativeInput"
            id=${this._id}
            name=${this.name}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this._onChange}
          />
          <span class="track">
            <span class="thumb"></span>
          </span>
        </span>
        ${this.labelPosition === 'right' ? labelEl : nothing}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-switch': DsSwitch; }
}
