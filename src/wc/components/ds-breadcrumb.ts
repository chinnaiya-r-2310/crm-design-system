import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const CHEVRON_RIGHT = svg`<svg width="10" height="5" viewBox="0 0 10 5" fill="none" aria-hidden="true" style="transform:rotate(-90deg)"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`;

@customElement('ds-breadcrumb')
export class DsBreadcrumb extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: inline-block; }

    nav { display: inline-block; }

    ol {
      display: flex;
      align-items: center;
      gap: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .link,
    .btn,
    .current {
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular);
      line-height: 1;
      white-space: nowrap;
    }

    .link,
    .btn {
      color: var(--ds-text-label, #616E88);
      text-decoration: none;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: color 100ms ease;
    }
    .link:hover, .btn:hover { color: var(--ds-text-link, #5464F2); }
    .link:focus-visible, .btn:focus-visible {
      outline: 1px solid var(--ds-focus-ring, #8792F0);
      outline-offset: 2px;
      border-radius: 2px;
    }

    .current { color: var(--ds-text-base, #313949); }

    .sep {
      display: flex;
      flex-shrink: 0;
      color: var(--ds-text-label, #616E88);
    }
  `];

  @property({ type: Array }) items: BreadcrumbItem[] = [];
  @property({ type: Number, attribute: 'selected-index' }) selectedIndex = -1;
  @property({ type: Number, attribute: 'default-selected-index' }) defaultSelectedIndex = -1;

  @state() private _internalIndex = -1;

  connectedCallback() {
    super.connectedCallback();
    if (this._internalIndex === -1) {
      this._internalIndex = this.defaultSelectedIndex !== -1
        ? this.defaultSelectedIndex
        : Math.max(0, this.items.length - 1);
    }
  }

  private get _currentIndex() {
    return this.selectedIndex !== -1 ? this.selectedIndex : this._internalIndex;
  }

  private _handleClick(index: number, e: Event) {
    e.preventDefault();
    if (this.selectedIndex === -1) this._internalIndex = index;
    this.dispatchEvent(new CustomEvent('ds-select', {
      detail: { index, item: this.items[index] },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const current = this._currentIndex;
    return html`
      <nav aria-label="Breadcrumb">
        <ol>
          ${this.items.map((item, index) => {
            const isCurrent = index === current;
            const isLast = index === this.items.length - 1;
            return html`
              <li>
                ${isCurrent
                  ? html`<span class="current" aria-current="page">${item.label}</span>`
                  : item.href
                    ? html`<a class="link" href=${item.href} @click=${(e: Event) => this._handleClick(index, e)}>${item.label}</a>`
                    : html`<button type="button" class="btn" @click=${(e: Event) => this._handleClick(index, e)}>${item.label}</button>`
                }
                ${!isLast ? html`<span class="sep">${CHEVRON_RIGHT}</span>` : nothing}
              </li>
            `;
          })}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-breadcrumb': DsBreadcrumb; }
}
