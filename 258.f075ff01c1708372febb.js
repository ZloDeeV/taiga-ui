(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{wsdx:function(n,i,e){"use strict";e.r(i),i.default='<button\n    tuiButton\n    appearance="outline"\n    class="button"\n    (click)="isOpen = !isOpen"\n>\n    {{ isOpen ? \'Hide me\' : \'Show opening crawl\' }}\n</button>\n\n<div\n    *ngIf="isOpen"\n    class="container"\n    [@tuiHeightCollapse]="getAnimation(speed)"\n>\n    A long time ago in a galaxy far, far away....\n</div>\n'}}]);