import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Restaurant } from 'src/app/class/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  restaurant:Restaurant[]=[];
  isUserLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){
  }

  p: number = 1;
  count: number = 6;


 
  ngOnInit(): void {
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
   }

   searchByKeyword(searchkeyword: string=""){
    this.restaurant = [];
    this.getAllRestaurants(searchkeyword);
   } 

   public getAllRestaurants(searchkeyword:string=""){
    this.restaurantservice.getAllRestaurant(searchkeyword)
    .subscribe(
      (response:Restaurant[])=>{
        response.forEach((res)=>this.restaurant.push(res));
        this.restaurantservice.setRestaurantData(this.restaurant);

      }
      ,(error: HttpErrorResponse)=>{
      }
    )
   }

   viewRestaurant(id:number){
    this.router.navigate(['item',id])
  }
  
}
