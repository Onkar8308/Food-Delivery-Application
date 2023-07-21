import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentModuleComponent } from './component/payment-module/payment-module.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { RestaurantAdminComponent } from './component/restaurant-admin/restaurant-admin.component';
import { ItemComponent } from './component/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RegistereditemComponent } from './component/registereditem/registereditem.component';
import { MatIconModule} from '@angular/material/icon';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { RestaurantSignupComponent } from './component/restaurant-signup/restaurant-signup.component';
import { RestaurantRegistrationComponent } from './component/restaurant-registration/restaurant-registration.component';
import { RestaurantLoginComponent } from './component/restaurant-login/restaurant-login.component';
import { UpdateItemComponent} from './component/update-item/update-item.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customer-data-edit/customer-data-edit.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminComponent } from './class/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    InvoiceComponent,
    PaymentComponent,
    PaymentModuleComponent,
    RestaurantsComponent,
    RestaurantAdminComponent,
    ItemComponent,
    RegistereditemComponent,
    AddRestaurantComponent,
    RestaurantSignupComponent,
    RestaurantRegistrationComponent,
    RestaurantLoginComponent,
    UpdateItemComponent,
    AdminMenuComponent,
    CustomerDataComponent,
    CustomerDataEditComponent,
    AdminLoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
