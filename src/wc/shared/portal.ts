import { html, render, TemplateResult } from 'lit';

// Mounts a Lit template into document.body and returns a cleanup function.
// Used by Dropdown, Tooltip, Modal, DatePicker, Tags, UserPicker.
export function mountPortal(
  template: TemplateResult,
  container: HTMLDivElement | null,
): HTMLDivElement {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  render(template, container);
  return container;
}

export function unmountPortal(container: HTMLDivElement | null) {
  if (container && document.body.contains(container)) {
    document.body.removeChild(container);
  }
}

// Computes fixed position for a portal panel relative to a trigger element.
export function panelPosition(
  trigger: HTMLElement,
  panelWidth: number,
  panelHeight = 0,
): { top: number; left: number; width: number; maxWidth: number } {
  const r = trigger.getBoundingClientRect();
  const spaceBelow = window.innerHeight - r.bottom;
  const spaceAbove = r.top;
  const top = spaceBelow >= panelHeight || spaceBelow >= spaceAbove
    ? r.bottom + 2
    : r.top - panelHeight - 2;
  return {
    top: top + window.scrollY,
    left: r.left + window.scrollX,
    width: r.width,
    maxWidth: 390,
  };
}
