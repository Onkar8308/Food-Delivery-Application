import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/class/restaurant';
import { DataRestaurantService } from 'src/app/service/data-restaurant.service';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.css']
})
export class RestaurantDataComponent {
  id:number;
  restaurants:Restaurant[]=[];

  constructor(private restrservice:DataRestaurantService,private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.restrservice.retriveAllRestaurant().subscribe(
      response =>{
        this.restaurants = response;
        console.log(this.restaurants);
      }
    )
  }

  restupdate(id:number){
    this.router.navigate(['restaurantEdit',id]);
  }
  restdelete(id:number){
    this.id=this.route.snapshot.params['id'];

    this.restrservice.deleterest(id).subscribe(
      respose=>{
        this.restaurants=respose;
        console.log(this.restaurants);
      } 
    );
  }

}