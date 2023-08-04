import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cartId:number;
  cart1 = { };

  customername:string="";
  customermobilenumber:string='';
  customeremail:string="";
  password:string="";
  successmessage:string="";
  cust:Customer=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);

  constructor(public dialog: MatDialogRef<RegisterComponent>,private loginservice:LoginService,private route:ActivatedRoute, private router:Router,private cart:CartService){}
  ngOnInit(): void {
    this.customername=this.route.snapshot.params['customername']; //to take url id 
    
    this.cust=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);
  }

  saveCustomer(){
    console.log("Inside register"+this.customername);
    this.loginservice.addCustomer(this.cust).subscribe(
      customer=>{
        this.cust=customer;
        alert("Registration Successful! Please Login");
        this.successmessage="Registration Successful! Please Login";
        this.dialog.close();

        this.cart.saveCart(this.cart1).subscribe(data=>{
          this.cartId=data.id;  
    
          this.cart.addCustomerToCart(this.cartId,customer).subscribe(cartwithcu=>{
      
          })
    
         })
      }
  
    )
  }

}





export class Customer{
  constructor(public customername:string, public customermobilenumber:string, public customeremail:string, public password:string){}
}