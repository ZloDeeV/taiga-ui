import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    NgZone,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {isCurrentTarget, tuiDefaultProp, tuiPure, typedFromEvent} from '@taiga-ui/cdk';
import {PolymorpheusContent, PolymorpheusOutletComponent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    pairwise,
    startWith,
    switchMap,
} from 'rxjs/operators';

import {TUI_LINE_CLAMP_OPTIONS, TuiLineClampOptions} from './line-clamp-options';

@Component({
    selector: 'tui-line-clamp',
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLineClampComponent implements AfterViewInit, DoCheck {
    @ViewChild(PolymorpheusOutletComponent, {read: ElementRef})
    private readonly outlet?: ElementRef<HTMLElement>;

    private readonly linesLimit$ = new BehaviorSubject(1);
    private readonly isOverflown$ = new Subject<boolean>();
    private initialized = false;

    @Input()
    @tuiDefaultProp()
    set linesLimit(linesLimit: number) {
        this.linesLimit$.next(linesLimit);
    }

    @Input()
    @tuiDefaultProp()
    lineHeight = 24;

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Output()
    readonly overflownChange: Observable<boolean> = this.isOverflown$.pipe(
        distinctUntilChanged(),
    );

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_LINE_CLAMP_OPTIONS) private readonly options: TuiLineClampOptions,
    ) {
        this.skipInitialTransition();
    }

    @tuiPure
    get lineClamp$(): Observable<number> {
        return this.linesLimit$.pipe(
            startWith(1),
            pairwise(),
            switchMap(([prev, next]) =>
                next >= prev
                    ? of(next)
                    : typedFromEvent(this.elementRef.nativeElement, 'transitionend').pipe(
                          filter(isCurrentTarget),
                          mapTo(next),
                      ),
            ),
        );
    }

    get overflown(): boolean {
        if (!this.outlet) {
            return false;
        }

        const {scrollHeight, scrollWidth} = this.outlet.nativeElement;
        const {clientHeight, clientWidth} = this.elementRef.nativeElement;

        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }

    get computedContent(): PolymorpheusContent {
        return this.options.showHint && this.overflown ? this.content : '';
    }

    @HostBinding('style.maxHeight.px')
    get maxHeight(): number | null {
        return this.initialized ? this.lineHeight * this.linesLimit$.value : null;
    }

    @HostBinding('style.height.px')
    get height(): number | null {
        return !this.outlet ? 0 : this.outlet.nativeElement.scrollHeight + 4 || null;
    }

    @HostListener('transitionend')
    updateView(): void {
        this.cd.detectChanges();
    }

    ngAfterViewInit(): void {
        this.initialized = true;
    }

    ngDoCheck(): void {
        this.isOverflown$.next(this.overflown);
    }

    private skipInitialTransition(): void {
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.renderer.addClass(this.elementRef.nativeElement, '_initialized');
                this.cd.detectChanges();
            });
        });
    }
}
