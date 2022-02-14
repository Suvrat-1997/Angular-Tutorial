import { Component } from '@angular/core';

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


==> app.component.ts

interface Employee{
  name: string,
  age: number,
  email: string,
  phone: number,
  address: any
}

getData() {
    let employee: Employee = {
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      address: 'Delhi, 70012547'
    };
    return employee;
  }

==> app.component.html

<h3>Name: {{getData().name}}</h3>
<h3>Age: {{getData().age}}</h3>
<h3>Email: {{getData().email}}</h3>
<h3>Phone: {{getData().phone}}</h3>
<h3>Address: {{getData().address}}</h3>


*/

interface Employee{
  name: string,
  age: number,
  email: string,
  phone: number,
  address: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() { }

  getData() {
    let employee: Employee = {
      name: 'Anil',
      age: 35,
      email: 'anil123@gmail.com',
      phone: 7854120365,
      address: 'Delhi, 70012547'
    };
    return employee;
  }

}
