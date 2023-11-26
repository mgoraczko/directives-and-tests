import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactService } from '../services/contact.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('ContactsComponent', () => {
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
      declarations: [ ContactsComponent ],
      providers: [
        { provide: ContactService, useValue: contactServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fill in the behaviour subject with data from contact service and put that into html template', () => {

    const elementsToFulfill = fixture.debugElement.queryAll(By.css('tr'))[contacts.length].childNodes;

    expect(component.getContacts.value).toEqual(contacts);
    expect(elementsToFulfill[0].nativeNode.innerText).toEqual(contacts[0].name);
    expect(elementsToFulfill[1].nativeNode.innerText).toEqual(contacts[0].surname);
    expect(elementsToFulfill[2].nativeNode.innerText).toEqual(contacts[0].email);
    expect(elementsToFulfill[3].nativeNode.innerText).toEqual(contacts[0].phoneNumber);
  });

  it('when clicking on addNewContact button it should be disabled and hideNewContactForm button should appear', () => {
    const addNewContactButton = fixture.debugElement.query(By.css('#addNewContactBtn')).nativeElement;

    addNewContactButton.click();
    fixture.detectChanges();
    const hideFormBtn = fixture.debugElement.query(By.css('#hideNewContactFormBtn')).nativeElement;

    expect(hideFormBtn).toBeTruthy();
    expect(addNewContactButton.disabled).toBe(true);
  });

  it('when clicking on hideNewContactForm button addNewContact button should be active', () => {
    const addNewContactButton = fixture.debugElement.query(By.css('#addNewContactBtn')).nativeElement;
    addNewContactButton.click();
    fixture.detectChanges();

    const hideFormBtn = fixture.debugElement.query(By.css('#hideNewContactFormBtn')).nativeElement;
    hideFormBtn.click();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#hideNewContactFormBtn'))).toBeNull();
    expect(addNewContactButton.disabled).toBe(false);
  });
});
