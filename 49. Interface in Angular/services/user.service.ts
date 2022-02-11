import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData() {
    const userList: Customer = {
      name: 'Sumit',
      age: 25,
      mobile: '9875412035',
      addr: 'Noida, Delhi',
      salary: 25000
    };
    return userList;
  }
}
