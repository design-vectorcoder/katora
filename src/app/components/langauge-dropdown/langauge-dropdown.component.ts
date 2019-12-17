import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-langauge-dropdown',
  templateUrl: './langauge-dropdown.component.html',
  styleUrls: ['./langauge-dropdown.component.scss']
})
export class LangaugeDropdownComponent implements OnInit {
  
  constructor(public translate: TranslateService) {

    const lanaguage =  localStorage.getItem('lang');

    if(lanaguage === null || lanaguage === undefined){

      localStorage.setItem('lang', 'en');
      this.translate.use('en');
    }
    
  }

  public language;



  public setLanguage = (language) => {

    if (this.language === language) return;
    
    this.language = language;

    localStorage.setItem('lang', language);

    const  setLanguage = localStorage.getItem('lang');

    if(setLanguage === 'en'){
      this.translate.use('en');

    }
    else{
      this.translate.use('fr');
    }
    
    console.log('[LANGUAGE SWITCH TRIGGERED] setting language value to '+this.language);
    // winRef.nativeWindow.document.locale=this.language;    
  }

  ngOnInit() {
  }

}
