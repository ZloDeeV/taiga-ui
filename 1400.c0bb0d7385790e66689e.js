(window.webpackJsonp=window.webpackJsonp||[]).push([[1400],{"7WFn":function(n,e,t){"use strict";t.r(e),e.default='<tui-tree\n    *ngFor="let item of data.children"\n    [tuiTreeController]="true"\n    [value]="item"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n'}}]);