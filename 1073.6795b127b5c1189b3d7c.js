(window.webpackJsonp=window.webpackJsonp||[]).push([[1073],{Ow5d:function(e,i,n){"use strict";n.r(i),i.default="```ts\nimport {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class SomeComponent {\n  @ViewChild('preview')\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  constructor(@Inject(TuiPreviewDialogService) private readonly previewDialogService: TuiPreviewDialogService) {}\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n"}}]);