import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';


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

import { ReactiveFormsModule } from '@angular/forms';

  imports: [
    ReactiveFormsModule
  ],


== app.component.ts

import { FormGroup, FormControl, Validators  } from '@angular/forms';

loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    addr: new FormControl('Delhi')
  })

  get username(){
    return this.loginForm.get('name');
  }

  getValue(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

==> app.component.html

<form [formGroup]="loginForm" (ngSubmit)="getValue()">
    <input type="text" placeholder="Enter name..." formControlName="name"> <br> 
    <span class="red-error" *ngIf="username?.invalid && username?.touched">**Name is required</span> <br>
    <input type="text" name="age" placeholder="Enter age..." formControlName="age"> <br> <br>
    <input type="text" name="mobile" placeholder="Enter mobile number..." formControlName="mobile"> <br>
    <span class="red-error" *ngIf="loginForm.get('mobile')?.invalid && loginForm.get('mobile')?.touched">**Phone No. is required</span> <br>
    <input type="text" name="address" placeholder="Enter address..." formControlName="addr"> <br> <br>
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

  constructor() { }

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    addr: new FormControl('Delhi')
  })

  get username(){
    return this.loginForm.get('name');
  }

  getValue(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }


}


