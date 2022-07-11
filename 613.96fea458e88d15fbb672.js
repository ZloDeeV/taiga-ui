(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{sXWw:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n    selector: 'image-preview-example',\n    templateUrl: './image-preview.template.html',\n    styleUrls: ['./image-preview.style.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class ImagePreviewExampleComponent {\n    @ViewChild('previewImages')\n    template?: TemplateRef<TuiDialogContext>;\n\n    image?: HTMLImageElement;\n\n    constructor(\n        @Inject(TuiPreviewDialogService)\n        private readonly dialogService: TuiPreviewDialogService,\n    ) {}\n\n    showImage(image: HTMLImageElement): void {\n        this.image = image;\n        this.dialogService.open(this.template || '').subscribe();\n    }\n}\n"}}]);