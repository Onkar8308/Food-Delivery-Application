import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //constructor(private dialog:MatDialog, public hardcodedAuthentication:HardcodedAuthenticationService){}

  // //for login popup
  // Openpopup(){
  //   this.dialog.open(LoginComponent,{
  //     width:'60%',
  //     height:'400px'
  //   })
  // }

  // //for sign in popup
  // Openpopup2(){
  //   this.dialog.open(RegisterComponent,{
  //     width:'50%',
  //     height:'500px'
  //   })
  // }

  isUserLoggedIn:boolean=false;

  constructor(private dialog:MatDialog, public hardcodedAuthentication:HardcodedAuthenticationService){}

  ngOnInit(): void {
    this.isUserLoggedIn=this.hardcodedAuthentication.isUserLoggedIn();
   }
  //for login popup
  Openpopup(){
    this.dialog.open(LoginComponent,{
      width:'60%',
      height:'400px'
    })
  }

  //for sign in popup
  Openpopup2(){
    this.dialog.open(RegisterComponent,{
      width:'50%',
      height:'500px'
    })
  }


}
