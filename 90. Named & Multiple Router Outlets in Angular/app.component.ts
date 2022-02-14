import { Component } from '@angular/core';

/*

                          Named & Multiple Router Outlets in Angular

Router-outlet in Angular works as a placeholder which is used to load the different components dynamically
based on the activated component or current route state.

1. <router-outlet></router-outlet>  (Unnamed router outlet as primary outlet)

2. <router-outlet name="second"></router-outlet>  (Named router outlet as secondary outlet)

==> ng g class model/customer

==> model/cutomer.ts

export class Customer {
    id!: number;
    name!: string;
    email!: string;
    phone!: number;

    constructor(){}
}

==> ng g s services/user-data

==> user-data.service.ts

import { Customer } from '../model/customer';

const customerData:Customer[]=[
  { "id": 1, "name": "Shuvasis", "email": "shuvasis1234@gmail.com", "phone": 7845123698 },
  { "id": 2, "name": "Rahul", "email": "rahul34@gmail.com", "phone": 9856214035 },
  { "id": 3, "name": "Sumon", "email": "sumon4@gmail.com", "phone": 8965210475 },
  { "id": 4, "name": "Ram", "email": "mar234@gmail.com", "phone": 8745120365 },
  { "id": 5, "name": "Priya", "email": "priya12@gmail.com", "phone": 9800456820 },
  { "id": 6, "name": "Pradeep", "email": "pra4@gmail.com", "phone": 8001606589 },
  { "id": 7, "name": "Rohit", "email": "rohit34@gmail.com", "phone": 7501458730 },
];

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getCustomerData(){
    return customerData;
  }
}

==> ng g m customer --route customer --module app.module  (create Lazy Loading Module)

CREATE src/app/customer/customer-routing.module.ts
CREATE src/app/customer/customer.module.ts
CREATE src/app/customer/customer.component.html
CREATE src/app/customer/customer.component.spec.ts
CREATE src/app/customer/customer.component.ts
CREATE src/app/customer/customer.component.css
UPDATE src/app/app-routing.module.ts

==> ng g m order --route order --module app.module   (create Lazy Loading Module)

CREATE src/app/order/order-routing.module.ts
CREATE src/app/order/order.module.ts
CREATE src/app/order/order.component.html
CREATE src/app/order/order.component.spec.ts
CREATE src/app/order/order.component.ts
CREATE src/app/order/order.component.css
UPDATE src/app/app-routing.module.ts

==> ng g c customerlist
==> ng g c orderlist

==> customerlist.component.ts

import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

  customerArr: any;

  constructor(private _service: UserDataService, private _router: Router) { }

  ngOnInit(): void {
    this.customerArr = this._service.getCustomerData();
  }

  close(){
    this._router.navigate([{outlets:{'customerList': null}}])
  }

==> customerlist.component.html

<table border="1">
<thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let cust of customerArr;">
        <td>{{cust.id}}</td>
        <td>{{cust.name}}</td>
        <td>{{cust.email}}</td>
        <td>{{cust.phone}}</td>
    </tr>
</tbody>
</table>
<p>&nbsp;</p>
<button type="button" (click)="close()">Close</button>

==> app-routing.module.ts

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

==> app.component.html

<nav>
    <ul>
        <li><a routerLink="customer">Customer</a></li>
        <li><a routerLink="order">Order</a></li>
        <li><a [routerLink]="[{outlets:{customerList:['customer-list']}}]">Customer List</a></li>
        <li><a [routerLink]="[{outlets:{orderList:['order-list']}}]">Order List</a></li>
    </ul>
</nav>
<router-outlet></router-outlet>
<router-outlet name="customerList"></router-outlet>
<router-outlet name="orderList"></router-outlet>

*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {




  constructor() { }

}
