import { Component } from '@angular/core';

/*

                                      Chaining Pipe in Angular
  
==> app.component.html

<p>{{today | date: 'fullDate' | uppercase}}</p>

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
