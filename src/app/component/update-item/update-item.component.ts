import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item';
import { ItemServiceService } from 'src/app/service/item-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  id: number;

  item: Item;

  constructor(private router: Router, private route: ActivatedRoute, private data:ItemServiceService){};

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new Item(this.id,'','',0,'');

    // if (this.id != -1) {
    //   this.data.getItemByRestId(this.id).subscribe(
    //     data => this.item = data;
    // }
  }

  
  updateForm = new FormGroup({
    itemname : new FormControl(''),
    itemstatus : new FormControl(''),
    itemcost : new FormControl('')
  });

  
  updateItem() : void {
    this.id = this.route.snapshot.params['id'];

    // this.item = {
    //   this.itemname = this.updateForm.value.itemname,
    //   this.itemstatus = this.updateForm.value.itemstatus,
    //   this.itemcost = this.updateForm.value.itemcost
    // };



    // this.item = new Item(this.id,'','',0,'');

    this.data.updateItemById(this.id,this.item).subscribe(
      (response:any) => {
        console.log(response);
      },

      (error:any) => {
        console.log(error);
      }
    )
  }; 
}
