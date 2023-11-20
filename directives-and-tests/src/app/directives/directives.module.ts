import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopOfferComponent } from './shop-offer/shop-offer.component';
import { DirectivesRoutingModule } from './directives-routing.module';

@NgModule({
  declarations: [
    ShopOfferComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
