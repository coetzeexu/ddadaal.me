// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void;

interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.svg" {
  const module: any;
  export = module;
}

declare module "*.png" {
  const module: any;
  export = module;
}

declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
