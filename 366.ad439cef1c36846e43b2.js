(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{dzzX:function(n,e,t){"use strict";t.r(e),e.default='<tui-pie-chart\n    [value]="value"\n    [hintContent]="content"\n></tui-pie-chart>\n\n<ng-template\n    #content\n    let-index\n>\n    <tui-money\n        [singleColor]="true"\n        [value]="value[index]"\n    ></tui-money>\n    <div>{{ labels[index] }}</div>\n</ng-template>\n'}}]);