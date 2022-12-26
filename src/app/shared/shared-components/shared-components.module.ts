import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { ProjectBoxComponent } from './project-box/project-box.component';

const exports: any = [PageHeaderComponent, SkillComponent, ProjectBoxComponent] ;

@NgModule({
  declarations: [
    PageHeaderComponent,
    SkillComponent,
    ProjectBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ], exports: exports
})
export class SharedComponentsModule { }
