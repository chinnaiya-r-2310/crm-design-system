import { TokenRegistry } from './TokenRegistry.ts';
import { TokenValidator } from './TokenValidator.ts';
import { CssVariableGenerator } from './CssVariableGenerator.ts';
import { ThemeManager } from './ThemeManager.ts';
import { isDtcgToken, isDtcgColorValue, isAliasString } from './types.ts';
import type {
  TokenCollection,
  TokenEngineConfig,
  ResolvedToken,
  ValidationResult,
  CssVariableOptions,
  Theme,
  ThemeChangeListener,
  Unsubscribe,
} from './types.ts';

// ─────────────────────────────────────────────────────────────────────────────
// TokenEngineCore — the implementation class
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The central façade for the design-token engine.
 *
 * Coordinates TokenRegistry, TokenValidator, CssVariableGenerator, and
 * ThemeManager behind a single, stable API surface.
 *
 * Completely headless: no React, no DOM, no CSS files.
 * Safe to use from React components, Storybook loaders, Node.js scripts,
 * or a future CLI.
 *
 * Usage:
 * ```ts
 * import { TokenEngine } from './engine';
 * import colorTokens from './tokens/color.json';
 *
 * TokenEngine.init({
 *   themes: [{ id: 'light', name: 'Light', tokens: colorTokens }],
 *   defaultTheme: 'light',
 *   cssPrefix: 'ds',
 * });
 *
 * TokenEngine.getToken('bg.common.bg');   // → ResolvedToken
 * TokenEngine.exportCssVariables();       // → ':root { --ds-bg-common-bg: #EEF1F9; ... }'
 * TokenEngine.setTheme('dark');
 * ```
 */
export class TokenEngineCore {
  readonly #registry = new TokenRegistry();
  readonly #validator = new TokenValidator();
  readonly #generator = new CssVariableGenerator();
  readonly #themeManager = new ThemeManager();
  #cssPrefix = '';

  // ── Lifecycle ───────────────────────────────────────────────────────────────

  /**
   * Batch-configure the engine.
   * Safe to call multiple times; each call merges with prior state.
   *
   * @param config.themes        - Array of themes to register.
   * @param config.defaultTheme  - ID of the theme to activate immediately.
   *                               Falls back to the first theme in the array.
   * @param config.cssPrefix     - Prefix for generated CSS variable names.
   */
  init(config: TokenEngineConfig = {}): void {
    const { themes = [], defaultTheme, cssPrefix = '' } = config;

    this.#cssPrefix = cssPrefix;

    for (const theme of themes) {
      this.#themeManager.register(theme);
      this.#registry.register(theme.id, theme.tokens);
    }

    const activateId = defaultTheme ?? themes[0]?.id;
    if (activateId) {
      this.#themeManager.setTheme(activateId);
    }
  }

  // ── Collection management ───────────────────────────────────────────────────

  /**
   * Register a raw token collection without wrapping it in a theme.
   * Useful for non-theme collections such as spacing or typography.
   */
  registerCollection(name: string, tokens: TokenCollection): void {
    this.#registry.register(name, tokens);
  }

  /**
   * Register a new theme and make its tokens available in the registry.
   * Does not activate the theme.
   */
  registerTheme(theme: Theme): void {
    this.#themeManager.register(theme);
    this.#registry.register(theme.id, theme.tokens);
  }

  // ── Token access ────────────────────────────────────────────────────────────

  /**
   * Resolve a token from the currently active theme by dot-notation path.
   * Returns `undefined` when:
   * - no theme is active
   * - the path does not exist
   * - the node at the path is not a DTCG leaf token
   *
   * @example
   * engine.getToken('bg.common.bg')
   * // → { path: 'bg.common.bg', type: 'color', value: '#EEF1F9', isAlias: false }
   *
   * engine.getToken('icon.primary.linkBlue')
   * // → { path: '...', type: 'color', value: '{text.link}', isAlias: true }
   */
  getToken(path: string): ResolvedToken | undefined {
    const theme = this.#themeManager.getCurrent();
    if (!theme) return undefined;
    return this.#resolveByPath(theme.tokens, path);
  }

  /**
   * Resolve a token from any registered collection by name + dot-path.
   * Useful for non-theme collections.
   */
  getTokenFrom(collectionName: string, path: string): ResolvedToken | undefined {
    const collection = this.#registry.get(collectionName);
    if (!collection) return undefined;
    return this.#resolveByPath(collection, path);
  }

  // ── Theme management ────────────────────────────────────────────────────────

  /**
   * Activate a registered theme. Triggers all ThemeChangeListeners.
   * @throws {Error} when the theme id is not registered.
   */
  setTheme(id: string): void {
    this.#themeManager.setTheme(id);
  }

  /** Return the currently active theme, or null. */
  getTheme(): Theme | null {
    return this.#themeManager.getCurrent();
  }

