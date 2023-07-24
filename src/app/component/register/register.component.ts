import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // cust:Customer=new Customer(this.customername,0,'','');
  customername:string="";
  customermobilenumber:string='';
  //customeremail:string="ijk@gmail.com";
  customeremail:string="";
  password:string="";
  successmessage:string="";
  //cust:Customer;
  cust:Customer=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);

  constructor(public dialog: MatDialogRef<RegisterComponent>,private loginservice:LoginService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.customername=this.route.snapshot.params['customername']; //to take url id 
    
    this.cust=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);
    //console.log(this.customeremail=this.customeremail);
  }

  saveCustomer(){
    console.log("Inside register"+this.customername);
    this.loginservice.addCustomer(this.cust).subscribe(
      data=>{
        this.cust=data;
        console.log(data);
        alert("Registration Successful! Please Login");
        this.successmessage="Registration Successful! Please Login";
        this.dialog.close();
        //this.router.navigate(['login']);
      }
  
    )
  }

}



export class Customer{
  // [x: string]: any;
  // role : string = '';
  constructor(public customername:string, public customermobilenumber:string, public customeremail:string, public password:string){}
}