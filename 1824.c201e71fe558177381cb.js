(window.webpackJsonp=window.webpackJsonp||[]).push([[1824],{"513U":function(t,e,n){"use strict";n.r(e),e.default='\'{{ paymentSystem }}\' = getPaymentSystem(cardNumber);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select\n            formControlName="cardNumber"\n            class="tui-space_top-2"\n        >\n            Choose card number\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n'}}]);