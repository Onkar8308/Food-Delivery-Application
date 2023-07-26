import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/class/restaurant';
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




