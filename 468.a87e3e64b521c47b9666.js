(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{mAR1:function(n,t,o){"use strict";o.r(t),t.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TuiBaseColor, TuiColor, TuiMarkerHandler} from '@taiga-ui/core';\n\nconst TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];\nconst ONE_DOT: [TuiColor] = [TuiBaseColor.Success];\n\n@Component({\n    selector: 'tui-calendar-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample3 {\n    value: TuiDayRange | null = null;\n\n    firstMonth = TuiMonth.currentLocal();\n\n    middleMonth = TuiMonth.currentLocal().append({month: 1});\n\n    lastMonth = TuiMonth.currentLocal().append({month: 2});\n\n    hoveredItem: TuiDay | null = null;\n\n    readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>\n        // Attention: do not create new arrays in handler, use constants intead\n        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;\n\n    onDayClick(day: TuiDay): void {\n        if (this.value === null || !this.value.isSingleDay) {\n            this.value = new TuiDayRange(day, day);\n        }\n\n        this.value = TuiDayRange.sort(this.value.from, day);\n    }\n\n    onMonthChangeFirst(month: TuiMonth): void {\n        this.firstMonth = month;\n        this.middleMonth = month.append({month: 1});\n        this.lastMonth = month.append({month: 2});\n    }\n\n    onMonthChangeMiddle(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -1});\n        this.middleMonth = month;\n        this.lastMonth = month.append({month: 1});\n    }\n\n    onMonthChangeLast(month: TuiMonth): void {\n        this.firstMonth = month.append({month: -2});\n        this.middleMonth = month.append({month: -1});\n        this.lastMonth = month;\n    }\n}\n"}}]);