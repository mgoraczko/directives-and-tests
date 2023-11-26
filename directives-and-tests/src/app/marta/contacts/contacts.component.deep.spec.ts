import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactService } from '../services/contact.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AddContactFormComponent } from '../add-contact-form/add-contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactServiceMock: ContactService;
  const contacts = [{
    name: 'Marta',
    surname: 'Goraczko',
    email: 'tenMinuteMail@gmail.com',
    phoneNumber: '+48500600700'
  }];

  contactServiceMock = {
    getContacts: jasmine.createSpy('getContacts').and.returnValue(of(contacts))
  } as jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent, AddContactFormComponent ],
      providers: [
        { provide: ContactService, useValue: contactServiceMock }
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when clicking on addNewContact button addNewContactForm should appear', () => {
    const button = fixture.debugElement.query(By.css('#addNewContactBtn')).nativeElement;

    button.click();
    fixture.detectChanges();
    const hideFormBtn = fixture.debugElement.query(By.css('#hideNewContactFormBtn')).nativeElement;

    const addContactFormComponent = fixture.debugElement.queryAll(By.directive(AddContactFormComponent));
    expect(addContactFormComponent).toBeTruthy();
    expect(hideFormBtn).toBeTruthy();
    expect(button.disabled).toBe(true);
  });
});
