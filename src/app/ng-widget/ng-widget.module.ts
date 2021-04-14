import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyBoardComponent } from './key-board/key-board.component';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ServiceKey} from './service-key';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule, IConfig} from 'ngx-mask';
 const options:Partial<IConfig>={
   validation:false,
 }
@NgModule({
  declarations: [KeyBoardComponent, InputPanelComponent, NavBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  exports:[
    KeyBoardComponent,
    InputPanelComponent,
    NavBarComponent
  ],
  providers:[
    ServiceKey
  ]
})
export class NgWidgetModule { }
