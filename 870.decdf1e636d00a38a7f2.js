(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{"6HS9":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-tag-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(['I', 'love', 'Angular']),\n    });\n}\n"}}]);