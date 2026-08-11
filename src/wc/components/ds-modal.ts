import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

/**
 * ds-modal — portal-less Shadow DOM modal.
 *
 * position:fixed inside shadow root escapes overflow containers correctly.
 * Slots: default (body content), "header-icon", "footer-note".
 *
 * Attributes
 *   open            — Boolean, controls visibility
 *   title           — header text
 *   width           — dialog width in px (default 569)
 *   cancel-label    — @default "Cancel"
 *   save-label      — @default "Save"
 *   has-header-icon — show header-icon slot
 *   has-footer-note — show footer-note slot
 *
 * Events
 *   ds-close   — backdrop click or Escape
 *   ds-cancel  — cancel button click (also fires ds-close)
 *   ds-save    — save button click
 */
@customElement('ds-modal')
export class DsModal extends LitElement {
  static styles = [
    tokensStyle,
    css`
      /* Host is invisible by default; shows only when _visible */
      :host { display: contents; }

      @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to   { transform: translateY(0);     opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(0);     opacity: 1; }
        to   { transform: translateY(-100%); opacity: 0; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: color-mix(in srgb, var(--ds-bg-common-base-for-all, #313949) 30%, transparent);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        animation: fadeIn 200ms ease;
      }

      .dialog {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 25px 30px 30px;
        background: var(--ds-bg-common-card, #ffffff);
        border-radius: 0 0 15px 15px;
        box-shadow: 0 4px 18px 0 rgba(49, 57, 73, 0.60);
        box-sizing: border-box;
        max-height: 90vh;
        overflow: hidden;
        animation: slideDown 280ms cubic-bezier(0.34, 1.1, 0.64, 1);
      }

      .dialog[data-closing] {
        animation: slideUp 220ms ease forwards;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        flex-shrink: 0;
      }

      .title {
        margin: 0;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-h1);
        font-weight: var(--ds-font-weight-semibold);
        line-height: var(--ds-line-height-h1);
        color: var(--ds-text-heading, #20212A);
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        scrollbar-gutter: stable;
        padding: 4px 8px 30px 4px;
        margin: -4px -28px 0 -4px;
      }

      .footer-area {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: -30px;
        padding-top: 20px;
        margin-left: -30px;
        margin-right: -30px;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
        z-index: 1;
      }

      .footer-area[data-shadow] {
        box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.20);
      }

      .footer-note {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }

      /* Inline button styles (no ds-button import dependency) */
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        padding: 0 18px;
        border-radius: 6px;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-medium, 500);
        cursor: pointer;
        border: 1px solid transparent;
        transition: background 150ms ease, border-color 150ms ease;
        box-sizing: border-box;
      }
      .btn-default {
        background: var(--ds-bg-common-card, #fff);
        border-color: var(--ds-components-input-default-outline, #C0C8E2);
        color: var(--ds-text-base);
      }
      .btn-default:hover {
        background: var(--ds-components-dropdown-hover-bg, #F2F5FE);
      }
      .btn-primary {
        background: var(--ds-brand-primary, #5464F2);
        border-color: var(--ds-brand-primary, #5464F2);
        color: #fff;
      }
      .btn-primary:hover {
        background: var(--ds-brand-primary-hover, #4555E8);
        border-color: var(--ds-brand-primary-hover, #4555E8);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property() title = '';
  @property({ type: Number }) width = 569;
  @property({ attribute: 'cancel-label' }) cancelLabel = 'Cancel';
  @property({ attribute: 'save-label' }) saveLabel = 'Save';
  @property({ attribute: 'has-header-icon', type: Boolean }) hasHeaderIcon = false;
  @property({ attribute: 'has-footer-note', type: Boolean }) hasFooterNote = false;

  @state() private _visible = false;
  @state() private _closing = false;
  @state() private _bodyScrollable = false;

  @query('.body') private _bodyEl!: HTMLDivElement;

  private _ro: ResizeObserver | null = null;
  private _keyHandler = (e: KeyboardEvent) => { if (e.key === 'Escape') this._handleClose(); };

  updated(changed: Map<string, unknown>) {
    if (changed.has('open')) {
      if (this.open) {
        this._visible = true;
        this._closing = false;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', this._keyHandler);
        setTimeout(() => {
          this._setupScrollObserver();
          const first = this.shadowRoot?.querySelector<HTMLElement>(
            'input:not([disabled]):not([readonly]), textarea:not([disabled])'
          );
          first?.focus();
        }, 50);
      } else if (this._visible) {
        this._closing = true;
        document.removeEventListener('keydown', this._keyHandler);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._keyHandler);
    document.body.style.overflow = '';
    this._ro?.disconnect();
  }

  private _setupScrollObserver() {
    const el = this._bodyEl;
    if (!el) return;
    const check = () => {
      this._bodyScrollable = el.scrollHeight - el.scrollTop - el.clientHeight > 1;
    };
    check();
    el.addEventListener('scroll', check, { passive: true });
    this._ro = new ResizeObserver(check);
    this._ro.observe(el);
  }

  private _handleAnimationEnd() {
    if (this._closing) {
      this._visible = false;
      this._closing = false;
      document.body.style.overflow = '';
      this._ro?.disconnect();
      this._ro = null;
    }
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('ds-close', { bubbles: true, composed: true }));
  }

  private _handleCancel() {
    this.dispatchEvent(new CustomEvent('ds-cancel', { bubbles: true, composed: true }));
    this._handleClose();
  }

  private _handleSave() {
    this.dispatchEvent(new CustomEvent('ds-save', { bubbles: true, composed: true }));
  }

  render() {
    if (!this._visible) return nothing;

    return html`
      <div class="backdrop" @click=${this._handleClose} aria-hidden="true">
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style="width:${this.width}px"
          ?data-closing=${this._closing}
          @animationend=${this._handleAnimationEnd}
          @click=${(e: Event) => e.stopPropagation()}
        >
          <div class="header">
            ${this.hasHeaderIcon
              ? html`<span class="header-icon" aria-hidden="true"><slot name="header-icon"></slot></span>`
              : nothing}
            <h2 id="modal-title" class="title">${this.title}</h2>
          </div>

          <div class="body">
            <slot></slot>
          </div>

          <div class="footer-area" ?data-shadow=${this._bodyScrollable}>
            ${this.hasFooterNote
              ? html`<div class="footer-note"><slot name="footer-note"></slot></div>`
              : nothing}
            <div class="footer">
              <button type="button" class="btn btn-default" @click=${this._handleCancel}>
                ${this.cancelLabel}
              </button>
              <button type="button" class="btn btn-primary" @click=${this._handleSave}>
                ${this.saveLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-modal': DsModal; }
}
