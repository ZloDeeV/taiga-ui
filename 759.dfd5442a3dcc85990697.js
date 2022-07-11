(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{WqPG:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-files-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample4 {\n    height = 3;\n    readonly control = new FormControl();\n\n    readonly files: readonly TuiFileLike[] = [\n        {\n            name: 'Loaded.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'last_file.txt',\n        },\n    ];\n\n    readonly rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: 'File with an error.txt',\n        },\n    ];\n}\n"}}]);