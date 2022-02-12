import { Component } from '@angular/core';

/*

                                      Parameterized Pipe in Angular

We can pass any number of parameter

Syntax:

{{data | pipeName: para1 : para2 : para3.....}}

  
==> app.component.html

<p>{{today | date: 'mediumDate'}}</p>
<p>{{today | date: 'fullDate'}}</p>
<p>{{today | date: 'shortDate'}}</p>

==> app.component.ts

today = Date.now();



*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  today = Date.now();

}
