import { TestBed } from '@angular/core/testing';

import { IbanServiceService } from './iban-service.service';

describe('IbanServiceService', () => {
  let service: IbanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
