import { Component } from '@angular/core';

/*

                                      json Pipe in Angular

  
==> app.component.html

<p>{{employee}}</p> // [object object]
<p>{{employee | json}}</p>
<p>{{employee | json | uppercase}}</p>


==> app.component.ts

employee = [
    {
      name: 'Rahul',
      salary: 25000,
      age: 23
    },
    {
      name: 'Priya',
      salary: 18000,
      age: 20
    },
    {
      name: 'Sumit',
      salary: 20000,
      age: 19
    },
    {
      name: 'Susmita',
      salary: 30000,
      age: 25
    }
  ];


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  employee = [
    {
      name: 'Rahul',
      salary: 25000,
      age: 23
    },
    {
      name: 'Priya',
      salary: 18000,
      age: 20
    },
    {
      name: 'Sumit',
      salary: 20000,
      age: 19
    },
    {
      name: 'Susmita',
      salary: 30000,
      age: 25
    }
  ];

}
