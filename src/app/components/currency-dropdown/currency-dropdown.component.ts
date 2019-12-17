import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss']
})
export class CurrencyDropdownComponent implements OnInit {
  
 
  public currencys = [
    {
       name: "US Doller",
       code:"USD",
       symbolLeft:"$",
       symbolRight:"",
       decimalPlaces: "2",
       Value: "1"

    },

    {
      name: "Candian Doller",
      code:"CAD",
      symbolLeft:"$",
      symbolRight:"",
      decimalPlaces: "2",
      Value: "1.5"

   }

  ];

  constructor() {
    
    const setDefaultlanaguage =  localStorage.getItem('currency');

    if(setDefaultlanaguage === null || setDefaultlanaguage === undefined){

      localStorage.setItem('currency', JSON.stringify(this.currencys[0]));
      
    }
    
  }
  ngOnInit() {
    
  }
  onItemClick(event, currency) {
    localStorage.setItem('currency', JSON.stringify(currency));
  }  
}
