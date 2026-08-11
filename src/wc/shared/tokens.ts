import { unsafeCSS } from 'lit';
// Design tokens injected into every component's shadow root via adoptedStyleSheets.
// Lit deduplicates the underlying CSSStyleSheet, so this costs one object regardless
// of how many component instances exist on the page.
import rawTokens from '../../design-system/foundations/design-tokens.css?inline';

export const tokensStyle = unsafeCSS(rawTokens);
