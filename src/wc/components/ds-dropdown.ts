import { LitElement, html, css, nothing, render } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

// ── Portal CSS injected once into document.head ────────────────────────────
let _dropdownCssInjected = false;
function ensureDropdownCSS() {
  if (_dropdownCssInjected || document.getElementById('ds-dropdown-portal-css')) {
    _dropdownCssInjected = true;
    return;
  }
  const s = document.createElement('style');
  s.id = 'ds-dropdown-portal-css';
  s.textContent = `
    .ds-dd-panel {
      position: fixed;
      z-index: 1500;
      background: var(--ds-components-dropdown-option-bg, #fff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
      padding: 6px 0;
      box-sizing: border-box;
      font-family: var(--ds-font-family-base);
    }
    .ds-dd-search-row { padding: 4px 10px 5px; }
    .ds-dd-search-box {
      display: flex; align-items: center; height: 30px; gap: 6px;
      padding: 0 8px; background: var(--ds-bg-common-card,#fff);
      border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .ds-dd-search-box:focus-within {
      border-color: var(--ds-components-input-focus-outline);
      box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow);
    }
    .ds-dd-search-icon { display:flex; align-items:center; color:var(--ds-text-muted,#8C9BAB); }
    .ds-dd-search-input {
      flex:1; min-width:0; border:none; outline:none; background:transparent;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base);
      color:var(--ds-text-base);
    }
    .ds-dd-search-input::placeholder { color:var(--ds-components-input-placeholder-text); }
    .ds-dd-clear-btn {
      display:flex; align-items:center; justify-content:center;
      width:16px; height:16px; padding:4px; border:none; border-radius:100px;
      background:var(--ds-bg-muted,#EAF0F4); color:var(--ds-text-label); cursor:pointer;
    }
    .ds-dd-clear-btn:hover { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-dd-list { overflow-y:auto; max-height:248px; }
    .ds-dd-option {
      display:flex; align-items:center; height:32px; margin:0 6px;
      border-radius:5px; cursor:pointer; user-select:none; box-sizing:border-box;
    }
    .ds-dd-option[data-active]:not([data-disabled]) { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-dd-option[data-disabled] { cursor:not-allowed; opacity:0.5; }
    .ds-dd-opt-check {
      width:25px; flex-shrink:0; display:flex; align-items:center;
      justify-content:center; color:var(--ds-text-base);
    }
    .ds-dd-opt-label {
      flex:1; min-width:0; padding-right:10px;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base);
      font-weight:var(--ds-font-weight-regular); line-height:var(--ds-line-height-base);
      color:var(--ds-text-base); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .ds-dd-multi-off, .ds-dd-multi-on {
      display:inline-block; width:13px; height:13px; border-radius:3px;
      border:2px solid var(--ds-components-input-default-outline,#C0C8E2);
      background:#fff; flex-shrink:0;
    }
    .ds-dd-multi-on {
      background:var(--ds-brand-primary,#5464F2);
      border-color:var(--ds-brand-primary,#5464F2);
      background-image:url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.2L3.2 5.5L7 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-repeat:no-repeat; background-position:center;
    }
    .ds-dd-group + .ds-dd-group { border-top:1px solid var(--ds-components-dropdown-outline,#CED0E1); margin-top:4px; padding-top:4px; }
    .ds-dd-group-heading {
      height:32px; display:flex; align-items:center; padding:0 10px 0 25px;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-xs,11px);
      font-weight:var(--ds-font-weight-medium,500); color:var(--ds-text-label,#616E88);
      text-transform:uppercase; letter-spacing:0.5px; user-select:none;
    }
    .ds-dd-footer {
      border-top:1px solid var(--ds-components-dropdown-outline,#CED0E1);
      padding:6px 6px 4px; display:flex; flex-direction:column; gap:4px;
    }
    .ds-dd-done-btn {
      display:flex; align-items:center; justify-content:center;
      height:27px; padding:0 14px; align-self:flex-end;
      border:1px solid var(--ds-components-input-default-outline,#C0C8E2);
      border-radius:5px; background:var(--ds-bg-common-card,#fff);
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base);
      color:var(--ds-text-base); cursor:pointer; transition:background 150ms ease;
    }
    .ds-dd-done-btn:hover { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-dd-footer-action {
      display:flex; align-items:center; gap:8px; width:100%; height:32px;
      padding:0 10px; border:none; border-radius:5px; background:transparent;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base);
      color:var(--ds-brand-primary,#5464F2); cursor:pointer; text-align:left;
      transition:background 150ms ease;
    }
    .ds-dd-footer-action:hover { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-dd-no-results {
      height:32px; display:flex; align-items:center; padding:0 25px;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base);
      color:var(--ds-text-muted,#8C9BAB);
    }
  `;
  document.head.appendChild(s);
  _dropdownCssInjected = true;
}

