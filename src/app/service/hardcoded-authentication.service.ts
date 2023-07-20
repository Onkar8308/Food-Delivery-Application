import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticate(email:string,password:string){
    sessionStorage.setItem("authenticateduser",email);
    return true;
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
