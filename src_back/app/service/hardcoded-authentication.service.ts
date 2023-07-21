import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticateAdmin(adminname:string,password:string){
    if(adminname==="admin" && password==="admin123"){
      sessionStorage.setItem("authenticatedAdmin",adminname);
      return true;
    }
    return false;
  }

  authenticateUser(username:string,userpassword:string){
    if(username==="admin" && userpassword==="admin123"){
      sessionStorage.setItem("authenticatedUser",username);
      return true;
    }
    return false;
  }


  constructor() { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user=null)
  }

  logoutUser(){
    sessionStorage.removeItem("authenticatedUser");
  }

  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('authenticatedUser');
    return !(admin==null);
  }

  logoutAdmin(){
    sessionStorage.removeItem('authenticatedAdmin');
  }
}
