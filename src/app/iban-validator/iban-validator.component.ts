import { IbanServiceService } from './../services/iban-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-iban-validator',
  templateUrl: './iban-validator.component.html',
  styleUrls: ['./iban-validator.component.scss'],
})
export class IbanValidatorComponent implements OnInit {
  isIbanValid: boolean = false;
  private ngUnsubscribe = new Subject<void>();
  subscriptionIsBack = false;
  ibanForm = new FormGroup({
    iban: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '\\b[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?!(?:[ ]?[0-9]){3})(?:[ ]?[0-9]{1,2})?\\b'
      ),
    ]),
  });

  constructor(private ibanServiceService: IbanServiceService) {}

  ngOnInit(): void {
    // this.ibanForm.controls.iban.setValue('AB123456789012345678');
  }

  onSubmit(): void {
    this.ibanServiceService
      .fetchData(this.ibanForm.get('iban')?.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.isIbanValid = data.valid;
        console.log(data);
        this.subscriptionIsBack = true;
      });
  }
}
