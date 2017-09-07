import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order-list/order.component';
import { OrderDetailComponent } from './order-list/order-detail.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish-list/dish.component';

import { OrderService } from './services/order.service';
import { DishService } from './services/dish.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderListComponent,
    OrderComponent,
    DishListComponent,
    DishComponent,
    OrderDetailComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [OrderService,DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
