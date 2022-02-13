import { Component } from '@angular/core';

/*

                          Forms in Angular

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


==> app.module.ts

import {FormsModule} from '@angular/forms';

imports:[
  FormsModule
]



==> app.component.ts

  getValue(val: any){
    console.log(val);
    let userData = val.controls;
    console.log(userData);
    let name = userData.username.value;
    let age = userData.age.value;
    let salary = userData.salary.value;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
  }


==> app.component.html

<form #contactForm="ngForm" (ngSubmit)="getValue(contactForm)">
    <input type="text" name="username" ngModel required placeholder="Enter Name..."> <br><br>
    <input type="text" name="age" ngModel required placeholder="Enter Age..."> <br><br>
    <input type="text" name="salary" ngModel required placeholder="Enter Salary..."> <br><br>
    <input type="submit">
</form>





*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  getValue(val: any){
    console.log(val);
    let userData = val.controls;
    console.log(userData);
    let name = userData.username.value;
    let age = userData.age.value;
    let salary = userData.salary.value;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
  }


}
