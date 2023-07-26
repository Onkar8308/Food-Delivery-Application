import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  p: number = 1;
  count: number = 6;

  restaurant:Restaurant[]=[];
 

constructor(private restaurantservice:DataRestaurantService,private router:Router){
  console.log('Application loaded. Initializing data.');
}
ngOnInit(): void {
  // this.restaurantservice.retriveAllRestaurant().subscribe(
  //   response =>{
  //     this.restaurant = response;
  //     console.log("nidhi"+response);
  //   }
  // )
  this.restaurantservice.getRestaurantData().subscribe((data) => {
        // Update the restaurants array with the data from the service
        this.restaurant = data;
        console.log("NNNNNN"+data);
      });
}
viewRestaurant(id:number){
  this.router.navigate(['item',id])
}

}


export class Restaurant{
constructor(
  public restid:number,
  public area:string,
  public city:string,
  public country:string,
  public pincode:number,
  public state:string,
  public pic:string,
  public restname:string,
  public managerName:string,
  public contactNumber:string,
  public status:boolean,
){}
}
