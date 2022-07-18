import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiNodeViewNgComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiDestroyService} from '@taiga-ui/cdk';

// @dynamic
@Component({
    selector: 'tui-draggable',
    templateUrl: './draggable.component.html',
    styleUrls: ['./draggable.component.less'],
    providers: [TuiDestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDraggableComponent extends TuiNodeViewNgComponent {
    constructor() {
        super();

        console.log('hello')
    }
}
