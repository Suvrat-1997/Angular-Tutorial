import { Component } from '@angular/core';


/*
                            Pass Data Parent to Child component in Angular

==> ng g c users



==> app.component.html

<div *ngFor="let dta of parent">
    <app-users [child]="dta"></app-users>
</div>

==> app.component.ts

parent = [
    {
      name: 'Bruce',
      age: 25,
      addr: 'BCK'
    },
    {
      name: 'Rohit',
      age: 22,
      addr: 'MDN'
    },
    {
      name: 'Sumit',
      age: 20,
      addr: 'KGP'
    }
  ];

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

  parent = [
    {
      name: 'Bruce',
      age: 25,
      addr: 'BCK'
    },
    {
      name: 'Rohit',
      age: 22,
      addr: 'MDN'
    },
    {
      name: 'Sumit',
      age: 20,
      addr: 'KGP'
    }
  ];
  
}


