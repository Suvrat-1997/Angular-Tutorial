import { Component } from '@angular/core';

/*

                                      TrackBy with *ngFor Directive in Angular

  
==> app.component.html

<table border="1">
  <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let emp of employee; let i=index; trackBy: getEmployeeMoreData">
      <td>{{i+1}}</td>
      <td>{{emp.name}}</td>
      <td>{{emp.age}}</td>
      <td>{{emp.email}}</td>
    </tr>
  </tbody>
</table>
<br><br>
<button type="button" (click)="loadMoreEmployee()">Load More Data</button>

==> app.component.ts

employee = [
    {
      name: 'Ram',
      age: 25,
      email: 'ram123@gmail.com'
    },
    {
      name: 'Amit',
      age: 20,
      email: 'amit@gmail.com'
    },
    {
      name: 'Rahul',
      age: 23,
      email: 'rahul45678@gmail.com'
    }
  ];

  loadMoreEmployee(): void {
    this.employee = [
      {
        name: 'Ram',
        age: 25,
        email: 'ram123@gmail.com'
      },
      {
        name: 'Amit',
        age: 20,
        email: 'amit@gmail.com'
      },
      {
        name: 'Rahul',
        age: 23,
        email: 'rahul45678@gmail.com'
      },
      {
        name: 'Priya',
        age: 21,
        email: 'priya1234@gmail.com'
      },
      {
        name: 'Susmita',
        age: 19,
        email: 'susmita1998@gmail.com'
      },
      {
        name: 'Monalisha',
        age: 18,
        email: 'monalisha23@gmail.com'
      }
    ];
  }

  getEmployeeMoreData(index: Number, employee: any):string{
    return employee.name;
  }





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
      name: 'Ram',
      age: 25,
      email: 'ram123@gmail.com'
    },
    {
      name: 'Amit',
      age: 20,
      email: 'amit@gmail.com'
    },
    {
      name: 'Rahul',
      age: 23,
      email: 'rahul45678@gmail.com'
    }
  ];

  constructor() { }

  loadMoreEmployee(): void {
    this.employee = [
      {
        name: 'Ram',
        age: 25,
        email: 'ram123@gmail.com'
      },
      {
        name: 'Amit',
        age: 20,
        email: 'amit@gmail.com'
      },
      {
        name: 'Rahul',
        age: 23,
        email: 'rahul45678@gmail.com'
      },
      {
        name: 'Priya',
        age: 21,
        email: 'priya1234@gmail.com'
      },
      {
        name: 'Susmita',
        age: 19,
        email: 'susmita1998@gmail.com'
      },
      {
        name: 'Monalisha',
        age: 18,
        email: 'monalisha23@gmail.com'
      }
    ];
  }

  getEmployeeMoreData(index: Number, employee: any):string{
    return employee.name;
  }

}
