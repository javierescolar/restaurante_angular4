import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order';

import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder: Order;
  
  constructor(private orderservice:OrderService) { }

  ngOnInit() {
    this.orders = this.orderservice.getOrders();
  }
  
  onSelect(order:Order){
    this.selectedOrder = order;
  }
}
