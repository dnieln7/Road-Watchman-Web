import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {FragmentsModule} from './fragments/fragments.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const A_MODULES = [BrowserModule, FormsModule, HttpClientModule, NgbModule];

const MODULES = [AppRoutingModule, FragmentsModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...A_MODULES, ...MODULES],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
