import {Injector} from '@angular/core';
import {TuiNodeViewRenderer} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {mergeAttributes, Node} from '@tiptap/core';

import {TuiDraggableComponent} from "./draggable.component";

export const createDraggableExtension = (injector: Injector): Node => {
    return Node.create({
        name: 'draggableItem',

        group: 'block',

        content: 'block+',

        draggable: true,

        parseHTML() {
            return [
                {
                    tag: 'div[data-type="draggable-item"]',
                },
            ];
        },

        renderHTML({HTMLAttributes}) {
            return [
                'div',
                mergeAttributes(HTMLAttributes, {'data-type': 'draggable-item'}),
                0,
            ];
        },

        addNodeView() {
            return TuiNodeViewRenderer(TuiDraggableComponent, {injector});
        },
    });
};
