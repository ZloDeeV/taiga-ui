(window.webpackJsonp=window.webpackJsonp||[]).push([[1487],{"Sb+a":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nimport {default as avatarUrl} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\n@Component({\n    selector: 'tui-dropdown-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample2 {\n    open = false;\n\n    avatarUrl = avatarUrl;\n\n    onMouseEnter(): void {\n        this.open = true;\n    }\n\n    onMouseLeave(): void {\n        this.open = false;\n    }\n}\n"}}]);