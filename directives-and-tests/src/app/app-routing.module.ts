import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'directives',
    loadChildren: () => import('./marlena/marlena.module').then(mod => mod.MarlenaModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./marta/marta.module').then(mod => mod.MartaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
