(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{SHSi:function(t,n,e){"use strict";e.r(n),n.default='<tui-multi-select\n    #component\n    class="b-form"\n    [editable]="false"\n    [expandable]="false"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            tuiMultiSelectGroup\n            label="Jedi"\n        >\n            <button\n                *ngFor="let item of jedi"\n                tuiOption\n                [value]="item"\n            >\n                {{item}}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label="Sith">\n            \x3c!-- passing component to tuiHideSelected is not needed in Ivy --\x3e\n            <button\n                *ngFor="let item of sith | tuiHideSelected : component"\n                tuiOption\n                [value]="item"\n            >\n                {{item}}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n'}}]);