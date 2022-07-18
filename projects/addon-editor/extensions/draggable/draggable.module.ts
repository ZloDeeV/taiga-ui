import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TuiDraggableComponent} from './draggable.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiDraggableComponent],
    exports: [TuiDraggableComponent],
})
export class TuiDraggableModule {}
