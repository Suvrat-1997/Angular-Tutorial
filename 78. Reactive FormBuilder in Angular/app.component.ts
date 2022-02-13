import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*

                          Reactive FormBuilder and Validators in Angular

FormBuilder service to generate controls.

Creating form control instances manually can become repetative when dealing with multiple form.


==> app.module.ts

import {ReactiveFormsModule} from '@angular/forms';

imports:[
  ReactiveFormsModule
]



==> app.component.ts

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  userForm!: FormGroup;
  // userForm1!: FormGroup;
  // userForm2!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['25000', Validators.required]
    });
  }


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
    <input type="text" placeholder="Enter Name..." formControlName="username"> <br> <br>
    <input type="text" placeholder="Enter Age..." formControlName="age"> <br><br>
    <input type="text" placeholder="Enter Salary..." formControlName="salary"> <br> <br>
    <input type="submit" [disabled]="!userForm.valid">
</form>


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm!: FormGroup;
  // userForm1!: FormGroup;
  // userForm2!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['25000', Validators.required]
    });
  }

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
