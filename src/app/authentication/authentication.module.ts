import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthenticationRoutingModule} from './authentication.routing.module';
import {UserDataService} from '../services/user.data.service';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

const MODULES = [AuthenticationRoutingModule, FormsModule, TranslateModule.forChild()];

const COMPONENTS = [LoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS],
  providers: [UserDataService]
})
export class AuthenticationModule {
}
