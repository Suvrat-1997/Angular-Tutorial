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

  getValue(){
    console.log(this.loginForm.value);
  }

==> app.component.html

<form [formGroup]="loginForm" (ngSubmit)="getValue()">
    <input type="text" name="userName" placeholder="Enter name..." formControlName="name"> <br> <br>
    <input type="text" name="age" placeholder="Enter age..." formControlName="age"> <br> <br>
    <input type="text" name="mobile" placeholder="Enter mobile number..." formControlName="mobile"> <br> <br>
    <input type="text" name="address" placeholder="Enter address..." formControlName="addr"> <br> <br>
    <input type="submit">
</form>

==> app.component.css

input.ng-invalid{
    border: 2px solid red;
}
input.ng-valid{
    border: 2px solid green;
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

  getValue(){
    console.log(this.loginForm.value);
  }


}


