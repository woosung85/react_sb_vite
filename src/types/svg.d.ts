/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react';

  // named export
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // default export (URL 혹은 컴포넌트, plugin 설정에 따라 달라집니다)
  const src: string;
  export default src;
}
