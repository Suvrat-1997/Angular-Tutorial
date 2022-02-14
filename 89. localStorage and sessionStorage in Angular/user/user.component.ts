import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('userName', 'Rahul Maity');
    sessionStorage.setItem('userAddress', 'PKU');
    console.log('User: ',localStorage.getItem('userName'));
    localStorage.removeItem('userName');
    console.log('User Address: ',sessionStorage.getItem('userAddress'));
    
  }

}
