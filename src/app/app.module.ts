import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order-list/order.component';

import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
