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

      (event)="event handler"
DOM <====================== Component


4. 2-way Binding

        [(ngModel)]
DOM <======================> Component

In interpollation and property binding data flows from the models to the views.

==> app.component.html

<p>{{title}}</p>
<p>Learn {{course}} with HIT</p> <br>
<img src="{{image}}" alt="">

==> app.component.ts

title = 'AngularProject';

  course = 'Be a Developer';
  image = 'assets/img.png';


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

  course = 'Be a Developer';
  image = 'assets/img.png';

  ngOnInit(): void {
  }

}


