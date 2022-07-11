(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{"3aDH":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrency} from '@taiga-ui/addon-commerce';\n\nimport {MyAccount} from './account/my-account.component';\n\n@Component({\n    selector: 'tui-select-example-9',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample9 {\n    readonly accounts: MyAccount[] = [\n        {\n            name: 'Dollar deposit',\n            amount: 237000,\n            currency: TuiCurrency.Dollar,\n            paymentSystem: 'tuiIconVisa',\n        },\n        {\n            name: 'Pound deposit',\n            amount: 100,\n            currency: TuiCurrency.Pound,\n            paymentSystem: 'tuiIconMastercard',\n        },\n        {\n            name: 'Rouble deposit',\n            amount: 1234567890,\n            currency: TuiCurrency.Ruble,\n            paymentSystem: 'tuiIconMir',\n        },\n    ];\n\n    account = new FormControl(this.accounts[0]);\n}\n"}}]);