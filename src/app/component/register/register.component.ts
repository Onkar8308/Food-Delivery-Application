import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  customermobilenumber:number=0;
  //customeremail:string="ijk@gmail.com";
  customeremail:string="";
  password:string="";
  //cust:Customer;
  cust:Customer=new Customer(this.customername,this.customermobilenumber,this.customeremail,this.password);

  constructor(private loginservice:LoginService,private route:ActivatedRoute, private router:Router){}
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
        //this.router.navigate(['login']);
      }
  
    )
  }

}

export class Customer{
  constructor(public customername:string, public customermobilenumber:number, public customeremail:string, public password:string){}
}
