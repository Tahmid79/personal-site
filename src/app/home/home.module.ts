import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from "../shared/shared.module";
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillSegmentComponent } from './components/skill-segment/skill-segment.component';
import { ProjectSegmentComponent } from './components/project-segment/project-segment.component';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeBannerComponent,
    EducationComponent,
    ExperienceComponent,
    SkillSegmentComponent,
    ProjectSegmentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
