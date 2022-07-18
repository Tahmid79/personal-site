import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DissertationRoutingModule } from './dissertation-routing.module';
import { DissertationMainComponent } from './components/dissertation-main/dissertation-main.component';
import { DissertationContainerComponent } from './components/dissertation-container/dissertation-container.component';

@NgModule({
  declarations: [
  
    DissertationMainComponent,
       DissertationContainerComponent
  ],
  imports: [
    CommonModule,
    DissertationRoutingModule
  ]
})
export class DissertationModule { }
