import { Component, OnInit } from '@angular/core';


/*
                                Data Binding in Angular

Data Binding is the connection brige between view and the business logic(view Model) of the application.

                  communication
Business Logic  <================>  Template/View
(Typescript)                        (HTML)

Types of Data Binding:

Data Binding plays an important role in communication between a template and its component

1. Interpollation

          {{value}}
DOM <=================== Component

2. Property Binding

      [property]="value"
DOM <====================== Component


3. Event Binding

Events Binding features lts you listen to events such as mouse movements, keystrokes, click etc.

      (event)="event handler"
DOM <====================== Component


4. 2-way Binding

        [(ngModel)]
DOM <======================> Component

In interpollation and property binding data flows from the models to the views.

==> app.component.html

<button type="button" (click)="getName()">Getting Name</button>

==> app.component.ts

  getName(){
    alert('Your Name: Rahul');
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

  getName(){
    alert('Your Name: Rahul');
  }

}


