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

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'paymentModule',component:PaymentModuleComponent},
  {path:'restaurant',component:RestaurantsComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
