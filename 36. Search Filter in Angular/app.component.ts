import { Component } from '@angular/core';


/*
                            Search Filter in Angular
                            
==> npm i ng2-search-filter
==> npm uninstall ng2-search-filter

==> app.module.ts

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

imports: [
    Ng2SearchPipeModule,
    FormsModule
  ],

==> app.component.html

<input type="search" placeholder="Search" [(ngModel)]="filterTerm">

<table border="1">
    <thead>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let usr of userList | filter: filterTerm; let i = index;">
            <td>{{i+1}}</td>
            <td>{{usr.name}}</td>
            <td>{{usr.age}}</td>
            <td>{{usr.addr}}</td>
        </tr>
    </tbody>
</table>

==> app.component.ts

filterTerm: any;

userList = [
    {
      name: 'Amit',
      age: 21,
      addr: 'BCK'
    },
    {
      name: 'Rahul',
      age: 19,
      addr: 'MDN'
    },
    {
      name: 'Ram',
      age: 18,
      addr: 'KGP'
    },
    {
      name: 'Asit',
      age: 25,
      addr: 'PKU'
    },
    {
      name: 'Bakul',
      age: 22,
      addr: 'BCK'
    },
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
  filterTerm: any;

  userList = [
    {
      name: 'Amit',
      age: 21,
      addr: 'BCK'
    },
    {
      name: 'Rahul',
      age: 19,
      addr: 'MDN'
    },
    {
      name: 'Ram',
      age: 18,
      addr: 'KGP'
    },
    {
      name: 'Asit',
      age: 25,
      addr: 'PKU'
    },
    {
      name: 'Bakul',
      age: 22,
      addr: 'BCK'
    },
  ];
  
}


