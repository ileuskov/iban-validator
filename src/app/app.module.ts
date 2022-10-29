import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IbanValidatorComponent } from './iban-validator/iban-validator.component';
import { IbanServiceService } from './services/iban-service.service';
@NgModule({
  declarations: [AppComponent, IbanValidatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [IbanServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
