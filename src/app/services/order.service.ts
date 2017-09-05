import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable()
export class OrderService {
    private orders: Order[] = [
        new Order('1','Javier','20.50'),
        new Order('2','Javier','22.10'),
        new Order('3','Javier','25.50')
    ];
    constructor() { }
    
    getOrders(){
        return this.orders;
    }
}
