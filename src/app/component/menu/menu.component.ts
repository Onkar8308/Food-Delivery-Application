import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurants/restaurants.component';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';
import { BehaviorSubject, map } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  restaurant:Restaurant[]=[];
  //restaurant2:Restaurant[]=[];

  isUserLoggedIn:boolean=false;

  constructor(private restaurantservice:DataRestaurantService,private dialog:MatDialog, public hardcodedAuthentication:HardcodedAuthenticationService,public router:Router){}

  ngOnInit(): void {
    //this.restaurantservice.getAllRestaurant();
    this.getAllRestaurants();
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
   }

   searchByKeyword(searchkeyword: string=""){
    console.log(searchkeyword)
    this.restaurant = [];
    this.getAllRestaurants(searchkeyword);
   } 

   public getAllRestaurants(searchkeyword:string=""){
    this.restaurantservice.getAllRestaurant(searchkeyword)
    .subscribe(
      (response:Restaurant[])=>{
        // resp = this.restaurant;
       // console.log("**********"+response);
        response.forEach((res)=>this.restaurant.push(res));
        console.log('msg',this.restaurant);
        this.restaurantservice.setRestaurantData(this.restaurant);
         //console.log("**********"+response);
        //resp = this.restaurant

      }
      ,(error: HttpErrorResponse)=>{
        console.log(error);
      }
    )
    // this.restaurantservice.retriveAllRestaurant().subscribe(
    //   response =>{
    //     this.restaurant = response;
    //     console.log(response);
    //     // console.log(this.restaurant)
    //   }
    // )

   }


  //for login popup
  Openpopup(){
    this.dialog.open(LoginComponent,{
      width:'60%',
      height:'400px'
    })
  }

  //for sign in popup
  Openpopup2(){
    this.dialog.open(RegisterComponent,{
      width:'50%',
      height:'500px'
    })
  }

  customerview(){ 
    this.router.navigate(['customeradmin']); 
  }
  resturantview(){
    this.router.navigate(['restaurantadmin'])
  }

  adminlogout(){
    sessionStorage.removeItem("authenticatedadmin");
    sessionStorage.removeItem("authenticateduser");
    sessionStorage.removeItem("authenticatedrest");
    this.router.navigate(['']);
  }

  
}
