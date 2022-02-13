import { Component } from '@angular/core';
import { UserService } from './services/user.service';

/*

                          Component level Service in Angular

Services are a great way to share information among classes that don't know each other.

==> ng g c services/user

==> user.services.ts


@Injectable({
  providedIn: 'root'
}) 

@Injectable() // before angular 6

  getData(){
    return {
      name: "Pradeep",
      email: "pradeep1234@gmail.com",
      phone: 8984572101
    }
  }

==> app.component.ts

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService] // Component Level Service
})

userDetails: any;

constructor(private user: UserService) { 
    let userData = this.user.getData();
    console.log(userData);
    this.userDetails = userData;
  }

==> app. component.html

<h3>Name: {{userDetails.name}}</h3>
<h3>Email: {{userDetails.email}}</h3>
<h3>Phone: {{userDetails.phone}}</h3>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  userDetails: any;

  constructor(private user: UserService) {
    let userData = this.user.getData();
    console.log(userData);
    this.userDetails = userData;
  }




}
