import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { CustomerdataService } from 'src/app/service/customerdata.service';

@Component({
  selector: 'app-customer-data-edit',
  templateUrl: './customer-data-edit.component.html',
  styleUrls: ['./customer-data-edit.component.css']
})
export class CustomerDataEditComponent {
  id:number=0;

  customer:Customer;

  constructor(private customerservice:CustomerdataService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']; //to take url id 
    console.log(this.id);

    this.customer=new Customer(this.id,'','','','','');
 if(this.id){
 this.customerservice.getCustomerById(this.id).subscribe(
  data=>this.customer=data);
}
  }

  updatingCustomer(){
    this.id = this.route.snapshot.params['id'];
    this.customerservice.updatecustomerById(this.id,this.customer).subscribe(
      (response:any) => {
        console.log(response);
      },

      (error:any) => {
        console.log(error);
      }
    )


  }

}