import { Component, OnInit } from '@angular/core';


/*
                            Template Driven Form in Angular


When we talking about template driven form, name attribute must be need and ngModel is used to bind the data.


==> app.module.ts

import { FormsModule } from '@angular/forms';

imports: [
    FormsModule
  ],

==> app.component.html

<form #simpleForm="ngForm" (ngSubmit)="getUserValue(simpleForm.value)">
    <input type="text" name="userName" ngModel placeholder="Enter Name..."> <br>
    <input type="text" name="age" ngModel placeholder="Enter Age..."> <br>
    <input type="text" name="mobile" ngModel placeholder="Enter Mobile..."> <br>
    <input type="submit">
</form>

==> app.component.ts

getUserValue(val: any){
    console.warn(val);
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

  ngOnInit(): void {
  }

  getUserValue(val: any){
    console.warn(val);
  }

}


