import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

const customerData:Customer[]=[
  { "id": 1, "name": "Shuvasis", "email": "shuvasis1234@gmail.com", "phone": 7845123698 },
  { "id": 2, "name": "Rahul", "email": "rahul34@gmail.com", "phone": 9856214035 },
  { "id": 3, "name": "Sumon", "email": "sumon4@gmail.com", "phone": 8965210475 },
  { "id": 4, "name": "Ram", "email": "mar234@gmail.com", "phone": 8745120365 },
  { "id": 5, "name": "Priya", "email": "priya12@gmail.com", "phone": 9800456820 },
  { "id": 6, "name": "Pradeep", "email": "pra4@gmail.com", "phone": 8001606589 },
  { "id": 7, "name": "Rohit", "email": "rohit34@gmail.com", "phone": 7501458730 },
];

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getCustomerData(){
    return customerData;
  }
}
