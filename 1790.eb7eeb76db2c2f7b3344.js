(window.webpackJsonp=window.webpackJsonp||[]).push([[1790],{F7su:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {px} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n"}}]);