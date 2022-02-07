import { Component } from '@angular/core';

/*

Install bootstrap on your project

==> npm i bootstrap --save
==> ng add @ng-bootstrap/ng-bootstrap (don't need to edit file manually)

Install jQuery on your project

==> npm i jquery --save

Checking bootstrap and jquery install properly or not

==> package.json

"dependencies": {
    "bootstrap": "^4.6.0",
    "jquery": "^3.6.0",
  },
  
Add bootstrap and jquery in your Angular Project

==> angular.json

"build" : {
  "styles" : [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css" // bootstrap
  ],

  "script" : [
    "./node_modules/bootstrap/dist/js/bootstrap.min.js", // javascript
    "./node_modules/jquery/dist/jquery.js" // jquery
  ]

}

==> app.component.ts

title = 'Me';

  constructor(){
    setTimeout(() => {
      this.title = "Changed title";   // without reload the page
    }, 2000);   // after 2000 milisecond
  }

==> app.component.html

{{title}}


*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Me';

  constructor(){
    setTimeout(() => {
      this.title = "Changed title";   // without reload the page
    }, 2000);
  }
}