  /** Return the names of all registered themes. */
  listThemes(): string[] {
    return this.#themeManager.listThemes();
  }

  /**
   * Subscribe to theme-switch events. Returns an unsubscribe function.
   *
   * @example
   * const off = engine.onThemeChange(theme => injectCss(theme.tokens));
   * // later:
   * off();
   */
  onThemeChange(listener: ThemeChangeListener): Unsubscribe {
    return this.#themeManager.onThemeChange(listener);
  }

  // ── Validation ──────────────────────────────────────────────────────────────

  /**
   * Validate a token collection.
   * When no `collectionName` is given, validates the active theme's tokens.
   * Returns a structured ValidationResult (never throws).
   */
  validate(collectionName?: string): ValidationResult {
    const name = collectionName ?? this.#themeManager.getCurrent()?.id;

    if (!name) {
      return this.#emptyResult('No collection specified and no active theme');
    }

    const collection = this.#registry.get(name);
    if (!collection) {
      return this.#emptyResult(`Collection "${name}" is not registered`);
    }

    return this.#validator.validate(collection, name);
  }

  // ── CSS export ──────────────────────────────────────────────────────────────

  /**
   * Generate a CSS custom-properties block from the active theme's tokens.
   * Returns an empty string when no theme is active.
   *
   * @example
   * engine.exportCssVariables({ prefix: 'ds', selector: '[data-theme="light"]' })
   * // → '[data-theme="light"] {\n  --ds-bg-common-bg: #EEF1F9;\n  ...\n}'
   */
  exportCssVariables(options?: CssVariableOptions): string {
    const theme = this.#themeManager.getCurrent();
    if (!theme) return '';
    return this.#generator.generate(theme.tokens, {
      prefix: this.#cssPrefix,
      ...options,
    });
  }

  /**
   * Generate a CSS block from any registered collection by name.
   * @throws {Error} when the collection is not found.
   */
  exportCollectionAsCss(collectionName: string, options?: CssVariableOptions): string {
    const collection = this.#registry.get(collectionName);
    if (!collection) {
      throw new Error(`Collection "${collectionName}" is not registered. Known: ${this.#registry.list().join(', ')}`);
    }
    return this.#generator.generate(collection, {
      prefix: this.#cssPrefix,
      ...options,
    });
  }

  /**
   * Generate a flat Map of CSS variable entries from the active theme.
   * Useful for programmatic injection via `element.style.setProperty`.
   *
   * @example
   * for (const [name, value] of engine.exportCssVariableMap()) {
   *   document.documentElement.style.setProperty(name, value);
   * }
   */
  exportCssVariableMap(options?: CssVariableOptions): Map<string, string> {
    const theme = this.#themeManager.getCurrent();
    if (!theme) return new Map();
    return this.#generator.generateMap(theme.tokens, {
      prefix: this.#cssPrefix,
      ...options,
    });
  }

  // ── Escape hatches ──────────────────────────────────────────────────────────

  /**
   * Direct access to the underlying registry.
   * Use when the top-level API does not cover your use case.
   */
  get registry(): TokenRegistry {
    return this.#registry;
  }

  /**
   * Direct access to the underlying theme manager.
   */
  get themeManager(): ThemeManager {
    return this.#themeManager;
  }

  // ── Private helpers ─────────────────────────────────────────────────────────

  #resolveByPath(collection: TokenCollection, path: string): ResolvedToken | undefined {
    const parts = path.split('.');
    let node: unknown = collection;

    for (const part of parts) {
      if (typeof node !== 'object' || node === null) return undefined;
      node = (node as Record<string, unknown>)[part];
    }

    if (!isDtcgToken(node)) return undefined;

    const { value, isAlias } = this.#extractValue(node.$value);
    return { path, type: node.$type, value, isAlias };
  }

  #extractValue(raw: unknown): { value: string; isAlias: boolean } {
    if (isAliasString(raw)) {
      return { value: raw, isAlias: true };
    }
    if (isDtcgColorValue(raw)) {
      if (raw.alpha < 1) {
        const h = raw.hex.replace('#', '');
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return { value: `rgba(${r}, ${g}, ${b}, ${parseFloat(raw.alpha.toFixed(4))})`, isAlias: false };
      }
      return { value: raw.hex, isAlias: false };
    }
    if (typeof raw === 'string' || typeof raw === 'number') {
      return { value: String(raw), isAlias: false };
    }
    return { value: '', isAlias: false };
  }

  #emptyResult(message: string): ValidationResult {
    return {
      isValid: false,
      errors: [{ path: '', message, severity: 'error' }],
      warnings: [],
      issueCount: 1,
    };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Default singleton — covers the most common single-theme use case.
// Import and use directly; create a new TokenEngineCore() for multi-instance
// scenarios (testing, server-side per-request isolation, etc.).
// ─────────────────────────────────────────────────────────────────────────────
export const TokenEngine = new TokenEngineCore();
