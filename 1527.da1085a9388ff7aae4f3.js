(window.webpackJsonp=window.webpackJsonp||[]).push([[1527],{NlSc:function(t,n,e){"use strict";e.r(n),n.default='```html\n<ng-container *tuiLet="someStream | async as streamValue">\n  <p>\n    {{streamValue}}\n    <tui-tooltip [content]="template"></tui-tooltip>\n  </p>\n  <button\n    tuiButton\n    type="button"\n  >\n    Delete {{streamValue}}\n  </button>\n  <ng-template #template>{{streamValue}} is a current value of a someStream</ng-template>\n</ng-container>\n```\n'}}]);