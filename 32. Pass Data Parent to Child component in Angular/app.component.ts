import { Component } from '@angular/core';


/*
                            Pass Data Parent to Child component in Angular

==> ng g c users



==> app.component.html

<app-users [child]="parent"></app-users>

==> app.component.ts

parent = 'Parent Component';

==> users.component.ts

import { Input } from '@angular/core';

@Input() child: any

==> users.component.html

<p>{{child}}</p>


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
  parent = 'Parent Component';
}


