(window.webpackJsonp=window.webpackJsonp||[]).push([[704],{LARv:function(n,t,e){"use strict";e.r(t),t.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <label\n        tuiLabel\n        i18n-label\n        label="Step is 1 by default"\n    >\n        <tui-input-count\n            formControlName="testValue1"\n            [min]="1"\n            [max]="200"\n        >\n            Count something\n            <input\n                tuiTextfield\n                placeholder="1.. 2.. 3.."\n            />\n        </tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Step is 100"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue2"\n            [tuiTextfieldLabelOutside]="true"\n            [step]="100"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Also works with negative values"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue3"\n            [tuiTextfieldLabelOutside]="true"\n            [min]="-100"\n            [max]="100"\n        ></tui-input-count>\n    </label>\n</form>\n'}}]);