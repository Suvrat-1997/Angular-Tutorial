import { Component } from '@angular/core';


/*
                                *ngFor Directive in Angular
==> app.component.html

<ul>
    <li *ngFor="let arr of myArray;">{{arr}}</li>
</ul>

    <p>{{myArray}}</p>
    <p>{{myArray[0]}}</p>
    <p>{{myArray[3]}}</p>

==> app.component.ts

myArray = ['Subrata', 'Bhabesh', 'Saheb', 'Shuvasis', 'Dhiren', 'Sourav', 'Jhilik'];

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

  myArray = ['Subrata', 'Bhabesh', 'Saheb', 'Shuvasis', 'Dhiren', 'Sourav', 'Jhilik'];

}
