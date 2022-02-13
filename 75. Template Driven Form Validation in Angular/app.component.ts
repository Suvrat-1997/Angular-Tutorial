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

Find the bellow classes where we can use validation based on state change:

i) ng-touched: Controls visit state
ii) ng-untouched: Controls not visit state
iii) ng-dirty: Controls value has been changed
iv) ng-pristine: Controls value have not been changed
v) ng-valid: Controls values are valid
vi) ng-invalid: Controls values are invalid


==> app.module.ts

import {FormsModule} from '@angular/forms';

imports:[
  FormsModule
]



==> app.component.ts

  getValue(val: any){
    console.log(val);
    let name = val.username;
    let age = val.age;
    let salary = val.salary;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
  }


==> app.component.html

<form #contactForm="ngForm" (ngSubmit)="getValue(contactForm.value)">
    <input type="text" name="username" ngModel required placeholder="Enter Name..."> <br><br>
    <input type="text" name="age" ngModel required placeholder="Enter Age..."> <br><br>
    <input type="text" name="salary" ngModel required placeholder="Enter Salary..."> <br><br>
    <input type="submit" (click)="contactForm.reset()" [disabled]="contactForm.invalid">
</form>

==> app.component.css

input.ng-touched.ng-invalid{
    border: 2px solid red;
}
input.ng-touched.ng-valid{
    border: 2px solid green;
}





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
    let name = val.username;
    let age = val.age;
    let salary = val.salary;
    console.warn('Name: ',name);
    console.warn('Age: ',age);
    console.warn('Salary: ',salary);
  }


}
