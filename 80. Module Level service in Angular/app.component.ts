import { Component } from '@angular/core';
import { UserService } from './services/user.service';

/*

                          Module level Service in Angular

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


==> app.module.ts

import { UserService } from './services/user.service';

providers: [UserService]

==> app.component.ts

import { UserService } from './services/user.service';

constructor(private user: UserService) { 
    let userData = this.user.getData();
    console.log(userData);
  }


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private user: UserService) {
    let userData = this.user.getData();
    console.log(userData);
  }




}
