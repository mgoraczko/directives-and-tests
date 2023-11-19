import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';

const routes: Routes = [
  { path: '', component: DirectiveSampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarlenaRoutingModule { }