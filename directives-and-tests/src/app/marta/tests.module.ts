import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MartaRoutingModule } from './tests-routing.module';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsComponent,
    AddContactFormComponent
  ],
  imports: [
    CommonModule,
    MartaRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestsModule { }
