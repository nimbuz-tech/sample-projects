import { Routes } from '@angular/router';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderCreateComponent } from './pages/order-create/order-create.component';

export const ORDERS_ROUTES: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'new', component: OrderCreateComponent },
];
