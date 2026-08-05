import type { TokenCollection, CssVariableOptions } from './types.ts';
import { isDtcgToken, isDtcgColorValue, isAliasString } from './types.ts';

/**
 * Converts a nested token collection into a CSS custom-properties block.
 *
 * Input (nested DTCG):
 * ```json
 * { "bg": { "primary": { "$type": "color", "$value": { "hex": "#FFFFFF", "alpha": 1 } } } }
 * ```
 *
 * Output (with prefix "ds"):
 * ```css
 * :root {
 *   --ds-bg-primary: #FFFFFF;
 * }
 * ```
 *
 * Also handles:
 * - **Aliases** `{text.link}` → `var(--{prefix}-text-link)`
 * - **Alpha < 1** → `rgba(r, g, b, a)`
 * - **camelCase keys** → kebab-cased variable names
 * - **Number tokens** → emitted as plain numbers (unitless)
 * - **Unlimited nesting** (recursive)
 * - `$`-prefixed DTCG meta-keys are ignored at group level
 */
export class CssVariableGenerator {
  /**
   * Generate a complete CSS block string.
   *
   * @example
   * generator.generate(tokens, { prefix: 'ds', selector: '[data-theme="light"]' })
   */
  generate(tokens: TokenCollection, options: CssVariableOptions = {}): string {
    const { selector = ':root', minify = false } = options;
    const map = this.generateMap(tokens, options);

    if (map.size === 0) return '';

    if (minify) {
      const body = [...map.entries()].map(([k, v]) => `${k}:${v};`).join('');
      return `${selector}{${body}}`;
    }

    const lines = [...map.entries()].map(([k, v]) => `  ${k}: ${v};`).join('\n');
    return `${selector} {\n${lines}\n}`;
  }

  /**
   * Generate a flat Map of `--variable-name → value` pairs.
   * Useful when you need to inject variables programmatically
   * (e.g. via `element.style.setProperty`).
   */
  generateMap(tokens: TokenCollection, options: CssVariableOptions = {}): Map<string, string> {
    const map = new Map<string, string>();
    this.#walk(tokens, [], map, options.prefix ?? '');
    return map;
  }

  // ── private ─────────────────────────────────────────────────────────────────

  #walk(
    node: unknown,
    parts: string[],
    map: Map<string, string>,
    prefix: string,
  ): void {
    if (isDtcgToken(node)) {
      const cssValue = this.#resolveCssValue(node.$value, prefix);
      if (cssValue !== null) {
        map.set(this.#varName(parts, prefix), cssValue);
      }
      return;
    }

    if (typeof node !== 'object' || node === null) return;

    for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
      if (key.startsWith('$')) continue;
      this.#walk(child, [...parts, key], map, prefix);
    }
  }

  #resolveCssValue(value: unknown, prefix: string): string | null {
    // Alias reference → convert to CSS var()
    if (isAliasString(value)) {
      return this.#aliasToVar(value, prefix);
    }

    // Figma DTCG color object
    if (isDtcgColorValue(value)) {
      return value.alpha < 1
        ? this.#hexAlphaToRgba(value.hex, value.alpha)
        : value.hex;
    }

    // Plain string (e.g. legacy "#hex" or dimension "16px")
    if (typeof value === 'string') return value;

    // Number (opacity, spacing scale values, etc.)
    if (typeof value === 'number') return String(value);

    return null; // booleans, objects, null → skip
  }

  /** `{bg.primary}` with prefix "ds" → `var(--ds-bg-primary)` */
  #aliasToVar(alias: string, prefix: string): string {
    const inner = alias.slice(1, -1); // strip { }
    const parts = inner.split('.');
    return `var(${this.#varName(parts, prefix)})`;
  }

  /** Build `--{prefix}-bg-primary` or `--bg-primary` when no prefix. */
  #varName(parts: string[], prefix: string): string {
    const kebab = parts.map(this.#toKebab).join('-');
    return prefix ? `--${prefix}-${kebab}` : `--${kebab}`;
  }

  /**
   * camelCase or PascalCase → kebab-case.
   * "primaryBtn" → "primary-btn", "BGColor" → "bg-color"
   */
  #toKebab(segment: string): string {
    return segment
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase();
  }

  /** `#RRGGBB` + alpha `0.15` → `rgba(r, g, b, 0.15)` */
  #hexAlphaToRgba(hex: string, alpha: number): string {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const a = parseFloat(alpha.toFixed(4));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}
