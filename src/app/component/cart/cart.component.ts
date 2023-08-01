import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cart } from 'src/app/class/cart';
import { Item } from 'src/app/class/item';
import { CartService } from 'src/app/service/cart.service';
import { CustomerAddresssService } from 'src/app/service/customer-addresss.service';
import { CustomerService } from 'src/app/service/customer.service';
import { InvoiceService } from 'src/app/service/invoice.service';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  valid: boolean = false;
  email: any;
  inputdata: any;
  cartID!: number;
  cartDetails!: Cart;
  item: Item[]=[];
  total: number = 0;
  customerId: number;
  addId: number;
  quantityofItem:any=1;

  constructor(private dialog: MatDialog,
    private invoice: InvoiceService,
    private paymentdialoge: MatDialog,
    private cartService: CartService,
    private router: Router,
    private builder: FormBuilder,
    private customeraddService: CustomerAddresssService,
    private customerService:CustomerService
  ) { }

  onSelected(value:string):void{
    this.quantityofItem=value;
  }

  ngOnInit(): void {

    this.email = sessionStorage.getItem('authenticateduser');

    this.cartService.getCartByEmail(this.email).subscribe(cartData => {
      this.cartID = cartData.id;
      this.customerId = cartData.cust.customerid;
      this.cartService.getCartById(this.customerId).subscribe(cart => {
        this.cartDetails = cart;
        console.log(this.cartDetails);
        this.item = cart.itemList;
        for (let i = 0; i < cart.itemList.length; i++) {
          this.total = this.total +cart.itemList[i].itemcost;
          console.log(this.quantityofItem);
          if (this.total > 0) {
            this.valid = true;
            console.log(this.total)
          }
        }
      });
    });

    console.log(this.cartID)


  }

  addressForm = this.builder.group({
    area: this.builder.control('', [Validators.required, Validators.minLength(10)]),
    city: this.builder.control('', [Validators.required]),
    state: this.builder.control('', [Validators.required]),
    pincode: this.builder.control('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]),
    country: this.builder.control('', [Validators.required])
  })

  saveAdd() {
    console.log(this.addressForm.value);
    this.customeraddService.saveCustomerAdd(this.addressForm.value).subscribe(customerAdd => {
      console.log(customerAdd);
      
      this.addId = customerAdd.addressid;
      console.log(this.customerId);
      this.customeraddService.assignAddToCustomer(this.customerId, this.addId).subscribe(data=>{
        console.log(data);
      });
    });
    alert("address saved succefully");
  }


  showPreviusAdd(){

    this.dialog.open(CustomerAddComponent, {
      height: '73vh',
      width: '120vh',
      data:this.total
  
    });
   
  }


  payment(id:number) {
    console.log(this.cartID);

    this.dialog.open(PaymentComponent, {
      height: '73vh',
      width: '70vh',
      data:id
    });
  }



}

const pincodeValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
  const value = control.value;
  const isValid = /^\d{6}$/.test(value); // Check if the value contains exactly 6 digits
  return isValid ? null : { invalidPincode: true };
};
