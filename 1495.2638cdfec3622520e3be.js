(window.webpackJsonp=window.webpackJsonp||[]).push([[1495],{"0Inj":function(n,a,o){"use strict";o.r(a),a.default="```ts\nimport {clamp} from '@taiga-ui/cdk';\n\nexport class MyComponent {\n  scale = 1;\n\n  // ...\n\n  onElastic(scale: number) {\n    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%\n  }\n}\n```\n"}}]);