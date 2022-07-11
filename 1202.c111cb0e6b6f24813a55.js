(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{nyUp:function(n,e,l){"use strict";l.r(e),e.default="import {Component, ElementRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiScrollbarComponent} from '@taiga-ui/core';\n\nconst SOME_OFFSET_CONST = 20;\n\n@Component({\n    selector: 'tui-scrollbar-example-3',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample3Component {\n    @ViewChild(TuiScrollbarComponent, {read: ElementRef})\n    private readonly scrollBar?: ElementRef<HTMLElement>;\n\n    SOME_OFFSET_CONST = SOME_OFFSET_CONST;\n\n    get scrollTop(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;\n    }\n\n    get scrollLeft(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;\n    }\n\n    onClick(): void {\n        if (!this.scrollBar) {\n            return;\n        }\n\n        const {nativeElement} = this.scrollBar;\n\n        nativeElement.scrollTop =\n            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;\n    }\n}\n"}}]);