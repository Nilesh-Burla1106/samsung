import { Component, OnInit } from '@angular/core';
import { SamsungitemsComponent } from './samsungitems/samsungitems.component';
import { SamsungproductDetailsComponent } from './samsungproduct-details/samsungproduct-details.component';

@Component({
  standalone:true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports:[SamsungitemsComponent,SamsungproductDetailsComponent]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}