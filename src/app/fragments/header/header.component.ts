import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected user: User;
  protected selected: string;

  constructor(private router: Router) {
    this.user = null;
  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.select(val.urlAfterRedirects.split('/')[2]);
      }
    });

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  protected select(option) {
    this.selected = option;
  }

  protected logout() {
    localStorage.removeItem('user');

    this.user = null;
    this.router.navigate(['/pages']).then(_ => window.location.reload());
  }
}
