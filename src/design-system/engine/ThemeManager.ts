import type { Theme, ThemeChangeListener, Unsubscribe } from './types.ts';

/**
 * Manages the lifecycle of design themes: registration, activation,
 * and change notification.
 *
 * Completely headless — no DOM, no React, no CSS side-effects.
 * Consumers decide what to do when the theme changes (inject CSS, re-render, etc.).
 *
 * @example
 * const manager = new ThemeManager();
 *
 * manager.register({ id: 'light', name: 'Light Mode', tokens: lightTokens });
 * manager.register({ id: 'dark',  name: 'Dark Mode',  tokens: darkTokens });
 *
 * const unsub = manager.onThemeChange(theme => console.log('switched to', theme.id));
 * manager.setTheme('dark');
 * unsub(); // stop listening
 */
export class ThemeManager {
  readonly #themes = new Map<string, Theme>();
  #current: Theme | null = null;
  readonly #listeners = new Set<ThemeChangeListener>();

  /**
   * Register a theme. Overwrites any existing theme with the same id.
   * Does not activate the theme.
   */
  register(theme: Theme): void {
    if (!theme.id.trim()) throw new Error('Theme id must be a non-empty string');
    this.#themes.set(theme.id, theme);
  }

  /**
   * Activate a registered theme by id.
   * All listeners are notified synchronously after the switch.
   *
   * @throws {Error} when `id` is not registered.
   */
  setTheme(id: string): void {
    const theme = this.#themes.get(id);
    if (!theme) throw new Error(`Theme "${id}" is not registered. Known themes: ${this.listThemes().join(', ') || '(none)'}`);
    this.#current = theme;
    this.#emit(theme);
  }

  /**
   * Return the currently active theme, or null if none has been set.
   */
  getCurrent(): Theme | null {
    return this.#current;
  }

  /**
   * Return a registered theme by id without activating it,
   * or undefined when the id is unknown.
   */
  getById(id: string): Theme | undefined {
    return this.#themes.get(id);
  }

  /**
   * Return the ids of all registered themes in registration order.
   */
  listThemes(): string[] {
    return [...this.#themes.keys()];
  }

  /**
   * Subscribe to theme changes. The listener fires whenever `setTheme()` is called.
   * Returns an unsubscribe function; call it to stop receiving notifications.
   */
  onThemeChange(listener: ThemeChangeListener): Unsubscribe {
    this.#listeners.add(listener);
    return () => {
      this.#listeners.delete(listener);
    };
  }

  // ── private ─────────────────────────────────────────────────────────────────

  #emit(theme: Theme): void {
    for (const listener of this.#listeners) {
      listener(theme);
    }
  }
}
