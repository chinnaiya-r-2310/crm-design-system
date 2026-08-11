import { LitElement, html, css, nothing, render } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

/**
 * ds-tooltip — ghost-span portal tooltip.
 *
 * Wraps the trigger element via default slot and renders the tooltip bubble
 * at document.body level so it escapes any overflow:hidden ancestors.
 *
 * Attributes
 *   content     — tooltip text
 *   variant     — "black" | "white" | "red"  (default: "black")
 *   placement   — "top" | "bottom" | "left" | "right"  (default: "top")
 *   show-icon   — show warning icon (non-black variants only)
 *   icon-label  — aria-label for the icon
 *   disabled    — never show tooltip
 *   always-visible — always render (for Storybook previews)
 */

let _tooltipCssInjected = false;
function ensureTooltipCSS() {
  if (_tooltipCssInjected || document.getElementById('ds-tooltip-portal-css')) {
    _tooltipCssInjected = true;
    return;
  }
  const s = document.createElement('style');
  s.id = 'ds-tooltip-portal-css';
  s.textContent = `
    .ds-tt-ghost {
      position: fixed;
      pointer-events: none;
      z-index: 1600;
    }
    .ds-tt {
      position: absolute;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      white-space: nowrap;
    }
    .ds-tt-inner {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 10px;
      border-radius: 6px;
      font-family: var(--ds-font-family-base);
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
    }
    /* Variants */
    .ds-tt.black .ds-tt-inner {
      background: var(--ds-components-tooltip-black-bg-color, #313949);
      border: 1px solid #313949;
      color: #ffffff;
    }
    .ds-tt.white .ds-tt-inner {
      background: #fff;
      border: 1px solid var(--ds-components-dropdown-outline, #D6D6E2);
      color: var(--ds-text-base, #313949);
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
    }
    .ds-tt.red .ds-tt-inner {
      background: #fff;
      border: 1px solid var(--ds-components-input-default-outline, #C5C4D4);
      color: var(--ds-status-error, #FF5D5A);
      box-shadow: 0 3px 12px 0 rgba(0,0,0,0.15);
      font-weight: 500;
    }
    /* Arrow (only red) */
    .ds-tt-arrow { display: none; position: relative; flex-shrink: 0; }
    .ds-tt.red .ds-tt-arrow { display: block; }

    /* placement-top → tooltip below trigger → arrow caret points UP */
    .ds-tt.placement-top {
      top: calc(100% + 6px);
      left: 50%; transform: translateX(-50%);
      flex-direction: column;
    }
    .ds-tt.placement-top .ds-tt-arrow {
      order: -1; width: 16px; height: 8px; margin-bottom: -1px;
    }
    .ds-tt.red.placement-top .ds-tt-arrow::before,
    .ds-tt.red.placement-top .ds-tt-arrow::after {
      content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 0; height: 0;
      border-left: solid transparent; border-right: solid transparent; border-bottom: solid; border-top: none;
    }
    .ds-tt.red.placement-top .ds-tt-arrow::before {
      border-left-width: 8px; border-right-width: 8px; border-bottom-width: 8px;
      border-bottom-color: var(--ds-components-input-default-outline, #C5C4D4);
    }
    .ds-tt.red.placement-top .ds-tt-arrow::after {
      top: 1px;
      border-left-width: 7px; border-right-width: 7px; border-bottom-width: 7px;
      border-bottom-color: #fff;
    }

    /* placement-bottom → tooltip above trigger → arrow caret points DOWN */
    .ds-tt.placement-bottom {
      bottom: calc(100% + 6px);
      left: 50%; transform: translateX(-50%);
      flex-direction: column-reverse;
    }
    .ds-tt.placement-bottom .ds-tt-arrow {
      width: 16px; height: 8px; margin-top: -1px;
    }
    .ds-tt.red.placement-bottom .ds-tt-arrow::before,
    .ds-tt.red.placement-bottom .ds-tt-arrow::after {
      content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 0; height: 0;
      border-left: solid transparent; border-right: solid transparent; border-top: solid; border-bottom: none;
    }
    .ds-tt.red.placement-bottom .ds-tt-arrow::before {
      border-left-width: 8px; border-right-width: 8px; border-top-width: 8px;
      border-top-color: var(--ds-components-input-default-outline, #C5C4D4);
    }
    .ds-tt.red.placement-bottom .ds-tt-arrow::after {
      bottom: 1px;
      border-left-width: 7px; border-right-width: 7px; border-top-width: 7px;
      border-top-color: #fff;
    }

    /* placement-left → tooltip right of trigger → arrow caret points LEFT */
    .ds-tt.placement-left {
      left: calc(100% + 6px);
      top: 50%; transform: translateY(-50%);
      flex-direction: row;
    }
    .ds-tt.placement-left .ds-tt-arrow {
      order: -1; width: 8px; height: 16px; margin-right: -1px;
    }
    .ds-tt.red.placement-left .ds-tt-arrow::before,
    .ds-tt.red.placement-left .ds-tt-arrow::after {
      content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
      width: 0; height: 0;
      border-top: solid transparent; border-bottom: solid transparent; border-right: solid;
    }
    .ds-tt.red.placement-left .ds-tt-arrow::before {
      border-top-width: 8px; border-bottom-width: 8px; border-right-width: 8px;
      border-right-color: var(--ds-components-input-default-outline, #C5C4D4);
    }
    .ds-tt.red.placement-left .ds-tt-arrow::after {
      left: 1px;
      border-top-width: 7px; border-bottom-width: 7px; border-right-width: 7px;
      border-right-color: #fff;
    }

    /* placement-right → tooltip left of trigger → arrow caret points RIGHT */
    .ds-tt.placement-right {
      right: calc(100% + 6px);
      top: 50%; transform: translateY(-50%);
      flex-direction: row-reverse;
    }
    .ds-tt.placement-right .ds-tt-arrow {
      width: 8px; height: 16px; margin-left: -1px;
    }
    .ds-tt.red.placement-right .ds-tt-arrow::before,
    .ds-tt.red.placement-right .ds-tt-arrow::after {
      content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
      width: 0; height: 0;
      border-top: solid transparent; border-bottom: solid transparent; border-left: solid;
    }
    .ds-tt.red.placement-right .ds-tt-arrow::before {
      border-top-width: 8px; border-bottom-width: 8px; border-left-width: 8px;
      border-left-color: var(--ds-components-input-default-outline, #C5C4D4);
    }
    .ds-tt.red.placement-right .ds-tt-arrow::after {
      right: 1px;
      border-top-width: 7px; border-bottom-width: 7px; border-left-width: 7px;
      border-left-color: #fff;
    }

    .ds-tt-icon { display: flex; align-items: center; flex-shrink: 0; }
  `;
  document.head.appendChild(s);
  _tooltipCssInjected = true;
}

