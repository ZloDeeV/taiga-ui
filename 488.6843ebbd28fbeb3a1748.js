(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{"3TI4":function(n,t,i){"use strict";i.r(t),t.default='<div\n    tuiCarouselButtons\n    class="wrapper"\n>\n    <button\n        tuiIconButton\n        icon="tuiIconChevronLeftLarge"\n        title="Previous"\n        (click)="carousel.prev()"\n    ></button>\n    <tui-carousel\n        #carousel\n        class="carousel"\n    >\n        <tui-island *tuiItem>\n            <h2 class="tui-island__title">Monty Python and the Holy Grail</h2>\n            <p>\n                King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy\n                Grail, encountering many, very silly obstacles.\n            </p>\n            <div>\n                <button\n                    tuiButton\n                    appearance="primary"\n                >\n                    Buy $\n                    <tui-money [value]="12.99"></tui-money>\n                </button>\n                <button\n                    tuiButton\n                    class="tui-space_left-2"\n                >\n                    Rent $\n                    <tui-money [value]="4.99"></tui-money>\n                </button>\n            </div>\n        </tui-island>\n        <tui-island *tuiItem>\n            <tui-loader></tui-loader>\n        </tui-island>\n        <tui-island\n            *tuiItem\n            class="tui-island_text-align_center"\n        >\n            <h2 class="tui-island__title">Failed to load</h2>\n            <p>\n                <tui-marker-icon\n                    mode="error"\n                    src="tuiIconRemoveLarge"\n                ></tui-marker-icon>\n            </p>\n        </tui-island>\n    </tui-carousel>\n    <button\n        tuiIconButton\n        icon="tuiIconChevronRightLarge"\n        title="Next"\n        (click)="carousel.next()"\n    ></button>\n</div>\n'}}]);