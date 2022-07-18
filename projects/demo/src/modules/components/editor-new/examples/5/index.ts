import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tiptap/starter-kit').then(({default: kit}) => kit),
                import('@taiga-ui/addon-editor/extensions/draggable').then(
                    ({createDraggableExtension}) => createDraggableExtension(injector),
                ),
            ],
        },
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample5 {
    control = new FormControl('');

    constructor() {
        this.control.patchValue(`
               <p>This is a boring paragraph.</p>
        <div data-type="draggable-item">
          <p>Followed by a fancy draggable item.</p>
        </div>
        <div data-type="draggable-item">
          <p>And another draggable item.</p>
          <div data-type="draggable-item">
            <p>And a nested one.</p>
            <div data-type="draggable-item">
              <p>But can we go deeper?</p>
            </div>
          </div>
        </div>
        <p>Let’s finish with a boring paragraph.</p>
            `);
    }
}
