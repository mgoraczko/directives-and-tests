import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactFormComponent } from './add-contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

  it('when typing invalid email invalid email message should appear', () => {
    component.formGroup.get('email')?.setValue('blablabla');
    component.formGroup.get('email')?.markAsTouched();

    fixture.detectChanges();

    const errorElements = fixture.debugElement.queryAll(By.css('.error'));
    expect(errorElements.length).toBe(2);
    expect(errorElements[1].nativeNode.children[0].innerText).toBe('Not a valid Email');
    expect(component.formGroup.get('email')?.hasError('pattern')).toBeTrue();
    expect(component.formGroup.valid).toBeFalse();
  });

  it('when going to control but not typing anything and going to next one, the required error should appear', () => {
    component.formGroup.get('name')?.markAsTouched();

    fixture.detectChanges();

    const errorElements = fixture.debugElement.queryAll(By.css('.error'));
    expect(errorElements.length).toBe(2);
    expect(errorElements[1].nativeNode.children[0].innerText).toBe('Name is required');
    expect(component.formGroup.get('name')?.hasError('required')).toBeTrue();
    expect(component.formGroup.valid).toBeFalse();
  });

  it('when form invalid submit button should be disabled', () => {
    const submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(submitBtn.disabled).toBe(true);
  });

  it('when form valid submit button should be active', () => {
    component.formGroup.setValue({
      name: 'Marta',
      surname: 'test',
      email: 'martagor@gmail.com',
      phoneNumber: '234561232'
    });
    component.formGroup.markAllAsTouched();

    fixture.detectChanges();

    const submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(submitBtn.disabled).toBe(false);
    expect(component.formGroup.valid).toBe(true);
  });
});
