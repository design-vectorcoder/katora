import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';




@NgModule({
  declarations: [FooterOneComponent, FooterMobileComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [FooterOneComponent, FooterMobileComponent]
})
export class FooterModule { }
