import { Injectable } from '@angular/core';
import { UserAddressService } from './user-address.service';

@Injectable({
  providedIn: 'root'
}) 
/*

Suppose we have single service, if we don't specify @Inject() method, service can be works.
But when we have import one service to another service or more than one services then must need  to @Inject() method.

*/
export class UserService {
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

}
