(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{LFCo:function(n,i,t){"use strict";t.r(i),i.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-chart-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineChartExample5 {\n    readonly values: TuiPoint[][] = [\n        [\n            [50, 50],\n            [100, 75],\n            [150, 50],\n            [200, 150],\n            [250, 155],\n            [300, 190],\n            [350, 90],\n        ],\n        [\n            [50, 40],\n            [100, 60],\n            [150, 90],\n            [200, 120],\n            [250, 150],\n            [300, 110],\n            [350, 130],\n        ],\n        [\n            [50, 30],\n            [100, 90],\n            [150, 80],\n            [200, 50],\n            [250, 130],\n            [300, 190],\n            [350, 150],\n        ],\n    ];\n\n    readonly hint: TuiStringHandler<TuiContextWithImplicit<readonly TuiPoint[]>> = ({\n        $implicit,\n    }) => `${$implicit[0][0]} items:\\n\\n${$implicit.map(([_, y]) => y).join('$\\n')}$`;\n}\n"}}]);