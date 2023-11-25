import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent {

  formGroup: FormGroup;
  @Output() contactAdded: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }

  submit(): void {
    this.contactAdded.emit(this.formGroup.value);
  }
}
