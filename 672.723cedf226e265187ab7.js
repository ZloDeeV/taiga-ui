(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{"dS/Y":function(n,t,o){"use strict";o.r(t),t.default='<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="dropdown"\n    [(open)]="open"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance="flat"\n        [iconRight]="icon"\n    >\n        Button\n    </button>\n</tui-hosted-dropdown>\n<ng-template #icon>\n    <tui-svg\n        src="tuiIconChevronDown"\n        class="icon"\n        [class.icon_rotated]="open"\n    ></tui-svg>\n</ng-template>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button\n            *ngFor="let item of items"\n            tuiOption\n            (click)="onClick()"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n</ng-template>\n'}}]);