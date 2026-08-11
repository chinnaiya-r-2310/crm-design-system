import { LitElement, html, css, nothing, render } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

export interface UserOption {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  color?: string;
}

const AVATAR_PALETTE = [
  '#5464F2', '#12AA67', '#F5A623', '#E85D4A', '#9B51E0',
  '#2D9CDB', '#27AE60', '#EB5757', '#F2994A', '#6FCF97',
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

let _upCssInjected = false;
function ensureUpCSS() {
  if (_upCssInjected) return;
  const s = document.createElement('style');
  s.id = 'ds-up-portal-css';
  s.textContent = `
    .ds-up-panel {
      position: fixed;
      z-index: 1500;
      background: var(--ds-components-dropdown-option-bg, #ffffff);
      border: 1px solid var(--ds-components-dropdown-outline, #CED0E1);
      border-radius: 6px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
      padding: 6px 0;
      box-sizing: border-box;
    }
    .ds-up-search-row { padding: 4px 10px 5px; }
    .ds-up-search-box {
      display: flex; align-items: center; height: 30px; gap: 6px;
      padding: 0 8px; background: var(--ds-bg-common-card, #fff);
      border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .ds-up-search-box:focus-within {
      border-color: var(--ds-components-input-focus-outline);
      box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow);
    }
    .ds-up-search-icon { display:flex; align-items:center; flex-shrink:0; color:var(--ds-text-muted,#8C9BAB); }
    .ds-up-search-input {
      flex:1; min-width:0; border:none; outline:none; background:transparent;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base); color:var(--ds-text-base);
    }
    .ds-up-search-input::placeholder { color:var(--ds-components-input-placeholder-text); }
    .ds-up-clear-btn {
      display:flex; align-items:center; justify-content:center;
      width:16px; height:16px; padding:4px; border:none; border-radius:100px;
      background:var(--ds-bg-muted,#EAF0F4); color:var(--ds-text-label); cursor:pointer; box-sizing:border-box;
    }
    .ds-up-clear-btn:hover { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-up-list { overflow-y:auto; max-height:245px; }
    .ds-up-option {
      display:flex; align-items:center; height:50px; margin:0 6px;
      border-radius:5px; cursor:pointer; user-select:none; box-sizing:border-box;
      gap:8px; padding-right:10px;
    }
    .ds-up-option[data-active] { background:var(--ds-components-dropdown-hover-bg,#F2F5FE); }
    .ds-up-check { width:25px; flex-shrink:0; display:flex; align-items:center; justify-content:center; color:var(--ds-text-base); }
    .ds-up-avatar {
      display:inline-flex; align-items:center; justify-content:center;
      flex-shrink:0; border-radius:50%; color:#fff;
      font-family:var(--ds-font-family-base); font-weight:500; line-height:1;
      overflow:hidden; box-sizing:border-box; user-select:none;
    }
    .ds-up-avatar img { width:100%; height:100%; object-fit:cover; border-radius:50%; }
    .ds-up-info { flex:1; min-width:0; display:flex; flex-direction:column; gap:1px; }
    .ds-up-name {
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base,13px);
      font-weight:var(--ds-font-weight-regular,400); line-height:var(--ds-line-height-base,20px);
      color:var(--ds-text-base,#313949); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .ds-up-email {
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-xs,11px);
      font-weight:var(--ds-font-weight-regular,400); line-height:var(--ds-line-height-xs,15px);
      color:var(--ds-text-label,#616E88); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .ds-up-no-results {
      height:50px; display:flex; align-items:center; padding:0 25px;
      font-family:var(--ds-font-family-base); font-size:var(--ds-font-size-base); color:var(--ds-text-muted,#8C9BAB);
    }
  `;
  document.head.appendChild(s);
  _upCssInjected = true;
}

@customElement('ds-user-picker')
export class DsUserPicker extends LitElement {
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
      .dropdownWrapper { position: relative; }
      .trigger {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 34px;
        padding: 0;
        background: var(--ds-bg-common-card);
        border: 1px solid var(--ds-components-input-default-outline);
        border-radius: 6px;
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        font-family: var(--ds-font-family-base);
        transition: border-color 150ms ease, box-shadow 150ms ease;
        text-align: left;
      }
      .trigger:hover { border-color: var(--ds-components-input-hover-outline); }
      .trigger[data-open], .trigger:focus {
        border-color: var(--ds-components-input-focus-outline);
        box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow);
      }
      .trigger[data-required]::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0; left: -1px;
        width: 3px;
        border-radius: 4px 0 0 4px;
        border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
        pointer-events: none;
      }
      .triggerUser {
        flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; padding: 0 10px;
      }
      .triggerName {
        flex: 1; min-width: 0;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-regular);
        line-height: var(--ds-line-height-base);
        color: var(--ds-text-base);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .triggerValue {
        flex: 1; min-width: 0; padding: 0 10px;
        font-family: var(--ds-font-family-base);
        font-size: var(--ds-font-size-base);
        font-weight: var(--ds-font-weight-regular);
        line-height: var(--ds-line-height-base);
        color: var(--ds-components-input-placeholder-text);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .chevron {
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; width: 32px; height: 32px; color: var(--ds-text-label);
        transition: transform 150ms ease;
      }
      .trigger[data-open] .chevron { transform: rotate(180deg); }
      .avatar {
        display: inline-flex; align-items: center; justify-content: center;
        flex-shrink: 0; border-radius: 50%; color: #fff;
        font-family: var(--ds-font-family-base); font-weight: 500; line-height: 1;
        overflow: hidden; box-sizing: border-box; user-select: none;
      }
      .avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
      .helperText {
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
      .root[data-variant="error"] .trigger:hover { border-color: var(--ds-components-input-error-outline); }
      .root[data-variant="error"] .helperText { color: var(--ds-components-input-error-outline); }
    `,
  ];

  @property({ type: Array }) users: UserOption[] = [];
  @property() value = '';
  @property() placeholder = 'Select user';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() variant: '' | 'error' | 'disabled' = '';
  @property() layout: 'vertical' | 'horizontal' = 'horizontal';
  @property({ type: Boolean, reflect: true }) searchable = false;

  @state() private _open = false;
  @state() private _search = '';
  @state() private _activeIndex = -1;

  @query('.trigger') private _triggerEl!: HTMLButtonElement;

  private _portalEl: HTMLDivElement | null = null;
  private _outsideHandler = (e: PointerEvent) => {
    const path = e.composedPath();
    if (!path.includes(this) && this._portalEl && !path.includes(this._portalEl)) this._close();
  };
  private _resizeHandler = () => this._renderPortal();

  connectedCallback() {
    super.connectedCallback();
    ensureUpCSS();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._close();
  }

  updated(changed: Map<PropertyKey, unknown>) {
    if (changed.has('_open')) {
      if (this._open) {
        document.addEventListener('pointerdown', this._outsideHandler);
        window.addEventListener('resize', this._resizeHandler);
        this.updateComplete.then(() => {
          this._renderPortal();
          this._portalEl?.querySelector<HTMLInputElement>('.ds-up-search-input')?.focus();
        });
      } else {
        document.removeEventListener('pointerdown', this._outsideHandler);
        window.removeEventListener('resize', this._resizeHandler);
      }
    }
    if (this._open && (changed.has('_search') || changed.has('_activeIndex'))) {
      this._renderPortal();
    }
  }

  private get _isDisabled() { return this.disabled || this.variant === 'disabled'; }
  private get _selectedUser() { return this.users.find(u => u.id === this.value); }
  private get _filtered() {
    if (!this._search) return this.users;
    const q = this._search.toLowerCase();
    return this.users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }

  private _toggle() {
    if (this._isDisabled) return;
    if (this._open) { this._close(); }
    else { this._search = ''; this._activeIndex = -1; this._open = true; }
  }

  private _close() {
    this._open = false;
    if (this._portalEl) {
      render(html``, this._portalEl);
      this._portalEl.remove();
      this._portalEl = null;
    }
  }

  private _select(user: UserOption) {
    this.value = user.id;
    this.dispatchEvent(new CustomEvent('ds-change', {
      detail: { userId: user.id, user },
      bubbles: true,
      composed: true,
    }));
    this._close();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') { this._close(); return; }
    if (!this._open) return;
    const f = this._filtered;
    if (e.key === 'ArrowDown') { e.preventDefault(); this._activeIndex = Math.min(this._activeIndex + 1, f.length - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); this._activeIndex = Math.max(this._activeIndex - 1, 0); }
    else if (e.key === 'Enter') { e.preventDefault(); const u = f[this._activeIndex]; if (u) this._select(u); }
  }

  private _renderAvatar(user: UserOption, size: number) {
    const bg = user.color ?? getAvatarColor(user.name);
    const fontSize = size * 0.42;
    return html`
      <span class="ds-up-avatar" style="width:${size}px;height:${size}px;background:${bg};font-size:${fontSize}px;" aria-hidden="true">
        ${user.avatar
          ? html`<img src="${user.avatar}" alt="" />`
          : getInitials(user.name)
        }
      </span>
    `;
  }

  private _renderPortal() {
    if (!this._open) return;
    const el = this._triggerEl;
    if (!el) return;
    const r = el.getBoundingClientRect();

    if (!this._portalEl) {
      this._portalEl = document.createElement('div');
      document.body.appendChild(this._portalEl);
    }

    const filtered = this._filtered;
    render(
      html`
        <div
          class="ds-up-panel"
          style="top:${r.bottom - 1}px;left:${r.left}px;width:${r.width}px;"
          role="listbox"
          aria-label=${this.label || 'Select user'}
          @keydown=${(e: KeyboardEvent) => this._handleKeyDown(e)}
        >
          <div class="ds-up-search-row">
            <div class="ds-up-search-box">
              <span class="ds-up-search-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.4"/>
                  <path d="M10 10L13 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                </svg>
              </span>
              <input
                class="ds-up-search-input"
                type="text"
                placeholder="Search"
                .value=${this._search}
                @input=${(e: InputEvent) => { this._search = (e.target as HTMLInputElement).value; this._activeIndex = 0; }}
                aria-label="Search users"
              />
              ${this._search ? html`
                <button class="ds-up-clear-btn" @click=${() => { this._search = ''; this._renderPortal(); }} aria-label="Clear search">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </button>
              ` : nothing}
            </div>
          </div>
          <div class="ds-up-list">
            ${filtered.length === 0
              ? html`<div class="ds-up-no-results">No users found</div>`
              : filtered.map((user, idx) => {
                  const isSelected = user.id === this.value;
                  const bg = user.color ?? getAvatarColor(user.name);
                  return html`
                    <div
                      class="ds-up-option"
                      role="option"
                      aria-selected=${isSelected}
                      ?data-active=${this._activeIndex === idx}
                      @mouseenter=${() => { this._activeIndex = idx; this._renderPortal(); }}
                      @click=${() => this._select(user)}
                    >
                      <span class="ds-up-check" aria-hidden="true">
                        ${isSelected ? html`
                          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                            <path d="M1 4.5L4.5 8L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        ` : nothing}
                      </span>
                      <span class="ds-up-avatar" style="width:28px;height:28px;background:${bg};font-size:11.76px;" aria-hidden="true">
                        ${user.avatar ? html`<img src="${user.avatar}" alt="" />` : getInitials(user.name)}
                      </span>
                      <div class="ds-up-info">
                        <span class="ds-up-name">${user.name}</span>
                        <span class="ds-up-email">${user.email}</span>
                      </div>
                    </div>
                  `;
                })
            }
          </div>
        </div>
      `,
      this._portalEl
    );
  }

  render() {
    const rootVariant = this.variant || (this.disabled ? 'disabled' : null);
    const selectedUser = this._selectedUser;
    const bg = selectedUser ? (selectedUser.color ?? getAvatarColor(selectedUser.name)) : '';

    const dropdownEl = html`
      <div class="dropdownWrapper" @keydown=${(e: KeyboardEvent) => this._handleKeyDown(e)}>
        <button
          class="trigger"
          type="button"
          ?disabled=${this._isDisabled}
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          ?data-open=${this._open}
          ?data-required=${this.required}
          @click=${() => this._toggle()}
        >
          ${selectedUser ? html`
            <span class="triggerUser">
              <span class="avatar" style="width:24px;height:24px;background:${bg};font-size:10.08px;" aria-hidden="true">
                ${selectedUser.avatar ? html`<img src="${selectedUser.avatar}" alt="" />` : getInitials(selectedUser.name)}
              </span>
              <span class="triggerName">${selectedUser.name}</span>
            </span>
          ` : html`
            <span class="triggerValue">${this.placeholder}</span>
          `}
          <span class="chevron" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    `;

    const helperEl = this.helperText ? html`<span class="helperText">${this.helperText}</span>` : nothing;
    const labelEl = this.label ? html`<span class="label">${this.label}</span>` : nothing;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" data-variant=${rootVariant ?? nothing}>
          <div class="formRow">${labelEl}<div class="fieldColumn">${dropdownEl}${helperEl}</div></div>
        </div>
      `;
    }

    return html`
      <div class="root vertical" data-variant=${rootVariant ?? nothing}>
        ${labelEl}${dropdownEl}${helperEl}
      </div>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'ds-user-picker': DsUserPicker; } }
