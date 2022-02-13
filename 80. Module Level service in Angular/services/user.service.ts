import { Injectable } from '@angular/core';
/*
@Injectable({
  providedIn: 'root'
}) */

@Injectable() // before angular 6
export class UserService {

  constructor() { }

  getData(){
    return {
      name: "Pradeep",
      email: "pradeep1234@gmail.com",
      phone: 8984572101
    }
  }

}
