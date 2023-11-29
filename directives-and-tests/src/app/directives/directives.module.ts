import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopOfferComponent } from './shop-offer/shop-offer.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { HasBuyerUserAccessDirective } from './directives/has-buyer-user-access.directive';
import { HighlightedTextDirective } from './directives/highlighted-text.directive';
import { BuyerButtonAccessDirective } from './directives/buyer-button-access.directive';

@NgModule({
  declarations: [
    ShopOfferComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    BuyerButtonAccessDirective
  ]
})
export class DirectivesModule { }
