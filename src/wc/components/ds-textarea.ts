import { LitElement, html, css, nothing, svg } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { tokensStyle } from '../shared/tokens.js';

const RESIZE_HANDLE = svg`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M0.5 9.5L9.5 0.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4.3 9.5L9.5 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8.1 9.4L9.6 7.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const LOCK_ICON = svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12.6667 6H3.33333C2.59695 6 2 6.65122 2 7.45455V12.5455C2 13.3488 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.3488 14 12.5455V7.45455C14 6.65122 13.403 6 12.6667 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6V3.77778C5 3.04107 5.31607 2.33453 5.87868 1.81359C6.44129 1.29266 7.20435 1 8 1C8.79565 1 9.55871 1.29266 10.1213 1.81359C10.6839 2.33453 11 3.04107 11 3.77778V6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/><path d="M8 9.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

@customElement('ds-textarea')
export class DsTextarea extends LitElement {
  static styles = [tokensStyle, css`
    :host { display: block; }

    .root { display: block; }
    .root.vertical { display: inline-flex; flex-direction: column; gap: 6px; }

    .formRow { display: grid; grid-template-columns: 3fr 7fr; column-gap: 20px; align-items: start; }
    .fieldColumn { display: flex; flex-direction: column; gap: 4px; }

    label {
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
      color: var(--ds-text-label); word-break: break-word; user-select: none; box-sizing: border-box;
    }
    .formRow label { text-align: right; padding-top: 7px; }

    .textareaWrapper {
      position: relative; width: 100;
      background: var(--ds-bg-common-card); border: 1px solid var(--ds-components-input-default-outline);
      border-radius: 6px; box-sizing: border-box;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .textareaWrapper[data-required]::before {
      content: ''; display: inline-block; position: absolute; top: 0; bottom: 0; left: -1px;
      width: 3px; border-radius: 4px 0 0 4px; z-index: 1;
      border-left: 3px solid var(--ds-components-input-required-accent, #FF5D5A);
      background: transparent; pointer-events: none;
    }
    .textareaWrapper:hover { border-color: var(--ds-components-input-hover-outline); }
    .textareaWrapper:focus-within { border-color: var(--ds-components-input-focus-outline); box-shadow: 0 0 6px 0 var(--ds-components-input-focus-shadow); }

    textarea {
      display: block; width: 100%; padding: 8px 10px; background: transparent; border: none; outline: none;
      resize: none; font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-base);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-base);
      color: var(--ds-text-base); box-sizing: border-box;
      min-height: 34px; max-height: 34px; overflow: hidden;
      transition: min-height 200ms ease, max-height 200ms ease;
    }
    .textareaWrapper:focus-within textarea,
    .textareaWrapper[data-has-value] textarea {
      min-height: var(--ta-expanded, 70px); max-height: var(--ta-expanded, 70px); overflow-y: auto;
    }
    textarea::placeholder { color: var(--ds-components-input-placeholder-text); }

    .resizeIcon {
      position: absolute; right: 5px; bottom: 5px; display: flex; align-items: center;
      justify-content: center; width: 10px; height: 10px;
      color: var(--ds-components-input-placeholder-text, #B0B7C4); cursor: ns-resize; line-height: 0; z-index: 1;
    }

    .lockBadge {
      position: absolute; right: 0; top: 0; bottom: 0; width: 32px;
      background: var(--ds-components-input-readonly-lock-bg, #F4F4F6);
      border-radius: 0 5px 5px 0; display: flex; align-items: flex-start;
      justify-content: center; padding-top: 9px;
      color: var(--ds-text-label, #8C91AB); box-sizing: border-box;
    }

    .helperText {
      font-family: var(--ds-font-family-base); font-size: var(--ds-font-size-xs);
      font-weight: var(--ds-font-weight-regular); line-height: var(--ds-line-height-xs); color: var(--ds-text-base);
    }

    .root[data-variant="disabled"] .textareaWrapper {
      background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline);
      cursor: not-allowed;
    }
    .root[data-variant="disabled"] textarea { cursor: not-allowed; pointer-events: none; color: var(--ds-text-muted); }
    .root[data-variant="disabled"] .textareaWrapper:hover,
    .root[data-variant="disabled"] .textareaWrapper:focus-within {
      border-color: var(--ds-components-input-disable-outline); box-shadow: none;
    }

    .root[data-variant="readonly"] .textareaWrapper {
      background: var(--ds-components-input-disable-bg); border-color: var(--ds-components-input-disable-outline); cursor: default;
    }
    .root[data-variant="readonly"] .textareaWrapper:hover,
    .root[data-variant="readonly"] .textareaWrapper:focus-within {
      border-color: var(--ds-components-input-disable-outline); box-shadow: none;
    }
    .root[data-variant="readonly"] textarea { color: var(--ds-text-base); padding-right: 42px; }

    .root[data-variant="error"] .textareaWrapper { border-color: var(--ds-components-input-error-outline); }
    .root[data-variant="error"] .textareaWrapper:hover { border-color: var(--ds-components-input-error-outline); }
    .root[data-variant="error"] .helperText { color: var(--ds-components-input-error-outline); }
  `];

  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property() layout: 'horizontal' | 'vertical' = 'horizontal';
  @property() placeholder = '';
  @property() value = '';
  @property({ type: Number, attribute: 'min-height' }) minHeight = 70;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) error = false;
  @property() name = '';
  @property() width: string | number = 670;

  @state() private _id = 'ds-ta-' + Math.random().toString(36).slice(2, 7);
  @state() private _hasValue = false;
  @state() private _customHeight: number | null = null;

  @query('textarea') private _textarea!: HTMLTextAreaElement;

  private get _variant() {
    if (this.disabled) return 'disabled';
    if (this.readonly) return 'readonly';
    if (this.error) return 'error';
    return undefined;
  }

  private _onInput(e: Event) {
    const ta = e.target as HTMLTextAreaElement;
    this._hasValue = ta.value.length > 0;
    this.value = ta.value;
    this.dispatchEvent(new CustomEvent('ds-input', { detail: { value: ta.value }, bubbles: true, composed: true }));
  }

  private _onResizeStart(e: MouseEvent) {
    e.preventDefault();
    const startY = e.clientY;
    const startH = this._textarea?.offsetHeight ?? Math.max(70, this.minHeight);
    const onMove = (ev: MouseEvent) => {
      this._customHeight = Math.max(Math.max(70, this.minHeight), startH + (ev.clientY - startY));
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  render() {
    const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
    const variant = this._variant;
    const expanded = Math.max(70, this.minHeight);
    const customH = this._customHeight;

    const helper = this.helperText
      ? html`<span class="helperText" id="${this._id}-helper">${this.helperText}</span>`
      : nothing;
    const labelEl = this.label
      ? html`<label for=${this._id}>${this.label}</label>`
      : nothing;

    const wrapperEl = html`
      <div
        class="textareaWrapper"
        ?data-required=${this.required}
        ?data-has-value=${this._hasValue}
        style="--ta-expanded:${expanded}px"
      >
        <textarea
          id=${this._id}
          name=${this.name}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          aria-describedby=${this.helperText ? `${this._id}-helper` : nothing}
          style=${customH ? `min-height:${customH}px;max-height:${customH}px` : nothing}
          @input=${this._onInput}
        >${this.value}</textarea>
        ${!this.readonly && !this.disabled
          ? html`<div class="resizeIcon" @mousedown=${this._onResizeStart}>${RESIZE_HANDLE}</div>`
          : nothing}
        ${this.readonly ? html`<div class="lockBadge">${LOCK_ICON}</div>` : nothing}
      </div>
    `;

    if (this.layout === 'horizontal' && this.label) {
      return html`
        <div class="root" data-variant=${variant || nothing} style="width:${w}">
          <div class="formRow">${labelEl}<div class="fieldColumn">${wrapperEl}${helper}</div></div>
        </div>`;
    }
    return html`
      <div class="root vertical" data-variant=${variant || nothing} style="width:${w}">
        ${labelEl}${wrapperEl}${helper}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-textarea': DsTextarea; }
}
