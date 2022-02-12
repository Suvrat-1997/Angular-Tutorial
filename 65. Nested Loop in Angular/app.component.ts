import { Component } from '@angular/core';

/*

                                      Nested loop in Angular

  
==> app.component.html

<table border="1">
  <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Degree</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let emp of employee; let i=index;">
      <td>{{i+1}}</td>
      <td>{{emp.name}}</td>
      <td>{{emp.age}}</td>
      <td>{{emp.email}}</td>
      <td>
        <ul *ngFor="let deg of emp.degree;">
          <li>{{deg}}</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

==> app.component.ts

  employee = [
    {
      name: 'Ram',
      age: 25,
      email: 'ram123@gmail.com',
      degree: ['BCA', 'MCA', 'MBA']
    },
    {
      name: 'Amit',
      age: 20,
      email: 'amit@gmail.com',
      degree: ['BCA', 'MBA']
    },
    {
      name: 'Rahul',
      age: 23,
      email: 'rahul45678@gmail.com',
      degree: ['BCA', 'MCA', 'MBA', 'PHD']
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
      name: 'Ram',
      age: 25,
      email: 'ram123@gmail.com',
      degree: ['BCA', 'MCA', 'MBA']
    },
    {
      name: 'Amit',
      age: 20,
      email: 'amit@gmail.com',
      degree: ['BCA', 'MBA']
    },
    {
      name: 'Rahul',
      age: 23,
      email: 'rahul45678@gmail.com',
      degree: ['BCA', 'MCA', 'MBA', 'PHD']
    }
  ];


}
