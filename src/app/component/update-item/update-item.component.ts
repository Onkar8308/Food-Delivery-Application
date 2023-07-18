import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemServiceService } from 'src/app/service/item-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  id: number = 0;

  ngOnInit(): void {
    
  }

  constructor(private router: Router, private route: ActivatedRoute, private data:ItemServiceService){};
  
  updateForm = new FormGroup({
    itemname : new FormControl(''),
    itemstatus : new FormControl(''),
    itemcost : new FormControl('')
  });

  updateItem() : void {
    this.id = this.route.snapshot.params['id'];

    const Items = {
      itemname : this.updateForm.value.itemname,
      itemstatus : this.updateForm.value.itemstatus,
      itemcost : this.updateForm.value.itemcost
    };

    this.data.updateItemById(this.id,Items).subscribe(
      (response:any) => {
        console.log(response);
      },

      (error:any) => {
        console.log(error);
      }
    )
  }; 
}
