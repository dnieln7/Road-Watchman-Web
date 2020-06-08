import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected user: User;

  constructor() {
    this.user = null;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
