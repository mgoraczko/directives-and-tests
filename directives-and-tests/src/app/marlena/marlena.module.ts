import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { MarlenaRoutingModule } from './marlena-routing.module';

@NgModule({
  declarations: [
    DirectiveSampleComponent
  ],
  imports: [
    CommonModule,
    MarlenaRoutingModule
  ]
})
export class MarlenaModule { }
