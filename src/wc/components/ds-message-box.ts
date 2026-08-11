import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

type Variant = 'success' | 'error' | 'warning' | 'info';

const VARIANT_ICONS: Record<Variant, ReturnType<typeof svg>> = {
  success: svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#12AA67"/><path d="M7 12L10 14.5L15 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  error:   svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#FF5D5A"/><path d="M7.5 7.5L14.5 14.5M14.5 7.5L7.5 14.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  warning: svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#F18E0A"/><path d="M11 6V12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="15" r="1.14" fill="white"/></svg>`,
  info:    svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="#24CBB7"/><circle cx="11" cy="7" r="1.14" fill="white"/><path d="M11 10.5V16" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

const CLOSE_ICON = svg`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><path d="M0.5 0.5L7.5 7.5M7.5 0.5L0.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

@customElement('ds-message-box')
export class DsMessageBox extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .root {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 15px;
      border-radius: 6px;
      border: 1px solid;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      gap: 12px;
      min-height: 42px;
    }
    .root[data-has-title] {
      padding: 12px 15px;
      align-items: flex-start;
    }

    .root[data-variant="success"] {
      background: var(--ds-status-success-bg, #F5FAF5);
      border-color: var(--ds-status-success-border, #A9D3AB);
      color: var(--ds-status-success-text, #132C14);
    }
    .root[data-variant="error"] {
      background: var(--ds-status-error-bg, #FFF7FA);
      border-color: var(--ds-status-error-border, #FAA9A2);
      color: var(--ds-status-error-text, #431410);
    }
    .root[data-variant="warning"] {
      background: var(--ds-status-warning-bg, #FFF6EE);
      border-color: var(--ds-status-warning-border, #E9C072);
      color: var(--ds-status-warning-text, #463208);
    }
    .root[data-variant="info"] {
      background: var(--ds-status-info-bg, #F4FEFF);
      border-color: var(--ds-status-info-border, #BBD7D9);
      color: var(--ds-status-info-text, #323D3E);
    }

    .body {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }
    .root[data-has-title] .body { align-items: flex-start; }

    .iconSlot {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 22px;
      height: 22px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }

    .title {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base, 14px);
      font-weight: var(--ds-font-weight-semibold, 600);
      line-height: var(--ds-line-height-base);
      color: inherit;
    }

    .message {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base, 14px);
      font-weight: var(--ds-font-weight-medium, 500);
      line-height: var(--ds-line-height-base);
      color: inherit;
    }

    .closeBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      border-radius: 4px;
      background: transparent;
      color: inherit;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 150ms ease, background 150ms ease;
    }
    .closeBtn:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.06);
    }
  `];

  @property() variant: Variant = 'info';
  @property() message = '';
  @property() title = '';
  @property({ type: Boolean }) closable = true;

  private _onClose() {
    this.dispatchEvent(new CustomEvent('ds-close', { bubbles: true, composed: true }));
  }

  render() {
    const hasTitle = Boolean(this.title);
    return html`
      <div
        role="status"
        class="root"
        data-variant=${this.variant}
        ?data-has-title=${hasTitle}
      >
        <div class="body">
          <span class="iconSlot">${VARIANT_ICONS[this.variant]}</span>
          <div class="content">
            ${hasTitle ? html`<span class="title">${this.title}</span>` : nothing}
            <span class="message">${this.message}</span>
          </div>
        </div>
        ${this.closable ? html`
          <button
            type="button"
            class="closeBtn"
            aria-label="Dismiss"
            @click=${this._onClose}
          >${CLOSE_ICON}</button>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-message-box': DsMessageBox; }
}
