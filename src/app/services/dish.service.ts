import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable()
export class DishService {

  private dishes: Dish[] = [
        new Dish('1','Entrante','Alitas','http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.cl/files/BK_Web_SteakHouse_300x270.jpg'),
        new Dish('2','Primero','Ternera','http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.cl/files/BK_Web_SteakHouse_300x270.jpg'),
        new Dish('3','Segundo','Pescado','http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.cl/files/BK_Web_SteakHouse_300x270.jpg')
    ];
    constructor() { }
    
    getDishes(){
        return this.dishes;
    }

}
