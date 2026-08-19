import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

@customElement('ds-slider')
export class DsSlider extends LitElement {
  static styles = [tokensStyle, css`
    :host {
      display: inline-flex;
      flex-direction: column;
      gap: 6px;
      width: 200px;
    }

    .label {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular);
      line-height: var(--ds-line-height-base);
      color: var(--ds-text-base);
    }

    .track-wrap {
      position: relative;
      display: flex;
      align-items: center;
      height: 20px;
    }

    .track {
      position: absolute;
      inset-inline: 0;
      height: 4px;
      border-radius: 2px;
      background: var(--ds-components-slider-slider-bg-grey, #E5EAF2);
      pointer-events: none;
    }

    :host([disabled]) .track {
      background: var(--ds-components-slider-disable-slider-bg-grey, #F2F5F9);
    }

    .fill {
      position: absolute;
      left: 0;
      height: 4px;
      border-radius: 2px;
      background: var(--ds-components-slider-active-bg-fill-color, #5464F2);
      pointer-events: none;
    }

    :host([disabled]) .fill {
      background: var(--ds-components-slider-disable-slider-bg-blue, #ADB5F9);
    }

    .native {
      position: relative;
      width: 100%;
      height: 20px;
      margin: 0;
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      cursor: pointer;
      z-index: 1;
    }

    .native:disabled { cursor: not-allowed; }

    /* Thumb – webkit */
    .native::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid var(--ds-components-slider-circle-border, #8492A6);
      cursor: pointer;
      transition: border-color 150ms ease;
    }

    .native:hover::-webkit-slider-thumb,
    .native:focus-visible::-webkit-slider-thumb,
    :host([data-dragging]) .native::-webkit-slider-thumb {
      border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2);
    }

    .native:disabled::-webkit-slider-thumb {
      border-color: var(--ds-components-slider-disable-circle-border, #D1D8E5);
      cursor: not-allowed;
    }

    /* Thumb – moz */
    .native::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid var(--ds-components-slider-circle-border, #8492A6);
      cursor: pointer;
      transition: border-color 150ms ease;
    }

    .native:hover::-moz-range-thumb,
    .native:focus-visible::-moz-range-thumb,
    :host([data-dragging]) .native::-moz-range-thumb {
      border-color: var(--ds-components-slider-active-bg-fill-color, #5464F2);
    }

    .native:disabled::-moz-range-thumb {
      border-color: var(--ds-components-slider-disable-circle-border, #D1D8E5);
      cursor: not-allowed;
    }

    /* Focus outline — shown on keyboard focus and retained during mouse drag */
    .native:focus-visible,
    :host([data-dragging]) .native {
      outline: 2px solid var(--ds-components-input-focus-outline, #5464F2);
      outline-offset: 2px;
      border-radius: 2px;
    }

    /* Hide native track rails */
    .native::-webkit-slider-runnable-track { height: 4px; background: transparent; }
    .native::-moz-range-track { height: 4px; background: transparent; }
  `];

  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Number }) value = 50;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() label = '';

  private _onPointerDown = (e: PointerEvent) => {
    if (this.disabled) return;
    this.setAttribute('data-dragging', '');
    // Lock cursor globally so it stays "pointer" even when mouse leaves the slider.
    // user-select: none prevents accidental text selection during drag.
    document.body.style.cursor = 'pointer';
    document.body.style.userSelect = 'none';
    // lostpointercapture is the reliable drag-end signal — fires on the input
    // when the browser releases its native pointer capture, whether the cursor
    // is inside or outside the slider at the time of mouse release.
    (e.target as HTMLElement).addEventListener('lostpointercapture', () => {
      this.removeAttribute('data-dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }, { once: true });
  };

  private _onInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.value = input.valueAsNumber;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }));
  };

  private get _fillPercent() {
    const pct = ((this.value - this.min) / (this.max - this.min)) * 100;
    return Math.max(0, Math.min(100, pct));
  }

  render() {
    return html`
      ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      <div class="track-wrap">
        <span class="track"></span>
        <span class="fill" style="width: ${this._fillPercent}%"></span>
        <input
          type="range"
          class="native"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${String(this.value)}
          ?disabled=${this.disabled}
          @pointerdown=${this._onPointerDown}
          @input=${this._onInput}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-slider': DsSlider; }
}
