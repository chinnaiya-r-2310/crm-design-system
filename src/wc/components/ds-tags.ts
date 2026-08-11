import { LitElement, html, css, nothing, render } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface TagOption { value: string; label: string; }

let _tagsCssInjected = false;
function ensureTagsCSS() {
  if (_tagsCssInjected) return;
  const s = document.createElement('style');
  s.id = 'ds-tags-portal-css';
  s.textContent = `
    .ds-tags-panel {
      position: fixed;
      z-index: 1500;
      background: var(--ds-components-dropdown-option-bg, #fff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
      padding: 6px 0;
      box-sizing: border-box;
      max-height: 220px;
      overflow-y: auto;
    }
    .ds-tags-option {
      display: flex;
      align-items: center;
      height: 32px;
      margin: 0 6px;
      border-radius: 5px;
      padding: 0 10px;
      cursor: pointer;
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      color: var(--ds-text-base);
      user-select: none;
    }
    .ds-tags-option:hover { background: var(--ds-components-dropdown-hover-bg, #F2F5FE); }
    .ds-tags-no-results {
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      font-family: var(--ds-font-family-base);
      font-size: var(--ds-font-size-base);
      color: var(--ds-text-muted, #8C9BAB);
    }
  `;
  document.head.appendChild(s);
  _tagsCssInjected = true;
}

@customElement('ds-tags')
export class DsTags extends LitElement {
  static styles = [
    tokensStyle,
    css`
      :host { display: block; }
      .root { display: block; }
      .vertical { display: inline-flex; flex-direction: column; gap: 6px; }
      .formRow {
        display: grid;
        grid-template-columns: 3fr 7fr;
        column-gap: 20px;
        align-items: start;
      }
      .fieldColumn { display: flex; flex-direction: column; gap: 4px; }
      .label {
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-regular);
        line-height: var(--ds-line-height-base);
        color: var(--ds-text-label);
        word-break: break-word;
        user-select: none;
        box-sizing: border-box;
      }
      .formRow .label { text-align: right; padding-top: 7px; }
      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        min-height: 34px;
        padding: 4px 8px;
        border: 1px solid var(--ds-components-input-default-outline);
        border-radius: 6px;
        background: var(--ds-bg-common-card);
        box-sizing: border-box;
        cursor: text;
        transition: border-color 150ms ease, box-shadow 150ms ease;
      }
      .container:focus-within,
      .container[data-open] {
        border-color: var(--ds-components-input-focus-outline);
        box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow);
      }
      .container[data-required] {
        border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
      }
      .container[data-error] { border-color: var(--ds-components-input-error-outline); }
      .container[data-disabled] {
        background: var(--ds-components-input-disable-bg);
        border-color: var(--ds-components-input-disable-outline);
        cursor: not-allowed;
      }
      .tag {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        height: 24px;
        background: #F0F3FF;
        border: 1px solid #CDD2FA;
        border-radius: 100px;
        box-sizing: border-box;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        color: var(--ds-text-base);
        line-height: 1;
        max-width: 200px;
      }
      .tagLabel {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .removeBtn {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        padding: 0;
        background: var(--ds-brand-primary, #5464F2);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        opacity: 0;
        transition: opacity 120ms ease, background 100ms ease;
        z-index: 1;
      }
      .tag:hover .removeBtn { opacity: 1; }
      .removeBtn:hover { background: #4354D4; }
      .input {
        flex: 1;
        min-width: 80px;
        height: 24px;
        border: none;
        outline: none;
        background: transparent;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        color: var(--ds-text-base);
        line-height: var(--ds-line-height-base);
      }
      .input::placeholder { color: var(--ds-components-input-placeholder-text); }
      .helperText {
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-xs);
        font-weight: var(--ds-font-weight-regular);
        line-height: var(--ds-line-height-xs);
        color: var(--ds-text-base);
      }
      .root[data-variant="error"] .container { border-color: var(--ds-components-input-error-outline); }
      .root[data-variant="error"] .helperText { color: var(--ds-components-input-error-outline); }
      .root[data-variant="disabled"] .container {
        background: var(--ds-components-input-disable-bg);
        border-color: var(--ds-components-input-disable-outline);
        pointer-events: none;
      }
    `,
  ];

  @property({ type: Array }) options: TagOption[] = [];
  @property({ type: Array }) selected: string[] = [];
  @property() placeholder = 'Select';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() variant: '' | 'error' | 'disabled' = '';
  @property() layout: 'vertical' | 'horizontal' = 'horizontal';
  @property({ type: Boolean, reflect: true }) searchable = false;

  @state() private _open = false;
  @state() private _search = '';

  @query('.container') private _containerEl!: HTMLElement;
  @query('.input') private _inputEl!: HTMLInputElement;

