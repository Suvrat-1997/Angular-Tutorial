import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*

Suppose we have single service, if we don't specify @Inject() method, service can be works.
But when we have import one service to another service or more than one services then must need  to @Inject() method.

*/
export class UserAddressService {

  constructor() { }

  getUserAddress(){
    return {
      city: 'Delhi',
      country: 'India',
      pin_code: 70015247
    }
  }
}
