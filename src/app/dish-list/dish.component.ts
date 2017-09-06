import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styles: []
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
