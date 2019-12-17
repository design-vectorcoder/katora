import { Component, OnInit } from '@angular/core';

import { KatoraService } from '../../services/katora.service';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {
  public productAddedToCart;
  public productTotal;
  public cartCount;
  
  constructor(private katoraService : KatoraService) { 
    
  }

  ngOnInit() {
    this.productAddedToCart = this.katoraService.getProductFromCart();    
    console.log(this.productAddedToCart);
  }
  ngAfterContentChecked(){
    this.productAddedToCart = this.katoraService.getProductFromCart();    
    this.productTotal =  this.katoraService.calculateTotal().toFixed(2);
    this.cartCount = this.katoraService.getCartCount();
    console.log(this.productAddedToCart);
    console.log("ngAfterContentChecked");
  }
  removeProduct(product: any){
    this.katoraService.removeProductFromCart(product);
  }
}
