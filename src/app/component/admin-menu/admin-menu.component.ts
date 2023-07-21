import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/class/admin';
import { AdminLoginService } from 'src/app/service/admin-login.service';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {

  isAdminLoggedIn:boolean=false;

  loginData: { adminloginemail: string, adminloginpassword: string } = {

    adminloginemail: '',
   
    adminloginpassword: ''
   
   };
    constructor(private loginservice: AdminLoginService, private router: Router , public hardcodedAuthentication:HardcodedAuthenticationService) { }
    
    ngOnInit(): void {
      this.isAdminLoggedIn=this.hardcodedAuthentication.isAdminLoggedIn();

     }

    loginValid() {
      console.log("Inside login");
      this.loginservice.getAdminByEmail(this.loginData.adminloginemail, this.loginData.adminloginpassword).subscribe(
      (data: Admin) => {
      if (data) {
      console.log("Login successful");
      this.hardcodedAuthentication.authenticateAdmin(this.loginData.adminloginemail,this.loginData.adminloginpassword);
    
      this.router.navigate(['admin']);
   
    } else {
   
    console.log("Login failed");
   
    // Handle login failure, show error message, etc.
   
    }
   
    },
   
      (    error: any) => {
   
    console.error("Login error:", error);
   
    // Handle login error, show error message, etc.
   
    }
   
    );
   
  }

  // isUserLoggedIn(){
  //   let user=sessionStorage.getItem('authenticateuser');
  //  // alert("user="+user);
  //   return !(user===null)
  // }

  // logout(){
  //   sessionStorage.removeItem("authenticateuser");
  // }

  //constructor(private router:Router){}
  
  customerview(){ 
    this.router.navigate(['customeradmin']); 
  }
  resturantview(){
    this.router.navigate(['restaurantadmin'])
  }

  adminlogout(){
    // sessionStorage.removeItem("authenticatedadmin");
    // this.router.navigate(['admin']);
  }


}