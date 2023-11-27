import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contactst',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {

  @ViewChild('addNewContact', { read: TemplateRef, static: true })
  addNewContact!: TemplateRef<Element>;

  private contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  private destroyed$: Subject<void> = new Subject<void>();
  private isNewContactFormShown: boolean = false;

  public get getContacts() {
    return this.contacts;
  }

  public get showContactForm() {
    return this.isNewContactFormShown;
  }

  constructor(private contactService: ContactService) {}

  ngOnDestroy(): void {
    this.destroyed$.complete();
    this.destroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.contactService.getContacts().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(contacts =>
      this.contacts.next(contacts)
    );
  }

  showNewContactForm() {
    this.isNewContactFormShown = !this.isNewContactFormShown;
  }

  hideAddContactForm() {
    this.isNewContactFormShown = !this.isNewContactFormShown;
  }

  contactAdded(contact: Contact): void {
    const contacts = this.contacts.value;
    const updatedContacts = [...contacts, contact];
    this.contacts.next(updatedContacts);
  }
}
