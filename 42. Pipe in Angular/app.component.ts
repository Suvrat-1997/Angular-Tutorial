import { Component } from '@angular/core';


/*
                          Pipe in Angular

It is used to output transform


Syntax:

{{variable | operation}}

operations:

i) string(uppercase, lowercase, titlecase)
ii) date
iii) slice
iv) currency


==> app.component.html

<h2>{{name | uppercase}}</h2>
<h2>{{name | lowercase}}</h2>
<h2>{{name | titlecase}}</h2>
<h2>{{today | date}}</h2>
<h2>{{today | date: 'fullDate'}}</h2>
<h2>{{value | currency}}</h2>
<h2>{{value | currency: 'USD'}}</h2>
<h2>{{value | currency: 'INR'}}</h2>


==> app.component.ts

  name = 'Amit Maity';
  today = Date.now();
  value = 500;

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
  name = 'Amit Maity';
  today = Date.now();
  value = 500;

}


