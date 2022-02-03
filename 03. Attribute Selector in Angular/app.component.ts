import { Component } from '@angular/core';


/*
                                      Angular Attribute Selector

==> user.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-user]', // attribute selector
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

==> app.component.html

<app-user></app-user> // Error

<div class="app-user"></div> // Error

<div app-user></div> 

==>index.html

<body>
  <app-root></app-root>
</body>

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
