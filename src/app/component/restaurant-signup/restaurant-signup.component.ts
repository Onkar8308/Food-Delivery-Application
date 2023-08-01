import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { RestaurantLoginService, RestaurantRegistration } from 'src/app/service/restaurant-login.service';

@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.css']
})

export class RestaurantSignupComponent {
  id:number;

  loginData: { restloginemail: string, restloginpassword: string } = {
    restloginemail: '',
    restloginpassword: ''
  };

  constructor(private loginservice: RestaurantLoginService, private router: Router,
    private hardcodedAuth:HardcodedAuthenticationService) { }

  loginRestaurant() {

    this.loginservice.getResaturantLoginByEmail(this.loginData.restloginemail, this.loginData.restloginpassword)
      .subscribe(
        (data: RestaurantRegistration) => {

          if (data) {
            this.hardcodedAuth.authenticateRest(this.loginData.restloginemail,this.loginData.restloginpassword);
            alert("Login Successful!")
            this.router.navigate(['item',data.restid]);
          } else {
            alert("Login failed")
          }
        },
        error => {
          console.error("Login error:", error);
        }
      );
  }


}