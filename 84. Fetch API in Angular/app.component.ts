import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

/*

                          Fetch Data From an API in Angular

API(Application Programming Interface) using HttpClient and HttpClientModule

==> ng g c services/user-data

==> app.module.ts

import { HttpClientModule } from '@angular/common/http';

imports: [
    HttpClientModule
  ],

==> user-data.service.ts

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.apiUrl);
  }

==> app.component.ts

userProfile: any;

  constructor(private _userService: UserDataService) {
    this._userService.getData().subscribe(
      (result) => {
        console.log(result);
        this.userProfile = result;
      }
    )
  }


==> app.component.html

<table border="1">
    <thead>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let usr of userProfile; let i=index;">
            <td>{{i+1}}</td>
            <td>{{usr.name}}</td>
            <td>{{usr.username}}</td>
            <td>{{usr.email}}</td>
            <td>{{usr.phone}}</td>
            <td>{{usr.website}}</td>
            <td>{{usr.company.name}}</td>
            <td>{{usr.address.street}}, {{usr.address.city}}, {{usr.address.zipcode}}</td>
        </tr>
    </tbody>
</table>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  userProfile: any;

  constructor(private _userService: UserDataService) {
    this._userService.getData().subscribe(
      (result) => {
        console.log(result);
        this.userProfile = result;
      }
    )
  }

}
