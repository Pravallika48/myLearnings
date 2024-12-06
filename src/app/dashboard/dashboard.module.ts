import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    LandingScreenComponent,
    ProductComponent,
    CheckoutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
