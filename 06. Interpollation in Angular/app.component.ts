import { Component } from '@angular/core';


/*
                                Interpollation in Angular
==> app.component.html

{{title}}

==> app.component.ts

title = 'AngularProject';

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
}
