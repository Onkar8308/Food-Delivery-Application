import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private dialog:MatDialog){}

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
