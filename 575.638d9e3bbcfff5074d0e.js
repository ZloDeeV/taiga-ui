(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{"/Qa1":function(n,t,e){"use strict";e.r(t),t.default='<p>\n    Your balance:\n    <tui-money [value]="money"></tui-money>\n</p>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="showDialog(template)"\n>\n    Show\n</button>\n\n<ng-template\n    #template\n    let-observer\n>\n    <p i18n>You can show a dialog with template</p>\n    <p>\n        Your balance:\n        <tui-money [value]="money"></tui-money>\n    </p>\n    <button\n        tuiButton\n        type="button"\n        size="m"\n        class="tui-space_right-3"\n        (click)="withdraw()"\n    >\n        Withdraw&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n    <button\n        tuiButton\n        type="button"\n        size="m"\n        (click)="observer.complete()"\n    >\n        Cancel\n    </button>\n</ng-template>\n'}}]);