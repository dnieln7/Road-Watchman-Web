import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user.data.service';
import {User} from '../../models/User';
import {Login} from '../../models/Login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: Login;
  private user: User;

  constructor(private dataService: UserDataService, private router: Router,) {
  }

  ngOnInit(): void {
    this.login = new Login();
    this.login.role = 'admin';
    this.login.type = 'email';
  }

  logIn() {
    this.dataService.login(this.login).subscribe(response => {
      this.user = response.result;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/pages']).then(_ => window.location.reload());
    });
  }
}
