(window.webpackJsonp=window.webpackJsonp||[]).push([[1796],{"9jYo":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {capitalize} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('roman sEdOv'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n"}}]);