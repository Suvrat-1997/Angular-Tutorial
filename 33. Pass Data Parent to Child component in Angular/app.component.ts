import { Component } from '@angular/core';


/*
                            Pass Data Parent to Child component in Angular

==> ng g c users



==> app.component.html

<app-users [child]="parent"></app-users>

==> app.component.ts

parent = {
    name: 'Bruce',
    age: 25
  };

==> users.component.ts

import { Input } from '@angular/core';

@Input() child: any

ngOnInit(): void {
    console.log(this.child);
  }

==> users.component.html

<p>{{child.name}}</p>
<p>{{child.age}}</p>


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
  parent = {
    name: 'Bruce',
    age: 25
  };
}