@customElement('ds-tooltip')
export class DsTooltip extends LitElement {
  static styles = [
    tokensStyle,
    css`
      :host { display: inline-flex; align-items: center; position: relative; }
    `,
  ];

  @property() content = '';
  @property() variant: 'black' | 'white' | 'red' = 'black';
  @property() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ attribute: 'show-icon', type: Boolean }) showIcon = false;
  @property({ attribute: 'icon-label' }) iconLabel = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ attribute: 'always-visible', type: Boolean }) alwaysVisible = false;

  @state() private _visible = false;
  @state() private _rect: DOMRect | null = null;

  private _portalEl: HTMLDivElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    ensureTooltipCSS();
    if (this.alwaysVisible) {
      requestAnimationFrame(() => {
        this._rect = this.getBoundingClientRect();
        this._visible = true;
        this._renderPortal();
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._removePortal();
  }

  private _show() {
    if (this.disabled) return;
    this._rect = this.getBoundingClientRect();
    this._visible = true;
    this._renderPortal();
  }

  private _hide() {
    if (this.alwaysVisible) return;
    this._visible = false;
    this._removePortal();
  }

  private _removePortal() {
    if (this._portalEl) {
      render(html``, this._portalEl);
      this._portalEl.remove();
      this._portalEl = null;
    }
  }

  private _renderPortal() {
    if (!this._visible || !this._rect) return;
    const r = this._rect;

    if (!this._portalEl) {
      this._portalEl = document.createElement('div');
      document.body.appendChild(this._portalEl);
    }

    const isWarning = this.showIcon && this.variant !== 'black';
    const classes = `ds-tt ${this.variant} placement-${this.placement}`;

    render(html`
      <div class="ds-tt-ghost" style="top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px;">
        <span class=${classes}>
          <span class="ds-tt-arrow"></span>
          <span class="ds-tt-inner">
            ${isWarning ? html`
              <span class="ds-tt-icon" aria-label=${this.iconLabel || nothing}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5.5" fill="#FF5D5A"/>
                  <path d="M6 3.5v3M6 8.5v.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
              </span>
            ` : nothing}
            ${this.content}
          </span>
        </span>
      </div>
    `, this._portalEl);
  }

  render() {
    return html`
      <slot
        @mouseenter=${() => this._show()}
        @mouseleave=${() => this._hide()}
        @focusin=${() => this._show()}
        @focusout=${() => this._hide()}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-tooltip': DsTooltip; }
}
