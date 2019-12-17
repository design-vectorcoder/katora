import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
};


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





import { ComponentsModule } from './components/components.module';
import { HeaderModule } from './layouts/header/header.module';
import { FooterModule } from './layouts/footer/footer.module';

import { HomeModule } from './pages/home/home.module';
import { ShopModule } from './pages/shop/shop.module';
import { CartModule } from './pages/cart/cart.module';

import { CheckoutComponent } from './pages/checkout/checkout.component';





@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
    AppRoutingModule,
    
    ComponentsModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    ShopModule,
    CartModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckoutComponent]
})
export class AppModule { 

  
}
