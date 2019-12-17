import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curency',
  pure: false
})
export class CurencyPipe implements PipeTransform {

  public currencyDetail;

  transform(productPrice){

    
    this.currencyDetail = localStorage.getItem('currency');
    this.currencyDetail = JSON.parse(this.currencyDetail);

    
    return this.currencyDetail.symbolLeft+''+(productPrice*this.currencyDetail.Value).toFixed(this.currencyDetail.decimalPlaces)+''+this.currencyDetail.symbolRight;
    
  }
}
