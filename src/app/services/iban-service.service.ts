import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IbanServiceService {
  constructor(private http: HttpClient) {}

  fetchData(IBAN: any): Observable<any> {
    return this.http.get(`https://openiban.com/validate/${IBAN}`);
  }
}
