import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanValidatorComponent } from './iban-validator.component';

describe('IbanValidatorComponent', () => {
  let component: IbanValidatorComponent;
  let fixture: ComponentFixture<IbanValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbanValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbanValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
