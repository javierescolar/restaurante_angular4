import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

}
