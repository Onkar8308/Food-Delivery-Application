
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantLogin, RestaurantLoginService } from 'src/app/service/restaurant-login.service';

@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.css']
})

export class RestaurantSignupComponent {
  loginData: { restloginemail: string, restloginpassword: string } = {
    restloginemail: '',
    restloginpassword: ''
  };

  constructor(private loginservice: RestaurantLoginService, private router: Router) { }

  loginRestaurant() {
    console.log("Inside login");

    this.loginservice.getResaturantLoginByEmail(this.loginData.restloginemail, this.loginData.restloginpassword)
      .subscribe(
        (data: RestaurantLogin) => {
          if (data) {
            console.log("Login successful");
            // Redirect to AddRestaurant page or any other page you want
            this.router.navigate(['AddRestaurant']);
          } else {
            console.log("Login failed");
            // Handle login failure, show error message, etc.
          }
        },
        error => {
          console.error("Login error:", error);
          // Handle login error, show error message, etc.
        }
      );
  }
}

