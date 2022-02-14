import { Component } from '@angular/core';
import { Employee } from './interfaces/employee';
import { EmployeeAddress } from './interfaces/employee-address';

/*

                          Interface Extends in Angular

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
==> ng g interface interfaces/employee-address

==> interfaces/employee.ts

export interface Employee {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: number
}

==> interface/employee-address.ts

export interface EmployeeAddress {
    street: string,
    city: string,
    zip_code: number
}


==> app.component.ts

import { Employee } from './interfaces/employee';
import { EmployeeAddress } from './interfaces/employee-address';

interface combineInterface extends Employee, EmployeeAddress{
  company: string,
  salary: number
}

  empDetails: any;

  constructor() { 
    this.getData();
  }

  getData() {
    let employee: combineInterface = {
      id: 101,
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      street: 'Noida',
      city: 'Delhi',
      zip_code: 70012570,
      company: 'TCS',
      salary: 25000
    };
    this.empDetails = employee;
  }

==> app.component.html

<h3>Id: {{empDetails.id}}</h3>
<h3>Name: {{empDetails.name}}</h3>
<h3>Age: {{empDetails.age}}</h3>
<h3>Email: {{empDetails.email}}</h3>
<h3>Phone: {{empDetails.phone}}</h3>
<h3>Address: {{empDetails.street}}, {{empDetails.city}}, {{empDetails.zip_code}}</h3>
<h3>Company: {{empDetails.company}}</h3>
<h3>Salary: {{empDetails.salary}}</h3>


*/

interface combineInterface extends Employee, EmployeeAddress{
  company: string,
  salary: number
}


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
    let employee: combineInterface = {
      id: 101,
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      street: 'Noida',
      city: 'Delhi',
      zip_code: 70012570,
      company: 'TCS',
      salary: 25000
    };
    this.empDetails = employee;
  }

}
