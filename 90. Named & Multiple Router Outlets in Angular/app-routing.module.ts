import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  {
    path: 'customer-list',
    component: CustomerlistComponent,
    outlet: "customerList"
  },
  {
    path: 'order-list',
    component: OrderlistComponent,
    outlet: "orderList"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
