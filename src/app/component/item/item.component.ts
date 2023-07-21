import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item';
import { ItemServiceService } from 'src/app/service/item-service.service';
import { Restaurant } from '../restaurants/restaurants.component';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id:number;

  items : Item[] = [];


  restaurant : Restaurant;

  constructor(public hardcodedAuthentication:HardcodedAuthenticationService,private itemservice: ItemServiceService,private router:Router,private route:ActivatedRoute){};


  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
    // this.itemservice.retriveAllItem().subscribe(
    //   response =>{
    //     this.items = response;
    //     console.log(response);
    //     console.log(this.items)
    //   }
    // )

      this.itemservice.getItemByRestId(this.id).subscribe(
        data=>{
        console.log(data);
        this.items=data;
        }
       )
  }

  

  addToCart(): void {}

  updateItem(id:number): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['updateItem',id,this.id]);
  }
  
  deleteItem(id:number): void {
    this.id=this.route.snapshot.params['id'];

    this.itemservice.deleteItem(id,this.id).subscribe(
      respose=>{
        this.items=respose;
        console.log(this.items);
        // this.router.navigate(['item',this.id]);
      } 
    );
  }

  addItem(): void {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['registerItem',this.id]);
  }
}
