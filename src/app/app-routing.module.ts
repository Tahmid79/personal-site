import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'skills', loadChildren:
      () => import('./skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path: 'projects', loadChildren:
      () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'fyp', loadChildren:
      () => import('./dissertation/dissertation.module').then(m => m.DissertationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
