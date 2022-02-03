import { Component } from '@angular/core';


/*
                                Interpollation in Angular
==> app.component.html

<p>Name: {{myObj.name}}</p>
<p>Age: {{myObj.age}}</p>

==> app.component.ts

myObj = {
    name: 'Sumon',
    age: 25
  };

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

  myObj = {
    name: 'Sumon',
    age: 25
  };

}
