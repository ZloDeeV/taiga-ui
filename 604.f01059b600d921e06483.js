(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{uq5f:function(n,o,t){"use strict";t.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\n\nexport async function importStarterKit(): Promise<unknown> {\n    return (await import('@tiptap/starter-kit')).default;\n}\n\nexport async function importEmojiExtension(): Promise<unknown> {\n    return (await import('./smiles-tool/emoji.extension')).EmojiExtension;\n}\n\n@Component({\n    selector: 'tui-editor-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [importStarterKit(), importEmojiExtension()],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample2 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl('', Validators.required);\n}\n"}}]);