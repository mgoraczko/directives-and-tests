import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopOfferComponent } from './shop-offer/shop-offer.component';

const routes: Routes = [
  { path: '', component: ShopOfferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }