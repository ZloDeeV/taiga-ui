(window.webpackJsonp=window.webpackJsonp||[]).push([[1634],{SSSJ:function(n,t,e){"use strict";e.r(t),t.default='<p>\n    <button\n        tuiButton\n        type="button"\n        size="xs"\n        class="tui-space_right-2"\n        (click)="showSkelet()"\n    >\n        Show/hide skeleton\n    </button>\n    <button\n        tuiButton\n        type="button"\n        size="xs"\n        (click)="toggleLight()"\n    >\n        Light mode\n    </button>\n</p>\n<div class="tui-container">\n    <form [formGroup]="testForm">\n        <div class="tui-row tui-row_sme">\n            <div class="tui-col_8">\n                <div\n                    class="container"\n                    [class.container_dark]="lightMode"\n                    [tuiMode]="lightMode ? \'onDark\' : null"\n                >\n                    <h3\n                        class="tui-form__header tui-form__header_margin-top_none"\n                        [class.tui-skeleton]="skeletonVisible"\n                        [class.tui-skeleton_short]="skeletonVisible"\n                        [class.tui-skeleton_text]="skeletonVisible"\n                        [class.tui-skeleton_light]="lightMode"\n                    >\n                        A header\n                    </h3>\n                    <div class="tui-form__row">\n                        <tui-input\n                            tuiTextfieldExampleText="Name Surname"\n                            formControlName="nameValue"\n                            tuiHintContent="With a hint"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Some input\n                        </tui-input>\n                    </div>\n                    <div class="tui-form__row tui-form__row_multi-fields">\n                        <div class="tui-form__multi-field">\n                            <tui-input-password\n                                formControlName="passwordValue"\n                                [class.tui-skeleton]="skeletonVisible"\n                                [class.tui-skeleton_light]="lightMode"\n                            >\n                                Some password input\n                            </tui-input-password>\n                        </div>\n                        <div class="tui-form__multi-field">\n                            <tui-input-number\n                                formControlName="moneyValue"\n                                [class.tui-skeleton]="skeletonVisible"\n                                [class.tui-skeleton_light]="lightMode"\n                            >\n                                Some number input\n                            </tui-input-number>\n                        </div>\n                    </div>\n                    <div class="tui-form__row tui-form__row_half-width">\n                        <tui-input-time\n                            formControlName="timeValue"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Some textfield\n                        </tui-input-time>\n                    </div>\n                    <div class="tui-form__row tui-form__row_checkboxes">\n                        <tui-checkbox-labeled\n                            formControlName="osnoValue"\n                            size="l"\n                            class="tui-form__checkbox"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            First option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName="usnValue"\n                            size="l"\n                            class="tui-form__checkbox"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Cool option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName="eshnValue"\n                            size="l"\n                            class="tui-form__checkbox"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Boring option\n                        </tui-checkbox-labeled>\n                        <tui-checkbox-labeled\n                            formControlName="envdValue"\n                            size="l"\n                            class="tui-form__checkbox"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_short]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Interesting option\n                        </tui-checkbox-labeled>\n                    </div>\n                    <div class="tui-form__buttons">\n                        <button\n                            tuiButton\n                            size="l"\n                            type="submit"\n                            class="tui-form__button"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Submit\n                        </button>\n                        <button\n                            tuiButton\n                            type="button"\n                            appearance="flat"\n                            size="l"\n                            class="tui-form__button"\n                            [class.tui-skeleton]="skeletonVisible"\n                            [class.tui-skeleton_light]="lightMode"\n                        >\n                            Cancel\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n'}}]);