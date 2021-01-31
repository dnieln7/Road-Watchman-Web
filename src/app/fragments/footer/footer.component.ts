import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    if (localStorage.getItem('lang')) {
      translate.use(localStorage.getItem('lang'));
    }
  }

  ngOnInit(): void {
  }

  protected changeLanguage(value) {
    this.translate.use(value);
    localStorage.setItem('lang', value);
  }
}
