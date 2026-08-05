// ── Classes (values + types) ──────────────────────────────────────────────────
export { TokenEngine, TokenEngineCore } from './TokenEngine.ts';
export { TokenRegistry } from './TokenRegistry.ts';
export { TokenValidator } from './TokenValidator.ts';
export { CssVariableGenerator } from './CssVariableGenerator.ts';
export { ThemeManager } from './ThemeManager.ts';

// ── Type-only exports ─────────────────────────────────────────────────────────
export type {
  // Token shapes
  DtcgColorValue,
  DtcgRawValue,
  DtcgToken,
  TokenCollection,
  // Resolved output
  ResolvedToken,
  // Validation
  ValidationIssue,
  ValidationResult,
  // CSS generation
  CssVariableOptions,
  // Themes
  Theme,
  ThemeChangeListener,
  Unsubscribe,
  // Engine config
  TokenEngineConfig,
} from './types.ts';

// ── Runtime type guards ───────────────────────────────────────────────────────
export { isDtcgToken, isDtcgColorValue, isAliasString } from './types.ts';
