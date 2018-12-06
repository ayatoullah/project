import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from "@angular/core";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VerifymobileComponent } from './verifymobile/verifymobile.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { TryComponent } from './try/try.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap'
import { Try2Component } from './try2/try2.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

// import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerifymobileComponent,
    ClientLoginComponent,
    TryComponent,
    Try2Component,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    // ComponentLoaderFactory,
    InternationalPhoneNumberModule,
    FormsModule,
    ModalModule.forRoot()
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
