import { Component } from '@angular/core';


/*
                                  Forms in Angular

Two types of Forms in Angular have

i) Reactive Form:

Reactive Forms control data in component.ts file

ii) Template Driven Form:

Template Driven Form control and handle data in component.html file
Easy to use and handle. It is used to when need to basic form.
It is very simple.

How data flow works?

Forms ==> ts File ==> service(API) ==> server

==> app.module.ts

import { FormsModule } from '@angular/forms';

  imports: [
    FormsModule
  ],


== app.component.ts

getUser(val: any){
    console.log(val);
  }

==> app.component.html

<form #userForm="ngForm" (ngSubmit)="getUser(userForm.value)">
    <input type="text" name="userName" placeholder="Enter name..." ngModel> <br> <br>
    <input type="text" name="age" placeholder="Enter age..." ngModel> <br> <br>
    <input type="text" name="mobile" placeholder="Enter mobile number..." ngModel> <br> <br>
    <input type="text" name="address" placeholder="Enter address..." ngModel> <br> <br>
    <input type="submit">
</form>

// When create template driven form, name attribute must be needed. ngModel is used to bind the value.
// here ngForm is a directive and (ngSubmit) is a event

==> index.html

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
  title = 'AngularProject';

  constructor() { }

  getUser(val: any) {
    console.log(val);
  }


}


