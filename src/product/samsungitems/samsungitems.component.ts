import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SAMSUNGITEMS } from '../mock-samsungitems';
import { Samsung } from '../samsung';
import { SamsungComponent } from './samsung/samsung.component';

@Component({
  standalone:true,
  selector: 'app-samsungitems',
  templateUrl: './samsungitems.component.html',
  styleUrls: ['./samsungitems.component.css'],
  imports:[SamsungComponent,CommonModule],
})
export class SamsungitemsComponent implements OnInit {
  samsungitems:Samsung[]=[];
  constructor() { }

  ngOnInit() {
    this.samsungitems=SAMSUNGITEMS;
  }

}