import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { KeyBoardComponent } from './key-board/key-board.component';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardInfoComponent } from './card-info/card-info.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';

import {ServiceKey} from './service-key';


import { CpfPipe } from './cpf.pipe';


 
@NgModule({
  declarations: [
    KeyBoardComponent, 
    InputPanelComponent, 
    NavBarComponent,
    CardInfoComponent,
    CpfPipe,
    ProgressBarComponent
     ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    KeyBoardComponent,
    InputPanelComponent,
    NavBarComponent,
    CardInfoComponent,
    ProgressBarComponent
       
  ],
  providers:[
    ServiceKey
  ]
})
export class NgWidgetModule { }
