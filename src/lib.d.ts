// Type shims used only during `tsc -p tsconfig.lib.json` declaration generation.
// Vite handles these at runtime; tsc needs explicit declarations when run standalone.

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.css' {
  // plain CSS — side-effect import only
}
