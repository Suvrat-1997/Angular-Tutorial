import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( private http: HttpClient) { }

  getData(){
    let apiUrl = 'http://localhost:3000/userList';
    return this.http.get(apiUrl);
  }

}
