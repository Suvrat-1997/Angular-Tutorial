import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*

                          Reactive Form Validators in Angular

FormBuilder service to generate controls.

Creating form control instances manually can become repetative when dealing with multiple form.

i) get()
ii) setValue()
iii) patchValue()
iv) reset() 


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
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['25000', Validators.required]
    });
    // When add more than one validators we have to use array
  }

  getValue(){
    let name = this.userForm.get('username')?.value;
    let email = this.userForm.get('email')?.value;
    let salary = this.userForm.get('salary')?.value;
    console.warn('Name: ',name);
    console.warn('Email: ',email);
    console.warn('Salary: ',salary);
    this.userForm.reset();
  }

  valueSet(){
    this.userForm.setValue({
      "username": "Pradeep",
      "email": "xyz@gmial.com",
      "salary": 35000
    });
  }

setValue() and patchValue() both are same but one little thing are difference.

suppose we have 3 input field our form, but we have set 2 input field, in this situation setValue() will be return error.
This problem can be overcome using patchValue() method


==> app.component.html

<form [formGroup]="userForm">
    <input type="text" placeholder="Enter Name..." formControlName="username"> <br> <br>
    <input type="email" placeholder="Enter Email..." formControlName="email"> <br><br>
    <input type="text" placeholder="Enter Salary..." formControlName="salary"> <br> <br>
    <input type="submit" (click)="getValue()" [disabled]="!userForm.valid"> &nbsp; &nbsp;
    <input type="submit" value="Set Value" (click)="valueSet()">
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
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['25000', Validators.required]
    });
    // When add more than one validators we have to use array
  }

  getValue(){
    let name = this.userForm.get('username')?.value;
    let email = this.userForm.get('email')?.value;
    let salary = this.userForm.get('salary')?.value;
    console.warn('Name: ',name);
    console.warn('Email: ',email);
    console.warn('Salary: ',salary);
    this.userForm.reset();
  }

  valueSet(){
    this.userForm.setValue({
      "username": "Pradeep",
      "email": "xyz@gmial.com",
      "salary": 35000
    });
  }


}
