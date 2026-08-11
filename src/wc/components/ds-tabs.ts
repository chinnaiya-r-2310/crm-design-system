import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface TabItem { id: string; label: string; count?: number; }

@customElement('ds-tabs')
export class DsTabs extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .tabBar {
      position: relative; display: flex; flex-direction: row; align-items: center; box-sizing: border-box;
    }

    /* ── Primary ── */
    .tabBar[data-variant="primary"] { align-items: stretch; border-bottom: 1px solid var(--ds-border-lighter, #DCDBEE); }
    .tabBar[data-variant="primary"][data-size="md"] { padding: 0 30px; gap: 30px; }
    .tabBar[data-variant="primary"][data-size="sm"] { padding: 0 20px; gap: 20px; }
    .tabBar[data-variant="primary"] .tab { flex-direction: column; justify-content: center; padding: 0; font-size: 15px; color: var(--ds-text-base, #313949); font-weight: var(--ds-font-weight-regular, 400); transition: color 150ms ease; }
    .tabBar[data-variant="primary"][data-size="md"] .tab { height: 35px; padding-top: 3px; }
    .tabBar[data-variant="primary"][data-size="sm"] .tab { height: 26px; padding-top: 3px; font-size: 12px; }
    .tabBar[data-variant="primary"] .tab:hover { color: var(--ds-text-heading, #202123); }
    .tabBar[data-variant="primary"] .tab[data-active] { color: var(--ds-text-heading, #202123); font-weight: var(--ds-font-weight-semibold, 600); }
    .tabBar[data-variant="primary"] .tab::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; border-radius: 100px 100px 0 0; background: var(--ds-border-lighter, #DCDBEE); opacity: 0; transition: opacity 150ms ease; pointer-events: none; }
    .tabBar[data-variant="primary"][data-size="md"] .tab::after { height: 3px; }
    .tabBar[data-variant="primary"][data-size="sm"] .tab::after { height: 2px; }
    .tabBar[data-variant="primary"] .tab:hover:not([data-active])::after { opacity: 1; }
    .tabBar[data-variant="primary"][data-size="md"] .content { padding-bottom: 3px; }
    .tabBar[data-variant="primary"] .indicator { bottom: -1px; border-radius: 100px 100px 0 0; background: var(--ds-text-link, #5464F2); }
    .tabBar[data-variant="primary"][data-size="md"] .indicator { height: 3px; }
    .tabBar[data-variant="primary"][data-size="sm"] .indicator { height: 2px; }

    /* ── Secondary ── */
    .tabBar[data-variant="secondary"] { display: inline-flex; padding: 3px; gap: 5px; border: 1px solid var(--ds-components-navigation-tab-tab-border, #DCDBEE); border-radius: 100px; }
    .tabBar[data-variant="secondary"] .tab { border-radius: 100px; background: transparent; z-index: 1; color: var(--ds-text-base, #313949); font-weight: var(--ds-font-weight-regular, 400); transition: color 150ms ease, background 150ms ease; }
    .tabBar[data-variant="secondary"][data-size="md"] .tab { height: 29px; padding: 0 20px; font-size: 15px; }
    .tabBar[data-variant="secondary"][data-size="sm"] .tab { height: 24px; padding: 0 12px; font-size: var(--ds-font-size-sm, 12px); }
    .tabBar[data-variant="secondary"] .tab:hover:not([data-active]) { background: var(--ds-components-navigation-tab-hover-bg, #F2F4FF); color: var(--ds-text-heading, #202123); }
    .tabBar[data-variant="secondary"] .tab[data-active] { color: var(--ds-text-heading, #202123); font-weight: var(--ds-font-weight-semibold, 600); background: transparent; }
    .tabBar[data-variant="secondary"] .indicator { top: 3px; bottom: 3px; border-radius: 100px; background: var(--ds-components-navigation-tab-active-bg, #EBEDFF); border: 1px solid var(--ds-components-navigation-tab-active-border, #A3ACFF); z-index: 0; }

    /* ── Shared tab base ── */
    .tab {
      position: relative; display: flex; flex-shrink: 0; align-items: center; border: none; background: none;
      cursor: pointer; user-select: none; outline: none; font-family: var(--ds-font-family-base); white-space: nowrap;
      -webkit-font-smoothing: antialiased;
    }
    .tab:focus-visible { outline: 2px solid var(--ds-focus-ring, #8792F0); outline-offset: 1px; }

    .label { white-space: nowrap; }
    .label::after { content: attr(data-label); font-weight: var(--ds-font-weight-semibold, 600); display: block; height: 0; overflow: hidden; visibility: hidden; white-space: nowrap; pointer-events: none; }

    .content { display: flex; align-items: center; gap: 5px; }

    .count {
      display: inline-flex; align-items: center; justify-content: center; border: 1px solid;
      border-radius: 100px; line-height: 1; color: inherit; box-sizing: border-box;
      border-color: var(--ds-border-subtle, #D6D6E3);
    }
    .tabBar[data-variant="primary"] .count { min-width: 19px; height: 19px; padding: 2px 5px; font-size: 13px; }
    .tabBar[data-variant="primary"][data-size="sm"] .count { min-width: 15px; height: 15px; font-size: 11px; }
    .tabBar[data-variant="secondary"][data-size="md"] .count { min-width: 19px; height: 19px; padding: 2px 5px; font-size: 13px; }
    .tabBar[data-variant="secondary"][data-size="sm"] .count { min-width: 15px; height: 15px; padding: 0 4px; font-size: 11px; }
    .tabBar[data-variant="secondary"] .tab[data-active] .count { background: #fff; border-color: var(--ds-components-navigation-tab-inner-border, #D2D7FF); }

    /* ── Indicator ── */
    .indicator { position: absolute; pointer-events: none; }
    .indicator[data-animated] { transition: left 220ms cubic-bezier(0.4,0,0.2,1), top 220ms cubic-bezier(0.4,0,0.2,1), width 220ms cubic-bezier(0.4,0,0.2,1), height 220ms cubic-bezier(0.4,0,0.2,1); }
  `];

  @property({ type: Array }) tabs: TabItem[] = [];
  @property({ attribute: 'active-tab' }) activeTab = '';
  @property() size: 'md' | 'sm' = 'md';
  @property() variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean, attribute: 'show-count' }) showCount = false;

  @state() private _indicatorLeft = 0;
  @state() private _indicatorWidth = 0;
  @state() private _animated = false;

  private _barEl: HTMLDivElement | null = null;
  private _tabEls: HTMLButtonElement[] = [];

  firstUpdated() {
    this._updateIndicator();
    requestAnimationFrame(() => { this._animated = true; });
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('activeTab') || changed.has('tabs')) {
      this._updateIndicator();
    }
  }

  private _updateIndicator() {
    const bar = this.shadowRoot?.querySelector('.tabBar') as HTMLDivElement | null;
    if (!bar) return;
    const idx = this.tabs.findIndex(t => t.id === this.activeTab);
    const tabEl = bar.querySelectorAll('.tab')[idx] as HTMLButtonElement | null;
    if (!tabEl) return;
    const barRect = bar.getBoundingClientRect();
    const elRect = tabEl.getBoundingClientRect();
    const borderLeft = parseFloat(getComputedStyle(bar).borderLeftWidth) || 0;
    this._indicatorLeft = elRect.left - barRect.left - borderLeft;
    this._indicatorWidth = elRect.width;
  }

  private _handleClick(id: string) {
    this.dispatchEvent(new CustomEvent('change', { detail: { id }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="tabBar" data-variant=${this.variant} data-size=${this.size} role="tablist">
        ${this.tabs.map(tab => {
          const isActive = tab.id === this.activeTab;
          return html`
            <button
              type="button"
              role="tab"
              class="tab"
              aria-selected=${isActive}
              ?data-active=${isActive}
              @click=${() => this._handleClick(tab.id)}
            >
              <span class="content">
                <span class="label" data-label=${tab.label}>${tab.label}</span>
                ${this.showCount && tab.count !== undefined
                  ? html`<span class="count" aria-label="${tab.count} items">${tab.count}</span>`
                  : nothing}
              </span>
            </button>
          `;
        })}
        <span
          class="indicator"
          ?data-animated=${this._animated}
          style="left:${this._indicatorLeft}px;width:${this._indicatorWidth}px"
          aria-hidden="true"
        ></span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-tabs': DsTabs; }
}
