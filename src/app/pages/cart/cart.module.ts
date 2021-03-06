import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


import { CartOneComponent } from './cart-one/cart-one.component';



@NgModule({
  declarations: [CartOneComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    ComponentsModule,
    HeaderModule,
    FooterModule
  ],
  exports: [CartOneComponent]
})
export class CartModule { }
