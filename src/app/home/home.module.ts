import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from "../shared/shared.module";
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeBannerComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
