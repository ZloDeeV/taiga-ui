(window.webpackJsonp=window.webpackJsonp||[]).push([[1333],{JqES:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiTagOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-tag-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiTagOptionsProvider({\n            size: 'l',\n            status: 'success',\n        }),\n    ],\n})\nexport class TuiTagExample5 {\n    tag = 'Hello';\n}\n"}}]);