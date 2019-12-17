import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KatoraService {
  public cartProducts = [];
  public count;
  public total;
  public addQuantity;
  public removeQuantity;


  constructor() {
    this.cartProducts = this.getProductFromCart();

  }

  calculateTotal(){
    let pTotal= 0; 
    this.getProductFromCart().forEach(element => {

      let p=element.quantity*element.price;

      pTotal=pTotal+p;
    });
    this.total =  pTotal;

    return pTotal;
  }
  addProductToCart(products: any) {
    let count = 0;
    this.cartProducts.forEach(element => {
      if (products.id == element.id) {
        count++;
      }
    });
    if (count == 0) {
      this.cartProducts.push(products);
      alert("cart add")
     this.updateCartProduct()
    }
    else {
      alert("alredy cart")
    }

    
  } 
  getCartCount(){
   return this.cartProducts.length
  }
  updateCartProduct(){
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
  }

  getProductFromCart() {
    if (localStorage.getItem('cartProducts') == null) {
      return [];
    }
    else
      return JSON.parse(localStorage.getItem('cartProducts'));
  }

  onAddQuantity(product) {
    this.cartProducts.forEach((element, index) => {
      if (product.id == element.id) {
        element.quantity++;
      }
    });
    this.updateCartProduct()
  }
  onRemoveQuantity(product) {
    this.cartProducts.forEach((element, index) => {
      if (product.id == element.id) {
        element.quantity--;
      }
    });

    this.updateCartProduct()
  }




  removeProductFromCart(products: any) {
    //return  localStorage.removeItem('cartProducts');
    let count = 0;
    this.cartProducts.forEach((element, index) => {
      if (products.id == element.id) {
        this.cartProducts.splice(index);
        count++;
      }
    });
    if (count != 0) {
      alert("removed");
      this.updateCartProduct();
    }
  }
}
