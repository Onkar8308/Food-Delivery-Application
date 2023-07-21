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
    let user = sessionStorage.getItem('authenticateduser');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('authenticateduser');
  }
}
