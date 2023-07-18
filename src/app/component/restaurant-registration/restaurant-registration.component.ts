import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataViewRestaurantService } from 'src/app/service/data-view-restaurant.service';

@Component({
  selector: 'app-restaurant-registration',
  templateUrl: './restaurant-registration.component.html',
  styleUrls: ['./restaurant-registration.component.css']
})
export class RestaurantRegistrationComponent implements OnInit {

  constructor(
    private data: DataViewRestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  registrationForm= new FormGroup({
    restname :new FormControl(''),
    area: new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    country:new FormControl(''),
    pincode:new FormControl(''),
    managerName:new FormControl(''),
    contactNumber:new FormControl('')
  })
  ngOnInit(): void {}
   addRestaurant(): void {
    console.log(this.registrationForm.value);
    const restaurant = {
      restname: this.registrationForm.value.restname,
      area: this.registrationForm.value.area,
      city: this.registrationForm.value.city,
      state: this.registrationForm.value.state,
      country: this.registrationForm.value.country,
      pincode: this.registrationForm.value.pincode,
      // pic:this.registrationForm.value.pic
      managerName: this.registrationForm.value.managerName,
      contactNumber: this.registrationForm.value.contactNumber
    };

    // this.data.addRestaurant(restaurant).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     //this.router.navigate(['/success', response.addressid]);
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );

    this.data.addRestaurant(restaurant).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['restaurant'])
      },
      (error:any) =>{
        console.log(error);
      }
    );
  }
}
 
