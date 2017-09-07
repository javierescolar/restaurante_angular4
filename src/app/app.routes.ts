import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'dishes', component: DishListComponent }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);
