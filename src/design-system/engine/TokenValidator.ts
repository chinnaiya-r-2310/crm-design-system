import type { TokenCollection, ValidationIssue, ValidationResult } from './types.ts';
import { isDtcgToken, isDtcgColorValue, isAliasString } from './types.ts';

// Six-digit or three-digit or eight-digit hex (case-insensitive)
const HEX_PATTERN = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

// Alias must be {dot.separated.path} with alphanumeric, dash, underscore segments
const ALIAS_PATTERN = /^\{[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\}$/;

const KNOWN_TYPES = new Set([
  'color', 'number', 'string', 'boolean',
  'dimension', 'fontFamily', 'fontWeight', 'fontSize',
  'letterSpacing', 'lineHeight', 'paragraphSpacing',
  'shadow', 'gradient', 'typography', 'transition',
  'duration', 'cubicBezier', 'opacity',
]);

/**
 * Validates the structure and values of a TokenCollection.
 *
 * Walks the token tree recursively; DTCG tokens (`$type` + `$value`)
 * are treated as leaves and checked for:
 * - null / undefined values
 * - empty string values
 * - malformed alias references
 * - invalid hex colors
 * - alpha values outside [0, 1]
 * - type/value mismatches
 * - unrecognised token types (warning, not error)
 *
 * Duplicate keys in parsed JSON are not detectable at runtime (the JS
 * parser silently overwrites them), so this check is intentionally absent.
 */
export class TokenValidator {
  /**
   * Validate `collection` and return a structured result.
   *
   * @param collection  - The raw token collection to validate.
   * @param label       - Human-readable name shown in error paths (default: "collection").
   */
  validate(collection: TokenCollection, label = 'collection'): ValidationResult {
    const errors: ValidationIssue[] = [];
    const warnings: ValidationIssue[] = [];

    this.#walk(collection, [label], errors, warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      issueCount: errors.length + warnings.length,
    };
  }

  // ── private ─────────────────────────────────────────────────────────────────

  #walk(
    node: unknown,
    path: string[],
    errors: ValidationIssue[],
    warnings: ValidationIssue[],
  ): void {
    // Leaf: DTCG token
    if (isDtcgToken(node)) {
      this.#checkToken(node.$type, node.$value, path, errors, warnings);
      return;
    }

    // Invalid node type (e.g. an array or raw scalar in a group position)
    if (typeof node !== 'object' || node === null) {
      errors.push(this.#issue(path, `Expected an object or DTCG token, got ${node === null ? 'null' : typeof node}`, 'error'));
      return;
    }

    // Group: recurse into non-$ keys
    for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
      if (key.startsWith('$')) continue;
      this.#walk(child, [...path, key], errors, warnings);
    }
  }

  #checkToken(
    type: string,
    value: unknown,
    path: string[],
    errors: ValidationIssue[],
    warnings: ValidationIssue[],
  ): void {
    // Unknown type → warning only; not an error (forward-compat)
    if (!KNOWN_TYPES.has(type)) {
      warnings.push(this.#issue(path, `Unrecognised token type "${type}"`, 'warning'));
    }

    // Missing value
    if (value === null || value === undefined) {
      errors.push(this.#issue(path, '$value is null or undefined', 'error'));
      return;
    }

    // Empty string
    if (value === '') {
      warnings.push(this.#issue(path, '$value is an empty string', 'warning'));
      return;
    }

    // Alias reference: validate format only (resolution is the engine's job)
    if (isAliasString(value)) {
      if (!ALIAS_PATTERN.test(value)) {
        errors.push(this.#issue(path, `Malformed alias reference: "${value}"`, 'error'));
      }
      return;
    }

    // Color-specific checks
    if (type === 'color') {
      if (isDtcgColorValue(value)) {
        if (!HEX_PATTERN.test(value.hex)) {
          errors.push(this.#issue(path, `Invalid hex in color value: "${value.hex}"`, 'error'));
        }
        if (value.alpha < 0 || value.alpha > 1) {
          errors.push(this.#issue(path, `Alpha ${value.alpha} is out of range [0, 1]`, 'error'));
        }
        if (!Array.isArray(value.components) || value.components.length < 3) {
          warnings.push(this.#issue(path, 'Color components array is missing or too short', 'warning'));
        }
      } else if (typeof value === 'string') {
        if (!HEX_PATTERN.test(value)) {
          errors.push(this.#issue(path, `Invalid hex color string: "${value}"`, 'error'));
        }
      } else {
        errors.push(this.#issue(path, `Unexpected $value type for color token: "${typeof value}"`, 'error'));
      }
      return;
    }

    // Number-type check
    if (type === 'number' && typeof value !== 'number') {
      errors.push(this.#issue(path, `Number token has non-numeric $value: "${typeof value}"`, 'error'));
    }
  }

  #issue(
    path: string[],
    message: string,
    severity: 'error' | 'warning',
  ): ValidationIssue {
    return { path: path.join('.'), message, severity };
  }
}
