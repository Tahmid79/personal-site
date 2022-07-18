import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DissertationRoutingModule } from './dissertation-routing.module';
import { DissertationMainComponent } from './dissertation-main/dissertation-main.component';

@NgModule({
  declarations: [
  
    DissertationMainComponent
  ],
  imports: [
    CommonModule,
    DissertationRoutingModule
  ]
})
export class DissertationModule { }
