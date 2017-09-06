import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  
  
  constructor(private dishservice:DishService) { }

  ngOnInit() {
    this.dishes = this.dishservice.getDishes();
  }

}
