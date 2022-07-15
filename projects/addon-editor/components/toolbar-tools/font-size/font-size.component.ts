import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/addon-editor/tokens';
import {tuiPx} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-size',
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeComponent {
    readonly normalFontSize = 15;

    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(
            map(texts => [
                {
                    px: 13,
                    name: texts.small,
                },
                {
                    px: this.normalFontSize,
                    name: texts.normal,
                },
                {
                    px: 17,
                    name: texts.large,
                },
                {
                    px: 24,
                    family: 'var(--tui-font-heading)',
                    name: texts.subtitle,
                    headingLevel: 2,
                    weight: 'bold',
                },
                {
                    px: 30,
                    family: 'var(--tui-font-heading)',
                    name: texts.title,
                    headingLevel: 1,
                    weight: 'bold',
                },
            ]),
        );

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            LanguageEditor['editorFontOptions']
        >,
    ) {}

    onClick({
        headingLevel,
        px = this.normalFontSize,
    }: Partial<TuiEditorFontOption>): void {
        if (headingLevel) {
            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph({fontSize: tuiPx(px)});
        }
    }
}
