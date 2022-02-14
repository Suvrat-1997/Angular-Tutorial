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

// Array Interface
interface Customer {
  [index: number]: string | number
}

constructor() {
    let cstNo: Customer = [502, 'xc101', 501, 'xc102', 'xc103', 503];
    console.log(cstNo);
  }


*/

// Array Interface
interface Customer {
  [index: number]: string | number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor() {
    let cstNo: Customer = [502, 'xc101', 501, 'xc102', 'xc103', 503];
    console.log(cstNo);
  }

}
