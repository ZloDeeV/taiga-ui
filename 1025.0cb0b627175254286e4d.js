(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{HVis:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-multi-select-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample6 {\n    readonly items: readonly string[] = [\n        '\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646',\n        '\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632',\n        '\u062a\u0631\u06cc \u06af\u06cc\u0644\u06cc\u0627\u0645',\n        '\u0627\u0631\u06cc\u06a9 \u0622\u06cc\u062f\u0644',\n        '\u062a\u0631\u06cc \u062c\u0648\u0646\u0632',\n        '\u0645\u0627\u06cc\u06a9\u0644 \u067e\u06cc\u0644\u06cc\u0646',\n    ];\n\n    value: readonly string[] = [this.items[0]];\n}\n"}}]);