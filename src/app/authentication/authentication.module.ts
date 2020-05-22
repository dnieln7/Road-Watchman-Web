import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthenticationRoutingModule} from './authentication.routing.module';

const MODULES = [AuthenticationRoutingModule];

const COMPONENTS = [LoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS]
})
export class AuthenticationModule {
}
