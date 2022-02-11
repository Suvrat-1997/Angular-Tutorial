import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';


/*
                                  API Call in Angular

API(Application Programming Interface)

Service are most used to data share between one or more component.

Service are not depend on module or component.

Install JSON Server:

==> npm install -g json-server

Start JSON Server:

==> json-server --watch db.json

automatically create db.json file on your project

==> db.json

{
  "userList": [
    {
      "id": 100,
      "name": "Shuvasis",
      "age": "24",
      "address": "PKU"
    },
    {
      "id": 101,
      "name": "Saheb",
      "age": "23",
      "address": "BCK"
    },
    {
      "id": 102,
      "name": "Dhiren",
      "age": "21",
      "address": "MDN"
    }
  ]
}

Note: Go to Browser and hit "localhost:3000" url

==> app.module.ts

import { HttpClientModule } from '@angular/common/http';

imports: [
    HttpClientModule
  ],


==> ng g s service/user-data

CREATE src/app/service/user-data.service.spec.ts
CREATE src/app/service/user-data.service.ts

==> user-data.service.ts

import { HttpClient } from '@angular/common/http';

constructor( private http: HttpClient) { }

getData(){
    let apiUrl = 'http://localhost:3000/userList';
    return this.http.get(apiUrl);
  }

==> app.component.ts

import { UserDataService } from './service/user-data.service';

profile!: any;

  constructor(private _service: UserDataService) {
    this._service.getData().subscribe(x => {
      console.warn(x);
      this.profile = x;
    })
  }

==> app.component.html

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let prf of profile; let i=index;">
            <td>{{prf.id}}</td>
            <td>{{prf.name}}</td>
            <td>{{prf.age}}</td>
            <td>{{prf.address}}</td>
        </tr>
    </tbody>
</table>

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

  profile!: any;

  constructor(private _service: UserDataService) {
    this._service.getData().subscribe(x => {
      console.warn(x);
      this.profile = x;
    })
  }

}


