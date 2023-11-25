import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactFormComponent } from './add-contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddContactFormComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
