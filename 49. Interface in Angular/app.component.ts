import { Component } from '@angular/core';
import { Customer } from './interfaces/customer';
import { UserService } from './services/user.service';


/*
                                  Interface in Angular

Interface is used to define data structure.

==> ng g interface interfaces/customer

==> customer.ts

export interface Customer {
    name: string,
    age: number,
    mobile: string,
    addr: any,
    salary: number
}

==> ng g s services/user

==> user.service.ts

import { Customer } from '../interfaces/customer';

getData() {
    const userList: Customer = {
      name: 'Sumit',
      age: 25,
      mobile: '9875412035',
      addr: 'Noida',
      salary: 25000
    };
    return userList;
  }


==> app.component.ts

import { Customer } from './interfaces/customer';
import { UserService } from './services/user.service';

  profile: any;

  constructor(private _user: UserService) { 
    this.profile = this._user.getData();
    console.log(this.gettingValue());
  }

  gettingValue() {
    const dataList: Customer = {
      name: 'Rahul',
      age: 28,
      mobile: '7845120368',
      addr: 'PKU, 721419, Medinipur',
      salary: 30000
    }
    return dataList;
  }

==> app.component.html

<h3>Name: {{profile.name}}</h3>
<h3>Age: {{profile.age}}</h3>
<h3>Mobile: {{profile.mobile}}</h3>
<h3>Address: {{profile.addr}}</h3>
<h3>Salary: {{profile.salary}}</h3>
<br><br>
<h3>{{gettingValue().name}}</h3>
<h3>{{gettingValue().age}}</h3>
<h3>{{gettingValue().mobile}}</h3>
<h3>{{gettingValue().addr}}</h3>
<h3>{{gettingValue().salary}}</h3>

==> index.html

<body>
  <app-root></app-root>
</body>



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  profile: any;

  constructor(private _user: UserService) { 
    this.profile = this._user.getData();
    console.log(this.gettingValue());
  }

  gettingValue() {
    const dataList: Customer = {
      name: 'Rahul',
      age: 28,
      mobile: '7845120368',
      addr: 'PKU, 721419, Medinipur',
      salary: 30000
    }
    return dataList;
  }

}


