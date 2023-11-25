import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(mod => mod.DirectivesModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./marta/tests.module').then(mod => mod.TestsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