@customElement('ds-dropdown')
export class DsDropdown extends LitElement {
  static styles = [
    tokensStyle,
    css`
      :host { display: block; }
      .root { display: block; }
      .root.vertical { display: inline-flex; flex-direction: column; gap: 6px; }
      .form-row {
        display: grid; grid-template-columns: 3fr 7fr;
        column-gap: 20px; align-items: start;
      }
      .field-col { display: flex; flex-direction: column; gap: 4px; }
      .label {
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-regular);
        line-height: var(--ds-line-height-base);
        color: var(--ds-text-label);
        word-break: break-word;
        user-select: none;
      }
      .form-row .label { text-align: right; padding-top: 7px; }
      .wrapper { position: relative; width: 100%; }
      .trigger {
        position: relative; display: flex; align-items: center;
        width: 100%; height: 34px; padding: 0;
        background: var(--ds-bg-common-card);
        border: 1px solid var(--ds-components-input-default-outline);
        border-radius: 6px; box-sizing: border-box; cursor: pointer;
        outline: none; font-family: var(--ds-font-family-base);
        transition: border-color 150ms ease, box-shadow 150ms ease;
        text-align: left;
      }
      .trigger:hover { border-color: var(--ds-components-input-hover-outline); }
      .trigger[data-open], .trigger:focus {
        border-color: var(--ds-components-input-focus-outline);
        box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow);
      }
      .trigger[data-required]::before {
        content: ''; position: absolute; top: 0; bottom: 0; left: -1px;
        width: 3px; border-radius: 4px 0 0 4px;
        border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
        pointer-events: none;
      }
      .trigger[data-required] .trigger-value { padding-left: 15px; }
      .trigger-value {
        flex: 1; min-width: 0; padding: 0 10px;
        font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
        color: var(--ds-text-base); white-space: nowrap; overflow: hidden;
        text-overflow: ellipsis; box-sizing: border-box;
      }
      .trigger-value[data-placeholder] { color: var(--ds-components-input-placeholder-text); }
      .chevron {
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; width: 32px; height: 32px; color: var(--ds-text-label);
        transition: transform 150ms ease;
      }
      .trigger[data-open] .chevron { transform: rotate(180deg); }
      .helper-text {
        font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs);
        font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-xs);
        color: var(--ds-text-base);
      }
      .root[data-variant="disabled"] .trigger {
        background: var(--ds-components-input-disable-bg);
        border-color: var(--ds-components-input-disable-outline);
        cursor: not-allowed; pointer-events: none;
      }
      .root[data-variant="error"] .trigger { border-color: var(--ds-components-input-error-outline); }
      .root[data-variant="error"] .helper-text { color: var(--ds-components-input-error-outline); }
    `,
  ];

