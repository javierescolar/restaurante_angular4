import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {
  @Input() selectedOrder:Order;
  constructor() { }

  ngOnInit() {
  }
  
  disabledSelectedOrden(){
    this.selectedOrder = null;
  }
  
}
