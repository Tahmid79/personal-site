import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsMainComponent } from './components/skills-main/skills-main.component';

const routes: Routes = [
  { path: '' , component: SkillsMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
