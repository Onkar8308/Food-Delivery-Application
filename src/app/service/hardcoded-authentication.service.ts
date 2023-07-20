import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(email:string,password:string){

    sessionStorage.setItem("authenticateduser",email);
    return true;
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticateduser');
  return !(user==null);
}

logout(){
  sessionStorage.removeItem('authenticateduser');
}


  authenticateAdmin(email:string,password:string){
    sessionStorage.setItem("authenticatedadmin",email);
    return true;
  }


  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('authenticatedadmin');
    return !(admin==null);
  }


  Adminlogout(){
    sessionStorage.removeItem('authenticatedadmin');
  }
  
}
