import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSampleComponent } from './test-sample/test-sample.component';

const routes: Routes = [
  { path: '', component: TestSampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MartaRoutingModule { }