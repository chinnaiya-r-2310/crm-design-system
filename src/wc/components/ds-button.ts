import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

const CHEVRON_DOWN = svg`<svg width="10" height="5" viewBox="0 0 10 5" fill="none" aria-hidden="true"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`;
const SPINNER = svg`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" class="spinner"><circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/><path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

const LINK_VARIANTS = new Set(['link-primary','link-secondary','link-default','link-red']);
const GHOST_VARIANTS = new Set(['ghost-blue','ghost-red']);

@customElement('ds-button')
export class DsButton extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: inline-flex; }

    /* ── Base btn ── */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 5px;
      border: none; border-radius: 6px; cursor: pointer; font-family: var(--ds-font-family-base);
      font-weight: var(--ds-font-weight-medium); white-space: nowrap; user-select: none;
      outline: none; box-sizing: border-box; -webkit-font-smoothing: antialiased;
      transition: background 150ms ease, border-color 150ms ease, color 150ms ease, box-shadow 150ms ease;
    }
    .btn[data-size="md"] { height: 32px; padding: 0 14px; font-size: var(--ds-font-size-md); line-height: var(--ds-line-height-md); }
    .btn[data-size="sm"] { height: 27px; padding: 0 12px; font-size: var(--ds-font-size-sm); line-height: var(--ds-line-height-sm); border-radius: 5px; }
    .btn[data-size="xs"] { height: 19px; padding: 0 10px; font-size: 11px; font-weight: var(--ds-font-weight-semibold, 600); border-radius: 4px; }
    .btn[data-split] { gap: 0; padding-right: 0; }
    .btn:disabled { cursor: not-allowed; pointer-events: none; }
    .btn:focus-visible { outline: 2px solid var(--ds-focus-ring, #8792F0); outline-offset: 1px; }

    /* ── Content wrappers ── */
    .contentWrapper { position: relative; display: inline-flex; align-items: center; }
    .contentInner { display: inline-flex; align-items: center; gap: 5px; }
    .spinnerOverlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
    .arrowSection { display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 150ms ease; }
    .btn[data-open] .arrowSection { transform: scaleY(-1); }
    .btn[data-size="md"] .arrowSection { padding: 0 12px; }
    .btn[data-size="sm"] .arrowSection { padding: 0 10px; }
    .btn[data-more] .arrowSection { margin-left: 5px; padding-left: 0; }

    .spinner { flex-shrink: 0; animation: spin 0.75s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    /* ── Link btn ── */
    .linkBtn {
      background: none; border-color: transparent; height: auto; padding: 0; border-radius: 0;
      text-decoration-line: underline; text-underline-offset: 2px; text-decoration-color: transparent;
      transition: color 150ms ease, text-decoration-color 150ms ease;
    }
    .linkBtn:hover:not(:disabled) { text-decoration-color: currentColor; }
    .linkBtn:focus-visible { outline: 2px solid var(--ds-focus-ring, #8792F0); outline-offset: 1px; border-radius: 2px; }

    /* ── Filled variants ── */
    .btn[data-variant="primary"] { background: linear-gradient(180deg, var(--ds-components-button-primary-default-primary-btn), var(--ds-components-button-primary-default-primary-btn2)); color: #ffffff; }
    .btn[data-variant="primary"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-primary-hover-primary-btn-hover), var(--ds-components-button-primary-hover-primary-btn2-hover)); }
    .btn[data-variant="primary"]:active:not(:disabled), .btn[data-variant="primary"][data-open]:not(:disabled) { background: var(--ds-components-button-primary-active-primary-btn-active); }
    .btn[data-variant="primary"]:disabled { background: var(--ds-components-button-primary-disable-bg); color: var(--ds-components-button-primary-disable-text); }

    .btn[data-variant="default"] { background: linear-gradient(180deg, var(--ds-components-button-default-default-primary-btn), var(--ds-components-button-default-default-primary-btn2)); color: var(--ds-text-base); border: 1px solid var(--ds-components-button-default-default-border); }
    .btn[data-variant="default"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-default-hover-primary-btn-hover), var(--ds-components-button-default-hover-primary-btn2-hover)); border-color: var(--ds-components-button-default-hover-border-hover); }
    .btn[data-variant="default"]:active:not(:disabled), .btn[data-variant="default"][data-open]:not(:disabled) { background: var(--ds-components-button-default-active-primary-btn-active); border-color: var(--ds-components-button-default-active-border); }
    .btn[data-variant="default"]:disabled { background: var(--ds-components-button-default-disable-bg); border-color: var(--ds-components-button-default-disable-border); color: var(--ds-components-button-default-disable-disable-text); }

    .btn[data-variant="negative"] { background: linear-gradient(180deg, var(--ds-components-button-negative-default-primary-btn), var(--ds-components-button-negative-default-primary-btn2)); color: #ffffff; }
    .btn[data-variant="negative"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-negative-hover-primary-btn-hover), var(--ds-components-button-negative-hover-primary-btn2-hover)); }
    .btn[data-variant="negative"]:active:not(:disabled), .btn[data-variant="negative"][data-open]:not(:disabled) { background: var(--ds-components-button-negative-active-primary-btn-active); }
    .btn[data-variant="negative"]:disabled { background: var(--ds-components-button-negative-disable-bg); color: var(--ds-components-button-negative-disable-text); }

    .btn[data-variant="success"] { background: linear-gradient(180deg, var(--ds-components-button-success-default-primary-btn), var(--ds-components-button-success-default-primary-btn2)); color: #ffffff; }
    .btn[data-variant="success"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-success-hover-primary-btn-hover), var(--ds-components-button-success-hover-primary-btn2-hover)); }
    .btn[data-variant="success"]:active:not(:disabled), .btn[data-variant="success"][data-open]:not(:disabled) { background: var(--ds-components-button-success-active-primary-btn-active); }
    .btn[data-variant="success"]:disabled { background: var(--ds-components-button-success-disable-bg); color: var(--ds-components-button-success-disable-text); }

    .btn[data-variant="warning"] { background: linear-gradient(180deg, var(--ds-components-button-warning-default-primary-btn), var(--ds-components-button-warning-default-primary-btn2)); color: #ffffff; }
    .btn[data-variant="warning"]:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-warning-hover-primary-btn-hover), var(--ds-components-button-warning-hover-primary-btn2-hover)); }
    .btn[data-variant="warning"]:active:not(:disabled), .btn[data-variant="warning"][data-open]:not(:disabled) { background: var(--ds-components-button-warning-active-primary-btn-active); }
    .btn[data-variant="warning"]:disabled { background: var(--ds-components-button-warning-disable-bg); color: var(--ds-components-button-warning-disable-text); }

    /* ── Outline variants ── */
    .btn[data-variant="outline-blue"] { background: var(--ds-components-button-outline-blue-default-bg); color: var(--ds-components-button-outline-blue-default-text); border: 1px solid var(--ds-components-button-outline-blue-default-border); }
    .btn[data-variant="outline-blue"]:hover:not(:disabled) { background: var(--ds-components-button-outline-blue-hover-bg); border-color: var(--ds-components-button-outline-blue-hover-border); }
    .btn[data-variant="outline-blue"]:active:not(:disabled), .btn[data-variant="outline-blue"][data-open]:not(:disabled) { background: var(--ds-components-button-outline-blue-active-bg); border-color: var(--ds-components-button-outline-blue-active-border); }
    .btn[data-variant="outline-blue"]:disabled { background: var(--ds-components-button-outline-blue-disable-bg); border-color: var(--ds-components-button-outline-blue-disable-border); color: var(--ds-components-button-outline-blue-disable-text); }

    .btn[data-variant="outline-green"] { background: var(--ds-components-button-outline-green-default-bg); color: var(--ds-components-button-outline-green-default-text); border: 1px solid var(--ds-components-button-outline-green-default-border); }
    .btn[data-variant="outline-green"]:hover:not(:disabled) { background: var(--ds-components-button-outline-green-hover-bg); border-color: var(--ds-components-button-outline-green-hover-border); }
    .btn[data-variant="outline-green"]:active:not(:disabled), .btn[data-variant="outline-green"][data-open]:not(:disabled) { background: var(--ds-components-button-outline-green-active-bg); border-color: var(--ds-components-button-outline-green-active-border); }
    .btn[data-variant="outline-green"]:disabled { background: var(--ds-components-button-outline-green-disable-bg); border-color: var(--ds-components-button-outline-green-disable-border); color: var(--ds-components-button-outline-green-disable-text); }

    .btn[data-variant="outline-red"] { background: var(--ds-components-button-outline-red-default-bg); color: var(--ds-components-button-outline-red-default-text); border: 1px solid var(--ds-components-button-outline-red-default-border); }
    .btn[data-variant="outline-red"]:hover:not(:disabled) { background: var(--ds-components-button-outline-red-hover-bg); border-color: var(--ds-components-button-outline-red-hover-border); }
    .btn[data-variant="outline-red"]:active:not(:disabled), .btn[data-variant="outline-red"][data-open]:not(:disabled) { background: var(--ds-components-button-outline-red-active-bg); border-color: var(--ds-components-button-outline-red-active-border); }
    .btn[data-variant="outline-red"]:disabled { background: var(--ds-components-button-outline-red-disable-bg); border-color: var(--ds-components-button-outline-red-disable-border); color: var(--ds-components-button-outline-red-disable-text); }

    .btn[data-variant="outline-orange"] { background: var(--ds-components-button-outline-orange-default-bg); color: var(--ds-components-button-outline-orange-default-text); border: 1px solid var(--ds-components-button-outline-orange-default-border); }
    .btn[data-variant="outline-orange"]:hover:not(:disabled) { background: var(--ds-components-button-outline-orange-hover-bg); border-color: var(--ds-components-button-outline-orange-hover-border); }
    .btn[data-variant="outline-orange"]:active:not(:disabled), .btn[data-variant="outline-orange"][data-open]:not(:disabled) { background: var(--ds-components-button-outline-orange-active-bg); border-color: var(--ds-components-button-outline-orange-active-border); }
    .btn[data-variant="outline-orange"]:disabled { background: var(--ds-components-button-outline-orange-disable-bg); border-color: var(--ds-components-button-outline-orange-disable-border); color: var(--ds-components-button-outline-orange-disable-text); }

    /* ── Ghost variants ── */
    .btn[data-variant="ghost-blue"] { background: #FFF; color: var(--ds-components-button-blue-ghost-text-color); padding: 8px 12px 8px 14px; }
    .btn[data-variant="ghost-blue"]:hover:not(:disabled) { background: var(--ds-components-button-blue-ghost-bg-color); }
    .btn[data-variant="ghost-blue"]:active:not(:disabled), .btn[data-variant="ghost-blue"][data-open]:not(:disabled) { background: #e5e8ff; }
    .btn[data-variant="ghost-blue"]:disabled { color: var(--ds-components-button-blue-ghost-text-disable); background: transparent; }

    .btn[data-variant="ghost-red"] { background: #FFF; color: var(--ds-components-button-red-ghost-text-color); padding: 8px 12px 8px 14px; }
    .btn[data-variant="ghost-red"]:hover:not(:disabled) { background: var(--ds-components-button-red-ghost-bg-color); }
    .btn[data-variant="ghost-red"]:active:not(:disabled), .btn[data-variant="ghost-red"][data-open]:not(:disabled) { background: #ffd9dc; }
    .btn[data-variant="ghost-red"]:disabled { color: var(--ds-components-button-red-ghost-text-disable); background: transparent; }

    /* ── Link variants ── */
    .btn[data-variant="link-primary"] { color: var(--ds-components-button-link-primary-link-default); }
    .btn[data-variant="link-primary"]:hover:not(:disabled) { color: var(--ds-components-button-link-primary-link-hover); }
    .btn[data-variant="link-secondary"] { color: var(--ds-components-button-link-secondary-link-default); }
    .btn[data-variant="link-secondary"]:hover:not(:disabled) { color: var(--ds-components-button-link-secondary-link-hover); }
    .btn[data-variant="link-default"] { color: var(--ds-components-button-link-default-link-default); }
    .btn[data-variant="link-default"]:hover:not(:disabled) { color: var(--ds-components-button-link-default-link-hover); }
    .btn[data-variant="link-red"] { color: var(--ds-components-button-link-red-link-default); }
    .btn[data-variant="link-red"]:hover:not(:disabled) { color: var(--ds-components-button-link-red-link-hover); }

    /* ── Split button ── */
    .splitBtn {
      display: inline-flex; align-items: stretch; border-radius: 6px; overflow: hidden;
      border: none; box-sizing: border-box; font-family: var(--ds-font-family-base);
      font-weight: var(--ds-font-weight-medium); white-space: nowrap; user-select: none;
      -webkit-font-smoothing: antialiased; width: 100%;
    }
    .splitBtn[data-size="md"] { height: 32px; font-size: var(--ds-font-size-md); }
    .splitBtn[data-size="sm"] { height: 27px; font-size: var(--ds-font-size-sm); border-radius: 5px; }

    .mainZone, .arrowZone {
      display: inline-flex; align-items: center; background: transparent;
      border: none; color: inherit; font: inherit; cursor: pointer; outline: none;
      transition: background 150ms ease; flex-shrink: 0;
    }
    .mainZone { flex: 1; justify-content: center; }
    .arrowZone { justify-content: center; }
    .mainZone:disabled, .arrowZone:disabled { cursor: not-allowed; pointer-events: none; }
    .splitBtn[data-size="md"] .mainZone { padding: 0 10px 0 14px; }
    .splitBtn[data-size="sm"] .mainZone { padding: 0 10px 0 12px; }
    .splitBtn[data-size="md"] .arrowZone { padding: 0 12px; }
    .splitBtn[data-size="sm"] .arrowZone { padding: 0 10px; }
    .mainZone:focus-visible, .arrowZone:focus-visible { outline: 2px solid var(--ds-focus-ring, #8792F0); outline-offset: -2px; }
    .sep { width: 1px; align-self: stretch; flex-shrink: 0; background: rgba(255,255,255,0.6); }
    .splitBtn[data-open] .arrowZone svg { transform: scaleY(-1); }
    .splitBtn .arrowZone svg { transition: transform 150ms ease; }

    .splitBtn[data-variant="primary"] { background: linear-gradient(180deg, var(--ds-components-button-primary-default-primary-btn), var(--ds-components-button-primary-default-primary-btn2)); color: #fff; }
    .splitBtn[data-variant="primary"] .mainZone:hover:not(:disabled), .splitBtn[data-variant="primary"] .arrowZone:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-primary-hover-primary-btn-hover), var(--ds-components-button-primary-hover-primary-btn2-hover)); }
    .splitBtn[data-variant="primary"] .mainZone:active:not(:disabled), .splitBtn[data-variant="primary"] .arrowZone:active:not(:disabled), .splitBtn[data-variant="primary"][data-open] .arrowZone { background: var(--ds-components-button-primary-active-primary-btn-active); }

    .splitBtn[data-variant="default"] { background: linear-gradient(180deg, var(--ds-components-button-default-default-primary-btn), var(--ds-components-button-default-default-primary-btn2)); color: var(--ds-text-base); border: 1px solid var(--ds-components-button-default-default-border); }
    .splitBtn[data-variant="default"] .sep { background: var(--ds-components-button-default-default-border); }
    .splitBtn[data-variant="default"] .mainZone:hover:not(:disabled), .splitBtn[data-variant="default"] .arrowZone:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-default-hover-primary-btn-hover), var(--ds-components-button-default-hover-primary-btn2-hover)); }
    .splitBtn[data-variant="default"] .mainZone:active:not(:disabled), .splitBtn[data-variant="default"] .arrowZone:active:not(:disabled), .splitBtn[data-variant="default"][data-open] .arrowZone { background: var(--ds-components-button-default-active-primary-btn-active); }

    .splitBtn[data-variant="negative"] { background: linear-gradient(180deg, var(--ds-components-button-negative-default-primary-btn), var(--ds-components-button-negative-default-primary-btn2)); color: #fff; }
    .splitBtn[data-variant="negative"] .mainZone:hover:not(:disabled), .splitBtn[data-variant="negative"] .arrowZone:hover:not(:disabled) { background: linear-gradient(180deg, var(--ds-components-button-negative-hover-primary-btn-hover), var(--ds-components-button-negative-hover-primary-btn2-hover)); }
    .splitBtn[data-variant="negative"] .mainZone:active:not(:disabled), .splitBtn[data-variant="negative"] .arrowZone:active:not(:disabled), .splitBtn[data-variant="negative"][data-open] .arrowZone { background: var(--ds-components-button-negative-active-primary-btn-active); }

    .splitBtn[data-variant="outline-blue"] { background: var(--ds-components-button-outline-blue-default-bg); color: var(--ds-components-button-outline-blue-default-text); border: 1px solid var(--ds-components-button-outline-blue-default-border); }
    .splitBtn[data-variant="outline-blue"] .sep { background: var(--ds-components-button-outline-blue-default-border); }
    .splitBtn[data-variant="outline-blue"] .mainZone:hover:not(:disabled), .splitBtn[data-variant="outline-blue"] .arrowZone:hover:not(:disabled) { background: var(--ds-components-button-outline-blue-hover-bg); }
    .splitBtn[data-variant="outline-blue"] .mainZone:active:not(:disabled), .splitBtn[data-variant="outline-blue"] .arrowZone:active:not(:disabled), .splitBtn[data-variant="outline-blue"][data-open] .arrowZone { background: var(--ds-components-button-outline-blue-active-bg); }
  `];

  @property() variant = 'primary';
  @property() size: 'md' | 'sm' | 'xs' = 'md';
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) arrow = false;
  @property({ type: Boolean }) split = true;
  @property({ type: Boolean, attribute: 'is-open' }) isOpen = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private get _isLink() { return LINK_VARIANTS.has(this.variant); }
  private get _isGhost() { return GHOST_VARIANTS.has(this.variant); }
  private get _showSeparator() { return this.arrow && this.split && !this._isGhost; }
  private get _isMore() { return this.arrow && !this._showSeparator; }

  private _dispatchArrowClick() {
    this.dispatchEvent(new CustomEvent('arrow-click', { bubbles: true, composed: true }));
  }

  render() {
    const isDisabled = this.disabled || this.loading;

    if (this._showSeparator) {
      return html`
        <div
          class="splitBtn"
          data-variant=${this.variant}
          data-size=${this.size}
          ?data-open=${this.isOpen}
          aria-disabled=${isDisabled || nothing}
        >
          <button class="mainZone" ?disabled=${isDisabled} aria-busy=${this.loading || nothing}
            @click=${(e: Event) => this.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true, cancelable: (e as MouseEvent).cancelable }))}>
            <span class="contentWrapper">
              <span class="contentInner" style=${this.loading ? 'visibility:hidden' : nothing}>
                <slot name="front-icon"></slot>
                <slot></slot>
              </span>
              ${this.loading ? html`<span class="spinnerOverlay">${SPINNER}</span>` : nothing}
            </span>
          </button>
          <span class="sep" aria-hidden="true"></span>
          <button class="arrowZone" ?disabled=${isDisabled} aria-expanded=${this.isOpen} aria-haspopup="true"
            aria-label="Open dropdown" @click=${this._dispatchArrowClick}>
            ${CHEVRON_DOWN}
          </button>
        </div>
      `;
    }

    const classes = `btn${this._isLink ? ' linkBtn' : ''}`;
    return html`
      <button
        class=${classes}
        data-variant=${this.variant}
        data-size=${this._isLink ? nothing : this.size}
        ?data-split=${this.arrow}
        ?data-more=${this._isMore}
        ?data-open=${this.isOpen}
        ?disabled=${isDisabled}
        aria-busy=${this.loading || nothing}
      >
        <span class="contentWrapper">
          <span class="contentInner" style=${this.loading ? 'visibility:hidden' : nothing}>
            <slot name="front-icon"></slot>
            <slot></slot>
          </span>
          ${this.loading ? html`<span class="spinnerOverlay">${SPINNER}</span>` : nothing}
        </span>
        ${this.arrow ? html`<span class="arrowSection" aria-hidden="true">${CHEVRON_DOWN}</span>` : nothing}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-button': DsButton; }
}
