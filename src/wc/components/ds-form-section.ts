import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

@customElement('ds-form-section')
export class DsFormSection extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .section {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-top: 10px;
    }
    :host(:first-child) .section { margin-top: 0; }

    .heading {
      margin: 0;
      margin-bottom: 6px;
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-h3, 15px);
      font-weight: var(--ds-font-weight-semibold, 600);
      line-height: var(--ds-line-height-h3, 18px);
      color: var(--ds-text-heading, #202123);
    }
  `];

  @property() title = '';

  render() {
    return html`
      <div class="section">
        <h3 class="heading">${this.title}</h3>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-form-section': DsFormSection; }
}
