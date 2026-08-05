import { iconMap } from './iconMap';
import type { IconName } from './iconMap';

export type { IconName };

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface IconProps {
  /** Icon to render — must be a registered key in iconMap. */
  name: IconName;

  /**
   * Width and height in pixels. SVG scales proportionally.
   * @default 16
   */
  size?: number;

  /** CSS class applied to the SVG root element. Use for color via currentColor. */
  className?: string;

  /**
   * Accessible name. Turns the icon into a meaningful image (role="img").
   * When omitted and no title is provided, the icon is hidden from AT (decorative).
   */
  'aria-label'?: string;

  /**
   * Same semantics as aria-label — use when you have a human-readable title for the icon.
   * Treated identically to aria-label; applied as aria-label on the SVG element.
   */
  title?: string;

  /**
   * Explicitly override the aria-hidden attribute.
   * Defaults to true for decorative icons (no aria-label/title).
   * Pass false to expose a decorative icon to AT when needed.
   */
  'aria-hidden'?: boolean | 'true' | 'false';
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renders a design-system icon from the central registry.
 *
 * Accessibility
 * ─────────────
 *   Decorative (no aria-label / title):  aria-hidden="true" applied automatically.
 *   Meaningful  (aria-label or title):   role="img" + accessible name applied.
 *
 * Color
 * ─────
 *   Icons use currentColor. Control color with CSS `color` on a parent or via className.
 *
 * Adding icons
 * ────────────
 *   1. Add the SVG file to src/design-system/foundations/icons/ (PascalCase.svg).
 *   2. Import and register it in iconMap.ts.
 *   3. The IconName union updates automatically.
 */
export function Icon({
  name,
  size = 16,
  className,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) {
  const SvgComponent = iconMap[name];

  const accessibleName = ariaLabel ?? title;
  const isMeaningful = Boolean(accessibleName);

  return (
    <SvgComponent
      width={size}
      height={size}
      className={className}
      aria-label={accessibleName}
      aria-hidden={ariaHidden ?? (isMeaningful ? undefined : true)}
      role={isMeaningful ? 'img' : undefined}
    />
  );
}

export default Icon;
