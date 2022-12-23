import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';

const exports: any = [PageHeaderComponent, SkillComponent] ;

@NgModule({
  declarations: [
    PageHeaderComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ], exports: exports
})
export class SharedComponentsModule { }
