(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{C2Ti:function(n,t,e){"use strict";e.r(t),t.default='```html\n<ng-template #preview>\n  <tui-preview>\n    <tui-preview-title>{{title}}</tui-preview-title>\n    <tui-preview-pagination\n      [length]="2"\n      [(index)]="index"\n    ></tui-preview-pagination>\n\n    <button\n      tuiIconButton\n      tuiPreviewAction\n      icon="tuiIconTrash"\n      title="Delete"\n      (click)="delete()"\n    ></button>\n    <button\n      tuiIconButton\n      tuiPreviewAction\n      icon="tuiIconDownload"\n      title="Download"\n      (click)="download()"\n    ></button>\n\n    <div\n      polymorpheus-outlet\n      [content]="previewContent"\n    >\n      <ng-template let-src>\n        <img [src]="src" />\n      </ng-template>\n    </div>\n  </tui-preview>\n</ng-template>\n```\n'}}]);