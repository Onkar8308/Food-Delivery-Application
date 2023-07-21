import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';
import { Customer } from '../register/register.component';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginData: { restloginemail: string, restloginpassword: string } = {

    restloginemail: '',
   
    restloginpassword: ''
   
   };
   
   
   
   
    constructor(private hardcodedAuthentication:HardcodedAuthenticationService,private loginservice: LoginService, private router: Router) { }
   
   
   
   
    loginValid() {
   
   console.log("Inside login");
   
   
   
   
    this.loginservice.getcustomerByEmail1(this.loginData.restloginemail, this.loginData.restloginpassword)
   
    .subscribe(
   
    (data: Customer) => {
   
    if (data) {
   
   this.hardcodedAuthentication.authenticate(this.loginData.restloginemail,this.loginData.restloginpassword);

    console.log("Login successful");
   
    // Redirect to AddRestaurant page or any other page you want
   
    this.router.navigate(['restaurant']);
   
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