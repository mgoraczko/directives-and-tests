import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSampleComponent } from './test-sample/test-sample.component';
import { MartaRoutingModule } from './marta-routing.module';

@NgModule({
  declarations: [
    TestSampleComponent
  ],
  imports: [
    CommonModule,
    MartaRoutingModule
  ]
})
export class MartaModule { }
