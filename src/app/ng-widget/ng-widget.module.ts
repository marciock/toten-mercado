import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyBoardComponent } from './key-board/key-board.component';
import { InputPanelComponent } from './input-panel/input-panel.component';



@NgModule({
  declarations: [KeyBoardComponent, InputPanelComponent],
  imports: [
    CommonModule
  ],
  exports:[
    KeyBoardComponent,
    InputPanelComponent
  ]
})
export class NgWidgetModule { }
