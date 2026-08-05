/// <reference types="vite-plugin-svgr/client" />

// Explicit declaration for the ?react query pattern used by vite-plugin-svgr v4+
declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
