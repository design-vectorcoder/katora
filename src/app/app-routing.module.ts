import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './pages/home/home-one/home-one.component';
import { HomeTwoComponent } from './pages/home/home-two/home-two.component';
import { CartOneComponent } from './pages/cart/cart-one/cart-one.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopOneComponent } from './pages/shop/shop-one/shop-one.component';
// import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeOneComponent },
  { path: 'home-two', component: HomeTwoComponent },
  { path: 'shop-one', component: ShopOneComponent },
  { path: 'cart-one', component: CartOneComponent },
  { path: 'checkout', component: CheckoutComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
