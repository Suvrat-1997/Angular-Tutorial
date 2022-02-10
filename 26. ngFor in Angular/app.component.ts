import { Component, OnInit } from '@angular/core';


/*
                            *ngFor in Angular


==> app.component.html

<h4 *ngFor="let item of _data">
    {{item}}
</h4>

<h4 *ngFor="let prf of profile;" style="background-color: cadetblue;">
    {{prf.name}}
    {{prf.age}}
    {{prf.addr}}
</h4>

<table>
    <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
    </tr>
    <tr *ngFor="let pr of profile;">
        <td>{{pr.name}}</td>
        <td>{{pr.age}}</td>
        <td>{{pr.addr}}</td>
    </tr>
</table>

==> app.component.ts

  _data = ['Anil', 'Shuvasis', 'Bidesh', 'Rahul'];

  profile = [
    {
      name: 'Amit',
      age: 21,
      addr: 'MDN'
    },
    {
      name: 'Sumit',
      age: 25,
      addr: 'BCK'
    },
    {
      name: 'Asit',
      age: 20,
      addr: 'PKU'
    },
    {
      name: 'Rohit',
      age: 19,
      addr: 'KGP'
    }
  ];

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

  _data = ['Anil', 'Shuvasis', 'Bidesh', 'Rahul'];

  profile = [
    {
      name: 'Amit',
      age: 21,
      addr: 'MDN'
    },
    {
      name: 'Sumit',
      age: 25,
      addr: 'BCK'
    },
    {
      name: 'Asit',
      age: 20,
      addr: 'PKU'
    },
    {
      name: 'Rohit',
      age: 19,
      addr: 'KGP'
    }
  ];

  ngOnInit(): void {
  }

}


