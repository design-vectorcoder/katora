import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CountdownModule } from 'ngx-countdown';


import { ComponentsModule } from '../../components/components.module';
import { HeaderModule } from '../../layouts/header/header.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';






@NgModule({
  declarations: [HomeOneComponent, HomeTwoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    CountdownModule,
    
    ComponentsModule,
    
    // Specify your library as an import
    SlickCarouselModule,
    HeaderModule,
    FooterModule
  ],
  exports: [HomeOneComponent, HomeTwoComponent]
})
export class HomeModule { }
