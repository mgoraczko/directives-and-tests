import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts = [
    {
      name: 'Jan',
      surname: 'Kowalski',
      email: 'jan.kowalski@gmail.com',
      phoneNumber: '+48120100120'
    },
    {
      name: 'Michał',
      surname: 'Kowalski',
      email: 'michal.kowalski@gmail.com',
      phoneNumber: '+48120102120'
    },
    {
      name: 'Janina',
      surname: 'Kowalska',
      email: 'janina.kowalska@gmail.com',
      phoneNumber: '+48120103120'
    }
  ]

  constructor() { }

  public getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  } 
}
