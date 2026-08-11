import { iconMap } from './iconMap';

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
}) {
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
