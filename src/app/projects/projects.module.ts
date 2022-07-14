import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectsMainComponent,
    ProjectsContainerComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
