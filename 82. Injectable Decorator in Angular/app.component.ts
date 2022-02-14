import { Component } from '@angular/core';
import { UserService } from './services/user.service';

/*

                          Injectable Decorator in Angular

Services are a great way to share information among classes that don't know each other.

==> ng g c services/user
==> ng g c services/user-address

==> user-address.service.ts

getUserAddress(){
    return {
      city: 'Delhi',
      country: 'India',
      pin_code: 70015247
    }
  }

==> user.services.ts

import { UserAddressService } from './user-address.service';

@Injectable({
  providedIn: 'root'
}) 

@Injectable() // before angular 6

userAddr: any = '';

  constructor(private _userAddressService: UserAddressService) {
    this.userAddr = this._userAddressService.getUserAddress()
   }

  getData(){
    return {
      name: "Pradeep",
      email: "pradeep1234@gmail.com",
      phone: 8984572101,
      address: this.userAddr
    }
  }

Suppose we have single service, if we don't specify @Inject() method, service can be works.
But when we have import one service to another service or more than one services then must need  to @Inject() method.

==> app.module.ts

import { UserAddressService } from './services/user-address.service';

providers: [UserAddressService] // Module Level Service

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
<h3>City: {{userDetails.address.city}}</h3>
<h3>Country: {{userDetails.address.country}}</h3>
<h3>Pin Code: {{userDetails.address.pin_code}}</h3>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  userDetails: any;

  constructor(private _userService: UserService) {
    let userData = this._userService.getData();
    console.log(userData);
    this.userDetails = userData;
  }




}
