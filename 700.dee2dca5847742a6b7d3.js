(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{TrYg:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-copy-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCopyExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('', Validators.required),\n    });\n}\n"}}]);