import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainComponent } from './components/skills-main/skills-main.component';
import { SkillBoxComponent } from './components/skill-box/skill-box.component';
import { SkillsContainerComponent } from './components/skills-container/skills-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SkillsMainComponent,
    SkillBoxComponent,
    SkillsContainerComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ]
})
export class SkillsModule { }
