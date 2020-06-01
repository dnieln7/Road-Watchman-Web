import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user.data.service';
import {User} from '../../models/User';
import {Login} from '../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private login: Login;
  private user: User;

  constructor(private dataService: UserDataService) {
  }

  ngOnInit(): void {
    this.login = new Login();
    this.login.role = 'admin';
    this.login.type = 'default';
  }

  logIn() {
    this.dataService.login(this.login).subscribe(session => {
      console.log(session);
      this.user = session.user;
    });
  }
}
