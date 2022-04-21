import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { MensComponent } from './Mens/Mens.component';
import { WomensComponent } from './womens/womens.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HelpCentreComponent } from './help-centre/help-centre.component';
import { DisputeListComponent } from './dispute-list/dispute-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'Mens',
    component: MensComponent,
  },

  {
    path: 'Womens',
    component: WomensComponent,
  },
  
  {
    path: 'contact-us-form',
    component: ContactUsFormComponent,
  },

  {
    path: 'help-centre',
    component: HelpCentreComponent,
  },

  {
    path: 'dispute-list',
    component: DisputeListComponent,
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
