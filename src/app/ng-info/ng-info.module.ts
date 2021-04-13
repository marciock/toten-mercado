import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgInfoComponent} from '../ng-info/ng-info.component';
import {NgWidgetModule} from '../ng-widget/ng-widget.module';


@NgModule({
  declarations: [
    NgInfoComponent
  ],
  imports: [
    CommonModule,
    NgWidgetModule
    
  ],
  exports:[
    NgInfoComponent
  ]
})
export class NgInfoModule { }