  private _portalEl: HTMLDivElement | null = null;
  private _outsideHandler = (e: PointerEvent) => {
    const path = e.composedPath();
    if (!path.includes(this) && this._portalEl && !path.includes(this._portalEl)) {
      this._open = false;
      this._search = '';
      this._closePortal();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    ensureTagsCSS();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._closePortal();
    document.removeEventListener('pointerdown', this._outsideHandler);
  }

  updated(changed: Map<PropertyKey, unknown>) {
    if (changed.has('_open')) {
      if (this._open) {
        document.addEventListener('pointerdown', this._outsideHandler);
        this.updateComplete.then(() => this._renderPortal());
      } else {
        document.removeEventListener('pointerdown', this._outsideHandler);
        this._closePortal();
      }
    }
    if (this._open && (changed.has('_search') || changed.has('selected') || changed.has('options'))) {
      this._renderPortal();
    }
  }

  private get _isDisabled() { return this.disabled || this.variant === 'disabled'; }

  private get _selectedItems(): TagOption[] {
    return this.selected.map(v => this.options.find(o => o.value === v) ?? { value: v, label: v });
  }

  private get _filtered(): TagOption[] {
    const selSet = new Set(this.selected);
    return this.options.filter(o =>
      !selSet.has(o.value) &&
      o.label.toLowerCase().includes(this._search.toLowerCase())
    );
  }

  private _openDropdown() {
    if (this._isDisabled || this.options.length === 0) return;
    this._open = true;
  }

  private _closePortal() {
    if (this._portalEl) {
      render(html``, this._portalEl);
      this._portalEl.remove();
      this._portalEl = null;
    }
  }

  private _select(opt: TagOption) {
    const next = [...this.selected, opt.value];
    this._search = '';
    this.dispatchEvent(new CustomEvent('ds-change', { detail: { selected: next }, bubbles: true, composed: true }));
    this._open = true;
    this.updateComplete.then(() => { this._inputEl?.focus(); this._renderPortal(); });
  }

  private _remove(value: string) {
    const next = this.selected.filter(v => v !== value);
    this.dispatchEvent(new CustomEvent('ds-change', { detail: { selected: next }, bubbles: true, composed: true }));
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Backspace' && !this._search && this.selected.length > 0) {
      this._remove(this.selected[this.selected.length - 1]);
    }
    if (e.key === 'Escape') { this._open = false; this._search = ''; }
  }

  private _renderPortal() {
    if (!this._open) return;
    const el = this._containerEl;
    if (!el) return;
    const r = el.getBoundingClientRect();

    if (!this._portalEl) {
      this._portalEl = document.createElement('div');
      document.body.appendChild(this._portalEl);
    }

    const filtered = this._filtered;
    render(
      html`
        <div class="ds-tags-panel" role="listbox" style="top:${r.bottom - 1}px;left:${r.left}px;width:${r.width}px;">
          ${filtered.length === 0
            ? html`<div class="ds-tags-no-results">No options found</div>`
            : filtered.map(opt => html`
              <div
                class="ds-tags-option"
                role="option"
                aria-selected="false"
                @click=${() => this._select(opt)}
              >${opt.label}</div>
            `)
          }
        </div>
      `,
      this._portalEl
    );
  }

  render() {
    const isDisabled = this._isDisabled;
    const rootVariant = this.variant || (this.disabled ? 'disabled' : null);

    const containerEl = html`
      <div
        class="container"
        ?data-open=${this._open}
        ?data-required=${this.required}
        ?data-error=${this.variant === 'error'}
        ?data-disabled=${isDisabled}
        @click=${() => { if (!isDisabled) { this._inputEl?.focus(); this._openDropdown(); } }}
      >
        ${this._selectedItems.map(item => html`
          <span class="tag">
            <span class="tagLabel">${item.label}</span>
            ${!isDisabled ? html`
              <button
                type="button"
                class="removeBtn"
                @click=${(e: Event) => { e.stopPropagation(); this._remove(item.value); }}
                aria-label="Remove ${item.label}"
              >
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                  <path d="M1 1L6 6M6 1L1 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                </svg>
              </button>
            ` : nothing}
          </span>
        `)}
        ${!isDisabled ? html`
          <input
            class="input"
            type="text"
            .value=${this._search}
            placeholder=${this.selected.length === 0 ? this.placeholder : ''}
            @input=${(e: InputEvent) => { this._search = (e.target as HTMLInputElement).value; if (!this._open) this._openDropdown(); }}
            @focus=${() => this._openDropdown()}
            @keydown=${(e: KeyboardEvent) => this._handleKeyDown(e)}
            aria-label=${this.placeholder}
            aria-expanded=${this._open}
            aria-haspopup="listbox"
            autocomplete="off"
          />
        ` : nothing}
      </div>
    `;

    const helperEl = this.helperText ? html`<span class="helperText">${this.helperText}</span>` : nothing;
    const labelEl = this.label ? html`<span class="label">${this.label}</span>` : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" data-variant=${rootVariant ?? nothing}>
          <div class="formRow">${labelEl}<div class="fieldColumn">${containerEl}${helperEl}</div></div>
        </div>
      `;
    }

    return html`
      <div class="root vertical" data-variant=${rootVariant ?? nothing}>
        ${labelEl}${containerEl}${helperEl}
      </div>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'ds-tags': DsTags; } }
