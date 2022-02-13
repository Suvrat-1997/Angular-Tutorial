import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/*

                          Reactive Forms in Angular

Angular provides two ways for handling user input through form.

i) Template Driven Form:

In a template-driven approch, most of the logic is driven from the template.
Template-driven forms make use of the "Formsmodule"

ii) Reactive Forms (Model driven form):

The logic exist mainly in the component or typescript code.
Reactive forms are based on "ReactiveFormsModule"

==> import {FormsModule, ReactiveFormsModule} from '@angular/forms';

imports:[
  FormsModule,
  ReactiveFormsModule
]

Find the bellow classes where we can use validation based on state change:

i) ng-touched: Controls visit state
ii) ng-untouched: Controls not visit state
iii) ng-dirty: Controls value has been changed
iv) ng-pristine: Controls value have not been changed
v) ng-valid: Controls values are valid
vi) ng-invalid: Controls values are invalid


==> app.module.ts

import {ReactiveFormsModule} from '@angular/forms';

imports:[
  ReactiveFormsModule
]



==> app.component.ts

import { FormGroup, FormControl, Validators } from '@angular/forms';

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  getValue(val: any){
    console.log(val);
    let name = val.username;
    let age = val.age;
    let salary = val.salary;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
    this.userForm.reset();
  }


==> app.component.html

<form [formGroup]="userForm" (ngSubmit)="getValue(userForm.value)">
    <input type="text" placeholder="Enter Name..." formControlName="username"> <br>
    <input type="text" placeholder="Enter Age..." formControlName="age"> <br><br>
    <input type="text" placeholder="Enter Salary..." formControlName="salary"> <br>
    <input type="submit" [disabled]="!userForm.valid">
</form>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });
  
  constructor() {}

  getValue(val: any){
    console.log(val);
    let name = val.username;
    let age = val.age;
    let salary = val.salary;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
    this.userForm.reset();
  }


}