  @property() label = '';
  @property() placeholder = 'Select';
  @property() value = '';
  @property({ attribute: 'selected-values', type: Array }) selectedValues: string[] = [];
  @property({ type: Array }) options: DropdownOption[] = [];
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() width: string | number = 670;
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) searchable = false;
  @property({ attribute: 'multi-select', type: Boolean, reflect: true }) multiSelect = false;
  @property({ attribute: 'footer-action-label' }) footerActionLabel = '';
  @property() columns = '';

  @state() private _open = false;
  @state() private _search = '';
  @state() private _activeIndex = -1;
  @state() private _internalValue = '';
  @state() private _internalSelected: string[] = [];

  @query('.trigger') private _trigger!: HTMLButtonElement;

  private _portalEl: HTMLDivElement | null = null;
  private _outsideHandler = (e: PointerEvent) => {
    const path = e.composedPath();
    if (!path.includes(this) && this._portalEl && !path.includes(this._portalEl)) {
      this._close();
    }
  };
  private _resizeHandler = () => this._renderPortal();

  connectedCallback() {
    super.connectedCallback();
    ensureDropdownCSS();
    this._internalValue = this.value;
    this._internalSelected = [...this.selectedValues];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._close();
  }

  private get _resolvedValue() { return this._internalValue || this.value; }
  private get _activeValues() { return this.selectedValues.length ? this.selectedValues : this._internalSelected; }

  private get _isSearchable() { return this.searchable || this.options.length >= 10; }

  private get _filtered() {
    if (!this._isSearchable || !this._search) return this.options;
    return this.options.filter(o => o.label.toLowerCase().includes(this._search.toLowerCase()));
  }

  private get _displayValue() {
    if (this.multiSelect) {
      return this._activeValues.length === 0 ? this.placeholder : `${this._activeValues.length} selected`;
    }
    return this.options.find(o => o.value === this._resolvedValue)?.label ?? this.placeholder;
  }

  private get _isPlaceholder() {
    return this.multiSelect ? this._activeValues.length === 0 : !this.options.find(o => o.value === this._resolvedValue);
  }

  private _open_() {
    if (this.disabled) return;
    this._search = '';
    this._open = true;
    const selIdx = this._filtered.findIndex(o => o.value === this._resolvedValue && !o.disabled);
    this._activeIndex = selIdx >= 0 ? selIdx : -1;
    document.addEventListener('pointerdown', this._outsideHandler);
    window.addEventListener('resize', this._resizeHandler);
    this.requestUpdate();
    setTimeout(() => {
      this._renderPortal();
      if (this._isSearchable) {
        this._portalEl?.querySelector<HTMLInputElement>('.ds-dd-search-input')?.focus();
      }
    }, 0);
  }

  private _close() {
    this._open = false;
    document.removeEventListener('pointerdown', this._outsideHandler);
    window.removeEventListener('resize', this._resizeHandler);
    if (this._portalEl) {
      render(html``, this._portalEl);
      this._portalEl.remove();
      this._portalEl = null;
    }
  }

  private _toggle() {
    this._open ? this._close() : this._open_();
  }

  private _selectSingle(opt: DropdownOption) {
    if (opt.disabled) return;
    this._internalValue = opt.value;
    this.dispatchEvent(new CustomEvent('ds-change', { detail: opt.value, bubbles: true, composed: true }));
    this._close();
  }

  private _toggleMulti(opt: DropdownOption) {
    if (opt.disabled) return;
    const next = this._activeValues.includes(opt.value)
      ? this._activeValues.filter(v => v !== opt.value)
      : [...this._activeValues, opt.value];
    this._internalSelected = next;
    this.dispatchEvent(new CustomEvent('ds-change', { detail: next, bubbles: true, composed: true }));
    this._renderPortal();
  }

  private _panelPos() {
    const r = this._trigger?.getBoundingClientRect();
    if (!r) return null;
    const PANEL_MAX_WIDTH = 390;
    return {
      top: r.bottom - 1,
      left: r.left,
      triggerWidth: r.width,
      style: r.width >= PANEL_MAX_WIDTH
        ? `width:${PANEL_MAX_WIDTH}px;`
        : `width:max-content;max-width:${PANEL_MAX_WIDTH}px;`,
    };
  }

  private _renderPortal() {
    if (!this._open) return;
    const pos = this._panelPos();
    if (!pos) return;

    if (!this._portalEl) {
      this._portalEl = document.createElement('div');
      document.body.appendChild(this._portalEl);
    }

    const filtered = this._filtered;
    const groups = new Map<string | undefined, DropdownOption[]>();
    for (const opt of filtered) {
      const k = opt.group;
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k)!.push(opt);
    }
    const hasGroups = filtered.some(o => o.group);

    const renderOpt = (opt: DropdownOption, idx: number) => {
      const isSel = this.multiSelect
        ? this._activeValues.includes(opt.value)
        : opt.value === this._resolvedValue;
      return html`
        <div class="ds-dd-option"
          role="option"
          aria-selected=${isSel}
          ?data-active=${this._activeIndex === idx}
          ?data-disabled=${opt.disabled}
          ?data-selected=${isSel}
          @mouseenter=${() => { this._activeIndex = idx; this._renderPortal(); }}
          @click=${() => this.multiSelect ? this._toggleMulti(opt) : this._selectSingle(opt)}
        >
          <span class="ds-dd-opt-check" aria-hidden="true">
            ${this.multiSelect
              ? html`<span class=${isSel ? 'ds-dd-multi-on' : 'ds-dd-multi-off'}></span>`
              : (isSel ? html`<svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4.5L4.5 8L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>` : nothing)
            }
          </span>
          <span class="ds-dd-opt-label" title=${opt.label}>${opt.label}</span>
        </div>
      `;
    };

    const tpl = html`
      <div class="ds-dd-panel"
        role="listbox"
        aria-label=${this.label}
        style="top:${pos.top}px;left:${pos.left}px;${pos.style}"
        @keydown=${(e: KeyboardEvent) => this._onKeyDown(e)}
      >
        ${this._isSearchable ? html`
          <div class="ds-dd-search-row">
            <div class="ds-dd-search-box">
              <span class="ds-dd-search-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.4"/>
                  <path d="M10 10L13 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                </svg>
              </span>
              <input class="ds-dd-search-input" type="text" placeholder="Search"
                .value=${this._search}
                @input=${(e: InputEvent) => {
                  this._search = (e.target as HTMLInputElement).value;
                  this._activeIndex = -1;
                  this._renderPortal();
                }}
                aria-label="Search options"
              />
              ${this._search ? html`
                <button class="ds-dd-clear-btn" @click=${() => { this._search = ''; this._renderPortal(); }} aria-label="Clear search">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </button>
              ` : nothing}
            </div>
          </div>
        ` : nothing}

        <div class="ds-dd-list">
          ${filtered.length === 0
            ? html`<div class="ds-dd-no-results">No results found</div>`
            : hasGroups
              ? Array.from(groups.entries()).map(([gk, gopts]) => html`
                  <div class="ds-dd-group">
                    ${gk ? html`<div class="ds-dd-group-heading">${gk}</div>` : nothing}
                    ${gopts.map(opt => renderOpt(opt, filtered.indexOf(opt)))}
                  </div>
                `)
              : filtered.map((opt, idx) => renderOpt(opt, idx))
          }
        </div>

        ${this.multiSelect || this.footerActionLabel ? html`
          <div class="ds-dd-footer">
            ${this.multiSelect ? html`
              <button class="ds-dd-done-btn" @click=${() => { this._close(); }}>Done</button>
            ` : nothing}
            ${this.footerActionLabel ? html`
              <button class="ds-dd-footer-action" @click=${() => {
                this.dispatchEvent(new CustomEvent('ds-footer-action', { bubbles: true, composed: true }));
                this._close();
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                ${this.footerActionLabel}
              </button>
            ` : nothing}
          </div>
        ` : nothing}
      </div>
    `;

    render(tpl, this._portalEl);
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') { this._close(); return; }
    if (!this._open) return;
    const f = this._filtered;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      let next = this._activeIndex + 1;
      while (next < f.length && f[next]?.disabled) next++;
      if (next < f.length) { this._activeIndex = next; this._renderPortal(); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      let next = this._activeIndex - 1;
      while (next >= 0 && f[next]?.disabled) next--;
      if (next >= 0) { this._activeIndex = next; this._renderPortal(); }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const opt = f[this._activeIndex];
      if (opt && !opt.disabled) {
        this.multiSelect ? this._toggleMulti(opt) : this._selectSingle(opt);
      }
    }
  }

  render() {
    const rootVariant = this.disabled ? 'disabled' : this.error ? 'error' : undefined;
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const gridCols = this.columns || '3fr 7fr';

    const triggerEl = html`
      <div class="wrapper" @keydown=${(e: KeyboardEvent) => this._onKeyDown(e)}>
        <button
          class="trigger"
          type="button"
          ?disabled=${this.disabled}
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          ?data-open=${this._open}
          ?data-required=${this.required}
          @click=${() => this._toggle()}
        >
          <span class="trigger-value" ?data-placeholder=${this._isPlaceholder}>
            ${this._displayValue}
          </span>
          <span class="chevron" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    `;

    const helperEl = this.helperText
      ? html`<span class="helper-text">${this.helperText}</span>`
      : nothing;

    const labelEl = this.label
      ? html`<span class="label">${this.label}</span>`
      : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" style="width:${w}" data-variant=${rootVariant ?? nothing}>
          <div class="form-row" style="grid-template-columns:${gridCols}">
            ${labelEl}
            <div class="field-col">${triggerEl}${helperEl}</div>
          </div>
        </div>
      `;
    }

    return html`
      <div class="root vertical" style="width:${w}" data-variant=${rootVariant ?? nothing}>
        ${labelEl}${triggerEl}${helperEl}
      </div>
    `;
  }

  // Re-render portal when open state changes
  updated(changed: Map<string, unknown>) {
    if (changed.has('_open') && this._open) this._renderPortal();
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-dropdown': DsDropdown; }
}
