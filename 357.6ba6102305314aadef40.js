(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{ym0C:function(n,t,a){"use strict";a.r(t),t.default='<tui-notification i18n>\n    <code>TuiLineDaysChart</code>\n    is used to show data of several months to simplify working with different number of days in months\n</tui-notification>\n<p class="controls">\n    <tui-input-date-range\n        class="b-form"\n        [maxLength]="maxLength"\n        [(ngModel)]="data"\n        (ngModelChange)="onDataChange($event)"\n    >\n        Data\n    </tui-input-date-range>\n    <tui-input-date-range\n        class="b-form tui-space_left-4"\n        [maxLength]="maxLength"\n        [(ngModel)]="show"\n    >\n        Visible range\n    </tui-input-date-range>\n</p>\n<p class="legend">\n    <span\n        *ngFor="let chart of days; let index = index"\n        class="item"\n    >\n        <small class="name">Chart {{ index + 1 }}</small>\n    </span>\n</p>\n<tui-axes\n    *ngIf="show | labels | async as labels"\n    class="axes"\n    [verticalLines]="labels.length"\n    [horizontalLines]="4"\n    [axisXLabels]="labels"\n    [tuiLineChartHint]="hint"\n>\n    <ng-container *ngIf="getWidth(show) > 90; else line">\n        <tui-line-days-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [value]="chart | tuiFilter: filter:range"\n        ></tui-line-days-chart>\n    </ng-container>\n    <ng-template #line>\n        <tui-line-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [width]="getWidth(range)"\n            [value]="chart | tuiFilter: filter:range | tuiMapper: toNumbers:range"\n        ></tui-line-chart>\n    </ng-template>\n</tui-axes>\n\n<ng-template\n    #hint\n    let-data\n>\n    <div class="tui-space_bottom-2">\n        <strong>{{ getDate(data[0][0], range.from) }}</strong>\n    </div>\n    <div>\n        <div\n            *ngFor="let point of data"\n            class="item"\n        >\n            <span class="value">${{ point[1].toFixed(0) }}</span>\n        </div>\n    </div>\n</ng-template>\n'}}]);