import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DatePipe} from '@angular/common';
import {FragmentsModule} from './fragments/fragments.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const A_MODULES = [BrowserModule, HttpClientModule, NgbModule, TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  },
  defaultLanguage: 'es'
})];

const MODULES = [AppRoutingModule, FragmentsModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...A_MODULES, ...MODULES],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
