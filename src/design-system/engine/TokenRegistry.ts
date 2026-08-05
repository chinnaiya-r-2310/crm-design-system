import type { TokenCollection } from './types.ts';

/**
 * Stores named token collections and provides typed access.
 *
 * Intentionally minimal: no transformation, no validation.
 * All policy lives in other engine modules.
 *
 * @example
 * const registry = new TokenRegistry();
 * registry.register('colors', colorsJson);
 * registry.register('spacing', spacingJson);
 *
 * registry.get('colors');   // → TokenCollection
 * registry.list();          // → ['colors', 'spacing']
 * registry.has('colors');   // → true
 */
export class TokenRegistry {
  readonly #store = new Map<string, TokenCollection>();

  /**
   * Register a token collection under a unique name.
   * Overwrites any existing collection with the same name.
   */
  register(name: string, tokens: TokenCollection): void {
    if (!name.trim()) throw new Error('Collection name must be a non-empty string');
    this.#store.set(name, tokens);
  }

  /** Return the collection registered under `name`, or undefined. */
  get(name: string): TokenCollection | undefined {
    return this.#store.get(name);
  }

  /** Return true when a collection with `name` is registered. */
  has(name: string): boolean {
    return this.#store.has(name);
  }

  /**
   * Remove a registered collection.
   * Returns true when the collection existed and was removed.
   */
  unregister(name: string): boolean {
    return this.#store.delete(name);
  }

  /** Return the names of all registered collections in insertion order. */
  list(): string[] {
    return [...this.#store.keys()];
  }

  /** Number of registered collections. */
  get size(): number {
    return this.#store.size;
  }

  /** Remove all registered collections. */
  clear(): void {
    this.#store.clear();
  }
}
