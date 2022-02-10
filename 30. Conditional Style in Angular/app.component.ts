import { Component } from '@angular/core';


/*
                            Conditional Style in Angular

==> app.component.html

<h3 [style.color]="colr ? 'red' : 'green' ">Header 1</h3>

==> app.component.ts

colr = true;
// colr = false;

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
  colr = true;
  // colr = false;

}


