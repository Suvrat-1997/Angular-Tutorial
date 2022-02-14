import { Component } from '@angular/core';
import { Employee } from './interfaces/employee';

/*

                          Interface in Angular

An interface is a structure that defines the syntax for classes to follow.

Interface define properties, method, and events, which are the members of the interface. 
Interfaces contain only the declaration of the member.

Ex: -

interface Employee{
  id: number,
  name: string,
  age: number, 
  email: string, 
  phone: number
}

==> ng g interface interfaces/employee

==> interfaces/employee.ts

export interface Employee {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: number,
    address: any
}


==> app.component.ts

import { Employee } from './interfaces/employee';

 empDetails: any;

  constructor() { 
    this.getData();
  }

  getData() {
    let employee: Employee = {
      id: 101,
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      address: 'Delhi, 70012547'
    };
    this.empDetails = employee;
  }

==> app.component.html

<h3>Id: {{empDetails.id}}</h3>
<h3>Name: {{empDetails.name}}</h3>
<h3>Age: {{empDetails.age}}</h3>
<h3>Email: {{empDetails.email}}</h3>
<h3>Phone: {{empDetails.phone}}</h3>
<h3>Address: {{empDetails.address}}</h3>


*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  empDetails: any;

  constructor() { 
    this.getData();
  }

  getData() {
    let employee: Employee = {
      id: 101,
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      address: 'Delhi, 70012547'
    };
    this.empDetails = employee;
  }

}
