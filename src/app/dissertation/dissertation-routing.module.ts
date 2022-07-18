import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DissertationMainComponent } from './components/dissertation-main/dissertation-main.component';

const routes: Routes = [
  { path: '' , component: DissertationMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DissertationRoutingModule { }
