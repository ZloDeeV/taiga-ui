(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{"1AoG":function(n,r,e){"use strict";e.r(r),r.default="import {Injectable} from '@angular/core';\nimport {TuiControlValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';\n\n@Injectable()\nexport class ExampleDateTimeTransformer\n    implements TuiControlValueTransformer<[TuiDay | null, TuiTime | null], string>\n{\n    private readonly separator = ', ';\n\n    fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {\n        const [day, time = ''] = controlValue.split(this.separator);\n\n        return day\n            ? [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null]\n            : [null, null];\n    }\n\n    toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {\n        return day\n            ? day.toString() + (time ? `${this.separator}${time.toString()}` : '')\n            : '';\n    }\n}\n"}}]);