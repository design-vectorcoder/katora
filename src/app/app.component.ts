import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'katora';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    
    const defaultLanguage = localStorage.getItem('lang');

    translate.setDefaultLang(defaultLanguage);
  }
}

