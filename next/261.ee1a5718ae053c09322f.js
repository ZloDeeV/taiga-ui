(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{iWWp:function(n,i,s){"use strict";s.r(i),i.default='<button\n    tuiButton\n    appearance="outline"\n    size="xs"\n    class="switch"\n    (click)="isOpen = !isOpen"\n>\n    {{isOpen ? \'ON\' : \'OFF\'}}\n</button>\n\n<div\n    *ngIf="isOpen"\n    class="plasma"\n    [@tuiWidthCollapse]="getAnimation(speed)"\n></div>\n'}}]);