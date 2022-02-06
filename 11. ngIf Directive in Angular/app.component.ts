import { Component, OnInit } from '@angular/core';


/*
                                *ngIf Directive in Angular

==> 
==> app.component.html


<div *ngIf="myArr else notArry">
    <h4>Array is Present</h4>
</div>

<ng-template #notArry>
    <h4>Array is not Present</h4>
</ng-template>

<!-- <ul>
        <li *ngFor="let my of myArr;">{{my}}</li>
</ul> -->

==> app.component.ts

// myArr = ['a', 'b', 'c'];
  myArr:boolean = false;


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

  // myArr = ['a', 'b', 'c'];
  myArr:boolean = false;

  ngOnInit(): void {
  }

}


