import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { LangaugeDropdownComponent } from './langauge-dropdown/langauge-dropdown.component';
import { CurrencyDropdownComponent } from './currency-dropdown/currency-dropdown.component';
import { AlertHeaderComponent } from './alert-header/alert-header.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { BlogCardGridComponent } from './blog-card-grid/blog-card-grid.component';
import { FullScreenBannerComponent } from './full-screen-banner/full-screen-banner.component';
import { PopularProductComponent } from './popular-product/popular-product.component';




@NgModule({
  declarations: [ LogoComponent, MenuComponent, ProductCardComponent, LangaugeDropdownComponent, CurrencyDropdownComponent, AlertHeaderComponent, AccountDropdownComponent, CartDropdownComponent, BlogCardGridComponent, FullScreenBannerComponent, PopularProductComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    PipesModule
  ],
  exports: [ LogoComponent, MenuComponent, ProductCardComponent, LangaugeDropdownComponent, CurrencyDropdownComponent, AlertHeaderComponent, AccountDropdownComponent, CartDropdownComponent, BlogCardGridComponent, FullScreenBannerComponent, PopularProductComponent]
})
export class ComponentsModule { }
