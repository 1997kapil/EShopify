import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './service/data.service';
import { PriceUpdaterComponent } from './price-updater/price-updater.component';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { MensComponent } from './Mens/Mens.component';
import { MensService } from './service/Mens.service';
import { WomensComponent } from './womens/womens.component';
import { WomensService } from './service/Womens.service';
import { ClothesService } from './service/Clothes.service';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HelpCentreComponent } from './help-centre/help-centre.component';
import { DisputeListComponent } from './dispute-list/dispute-list.component';
import { DisputeServiceService } from './service/dispute-service.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    PriceUpdaterComponent,
    UsersComponent,
    RegistrationComponent,
    MensComponent,
    WomensComponent,
    ContactUsFormComponent,
    HelpCentreComponent,
    DisputeListComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DisputeServiceService,
    { provide: DataService, useClass: DataService },
    { provide: DataService, useClass: MensService },
    { provide: DataService, useClass: WomensService},
    { provide: DataService, useClass: ClothesService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
