(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{pZR5:function(n,e,i){"use strict";i.r(e),e.default='<h2\n    class="header"\n    [class.header_empty]="!heading"\n>\n    <tui-input-inline\n        *ngIf="editing else text"\n        tuiAutoFocus\n        [(ngModel)]="heading"\n        (focusedChange)="onFocusedChange($event)"\n        (keydown.esc.prevent)="toggle()"\n        (keydown.enter.prevent)="toggle()"\n    >\n        Type a heading\n    </tui-input-inline>\n    <ng-template #text>\n        <span>{{heading}}</span>\n        <button\n            tuiIconButton\n            type="button"\n            title="Edit heading"\n            size="xs"\n            appearance="icon"\n            icon="tuiIconEditLarge"\n            class="tui-space_left-1"\n            (click)="toggle()"\n        ></button>\n    </ng-template>\n</h2>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa\n    exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae\n    repellat rerum? Accusantium fuga hic nam necessitatibus non officiis\n    perferendis repellendus tempore voluptates!\n</p>\n<p>\n    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste\n    itaque iusto laborum nostrum officia quam quasi quos repellat temporibus\n    tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n</p>\n'}}]);