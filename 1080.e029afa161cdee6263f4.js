(window.webpackJsonp=window.webpackJsonp||[]).push([[1080],{"a/UK":function(e,i,n){"use strict";n.r(i),i.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-preview-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample2 {\n    @ViewChild('preview')\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    constructor(\n        @Inject(TuiPreviewDialogService)\n        private readonly previewDialogService: TuiPreviewDialogService,\n    ) {}\n\n    show(): void {\n        this.previewDialogService.open(this.preview || '').subscribe();\n    }\n}\n"}}]);