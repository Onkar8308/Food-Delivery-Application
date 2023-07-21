import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { PaymentModuleComponent } from './component/payment-module/payment-module.component';
import { ItemComponent } from './component/item/item.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { RestaurantLoginComponent } from './component/restaurant-login/restaurant-login.component';
import { RestaurantSignupComponent } from './component/restaurant-signup/restaurant-signup.component';
import { AddRestaurantComponent } from './component/add-restaurant/add-restaurant.component';
import { RestaurantRegistrationComponent } from './component/restaurant-registration/restaurant-registration.component';
import { UpdateItemComponent } from './component/update-item/update-item.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { CustomerDataEditComponent } from './component/customer-data-edit/customer-data-edit.component';

const routes: Routes = [
  // {path:'',component:RestaurantLoginComponent},//this is a default path
  // {path:'',component:CustomerDataComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'paymentModule',component:PaymentModuleComponent},
  {path:'restaurant',component:RestaurantsComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'logout',component:LogoutComponent},
  {path:'RestaurantLogin',component:RestaurantLoginComponent},
  {path:'RestaurantSignup',component:RestaurantSignupComponent},
  {path:'AddRestaurant',component:AddRestaurantComponent},
  {path: 'RegisterRestaurant', component:RestaurantRegistrationComponent},
  {path:'updateItem/:Iid',component:UpdateItemComponent},
  {path:'customer',component:CustomerDataComponent},
  {path:'customerEdit/:id',component:CustomerDataEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
