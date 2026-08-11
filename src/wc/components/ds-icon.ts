import { LitElement, html, svg, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type IconName =
  | 'info' | 'lock' | 'chevron-down-filled' | 'search' | 'check'
  | 'alert-success' | 'alert-error' | 'alert-warning' | 'alert-info'
  | 'close-small' | 'resize-handle' | 'more' | 'criteria-minus' | 'criteria-plus'
  | 'help-circle' | 'edit' | 'close'
  | 'user-avatar' | 'group-avatar' | 'company-avatar' | 'image-avatar';

const ICONS: Record<string, ReturnType<typeof svg>> = {
  'info': svg`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.75" cy="8.75" r="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.25" cy="5.25" r="1.5" fill="currentColor"/><path d="M7.11048 9.45227C7.97824 8.76356 8.24535 8.32977 8.81003 8.5281C9.51589 8.77601 6.90127 13.0735 7.60713 13.3214C8.17181 13.5198 8.90199 13.0235 9.57305 12.3899" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'lock': svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6667 6H3.33333C2.59695 6 2 6.65122 2 7.45455V12.5455C2 13.3488 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.3488 14 12.5455V7.45455C14 6.65122 13.403 6 12.6667 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6V3.77778C5 3.04107 5.31607 2.33453 5.87868 1.81359C6.44129 1.29266 7.20435 1 8 1C8.79565 1 9.55871 1.29266 10.1213 1.81359C10.6839 2.33453 11 3.04107 11 3.77778V6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/><path d="M8 9.5V11.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'chevron-down-filled': svg`<svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/></svg>`,
  'search': svg`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13953 10.6952C8.65562 10.6952 10.6953 8.65546 10.6953 6.13937C10.6953 3.62328 8.65562 1.58359 6.13953 1.58359C3.62343 1.58359 1.58374 3.62328 1.58374 6.13937C1.58374 8.65546 3.62343 10.6952 6.13953 10.6952Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/><path d="M12.6188 12.4163L9.68286 9.48038" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>`,
  'check': svg`<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.333L3.769 7L10 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'alert-success': svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#12AA67"/><path d="M7 12L10 14.5L15 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'alert-error': svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#FF5D5A"/><path d="M7.5 7.5L14.5 14.5M14.5 7.5L7.5 14.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'alert-warning': svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#F18E0A"/><path d="M11 6V12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="15" r="1.14" fill="white"/></svg>`,
  'alert-info': svg`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" fill="#24CBB7"/><circle cx="11" cy="7" r="1.14" fill="white"/><path d="M11 10.5V16" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'close-small': svg`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L7.5 7.5M7.5 0.5L0.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'resize-handle': svg`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 9.5L9.5 0.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4.3 9.5L9.5 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8.1 9.4L9.6 7.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  'more': svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z" fill="currentColor"/><path d="M4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8Z" fill="currentColor"/><path d="M14.5 8C14.5 8.82843 13.8284 9.5 13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8Z" fill="currentColor"/></svg>`,
  'criteria-minus': svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0.75C12.0302 0.75 15.25 3.96977 15.25 8C15.25 12.0302 12.0302 15.25 8 15.25C3.96977 15.25 0.75 12.0302 0.75 8C0.75 3.96977 3.96977 0.75 8 0.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M11 8H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>`,
  'criteria-plus': svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0.75C12.0302 0.75 15.25 3.96977 15.25 8C15.25 12.0302 12.0302 15.25 8 15.25C3.96977 15.25 0.75 12.0302 0.75 8C0.75 3.96977 3.96977 0.75 8 0.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M8 5V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/><path d="M11 8H5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>`,
  'help-circle': svg`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0.75C12.0041 0.75 15.25 3.99594 15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/><path d="M6 5.33532C6.16131 4.8901 6.47969 4.51467 6.89877 4.27553C7.31784 4.0364 7.81056 3.94898 8.28966 4.02877C8.76875 4.10856 9.2033 4.35041 9.51635 4.71147C9.82939 5.07254 10.0007 5.52952 10 6.00149C10 7.33383 7.94168 8 7.94168 8" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/><circle cx="8" cy="11" r="1" fill="currentColor"/></svg>`,
  'edit': svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path d="M0.733055 7.95984L0.0178966 11.0529C-0.00677392 11.166 -0.00592819 11.2831 0.020372 11.3958C0.0466721 11.5085 0.0977623 11.6139 0.16991 11.7043C0.242058 11.7947 0.333442 11.8678 0.437385 11.9182C0.541327 11.9687 0.655204 11.9952 0.770695 11.9959C0.824509 12.0014 0.878733 12.0014 0.932546 11.9959L4.03784 11.2792L9.5 5.82694L6.17263 2.5L0.733055 7.95984Z" fill="currentColor"/><path d="M11.7591 2.55754L9.43853 0.237004C9.28596 0.0852117 9.07951 0 8.86429 0C8.64908 0 8.44262 0.0852117 8.29006 0.237004L7 1.52706L10.4729 5L11.763 3.70994C11.8385 3.63406 11.8983 3.54404 11.9389 3.44503C11.9796 3.34602 12.0004 3.23996 12 3.13292C11.9996 3.02589 11.9782 2.91997 11.9368 2.82124C11.8955 2.72251 11.8351 2.6329 11.7591 2.55754Z" fill="currentColor"/></g></svg>`,
  'close': svg`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3501 0.75L0.750104 6.34999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0.75 0.75L6.34999 6.34999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

@customElement('ds-icon')
export class DsIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: inherit;
    }
    svg {
      display: block;
    }
  `;

  @property() name: IconName = 'info';
  @property({ type: Number }) size = 0;

  render() {
    const icon = ICONS[this.name];
    if (!icon) return html``;
    if (this.size > 0) {
      return html`<span style="width:${this.size}px;height:${this.size}px;display:inline-flex;align-items:center;justify-content:center;">${icon}</span>`;
    }
    return html`${icon}`;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'ds-icon': DsIcon; }
}
