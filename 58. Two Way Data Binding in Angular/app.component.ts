import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';


/*
                                              Two-way Data Binding in Angular

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

import { ReactiveFormsModule } from '@angular/forms';

  imports: [
    ReactiveFormsModule
  ],


== app.component.ts

customerData = {
    name: "Rahul",
    age: 21,
    mobile: '',
    address: 'Delhi'
  }


  getValue(val:any){
    console.log(val);
  }

==> app.component.html

<form #loginForm="ngForm" (ngSubmit)="getValue(loginForm.value)">
    <input type="text" name="userName" placeholder="Enter name..." [ngModel]="customerData['name']" #name="ngModel" required> <br> 
    <span class="red-error" *ngIf="name?.invalid && name?.touched">**Name is required</span> <br>
    <input type="text" name="age" placeholder="Enter age..." [ngModel]="customerData['age']"> <br> <br>
    <input type="text" name="mobile" placeholder="Enter mobile number..." [ngModel]="customerData['mobile']" #phone="ngModel" required> <br>
    <span class="red-error" *ngIf="phone?.invalid && phone?.touched">**Phone No. is required</span> <br>
    <input type="text" name="address" placeholder="Enter address..." [ngModel]="customerData['address']"> <br> <br>
    <input type="submit">
</form>

==> app.component.css

.red-error{
    color: red;
}

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

  customerData = {
    name: "Rahul",
    age: 21,
    mobile: '',
    address: 'Delhi'
  }

  constructor() { }

  getValue(val:any){
    console.log(val);
  }


}


