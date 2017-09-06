import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable()
export class DishService {

  private dishes: Dish[] = [
        new Dish('1','Entrante','Alitas','image1.jpg'),
        new Dish('2','Primero','Ternera','image2.jpg'),
        new Dish('3','Segundo','Pescado','image3.jpg')
    ];
    constructor() { }
    
    getDishes(){
        return this.dishes;
    }

}
