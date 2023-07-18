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
export class LoginComponent implements OnInit{

  customeremail:string="";
  password:string="";
  private cust = new Customer('',0,'','');

  //constructor(private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService){}
  constructor(private loginservice:LoginService,private route:ActivatedRoute, private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService){}
  ngOnInit(): void {
    if(this.hardcodedAuthentication.isUserLoggedIn()){
      this.router.navigate(['welcome',localStorage.getItem('customerid')]);
    }
    else{
      this.router.navigate(['login']);
    }
  }

  loginValid(){

    this.cust.customeremail = this.customeremail;
    this.cust.password = this.password;

    // this.loginservice.getCustomerByEmail(this.customeremail,this.password).subscribe(
    //   response =>{
    //     let result = 
    //   }
    //)

    if(this.hardcodedAuthentication.authenticateUser(this.customeremail,this.password)){
      // this.res = "Valid user";
      //this.router.navigate(['welcome',this.customername]);

      this.router.navigate(['welcome',localStorage.getItem('customerid')])
    }
    else{
      this.router.navigate(['login']);
    }

  }
 

}

