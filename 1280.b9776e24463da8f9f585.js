(window.webpackJsonp=window.webpackJsonp||[]).push([[1280],{"2WZt":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-slider-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample3 {\n    readonly labels: number[] = [0, 250, 500, 750, 1000];\n    readonly formControl = new FormControl(250);\n}\n"}}]);