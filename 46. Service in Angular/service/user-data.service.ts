import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData(){
    return {
      id: 101,
      name: 'Anil',
      age: 30,
      addr: 'Noida'
    }
  }
  
}
