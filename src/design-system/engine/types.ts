// ─────────────────────────────────────────────────────────────────────────────
// Primitive token value types
// ─────────────────────────────────────────────────────────────────────────────

/**
 * A DTCG color value object as produced by Figma's token export.
 * The `hex` field always stores the base 6-digit hex; `alpha` is separate.
 */
export interface DtcgColorValue {
  readonly colorSpace: string;
  readonly components: readonly number[];
  readonly alpha: number;
  readonly hex: string;
}

/** Every scalar type a DTCG $value may hold */
export type DtcgRawValue = string | number | boolean | DtcgColorValue;

// ─────────────────────────────────────────────────────────────────────────────
// Token tree nodes
// ─────────────────────────────────────────────────────────────────────────────

/**
 * A W3C DTCG leaf token.
 * Distinguished from group nodes by the presence of `$type` + `$value`.
 */
export interface DtcgToken {
  readonly $type: string;
  readonly $value: DtcgRawValue;
  readonly $extensions?: Readonly<Record<string, unknown>>;
}

/**
 * Raw token collection as loaded from JSON.
 * Intentionally loose (`Record<string, unknown>`) to be compatible with
 * `import json from './color.json'` and JSON.parse() without casting.
 */
export type TokenCollection = Record<string, unknown>;

// ─────────────────────────────────────────────────────────────────────────────
// Resolved (consumption-ready) token
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The shape returned by `TokenEngine.getToken()`.
 * `value` is always a CSS-usable string (hex, rgba, number as string, or
 * the original alias reference when `isAlias` is true).
 */
export interface ResolvedToken {
  /** Full dot-path, e.g. "bg.common.bg" */
  readonly path: string;
  /** DTCG $type string, e.g. "color" or "number" */
  readonly type: string;
  /** CSS-usable value string */
  readonly value: string;
  /** True when the original $value was a {path.ref} alias */
  readonly isAlias: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────

export interface ValidationIssue {
  readonly path: string;
  readonly message: string;
  readonly severity: 'error' | 'warning';
}

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly ValidationIssue[];
  readonly warnings: readonly ValidationIssue[];
  /** Convenience: errors.length + warnings.length */
  readonly issueCount: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS variable generation
// ─────────────────────────────────────────────────────────────────────────────

export interface CssVariableOptions {
  /**
   * String prepended to every variable name.
   * "ds" → `--ds-bg-primary` (default: no prefix → `--bg-primary`)
   */
  prefix?: string;
  /** CSS selector wrapping the block (default: ":root") */
  selector?: string;
  /** Strip all whitespace (default: false) */
  minify?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Themes
// ─────────────────────────────────────────────────────────────────────────────

export interface Theme {
  readonly id: string;
  readonly name: string;
  readonly tokens: TokenCollection;
}

export type ThemeChangeListener = (theme: Readonly<Theme>) => void;

/** Function returned by `onThemeChange()` to remove the listener */
export type Unsubscribe = () => void;

// ─────────────────────────────────────────────────────────────────────────────
// Engine configuration
// ─────────────────────────────────────────────────────────────────────────────

export interface TokenEngineConfig {
  /** Themes to register on init. First theme becomes default if `defaultTheme` is omitted. */
  themes?: readonly Theme[];
  /** ID of the theme to activate immediately */
  defaultTheme?: string;
  /** CSS variable prefix applied by exportCssVariables() */
  cssPrefix?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Runtime type guards (exported as functions, not types, so they tree-shake)
// ─────────────────────────────────────────────────────────────────────────────

/** Returns true when `value` is a DTCG leaf token (has $type + $value). */
export function isDtcgToken(value: unknown): value is DtcgToken {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.$type === 'string' && '$value' in obj;
}

/** Returns true when `value` is a Figma-style DTCG color object. */
export function isDtcgColorValue(value: unknown): value is DtcgColorValue {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.hex === 'string' && typeof obj.alpha === 'number';
}

/**
 * Returns true when `value` is a DTCG alias string: `{some.token.path}`.
 * Note: does NOT validate the reference target exists.
 */
export function isAliasString(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.length > 2 &&
    value.charCodeAt(0) === 123 && // '{'
    value.charCodeAt(value.length - 1) === 125 // '}'
  );
}
